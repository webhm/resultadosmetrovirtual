import {defineStore} from 'pinia';
import {searchInvoices} from '@/services/myInvoices';
import { useNotification } from '@kyvg/vue3-notification';
const { notify }  = useNotification();
// searchPage
export let useMyInvoicesStore;
useMyInvoicesStore = defineStore({
    id: 'MyInvoices',
    getters: {},
    actions: {
        async getInvoices(payload) {
            //get data from backend
            const response = await searchInvoices(payload);
            console.log('response payedInvoices', response);
            if (response.status) {
                this.invoices = response.data;
                this.limit = response.limit;
                this.offset = response.offset;
                if(response.data.length > 0){
                    this.total = response.total;
                }else{
                    this.total = 0;
                }
            } else {
                this.invoices = [];
                this.total = 0;
                notify({
                    title: 'Hubo un error',
                    text: response.message,
                    type: 'error'
                });
            }
        },
        async getMoreInvoices(payload) {
            //get data from backend
            const response = await searchInvoices(payload);
            console.log('response payedInvoices', response);
            if (response.status) {
                this.invoices.concat(response.data);
                this.total = response.total;
                this.limit = response.limit;
                this.offset = response.offset;
            } else {
                notify({
                    title: 'Hubo un error',
                    text: response.message,
                    type: 'error'
                });
            }
        },
        clearInvoices() {
            this.invoices = [];
            this.total = 0;
            this.limit = 25;
            this.offset = 1;
        },
    },
    state: () => ({
        invoices: [],
        total: 0,
        limit: 25,
        offset: 1
    }),
});
