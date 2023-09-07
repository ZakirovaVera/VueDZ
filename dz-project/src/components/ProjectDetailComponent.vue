<template>
    <section class="project-detail center">
        <div class="project-detail__content" v-for="item in dataProject" :key="item">
            <h1 class="project-detail__title">{{ item.title }}</h1>
            <p class="project-detail__text">{{ item.text }}</p>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['dataProject'])
    }
}
</script>

<style lang="scss" scoped>
.project-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__title{
        text-align: center;
        padding-bottom: 11px;
    }
    &__text{
        text-align: justify;
    }
}

.project-detail__content {
    width: 658px;
    padding-top: 200px;
    padding-bottom: 100px;
}
</style>