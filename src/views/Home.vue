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
            <template v-for="article in articles">
              <router-link :key="'article-' + article.name" :to="'/articles/' + article.name"> 
                <Article 
                  :article="article" 
                />
              </router-link>
            </template>
            
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
import Article from '../components/Article.vue'
import ArticleImage1 from '../assets/home-quiz-image.png'

export default {
  name: 'Home',
  components: {
    Article
  },
  data(){
    return {
      heroImage: HeroImage,
      heroLogo: Logo,
      parchment: Parchment,
      quizImage: QuizImage,
      articles: [
        {id: 1, name: 'Eugene1', img: ArticleImage1, shortDescription: '123'},
        {id: 2, name: 'Eugene2', img: ArticleImage1, shortDescription: '123'},
        {id: 3, name: 'Eugene3', img: ArticleImage1, shortDescription: '123'},
        {id: 4, name: 'Eugene4', img: ArticleImage1, shortDescription: '123'},
      ]
    }
  }
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
}


</style>
