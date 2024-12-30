<script setup lang="ts">
interface UserInfo {
  title: string;
  id: string;
  placeholder: string;
}

const userInfo: UserInfo[] = [
  { title: 'Username', id: 'username', placeholder: 'Username' },
  { title: 'Name', id: 'name', placeholder: 'Name' },
  { title: 'Age', id: 'age', placeholder: 'Age' },
];
</script>

<template>
    <NuxtLayout :name="'page'">
        <form class="login-form">
            <div v-for="(info, index) in userInfo" :key="index" class="form-field">
                <span class="form-field__label">{{ info.title }}</span>
                <InputTextControl :id="info.id" :placeholder="info.placeholder" />
            </div>
        </form>
    </NuxtLayout>
</template>
