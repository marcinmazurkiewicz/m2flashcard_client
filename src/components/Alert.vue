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
    .nav-item  {
        text-decoration: none;
        padding: 8px;
    }
    .menu-top {
      grid-area: 1 / 1 / 2 / 6;
      border-bottom: #2c3e50 solid 1px;
    }
    .btn {
      margin: 8px;
    }
    
</style>
