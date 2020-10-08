<template>
  <div class="alerts">
    <div v-for="alert in alerts" :class="[alert.type]" class="alert" :key="alert.id">
      {{alert.message}}
      <button type="button" class="close" aria-label="Close" @click="closeAlert(alert.id)">
        <span>&times;</span>
      </button>
    </div>
  </div>
</template>
<script>
var alertId = 0;

export default {
  name: 'Alerts',
    data() {
      return {
        alerts:[]
      }
    },
    methods: {
      pushAlert(message, type) {
        var ref = this;
        var id = 'alert-' + alertId++;
        this.alerts.push({id: id, message: message, type: type});
        setTimeout(function() {
          ref.closeAlert(id); 
        }, 3000);
      },
      closeAlert(id) {
        var index = this.alerts.findIndex(el => el.id == id);
        this.alerts.splice(index,1); 
      }
    }, 
    mounted() {
      this.$root.$on('pushAlert', (message, type) => {
            this.pushAlert(message, type);
        })
    }
}
</script>
<style lang="scss" scoped>
  .alerts {
      grid-area: 3 / 5 / 4 / 6;
      padding: 0.5rem;
  }

  .alert  {
    font-family: $baseFont;
    font-size: 0.9rem;
    position: relative;
    background: inherit;
    text-decoration: none;
    border: 0.18rem solid;
    border-radius: .3rem;
    padding: 0.5rem 1rem;

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 10%;
      background: $bgDarker;
      height: 0.3em;
      left: 75%;
      bottom: -0.25em;
      transform: skewX(-45deg);
    }
  }
  .close {
    border-style: none;
    padding: 0;
    margin-top: -0.25rem;
    cursor: pointer;
    background: transparent;
    color: inherit;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    float: right;
  }

  .success {
    color: $green;
  }
  .warning {
    color: $yellow;
  }

</style>