// ═══════════════════════════════════════════════════════════
// B'Gemla Config — EDIT THESE TWO VALUES
// ═══════════════════════════════════════════════════════════
var SUPABASE_URL = "YOUR_SUPABASE_URL";
var SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

// Admin password (SHA-256 hash) — default: "bgemla2026"
// To change: open browser console, run:
//   crypto.subtle.digest('SHA-256', new TextEncoder().encode('YOUR_PASSWORD'))
//     .then(h => console.log(Array.from(new Uint8Array(h)).map(b=>b.toString(16).padStart(2,'0')).join('')))
var ADMIN_HASH = "c9e1a4312c10a8b3a3e6d05bc7e173cfb29854e86bfa51f620f1b61c5e926f3a";

var sb = null;
function initSupabase() {
  if (typeof supabase !== "undefined" && SUPABASE_URL !== "YOUR_SUPABASE_URL") {
    sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return sb;
}
