# GrowIndia Job Portal — MVP Scaffold

This repo is a clean MVP scaffold wired for Supabase. Upload to GitHub, deploy on Vercel.

## 1) Environment Variables
Set these in **Vercel → Project → Settings → Environment Variables** (All Environments):

- `NEXT_PUBLIC_SUPABASE_URL` = `https://<your-ref>.supabase.co`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = anon public key
- `SUPABASE_SERVICE_ROLE_KEY` = service role key (server-only)

## 2) Supabase
- Turn **Email** provider ON (Authentication → Providers).
- Ensure tables exist: `jobs`, `applications`, `candidates`, `companies` (your schema).
- RLS policies added as we discussed.

## 3) Run locally (optional)
```bash
npm i
npm run dev
```
Open http://localhost:3000

## 4) Pages
- `/` → redirects to `/jobs`
- `/jobs` → list of jobs (reads from Supabase)
- `/jobs/[id]` → job details
- `/login` → email magic link
- `/apply?job=<id>` → apply to a job (requires login)

> **Note:** The `apply` flow uses the public anon client + RLS. It assumes your `candidates.id` equals the logged-in `auth.users.id`. If your schema differs, adjust in `app/apply/page.jsx` (the insert payload).

## 5) Styling
Tailwind pre-wired with a minimal, clean UI (light mode).

