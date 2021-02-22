<template>
    <form @submit.prevent="createUser()">
        <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full">
                <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                <input v-model="user.name" type="text" id="full-name" name="full-name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative flex-grow w-full">
                <label for="username" class="leading-7 text-sm text-gray-600">Username</label>
                <input v-model="user.username" type="text" id="username" name="username" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative flex-grow w-full">
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input v-model="user.email" type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <button type="submit" class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Create</button>
        </div>
    </form>
</template>


<script>
    export default {
        name: 'create-user',
        data () {
            return {
                user : {
                    name: '',
                    username: '',
                    email: ''
                }
            }
        },
        methods: {
            createUser () {
                this.$emit('user', this.user);
            }
        }
    }
</script>