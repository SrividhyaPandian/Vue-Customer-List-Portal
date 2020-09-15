<template>
    <b-container fluid class="vue-template-wrapper">
        <div class="login-wrapper" v-if="!$store.state.authenticated">
            <b-form class="login-form" @submit="onSubmit">
                <h3>Sign In</h3>

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

                <b-button type="submit">Login</b-button>
            </b-form>
            <div class="auth-action">
                <p><b-link class="text-center signUp-footer" @click="signUp">Sign Up</b-link></p>
            </div>
        </div>
    </b-container>
</template>

<script>
    export default {
        created() {
            this.$store.state.activeState = 'login'
        },
        data() {
            return {
                form: {
                    username:'',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                this.$store.state.login[0].username = this.form.username
                this.$store.state.login[0].password = this.form.password
                this.$store.state.authenticated = true
                this.$store.commit('UPDATE_ACTIVE_STATE', 'manageCustomer')
            },
            signUp(){
                this.$store.commit('UPDATE_ACTIVE_STATE', 'signUp')
            }
        }   
    }
</script>