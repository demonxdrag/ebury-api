import { MockWallets } from '../mocks/wallet'
import { Router } from 'express'
import { Wallet } from '../models/wallet'

const router = Router()
const wallets: Wallet[] = MockWallets // Mock database

// Create a new wallet
router.post('/', (req, res) => {
	const wallet: Wallet = req.body
	wallets.push(wallet)
	res.status(201).send(wallet)
})

// Read all wallets
router.get('/', (req, res) => {
	res.send(wallets)
})

// Read a specific wallet by account_id
router.get('/:account_id', (req, res) => {
	const wallet = wallets.find(w => w.account_id === req.params.account_id)
	if (wallet) {
		res.send(wallet)
	} else {
		res.status(404).send({ message: 'Wallet not found' })
	}
})

// Update a specific wallet by account_id
router.put('/:account_id', (req, res) => {
	const index = wallets.findIndex(w => w.account_id === req.params.account_id)
	if (index !== -1) {
		wallets[index] = req.body
		res.send(wallets[index])
	} else {
		res.status(404).send({ message: 'Wallet not found' })
	}
})

// Delete a specific wallet by account_id
router.delete('/:account_id', (req, res) => {
	const index = wallets.findIndex(w => w.account_id === req.params.account_id)
	if (index !== -1) {
		const deletedWallet = wallets.splice(index, 1)
		res.send(deletedWallet[0])
	} else {
		res.status(404).send({ message: 'Wallet not found' })
	}
})

export default router
