import mongoose from 'mongoose';

function dbConnect() {
  mongoose.connect(
    'mongodb+srv://lena_mas:Uspech1!@cluster0.4nyxyyp.mongodb.net/kanban?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('CONNECTED');
  });
}

export default dbConnect;
