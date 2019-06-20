import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Cliente/Login.vue'
import EmailAdmin from '@/views/Admin/EmailAdmin.vue'
import RegistroCompras from '@/views/Admin/RegistroCompras.vue'
import RegistroEmpleados from '@/views/Admin/RegistroEmpleados.vue'
import GestionClases from '@/views/Admin/GestionClases.vue'
import ProveedoresAdmin from '@/views/Admin/ProveedoresAdmin.vue'
import RegistroVentas from '@/views/Admin/RegistroVentas.vue'
import Novedades from '@/views/Admin/Novedades.vue'
import Tips from '@/views/Admin/Tips.vue'
import InstalacionesAdmin from '@/views/Admin/InstalacionesAdmin.vue'
import PlanesCliente from '@/views/Cliente/PlanesCliente.vue'
import PlanTresMesesCliente from '@/views/Cliente/PlanTresMesesCliente.vue'
import PlanSeisMesesCliente from '@/views/Cliente/PlanSeisMesesCliente.vue'
import PlanDoceMesesCliente from '@/views/Cliente/PlanDoceMesesCliente.vue'
import PlanQuinceMesesCliente from '@/views/Cliente/PlanQuinceMesesCliente.vue'
import HardVitalCliente from '@/views/Cliente/HardVitalCliente.vue'
import NeurofitnessCliente from '@/views/Cliente/NeurofitnessCliente.vue'
import PersonalizadosCliente from '@/views/Cliente/PersonalizadosCliente.vue'
import ClasesGrupalesCliente from '@/views/Cliente/ClasesGrupalesCliente.vue'
import ShiatsuCliente from '@/views/Cliente/ShiatsuCliente.vue'
import SpinningCliente from '@/views/Cliente/SpinningCliente.vue'
import AerobicosCliente from '@/views/Cliente/AerobicosCliente.vue'
import CrossfitCliente from '@/views/Cliente/CrossfitCliente.vue'
import EntrenamientoCliente from '@/views/Cliente/EntrenamientoCliente.vue'
import CardioCliente from '@/views/Cliente/CardioCliente.vue'
import RumbaCliente from '@/views/Cliente/RumbaCliente.vue'
import HardCliente from '@/views/Cliente/HardCliente.vue'
import RegistroCliente from '@/views/Cliente/RegistroCliente.vue'
import MultiterrenoCliente from '@/views/Cliente/MultiterrenoCliente.vue'
import LoNuevoCliente from '@/views/Cliente/LoNuevoCliente.vue'
import NoticiasCliente from '@/views/Cliente/NoticiasCliente.vue'
import NoticiasBellezaCliente from '@/views/Cliente/NoticiasBellezaCliente.vue'
import ClaveCliente from '@/views/Cliente/ClaveCliente.vue'
import PerderGrasaCliente from '@/views/Cliente/PerderGrasaCliente.vue'
import MissUniversoCliente from '@/views/Cliente/MissUniversoCliente.vue'
import MenteEquilibrioCliente from '@/views/Cliente/MenteEquilibrioCliente.vue'
import VidaSaludableCliente from '@/views/Cliente/VidaSaludableCliente.vue'
import PilatesCliente from '@/views/Cliente/PilatesCliente.vue'
import MotivarteCliente from '@/views/Cliente/MotivarteCliente.vue'
import BienestarCliente from '@/views/Cliente/BienestarCliente.vue'
import CorrerCliente from '@/views/Cliente/CorrerCliente.vue'
import FisicoCliente from '@/views/Cliente/FisicoCliente.vue'
import NutricionistaCliente from '@/views/Cliente/NutricionistaCliente.vue'
import ActividadFisicaCliente from '@/views/Cliente/ActividadFisicaCliente.vue'
import MasaMuscularCliente from '@/views/Cliente/MasaMuscularCliente.vue'
import HiitCliente from '@/views/Cliente/HiitCliente.vue'
import NuevasRutinasCliente from '@/views/Cliente/NuevasRutinasCliente.vue'
import TipsCliente from '@/views/Cliente/TipsCliente.vue'
import EjercicioFisicoCliente from '@/views/Cliente/EjercicioFisicoCliente.vue'
import HidratacionCliente from '@/views/Cliente/HidratacionCliente.vue'
import CarbohidratosCliente from '@/views/Cliente/CarbohidratosCliente.vue'
import MinutosCliente from '@/views/Cliente/MinutosCliente.vue'
import DuermeBienCliente from '@/views/Cliente/DuermeBienCliente.vue'
import CalentamientoCliente from '@/views/Cliente/CalentamientoCliente.vue'
import EstiramientoCliente from '@/views/Cliente/EstiramientoCliente.vue'
import PracticarCliente from '@/views/Cliente/PracticarCliente.vue'
import ConsejosCliente from '@/views/Cliente/ConsejosCliente.vue'
import MiPerfilCliente from '@/views/Cliente/MiPerfilCliente.vue'
import EntrenadoresCliente from '@/views/Cliente/EntrenadoresCliente.vue'
import EntrenadorUnoCliente from '@/views/Cliente/EntrenadorUnoCliente.vue'
import EntrenadorDosCliente from '@/views/Cliente/EntrenadorDosCliente.vue'
import EntrenadorTresCliente from '@/views/Cliente/EntrenadorTresCliente.vue'
import EntrenadorCuatroCliente from '@/views/Cliente/EntrenadorCuatroCliente.vue'
import EntrenadorCincoCliente from '@/views/Cliente/EntrenadorCincoCliente.vue'
import EntrenadorSeisCliente from '@/views/Cliente/EntrenadorSeisCliente.vue'
import EntrenadorSieteCliente from '@/views/Cliente/EntrenadorSieteCliente.vue'
import EntrenadorOchoCliente from '@/views/Cliente/EntrenadorOchoCliente.vue'
import MiRutinaCliente from '@/views/Cliente/MiRutinaCliente.vue'
import MiProgresoCliente from '@/views/Cliente/MiProgresoCliente.vue'
import MisReservasCliente from '@/views/Cliente/MisReservasCliente.vue'
import MiDietaCliente from '@/views/Cliente/MiDietaCliente.vue'
import HorariosCliente from '@/views/Cliente/HorariosCliente.vue'
import ContactoCliente from '@/views/Cliente/ContactoCliente.vue'
import UnMesCliente from '@/views/Cliente/UnMesCliente.vue'
import DosMesesCliente from '@/views/Cliente/DosMesesCliente.vue'
import InstalacionesCliente from '@/views/Cliente/InstalacionesCliente.vue'
import TrabajaConNosotrosCliente from '@/views/Cliente/TrabajaConNosotrosCliente.vue'
import MembresiasEmpleado from '@/views/Empleado/MembresiasEmpleado.vue'
import VentasEmpleado from '@/views/Empleado/VentasEmpleado.vue'
import RutinaEmpleado from '@/views/Empleado/RutinaEmpleado.vue'
import ValoracionEmpleado from '@/views/Empleado/ValoracionEmpleado.vue'
import EditarPerfilCliente from '@/views/Cliente/EditarPerfilCliente.vue'
import MiPerfilEmpleado from '@/views/Empleado/MiPerfilEmpleado.vue'
import DietaEmpleado from '@/views/Empleado/DietaEmpleado.vue'
import ReciboMembresia from '@/views/Empleado/ReciboMembresia.vue'
import ProgresoCliente from '@/views/Cliente/ProgresoCliente.vue'
import EnsayoCliente from '@/views/Cliente/EnsayoCliente.vue'
import EditarPerfilAdmin from '@/views/Admin/EditarPerfilAdmin.vue'
import FotosAdmin from '@/views/Admin/FotosAdmin.vue'
import TareasAdmin from '@/views/Admin/TareasAdmin.vue'
import PlanesAdmin from '@/views/Admin/PlanesAdmin.vue'
import ClasesAdmin from '@/views/Admin/ClasesAdmin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Cliente/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Admin/email-admin',
      name: 'email-admin',
      component: EmailAdmin
    },
    {
      path: '/Admin/registro-compras',
      name: 'registro-compras',
      component: RegistroCompras
    },
    {
      path: '/Admin/registro-empleados',
      name: 'registro-empleados',
      component: RegistroEmpleados
    },
    {
      path: '/Admin/gestion-clases',
      name: 'gestion-clases',
      component: GestionClases
    },
    {
      path: '/Admin/proveedores-admin',
      name: 'proveedores-admin',
      component: ProveedoresAdmin
    },
    {
      path: '/Admin/registro-ventas',
      name: 'registro-ventas',
      component: RegistroVentas
    },
    {
      path: '/Admin/novedades',
      name: 'novedades',
      component: Novedades
    },
    {
      path: '/Admin/tips',
      name: 'tips',
      component: Tips
    },
    {
      path: '/Admin/instalacionesAdmin',
      name: 'instalacionesAdmin',
      component: InstalacionesAdmin
    },
    {
      path: '/Cliente/planes-cliente',
      name: 'planes-cliente',
      component: PlanesCliente
    },
    {
      path: '/Cliente/plan-tres-meses-cliente',
      name: 'plan-tres-meses-cliente',
      component: PlanTresMesesCliente
    },
    {
      path: '/Cliente/plan-seis-meses-cliente',
      name: 'plan-seis-meses-cliente',
      component: PlanSeisMesesCliente
    },
    {
      path: '/Cliente/plan-doce-meses-cliente',
      name: 'plan-doce-meses-cliente',
      component: PlanDoceMesesCliente
    },
    {
      path: 'Cliente/un-mes-cliente',
      name: 'un-mes-cliente',
      component: UnMesCliente
    },
    {
      path: '/Cliente/ensayo-cliente',
      name: 'ensayo-cliente',
      component: EnsayoCliente
    },
    {
      path: '/Cliente/dos-meses-cliente',
      name: 'dos-meses-cliente',
      component: DosMesesCliente
    },
    {
      path: '/Cliente/plan-quince-meses-cliente',
      name: 'plan-quince-meses-cliente',
      component: PlanQuinceMesesCliente
    },
    {
      path: '/Cliente/hard-vital-cliente',
      name: 'hard-vital-cliente',
      component: HardVitalCliente
    },
    {
      path: '/Cliente/neurofitness-cliente',
      name: 'neurofitness-cliente',
      component: NeurofitnessCliente
    },
    {
      path: '/Cliente/personalizados-cliente',
      name: 'personalizados-cliente',
      component: PersonalizadosCliente
    },
    {
      path: '/Cliente/clases-grupales-cliente',
      name: 'clases-grupales-cliente',
      component: ClasesGrupalesCliente
    },
    {
      path: '/Cliente/shiatsu-cliente',
      name: 'shiatsu-cliente',
      component: ShiatsuCliente
    },
    {
      path: '/Cliente/spinning-cliente',
      name: 'spinning-cliente',
      component: SpinningCliente
    },
    {
      path: '/Cliente/aerobicos-cliente',
      name: 'aerobicos-cliente',
      component: AerobicosCliente
    },
    {
      path: '/Cliente/crossfit-cliente',
      name: 'crossfit-cliente',
      component: CrossfitCliente
    },
    {
      path: '/Cliente/entrenamiento-cliente',
      name: 'entrenamiento-cliente',
      component: EntrenamientoCliente
    },
    {
      path: '/Cliente/cardio-cliente',
      name: 'cardio-cliente',
      component: CardioCliente
    },
    {
      path: '/Cliente/hard-cliente',
      name: 'hard-cliente',
      component: HardCliente
    },
    {
      path: '/Cliente/rumba-cliente',
      name: 'rumba-cliente',
      component: RumbaCliente
    },
    {
      path: '/Cliente/multiterreno-cliente',
      name: 'multiterreno-cliente',
      component: MultiterrenoCliente
    },
    {
      path: '/Cliente/registro-cliente',
      name: 'registro-cliente',
      component: RegistroCliente
    },
    {
      path: '/Cliente/lo-nuevo-cliente',
      name: 'lo-nuevo-cliente',
      component: LoNuevoCliente
    },
    {
      path: '/Cliente/noticias-cliente',
      name: 'noticias-cliente',
      component: NoticiasCliente
    },
    {
      path: '/Cliente/noticias-belleza-cliente',
      name: 'noticias-belleza-cliente',
      component: NoticiasBellezaCliente
    },
    {
      path: '/Cliente/clave-cliente',
      name: 'clave-cliente',
      component: ClaveCliente
    },
    {
      path: '/Cliente/perder-grasa-cliente',
      name: 'perder-grasa-cliente',
      component: PerderGrasaCliente
    },
    {
      path: '/Cliente/mente-equilibrio-cliente',
      name: 'mente-equilibrio-cliente',
      component: MenteEquilibrioCliente
    },
    {
      path: '/Cliente/miss-universo-cliente',
      name: 'miss-universo-cliente',
      component: MissUniversoCliente
    },
    {
      path: '/Cliente/motivarte-cliente',
      name: 'motivarte-cliente',
      component: MotivarteCliente
    },
    {
      path: '/Cliente/vida-saludable-cliente',
      name: 'vida-saludable-cliente',
      component: VidaSaludableCliente
    },
    {
      path: '/Cliente/pilates-cliente',
      name: 'pilates-cliente',
      component: PilatesCliente
    },
    {
      path: '/Cliente/bienestar-cliente',
      name: 'bienestar-cliente',
      component: BienestarCliente
    },
    {
      path: '/Cliente/correr-cliente',
      name: 'correr-cliente',
      component: CorrerCliente
    },
    {
      path: '/Cliente/fisico-cliente',
      name: 'fisico-cliente',
      component: FisicoCliente
    },
    {
      path: '/Cliente/nutricionista-cliente',
      name: 'nutricionista-cliente',
      component: NutricionistaCliente
    },
    {
      path: '/Cliente/nuevas-rutinas-cliente',
      name: 'nuevas-rutinas-cliente',
      component: NuevasRutinasCliente
    },
    {
      path: '/Cliente/actividad-fisica-cliente',
      name: 'actividad-fisica-cliente',
      component: ActividadFisicaCliente
    },
    {
      path: '/Cliente/masa-muscular-cliente',
      name: 'masa-muscular-cliente',
      component: MasaMuscularCliente
    },
    {
      path: '/Cliente/hiit-cliente',
      name: 'hiit-cliente',
      component: HiitCliente
    },
    {
      path: '/Cliente/tips-cliente',
      name: 'tips-cliente',
      component: TipsCliente
    },
    {
      path: '/Cliente/ejercicio-fisico-cliente',
      name: 'ejercicio-fisico-cliente',
      component: EjercicioFisicoCliente
    },
    {
      path: '/Cliente/hidratacion-cliente',
      name: 'hidratacion-cliente',
      component: HidratacionCliente
    },
    {
      path: '/Cliente/minutos-cliente',
      name: 'minutos-cliente',
      component: MinutosCliente
    },
    {
      path: '/Cliente/carbohidratos-cliente',
      name: 'carbohidratos-cliente',
      component: CarbohidratosCliente
    },
    {
      path: '/Cliente/duerme-bien-cliente',
      name: 'duerme-bien-cliente',
      component: DuermeBienCliente
    },
    {
      path: '/Cliente/calentamiento-cliente',
      name: 'calentamiento-cliente',
      component: CalentamientoCliente
    },
    {
      path: '/Cliente/estiramiento-cliente',
      name: 'estiramiento-cliente',
      component: EstiramientoCliente
    },
    {
      path: '/Cliente/practicar-cliente',
      name: 'practicar-cliente',
      component: PracticarCliente
    },
    {
      path: '/Cliente/consejos-cliente',
      name: 'consejos-cliente',
      component: ConsejosCliente
    },
    {
      path: '/Cliente/contacto-cliente',
      name: 'contacto-cliente',
      component: ContactoCliente
    },
    {
      path: '/Cliente/mi-perfil-cliente',
      name: 'mi-perfil-cliente',
      component: MiPerfilCliente
    },
    {
      path: '/Cliente/mi-progreso-cliente',
      name: 'mi-progreso-cliente',
      component: MiProgresoCliente
    },
    {
      path: '/Cliente/mi-rutina-cliente',
      name: 'mi-rutina-cliente',
      component: MiRutinaCliente
    },
    {
      path: '/Cliente/mis-reservas-cliente',
      name: 'mis-reservas-cliente',
      component: MisReservasCliente
    },
    {
      path: '/Cliente/mi-dieta-cliente',
      name: 'mi-dieta-cliente',
      component: MiDietaCliente
    },
    {
      path: '/Cliente/horarios-cliente',
      name: 'horarios-cliente',
      component: HorariosCliente
    },
    {
      path: '/Cliente/entrenadores-cliente',
      name: 'entrenadores-cliente',
      component: EntrenadoresCliente
    },
    {
      path: '/Cliente/entrenador-uno-cliente',
      name: 'entrenador-uno-cliente',
      component: EntrenadorUnoCliente
    },
    {
      path: '/Cliente/entrenador-dos-cliente',
      name: 'entrenador-dos-cliente',
      component: EntrenadorDosCliente
    },
    {
      path: '/Cliente/entrenador-tres-cliente',
      name: 'entrenador-tres-cliente',
      component: EntrenadorTresCliente
    },
    {
      path: '/Cliente/entrenador-cuatro-cliente',
      name: 'entrenador-cuatro-cliente',
      component: EntrenadorCuatroCliente
    },
    {
      path: '/Cliente/entrenador-cinco-cliente',
      name: 'entrenador-cinco-cliente',
      component: EntrenadorCincoCliente
    },
    {
      path: '/Cliente/entrenador-seis-cliente',
      name: 'entrenador-seis-cliente',
      component: EntrenadorSeisCliente
    },
    {
      path: '/Cliente/entrenador-siete-cliente',
      name: 'entrenador-siete-cliente',
      component: EntrenadorSieteCliente
    },
    {
      path: '/Cliente/entrenador-ocho-cliente',
      name: 'entrenador-ocho-cliente',
      component: EntrenadorOchoCliente
    },
    {
      path: '/Cliente/trabaja-con-nosotros-cliente',
      name: 'trabaja-con-nosotros-cliente',
      component: TrabajaConNosotrosCliente
    },
    {
      path: '/Cliente/instalaciones-cliente',
      name: 'instalaciones-cliente',
      component: InstalacionesCliente
    },
    {
      path: '/Empleado/membresias-empleado',
      name: 'membresias-empleado',
      component: MembresiasEmpleado
    },
    {
      path: '/Empleado/dieta-empleado',
      name: 'dieta-empleado',
      component: DietaEmpleado
    },
    {
      path: '/Empleado/ventas-empleado',
      name: 'ventas-empleado',
      component: VentasEmpleado
    },
    {
      path: '/Empleado/rutina-empleado',
      name: 'rutina-empleado',
      component: RutinaEmpleado
    },
    {
      path: '/Empleado/valoracion-empleado',
      name: 'valoracion-empleado',
      component: ValoracionEmpleado
    },
    {
      path: '/Cliente/Editar-Perfil-Cliente',
      name: 'Editar-Perfil-Cliente',
      component: EditarPerfilCliente
    },
    {
      path: '/Empleado/mi-perfil-empleado',
      name: 'mi-perfil-empleado',
      component: MiPerfilEmpleado
    },
    {
      path: '/Empleado/recibo-membresia',
      name: 'recibo-membresia',
      component: ReciboMembresia
    },
    {
      path: '/Cliente/progreso-cliente',
      name: 'progreso-cliente',
      component: ProgresoCliente
    },
    {
      path: '/Admin/editar-perfil-admin',
      name: 'editar-perfil-admin',
      component: EditarPerfilAdmin
    },
    {
      path: '/Admin/fotos-admin',
      name: 'fotos-admin',
      component: FotosAdmin
    },
    {
      path: '/Admin/tareas-admin',
      name: 'tareas-admin',
      component: TareasAdmin
    },
    {
      path: '/Admin/planes-admin',
      name: 'planes-admin',
      component: PlanesAdmin
    },
    {
      path: '/Admin/clases-admin',
      name: 'clases-admin',
      component: ClasesAdmin
    }
  ]
})
