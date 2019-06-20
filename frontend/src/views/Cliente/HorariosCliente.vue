<template >
 <div id="app">
  <v-layout wrap>
    <v-flex
      sm12
      lg3
      class="flex pa-5 mb-3 feature-pane"
      offset-xs1>
      <v-select
        v-model="type"
        :items="typeOptions"
        label="Tipo"
      ></v-select>
      <v-text-field
        v-if="type === 'custom-weekly'"
        v-model="minWeeks"
        label="Minimum Weeks"
        type="number"
      ></v-text-field>
      <v-select
        v-if="type === 'custom-daily'"
        v-model="maxDays"
        :items="maxDaysOptions"
        label="# of Days"
      ></v-select>
      <v-menu
        ref="startMenu"
        v-model="startMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="start"
        transition="scale-transition"
        min-width="290px"
        lazy
        offset-y
        full-width
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="start"
            label="Fecha de inicio"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          locale="es"
          v-model="start"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="primary"
            @click="startMenu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            flat
            color="primary"
            @click="$refs.startMenu.save(start)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-menu
        v-if="hasEnd"
        ref="endMenu"
        v-model="endMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="end"
        transition="scale-transition"
        min-width="290px"
        lazy
        offset-y
        full-width
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="end"
            label="End Date"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          locale="es"
          v-model="end"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="primary"
            @click="endMenu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            flat
            color="primary"
            @click="$refs.endMenu.save(end)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-menu
        ref="nowMenu"
        v-model="nowMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="now"
        transition="scale-transition"
        min-width="290px"
        lazy
        offset-y
        full-width
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="now"
            label="Hoy"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          locale="es"
          v-model="now"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="primary"
            @click="nowMenu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            flat
            color="primary"
            @click="$refs.nowMenu.save(now)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
<v-checkbox
        v-model="dark"
        label="Fondo Oscuro"
      ></v-checkbox>
      <v-btn
        fab
        outline
        small
        absolute
        left
        color="primary"
        @click="$refs.calendar.prev()">
        <v-icon dark>
          keyboard_arrow_left
        </v-icon>
      </v-btn>
      <v-btn
        fab
        outline
        small
        absolute
        right
        color="primary"
        @click="$refs.calendar.next()">
        <v-icon
          dark
        >
          keyboard_arrow_right
        </v-icon>
      </v-btn>
    </v-flex>
    <v-flex
      sm12
      lg7
      class="calendario pl-3">
      <v-sheet height="650">
        <v-calendar locale="es"
          ref="calendar"
          v-model="start"
          :type="type"
          :start="start"
          :end="end"
          :min-weeks="minWeeks"
          :max-days="maxDays"
          :now="now"
          :dark="dark"
          :weekdays="weekdays"
          :first-interval="intervals.first"
          :interval-minutes="intervals.minutes"
          :interval-count="intervals.count"
          :interval-height="intervals.height"
          :interval-style="intervalStyle"
          :show-interval-label="showIntervalLabel"
        >
          <template v-slot:day="{ date }">
            <template v-for="event in eventsMap[date]">
              <v-menu
                :key="event.title"
                v-model="event.open"
                full-width
                offset-x
              >
                <template v-slot:activator="{ on }">
                  <div
                    v-if="!event.time"
                    v-ripple
                    class="my-event"
                    v-on="on"
                    v-html="event.title"
                  ></div>
                </template>
                <v-card
                  color="grey lighten-4"
                  min-width="350px"
                  flat
                >
                  <v-toolbar
                    color="blue darken-4"
                    dark
                  >
                    <v-spacer></v-spacer>
                    <v-toolbar-title v-html="event.title"></v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                   <v-layout row wrap>
           <v-flex d-flex xs12 sm7>
               <v-card color="transparent" class="alert1" flat>
                    <span><strong>Descripción: <br></strong></span>
                    <span v-html="event.descripcion"></span><br><br>
                     <span><strong>Hora de inicio: <br></strong></span>
                    <span v-html="event.inicio"></span><br>
                     <span><strong>Finaliza: <br></strong></span>
                    <span v-html="event.final"></span><br>
                     <span><strong>Capacidad: <br></strong></span>
                    <span v-html="event.capacidad"></span><br>
                    <span><strong>Estado: <br></strong></span>
                    <span v-html="event.estado"></span><br>
                    <span><strong>Entrenador: <br></strong></span>
                    <span v-html="event.entrenador"></span><br>
                  </v-card>
        </v-flex>
           <v-flex d-flex xs12 sm6>
               <v-card color="transparent" class="alert2" flat>
                  <v-flex d-flex xs12 sm1>
                     <img class="imagen_alert" src="../../assets/spinning-1.jpg" alt="">
                  </v-flex>
                  </v-card>
        </v-flex>
                   </v-layout>
                  <v-card-actions>
                      <v-btn
            flat
            @click="agreement = false, dialog = false"
          >
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            flat
            @click="agreement = true, dialog = false"
          >
            Reservar
          </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </template>
          </template>
        </v-calendar>
      </v-sheet>
    </v-flex>
       <v-flex d-flex xs12 sm6 md12>
          <v-card color="transparent" dark flat>
            <br><br><br>
          </v-card>
        </v-flex>
  </v-layout>
