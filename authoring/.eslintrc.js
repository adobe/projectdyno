module.exports = {
  "extends": "airbnb",
  "globals": {
    "document": true,
    "window": true,
    "__static": true,
  },
  "rules": {
    "no-use-before-define": 0,
    "no-await-in-loop": 0,
    "semi": [2, "never"],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "no-restricted-syntax": 0,
  },
};
