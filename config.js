// B'Gemla Config — DIRECT REST API (no SDK needed)
var SUPABASE_URL = "https://jukvabggadpumtpahsjv.supabase.co";
var SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1a3ZhYmdnYWRwdW10cGFoc2p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxNDI1MTAsImV4cCI6MjA5MDcxODUxMH0.lBtWTl79l5ZcjY7VcSi_ETlXTBzyjM-mC6fPUrko4Fo";
var ADMIN_HASH = "3508dc750ba5546a4afa3ccd0959603df3a412268fafab469ada4e01a383867e";

function dbHeaders(key) {
  return {
    "apikey": key || SUPABASE_ANON_KEY,
    "Authorization": "Bearer " + (key || SUPABASE_ANON_KEY),
    "Content-Type": "application/json",
    "Prefer": "return=representation"
  };
}

function dbGet(table, query, key) {
  return fetch(SUPABASE_URL + "/rest/v1/" + table + "?" + (query || ""), { headers: dbHeaders(key) }).then(function(r) { return r.json(); });
}

function dbInsert(table, data, key) {
  return fetch(SUPABASE_URL + "/rest/v1/" + table, { method: "POST", headers: dbHeaders(key), body: JSON.stringify(data) }).then(function(r) { return r.json(); });
}

function dbUpdate(table, query, data, key) {
  return fetch(SUPABASE_URL + "/rest/v1/" + table + "?" + query, { method: "PATCH", headers: dbHeaders(key), body: JSON.stringify(data) }).then(function(r) { return r.ok ? { success: true } : r.json(); });
}

function dbDelete(table, query, key) {
  return fetch(SUPABASE_URL + "/rest/v1/" + table + "?" + query, { method: "DELETE", headers: dbHeaders(key) }).then(function(r) { return { success: r.ok }; });
}

function dbRpc(fn, params, key) {
  return fetch(SUPABASE_URL + "/rest/v1/rpc/" + fn, { method: "POST", headers: dbHeaders(key), body: JSON.stringify(params) }).then(function(r) { return r.ok ? { success: true } : r.json(); });
}
