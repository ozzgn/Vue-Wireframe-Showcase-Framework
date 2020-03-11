<template>
  <div class="menu-container" id="menu-container">
    <!-- root level itens -->
    <ul class="menu">
      <li class="menu__top">
        <router-link to="/" class="menu__logo">
          <img src="/logo.png" alt="icon" />
        </router-link>
        <a href="#" @click.prevent="openProjectLink" class="menu__title">Project Title</a>
      </li>

      <li>
        <a href="#" @click.prevent="updateMenu('home')" :class="highlightSection('home')">
          <i class="fa fa-home menu__icon no-child" aria-hidden="true"></i>
          Read Me
        </a>
      </li>

      <li>
        <a class="menu__link" target="_blank" href="#">
          <i class="fa fa-atlas menu__icon no-child" aria-hidden="true"></i>
          Project Info
        </a>
      </li>

      <li>
        <router-link
          class="nav-link"
          to="/styleguide"
          @click.prevent="updateMenu('styleguide')"
          :class="highlightSection('styleguide')"
        >
          <i class="fa fa-palette menu__icon no-child" aria-hidden="true"></i>
          Style Guide
        </router-link>
      </li>

      <div class="menu-cat-divider">
        <i class="far fa-star menu__icon" aria-hidden="true"></i>
        Catalog
      </div>

      <li>
        <a
          href="#"
          @click.prevent="updateMenu('productthumbnails')"
          :class="highlightSection('productthumbnails')"
        >
          <i class="fa fa-th menu__icon" aria-hidden="true"></i>
          Product Thumbnails
          <i
            class="fa fa-chevron-right menu__arrow-icon"
            aria-hidden="true"
          ></i>
        </a>
      </li>

      <li>
        <a
          href="#"
          @click.prevent="updateMenu('productdetails')"
          :class="highlightSection('productdetails')"
        >
          <i class="fa fa-store menu__icon" aria-hidden="true"></i>
          Product Details
          <i
            class="fa fa-chevron-right menu__arrow-icon"
            aria-hidden="true"
          ></i>
        </a>
      </li>

      <div class="menu-cat-divider">
        <i class="far fa-star menu__icon" aria-hidden="true"></i>
        Dashboard
      </div>

      <li>
        <a href="#" @click.prevent="updateMenu('dashboard')" :class="highlightSection('dashboard')">
          <i class="fa fa-user-edit menu__icon" aria-hidden="true"></i>
          Dashboard
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>

      <li>
        <a
          href="#"
          @click.prevent="updateMenu('claimhistory')"
          :class="highlightSection('claimhistory')"
        >
          <i class="fa fa-sort-amount-down menu__icon" aria-hidden="true"></i>
          Order and Claim History
          <i
            class="fa fa-chevron-right menu__arrow-icon"
            aria-hidden="true"
          ></i>
        </a>
      </li>

      <li>
        <a href="#" @click.prevent="updateMenu('fileclaim')" :class="highlightSection('fileclaim')">
          <i class="fa fa-cart-arrow-down menu__icon" aria-hidden="true"></i>
          File a Claim
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>

      <li>
        <a
          href="#"
          @click.prevent="updateMenu('paymentcenter')"
          :class="highlightSection('paymentcenter')"
        >
          <i class="fa fa-money-check-alt menu__icon" aria-hidden="true"></i>
          Payment Center
          <i
            class="fa fa-chevron-right menu__arrow-icon"
            aria-hidden="true"
          ></i>
        </a>
      </li>

      <div class="menu-cat-divider">
        <i class="far fa-star menu__icon" aria-hidden="true"></i>
        To Do
      </div>

      <li>
        <a
          href="#"
          @click.prevent="updateMenu('orderhistorydetails')"
          :class="highlightSection('orderhistorydetails')"
        >
          <i class="fa fa-sort-amount-down menu__icon" aria-hidden="true"></i>
          Order History
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>

      <li>
        <a href="#" @click.prevent="updateMenu('reorder')" :class="highlightSection('reorder')">
          <i class="fa fa-history menu__icon" aria-hidden="true"></i>
          Reorder
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>

      <li>
        <a
          href="#"
          @click.prevent="updateMenu('manageuser')"
          :class="highlightSection('manageuser')"
        >
          <i class="fa fa-user menu__icon" aria-hidden="true"></i>
          Manage User
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>

      <li>
        <a href="#" @click.prevent="updateMenu('order')" :class="highlightSection('order')">
          <i class="fa fa-shopping-cart menu__icon" aria-hidden="true"></i>
          Quick Order
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>

      <li>
        <a
          href="#"
          @click.prevent="updateMenu('loginpopupmodal')"
          :class="highlightSection('loginpopupmodal')"
        >
          <i class="fa fa-window-restore menu__icon" aria-hidden="true"></i>
          Login Modal
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="updateMenu('loginpage')" :class="highlightSection('loginpage')">
          <i class="fa fa-sign-in-alt menu__icon" aria-hidden="true"></i>
          Login Page
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a
          href="#"
          @click.prevent="updateMenu('registration')"
          :class="highlightSection('registration')"
        >
          <i class="fa fa-user-plus menu__icon" aria-hidden="true"></i>
          Registration
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a
          href="#"
          @click.prevent="updateMenu('expressregistration')"
          :class="highlightSection('expressregistration')"
        >
          <i class="fa fa-user-check menu__icon" aria-hidden="true"></i>
          Express Registration
          <i
            class="fa fa-chevron-right menu__arrow-icon"
            aria-hidden="true"
          ></i>
        </a>
      </li>
      <li>
        <a
          href="#"
          @click.prevent="updateMenu('verifyaddress')"
          :class="highlightSection('verifyaddress')"
        >
          <i class="fa fa-map-marker-alt menu__icon" aria-hidden="true"></i>
          Verify Address
          <i
            class="fa fa-chevron-right menu__arrow-icon"
            aria-hidden="true"
          ></i>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="updateMenu('cart')" :class="highlightSection('cart')">
          <i class="fa fa-shopping-cart menu__icon" aria-hidden="true"></i>
          Cart
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a
          href="#"
          @click.prevent="updateMenu('confirmation')"
          :class="highlightSection('confirmation')"
        >
          <i class="fa fa-clipboard-check menu__icon" aria-hidden="true"></i>
          Confirmation
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a
          href="#"
          @click.prevent="updateMenu('searchmodule')"
          :class="highlightSection('searchmodule')"
        >
          <i class="fa fa-search menu__icon" aria-hidden="true"></i>
          Search
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a
          href="#"
          @click.prevent="updateMenu('dmdashboard')"
          :class="highlightSection('dmdashboard')"
        >
          <i class="fa fa-tachometer-alt menu__icon" aria-hidden="true"></i>
          DM Dashboard
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>

      <li>
        <a
          href="#"
          @click.prevent="updateMenu('tmdashboard')"
          :class="highlightSection('tmdashboard')"
        >
          <i class="fa fa-tachometer-alt menu__icon" aria-hidden="true"></i>
          TM Dashboard
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>
    </ul>

    <!-- context menu: childs of root level itens -->
    <transition name="slide-fade">
      <div class="context-menu-container" id="context-menu-container" v-show="showContextMenu">
        <ul class="context-menu">
          <li v-for="(item, index) in menuItens" :key="index">
            <h5 v-if="item.type === 'title'" class="context-menu__title">
              <i :class="item.icon" aria-hidden="true"></i>
              {{ item.txt }}
              <a
                v-if="index === 0"
                @click.prevent="closeContextMenu"
                class="context-menu__btn-close"
                href="#"
              >
                <i class="fa fa-window-close" aria-hidden="true"></i>
              </a>
            </h5>

            <a
              v-if="item.type === 'link'"
              :href="item.txt"
              @click.prevent="openSection(item)"
              :class="subMenuClass(item.txt)"
            >{{ item.txt }}</a>

            <router-link
              v-if="item.type === 'prelogin'"
              :class="subMenuClass(item.txt)"
              :to="item.link"
              @click.prevent="updateMenu('styleguide')"
            >
              <i class="fa fa-th context-menu__title-icon no-child" aria-hidden="true"></i>
              {{ item.txt }}
            </router-link>

            <router-link
              v-if="item.type === 'postlogin'"
              :class="subMenuClass(item.txt)"
              :to="item.link"
              @click.prevent="updateMenu('styleguide')"
            >
              <i class="fa fa-th context-menu__title-icon no-child" aria-hidden="true"></i>
              {{ item.txt }}
            </router-link>

            <!-- <a
              v-if="item.type === 'thumbnails'"
              :href="item.txt"
              @click.prevent="openSection(item)"
              :class="subMenuClass(item.txt)"
              >{{ item.txt }}
            </a>-->

            <!-- <a
              v-if="item.type === 'postlogin'"
              :href="item.txt"
              @click.prevent="openSection(item)"
              :class="subMenuClass(item.txt)"
              >{{ item.txt }}
            </a>-->
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import menuData from "./support/menu-data";
import kebabCase from "lodash/kebabCase";

