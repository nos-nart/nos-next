import { apiHandler } from '../../handlers/api-handlers'

const todosController = {
  GET: async (req, res) => {
    
  }
}

export default function todos(req, res) {
  const handler = apiHandler(todosController)
  return handler(req, res)
}
