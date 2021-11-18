<template>
<div class="home">
    <Sidebar/>

    <!-- Overlay effect when opening sidebar on small screens -->
    <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

    <PageContent/>

    <!-- Pagination -->
      <div class="w3-center w3-padding-32">
        <div class="w3-bar">
          <a href="#" class="w3-bar-item w3-button w3-red w3-hover-grey">«</a>
          <a href="#" class="w3-bar-item w3-grey w3-button w3-red">1</a>
          <a href="#" class="w3-bar-item w3-button w3-red w3-hover-grey">2</a>
          <a href="#" class="w3-bar-item w3-button w3-red w3-hover-grey">3</a>
          <a href="#" class="w3-bar-item w3-button w3-red w3-hover-grey">4</a>
          <a href="#" class="w3-bar-item w3-button w3-red w3-hover-grey">»</a>
        </div>
      </div>
    
    <HFooter style="object-fit:cover;" > </HFooter>
</div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue';
import PageContent from '@/components/PageContent.vue';
import HFooter from 'vue-hacktiv8-footer'

export default {
    name: "Home",
    components: {
      Sidebar,
      PageContent,
      HFooter
    }
};
</script>
