<template>
  <section class="bg-light page-section" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 text-left"><br>
          <h2 class="section-heading text-uppercase">GRADUATION PROJECT</h2>
          <h3 class="section-subheading text-muted">Worked at for a japanese company to create a website using Laravel PHP framework remotely from Stockholm.<br><br> I mainly worked for frontend side (”view part” of the MVC model) and created mock up using Indesign.<br><br><a href="https://youtu.be/1cxKbE9a_l0" title="Download movie" target = "_blank">Click here to see my presentation</a></h3>
        </div>
      </div>
      <div class="row">
          <!-- <video width="450" controls :src="video"></video> -->
       <div class="col-md-4 col-sm-4 portfolio-item" v-for="(obj, key) in portfolioJSON" :key="key">
          <!-- <a class="portfolio-link" data-toggle="modal" v-bind:href="obj.url" target = "_blank"> -->
            <!-- <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div> -->
            <img :src="obj.img" class="img-fluid" alt="" >
          <!-- </a> -->
          <!-- <div class="portfolio-caption">
            <h4>{{ obj.caption }}</h4>
            <p class="text-muted">{{ obj.title }}</p>
          </div> -->
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
                caption: 'Forskartorget',
                title: 'WEBSITE',
                
            },
            {
                img: require('../assets/img/graduate/startsida2.png'),
                caption: 'Pluscap',
                title: 'WEBSITE',
               
            },
            {
                img: require('../assets/img/graduate/startsida3.png'),
                caption: 'Internship at IzumoBASE, INC.',
                title: 'WEBSITE',
                
            },
            {
                img: require('../assets/img/graduate/startsida4.png'),
                caption: 'Paydrive',
                title: 'WEBSITE',
                
            },
            {
                img: require('../assets/img/graduate/startsida5.png'),
                caption: 'Södertörns högskola',
                title: 'School project. App design, logo, poster etc.',
                
            },
            {
                img: require('../assets/img/graduate/produktsida.png'),
                caption: 'Södertörns högskola',
                title: 'Graduation project',
                
            },
            {
                img: require('../assets/img/graduate/tamatechsida.png'),
                caption: 'Paydrive',
                title: 'WEBSITE',
            },
            {
                img: require('../assets/img/graduate/kontaktsida.png'),
                caption: 'Paydrive',
                title: 'WEBSITE',
            },
            {
                img: require('../assets/img/graduate/kontaktsida.png'),
                caption: 'Paydrive',
                title: 'WEBSITE',
                //url: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/"+res2+"\"  frameborder=\"0\" allowfullscreen></iframe>"
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