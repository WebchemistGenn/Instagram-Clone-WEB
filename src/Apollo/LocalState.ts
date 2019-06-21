export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem('token')) || false,
}

export const resolvers = {
  Mutation: {
    logUserIn: (
      _: any,
      { token }: { token: string },
      { cache }: { cache: any }
    ) => {
      localStorage.setItem('token', token)
      cache.writeData({
        data: {
          isLoggedIn: true,
        },
      })
      return null
    },
    logUserOut: (_: any, __: any, { cache }: { cache: any }) => {
      localStorage.removeItem('token')
      window.location.reload();
      return null
    },
  },
}
