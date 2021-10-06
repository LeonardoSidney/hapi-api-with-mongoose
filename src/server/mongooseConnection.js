const mongoose = require('mongoose')



const mongoConnect = async () => {

  console.log('starting connection with mongo DB');

  await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

  mongoose.connection.on('connecting', event => {
    console.log('Mongo Connecting...');
  });

  mongoose.connection.on('connected', event => {
    console.log('Mongo connected!');
  });

  mongoose.connection.on('disconnecting', event => {
    console.log('Mongo disconnecting...');
  });

  mongoose.connection.on('disconnected', event => {
    console.log('Mongo was disconnected!');
  });

  mongoose.connection.on('reconnected', event => {
    console.log('Mongo reconnected...');
  });

  mongoose.connection.on('error', err => {
    console.log('Mongo error on connect!');
    logError(err);
  });

}

const mongoClose = () => {
  mongoose.connection.close()
}

module.exports = {
  mongoConnect,
  mongoClose,
}
