# Vercel Deployment Guide - Prospectly

Detta projekt driftsätts på **Vercel** som en blixtsnabb React + Vite SPA.

## 1. Inställningar i Vercel

När du importerar repot i Vercel:
- **Build Command**: `cd frontend && npm install && npm run build`
- **Output Directory**: `frontend/dist`
- **Install Command**: `cd frontend && npm install`

*(Detta är även förkonfigurerat automatiskt via `vercel.json` i reporoten).*

## 2. Domän
Koppla din anpassade domän `prospectly.se` i **Project Settings > Domains**.
