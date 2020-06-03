<template>
  <div class="chat container">
      <h2 class="center">Chat</h2>
      <div class="card">
          <div class="card-content">
              <ul class="messages" v-chat-scroll>
                  <li v-for="message in messages" :key=message.id>
                      <span class="white-text">{{ message.name }}</span>
                      <span class="grey-text ">{{ message.content }}</span>
                      <span class="grey-text time">{{ message.timestamp }}</span>
                  </li>
              </ul>
          </div>
          <div class="card-action">
              <NewMessage :name="name"/>
          </div>
      </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    },
    data(){
        return{
            messages: []
        }
    },
    methods: {

    },
    created(){
        let ref = db.collection('messages').orderBy('timestamp')
        ref.onSnapshot(snapshot => {
           snapshot.docChanges().forEach(change => {
               if(change.type == 'added'){
                   let doc = change.doc
                   this.messages.push({
                       id: doc.id,
                       name: doc.data().name,
                       content: doc.data().content,
                       timestamp: moment(doc.data().timestamp).format('LLL')
                    })
               }
           })
        })
    }
}
</script>

<style>
body{
    background-image: url('../../img/mountain.jpg');
}
h2{
    color: #b8315c;
    font-size: 3.6em;
    margin-bottom: 40px;
}
.chat span{
    font-size: 1.4em;
}
.chat .time{
    display: block;
    font-size: 1.2em;
}
ul li{
    display:  block;
}
.card .card-action{
    padding: 5px 5px;
}
.text{
   margin: 10px
}
.messages{
    max-height:400px;
    overflow: auto;
}
.messages::-webkit-scrollbar{
    width: 3px;
}
.messages::-webkit-scrollbar-track{
    background: #ddd;
}
.messages::-webkit-scrollbar-thumb{
    background: #b8315c;
}
</style>