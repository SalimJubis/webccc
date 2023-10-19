<template>
  <div class="container">
    <h1>
      Somos una iglesia cristiana, que desea compartir el mensaje del amor de
      Jesucristo a todo el mundo
    </h1>
    <h2 data-aos="fade-up" data-aos-duration="1500" datata-aos-delay="300">
      Por eso amamos a las personas y lo reflejamos compartiendo todo lo que
      hacemos para su bienestar y crecimiento espiritual. Nuestra motivación
      viene de las enseñanzas de la palabra de Dios y su compañía por medio del
      Espíritu Santo.
    </h2>
    <div class="botones">
      <button type="button" class="btn btn-primary btn-lg" id="botonMedio" data-aos="fade-up"
        data-aos-duration="1500">
        <router-link class="nav-link" to="/nosotros">Saber más</router-link>
      </button>
    </div>
  </div>
</template>
<style scoped>
h1 {
  margin-top: 50px !important;
  text-align: center;
  margin-top: 30px;
  font-family: rustica, sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #078e3e;
  font-size: 250%;
}

h2 {
  font-size: x-large;
  font-family: rustica, sans-serif;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  font-size: 140%;
}
.botones{
  margin-top: 50px;
  text-align: center;
}
.botones button {
  border-radius: 50px;
  background-color: tomato !important;
  border: none;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: 0.2s;
  margin-left: 15px !important;
  transition-duration: 0.2s !important;
  text-align: center;
}

.botones a {
  color: white !important;
  text-decoration: none;
  transition-duration: 0.2s !important;
}

.botones button:hover {
  size: 10% !important;
  transition: 0.2s !important;
  transition-delay: 0ms !important;
  animation-delay: 0ms !important;
  transition-duration: 0.2s !important;
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}
</style>