<template>
<HeaderComponent/>
<BannerComponent/>
<ProjectDetailComponent/>
<FooterComponent/>
</template>

<script>
import BannerComponent from './components/BannerComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import ProjectDetailComponent from './components/ProjectDetailComponent.vue';



export default {
    components: { HeaderComponent, BannerComponent, FooterComponent, ProjectDetailComponent }
}
</script>

<style lang="scss">
@import "@/assets/_vars.scss";

* {
  margin: 0;
  padding: 0;
}

.center {
  padding-left: calc(50% - $siteWidth / 2);
  padding-right: calc(50% - $siteWidth / 2);
}

a {
  text-decoration: none;
}
</style>