</div>
</template>

<script>
import api from '@/plugins/service'
const weekdaysDefault = [0, 1, 2, 3, 4, 5, 6]

const intervalsDefault = {
  first: 0,
  minutes: 60,
  count: 24,
  height: 40
}

const stylings = {
  default (interval) {
    return undefined
  },
  workday (interval) {
    const inactive = interval.weekday === 0 ||
        interval.weekday === 6 ||
        interval.hour < 9 ||
        interval.hour >= 17
    const startOfHour = interval.minute === 0
    const dark = this.dark
    const mid = dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'

    return {
      backgroundColor: inactive ? (dark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.05)') : undefined,
      borderTop: startOfHour ? undefined : '1px dashed ' + mid
    }
  },
  past (interval) {
    return {
      backgroundColor: interval.past ? (this.dark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.05)') : undefined
    }
  }
}
export default {
  data: () => ({
    agreement: false,
    today: '2019-01-08',
    events: [
      {
        title: 'Spinning',
        descripcion: 'Clase de cardio intensivo',
        inicio: '10:00 a.m.',
        final: '11:00 a.m.',
        capacidad: '25 personas',
        estado: 'Disponible',
        entrenador: 'Octavio Carvajal',
        date: '2018-12-30',
        open: false
      },
      {
        title: 'Crossfit',
        descripcion: 'Clase de cardio intensivo',
        inicio: '10:00 a.m.',
        final: '11:00 a.m.',
        capacidad: '25 personas',
        estado: 'Disponible',
        entrenador: 'Octavio Carvajal',
        date: '2019-01-04',
        open: false
      },
      {
        title: 'Zumba',
        descripcion: 'Clase de cardio intensivo',
        inicio: '10:00 a.m.',
        final: '11:00 a.m.',
        capacidad: '25 personas',
        estado: 'Disponible',
        entrenador: 'Octavio Carvajal',
        date: '2019-01-13',
        open: false
      },
      {
        title: 'Cardio Box',
        descripcion: 'Clase de cardio intensivo',
        inicio: '10:00 a.m.',
        final: '11:00 a.m.',
        capacidad: '25 personas',
        estado: 'Disponible',
        entrenador: 'Octavio Carvajal',
        date: '2018-12-30',
        open: false
      },
      {
        title: 'Spinning',
        descripcion: 'Clase de cardio intensivo',
        inicio: '10:00 a.m.',
        final: '11:00 a.m.',
        capacidad: '25 personas',
        estado: 'Disponible',
        entrenador: 'Octavio Carvajal',
        date: '2019-01-06',
        open: false
      },
      {
        title: 'Crossfit',
        descripcion: 'Clase de cardio intensivo',
        inicio: '10:00 a.m.',
        final: '11:00 a.m.',
        capacidad: '25 personas',
        estado: 'Disponible',
        entrenador: 'Octavio Carvajal',
        date: '2019-01-10',
        open: false
      },
      {
        title: 'Zumba',
        descripcion: 'Clase de cardio intensivo',
        inicio: '10:00 a.m.',
        final: '11:00 a.m.',
        capacidad: '25 personas',
        estado: 'Disponible',
        entrenador: 'Octavio Carvajal',
        date: '2019-01-23',
        open: false
      },
      {
        title: 'Cardio Box',
        descripcion: 'Clase de cardio intensivo',
        inicio: '10:00 a.m.',
        final: '11:00 a.m.',
        capacidad: '25 personas',
        estado: 'Disponible',
        entrenador: 'Octavio Carvajal',
        date: '2019-01-20',
        open: false
      },
      {
        title: 'Kick Boxing',
        descripcion: 'Clase de cardio intensivo',
        inicio: '10:00 a.m.',
        final: '11:00 a.m.',
        capacidad: '25 personas',
        estado: 'Disponible',
        entrenador: 'Octavio Carvajal',
        date: '2019-01-08',
        open: false
      }

    ],
    dark: false,
    startMenu: false,
    start: '2019-01-12',
    endMenu: false,
    end: '2019-01-27',
    nowMenu: false,
    minWeeks: 1,
    now: null,
    type: 'month',
    typeOptions: [
      { text: 'Día', value: 'day' },
      { text: '4 días', value: '4day' },
      { text: 'Semana', value: 'week' },
      { text: 'Mes', value: 'month' }
    ],
    weekdays: weekdaysDefault,
    weekdaysOptions: [
      { text: 'Domingo-Sábado', value: weekdaysDefault },
      { text: 'Lunes, Miércoles, Viernes', value: [1, 3, 5] },
      { text: 'Lunes - Viernes', value: [1, 2, 3, 4, 5] },
      { text: 'Lunes - Domingo', value: [1, 2, 3, 4, 5, 6, 0] }
    ],
    intervals: intervalsDefault,
    intervalsOptions: [
      { text: 'Default', value: intervalsDefault },
      { text: 'Workday', value: { first: 16, minutes: 30, count: 20, height: 40 } }
    ],
    maxDays: 7,
    maxDaysOptions: [
      { text: '7 days', value: 7 },
      { text: '5 days', value: 5 },
      { text: '4 days', value: 4 },
      { text: '3 days', value: 3 }
    ],
    styleInterval: 'default',
    styleIntervalOptions: [
      { text: 'Default', value: 'default' },
      { text: 'Workday', value: 'workday' },
      { text: 'Past', value: 'past' }
    ]
  }),
  computed: {
    intervalStyle () {
      return stylings[ this.styleInterval ].bind(this)
    },
    hasIntervals () {
      return this.type in {
        'week': 1, 'day': 1, '4day': 1, 'custom-daily': 1
      }
    },
    hasEnd () {
      return this.type in {
        'custom-weekly': 1, 'custom-daily': 1
      }
    },
    eventsMap () {
      const map = {}
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
      return map
    },
    created () {
      this.getReservation()
    }
  },
  methods: {
    open (event) {
      alert(event.title)
    },
    showIntervalLabel (interval) {
      return interval.minute === 0
    },
    async getReservation () {
      try {
        const res = await api.get('/reservation')
        console.log(res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async submit () {
      console.log()
      const res = await api.post('/reservation', {
        reservationNew: {
          estado: this.form.estado,
          fecha_reserva: this.form.date,
          genero: 'M, F',
          contraseña: '1234'
        }
      })
    }
  }
}
</script>

<style scoped>
  .feature-pane {
    position: relative;
    padding-top: 30px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
  }
  .day-header {
    margin: 0px 2px 2px 2px;
    padding: 2px 6px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    border-radius: 2px;
    user-select: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .day-body {
    position: absolute;
    top: 400px;
    height: 36px;
    margin: 2px;
    padding: 2px 6px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    border-radius: 2px;
    left: 0;
    right: 0;
    user-select: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .day {
    position: relative;
    height: 24px;
    margin: 0px;
    padding: 0px 6px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    border-radius: 2px;
    left: 0;
    right: 0;
    user-select: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .horarios {
      margin: 50px
  }
  .carta {
      text-align: center
  }
.flex{
  margin: 0px -200px 0px 100px
}
.calendario{
  margin: 60px 0px 0px 200px
}
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  width: 100%;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
}
.alert1 {
  padding: 10px;
  margin-left: -80px;
}
.alert2 {
  padding: 100px 0px 0px 0px;

}
.imagen_alert{
  width: 60px;
  height: 140px;
  margin-left: -130px
}
</style>
