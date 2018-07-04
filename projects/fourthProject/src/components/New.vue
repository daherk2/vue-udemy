<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">Increase to test if its the same instance!</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    destroyed() {
      /* Dynamic Components die by default when switched, you can test it here. */
    }
  }
</script>

<style>

</style>


