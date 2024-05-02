Vue.createApp({
  data() {
    return {
      todos: [
        { task: "example1", isCompleted: false },
        { task: "example2", isCompleted: false }
      ]
    }
  },
  methods: {
    addTodo: function(){
      if(this.newTask == ""){
        alert("newTask is empty");

        return;
      }
      this.todos.push(
        { task: this.newTask, isCompleted: false }
      );
      this.newTask = "";
    },
    deleteTodo: function(todo){
      if(window.confirm("Delete?") == true){
        this.todos.splice(todo, 1);
      }
    }
  }
}).mount('#todo');