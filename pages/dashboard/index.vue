<template>
  <div class="dashboard" v-if="$auth.loggedIn">
    <h3>name: <span>{{$auth.user.username}}</span></h3>
    <h3>email: <span>{{$auth.user.email}}</span></h3>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
}
</script>
