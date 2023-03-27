<template>
  <div>
    <button :style="`background-color:${props.color}`" :type="props.type">{{ props.label }}</button>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<'button' | 'submit' | 'reset' | undefined>,
    required: false,
    default: 'button',
  },
  color: {
    type: String ,
    required: false,
    default: '#D9D9D9',
  },
});
</script>

<style scoped></style>
