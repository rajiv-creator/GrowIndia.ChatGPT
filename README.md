
# JobPortal — GitHub Pages Preview

A clean, minimal SPA preview of your job portal. No backend needed.

## Publish
1. Create a repo (e.g., `jobportal-preview`) under `rajiv-creator`
2. Upload these files to the repo **root** (so `index.html` is at top level)
3. Repo → Settings → Pages → Source: **Deploy from a branch** → **main** → **/(root)** → Save
4. Open: `https://rajiv-creator.github.io/<repo-name>/`

## Routes
- `#/jobs` — list with filters, date, save/share
- `#/job?id=1` — job details with apply CTA, related jobs
- `#/resumes` — search, results, right-side preview
- `#/employer` — dashboard
- `#/employer/jobs` — manage jobs list
- `#/admin` — feature flags + logo preview (stored locally)

When you're ready, we can port this into the Next.js + Prisma app and deploy on Vercel.
