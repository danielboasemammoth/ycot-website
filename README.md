# Your Choice OT Website Prototype

A modern, performant website for Your Choice Occupational Therapy built with Next.js, Tailwind CSS, and Decap CMS.

## Technology Stack

- **Framework**: Next.js 14 (App Router, Static Generation)
- **Styling**: Tailwind CSS
- **CMS**: Decap CMS (Git-backed, headless)
- **Hosting**: Vercel (Free tier)
- **Database**: GitHub (content storage)

## Features

✅ **Responsive Design** - Mobile-first, works on all devices
✅ **Fast Performance** - Optimized for Core Web Vitals
✅ **SEO Optimized** - Metadata, structured data, fast load times
✅ **Easy Content Management** - Visual editor at /admin
✅ **Contact Forms** - Inquiry and feedback submissions
✅ **Cheap Hosting** - Vercel free tier (~$1-2/month)
✅ **No Maintenance Deployments** - Auto-deploys on content changes

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Content Management

1. Navigate to `http://localhost:3000/admin` (or your deployed URL + /admin)
2. Log in with your GitHub account (configured in deployment)
3. Edit pages, services, team members, and settings
4. Click "Publish" - automatically commits to GitHub and deploys

## Deployment to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to vercel.com
   - Import the GitHub repo
   - Add environment variables (see below)
   - Deploy!

3. **Configure Decap CMS Authentication**
   - GitHub Personal Access Token required for content editing
   - Settings → Deployments → GitHub

## Environment Variables

Create a `.env.local` file (development) or configure in Vercel dashboard:

```
NEXT_PUBLIC_SITE_URL=https://yourchoiceot.com.au
GITHUB_TOKEN=your_github_token_here
```

## Project Structure

```
app/
├── components/          # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ContactForm.tsx
├── (pages)
│   ├── page.tsx        # Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── gallery/page.tsx
│   └── contact/page.tsx
├── layout.tsx
└── globals.css

public/
├── admin/
│   ├── index.html      # Decap CMS UI
│   └── config.yml      # CMS configuration

content/               # Markdown content (Git-backed)
├── pages/
├── services/
├── team/
└── settings.json
```

## Maintenance by Your Wife

**Daily/Weekly:**
- Click the /admin link
- Edit page content, add images
- Click "Publish"
- Changes appear automatically (~1 minute)

**What I Handle:**
- Initial setup & deployment
- Technical updates
- Performance monitoring

**What You Don't Need to Do:**
- Touch code
- Run terminal commands
- Deploy manually

## Support & Updates

- **Content Issues**: Review the Decap CMS docs (admin UI is self-explanatory)
- **Technical Issues**: Contact (we set this up for you)
- **Feature Requests**: Easy to add (calendar, booking widgets, etc.)

---

Built with ❤️ for Your Choice OT
