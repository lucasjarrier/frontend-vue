<template>
    <el-dialog :visible="visible" @close="cancelForm" :show-close="false" :close-on-click-modal="false">
        <el-row class="custom-header">
            <h2 style="float: left; margin: 0; padding: 15px;">{{ typeForm }} Cliente</h2>
        </el-row>
        <div class="custom-body">
        <el-row >
            <el-form label-position="top" :model="userForm">
                <el-row>
                    <el-form-item label="Nome">
                        <el-input v-model="userForm.name"></el-input>
                    </el-form-item>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="CNPJ">
                            <el-input v-model="userForm.cnpj"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="Telefone">
                            <el-input v-model="userForm.phone"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="UF">
                            <el-select v-model="userForm.uf" placeholder="Selecione">
                                <el-option label="Paraíba" value="PB"></el-option>
                                <el-option label="Pernambuco" value="PE"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="E-mail">
                            <el-input v-model="userForm.email"></el-input>
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
            }
        };
    },
    methods: {
        submitForm() {
            console.log('não implementado');
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

</style>
