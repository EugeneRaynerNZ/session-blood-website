<template>
    <div class="result">
      <span>You got</span> 
      <h1>{{findHighestValues}}</h1>
    </div>
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

            return winners
            
        }
    }
}
</script>

<style>
.result{
    margin-top: 200px;
}
</style>