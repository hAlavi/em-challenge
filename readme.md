### SERVER for challenge


Make sure you have Node and NPM installed both with `node -v && npm -v`.  
Install packages with `npm install`.  
Run server with `npm run dev` for using **Nodemon**.

If you use a Node version ≤ 8.2.1, you will need to add the " - harmony" flag for using spread operator in the package.json file.

To see cool debug stuff
`npm run dev:debug` 

To run in Dev mode without debug stuff
`npm run dev`

Server is runnint on port ```3030```

Endpoints: 
`/sysinfo` Without authentication, giving you the system info e.g. version of api

`/api/v1/watchlist` secured with jwt(but its disabled for the sake of ease)
for enabling `/api/v1/watchlist/authenticate` send `{"username":"test", "password":"test"}`

Do post/get/delete on `/api/v1/watchlist`


### CLIENT
After `yarn install`
just run `yarn start`

Happy testing!