<template>
  <button class="button is-primary border px-2 rounded focus:outline-none" @click="onClick">
    <!-- @slot default inner button content -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',

  methods: {
    onClick() {
      /**
       * Click event
       *
       * @event click
       */
      this.$emit('click')
    }
  }
}
</script>

<style scoped>

</style>
