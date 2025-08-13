<template>
  <v-app>
    <v-app-bar color="primary" density="comfortable">
      <v-app-bar-title>CRUD de Clientes</v-app-bar-title>
      <v-spacer />
      <v-btn variant="tonal" to="/" :to="{name:'clientes'}">Listado</v-btn>
      <v-btn variant="tonal" :to="{name:'crear'}">Nuevo</v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="py-6">
        <router-view />
      </v-container>
    </v-main>

    <v-footer app class="justify-center">
      <div class="text-caption py-2">Hecho con Vue 3 · Vuex · Vue Router · Vuetify</div>
    </v-footer>
  </v-app>
</template>
<script setup></script>
