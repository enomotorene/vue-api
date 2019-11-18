<template>
  <section class="bg-light page-section top-page" id="portfolio">
    <div class="container">
      <div class="row text-left">
        <div class="col-md-8 top-portfolio-bg portfolio-text">
         <h2 class="section-heading text-uppercase top-portfolio-title">Works</h2>
         <h4 class="text-muted common-link" ><a href="https://sukimatch-f887f.firebaseapp.com/" class="default-link" target = "_blank">Sukimatch</a></h4>
         <h4 class="text-muted common-link" ><a href="https://greencosjapan.com/" class="default-link" target = "_blank">Greencosjapan</a></h4>
         <h4 class="text-muted common-link"><a href="https://www.pluscap.se/" class="default-link" target = "_blank">Pluscap</a></h4>
         <h4 class="text-muted common-link"><a href="https://www.izumobase.com/" class="default-link" target = "_blank">IzumoBASE, INC.</a></h4>
         <h4 class="text-muted common-link"><a href="https://www.paydrive.se/" class="default-link" target = "_blank">Paydrive</a></h4><br>
         <a class="btn btn-xl text-uppercase js-scroll-trigger btn-portfolio" href="/Works" style="text-align:left;">View More</a>
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
  font-family: "Baskerville";
}

h4.common-link {
  color: #ffffff;
  font-family: "Baskerville";
  cursor: pointer;
}

h4 a.default-link {
  color:#ffffff;
  text-decoration:none;
  
}

a {cursor: pointer;}


h4.common-link:hover {
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
border-radius:0em;
padding: 10px;
}

.btn-portfolio:hover {opacity: 0.6}

.top-portfolio-bg {
  background: rgba(0, 0, 0, 0.5);
  padding: 30px;
  
}

</style>