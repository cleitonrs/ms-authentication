import express, {Request, Response, NextFunction } from 'express'
import usersRoute from './routes/users.route'

const app = express()

app.use(usersRoute)

app.listen(3000, () => {
  console.log("Server running on Port: 3000")
})