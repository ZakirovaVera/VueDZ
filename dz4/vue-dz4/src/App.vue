<template>
  <ProductDetailsComponent />
  <hr>
  <HeaderComponent />
  <OneMaketComponent />
  <FooterComponent />
  <hr>
  <HeaderComponent />
  <BannerComponent :banner="bannerTwo" />
  <TwoMaketComponent />
  <FooterComponent />
  <hr>
  <HeaderComponent />
  <ThreeMaketComponent />
  <FooterComponent />
  <hr>
  <HeaderComponent />
  <BannerComponent :banner="bannerThree" />
  <ProjectsListComponent :articles="articles" :tags="tags"/>
  <FooterComponent />
</template>

<script>
import OneMaketComponent from './components/OneMaketComponent.vue';
import TwoMaketComponent from './components/TwoMaketComponent.vue';
import ThreeMaketComponent from './components/ThreeMaketComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import ProductDetailsComponent from './components/ProductDetailsComponent.vue'
import ProjectsListComponent from './components/ProjectsListComponent.vue';
import BannerComponent from './components/BannerComponent.vue';

export default {
  name: 'App',
  data() {
    return {
      bannerTwo: {
        title: "Articles & News",
        text: "Home / Blog",
      },
      bannerThree: {
        title: "Our Project",
        text: "Home / Project",
      },
      articles: [
        {
          id: 1,
          tag: "Kitchen",
          img: require('@/assets/img/new_kitchen-1_22.12.png'),
          title:"Minimal Bedroom",
          text:"Decor / Artchitecture",
        },
        {
          id: 2,
          tag: "Kitchen",
          img: require('@/assets/img/new_kitchen-2_22.12.png'),
          title:"Classic Bedroom",
          text:"Decor / Artchitecture",
        },
        {
          id: 3,
          tag: "Kitchen",
          img: require('@/assets/img/new_kitchen-1_22.12.png'),
          title:"Kitchen",
          text:"Decor / Artchitecture",
        },
        {
          id: 4,
          tag: "Kitchen",
          img: require('@/assets/img/new_kitchen-2_22.12.png'),
          title:"Minimal Bedroom",
          text:"Decor / Artchitecture",
        },
        {
          id: 5,
          tag: "Kitchen",
          img: require('@/assets/img/new_kitchen-1_22.12.png'),
          title:"Minimal Bedroom",
          text:"Decor / Artchitecture",
        },
        {
          id: 6,
          tag: "Kitchen",
          img: require('@/assets/img/new_kitchen-2_22.12.png'),
          title:"Classic Kitchen",
          text:"Decor / Artchitecture",
        },
        {
          id: 7,
          tag: "Bed Room",
          img: require('@/assets/img/new_bedroom-2_23.12.png'),
          title:"Minimal Bedroom",
          text:"Decor / Artchitecture",
        },
        {
          id: 8,
          tag: "Bed Room",
          img: require('@/assets/img/new_bedroom-1_23.12.png'),
          title:"Kitchen",
          text:"Decor / Artchitecture",
        },
        {
          id: 9,
          tag: "Bed Room",
          img: require('@/assets/img/new_bedroom-2_23.12.png'),
          title:"Minimal Bedroom",
          text:"Decor / Artchitecture",
        },
        {
          id: 10,
          tag: "Bed Room",
          img: require('@/assets/img/new_bedroom-1_23.12.png'),
          title:"Modern Bedroom",
          text:"Decor / Artchitecture",
        },
        {
          id: 11,
          tag: "Bed Room",
          img: require('@/assets/img/new_bedroom-2_23.12.png'),
          title:"Modern Bedroom",
          text:"Decor / Artchitecture",
        },
        {
          id: 12,
          tag: "Bed Room",
          img: require('@/assets/img/new_bedroom-2_23.12.png'),
          title:"Classic Minimal Bedroom",
          text:"Decor / Artchitecture",
        },
        {
          id: 13,
          tag: "Bathroom",
          img: require('@/assets/img/new_kitchen-1_22.12.png'),
          title:"Minimal Bedroom",
          text:"Decor / Artchitecture",
        },
        {
          id: 14,
          tag: "Living Area",
          img: require('@/assets/img/new_kitchen-2_22.12.png'),
          title:"Classic Bedroom",
          text:"Decor / Artchitecture",
        },
        {
          id: 15,
          tag: "Living Area",
          img: require('@/assets/img/new_kitchen-1_22.12.png'),
          title:"Kitchen",
          text:"Decor / Artchitecture",
        },
        {
          id: 16,
          tag: "Living Area",
          img: require('@/assets/img/new_kitchen-2_22.12.png'),
          title:"Minimal Bedroom",
          text:"Decor / Artchitecture",
        },
      ],
      tags: ["Bathroom", "Bed Room", "Kitchen", "Living Area"],
    }
  },
  components: {
    OneMaketComponent,
    TwoMaketComponent,
    ThreeMaketComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    ProjectsListComponent,
    BannerComponent
  }
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
