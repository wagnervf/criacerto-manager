// eslint-disable-next-line no-undef
module.exports = {
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:vue/strongly-recommended",
  ],
  rules: {
     "override/add rules settings here, such as:",
     'vue/no-unused-vars': 'error'
  },
};
