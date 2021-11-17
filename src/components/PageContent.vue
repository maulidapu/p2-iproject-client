<template>
    <!-- !PAGE CONTENT! -->
    <div class="w3-main" style="margin-left:300px">
      <!-- Header -->
      <header id="portfolio">
        <a href="#"><img src="avatar_g2.jpg" style="width:65px;" class="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"></a>
        <span class="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onclick="w3_open()"><i class="fa fa-bars"></i></span>
        <div class="w3-container" >
          <img src="assets/redFlag.jpeg" style="width:100%;" class="w3-round"><br><br>
        </div>
        <h1><b class="w3-text-red">ignore the red flags, embrace the heartache to come if not worse</b></h1>
        <div class="w3-section w3-bottombar w3-padding-16">
          <button v-if="this.$store.state.isLogin" class="w3-button w3-red" style="margin-left:450px">Post your redFlag NOW!</button>
          <form class="w3-main" style="margin-left:800px">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success w3-button w3-red" type="submit">Search</button>
          </form>
          <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button w3-padding w3-text-red"><i class="fa fa-phone fa-3x w3-margin-right"></i>EMERGENCY CALL</a>
        </div>
      </header>

      <!-- First Photo Grid-->
      <div class="w3-row-padding" style="display: flex; flex-wrap: wrap;">
        <div v-for="e in this.$store.state.items" :key="e.id" class="w3-third w3-container w3-margin-bottom">
          <img :src="e.imageUrl" alt="Norway" style="width:200px; height: 200px; object-fit:cover;" class="w3-hover-opacity">
          <div class="w3-container w3-white">
            <div class="bg-white">
              <div class="w3-center w3-padding-32">
                  <button class="w3-button w3-red w3-hover-grey" @click.prevent="playSound(e.description)"><i class="fa fa-commenting-o"></i><span class="ml-1"> Voice</span></button>
                  <button class="w3-button w3-red w3-hover-grey">
                  <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-show-count="false">Tweet</a>
                  <!-- <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
                  </button>
                  <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button w3-padding w3-text-red"><i class="fa fa-instagram fa-3x"></i></a>
              </div>
            </div>
            <p><b>{{ e.name }}</b></p>
            <p>{{ e.description }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'PageContent',
    created() {
        this.$store.dispatch('getItems');
    },
    methods: {
        playSound(description) {
            responsiveVoice.speak(description);
        }
    }
}
</script>