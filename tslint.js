module.exports = {
  "extends": [
    "tslint-config-standard",
    "tslint-eslint-rules"
  ],
  "rules": {
    "arrow-return-shorthand": true,
    "class-name": true,
    "comment-format": [
      true,
      "check-space"
    ],
    "curly": true,
    "deprecation": {
      "severity": "warn"
    },
    "eofline": false,
    "import-blacklist": [
      true,
      "rxjs/Rx",
      "lodash"
    ],
    "import-spacing": true,
    "interface-over-type-literal": true,
    "label-position": true,
    "max-line-length": [
      true,
      150
    ],
    "member-ordering": [
      true,
      {
        "order": [
          "static-field",
          "static-method",
          "instance-field",
          "constructor",
          "instance-method"
        ]
      }
    ],
    "no-any": true,
    "no-arg": true,
    "no-console": [
      true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-construct": true,
    "no-debugger": true,
    "no-duplicate-imports": false,
    "no-duplicate-super": true,
    "no-duplicate-variable": true,
    "no-empty": false,
    "no-empty-interface": false,
    "no-eval": true,
    "no-floating-promises": false,
    "no-misused-new": true,
    "no-non-null-assertion": true,
    "no-shadowed-variable": true,
    "no-string-throw": true,
    "no-switch-case-fall-through": true,
    "no-trailing-whitespace": true,
    "no-unnecessary-initializer": true,
    "no-unused-expression": false,
    "no-use-before-declare": false,
    "no-var-keyword": true,
    "object-curly-spacing": false,
    "prefer-const": true,
    "quotemark": [
      true,
      "single"
    ],
    "radix": true,
    "semicolon": [
      true,
      "always",
      "ignore-bound-class-methods"
    ],
    "space-before-function-paren": false,
    "trailing-comma": false,
    "triple-equals": true,
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      }
    ],
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-separator",
      "check-type",
      "check-module"
    ]
  }
};
