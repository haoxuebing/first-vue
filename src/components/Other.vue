<template>
    <div>
      <h2>asdf</h2>
      <p>{{ msg }}</p>
       <About></About>
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


