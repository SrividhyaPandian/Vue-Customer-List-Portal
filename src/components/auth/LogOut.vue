<template>
    <b-container fluid class="vue-template-wrapper">
        <div class="login-wrapper" v-if="!$store.state.authenticated">
            <b-card>
                You are successfully Logged Out !!!
                <p>Have a nice day !!!</p>
                <p>
                    <router-link to="/">Click to Login</router-link>
                </p>
            </b-card>
        </div>
    </b-container>
</template>

<script>
    export default {}
</script>