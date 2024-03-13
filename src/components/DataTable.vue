<template>
    <div class="data-container">
        <el-card shadow="hover">
            
            <!-- Filters -->
            <el-row style="margin-bottom: 1%;">
                <h2 class="custom-title"> <span class="underlined">Lista de Clientes</span></h2>
            </el-row>
            <el-row v-if="filters && filters.length">
                <el-col :span="17">
                    <el-input :placeholder="placeholderText" v-model="filterValue"></el-input>
                </el-col>
                <el-col :span="1">
                    <el-button v-on:click="applyFilter" class="search-button" type="primary" icon="el-icon-search"></el-button>
                </el-col>
                <el-col :span="6">
                    <el-button v-on:click="createData" class="new-user-button" type="primary" icon="el-icon-plus">Cadastrar cliente</el-button>
                </el-col>
            </el-row>
            
            <!-- Table -->
            <el-row>
                <h4 class="custom-title"> Clientes cadastrados </h4>
            </el-row>
            <el-row>
                <el-table :data="data" stripe style="width: 100%">
                    <el-table-column v-for="column in columns" :key="column.label" :prop="column.field" :label="column.label" sortable></el-table-column>
                    <el-table-column align="right" label="Ações">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Editar</el-button>
                            <el-button size="mini" type="primary" @click="handleDelete(scope.$index, scope.row)">Excluir</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
            <el-row>
                <el-divider></el-divider>
            </el-row>
            <el-row>
                <el-col :span="4" align="left">
                    <span class="custom-ammout"> Registros totais: {{ pageable.totalElements }} </span>
                </el-col>
                <el-col :span="20" align="right">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageable.pageNumber + 1" :page-size="pageable.pageSize" layout="prev, pager, next" :total="pageable.totalElements">
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
        pageable: {
            type: Object,
            required: false,
            default: () => ({})
        },
        columns: {
            type: Array,
            required: true
        },
        filters: {
            type: Array,
            default: () => []
        },
        applyFilterFunction: {
            type: Function,
            required: true
        },
        createDataFunction: {
            type: Function,
            required: true
        },
        handleEditFunction: {
            type: Function,
            required: true
        },
        handleDeleteFunction: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            filterValue: ''
        }
    },
    methods: {
        applyFilter() {
            let searchFilter = {};

            for (const filter of this.filters) {
                searchFilter[filter.field] = this.filterValue;
            }
            this.applyFilterFunction(searchFilter);
        },
        createData() {
            this.createDataFunction();
        },
        handleEdit(index, row) {
            this.handleEditFunction(index, row);
        },
        handleDelete(index, row) {
            this.handleDeleteFunction(index, row);
        },
        handleSizeChange(newSize) {
            this.applyFilterFunction({ size: newSize, page: 0 });
        },
        handleCurrentChange(newPage) {
            this.applyFilterFunction({ page: newPage - 1 });
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
    color: var(--secondary-color);
    font-size: small;
}

.underlined {
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 8px;
}
</style>