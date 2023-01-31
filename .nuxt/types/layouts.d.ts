import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "article" | "default" | "page"
declare module "/Users/marco/Documents/Coding/personal-website/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}