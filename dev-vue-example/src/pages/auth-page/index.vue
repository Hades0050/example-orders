<template>
  <div class="grid-container">
    <div class="grid-item">
      <div class="card container" style="float:left; width: 344px; height: 245px">
        <DynamicForm
          label-btn="Войти"
          :schema="formSchema"
          @action="(val) => onSubmit(val)"
        >
          <template v-slot:action>
          <div style="">
            <Btn color="#ffffff" label="Войти" type="submit" />
          </div>
          </template>
        </DynamicForm>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { User, useUsersStore } from '../../entities';
import { Btn } from '../../shared';
import { DynamicForm } from '../../widgets';
DynamicForm;
const formSchema = User.getFormAuth();
const store = useUsersStore();
async function onSubmit(form: User) {
  await store.login(form);
}
</script>
