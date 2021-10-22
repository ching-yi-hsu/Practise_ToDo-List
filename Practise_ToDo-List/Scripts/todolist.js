

var todolist = new Vue({
    el: "#todo",
    data: {
        todos: [
            { text: "Learn Code" },
            { text: "Learn English" },
            { text: "Watch Movie" }
        ],
        inputValue: ''
    },
    methods: {
        addTodo: function () {
            this.todos.push({ text: this.inputValue })
            this.inputValue = ''
        },
        clearAll: function () {
            this.todos = []
        },
        removeTodo: function (index) {
            this.todos.splice(index,1)

        }
    }

    

})

/*methods: {
    addTodo: function () {
        this.todos.push(this.inputValue);
        console.log(this.todos);
        this.inputValue = '';
    },
    removeTodo: function (index) {
        this.todos.splice(index, 1);
    },
    clearAll: function () {
        this.todos = []
    }
    */