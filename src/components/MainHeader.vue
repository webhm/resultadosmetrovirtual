<script setup>
</script>
<template>
  <header>
    <div class=" top-header">
      <div class="container py-1 d-flex justify-content-between">
        <div class="p-3 main-image my-2 my-md-0">
          <img src="../assets/logo-metro.png" style="width: 100%" alt="Metrovirtual">
        </div>
      </div>
    </div>
  </header>
</template>


<style scoped>
.top-header {
  background-color: #0d9cde;
}

.main-image {
  width: 25%;
}

.bottom-header {
  background-color: #0d92dd;
  min-height: 20px;
}

@media screen and (max-width: 600px) {
  .main-image {
    width: 50%;
  }
}
</style>