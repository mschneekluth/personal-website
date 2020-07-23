const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/home/marco/Dokumente/Coding/gridsome-portfolio-starter/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--documentation-vue" */ "/home/marco/Dokumente/Coding/gridsome-portfolio-starter/src/templates/Documentation.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/home/marco/Dokumente/Coding/gridsome-portfolio-starter/src/pages/Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/home/marco/Dokumente/Coding/gridsome-portfolio-starter/src/templates/Post.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--docs-vue" */ "/home/marco/Dokumente/Coding/gridsome-portfolio-starter/src/pages/Docs.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/home/marco/Dokumente/Coding/gridsome-portfolio-starter/src/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/marco/Dokumente/Coding/gridsome-portfolio-starter/src/pages/Index.vue")

export default [
  {
    path: "/tag/:id/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/docs/vue-components-in-markdown/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--vue-components-in-markdown-md" */ "/home/marco/Dokumente/Coding/gridsome-portfolio-starter/docs/vue-components-in-markdown.md")
    }
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/hello-world/",
    component: c4
  },
  {
    path: "/docs/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
