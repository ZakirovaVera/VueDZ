<template>
    <div class="banner center">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/_vars.scss";

.banner {
    // background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    background-image: url(@/assets/img/bannerPhoto.png);
    background-size: cover;
    background-position: center;
    height: 351px;

}
</style>