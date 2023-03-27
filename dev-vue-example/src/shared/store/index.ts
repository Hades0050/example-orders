import { defineStore } from 'pinia';

export const useUiStore = defineStore('ui', {
  state: () => ({
    isLoading:false
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    showLoader(val:boolean){
        this.isLoading=val
    }
   
  },
});
