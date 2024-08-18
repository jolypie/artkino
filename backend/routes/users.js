const router = require('express').Router();
const { User, validate } = require('../models/userModel');
const bcrypt = require('bcrypt');

router.post("/register", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(409).send({message: "User already registered"});
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        await new User({ ...req.body, password: hashedPassword }).save();
        res.status(201).send({message: "User registered successfully"});

    } catch (error) {
        console.error(error);  // Добавить отладочные сообщения
        res.status(500).send({message: "Internal server error"});
    }
});

module.exports = router;