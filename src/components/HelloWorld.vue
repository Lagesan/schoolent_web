<template>
<div>{{ msg }}</div>
<button :title="test" @click="showAlert">{{ test }}</button>
</template>

<script>
export default{
  data(){
    return{
      msg:"Hello Schoolent!",
      test:"测试按钮"
    }
  },
  methods: {
    showAlert() {
      alert("Schoolent is coming!");
    }
  }
}
</script>
