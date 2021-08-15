<template>
  <div :style="{ backgroundColor: color }">
    {{ product }}
    <button disabled="isDisabled">Click me!</button>
    <p v-if="value > 10" :class="{ style: value > 10 }">In Stock</p>
    <p v-else-if="value <= 10 && value > 0">Almost out of stock</p>
    <p v-else>Out of Stock</p>
    <button v-show="shouldDisplay" @click="add()">Visibility button</button>
    <ul>
      <li v-for="item in details" :key="item">{{ item }}</li>
    </ul>
    <h1>{{ title }}</h1>

    <h1>{{ name }}</h1>
    <input id="name" v-model="name" />
  </div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld
    msg="Welcome to Your Vue.js App"
    :class="[value <= 10 ? 'style1' : 'style2']"
  />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      product: "My product",
      brand: "test",
      isDisabled: true,
      value: 8,
      shouldDisplay: true,
      details: ["Item 1", "Item 2", "Item 3"],
      color: "red",
      name: "Piotr",
    };
  },
  methods: {
    add() {
      this.value += 1;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.style1 {
  border: 5px solid blue;
}

.style2 {
  border: 5px solid yellow;
}
</style>
