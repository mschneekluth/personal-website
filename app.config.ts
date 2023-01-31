export default defineAppConfig({
  alpine: {
    title: 'Alpine',
    description: 'The minimalist blog theme',
    // image: {
    //   src: '/social-card-preview.png',
    //   alt: 'An image showcasing my project.',
    //   width: 400,
    //   height: 300
    // },
    header: {
      position: 'center', // possible value are : | 'left' | 'center' | 'right'
    },

    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Folge mir' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'mschneekluth',
      github: 'mschneekluth',
      // instagram: 'atinuxt',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/marco-schneekluth-03446313b/'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
