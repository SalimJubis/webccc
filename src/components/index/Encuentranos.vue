<template>
  <div class="encuentranos" id="encuentranos">
    <div class="container">
      <h1>
        Nuestra Ubicación
      </h1>
      <h2 data-aos="fade-up" data-aos-duration="1500" datata-aos-delay="300">
        Hoy en Día nos puedes encontrar en las siguientes 2 ubicaciones.
      </h2>
      <br><br><br><br>
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 novo">
          <h1 data-aos="fade-right" data-aos-duration="1500">
            Donde Encontrarnos los Domingos
          </h1>
          <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">
            Encuentranos los días domingos en Martín de Zamora 5576, Las Condes de 11:00 a 12:30 hrs.          </p>
          <div id="carouselExampleSlidesOnly" class="carousel slide carro" data-bs-ride="carousel" data-aos="fade-right"
            data-aos-duration="1500" data-aos-delay="300">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="@/assets/img/principal.png"
                  class="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 mapa">
          <div class="cajota" data-aos="fade-up" data-aos-duration="1500">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.288115834762!2d-70.57218132202286!3d-33.41573209573908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cee14262f3d5%3A0x4b567a9842466110!2sMart%C3%ADn%20de%20Zamora%205576%2C%207580145%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1695401334400!5m2!1ses-419!2scl"
            width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
      <br><br><br>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 primero">
            <iframe class="i2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.389606433841!2d-70.56939249999999!3d-33.4130855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cee0c315c5f9%3A0x4398e173313b3335!2sLa%20Capitan%C3%ADa%20500%2C%207580083%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1695401255138!5m2!1ses-419!2scl"
              width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div class="col-md-6 novo1">
          <h1 >
            Donde Encontrarnos en la semana
          </h1>
          <p >
            Encuentranos durante la semana en nuestra casa ubicada en La Capitanía 500, Las Condes.
          </p>
            <img
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              class="d-block w-100" alt="..." />
        </div>
        <div class="col-md-6 segundo" style="display: none">
            <iframe class="i2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.389606433841!2d-70.56939249999999!3d-33.4130855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cee0c315c5f9%3A0x4398e173313b3335!2sLa%20Capitan%C3%ADa%20500%2C%207580083%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1695401255138!5m2!1ses-419!2scl"
              width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
      
    </div>
    
    <br><br><br><br><br>
  </div>
  
</template>
<style scoped>
iframe {
  border-radius: 15px !important;
  box-shadow: rgba(0, 0, 0, 0.178) 0.1em 0.1em 0.2em;
}

.novo h1 {
  font-family: rustica, sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #078e3e;
}

.novo p {
  font-size: larger;
  font-family: rustica, sans-serif;
  font-weight: 500;
  font-style: normal;
}

.novo img {
  border-radius: 15px !important;
  max-height: 320px;
}

.novo1{
  justify-content: right !important;
  text-align: end;
  margin-left: 0px;
}

.novo1 h1 {
  font-family: rustica, sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #078e3e;
  text-align: right !important;
}

.novo1 p {
  font-size: larger;
  font-family: rustica, sans-serif;
  font-weight: 500;
  font-style: normal;
  text-align: right !important;
}

.novo1 img {
  border-radius: 15px !important;
  max-height: 320px;
  margin-right: 200px !important;
}

@media screen and (max-width: 1232px) {
  iframe {
    width: 550px !important;
  }
}

@media screen and (max-width: 1128px) {
  iframe {
    width: 500px !important;
  }
}

@media screen and (max-width: 1034px) {
  iframe {
    width: 450px !important;
    height: 415px !important;
  }
}

@media screen and (max-width: 926px) {
  iframe {
    width: 400px !important;
    height: 415px !important;
  }
}

@media screen and (max-width: 820px) {
  iframe {
    width: 350px !important;
    height: 410px !important;
  }
}

@media screen and (max-width: 768px) {
  iframe {
    width: 510px !important;
    height: 415px !important;
  }
  .segundo{
    display: block !important;
  }
  .primero{
    display: none;
  }
}

@media screen and (max-width: 516px) {
  iframe {
    width: 490px !important;
  }
}

@media screen and (max-width: 496px) {
  iframe {
    width: 470px !important;
  }
}

@media screen and (max-width: 480px) {
  iframe {
    width: 450px !important;
  }
}

@media screen and (max-width: 460px) {
  iframe {
    width: 430px !important;
  }
}

@media screen and (max-width: 440px) {
  iframe {
    width: 410px !important;
  }
}

@media screen and (max-width: 420px) {
  iframe {
    width: 390px !important;
  }
}

@media screen and (max-width: 400px) {
  iframe {
    width: 370px !important;
  }
}

@media screen and (max-width: 380px) {
  iframe {
    width: 340px !important;
  }
}

@media screen and (max-width: 360px) {
  iframe {
    width: 330px !important;
  }
}

@media screen and (max-width: 340px) {
  iframe {
    width: 310px !important;
  }
}

/* otro */
@media screen and (max-width: 1310px) {
  .i2 {
    width: 500px !important;
  }
}

@media screen and (max-width: 1232px) {
  .i2 {
    width: 450px !important;
  }
}

@media screen and (max-width: 1128px) {
  .i2 {
    width: 400px !important;
  }
}

@media screen and (max-width: 1034px) {
  .i2 {
    width: 450px !important;
    height: 415px !important;
  }
}

@media screen and (max-width: 990px) {
  .i2 {
    width: 340px !important;
    height: 415px !important;
  }
}

@media screen and (max-width: 926px) {
  .i2 {
    width: 340px !important;
    height: 415px !important;
  }
}

@media screen and (max-width: 820px) {
  .i2 {
    width: 350px !important;
    height: 410px !important;
  }
}

@media screen and (max-width: 760px) {
  .i2 {
    width: 510px !important;
    height: 415px !important;
  }
}

@media screen and (max-width: 516px) {
  .i2 {
    width: 490px !important;
  }
}

@media screen and (max-width: 496px) {
  .i2 {
    width: 470px !important;
  }
}

@media screen and (max-width: 480px) {
  .i2 {
    width: 450px !important;
  }
}

@media screen and (max-width: 460px) {
  .i2 {
    width: 430px !important;
  }
}

@media screen and (max-width: 440px) {
  .i2 {
    width: 410px !important;
  }
}

@media screen and (max-width: 420px) {
  .i2 {
    width: 390px !important;
  }
}

@media screen and (max-width: 400px) {
  .i2 {
    width: 370px !important;
  }
}

@media screen and (max-width: 380px) {
  .i2 {
    width: 340px !important;
  }
}

@media screen and (max-width: 360px) {
  .i2 {
    width: 330px !important;
  }
}

@media screen and (max-width: 340px) {
  .i2 {
    width: 310px !important;
  }
}

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

</style>