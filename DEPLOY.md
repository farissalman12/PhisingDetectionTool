# Deployment Guide 🚀

This project is configured for **Zero-Config Deployment** using Render Blueprints and Neon Database.

## Prerequisites
1.  **GitHub Account**: You must have this code pushed to a GitHub repository.
2.  **Render Account**: Sign up at [render.com](https://render.com).
3.  **Neon Account**: Sign up at [neon.tech](https://neon.tech).

---

## Step 1: Database Setup (Neon)
1.  Log in to **Neon Console**.
2.  Create a **New Project** (e.g., `phishguard`).
3.  Copy the **Connection String** (Pooled). It looks like:
    `postgresql://neondb_owner:xyz...@ep-pooler...aws.neon.tech/neondb?sslmode=require`

## Step 2: Connect Repository (Render)
1.  Log in to **Render Dashboard**.
2.  Click **New +** and select **Blueprint**.
3.  Connect your **GitHub Account** if you haven't already.
4.  Search for and select your **Phishing Tool Portfolio** repository.
5.  Click **Connect**.

## Step 3: Configure & Deploy
Render will detect the `render.yaml` file and show you the plan to create 2 services:
*   `phishing-tool-backend`
*   `phishing-tool-frontend`

It will ask for Environment Variables.
1.  **DATABASE_URL**: Paste the **Neon Connection String** from Step 1.
2.  **SAFE_BROWSING_API_KEY**: (Optional) Enter a placeholder or your Google Key.
3.  Click **Apply**.

## Step 4: Done!
Render will automatically:
1.  Build the Backend.
2.  Run Database Migrations (creating tables in Neon).
3.  Build the Frontend.
4.  Deploy everything.

Once finished, Render will provide a URL where your app is live!
