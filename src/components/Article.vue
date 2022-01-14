<template>
    <div class="article" :style="'background-image: url('+ articleImg +')' ">
      <div class="article--content">
            <h3>articleName</h3>
            <p>{{shortenString}}</p>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Article',
    props: {
        articleName: String,
        articleImg: String, 
        articleShortDescription: String
    },
    data(){
        return {
            limitString: this.articleShortDescription
        }
    },
    computed: {
        shortenString(){
            return this.limitString.substring(0, 20);
        }
    }
}
</script>

<style>
.article{
    background: red;
    flex: 0 0 calc(25% - 15px);
    margin-right: 15px;
    display: flex;
    flex-direction: column-reverse;
    text-align: left;
    height: 200px;
    background-size: cover;
    background-position: center center;
}

.article h3{
    margin: 0;
    font-size: 24px;
}
.article p{
    margin: 0;
    
}

.article--content{
    padding: 8px;
    background: black;
}
</style>