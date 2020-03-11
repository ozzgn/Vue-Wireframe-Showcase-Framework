module.exports = {
  extends: ["alloy", "alloy/vue"],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
