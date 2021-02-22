<template>
    <main>
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span class="ml-3 text-xl">Tailblocks</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 hover:text-gray-900">First Link</a>
                    <a class="mr-5 hover:text-gray-900">Second Link</a>
                    <a class="mr-5 hover:text-gray-900">Third Link</a>
                    <a class="mr-5 hover:text-gray-900">Fourth Link</a>
                </nav>
                <button class="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-400 rounded text-base text-white mt-4 md:mt-0" @click="showCreateUser">Create User</button>
            </div>
        </header>
        <section>
            <div class="container px-5 py-10 mx-auto space-y-10">
                <div class="flex flex-col text-center w-full">
                    <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                </div>
                <div v-if="show_create_user">
                    <create-user @user="createUser" />
                </div>
                <div v-if="show_edited_user">
                    <update-user :data="user_edit" @update="updatedUser" />
                </div>
                <div class="grid grid-cols-3 gap-6">
                    <div v-for="user in users" :key="user.id" class="h-full flex items-center border p-4 rounded-lg" :class="user.id === user_edit.id ? 'border-gray-300 bg-gray-100' : 'border-gray-200'">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80">
                        <div class="flex-grow relative">
                            <h2 class="text-gray-900 title-font font-medium">{{ user.name }}</h2>
                            <p class="text-gray-500">{{ user.username }}</p>
                            <p class="mb-4 text-sm text-gray-400">{{ user.email }}</p>
                            <span class="absolute right-0 top-0 z-10 space-x-2">
                                <button type="button" class="apparence-none border-0 focus:outline-none" @click="showEditedUser(user)">
                                    <svg class="stroke-current stroke-2 text-indigo-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </button>
                                <button type="button" class="apparence-none border-0 focus:outline-none" @click="deleteUser(user.id)">
                                    <svg class="stroke-current stroke-2 text-red-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>


<script>
    import Services from '@/services/services'
    import CreateUser from './CreateUser'
    import UpdateUser from './UpdateUser'
    export default {
        name: 'crud',
        components: {
            'create-user' : CreateUser,
            'update-user' : UpdateUser
        },
        data () {
            return {
                users: [],
                user_edit: {},
                show_create_user: false,
                show_edited_user: false
            }
        },
        methods: {
            getUsers () {
                Services.getUsers()
                    .then(res => { 
                        this.users = res
                    })
            },
            createUser(user) {
                Services.createUser(user)
                    .then( res => {
                        this.users.push(res);
                    })
            },
            updatedUser (user) {
                Services.updatedUser(user)
                    .then( res => {
                        this.users.forEach( user => {
                            if(user.id === res.id){
                                // console.log(res);
                                user = res;
                            } 
                        })
                    })
            },
            deleteUser (id) {
                Services.deleteUser(id)
                    .then( res => {
                        const users = this.users.filter(user => {
                            if( user.id !== id) {
                                return user;
                            }
                        })
                        this.users = users;
                    })
            },
            showCreateUser () {
                this.show_create_user = true;
                this.show_edited_user = !this.show_create_user;
                this.user_edit = {}
            },
            showEditedUser (user) {
                this.show_edited_user = true;
                this.show_create_user = !this.show_edited_user;
                this.user_edit = user;
            }
        },
        mounted() {
            this.getUsers();
        }

    }
</script>