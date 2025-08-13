<template>
  <v-card>
    <v-card-title class="d-flex align-center">
      <span class="text-h6">Clientes</span>
      <v-spacer />
      <v-btn color="primary" :to="{name:'crear'}">Nuevo</v-btn>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="clientes"
      :items-per-page="5"
      class="elevation-1"
    >
      <template #item.acciones="{ item }">
        <v-btn size="small" :to="{name:'editar', params:{id:item.id}}">Editar</v-btn>
        <v-btn color="error" size="small" @click="confirmarEliminar(item.id)">Eliminar</v-btn>
      </template>
      <template #no-data>
        <v-alert type="info" variant="tonal" class="ma-4">No hay clientes. Agrega uno nuevo.</v-alert>
      </template>
    </v-data-table>
  </v-card>

  <v-dialog v-model="dialog" max-width="420">
    <v-card>
      <v-card-title>Confirmar eliminación</v-card-title>
      <v-card-text>¿Seguro que deseas eliminar este cliente?</v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn variant="text" @click="dialog=false">Cancelar</v-btn>
        <v-btn color="error" @click="eliminar">Eliminar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const clientes = computed(() => store.getters.all)

const headers = [
  { title: 'ID', value: 'id' },
  { title: 'Nombre', value: 'nombre' },
  { title: 'Correo Electrónico', value: 'correo' },
  { title: 'Teléfono', value: 'telefono' },
  { title: 'Acciones', value: 'acciones', sortable: false }
]

const dialog = ref(false)
const toDelete = ref(null)

function confirmarEliminar(id){
  toDelete.value = id
  dialog.value = true
}

function eliminar(){
  store.dispatch('eliminar', toDelete.value)
  dialog.value = false
}
</script>
