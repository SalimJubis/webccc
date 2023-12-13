<template>
  <div class="container">
    <h1 class="titulo" data-aos="fade-up" data-aos-duration="1500">
      Participa del culto dominical
    </h1>
    <h4 data-aos="fade-up" data-aos-duration="1500" datata-aos-delay="300">
      Todos los domingos a las 11:00, puedes participar de forma presencial (<a href="#encuentranos" style="color:tomato">ver ubicación</a>) o de forma online.
    </h4>
    <v-container>
      <div class="row">
        <div class="col-md-4" data-aos="fade-up" data-aos-duration="1500">
          <v-hover class="pa-0">
            <template v-slot:default="{ hover }">
              <v-card class="mx-auto" max-width="344" height="365">
                <v-img
                  src="../../assets/cultos/nadie.jpg"
                ></v-img>

                <v-card-text>
                  <h2>Culto 10 de Diciembre </h2>
                  ¿Cómo vencer un gigante? Un mensaje que nos confronta.
                </v-card-text>

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#ff6347">
                    <v-btn href="https://www.youtube.com/watch?v=PZTBX3-LGAw" target="blank">Ver Culto</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </div>
        <div
          class="col-md-4"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <v-hover class="pa-0">
            <template v-slot:default="{ hover }">
              <v-card class="mx-auto" max-width="344" height="365">
                <v-img
                  src="../../assets/cultos/gigante.jpg"
                ></v-img>

                <v-card-text>
                  <h3>Culto 3 de Diciembre </h3>
                  ¿Cómo vencer un gigante? Un mensaje que nos confronta.
                </v-card-text>

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#078e3e" class="over">
                    <v-btn href="https://youtube.com/live/ljdxxqdnjc4" target="blank">Ver Culto</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </div>
        <div
          class="col-md-4"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="600"
        >
          <v-hover class="pa-0">
            <template v-slot:default="{ hover }">
              <v-card class="mx-auto" max-width="344" height="365">
                <v-img
                  src="../../assets/cultos/acua.jpg"
                ></v-img>

                <v-card-text>
                  <h2>Culto 26 de Noviembre</h2>
                  ¡Ven a sumergirte a lo que Dios tiene para tu vida!.
                </v-card-text>

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#ff6347">
                    <v-btn href="https://youtube.com/live/v9FMBvfCHzw" target="blank">Ver Culto</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </div>
      </div>
    </v-container>
  </div>
</template>
<style scoped>
h1 {
  text-align: center !important;
  font-family: rustica, sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #078e3e;
  font-size: 300%;
}

h2 {
  font-family: rustica, sans-serif;
  color: #ff6347;
  font-weight: 700;
}

h3 {
  font-family: rustica, sans-serif;
  color: #078e3e;
  font-weight: 700;
  font-size: 220%;
}
h4 {
  font-size: x-large;
  font-family: rustica, sans-serif;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  font-size: 140%;
}

.over {
  text-align: center;
}
</style>
<script>
export default {
  data: () => ({
    overlay: false,
  }),
};
</script>