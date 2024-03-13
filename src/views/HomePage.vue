<template>
  <div class="home-container">
    <transition name="fade" mode="out-in">
      <component :is="currentForm" @switch-form="switchForm" :key="currentForm"></component>
    </transition>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  name: "HomePage",
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      currentForm: "LoginForm",
    };
  },
  methods: {
    switchForm(form) {
      this.currentForm = form;
    },
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--primary-color);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
