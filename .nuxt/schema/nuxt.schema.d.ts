export interface NuxtCustomSchema {
 appConfig?: {
  /**
   * Nuxt Icon
   * 
   * Configure the defaults of Nuxt Icon
   * 
  */
  nuxtIcon?: {
   /**
    * Icon Size
    * 
    * Set the default icon size
    * 
    * @default ""
    * 
    * @studioIcon material-symbols:format-size-rounded
   */
   size?: string,

   /**
    * CSS Class
    * 
    * Set the default CSS class
    * 
    * @default ""
    * 
    * @studioIcon material-symbols:css
   */
   class?: string,

   /**
    * Icon aliases
    * 
    * Define Icon aliases to update them easily without code changes.
    * 
    * 
    * @studioIcon material-symbols:star-rounded
    * 
    * @studioInputObjectValueType icon
   */
   aliases?: { [alias: string]: string },
  },

  /**
   * Prose configuration from Nuxt Typography
   * 
   * 
   * @studioIcon material-symbols:short-text-rounded
   * 
   * @studioInput icon
  */
  prose?: {
   /**
    * Copy button (used in code blocks)
    * 
    * 
    * @studioIcon material-symbols:content-copy
   */
   copyButton?: {
    /**
     * Icon displayed to copy
     * 
     * @default "ph:copy"
    */
    iconCopy?: string,

    /**
     * Icon displayed when copied
     * 
     * @default "ph:check"
    */
    iconCopied?: string,
   },

   /**
    * Default configuration for all headings (h1, h2, h3, h4, h5 and h6)
    * 
    * 
    * @studioIcon material-symbols:title
   */
   headings?: {
    /**
     * Default icon for anchor link on hover
     * 
     * @default "ph:link"
    */
    icon?: string|false,
   },

   /**
    * First heading configuration
    * 
    * 
    * @studioIcon material-symbols:format-h1
   */
   h1?: {
    /**
     * Icon displayed for anchor link on hover
     * 
     * @default ""
    */
    icon?: string|false,
   },

   /**
    * Second heading configuration
    * 
    * 
    * @studioIcon material-symbols:format-h2
   */
   h2?: {
    /**
     * Icon displayed for anchor link on hover
     * 
     * @default ""
    */
    icon?: string|false,
   },

   /**
    * Third heading configuration
    * 
    * 
    * @studioIcon material-symbols:format-h3
   */
   h3?: {
    /**
     * Icon displayed for anchor link on hover
     * 
     * @default ""
    */
    icon?: string|false,
   },

   /**
    * Fourth heading configuration
    * 
    * 
    * @studioIcon material-symbols:format-h4
   */
   h4?: {
    /**
     * Icon displayed for anchor link on hover
     * 
     * @default ""
    */
    icon?: string|false,
   },

   /**
    * Fifth heading configuration
    * 
    * 
    * @studioIcon material-symbols:format-h5
   */
   h5?: {
    /**
     * Icon displayed for anchor link on hover
     * 
     * @default ""
    */
    icon?: string|false,
   },

   /**
    * Sixth heading configuration
    * 
    * 
    * @studioIcon material-symbols:format-h6
   */
   h6?: {
    /**
     * Icon displayed for anchor link on hover
     * 
     * @default ""
    */
    icon?: string|false,
   },
  },

  /**
   * Alpine theme configuration.
   * 
   * 
   * @studio-icon carbon:blog
  */
  alpine?: {
   /**
    * Website title, used as header default title and meta title.
    * 
    * @default "Alpine"
    * 
    * @studio-icon material-symbols:title
   */
   title?: string,

   /**
    * Website description, used for meta description.
    * 
    * @default "The minimalist blog theme"
    * 
    * @studio-icon material-symbols:description
   */
   description?: string,

   /**
    * Cover image.
    * 
    * 
    * @example '/cover.jpg'
    * 
    * @studio-icon dashicons:cover-image
   */
   image?: {
    /** @default "/social-card-preview.png" */
    src?: string,

    /** @default "An image showcasing my project." */
    alt?: string,

    /** @default 400 */
    width?: number,

    /** @default 300 */
    height?: number,
   },

   /**
    * Header configuration.
    * 
    * 
    * @studio-icon fluent:document-header-24-regular
   */
   header?: {
    /**
     * Header position.
     * 
     * @default "right"
    */
    position?: 'left'|'center'|'right',

    /**
     * Header logo.
     * 
     * 
     * @studio-icon dashicons:cover-image
    */
    logo?: {
     /**
      * Path of the logo.
      * 
      * @default "/logo.svg"
     */
     path?: string,

     /**
      * Path of the logo in dark mode.
      * 
      * Leave it empty if you want to use the same logo.
      * 
      * @default "/logo-dark.svg"
     */
     pathDark?: string,

     /**
      * Alt description for the image.
      * 
      * @default "Alpine theme logo"
     */
     alt?: string,
    },
   },

   /**
    * Footer configuration.
    * 
    * 
    * @studio-icon fluent:document-footer-24-regular
   */
   footer?: {
    /**
     * Footer credits.
     * 
    */
    credits?: {
     /**
      * Toggle the footer.
      * 
      * @default true
     */
     enabled?: boolean,

     /**
      * Text to be displayed.
      * 
      * @default "Alpine"
     */
     text?: string,

     /**
      * GitHub repository link.
      * 
      * @default "https://www.github.com/nuxt-themes/alpine"
     */
     repository?: string,
    },

    /**
     * Toggle the navigation.
     * 
     * @default true
    */
    navigation?: boolean,

    /**
     * Footer position.
     * 
     * @default "center"
    */
    alignment?: 'left'|'center'|'right',

    /**
     * Footer message.
     * 
     * Leave it empty to disable.
     * 
     * @default "Follow me on"
    */
    message?: string,
   },

   /**
    * Icons to be added to Social Icons in footer.
    * 
    * 
    * @studio-icon material-symbols:add-link
   */
   socials?: {
    /**
     * Twitter handle
     * 
     * @default ""
     * 
     * @example 'nuxt_js'
     * 
     * @studio-icon simple-icons:twitter
    */
    twitter?: string,

    /**
     * Instagram handle
     * 
     * @default ""
     * 
     * @example 'wearenuxt'
     * 
     * @studio-icon simple-icons:instagram
    */
    instagram?: string,

    /**
     * GitHub path
     * 
     * @default ""
     * 
     * @example 'nuxt-themes/alpine'
     * 
     * @studio-icon simple-icons:github
    */
    github?: string,

    /**
     * GitHub path
     * 
     * @default ""
     * 
     * @example 'nuxt'
     * 
     * @studio-icon simple-icons:facebook
    */
    facebook?: string,

    /**
     * Medium handle
     * 
     * @default ""
     * 
     * @example 'nuxt'
     * 
     * @studio-icon simple-icons:medium
    */
    medium?: string,

    /**
     * Youtube handle
     * 
     * @default ""
     * 
     * @example '@nuxtlabs'
     * 
     * @studio-icon simple-icons:youtube
    */
    youtube?: string,
   },

   /**
    * Contact form configuration.
    * 
    * 
    * @studio-icon ion:ios-paperplane
   */
   form?: {
    /**
     * Success message.
     * 
     * @default "Message sent. Thank you!"
    */
    successMessage?: string,
   },
  },
 },
}
export type CustomAppConfig = Exclude<NuxtCustomSchema['appConfig'], undefined>

declare module '@nuxt/schema' {
  interface NuxtConfig extends NuxtCustomSchema {}
  interface NuxtOptions extends NuxtCustomSchema {}
  interface AppConfigInput extends CustomAppConfig {}
  interface AppConfig extends CustomAppConfig {}
}