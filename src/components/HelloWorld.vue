<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="category in categories" :key="category.key">
      {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
import {ref, mounted } from 'vue';
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const categories = ref();

    return {
      categories,
      mounted,
    }
  },

  mounted(){
    axios
      .get('https://api.chucknorris.io/jokes/categories')
      .then((response) => {
        console.log(response)
        this.categories = response.data
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
