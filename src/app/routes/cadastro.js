const express = require ("express");
const CadastroController = require ("../controller/CadastroController");

const router = express.Router ()

router
    .get("/cadastro.ejs", CadastroController.paginaGet)
    .post("/cadastro.ejs", CadastroController.criarCadastro)


module.exports = router