<template>
  <div id="app">
    <!-- Menu -->  
    <Nav></Nav>
    <router-view />
    <!-- Footer -->
  <Footer></Footer>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Footer from './components/Footer'
export default {
  components: {
    Nav,
    Footer
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
  /* margin-top: 60px; */
}

#vue-logo {
  box-sizing: border-box;
 
}

input, button {
  border: 0;
  border-color: cornflowerblue;
  margin: 0 0 10px;
  padding: 7px;
  /* background-color: aqua; */
}

input {
  font-size: 12px;
}

.home {
  width: 300px;
  margin: auto;
  /* background: #2c3e50; */
}

button {
  background: paleturquoise;
}

#error {
  background: red;
  color: white;
  padding: 5px;
}
</style>
