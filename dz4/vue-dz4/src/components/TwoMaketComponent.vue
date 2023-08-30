<template>
    <div class="banner center">
        <div class="banner__title">
            <h1 class="banner__heading">Articles & News</h1>
            <p class="banner__text">Home / Blog</p>
        </div>
    </div>
    <div class="latest-post center">
        <h2 class="latest-post__head">Latest Post</h2>
        <div class="latest-post__conteiner">
            <img class="latest-post__img" src="@/assets/img/post_photo.png" alt="latest Post">
            <div class="latest-post__content">
                <h3 class="latest-post__heading">Low Cost Latest Invented Interior Designing Ideas</h3>
                <p class="latest-post__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                    dignissim maximus.posuere
                    in.Contrary to popular belief.</p>
                <p class="latest-post__text">Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                </p>
                <div class="latest-post__date">
                    <p class="latest-post__date__text">26 December,2022 </p>
                    <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                        <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
            </div>
        </div>
    </div>
    <section class="blog-new center">
        <h2 class="blog-new__heading">Articles & News</h2>
        <div id="app" class="blog-new__app">
            <div class="blog-new__item-wrap">
                <article class="blog-new__item" v-for="blogNew in blogNews" :key="blogNew.id">
                    <img class="blog-new__item__img" :src="blogNew.img" alt="{{blogNew.img}}">
                    <div class="blog-new__item__teg">
                        <p class="blog-new__item__teg__text">{{ blogNew.tag }}</p>
                    </div>
                    <div class="blog-new__item__content">
                        <h3 class="blog-new__item__title">{{ blogNew.name }}</h3>
                        <div class="blog-new__item__date">
                            <p class="blog-new__item__text">{{ blogNew.date }}</p>
                            <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <div class="pagination">
            <ul class="pagination__ul">
                <li class="pagination__li"><a class="pagination__a" href="#">01</a></li>
                <li class="pagination__li"><a class="pagination__a" href="#">02</a></li>
                <li class="pagination__li"><a class="pagination__a" href="#">03</a></li>
                <li class="pagination__li"><a class="pagination__a" href="#"></a></li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "TwoMaketComponent",
    data() {
        return {
            blogNews: [
                { id: 1, img: require('@/assets/img/blog1.png'), tag: 'Kitchan Design', name: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022 ' },
                { id: 2, img: require('@/assets/img/blog2.png'), tag: 'Living Design', name: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022 ' },
                { id: 3, img: require('@/assets/img/blog3.png'), tag: 'Interior Design', name: 'Best For Any Office & Business Interior Solution', date: '25 December,2022 ' },
                { id: 4, img: require('@/assets/img/blog4.png'), tag: 'Kitchan Design', name: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022 ' },
                { id: 5, img: require('@/assets/img/blog5.png'), tag: 'Living Design', name: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022 ' },
                { id: 6, img: require('@/assets/img/blog6.png'), tag: 'Interior Design', name: 'Best For Any Office & Business Interior Solution', date: '25 December,2022 ' },
            ],
        }
    },
    methods: {
        name() {

        },
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
    height: 356px;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    &__title {
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

.latest-post {
    margin: 200px 0 156px;

    &__head {
        color: $siteColorHeading;
        font-size: 50px;
        font-family: DM Serif Display;
        font-weight: 400;
        line-height: 62.50px;
        letter-spacing: 1px;
    }

    &__conteiner {
        display: flex;
        padding: 22px;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        gap: 65px;
    }

    &__content {

        width: 469px;
    }

    &__heading {
        color: $siteColorHeading;
        font-size: 25px;
        font-family: DM Serif Display;
        font-weight: 400;
        line-height: 31.25px;
        letter-spacing: 0.50px;
        padding-bottom: 22px;
    }

    &__text {
        color: $siteColorHeading;
        font-size: 22px;
        font-family: Jost;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
        padding-bottom: 40px;
    }

    &__date {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__text {
            color: $siteColorText;
            font-size: 16px;
            font-family: Jost;
            font-weight: 400;
            text-transform: capitalize;
            line-height: 24px;
            letter-spacing: 0.16px;
        }
    }
}

.blog-new {
    &__heading {
        color: $siteColorHeading;
        font-size: 50px;
        font-family: DM Serif Display;
        font-weight: 400;
        line-height: 62.50px;
        letter-spacing: 1px;
    }

    &__app {
        margin: 30px 0 51px;
    }

    &__item-wrap {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 30px;
    }

    &__item {
        position: relative;
        width: 340px;
        height: 479px;
        padding: 21px;
        box-shadow: 0px 10px 30px rgba(255, 255, 255, 0.25);
        border-radius: 62px;
        border: 0.50px #E7E7E7 solid;

        &__img {
            border-radius: 45px 45px 0px 0px;
            background: #EAEAEA;
        }

        &__teg {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            left: 40px;
            top: 250px;
            width: 124px;
            height: 41px;
            border-radius: 8px 8px 8px 0px;
            background: #FFF;

            &__text {
                color: $siteColorText;
                font-family: Jost;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
                letter-spacing: 0.16px;
                text-transform: capitalize;
            }
        }

        &__title {
            display: flex;
            width: 305px;
            height: 70px;
            flex-direction: column;
            justify-content: center;
            color: $siteColorHeading ;
            font-family: DM Serif Display;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 31.25px;
            letter-spacing: 0.5px;
            padding-top: 20px;
            padding-bottom: 30px;
        }

        &__date {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        &__text {
            color: $siteColorText;
            font-family: Jost;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0.16px;
            text-transform: capitalize;
        }
    }

    .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 48px;
        padding-bottom: 200px;

        &__ul {
            display: flex;
            gap: 20px;
        }

        &__li {
            display: inline-block;
            list-style: none;
            margin: 5px 5px;
            font-size: 14px;
            text-align: center;
            width: 52px;
            height: 52px;
            border: 1px solid #CDA274;
            border-radius: 50px;
        }

        &__a {
            color: $siteColorHeading;
            font-family: Jost;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 52px;
            text-transform: capitalize;
        }
    }
}

</style>