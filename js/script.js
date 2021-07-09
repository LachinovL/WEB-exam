Vue.component('task',{
    props: ['data'],
    data() {
      return {

      }
    },
    methods: {
      task_done(){
        this.$emit('task_done')
      }
    },
    template: `
    <div class="task" >
        <h3 class="task__title">{{data.title}}</h3>
        <p v-if="data.desc!=''" class="task__desc">{{data.desc}}</p>

        <div class="task_button">
      <button class="task__done" @click="task_done()">✔️</button>
        </div>
    </div>`
  } )

  
  var vue = new Vue({
    el: '#app',
    

    data: {
    
     showModal: false,
     isElVisible: false,
      string: 'asdasda',
      new_task: {
        desc: ''
      },
      tasks : [
        {
          desc: 'Выполнить экзамен',
        },
      ]
    },
    methods: {
      add_task(){
        if(this.new_task.desc != ''){
          this.tasks.push({
            desc: this.new_task.desc
          });
        }
      },
      delete_task(id){
        this.tasks.splice(id,1);
      },
      open() {
         this.showModal = !this.showModal
      }
    }
  })
