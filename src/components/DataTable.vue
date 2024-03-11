<template>
    <div class="data-container">
        <el-card shadow="hover">
            
            <!-- Filters -->
            <el-row>
                <h2 class="custom-title"> Lista de Clientes</h2>
            </el-row>
            <el-row v-if="filters && filters.length">
                <el-col :span="20">
                    <el-input :placeholder="placeholderText" v-model="filterValue">
                    </el-input>
                </el-col>
                <el-col :span="2">
                    <el-button v-on:click="applyFilter" class="search-button" type="primary" icon="el-icon-search"></el-button>
                </el-col>
                <el-col :span="2">
                    <el-button v-on:click="createUser" class="new-user-button" type="primary" icon="el-icon-plus">Cadastrar cliente</el-button>
                </el-col>
            </el-row>
            
            <!-- Table -->
            <el-row>
                <h4 class="custom-title"> Clientes cadastrados </h4>
            </el-row>
            <el-row>
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column v-for="column in columns" :key="column.label" :prop="column.field" :label="column.label" sortable></el-table-column>
                    <el-table-column align="center" label="Ações">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Editar</el-button>
                            <el-button size="mini" type="primary"
                                @click="handleDelete(scope.$index, scope.row)">Excluir</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
            <el-row>
                <el-divider></el-divider>
            </el-row>
            <el-row>
                <el-col :span="4" align="left">
                    <span class="custom-ammout"> Registros totais: {{ tableData.length }} </span>
                </el-col>
                <el-col :span="20" align="right">
                    <el-pagination small layout="prev, pager, next" :page-size="10" :total="100">
                    </el-pagination>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>

export default {
    name: 'DataTable',
    props: {
        data: {
            type: Array,
            required: true
        },
        columns: {
            type: Array,
            required: true
        },
        filters: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            tableData: this.data,
            filterValue: ''
        }
    },
    methods: {
        applyFilter() {
            alert("Não implementado")
        },
        createUser() {
            console.log(this.filters)
        }
    },
    computed: {
        placeholderText() {
            let placeholder = 'Digite ';
            this.filters.forEach((filter, index) => {
                placeholder += filter.label;
                if (index < this.filters.length - 1) {
                    placeholder += ' ou ';
                }
            });
            return placeholder;
        }
    }
}

</script>


<style>
.data-container {
    width: 100%;
}

.search-button, 
.custom-title {
    float: left;
}

.new-user-button {
    float: right;
}

.custom-ammout {
    color: gray;
    font-size: small;
}

</style>