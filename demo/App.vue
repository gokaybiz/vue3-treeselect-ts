<script lang="ts">
import { defineComponent } from "vue";
import Treeselect from "../dist/treeselect.es";
import { generateOptions } from "./utils";
import { data as countriesData } from "./countries-of-the-world";
const simulateAsyncOperation = (fn) => {
  setTimeout(fn, 2000);
};

const sleep = (d) => new Promise((r) => setTimeout(r, d));
let called = false;
const options1 = generateOptions(3, 5);
const options5 = generateOptions(3);
export default defineComponent({
  components: { Treeselect },
  data: () => ({
    multiple: true,
    clearable: false,
    searchable: true,
    disabled: false,
    openOnClick: true,
    openOnFocus: false,
    clearOnSelect: true,
    closeOnSelect: false,
    alwaysOpen: false,
    appendToBody: false,
    rtl: false,
    value2: ["a"],
    options2: [...generateOptions(2, 3)],
    value1: [],
    options1: options1,
    value3: null,
    options3: [
      {
        id: "success",
        label: "With children",
        // Declare an unloaded branch node.
        children: null
      },
      {
        id: "no-children",
        label: "With no children",
        children: null
      },
      {
        id: "failure",
        label: "Demonstrates error handling",
        children: null
      }
    ],
    options4: null,
    value5: ["c", "aaa", "bb"],
    options5,
    sortValueBy: "ORDER_SELECTED",
    valueConsistsOf: "BRANCH_PRIORITY",
    value6: ["team-i"],
    options6: [
      {
        id: "company",
        label: "Company 🏢",
        children: [
          {
            id: "team-i",
            label: "Team I 👥",
            children: [
              {
                id: "person-a",
                label: "Person A 👱"
              },
              {
                id: "person-b",
                label: "Person B 🧔"
              }
            ]
          },
          {
            id: "team-ii",
            label: "Team II 👥",
            children: [
              {
                id: "person-c",
                label: "Person C 👳"
              },
              {
                id: "person-d",
                label: "Person D 👧"
              }
            ]
          },
          {
            id: "person-e",
            label: "Person E 👩"
          }
        ]
      }
    ],
    options7: countriesData,
    options8: [...countriesData],
    options9: [
      {
        id: "folder",
        label: "Normal Folder",
        children: [
          {
            id: "disabled-checked",
            label: "Checked",
            isDisabled: true
          },
          {
            id: "disabled-unchecked",
            label: "Unchecked",
            isDisabled: true
          },
          {
            id: "item-1",
            label: "Item"
          }
        ]
      },
      {
        id: "disabled-folder",
        label: "Disabled Folder",
        isDisabled: true,
        children: [
          {
            id: "item-2",
            label: "Item"
          },
          {
            id: "item-3",
            label: "Item"
          }
        ]
      }
    ],
    value9: ["disabled-checked"],
    value10: [],
    options10: [
      {
        id: "m",
        label: "McDonalds",
        children: [
          {
            id: "m-fries",
            label: "French Fries"
          },
          {
            id: "m-cheeseburger",
            label: "Cheeseburger"
          },
          {
            id: "m-white-cheedar-burger",
            label: "White Cheddar Burger"
          },
          {
            id: "m-southwest-buttermilk-crispy-chicken-salad",
            label: "Southwest Buttermilk Crispy Chicken Salad"
          },
          {
            id: "m-cola",
            label: "Coca-Cola®"
          },
          {
            id: "m-chocolate-shake",
            label: "Chocolate Shake"
          }
        ]
      },
      {
        id: "kfc",
        label: "KFC",
        children: [
          {
            id: "kfc-fries",
            label: "French Fries"
          },
          {
            id: "kfc-chicken-litties-sandwiches",
            label: "Chicken Litties Sandwiches"
          },
          {
            id: "kfc-grilled-chicken",
            label: "Grilled Chicken"
          },
          {
            id: "kfc-cola",
            label: "Pepsi® Cola"
          }
        ]
      },
      {
        id: "bk",
        label: "Burger King",
        children: [
          {
            id: "bk-chicken-fries",
            label: "Chicken Fries"
          },
          {
            id: "bk-chicken-nuggets",
            label: "Chicken Nuggets"
          },
          {
            id: "bk-garden-side-salad",
            label: "Garden Side Salad"
          },
          {
            id: "bk-cheeseburger",
            label: "Cheeseburger"
          },
          {
            id: "bk-bacon-king-jr-sandwich",
            label: "BACON KING™ Jr. Sandwich"
          },
          {
            id: "bk-cola",
            label: "Coca-Cola®"
          },
          {
            id: "bk-oreo-chocolate-shake",
            label: "OREO® Chocolate Shake"
          }
        ]
      }
    ],
    value11: null,
    options11: [
      {
        key: "a",
        name: "a",
        subOptions: [
          {
            key: "aa",
            name: "aa"
          }
        ]
      }
    ],
    normalizer(node) {
      return {
        id: node.key,
        label: node.name,
        children: node.subOptions
      };
    },
    value12: null,
    options12: [...generateOptions(2)],
    value13: null,
    options13: [1, 2, 3].map((i) => ({
      id: i,
      label: `Label ${i}`,
      customLabel: `Custom Label ${i}`
    }))
  }),
  watch: {
    multiple(newValue) {
      if (newValue) {
        this.value = this.value ? [this.value] : [];
      } else {
        this.value = this.value[0];
      }
    }
  },
  methods: {
    loadOptions({ action, parentNode, callback }) {
      // Typically, do the AJAX stuff here.
      // Once the server has responded,
      // assign children options to the parent node & call the callback.
      if (action === "LOAD_CHILDREN_OPTIONS") {
        switch (parentNode.id) {
          case "success": {
            simulateAsyncOperation(() => {
              parentNode.children = [
                {
                  id: "child",
                  label: "Child option"
                }
              ];
              callback();
            });
            break;
          }
          case "no-children": {
            simulateAsyncOperation(() => {
              parentNode.children = [];
              callback();
            });
            break;
          }
          case "failure": {
            simulateAsyncOperation(() => {
              callback(new Error("Failed to load options: network error."));
            });
            break;
          }
          default: /* empty */
        }
      }
    },
    // You can either use callback or return a Promise.
    async loadOptions2({ action /*, callback*/ }) {
      if (action === "LOAD_ROOT_OPTIONS") {
        if (!called) {
          // First try: simulate an exception.
          await sleep(2000); // Simulate an async operation.
          called = true;
          throw new Error("Failed to load options: test.");
        } else {
          // Second try: simulate a successful loading.
          await sleep(2000);
          this.options4 = ["a", "b", "c", "d", "e"].map((id) => ({
            id,
            label: `option-${id}`
          }));
        }
      }
    },
    loadOptions3({ action, searchQuery, callback }) {
      if (action === "ASYNC_SEARCH") {
        simulateAsyncOperation(() => {
          const options = [1, 2, 3, 4, 5].map((i) => ({
            id: `${searchQuery}-${i}`,
            label: `${searchQuery}-${i}`
          }));
          console.log(333);

          callback(null, options);
        });
      }
    }
  }
});
</script>
<template>
  <treeselect v-model="value1" :multiple="true" :options="options1" placeholder="Select your favourite(s)..." />
  value1:{{ value1 }}
  <treeselect
    v-model="value2"
    name="demo"
    :multiple="multiple"
    :clearable="clearable"
    :searchable="searchable"
    :disabled="disabled"
    :open-on-click="openOnClick"
    :open-on-focus="openOnFocus"
    :clear-on-select="clearOnSelect"
    :close-on-select="closeOnSelect"
    :always-open="alwaysOpen"
    :append-to-body="appendToBody"
    :options="options2"
    :limit="3"
    :max-height="200" />
  value2:{{ value2 }}
  <p>
    <label><input v-model="multiple" type="checkbox" />Multi-select</label>
    <label><input v-model="clearable" type="checkbox" />Clearable</label>
    <label><input v-model="searchable" type="checkbox" />Searchable</label>
    <label><input v-model="disabled" type="checkbox" />Disabled</label>
  </p>
  <p>
    <label><input v-model="openOnClick" type="checkbox" />Open on click</label>
    <label><input v-model="openOnFocus" type="checkbox" />Open on focus</label>
  </p>
  <p>
    <label><input v-model="clearOnSelect" type="checkbox" />Clear on select</label>
    <label><input v-model="closeOnSelect" type="checkbox" />Close on select</label>
  </p>
  <p>
    <label><input v-model="alwaysOpen" type="checkbox" />Always open</label>
    <label><input v-model="appendToBody" type="checkbox" />Append to body</label>
  </p>
  <!--  延时加载
  <treeselect
    v-model="value3"
    :multiple="true"
    :options="options3"
    :load-options="loadOptions"
    placeholder="Try expanding any folder option..." /> -->
  <treeselect
    :load-options="loadOptions2"
    :options="options4"
    :auto-load-root-options="false"
    :multiple="true"
    placeholder="Open the menu..." />
  <!-- 异步搜索
  <treeselect :multiple="true" :async="true" :load-options="loadOptions3" /> -->
  平面模式和排序值
  <div>
    <treeselect
      v-model="value5"
      :multiple="true"
      :options="options5"
      :flat="true"
      :sort-value-by="sortValueBy"
      :default-expand-level="1"
      :tabindex="'1a'"
      placeholder="Try selecting some options." />
    value5:{{ value5 }}
    <p><strong>Sort value by:</strong></p>
    <p class="options">
      <label><input v-model="sortValueBy" type="radio" value="ORDER_SELECTED" />Order selected</label>
      <label><input v-model="sortValueBy" type="radio" value="LEVEL" />Level</label>
      <label><input v-model="sortValueBy" type="radio" value="INDEX" />Index</label>
    </p>
  </div>
  防止价值组合
  <div>
    <treeselect v-model="value6" :multiple="true" :options="options6" :value-consists-of="valueConsistsOf" />
    value6:{{ value6 }}
    <p><strong>Value consists of:</strong></p>
    <p class="options">
      <label><input v-model="valueConsistsOf" type="radio" value="ALL" />All</label><br />
      <label><input v-model="valueConsistsOf" type="radio" value="BRANCH_PRIORITY" />Branch priority</label><br />
      <label><input v-model="valueConsistsOf" type="radio" value="LEAF_PRIORITY" />Leaf priority</label><br />
      <label
        ><input v-model="valueConsistsOf" type="radio" value="ALL_WITH_INDETERMINATE" />All with indeterminate</label
      >
    </p>
  </div>

  禁用分支节点
  <treeselect :options="options7" :disable-branch-nodes="true" :show-count="true" placeholder="Where are you from?" />
  拼合搜索结果
  <treeselect :options="options8" :multiple="true" :flatten-search-results="true" placeholder="Where are you from?" />
  禁用项目选择
  <treeselect v-model="value9" :multiple="true" :options="options9" />
  巢状搜寻
  <treeselect v-model="value10" :multiple="true" :options="options10" :disable-branch-nodes="true" search-nested />
  自定义键名
  <treeselect v-model="value11" :options="options11" :normalizer="normalizer" />
  自定义选项标签
  <treeselect v-model="value12" :options="options12" :searchable="false" :show-count="true" :default-expand-level="1">
    <template #option-label="{ node, shouldShowCount, count, labelClassName, countClassName }">
      <label :class="labelClassName">
        {{ node.isBranch ? "Branch" : "Leaf" }}: {{ node.label }}
        <span v-if="shouldShowCount" :class="countClassName">({{ count }})</span>
      </label>
    </template>
  </treeselect>
  自定义值标签
  <treeselect v-model="value13" :options="options13" :multiple="true">
    <template #value-label="{ node }">
      <div>{{ node.raw.customLabel }}</div>
    </template>
  </treeselect>
</template>
<style>
@import "../dist/style.css";
</style>
