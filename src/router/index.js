import {createRouter, createWebHistory} from "vue-router";


import LabResultView from "../views/LabResultView.vue";
import ImageResultView from "../views/ImageResultView.vue";
import ZeroItemView from "../views/ZeroItemView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const {notify} = useNotification();

let language = "es";
const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {top: 0};
        }
    },
    routes: [
        // medicos
        //medic login
        // will match everything and put it under `$route.params.pathMatch`
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFoundView,
            meta: {
                authRequired: false,
                userType: "generic"
            }
        },
        // // patient zerofootprint view / medic
        {
            path: "/viewer/:id",
            name: "zerofootprint-item-view",
            component: ZeroItemView,
            props: true,
            meta: {
                authRequired: true,
            }
        },
        // // patient lab result / medic
        {
            path: "/resultado/l/:url",
            name: "lab-result-view",
            component: LabResultView,
            props: true,
            meta: {
                authRequired: true,
            }
        },
        // // patient image result / medic
        {
            path: '/resultado/i/:url',
            name: "image-result-view",
            component: ImageResultView,
            props: true,
            meta: {
                authRequired: true,
            }
        },
    ]
});


export default router;
