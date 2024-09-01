# LMS-
1. cd server 
2. npm init 
3. npm i bcryptjs cookie-parser cors dotenv express ioredis jsonwebtoken mongoose ts-node-dev @types/bcryptjs @types/cookie-parser @types/cors @types/express @types/jsonwebtoken @types/node typescript
4. "dev": ts-node-dev --respawn --transpile-only server.ts   **this don't work in package.json to solve it use <dev: tsnd --respawn server.ts>**


## output: ################################
![alt text](image-1.png)
PS D:\New folder\LMS\server> npm run dev

> server@1.0.0 dev
> tsnd --respawn server.ts

[INFO] 12:20:08 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.5.4)
<Server is Connected with port8000>

## ######################