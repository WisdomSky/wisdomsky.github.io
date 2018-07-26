<template>
    <div class="home">
        <div class="social-links">
            <a href="https://facebook.com/WisdomSky">
                <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="http://github.com/WisdomSky">
                <i class="fab fa-github fa-2x"></i>
            </a>
        </div>
        <div class="attention-seeker">
            Hello, I'm Julian!
        </div>
        <div class="im-lazy">
            <router-link to="/about">About Me</router-link> &bull;
            <router-link to="/photography">Photography</router-link>
        </div>


    </div>
</template>

<style lang="scss">
    @import "../assets/css/variables";

    .home {
        height: 100%;
        width: 100%;
        font-family: 'Poiret One', cursive;
        color: #fff;
        text-align: center;

        .social-links {
            float: right;
            margin-top: 10px;
            a {
                margin-right: 20px;
            }
        }

        .attention-seeker {
            font-size: 5vw;
            padding-top: 30vh;
        }


        .im-lazy {
            font-size: 1.5vw;
            margin-top: 10px;
        }


    }
</style>


<script>
    export default {}
</script>
