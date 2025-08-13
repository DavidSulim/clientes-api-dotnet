<template>
  <v-alert :type="type" variant="tonal" class="my-2">
    <slot />
  </v-alert>
</template>
<script setup>
defineProps({ type: { type: String, default: 'info' } })
</script>
