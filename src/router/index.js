import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Home from '@/components/Home'
import UserFlashcards from '@/components/UserFlashcards'
import AddFlashcard from '@/components/AddFlashcard'
import EditFlashcard from '@/components/EditFlashcard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/my-flashcards',
      name: 'UserFlashcards',
      component: UserFlashcards
    },
    {
      path: '/add-flashcard',
      name: 'AddFlashcard',
      component: AddFlashcard
    },
    {
      path: '/edit-flashcard/:id',
      name: 'EditFlashcard',
      component: EditFlashcard
    }
  ]
})
