const queryHasura = require("../../services/queryHasura");
const { gql } = require("graphql-request");

module.exports = async () => {
  try {
    // Hämta Matchi användarnamn och lösenord
    const res = await queryHasura(
      gql`
        query MyQuery($booking_system_id: smallint!) {
          booking_system_login_by_pk(booking_system_id: $booking_system_id) {
            password
            username
          }
        }
      `,
      { booking_system_id: 1 }
    );
    const loginData = res.booking_system_login_by_pk;
    // Logga in och få cookies
    const formData = new URLSearchParams();
    formData.append("j_username", loginData.username);
    formData.append("j_password", loginData.password);

    const body = formData.toString().replace(/\+/g, "%20");

    const response = await fetch(
      "https://www.matchi.se/j_spring_security_check",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "application/x-www-form-urlencoded; charset=utf-8",
          Connection: "close",
          Host: "www.matchi.se",
        },
        credentials: "include",
        redirect: "manual",
      }
    );

    // console.log(response);
    const cookies = response.headers.get("Set-Cookie");

    console.log(response.headers.get("Location"));
    function replaceCommasWithSemicolons(str) {
      return str.replace(/,/g, ";");
    }
    const formattedCookies = replaceCommasWithSemicolons(cookies);
    return formattedCookies;
  } catch (error) {
    throw new Error(error);
  }
};
