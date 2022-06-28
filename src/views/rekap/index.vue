<template>
    <v-container>
        <!-- <v-tabs vertical v-model="tab"> -->
            <v-row>
                <v-col cols="12">
                    <v-sheet
                    min-height="10vh"
                    rounded="lg"
                    >
                        <v-container fluid>
                            <v-row>
                                <v-col cols="6">
                                    <h3 class="text-h5">WORK PROGRAM HSE</h3>
                                    <span class="text-h7" style="color:green;">Utamakan Keselamatan & Kesehatan Kerja</span>
                                </v-col>
                                <v-col cols="6" class="text-right">
                                    <img
                                    elevation="20"
                                    src="K3.png"
                                    height="50"
                                    >
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-sheet>
                </v-col>
                <v-col cols="3" style="background-color:#EEEEEE;">
                    <v-sheet rounded="lg" style="text-align:left;">
                        <!-- <v-tab href="#tab-1" title="List Aktivitas">
                            <v-icon left>
                            mdi-format-list-bulleted
                            </v-icon>
                        </v-tab>
                        <v-tab href="#tab-2" title="Jadwal Aktivi">
                            <v-icon left>
                            mdi-calendar
                            </v-icon>
                        </v-tab> -->
                        <!-- </v-tabs> -->
                        <v-list color="transparent" v-model="tab">
                            <v-list-item link @click="link({path:'/activity'})">
                                <v-list-item-content>
                                    <v-list-item-title>Activity</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item link @click="link({path:'/schedule'})">
                                <v-list-item-content>
                                    <v-list-item-title>Scheduller</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-divider class="my-2"></v-divider>

                            <v-list-item
                            link
                            color="grey lighten-4"
                            >
                            <v-list-item-content>
                                <v-list-item-title>
                                Log Out
                                </v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-sheet>
                </v-col>

                <v-col style="background-color:#EEEEEE;">
                    <v-sheet
                    min-height="70vh"
                    rounded="lg"
                    >
                        <router-view/>
                        
                    </v-sheet>
                </v-col>
            </v-row>
        <!-- </v-tabs> -->
    </v-container>
</template>
<script>
    import moment from 'moment';
    const now =  moment(new Date()).format("YYYY-MM-DD");
    const activate = {
        id:'',
        activity:'',
        action:'',
        start_time:'',
        end_time:'',
        remark:'',
        location:''
    };
    const schedule ={
        id:'',
        activity:'',
        scheduller:'',
        tanggal: now
    };
    export default {
        data: () => ({
            links: [
                'Dashboard',
                'Messages',
                'Profile',
                'Updates',
            ],
            formActive: Object.assign({}, activate),
            formSchedule: Object.assign({}, schedule),
            typeSubmit:'',
            typeAdd:'',
            headers:[],
            desserts:[],
            search:'',
            headers2:[],
            desserts2:[],
            search2:'',
            dialog1:false,
            titles:'',
            required:'',
            tab:null,
            today: now,
            value:'',
            weekday: [0, 1, 2, 3, 4, 5, 6],
            type: 'month',
            events: [
                {
                    name: `Thomas' Birthday`,
                    start: moment(new Date()).format("YYYY-mm-dd"),
                },
            ],
            mode: 'stack',
            colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
            selectedOpen:false,
            selectedElement:false,
            menus4: false,
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
                    {text: 'Date', value: 'date'},
                    {text: '#', value: 'actions'},
                ];
            },
            getEventColor (event) {
                return event.color
            },
            getEvents(){
                this.selectedOpen = true;
                console.log(this.value);
            },
            AddAktivitas(){
                this.dialog1 = true;
                this.titles = 'Tambah Aktivitas';
                this.required = '';
                this.typeAdd = 'aktivitas';
                this.typeSubmit = 'add';
                this.formActive = Object.assign({}, this.activate);
            },
            AddSchedulle(){
                this.dialog1 = true;
                this.titles = 'Tambah Jadwal';
                this.required = '';
                this.typeSubmit = 'add';
                this.typeAdd = 'jadwal';
                this.formSchedule = Object.assign({}, this.schedule);
            },
            reset(){
                this.formActive = Object.assign({}, this.activate);
                this.formSchedule = Object.assign({}, this.schedule);
            },
            submit(){
                if (this.typeSubmit == 'add') {
                    console.log("tambahkan");
                    console.log(this.formActive);
                } else {
                    console.log("Edit");
                }
            }
        },
        created(){
            this.dataTable();
            this.dataTable2();
        }
    }
</script>