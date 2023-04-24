// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/apollo",
    "@unocss/nuxt",
    "@nuxt/image-edge",
    "@nuxtjs/device",
  ],

  css: [
    // SCSS file in the project
    "@/assets/css/main.scss",
  ],

  imports: {
    dirs: ["./stores"],
  },

  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint:
          process.env.GRAPHQL_URL ||
          "https://sportchansen-gql.noomi.land/v1/graphql",
      },
      swish: {
        httpEndpoint: "https://sportchansen-swish.noomi.land/",
      },
    },
  },
});
