import { defineComponent } from 'vue';
import { IconPark } from '@icon-park/vue-next/es/all';
import '@icon-park/vue-next/styles/index.css';

export interface MyIconPropsType {
  icon: string;
  theme?: string;
  size?: number;
  spin?: boolean;
  fill: string;
  class?: string;
}

export const MyIcon = defineComponent({
  components: { IconPark },
  props: {
    icon: {
      type: String,
    },
    theme: {
      type: String,
      default: 'outline',
    },
    size: {
      type: Number,
    },
    spin: {
      type: Boolean,
      default: false,
    },
    fill: {
      type: String,
    },
    class: {
      type: String,
    },
  },
  setup(props) {
    return () => (
      <span class={'anticon ' + props.class}>
        <icon-park theme={props.theme} size={props.size} type={props.icon} fill={props.fill} />
      </span>
    );
  },
});
