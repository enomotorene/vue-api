<template>
  <section class="bg-light page-section" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 text-left"><br>
          <h2 class="section-heading text-uppercase school-text">School project</h2>
          <h3 class="section-subheading text-muted">See work that has been created with the help of many.</h3>
        </div>
      </div>
      <div class="row">
       <div class="col-md-4 col-sm-4 portfolio-item" v-for="(obj, key) in portfolioJSON" :key="key">
            <img :src="obj.img" class="img-fluid" alt="">
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
                img: require('../assets/img/school/s1.png'),
                caption: 'Forskartorget',
                title: 'WEBSITE',
                
            },
            {
                img: require('../assets/img/school/s2.png'),
                caption: 'Pluscap',
                title: 'WEBSITE',
               
            },
            {
                img: require('../assets/img/school/s3.png'),
                caption: 'Internship at IzumoBASE, INC.',
                title: 'WEBSITE',
                
            },
            {
                img: require('../assets/img/school/s4.png'),
                caption: 'Paydrive',
                title: 'WEBSITE',
                
            },
            {
                img: require('../assets/img/school/ges1.png'),
                caption: 'Södertörns högskola',
                title: 'School project. App design, logo, poster etc.',
                
            },
            {
                img: require('../assets/img/school/ges2.png'),
                caption: 'Södertörns högskola',
                title: 'Graduation project',
                
            },
            {
                img: require('../assets/img/school/dik1.png'),
                caption: 'Paydrive',
                title: 'WEBSITE',
                
            }
            
        ]
    })
    
}
</script>

<style lang="css">
.img-fluid {
  width: 100%;
}

.school-text {
  font-family: "Baskerville";
}
</style>