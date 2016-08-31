import Vue from 'vue'
import App from './App'
import Index from './components/Index'
import News from './components/News'
import Events from './components/Events'
import Videos from './components/Videos'
import About from './components/About'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

var router = new VueRouter({history: true});

router.map({
	'/': {
		component: Index
	},
	'/news': {
		component: News
	},
	'/events': {
		component: Events
	},
	'/videos': {
		component: Videos
	},
	'/about': {
		component: About
	}
})


router.start(App, 'app');
