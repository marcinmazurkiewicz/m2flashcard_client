<template>
  <div ref="alerts" class="alerts"></div>
</template>
<script>
import Alert from './Alert'
import Vue from 'vue'

var alertId = 0;

export default {
  name: 'Alertbar',
    data() {
      return {
      }
    },
    methods: {
      pushAlert(message, type) {
        var ComponentClass = Vue.extend(Alert);
        var id = 'alert-' + alertId++;
        var instance = new ComponentClass({
            propsData: { type: type, message: message, id: id }
        });
        instance.$mount();
        this.$refs.alerts.appendChild(instance.$el);
        // setTimeout(function() {close(id)}, 3000);
      },
      // closeAlert(id) {
      //   this.$(`#${id}`).hide();
      // }
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
      grid-area: 3 / 5 / 4 / 6;
      padding: 0.5rem;
  }
</style>