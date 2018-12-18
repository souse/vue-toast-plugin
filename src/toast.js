import VueToastPlugin from './lib/toast';

const toastPlugin = {
	install: function(Vue) {
		Vue.component(VueToastPlugin.name, VueToastPlugin);
	}
};

if (typeof window !== undefined && window.Vue) {
	window.Vue.use(toastPlugin);
}

export default toastPlugin;