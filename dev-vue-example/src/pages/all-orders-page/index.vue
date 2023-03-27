<template>
  <div class="container">
    <data-table
      :columns="storeOrders.columns"
      :rows="storeOrders.data"
      :action-btn="storeUsers.user?.role === ROLE_TYPE.ADMIN"
    >
      <!-- Элемент для действий с записью -->
      <template v-slot:action="{ row }: { row: Order }">
        <btn-icon
          v-if="row.status === 'Новый'"
          tooltip="Обновить статус"
          name-icon="&#8897"
          @click="storeOrders.updateStatus(row)"
        />
        <btn-icon
          tooltip="Удалить заказ"
          name-icon="&#x2717"
          @click="selected_row = row"
        />
      </template>
    </data-table>
    <ModalCard
      v-show="selected_row"
      messsage="Вы действительно хотите удалить заказ?"
      @ok="remove()"
      @close="selected_row = null"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';
import {
  Order,
  ROLE_TYPE,
  useOrdersStore,
  useUsersStore,
} from '../../entities';
import { BtnIcon } from '../../shared';
import { ModalCard, DataTable } from '../../widgets';
const storeOrders = useOrdersStore();
const storeUsers = useUsersStore();
const selected_row: Ref<Order | null> = ref(null);
const remove = async () => {
  await storeOrders.delete(selected_row.value as Order).then(() => {
    selected_row.value = null;
  });
};
onMounted(async () => {
  await storeOrders.fetch();
});
</script>
