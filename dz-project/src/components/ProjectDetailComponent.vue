<template>
    <section class="project-detail center">
        <div class="project-detail__content" v-for="item in dataProject" :key="item">
            <h1 class="project-detail__title">{{ item.title }}</h1>
            <p class="project-detail__text">{{ item.text1 }}</p>
            <p class="project-detail__text">{{ item.text2 }}</p>
        </div>
        <swiper :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            'border-radius': '70px',
            'background': '#C4C4C4',
        }" :zoom="true" :navigation="true" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper">
            <swiper-slide v-for="el in imgs" :key="el">
                <div class="swiper-zoom-container">
                    <img :src=el>
                </div>
            </swiper-slide>
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
    margin-bottom: 120px;

    &__title {
        text-align: center;
        padding-bottom: 11px;
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 62.5px */
        letter-spacing: 1px;
    }

    &__text {
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;
    }
}

.project-detail__content {
    width: 658px;
    padding-top: 200px;
    padding-bottom: 100px;
}
</style>