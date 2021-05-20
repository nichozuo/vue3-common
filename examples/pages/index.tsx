import { defineComponent } from 'vue';
import { MySearchSubmitButton } from '../../src';
export default defineComponent({
  setup() {
    return () => (
      <div>
        <MySearchSubmitButton />
      </div>
    );
  },
});
