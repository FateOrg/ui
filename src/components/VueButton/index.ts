import VueButton from "./VueButton.vue"

(VueButton as any).install = function(Vue: any) {
  Vue.component(VueButton.name, VueButton)
}

export default VueButton
