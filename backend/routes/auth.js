const router = require('express').Router();
const { User, validate } = require('../models/userModel');
const Joi = require('joi');
const bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });
        if (!user) return res.status(401).send({ message: "Invalid email or password" });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(401).send({ message: "Invalid email or password" });

        const token = user.generateAuthToken();

        res.status(200).send({ data: token, message: "Logged in successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});

const validateAuth = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().email().label("Email"),
        password: Joi.string().required().label("Password")
    });
    return schema.validate(data);
}

module.exports = router;