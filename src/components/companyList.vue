<template>
        <b-container>
        <div class="com">
            <h3>Company : name</h3>
            <p><b>Location:</b>...</p>
            <p><b>Contact:</b>...</p>
            <!-- Create a new job post -->
            <b-button v-b-toggle.newjob variant="outline-primary">Add New Job</b-button>
            <njob></njob>
            
            <br>
        </div>
        <br>
          

          <b-row>
    <b-col sm="10">
      <p><b>Job Title : </b></p>
    </b-col>
    <b-col sm="2">
      <b-button v-b-modal.modal-center variant="success">Applicant</b-button>
      <apply></apply>
    </b-col>
  </b-row>

        </b-container>
    
</template>

<script>
import newjob from '@/components/newjob.vue';
import applicant from '@/components/applicant.vue';
  export default {
      components:{
          "njob":newjob,
          "apply":applicant
      }
  }
</script>


<style scoped>
.container{
    margin-top: 30PX;
    box-shadow: 3px 3px 3px 3px #888888;
    padding-bottom: 10px;
}
/* .com{
    text-align: center;
    box-shadow: 5px darkgray;
    padding-top: 10px; 

}*/
.h3{
    padding-top: 10PX;
} 

</style>