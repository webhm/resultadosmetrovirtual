<script setup>
import { RouterView, useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import MainHeader from "@/components/MainHeader.vue";
const route = useRoute();
const routeName = computed(() => route.name);

onMounted(async () => {
  let loading = document.getElementById('loading');
  if (loading) {
    loading.style.display = 'none';
  }
});
</script>
<template>
  <div class="d-flex flex-column">
    <div class="view-content">
      <notifications :pauseOnHover="true" :duration="5000" />
      <main-header v-if="
      routeName !== 'zerofootprint-view'
      && routeName !== 'zerofootprint-item-view'
      && routeName !== 'share-zerofootprint-view'
      && routeName !== 'share-zerofootprint-item-view'">
      </main-header>
      <RouterView/>
    </div>
    <div class="footer" v-if="
    routeName !== 'zerofootprint-view'
    && routeName !== 'zerofootprint-item-view'
    && routeName !== 'share-zerofootprint-view'
    && routeName !== 'share-zerofootprint-item-view'">
      <div class="d-flex justify-content-center text-footer" >
        <p class="text-white p-3 text-copyright">Todos los derechos reservados. Hospital Metropolitano - 2023</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.view-content {
  min-height: 93vh;
  background: #f8f9fc;
}

.text-footer {
  background-color: #0d2c65;
}
.text-copyright {
  background-color: #0d2c65;
  text-align: center;
}
.footer{
  max-height: 20vh;
}


</style>
