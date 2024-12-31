import { defineConfig } from "astro/config";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://sirius.menu/",
  integrations: [sitemap(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), compress(), partytown()]
});