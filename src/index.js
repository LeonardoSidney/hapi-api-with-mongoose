const Hapi = require('@hapi/hapi');
const utils = require('./lib/common').utils;
const mongoConnect = require('./server/mongooseConnection').mongoConnect;

const init = async () => {

  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || "0.0.0.0"
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
      await utils.sleep(100)
      return h.response(true).code(200)
    }
  });

  server.events.on('response', function (request) {
    const microseconds = request.info.completed - request.info.received
    const ip = request.info.remoteAddress
    const path = request.path
    const method = request.method.toUpperCase()
    const statusCode = request.response.statusCode
    console.log(`${ip}: ${path} ${method} ${statusCode} -- ${microseconds} ms`);
  });

  await server.start();
  console.log('Server running on %s', server.info.uri)
};

process.on('unhandledRejection', (err) => {

  console.log(err)
  process.exit(1)
});

init();
mongoConnect()
