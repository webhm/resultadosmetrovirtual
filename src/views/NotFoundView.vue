<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// const authStore = useAuthStore();
// const user = computed(() => authStore.user);

const goTo = async (name) => {
  await router.replace({ name: name });
};

</script>
<template>
  <div>
    <teleport to="#page-title">
      <title>No Encontrado - MetroVirtual - Hospital Metropolitano</title>
    </teleport>
    <div class="justify-content-center py-5" style="background-color: #f8f9fc; height: 100%">
      <!--login section-->
      <div class="container m-auto d-block">
        <div class="row justify-content-center">
          <div class="col-10 col-md-3">
            <div class=" my-5 py-5  text-center">
              <h4 class="center text-search">
                Página no encontrada
              </h4>
            </div>
            <button class="text-center cursor-pointer py-4 btn-loginv3 " style="margin: auto"
                    @click="goTo('dashboard')">Ingresar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>


</style>
