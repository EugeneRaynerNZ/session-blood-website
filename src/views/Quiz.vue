<template>
  <div id="quiz" :style="'background-image: url(' + parchment + ');'"> 

    <div v-if="quizEntry" class="quiz--entry">
      <div class="container">
        <div class="quiz--entry-content">
          <div>
            <h1>{{intro.title}}</h1>
            <p v-for="(paragraph, index) in intro.paragraphs" :key="'intro-' + index">{{paragraph}}</p>
            <div @click="quizEntryButton" class="button">{{intro.buttonText}}</div>
          </div>
          <img :src="introImg" alt="">
        </div>
      </div>
    </div>

    <template v-else>

      <div class="question-container" >
        <Question 
          v-for="(question, index) in questions" :key="question.question" 
          :number="index"
          :clicked="question.clicked"
          :heroes="heroes" 
          :responses="question.responses" 
          :question="question.question"
          :img="question.img"
        />
      </div>

      <Result :heroes="heroes" v-if="questions.length === 15"/>

      <div class="hero--points">
        <div class="hero--points-hero" v-for="hero in heroes" :key="hero.id">
          <p><strong>{{hero.name}}</strong></p>
          <p>Points: <strong>{{hero.points}}</strong></p>
        </div>
      </div>

    </template>
    
    
  </div>
</template>

<script>
import QuizImage from '../assets/home-quiz-image.png'
import Question from '../components/Question.vue'
import Image1 from '../assets/quiz/question-1.jpg'
import Image2 from '../assets/quiz/question-2.jpg'
import Image3 from '../assets/quiz/question-3.jpg'
import Image4 from '../assets/quiz/question-4.jpg'
import Image5 from '../assets/quiz/question-5.jpg'
import Image6 from '../assets/quiz/question-6.jpg'
import Image7 from '../assets/quiz/question-7.jpg'
import Image8 from '../assets/quiz/question-8.jpg'
import Image9 from '../assets/quiz/question-9.jpg'
import Image10 from '../assets/quiz/question-10.jpg'
import Image11 from '../assets/quiz/question-11.jpg'
import Image12 from '../assets/quiz/question-12.jpg'
import Image13 from '../assets/quiz/question-13.jpg'
import Image14 from '../assets/quiz/question-14.jpg'
import Image15 from '../assets/quiz/question-15.jpg'
import Result from '../components/Result.vue'
import Parchment from '../assets/parchment-background.png'

