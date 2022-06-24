const express= require('express')
const patientRouter=express.Router()
const patientController= require('../controllers/patient.controller')
patientRouter.get('/',patientController.getLandingPage)

patientRouter.post('/register',patientController.registerPatient)



module.exports=patientRouter