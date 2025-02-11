CREATE TABLE "books" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"author" text NOT NULL,
	"year" integer NOT NULL,
	"genres" text[] NOT NULL
);
--> statement-breakpoint
CREATE TABLE "movies" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"year" integer NOT NULL,
	"genres" text[] NOT NULL
);
