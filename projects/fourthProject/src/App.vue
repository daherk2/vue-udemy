<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <!-- Dynamic Components
             Dynamic Components die by default when switched,
             you can test it this is true inside the destroyed lifecycle

             Use the component inside keep-alive to keep it alive if you want -->
        <h1>Dynamic Components</h1>
        <div>
          <h1>Component Selectors</h1>
          <button @click="selectedComponent = 'appQuote'">Quote</button>
          <button @click="selectedComponent = 'appAuthor'">Author</button>
          <button @click="selectedComponent = 'appNew'">New</button>
        </div>
        <hr>
        <p>Selected Component: {{ selectedComponent }}</p>
        <!-- <component :is="selectedComponent">
          <p>Default Content</p>
        </component> -->
        <keep-alive>
          <component :is="selectedComponent">
            <p>Default Content</p>
          </component>
        </keep-alive>
        <!-- Slots -->
        <h1>Slots</h1>
        <hr>
        <app-quote>
          <!-- Named slots -->
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>A wonderful Quote</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue';
  import Author from './components/Author.vue';
  import New from './components/New.vue';

  export default {
    components: {
      appQuote: Quote,
      appAuthor: Author,
      appNew: New
    },
    data() {
      return {
        quoteTitle: 'The Quote',
        selectedComponent: 'appQuote'
      }
    }
  }
</script>

<style>

</style>

