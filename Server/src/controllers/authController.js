import User from "../models/User.js";

// Регистрация
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Проверка, есть ли уже такой email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "This email is already taken" });
        }

        // Создаём пользователя (пароль захешируется автоматически)
        const user = await User.create({ name, email, password });

        res.status(201).json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Ошибка сервера", error: error.message });
    }
};

// Вход
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Ищем пользователя
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(401).json({ message: "Incorrect email or password" });
        }

        // Проверяем пароль
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Incorrect email or password" });
        }

        res.json({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Ошибка сервера" });
    }
}; 