const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const fileList = require('./loadData');

server.use(middlewares);

fileList.map(fileName => {
  server.get(`/api/${fileName}/fares`, (req, res) => {
    // eslint-disable-next-line security/detect-non-literal-require
    const loadFile = require(`./data/${fileName}.json`);
    res.jsonp(Object.assign({ status: 200 }, loadFile));
  });
});

server.use(jsonServer.bodyParser);

// Use default router
server.listen(2020, () => {
  // eslint-disable-next-line no-console
  console.log('JSON Server is running');
});
