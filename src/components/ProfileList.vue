<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="{ id, name,  text } in list"
      :key="id"
    >
      <v-expansion-panel-header>{{ name }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        {{ text }}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import profiles from '@/api/profiles.js'
export default {
  computed: {
    list: () => profiles.fetch()
  }
}
</script>