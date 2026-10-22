import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_testimonials_source" AS ENUM('google', 'trustindex', 'direct', 'video');
  CREATE TABLE "pages_blocks_hero_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Pass Your Pediatric Boards With Confidence' NOT NULL,
  	"subheading" varchar DEFAULT 'Thousands of pediatricians (even those who’ve failed multiple times) have passed their board exams with our proven Pediatrics Board Review® system. Whether it’s your first time or your tenth, our resources and strategies help you pass with confidence.',
  	"cta_text" varchar DEFAULT 'Get Started',
  	"cta_url" varchar DEFAULT '#who-do-we-help',
  	"guarantee_text" varchar DEFAULT 'FIRST-TIME PASS GUARANTEE, OR YOUR MONEY BACK!',
  	"speech_bubble" varchar DEFAULT 'What if passing isn’t about what you study, but how you study?',
  	"hero_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_preorder_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"release_date" varchar DEFAULT 'Estimated Release Date: December 15, 2026',
  	"button_text" varchar DEFAULT 'Preorder for $1 ›',
  	"button_url" varchar DEFAULT '/preorder-now',
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_preorder" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Preorder for Only $1 Now & Save Up to 75%',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_institution_logos_institutions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_institution_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Trusted by top doctors who have practiced at renowned institutions:',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_quick_path_selector_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"cta_text" varchar DEFAULT 'Start here',
  	"cta_url" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_quick_path_selector" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_editorial_story_body_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_editorial_story" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'What if passing isn’t about what you study, but how you study?',
  	"lead_text" varchar DEFAULT 'You’re not alone. Even brilliant doctors fail when they rely on the wrong approach.',
  	"cta_text" varchar DEFAULT 'Get Started',
  	"cta_url" varchar DEFAULT '#who-do-we-help',
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_reviews_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Trusted by 10,000+ Pediatricians',
  	"rating_text" varchar DEFAULT '5.0 Excellent rating - Last 12 months',
  	"response_rate_text" varchar DEFAULT 'Responds to customer reviews: 94.1% response rate within 48 hours',
  	"use_live_trustindex_widget" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_who_do_we_help_programs_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_who_do_we_help_programs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"cta_text" varchar NOT NULL,
  	"cta_url" varchar NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_who_do_we_help" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Who Do We Help?',
  	"subheading" varchar DEFAULT 'Our high-yield study resources and proven strategies help pediatricians pass their board exams with confidence.',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_video_quotes_quotes" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"headline" varchar NOT NULL,
  	"body" varchar NOT NULL,
  	"author" varchar NOT NULL,
  	"role" varchar DEFAULT 'Board Certified Pediatrician',
  	"photo_id" integer
  );
  
  CREATE TABLE "pages_blocks_video_quotes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Reviews',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_grid_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"icon_name" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Why Students Love Us:',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_quiz_lead_gen" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Not sure where to start?',
  	"subheading" varchar DEFAULT 'Take our quiz and get started',
  	"description" varchar DEFAULT 'We help pediatricians pass the boards, even if they’ve been struggling for years.',
  	"cta_text" varchar DEFAULT 'Get Started',
  	"quiz_url" varchar DEFAULT '/risk-calculator',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_founder_bio" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Meet our founder, ASHISH GOYAL',
  	"bio" varchar DEFAULT 'After failing his pediatric boards, Dr. Ashish Goyal completely restructured his studying technique to embrace a new style of learning that was focused on efficiency and repetition. As a result, he increased his score by 40%, and was invited by the ABP to write board questions for them. That led Ashish to begin a journey that has helped thousands of pediatricians pass their board exams through Pediatrics Board Review®.',
  	"cta_text" varchar DEFAULT 'Get Started',
  	"cta_url" varchar DEFAULT '#who-do-we-help',
  	"photo_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_recent_articles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Popular Articles',
  	"limit" numeric DEFAULT 6,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_call_to_action" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Take the first step toward passing your boards - with clarity, confidence, and a proven system.',
  	"cta_text" varchar DEFAULT 'Get Started',
  	"cta_url" varchar DEFAULT '#who-do-we-help',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"meta_title" varchar DEFAULT 'Pediatrics Board Review | PBR',
  	"meta_description" varchar DEFAULT 'Pediatrics Board Review (PBR) offers streamlined, high-yield study resources and proven strategies to help pediatricians pass their board exams with confidence.',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"category_id" integer,
  	"featured_image_id" integer,
  	"excerpt" varchar NOT NULL,
  	"content" jsonb,
  	"published_date" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "testimonials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"title" varchar DEFAULT 'Board Certified Pediatrician',
  	"rating" numeric DEFAULT 5 NOT NULL,
  	"quote" varchar NOT NULL,
  	"date" varchar,
  	"source" "enum_testimonials_source" DEFAULT 'google',
  	"avatar_id" integer,
  	"featured" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_type" varchar DEFAULT 'Free Chapters Download' NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"metadata" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "header_nav_items_children" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "header_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"login_url" varchar DEFAULT 'https://courses.pediatricsboardreview.com/pages/home',
  	"get_started_url" varchar DEFAULT '#who-do-we-help',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"copyright" varchar DEFAULT '© 2026 Pediatrics Board Review. All Rights Reserved.',
  	"disclaimer" varchar DEFAULT '*Terms & Conditions Apply. Pediatrics Board Review is not affiliated with the American Board of Pediatrics (ABP).',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"announcement_bar_enabled" boolean DEFAULT true,
  	"announcement_bar_text" varchar DEFAULT '2026 Edition Includes FREE Instant Online Access when you Preorder the 2027 Edition for just $1',
  	"announcement_bar_button_text" varchar DEFAULT 'PREORDER FOR $1 →',
  	"announcement_bar_button_url" varchar DEFAULT '#preorder-2027',
  	"risk_calculator_url" varchar DEFAULT '/risk-calculator',
  	"infusionsoft_order_form_url" varchar DEFAULT 'https://sz258.infusionsoft.app/app/orderForms/a9c2a4e4-aed2-48c5-ae5c-9617140bf3a7',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "reset_password_requested_at" timestamp(3) with time zone;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "pages_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "posts_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "categories_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "testimonials_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "form_submissions_id" integer;
  ALTER TABLE "pages_blocks_hero_bullets" ADD CONSTRAINT "pages_blocks_hero_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_preorder_cards" ADD CONSTRAINT "pages_blocks_preorder_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_preorder_cards" ADD CONSTRAINT "pages_blocks_preorder_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_preorder"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_preorder" ADD CONSTRAINT "pages_blocks_preorder_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_institution_logos_institutions" ADD CONSTRAINT "pages_blocks_institution_logos_institutions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_institution_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_institution_logos" ADD CONSTRAINT "pages_blocks_institution_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_quick_path_selector_cards" ADD CONSTRAINT "pages_blocks_quick_path_selector_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_quick_path_selector"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_quick_path_selector" ADD CONSTRAINT "pages_blocks_quick_path_selector_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_editorial_story_body_paragraphs" ADD CONSTRAINT "pages_blocks_editorial_story_body_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_editorial_story"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_editorial_story" ADD CONSTRAINT "pages_blocks_editorial_story_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_editorial_story" ADD CONSTRAINT "pages_blocks_editorial_story_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_reviews_slider" ADD CONSTRAINT "pages_blocks_reviews_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_who_do_we_help_programs_bullets" ADD CONSTRAINT "pages_blocks_who_do_we_help_programs_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_who_do_we_help_programs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_who_do_we_help_programs" ADD CONSTRAINT "pages_blocks_who_do_we_help_programs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_who_do_we_help_programs" ADD CONSTRAINT "pages_blocks_who_do_we_help_programs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_who_do_we_help"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_who_do_we_help" ADD CONSTRAINT "pages_blocks_who_do_we_help_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video_quotes_quotes" ADD CONSTRAINT "pages_blocks_video_quotes_quotes_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_video_quotes_quotes" ADD CONSTRAINT "pages_blocks_video_quotes_quotes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_video_quotes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video_quotes" ADD CONSTRAINT "pages_blocks_video_quotes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_grid_features" ADD CONSTRAINT "pages_blocks_feature_grid_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_grid" ADD CONSTRAINT "pages_blocks_feature_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_quiz_lead_gen" ADD CONSTRAINT "pages_blocks_quiz_lead_gen_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_founder_bio" ADD CONSTRAINT "pages_blocks_founder_bio_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_founder_bio" ADD CONSTRAINT "pages_blocks_founder_bio_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_recent_articles" ADD CONSTRAINT "pages_blocks_recent_articles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_call_to_action" ADD CONSTRAINT "pages_blocks_call_to_action_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_nav_items_children" ADD CONSTRAINT "header_nav_items_children_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_columns_links" ADD CONSTRAINT "footer_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns" ADD CONSTRAINT "footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_hero_bullets_order_idx" ON "pages_blocks_hero_bullets" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_bullets_parent_id_idx" ON "pages_blocks_hero_bullets" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_hero_image_idx" ON "pages_blocks_hero" USING btree ("hero_image_id");
  CREATE INDEX "pages_blocks_preorder_cards_order_idx" ON "pages_blocks_preorder_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_preorder_cards_parent_id_idx" ON "pages_blocks_preorder_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_preorder_cards_image_idx" ON "pages_blocks_preorder_cards" USING btree ("image_id");
  CREATE INDEX "pages_blocks_preorder_order_idx" ON "pages_blocks_preorder" USING btree ("_order");
  CREATE INDEX "pages_blocks_preorder_parent_id_idx" ON "pages_blocks_preorder" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_preorder_path_idx" ON "pages_blocks_preorder" USING btree ("_path");
  CREATE INDEX "pages_blocks_institution_logos_institutions_order_idx" ON "pages_blocks_institution_logos_institutions" USING btree ("_order");
  CREATE INDEX "pages_blocks_institution_logos_institutions_parent_id_idx" ON "pages_blocks_institution_logos_institutions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_institution_logos_order_idx" ON "pages_blocks_institution_logos" USING btree ("_order");
  CREATE INDEX "pages_blocks_institution_logos_parent_id_idx" ON "pages_blocks_institution_logos" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_institution_logos_path_idx" ON "pages_blocks_institution_logos" USING btree ("_path");
  CREATE INDEX "pages_blocks_quick_path_selector_cards_order_idx" ON "pages_blocks_quick_path_selector_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_quick_path_selector_cards_parent_id_idx" ON "pages_blocks_quick_path_selector_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_quick_path_selector_order_idx" ON "pages_blocks_quick_path_selector" USING btree ("_order");
  CREATE INDEX "pages_blocks_quick_path_selector_parent_id_idx" ON "pages_blocks_quick_path_selector" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_quick_path_selector_path_idx" ON "pages_blocks_quick_path_selector" USING btree ("_path");
  CREATE INDEX "pages_blocks_editorial_story_body_paragraphs_order_idx" ON "pages_blocks_editorial_story_body_paragraphs" USING btree ("_order");
  CREATE INDEX "pages_blocks_editorial_story_body_paragraphs_parent_id_idx" ON "pages_blocks_editorial_story_body_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_editorial_story_order_idx" ON "pages_blocks_editorial_story" USING btree ("_order");
  CREATE INDEX "pages_blocks_editorial_story_parent_id_idx" ON "pages_blocks_editorial_story" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_editorial_story_path_idx" ON "pages_blocks_editorial_story" USING btree ("_path");
  CREATE INDEX "pages_blocks_editorial_story_image_idx" ON "pages_blocks_editorial_story" USING btree ("image_id");
  CREATE INDEX "pages_blocks_reviews_slider_order_idx" ON "pages_blocks_reviews_slider" USING btree ("_order");
  CREATE INDEX "pages_blocks_reviews_slider_parent_id_idx" ON "pages_blocks_reviews_slider" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_reviews_slider_path_idx" ON "pages_blocks_reviews_slider" USING btree ("_path");
  CREATE INDEX "pages_blocks_who_do_we_help_programs_bullets_order_idx" ON "pages_blocks_who_do_we_help_programs_bullets" USING btree ("_order");
  CREATE INDEX "pages_blocks_who_do_we_help_programs_bullets_parent_id_idx" ON "pages_blocks_who_do_we_help_programs_bullets" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_who_do_we_help_programs_order_idx" ON "pages_blocks_who_do_we_help_programs" USING btree ("_order");
  CREATE INDEX "pages_blocks_who_do_we_help_programs_parent_id_idx" ON "pages_blocks_who_do_we_help_programs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_who_do_we_help_programs_image_idx" ON "pages_blocks_who_do_we_help_programs" USING btree ("image_id");
  CREATE INDEX "pages_blocks_who_do_we_help_order_idx" ON "pages_blocks_who_do_we_help" USING btree ("_order");
  CREATE INDEX "pages_blocks_who_do_we_help_parent_id_idx" ON "pages_blocks_who_do_we_help" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_who_do_we_help_path_idx" ON "pages_blocks_who_do_we_help" USING btree ("_path");
  CREATE INDEX "pages_blocks_video_quotes_quotes_order_idx" ON "pages_blocks_video_quotes_quotes" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_quotes_quotes_parent_id_idx" ON "pages_blocks_video_quotes_quotes" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_quotes_quotes_photo_idx" ON "pages_blocks_video_quotes_quotes" USING btree ("photo_id");
  CREATE INDEX "pages_blocks_video_quotes_order_idx" ON "pages_blocks_video_quotes" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_quotes_parent_id_idx" ON "pages_blocks_video_quotes" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_quotes_path_idx" ON "pages_blocks_video_quotes" USING btree ("_path");
  CREATE INDEX "pages_blocks_feature_grid_features_order_idx" ON "pages_blocks_feature_grid_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_grid_features_parent_id_idx" ON "pages_blocks_feature_grid_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_grid_order_idx" ON "pages_blocks_feature_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_grid_parent_id_idx" ON "pages_blocks_feature_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_grid_path_idx" ON "pages_blocks_feature_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_quiz_lead_gen_order_idx" ON "pages_blocks_quiz_lead_gen" USING btree ("_order");
  CREATE INDEX "pages_blocks_quiz_lead_gen_parent_id_idx" ON "pages_blocks_quiz_lead_gen" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_quiz_lead_gen_path_idx" ON "pages_blocks_quiz_lead_gen" USING btree ("_path");
  CREATE INDEX "pages_blocks_founder_bio_order_idx" ON "pages_blocks_founder_bio" USING btree ("_order");
  CREATE INDEX "pages_blocks_founder_bio_parent_id_idx" ON "pages_blocks_founder_bio" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_founder_bio_path_idx" ON "pages_blocks_founder_bio" USING btree ("_path");
  CREATE INDEX "pages_blocks_founder_bio_photo_idx" ON "pages_blocks_founder_bio" USING btree ("photo_id");
  CREATE INDEX "pages_blocks_recent_articles_order_idx" ON "pages_blocks_recent_articles" USING btree ("_order");
  CREATE INDEX "pages_blocks_recent_articles_parent_id_idx" ON "pages_blocks_recent_articles" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_recent_articles_path_idx" ON "pages_blocks_recent_articles" USING btree ("_path");
  CREATE INDEX "pages_blocks_call_to_action_order_idx" ON "pages_blocks_call_to_action" USING btree ("_order");
  CREATE INDEX "pages_blocks_call_to_action_parent_id_idx" ON "pages_blocks_call_to_action" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_call_to_action_path_idx" ON "pages_blocks_call_to_action" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE UNIQUE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX "posts_category_idx" ON "posts" USING btree ("category_id");
  CREATE INDEX "posts_featured_image_idx" ON "posts" USING btree ("featured_image_id");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE UNIQUE INDEX "categories_slug_idx" ON "categories" USING btree ("slug");
  CREATE INDEX "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE INDEX "testimonials_avatar_idx" ON "testimonials" USING btree ("avatar_id");
  CREATE INDEX "testimonials_updated_at_idx" ON "testimonials" USING btree ("updated_at");
  CREATE INDEX "testimonials_created_at_idx" ON "testimonials" USING btree ("created_at");
  CREATE INDEX "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX "header_nav_items_children_order_idx" ON "header_nav_items_children" USING btree ("_order");
  CREATE INDEX "header_nav_items_children_parent_id_idx" ON "header_nav_items_children" USING btree ("_parent_id");
  CREATE INDEX "header_nav_items_order_idx" ON "header_nav_items" USING btree ("_order");
  CREATE INDEX "header_nav_items_parent_id_idx" ON "header_nav_items" USING btree ("_parent_id");
  CREATE INDEX "header_logo_idx" ON "header" USING btree ("logo_id");
  CREATE INDEX "footer_columns_links_order_idx" ON "footer_columns_links" USING btree ("_order");
  CREATE INDEX "footer_columns_links_parent_id_idx" ON "footer_columns_links" USING btree ("_parent_id");
  CREATE INDEX "footer_columns_order_idx" ON "footer_columns" USING btree ("_order");
  CREATE INDEX "footer_columns_parent_id_idx" ON "footer_columns" USING btree ("_parent_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_hero_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_preorder_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_preorder" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_institution_logos_institutions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_institution_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_quick_path_selector_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_quick_path_selector" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_editorial_story_body_paragraphs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_editorial_story" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_reviews_slider" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_who_do_we_help_programs_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_who_do_we_help_programs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_who_do_we_help" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_video_quotes_quotes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_video_quotes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_feature_grid_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_feature_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_quiz_lead_gen" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_founder_bio" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_recent_articles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_call_to_action" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "categories" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "form_submissions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_nav_items_children" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_nav_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_columns_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_hero_bullets" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_preorder_cards" CASCADE;
  DROP TABLE "pages_blocks_preorder" CASCADE;
  DROP TABLE "pages_blocks_institution_logos_institutions" CASCADE;
  DROP TABLE "pages_blocks_institution_logos" CASCADE;
  DROP TABLE "pages_blocks_quick_path_selector_cards" CASCADE;
  DROP TABLE "pages_blocks_quick_path_selector" CASCADE;
  DROP TABLE "pages_blocks_editorial_story_body_paragraphs" CASCADE;
  DROP TABLE "pages_blocks_editorial_story" CASCADE;
  DROP TABLE "pages_blocks_reviews_slider" CASCADE;
  DROP TABLE "pages_blocks_who_do_we_help_programs_bullets" CASCADE;
  DROP TABLE "pages_blocks_who_do_we_help_programs" CASCADE;
  DROP TABLE "pages_blocks_who_do_we_help" CASCADE;
  DROP TABLE "pages_blocks_video_quotes_quotes" CASCADE;
  DROP TABLE "pages_blocks_video_quotes" CASCADE;
  DROP TABLE "pages_blocks_feature_grid_features" CASCADE;
  DROP TABLE "pages_blocks_feature_grid" CASCADE;
  DROP TABLE "pages_blocks_quiz_lead_gen" CASCADE;
  DROP TABLE "pages_blocks_founder_bio" CASCADE;
  DROP TABLE "pages_blocks_recent_articles" CASCADE;
  DROP TABLE "pages_blocks_call_to_action" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "testimonials" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "header_nav_items_children" CASCADE;
  DROP TABLE "header_nav_items" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "footer_columns_links" CASCADE;
  DROP TABLE "footer_columns" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_pages_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_posts_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_categories_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_testimonials_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_form_submissions_fk";
  
  DROP INDEX "payload_locked_documents_rels_pages_id_idx";
  DROP INDEX "payload_locked_documents_rels_posts_id_idx";
  DROP INDEX "payload_locked_documents_rels_categories_id_idx";
  DROP INDEX "payload_locked_documents_rels_testimonials_id_idx";
  DROP INDEX "payload_locked_documents_rels_form_submissions_id_idx";
  ALTER TABLE "users" DROP COLUMN "reset_password_requested_at";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "pages_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "posts_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "categories_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "testimonials_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "form_submissions_id";
  DROP TYPE "public"."enum_testimonials_source";`)
}
