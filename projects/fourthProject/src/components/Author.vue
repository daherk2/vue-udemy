<template>
  <div>
    <h3>The Author</h3>
  </div>
</template>

<script>
  export default {
    destroyed() { // If you are not using keep-alive and want to check if its dead

    },
    deactivated() { // If you want to test if the component its alive but not currently on the screen
      alert('Author deactivated');
    },
    activated() { // deactivated and activated will be called on keep-alive dynamic components
      alert('Author activated');
    }
  }
</script>

<style>

</style>


