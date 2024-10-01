const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/Users"); // Adjust the import path as per your directory structure

// Register User - api/auth/register
const register = async (req, res) => {
    try {
        const { name, email, password, role, service } = req.body;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already registered" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new UserModel({ name, email, password: hashedPassword, role, service });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error registering user" });
    }
};

// Login User - api/auth/login
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (isMatch) {
                const token = jwt.sign({ email: user.email, role: user.role }, "jwt-secret-key", { expiresIn: '10d' });
                res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' })
                    .status(200).json({ message: "Login successful", role: user.role });
            } else {
                res.status(401).json({ error: "Incorrect password" });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error finding user" });
    }
};

module.exports = {
    login,
    register,
};
