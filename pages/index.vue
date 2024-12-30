<template>
  <NuxtLayout :name="'page'">
    <form class="login-form" @submit.prevent="handleLogin">
      <div class="form-field">
        <span class="form-field__label">Username</span>
        <InputTextControl v-model="username" id="username" placeholder="Username" />
      </div>
      <br />
      <div class="form-field">
        <span class="form-field__label">Password</span>
        <InputTextControl v-model="password" id="password" type="password" placeholder="Password" />
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

const username = ref('');
const password = ref('');
const userDataStore = useUserDataStore();
console.log('userDataStore:', userDataStore.username, 4234234)
const router = useRouter(); // Initialize router

const handleLogin = async () => {
  if (!username.value || !password.value) {
    alert('Please enter both username and password.');
    return;
  }

  // Simulate a login process (replace with actual API call if needed)
  const authToken = `auth-token-${username.value}`;
  userDataStore.login(username.value, authToken);

  alert('Login successful!');
  console.log(`Logged in as: ${username.value}`);

  // Navigate to the dashboard after successful login
  await router.push(`/welcome`);
};
</script>
