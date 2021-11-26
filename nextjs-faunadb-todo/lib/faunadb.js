import faunadb from 'faunadb'

// Checking if the app is in production
// const isProd = process.env.NODE_ENV === 'production'

export const q = faunadb.query

export function getClient(secret) {
  return new faunadb.Client({
    secret,
    domain: process.env.FAUNADB_DOMAIN
  })
}

export const adminClient = getClient(process.env.FAUNADB_SECRET_KEY)
