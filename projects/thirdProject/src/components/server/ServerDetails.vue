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
  /* If you prefer to use bus instead of events
  import { serverBus } from "../../main.js"; */

  export default {
    props: ["server", "onClick"],
    /* If you prefer to use bus instead of events
    data() {
      return {
        server: {}
      }
    },
    created() {
      serverBus.$on('server-selected', server => {
        this.server = server;
      });
    },
    methods: {
      resetStatus() {
        this.server.status = "Normal"; // Object is a reference type (its not a copy)!
      }
    } */
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
