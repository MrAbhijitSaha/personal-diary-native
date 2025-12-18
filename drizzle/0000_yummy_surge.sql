CREATE TABLE `diary_entries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`image_uri` text,
	`video_uri` text,
	`created_at` integer NOT NULL
);
