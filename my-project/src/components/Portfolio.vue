<template>
  <section class="bg-light page-section" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Portfolio</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div class="row">

       <div class="col-md-4 col-sm-6 portfolio-item" v-for="(obj, key) in portfolioJSON" :key="key">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img v-for="image in imageArray" :src="image" class="img-fluid" alt=""></img>
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
                img: require('../assets/img/portfolio/02-full.jpg'),
                caption: 'test',
                title: 'Graphic Design'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Explore',
                title: 'Graphic Design'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Explore',
                title: 'Graphic Design'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Explore',
                title: 'Graphic Design.'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Explore',
                title: 'Graphic Design'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Explore',
                title: 'Graphic Design'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Pizza',
                title: 'I ate some pizza'
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