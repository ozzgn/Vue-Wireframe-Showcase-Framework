asdasd
<script>
export default { name: "postlogin" };
</script>
<template>
  <div class="main-content">
    <div class="main-content__top">
      <a href="#" class="btn menu-toggle-btn-desktop" @click.prevent="toggleMenu">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </a>
      <h1 class="main-content__title">Product Details - Post Login</h1>
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

        <div class="body__main-pov"></div>

        <div class="body__product-content">
          <div class="left-navigation">
            <div class="title">
              <span class="thumbnail-header">Filter by</span>
            </div>
            <ul>
              <li class="filter-selection">
                <div class="filter-selection__container">
                  <a href="#">
                    White
                    <span>&#10005;</span>
                  </a>
                </div>
                <div class="filter-selection__container">
                  <a href="#">
                    Green
                    <span>&#10005;</span>
                  </a>
                </div>
                <div class="filter-selection__container">
                  <a href="#">
                    Blue
                    <span>&#10005;</span>
                  </a>
                </div>
                <div class="filter-selection__container">
                  <a href="#">
                    Wall mirror
                    <span>&#10005;</span>
                  </a>
                </div>
                <div class="filter-selection__container">
                  <a href="#">
                    Gold
                    <span>&#10005;</span>
                  </a>
                </div>
                <div class="filter-selection__container filter-clear">
                  <a href="#">Clear all</a>
                </div>
              </li>
              <li>
                Lorem ipsum
                <i class="fa fa-plus" aria-hidden="true"></i>
              </li>
              <li>
                Lorem ipsum
                <i class="fa fa-plus" aria-hidden="true"></i>
              </li>
              <li>
                Lorem ipsum
                <i class="fa fa-plus" aria-hidden="true"></i>
              </li>
              <li>
                Lorem ipsum
                <i class="fa fa-plus" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
          <div class="right-content">
            <div class="header-content">
              <div class="left-dropdown">
                <div class="dropdown show">
                  <span class="dropdown-info">Sort by</span>

                  <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >Best sellers</a>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">New</a>
                    <a class="dropdown-item" href="#">Lorem ipsum</a>
                    <a class="dropdown-item" href="#">Lorem ipsum dolor</a>
                  </div>
                </div>
                <div class="product-availabilty">
                  Availability:
                  <span>Now / XX / XX Days</span>
                </div>
              </div>
              <div class="right-dropdown">
                <div class="dropdown show">
                  <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >48</a>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>

                  <span class="dropdown-info">of 1,989 products</span>
                </div>
              </div>
            </div>

            <div class="product__container">
              <div class="product__thumbnail">
                <div class="brand-pov">
                  <div class="product-status">
                    <div class="product-status__message">Bestseller</div>
                    <div class="product-status__message">Sale</div>
                    <div class="product-status__message">New</div>
                  </div>
                  <router-link to="/">
                    <div class="favorite-icon">
                      <i class="far fa-heart"></i>
                    </div>
                  </router-link>
                  <router-link to="/">
                    <img src="/rectangle.png" class="product__image" />
                  </router-link>
                </div>
                <div class="brand-content">
                  <ul>
                    <li class="brand-content__name">Brand Name</li>
                    <li class="brand-content__title">This is a product title with 42 characters</li>
                    <li class="brand-content__sku">Sku 8381333</li>
                    <li class="brand-content__availability">Availability: Now</li>
                    <li class="brand-content__price">$45.00 USD</li>
                  </ul>
                  <div class="product-addtocart">
                    <div class="product-addtocart__counter">
                      <div class="def-number-input number-input safari_only">
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          class="minus"
                        ></button>
                        <input class="quantity" min="0" name="quantity" value="1" type="number" />
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          class="plus"
                        ></button>
                      </div>
                    </div>
                    <div class="product-addtocart__button">
                      <button type="button" class="btn btn-add-to-cart-thumbnail btn-lg">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product__thumbnail">
                <div class="brand-pov">
                  <div class="product-status">
                    <div class="product-status__message">Bestseller</div>
                    <div class="product-status__message">Sale</div>
                    <div class="product-status__message">New</div>
                  </div>
                  <router-link to="/">
                    <div class="favorite-icon">
                      <i class="far fa-heart"></i>
                    </div>
                  </router-link>
                  <router-link to="/">
                    <img src="/rectangle.png" class="product__image" />
                  </router-link>
                </div>
                <div class="brand-content">
                  <ul>
                    <li class="brand-content__name">Brand Name</li>
                    <li class="brand-content__title">This is a product title with 42 characters</li>
                    <li class="brand-content__sku">Sku 8381333</li>
                    <li class="brand-content__availability">Availability: Now</li>
                    <li class="brand-content__price">$45.00 USD</li>
                  </ul>
                  <div class="product-addtocart">
                    <div class="product-addtocart__counter">
                      <div class="def-number-input number-input safari_only">
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          class="minus"
                        ></button>
                        <input class="quantity" min="0" name="quantity" value="1" type="number" />
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          class="plus"
                        ></button>
                      </div>
                    </div>
                    <div class="product-addtocart__button">
                      <button type="button" class="btn btn-add-to-cart-thumbnail btn-lg">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product__thumbnail">
                <div class="brand-pov">
                  <div class="product-status">
                    <div class="product-status__message">Bestseller</div>
                    <div class="product-status__message">Sale</div>
                    <div class="product-status__message">New</div>
                  </div>
                  <router-link to="/">
                    <div class="favorite-icon">
                      <i class="far fa-heart"></i>
                    </div>
                  </router-link>
                  <router-link to="/">
                    <img src="/rectangle.png" class="product__image" />
                  </router-link>
                </div>
                <div class="brand-content">
                  <ul>
                    <li class="brand-content__name">Brand Name</li>
                    <li class="brand-content__title">This is a product title with 42 characters</li>
                    <li class="brand-content__sku">Sku 8381333</li>
                    <li class="brand-content__availability">Availability: Now</li>
                    <li class="brand-content__price">$45.00 USD</li>
                  </ul>
                  <div class="product-addtocart">
                    <div class="product-addtocart__counter">
                      <div class="def-number-input number-input safari_only">
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          class="minus"
                        ></button>
                        <input class="quantity" min="0" name="quantity" value="1" type="number" />
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          class="plus"
                        ></button>
                      </div>
                    </div>
                    <div class="product-addtocart__button">
                      <button type="button" class="btn btn-add-to-cart-thumbnail btn-lg">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product__thumbnail">
                <div class="brand-pov">
                  <div class="product-status">
                    <div class="product-status__message">Bestseller</div>
                    <div class="product-status__message">Sale</div>
                    <div class="product-status__message">New</div>
                  </div>
                  <router-link to="/">
                    <div class="favorite-icon">
                      <i class="far fa-heart"></i>
                    </div>
                  </router-link>
                  <router-link to="/">
                    <img src="/rectangle.png" class="product__image" />
                  </router-link>
                </div>
                <div class="brand-content">
                  <ul>
                    <li class="brand-content__name">Brand Name</li>
                    <li class="brand-content__title">This is a product title with 42 characters</li>
                    <li class="brand-content__sku">Sku 8381333</li>
                    <li class="brand-content__availability">Availability: Now</li>
                    <li class="brand-content__price">$45.00 USD</li>
                  </ul>
                  <div class="product-addtocart">
                    <div class="product-addtocart__counter">
                      <div class="def-number-input number-input safari_only">
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          class="minus"
                        ></button>
                        <input class="quantity" min="0" name="quantity" value="1" type="number" />
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          class="plus"
                        ></button>
                      </div>
                    </div>
                    <div class="product-addtocart__button">
                      <button type="button" class="btn btn-add-to-cart-thumbnail btn-lg">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product__thumbnail">
                <div class="brand-pov">
                  <div class="product-status">
                    <div class="product-status__message">Bestseller</div>
                    <div class="product-status__message">Sale</div>
                    <div class="product-status__message">New</div>
                  </div>
                  <router-link to="/">
                    <div class="favorite-icon">
                      <i class="far fa-heart"></i>
                    </div>
                  </router-link>
                  <router-link to="/">
                    <img src="/rectangle.png" class="product__image" />
                  </router-link>
                </div>
                <div class="brand-content">
                  <ul>
                    <li class="brand-content__name">Brand Name</li>
                    <li class="brand-content__title">This is a product title with 42 characters</li>
                    <li class="brand-content__sku">Sku 8381333</li>
                    <li class="brand-content__availability">Availability: Now</li>
                    <li class="brand-content__price">$45.00 USD</li>
                  </ul>
                  <div class="product-addtocart">
                    <div class="product-addtocart__counter">
                      <div class="def-number-input number-input safari_only">
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          class="minus"
                        ></button>
                        <input class="quantity" min="0" name="quantity" value="1" type="number" />
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          class="plus"
                        ></button>
                      </div>
                    </div>
                    <div class="product-addtocart__button">
                      <button type="button" class="btn btn-add-to-cart-thumbnail btn-lg">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product__thumbnail">
                <div class="brand-pov">
                  <div class="product-status">
                    <div class="product-status__message">Bestseller</div>
                    <div class="product-status__message">Sale</div>
                    <div class="product-status__message">New</div>
                  </div>
                  <router-link to="/">
                    <div class="favorite-icon">
                      <i class="far fa-heart"></i>
                    </div>
                  </router-link>
                  <router-link to="/">
                    <img src="/rectangle.png" class="product__image" />
                  </router-link>
                </div>
                <div class="brand-content">
                  <ul>
                    <li class="brand-content__name">Brand Name</li>
                    <li class="brand-content__title">This is a product title with 42 characters</li>
                    <li class="brand-content__sku">Sku 8381333</li>
                    <li class="brand-content__availability">Availability: Now</li>
                    <li class="brand-content__price">$45.00 USD</li>
                  </ul>
                  <div class="product-addtocart">
                    <div class="product-addtocart__counter">
                      <div class="def-number-input number-input safari_only">
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          class="minus"
                        ></button>
                        <input class="quantity" min="0" name="quantity" value="1" type="number" />
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          class="plus"
                        ></button>
                      </div>
                    </div>
                    <div class="product-addtocart__button">
                      <button type="button" class="btn btn-add-to-cart-thumbnail btn-lg">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product__thumbnail">
                <div class="brand-pov">
                  <div class="product-status">
                    <div class="product-status__message">Bestseller</div>
                    <div class="product-status__message">Sale</div>
                    <div class="product-status__message">New</div>
                  </div>
                  <router-link to="/">
                    <div class="favorite-icon">
                      <i class="far fa-heart"></i>
                    </div>
                  </router-link>
                  <router-link to="/">
                    <img src="/rectangle.png" class="product__image" />
                  </router-link>
                </div>
                <div class="brand-content">
                  <ul>
                    <li class="brand-content__name">Brand Name</li>
                    <li class="brand-content__title">This is a product title with 42 characters</li>
                    <li class="brand-content__sku">Sku 8381333</li>
                    <li class="brand-content__availability">Availability: Now</li>
                    <li class="brand-content__price">$45.00 USD</li>
                  </ul>
                  <div class="product-addtocart">
                    <div class="product-addtocart__counter">
                      <div class="def-number-input number-input safari_only">
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          class="minus"
                        ></button>
                        <input class="quantity" min="0" name="quantity" value="1" type="number" />
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          class="plus"
                        ></button>
                      </div>
                    </div>
                    <div class="product-addtocart__button">
                      <button type="button" class="btn btn-add-to-cart-thumbnail btn-lg">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product__thumbnail">
                <div class="brand-pov">
                  <div class="product-status">
                    <div class="product-status__message">Bestseller</div>
                    <div class="product-status__message">Sale</div>
                    <div class="product-status__message">New</div>
                  </div>
                  <router-link to="/">
                    <div class="favorite-icon">
                      <i class="far fa-heart"></i>
                    </div>
                  </router-link>
                  <router-link to="/">
                    <img src="/rectangle.png" class="product__image" />
                  </router-link>
                </div>
                <div class="brand-content">
                  <ul>
                    <li class="brand-content__name">Brand Name</li>
                    <li class="brand-content__title">This is a product title with 42 characters</li>
                    <li class="brand-content__sku">Sku 8381333</li>
                    <li class="brand-content__availability">Availability: Now</li>
                    <li class="brand-content__price">$45.00 USD</li>
                  </ul>
                  <div class="product-addtocart">
                    <div class="product-addtocart__counter">
                      <div class="def-number-input number-input safari_only">
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          class="minus"
                        ></button>
                        <input class="quantity" min="0" name="quantity" value="1" type="number" />
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          class="plus"
                        ></button>
                      </div>
                    </div>
                    <div class="product-addtocart__button">
                      <button type="button" class="btn btn-add-to-cart-thumbnail btn-lg">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product__thumbnail">
                <div class="brand-pov">
                  <div class="product-status">
                    <div class="product-status__message">Bestseller</div>
                    <div class="product-status__message">Sale</div>
                    <div class="product-status__message">New</div>
                  </div>
                  <router-link to="/">
                    <div class="favorite-icon">
                      <i class="far fa-heart"></i>
                    </div>
                  </router-link>
                  <router-link to="/">
                    <img src="/rectangle.png" class="product__image" />
                  </router-link>
                </div>
                <div class="brand-content">
                  <ul>
                    <li class="brand-content__name">Brand Name</li>
                    <li class="brand-content__title">This is a product title with 42 characters</li>
                    <li class="brand-content__sku">Sku 8381333</li>
                    <li class="brand-content__availability">Availability: Now</li>
                    <li class="brand-content__price">$45.00 USD</li>
                  </ul>
                  <div class="product-addtocart">
                    <div class="product-addtocart__counter">
                      <div class="def-number-input number-input safari_only">
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          class="minus"
                        ></button>
                        <input class="quantity" min="0" name="quantity" value="1" type="number" />
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          class="plus"
                        ></button>
                      </div>
                    </div>
                    <div class="product-addtocart__button">
                      <button type="button" class="btn btn-add-to-cart-thumbnail btn-lg">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-disclaimer">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>

              <div class="paginator">
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link page-link__arrow" href="#" aria-label="Previous">
                        <span aria-hidden="true" class="arrow-icon">&laquo;</span>
                        <span class="sr-only">Previous</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link page-link__arrow" href="#" aria-label="Previous">
                        <span aria-hidden="true" class="arrow-icon">&lsaquo;</span>
                        <span class="sr-only">Previous</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link active" href="#">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link page-link__arrow" href="#" aria-label="Next">
                        <span aria-hidden="true" class="arrow-icon">&rsaquo;</span>
                        <span class="sr-only">Next</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link page-link__arrow" href="#" aria-label="Next">
                        <span aria-hidden="true" class="arrow-icon">&raquo;</span>
                        <span class="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
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
