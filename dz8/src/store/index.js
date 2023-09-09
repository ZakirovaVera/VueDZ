import { createStore } from 'vuex'

export default createStore({
  state: {
    pageLinks: [
      {
        id: 1,
        title: 'Home',
        url: './'
      },
      {
        id: 2,
        title: 'Project',
        url: '/project'
      },
      {
        id: 3,
        title: 'Blog',
        url: '/blog'
      },
    ],
    blogNews: [
      { id: 1, img: require('@/assets/img/blog1.png'), tag: 'Kitchan Design', name: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022 ' },
      { id: 2, img: require('@/assets/img/blog2.png'), tag: 'Living Design', name: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022 ' },
      { id: 3, img: require('@/assets/img/blog3.png'), tag: 'Interior Design', name: 'Best For Any Office & Business Interior Solution', date: '25 December,2022 ' },
      { id: 4, img: require('@/assets/img/blog4.png'), tag: 'Kitchan Design', name: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022 ' },
      { id: 5, img: require('@/assets/img/blog5.png'), tag: 'Living Design', name: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022 ' },
      { id: 6, img: require('@/assets/img/blog6.png'), tag: 'Interior Design', name: 'Best For Any Office & Business Interior Solution', date: '25 December,2022 ' },
    ],
    bannerTwo: {
      title: "Articles & News",
      text: "Home / Blog",
    },
    bannerThree: {
      title: "Our Project",
      text: "Home / Project",
    },
    projectArticles: [
      {
        id: 1,
        tag: "Kitchen",
        img: require('@/assets/img/new_kitchen-1_22.12.png'),
        title: "Minimal Bedroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 2,
        tag: "Kitchen",
        img: require('@/assets/img/new_kitchen-2_22.12.png'),
        title: "Classic Bedroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 3,
        tag: "Kitchen",
        img: require('@/assets/img/new_kitchen-1_22.12.png'),
        title: "Kitchen",
        text: "Decor / Artchitecture",
      },
      {
        id: 4,
        tag: "Kitchen",
        img: require('@/assets/img/new_kitchen-2_22.12.png'),
        title: "Minimal Bedroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 5,
        tag: "Kitchen",
        img: require('@/assets/img/new_kitchen-1_22.12.png'),
        title: "Minimal Bedroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 6,
        tag: "Kitchen",
        img: require('@/assets/img/new_kitchen-2_22.12.png'),
        title: "Classic Kitchen",
        text: "Decor / Artchitecture",
      },
      {
        id: 7,
        tag: "Bed Room",
        img: require('@/assets/img/new_bedroom-2_23.12.png'),
        title: "Minimal Bedroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 8,
        tag: "Bed Room",
        img: require('@/assets/img/new_bedroom-1_23.12.png'),
        title: "Kitchen",
        text: "Decor / Artchitecture",
      },
      {
        id: 9,
        tag: "Bed Room",
        img: require('@/assets/img/new_bedroom-2_23.12.png'),
        title: "Minimal Bedroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 10,
        tag: "Bed Room",
        img: require('@/assets/img/new_bedroom-1_23.12.png'),
        title: "Modern Bedroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 11,
        tag: "Bed Room",
        img: require('@/assets/img/new_bedroom-2_23.12.png'),
        title: "Modern Bedroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 12,
        tag: "Bed Room",
        img: require('@/assets/img/new_bedroom-2_23.12.png'),
        title: "Classic Minimal Bedroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 13,
        tag: "Bathroom",
        img: require('@/assets/img/new_kitchen-1_22.12.png'),
        title: "Minimal Bedroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 14,
        tag: "Living Area",
        img: require('@/assets/img/new_kitchen-2_22.12.png'),
        title: "Classic Bedroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 15,
        tag: "Living Area",
        img: require('@/assets/img/new_kitchen-1_22.12.png'),
        title: "Kitchen",
        text: "Decor / Artchitecture",
      },
      {
        id: 16,
        tag: "Living Area",
        img: require('@/assets/img/new_kitchen-2_22.12.png'),
        title: "Minimal Bedroom",
        text: "Decor / Artchitecture",
      },
    ],
    tags: ["Bathroom", "Bed Room", "Kitchen", "Living Area"],
    blogArticles: [
      {
        id: 1,
        tag: "Kitchen",
        titleOne: "Let's Get Solution for Building Construction Work",
        imgOne: require('@/assets/img/new_kitchen-1_22.12.png'),
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
        imgTwo: require('@/assets/img/new_kitchen-2_22.12.png'),
        textThree: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 2,
        tag: "Bedroom",
        titleOne: "Let's Get Solution for Building Construction Work",
        imgOne: require('@/assets/img/new_bedroom-1_23.12.png'),
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
        imgTwo: require('@/assets/img/new_bedroom-2_23.12.png'),
        textThree: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 3,
        tag: "Building",
        titleOne: "Let's Get Solution for Building Construction Work",
        imgOne: require('@/assets/img/new_building-1_24.12.png'),
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
        imgTwo: require('@/assets/img/new_building-2_24.12.png'),
        textThree: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
    ],
    blogTags: ["Kitchen", "Bedroom", "Building"],
    dataProject: [
      {
        title: "Minimal Look Bedrooms",
        text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ",
        text2: "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      }
    ],
    imgs: [
      require('@/assets/img/imgProject.jpg'), require('@/assets/img/imgProject2.jpg'), require('@/assets/img/imgProject2.jpg')
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
