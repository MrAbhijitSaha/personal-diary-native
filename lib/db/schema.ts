import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const diaryEntries = sqliteTable("diary_entries", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	title: text("title").notNull(),
	content: text("content").notNull(),

	// Future-proof fields: We store the path to the file, not the file itself
	imageUri: text("image_uri"),
	videoUri: text("video_uri"),

	// Store date as a timestamp (number)
	createdAt: integer("created_at", { mode: "timestamp" })
		.notNull()
		.$defaultFn(() => new Date()),
});
