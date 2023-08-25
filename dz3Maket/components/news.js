const News = {
    data() {
        return {
            articles: [
                {
                    id: 1,
                    tag: "Kitchen",
                    titleOne: "Let's Get Solution for Building Construction Work",
                    imgOne: "img/new_kitchen-1_22.12.png",
                    date: "22 December,2022",
                    navigations: {
                        name1: "Interior",
                        name2: "Home",
                        name3: "Decore"
                    },
                    textOne1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
                    textOne2: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    quotesContent: "The details are not the details. They make the design.",
                    titleTwo: "Design sprints are great",
                    textTwo1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    numberedText1: {
                        num: 1,
                        text: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                    },
                    numberedText2: {
                        num: 2,
                        text: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                    },
                    numberedText3: {
                        num: 3,
                        text: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                    },
                    imgTwo: "img/new_kitchen-2_22.12.png",
                    textThree: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                },
                {
                    id: 2,
                    tag: "Bedroom",
                    titleOne: "Let's Get Solution for Building Construction Work",
                    imgOne: "img/new_bedroom-1_23.12.png",
                    date: "23 December,2022",
                    navigations: {
                        name1: "Interior",
                        name2: "Home",
                        name3: "Decore"
                    },
                    textOne1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
                    textOne2: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    quotesContent: "The details are not the details. They make the design.",
                    titleTwo: "Design sprints are great",
                    textTwo1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    numberedText1: {
                        num: 1,
                        text: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                    },
                    numberedText2: {
                        num: 2,
                        text: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                    },
                    numberedText3: {
                        num: 3,
                        text: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                    },
                    imgTwo: "img/new_bedroom-2_23.12.png",
                    textThree: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                },
                {
                    id: 3,
                    tag: "Building",
                    titleOne: "Let's Get Solution for Building Construction Work",
                    imgOne: "img/new_building-1_24.12.png",
                    date: "24 December,2022",
                    navigations: {
                        name1: "Interior",
                        name2: "Home",
                        name3: "Decore"
                    },
                    textOne1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
                    textOne2: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    quotesContent: "The details are not the details. They make the design.",
                    titleTwo: "Design sprints are great",
                    textTwo1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    numberedText1: {
                        num: 1,
                        text: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                    },
                    numberedText2: {
                        num: 2,
                        text: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                    },
                    numberedText3: {
                        num: 3,
                        text: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                    },
                    imgTwo: "img/new_building-1_24.12.png",
                    textThree: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                },
            ],
            currentContents: [],
            tags: ["Kitchen", "Bedroom", "Building"],
        }
    },
    created() {
        this.currentContents = this.articles;
    },
    methods: {
        filterArticles(tag) {
            console.log(this.currentContents);
            this.currentContents = Object.values(this.articles).filter((el) => el.tag === tag);
        }
    },
    template: `
    <div class="news-articles__blog-conteiner">
            <div class="news-articles__blog" v-for="article in currentContents" :key="article.id">
                <h2 class="news-articles__blog__heading">{{article.titleOne}}</h2>
                <img class="news-articles__blog__img" :src="article.imgOne" alt="new_kitchen_22.12">
                <nav class="news-articles__blog__nav">
                    <p class="">{{article.date}} </p>
                    <div class="news-articles__blog__nav__a-wrap">
                        <a class="news-articles__blog__nav__a" href="#">{{article.navigations.name1}}</a>
                        <a class="news-articles__blog__nav__a" href="#">{{article.navigations.name2}}</a>
                        <a class="news-articles__blog__nav__a" href="#">{{article.navigations.name3}}</a>
                    </div>
                </nav>
                <p class="news-articles__blog__text">{{article.textOne1}}</p>
                <p class="news-articles__blog__text">{{article.textOne2}}</p>
                <div class="news-articles__blog__quotes">
                    <div class="news-articles__blog__quotes-content">
                        <svg width="74" height="56" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
                                fill="#CDA274" />
                        </svg>
                        <p>{{article.quotesContent}}</p>
                    </div>
                </div>
                <h2 class="news-articles__blog__heading">{{article.titleTwo}}</h2>
                <p class="news-articles__blog__text">{{article.textTwo1}}</p>
                <div class="news-articles__blog__numbered-text">
                    <p class="news-articles__blog__text-num">{{article.numberedText1.num}}</p>
                    <p class="news-articles__blog__text">{{article.numberedText1.text}}</p>
                </div>
                <div class="news-articles__blog__numbered-text">
                    <p class="news-articles__blog__text-num">{{article.numberedText2.num}}</p>
                    <p class="news-articles__blog__text">{{article.numberedText2.text}}</p>
                </div>
                <div class="news-articles__blog__numbered-text">
                    <p class="news-articles__blog__text-num">{{article.numberedText3.num}}</p>
                    <p class="news-articles__blog__text">{{article.numberedText3.text}}</p>
                </div>
                <img class="news-articles__blog__img" :src="article.imgTwo" alt="new_kitchen_22.12">
                <p class="news-articles__blog__text news-articles__blog__text-last">{{article.textThree}}</p>
            </div>
        </div>

        <div class="news-articles__sidebar">
            <h3 class="news-articles__sidebar__heading">Tags</h3>
            <div class="news-articles__sidebar__btn-wrap">
            <button class="news-articles__sidebar__btn" @click="filterArticles(tag)" v-for="tag in tags" :key="tag.id">{{tag}}</button>
            </div>
        </div>
`,
}
