<template>
	<div>
		<div class="bee-row bee-row-3">
			<div class="bee-row-content">
				<div class="bee-col bee-col-1 bee-col-w12">
					<div class="bee-block bee-block-1 bee-heading" data-aos="fade-down" data-aos-duration="1500">
						<h2
							style="color:#078e3e;direction:ltr;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:56px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
							Voluntariado Social</h2>
					</div>
				</div>
			</div>
		</div>
		<div class="bee-row bee-row-4 container">
			<div class="bee-text-content" data-aos="fade-right" data-aos-duration="2000"
				style="font-size: 14px; line-height: 150%; font-family: inherit; color: #222;">
				<p style="font-size: 18px; line-height: 27px; text-align: center;"><span
						style="font-size: 18px; line-height: 27px;">Si te mueve el voluntariado social. Te invitamos a conocer a nuestro equipo de la Fundación Somos Parte. Esta fundación trabaja con los niños que son atendidos por los programas de Mejor niñez del Gobierno de Chile.</span></p>
				<p style="font-size: 18px; line-height: 27px; text-align: center;"></p>
				<p style="font-size: 18px; line-height: 27px; text-align: center;"><span
						style="font-size: 18px; line-height: 27px;">Brindamos tiempos de compartir la palabra en forma creativa y siempre llevamos algo rico que compartir con los chicos.</span></p>

				<div class="buttons">
					
					<button type="button" class="btn btn-primary btn-lg" id="botonMedio" data-aos="fade-right"
					data-aos-duration="1500">
						<a href="https://www.somosparte.org/" target="_blank">Saber más</a>
					</button>
				</div>
			</div>
			<div class="bee-col bee-col-2 bee-col-w6">
				<div class="bee-block bee-block-1 bee-image"><img alt="Earth Day" class="bee-center bee-autowidth"
						src="../../assets/img/somosparte1.png" style="max-width:561px;" /></div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.buttons {
    display: flex;
    justify-content: center; /* Alinea los elementos hacia la derecha */
}
.bee-row,
.bee-row-content {
	position: relative
}

.bee-row-1,
.bee-row-2,
.bee-row-3,
.bee-row-4,
.bee-row-5,
.bee-row-6,
.bee-row-7 {
	background-repeat: no-repeat
}

body {
	background-color: #fff;
	color: #000;
	font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif
}

a {
	color: #222
}

* {
	box-sizing: border-box
}

body,
h2,
p {
	margin: 0
}

.bee-row-content {
	max-width: 1280px;
	margin: 0 auto;
	display: flex
}

.bee-row-content .bee-col-w4 {
	flex-basis: 33%
}

.bee-row-content .bee-col-w6 {
	flex-basis: 50%
}

.bee-row-content .bee-col-w8 {
	flex-basis: 67%
}

.bee-row-content .bee-col-w12 {
	flex-basis: 100%
}

.bee-icon .bee-icon-label-right a {
	text-decoration: none
}

.bee-image {
	overflow: auto
}

.bee-image .bee-center {
	margin: 0 auto
}

.bee-row-1 .bee-col-1 .bee-block-1,
.bee-row-4 .bee-col-2 .bee-block-1,
.bee-row-6 .bee-col-1 .bee-block-1 {
	width: 100%
}

.bee-icon {
	display: inline-block;
	vertical-align: middle
}

.bee-icon .bee-content {
	display: flex;
	align-items: center
}

.bee-image img {
	display: block;
	width: 100%
}

.bee-text {
	overflow-wrap: anywhere
}

@media (max-width:768px) {
	.bee-row-content:not(.no_stack) {
		display: block
	}
}

.bee-row-1 .bee-row-content,
.bee-row-2 .bee-row-content,
.bee-row-3 .bee-row-content,
.bee-row-4 .bee-row-content,
.bee-row-5 .bee-row-content,
.bee-row-6 .bee-row-content,
.bee-row-7 .bee-row-content {
	background-repeat: no-repeat;
	color: #000
}

.bee-row-1 .bee-col-1,
.bee-row-1 .bee-col-2,
.bee-row-3 .bee-col-1,
.bee-row-4 .bee-col-1,
.bee-row-4 .bee-col-2,
.bee-row-5 .bee-col-1,
.bee-row-6 .bee-col-1,
.bee-row-6 .bee-col-2 {
	padding: 30px
}

.bee-row-1 .bee-col-2 .bee-block-1 {
	padding-top: 20px;
	text-align: center;
	width: 100%
}

.bee-row-1 .bee-col-2 .bee-block-2 {
	padding-top: 40px
}

.bee-row-3 .bee-col-1 .bee-block-1,
.bee-row-5 .bee-col-1 .bee-block-1 {
	text-align: center;
	width: 100%
}

.bee-row-6 .bee-col-2 .bee-block-1 {
	padding-top: 30px
}

.bee-row-7 .bee-col-1,
.bee-row-7 .bee-col-1 .bee-block-1 {
	padding-bottom: 5px;
	padding-top: 5px
}

.bee-row-7 .bee-col-1 .bee-block-1 {
	color: #9d9d9d;
	font-family: inherit;
	font-size: 15px;
	text-align: center
}

.bee-row-7 .bee-col-1 .bee-block-1 .bee-icon-image {
	padding: 5px 6px 5px 5px
}

.bee-row-7 .bee-col-1 .bee-block-1 .bee-icon:not(.bee-icon-first) .bee-content {
	margin-left: 0
}

.bee-row-7 .bee-col-1 .bee-block-1 .bee-icon::not(.bee-icon-last) .bee-content {
	margin-right: 0
}

.buttons button {
	text-align: right;
	transition-duration: 0.2s !important;
}

.buttons button {
	margin-top: 40px;
	border-radius: 50px;
	background-color: tomato !important;
	border: none;
	transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
	transition: 0.2s;
	z-index: 999;
	transition-duration: 0.2s !important;
}

.buttons a {
	color: white !important;
	text-decoration: none;
	transition-duration: 0.2s !important;
}

.buttons button:hover {
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
