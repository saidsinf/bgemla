// ═══════════════════════════════════════════════════════════
// B'Gemla Config
// ═══════════════════════════════════════════════════════════
var SUPABASE_URL = "https://jukvabggadpumtpahsjv.supabase.co";
var SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1a3ZhYmdnYWRwdW10cGFoc2p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxNDI1MTAsImV4cCI6MjA5MDcxODUxMH0.lBtWTl79l5ZcjY7VcSi_ETlXTBzyjM-mC6fPUrko4Fo";

// Admin password hash for "bgemla2026"
var ADMIN_HASH = "3508dc750ba5546a4afa3ccd0959603df3a412268fafab469ada4e01a383867e";

var sb = null;
function initSupabase() {
  if (typeof supabase !== "undefined" && SUPABASE_URL) {
    sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return sb;
}
