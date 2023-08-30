<template>
    <header class="header center">
        <div class="header__left">
            <a class="header__left__logo" href="index.html">
                <img src="@/assets/img/Logo.svg" alt="logotip">
            </a>
            <h1 class="header__left__logo-text">Interno</h1>
        </div>
        <div class="header__right">
            <a class="header__menu" href="index.html">Home</a>
            <a class="header__menu" href="#">Project</a>
            <a class="header__menu" href="#">Blog</a>
        </div>
    </header>
</template>

<script>
    export default {
        name:"HeaderComponent"
    }
</script>

<style lang="scss" scoped>
@import "@/assets/_vars.scss" ;
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 53px;
    padding-bottom: 57px;

    &__left {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 10px;
        padding-left: 4px;

        &__logo-text {
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
}
</style>