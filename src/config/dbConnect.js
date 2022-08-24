import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://devSam:Sam0492@nodejs.llumm6i.mongodb.net/Node-Express'
);

let db = mongoose.connection;
export default db;
