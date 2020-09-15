<template>
    <b-container fluid class="vue-template-wrapper">
        <div class="login-wrapper">
            <b-form class="login-form" @submit="registerUser">
                <h3>Sign Up</h3>
                <b-form-group
                    label="Full Name"
                    label-for="input-1"
                >
                    <b-form-input
                    id="input-1"
                    v-model="form.fullname"
                    type="text"
                    required
                    placeholder="Enter your Fullname"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    label="Username"
                    label-for="input-1"
                >
                    <b-form-input
                    id="input-1"
                    v-model="form.username"
                    type="text"
                    required
                    placeholder="Enter your Username"
                    ></b-form-input>
                </b-form-group>

                <b-form-group 
                    label="Password" 
                    label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="form.password"
                    required
                    placeholder="Enter your Password"
                    ></b-form-input>
                </b-form-group>

                <b-button type="submit">Sign Up</b-button>
            </b-form>
            <div class="auth-action">
                <p>Already Signed up ?<b-link class="signUp-footer" :to="{ path: '/' }">Login</b-link></p>
            </div>
        </div>
    </b-container>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    fullname: '',
                    username:'',
                    password: ''
                }
            }
        },
        methods: {
            registerUser(evt) {
                evt.preventDefault()
                this.$store.state.login.push(this.form)
                this.$router.push({ name: 'login' })
            }
        }   
    }
</script>