<template>
  <section class="bg-light page-section top-page" id="portfolio">
    <div class="container">
      <div class="row text-left">
        <div class="col-md-8 top-portfolio-bg">
   <h2 class="section-heading text-uppercase top-portfolio-title title-portfolio">Works</h2>
       <h2 class="text-muted top-page" ><a href="https://greencosjapan.com/" class="portfolio-link" style="">Greencosjapan</a></h2>
       <h2 class="text-muted top-page"><a href="https://www.pluscap.se/" class="portfolio-link" style="">Pluscap</a></h2>
       <h2 class="text-muted top-page"><a href="https://www.izumobase.com/" class="portfolio-link" style="">IzumoBASE, INC.</a></h2>
       <h2 class="text-muted top-page"><a href="https://www.paydrive.se/" class="portfolio-link" style="">Paydrive</a></h2><br>
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
  color: #ffffff;
}

h2.top-page {
  color: #ffffff;
  font-family: "Times New Roman", Times, serif;
  cursor: pointer;
}

h2 a.portfolio-link {
  color:#ffffff;
  text-decoration:none;
  
}

a {cursor: pointer;}

h2.top-page {
  color: #ffffff;
  font-family: "Times New Roman", Times, serif;
}

h2.top-page:hover {
  background-color: rgb(0, 0, 0);
  background: rgba(143, 122, 219, 0.3);
}


.btn-portfolio{
color:#000 ;
text-transform: uppercase;
text-decoration: none;
background: #ffffff;
padding: 20px;
/* border: solid #000 ; */
display: inline-block;
opacity: 1;
  transition: 0.3s;
  font-family: "Times New Roman", Times, serif;

}

.btn-portfolio:hover {opacity: 0.6}

.top-portfolio-bg {
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  
}

</style>