<script lang="tsx">
import { h, defineComponent } from 'vue';

export default defineComponent({
  props: {
    msg: String,
  },
  render() {
    // return <p>JSX</p>;
    return h('p', {}, 'JSX');
  },
});
</script>
