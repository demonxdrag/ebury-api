import app from './app'
import os from 'os'

const PORT = process.env.PORT || 3000

const getLocalIp = (): string => {
	const interfaces = os.networkInterfaces()
	for (const name of Object.keys(interfaces)) {
		for (const iface of interfaces[name]!) {
			if (iface.family === 'IPv4' && !iface.internal) {
				return iface.address
			}
		}
	}
	return 'localhost'
}

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
	console.log(`Server is accessible on your local network at http://${getLocalIp()}:${PORT}`)
})
