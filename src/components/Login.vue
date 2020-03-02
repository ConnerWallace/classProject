<template>
    <div>
        <h4>Login</h4>
        <form>
            <label for="email" >E-Mail Address</label>
            <div>
                <input id="email" type="email" v-model="email" required autofocus>
            </div>
            <div>
                <label for="password" >Password</label>
                <div>
                    <input id="password" type="password" v-model="password" required>
                </div>
            </div>
            <div>
                <button type="submit" @click="login">
                    Login
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                email : "",
                password : ""
            }
        },
        methods: {
            login() {
                let email = this.email 
                let password = this.password
                this.$store.dispatch('login', { email, password })
                .then(() => this.$router.push('/home'))
                .catch(err => {
                    console.log(err);
                    alert("invalid username or password")
                })
            }
        }
    }
</script>

<style scoped>

</style>