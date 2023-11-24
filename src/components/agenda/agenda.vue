<template>
  <div style="border: none !important;">
    <div class="card-container" style="border: none !important;">
      <div v-for="(item, index) in agenda" :key="index" >
        <div class="courses-container">
          <div class="course" style="margin: auto !important;">
            <div class="course-preview">
              <h6>Día</h6>
              <h2>{{ item.Dia }} {{ item.Numero }}</h2>
              <a href="#">Saber más <i class="fas fa-chevron-right"></i></a>
            </div>
            <div class="course-info">
              <h2>Actividades</h2>
              <p>{{ item.Actividades }}</p>
              <button class="btn">Ponerme en contacto</button>
            </div>
          </div>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      agenda: [],
    };
  },
  mounted() {
    this.fetchAgendaData();
  },
  methods: {
    fetchAgendaData() {
      axios.get('/agenda.json') // Ajusta la ruta según tu estructura de archivos
        .then(response => {
          console.log('Datos obtenidos de la agenda:', response.data);
          this.agenda = response.data;
        })
        .catch(error => {
          console.error('Error al obtener datos de la agenda:', error);
        });
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

.course {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100%;
  margin: 20px;
  overflow: hidden;
  width: 700px;
}

.course h6 {
  opacity: 0.6;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.course h2 {
  letter-spacing: 1px;
  margin: 10px 0;
}

.course-preview {
  background-color: #2A265F;
  color: #fff;
  padding: 30px;
  max-width: 250px;
}

.course-preview a {
  color: #fff;
  display: inline-block;
  font-size: 12px;
  opacity: 0.6;
  margin-top: 30px;
  text-decoration: none;
}

.course-info {
  padding: 30px;
  position: relative;
  width: 100%;
}

.btn {
  background-color: #2A265F;
  border: 0;
  border-radius: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 16px;
  padding: 12px 25px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  letter-spacing: 1px;
}
</style>

