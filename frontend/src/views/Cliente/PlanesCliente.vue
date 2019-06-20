<template>
  <div>
    <p></p>
    <h1 class="text-xs-center display-1">
      CONOCE NUESTROS
      <strong>PLANES</strong>
    </h1>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md1 child-flex>
          <v-card color="white" dark flat></v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card color="white" dark flat>
            <h1 class="text-xs blue--text headline">
              PLANES Y
              <br>
              <strong>TARIFAS</strong>
            </h1>
            <br>
            <p class="text-xs blue--text title">
              <strong>¡Cumple tus metas!</strong>
            </p>
            <span class="text-xs black--text caption">
              <strong>
                En CHON'S GYM te ayudaremos a cumplir tu
                meta, realizando planes y rutinas
                personalizadas para adelgazar, fortalecer o
                definir, también tendrás consejos
                alimenticios para que complementes y logres
                un mayor avance hacia tus objetivos.
              </strong>
            </span>
          </v-card>
        </v-flex>

          <v-flex v-for="(plan,i) in plans" :key="i" d-flex xs12 sm6 md2>
          <v-card  color="white" dark flat>
            <v-layout justify-center>
              <v-flex xs12 sm6 md10>
                <v-card>
                  <v-card-title class="blue">
                    <div>
                      <h3 class="headline white--text">{{plan.nombre}}</h3>
                    </div>
                  </v-card-title>
                  <v-img :src="plan.foto.url" aspect-ratio="1" class="planes"></v-img>
                  <v-card-title class="black">
                    <div>
                      <h3 class="headline white--text">${{plan.precio}}</h3>
                    </div>
                  </v-card-title>
                </v-card>
                <v-btn
                  color="blue darken-4"
                  class="font-weight-black white--text title"
                  block
                  to="/un-mes-cliente"
                >Ver detalles</v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- <v-container fluid>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md1 child-flex>
          <v-card color="white" dark flat></v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card color="white" dark flat>
            <v-btn color="blue darken-4" class="font-weight-black white--text title">TODOS</v-btn>
            <br>
            <v-btn
              color="blue darken-4"
              flat
              round
              class="black--text subheading font-italic font-weight-black"
              to="/instalaciones-cliente"
            >GIMNASIO</v-btn>
            <v-btn
              color="blue darken-4"
              flat
              round
              class="black--text subheading font-italic font-weight-black"
              to="/hard-vital-cliente"
            >HARD VITAL</v-btn>
            <v-btn
              color="blue darken-4"
              flat
              round
              class="black--text subheading font-italic font-weight-black"
              to="/neurofitness-cliente"
            >NEUROFITNESS</v-btn>
            <v-btn
              color="blue darken-4"
              flat
              round
              class="black--text subheading font-italic font-weight-black"
              to="/personalizados-cliente"
            >PERSONALIZADOS</v-btn>
          </v-card>
        </v-flex>

        
      </v-layout>
    </v-container> -->
  </div>
</template>
<script>
import api from "@/plugins/service";
export default {
  created() {
    this.$store.commit("SET_LAYOUT", "principal-layout");
    this.getPlans();
  },
  data() {
    return {
      img: '',
      plans: []
    }
  },
  methods: {
    async getPlans() {
      const { data: plans } = await api.get("/plan")
      this.plans = plans
      this.plans = this.plans.map((plan) => {
        plan.foto = JSON.parse(plan.foto)
        return plan
        })      
      }
   }
}
</script>
<style lang="stylus" scoped>
img.imagen_plan {
  height: 170px;
  width: 190px !important;
}

.black {
  background-color: black;
  text-align: center !important;
}

.blue {
  background-color: #0d47a1 !important;
}
</style>
