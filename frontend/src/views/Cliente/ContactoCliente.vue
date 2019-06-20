<template>
<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md12>
             <br>
       </v-flex>
       <v-flex d-flex xs12 sm6 md1>
       </v-flex>
       <v-flex d-flex xs12 sm6 md3>
         <v-card color="white" dark flat>
              <p></p><br>
        <h1 class="text-xs black--text display-1 font-italic font-weight-black"><strong>CONTACTO</strong></h1><br>
        <span class="text-xs black--text caption justify">En Chon's Gym brindamos a nuestros clientes una asesoría personalizada sobre nuestros servicios, rutinas de ejercicio físico y entrenamiento físico, por eso hemos habilitado esta sección para resolver inquietudes y recibir comentarios sobre nuestro gimnasio.</span><br>
<p></p><br>
<v-btn color="blue darken-4" class="right font-weight-black white--text title"  to="/trabaja-con-nosotros-cliente">Trabaje con nosotros</v-btn>
          </v-card>

       </v-flex>
       <v-flex d-flex xs12 sm5 md7>
  <v-card
    class="mx-auto"
    style="max-width: 500px;"
  >
    <v-system-bar
      color="blue darken-4"
      dark
    >
      <v-spacer></v-spacer>
    </v-system-bar>
    <v-toolbar
      color="blue darken-3"
      cards
      dark
      flat
    >
      <v-card-title class="title font-weight-regular">Trabaja con Nosotros</v-card-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-form
      ref="form"
      v-model="form"
      class="pa-4 pt-5"
    >
      <v-text-field
        v-model="password"
        :rules="[rules.password, rules.length(10)]"
        box
        color="blue darken-3"
        counter="10"
        label="Nombre"
        style="min-height: 96px"
        type="text"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="[rules.email]"
        box
        color="blue darken-3"
        label="Correo"
        type="email"
      ></v-text-field>
      <v-text-field
        v-model="phone"
        box
        color="blue darken-3"
        label="Teléfono"
        mask="phone"
      ></v-text-field>
      <v-textarea
        v-model="bio"
        auto-grow
        box
        color="blue darken-3"
        label="Mensaje"
        rows="1"
      ></v-textarea>
      <v-checkbox
        v-model="agreement"
        :rules="[rules.required]"
        color="blue darken-3"
      >
        <template v-slot:label>
          Acepto los&nbsp;
          <a href="#" @click.stop.prevent="dialog = true">Términos</a>
          &nbsp;y&nbsp;
          <a href="#" @click.stop.prevent="dialog = true">Condiciones</a>*
        </template>
      </v-checkbox>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        flat
        @click="$refs.form.reset()"
      >
        Borrar Mensaje
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!form"
        :loading="isLoading"
        class="white--text"
        color="blue darken-3"
        depressed
      >Enviar</v-btn>
    </v-card-actions>
    <v-dialog
      v-model="dialog"
      absolute
      max-width="800"
      persistent
    >
      <v-card>
        <v-card-title class="headline grey lighten-3">Políticas de privacidad</v-card-title>
        <v-card-text>
          <span class="text-xs black--text subheading justify">La protección y el buen manejo de la información personal de sus afiliados son muy importantes para el Gimnasio Chon's Gym, por cuanto las mismas le permiten atender de mejor manera las necesidades que ellos tienen, así como cumplir con las obligaciones a su cargo. Es por ello que el Gimnasio Chon's Gym ha diseñado políticas y procedimientos que en conjunto con la presente autorización permiten hacer uso de sus datos personales conforme a la ley. Así, lo invitamos a leer cuidadosamente el siguiente texto, mediante el cual autoriza el tratamiento de su información personal.</span>
        <p></p>
        <span class="text-xs black--text subheading justify">1. En relación con mis Datos Personales: Mediante este documento, en mi calidad de titular de la información o representante legal del mismo, autorizo al Gimnasio Chon's Gym a dar tratamiento a mis datos personales para: </span>
        <p></p>
        <span class="text-xs black--text subheading justify">a) El desarrollo de su objeto social y de la relación contractual que nos vincula, lo que supone el ejercicio de sus derechos y deberes dentro de los que están, sin limitarse a ellos, la atención de mis solicitudes, la generación de estados de cuenta, la realización de actividades de cobranza, entre otros. </span>
        <p></p>
        <span class="text-xs black--text subheading justify">b) La administración de los productos o servicios comercializados a través del Gimnasio Chon's Gym de los que soy titular </span>
        <p></p>
        <span class="text-xs black--text subheading justify">c) La estructuración de ofertas comerciales y la remisión de información comercial sobre productos y/o servicios a través de los canales o medios que el Gimnasio Chon's Gym establezca para tal fin.  </span>
        <p></p>
        <span class="text-xs black--text subheading justify">d) La adopción de medidas tendientes a la prevención de actividades ilícitas. </span>
        <p></p>
        <span class="text-xs black--text subheading justify">La presente autorización se hace extensiva a quien represente los derechos del Gimnasio Chon's Gym, a quien éste contrate para el ejercicio de los mismos o a quien éste ceda sus derechos, sus obligaciones o su posición contractual a cualquier título, en relación con los productos o servicios de los que soy titular. Así mismo, a las Entidades que forman parte de la Organización y a los terceros con quien el Gimnasio Chon's Gym o esas Entidades establezcan alianzas comerciales, a partir de las cuales se ofrezcan productos o servicios que puedan ser de su interés. </span>
        <p></p>
        <span class="text-xs black--text subheading justify">Esta autorización permanecerá vigente, hasta tanto sea revocada y podrá ser revocada en los eventos previstos en la ley, y siempre y cuando no exista ningún tipo de relación con el Gimnasio Chon's Gym o no se encuentre vigente algún producto o servicio derivado de esta autorización.</span>
        <p></p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            flat
            @click="agreement = false, dialog = false"
          >
            No
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            class="white--text"
            color="blue darken-3"
            @click="agreement = true, dialog = false"
          >
            Acepto
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
  </v-flex>
      </v-layout>
</v-container>
</template>

<script>
export default {
  data: () => ({
    agreement: false,
    bio: '',
    dialog: false,
    email: undefined,
    form: false,
    isLoading: false,
    password: undefined,
    phone: undefined,
    rules: {
      email: v => (v || '').match(/@/) || 'Por favor ingrese su e-mail',
      length: len => v => (v || '').length >= len || `Nombre invalido, requiere mínimo ${len} caracteres`
    }
  })
}
</script>
<style lang="stylus" scoped>
div.v-card__title {
    background-color: transparent
}
</style>
