<template>
  <div class="custom-layout">
    <DataTable 
      :data="tableData" 
      :columns="tableColumns" 
      :filters="tableFilters" />
  </div>
</template>

<script>
import DataTable from '../../components/DataTable.vue';

export default {
  name: 'UserListView',
  components: {
    DataTable
  },
  data() {
    return {
      tableData: [
        { name: 'Lucas', email: 'lucas@gmail.com' },
        { name: 'Jarrier', email: 'jarrier@gmail.com' },
      ],
      tableColumns: [
        { label: 'Nome', field: 'name' },
        { label: 'Email', field: 'email' },
      ],
      tableFilters: [
        { field: 'name', label: 'Nome' },
        { field: 'cnpj', label: 'CNPJ' }
        ]
    };
  }
};
</script>

<style>
.custom-layout {
  padding: 2%;
}
</style>
