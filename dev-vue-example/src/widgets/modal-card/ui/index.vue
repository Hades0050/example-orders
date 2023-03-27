<template>
  <transition name="modal-fade">
    <div class="modal-overlay">
      <div class="modal container" role="dialog">
        <section>
          <slot name="body">
            <p>{{ props.messsage }}</p>
          </slot>
        </section>

        <footer class="footer">
          <div style="float: left">
            <Btn label="ОК" @click="emits('ok')" color="white" />
          </div>
          <div style="float: right">
            <Btn label="Отмена" color="white" @click="emits('close')" />
          </div>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { Btn } from '../../../shared';

const emits = defineEmits(['close','ok']);
const props = defineProps({
  messsage: {
    requred: false,
    type: String,
    default: 'Сообщение',
  },
});
</script>
<style>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #e2e1e1;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 335px;
  height: 215px;
}

.footer {
  display: inline-block;
  padding: 40px 0;
  width: 80%;
  text-align: center;
}

.modal-footer div {
  width: 50%;
}
</style>
