<template>
  <div>
    <h2>一个组件中引入另一个组件</h2>
    <input v-model="message" placeholder="edit me">
    <p>{{ message }}</p>
    <p>{{ count }}</p>
    <About :message='message'></About>
  </div>
</template>

<script>
  import store from '../store'
export default {
  name: 'Other',
  components: {
    About:()=>import('./About')
  },
  data () {
    return {
      message: 'Welcome to Other'
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  }
}
</script>


