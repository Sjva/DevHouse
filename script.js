var app = new Vue({
    el: '#app',
    data: {
        users: [
            { id: 1111, username:"Adam ", email: "sandler@gmail.us" },
            { id: 1112, username:"Bradley ", email: "pitt@gmail.us" },
            { id: 1113, username:"Jack ", email: "nicholson@gmail.us" },
            { id: 1114, username:"John ", email: "depp@gmail.us" },
            { id: 1115, username:"Keanu ", email: "reeves@gmail.us" },
            { id: 1116, username:"Orlando ", email: "bloom@gmail.us" },
            { id: 1117, username:"Willard ", email: "smith@gmail.us" }
        ],
        user: {
            username: "",
            email: ""
        },
        index: null
    },
    methods: {
        edit: function (index) {
            this.index = index;
            this.user.username = this.users[index].username;
            this.user.email = this.users[index].email;
        },
        saveUser: function (){
            this.users[this.index].username = this.user.username;
            this.users[this.index].email = this.user.email;
        }
    }
});