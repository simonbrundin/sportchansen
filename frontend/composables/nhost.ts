import { NhostClient } from "@nhost/nhost-js";
const myNhostClient = new NhostClient({
  authUrl: "https://sportchansen-auth.noomi.land",
  storageUrl: "localhost:4000",
  graphqlUrl: "localhost:8080",
  functionsUrl: "localhost:4000",
  autoSignIn: true,
  autoRefreshToken: true,
});
export const nhost = myNhostClient;
