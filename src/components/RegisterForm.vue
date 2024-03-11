<template>
    <div class="form-container">
        <el-card shadow="hover" class="register-card">
            <h2 class="register-title">Cadastro</h2>
            <el-form @submit.prevent="register">
                <el-form-item class="label-style" label="Nome">
                    <el-input v-model="registerForm.name" placeholder="Digite seu nome" prefix-icon="el-icon-user"
                        required class="custom-input"></el-input>
                </el-form-item>
                <el-form-item class="label-style" label="CNPJ">
                    <el-input v-model="registerForm.cnpj" placeholder="Digite seu CNPJ" prefix-icon="el-icon-s-shop"
                        required class="custom-input"></el-input>
                </el-form-item>
                <el-form-item class="label-style" label="Email">
                    <el-input type="email" v-model="registerForm.username" placeholder="Digite seu email"
                        prefix-icon="el-icon-email" required class="custom-input"></el-input>
                </el-form-item>
                <el-form-item class="label-style" label="Senha">
                    <el-input type="password" v-model="registerForm.password" placeholder="Digite sua senha"
                        prefix-icon="el-icon-lock" required class="custom-input" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button v-on:click="register" type="primary" class="btn-login">Cadastrar</el-button>
                </el-form-item>
            </el-form>
            <div class="signup-link">
                Já tem uma conta? <a @click="switchForm" href="#">Faça login</a>
            </div>
        </el-card>
        <CustomAlert :visible="customAlert.alertVisible" :type="customAlert.alertType"
            :message="customAlert.alertMessage" @close="hideAlert" />
    </div>
</template>

<script>

import { createUser } from '../services/userService.js'
import CustomAlert from './CustomAlert.vue';

export default {
    components: {
        CustomAlert
    },
    data() {
        return {
            registerForm: {
                name: '',
                username: '',
                password: '',
                cnpj: '',
                role: 'common'
            },
            customAlert: {
                alertVisible: false,
                alertType: '',
                alertMessage: ''
            }
        };
    },
    methods: {
        async register() {
            try {
                const response = await createUser(this.registerForm);

                if (response.body.Status < 300) {
                    this.showAlert('Usuário cadastrado com sucesso!', 'success');
                }

            } catch (err) {
                this.showAlert('Erro ao criar usuário', 'error')
            }
        },
        switchForm() {
            this.$emit('switch-form', 'LoginForm');
        },
        showAlert(message, type) {
            this.customAlert.alertMessage = message;
            this.customAlert.alertType = type;
            this.customAlert.alertVisible = true;
        },
        hideAlert() {
            this.customAlert.alertVisible = false;
        }
    }
};
</script>

<style scoped>
.register-card {
    width: 400px;
    margin: 0 auto;
    border-radius: 30px;
}

.register-title {
    text-align: center;
}

.label-style {
    font-weight: bold;
}

.btn-login {
    margin: 20px 0;
    width: 100%;
}

.custom-input {
    border-radius: 20px;
}

.signup-link {
    text-align: center;
    margin-top: 15px;
}

.required-inputs {
    color: brown;
}
</style>
