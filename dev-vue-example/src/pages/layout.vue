<template>
  <header>
    <nav>
      <div style="float: left">
        <router-link to="/all_orders">Все заказы</router-link>
        <router-link to="/order">Добавить заказ</router-link>
      </div>
      <div style="float: right">
        <p style="display: inline-block; padding-right: 20px;color: white;">
          {{ store.user ? store.user.name : '*' }}
        </p>
        <div style="display: inline-block">
            <Btn label="Выйти" @click="store.logout()" />
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useUsersStore } from '../entities';
import { Btn, LoaderOverlay } from '../shared';
const store = useUsersStore();
</script>

<style></style>
