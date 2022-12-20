<!-- 설정-사용자코드조각구성-vue에서 단축키 설정가능 vue-start  -->

<template>
  <div>
    <div>{{ htmlString }}</div>
    <div v-html="htmlString"></div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      htmlString: '<p style="color:red;">빨간색 문자</p>'
    }
  },
  setup() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
