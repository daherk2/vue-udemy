<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <header>
          <h1>Server Status</h1>
        </header>
      </div>
    </div>
    <hr>
    <server-details />
    <hr>
    <server-manager />
  </div>
</template>

<script>
  import ServerDetails from './ServerDetails.vue';
  import ServerManager from './ServerManager.vue';

  export default {
    components: {
      'server-details': ServerDetails,
      'server-manager': ServerManager
    }
  }
</script>