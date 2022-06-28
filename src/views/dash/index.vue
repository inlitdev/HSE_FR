<style>
    .blink {
        font-size: 20px;
        font-weight: bold;
        color: #2d38be;
        transition: 0.5s;
    }
</style>
<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" md="3" sm="3" class="text-center">
                <v-container>
                    <strong class="text-h4">HSE DASHBOARD</strong>
                </v-container>
            </v-col>
            <v-col cols="12" md="6" sm="3" class="text-center">
            </v-col>
            <v-col cols="12" md="3" sm="3">
                <v-container class="text-right">
                    <img
                    elevation="20"
                    src="inl.png"
                    height="30"
                    class="mr-4"
                    >
                    <img
                    elevation="20"
                    src="holding2.png"
                    height="30"
                    class="mr-4"
                    >
                    <img
                    elevation="20"
                    src="bumn.png"
                    height="30"
                    >
                </v-container>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="3" sm="3">
                <v-row align="center" justify="center">
                    <v-col cols="12" md="12" sm="3">
                        <!-- <v-sheet rounded="lg"> -->
                            <v-container fluid class="text-center">
                                <!-- <Blink> -->
                                    <img
                                    elevation="20"
                                    src="K3.png"
                                    height="120"
                                    >
                                    <br>
                                    <strong style="font-size:14px; color:#43A047;">UTAMAKAN</strong><br>
                                    <strong style="font-size:14px; color:#43A047;">KESELAMATAN & KESEHATAN KERJA</strong>
                                <!-- </Blink> -->
                            </v-container>
                        <!-- </v-sheet> -->
                    </v-col>
                    <v-col cols="12" md="12" sm="3">
                        <!-- <v-sheet rounded="lg"> -->
                            <v-container fluid class="text-center">
                                <img
                                src="helpro.png"
                                height="520"
                                class="blink"
                                >
                            </v-container>
                        <!-- </v-sheet> -->
                    </v-col>
                    <v-col cols="12" md="12" sm="3" class="text-center">
                        <h2 class="text-h4">{{dateTanggal.tanggal}} {{dateTanggal.bulan}} {{dateTanggal.tahun}}</h2>
                        <h2 class="text-h5">{{dateTime.hours}}:{{ dateTime.minutes }}:{{ dateTime.seconds }}</h2>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="9" sm="3">
                <v-row>
                    <v-col cols="12" md="6" sm="3">
                        <v-sheet
                        rounded="lg"
                        >
                            <v-container fluid>
                                <Bar
                                    :chart-options="chartOptions"
                                    :chart-data="chartData"
                                    :chart-id="chartId"
                                    :dataset-id-key="datasetIdKey"
                                    :plugins="plugins"
                                    :css-classes="cssClasses"
                                    :styles="styles"
                                    :width="width"
                                    :height="height"
                                />
                            </v-container>
                        </v-sheet>
                    </v-col>
                    <v-col cols="12" md="6" sm="3">
                        <v-sheet
                        rounded="lg"
                        >
                            <v-container fluid>
                                <v-carousel hide-delimiters show-arrows-on-hover cycle height="375">
                                    <v-carousel-item
                                    v-for="(item,i) in items"
                                    :key="i"
                                    :src="item.src"
                                    reverse-transition="fade-transition"
                                    ></v-carousel-item>
                                </v-carousel>
                            </v-container>
                        </v-sheet>
                    </v-col>
                    <v-col cols="12" md="12" sm="3">
                        <v-sheet
                        rounded="lg"
                        >
                            <v-container fluid>
                                <div class="text-center">
                                    <strong>WORK PROGRAM HSE & P2K3L MONTHLY</strong>
                                </div>
                                <v-simple-table 
                                dense
                                fixed-header
                                height="400px">
                                    <thead class="text-center">
                                        <tr>
                                            <th rowspan="2">No</th>
                                            <th rowspan="2">Description of Activity</th>
                                            <th rowspan="2">Action By</th>
                                            <th rowspan="2">Time</th>
                                            <th>Thurs</th>
                                            <th>Thurs</th>
                                            <th>Fri</th>
                                            <th>Thurs</th>
                                            <th>Wed</th>
                                            <th>Thurs</th>
                                            <th rowspan="2">Remarks</th>
                                        </tr>
                                        <tr>
                                            <th>7</th>
                                            <th>14</th>
                                            <th>11</th>
                                            <th>21</th>
                                            <th>27</th>
                                            <th>28</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="font-size:11px;">1</td>
                                            <td style="font-size:11px;">Safety Patrol & Gemba / P2K3L</td>
                                            <td style="font-size:11px;">HSE & All Department</td>
                                            <td style="font-size:11px;">08.15 WIB in Area</td>
                                            <td style="font-size:11px;">Warehouse sparepart & Boiler</td>
                                            <td style="font-size:11px;">Packaging</td>
                                            <td style="font-size:11px;">-</td>
                                            <td style="font-size:11px;">Refenery Fractionation</td>
                                            <td style="font-size:11px;">-</td>
                                            <td style="font-size:11px;">Belakang Packaging</td>
                                            <td style="font-size:11px;">Dilakukan 1x Seminggu</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Safety Behavior Observasi, Fire Fighting Awareness</td>
                                            <td>All Department</td>
                                            <td>07.00 WIB s/d 21.00 WIB in Area</td>
                                            <td>All</td>
                                            <td>All</td>
                                            <td>All</td>
                                            <td>All</td>
                                            <td>All</td>
                                            <td>All</td>
                                            <td>Dilakukan 1x Seminggu</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Meeting P2K3L</td>
                                            <td>Member P2K3L</td>
                                            <td>15.00 WIB in Area</td>
                                            <td>All</td>
                                            <td>All</td>
                                            <td>All</td>
                                            <td>All</td>
                                            <td>All</td>
                                            <td>All</td>
                                            <td>Dilakukan 1x Seminggu</td>
                                        </tr>
                                    </tbody>
                                </v-simple-table>
                            </v-container>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="3" md="12" class="text-center">
                <span style="font-size:14px; color:#00796B;">Health, Security & Environment</span> <br>
                <span style="font-size:11px;"><strong style="font-style: italic;">PT. Industri Nabati Lestari</strong> - Copyright &copy; IT.INL 2022</span>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { Bar } from 'vue-chartjs/legacy';
