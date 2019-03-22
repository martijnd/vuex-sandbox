<template>
  <p>Messages: {{ messageCount }}</p>
</template>

<script>
export default {
  data: () => ({
    messages: "loading"
  }),

  computed: {
    messageCount() {
      return this.$store.state.messages.length;
    }
  },

  mounted() {}
};
</script>
