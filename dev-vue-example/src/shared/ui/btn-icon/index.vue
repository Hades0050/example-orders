<template>
  <button :title="props.tooltip" class="btn-icon">{{ props.nameIcon }}</button>
</template>

<script setup lang="ts">
const props = defineProps({
  nameIcon: {
    requierd: true,
    type: String,
  },
  tooltip: {
    requierd: true,
    type: String,
    default:''
  },
});
</script>

<style scoped>
.btn-icon {
  cursor: pointer;
  border: 1px solid;
  background-color: transparent;
  color: black;
  margin-left: 5px;
  padding: 5px 5px; /* Some padding */
}
.btn-icon {
  transition-duration: 0.4s;
}
.btn-icon:hover {
  background-color: #165996; /* Green */
  color: #ffffff;
}
</style>
