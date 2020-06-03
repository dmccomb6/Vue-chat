<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message" class="newMessageTitle">New Message (enter to add):</label>
      <input type="text" class="new-message" name="new-message" v-model="newMessage" />
      <p class="feedback" v-if="feedback">{{  feedback }}</p>   
      <br>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init"

export default {
    name: 'NewMessage',
    props: ['name'],
    data(){
        return {
            newMessage: null,
            feedback: null
        }
    },
    methods:{
        addMessage(){
            if(this.newMessage){
                db.collection('messages').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(err => {
                    conslog.log(err)
                })
                this.newMessage = null
                this.feedback = null
            }else{
                this.feedback = "You must enter a message"
            }
        }
    }
};
</script>

<style>
.new-message{
    background-color:#b8315c;
    padding: 0px 20px 0px 20px;
    color:white;
    
}
.newMessageTitle{
    color:white;    
}
.feedback{
    color:white;
    background-color: #b8315c;
    max-width: 200px;
    text-align: center;
    margin: 0px auto;
    border-radius: 20px;
}

</style>