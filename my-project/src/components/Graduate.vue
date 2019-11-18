<template>
  <section class="bg-light page-section" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 text-left"><br>
          <h2 class="section-heading text-uppercase graduate-text">GRADUATION PROJECT</h2>
          <h3 class="section-subheading text-muted">Worked at for a japanese company to create a website using Laravel PHP framework remotely from Stockholm.<br><br> I mainly worked for frontend side (”view part” of the MVC model) and created mock up using Indesign.<br><br><a href="https://youtu.be/1cxKbE9a_l0" title="Download movie" target = "_blank">Click here to see my presentation</a></h3>
        </div>
      </div>
      <div class="row">
       <div class="col-md-4 col-sm-4 portfolio-item" v-for="(obj, key) in portfolioJSON" :key="key">
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
                img: require('../assets/img/graduate/startsida1.png'),      
            },
            {
                img: require('../assets/img/graduate/startsida2.png'),
            },
            {
                img: require('../assets/img/graduate/startsida3.png'),             
            },
            {
                img: require('../assets/img/graduate/startsida4.png'),               
            },
            {
                img: require('../assets/img/graduate/startsida5.png'),               
            },
            {
                img: require('../assets/img/graduate/produktsida.png'),              
            },
            {
                img: require('../assets/img/graduate/tamatechsida.png'),
           },
            {
                img: require('../assets/img/graduate/kontaktsida.png'),
           },
            {
                img: require('../assets/img/graduate/kontaktsida.png'),
          }
            
        ]
    })
    
}
</script>

<style lang="css">
.img-fluid {
  width: 100%;
}

.graduate-text {
  font-family: "Baskerville";
}
</style>