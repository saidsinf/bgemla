# B'Gemla — بالجملة
## Morocco Group Buy Platform

**100% Free hosting** — GitHub Pages + Supabase

### Files
```
bgemla/
├── index.html      ← Public storefront
├── admin.html      ← Admin dashboard
├── config.js       ← Supabase credentials (EDIT THIS)
├── schema.sql      ← Database schema (run in Supabase)
├── CNAME           ← Custom domain config
└── README.md
```

### Setup (10 minutes)

**1. Supabase (5 min)**
- Create project at supabase.com
- SQL Editor → paste schema.sql → Run
- Settings → API → copy Project URL + anon key + service_role key

**2. Edit config.js**
- Replace YOUR_SUPABASE_URL with your Project URL
- Replace YOUR_SUPABASE_ANON_KEY with your anon key

**3. GitHub Pages (3 min)**
- Create repo "bgemla" on GitHub
- Upload all files
- Settings → Pages → Source: main branch → Save
- Add custom domain: bgemla.com

**4. Admin login**


### Custom domain
Point your domain's DNS to GitHub Pages:
- A record: 185.199.108.153
- A record: 185.199.109.153
- A record: 185.199.110.153
- A record: 185.199.111.153
- CNAME: www → yourusername.github.io