export default {
  name: "Menu",

  data() {
    return {
      contextSection: "",

      menuItens: [],

      menuData: menuData,

      activeSubMenu: ""
    };
  },

  methods: {
    toggleMenu() {
      window.bus.$emit("menu/toggle");
      window.bus.$emit("menu/closeMobileMenu");
    },

    openProjectLink() {
      alert(
        "You could open the project frontend in another tab here, so the logged admin could see changes made to the project ;)"
      );
    },

    updateMenu(context) {
      this.contextSection = context;
      this.menuItens = this.menuData[context];

      if (context === "home") {
        this.$router.push("/");
        window.bus.$emit("menu/closeMobileMenu");
      }
    },

    highlightSection(section) {
      return {
        menu__link: true,
        "menu__link--active": section === this.contextSection
      };
    },

    subMenuClass(subMenuName) {
      return {
        "context-menu__link": true,
        "context-menu__link--active": this.activeSubMenu === subMenuName
      };
    },

    closeContextMenu() {
      this.contextSection = "";
      this.menuItens = [];
    },

    openSection(item) {
      this.activeSubMenu = item.txt;

      this.$router.push(this.getUrl(item));
      window.bus.$emit("menu/closeMobileMenu");
    },

    getUrl(item) {
      let sectionSlug = kebabCase(item.txt);

      return `${item.link}/${sectionSlug}`;
    }
  },

  computed: {
    showContextMenu() {
      return this.menuItens.length;
    }
  }
};
</script>
