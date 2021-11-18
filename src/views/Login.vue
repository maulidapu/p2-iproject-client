<template>
    <div>
        <h2>Login</h2>

        <form @submit.prevent="login">
            <label for="fname">Email:</label><br>
            <input type="email" id="fname" v-model="user.email"><br>
            <label for="lname">Password:</label><br>
            <input type="password" id="lname" v-model="user.password" name="lname"><br>
            <input class="w3-red" type="submit" value="Submit">
        </form> 
    </div>
</template>

s<script>
export default {
    name: 'Login',
    data() {
        return{
            user: {
                email: '',
                password: ''
            }

        }
    },
    methods: {
        login() {
            this.$store.dispatch('login', this.user);
        }
    }
}
</script>