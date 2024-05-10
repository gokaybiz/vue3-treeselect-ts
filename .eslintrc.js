module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ["@typescript-eslint", "prettier"],
  parser: "vue-eslint-parser",
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {}
  },
  globals: {
    defineProps: "readonly"
  },
  rules: {
    "no-undef": "off",
    "no-console": "off",
    /* "no-debugger": process.env.MODE === "prod" ? "warn" : "off", */
    "vue/no-multiple-template-root": "off",
    "vue/script-setup-uses-vars": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["off"],
    "comma-dangle": ["error", "never"],
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        tabWidth: 2, //缩进长度
        useTabs: false, //使用空格代替tab缩进
        semi: true, //句末使用分号
        singleQuote: false, //使用单引号
        quoteProps: "as-needed", //仅在必需时为对象的key添加引号
        trailingComma: "none", //多行时尽可能打印尾随逗号
        bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
        BracketLine: false,
        bracketSameLine: true, //多属性html标签的‘>’折行放置
        arrowParens: "always", //单参数箭头函数参数周围使用圆括号-eg: (x) => x
        requirePragma: false, //无需顶部注释即可格式化
        insertPragma: false, //在已被prettier格式化的文件顶部加上标注
        proseWrap: "preserve", //不知道怎么翻译
        htmlWhitespaceSensitivity: "strict", //对HTML全局空白不敏感
        vueIndentScriptAndStyle: false, //不   对vue中的script及style标签缩进
        endOfLine: "lf", //结束行形式
        embeddedLanguageFormatting: "auto" //对引用代码进行格式化
      },
      { usePrettierrc: false }
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
};
