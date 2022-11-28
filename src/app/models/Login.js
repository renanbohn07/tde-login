const mongoose = require("mongoose");

const Acesso = new mongoose.Schema ({
    login: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Login = mongoose.model ("Login", Acesso);

module.exports = Login;