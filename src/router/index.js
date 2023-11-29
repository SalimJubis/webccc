import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import Dar from '../components/Dar.vue'
import Nosotros from '../components/Nosotros.vue'
import Ayuda from '../components/Ayuda.vue'
import Grupos from '../components/Grupos.vue'
import Formacion from '../components/Formacion.vue'
import Misiones from '../components/Misiones.vue'
import Contactanos from '../components/Contactanos.vue'
import MiCCC from '../components/Mi-CCC.vue';
import Rotativo from '../components/Rotativo.vue';
import Creativo from '../components/Creativo.vue';
import GruposCasa from '../components/GruposCasa.vue';
import Agenda from '../components/Agenda.vue';
import EditorAgenda from '../components/EditorAgenda.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/dar',
    name: 'Dar',
    component: Dar
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  },
  {
    path: '/ayuda',
    name: 'Ayuda',
    component: Ayuda
  },
  {
    path: '/grupos',
    name: 'Grupos',
    component: Grupos
  },
  {
    path: '/formacion',
    name: 'Formacion',
    component: Formacion
  },
  {
    path: '/misiones',
    name: 'Misiones',
    component: Misiones
  },
  {
    path: '/contactanos',
    name: 'Contactanos',
    component: Contactanos
  },
  {
    path: '/mi-ccc',
    name: 'Mi-CCC',
    component: MiCCC
  },
  {
    path: '/grupos-en-casa',
    name: 'GruposEnCasa',
    component: GruposCasa
  },
  {
    path: '/actividades-semanales',
    name: 'ActividesSemanales',
    component: Agenda
  },
  {
    path: '/rotativo',
    name: 'Rotativo',
    component: Rotativo,
    meta: { hideNavbars: true },
  },
  {
    path: '/creativo',
    name: 'Creativo',
    component: Creativo,
    meta: { hideNavbars: true },
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router


