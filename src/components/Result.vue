<template>
    <section class="result">
      <div class="container d-flex">
        <div class="result--box">
            <span>You got</span> 
            <h1>{{findHighestValues}}</h1>
            <a href="/quiz" class="button">Try Again</a>
        </div>
        <!-- <div class="email--subscribe">
            <p>Want to know more? Enter your email address and we will send you a detailed breakdown.</p>
            <label for="email">
                <span><strong>Email Address</strong></span>
                <input name="email" type="text" placeholder="Type your email">
            </label>
            <button class="button">Recieve my hero now!</button>
        </div> -->
      </div>
    </section>
</template>

<script>
export default {
    name: 'Answer',
    props: {
        heroes: Array
    },
    data() {
        return {
            heroResults: []
        }
    },
    //loop through heroes array and find the highest point values
    computed: {
        findHighestValues(){
            const scores = this.heroes.map(x => x.points)
            let largest = Math.max.apply(Math, scores);
            const winner = this.heroes.filter(x => x.points >= largest)

            if(winner.length === 1){
                return winner[0].name
            }

            const winners = winner.map(hero => hero.name)
            // let winnersLength = winners.length - 1
            // winners = this.getRandomInt(0, winnersLength)

            return winners
            
        },
    },
    // methods: {
    //     getRandomInt(min, max) {
    //         min = Math.ceil(min);
    //         max = Math.floor(max);
    //         return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    //     }
    // }
}
</script>

<style>
.result{
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.result--box{
    flex: 0 0 50%;
    text-align: left;
}

.result--box h1{
    font-size: 60px;
}

.result--box span{
    font-size: 30px;
}

.email--subscribe{
    flex: 0 0 50%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    background: white;
    box-shadow: 0px 1px 20px 4px rgba(191,191,191,0.14);
    padding: 16px;
    text-align: left;
}

.email--subscribe label{
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    text-align: left;
}

.email--subscribe p{
    margin: 0;
}

.email--subscribe label input{
    padding: 8px;
}
</style>