const mongoose = require('mongoose');
const URI = 'mongodb+srv://paulgarciag:lIrfdSU3QgxJAi19@cluster0.5ljukgd.mongodb.net/hospital-excel?retryWrites=true&w=majority';

mongoose.connect(URI)
  .then(db => console.log('Db conectada'))
  .catch(error => console.error("XD"));

module.exports = mongoose;
