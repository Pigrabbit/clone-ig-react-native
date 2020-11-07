module.exports = {
    "env": {
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
      "react/prop-types": "off"
    },
    "settings": {
      "react": {
        "version": "detect"
      },
      "import/resolver": {
        "babel-module": {}
      }
    },
    "overrides": [
      { 
        "excludedFiles": "*.config.js"
      }
    ]
};
