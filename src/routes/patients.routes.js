const express = require('express');
const router = express.Router();

// User Model
const Patient = require('../models/patient');

router.get('/', async (req, res) => {
  const filter = {};
  const all = await Patient.find(filter);

  res.json({error: false, patients: all});
});

router.post('/', async (req, res) => {
  let newPatient = new Patient(req.body);
  console.log(req.body);

  newPatient.save((err, result) => {
    if(err){
      res.json({error: true, message: "Error al registrar paciente."});
    } else {
      res.json({error: false});
    }
  })
})

module.exports = router;