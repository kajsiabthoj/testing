<template>
  <v-card>
    <v-card-title> John Frank </v-card-title>
    <v-card-text>
      <v-btn @click="inserting">Insert</v-btn>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  methods: {
    async inserting() {
      const response = await fetch("/api/getCourses");
      const movies = await response.json();
      res.json(movies);
    },
  },
};
</script>
