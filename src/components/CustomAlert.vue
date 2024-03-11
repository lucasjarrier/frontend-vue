<template>
    <el-alert v-if="visible" :title="title" :type="type" :show-icon="true" effect="dark" center
        :description="message" @close="closeAlert" class="alert-container" />
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'info'
        },
        title: {
            type: String,
            default: ''
        },
        message: {
            type: String,
            default: ''
        },
        timeout: {
            type: Number,
            default: 5000
        }
    },
    data() {
        return {
            timer: null
        };
    },
    methods: {
        closeAlert() {
            this.$emit('close');
        },
        startTimeout() {
            this.timer = setTimeout(() => {
                this.closeAlert();
            }, this.timeout);
        },
        clearTimer() {
            clearTimeout(this.timer);
        }
    },
    mounted() {
        if (this.visible) {
            this.startTimeout();
        }
    },
    watch: {
        visible(newVal) {
            if (newVal) {
                this.startTimeout();
            } else {
                this.clearTimer();
            }
        }
    }
};
</script>

<style scoped>
.alert-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    max-width: 15%;
}
</style>
