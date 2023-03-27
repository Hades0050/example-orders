<template>
  <table  >
    <thead>
      <tr>
        <th v-for="column in props.columns" :key="column.name">
          <p>
            {{ column.label }}
          <span v-if="column.sortable">
            {{ column.order }}
              <btn-icon :tooltip="column.order==='desc'?'По возрастанию':'По убыванию'"
                         :name-icon="column.order==='desc'?'&#8593':'&#8595'" 
                         @click="column.order==='desc'?column.order ='asc':column.order ='desc'"/>
              <btn-icon tooltip="Сброс сортировки"
                         name-icon="&#8251"
                         @click="column.order = null"/>
          </span>
          </p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in sortable" :key='row'>
        <td v-for="column in props.columns" :key="column.name">
          <span :style="column.style?column.style(row[column.field]):''">
            {{ column.format?column.format(row[column.field]):row[column.field] }}
          </span>
        </td>
        <td  v-if="props.actionBtn" >
<!-- Для дополнителльных элементов -->
        <slot v-if="props.actionBtn" name="action" :row="row"/>
        </td>
      </tr>
     
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed, PropType, Ref, ref } from 'vue';
import { BtnIcon } from '../../../shared';
import { IColumn } from '../const';
import { orderBy } from '../helper';
export interface ISortedFilter {
  key: string,
  mode: string
}
const props = defineProps({
  //Столбцы для header
  columns: {
    required: false,
    type: Array as PropType<IColumn[]>,
    default: () => { [] }
  },
  //Строки для body
  rows: {
    required: false,
    type: Array as PropType<any[]>,
    default: () => { [] }
  },
  actionBtn: {
    required: false,
    type: Boolean,
    default: false
  },
});


// Сортировка по asc and desc (multiple) (Correct work?)
const sortable = computed(() => {
  let filter = props.rows
  let map_order:string[]=[]
  let map_field:string[]=[]
  props.columns.forEach((col)=>{
    if(col.sortable){
      if(typeof col.order==='string'){
        map_order.push(col.order)
        map_field.push(col.field)
      }
    }
  })
  filter.sort( orderBy( map_field, map_order ) )
  return filter
})



</script>

<style scoped></style>
