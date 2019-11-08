<template>
    <section class="page-section" id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase text-left service-name">About Me</h2>
        </div>
      </div>
       <div class="row text-left">
        <div class="col-md-8">
          <p class="text-muted service-text">Hi. I’m Rene Enomoto, a frontend developer based in Tokyo. I am a passionate creative driven by the synergy of design and technology. I seek to bring meaning into design.</p>
          <a class="btn btn-xl text-uppercase js-scroll-trigger btn-service" href="/About">Learn More</a>
        </div>
      </div>
     
    </div>
  </section>
</template>

<script>
export default {
    
}
</script>

<style lang="css">
 .service-name {
   font-family: "Baskerville";
 }

 .service-text {
   font-family: "Baskerville";
 }

.btn-service{
  color:#ffffff ;
  text-transform: uppercase;
  text-decoration: none;
  background: #000;
  padding: 20px;
  border: solid #ffffff ;
  display: inline-block;
  opacity: 1;
  transition: 1;
  font-family: "Times New Roman", Times, serif;
  border-radius: 0em;
  padding: 10px;
}

.btn-portfolio:hover {
  opacity: 0.9
  }
</style>