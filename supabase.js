import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://neqjezxbprkygitwehej.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcWplenhicHJreWdpdHdlaGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyMTA5MzEsImV4cCI6MTk5Njc4NjkzMX0.fnqe4sjdBnnmuNp615CoWcASBQZxIRk8Zy5SVecMY-8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
