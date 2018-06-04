<template>
  <div class="container">
    <custom-header />
    <hr>
    <server-status-list />
    <hr>
    <custom-footer />
  </div>
</template>

<script>
  import ServerStatusList from './ServerStatusList.vue';
  import CustomFooter from '../Shared/CustomFooter.vue';
  import CustomHeader from '../Shared/CustomHeader.vue';

  export default {
    components: {
      'server-status-list': ServerStatusList,
      'custom-footer': CustomFooter,
      'custom-header': CustomHeader
    }
  }
</script>