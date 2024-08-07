import { Wallet } from '../models/wallet';
import app from '../app';
import request from 'supertest';

describe('Wallet API', () => {
  const testWallet: Wallet = {
    account_id: '1',
    company_name: 'Test Company',
    amount: {
      amount: '1000',
      currency: 'USD'
    },
    credit_debit_indicator: 'Credit',
    datetime: new Date().toISOString()
  };

  // Create the wallet before each test
  beforeEach(async () => {
    await request(app).post('/api/wallets').send(testWallet);
  });

  // Clear wallets after each test
  afterEach(async () => {
    await request(app).delete(`/api/wallets/${testWallet.account_id}`);
  });

  it('should create a new wallet', async () => {
    const newWallet: Wallet = {
      account_id: '2',
      company_name: 'New Company',
      amount: {
        amount: '2000',
        currency: 'EUR'
      },
      credit_debit_indicator: 'Debit',
      datetime: new Date().toISOString()
    };
    const response = await request(app)
      .post('/api/wallets')
      .send(newWallet)
      .expect(201);
    expect(response.body).toEqual(newWallet);
  });

  it('should get all wallets', async () => {
    const response = await request(app)
      .get('/api/wallets')
      .expect(200);
    expect(response.body).toEqual(expect.arrayContaining([testWallet]));
  });

  it('should get a specific wallet by account_id', async () => {
    const response = await request(app)
      .get(`/api/wallets/${testWallet.account_id}`)
      .expect(200);
    expect(response.body).toEqual(testWallet);
  });

  it('should update a specific wallet by account_id', async () => {
    const updatedWallet: Wallet = {
      ...testWallet,
      company_name: 'Updated Company'
    };
    const response = await request(app)
      .put(`/api/wallets/${testWallet.account_id}`)
      .send(updatedWallet)
      .expect(200);
    expect(response.body.company_name).toEqual('Updated Company');
  });

  it('should delete a specific wallet by account_id', async () => {
    const response = await request(app)
      .delete(`/api/wallets/${testWallet.account_id}`)
      .expect(200);
    expect(response.body).toEqual(testWallet);
  });

  it('should return 404 for a non-existent wallet', async () => {
    await request(app)
      .get('/api/wallets/non-existent-id')
      .expect(404);
  });
});
