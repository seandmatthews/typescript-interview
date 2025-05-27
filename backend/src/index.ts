import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Types
interface User {
    id: string;
    username: string;
    email: string;
}

// In-memory storage (replace with database in production)
let users: User[] = [];

// Routes
app.post('/api/users', (req: Request, res: Response) => {
    console.log(req.body);
    const { username, email } = req.body;
    const newUser: User = {
        id: Date.now().toString(),
        username,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.get('/api/users', (_req: Request, res: Response) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});