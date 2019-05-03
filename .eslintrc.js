module.exports = {
  extends: "airbnb",
  plugins: ["jest", "react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
  },
  "env": {
    "jest/globals": true
  },
    "settings": {
    "import/resolver": {
      "alias": [
        ["src", "./src"],
        ["pages", "./src/pages"],
        ["components", "./src/components"],
      ]
    }
  },
}
