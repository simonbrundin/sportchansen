const { GraphQLClient, gql } = require("graphql-request");
const adminToken = require("./hasuraAdminToken");

module.exports = async (query, variables) => {
  const endpoint = process.env.HASURA_SERVER_URL;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${adminToken()}`,
    },
  });

  // const query = gql`
  //   query MyQuery($booking_system_id: smallint = "1") {
  //     booking_system_login_by_pk(booking_system_id: $booking_system_id) {
  //       password
  //       username
  //     }
  //   }
  // `;
  try {
    const data = await graphQLClient.request(query, variables);
    // const cleanData = Object.values(data)[0];
    // return cleanData
    return data;
  } catch (error) {
    console.error(error);
  }
};
