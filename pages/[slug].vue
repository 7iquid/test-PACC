<script lang="ts">
definePageMeta({ layout: 'page' })
export default {
    data() {
        return {
            userInfo: [
                { title: 'Username', id: 'username', placeholder: 'Username' },
                { title: 'Name', id: 'name', placeholder: 'Name' },
                { title: 'Age', id: 'age', placeholder: 'Age' },
            ],
        };
    },
};
</script>

<template >
    <h1>1asdfcawdaasd asd asd wd</h1>
    <!-- <form class="login-form">
        <div v-for="(info, index) in userInfo" :key="index" class="form-field">
            <span class="form-field__label">{{ info.title }}</span>
            <InputTextControl :id="info.id" :placeholder="info.placeholder" />
        </div>
    </form> -->
</template>
