# https://dev.to/pavanbelagatti/microservices-vs-micro-frontends-whats-the-difference-33je


*** setup ***
nvm use 18
npm init -y
npm install express axios
npm install express-http-proxy

*** developer guide ***
docker compose build 

# start
docker compose run users
docker compose run orders

# run dev mode
docker compose run users npm run start:dev
