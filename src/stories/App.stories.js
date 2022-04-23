import App from '../App.vue';

export default {
  title: 'App',
  component: App,
  argTypes: {},
};

const Template = (args) => ({
  components: { App },
  setup() {
    return { args };
  },
  template: '<App v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
