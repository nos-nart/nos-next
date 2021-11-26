export { errorHandler }

function errorHandler(err, res) {
  if (typeof err === 'string') {
    // Application error
    const is404 = err.toLowerCase().endsWith('not found')
    return res.status(is404 ? 404 : 400).json({ message: err })
  }

  // Authorization error
  if (err.name === 'UnauthorizedError') {
    // JWT err
    return res.status(401).json({ message: 'Invalid token' })
  }

  console.error(err)
  return res.status(500).json({ message: err.message })
}
