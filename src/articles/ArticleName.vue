<template>
    <div class="article-page" :style="'background-image: url(' + parchment + ');'">
      <main>
          <section class="article--page-header">
             <img :src="logo" alt="">
          </section>
          <section>
             <div class="container">
                <h1>{{article.name}}</h1>
                <div v-html="article.content"></div>
                {{ $route.params.id}}
             </div>
          </section>
      </main>
    </div>
</template>

<script>
import Image from '../assets/logo.png'

export default {
    name: 'Article',
    // props: {
    //     article: Object
    // },
    data(){
        return {
            id: articleName,
            title: '',
            paragraphs: [
                '',
                '',
                '',
            ],
            image: Image
        }
    },
    computed: {
        articleName(){
            return this.title + '-1'
        }
    }
}
</script>

<style>
.article--page{
    background-size: cover;
    background-position: left top;
}

.article--page-header{
    background: black;
    display: flex;
    padding: 16px;
}

.article--page-header img{
    max-width: 200px;
}
</style>