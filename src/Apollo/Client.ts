import ApolloClient from 'apollo-boost'
import { defaults, resolvers } from './LocalState'

export default new ApolloClient({
  uri: 'http://http://instargram-api.webchemist.net/',
  clientState: {
    defaults,
    resolvers,
  },
})
