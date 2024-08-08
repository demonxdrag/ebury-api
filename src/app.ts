import cors from 'cors';
import delayMiddleware from './middlewares/delayMiddleware';
import express from 'express';
import walletRoutes from './routes/wallet';

const app = express();

app.use(cors());
app.use(express.json());

// This middleware will delay responses by 3 seconds
app.use(delayMiddleware);

// Routes
app.use('/api/wallets', walletRoutes);

export default app;
