import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutation";
import actions from "./action";

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: false,
    state: {
        authenticated: false,
        activeState: 'login',
        login: [
            {
                username: "",
                password: ""
            }
        ],
        defaultCustomers: {
            fields: ['first_name', 'last_name', 'email', 'mobile', 'website', 'address'],
            items: [
                { first_name: 'Dickerson', last_name: 'Macdonald', email: 'abc@gmail.com', mobile: 40, website: 'xyz', address: 'India'},
                { first_name: 'Larsen', last_name: 'Shaw', email: 'def@yahoo.com', mobile: 21, website: 'mno', address: 'Pakistan'},
                { first_name: 'Geneva', last_name: 'Wilson', email: 'ghi@hotmail.com', mobile: 89, website: 'pqr', address: 'USA'},
                { first_name: 'Jami', last_name: 'Carney', email: 'jkl@reddit.com', mobile: 38, website: 'stu', address: 'China'}
            ]
        },
        formModel: [{
            first_name: "",
            last_name:"",
            email:"",
            mobile: "",
            website: "",
            address: ""
        }]
    },
    actions,
    mutations
});

export default store;