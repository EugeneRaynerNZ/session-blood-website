<template>
    <router-link class="articleTile" :to="'/articles/' + safeUrl" :style="'background-image: url(' + article.img + ');'"> 
        <div class="articleTile--border" :style="'background-image: url(' + border + ');'"></div>
        <div class="articleTile--content">
            <div class="articleTile--content-text">
                <h3>{{article.cardTitle}}</h3>
                <p>{{shortenString}}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
import Border from '../assets/border.png'

export default {
    name: 'Article',
    props: {
        id: Number,
        article: Object,
    },
    data(){
        return {
            border: Border,
            safeImg: null
        }
    },
    computed: {
        shortenString(){
            return this.article.content[0].substring(0, 60);
        },
        safeUrl(){
            return this.article.url.replace(/[\W_]+/g, '-').toLowerCase();
        },
    },
    mounted () {
        // this.safeImg = require(`../assets/articles/${this.article.img}`)
        console.log(this.article)
  }
}
</script>

<style>
.articleTile{
    flex: 0 0 calc(25% - 15px);
    margin-right: 15px;
    text-align: left;
    position: relative;
    height: 285px;
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
    text-decoration: none;
}

.articleTile--border{
    position: absolute;
    z-index: 2;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
}

.articleTile img{
    max-width: 100%;
}

.articleTile h3{
    margin: 0;
    font-size: 24px;
    line-height: 100%;
}
.articleTile p{
    margin: 0;
    margin-top: 6px;
}

.articleTile--content{
    width: 100%;
    color: white;
    display: flex;
    align-items: flex-end;
    height: 100%;
}

.articleTile--content-text{
    background: black;
    width: 100%;
    color: white;
    padding: 12px 24px 20px 24px;
}
</style>