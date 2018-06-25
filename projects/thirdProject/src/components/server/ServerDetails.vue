<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Server Details are currently not updated.</p>
    <template v-else>
      <p>Id: {{ server.id }}</p>
      <p>Status: {{ server.status }}</p>
      <button @click="onClick()">Normalize!</button>
    </template>
  </div>
</template>

<script>
  export default {
    props: ["server", "onClick"]
  }
</script>


<style scoped>
  div {
    background-color: purple;
    border-radius: 15px;
    width: 90%;
    color: white;
    padding: 10px;
  }
</style>
