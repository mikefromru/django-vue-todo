<template>
    <div class="container col-sm-8 col-sm-offset-2">
        <p>Welcome to Todo, {{ profile.username }} <a href @click="logout">logout</a></p>
        <div class="panel">
           
            <h2 class="text-center">Add new task</h2>

            <b-form inline @submit.prevent="add_todo">
                    <b-input class="mb-2 mr-sm-2 mb-sm-0" v-model="new_todo" placeholder="Add a new todo"></b-input>
                    <b-btn type="submit">submit</b-btn>
            </b-form>
            
        </div>

        <table class="table">
            <thead>
                <th>Checkmark Done</th>
                <th>Completed</th>
                <th>Task name</th>
                <th>Delete</th>
            </thead>

            <tbody>
                <tr v-for="x in name.slice().reverse()" :key="x.id">
                    <td>
                        <b-form-checkbox v-model="x.complete" @input="set_bird(x)" class="checkbox" ></b-form-checkbox>
                    </td>
                    <td>{{ x.complete }}</td>
                    <td><span :class="{ taskDone: x.complete}">{{ x.name }}</span></td>
                    <td><b-btn variant="danger" @click="delete_one_todo(x.id)">delete</b-btn></td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import "babel-polyfill"
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    name: 'Home',
    data() {
        return {
            new_todo: '',
        }
    },
    computed: mapGetters ({
        authStatus: 'authStatus',
        profile: 'profile',
        name: 'name',

    }),

    methods: {
        set_bird(x) {
            console.log(x.complete)
            if (x.complete === true) {
                axios.patch('/api/todo/' + x.id + '/', {'complete': true})
                .then(response => {})
            } else if(x.complete === false){
                axios.patch('/api/todo/' + x.id + '/', {'complete': false})
                .then(response => {})
            }
        },
        delete_one_todo(id) {
            this.$store.dispatch('DELETE_ONE_TODO', id)
            this.$store.dispatch('GET_TODO')
        },
        async add_todo() {
            await this.$store.dispatch('ADD_TODO', {
                'name': this.new_todo,
                'user': this.profile.pk,
                'complete': this.complete
            }),
            this.new_todo = '',
            this.$store.dispatch('GET_TODO')
        },
        logout() {
           this.$store.dispatch('LOGOUT') 
           this.$router.push({name: 'login'})
        }
    },
    created() {
        this.$store.dispatch('GET_TODO')
    }
}
</script>

<style>

.taskDone {
    text-decoration: line-through;
}

</style>

