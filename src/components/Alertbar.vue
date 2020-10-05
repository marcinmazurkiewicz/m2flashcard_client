<template>
  <div ref="alerts" class="alerts">
    alerty
    <button @click='pushAlert("message", "primary")'>push alert</button>
     
  </div>
</template>
<script>
import Alert from './Alert'
import Vue from 'vue'


export default {
  name: 'Alertbar',
    data() {
      return {
      }
    },
    methods: {
      pushAlert(message, type) {
        var ComponentClass = Vue.extend(Alert);
        var instance = new ComponentClass({
            propsData: { type: type, message: message }
        });
        instance.$mount();
        this.$refs.alerts.appendChild(instance.$el);
      }
    }, 
    mounted() {
      this.$root.$on('pushAlert', (message, type) => {
            this.pushAlert(message, type);
        })
    }
}
</script>
<style scoped>
  .alerts {
        grid-area: 2 / 2 / 3 / 5;

  }
</style>