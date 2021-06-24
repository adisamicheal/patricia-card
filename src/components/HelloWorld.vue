<template>
  <div>
    <duv class="form">
      <div class="form-group">
        <label for="NAme">Name</label>
        <input type="text" placeholder="Name" v-model="name">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" placeholder="password" v-model="password">
      </div>
      <button :disabled="!formComplete">Submit</button>
    </duv>
  </div>
</template>

<script>
export default {
  name: 'Helloworld',
  data() {
    return {
      name: '',
      password:''
    }
  },
  computed:{
    formComplete() {
      if(this.name && this.password) {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped>
button {
  background: indianred;
  cursor: pointer;
}
button:disabled,
button[disabled] {
  background: grey;
  cursor: not-allowed;
}
</style>