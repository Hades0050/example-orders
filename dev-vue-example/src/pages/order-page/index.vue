<template>
  <div class="grid-container">
    <div class="grid-item">
      <div style="float: left">
        <p style="float: left">
          Добавить заказ <span v-if="succesfull">✅ </span>
        </p>
        <DynamicForm
          ref="form"
          label-btn="Добавить заказ"
          :schema="formSchema"
          @action="(val, reset) => onSubmit(val, reset)"
        >
          <template v-slot:action>
            <div style="float: left">
              <Btn label="Добавить заказ" type="submit" />
            </div>
          </template>
        </DynamicForm>
      </div>
    </div>
  </div>
  <div></div>
</template>
<script setup lang="ts">
import { ref, Ref } from 'vue';
import { Order, useOrdersStore } from '../../entities';
import { Btn } from '../../shared';
import { DynamicForm } from '../../widgets';
const formSchema: Ref = ref(Order.getFormOrder());
const store = useOrdersStore();
const succesfull: Ref<boolean> = ref(false);
async function onSubmit(
  val: Order,
  reset: (state?: string) => void
): Promise<void> {
  await store.create(val).then(async () => {
    succesfull.value = true;
    reset();
  });
}
</script>
