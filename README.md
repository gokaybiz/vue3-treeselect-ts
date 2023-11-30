# vue3-treeselect-ts

#### 介绍
基于vue3用ts重写的vue-treeselect。

#### 安装教程

```bash
 npm install --save vue3-treeselect-ts
 ```

#### 使用说明
```html
<!-- Vue SFC -->
<template>
  <div id="app">
    <treeselect v-model="value" :multiple="true" :options="options" />
  </div>
</template>

<script>
  // import the component
  import Treeselect from 'vue3-treeselect-ts'
  // import the styles
  import 'vue3-treeselect-ts/dist/style.css'

  export default {
    // register the component
    components: { Treeselect },
    data() {
      return {
        // define the default value
        value: null,
        // define options
        options: [ {
          id: 'a',
          label: 'a',
          children: [ {
            id: 'aa',
            label: 'aa',
          }, {
            id: 'ab',
            label: 'ab',
          } ],
        }, {
          id: 'b',
          label: 'b',
        }, {
          id: 'c',
          label: 'c',
        } ],
      }
    },
  }
</script>
```

更多使用方式可以参考[vue-treeselect](https://vue-treeselect.js.org/)主页或者[vue-treeselect中文](https://www.vue-treeselect.cn/)主页

#### 发现Bugs
你可以新建一个[issue](https://gitee.com/zhangtaoaizsn/vue3-treeselect-ts/issues/new)

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

还在维护的。。。