const cadastro = require ("./cadastro");
const login = require ("./login");

const routes = (app) => {
    app.use(cadastro)
    app.use(login)
}

module.exports = routes