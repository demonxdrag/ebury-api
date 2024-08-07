import cors from 'cors';
import express from 'express';
import walletRoutes from './routes/wallet';

const app = express();

// Use CORS middleware
app.use(cors());

app.use(express.json());
app.use('/api/wallets', walletRoutes);

export default app;
