<div align="center">

![Mirage banner](docs/hero-landingPage.png)

# Mirage42

*Full-stack social media with real-time chat.*

[**Live Demo**](https://mirage42.com) · [**Documentation**](https://mirage42.com/docs) · [**LinkedIn**](https://www.linkedin.com/in/davidbabaev/) · [**YouTube Channel**](https://www.youtube.com/@david_kingdom)

</div>

---

## About

Mirage42 is a full-stack social media platform where people post, follow, comment, and chat in real time. It covers the full lifecycle of a modern social app — public profiles, a personalized feed, photo and video sharing, notifications, and direct messaging — plus a full admin dashboard for moderation and analytics.

Under the hood, the app runs on production-grade infrastructure: deployed at [mirage42.com](https://mirage42.com) on a custom domain, with separate production and development databases, real-time WebSocket messaging through Socket.IO, Cloudinary-backed media uploads, and JWT plus Google OAuth authentication.

The project was built solo, end-to-end — frontend, backend, database, deployment, and design — over eight months and ~1,200 hours of self-directed work.

## Key Features

- **Real-time chat** - bidirectional messaging via Socket.io, with image/video shring, an emoji picker, and a WhatsApp-style mobile layout
- **Personalized feed and social graph** - posts from people you follow, friends-of-friends suggestions, follow/unfollow, and provate favorites lists.
- **Full admin dashboard** - analytics on users, posts, retention, demographics, and engagement, plus moderation tables with ban / promote / delete actions.
- **Authntication** - email + password with JWT sessions, plus Google OAuth via Passport.js, with age verification and account profile editing. 
- **Media Handling** - image and video uploads (profile, cover, posts, chat) backed by Cloudinary.
- **Search, sort, filter, paginate** - across users and posts, with debounced search, multi-select category filter, and active-filter chips.
- **Light/dark theme + mobile-first design** - responsive layouts, portrait-orientation overlay for landscape phones, and an auto-hiding bottom nav on scroll.

> A complete feature list and premissions matrix lives in the [project documentation](https://mirage42.com/docs/features)

## Screenshots

### Feed
The home page after login. Posts from people you follow, "people you may know" suggestions in the right sidebar, and quick post creation up top

![Chat](docs/screenshots/feedPage.png)

### Real-time chat
Websocket-backed massaging with image an video shring, an emoji picker, and a conversation list sorted by most recent activity.

![Chat](docs/screenshots/messages.png)

### Public profile
A user's public with cover image, followers and following counts, a post grid, and a mutual-friends sidebar.

![Chat](docs/screenshots/profilePublic.png)

### Admin Dashboard
Full analytics over users, posts, retention, demographics, and engagement - plus moderation tables for users and posts.

![Chat](docs/screenshots/adminDash.png)

## Teack Stack

### Frontend
<p>
    <img style="background-color: white; padding: 8px; max-width: 50px; border-radius: 10px" src="docs/logos/React-icon.svg.png" height="40" alt="React">
    <img style="background-color: white; padding: 8px; max-width: 50px; border-radius: 10px" src="docs/logos/Vitejs-logo.svg.png" height="40" alt="Vite">
    <img style="background-color: white; padding: 8px; max-width: 50px; border-radius: 10px" src="docs/logos/mui.png" height="40" alt="MUI">
</p>

### Backend
<p>
    <img style="background-color: white; padding: 8px; max-width: 50px; border-radius: 10px" src="docs/logos/Node.js_logo.svg" height="40" alt="Node.js">
    <img style="background-color: white; padding: 8px; max-width: 50px; border-radius: 10px" src="docs/logos/express.png" height="40" alt="Express">
    <img style="background-color: white; padding: 8px; max-width: 50px; border-radius: 10px" src="docs/logos/socketio.png" height="40" alt="Socket.io">
    <img style="background-color: white; padding: 8px; max-width: 50px; border-radius: 10px" src="docs/logos/mongoose.png" height="40" alt="Mongoose">
    <img style="background-color: white; padding: 8px; max-width: 50px; border-radius: 10px" src="docs/logos/jwtIcon.webp" height="40" alt="JWT">
</p>

### Database & Services & Hosting
<p>
    <img style="background-color: white; padding: 8px; max-width: 50px; border-radius: 10px" src="docs/logos/cloudinary.png" height="40" alt="Cloudinary">
    <img style="background-color: white; padding: 8px; max-width: 50px; border-radius: 10px" src="docs/logos/mongodb_original_wordmark_logo_icon_146425.png" height="40" alt="MongoDB">
    <img style="background-color: white; padding: 8px; max-width: 50px; border-radius: 10px" src="docs/logos/render.png" height="40" alt="Render">
    <img style="background-color: white; padding: 8px; max-width: 50px; border-radius: 10px" src="docs/logos/Cloudflare_Logo.png" height="40" alt="Cloudflare">
</p>

## Project Structure

Mirage42 is a monorepo. the frontend and backend share a single git history but deploy as two independent services.

```
mirage42/
├── frontend/                  React + Vite client
│   ├── public/
│   ├── src/
│   │   ├── App.jsx            top-level routes
│   │   ├── main.jsx           entry point
│   │   ├── components/        shared UI components
│   │   ├── pages/             route-level pages
│   │   ├── providers/         React Context (auth, cards, theme, users, UI)
│   │   ├── hooks/             custom hooks
│   │   ├── services/          REST + Socket.IO clients
│   │   ├── utils/             helpers
│   │   ├── constants/         shared constants
│   │   └── assets/            images and logos
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/                   Node.js + Express + Socket.IO
│   ├── src/
│   │   ├── app.js             Entry point: Express, Socket.IO, middleware
│   │   ├── dbService.js       MongoDB connection
│   │   ├── auth/              JWT + Google OAuth (Passport.js)
│   │   ├── cards/             Posts — feature folder with its own:
│   │   │   ├── models/        (Card schema)
│   │   │   ├── routes/        (REST endpoints)
│   │   │   ├── service/       (business logic)
│   │   │   ├── helpers/       (normalizers, validators)
│   │   │   └── validation/    (Joi schemas)
│   │   ├── chat/              Real-time chat (same pattern + Socket.IO handlers)
│   │   ├── notifications/     Notifications (same pattern)
│   │   ├── users/             Users (same pattern)
│   │   ├── middlewares/       CORS, Multer (file uploads)
│   │   ├── router/            Combines all feature routers
│   │   ├── seed/              Database seeding script
│   │   └── utils/             Cloudinary upload, error handling
│   └── package.json
│
├── docs/                      README assets
│   ├── banner.png
│   ├── screenshots/
│   └── logos/
│
└── README.md
```

**`frontend/`** - React 18, Vite, MUI. Pages, components, React contexts for global state (auth, posts, theme, users), custom hooks, and the API + socket service layer.

**`backend/`** - Node.js, Express, Mongoose. Organized by **feature**, not by MVC layer: each featur folder (`notifications`, `chat`, `users`, `cards`) contains its own models, routes, service, helpers, and validation. Real-time chat is handled through Socket.IO event handlers running alongside the REST routes. Authentication uses Passport.js fro Google OAuth, plus JWT for session tokens.

## Prerequisites

before running Mirage42 locally, you'll need:

**Install on your machine:**
- [Node.js](https://nodejs.org/en) 18 or later
- [Git](https://git-scm.com/)

**Free accounts on:**
- [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) - for the database
- [Cloudinary](https://cloudinary.com/) - for image and video storage
- [Google Cloud Console](https://cloud.google.com/) - fot the the "Sign in with Google" feature

## Clone & Install

```bash
git clone https://github.com/davidbabaev/mirage42.git
cd mirage42

# Install backend dependencies
cd backend && npm install

#Install frontend dependencies
cd ../frontend && npm install
```

Both `npm install` runs may take a couple of minutes the first time.

## Env vars

Mirage42 uses enviorment variable to configure the database, third-party services, and authentication, the repo includes `env.example` files in both `backend/` and `frontend/` showing which variables are needed. Start by coping them:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

(on Windows, use `copy` instead of `cp`)

The **frontend** `.env` only needs one value, already filled in from the example:
```
VITE_API_URL=http://localhost:8181
```

No further chnages needed there.

The **backend** `.env` needs real values from four services. Walk through each below.

### MongoDB Atlas (`DB_CONNECTION_STRING`)

1. Sign up at [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) and create a free **M0 cluster**
2. Add a **database user** (note the username + password).
3. Under "Network Access" add `0.0.0.0/0` to the IP allowlist (fine for local dev).
4. On your cluster, click **Connect → Drivers**. Atlas shows you a connection string like:
``` 
mongodb+srv://<db_username>:<db_password>@<cluster>.mongodb.net/?appName=YourCluster
```
5. Replace `<db_username>` and `<db_password>` with your real credentials, and add a database name (`mirage_dev` works):
```
mongodb+srv://yourname:yourpassword@yourcluster.mongodb.net/mirage_dev?appName=YourCluster
```
6. Paste the result into `DB_CONNECTION_STRING=` in `backend/.env`.

### Cloudinary

1. Sign up for free account at [Cloudinary](https://cloudinary.com/) - images and videos storage
2. From the dashboard, open **Setting → API Keys**
3. Copy the three values shown below into your `backend/.env`

![Cloudinary API Keys page](docs/cloudinary_annotated.png)

```
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Google OAuth (`GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`)

1. Go to [Google Cloud Console](https://console.cloud.google.com/) and create  new project (or pick an existing one)
2. Open **APIs & Services → OAuth consent screen** and complete the setup:
- User type: **External**
- fill in app name, user support email, developer contact email
- scopes: add `userinfo.email` and `userinfo.profile`
- save through to the end
3. Open **APIs & Services →  Credentials → Create credentials → OAuth client ID**.
4. Application type: **Web application**. Give it any name.
5. Add the following:
- **Authorized JavaScript origins:** `http://localhost:5173` and `http://localhost:8181`
- **Authorized redirect URI:** `http://localhost:8181/auth/google/callback`.
6. Click **Create**. A popup shows your **Client ID** and **Client Secret**. Copy both info `backend/.env`:
- `GOOGLE_CLIENT_ID` ← Client ID
- `GOOGLE_CLIENT_SECRET` ← Client Secret

### JWT secret (`JWT_SECRET`)

This signs your auth tokens. it's not from any service - you generate a long random string yourself. Run this in your terminal:

```bash
openssl rand -hex 64
```

Copy the output into `backend/.env` as `JWT_SECRET`. On Windows without `openssl`, use Node instead: 
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
``` 

## Seed the database

Mirage42 ships with a seed script that populate your database with 12 mock users (one admin, eleven regular) and 27 mock cards. From inside `backend/`, run:

```bash
node backend/src/seed/seedScript.js
```

**Hands up:** this **wipes** any existing data in the database before reseeding, so don't run it against a database you care about.

Once seeded, you can log in with:

- **Regular user:** `sarah@test.com` / `Test1234!`
- **Admin:** `david@test.com` / `Test1234!`

All seeded users share the same password - see `backend/src/seed/seedScript.js` for the full list.

## Run the app

Mirage42 runs as two processes: the backend API on port `8181` and the frontend Vite dev server on port `5173`. Open two terminals and keep both running.

**Terminal 1** - start the backend:

```bash
cd backend
npm run dev
```

**Terminal 2** - start the frontend:
```bash
cd frontend
npm run dev
```

- `cd backend` - navigates INTO the backend folder. By itself it doesn't run any code; it just chnages which directory you're in.
- `npm run dev` - runs the dev script. But remember: npm reads the package.json of whatever folder you're currently in. So you need to be inside backend/ first for npm to find the right script.