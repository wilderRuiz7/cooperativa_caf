<template>
<div class="lonuevo">
    <p></p><br>
<v-container fluid>
      <v-layout row wrap>
          <p></p><br>
          <v-flex xs12 sm6 md3>
    </v-flex>
         <v-flex d-flex xs12 sm6 md6 class="campo">
       <v-btn class="botones" flat to="/hard-vital-cliente"><h1 class="letras">HARD VITAL</h1></v-btn>
       <v-btn class="botones" flat to="/neurofitness-cliente"><h1 class="letras">NEUROFITNESS</h1></v-btn>
       <v-btn class="botones" flat to="/personalizados-cliente"><h1 class="letras">PERSONALIZADOS</h1></v-btn>
        </v-flex>
         <v-flex xs12 sm6 md3>
    </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout row wrap>
          <p></p><br>
          <v-flex xs12 sm6 md3>
    </v-flex>
         <v-flex d-flex xs12 sm6 md6 class="campo">
  <h1 class="text-xs white--text display-2">EN CHON´S GYM <br><strong>LO TENEMOS TODO</strong></h1>
        </v-flex>
         <v-flex xs12 sm6 md3>
    </v-flex>
      </v-layout>
       <v-layout row wrap>
          <p></p><br>
          <v-flex xs12 sm6 md3>
    </v-flex>
         <v-flex d-flex xs12 sm6 md6 class="campo">
  <h1 class="text-xs white--text title"><strong>#SALUDEXTREMA</strong></h1>
        </v-flex>
         <v-flex xs12 sm6 md3>
    </v-flex>
      </v-layout>
       <v-layout row wrap>
          <p></p><br>
          <v-flex xs12 sm6 md3>
    </v-flex>
         <v-flex d-flex xs12 sm6 md6 class="campo">
  <p class="text-xs white--text headline">Ahora podrás disfrutar de servicios únicos que harán de tu experiencia algo diferente. Con Hard Vital, NeuroFitness y Plan personalizado podrás cuidar de tu cuerpo y tu mente sin limitaciones ni excusas.</p>
        </v-flex>
         <v-flex xs12 sm6 md3>
    </v-flex>
      </v-layout>
           <v-layout row wrap>
          <p></p><br>
          <v-flex xs12 sm6 md3>
    </v-flex>
         <v-flex d-flex xs12 sm6 md6 class="campo">
        </v-flex>
         <v-flex xs12 sm6 md3>
            <v-btn color="blue darken-4" class="font-weight-black white--text title" to="/planes-cliente" >Ver planes</v-btn>
    </v-flex>
      </v-layout>
    </v-container>
    <h1 class="text-xs-center white--text display-2">PRUEBA UN NUEVO <strong>ESTILO DE VIDA</strong></h1><br>
<v-container fluid grid-list-sm>
   <v-layout row wrap>
     <v-flex xs12 sm6 md1>
     </v-flex>
         <v-flex xs12 sm6 md3>
           <v-card color="transparent">
             <v-flex xs12 sm6 md10>
        <v-img :src="hardvital" class="imagenes">
          <p class="escrito"><strong>Servicio de Hard Vital</strong></p>
          <v-btn color="blue darken-4" class="detalle font-weight-black white--text title font-italic" to="/hard-vital-cliente" ><h1 class="letras">Ver más</h1></v-btn>
        </v-img>
             </v-flex>
           </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3>
            <v-card color="transparent">
             <v-flex xs12 sm6 md10>
        <v-img :src="fitness" class="imagenes">
          <p class="escrito"><strong>Servicio de Neurofitness</strong></p>
          <v-btn color="blue darken-4" class="detalle font-weight-black white--text title font-italic" to="/neurofitness-cliente"><h1 class="letras">Ver más</h1></v-btn>
        </v-img>
         </v-flex>
           </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3>
            <v-card color="transparent">
             <v-flex xs12 sm6 md10>
        <v-img :src="personalizados" class="imagenes">
          <p class="escrito"><strong>Servicio Personalizados</strong></p>
          <v-btn color="blue darken-4" class="detalle font-weight-black white--text title font-italic" to="/personalizados-cliente"><h1 class="letras">Ver más</h1></v-btn>
        </v-img>
         </v-flex>
           </v-card>
        </v-flex>
        <v-flex xs12 sm6 md1>
     </v-flex>
   </v-layout>

   <v-layout row wrap>
     <v-flex xs12 sm6 md1>
     </v-flex>
         <v-flex xs12 sm6 md3>
            <v-card color="transparent">
             <v-flex xs12 sm6 md10>
           <p></p>
          <p class="text-xs-center white--text headline">Ejercita tu mente y maximiza tu actividad cerebral con Neurofitness. Saca el potencial que te hará sentirte como un super humano</p>
         </v-flex>
           </v-card></v-flex>
        <v-flex xs12 sm6 md3>
           <v-card color="transparent">
             <v-flex xs12 sm6 md10>
          <p></p>
          <p class="text-xs-center white--text headline">Conoce tu estado de salud corporal con estudios médicos avanzados, realizados por especialistas en Biomedicina y nutricionistas. ¡Es hora de vivir intensamente saludables!</p>
        </v-flex>
           </v-card> </v-flex>
        <v-flex xs12 sm6 md3>
           <v-card color="transparent">
             <v-flex xs12 sm6 md10>
          <p></p>
          <p class="text-xs-center white--text headline">Nuestro Plan personalizado es la oportunidad que tendrás para poder entrenar y realizar ejercicio de la manera correcta y con el apoyo que necesitas</p>
        </v-flex>
           </v-card>
            </v-flex>
        <v-flex xs12 sm6 md1>
     </v-flex>
   </v-layout>
    </v-container>
</div>
</template>
<script>
import HARDVITAL from '@/assets/HARDVITAL-LONUEVO.png'
import FITNESS from '@/assets/hard-vital2.png'
import PERSONALIZADOS from '@/assets/plan_personalizados.png'
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  data () {
    return {
      hardvital: HARDVITAL,
      fitness: FITNESS,
      personalizados: PERSONALIZADOS
    }
  }
}
</script>
<style lang="stylus" scoped>
 img.imagen_gym{
    height 270px
    width 370px !important
    margin 0px 20px 0px 20px
  }
  .spinning{
    padding 90px 30px 0px 50px
    margin 0px 20px 0px 20px!important
  }
  .imagenes{
    padding 300px 30px 0px 50px
    margin 0px 80px 0px 20px
    height 250px!important
    width 370px
  }
  img.imagen_logo{
    height 60px
    width 60px !important
    margin 0px 0px 0px 40px
  }
  p.texto{
    background-color silver !important
    text-align center
    border solid 2px
    font-size 16px
    margin -5px 0px 0px -1px
    padding 10px
    font-family sans-serif
  }
  li{
    margin 0px 0px 0px 60px
  }
  article{
    margin 0px 0px 0px 60px
  }
  div.lonuevo{
      background-image url('../../assets/pesas.jpg') !important
      margin-top -14px
  }
  .v-btn.botones{
      height 100px !important
      width 100px
      border solid 4px white
  }
   .v-btn.detalle{
    margin -100px 0px 0px 200px !important
  }
  h1.letras{
       font-size 18px
       color white
  }
    p.escrito{
    font-size 30px
    color black
    margin -90px 150px 0px -40px
    padding 10px
    font-family sans-serif
  }
  .campo {
    padding 10px !important
  }
.contenido {
  display inline-block !important
}
</style>
