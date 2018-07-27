<template>
      <swiper class="gallery" :options="options" @setTranslate="onTranslate" ref="swiper">
            <swiper-slide
                    class="cover"
                    :class="{standing: windowHeight > windowWidth}"
                    :style="{
                        height: `${windowHeight}px`,
                        width: `${Math.floor(windowWidth*0.8)}px`,
                        boxShadow: boxShadow
                    }"
            >
                <back/>
                <div class="attention-seeker">
                    Photography
                </div>
                <div class="im-lazy">
                    Is my other hobby...
                </div>
                <div class="swipe-me"><<< Just drag to the left</div>
                <div class="powered-by">
                    Powered by <a href="https://unsplash.com/" target="_blank">Unsplash.com</a>
                </div>
            </swiper-slide>
            <swiper-slide v-for="(photo, index) in photos" class="gallery-item" :class="{loaded: photo.loaded}" :key="photo.id":style="{height: `${windowHeight}px`, width: `${relativeWidth(photo)}px`}">
                <spinner class="spinner" v-if="!photo.loaded"></spinner>
                <div class="gallery-item-wrapper">
                    <lazy-image :src="photo.urls.full" @loading="loadExif(index)" @load.native="load($event.target.src, index)" :style="{height: `${windowHeight}px`, width: `${relativeWidth(photo)}px`}" :data-gallery-item-index="index"></lazy-image>
                </div>
                <transition name="slide">
                    <div class="gallery-item-info" v-if="photo.loaded && photo.info">
                        <div class="exif">
                            {{ photo.info.exif.model }} &bull;
                            ƒ{{ photo.info.exif.aperture }} &bull;
                            {{ photo.info.exif.exposure_time }} sec &bull;
                            {{ photo.info.exif.focal_length }}mm &bull;
                            {{ photo.info.exif.iso }} ISO
                        </div>
                    </div>
                </transition>
            </swiper-slide>
      </swiper>
</template>

<style lang="scss">
    @import "../assets/css/variables";

    .gallery {
        white-space: nowrap;
        overflow-y: hidden;
        overflow-x: scroll;
    }

    .cover {
        font-family: 'Poiret One', cursive;
        display: inline-block;
        color: #fff;
        text-align: center;
        min-width: 300px;
        position: relative;
        z-index: 1;



        .attention-seeker {
            font-size: 5vw;
            margin-top: 30vh;
        }


        .im-lazy {
            color: $primaryColor;
            font-size: 1.5vw;
            margin-top: 10px;
        }

        .swipe-me {
            margin-top: 75px;
            font-size: 1.5vw;
        }

        .powered-by {
            margin-top: 100px;
        }

        &.standing {
            .attention-seeker {
                font-size: 7vw;
            }

            .im-lazy {
                font-size: 3vw;
            }
        }

    }



    .gallery-item {
        display: inline-block;
        position: relative;
        overflow: hidden;

        .gallery-item-wrapper {
            background: #000;
        }

        .gallery-item-info {
            font-family: 'Jura', sans-serif;
            font-weight: lighter;
            background: transparentize(darken($primaryColor, 35), 0.5);
            position: absolute;
            bottom: 0;
            height: 50px;
            line-height: 50px;
            padding: 0 10px;
            box-sizing: border-box;
            width: 100%;
            color: #fff;

            .exif {
                float: left;
            }

            &.slide-enter-active, &.slide-leave-active {
                transition: bottom .5s;
            }
            &.slide-enter, &.slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
                bottom: -50px;
            }

        }

        img {
            box-sizing: border-box;
            border: 0 solid $darkColor;
            border-top-width: 2px;
            border-bottom-width: 3px;
            opacity: 0;
            filter: blur(20px);
            transition: opacity 1s, filter 1.5s;
        }

        &.loaded {
            img {
                opacity: 1;
                filter: blur(0px);
            }
        }

        &:not(.loaded) {
            position: relative;
            .spinner {
                position: absolute;
                left: 50%;
                margin-left: -30px;
                top: 50%;
                margin-top: -30px;
                .v-ring {
                    margin: 0 auto;
                }
            }
            /*border: 1px solid #f00;*/
        }
    }
</style>


<script>
import PhotoService from './../services/PhotoService'
import _ from 'lodash'

export default {

    data() {
        return {
            boxShadowSpread: 0,
            options: {
                freeMode: true,
                spaceBetween: 3,
                slidesPerView: 'auto',
                setWrapperSize: true,
                freeModeMomentumBounce: false,
                preloadImages: false,
                mousewheel: true
            },
            photos: []
        }
    },

    computed: {
        windowHeight() {
            return window.innerHeight;
        },
        windowWidth() {
            return window.innerWidth;
        },
        boxShadow() {
            let slope = 0.0024671052631578946; //(5 - 2) / (1536 - 320)
            let adjuster = (slope * (this.windowWidth - 320)) + 2;

            return `0 0 ${100 + (this.boxShadowSpread / (adjuster))}px ${100 + (this.boxShadowSpread / adjuster)}px rgba(23,23,23,1)`;
        }
    },

    created() {
        PhotoService.getPhotos().subscribe((data) => {
            this.photos = data;
        });
    },
    mounted() {
        this.$Lazyload.$on('loading', function (e, formCache) {
            console.log(e)
        })
    },
    methods: {
        load(src, index) {
            if (!/^data:.*/.test(src)) {
                var photo = this.photos[index];
                photo.loaded = 1;
                this.$set(this.photos, index, photo);
            }
        },
        loading(index) {
            console.log(index);
        },
        relativeWidth(photo) {
            return Math.floor((this.windowHeight / photo.height) * photo.width);
        },
        loadExif(index) {
            let photo = this.photos[index];

            if (photo.getInfo === undefined) {
                photo.getInfo = _.debounce((index) => {
                    let photo = this.photos[index];
                    PhotoService.getPhoto(photo.id).subscribe((data) => {
                        photo.info = data;
                        this.$set(this.photos, index, photo);
                    })
                }, 100);
                this.$set(this.photos, index, photo);
            }

            photo.getInfo(index);

        },
        onTranslate(e) {
            this.boxShadowSpread = e;
        }
    }

}
</script>
