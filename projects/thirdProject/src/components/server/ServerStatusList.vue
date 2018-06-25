<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <server-status-item v-for="(server, index) in servers"
                            v-bind:key="index"
                            :id="index"
                            :status="server.status"
                            v-on:click.native="loadDetails(index)" />
                            <!-- Pass :server="server" if you prefer to use bus -->
                            <!-- If you pass status instead of :status
                                 it would be a static prop, its a prop
                                 to pass 'direct content' like status="Normal" -->
      </ul>
    </div>
    <server-details :server="server" :onClick="normalize" />
  </div>
</template>

<script>
import ServerDetails from "./ServerDetails.vue";
import ServerStatusItem from "./ServerStatusItem.vue";

/* If you prefer to use bus instead of events
import { serverBus } from "../../main.js"; */

export default {
  components: {
    "server-details": ServerDetails,
    "server-status-item": ServerStatusItem
  },
  data() {
    return {
      currentServer: 0,
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unknown" },
        { id: 4, status: "Normal" }
      ]
    };
  },
  computed: {
    server() {
      return this.servers[this.currentServer];
    }
  },
  methods: {
    loadDetails(index) {
      this.currentServer = index;
    },
    normalize() {
        this.servers[this.currentServer].status = "Normal";
    }
  }
};
</script>
