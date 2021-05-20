import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <div style={{ height: '100%' }}>
        <router-view />
      </div>
    );
  },
});

// const app = createApp(SimpleDemo);

// app.use(router).mount('#app');
