<template>
  <section class="bg-light page-section top-page" id="portfolio">
    <div class="container">
      <div class="row text-left">
        <div class="col-md-8">
   <h2 class="section-heading text-uppercase top-portfolio-title">Works</h2>
       <h2 class="text-muted top-page">Greencosjapan</h2>
       <h2 class="text-muted top-page">Pluscap</h2>
       <h2 class="text-muted top-page">IzumoBASE, INC.</h2>
       <h2 class="text-muted top-page">Paydrive</h2><br>
       <a class="btn btn-xl text-uppercase js-scroll-trigger btn-portfolio" href="/Works" style="text-align:left;">View More</a>

 </div>
    
 
 <!-- <div class="col-md-4 col-sm-6 portfolio-item" v-for="(obj, key) in portfolioJSON" :key="key">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img :src="obj.img" class="img-fluid" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>{{ obj.caption }}</h4>
            <p class="text-muted">{{ obj.title }}</p>
          </div>
          
        </div> -->
        
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
                img: require('../assets/img/portfolio/01-thumbnail.jpg'),
                caption: 'test',
                title: 'test1'
            },
            {
                img: require('../assets/img/portfolio/02-thumbnail.jpg'),
                caption: 'Explore',
                title: 'test2'
            },
            {
                img: require('../assets/img/portfolio/03-thumbnail.jpg'),
                caption: 'Explore',
                title: 'tes3'
            }
        ]

    })
    
}
</script>

<style lang="css">
section.top-page {
  background-image: url("../assets/img/bg-1.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center right;
  background-size: cover;
}

.top-portfolio-title {
  color: #000;
}

h2.top-page {
  color: #ffffff;
  font-family: "Times New Roman", Times, serif;
}

h2.top-page:hover {
  background-color: rgb(0, 0, 0);
  /* color: var(--slideTextColor);
      cursor: pointer;
      background-position: -50% 100%; */
}

.btn-portfolio{
color: #494949 !important;
text-transform: uppercase;
text-decoration: none;
background: #ffffff;
padding: 20px;
border: 4px solid #494949 !important;
display: inline-block;
transition: all 0.4s ease 0s;
}

</style>