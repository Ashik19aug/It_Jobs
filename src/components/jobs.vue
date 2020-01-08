<template>

    <div class="jobs">

        <b-container>
            <b-row>
            <b-col cols="12">
                <h3>Job Title : </h3>
                <p><span>Company name : </span></p>
                <p><b> Requirements :</b> </p>
                <p>asdfgjodfgndofnbd</p>
                <p><b>Compensation & other benefits:</b> </p>
                <p><b>Salary Range :</b> </p>
                <p>30k to 50k</p>
                <p><b>Job Location :</b> </p>
                <p>Banani, Dhaka</p>
                <b-button v-on:click="apply" variant="outline-primary">Apply</b-button>
            </b-col>

            <b-col cols="12">
                <h3>Job Title : </h3>
                <p><span>Company name : </span></p>
                <p><b> Requirements :</b> </p>
                <p>asdfgjodfgndofnbd</p>
                <p><b>Compensation & other benefits:</b> </p>
                <p><b>Salary Range :</b> </p>
                <p>30k to 50k</p>
                <p><b>Job Location :</b> </p>
                <p>Banani, Dhaka</p>
                <b-button v-on:click="apply" variant="outline-primary">Apply</b-button>
            </b-col>

            </b-row>
        </b-container>
    </div>
    
</template>



<script>
export default {
    
    methods:{
        apply:function(){
            alert('you are successfuly apply for this job');
        }
    }
}
</script>

<style  scoped>
.col-12{
    margin-top: 15px;
    margin-bottom: 30px;
    box-shadow: 2px 2px 2px 2px #888888;
    border-width:1px;  
    padding-bottom: 10px;
    padding-top: 10px;
}
h3{
    text-align: left;
}
p{
    text-align: left;
}
.jobs{
    padding-top: 20px;
}

</style>