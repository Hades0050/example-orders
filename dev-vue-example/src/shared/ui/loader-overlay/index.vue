<template>
  <div v-if="store.isLoading" class="overlay">
    <div class="loader"></div>
  </div>
</template>

<script setup lang="ts">
import { useUiStore } from '../../store';
const store = useUiStore();
</script>

