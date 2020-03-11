asdasd
<script>
export default { name: "prelogin" };
</script>
<template>
  <div class="main-content">
    <div class="main-content__top">
      <a href="#" class="btn menu-toggle-btn-desktop" @click.prevent="toggleMenu">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </a>
      <h1 class="main-content__title">Product Details - Pre Login</h1>
    </div>

    <div class="main-content__header">Header</div>

    <div class="main-content__body">
      <div class="body__container">
        <!-- // Breadcrumbs must be moved to style guide -->
        <div class="body__breadcrumbs">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Home Décor</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Wall Décor</li>
            </ol>
          </nav>
        </div>

        <div class="body__product-image product-detail-page">
          <div class="product-slider">
            <div class="product-status">
              <div class="product-status__message">Bestseller</div>
              <div class="product-status__message">Sale</div>
              <div class="product-status__message">New</div>
            </div>
            <a href="/" class="router-link-active">
              <!-- <div class="favorite-icon">
                <i class="far fa-heart"></i>
              </div>-->
            </a>
            <a href="/" class="router-link-active">
              <img src="/rectangle.png" class="product__image" />
            </a>
          </div>
          <div class="product-information">
            <div class="product-information__content">
              <ul>
                <li class="label-small brand-name">Brand Name</li>
                <li>
                  <h3>This is a product title with 42 characters</h3>
                </li>
                <ul class="label">
                  <li class="label-small">Sku: 243548</li>
                  <li class="label-small">Min QTY: 4</li>
                  <li class="label-small">Incremental QTY: 4</li>
                </ul>
                <ul class="price">
                  <li class="strikethrough">$45.00 USD</li>
                  <li class="discounted">$25.00 USD each</li>
                </ul>
                <li class="availability">Availability: XX days</li>
                <li>
                  <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-primary">
                      <input type="radio" name="options" autocomplete="off" /> Option A
                    </label>
                    <label class="btn btn-primary active">
                      <input type="radio" name="options" autocomplete="off" checked /> Option B
                    </label>
                    <label class="btn btn-primary">
                      <input type="radio" name="options" autocomplete="off" /> Option C
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="product-recomendations">
            <span class="header">
              <h4>Customers also purchased</h4>
              <a href="/" class="router-link-active">
                <img src="/rectangle.png" class="product__image" />
              </a>
              <ul>
                <li class="product-title">Round Tree of Life Wood Wall Décor</li>
                <li class="label-small">Price: $25.00 (USD)</li>
              </ul>
            </span>
            <div class></div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-content__footer">Footer</div>
  </div>
</template>

<script>
// Code is used to hide secondary menu - Ignore this for implementation into episerver
export default {
  methods: {
    toggleMenu: function(event) {
      this.first();
      this.second();
    },
    first: function(event) {
      window.bus.$emit("menu/toggle");
    },
    second: function(event) {
      var x = document.getElementById("context-menu-container");

      if (x.style.display === "none") {
        setTimeout(function() {
          x.style.display = "block";
        }, 550);
      } else {
        x.style.display = "none";
      }
    }
  }
};
</script>
