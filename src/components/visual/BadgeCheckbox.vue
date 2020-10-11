<template>
  <div class="badge-checkbox">
    <label class="form-check-label">
      <Badge :class="[value ? colorClass : 'text-gray']"><slot /></Badge>
      <input 
        type="checkbox"  
        v-bind:value="value" 
        @change="$emit('input', $event.target.checked)" 
        class="badge-checkbox-input" 
      />
    </label>
  </div> 
</template>
<script>
import Badge from './Badge'

export default {
  name: 'BadgeCheckbox',
  props: ['value', 'colorClass'],
  components: {
    Badge
  }
}
</script>
<style lang="scss" scoped>
  .badge-checkbox {
    display: inline-block;
    margin-right: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;

  }
  .badge-checkbox-input {
    display: none;
  }
</style>