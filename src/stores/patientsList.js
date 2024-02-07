import {defineStore} from 'pinia';
// import {searchPatients} from '@/services/searchPatients';
import { useNotification } from '@kyvg/vue3-notification';
const { notify }  = useNotification();
// searchPage
export let usePatientsListStore;
usePatientsListStore = defineStore({
    id: 'PatientsList',
    getters: {},
    actions: {
        async getPatients() {

        },
        clearPatients() {
            //get data from backend
            try {
                this.patient_list = [];
                this.search_type = 'pte';
            } catch (e) {
                console.log('error', e);
            }
            //this.items = [];
        },
    },
    state: () => ({
        patient_list: [],
        search_type: 'pte',
        activeTab: 0,
    }),
});