// import Blink from 'vue-blink';
import moment from 'moment';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
const date = new Date();
export default {
    name: 'BarChart',
    components: { 
        Bar
    },
    props: {
        chartId: {
            type: String,
            default: 'bar-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 225
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => {}
        },
        plugins: {
            type: Object,
            default: () => {}
        },
    },
    data() {
        return {
            dateTanggal: {
                tahun: moment(new Date).format("YYYY"),
                bulan: moment(new Date).format("MMM"),
                tanggal: moment(new Date).format("DD"),
            },
            dateTime: {
                hours: moment(date).format("HH"),
                minutes: moment(date).format("mm"),
                seconds: moment(date).format("ss"),
            },
            timer: undefined,
            chartData: {
                labels: [ 'January', 'February', 'March' ],
                datasets: [ 
                    {
                        label:'Jumlah Hari Kerja',
                        backgroundColor: '#00695C',
                        data: [40, 20, 12] 
                    },
                    {
                        label:'Jumlah Jam Kerja Tanpa Kecelakaan',
                        backgroundColor: '#689F38',
                        data: [30, 52, 25] 
                    },
                    {
                        label:'Jumlah Jam Kerja Selamat',
                        backgroundColor: '#039BE5',
                        data: [11, 33, 50] 
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                plugins: {
                    subtitle: {
                        display: true,
                        text: 'HSE Performance Board'
                    },
                    title: {
                        display: true,
                        text: 'INFORMASI KESELAMATAN KERJA'
                    },
                }
            },
            items: [],
        }
    },
    methods:{
        loadGambar(){
            const data = [];
            for (let i = 0; i < 14; i++) {
                data[i] = {
                    src: 'ppt/'+i+'.png'
                }
            }
            this.items = data;
        },
        setDateTime() {
            const date = new Date();
            this.dateTanggal = {
                tahun: moment(new Date).format("YYYY"),
                bulan: moment(new Date).format("MMM"),
                tanggal: moment(new Date).format("DD"),
            }
            this.dateTime = {
                hours: moment(date).format("HH"),
                minutes: moment(date).format("mm"),
                seconds: moment(date).format("ss"),
            };
        },
    },
    created(){
        this.loadGambar()
    },
    beforeMount() {
        this.timer = setInterval(this.setDateTime, 1000);
    },
    beforeUnmount() {
        clearInterval(this.timer);
    },
}
</script>