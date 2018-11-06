<template>
  <div class="row">
    <app-quote v-for="(quote, i) in quotes" @click.native="deleteQuote(i)">
      {{ quote }}
    </app-quote>
  </div>
</template>

<script>
  import Quote from './Quote.vue';

  export default {
    components: {
      appQuote: Quote
    },
    props: ['quotes'],
    methods: {
      deleteQuote(i) {
        this.$emit('deleteQuote', i);
      }
    }
  }
</script>

<style>

</style>
