import VueDropdown from "./VueDropdown.vue"

(VueDropdown as any).install = function(Vue: any) {
  Vue.component(VueDropdown.name, VueDropdown)
}

export default VueDropdown
