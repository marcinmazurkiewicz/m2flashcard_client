<template>
  <div class="form-group">
    <input 
      :id="id"
      :type="type"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)" 
      class="form-field" 
      :required=required
    >
    <label :for="id" class="form-label"><slot /></label>
    <div class="error-info" v-if="error">
      {{ getErrorMsg() }}
    </div>
  </div>       
</template>
<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: [String, Number],
      required: true
    }, 
    id: {
      type: String,
      required: true
    }, 
    error: Object,
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    getErrorMsg() {
      var msgPath = `dev.mazurkiewicz.m2flashcards.client.error.form.${this.error.errorType}`;
      var errorMsg = this.$t(msgPath);
      return errorMsg == msgPath ? this.error.msg : errorMsg;
    }
  }
}
</script>
<style lang="scss" scoped>
  .form-field {
    display: block;
    width: 100%;
    margin: .75rem 0;
    padding: .5rem;
    font-family: $baseFont;
    background: transparent;
    color: $fontBaseColor;
    border: none;
    box-shadow: none;
    border-bottom: 2px solid $fontBaseColor !important;

    &:focus, &:valid {
      + .form-label {
        top: .75rem;
        font-size: .75rem;
        box-shadow: none;
      }
    }
    // &:invalid {
    //     box-shadow: none;
    //     border-color: $red !important;
    //     + .form-label {
    //     color: $red;
    //   }
    // }
  }
  .form-group {
    padding-top: 1rem;
    position: relative;
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }

  .form-label {
    position: absolute;
    transition: 0.25s ease;
    -moz-transition: 0.25s ease;
    -webkit-transition: 0.25s ease;
    -o-transition: 0.25s ease;
    -ms-transition: 0.25s ease;
    color: $fontBaseColor;
    left: 0;
    top: 2rem;
  }

  .error-info {
    font-size: .75rem;
    color: $red;
    text-align: left;
  }
</style>