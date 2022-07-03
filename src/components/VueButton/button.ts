import DisabledChild from '../../mixins/DisabledChild.js'

enum DENO {
    ONE,
    TWO,
    THREE
}



const button: {
  [x: string | symbol | number]: any
} = {
  name: 'VueButton',

  data() {
    return {
        ...DENO
    }
  },

  inheritAttrs: false,

  mixins: [
    DisabledChild,
  ],

  props: {
    iconLeft: {
      type: String,
      default: null,
    },

    iconRight: {
      type: String,
      default: null,
    },

    label: {
      type: String,
      default: null,
    },

    loading: {
      type: Boolean,
      default: false,
    },

    loadingSecondary: {
      type: Boolean,
      default: false,
    },

    type: {
      type: String,
      default: 'button',
    },

    tag: {
      type: [Number, String],
      default: null,
    },
  },
  computed: {
    component () {
      if (this.$attrs.to) {
        return 'router-link'
      } else if (this.$attrs.href) {
        return 'a'
      } else {
        return 'button'
      }
    },

    ghost () {
      return this.finalDisabled || this.loading || this.loadingSecondary
    },
  },

  methods: {
    handleClick (event: any) {
      if (this.ghost) {
        event.preventDefault()
        event.stopPropagation()
        event.stopImmediatePropagation()
      } else {
        this.$emit('click', event)
      }
    },
  },
}

export default button