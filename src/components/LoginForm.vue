<template>
  <div class="login-container">
    <el-card shadow="hover" class="login-card">
      <h2 class="login-title">Login</h2>
      <el-form @submit.prevent="login">
        <el-form-item class="label-style" label="Email">
          <el-input type="email" placeholder="Email" prefix-icon="el-icon-email" v-model="user.username" required
            class="custom-input"></el-input>
        </el-form-item>
        <el-form-item class="label-style" label="Senha">
          <el-input type="password" placeholder="Senha" prefix-icon="el-icon-lock" v-model="user.password" required
            class="custom-input"></el-input>
        </el-form-item>
        <el-form-item>
          <a href="#" v-on:click="notImplemented">Esqueceu a senha?</a>
        </el-form-item>
        <el-button type="primary" v-on:click="login" class="btn-login">Login</el-button>
        <div class="signup-link">
          Não possui uma conta? <a @click="switchForm" href="#">Cadastre-se</a>
        </div>
        <el-divider> Ou </el-divider>
        <el-button class="btn-facebook" v-on:click="notImplemented">Login com Facebook</el-button>
        <el-button class="btn-google" v-on:click="notImplemented">Login com Google</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// import { login } from '../services/authService.js'

export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      try {
        // const response = await login(this.user);
        // const userRole = response.data.role;
        // const token = response.data.token

        // localStorage.setItem('token', token);

        const userRole = "admin";

        if (userRole === 'admin') {
          this.$router.push({ path: '/admin-home' });
        } else {
          this.$router.push({ path: '/user-dashboard' });
        }
      } catch (err) {
        alert('Não implementado!')
      }
    },
    switchForm() {
      this.$emit('switch-form', 'RegisterForm');
    },
    notImplemented() {
      alert("Calma gafanhoto, nem tudo são flores!")
    }
  },
}
</script>

<style scoped>
.login-card {
  width: 400px;
  margin: 0 auto;
  border-radius: 30px;
}

.btn-login {
  margin: 20px 0;
  width: 100%;
}

.login-title {
  text-align: center;
}

.label-style {
  font-weight: bold;
}
</style>
