<template>
  <div class="skill">
    <h1>Skill Tree</h1>
    <div class="skill-tree">
      <SkillTree/>
    </div>
  </div>
</template>

<script>
import SkillTree from '@/components/SkillTree.vue'
export default {
  name: 'skill',
  components: {
    SkillTree,
  }
}
</script>

<style scoped>
.skill {
  width: 70vw;
  margin: 0 auto;
}

.skill-tree{
  width: 70vw;
  margin: 0 auto;
}
</style>