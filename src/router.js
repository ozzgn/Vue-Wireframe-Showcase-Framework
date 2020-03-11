import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Styleguide from "./views/Styleguide.vue";
import ThumbnailsPrelogin from "./views/product-thumbnails/prelogin.vue";
import ThumbnailsPostlogin from "./views/product-thumbnails/postlogin.vue";
import ProductdetailsPrelogin from "./views/product-details/prelogin.vue";
import ProductdetailsPostlogin from "./views/product-details/postlogin.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    // loads each component
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/styleguide",
      name: "styleguide",
      component: Styleguide
    },
    {
      path: "/thumbnails-prelogin",
      name: "thumbnailsprelogin",
      component: ThumbnailsPrelogin
    },
    {
      path: "/thumbnails-postlogin",
      name: "thumbnailspostlogin",
      component: ThumbnailsPostlogin
    },
    {
      path: "/product-details-prelogin",
      name: "prelogin",
      component: ProductdetailsPrelogin
    },
    {
      path: "/product-details-postlogin",
      name: "postlogin",
      component: ProductdetailsPostlogin
    },
    {
      path: "/page/:sectionSlug",
      name: "dynamicContent",
      // route level code-splitting
      // this generates a separate chunk (dynamicContent.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "dynamicContent" */ "./views/DynamicContent.vue"
        )
    }
  ]
});
