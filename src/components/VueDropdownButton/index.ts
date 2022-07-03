import VueDropdownButton from "./VueDropdownButton.vue"

(VueDropdownButton as any).install = function(Vue: any) {
  Vue.component(VueDropdownButton.name, VueDropdownButton)
}

export default VueDropdownButton
