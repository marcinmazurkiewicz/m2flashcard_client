  <template>
    <div :class="[typeClass]" class="alert alert-dismissible fade show" role="alert" data-dismiss="alert" :id="id">
    {{message}}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Alert',
    props: ['message', 'type', 'id'],
    data() {
      return {
        typeClass: `alert-${this.type}`
      }
    }
  }
</script>

<style>
    
</style>
