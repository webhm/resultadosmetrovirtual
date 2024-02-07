import {defineStore} from 'pinia';
import {searchCheckouts} from '@/services/myCheckouts';
import { useNotification } from '@kyvg/vue3-notification';
const { notify }  = useNotification();
// searchPage
export let useMyCheckoutsStore;
useMyCheckoutsStore = defineStore({
    id: 'MyCheckouts',
    getters: {},
    actions: {
        async searchCheckouts(payload) {
            //get data from backend
            try {
                this.checkouts = await searchCheckouts(payload );
                console.log('response Checkouts', this.checkouts);
            } catch (e) {
                console.log('error', e);
                notify({
                    title: 'Hubo un error',
                    text: e,
                    type: 'error'
                });
            }
            //this.items = [];
        },
        clearCheckouts() {
            //get data from backend
            try {
                this.checkouts = [];
            } catch (e) {
                console.log('error', e);
            }
            //this.items = [];
        },
    },
    state: () => ({
        checkouts: [],
    }),
});