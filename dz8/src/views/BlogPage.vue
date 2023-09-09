<template>
    <BannerComponent :banner="bannerTwo"/>
    <BlogComponent/>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import BlogComponent from '@/components/BlogComponent.vue';
import { mapState } from 'vuex';

export default {
    name: "ProjectPage",
    computed: {
        ...mapState(['bannerTwo'])
    },
    components: {BannerComponent,BlogComponent }
}
</script>

<style lang="scss" scoped>

</style>