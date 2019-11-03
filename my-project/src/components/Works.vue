<template>
  <section class="bg-light page-section" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Portfolio</h2>
          <h3 class="section-subheading text-muted">Selected work that has been created with the help of many.</h3>
        </div>
      </div>
      <div class="row">
       <div class="col-md-4 col-sm-6 portfolio-item" v-for="(obj, key) in portfolioJSON" :key="key">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <!-- <i class="fas fa-plus fa-3x"></i> -->
              </div>
            </div>
            <img :src="obj.img" class="img-fluid" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>{{ obj.caption }}</h4>
            <p class="text-muted">{{ obj.title }}</p>
          </div>
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
                img: require('../assets/img/portfolio/greencosjapan.png'),
                caption: 'Greencosjapan',
                title: 'WEBSITE',
                url: "https://greencosjapan.com"
            },
            {
                img: require('../assets/img/portfolio/forskartorget.png'),
                caption: 'Forskartorget',
                title: 'WEBSITE'
            },
            {
                img: require('../assets/img/portfolio/pluscap.png'),
                caption: 'Pluscap',
                title: 'WEBSITE'
            },
            {
                img: require('../assets/img/portfolio/izumo.png'),
                caption: 'Internship at IzumoBASE, INC.',
                title: 'WEBSITE'
            },
            {
                img: require('../assets/img/portfolio/paydrive.png'),
                caption: 'Paydrive',
                title: 'WEBSITE'
            },
            {
                img: require('../assets/img/portfolio/lineapp.png'),
                caption: 'Södertörns högskola',
                title: 'School project. App design, logo, poster etc.'
            },
            {
                img: require('../assets/img/portfolio/graduate.png'),
                caption: 'Södertörns högskola',
                title: 'Graduation project'
            }
        ]
    })
    
}
</script>

<style lang="css">
.img-fluid {
  width: 100%;
}
</style>