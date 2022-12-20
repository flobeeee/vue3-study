<!-- router index.js에 등록해서 화면 확인가능  -->

<!-- vue3은 div로 안감싸더라도 작동함. vue2는 안감사면 에러였음 -->
<template>
  <div>
    <h1>Hello {{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() { // vue에서는 function 안씀
    return {
      userName: 'John Doe',
      message: 'Welcome 은정',
      arr: [],
      obj: {}
    }
  }
}
</script>

<!-- 이 화면에만 사용하는 옵션 scoped, 전체 사용하는건 assets 폴더에서 관리
vue는 react와 다르게 html, js, css 부분이 구분되어 있다.-->

<style scoped>
.text-red {
  color: red;
}
</style>
