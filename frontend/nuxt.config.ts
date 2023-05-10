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
    "@unocss/nuxt",
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
  plugins: [{ src: "~/plugins/vue-stripe.js", ssr: false }],

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
