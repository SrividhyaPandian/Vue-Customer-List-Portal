<template>
    <b-container class="custom-wrapper">
        <!-- Manage Customer List -->
        <div class="manageCustomer-wrapper" v-if="activeState ==='manageCustomers'">
            <b-card>
                <section class="userDetails">
                    <span class="activeUser">Welcome {{ activeUser[0].username }} !!!</span>
                    <span class="logOut" @click="logOut">Logout <i class="fa fa-sign-out" aria-hidden="true"></i></span>
                </section>
                <section>
                    <ul>
                        <li class="text-left"><h3>Manage Customers</h3></li>
                        <li class="text-right"><b-btn variant="rgb(72, 74, 96)" @click="addCustomer">Add New Customer</b-btn></li>
                    </ul>
                </section>
                <b-table 
                    primary-key="first_name" 
                    :items="defaultCustomers.items" 
                    :fields="defaultCustomers.fields"
                    selectable
                    select-mode="single"
                    @row-selected="onRowSelected"
                ></b-table>
            </b-card>
        </div>
        <!-- Create/Edit Customer -->
        <div class="manageCustomer-wrapper" 
        v-if="activeState ==='createNewCustomer'|| activeState ==='editCustomer'">
            <section class="newCustomer-wrapper">
                <b-card>
                    <div>
                        <ul class="customUl">
                            <li class="text-left" v-if="activeState ==='createNewCustomer'"><h3>New Customer</h3></li>
                            <li class="text-left" v-else><h3>Edit Customer</h3></li>
                            <li class="text-right" v-if="activeState ==='editCustomer'">
                                <b-btn @click="showAddressModal = !showAddressModal" variant="rgb(72, 74, 96)">Show Address</b-btn>
                            </li>
                        </ul>
                        <b-modal v-if="showAddressModal" v-model="showAddressModal">{{$store.state.formModel[0].address}}</b-modal>
                        <custom-form v-if="activeState ==='createNewCustomer'" @createNewCustomer="updateCustomerList"></custom-form>
                        <custom-form v-if="activeState ==='editCustomer'" @saveCustomer="updateCustomerDetails"></custom-form>
                    </div>
                </b-card>
            </section>
        </div>
    </b-container>
</template>

<script>
    import CustomForm from '../custom/CustomForm.vue';
    export default {
        data() {
            return {
                showAddressModal: false
            }
        },
        components:{ CustomForm },
        created() {
            this.activeState = 'manageCustomers';
        },
        computed: {
            activeUser() {
                return this.$store.state.login;
            },
            activeState:{
                get() {
                    return this.$store.state.activeState
                },
                set(newVal){
                    this.$store.state.activeState = newVal
                }
            },
            defaultCustomers(){
                return this.$store.state.defaultCustomers;
            }
        },
        methods: {
            addCustomer() {
                this.activeState = 'createNewCustomer';
            },
            updateCustomerList(form) {
                this.defaultCustomers.items.push(form[0]);
                this.activeState = 'manageCustomers';
            },
            onRowSelected(rowData) {
                this.$store.state.formModel = Object.assign(rowData)
                this.activeState = "editCustomer";
            },
            updateCustomerDetails(model) {
                this.activeState = 'manageCustomers';
            },
            logOut() {
                this.$store.state.authenticated = false;
                this.$router.push('logOut')
            }
        }
    }
</script>