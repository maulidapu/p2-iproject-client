<template>
<div class="home">
    <Sidebar/>

    <!-- Overlay effect when opening sidebar on small screens -->
    <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

    <PageContent/>    
</div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue';
import PageContent from '@/components/PageContent.vue';

export default {
    name: "Home",
    components: {
      Sidebar,
      PageContent,
    }
};
</script>
