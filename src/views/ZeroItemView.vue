<script setup>
import { urlIframe } from "../services/patient";
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import IframeViewer from "../components/IframeViewer.vue";
import { useNotification } from "@kyvg/vue3-notification";
const route = useRoute();
const router = useRouter();
const { notify } = useNotification();
const isLoading = ref(false);
const isAvailable = ref(false);
const props = defineProps(["id"]);
const id = ref(props.id);
console.log('id', id.value);
const position_key = ref(id.value.indexOf("&key"));
console.log('position_key', position_key.value);
const final_id = ref(position_key.value !== -1 ? id.value.substring(0, position_key.value) : id.value);
console.log('final_id', final_id.value);
const exam_id = ref(null);
const title = ref("Zero FootPrint GE - Metrovirtual - Hospital Metropolitano");
const shareLink = computed(() => `${window.location.origin}/viewer/${id.value}`);
onMounted(() => {
  getUrl();
});

const goBack = () => {
  window.close();
  // console.log("window.history.state.back", window.history.length);
  // console.log("window.history.state", window.history);
  // if (route.query.prev === "detalle-paciente") {
  //   router.replace({ name: "detalle-paciente", params: { nhc: nhc.value } });
  // } else if (route.query.prev === "resultados") {
  //   router.replace({ name: "resultados-paciente-imagen-y-laboratorio-medicos", params: { nhc: nhc.value } });
  // }else{
  //   router.replace({ name: "dashboard" });
  // }
};
const getUrl = async () => {
  try {
    console.log('aqui');
    isLoading.value = true;
    let response = await urlIframe({
      id: final_id.value
    });
    console.log("response", response);
    if (response.status) {
      exam_id.value = response.id;
      isAvailable.value = true;
    } else {
      isAvailable.value = false;
      notify({
        title: "El archivo no esta disponible",
        text: response.message,
        type: "error"
      });
    }
    isLoading.value = false;
  } catch (e) {
    console.log("error", e);
    isLoading.value = false;
    isAvailable.value = false;
    notify({
      title: "El archivo no esta disponible",
      text: e.message,
      type: "error"
    });
    if(e.message === 'Unauthorized'){
      await authStore.logout();
      await router.replace({ name: "ingreso" });
    }
  }
};

</script>
<template>
  <div>
    <teleport to="#page-title">
      <title>{{title}}</title>
    </teleport>
    <div class="d-flex flex-column zeroview">
      <div class="d-flex justify-content-end header-zero">
        <!--columna de text-->
        <div class="dropdown my-1">
          <button class="share-button mx-2 py-2 px-3 text-white d-flex justify-content-center"
                  type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            <font-awesome-icon :icon="['fass', 'share-nodes']" class="px-2 py-1" />
            <span class="text-white">Compartir</span>
            <!--        <span class="text-white d-none d-md-block">{{ user ? 'Dr. ' + user.name : 'MÉDICOS' }}</span>-->
          </button>
          <ul class="dropdown-menu p-2" aria-labelledby="dropdownMenuButton">
            <li>
              <a class="d-flex py-1 cursor-pointer item-list" title="Compartir por whatsapp"
                 target="_blank"
                 :href="`https://api.whatsapp.com/send?text=Te%20comparto%20mi%20resultado%20de%20imagen%20en%20el%20siguiente%20enlace:%20${shareLink}`">
                <img class="icon icon--small mx-2 d-block"
                     src="@/assets/whatsapp.png" width="30" height="30"
                     alt="Whatsapp">
                <p class="my-1">Whatsapp</p>
              </a>
            </li>
            <li class="" >
              <a class="d-flex py-1 cursor-pointer item-list" title="Compartir por email"
                 target="_blank"
                 :href="`mailto:an@email.com?subject=MetroVirtual%20Resultado%20de%20imagen&body=Te%20comparto%20mi%20resultado%20de%20imagen%20en%20el%20siguiente%20enlace:%20${shareLink}`">
                <img class="icon icon--small mx-2 d-block"
                     src="@/assets/email.png" width="30" height="30"
                     alt="email">
                <p class="my-1">Email</p>
              </a>

            </li>
          </ul>
        </div>
        <div class=" col-4 col-md-2 cursor-pointer" @click="goBack()">
          <div class="d-flex justify-content-end py-2">
            <h5 class=" text-white mx-4 my-2" style=" font-size: 16px;">
              Cerrar
              <font-awesome-icon :icon="['fas', 'xmark']" />
            </h5>
          </div>
        </div>
      </div>
      <div class="justify-content-center px-2 flex-grow-1" style="background-color: #f8f9fc; margin-top: 5vh;">
        <template v-if="isLoading">
          <div class="d-flex justify-content-center">
            <img class="img-fluid" src="@/assets/loading.gif" alt="Loading Hm">
          </div>
        </template>
        <template v-else>
          <template v-if="isAvailable">
            <iframe-viewer
                :url="`https://imagen.hmetro.med.ec/zfp?Lights=on&mode=proxy#view&ris_exam_id=${exam_id}&un=WEBAPI&pw=lEcfvZxzlXTsfimMMonmVZZ15IqsgEcdV%2forI8EUrLY%3d`" />
          </template>
          <template v-else>
            <div class=" my-3 py-3  text-center">
              <h4 class="center text-search">
                Resultado de Imagen no disponible
              </h4>
            </div>
          </template>

        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.zeroview {
  height: 97vh;
}
.item-list{
  text-decoration: none;
  color: #0d2c65 !important;
}
.header-zero {
  background-color: #0d9cde;
  z-index: 99999999999;
  position: absolute;
  top: 0;
  width: 100%;
}
.share-button{
  border: transparent;
  background: transparent;
}
</style>
