<template>
    <div id="app" class="container mt-5">
      <b-card title="Actividades Lunes">
        <b-form @submit.prevent="enviarFormulario">
          <!-- Campo para el número con etiqueta "Día" -->
          <b-form-group label="Numero de día" label-for="numeroDia">
            <b-form-input v-model="formulario.numeroDia" type="number" id="numeroDia" required></b-form-input>
          </b-form-group>
  
          <!-- Campos para las actividades -->
          <b-form-group v-for="(actividad, index) in formulario.actividades" :key="index" :label="'Actividad ' + (index + 1)">
            <b-form-input :value="actividad" :type="'text'" @input="actualizarActividad(index, $event)" required></b-form-input>
          </b-form-group>
  
          <!-- Botón de enviar -->
          <b-button type="submit" variant="primary">Enviar</b-button>
        </b-form>
      </b-card>
      <br>
      <b-card title="Actividades Martes">
        <b-form @submit.prevent="enviarFormulario">
          <!-- Campo para el número con etiqueta "Día" -->
          <b-form-group label="Numero de día" label-for="numeroDia">
            <b-form-input v-model="formulario.numeroDia" type="number" id="numeroDia" required></b-form-input>
          </b-form-group>
  
          <!-- Campos para las actividades -->
          <b-form-group v-for="(actividad, index) in formulario.actividades" :key="index" :label="'Actividad ' + (index + 1)">
            <b-form-input :value="actividad" :type="'text'" @input="actualizarActividad(index, $event)" required></b-form-input>
          </b-form-group>
  
          <!-- Botón de enviar -->
          <b-button type="submit" variant="primary">Enviar</b-button>
        </b-form>
      </b-card>
      <br>
      <b-card title="Actividades Miércoles">
        <b-form @submit.prevent="enviarFormulario">
          <!-- Campo para el número con etiqueta "Día" -->
          <b-form-group label="Numero de día" label-for="numeroDia">
            <b-form-input v-model="formulario.numeroDia" type="number" id="numeroDia" required></b-form-input>
          </b-form-group>
  
          <!-- Campos para las actividades -->
          <b-form-group v-for="(actividad, index) in formulario.actividades" :key="index" :label="'Actividad ' + (index + 1)">
            <b-form-input :value="actividad" :type="'text'" @input="actualizarActividad(index, $event)" required></b-form-input>
          </b-form-group>
  
          <!-- Botón de enviar -->
          <b-button type="submit" variant="primary">Enviar</b-button>
        </b-form>
      </b-card>
      <br>
      <b-card title="Actividades Jueves">
        <b-form @submit.prevent="enviarFormulario">
          <!-- Campo para el número con etiqueta "Día" -->
          <b-form-group label="Numero de día" label-for="numeroDia">
            <b-form-input v-model="formulario.numeroDia" type="number" id="numeroDia" required></b-form-input>
          </b-form-group>
  
          <!-- Campos para las actividades -->
          <b-form-group v-for="(actividad, index) in formulario.actividades" :key="index" :label="'Actividad ' + (index + 1)">
            <b-form-input :value="actividad" :type="'text'" @input="actualizarActividad(index, $event)" required></b-form-input>
          </b-form-group>
  
          <!-- Botón de enviar -->
          <b-button type="submit" variant="primary">Enviar</b-button>
        </b-form>
      </b-card>
      <br>
      <b-card title="Actividades Viernes">
        <b-form @submit.prevent="enviarFormulario">
          <!-- Campo para el número con etiqueta "Día" -->
          <b-form-group label="Numero de día" label-for="numeroDia">
            <b-form-input v-model="formulario.numeroDia" type="number" id="numeroDia" required></b-form-input>
          </b-form-group>
  
          <!-- Campos para las actividades -->
          <b-form-group v-for="(actividad, index) in formulario.actividades" :key="index" :label="'Actividad ' + (index + 1)">
            <b-form-input :value="actividad" :type="'text'" @input="actualizarActividad(index, $event)" required></b-form-input>
          </b-form-group>
  
          <!-- Botón de enviar -->
          <b-button type="submit" variant="primary">Enviar</b-button>
        </b-form>
      </b-card>
      <br>
      <b-card title="Actividades Sábado">
        <b-form @submit.prevent="enviarFormulario">
          <!-- Campo para el número con etiqueta "Día" -->
          <b-form-group label="Numero de día" label-for="numeroDia">
            <b-form-input v-model="formulario.numeroDia" type="number" id="numeroDia" required></b-form-input>
          </b-form-group>
  
          <!-- Campos para las actividades -->
          <b-form-group v-for="(actividad, index) in formulario.actividades" :key="index" :label="'Actividad ' + (index + 1)">
            <b-form-input :value="actividad" :type="'text'" @input="actualizarActividad(index, $event)" required></b-form-input>
          </b-form-group>
  
          <!-- Botón de enviar -->
          <b-button type="submit" variant="primary">Enviar</b-button>
        </b-form>
      </b-card>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      formulario: {
        numeroDia: '',
        actividades: ['', '', '', '']
      },
      apiUrl: 'http://localhost:3000/api/agenda', // Ajusta la URL según tu configuración
      datosJson: []
    };
  },
  mounted() {
    this.cargarDatosJson();
  },
  methods: {
    cargarDatosJson() {
  // Realiza una solicitud HTTP para cargar los datos desde la API
  fetch(this.apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      this.datosJson = data;
    })
    .catch(error => {
      console.error('Error al cargar datos JSON:', error);
    });
},
    enviarFormulario() {
      // Realiza una solicitud HTTP para enviar los datos actualizados a la API
      fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.datosJson),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Datos actualizados con éxito:', data);
        })
        .catch(error => {
          console.error('Error al enviar datos JSON:', error);
        });
    }
  }
};
</script>

  
  <style>
  /* Agrega estilos si es necesario */
  </style>
  