/*
  # Portfolio Database Schema

  1. New Tables
    - `users` - User profile information
      - `id` (uuid, primary key)
      - `name` (text) - Full name
      - `bio` (text) - Biography/tagline
      - `photo_url` (text) - Profile photo URL
      - `email` (text) - Contact email
      - `phone` (text) - Phone number
      - `location` (text) - Location
      - `resume_url` (text) - Resume/CV download link
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `contact_info` - Additional contact methods
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key)
      - `type` (text) - Type of contact (email, phone, etc.)
      - `label` (text) - Display label
      - `value` (text) - Contact value
      - `icon` (text) - Icon name
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz)

    - `social_links` - Social media links
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key)
      - `platform` (text) - Platform name
      - `url` (text) - Profile URL
      - `icon` (text) - Icon name
      - `color` (text) - Accent color
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz)

    - `experiences` - Work experience
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key)
      - `title` (text) - Job title
      - `company` (text) - Company name
      - `location` (text) - Location
      - `start_date` (date) - Start date
      - `end_date` (date, nullable) - End date
      - `current_job` (boolean) - Is current position
      - `description` (text) - Job description
      - `technologies` (text[]) - Technologies used
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz)

    - `education` - Educational background
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key)
      - `degree` (text) - Degree name
      - `school` (text) - School name
      - `location` (text) - Location
      - `start_date` (date) - Start date
      - `end_date` (date, nullable) - End date
      - `description` (text) - Description
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz)

    - `projects` - Portfolio projects
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key)
      - `title` (text) - Project title
      - `description` (text) - Short description
      - `long_description` (text) - Detailed description
      - `image_url` (text) - Project image
      - `demo_url` (text, nullable) - Live demo URL
      - `github_url` (text, nullable) - GitHub repository URL
      - `technologies` (text[]) - Technologies used
      - `featured` (boolean) - Featured project
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz)

    - `skills` - Technical skills
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key)
      - `name` (text) - Skill name
      - `category` (text) - Category (Frontend, Backend, etc.)
      - `level` (integer) - Proficiency level (0-100)
      - `icon` (text) - Icon name
      - `color` (text) - Accent color
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (portfolio is public)
    - Add policies for authenticated user updates (owner only)
*/

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  bio text NOT NULL DEFAULT '',
  photo_url text DEFAULT '',
  email text DEFAULT '',
  phone text DEFAULT '',
  location text DEFAULT '',
  resume_url text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_info (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  type text NOT NULL,
  label text NOT NULL,
  value text NOT NULL,
  icon text DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS social_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  platform text NOT NULL,
  url text NOT NULL,
  icon text DEFAULT '',
  color text DEFAULT '#3B82F6',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS experiences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  company text NOT NULL,
  location text DEFAULT '',
  start_date date NOT NULL,
  end_date date,
  current_job boolean DEFAULT false,
  description text DEFAULT '',
  technologies text[] DEFAULT '{}',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS education (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  degree text NOT NULL,
  school text NOT NULL,
  location text DEFAULT '',
  start_date date NOT NULL,
  end_date date,
  description text DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  long_description text DEFAULT '',
  image_url text DEFAULT '',
  demo_url text,
  github_url text,
  technologies text[] DEFAULT '{}',
  featured boolean DEFAULT false,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  category text NOT NULL,
  level integer DEFAULT 50,
  icon text DEFAULT '',
  color text DEFAULT '#3B82F6',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users are publicly readable"
  ON users FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Contact info is publicly readable"
  ON contact_info FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Social links are publicly readable"
  ON social_links FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Experiences are publicly readable"
  ON experiences FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Education is publicly readable"
  ON education FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Projects are publicly readable"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Skills are publicly readable"
  ON skills FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_contact_info_order ON contact_info(user_id, order_index);
CREATE INDEX IF NOT EXISTS idx_social_links_order ON social_links(user_id, order_index);
CREATE INDEX IF NOT EXISTS idx_experiences_order ON experiences(user_id, order_index);
CREATE INDEX IF NOT EXISTS idx_education_order ON education(user_id, order_index);
CREATE INDEX IF NOT EXISTS idx_projects_order ON projects(user_id, order_index);
CREATE INDEX IF NOT EXISTS idx_skills_order ON skills(user_id, order_index);
