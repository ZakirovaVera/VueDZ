<template>
    <div class="project-content center">
        <div class="project-content__btn-wrap">
            <button class="project-content__btn" @click="filterArticles(tag)" v-for="tag in tags" :key="tag">{{ tag
            }}</button>
        </div>
        <div class="project-content__elements">
            <ProjectComponent v-for="article in currentContents" :key="article.id" :article="article" />
        </div>
        <div class="pagination">
            <ul class="pagination__ul">
                <li class="pagination__li"><a class="pagination__a" href="#">01</a></li>
                <li class="pagination__li"><a class="pagination__a" href="#">02</a></li>
                <li class="pagination__li"><a class="pagination__a" href="#">03</a></li>
                <li class="pagination__li"><a class="pagination__a" href="#"></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import ProjectComponent from './ProjectComponent.vue';
import { mapState } from 'vuex';

export default {
    name: "ProjectList",
    computed: {
        ...mapState(['projectArticles', 'tags'])
    },
    components: { ProjectComponent },
    data() {
        return {
            currentContents: [],
        }
    },
    created() {
        this.currentContents = this.projectArticles;
    },
    methods: {
        filterArticles(tag) {
            this.currentContents = Object.values(this.projectArticles).filter((el) => el.tag === tag);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_vars.scss";

.project-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 200px;
    padding-bottom: 200px;

}

.project-content__btn-wrap {
    // width: 880px;
    height: 75px;
    justify-content: center;
    align-items: center;
    gap: 96px;
    display: inline-flex;
    border-radius: 18px;
    border: 0.5px #CDA274 solid;
    margin-bottom: 60px;
}

.project-content__btn {
    height: 100%;
    border: none;
    background: none;
    padding-left: 66px;
    padding-right: 66px;
    padding-top: 26px;
    padding-bottom: 26px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
    text-align: center;
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
}

.project-content__btn:hover {
    padding-left: 66px;
    padding-right: 66px;
    padding-top: 26px;
    padding-bottom: 26px;
    background: #CDA274;
    border-radius: 18px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
    text-align: center;
    color: white;
    font-size: 18px;
    font-family: Jost;
    font-weight: 600;
    line-height: 22.50px;
    letter-spacing: 0.36px;
    word-wrap: break-word
}

.project-content__elements {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding-bottom: 96px;
}

.pagination {
    display: flex;
    align-items: center;
    justify-content: center;

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
</style>