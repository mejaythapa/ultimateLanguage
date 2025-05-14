CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT,
  email TEXT,
  message TEXT,
  score INTEGER,
  status TEXT DEFAULT 'new'
);
