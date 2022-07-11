<template>
    <v-app id="inspire">
        <v-app-bar
        app
        color="white"
        flat
        >
            <v-container class="py-0 fill-height">
                <v-avatar
                class="mr-10"
                size="45"
                >
                    <img
                    elevation="20"
                    src="K3.png"
                    height="50"
                    >
                    <!-- <span class="white--text text-h7">HSE</span> -->
                </v-avatar>
                <v-btn v-for="link in links" :key="link.view" @click="linked(link.path)" text>{{ link.view }}</v-btn>
                <v-spacer></v-spacer>

                <v-responsive max-width="260" class="text-right">
                    <v-btn text fab small>
                       <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </v-responsive>
            </v-container>
        </v-app-bar>

        <v-main class="grey lighten-3">
            <router-view/>
        </v-main>
    </v-app>
</template>
<script>
    export default {
        data: () => ({
            links: [
                {path:'/accesshome',view:'Home'},
                {path:'/activity', view:'Work Program'},
                {path:'/present', view:'Presentation'},
                {path:'/user', view:'User Administrator'},
            ],
        }),
        methods:{
            linked(test){
                this.$router.push({path:test});
            }
        }
    }
</script>