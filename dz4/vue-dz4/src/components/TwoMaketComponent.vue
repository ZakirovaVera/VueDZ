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
    <footer class="footer center">
        <div class="footer__left">
            <div class="header__left footer__left_logo">
                <a class="header__left__logo" href="index.html">
                    <img src="@/assets/img/Logo.svg" alt="logotip">
                </a>
                <h1 class="header__left__logo-text">Interno</h1>
            </div>
            <p class="footer__left__text">It is a long established fact that a reader will be distracted lookings.</p>
            <div class="footer__left__icons">
                <a href="#"><svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z"
                            fill="#292F36" />
                    </svg></a>
                <a href="#"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z"
                            fill="#292F36" />
                    </svg></a>
            </div>
        </div>
        <div class="footer__center">
            <h3 class="footer__center__heading">Pages</h3>
            <div class="footer__center__link-wrap">
                <a class="footer__center__link" href="index.html">Home</a>
                <a class="footer__center__link" href="#">Project</a>
                <a class="footer__center__link" href="#">Blog</a>
            </div>


        </div>
        <div class="footer__right">
            <h3 class="footer__right__heading">Contact</h3>
            <p class="footer__right__text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
            <p class="footer__right__text">contact@interno.com</p>
            <p class="footer__right__text">(123) 456 - 7890</p>
        </div>
    </footer>
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

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 44px;
    padding-bottom: 44px;

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

.footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
    justify-items: center;
    margin-bottom: 116px;

    &__left__text {
        width: 393px;
        color: $siteColorText;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
        padding: 18px 0 32px;
    }

    &__left__icons {
        display: flex;
        gap: 54px;
    }

    &__center {
        display: flex;
        flex-direction: column;
        gap: 8px;

        &__heading {
            color: $siteColorHeading;
            font-size: 25px;
            font-family: DM Serif Display;
            font-weight: 400;
            line-height: 31.25px;
            word-wrap: break-word
        }

        &__link-wrap {
            display: flex;
            flex-direction: column;
        }

        &__link {
            color: $siteColorText;
            font-size: 22px;
            font-family: Jost;
            font-weight: 400;
            line-height: 66px;
            letter-spacing: 0.22px;
        }
    }

    &__right {
        display: flex;
        flex-direction: column;
        gap: 26px;
        width: 258px;
    }

    &__right__heading {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 31.25px */
    }

    &__right__text {
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
    }
}
</style>