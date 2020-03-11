<script>
export default { name: "Home" };
</script>
<template>
  <div class="main-content">
    <div class="main-content__top">
      <a href="#" class="btn menu-toggle-btn-desktop" @click.prevent="toggleMenu">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </a>
      <h1 class="main-content__title">VueJs Wireframes Framework - Ver 0.1</h1>
    </div>

    <div class="main-content__body">
      <div class="body__container read-me">
        <ul>
          <li>
            <h4># Read Me</h4>
          </li>
          <li>
            A Vue user interface designed to display wireframes to clients. With the intention in mind to implement the content into a CMS of any kind such as Episerver, Sitecore, Wordpress.
            This is a Vuejs framework for front end developers of all skill levels. It helps develop faster and efficient user interfaces. It's a work in progress that will evolve as projects demand new functionality. The navigational menu allows the quick change of interfaces
            (Work in progress)
          </li>
        </ul>
        <ul>
          <h4>## Requirements</h4>
          <li>Node.js</li>
          <li>Command Prompt</li>
          <li>Vue Dev tools is optional</li>
        </ul>
        <ul>
          <h4>## Installation</h4>
          <li>cd wireframe-showcase</li>
          <li>npm install</li>
        </ul>
        <ul>
          <h4>## To install a clean Vuejs project</h4>
          <li>npm install -g vue-cli</li>
          <li>vue init (template-name) (project-name)</li>
          <li>cd new-project</li>
          <li>npm install</li>
        </ul>
        <ul>
          <h4>## Start local server</h4>
          <li>npm run serve</li>
          <li>yarn run serve (optional)</li>
          <li>Open browser and go to: http://localhost:8080/</li>
        </ul>
        <ul>
          <li>
            <h4>## Contributing</h4>
          </li>
          <li>
            Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
            Please make sure to update tests as appropriate.
          </li>
        </ul>
        <ul>
          <h4>## TO DO:</h4>
          <li>
            <ol>
              <li>- Solve bug with submenu</li>
              <li>- Pop Ups development</li>
              <li>- Add interactive bootstrap dropdown and fix look to match design</li>
              <li>- Separate Sass files into components</li>
              <li>- Create production build</li>
              <li>- Make fonts load faster</li>
              <li>- Bootstrap dropdown</li>
              <li>- implement ADA compliance</li>
              <li>- Turn long html strings into modular reusable components</li>
              <li>- Implement scroll to top button</li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// Code is used to hide secondary menu - Ignore this for implementation into episerver
export default {
  methods: {
    toggleMenu: function(event) {
      window.bus.$emit("menu/toggle");
    }
  }
};
</script>
