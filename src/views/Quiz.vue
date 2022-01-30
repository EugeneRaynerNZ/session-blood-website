<template>
  <main id="quiz" :style="'background-image: url(' + parchment + ');'">

    <a href="/"><img class="logo-stamp" :src="logo" alt=""></a>

    <template>
      <section class="quiz--entry">
        <div class="container">
          <div class="quiz--entry-content">
            <div>
              <h1>{{ intro.title }}</h1>
              <p v-for="(paragraph, index) in intro.paragraphs" :key="'intro-' + index">{{ paragraph }}</p>
              <button @click="quizEntryButton" class="button">{{ intro.buttonText }}</button>
            </div>
            <img :src="introImg" alt="">
          </div>
        </div>
      </section>
    </template>

  </main>
</template>

<script>
import Logo from '../assets/logo.png'
import QuizImage from '../assets/home-quiz-image.png'
import Parchment from '../assets/parchment-background.png'

export default {
  name: 'App',
  data() {
    return {
      quizEntry: true,
      logo: Logo,
      parchment: Parchment,
      introImg: QuizImage,
      intro: {
        title: 'Welcome to the Stonewall Inn adventurer!',
        paragraphs: [
          'The storied heroes and legends of Rathe are as different and varied as the land itself. From the aloof masters of the arcane in Dracai to the primal brutality of the Savage Lands, and everything in between, it\'s fair to say that there are a number of different approaches to encounters they may face in their lives.',
          'So grab a tankard of ale, join us at the table and come play our favourite game - which hero are you?'
        ],
        buttonText: 'Start your adventure'
      },
    }
  },
  methods: {
    quizEntryButton() {
      this.quizEntry = false
      this.$store.set('$currentQuestion', 1)
      this.$router.push('/quiz/question/1')
    }
  },
  mounted() {
    this.$store.set('$currentQuestion', 0)
    this.$store.set('$heroes', this.$store.get('$heroes').map(h => {
      h.points = 0;
      return h
    }))
  }

}
</script>

<style>
.logo-stamp {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100px;
  padding: 40px;
}

#quiz {
  overflow-y: hidden;
  height: 100vh;
}

.quiz--entry {
  height: 100%;
  display: flex;
  align-items: center;
}

.quiz--entry-content {
  display: flex;
  text-align: left;
}

.quiz--entry-content div, .quiz--entry-content img {
  flex: 0 0 50%;
}

/* For dev purposes */
.hero--points {
  border: 1px solid blue;
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 200px;
}

.hero--points-hero {
  padding: 12px;
  border: 1px solid red;
}

.hero--points-hero p {
  margin: 0;
}
</style>