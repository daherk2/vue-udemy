<template>
  <div>
    <div class="title">
      <!-- Named slots -->
      <slot name="title"></slot>
      <span style="color: #ccc">
        <!-- If nothing are passed to the
             subtitle slot it will render the default subtitle -->
        <slot name="subtitle">The Default Subtitle</slot>
      </span>
    </div>
    <hr>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }

  h2 {
    color: red;
  }

  .title {
    font-style: italic;
  }
</style>


