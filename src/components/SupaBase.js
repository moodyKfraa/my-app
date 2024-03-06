import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://qsrvqzgxjkooytpjdevu.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzcnZxemd4amtvb3l0cGpkZXZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1NDEzNTAsImV4cCI6MjAyNDExNzM1MH0.9WA-n9U5K0TgFRjDIIJHm4-W5EjitcgVAhvnsKUdb9U"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase