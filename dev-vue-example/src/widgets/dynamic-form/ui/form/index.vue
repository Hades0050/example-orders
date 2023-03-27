<template>
  <form @submit="onSubmit"  >
    <div v-for="field in props.schema.fields" :key="field.name">
      <text-input
        :rules="field.rules"
        :type="field.as"
        :name="field.name"
        :placeholder="field.placeholder"
        :value="field.value"
      />
    </div>
    <div>
      <slot name="action"></slot>
    </div>
  </form>
</template>
<script setup lang="ts">
import { Form } from 'vee-validate';
import { TextInput } from '../../../../shared';
import { useForm } from 'vee-validate';
const { handleSubmit } = useForm();
const props = defineProps({
  schema: {
    type: Object,
    required: true,
  },
});
const emmits = defineEmits(['action']);
const onSubmit = handleSubmit((values, { resetForm }) => {
  emmits('action', values, resetForm);
});
</script>
