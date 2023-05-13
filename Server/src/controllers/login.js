const ussers = require("../utils/users")

const login = (req, res) => {
    const { email, password } = req.query;
    const found = ussers.find(usser => usser.email === email)

    if(found?.password === password) {
        return res.status(200).json({access: true});
    }
    else {
        return res.status(200).json({access: false});
    }
}

module.exports = {
    login
}