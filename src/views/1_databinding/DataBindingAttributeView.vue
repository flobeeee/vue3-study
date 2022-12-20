<template>
  <div>
    <input type="text" name="" id="" v-bind:value="userId" readonly> <!-- 단방향임. 사용자가 못고침-->
    <input type="text" name="" id="" :value="userId" readonly> <!-- v-bind 생략가능-->
    <br>
    <img :src="imgSrc" alt="" style="width:100px; height: auto;" > <!-- 이미지도 databinding 가능-->
    <br>
    <input type="search" name="" id="" v-model="txt1">
    <button :disabled="txt1 === ''">조회</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'ejlee go',
      imgSrc: 'https://i.pinimg.com/originals/ce/2f/53/ce2f532aaa569f4e9c00e881cfd9685d.png',
      txt1: ''
    }
  },
  setup() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
