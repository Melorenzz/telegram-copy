import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173", // фронтенд
    credentials: true, // если нужны куки
}));
// Секрет для JWT
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

// "База данных" в памяти
const users = []; // { id, email, username, displayName, description, passwordHash }
const messages = []; // { id, senderId, receiverId, content, createdAt }

// === Регистрация ===
app.post("/register", async (req, res) => {
    const { email, username, displayName, description, password } = req.body;

    // Проверяем уникальность email и username
    if (users.find(u => u.email === email)) return res.status(400).json({ error: "Email уже занят" });
    if (users.find(u => u.username === username)) return res.status(400).json({ error: "Username уже занят" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const id = users.length + 1;

    const newUser = { id, email, username, displayName, description, passwordHash: hashedPassword };
    users.push(newUser);

    res.json({ id, email, username, displayName, description });
});

// === Авторизация ===
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (!user) return res.status(401).json({ error: "Пользователь не найден" });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ error: "Неверный пароль" });

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
});

// === Поиск пользователя по username ===
app.get("/users/:username", (req, res) => {
    const user = users.find(u => u.username === req.params.username);
    if (!user) return res.status(404).json({ error: "Пользователь не найден" });

    res.json({ id: user.id, email: user.email, username: user.username, displayName: user.displayName, description: user.description });
});

// === Отправка сообщения ===
app.post("/messages", (req, res) => {
    const { token, receiverUsername, content } = req.body;
    if (!token) return res.status(401).json({ error: "Нет токена" });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const senderId = decoded.id;

        const receiver = users.find(u => u.username === receiverUsername);
        if (!receiver) return res.status(404).json({ error: "Получатель не найден" });

        const id = messages.length + 1;
        const newMessage = { id, senderId, receiverId: receiver.id, content, createdAt: new Date() };
        messages.push(newMessage);

        res.json(newMessage);
    } catch (err) {
        res.status(401).json({ error: "Неверный токен" });
    }
});

// === Получение сообщений между двумя пользователями ===
app.get("/messages/:username", (req, res) => {
    const token = req.headers.token;
    if (!token) return res.status(401).json({ error: "Нет токена" });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const senderId = decoded.id;

        const receiver = users.find(u => u.username === req.params.username);
        if (!receiver) return res.status(404).json({ error: "Пользователь не найден" });

        const conversation = messages.filter(
            m =>
                (m.senderId === senderId && m.receiverId === receiver.id) ||
                (m.senderId === receiver.id && m.receiverId === senderId)
        );

        res.json(conversation);
    } catch (err) {
        res.status(401).json({ error: "Неверный токен" });
    }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
