
const registerModel = require("../models/registerModel");

const registerUser = async (req, res) => {

        try {
            const user = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            }
            const register = new registerModel(user);
            result = await register.save();
            res.send({ msg: "Registered successfully" });
        } catch (err) {
            console.log("🚀🚀🚀 Registrtion Error :->", err)
            res.status(400).send(err);
        }
}

module.exports = { registerUser }