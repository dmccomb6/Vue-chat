<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="white-text"> Welcome
          <form action="" @submit.prevent="enterChat">
            <label for="name">Enter your name:</label>
            <input type="text" class="center-align white" name="name" v-model="name">
            <p v-if="feedback" class="red-text feedbackText"> {{ feedback }}</p>
            <button class="btn btnColour">Enter Chat</button>
          </form>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return { 
      name: null,
      feedback: null
    }
  },
  methods:{
    enterChat(){
      if(this.name){
        this.$router.push({ name: 'Chat', params: { name: this.name} })
      }else{
        this.feedback = 'You must enter a name'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body{
  background-image: url('../../img/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.welcome {
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2 {
  font-size: 3em;
}
.welcome button{
  margin: 30px auto;
}
.card-content{
  border: 5px solid whitesmoke;
  background-color: #131d35;
}
.btnColour{
  background-color: #b8315c;
}
.feedbackText{
  font-size: 16px;
}
@media screen and (max-width: 500px) /* Mobile */ {
  body {
    background-image: url('../../img/spring.jpg');
  }
}
</style>
