<template>

    <b-collapse id="newjob" class="mt-2">
        <b-card>
        
        <b-container class="add">

        <b-row>
            <b-col>
                <p >Job Live preview</p>
                <!-- Live preview -->
                <h6><b>Job Title</b> : {{title}}</h6><h6></h6>
                <p>Company name :<span> {{name}} </span></p>
                <p><b> Requirements :</b></p>
                <p style="white-space: pre-line;">{{Requir}}</p>
                <p style="white-space: pre-line;"><b>Compensation & other benefits:</b> {{benefits}} </p>
                <p><b>Salary Range :</b> {{Salary}} </p>
                <p><b>Job Location :</b> {{Location}} </p>
            </b-col>

            <b-col>
                <p class="card-text">Post New Job Here</p>
                <!-- input contain in here -->
                <b-form-group label-cols="4" label-cols-lg="2" label-for="input-default" >
                    <b-form-input v-model="title" id="input-default" placeholder="Job Title"></b-form-input><br>
                    <b-form-input v-model="name" id="input-default" placeholder="Company name"></b-form-input><br>
                    <b-form-textarea v-model="Requir"  rows="3" max-rows="5" placeholder="Requirements"></b-form-textarea><br>
                    <b-form-input v-model="benefits" id="input-default" placeholder="Compensation & other benefits"></b-form-input><br>
                    <b-form-input v-model="Salary"  id="input-default" placeholder="Salary"></b-form-input><br>
                    <b-form-input v-model="Location" id="input-default" placeholder="Job Location "></b-form-input><br>
                </b-form-group>
                <!-- input contain end here -->
                <b-button type="submit" variant="primary">Submit</b-button>
                
            </b-col>
        </b-row>

        </b-container>


        </b-card>
    </b-collapse>

</template>


<script>
export default {
    data(){
        return{
            title:'',
            name:'',
            Requir:'',
            benefits:'',
            Salary:'',
            Location:''
        }
        
    }
    
}
</script>


<style  scoped>
h6{
    text-align: left;
}
p{
    text-align: left;
}
</style>