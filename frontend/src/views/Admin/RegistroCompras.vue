<template>
    <div>
   <v-subheader class="subheader black--text display-1 font-weight-bold ">Compras</v-subheader>
     <v-form ref="form">
      <v-container>
        <v-layout row wrap>
           <v-flex xs12 sm4>
            <v-text-field
              v-model="editedItem.nit"
              box
              label="NIT de la empresa"
              clearable
            ></v-text-field>
          </v-flex>

           <v-flex xs12 sm4>
            <v-text-field
              v-model="editedItem.empresa"
              box
              label="Empresa"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm4>
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
            label="Fecha"
            box
            readonly
            v-on="on"
            color="red darken-4"
          ></v-text-field>
        </template>
        <v-date-picker
          locale="es"
          v-model="now"
          no-title
          scrollable
          color="red darken-4"
        >
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="red darken-4"
            @click="nowMenu = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            flat
            color="red darken-4"
            @click="$refs.nowMenu.save(now)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
          </v-flex>

          <v-flex xs12 sm4>
            <v-text-field
              v-model="editedItem.serial"
              box
              label="Número de serial o codigo"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm4>
            <v-text-field
              v-model="editedItem.nombre"
              box
              label="Nombre del Producto"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm4>
            <v-text-field
              v-model="editedItem.cantidad"
              box
              label= "Cantidad"
              clearable
              type="number"
            ></v-text-field>
          </v-flex>
           <v-flex xs12 sm6>
            <v-textarea
              v-model="editedItem.descripcion"
              box
              label="Descripción"
              clearable
              height="140px"
            ></v-textarea>
          </v-flex>
            <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.marca"
              box
              label="Marca"
              clearable
            ></v-text-field>
            <v-text-field
              v-model="editedItem.valorUnitario"
              box
              label="Valor Unitario"
              clearable
              type="number"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm12>
          <v-btn
              color="green darken-4"
              class="botones white--text headline"
              @click="save"
            >Registrar Producto</v-btn>
           <v-btn
              color="red darken-4"
              class="botones white--text headline"
              @click="resetForm"
            >Cancelar</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
     <v-card>
       <v-card-title>
      <v-toolbar-title class="titulo2">Registro de Compras</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
       <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Buscar"
          hide-details
          single-line
          color="accent"
        ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="products"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ moment(props.item.fecha).format("MMM DD YYYY")  }}</td>
        <td class="text-xs-center">{{ props.item.nit }}</td>
        <td class="text-xs-center">{{ props.item.empresa }}</td>
        <td class="text-xs-center">{{ props.item.serial }}</td>
        <td class="text-xs-center">{{ props.item.nombre }}</td>
        <td class="text-xs-center">{{ props.item.marca }}</td>
        <td class="text-xs-center">{{ props.item.descripcion }}</td>
        <td class="text-xs-center">{{ props.item.valorUnitario }}</td>
        <td class="text-xs-center">{{ props.item.cantidad }}</td>
        <td class="text-xs-left">{{ props.item.valorUnitario * props.item.cantidad }}</td>
        <td class="justify-center layout px-0">
          <v-btn
            class="font-weight-black white--text body-2"
            color="red darken-4"
            @click="deleteItem(props.item)"
          >Eliminar</v-btn>
        </td>
      </template>
      <v-alert v-slot:no-results :value="true" color="error" icon="warning">
         Tu busqueda para "{{ search }}" no se encontró
        </v-alert>
    </v-data-table>
     </v-card>
    </div>
</template>
<script>
import moment from 'moment'
import { mapState } from 'vuex'
import uuid from 'uuid/v4'
import Swal from 'sweetalert2'
import api from '@/plugins/service'
export default {

  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
    this.getProducts()
    this.moment= moment
  },
  data () {
    return {
    moment: null,  
    dialog: false,
    show: false,
    today: '2019-01-08',
    nowMenu: false,
    now: null,
    search: '',
    headers: [
      {
        text: 'Fecha',
        align: 'center',
        sortable: false,
        value: 'now'
      },
      { text: 'NIT', value: 'nit' },
      { text: 'Empresa', value: 'empresa' },
      { text: 'codigo', value: 'serial' },
      { text: 'Nombre', value: 'nombre' },
      { text: 'Marca', value: 'marca' },
      { text: 'Descripción', value: 'descripcion' },
      { text: 'Valor unitario', value: 'valorUnitario' },
      { text: 'Cantidad', value: 'cantidad' },
      { text: 'Total', value: 'valorTotal' }
    ],
    editedIndex: -1,
    editedItem: {
      nit: '',
      now: '',
      empresa: '',
      serial: '',
      nombre: '',
      cantidad: '',
      descripcion: '',
      marca: '',
      valorUnitario: ''
    },
    defaultItem: {
      nit: '',
      now: '',
      empresa: '',
      serial: '',
      nombre: '',
      cantidad: '',
      descripcion: '',
      marca: '',
      valorUnitario: ''
    }
    }
  },

  computed: {
    ...mapState(['products'])
  },
  methods: {
    async getProducts () {
      const { data: products } = await api.get('/product')
      console.log(moment(products[0].now).format("MMM Do YY") )
      
      this.$store.commit('SET_PRODUCTS', products)
    },
 resetForm () {
      this.editedItem = {}
    },
    async save () {
      const alert = await Swal.fire({
        title: 'Se ha registrado el producto',
        timer: 3000
      })
        const { data: product } = await api.post('/product',
          {
          productNew: {
            fecha: this.now,
            nit: this.editedItem.nit,
            empresa: this.editedItem.empresa,
            serial: this.editedItem.serial,
            nombre: this.editedItem.nombre,
            cantidad: this.editedItem.cantidad,
            descripcion: this.editedItem.descripcion,
            marca: this.editedItem.marca,
            valorUnitario: this.editedItem.valorUnitario,
            valorTotal: this.editedItem.valorUnitario*this.editedItem.cantidad
          }
        })
      let clonProduct = [...this.products]
        clonProduct.push(product)
        this.$store.commit('SET_PRODUCTS', clonProduct)
        this.snackbar = true
        this.resetForm()
    },
    initialize () {
      this.products = [
        {
          fecha: '',
          nit: '',
          empresa: '',
          serial: '',
          nombre: '',
          cantidad: '',
          descripcion: '',
          marca: '',
          valorUnitario: '',
          valorTotal: ''
        }
      ]
    },
     async deleteItem (item) {
      const sw = await Swal.fire({
        title: 'Estas seguro?',
        text: `Eliminaras el registro del producto ${item.nombres}`,
        type: 'question',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar'
      })
      if (sw.value) {
        try {
          const { data: product } = await api.delete(`/product/${item.uuid}`)
          Swal.fire(
            'Eliminado!',
            'El registro se ha eliminado',
            'success'
          )
          let clonProduct = [...this.products]
          const index = this.product.indexOf(item)
          clonProduct.splice(index, 1)
          this.$store.commit('SET_PRODUCTS', clonProduct)
        } catch (error) {
          console.error(error)
        }
      }
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    }
  }
}
</script>
<style lang="stylus" scoped>
div.v-card__title{
    background-color darkred
}
.container.fill-height {
    background-color: white;
}
.titulo2{
  color white !important
}

.boton {
  margin: 110px 110px 0px 0px;
}

.botones {
  height: 70px;
  width: 300px;
  margin: 10px 0px 30px 150px;
}
</style>
