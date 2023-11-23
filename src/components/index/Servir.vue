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
                  src="../../assets/cultos/76.png"
                ></v-img>

                <v-card-text>
                  <h2>Culto 19 de Noviembre </h2>
                  Entre 2 caminos, un mensaje que nos desafía.
                </v-card-text>

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#ff6347">
                    <v-btn href="https://www.youtube.com/watch?v=n9gjzIp_M8s" target="blank">Ver Culto</v-btn>
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
                  src="../../assets/cultos/75.png"
                ></v-img>

                <v-card-text>
                  <h3>Culto 12 de Noviembre</h3>
                  Cuando la mejor opción es avanzar, ¡Entra y descubre de que se trata!.
                </v-card-text>

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#078e3e" class="over">
                    <v-btn href="https://www.youtube.com/watch?v=1L801o5W4UQ" target="blank">Ver Culto</v-btn>
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
                  src="../../assets/cultos/74.png"
                ></v-img>

                <v-card-text>
                  <h2>Culto 5 de Noviembre</h2>
                  ¡Ve nuestro culto de aniversario con nuestro pastor fundador!
                </v-card-text>

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#ff6347">
                    <v-btn href="https://www.youtube.com/watch?v=YF49r08xRU8" target="blank">Ver Culto</v-btn>
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