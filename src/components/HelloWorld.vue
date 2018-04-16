<template>
  <div class='hello'>
    <h1>{{ message }}</h1>
    <button v-on:click="reverseMessage">逆转消息</button>
    <button @click="reverseMessage">逆转消息</button>
    <h2>Essential Links</h2>
    <p v-if="seen">现在你看到我了</p>
    <ul>
      <li>
        <a href="/About">About</a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="aa">Other</a>
      </li>
      <li v-for="todo in todos">{{ todo.text }}</li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      seen: false,
      message: 'Welcome to Your Vue.js App',
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
    }
  },
  methods: {
    aa () {
      this.$router.push({ name: 'Other' })
    },
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
