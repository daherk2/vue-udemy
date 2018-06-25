<template>
  <li class="list-group-item">
    Server #{{ id }}
  </li>
</template>

<script>
  export default {
    props: ["status", "id"]
  }
</script>
