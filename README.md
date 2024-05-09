# vue3-treeselect-ts


#### (- Forked from: [gitee - (zhangtaoaizsn/vue3-treeselect-ts)](https://gitee.com/zhangtaoaizsn/vue3-treeselect-ts) -)

#### Description
vue-treeselect rewritten with ts based on vue 3.

#### How to install
```bash
 npm install --save vue3-treeselect-ts
 ```

#### How to use
```html
<!-- Vue SFC -->
<template>
  <div id="app">
    <TreeSelect v-model="value" :multiple="true" :options="options" />
  </div>
</template>

<script>
  // import the component
  import TreeSelect from 'vue3-treeselect-ts'
  // import the styles
  import 'vue3-treeselect-ts/dist/style.css'

  export default {
    // register the component
    components: { TreeSelect },
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

Documentation: [vue-treeselect](https://vue-treeselect.js.org/)

#### For reporting bugs
Create an [issue](https://github.com/gokaybiz/vue3-treeselect-ts/issues/new)

#### Contribution
1.  Fork the repository
2.  Create a branch like Feat_xxx or Fix_xxx
3.  Make a Pull Request
