import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sbyfynetsoegtcxquqhr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNieWZ5bmV0c29lZ3RjeHF1cWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3NDU2MTEsImV4cCI6MjA0MDMyMTYxMX0.OPO_uPs5ib29_5wBpunhLd6w0DWMooODtx4NK68Rpzg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
