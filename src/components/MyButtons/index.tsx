import { defineComponent } from 'vue';

export const MySearchSubmitButton = defineComponent({
  setup() {
    return () => (
      <a-form-item>
        <a-button type="primary" html-type="submit">
          <my-icon class="btn-icon" icon="search" color="#FFF" />
          <span>搜索</span>
        </a-button>
      </a-form-item>
    );
  },
});

export const MyCreateButton = defineComponent({
  props: {
    title: String,
  },
  setup(props) {
    return () => (
      <a-button type="primary">
        <my-icon class="btn-icon" icon="add-four" color="#FFF" />
        {props.title || '添加'}
      </a-button>
    );
  },
});

export const MyEditButton = defineComponent({
  props: {
    title: String,
    type: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return () => (
      <a-button type={props.type} disabled={props.disabled}>
        <my-icon class="btn-icon" icon="editor" color="#FFF" />
        {props.title || '编辑'}
      </a-button>
    );
  },
});

export const MyDeleteButton = defineComponent({
  props: {
    popTitle: String,
    title: String,
    type: {
      type: String,
      default: 'danger',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      defualt: 'delete',
    },
  },
  setup(props) {
    return () => (
      <a-popconfirm title={props.popTitle} disabled={props.disabled} ok-text="是" cancel-text="否">
        <a-button type={props.type} disabled={props.disabled}>
          <my-icon class="btn-icon" icon={props.icon} color="#FFF" />
          {props.title || '删除'}
        </a-button>
      </a-popconfirm>
    );
  },
});
