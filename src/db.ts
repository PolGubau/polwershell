import Dexie, { type EntityTable } from "dexie";

export interface Message {
	id: number;
	text: string;
	sendAt: Date;
	sendBy: string;
}

export interface ConsoleTab {
	id: number;
	name: string;
	messages: Message[];
}

export const db = new Dexie("consoleTabsDB") as Dexie & {
	consoleTab: EntityTable<ConsoleTab, "id">;
};

// Schema declaration:
db.version(1).stores({
	consoleTab: "++id, name, messages",
});

export const addNewTab = async (name: string) => {
	const tab = await db.consoleTab.add({ name, messages: [] });
	return tab;
};

export const addMessageToTab = async (
	tabId: number,
	messageText: Message["text"],
) => {
	const tab = await db.consoleTab.get(tabId);
	if (!tab) {
		throw new Error(`Tab with id ${tabId} not found`);
	}
	const message: Message = {
		id: tab.messages.length + 1,
		text: messageText,
		sendAt: new Date(),
		sendBy: "User",
	};
	tab.messages.push(message);
	await db.consoleTab.update(tabId, tab);
	return message;
};

export const deleteTab = async (tabId: number) => {
	await db.consoleTab.delete(tabId);
};

// const dummyTabs: ConsoleTab[] = [
// 	{
// 		id: 1,
// 		name: "Tab 1",
// 		messages: [
// 			{
// 				id: 1,
// 				text: "Hello, World!",
// 				sendAt: new Date(),
// 				sendBy: "User",
// 			},
// 		],
// 	},
// 	{
// 		id: 2,
// 		name: "Tab 2",
// 		messages: [
// 			{
// 				id: 1,
// 				text: "Hello, World!",
// 				sendAt: new Date(),
// 				sendBy: "User",
// 			},
// 		],
// 	},
// 	{
// 		id: 3,
// 		name: "Tab 3",
// 		messages: [
// 			{
// 				id: 1,
// 				text: "Hello, World!",
// 				sendAt: new Date(),
// 				sendBy: "User",
// 			},
// 		],
// 	},
// ];

// db.on("populate", (transaction) => {
// 	transaction.table("consoleTab").bulkAdd(dummyTabs);
// });
// db.open();
