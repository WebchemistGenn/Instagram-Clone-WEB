import ApolloClient from 'apollo-boost'
import { defaults, resolvers } from './LocalState'

export default new ApolloClient({
  uri: 'http://instagram-api.webchemist.net/',
  clientState: {
    defaults,
    resolvers,
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
})
