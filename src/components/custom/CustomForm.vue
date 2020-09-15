<template>
    <b-container fluid class="custom-form-wrapper">
        <div class="form-wrapper">
            <b-form  @submit="onSubmit">
                <b-row>
                    <b-col>
                        <b-form-group
                            label="First Name"
                            label-for="input-1"
                        >
                        <b-form-input
                            id="input-1"
                            v-model="modelValue[0]['first_name']"
                            type="text"
                            required
                            placeholder="First Name"
                        ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group
                            label="Last Name"
                            label-for="input-1"
                        >
                        <b-form-input
                            id="input-2"
                            v-model="modelValue[0]['last_name']"
                            type="text"
                            required
                            placeholder="Last Name"
                        ></b-form-input>
                    </b-form-group>
                    </b-col>                    
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group
                            label="Email"
                            label-for="input-3"
                        >
                        <b-form-input
                            id="input-3"
                            v-model="modelValue[0]['email']"
                            type="email"
                            required
                            placeholder="Email"
                        ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group
                            label="Mobile Number"
                            label-for="input-4"
                        >
                        <b-form-input
                            id="input-4"
                            v-model="modelValue[0]['mobile']"
                            type="number"
                            required
                            placeholder="Mobile Number"
                        ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group
                            label="Website"
                            label-for="input-5"
                        >
                        <b-form-input
                            id="input-5"
                            v-model="modelValue[0]['website']"
                            type="text"
                            required
                            placeholder="Website"
                        ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group
                            label="Address"
                            label-for="input-6"
                        >
                        <b-form-input
                            id="input-6"
                            v-model="modelValue[0]['address']"
                            type="text"
                            required
                            placeholder="Address"
                        ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row class="custom-btns">
                    <ul>
                        <li><b-btn type="button" @click="cancel">Cancel</b-btn></li>
                        <li><b-btn type="submit" v-if="activeState==='createNewCustomer'">Submit</b-btn></li>
                        <li><b-btn type="submit" v-if="activeState==='editCustomer'" @click="saveCustomer">Save</b-btn></li>
                    </ul>
                </b-row>
            </b-form>
        </div>
    </b-container>
</template>

<script>
    export default {
        data() {
            return {}
        },
        computed: {
            activeState:{
                get() {
                    return this.$store.state.activeState
                },
                set(newVal){
                    this.$store.state.activeState = newVal
                }
            },
            modelValue() {
                return this.$store.state.formModel
            },
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                this.$emit('createNewCustomer', this.modelValue)
            },
            cancel(){
                this.activeState = 'manageCustomers'
            },
            saveCustomer() {
                this.$emit('saveCustomer', this.modelValue)
            }
        },
        created() {
            if(this.activeState === 'createNewCustomer') {
                this.modelValue[0] = {}
            }
        },
    }
</script>