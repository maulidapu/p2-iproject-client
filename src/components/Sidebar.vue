<template>
    <!-- Sidebar/menu -->
    <nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:300px;" id="mySidebar"><br>
        <div class="w3-container">
            <a href="#" onclick="w3_close()" class="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
                <i class="fa fa-remove"></i>
            </a>
            <img src="redFlag.jpeg" style="width:100%;" class="w3-round"><br><br>
            <h4><b class="w3-text-red">redFlags</b></h4>
            <p class="w3-text-red">Know your stranger</p>
        </div>
        <div class="w3-bar-block">
            <a @click.prevent="goToRegister" class="w3-bar-item w3-button w3-padding w3-text-red"><i class="fa fa-th-large fa-fw w3-margin-right"></i>Register</a>
            <a @click.prevent="goToLogin" class="w3-bar-item w3-button w3-padding w3-text-red"><i class="fa fa-user fa-fw w3-margin-right"></i>Login</a>
            <a @click.prevent="w3_close()" class="w3-bar-item w3-button w3-padding w3-text-red"><i class="fa fa-heart fa-fw w3-margin-right"></i>JOIN US</a>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Sidebar',
    methods: {
        goToRegister() {
            console.log('ke register');
            this.$router.push('register');
        },
        goToLogin() {
            this.$router.push('login');
        }
    }
}
</script>