# AI Travel Companion

AI-powered MERN + Python travel platform.

## Quick Start

```bash
# Install all dependencies
npm run install:all

# Copy env files
cp frontend/.env.example frontend/.env
cp backend/.env          backend/.env   # fill in secrets
cp ai/.env               ai/.env        # fill in secrets

# Run frontend + backend together
npm run dev

# Run AI engine separately
cd ai && uvicorn main:app --reload --port 8000
```

## Service Ports
| Service  | Port  |
|----------|-------|
| Frontend | 5173  |
| Backend  | 5000  |
| AI Engine| 8000  |
| MongoDB  | 27017 |
| Redis    | 6379  |
