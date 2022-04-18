<template>
  <main id="quiz" :style="'background-image: url(' + parchment + ');'">
    <a href="/"><img class="logo-stamp" :src="logo" alt="" /></a>
    <section class="result">
      <div class="container d-flex">
        <div class="result--box">
          <span>You got</span>
          <h1>{{ yourHeroes }}</h1>
          <p>
            {{ yourHeroes }} is something to do with hero description here it
            should be a large paragraph
          </p>
          <a href="/quiz" class="button">Try Again</a>

          
        </div>
        <div class="question--container-img">
            <!-- <img class="card--image" :src="loadImg(activeQuestion.img)" alt=""> -->
            <img class="card--image" :src="loadImg(yourHeroes.toLowerCase())" alt="">
          </div>
      </div>
      <div></div>
    </section>
  </main>
</template>

<script>
import Parchment from "../assets/parchment-background.png";
import Logo from "../assets/logo.png";

export default {
  name: "Answer",
  data() {
    return {
      heroResults: [],
      parchment: Parchment,
      logo: Logo,
      winner: null
    };
  },
  //loop through heroes array and find the highest point values
  computed: {
    yourHeroes() {
      if (!this.winner) {
        return;
      }
      if (this.winner.length === 1) {
        return this.winner[0].name;
      }

      let winners = this.winner.map((hero) => hero.name);
      let winnersLength = winners.length - 1
      winners = winners[this.getRandomInt(0, winnersLength)]
      return winners;
    },
  },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    },
    loadImg(resultHeroName) {
      return require('../assets/heroes/' + resultHeroName + '.jpg')
    },
  },
  mounted() {
    const heroes = this.$store.get("$heroes");
    const scores = heroes.map((x) => x.points);
    let largest = Math.max.apply(Math, scores);
    this.winner = heroes.filter((x) => x.points >= largest);
  },
};
</script>

<style>
.result {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.result--box {
  flex: 0 0 50%;
  text-align: left;
}

.result--box h1 {
  font-size: 60px;
}

.result--box span {
  font-size: 30px;
}

.email--subscribe {
  flex: 0 0 50%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  background: white;
  box-shadow: 0px 1px 20px 4px rgba(191, 191, 191, 0.14);
  padding: 16px;
  text-align: left;
}

.email--subscribe label {
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  text-align: left;
}

.email--subscribe p {
  margin: 0;
}

.email--subscribe label input {
  padding: 8px;
}
</style>