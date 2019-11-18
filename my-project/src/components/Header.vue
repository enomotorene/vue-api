<template>
    <header class="masthead top-bg bg-light">
    <div class="container ">
      <div class="intro-text col-md-6">
        <div class="intro-lead-in">Welcome<br> To <br>My Online Portfolio</div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.intro-lead-in {
  color: #fff;
}

@media only screen and (min-width: 768px){
  .top-bg {
  font-size: 30px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 400px;
  line-height: 1.6;
}
}

/* .top-bg {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 400px;
} */

@media only screen and (max-width: 600px) {
  .top-bg {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  /* height: 400px; */
}
}

</style>