<template>
    <div class="user-details">
        <div>
            <img v-if="user.photo" :src="user.photo" alt="User Photo" class="user-photo">
            <i v-else class="el-icon-user user-icon"></i>
        </div>
        <div class="user-data-container">
            <span class="user-name">{{ user.name }}</span>
            <span class="user-role">{{ user.role }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserDetails',
    props: {
        user: {
            type: Object,
            required: true,
        },
    }
};
</script>

<style scoped>

.user-details {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.user-data-container {
    display: flex;
    flex-direction: column;
    line-height: 120% !important;
    align-items: center;
    justify-content: center;
}

.user-icon {
    font-size: 30px;
    margin-right: 20px;
    color: var(--light-color);
}

.user-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.user-info {
    display: flex;
    align-items: center;
}

.user-name {
    font-weight: bold;
    color: var(--light-color);
}

.user-role {
    color: var(--light-color);
}

</style>