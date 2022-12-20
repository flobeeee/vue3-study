<template>
  <div>
    <div>
      <input type="checkbox" name="" id="html" value="HTML" v-model="favoriteLang">
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="checkbox" name="" id="css" value="CSS" v-model="favoriteLang">
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="checkbox" name="" id="js" value="JS" v-model="favoriteLang">
      <label for="js">Javascript</label>
    </div>
    <div>선택한 언어: {{ favoriteLang }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      favoriteLang: ['JS'] // JS 선택된 게 default, 다중 선택 되니까 배열
    }
  },
  setup() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
