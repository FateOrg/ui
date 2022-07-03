import VueIcons from './icons'
import VTooltip from 'v-tooltip'
import VueResize from 'vue-resize'
import 'focus-visible'

import 'vue-resize/dist/vue-resize.css'
import 'v-tooltip/dist/v-tooltip.css'

export { default as VueButton} from './components/VueButton/index.js'
export { default as VueDisable} from './components/VueDisable/index.js'
export { default as VueDropdown} from './components/VueDropdown/index.js'
export { default as VueDropdownButton} from './components/VueDropdownButton/index.js'
export { default as VueFormField} from './components/VueFormField.vue'
export { default as VueGroup} from './components/VueGroup.vue'
export { default as VueGroupButton} from './components/VueGroupButton.vue'
export { default as VueIcon} from './components/VueIcon.js'
export { default as VueInput} from './components/VueInput.vue'
export { default as VueLoadingBar} from './components/VueLoadingBar.js'
export { default as VueLoadingIndicator} from './components/VueLoadingIndicator.js'
export { default as VueModal} from './components/VueModal.vue'
export { default as VueSelect} from './components/VueSelect.vue'
export { default as VueSelectButton} from './components/VueSelectButton.vue'
export { default as VueSwitch} from './components/VueSwitch.vue'
export { default as VueTab} from './components/VueTab.vue'
export { default as VueTabs} from './components/VueTabs.vue'
export { default as VueTypeAhead } from './components/VueTypeAhead.vue'

// Exported mixins
export { default as CoupledChild } from './mixins/CoupledChild.js'
export { default as CoupledParent } from './mixins/CoupledParent.js'
export { default as DisabledChild } from './mixins/DisabledChild.js'
export { default as DisableScroll } from './mixins/DisableScroll.js'

// Exported utils
export { generateHtmlIcon } from './icons.js'

export function install (Vue, options = {}) {
  Vue.use(VueIcons)

  Vue.use(VTooltip, mergeOptions({
    bondary: document.body,
    themes: {
      tooltip: {
        delay: {
          show: 1000,
          hide: 800,
        },
        instantMove: true,
      },
      dropdown: {
        handleResize: false,
      },
    },
  }, options.vtooltip))

  Vue.use(VueResize)

  Vue.component('VueButton', VueButton)
  Vue.component('VueDisable', VueDisable)
  Vue.component('VueDropdown', VueDropdown)
  Vue.component('VueDropdownButton', VueDropdownButton)
  Vue.component('VueFormField', VueFormField)
  Vue.component('VueGroup', VueGroup)
  Vue.component('VueGroupButton', VueGroupButton)
  Vue.component('VueIcon', VueIcon)
  Vue.component('VueInput', VueInput)
  Vue.component('VueLoadingBar', VueLoadingBar)
  Vue.component('VueLoadingIndicator', VueLoadingIndicator)
  Vue.component('VueModal', VueModal)
  Vue.component('VueSelect', VueSelect)
  Vue.component('VueSelectButton', VueSelectButton)
  Vue.component('VueSwitch', VueSwitch)
  Vue.component('VueTab', VueTab)
  Vue.component('VueTabs', VueTabs)
  Vue.component('VueTypeAhead', VueTypeAhead)
}

const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install,
}

export default plugin

function mergeOptions (to, from) {
  for (const key in from) {
    if (to[key] && from[key] && typeof to[key] === 'object' && typeof from[key] === 'object') {
      mergeOptions(to[key], from[key])
    } else {
      to[key] = from[key]
    }
  }
  return to
}

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
