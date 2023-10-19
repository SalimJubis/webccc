<template>
  <div class="caja" style="background-color: #333;">
    <br><br>
    <h1 data-aos="fade-right" data-aos-duration="1500" style="text-align: center; color: white;">Escucha el mensaje de nuestras predicaciones</h1>
    <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" style="color: white; text-align: center;">
      Para más mensajes haz click <a href="https://www.youtube.com/watch?v=T-_3jTpPP7M&list=PLUZ_we2_u5jNhHWyV3ZPFKAITGi4cBOP1&index=60" target="_blank" style="color: tomato;">aquí</a>.
    </p>
    <br><br>
    <div class="box">
      <div id="culto" class="section">
        <div class="content">
          <h1>¿A dónde van los creyentes?</h1>
          <div class="container">
            <p class="cultoP">
              Un pregunta que muchos se hacen pero que es esencial para una vida en la dirección correcta.
            </p>
            <div class="row botones">
              <v-btn href="https://www.youtube.com/watch?v=RpmsoeeFeQI" target="blank" class="col-md-4 b1" outlined rounded
                dark>Ver Mensaje</v-btn>
            </div>
          </div>
        </div>
        <div class="overlay"></div>
      </div>
      <div id="grupos" class="section">
        <div class="content">
          <h1>Cansados en el entre-tiempo</h1>
          <p class="gruposP">
            ¡Un mensaje para renovar nuestras fuerzas!
          </p>

          <v-btn href="https://www.youtube.com/watch?v=15oWuNwowfU" target="blank" class="col-md-4 b2" outlined rounded
            dark>Ver Mensaje</v-btn>
        </div>
        <div class="overlay"></div>
      </div>
      <div id="formacion" class="section">
        <div class="content">
          <h1>¡Construyamos un puente!</h1>
          <p class="fomacionP">
            Una mensaje que nos desafía a ser más como Jesús.
          </p>

          <v-btn href="https://www.youtube.com/watch?v=LWQmWBtfkwY" target="blank" class="col-md-4 b3" outlined rounded
            dark>Ver Mensaje</v-btn>
        </div>
        <div class="overlay"></div>
      </div>
    </div>
</div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}

.box {
  display: flex;
  height: 70vh;
}

.section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  color: #fff;
  transition: flex 0.4s ease;
  position: relative;
}

.section .overlay {
  background-color: rgba(0, 0, 0, 0.423);
  width: 100%;
  height: 100%;
  position: absolute;
  transition: background-color 0.8s ease;
}

.section .content {
  z-index: 2;
  text-align: center;
}

.section:hover {
  flex: 2;
}

.section:hover .overlay {
  background-color: rgba(0, 0, 0, 0.735);
}

#culto p {
  display: none;
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}

#grupos p {
  display: none;
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}

#formacion p {
  display: none;
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}

.b1 {
  display: none;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}

.b2 {
  display: none;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}

a {
  text-decoration: none;
  margin: 0 auto !important;
  text-align: center !important;
  justify-content: center !important;
}

.b3 {
  display: none;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}

#culto:hover p {
  display: block;
}

#culto:hover .b1 {
  display: block;
}

#grupos:hover p {
  display: block;
}

#grupos:hover .b2 {
  display: block;
}

#formacion:hover p {
  display: block;
}

#formacion:hover .b3 {
  display: block;
}

#culto {
  background-image: url(../../assets/cultos/alberto.png);
}

#grupos {
  background-image: url(../../assets/cultos/eric.png);
}

#formacion {
  background-image: url(../../assets/cultos/leti.png);
}</style>