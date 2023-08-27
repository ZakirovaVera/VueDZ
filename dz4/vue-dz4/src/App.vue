<template>
  <OneMaketComponent />
  <TwoMaketComponent />
  <ThreeMaketComponent/>
</template>

<script>
import OneMaketComponent from './components/OneMaketComponent.vue';
import TwoMaketComponent from './components/TwoMaketComponent.vue';
import ThreeMaketComponent from './components/ThreeMaketComponent.vue';

export default {
  name: 'App',
  components: {
    OneMaketComponent,
    TwoMaketComponent,
    ThreeMaketComponent,
  }
}
</script>

<style lang="scss"></style>
