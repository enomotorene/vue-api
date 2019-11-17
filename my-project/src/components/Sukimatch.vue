<template>
  <section class="bg-light page-section" id="portfolio">
      <div class="container">
      <div class="row">
        <div class="col-lg-6 text-left"><br>
          <h2 class="section-heading text-uppercase graduate-text">Sukimatch</h2>
          <h3 class="section-subheading text-muted">In this project we created the request for proposal, serveral banners and a landing page by using Vue framework
              <br><br><a href="https://sukimatch-f887f.firebaseapp.com/" target = "_blank">Click here to see my presentation →</a></h3>
        </div>
        <div class="image full"><img class="live-image" src="../assets/img/sukimatch/sukimatch.png" style="width: 100%; height:100%"></div>
      </div>
    <div class="row">
       <div class="col-md-4 col-sm-4 sk-item" v-for="(obj, key) in portfolioJSON" :key="key">
          <img :src="obj.img" class="img-fluid" alt="" >
        </div>
      </div>
       </div>
  </section>
</template>  

<script>
export default {
  computed: {
    imageArray: function() {
        return this.portfolioJSON.map(obj => obj.img)
    }
},
    data: () => ({
        portfolioJSON: [
            {
                img: require('../assets/img/sukimatch/bn1.jpg'),               
            },
            {
                img: require('../assets/img/sukimatch/bn2.jpg'),               
            },
            {
                img: require('../assets/img/sukimatch/bn3.jpg'),               
            }
        ]
    })
    
}
</script>

<style lang="css">
.sk-item {
    margin-top: 30px;
}

.graduate-text {
  font-family: "Baskerville";
}
</style>