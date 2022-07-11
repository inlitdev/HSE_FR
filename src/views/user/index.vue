<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <v-sheet
                min-height="10vh"
                rounded="lg"
                >
                    <v-container fluid>
                        <v-row align="center" justify="center">
                            <v-col cols="6">
                                <h3 class="text-h5">USER ADMINISTRATOR<v-icon right>mdi-account</v-icon></h3>
                                <span style="color:green;">Utamakan Keselamatan & Kesehatan Kerja</span>
                            </v-col>
                            <v-col cols="6" class="text-right">
                                <!-- <img
                                elevation="20"
                                src="K3.png"
                                height="50"
                                > -->
                                <v-btn small color="primary">New Item</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col 
             v-for="n in 15"
             :key="n"
             cols="3" style="background-color:#EEEEEE;">
                <v-sheet
                min-height="20vh"
                rounded="lg"
                >
                    <v-list three-line>
                        <template>
                            <v-list-item>
                                <v-list-item-avatar>
                                    <v-img src="K3.png"></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title>Tomy {{n}}</v-list-item-title>
                                    <v-list-item-subtitle>Aku Tampan dan Berani</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                        <v-divider></v-divider>
                        <div class="text-center">
                            <v-btn color="amber darken-4" icon><v-icon>mdi-pencil</v-icon></v-btn>
                            <v-btn color="pink" icon><v-icon>mdi-delete</v-icon></v-btn>
                        </div>
                    </v-list>
                    <!-- <v-card flat>
                        <v-card-text>
                            <v-row align="center" justify="center">
                                <v-col cols="12" sm="3" md="6">
                                    <strong class="text-h6 mr-5"><v-icon left>mdi-panorama-variant</v-icon>Image Presentation</strong>
                                    <v-btn small color="primary">New Item</v-btn>
                                </v-col>
                                <v-col cols="12" sm="3" md="3" class="text-right">
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
                        </v-card-text>
                    </v-card> -->
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
            tab:''
        }),
        methods:{
            link(test){
                this.$router.push(test);
            },
        },
        created(){
        }
    }
</script>