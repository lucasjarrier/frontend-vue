<template>
  <div class="custom-layout" v-loading="isLoading">
    <DataTable :data="tableData" :pageable="pageable" :columns="tableColumns" :filters="tableFilters" :applyFilterFunction="getUsers"
      :createDataFunction="createUser" :handleEditFunction="editUser" :handleDeleteFunction="deleteUser" />
    <CustomAlert :visible="customAlert.alertVisible" :type="customAlert.alertType" :message="customAlert.alertMessage"
      @close="hideAlert" />
    <UserFormModal :visible="isUserFormModalVisible" :typeForm="typeForm" @close="closeUserFormModal" />
  </div>
</template>

<script>
import CustomAlert from '@/components/CustomAlert.vue';
import DataTable from '@/components/DataTable.vue';
import UserFormModal from '@/components/UserFormModal.vue';
import { getAllUsers } from '@/services/userService.js';

export default {
  name: 'UserListView',
  components: {
    DataTable,
    CustomAlert,
    UserFormModal
  },
  data() {
    return {
      tableData: [],
      pageable: {
        numberOfElements: 0,
        totalPages: 0,
        totalElements: 0,
        pageNumber: 0,
        pageSize: 10
      },
      tableColumns: [
        { label: 'Nome', field: 'name' },
        { label: 'CNPJ', field: 'cnpj' },
        { label: 'E-mail', field: 'username' },
        { label: 'Telefone', field: 'phone' }
      ],
      tableFilters: [
        { field: 'name', label: 'Nome' },
        { field: 'cnpj', label: 'CNPJ' }
      ],
      customAlert: {
        alertVisible: false,
        alertType: '',
        alertMessage: ''
      },
      isLoading: false,
      isUserFormModalVisible: false,
      typeForm: ''
    };
  },
  async mounted() {
    await this.getUsers({});
  },
  methods: {
    async getUsers(filters) {
      this.isLoading = true;
      try {
        const response = await getAllUsers(filters);
        this.tableData = response.content;
        this.pageable = {
          ...response.pageable,
          totalElements: response.totalElements,
          totalPages: response.totalPages,
          pageNumber: response.number,
          pageSize: response.size,
        };
      } catch (error) {
        this.showAlert('Falha ao carregar os usuários', 'error')
      } finally {
        this.isLoading = false;
      }
    },
    createUser() {
      this.typeForm = 'Cadastrar'
      this.isUserFormModalVisible = true;
    },
    closeUserFormModal() {
      this.isUserFormModalVisible = false;
    },
    editUser(index, row) {
      alert(`Editando o usuário: ${row.name}`);
    },
    deleteUser(index, row) {
      alert('deletando usuário: ' + row.name + "id: " + index)
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

<style>
.custom-layout {
  padding: 2%;
}

.el-dialog__body, .el-dialog__header {
    padding: 0 !important;
}

</style>
