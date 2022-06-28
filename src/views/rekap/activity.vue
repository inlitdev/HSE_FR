<template>
    <v-container fluid>
        <v-card flat>
            <v-card-text>
                <v-row align="center" justify="center" class="mt-3">
                    <v-col cols="12" sm="3" md="6">
                        <h3 class="text-h6"><v-icon left>mdi-table</v-icon> Table Activity</h3>
                    </v-col>
                    <v-col cols="12" sm="3" md="3" class="text-right">
                        <v-btn small color="primary" fab>
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="12" sm="3" md="3">
                        <v-text-field
                            label="Search..."
                            prepend-inner-icon="mdi-magnify"
                            v-model="search"
                            dense
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :search="search"
                    class="mt-2"
                ></v-data-table>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
    // import moment from 'moment';
    // const now =  moment(new Date()).format("YYYY-MM-DD");
    // const activate = {
    //     id:'',
    //     activity:'',
    //     action:'',
    //     start_time:'',
    //     end_time:'',
    //     remark:'',
    //     location:''
    // };
    // const schedule ={
    //     id:'',
    //     activity:'',
    //     scheduller:'',
    //     tanggal: now
    // };
    export default {
        data: () => ({
            links: [
                'Dashboard',
                'Messages',
                'Profile',
                'Updates',
            ],
            headers:[],
            desserts:[],
            search:''
        }),
        methods:{
            linked(test){
                this.$router.push(test);
            },
            dataTable(){
                this.headers = [
                    {text: 'No',  value: 'no'},
                    {text: 'Activity', value: 'activity'}, 
                    {text: 'Action By', value: 'action'},       
                    {text: 'Time', value: 'time'},
                    {text: 'Remarks', value: 'remark'},
                    {text: '#', value: 'actions'},
                ];
            },
        },
        created(){
            this.dataTable();
        }
    }
</script>