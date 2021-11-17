<template>
    <div>
        <h2>Register</h2>

        <form @submit.prevent="register">
            <label for="fname">Email:</label><br>
            <input type="email" id="fname" v-model="user.email"><br>
            <label for="lname">Password:</label><br>
            <input type="password" id="lname" v-model="user.password" name="lname"><br>
            <label for="">Address</label><br>
            <input type="text" v-model="user.address"><br>
            <label for="">Province</label><br>
            <select @change="getCity($event)" name="" id="" v-model="user.province">
                <option value="">Select Province</option>
                <option  v-for="e in provinces" :key="e.id" :value="e.id">{{ e.nama }}</option>
            </select><br>
            <label for="">City</label><br>
            <select name="" id="" v-model="user.city">
                <option value="">Select City</option>
                <option v-for="e in cities" :key="e.id" :value="e.nama">{{ e.nama }}</option>
            </select><br><br>
            <input type="submit" value="Submit">
        </form> 
    </div>
</template>

s<script>
export default {
    name: 'Register',
    data() {
        return{
            user: {
                email: '',
                password: '',
                address: '',
                province: '',
                city: ''
            }

        }
    },
    created() {
        this.$store.dispatch('getProvince');
    },
    methods: {
        getCity(id) {
            console.log('masuk ke get city', id.target.value)
            this.$store.dispatch('getCity', id.target.value);
        },
        register() {
            let prov = this.provinces.filter((e) => {
                return e.id == this.user.province;
            })[0].nama;
            this.user.province = prov;
            this.$store.dispatch('register', this.user);
        }
    },
    computed: {
        provinces() {
            return this.$store.state.province
            console.log(this.$store.state.province, '<<prov');
        },
        cities() {
            return this.$store.state.city
        }
    }
}
</script>