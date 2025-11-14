# How to Run the Project

git clone https://github.com/dzulia-2005/cache-app
cd cache-app

# BACKEND SETUP
cd backend
dotnet restore

# Create PostgreSQL database:
# Name: cacheapp

# Start Redis (if not installed)
docker run -d -p 6379:6379 --name redis redis

# Create backend .env (backend/.env)
POSTGRES_CONNECTION=Host=localhost;Port=5432;Database=cacheapp;Username=postgres;Password=postgres
REDIS_CONNECTION=localhost:6379,defaultDatabase=0

# Apply migrations
dotnet ef database update

# Run Backend
dotnet run
# Backend URL → http://localhost:5299

# FRONTEND SETUP
cd ../frontend
npm install

# Create frontend .env (frontend/.env)
VITE_API_URL=http://localhost:5299/api

# Run Frontend
npm run dev
# Frontend URL → http://localhost:5173
