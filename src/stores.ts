import { writable } from "svelte/store";
import type { ConsoleTab } from "./db";

export const activeTab = writable<ConsoleTab | null>(null);
