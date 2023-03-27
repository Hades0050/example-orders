<template>
  <div class="TextInput">
    <Field
      :id="name"
      :as="type"
      :name="name"
      :placeholder="placeholder"
      :rules="rules"
      :value="value"
    />
    <p class="error-message">
      <ErrorMessage :name="name" />
    </p>
    
  </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { Field, ErrorMessage } from 'vee-validate';
const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String,
    required: true,
  },

  placeholder: {
    type: String,
    default: '',
  },
  rules: {
    type: String,
    required: false,
  },
});
const name = toRef(props, 'name');
</script>

<style scoped>
.TextInput {
  position: relative;
  margin-bottom: calc(1em * 0.5);
}
.error-message {
  color: red;
  padding: 0px;
  margin: 0px;
  font-size: 13px;
}

input {
  width: 100%;
  background-color: #ffffff;
  color: black;
  padding-left: 5px;
  border: none;
  cursor: pointer;
  align-items: left;
  width: 180px;
  height: 34px;
  margin-bottom: calc(1em * 1);
}
</style>
