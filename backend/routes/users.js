const router = require('express').Router();
const { User, validate } = require('../models/userModel');
const bcrypt = require('bcrypt');
const authenticateToken = require('../middleware/authMiddleware');

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
        console.error(error);
        res.status(500).send({message: "Internal server error"});
    }
});

router.get('/username', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).exec();
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send({ username: user.username });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
});

module.exports = router;