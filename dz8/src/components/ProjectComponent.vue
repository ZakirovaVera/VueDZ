<template>
    <div class="project__el">
        <button class="project__el_star" v-if="isClickStar" @click="clickStar()">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;"
                xml:space="preserve">
                <path style="fill:#FEDB41;"
                    d="M106.674,499.254c-3.125,0-6.232-0.975-8.852-2.889c-4.598-3.36-6.896-9.034-5.934-14.646 l26.995-157.393L4.53,212.858c-4.088-3.985-5.56-9.946-3.795-15.376c1.764-5.43,6.458-9.388,12.108-10.209l158.133-22.978 l72.645-143.329c2.567-5.067,7.789-8.265,13.459-8.219c5.681,0.03,10.857,3.267,13.372,8.361l70.674,143.201l158.032,22.964 c5.65,0.821,10.345,4.779,12.108,10.209c1.765,5.43,0.293,11.391-3.796,15.376L393.118,324.325l26.995,157.393 c0.965,5.627-1.349,11.315-5.968,14.671c-4.618,3.355-10.739,3.799-15.797,1.142l-141.394-74.335L113.58,497.57 C111.404,498.697,109.034,499.254,106.674,499.254z M47.235,212.591l98.236,95.756c3.535,3.446,5.148,8.411,4.314,13.277 L126.559,457.04l123.534-64.082c4.356-2.26,9.543-2.247,13.887,0.038l121.426,63.837l-23.19-135.21 c-0.835-4.866,0.778-9.831,4.314-13.277l98.235-95.756l-135.759-19.727c-4.886-0.71-9.108-3.778-11.294-8.206L256.82,61.277 l-62.606,123.522c-2.206,4.353-6.393,7.361-11.223,8.063L47.235,212.591z">
                </path>
            </svg></button>
        <button class="project__el_star" @click="clickStar()" v-else>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;"
                xml:space="preserve">
                <path style="fill:#FEDB41;"
                    d="M499.167,186.812l-158.144-23.105L268.502,20.568c-2.7-5.1-8.103-7.502-13.503-7.502 s-10.803,2.402-13.503,7.502l-70.522,143.14L12.832,186.812c-12.3,1.8-17.103,16.805-8.399,25.508l114.329,111.63L91.757,481.192 c-2.103,12.304,10.799,21.607,21.905,15.905l141.337-74.421l143.338,74.421c11.107,6.002,24.007-3.601,21.905-15.905L393.238,323.95 l114.329-111.63C516.27,203.616,511.467,188.612,499.167,186.812z" />
                <path style="fill:#FFCC33;"
                    d="M507.566,212.32L393.238,323.95l27.004,157.242c2.103,12.304-10.799,21.907-21.905,15.905 l-143.338-74.421V13.066c5.399,0,10.803,2.402,13.503,7.502l72.523,143.14l158.144,23.105 C511.467,188.612,516.27,203.616,507.566,212.32z" />
            </svg>
        </button>
        <img class="project__el__img" :src=article.img alt="project">
        <div class="project__el__content-box">
            <div class="project__el__content">
                <h3 class="project__el__title">{{ article.title }}</h3>
                <p class="project__el__text">{{ article.text }}</p>
            </div>
            <div><router-link to="/projectDetail"><svg width="70" height="70" viewBox="0 0 70 70" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg></router-link></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        article: Object,
    },
    data() {
        return {
            isClickStar: true,
        }
    },
    methods: {
        clickStar() {
            this.isClickStar = !this.isClickStar;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_vars.scss";

.project__el {
    display: flex;
    flex-direction: column;
    width: 585px;
    align-items: flex-start;
    gap: 24px;
    position: relative;

    &__img {
        background: #C4C4C4;
        width: 100%;
        height: 548px;

        &-top-right {
            border-radius: 0px 80px 0px 0px;
        }

        &-top-left {
            border-radius: 80px 0px 0px 0px;
        }

        &-bottom-right {
            border-radius: 0px 0px 80px 0px;
        }
    }

    &__content-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    &__title {
        color: $siteColorHeading;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 31.25px;
        letter-spacing: 0.5px;
    }

    &__text {
        color: $siteColorText;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
    }
}

.project__el_star {

    border: none;
    background: none;
    position: absolute;
    right: 0px;

    & svg {
        width: 35px;
        height: 35px;
        padding: 4px;
    }
}</style>