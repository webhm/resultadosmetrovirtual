import {defineStore} from 'pinia';
import {searchCheckouts} from '@/services/myCheckouts';
import {historialAtencionesPaciente} from '@/services/patient';
import { useNotification } from '@kyvg/vue3-notification';
const { notify }  = useNotification();
// searchPage
export let useMyHistoryStore;
useMyHistoryStore = defineStore({
    id: 'MyHistory',
    getters: {},
    actions: {
        async getHistory(payload) {
            const response = await historialAtencionesPaciente(payload );
            if(response.status){
                this.history = response.data.map((element) => {
                    return {
                        ...element,
                        visible: false,
                        visibleFull: false,
                        isLoading: true,
                        forms: []
                    }
                });
                this.total = response.total;
                this.limit = response.limit;
                this.offset = response.offset;
            }else{
                this.history = [];
                notify({
                    title: 'Hubo un error',
                    text: response.message,
                    type: 'error'
                });
            }
            console.log('response Checkouts', this.history);
        },
        async getMoreHistory(payload) {
            const response = await historialAtencionesPaciente(payload );
            if(response.status){
                this.history.concat(response.data.map((element) => {
                    return {
                        ...element,
                        visible: false,
                        visibleFull: false,
                        isLoading: true,
                        forms: []
                    }
                }));
                this.total = response.total;
                this.limit = response.limit;
                this.offset = response.offset;
            }else{

                notify({
                    title: 'Hubo un error',
                    text: response.message,
                    type: 'error'
                });
            }
            console.log('response Checkouts', this.history);
        },
        async getHistoryCheckouts(index, payload){
            this.history[index].isLoading = true;
            this.history[index].forms = await searchCheckouts(payload );
            this.history[index].isLoading = false;
            this.history[index].visibleFull = true;

        },
        clearHistory() {
            this.history = [];
            this.total = 0;
            this.limit = 25;
            this.offset = 1;
        },
    },
    state: () => ({
        history: [],
    }),
});
