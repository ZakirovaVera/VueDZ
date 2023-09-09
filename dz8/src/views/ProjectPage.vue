<template>
    <BannerComponent :banner="bannerThree"/>
    <ProjectsListComponent/>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import ProjectsListComponent from '@/components/ProjectsListComponent.vue';
import { mapState } from 'vuex';

export default {
    name: "ProjectPage",
    computed: {
        ...mapState(['bannerThree'])
    },
    components: { BannerComponent, ProjectsListComponent }
}
</script>

<style lang="scss" scoped>

</style>