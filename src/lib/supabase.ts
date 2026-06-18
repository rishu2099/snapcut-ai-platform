import { createClient } from '@supabase/supabase-js';

// Using fallback values here so it works immediately without needing to restart the Vite server.
// Vite does not hot-reload new .env files, so the fallback helps!
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://dcyoalkeiqriuvhsmalo.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjeW9hbGtlaXFyaXV2aHNtYWxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2OTc1NzcsImV4cCI6MjA5NzI3MzU3N30.79wWDx2qGJ9GdE9mUkxgL_t7AB078BRuNjPWpXcU7pA';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

