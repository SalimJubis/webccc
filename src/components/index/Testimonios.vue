<template>
  <div class="caja">
    <br />
    <h1 data-aos="fade-right" data-aos-duration="1500">Testimonios</h1>
    <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
      Una pequeña historia de algunos miembros de nuestra iglesia.
    </p>
    <div class="container testis">
      <figure class="snip1157" data-aos="fade-up" data-aos-duration="1500">
        <blockquote>
          En un momento de crisis física y espiritual en mi historia de vida, Jesús salió a mi encuentro con un regalo
          llamado Iglesia CCC. Hoy la considero mi hogar, un refugio cálido y acogedor que me inundó paz, consuelo, guía y
          por sobre todo amor a través de una hermosa familia que hoy me ha entregado herramientas para seguir creciendo y
          experimentar mas a Jesús en mi vida.
          Es un honor y privilegio ser parte de ella, y ahora poder recibir nuevos corazones necesitados como lo fui yo un
          día
          <div class="arrow"></div>
        </blockquote>
        <img src="@/assets/img/tabi.png" alt="sq-sample3" />
        <div class="author">
          <h5>Tabita Alarcón <span> Miembro hace 3 años</span></h5>
        </div>
      </figure>
      <figure class="snip1157" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
        <blockquote>
          Para mí la iglesia ha sido un apoyo fundamental, hace tiempo atrás tuve un accidente muy grave, y las damas de
          la iglesia siempre estuvieron ahí apoyándome en todo, en tanto como en trámites como apoyo espiritual y estando
          ahí siempre conmigo, me sentí todo ese tiempo amada, querida y valorada.
          <div class="arrow"></div>
        </blockquote>
        <img src="@/assets/img/valeska.png" alt="sq-sample17" />
        <div class="author">
          <h5>Valeska Jubis<span> Miembro hace más de 15 años</span></h5>
        </div>
      </figure>
      <figure class="snip1157 hover" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
        <blockquote>
          CCC es un lugar en el que puedes servir a las personas de acuerdo con los dones que Dios te da, lo que es muy
          gratificante para el alma.
          <div class="arrow"></div>
        </blockquote>
        <img src="@/assets/img/orozco.png" alt="sq-sample27" />
        <div class="author">
          <h5>Oscar Orozco<span> Miembro hace 10 años</span></h5>
        </div>
      </figure>
    </div>
    <div class="margen"></div>
  </div>
</template>
<style scoped>
.margen {
  height: 100px;
}

.testis {
  margin: 0 auto !important;
}

h1 {
  margin-top: 50px !important;
  text-align: center;
  font-family: rustica, sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #ffffff;
}

p {
  text-align: center;

  color: #ffffff;
}

@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,800);

figure.snip1157 {
  font-family: "Raleway", Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 220px;
  max-width: 310px;
  width: 100%;
  color: #333;
  text-align: left;
  box-shadow: none !important;
}

figure.snip1157 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s cubic-bezier(0.25, 0.5, 0.5, 0.9);
  transition: all 0.35s cubic-bezier(0.25, 0.5, 0.5, 0.9);
}

figure.snip1157 img {
  max-width: 100%;
  vertical-align: middle;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  margin: 40px 0 0 10px;
}

figure.snip1157 blockquote {
  display: block;
  border-radius: 8px;
  position: relative;
  background-color: #fafafa;
  padding: 25px 50px 30px 50px;
  font-size: 0.8em;
  font-weight: 500;
  margin: 0;
  line-height: 1.6em;
  font-style: italic;
}

figure.snip1157 blockquote:before,
figure.snip1157 blockquote:after {
  font-family: "FontAwesome";
  content: "\201C";
  position: absolute;
  font-size: 50px;
  opacity: 0.3;
  font-style: normal;
}

figure.snip1157 blockquote:before {
  top: 25px;
  left: 20px;
}

figure.snip1157 blockquote:after {
  content: "\201D";
  right: 20px;
  bottom: 0;
}

figure.snip1157 .arrow {
  top: 100%;
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid #fafafa;
  margin: 0;
  position: absolute;
}

figure.snip1157 .author {
  position: absolute;
  bottom: 45px;
  padding: 0 10px 0 120px;
  margin: 0;
  text-transform: uppercase;
  color: #ffffff;
  -webkit-transform: translateY(50%);
  transform: translateY(50%);
}

figure.snip1157 .author h5 {
  opacity: 0.8;
  margin: 0;
  font-weight: 800;
}

figure.snip1157 .author h5 span {
  font-weight: 400;
  text-transform: none;
  padding-left: 5px;
}

.caja {
  background-color: #212121;
}

.testis {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  margin: 0;
}</style>