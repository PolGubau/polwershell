import Dexie, { type EntityTable } from "dexie";

interface Message {
	id: number;
	text: string;
	sendAt: Date;
	sendBy: string;
}

interface ConsoleTab {
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


// Export the database
export type { ConsoleTab };

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
