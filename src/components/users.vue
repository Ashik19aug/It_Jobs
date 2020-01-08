<template>
    <div class="use">

        <b-container class="bv-example-row">
        <b-row>
            <b-col cols="3">
                <b-card
                title="Card Title"
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
                >
                <b-card-text>
                <p><b>Education:</b></p>
                <p><b>Institution</b></p>
                </b-card-text>
                <b-button v-b-modal.modal-lg pill variant="outline-success">Profile</b-button>
                <p-tem></p-tem>
                </b-card>
            </b-col>


            <b-col cols="3">
                <b-card
                title="Card Title"
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
                >
                <b-card-text>
                <p><b>Education:</b></p>
                <p><b>Institution</b></p>
                </b-card-text>
                <b-button v-b-modal.modal-lg pill variant="outline-success">Profile</b-button>
                </b-card>
            </b-col>

            <b-col cols="3">
                <b-card
                title="Card Title"
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
                >
                <b-card-text>
                <p><b>Education:</b></p>
                <p><b>Institution</b></p>
                </b-card-text>
                <b-button v-b-modal.modal-lg pill variant="outline-success">Profile</b-button>
                </b-card>
            </b-col>

            <b-col cols="3">
                <b-card
                title="Card Title"
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
                >
                <b-card-text>
                <p><b>Education:</b></p>
                <p><b>Institution</b></p>
                </b-card-text>
                <b-button v-b-modal.modal-lg pill variant="outline-success">Profile</b-button>
                </b-card>
            </b-col>

            <b-col cols="3">
                <b-card
                title="Card Title"
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
                >
                <b-card-text>
                <p><b>Education:</b></p>
                <p><b>Institution</b></p>
                </b-card-text>
                <b-button v-b-modal.modal-lg pill variant="outline-success" >Profile</b-button>
                </b-card>
            </b-col>
            
        </b-row>
        </b-container>


        
    </div>
</template>

<script>
import Profile from '@/components/profile.vue';
export default {
    components:{
        "p-tem":Profile
    }
    
}
</script>

<style scoped>
.card-body{
    padding-top: 30PX;
    box-shadow: 2px 2px 2px 2px #888888;
}
.row{
    margin-top: 15px;
}

</style>