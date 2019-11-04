<template>
<div>
  <!-- Header -->
  <Header></Header>

  <!-- Services -->
  <Service></Service>

<!-- input Grid -->
   <!-- <div class="home">
     <img src="@/assets/logo.png" alt="Vue logo" id="vue-logo">
     <div class="title">What do i need to do today?</div>
     <input v-model="myTodo" /><button @click="addTodo">Add</button>
     <div v-if="errors !== ''" id="errors">{{errors}}</div>

     <div v-if="this.$store.getters.getItems && this.$store.getters.getItems.length > 0">
       <div class="title">Todos that need to be done today</div>

       <div v-for="item in this.$store.getters.getItems" :key="item.id">
         {{item.title}}<br/><br/> <small style="text-decoration:underline;" @click="deleteItem(item.id)">Delete</small>
         <br />
       </div>
     </div>
    </div>  -->
   <!-- Portfolio Grid -->
  <Portfolio></Portfolio> <!--- this is a component --->

  <!-- About -->
  <!-- <About></About> --> <!--- this is a component --->

  <!-- Team -->
 <!-- <Team></Team> -->

  <!-- Clients -->
  <!-- <Client></Client> -->

  <!-- Contact -->
  <!-- <Contact></Contact> -->

  <!-- Footer -->
  <!-- <Footer></Footer> -->

  <!-- Portfolio Modals -->
  <!-- <Modals></Modals> -->
</div>
</template>

<script>
import Header from './Header'
import Service from './Service'
import Portfolio from './Portfolio'
import About from './About'
import Team from './Team'
import Client from './Client'
import Contact from './Contact'
import Footer from './Footer'
import Modals from './Modals'
import School from './School'

//import {db} from "@/main";

export default {
  name: 'app',
  // beforeCreate: function() {
  //   this.$store.dispatch('setItems');
  // },
  components: {
    Header,
    //Nav,
    Portfolio,
    About,
    Team,
    Client,
    Service,
    Contact,
    Footer,
    Modals,
    School
  }
}
</script>