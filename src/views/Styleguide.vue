<script>
export default { name: "Styleguide" };
</script>
<template>
  <div class="main-content">
    <div class="main-content__top">
      <a href="#" class="btn menu-toggle-btn-desktop" @click.prevent="toggleMenu">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </a>
      <h1 class="main-content__title">Style Guide</h1>
    </div>

    <div class="main-content__body style-guide">
      <div class="style-guide__container">
        <p class="style-title">
          <span>01</span> Colors
        </p>

        <div class="card-container">
          <div class="card">
            <div class="card-color">
              <div class="color-box black-color"></div>
              <div class="color-box black-color__opaque"></div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Black</h5>
              <p class="card-text">#000000</p>
              <p class="card-text">#353535</p>
            </div>
          </div>

          <div class="card">
            <div class="card-color">
              <div class="color-box white-color"></div>
              <div class="color-box white-color__opaque"></div>
            </div>
            <div class="card-body">
              <h5 class="card-title">White</h5>
              <p class="card-text">#ffffff</p>
              <p class="card-text">#f1f1f1</p>
            </div>
          </div>

          <div class="card">
            <div class="card-color">
              <div class="color-box green-color"></div>
              <div class="color-box green-color__opaque"></div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Green</h5>
              <p class="card-text">#429147</p>
              <p class="card-text">#429147a1</p>
            </div>
          </div>

          <div class="card">
            <div class="card-color">
              <div class="color-box red-color"></div>
              <div class="color-box red-color__opaque"></div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Red</h5>
              <p class="card-text">#de0000</p>
              <p class="card-text">#de000091</p>
            </div>
          </div>

          <div class="card">
            <div class="card-color">
              <div class="color-box brown-grey-color"></div>
              <div class="color-box brown-grey-color__opaque"></div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Brown Grey</h5>
              <p class="card-text">#888888</p>
              <p class="card-text">#d0d0d0</p>
            </div>
          </div>

          <!-- <div class="card">
            <div class="card-color">
              <div class="color-box light-pink-color"></div>
              <div class="color-box light-pink-color__opaque"></div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Very light pink</h5>
              <p class="card-text">#d0d0d0</p>
              <p class="card-text">#d0d0d07a</p>
            </div>
          </div>-->

          <div class="card">
            <div class="card-color">
              <div class="color-box greyish-brown-color"></div>
              <div class="color-box greyish-brown-color__opaque"></div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Greyish Brown</h5>
              <p class="card-text">#454545</p>
              <p class="card-text">#4545458c</p>
            </div>
          </div>
        </div>
      </div>

      <div class="main-content__body style-guide">
        <div class="style-guide__container style-guide__typography">
          <p class="style-title">
            <span>02</span> Typography
          </p>
          <div class="style-guide__typography__container">
            <ul>
              <li>
                <h1>H1 - Open Sans, 40px</h1>
                <span class="font-description">
                  OpenSans, Bold
                  <span class="dot"></span>
                  <span class="sass-variable">$black</span>
                  <br />40px / 2.5rem
                  <br />
                  <space class="second-line">Line height: 52px</space>
                </span>
              </li>
              <li>
                <h2>H2 - Open Sans, 30px</h2>
                <span class="font-description">
                  OpenSans, Bold
                  <span class="dot"></span>
                  <span class="sass-variable">$black</span>
                  <br />30px / 1.875rem
                  <br />
                  <space class="second-line">Line height: 45px</space>
                </span>
              </li>
              <li>
                <h3>H3 - Open Sans, 24px</h3>
                <span class="font-description">
                  OpenSans, Bold
                  <span class="dot"></span>
                  <span class="sass-variable">$black</span>
                  <br />24px / 1.5rem
                  <br />
                  <space class="second-line">Line height: 30px</space>
                </span>
              </li>
              <li>
                <h4>H4 - Open Sans, 20px</h4>
                <span class="font-description">
                  OpenSans, Semi bold
                  <span class="dot"></span>
                  <span class="sass-variable">$black</span>
                  <br />20px / 1rem
                  <br />
                  <space class="second-line">Line height: 30px, Letter spacing: 0.4px</space>
                </span>
              </li>
              <li>
                <p>Base Paragraph, 16px</p>
                <span class="font-description">
                  OpenSans, Regular
                  <span class="dot"></span>
                  <span class="sass-variable">$black</span>
                  <br />16px / 2.5rem
                  <br />
                  <space class="second-line">Line height: 25px, Letter spacing: 0.16px</space>
                </span>
              </li>
              <li>
                <span class="thumbnail-header">Thumbnail header, 15px</span>
                <span class="font-description">
                  OpenSans, Semi bold
                  <span class="dot"></span>
                  <span class="sass-variable">$black</span>
                  <br />15px / 2.5rem
                  <br />
                  <space class="second-line">Line height: 19px</space>
                </span>
              </li>
              <li>
                <span class="bold-label-small">Bold Label Small Text, 13px</span>
                <span class="font-description">
                  OpenSans, Bold
                  <span class="dot"></span>
                  <span class="sass-variable">$black</span>
                  <br />13px / 2.5rem
                  <br />
                  <space class="second-line">Line height: 19px</space>
                </span>
              </li>
              <li>
                <span class="form-field-label">Form Field/Label - Raleway, 13px</span>
                <span class="font-description">
                  OpenSans, Bold
                  <span class="dot"></span>
                  <span class="sass-variable">$black</span>
                  <br />13px / 2.5rem
                  <br />
                  <space class="second-line">Line height: 30px</space>
                </span>
              </li>
              <li>
                <span class="label-small">Label Small Text, 13px</span>
                <span class="font-description">
                  OpenSans, Semi bold
                  <span class="dot"></span>
                  <span class="sass-variable">$black</span>
                  <br />13px / 2.5rem
                  <br />
                  <space class="second-line">Line height: 19px</space>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- // We are also able to add an extra flex row for disabled buttons.  -->
      <div class="main-content__body style-guide">
        <div class="style-guide__container style-guide__buttons">
          <p class="style-title">
            <span>03</span> Buttons
          </p>
          <div class="style-guide__buttons__container">
            <div class="row">
              <div class="col-sm font-description"></div>
              <div class="col">
                <div class="col-sm font-headline">Normal</div>
              </div>
              <div class="col">
                <div class="col-sm font-headline">Hover</div>
              </div>
              <!-- <div class="col">
                <div class="col-sm font-headline">Active</div>
              </div>-->

              <div class="w-100"></div>

              <div class="col-sm font-description">Add to Cart</div>
              <div class="col">
                <button type="button" class="btn btn-add-to-cart btn-lg">Add to Cart</button>
              </div>
              <div class="col">
                <button
                  type="button"
                  class="btn btn-add-to-cart btn-add-to-cart__hover btn-lg"
                >Add to Cart</button>
              </div>
              <!-- <div class="col">
                <button
                  type="button"
                  class="btn btn-add-to-cart btn-add-to-cart__active btn-lg"
                >Add to Cart</button>
              </div>-->

              <div class="w-100"></div>

              <div class="col-sm font-description">Dashboard Sidebar</div>
              <div class="col">
                <button type="button" class="btn btn-dashboard btn-lg">Account Settings</button>
              </div>
              <div class="col">
                <button
                  type="button"
                  class="btn btn-dashboard btn-dashboard__hover btn-lg"
                >Account Settings</button>
              </div>
              <!-- <div class="col">
                <button
                  type="button"
                  class="btn btn-dashboard btn-dashboard__active btn-lg"
                >Account Settings</button>
              </div>-->

              <div class="w-100"></div>

              <div class="col-sm font-description">Small Solid Cta</div>
              <div class="col">
                <button type="button" class="btn btn-small-solid-cta btn-lg">Consolidate shipments</button>
              </div>
              <div class="col">
                <button
                  type="button"
                  class="btn btn-small-solid-cta btn-small-solid-cta__hover btn-lg"
                >Consolidate shipments</button>
              </div>
              <!-- <div class="col">
                <button
                  type="button"
                  class="btn btn-small-solid-cta btn-small-solid-cta__active btn-lg"
                >Consolidate shipments</button>
              </div>-->

              <div class="w-100"></div>

              <div class="col-sm font-description">Secondary Cta</div>
              <div class="col">
                <button type="button" class="btn btn-secondary-cta btn-lg">Consolidate Shipments</button>
              </div>
              <div class="col">
                <button
                  type="button"
                  class="btn btn-secondary-cta btn-secondary-cta__hover btn-lg"
                >Consolidate Shipments</button>
              </div>
              <!-- <div class="col">
                <button
                  type="button"
                  class="btn btn-secondary-cta btn-secondary-cta__active btn-lg"
                >Consolidate Shipments</button>
              </div>-->

              <div class="w-100"></div>

              <div class="col-sm font-description">Ghost Button</div>
              <div class="col">
                <button type="button" class="btn btn-ghost-button btn-lg">Back to homepage</button>
              </div>
              <div class="col">
                <button
                  type="button"
                  class="btn btn-ghost-button btn-ghost-button__hover btn-lg"
                >Back to homepage</button>
              </div>
              <!-- <div class="col">
                <button
                  type="button"
                  class="btn btn-ghost-button btn-ghost-button__active btn-lg"
                >Back to homepage</button>
              </div>-->

              <div class="w-100"></div>

              <div class="col-sm font-description">Add to Cart Thumbnail</div>
              <div class="col">
                <button type="button" class="btn btn-add-to-cart-thumbnail btn-lg">Add to Cart</button>
              </div>
              <div class="col">
                <button
                  type="button"
                  class="btn btn-add-to-cart-thumbnail btn-add-to-cart-thumbnail__hover btn-lg"
                >Add to Cart</button>
              </div>
              <!-- <div class="col">
                <button
                  type="button"
                  class="btn btn-add-to-cart-thumbnail btn-add-to-cart-thumbnail__active btn-lg"
                >Add to Cart</button>
              </div>-->

              <div class="w-100"></div>

              <div class="col-sm font-description">Main Cta</div>
              <div class="col">
                <button type="button" class="btn btn-main-cta btn-lg">Continue</button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-main-cta btn-main-cta__hover btn-lg">Continue</button>
              </div>
              <!-- <div class="col">
                <button type="button" class="btn btn-main-cta btn-main-cta__active btn-lg">Continue</button>
              </div>-->

              <div class="w-100"></div>

              <div class="col-sm font-description">Mini Login</div>
              <div class="col">
                <button type="button" class="btn btn-mini-login btn-lg">
                  <i class="fas fa-lock"></i> Login
                </button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-mini-login btn-mini-login__hover btn-lg">
                  <i class="fas fa-lock"></i> Login
                </button>
              </div>
              <!-- <div class="col">
                <button type="button" class="btn btn-mini-login btn-mini-login__active btn-lg">
                  <i class="fas fa-lock"></i> Login
                </button>
              </div>-->
            </div>
          </div>
        </div>
      </div>

      <div class="main-content__body style-guide">
        <div class="style-guide__container style-guide__form-elements">
          <p class="style-title">
            <span>04</span> Form Elements
          </p>
          <div class="style-guide__form-elements__container">
            <div class="elements-container">
              <div class="form-container">
                <ul>
                  <li>
                    <label class="form-control__label" for="formfield">
                      Form field
                      <sup>&#42;</sup>
                    </label>
                    <input class="form-control" id="formfield" type="text" />
                  </li>
                  <li>
                    <label class="form-control__label" for="inputaction">
                      Action
                      <sup>&#42;</sup>
                    </label>
                    <input class="form-control form-control__focus" id="inputaction" type="text" />
                  </li>
                  <li>
                    <label class="form-control__label" for="validinput">
                      Confirmed
                      <sup>&#42;</sup>
                    </label>
                    <input
                      class="form-control is-valid"
                      id="validinput"
                      placeholder="Password"
                      value="Mark"
                      type="password"
                      required
                    />
                  </li>
                  <li>
                    <label class="form-control__label" for="invalidinput">
                      Error
                      <sup>&#42;</sup>
                    </label>
                    <input
                      class="form-control is-invalid"
                      id="invalidinput"
                      placeholder="e.g. John@gmail.com"
                      value="Mark"
                      type="password"
                      required
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a class="top-link hide" href id="js-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6">
          <path d="M12 6H0l6-6z" />
        </svg>
        <span class="screen-reader-text">Back to top</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      window.bus.$emit("menu/toggle");
    }
  }
};
</script>



