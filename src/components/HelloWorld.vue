<template>
  <div class='hello'>
    <h1>{{ message }}</h1>
    <button v-on:click="reverseMessage">逆转消息</button>
    <button @click="reverseMessage">逆转消息</button>
    <h2>Essential Links</h2>
    <p v-if="seen">现在你看到我了</p>
    <P>{{now}}</P>
    <router-link to="Other">Other链接</router-link>
    <ul>
      <li>
        <a href="/About">About</a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="aa">Other</a>
      </li>
    </ul>
    <li v-for="todo in todos">{{ todo.text }}</li>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
    <h1 v-show="true">Hello!</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data:function() {
      return{ 
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
      //this.$router.push({ name: 'Other' })
      this.$router.replace ('Other')
    },
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  },
  computed: {
    now: function () {
      return 'now time'
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
