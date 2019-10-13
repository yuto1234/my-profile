<template>
  <v-timeline>
    <v-timeline-item
      v-for="{ id, name, image, text } in list"
      :key="id"
      color="red lighten-2"
      large
    >
      <template v-slot:opposite>
        <span><img :src="image" class="language-image"></span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">{{ name }}</v-card-title>
        <v-card-text>
          <p>{{ text }}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import skills from '@/api/skills.js'
export default {
  computed: {
    list: () => skills.fetch()
  }
}
</script>

<style scoped>
.language-image {
  width:  100px;
  height: 100px;
  background-position: center;
}
</style>