<template>
  <el-header id="custom-header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#072ab5" text-color="#e1e8f2" active-text-color="#ffff">
      <el-menu-item v-for="route in routes" :key="route.path" :index="route.path">{{ route.name }}</el-menu-item>
      <el-menu-item index="/logout" class="logout-item">
        <i class="el-icon-d-arrow-right" @click="logout"></i>
      </el-menu-item>
      <el-menu-item class="logout-item">
        <user-details :user="userDetails"></user-details>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
import UserDetails from './UserDetails.vue';

export default {
  name: 'MainNavbar',
  components: {
    UserDetails,
  },
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeIndex: '/',
      userDetails: {
        name: 'Lucas Jarrier',
        role: 'Admin',
      },
    };
  },
  methods: {
    handleSelect(index) {
      if (index === '/logout') {
        this.logout();
      } else {
        this.activeIndex = index;
        this.$router.push(index);
      }
    },
    logout() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<style scoped>
.el-menu-demo {
  margin-bottom: 0;
}

.logout-item {
  float: right;
}

.el-icon-d-arrow-right {
  font-size: 25px;
  color: #ffff;
  font-weight: bold;
}

.el-menu-item.is-active {
  font-weight: bold !important;
  background-color: #073bb5 !important;
}

#custom-header {
  padding: 0 !important;
}
</style>
