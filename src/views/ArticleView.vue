<template>
    <div class="articleView" :style="'background-image: url(' + parchment + ');'">
      <main>
          {{items}}
          <section class="article--page-header">
              <div class="container" style="padding: 0; display: flex">
                  <a href="/"><img class="logo-stamp" :src="logo" alt="Session Blood"></a>
              </div>
          </section>
          <template v-for="article in articles">
              <section v-if="$route.params.id == article.url" :key="article.id">
                <div class="container">
                    <div class="articleView--Content">
                        <h1>{{article.title}}</h1>
                        <p v-for="(content, index) in article.content" :key="'article-text-' + index">{{content}}</p>
                    </div>
                </div>
            </section>
          </template>
      </main>
    </div>
</template>

<script>
import Parchment from '../assets/parchment-background.png'
import Logo from '../assets/logo.png'
import Articles from '../assets/articles/articles.json'

export default {
    name: 'ArticleView',
    data(){
        return {
            parchment: Parchment,
            logo: Logo,
            articles: Articles,
            items: null
        }
    },
    computed: {
        safeUrl(){
            return this.articleName.replace(/[\W_]+/g, '-').toLowerCase();
        }
    },
     
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
    max-width: 100px;
}
.articleView--Content{
    padding: 0 40px 0 40px;
    text-align: left;
    max-width: 800px;
    margin: 0 auto;
}
</style>