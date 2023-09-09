<template>
  <HeaderComponent />
  <router-view></router-view>
  <FooterComponent />
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  components: { HeaderComponent, FooterComponent },
  
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
}</style>
