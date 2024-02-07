import {defineStore} from 'pinia';
import {useNotification} from '@kyvg/vue3-notification';
import {resultadosLaboratorioPaciente} from "../services/patient";

const {notify} = useNotification();
// searchPage
export let useMyLabResultsStore;
useMyLabResultsStore = defineStore({
    id: 'MyLabResults',
    getters: {},
    actions: {
        async getResults(payload) {
            const response = await resultadosLaboratorioPaciente(payload);
            if (response.status) {
                this.results = response.data;
                this.limit = response.limit;
                this.offset = response.offset;
                if(response.data.length > 0){
                    this.total = response.total;
                }else{
                    this.total = 0;
                }

            } else {
                this.results = [];
                this.total = 0;
                notify({
                    title: 'Hubo un error',
                    text: response.message,
                    type: 'error'
                });
            }
        },
        async getMoreResults(payload) {
            const response = await resultadosLaboratorioPaciente(payload);
            console.log('response lab result more', response);
            if (response.status) {
                this.results.concat(response.data);
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
        clearResults() {
            this.results = [];
            this.total = 0;
            this.limit = 25;
            this.offset = 1;
        },
    },
    state: () => ({
        results: [],
        total: 0,
        limit: 25,
        offset: 1,
    }),
});
