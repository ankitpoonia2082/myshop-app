const { model, Schema } = require("mongoose");
// Schema for user registration----------->
const registerSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const registerModel = new model("Register", registerSchema);

module.exports = registerModel