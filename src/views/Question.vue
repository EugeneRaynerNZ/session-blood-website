<template>
  <main id="quiz" :style="'background-image: url(' + parchment + ');'">
    <a href="/"><img class="logo-stamp" :src="logo" alt=""></a>
    <section ref="block" class="question--master-box" style="z-index: 20;">
      <div class="question-title animation-2">
        <h2>{{ activeQuestion.question }}</h2>
      </div>
      <div class="question--container" style="opacity: 0">
        <div class="question--container-content">
          <p class="question-number animation-1">{{ questionId }} / {{ questions.length }}</p>
          <div class="question">

            <div class="response-box animation-3">
              <div class="response" v-for="(response, index) in activeQuestion.responses" :key="'response-' + index">
                <button class="response--card" v-on:click="chooseResponse(response)">
                  <div class="response--card-description">{{ response.answer }}</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="question--container-img">
          <img class="card--image" v-if="activeQuestion.img" :src="activeQuestion.img" alt="">
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import {gsap} from "gsap"
import Parchment from '../assets/parchment-background.png'
import Logo from '../assets/logo.png'
import Questions from '../assets/quiz/questions.json'

export default {
  name: 'Question',
  data() {
    return {
      questionClass: null,
      parchment: Parchment,
      logo: Logo,
      questions: Questions
    }
  },
  computed: {
    activeQuestion() {
      return Questions.find(q => +q.id === +this.$route.params.id)
    },
    questionId() {
      return this.$route.params.id
    }
  },
  methods: {
    routeCheck() {
      const {block} = this.$refs
      this.questionClass = block.getElementsByClassName("question--container")
      console.log(this.$store.get('$currentQuestion'), +this.questionId)
      if (+this.$store.get('$currentQuestion') !== +this.questionId) {
        if (this.$store.get('$currentQuestion') === 0) {
          this.$router.push('/quiz')
        } else {
          this.$router.push('/quiz/question/' + this.$store.get('$currentQuestion'))
        }
      }
      setTimeout(() => {
        gsap.timeline().set(this.questionClass, {opacity: 0}).to(this.questionClass, {y: 0, opacity: 1, duration: 0.4})
      }, 100)
    },
    chooseResponse(response) {
      const pointIds = response.pointIds
      if (!pointIds.length) {
        return
      }
      let heroes = this.$store.get('$heroes')
      for (let i = 0; i < pointIds.length; i++) {
        heroes.find(hero => hero.id === pointIds[i]).points++
      }
      this.$store.set('$heroes', heroes)
      this.activateExitAnimation()
    },
    activateExitAnimation() {
      gsap.timeline({
        onComplete: () => {
          if (+this.questionId === this.questions.length) {
            this.$store.set('$currentQuestion', 0)
            this.$router.push('/result')
          } else {
            this.$store.set('$currentQuestion', (+this.questionId + 1))
            this.$router.push('/quiz/question/' + (+this.questionId + 1))
          }
        }
      })
          .to('.question--container', {y: 200, opacity: 0, duration: 0.6})
      // .to('.question--container', {y: 200, opacity: 1, duration:0.6})
    },
  },
  mounted() {
    this.routeCheck()
  },
  updated() {
    this.routeCheck()
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

.question--master-box {
  height: 100vh;
  max-width: 900px;
  width: 100%;
  position: relative;
  margin: 0 auto;
  /* opacity: 0; */

}

.question--container .question--master-box:first-child {
  opacity: 100;
}

.question--container {
  display: flex;
}

.question--container-img {
  flex: 0 0 50%;
  padding: 40px;
}

.question--container-img img {
  max-width: 100%;
}

.question--container-content {
  flex: 0 0 50%;
}

.question-number {
  text-align: left;
}

button {
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-align: center;
  padding: 0;
  margin: 0;
}

.response--card-description {
  line-height: 120%;
}

.question-title {
  padding: 50px 0;
  flex: 0 0 50%;
  text-align: left;
  font-size: 36px;
  line-height: 100%;
}

.response-box {
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 900px;
  margin: 20px auto 0 auto;
}

.response--card {
  max-width: 100%;
  background: white;
  transition: all 0.2s;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 12px;
}

.response--card:hover {
  box-shadow: 0px 1px 20px 4px rgba(191, 191, 191, 0.14);
  cursor: pointer;
}

.response--card-description {
  text-align: left;
  flex: 0 0 90%;
}

.response--card-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  align-self: center;
  color: red;
}
</style>