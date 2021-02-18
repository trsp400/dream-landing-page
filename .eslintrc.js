module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "prettier",
    "plugin:react-hooks/recommended",
    "prettier/react",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    "react",
    "jsx-a11y",
    "import",
    "react-hooks",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error",
    "react/style-prop-object": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "global-require": "off",
    "react-native/no-raw-text": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "no-console": ["error", { allow: ["tron"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-use-before-define": ["error", { "functions": false,}],
    "react/prop-types": 0,
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-unused-expressions": [2, { allowShortCircuit: true, allowTernary: true }],
    "no-return-assign": ["error", "except-parens"],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "jsx-a11y/label-has-associated-control": [ 2, {
      "labelComponents": ["CustomInputLabel"],
      "labelAttributes": ["label"],
      "controlComponents": ["CustomInput"],
      "depth": 3,
    }],
    'react/jsx-props-no-spreading': ['error', {
      html: "ignore",
      custom: "ignore",
      exceptions: [""],
    }],
    "react/no-unescaped-entities": 0,
    "no-multi-str": "off",
    "no-console": "off",
    "react/no-danger": "off",
    "react/no-array-index-key": "off"

  },
  settings: {
    'import/core-modules': [
        "react"
  ]
}
};
