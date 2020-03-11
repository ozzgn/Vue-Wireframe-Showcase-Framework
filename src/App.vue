<template>
  <div id="wrapper" :class="wrapperClass">
    <MenuToggleBtn></MenuToggleBtn>

    <Menu></Menu>

    <ContentOverlay></ContentOverlay>

    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuToggleBtn from "@/components/MenuToggleBtn.vue";
import Menu from "@/components/Menu.vue";
import ContentOverlay from "@/components/ContentOverlay.vue";
import JQuery from "jquery";
window.$ = JQuery;

export default {
  components: {
    MenuToggleBtn,
    Menu,
    ContentOverlay
  },

  created() {
    window.bus.$on("menu/toggle", () => {
      window.setTimeout(() => {
        this.isOpenMobileMenu = !this.isOpenMobileMenu;
      }, 200);
    });

    window.bus.$on("menu/closeMobileMenu", () => {
      this.isOpenMobileMenu = false;
    });
  },

  data() {
    return {
      isOpenMobileMenu: false
    };
  },

  computed: {
    wrapperClass() {
      return {
        toggled: this.isOpenMobileMenu === true
      };
    }
  }
};
</script>

<style lang="scss">
@import "styles/main";
@import "styles/wireframe-menu/_layout";
@import "styles/wireframe-menu/_menu-toggle-btn";
@import "styles/wireframe-menu/_menu";
@import "styles/wireframe-menu/_content-overlay";
@import "styles/wireframe-menu/_media-queries";
</style>
