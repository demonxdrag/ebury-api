import { NextFunction, Request, Response } from 'express'

const delayMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // I decided to remove this delay from tests because it takes around 1 minute to run otherwise
	if (process.env.NODE_ENV !== 'test') {
		setTimeout(() => {
			next()
		}, 3000) // 3 seconds
	} else {
		next()
	}
}

export default delayMiddleware
