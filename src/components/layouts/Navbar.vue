<template>
  <section>
    <header>
      <div class="container">
        <b-navbar toggleable="lg" type="dark" class="navv">
          <b-navbar-brand href="/">
            <img src="../../assets/img/logo_new.png" class="d-inline-block align-top" width="200" height="95" />
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse" onclick="divLogin()"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ms-auto">
              <b-nav-item class="m-md-2 navLista" style="color: white !important">
                <router-link class="nav-link" to="/nosotros">Sobre Nosotros</router-link>
              </b-nav-item>

              <b-nav-item class="m-md-2 navLista">
                <router-link class="nav-link"  to="/grupos">Grupos por edades</router-link>
              </b-nav-item>

              <b-nav-item class="m-md-2 navLista">
                <router-link class="nav-link"  to="/grupos-en-casa">Grupos crece</router-link>
              </b-nav-item>

              <b-nav-item class="m-md-2 navLista">
                <router-link class="nav-link" to="/ayuda">Servicio</router-link>
              </b-nav-item>

              <b-nav-item class="m-md-2 navLista">
                <router-link class="nav-link"  to="/misiones">Misiones</router-link>
              </b-nav-item>

              <!-- <b-nav-item class="m-md-2 navLista">
                <router-link class="nav-link"  to="">Somos Parte</router-link>
              </b-nav-item> -->

              <!-- <b-nav-item right class="m-md-2 navLista">
                <router-link class="nav-link"  to="/formacion">Formación</router-link>
              </b-nav-item> -->

              <b-nav-item class="m-md-2">
                <router-link class="nav-link" to="/dar">Dar</router-link>
              </b-nav-item>

              <!-- <b-nav-item class="m-md-2">
                <router-link class="nav-link"  to="/misiones">Misiones</router-link>
              </b-nav-item> -->

              <!-- <b-nav-item class="m-md-2">
                <router-link class="nav-link" to="/contactanos">Contactanos</router-link>
              </b-nav-item> -->
              <!-- <b-nav-item class="m-md-2">
                <router-link class="nav-link"  to="/mi-ccc">Mi CCC</router-link>
              </b-nav-item> -->
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>

    <div class="banner">
      <!-- Div contenedor para el video de fondo -->
      <div class="video-container">
        <video autoplay muted loop class="tagline-video">
          <source src="../../assets/videoNav.mp4" type="video/mp4" />
        </video>
        <div class="overlay"></div>
        <div class="banner-innner">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="banner-left">
                  <div class="titulo">
                    <h1>BIENVENIDO</h1>
                  </div>
                  <div class="subtitulo">
                    <h2>A CENTRO DE CRECIMIENTO CRISTIANO</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.navv {
  color: white !important;
  text-align: center !important;
  font-size: large;
  font-family: skolar-sans-latin, sans-serif;
  font-weight: 600;
  font-style: normal;
}

.navv a {
  color: tomato;
  text-decoration: none;
}

.banner {
  height: 80vh;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.banner video {
  width: 100%;
  position: absolute;
  overflow: hidden;
}

.banner-innner {
  padding: 200px 0;
}

header {
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 11;
}

.banner-left {
  text-align: center;
  margin: 0 auto;
}

.titulo {
  margin-top: 90px;
  font-size: 350% !important;
  font-family: montserrat, sans-serif;
  font-weight: 700;
  font-style: normal;
}

.subtitulo {
  color: #fff;
  font-family: rustica, sans-serif;
  font-weight: 700;
  font-style: normal;
}

.overlay {
  /* background: #3f51b569; */
  background: #00000069;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: auto;
}

.banner-left h1 {
  color: #fff;
  text-transform: uppercase;
  font-size: 42px;
  font-weight: 800;
  line-height: 50px;
}

.banner-left p {
  color: #fff;
  letter-spacing: 0.5px;
}

.botones button {
  border-radius: 50px;
  background-color: tomato !important;
  border: none;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: 0.2s;
  margin-left: 15px !important;
  transition-duration: 0.2s !important;
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

.video-container {
  position: relative;
  width: 100%;
  height: 100vh;
  /* Ajusta la altura según tus necesidades */
  overflow: hidden;
}

/* Estilos para el video */
.tagline-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Esto asegura que el video se ajuste al tamaño del contenedor sin dejar espacios en blanco */
}



/* Estilos personalizados para el menú desplegable en dispositivos móviles */
@media (max-width: 990px) {
  .navbar-toggler .navbar-toggler-icon {
    background-color: white; /* Fondo blanco */
  }

  .navbar-toggler .navbar-toggler-icon:focus {
    outline: none; /* Elimina el contorno de enfoque */
  }

  .navbar-toggler .navbar-toggler-icon span {
    background-color: black; /* Icono de hamburguesa negro */
  }

  /* Estilos personalizados para el menú desplegable en dispositivos móviles */
  .navbar-collapse {
    background-color: white; /* Fondo blanco */
    color: #078e3e; /* Texto negro */
  }

  .navbar-collapse a {
    color: #078e3e !important; /* Color de texto negro */
  }
  .navbar-collapse a:hover {
    background-color: rgb(201, 201, 201) !important; /* Color de texto negro */
  }
}

</style>









