<template>
  <div id="app">
    <h1>Vue Github Stars Component</h1>
    <GithubStars repo="vuejs/vue" />
    <GithubStars repo="facebook/react" />
  </div>
</template>

<script>
import GithubStars from "./components/VueGithubStars"
export default {
  name: 'app',
  components: {
    GithubStars
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1, h2 {
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
