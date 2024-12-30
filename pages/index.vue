<template>
  <NuxtLayout :name="'page'">
    <form class="login-form" @submit.prevent="handleLogin">
      <div class="form-field">
        <span class="form-field__label">Username</span>
        <InputTextControl v-model="credentials.username" id="username" placeholder="Username" />
      </div>
      <br />
      <div class="form-field">
        <span class="form-field__label">Password</span>
        <InputTextControl v-model="credentials.password" id="password" type="password" placeholder="Password" />
      </div>
      <br />
      <ButtonWrapper>
        <template #floatLeft>
          <CoreButton text="Login" type="submit"></CoreButton>
        </template>
      </ButtonWrapper>
    </form>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter

definePageMeta({
  middleware: ["check"]
})
const credentials = reactive({
  username: '',
  password: '',
})
const userDataStore = useUserDataStore();
const router = useRouter(); // Initialize router

const handleLogin = async () => {
  if (!credentials.username || !credentials.password) {
    alert('Please enter both username and password.');
    return;
  }

  const authToken = `auth-token-${credentials.username}`;
  userDataStore.login(credentials.username, authToken);

  // alert('Login successful!');
  // console.log(`Logged in as: ${credentials.username}`);

  await router.push(`/welcome`);
};
</script>
