var mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
  firstname: String, 
  lastname: String, 
  lastname2: String, 
  fullname: String, 
  birthdate: String, 
  genre: String, 
  civilstatus: String, 
  telphone: String, 
  teltype: String, 
  emergencytel: String, 
  emegencycontact: String, 
  email: String, 
  insurance: String, 
});

module.exports = mongoose.model('Patient', PatientSchema); 