export default { 
  name: 'App',
  components: {
    Question,
    Result
  },
  data(){
    return {
      quizEntry: true,
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
      heroes: [
        {id: 1, name: 'Katsu', points: 0},
        {id: 2, name: 'Bravo', points: 0},
        {id: 3, name: 'Dorinthea', points: 0},
        {id: 4, name: 'Rhinar', points: 0},
        {id: 5, name: 'Viserai', points: 0},
        {id: 6, name: 'Dash', points: 0},
        {id: 7, name: 'Kano', points: 0},
        {id: 8, name: 'Azalea', points: 0},
        {id: 9, name: 'Benji', points: 0},
        {id: 10, name: 'Kavdaen', points: 0},
        {id: 11, name: 'Data Doll', points: 0},
        {id: 12, name: 'Ira', points: 0},
        {id: 13, name: 'Kayo', points: 0},
        {id: 14, name: 'Kassai', points: 0},
        {id: 15, name: 'Chane', points: 0},
        {id: 16, name: 'Prism', points: 0},
        {id: 17, name: 'Boltyn', points: 0},
        {id: 18, name: 'Levia', points: 0},
        {id: 19, name: 'Lexi', points: 0},
        {id: 20, name: 'Oldhim', points: 0},
        {id: 21, name: 'Briar', points: 0},
        {id: 22, name: 'Valda', points: 0},
        {id: 23, name: 'Shiyana', points: 0},
      ],
      questions: [
        {
          question: 'Which scenario is most likely to spur you into action?',
          clicked: false,
          img: Image1,
          responses: [
            {
              answer: 'A nearby town has many innocent lives in danger. Only you know how to stop the disaster.',
              pointIds: [2, 3, 9, 16, 17, 19, 20, 22]
            },
            {
              answer: 'You heard your sibling has been imprisoned by a distant ruler.',
              pointIds: [1, 12]
            },
            {
              answer: 'A reliable source has told you of a unique artifact. You know this artifact can enhance your abilities beyond comprehension.',
              pointIds: [5, 6, 7, 11, 15, 18, 23]
            },
            {
              answer: 'You have a tip-off for a hidden treasure that could make you incredibly wealthy.',
              pointIds: [8, 14, 10, 10]
            },
          ]
        },
        {
          question: 'What would be your preferred weapon?', 
          clicked: false,
          img: Image2,
          responses: [
            {
              answer: 'Something light and agile. You want to kill your foes swiftly.',
              pointIds: [1, 3, 6, 8,9, 12, 13, 14, 19]
            },
            {
              answer: 'The bigger the better. Crushing your enemies under a hefty weapon brings you joy.',
              pointIds: [2, 4, 17, 20, 22]
            },
            {
              answer: 'You don\'t rely on a weapon. Anything that channels your inner magical powers will do enough damage.',
              pointIds: [5, 7, 11, 15, 16, 18, 21, 23]
            },
          ]
        },
        {
          question: 'You see some strangers up ahead. Do you:', 
          clicked: false,
          img: Image3,
          responses: [
            {
              answer: 'Ignore them and hide. There is no point drawing attention to yourself.',
              pointIds: [1, 4, 5, 8, 11, 13, 18]
            },
            {
              answer: 'Eye them up and engage only if you think they can further your cause.',
              pointIds: [3, 7, 9, 10, 12, 14, 15, 16, 20, 21, 23]
            },
            {
              answer: 'Jump right into a conversation. A stranger can be made into a friend with a single chat.',
              pointIds: [2, 6, 17, 19, 22]
            },
          ]
        },
        {
          question: 'You see a raging storm heading your way. To make matters worse, you notice a group of bandits about to pull a sneak attack on you. How do you approach the situation?', 
          clicked: false,
          img: Image4,
          responses: [
            {
              answer: 'You have planned for any circumstance. You\'ve been preparing for battle and you\'ve been preparing for extreme weather conditions. You know you\'ll be fine.',
              pointIds: [3, 8, 9, 11, 12, 14, 16, 20, 23]
            },
            {
              answer: 'Your ability to adapt will shine here. This is nothing compared to what life has already thrown your way.',
              pointIds: [1, 2, 4, 4, 5, 15, 18, 21]
            },
            {
              answer: 'This sounds like chaos and you thrive in chaos. The thought of the storm hitting your foes brings a smile to your face. ',
              pointIds: [6, 7, 10, 13, 13, 17, 19, 22]
            },
          ]
        },
        {
          question: 'How do you approach combat?', 
          clicked: false,
          img: Image5,
          responses: [
            {
              answer: 'Pure instinct guides your decisions. Switching off your mind and following the movements of your body gives you the best results.',
              pointIds: [1, 2, 3, 4, 9, 13, 17, 18, 21, 22]
            },
            {
              answer: 'Combat is about well thought out tactics. Superior strategy makes a fighter victorious. ',
              pointIds: [5, 10, 12, 14, 15, 20, 23]
            },
            {
              answer: 'You rely on long range in combat. Having the distance keeps you alive.',
              pointIds: [6, 7, 8, 11, 16, 19]
            },
          ]
        },
        {
          question: 'After a long battle, you stop by a small village on your way back home. The first place you visit is:', 
          clicked: false,
          img: Image6,
          responses: [
            {
              answer: 'The Tavern. As a cold drink and banter is the only choice after a bloody skirmish. ',
              pointIds: [2, 6, 10, 17, 19, 22]
            },
            {
              answer: 'The Armoury. As a sharp blade or enforced steel guarantees your survival. ',
              pointIds: [1, 3, 5, 8, 9, 12, 14, 20]
            },
            {
              answer: 'The Seer\'s Hut. Seeking wisdom from elders is of utmost importance. ',
              pointIds: [7, 15, 16, 21, 23]
            },
          ]
        },
        {
          question: 'You just lost a family heirloom. How important is such an object to you?', 
          clicked: false,
          img: Image7,
          responses: [
            {
              answer: 'You are your roots. Knowing and honouring the past, you know where to head in the future. ',
              pointIds: [1, 2, 9, 12, 14, 16, 17, 19, 20, 21]
            },
            {
              answer: 'If the artifact had no inherent powers, it is useless to you. ',
              pointIds: [5, 7, 8, 10, 15, 18, 23]
            },
            {
              answer: 'You would rather focus on writing your own path than dwell on the past.',
              pointIds: [3, 6, 11, 22]
            },
          ]
        },
        {
          question: 'What is your preferred time to travel?', 
          clicked: false,
          img: Image8,
          responses: [
            {
              answer: 'Daytime. You can clearly see any foes and obstacles in your path.',
              pointIds: [2, 3, 6, 12, 14, 16, 17, 19, 22]
            },
            {
              answer: 'Nighttime. Everyone\'s asleep, so no running into trivial encounters.',
              pointIds: [4, 4, 8, 18, 18]
            },
            {
              answer: 'You don\'t care, as reaching your destination is the only thing that matters. ',
              pointIds: [1, 5, 11, 11, 15, 23]
            },
            {
              answer: 'Travel? You are very content where you are. Only an extraordinary event would get you moving. ',
              pointIds: [7, 9, 10, 13, 13, 20, 21]
            },
          ]
        },
        {
          question: 'You notice a strange figure run past you and hastily turn into an alley on the right. Shortly after, a city guard runs towards you and asks if you saw where the culprit went. Do you:', 
          clicked: false,
          img: Image9,
          responses: [
            {
              answer: 'You tell them the truth. Whoever it was, deserves to be caught and face justice.',
              pointIds: [2, 3, 9, 16, 17, 19, 20]
            },
            {
              answer: 'You just shrug and continue on your way. No need to waste energy on things that don\'t concern you.',
              pointIds: [1, 4, 5, 8, 11, 12, 13, 14, 15, 18, 21]
            },
            {
              answer: 'You misdirect them. Nothing like a little lie to amuse yourself.',
              pointIds: [6, 7, 10, 22, 23]
            },
          ]
        },
        {
          question: 'You see a tavern where you could stay the night. How do you spend your evening?', 
          clicked: false,
          img: Image10,
          responses: [
            {
              answer: 'Enter, grab a pint and join the fray. By the end of the night everyone will know you and you will know everyone. It\'s the only way to celebrate being alive another day.',
              pointIds: [2, 6, 17, 19, 22]
            },
            {
              answer: 'Enter and join in with the others. Conversations with locals can teach you a lot and you know that any information can be useful in guiding your decisions.',
              pointIds: [3, 7, 9, 10, 12, 23]
            },
            {
              answer: 'Enter, get your room for the night and retire early. Socialising is pointless. You could be doing productive research in solitude.',
              pointIds: [1, 8, 14, 15, 16, 20, 21]
            },
            {
              answer: 'You sleep outside. No need to draw attention to yourself.',
              pointIds: [4, 5, 11, 11, 13, 18, 18]
            },
          ]
        },
        {
          question: 'What is your preferred environment?', 
          clicked: false,
          img: Image11,
          responses: [
            {
              answer: 'The hustle and bustle of a big city is where you are most comfortable.',
              pointIds: [3, 6, 8, 9, 10, 10, 16, 17, 20, 22]
            },
            {
              answer: 'Wilderness is where you feel free. You only follow one law - the law of nature.',
              pointIds: [4, 4, 13, 13, 21, 21]
            },
            {
              answer: 'You\'ve been on the road so long the road has become your home.',
              pointIds: [2, 12, 14, 19]
            },
            { 
              answer: 'It doesn\'t matter where you are. Your quest is the only thing that requires your attention.',
              pointIds: [1, 5, 7, 11, 15, 18, 23]
            },
          ]
        },
        {
          question: 'You walk past a wanted poster with your face on it.', 
          clicked: false,
          img: Image12,
          responses: [
            {
              answer: 'This must be a mistake. You go straight to the local authorities to resolve the matter.',
              pointIds: [2, 3, 6, 9, 16, 17, 19, 20, 22]
            },
            {
              answer: 'Great. Another hindrance in your way. You rip it off and move on.',
              pointIds: [1, 4, 7, 11, 13, 15, 21, 23]
            },
            {
              answer: 'Not surprising. With the things you have done, it\'s strange you haven\'t seen one earlier.',
              pointIds: [5, 8, 10, 12, 14, 18]
            },
          ]
        },
        {
          question: 'A traveling merchant shows you their wares, which one attracts you the most:', 
          clicked: false,
          img: Image13,
          responses: [
            {
              answer: 'A glowing necklace with evident arcane energy.',
              pointIds: [5, 7, 15, 16, 21]
            },
            {
              answer: 'A potion that grants you inhuman strength.',
              pointIds: [2, 3, 9, 10, 17, 18, 19, 22]
            },
            {
              answer: 'An intricate gadget that can help you bend time.',
              pointIds: [6, 11]
            },
            {
              answer: 'Ignore them all. You\'re not much of a shopper. ',
              pointIds: [1, 4, 8, 12, 13, 14, 20, 23]
            },
          ]
        },
        {
          question: 'Which type of climate is most appealing to you?', 
          clicked: false,
          img: Image14,
          responses: [
            {
              answer: 'Crisp air of a snowy mountains\' peak is where you feel most alive.',
              pointIds: [9, 19, 20, 22]
            },
            {
              answer: 'Scorching sun, white sands and a beach is where you feel most relaxed.',
              pointIds: [7, 14]
            },
            {
              answer: 'A mild, temperate weather, where plants thrive makes you feel most at ease. ',
              pointIds: [1, 2, 4, 12, 13, 17, 21]
            },
            {
              answer: 'You don\'t worry yourself with such trivial matters.',
              pointIds: [3, 5, 6, 8, 10, 15, 16, 18, 23]
            },
          ]
        },
        {
          question: 'When on the road, you come across a fallen nest with an exotic bird in it. Do you:', 
          clicked: false,
          img: Image15,
          responses: [
            {
              answer: 'Take it with you to the next town. Hopefully someone there can look after it.',
              pointIds: [1, 2, 3, 6, 9, 16, 17, 19, 20, 22]
            },
            {
              answer: 'You hide the bird in a safe area in a nearby bush. You cannot afford to use up energy to look after this creature.',
              pointIds: [5, 7, 8, 11, 12, 14, 21, 23]
            },
            {
              answer: 'You take care of the bird. Whether a future ally or a subject for your experiments, you\'ll find a good use for them.',
              pointIds: [10, 15]
            },
            {
              answer: 'Eat the bird. Free sustenance.',
              pointIds: [4, 13, 18]
            },
          ]
        },
      ]
    }
  },

  methods: {
    quizEntryButton() {
      this.quizEntry = false
    }
  }
  
}
</script>

<style>
#quiz{
  overflow-y: hidden;
  height: 100vh;
}

.quiz--entry{
  height: 100%;
  display: flex;
  align-items: center;
}

.quiz--entry-content{
  display: flex;
  text-align: left;
}

.quiz--entry-content div, .quiz--entry-content img{
  flex: 0 0 50%;
}
/* For dev purposes */
.hero--points{
  border: 1px solid blue;
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 200px;
}

.hero--points-hero{
  padding: 12px;
  border: 1px solid red;
}

.hero--points-hero p{
  margin: 0;
}
</style>