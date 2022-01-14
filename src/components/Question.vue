<template>
    <div ref="block" class="question--master-box" style="z-index: 20;" :style="'z-index:' + zIndex" v-if="activeQuestion">
      
      <div class="question--container" >
        <div class="question--container-content">
          <p class="question-number animation-1">{{number + 1}} / 15</p>
            <div class="question">
                <div class="question-title animation-2">
                  <h2>{{question}}</h2>
                </div>
                <div class="response-box animation-3">
                    <div class="response" v-for="(response, index) in responses" :key="'response-' + index">
                        <button class="response--card" v-on:click="chooseResponse(response)">
                            <div class="response--card-description">{{ response.answer }}</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="question--container-img">
          <img class="card--image" v-if="img" :src="img" alt="">
        </div>
      </div>
    </div>
</template>

<script>
import { gsap } from "gsap";

export default {
    name: 'Question',
    props: {
      heroes: Array,
      responses: Array, 
      question: String,
      clicked: Boolean,
      number: Number,
      img: String,
    },
    data(){
      return {
        activeQuestion: true,
        watchRoute: ''
      }
    },
    watch: {
      watchRoute: function (){
        console.log(this.watchRoute)
          // const { block } = this.$refs
          // const question = block.getElementsByClassName("question--container")

          // gsap.timeline().to(question, {opacity: 1, duration:0.4})
      }
    },
    computed: {
      zIndex(){
        return 100 - this.number
      },
    },
    methods:{
        chooseResponse(response){
            const pointIds = response.pointIds

            if(!pointIds.length){
                return
            }
            
            for(let i = 0; i < pointIds.length; i++){
                this.heroes.find(hero => hero.id === pointIds[i]).points++
            }

            this.activateExitAnimation()

        },
        fadeOut(){
          const { block } = this.$refs
          const question = block.getElementsByClassName("question--container")

          gsap.timeline().to(question, {x: 100, opacity: 0, duration:0.4})
        },
        fadeIn(){
          const { block } = this.$refs
          const question = block.getElementsByClassName("question--container")

          gsap.timeline().to(question, {y: -100, opacity: 1, duration:0.4})
        },
        activateExitAnimation(){
          this.fadeOut()
          history.replaceState({}, document.title, location.protocol + '//' + location.host + '/quiz/question-' + this.number + 2 )

          setTimeout(() => {this.activeQuestion = false}, 400);
        },
    },
    mounted(){
      this.watchRoute = this.$route.params.id
      const { block } = this.$refs
      const question = block.getElementsByClassName("question--container")
      gsap.timeline().set(question, {opacity: 0}).to(question, {opacity: 1, duration:0.4})
      
      
      history.replaceState({}, document.title, location.protocol + '//' + location.host + '/quiz/question-1' )
    }
}
</script>

<style>
.question--master-box{
  height: 100vh;
  max-width: 900px;
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.question--container{
  display: flex;
}

.question--container-img{
  flex: 0 0 50%;
  padding: 40px;
}

.question--container-img img{
  max-width: 100%;
}

.question--container-content{
  flex: 0 0 50%;
}

.question-number{
  text-align: left;
}

button{
	border: none;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  text-align: center;
  padding: 0;
  margin: 0;
}

.response--card-description{
  line-height: 120%;
}

.question-title{
  margin-top: 8px;
  flex: 0 0 50%;
  text-align: left;
  font-size: 36px;
  line-height: 100%;
}

.response-box{
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 900px;
  margin: 20px auto 0 auto;
}

.response--card{
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

.response--card:hover{
  box-shadow: 0px 1px 20px 4px rgba(191,191,191,0.14);
  cursor: pointer;
}

.response--card-description{
  text-align: left;
  flex: 0 0 90%;
}

.response--card-button{
    display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  align-self: center;
  color: red;
}
</style>