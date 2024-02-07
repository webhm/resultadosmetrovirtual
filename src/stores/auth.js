import {defineStore} from 'pinia';
import {medicAuthSetToken, medicAuthClearToken} from '@/services/medicAuth';
// searchPage
export let useAuthStore;
useAuthStore = defineStore({
    id: 'auth',
    getters: {


    },
    actions: {
        hasRole(name) {
            //get data from backend
            try {

                let roles = this.user?.idTokenClaims?.roles;
                if(!roles){
                    return false;
                }
                return roles.includes(name);
            }catch (e) {
                console.log('errpr', e);
                return false;
            }
            //this.items = [];
        },
        async login(user, type, token) {
            //get data from backend
            try {

                this.user = user;
                localStorage.setItem('patientMetrovirtualUser', JSON.stringify(user));
                this.type = type;
                localStorage.setItem('patientMetrovirtualType', type);
                this.token = token;
                localStorage.setItem('patientMetrovirtualToken', token);
                medicAuthSetToken(token);
            } catch (e) {
                console.log('error', e);
            }
            //this.items = [];
        },
        async setUser(user) {
            //get data from backend
            try {

                this.user = user;
                localStorage.setItem('patientMetrovirtualUser', JSON.stringify(user));
            } catch (e) {
                console.log('error', e);
            }
            //this.items = [];
        },
        async setToken(token) {
            //get data from backend
            try {

                this.token = token;
                localStorage.setItem('patientMetrovirtualToken', token);
            } catch (e) {
                console.log('error', e);
            }
            //this.items = [];
        },
        async logout () {
            //get data from backend
            try {

                medicAuthClearToken();
                this.user = null;
                this.type = null;
                this.token = null;
                localStorage.removeItem('patientMetrovirtualUser');
                localStorage.removeItem('patientMetrovirtualType');
                localStorage.removeItem('patientMetrovirtualToken');

            } catch (e) {
                console.log('error', e);
            }
            //this.items = [];
        },
    },
    state: () => ({
        user: localStorage.getItem('patientMetrovirtualUser') ?
            JSON.parse(localStorage.getItem('patientMetrovirtualUser')) : null,
        type: localStorage.getItem('patientMetrovirtualType'),
        token: localStorage.getItem('patientMetrovirtualToken')
    }),
});
