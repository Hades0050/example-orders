<template>
  <RouterView/>
  <LoaderOverlay/>
</template>
<script setup lang="ts">
import {RouterView} from 'vue-router'
import { LoaderOverlay } from '../shared';
</script>

