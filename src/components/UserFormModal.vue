<template>
    <el-dialog :visible="visible" @close="cancelForm" :show-close="false" :close-on-click-modal="false">
        <el-row class="custom-header">
            <h2 style="float: left; margin: 0; padding: 15px;">{{ typeForm }} Cliente</h2>
        </el-row>
        <div class="custom-body">
            <el-row>
                <el-form ref="userForm" label-position="top" label-width="100px" :model="userForm" :rules="rules">
                    <el-row>
                        <el-form-item prop="name" :error="errors.name">
                            <span>Nome</span><a>*</a>
                            <el-input v-model="userForm.name"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item prop="cnpj" :error="errors.cnpj">
                                <span>CNPJ</span><a>*</a>
                                <el-input v-model="userForm.cnpj"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item prop="phone" :error="errors.phone">
                                <span>Telefone</span><a>*</a>
                                <el-input v-model="userForm.phone"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item prop="uf" :error="errors.uf">
                                <el-row>
                                    <span>UF</span><a>*</a>
                                </el-row>
                                <el-row>
                                    <el-select v-model="userForm.uf" placeholder="Select" style="width: 100%;">
                                        <el-option v-for="item in uf" :key="item.value" :label="item.label"
                                            :value="item.value">
                                            <span style="float: left;">{{ item.label }}</span>
                                            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value
                                                }}</span>
                                        </el-option>
                                    </el-select>
                                </el-row>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item prop="email" :error="errors.email">
                                <span>E-mail</span><a>*</a>
                                <el-input v-model="userForm.email" required></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-row>
            <el-divider></el-divider>
            <el-row>
                <el-col :span="12">
                    <el-button @click="cancelForm" style="float: left;">Cancelar</el-button>
                </el-col>
                <el-col :span="12">
                    <el-button type="primary" @click="submitForm" style="float: right;">Salvar</el-button>
                </el-col>
            </el-row>
        </div>
    </el-dialog>
</template>

<script>
export default {
    name: 'UserFormModal',
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        typeForm: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            userForm: {
                name: '',
                cnpj: '',
                phone: '',
                uf: '',
                email: '',
            },
            errors: {
                name: '',
                cnpj: '',
                phone: '',
                uf: '',
                email: '',
            },
            rules: {
                name: [
                    { required: true, message: 'Por favor, insira o nome', trigger: 'blur' },
                    { min: 3, max: 99, message: 'O Nome deve ter entre 3 e 99 dígitos', trigger: 'blur' }
                ],
                cnpj: [
                    { required: true, message: 'Por favor, insira o CNPJ', trigger: 'blur' },
                    { min: 14, max: 14, message: 'O CNPJ deve ter 14 dígitos', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: 'Por favor, insira o telefone', trigger: 'blur' }
                ],
                uf: [
                    { required: true, message: 'Por favor, selecione a UF', trigger: 'change' }
                ],
                email: [
                    { required: true, message: 'Por favor, insira o e-mail', trigger: 'blur' },
                    { type: 'email', message: 'Por favor, insira um e-mail válido', trigger: 'blur' }
                ]
            },
            uf: []
        };
    },
    created() {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => response.json())
            .then(data => {
                this.uf = data.map(item => ({
                    value: item.sigla,
                    label: item.nome
                })).sort((a, b) => a.label.localeCompare(b.label));
            })
            .catch(error => {
                console.error('Erro ao buscar os estados:', error);
            });
    },
    methods: {
        submitForm() {
            this.$refs['userForm'].validate((valid) => {
                if (valid) {
                    console.log('envio do formulário');
                } else {
                    console.log('erro na validação do formulário');
                    this.errors = Object.assign({}, this.$refs['userForm'].$refs);
                }
            });
        },
        cancelForm() {
            this.$emit('close');
        }
    }
};
</script>


<style scoped>
.custom-header {
    background-color: var(--primary-color);
    color: var(--light-color);
    padding: 0;
    width: 100%;
}

.custom-body {
    padding: 2%;
}

a {
    color: red;
    font-size: 16px;
    margin-left: 5px;
}

span,
a {
    float: left;
}
</style>
