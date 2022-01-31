<template>
  <div class="home">
    <main>
      <section class="home--hero" :style="'background-image: url(' + heroImage + ');'">
        <img class="home--logo" :src="heroLogo" alt="Session Blood">
      </section>
      <section class="home--quiz" :style="'background-image: url(' + parchment + ');'">
        <div class="container d-flex">
          <div class="home--quiz-content">
            <h1>Ready to find out which hero you are?</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, </p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, </p>
            <router-link class="button" to="/quiz">Start the quiz</router-link>
          </div>
          <div class="home--quiz-image">
            <img :src="quizImage" alt="">
          </div>
        </div>
      </section>
      <section class="home--articles">
        
        <div class="container">
          <h1>Latest Articles</h1>
          <div class="articles">
            <ArticleTile 
              v-for="article in articles"
              :key="'article-key-' + article.id"
              :id="article.id"
              :article="article"
            />
          </div>
        </div>
      </section>
    </main>
    <footer></footer>
  </div>
</template>

<script>
// added a branch
import HeroImage from '../assets/session-blood-hero.png'
import Logo from '../assets/logo.png'
import Parchment from '../assets/parchment-background.png'
import QuizImage from '../assets/home-quiz-image.png'
import ArticleTile from '../components/ArticleTile.vue'
import Articles from '../assets/articles/articles.json'

export default {
  name: 'Home',
  components: {
    ArticleTile
  },
  data(){
    return {
      heroImage: HeroImage,
      heroLogo: Logo,
      parchment: Parchment,
      quizImage: QuizImage,
      articles: Articles,
    }
  },
}
</script>

<style>
.d-flex{
  display: flex;
}
.button{
  background: #C1272D;
  padding: 12px 20px;
  color: white;
  text-decoration: none;
  transition: all .4s;
  margin-top: 24px;
  display: inline-block;
  cursor: pointer;
}

a:visited{
  text-decoration: none;
}

.button:hover{
  background: #E5343B;

}
h1{
  font-size: 48px;
  line-height: 1.2;
  text-align: left;
}

p{
  margin-top: 20px;
}

.home--hero{
  background-size: cover;
  background-repeat: no-repeat;
  height: 645px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home--logo{
  max-width: 480px;
}

.home--quiz{
  text-align: left;
  
}

.container{
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
}

.home--quiz .container div{
  flex: 0 0 50%;
}

.home--articles{
  color: white;
}

.articles{
  display: flex;
  width: 100%;
  margin-top: 40px;
}


</style>
