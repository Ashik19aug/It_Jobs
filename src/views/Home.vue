<template>
  <div class="home">
    <job-list></job-list>
    
  </div>
</template>

<script>
// @ is an alias to /src  import navber from '@/components/navber.vue';
import jobs from '@/components/jobs.vue';

export default {
  name: "home",
  components: {
    "job-list":jobs
  }
};
</script>
