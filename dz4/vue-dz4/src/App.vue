<template>
  <HeaderComponent/>
  <OneMaketComponent />
  <FooterComponent/>
  <HeaderComponent/>
  <TwoMaketComponent />
  <FooterComponent/>
  <HeaderComponent/>
  <ThreeMaketComponent/>
  <FooterComponent/>
</template>

<script>
import OneMaketComponent from './components/OneMaketComponent.vue';
import TwoMaketComponent from './components/TwoMaketComponent.vue';
import ThreeMaketComponent from './components/ThreeMaketComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    OneMaketComponent,
    TwoMaketComponent,
    ThreeMaketComponent,
    HeaderComponent,
    FooterComponent,
}
}
</script>

<style lang="scss">
@import "@/assets/_vars.scss" ;

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
