<template>
    <section class="project-detail center">
        <div class="project-detail__content" v-for="item in dataProject" :key="item">
            <h1 class="project-detail__title">{{ item.title }}</h1>
            <p class="project-detail__text">{{ item.text }}</p>
        </div>
        <swiper :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }" :zoom="true" :navigation="true" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper">
            <swiper-slide v-for="i in imgs" :key="i">
                <div class="swiper-zoom-container">
                    <img :src=i>
                </div>
            </swiper-slide>
            <!-- <swiper-slide>
                <div class="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </div>
            </swiper-slide> -->
        </swiper>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './style.css';

// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';

import { mapState } from 'vuex';
export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Zoom, Navigation, Pagination],
      };
    },
    computed: {
        ...mapState(['dataProject', 'imgs'])
    }
}
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  overflow: hidden;
}
.project-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__title {
        text-align: center;
        padding-bottom: 11px;
    }

    &__text {
        text-align: justify;
    }
}

.project-detail__content {
    width: 658px;
    padding-top: 200px;
    padding-bottom: 100px;
}
</style>