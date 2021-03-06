module.exports = {
  siteMetadata: {
    title: 'Gatsby With Apollo',
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'Query',
        fieldName: 'xxx',
        url: 'https://gql-2.test.serafim.help/v1/graphql',
        headers: {
          'x-hasura-admin-secret': '123-123-123-123-123',
        },
      },
    },
  ],
};
