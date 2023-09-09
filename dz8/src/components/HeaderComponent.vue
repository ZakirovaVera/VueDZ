<template>
    <header class="header center">
        <div class="header__left">
            <router-link class="header__left__logo" to="./"><img src="@/assets/img/Logo.svg" alt="logotip">
                <h1 class="header__left__logo-text">Interno</h1>
            </router-link>
        </div>
        <div class="header__right">
            <router-link class="header__menu" :to="link.url" v-for="link in pageLinks" :key="link.id">{{ link.title
            }}</router-link>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "HeaderComponent",
    computed: {
        ...mapState(['pageLinks'])
    },

}
</script>

<style lang="scss" scoped>
@import "@/assets/_vars.scss";

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 53px;
    padding-bottom: 57px;

    &__left__logo {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 10px;
        padding-left: 4px;

        &-text {
            color: $siteColorHeading;
            font-size: 40px;
            font-weight: 400;
            line-height: 50px;
            word-wrap: break-word;
            font-family: DM Serif Display;
        }
    }

    &__right {
        display: flex;
        gap: 30px;
        padding-right: 4px;
    }

    &__menu {
        color: $siteColorHeading;
        text-align: center;
        font-family: Jost;
        font-size: 20px;
        line-height: 25px;
        font-style: normal;
        font-weight: 400;
    }
}</style>