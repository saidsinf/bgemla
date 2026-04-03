// ═══════════════════════════════════════════════════════════
// B'Gemla Config
// ═══════════════════════════════════════════════════════════
var SUPABASE_URL = "https://jukvabggadpumtpahsjv.supabase.co";
var SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1a3ZhYmdnYWRwdW10cGFoc2p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxNDI1MTAsImV4cCI6MjA5MDcxODUxMH0.lBtWTl79l5ZcjY7VcSi_ETlXTBzyjM-mC6fPUrko4Fo";

// Admin password hash for "bgemla2026"
var ADMIN_HASH = "3508dc750ba5546a4afa3ccd0959603df3a412268fafab469ada4e01a383867e";

var sb = null;
function initSupabase() {
  if (sb) return sb;
  try {
    if (typeof supabase !== "undefined") {
      if (typeof supabase.createClient === "function") {
        sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      } else if (typeof supabase.supabase !== "undefined" && typeof supabase.supabase.createClient === "function") {
        sb = supabase.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      }
    }
    if (sb) console.log("Supabase initialized OK");
    else console.error("Supabase SDK loaded but createClient not found. typeof supabase:", typeof supabase, Object.keys(supabase||{}));
  } catch(e) {
    console.error("Supabase init error:", e);
  }
  return sb;
}
