<template>
    <div id="app">
        <transition name="page">
            <router-view class="page"/>
        </transition>
    </div>
</template>


<style lang="scss">
    @import "assets/css/variables";

    .page {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: $darkColor;

    }

    .page-enter-active, .page-leave-active {
        transition: opacity .5s linear, filter 0.75s linear;
    }

    .page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
        filter: blur(20px);
    }

    * {
        -webkit-overflow-scrolling: touch;
    }

    html, body, #app {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        overflow-y: hidden;
    }
</style>


<script>

    export default {
        beforeCreate() {
            document.addEventListener('touchmove', function (event) {
                if (event.scale !== 1) {
                    event.preventDefault();
                }
            }, false);
        }
    }

</script>