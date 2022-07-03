import VueDisable from "./VueDisable.vue"

(VueDisable as any).install = function(Vue: any) {
  Vue.component(VueDisable.name, VueDisable)
}

export default VueDisable
