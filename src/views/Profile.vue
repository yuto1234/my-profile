<template>
  <div class="profile">
    <h1>Profile</h1>
    <div class="profile-list">
      <ProfileList/>
    </div>
  </div>
</template>

<script>
import ProfileList from '@/components/ProfileList.vue'
export default {
  name: 'profile',
  components: {
    ProfileList,
  }
}
</script>

<style scoped>
.profile {
  height: calc(100vh - 226px);
  width: 70vw;
  margin: 0 auto;
}

.profile-list{
  width: 70vw;
  margin: 0 auto;
}
</style>