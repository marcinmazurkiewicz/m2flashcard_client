  <template>
    <div :class="[typeClass, show]" class="alert" :id="id">
    {{message}}
    <button type="button" class="close" aria-label="Close" @click="close">
      <span>&times;</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Alert',
    props: ['message', 'type', 'id'],
    data() {
      return {
        typeClass: `alert-${this.type}`,
        show: ''
      }
    }, 
    methods: {
      close() {
        this.show = 'display: none';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .alert  {
    font-family: $baseFont;
    font-size: 0.9rem;
    position: relative;
    background: inherit;
    text-decoration: none;
    border: 0.18rem solid;
    border-radius: .3rem;
    padding: 0.5rem 1rem;

    // &::before {
    //   content: "";
    //   display: block;
    //   position: absolute;
    //   width: 10%;
    //   background: $bgLighter;
    //   height: 0.3em;
    //   right: 5%;
    //   top: -0.21em;
    //   transform: skewX(-45deg);
    // }

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

  .alert-danger {
    color: $yellow;
  }
  .alert-success {
    color: $green;
  }
  .alert-warning {
    color: $yellow;
  }
</style>
