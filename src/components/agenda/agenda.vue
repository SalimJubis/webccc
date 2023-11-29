<template>
  <div style="border: none !important;">
    <div class="card-container" style="border: none !important;">
      <div v-for="(item, index) in jsonData.record" :key="index" >
        <div class="courses-container">
          <div class="course" style="margin: auto !important;">
            <div class="course-preview">
              <h6>Día</h6>
              <h2>{{ item.Dia }} {{ item.Numero }}</h2>
              <a href="#">Saber más <i class="fas fa-chevron-right"></i></a>
            </div>
            <div class="course-info">
              <h2 style="color: tomato;">Actividades</h2>
              <p>{{ item.Actividad1 }}</p>
              <p>{{ item.Actividad2 }}</p>
              <p>{{ item.Actividad3 }}</p>
              <p>{{ item.Actividad4 }}</p>
            </div>
          </div>
        </div>
        <br>
      </div>
    </div>
    <br><br><br><br><br>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jsonData: null,
    };
  },
  mounted() {
    this.fetchJsonData();
  },
  methods: {
    fetchJsonData() {
      const apiUrl = 'https://api.jsonbin.io/v3/b/6567350b0574da7622cdcf40/latest';

      fetch(apiUrl, {
        method: 'GET',
        headers: {
          'X-Master-Key': '$2a$10$DMnH2wrGQmABkRR2GPgUWeJaYTeEeGYMy.QWUFtw89oSFyHlsDh4G',
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error al obtener datos del bin. Código de estado: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          this.jsonData = data;
        })
        .catch(error => {
          console.error('Error al obtener datos del bin:', error);
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
  background-color: #067231;
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
  background-color: tomato;
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

