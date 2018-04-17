<template>
    <div>
      <h2>一个组件中引入另一个组件</h2>
      <input v-model="msg" placeholder="edit me">
      <p>{{ msg }}</p>
       <About :message='msg'></About>
    </div>
</template>

<script>
import About from './About'
export default {
  name: 'Other',
  components: {
    About
  },
  data () {
    return {
      msg: 'Welcome to Other'
    }
  }
}
</script>


