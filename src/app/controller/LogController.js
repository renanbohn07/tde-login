const Login = require("../models/Login");

let login;
let password;

class LogController{
    async logar (req, res) {
        try{
            const user = req.body.login
            const senha = req.body.senha
            const procuraUser = await Login.findOne ({"login":user, "password":senha})
            if (!procuraUser){
                return res.render ("index")
            } else {
                req.session.login = user
                return res.render ("logado", {
                    login: user
                })
            }
        } catch (error) {
            return res.send (error)
        }
    }
    async home (req, res){
        try {
            return res.render ("index")
        } catch (error) {
            return res.send (error)
        }
    }  
}

module.exports = new LogController ()