<template>
  <div>
    <input type="text" v-model="userId"/> <!-- v-model은 양방향으로 데이터 동작 (js도 화면에서도 값을 바꿀 수 있음) -->
    <button @click="myFunction">클릭</button>
    <button @click="changeData">변경</button>
    <br>
    <input type="text" v-model="num1"/> +
    <input type="text" v-model="num2"/> =
    <span>{{ num1 + num2 }}</span>
    <br>
    <input type="text" v-model.number="num3" /> +
    <input type="text" v-model.number="num4" /> =
    <span>{{ num3 + num4 }}</span>
  </div>
</template>
<script>
export default {
  components: {},
  data() { // 화면에서 쓸 데이터 정의
    return {
      userId: 'gogo', // input에 값이 들어가있음
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  setup() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() { // function keyword 빼도 됨
      console.log(this.userId)
    },
    changeData() {
      this.userId = 'jeremy'
    }
  }
}
</script>
