<template>

    <b-collapse id="newjob" class="mt-2">
        <b-card>
        
        <b-container >

        <b-row>
            <b-col>
                <p class="card-text">Job Live preview</p>
                <!-- Live preview -->
                <h6><b>Job Title</b> : ....</h6>
                <p><span>Company name : .... </span></p>
                <p><b> Requirements :</b></p>
                <p>....</p>
                <p><b>Compensation & other benefits:</b> ... </p>
                <p><b>Salary Range :</b> ... </p>
                <p><b>Job Location :</b> ... </p>
            </b-col>

            <b-col>
                <p class="card-text">Post New Job Here</p>
                <!-- input contain in here -->
                <b-form-group label-cols="4" label-cols-lg="2" label-for="input-default">
                    <b-form-input id="input-default" placeholder="Job Title"></b-form-input><br>
                    <b-form-input id="input-default" placeholder="Company name"></b-form-input><br>
                    <b-form-textarea v-model="value" debounce="500" rows="3" max-rows="5" placeholder="Requirements"></b-form-textarea><br>
                    <b-form-input id="input-default" placeholder="Compensation & other benefits"></b-form-input><br>
                    <b-form-input id="input-default" placeholder="Salary"></b-form-input><br>
                    <b-form-input id="input-default" placeholder="Job Location "></b-form-input><br>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-col>
        </b-row>

        </b-container>


        </b-card>
    </b-collapse>

</template>


<script>
export default {
    
    
}
</script>


<style  scoped>
.h6{
    text-align: left;
}
.p{
    text-align: left;
}
.btn-primary{
    margin-right: 5px;
}
.card-text{
    text-align: center;
    color: blue;
}
</style>