<template>
    <div class="bee-page-container">
		<div class="bee-row bee-row-1">
			<div class="bee-row-content">
				<div class="bee-col bee-col-1 bee-col-w2">
					<div class="bee-block bee-block-1 bee-spacer">
						<div class="spacer" style="height:1px;"></div>
					</div>
				</div>
				<div class="bee-col bee-col-2 bee-col-w8">
					<div class="bee-block bee-block-1 bee-spacer">
						<div class="spacer" style="height:30px;"></div>
					</div>
					<div class="bee-block bee-block-2 bee-heading">
						<h2
							style="color:#078e3e;direction:ltr;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:38px;font-weight:800;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
							<span class="tinyMce-placeholder">NUESTRA VISIÓN<br /></span> </h2>
					</div>
					<div class="bee-block bee-block-3 bee-paragraph">
						<p style="font-size: 24px;">Somos una comunidad cristiana, que busca <span
								style="color: tomato;"><strong>alcanzar</strong></span> a todas las personas, para
							<span style="color: tomato;"><strong>conectarlas</strong></span> con el propósito de Dios y
							<span style="color: tomato;"><strong>crecer</strong></span> juntos en el amor a Dios y a
							los demás.</p>
					</div>
				</div>
				<div class="bee-col bee-col-3 bee-col-w2">
					<div class="bee-block bee-block-1 bee-spacer">
						<div class="spacer" style="height:1px;"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="bee-row bee-row-2">
			<div class="bee-row-content">
				<div class="bee-col bee-col-1 bee-col-w4">
					<div class="bee-block bee-block-1 bee-image"><img alt="Services Image"
							class="bee-center bee-autowidth" src="@/assets/img/alcanzar.png" style="max-width:275px;" />
					</div>
					<div class="bee-block bee-block-2 bee-heading">
						<h3
							style="color:#078e3e;direction:ltr;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:24px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
							<span class="tinyMce-placeholder">Alcanzar</span> </h3>
					</div>
				</div>
				<div class="bee-col bee-col-2 bee-col-w4">
					<div class="bee-block bee-block-1 bee-image"><img alt="Services Image"
							class="bee-center bee-autowidth" src="@/assets/img/conectar.png" style="max-width:275px;" />
					</div>
					<div class="bee-block bee-block-2 bee-heading">
						<h3
							style="color:#078e3e;direction:ltr;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:24px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
							<span class="tinyMce-placeholder">Conectar</span> </h3>
					</div>
				</div>
				<div class="bee-col bee-col-3 bee-col-w4">
					<div class="bee-block bee-block-1 bee-image"><img alt="Services Image"
							class="bee-center bee-autowidth" src="@/assets/img/crecer.png" style="max-width:275px;" />
					</div>
					<div class="bee-block bee-block-2 bee-heading">
						<h3
							style="color:#078e3e;direction:ltr;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:24px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
							<span class="tinyMce-placeholder">Crecer</span> </h3>
					</div>
				</div>
			</div>
		</div>
		<div class="bee-row bee-row-3">
			<div class="bee-row-content">
				<div class="bee-col bee-col-1 bee-col-w12">
					<div class="bee-block bee-block-1 bee-spacer">
						<div class="spacer" style="height:60px;"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.bee-row,
.bee-row-content {
  position: relative;
}

.bee-row-4,
.bee-row-4 .bee-row-content {
  background-color: #ffffff;
  background-repeat: no-repeat;
}

.bee-row-1,
.bee-row-2,
.bee-row-3,
.bee-row-4,
.bee-row-4 .bee-row-content {
  background-repeat: no-repeat;
}

body {
  background-color: #fbfff9;
  color: #000000;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
}

.bee-row-1 .bee-col-2 .bee-block-3 a,
a {
  color: #078e3e;
}

* {
  box-sizing: border-box;
}

body,
h2,
h3,
p {
  margin: 0;
}

.bee-row-content {
  max-width: 1025px;
  margin: 0 auto;
  display: flex;
}

.bee-row-content .bee-col-w2 {
  flex-basis: 17%;
}

.bee-row-content .bee-col-w4 {
  flex-basis: 33%;
}

.bee-row-content .bee-col-w8 {
  flex-basis: 67%;
}

.bee-row-content .bee-col-w12 {
  flex-basis: 100%;
}

.bee-icon .bee-icon-label-right a {
  text-decoration: none;
}

.bee-image {
  overflow: auto;
}

.bee-image .bee-center {
  margin: 0 auto;
}

.bee-icon {
  display: inline-block;
  vertical-align: middle;
}

.bee-icon .bee-content {
  display: flex;
  align-items: center;
}

.bee-image img {
  display: block;
  width: 100%;
}

.bee-paragraph {
  overflow-wrap: anywhere;
}

@media (max-width: 768px) {
  .bee-row-content:not(.no_stack) {
    display: block;
  }
}

.bee-row-1 .bee-row-content,
.bee-row-2 .bee-row-content,
.bee-row-3 .bee-row-content {
  background-repeat: no-repeat;
  color: #000000;
}

.bee-row-1 .bee-col-2 .bee-block-2 {
  padding-bottom: 30px;
  padding-top: 20px;
  text-align: center;
  width: 100%;
}

.bee-row-1 .bee-col-2 .bee-block-3 {
  padding: 10px 10px 30px;
}

.bee-row-2 .bee-col-1 .bee-block-1 {
  padding-top: 30px;
  width: 100%;
}

.bee-row-2 .bee-col-1 .bee-block-2,
.bee-row-2 .bee-col-2 .bee-block-2,
.bee-row-2 .bee-col-3 .bee-block-2 {
  padding-bottom: 10px;
  padding-top: 30px;
  text-align: center;
  width: 100%;
}

.bee-row-2 .bee-col-2 .bee-block-1,
.bee-row-2 .bee-col-3 .bee-block-1 {
  padding-top: 40px;
  width: 100%;
}

.bee-row-4 .bee-col-1,
.bee-row-4 .bee-col-1 .bee-block-1 {
  padding-bottom: 5px;
  padding-top: 5px;
}

.bee-row-4 .bee-row-content {
  color: #000000;
}

.bee-row-4 .bee-col-1 .bee-block-1 {
  color: #1e0e4b;
  font-family: Inter, sans-serif;
  font-size: 15px;
  text-align: center;
}

.bee-row-1 .bee-col-2 .bee-block-3 {
  color: #5f5f5f;
  direction: ltr;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 150%;
  text-align: center;
}

.bee-row-1 .bee-col-2 .bee-block-3 p:not(:last-child) {
  margin-bottom: 16px;
}

.bee-row-4 .bee-col-1 .bee-block-1 .bee-icon-image {
  padding: 5px 6px 5px 5px;
}

.bee-row-4 .bee-col-1 .bee-block-1 .bee-icon:not(.bee-icon-first) .bee-content {
  margin-left: 0;
}

.bee-row-4 .bee-col-1 .bee-block-1 .bee-icon::not(.bee-icon-last) .bee-content {
  margin-right: 0;
}
</style>
