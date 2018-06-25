<template>
  <li class="list-group-item" @click="serverSelected">
    Server #{{ id }}
  </li>
</template>

<script>
  /* If you prefer to use bus instead of events
  import { serverBus } from "../../main.js"; */

  export default {
    props: ["status", "id"/*, "server"*/],
    methods: {
      /* If you prefer to use bus instead of events
      serverSelected() {
        serverBus.$emit('server-selected', this.server);
      } */
    }
  }
</script>
