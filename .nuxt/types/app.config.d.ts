
import type { Defu } from 'defu'
import cfg0 from "/Users/marco/Documents/Coding/personal-website/app.config"
import cfg1 from "/Users/marco/Documents/Coding/personal-website/node_modules/@nuxt-themes/alpine/app.config"
import cfg2 from "/Users/marco/Documents/Coding/personal-website/node_modules/@nuxt-themes/typography/app.config"
import cfg3 from "/Users/marco/Documents/Coding/personal-website/node_modules/@nuxt-themes/elements/app.config"

declare const inlineConfig = {}
type ResolvedAppConfig = Defu<typeof inlineConfig, [typeof cfg0, typeof cfg1, typeof cfg2, typeof cfg3]>

declare module '@nuxt/schema' {
  interface AppConfig extends ResolvedAppConfig { }
}
