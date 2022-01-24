<template>
    <section class="article">
        <img :src="articleImg" alt="">
        <div class="article--content">
            <h3>articleName</h3>
            <p>{{shortenString}}</p>
        </div>
    </section>
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
    text-align: left;
    height: 200px;
    position: relative;
}

.article img{
    max-width: 100%;
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
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>