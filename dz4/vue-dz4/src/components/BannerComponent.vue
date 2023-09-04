<template>
    <div class="banner">
        <!-- <div class="banner__img">
            <img src="@/assets/img/bannerPhoto.png" alt="photo">
        </div> -->
        <div class="banner__text-box">
            <h1 class="banner__heading">{{ banner.title }}</h1>
            <p class="banner__text">{{ banner.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        banner: Object
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/_vars.scss";

.banner {
    // background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    background-image: url(@/assets/img/bannerPhoto.png);
    background-size: cover;
    background-position: center;
    // position: relative;
    height: 356px;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    // &__img {
    //     width: 100vw;
    //     height: 356px;
    // }

    &__text-box {
        position: absolute;
        border-radius: 37px 37px 0px 0px;
        background: #FFF;
        display: flex;
        width: 503px;
        padding: 41px 78px;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    &__heading {
        color: $siteColorHeading;
        font-size: 50px;
        font-family: DM Serif Display;
        font-weight: 400;
        line-height: 62.50px;
    }

    &__text {
        color: $siteColorText;
        font-size: 22px;
        font-family: Jost;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
    }
}
</style>