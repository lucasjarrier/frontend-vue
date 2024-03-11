<template>
  <div>
    <div>
      <MainNavbar :routes="adminRoutes" @routeSelected="handleRouteSelected" />
    </div>
    <router-view />
  </div>
</template>

<script>
import MainNavbar from '@/components/MainNavbar.vue';

export default {
  components: {
    MainNavbar,
  },
  data() {
    return {
      adminRoutes: [
        { path: '/admin/users', name: 'Listagem de Usuários' },
        { path: '/admin/sales', name: 'Listagem de Vendas' },
        { path: '/admin/dashboard', name: 'Dashboard Administrativo' },
      ],
    };
  },
  methods: {
    handleRouteSelected(route) {
      this.$router.push(route.path);
    },
  },
};
</script>