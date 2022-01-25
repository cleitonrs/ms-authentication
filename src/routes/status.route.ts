import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const statusRoute = Router()

statusRoute.get('/status', (req: Request, res: Response, Next: NextFunction) => {
  res.send(StatusCodes.OK)
})

export default statusRoute