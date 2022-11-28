const { Error } = require("mongoose");
const Login = require("../models/Login");

class CadastroController {
    async criarCadastro (req,res) {
        const login = req.body.login
        try{
            const reqBody = req.body
            if (reqBody.password == reqBody.confirma) {
                req.session.login = login
                const cadastroCriado = await Login.create (reqBody)

                return res.render ("logado", {
                    login: login
                })
            } else {
                return res.render ("cadastro")
                send (Error)
            }
        } catch (error) {
            return res.send(error)
        }
    }
    async paginaGet (req,res) {
        return res.render ("cadastro")
    }
}

module.exports = new CadastroController ()