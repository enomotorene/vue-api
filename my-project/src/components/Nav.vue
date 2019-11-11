<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top nav-fixed-bg" id="mainNav">
    <div class="container">
      <router-link class="navbar-brand js-scroll-trigger" to="/">RE</router-link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="true" aria-label="Toggle navigation">
        <!-- Menu -->
        <!-- <i class="fa fa-bars" aria-hidden="true"></i> -->
        <i class="fa fa-bars" aria-hidden="true"></i>
        
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item nav-text" v-for="(linkObj, ind) in navList" :key="ind">
            <a class="nav-link js-scroll-trigger" :href="linkObj.path" v-if="linkObj.path.indexOf('#') === 0">{{ linkObj.name }}</a>
            <router-link 
              class="nav-link js-scroll-trigger"
              v-else 
              :to="linkObj.path"
              >{{ linkObj.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    navList: [
      {
      name: 'Home',
      path: '/'
      },{
      name: 'About',
      path: '/About'
      },
      {
      name: 'Works',
      path: '/Works'
      },
      {
      name: 'Contact',
      path: '/Contact'
      },
    ]
  })
}
</script>

<style scoped>

#mainNav.navbar { /*increasing specificity*/
  /* background: rgba(0, 0, 0, 0.5); */
  color: #007bff;
}

#mainNav .navbar-toggler {
background-color: #fff;
color: #000272;
}

/* @media (min-width:768px){
  header.masthead .intro-text{padding-top:150px;padding-bottom:0px}
} */
</style>