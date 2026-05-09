-- Mirrors apps/pocketbase/pb_migrations/1771729389_001_created_leads.js
-- and 1771730626_001_add_comments_to_leads.js.

CREATE TABLE IF NOT EXISTS leads (
  id           text PRIMARY KEY
                 DEFAULT substr(md5(random()::text || clock_timestamp()::text), 1, 15)
                 CHECK (id ~ '^[a-z0-9]{15}$'),
  first_name   varchar(255) NOT NULL CHECK (length(first_name) BETWEEN 1 AND 255),
  last_name    varchar(255) NOT NULL CHECK (length(last_name) BETWEEN 1 AND 255),
  email        text         NOT NULL CHECK (email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'),
  company      varchar(255) NOT NULL CHECK (length(company) BETWEEN 1 AND 255),
  job_title    varchar(255) NOT NULL CHECK (length(job_title) BETWEEN 1 AND 255),
  company_size text         NOT NULL CHECK (company_size IN ('SMB', 'Enterprise')),
  comments     text,
  created      timestamptz  NOT NULL DEFAULT now(),
  updated      timestamptz  NOT NULL DEFAULT now()
);

CREATE OR REPLACE FUNCTION set_updated_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS leads_set_updated ON leads;
CREATE TRIGGER leads_set_updated
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_timestamp();
