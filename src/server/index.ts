import express from 'express'

const app = express()

// Start writing server api here
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' })
})

export const handler = app
