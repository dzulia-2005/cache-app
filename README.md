# Backend Setup (Full Inline Version)

1) შედი პროექტში:
cd my-cache-app
cd backend

2) შექმენი .env ფაილი და ჩაწერე:
POSTGRES_CONNECTION=Host=localhost;Port=5432;Database=cacheapp;Username=postgres;Password=postgres
REDIS_CONNECTION=localhost:6379,defaultDatabase=0

3) გაუშვი PostgreSQL და Redis და შემდეგ .env-ში საჭიროების მიხედვით ჩაასწორე value-ები:
docker run -d -p 6379:6379 --name redis 
redis




# PostgreSQL-ში შექმენი database სახელად: cacheapp

4) განაახლე მონაცემთა ბაზა (EF migrations):
dotnet ef database update

5) გაუშვი Backend API:
dotnet watch run

# Backend იმუშავებს:
http://localhost:5299/swagger/index.html


#  Frontend Setup (Full Inline Version)

1) შედი frontend დირექტორიაში:
cd frontend

2) შექმნი .env ფაილი და ჩაწერე:
VITE_API_URL="http://localhost:5299/api"

3) დააყენე პაკეტები:
npm install

4) გაუშვი Frontend:
npm run dev

# Frontend იმუშავებს:
http://localhost:5173
