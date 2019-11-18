<template>
  
  <section class="bg-light page-section" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center"><br>
          <h2 class="section-heading text-uppercase works-text">Works</h2>
          <h3 class="section-subheading text-muted">Selected work that has been created with the help of many.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-6 portfolio-item" v-for="(obj, key) in portfolioJSON" :key="key" :href="obj.url">
            <a :href="obj.url" target=”_blank” ><img :src="obj.img" class="img-fluid"></a>
          <div class="portfolio-caption works-text">
            <h4 class="works-text">{{ obj.caption }}</h4>
            <p class="text-muted works-text">{{ obj.title }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>

</template>  

<script>


export default {
   data: () => ({
    portfolioJSON: [
            {
                img: require('../assets/img/sukimatch/sukimatch.png'),
                caption: 'SUKIMATCH',
                title: 'WEBESITE, BANNER DESGIN, RFP',
                url: "/Sukimatch"
            },
            {
                img: require('../assets/img/portfolio/greencosjapan.png'),
                caption: 'Greencosjapan',
                title: 'WEBSITE',
                url: "https://greencosjapan.com"
            },
            {
                img: require('../assets/img/portfolio/forskartorget.png'),
                caption: 'Forskartorget',
                title: 'WEBSITE',
                url: "http://www.forskartorget.se/"
            },
            {
                img: require('../assets/img/portfolio/pluscap.png'),
                caption: 'Pluscap',
                title: 'WEBSITE',
                url: "https://www.pluscap.se/"
            },
            {
                img: require('../assets/img/portfolio/izumo.png'),
                caption: 'Internship at IzumoBASE, INC.',
                title: 'WEBSITE',
                url: "https://www.izumobase.com/"
            },
            {
                img: require('../assets/img/portfolio/paydrive.png'),
                caption: 'Paydrive',
                title: 'WEBSITE',
                url: "https://www.paydrive.se/"
            },
            {
                img: require('../assets/img/portfolio/lineapp.png'),
                caption: 'Södertörns högskola',
                title: 'School project. App design, logo, poster etc.',
                url: "/School"
            },
            {
                img: require('../assets/img/portfolio/graduate.png'),
                caption: 'Södertörns högskola',
                title: 'Graduation project',
                url: "/Graduate"
            }
        ]
  
   })
}
</script>

<style lang="css">
/* a.sk-hover {
  background: lawngreen;
} */

.works-text {
  font-family: "Berkerville";
}
</style>