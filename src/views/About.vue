<template>
    <v-container fluid class="justify-center align-center">
        <v-card
            class="mx-auto"
            style="margin-top:110px;"
            max-width="500"
        >
            <v-container>
                <v-list-item>
                    <v-list-item-content>
                        <div class="text-h6 mb-4" style="color:#2E7D32;">PT. INDUSTRI NABATI LESTARI</div>
                        <v-list-item-title class="text-overline mb-1">Health, Safety & Environment</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        size="80"
                    >
                    <img
                        src="K3.png"
                        alt="HSE"
                    >
                    </v-list-item-avatar>
                </v-list-item>
                <v-card-text>
                    <v-text-field
                        label="Username"
                        dense
                        v-model="username"
                        prepend-icon="mdi-account"
                    ></v-text-field>
                    <v-text-field
                        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show2 ? 'text' : 'password'"
                        name="input-10-2"
                        v-model="password"
                        dense
                        label="Password"
                        class="input-group--focused"
                        @click:append="show2 = !show2"
                        prepend-icon="mdi-lock"
                    ></v-text-field>
                    <!-- <v-text-field
                        label="Password"
                        dense
                        
                    ></v-text-field> -->
                </v-card-text>
                <v-card-actions>
                    <v-row>
                        <v-col cols="12" class="text-right">
                            <v-btn
                                color="teal"
                                dark
                                small
                                class="mr-2"
                                @click="submit"
                            >
                                <v-icon small left>mdi-login-variant</v-icon> Login
                            </v-btn>
                            <v-btn
                                color="warning"
                                dark
                                small
                                @click="link({path:'/'})"
                            >
                                <v-icon small left>mdi-subdirectory-arrow-left</v-icon> Back
                            </v-btn>

                        </v-col>
                    </v-row>
                </v-card-actions>
                <v-divider class="mt-4"></v-divider>
                <v-card-subtitle class="text-center">
                    <span>HSE - Copyright &copy; <strong>IT.INL</strong> 2022</span>
                </v-card-subtitle>
            </v-container>
        </v-card>
    </v-container>
</template>
<script>
    export default {
        data () {
            return {
                show2: false,
                username:'',
                password:''
            }
        },
        methods:{
            submit(){
                const data = {
                    username: this.username,
                    password: this.password
                }
                this.$router.push({path:'/accesshome'});
                console.log(data);
            },
            link(test){
                this.$router.push(test);
            }
        }
    }
</script>