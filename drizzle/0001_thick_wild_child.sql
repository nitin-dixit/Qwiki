ALTER TABLE "articles" DROP CONSTRAINT "articles_author_id_users_sync_id_fk";
--> statement-breakpoint
ALTER TABLE "articles" DROP COLUMN "author_id";