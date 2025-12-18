import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import { diaryEntries } from "./schema";

// This creates a file named 'diary.db' on the phone
const expoDb = openDatabaseSync("diary.db");

export const db = drizzle(expoDb);

// Export the schema so we can use it in other files
export * from "./schema";
