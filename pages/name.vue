<template>
  <div>
    {{ response }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      response: null,
    };
  },
  async mounted() {
    const response = await this.$axios
      .get("http://34.207.66.211:1234/name")
      .then((data) => {
        this.response = data.data;
      });
  },
};
</script>
