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
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>