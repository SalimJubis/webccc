<template>
    <div>
        <div class="bee-page-container">
            <div class="bee-row bee-row-1">
                <div class="bee-row-content">
                    <div class="bee-col bee-col-1 bee-col-w12">
                        <div class="bee-block bee-block-1 bee-divider">
                            <div class="spacer" style="height:15px;"></div>
                        </div>
                        <div class="bee-block bee-block-2 bee-divider">
                            <div class="spacer" style="height:20px;"></div>
                        </div>
                        <div class="bee-block bee-block-3 bee-paragraph">
                            <p style="word-break: break-word;"><span><strong>TENGAMOS UN</strong></span></p>
                        </div>
                        <div class="bee-block bee-block-4 bee-paragraph">
                            <p style="word-break: break-word;"><span><strong>CORAZÓN</strong></span></p>
                        </div>
                        <div class="bee-block bee-block-5 bee-paragraph">
                            <p style="word-break: break-word;"><span><strong>GENEROSO</strong></span></p>
                        </div>
                        <div class="bee-block bee-block-6 bee-divider">
                            <div class="spacer" style="height:300px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bee-row bee-row-2">
                <div class="bee-row-content">
                    <div class="bee-col bee-col-1 bee-col-w12">
                        <div class="bee-block bee-block-1 bee-divider">
                            <div class="spacer" style="height:40px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bee-row bee-row-3">
                <div class="bee-row-content">
                    <div class="bee-col bee-col-1 bee-col-w12">
                        <div class="bee-block bee-block-1 bee-image"><img alt="Arrow" class="bee-center bee-autowidth"
                                src="@/assets/point-down.png" style="max-width:38px;" /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.bee-row,
.bee-row-content {
    position: relative
}

.bee-row-1,
.bee-row-2,
.bee-row-2 .bee-row-content {
    background-color: #1a1a1a;
    background-repeat: no-repeat
}

.bee-row-1,
.bee-row-1 .bee-row-content,
.bee-row-2,
.bee-row-2 .bee-row-content,
.bee-row-3,
.bee-row-4 {
    background-repeat: no-repeat
}

body {
    background-color: #0068a5;
    color: #000;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif
}

a {
    color: #0068a5
}

* {
    box-sizing: border-box
}

body,
p {
    margin: 0
}

.bee-row-content {
    max-width: 1125px;
    margin: 0 auto;
    display: flex
}

.bee-row-content .bee-col-w12 {
    flex-basis: 100%
}

.bee-icon .bee-icon-label-right a {
    text-decoration: none
}

.bee-divider,
.bee-image {
    overflow: auto
}

.bee-image .bee-center {
    margin: 0 auto
}

.bee-row-3 .bee-col-1 .bee-block-1 {
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

.bee-paragraph {
    overflow-wrap: anywhere
}

@media (max-width:768px) {
    .bee-row-content:not(.no_stack) {
        display: block
    }
}

.bee-row-1 {
    background-image: url('https://images.unsplash.com/photo-1599659593072-10de2e109486?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover
}

.bee-row-1 .bee-row-content {
    background-size: auto;
    color: #000
}

.bee-row-1 .bee-col-1 {
    padding: 5px 20px
}

.bee-row-1 .bee-col-1 .bee-block-1,
.bee-row-1 .bee-col-1 .bee-block-2,
.bee-row-1 .bee-col-1 .bee-block-6,
.bee-row-2 .bee-col-1 .bee-block-1 {
    padding: 10px
}

.bee-row-4 .bee-col-1,
.bee-row-4 .bee-col-1 .bee-block-1 {
    padding-bottom: 5px;
    padding-top: 5px
}

.bee-row-1 .bee-col-1 .bee-block-3,
.bee-row-1 .bee-col-1 .bee-block-4,
.bee-row-1 .bee-col-1 .bee-block-5 {
    padding-left: 10px;
    padding-right: 10px
}

.bee-row-2 .bee-row-content {
    color: #000
}

.bee-row-3,
.bee-row-4 {
    background-color: #fff
}

.bee-row-3 .bee-row-content,
.bee-row-4 .bee-row-content {
    background-color: #fff;
    background-repeat: no-repeat;
    color: #000
}

.bee-row-3 .bee-col-1 {
    padding-bottom: 5px
}

.bee-row-4 .bee-col-1 .bee-block-1 {
    color: #1e0e4b;
    font-family: Inter, sans-serif;
    font-size: 15px;
    text-align: center
}

.bee-row-1 .bee-col-1 .bee-block-3,
.bee-row-1 .bee-col-1 .bee-block-5 {
    color: #f4a737;
    font-family: Verdana, Geneva, sans-serif;
    font-size: 80px;
    line-height: 120%;
    text-align: center
}

.bee-row-1 .bee-col-1 .bee-block-3 a,
.bee-row-1 .bee-col-1 .bee-block-4 a,
.bee-row-1 .bee-col-1 .bee-block-5 a {
    color: #8a3b8f
}

.bee-row-1 .bee-col-1 .bee-block-3 p:not(:last-child),
.bee-row-1 .bee-col-1 .bee-block-4 p:not(:last-child),
.bee-row-1 .bee-col-1 .bee-block-5 p:not(:last-child) {
    margin-bottom: undefined
}

.bee-row-1 .bee-col-1 .bee-block-4 {
    color: #fff;
    font-family: Verdana, Geneva, sans-serif;
    font-size: 104px;
    line-height: 120%;
    text-align: center
}

.bee-row-4 .bee-col-1 .bee-block-1 .bee-icon-image {
    padding: 5px 6px 5px 5px
}

.bee-row-4 .bee-col-1 .bee-block-1 .bee-icon:not(.bee-icon-first) .bee-content {
    margin-left: 0
}

.bee-row-4 .bee-col-1 .bee-block-1 .bee-icon::not(.bee-icon-last) .bee-content {
    margin-right: 0
}
</style>