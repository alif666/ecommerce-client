import { createClient } from '@supabase/supabase-js'

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhdXZreXJwcWlsdG5zY215dnZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MzkwNDQsImV4cCI6MjAzNTAxNTA0NH0.yoQq1YgK1hAEyRfIE0bzwfjuBlbcyE-UsSBVQvXmbXA";
const SUPABASE_URL = "https://pauvkyrpqiltnscmyvvl.supabase.co";
const supabase = createClient(SUPABASE_URL,SUPABASE_KEY);

export default supabase;