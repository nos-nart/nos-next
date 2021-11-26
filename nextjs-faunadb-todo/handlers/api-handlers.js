import { errorHandler } from './error-handler'

export { apiHandler }

function apiHandler(handler) {
  return async (req, res) => {
    const method = req.method.toLowerCase()
    // Check handler supports HTTP method
    if (handler[method]) {
      try {
        await handler[req.method](req, res)
      } catch (err) {
        // global error handler
        errorHandler(err, res)
      }
    } else {
      res.setHeader('Allow', Object.keys(handler))
      return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  }
}
