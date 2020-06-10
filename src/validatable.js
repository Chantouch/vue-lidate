import get from 'lodash/get'
import Validator from './validator'
import { getMessage } from './messages'

export default {
  mounted() {
    if (Object.keys(this.validationRules).length > 0) {
      this._validator = this.createValidator(this.validationRules, {
        watch: true
      })
    }
  },
  data() {
    return {
      errors: {},
      successes: {},
      isValidationSuccess: undefined
    }
  },
  computed: {
    isValid() {
      if (!this._validator) {
        return true
      }
      if (this.isValidationSuccess === undefined) {
        this._validator.validate(this.$data, true)
        this.isValidationSuccess = this._validator.isValid
      }
      return this.isValidationSuccess
    },
    validationRules() {
      return {}
    },
    validationData() {
      return this.$data
    }
  },
  methods: {
    onValidationMessage({ field, rule }) {
      console.log(rule)
      if (this.$i18n && this.$t) {
        return this.$t(`validation.${rule.name}`, [field, ...rule.args])
      }
      return getMessage(rule.name, [field, ...rule.args])
    },
    createValidator(rules, { watch = true } = {}) {
      const validator = new Validator(rules, {
        onError: (field, rule) => {
          if (!rule.message) {
            rule.message = this.onValidationMessage({ field, rule })
          }
          this.$set(this, 'isValidationSuccess', false)
          this.$set(this.errors, field, [rule.message])
          this.$set(this.successes, field, false)
          if (typeof this.$errors !== 'undefined') {
            this.$errors.fill(this.errors)
          }
        },
        onSuccess: (field) => {
          this.$set(this.errors, field, undefined)
          this.$set(this.successes, field, true)
          this.$set(this, 'isValidationSuccess', validator.isValid)
          if (typeof this.$errors !== 'undefined') {
            this.$errors.clear(field)
          }
        }
      })
      if (watch) {
        validator.watchers = []
        validator.fields.forEach((field) => {
          const watcher = this.$watch(field, (newVal, oldVal) => {
            validator.validateField(field, newVal)
          })
          validator.watchers.push(watcher)
        })
      }
      return validator
    },
    validate(rules, data) {
      const validator = rules
        ? this.createValidator(rules, { watch: !data })
        : this._validator
      // if sent filed name
      if (typeof rules === 'string') {
        validator.validateField(rules, get(this.validationData, rules))
      }
      if (validator instanceof Validator) {
        return validator.validate(data || this.validationData)
      }
    }
  }
}
