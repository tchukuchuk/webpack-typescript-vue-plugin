import Vue from 'vue';
import VueMq from 'vue-mq';
import HelloDecoratorComponent from './components/HelloDecorator.vue';

Vue.use(VueMq, {
    breakpoints: {
        sm: 450,
        md: 1250,
        lg: Infinity,
    }
})

Vue.component('hello-decorator-component', HelloDecoratorComponent);

const v = new Vue({
    el: '#app',
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <h1>Hello Decorator Component</h1>
        <hello-decorator-component :name="name" :initialEnthusiasm="5" />
        </div>
    `,
    data: { name: 'World' },
});
