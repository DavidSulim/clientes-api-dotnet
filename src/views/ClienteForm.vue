<template>
  <v-card max-width="700" class="mx-auto">
    <v-card-title class="text-h6">{{ isEdit ? 'Editar Cliente' : 'Nuevo Cliente' }}</v-card-title>
    <v-card-text>
      <v-form v-model="valid" @submit.prevent="onSubmit">
        <v-text-field
          v-model="form.nombre"
          label="Nombre"
          :rules="[rules.requerido]"
          required
        />
        <v-text-field
          v-model="form.correo"
          label="Correo Electrónico"
          :rules="[rules.requerido, rules.email]"
          required
        />
        <v-text-field
          v-model="form.telefono"
          label="Teléfono"
          :rules="[rules.requerido, rules.telefono]"
          required
        />
        <div class="d-flex ga-3 mt-4">
          <v-btn type="submit" color="primary">{{ isEdit ? 'Guardar cambios' : 'Crear' }}</v-btn>
          <v-btn variant="text" :to="{name:'clientes'}">Cancelar</v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed, reactive, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()

const id = computed(() => route.params.id ? Number(route.params.id) : null)
const isEdit = computed(() => !!id.value)
const valid = ref(false)

const form = reactive({
  nombre: '',
  correo: '',
  telefono: ''
})

const rules = {
  requerido: v => !!v || 'Campo requerido',
  email: v => /\S+@\S+\.\S+/.test(v) || 'Correo inválido',
  telefono: v => /^\+?\d{7,15}$/.test(v) || 'Teléfono inválido (7-15 dígitos, opcional +)'
}

onMounted(() => {
  if (isEdit.value){
    const found = store.getters.byId(id.value)
    if (found){
      form.nombre = found.nombre
      form.correo = found.correo
      form.telefono = found.telefono
    }
  }
})

async function onSubmit(){
  if (!valid.value) return

  try{
    if (isEdit.value){
      await store.dispatch('editar', { id: id.value, ...form })
    } else {
      await store.dispatch('crear', { ...form })
    }
    router.push({ name:'clientes' })
  }catch(e){
    alert('Ocurrió un error al guardar.')
    console.error(e)
  }
}
</script>
