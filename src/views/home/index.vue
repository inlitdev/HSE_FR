<template>
    <v-container>
        <v-row>
            <v-col>
                <v-sheet
                min-height="70vh"
                rounded="lg"
                >
                
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
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
            search:'',
            headers2:[],
            desserts2:[],
            search2:''
        }),
        methods:{
            link(test){
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
            dataTable2(){
                this.headers2 = [
                    {text: 'No',  value: 'no'},
                    {text: 'Activity', value: 'activity'}, 
                    {text: 'Scheduller', value: 'action'},       
                    {text: 'Week', value: 'week'},
                    {text: 'Month', value: 'month'},
                    {text: 'Year', value: 'year'},
                    {text: '#', value: 'actions'},
                ];
            }
        },
        created(){
            this.dataTable();
            this.dataTable2();
        }
    }
</script>