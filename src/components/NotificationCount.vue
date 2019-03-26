<template>
  <div>
    <label>
      Vul je naam in
      <input v-model="name" @keydown.enter="showresult = true" />
    </label>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    messages: "loading",
    name: "",
    showresult: false
  }),

  computed: {
    messageCount() {
      return this.$store.state.messages;
    }
  },

  methods: {},

  mounted() {}
};
</script>
