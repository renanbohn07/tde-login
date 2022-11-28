const express = require ("express");

const LogController = require ("../controller/LogController");

const router = express.Router ();

router
    .get ("/", LogController.home)
    .post ("/", LogController.logar)

module.exports = router