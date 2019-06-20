<template>
<div>
           <v-flex d-flex xs12 sm6 md12>
        </v-flex>
<v-container fluid>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md2>
        </v-flex>
  <v-flex d-flex xs12 sm6 md8>
    <div>
      <v-tabs v-model="active" color="blue darken-4" dark slider-color="yellow" >
        <v-tab ripple class="headline mb-4 text-xs white--text title font-italic font-weight-black"> reservas activas</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <template v-for="n in 8">
              <v-flex xs12 :key="n" mb-3>
                <v-card color="green" class="reserva white--text">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4 text-xs black--text headline justify"><strong>Tipo de clase:</strong> Spinning</div>
                          <div  class="mb-4 text-xs black--text headline justify"><strong>fecha de la reserva:</strong> 25/05/2019 </div>
                          <div  class=" mb-4 text-xs black--text headline justify"><strong>Hora de inicio:</strong> 10:00 a.m. </div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div  class="headline mb-4 text-xs black--text headline justify"><strong>Lugar:</strong> Chon's Gym</div>
                          <div  class="mb-4 text-xs black--text headline justify"><strong>Entrenador:</strong> <br>Octavio Carvajal </div>
                          <div  class=" mb-4 text-xs black--text headline justify"><strong>Hora de finalización:</strong> 11:00 a.m. </div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="reservas" contain aspect-ratio="1"></v-img>
                    </v-flex>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-expansion-panel>
                        <v-expansion-panel-content >
                          <template v-slot:header>
                           <div  class="title text-xs black--text headline justify">Recomendaciones</div>
                          </template>
                          <v-card>
                            <v-card-text class="title text-xs black--text subheading justify">
                              *Llegar puntual <br>
                              *Vestir ropa cómoda y adecuada<br>
                              *Llevar hidratación<br>
                              *En caso de no poder asistir informar con anticipación<br>
                            </v-card-text>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
              </v-flex>
              </template >
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab ripple class="headline mb-4 text-xs white--text title font-italic font-weight-black"> reservas canceladas</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <template v-for="n in 8">
              <v-flex xs12 :key="n" mb-3>
                <v-card color="red" class="reserva white--text">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4 text-xs black--text headline justify"><strong>Tipo de clase:</strong> Spinning</div>
                          <div  class="mb-4 text-xs black--text headline justify"><strong>fecha de la reserva:</strong> 25/05/2019 </div>
                          <div  class=" mb-4 text-xs black--text headline justify"><strong>Hora de inicio:</strong> 10:00 a.m. </div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div  class="headline mb-4 text-xs black--text headline justify"><strong>Lugar:</strong> Chon's Gym</div>
                          <div  class="mb-4 text-xs black--text headline justify"><strong>Entrenador:</strong> <br>Octavio Carvajal </div>
                          <div  class=" mb-4 text-xs black--text headline justify"><strong>Hora de finalización:</strong> 11:00 a.m. </div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="reservas" contain aspect-ratio="1"></v-img>
                    </v-flex>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-expansion-panel>
                        <v-expansion-panel-content >
                          <template v-slot:header>
                          <div  class="title text-xs black--text headline justify">Recomendaciones</div>
                          </template>
                          <v-card>
                            <v-card-text class="title text-xs black--text subheading justify">
                              *Llegar puntual <br>
                              *Vestir ropa cómoda y adecuada<br>
                              *Llevar hidratación<br>
                              *En caso de no poder asistir informar con anticipación<br>
                            </v-card-text>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
              </v-flex>
              </template >
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-flex>
  <v-flex d-flex xs12 sm6 md2>
        </v-flex>
      </v-layout>
</v-container>
</div>
</template>

<script >
import RESERVAS from '@/assets/un_mes.jpg'
export default {
  name: 'inicio',
  data () {
    return {
      reservas: RESERVAS,
      active: null
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  methods: {
    next () {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0)
    }
  }
}
</script>

<style lang="stylus">
  .reserva{
    padding 15px
  }
</style>
