import express, {Request, Response, NextFunction } from 'express'
import statusRoute from './routes/status.route'
import usersRoute from './routes/users.route'

const app = express()

//  App Routes setups
app.use(statusRoute)
app.use(usersRoute)


// App Setups
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Server init
app.listen(3000, () => {
  console.log("Server running on Port: 3000")
})