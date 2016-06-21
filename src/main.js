import Vue from 'vue'
import App from './App'
import Index from './components/Index'
import News from './components/News'
import Events from './components/Events'
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
	}
})


router.start(App, 'app');
