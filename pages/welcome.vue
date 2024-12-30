<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
})

const userDataStore = useUserDataStore();
const router = useRouter();

// Handle logout by clearing the session and resetting the form
const handleLogout = async () => {
  userDataStore.logout();
  await router.push(`/`);
};
</script>

<template>
  <NuxtLayout :name="'page'">
    <div class="welcome-message">
      <span class="typing">
        "Welcome, <span class="username">{{ userDataStore.$state.username }}</span>! Let's make
        great things happen together!. "
      </span>
    </div>

    <ButtonWrapper>
      <template #floatLeft>
        <CoreButton text="Logout" @click="handleLogout" class="logout-btn" />
      </template>
    </ButtonWrapper>
  </NuxtLayout>
</template>

<style scoped>
/* Container for the welcome message */
.welcome-message {
  text-align: center;
  margin-top: 50px;
  font-family: 'Verdana', sans-serif;
  padding: 0 10px;
  font-size: 1.5rem;
}

/* Typing animation */
.typing {
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  width: 0;
  animation: typing 4s steps(60) 1s forwards;
}

/* Username styled differently */
.username {
  color: #4CAF50;
  font-size: 1.8rem;
  font-weight: bold;
}

/* Logout button styles */
.logout-btn {
  background-color: #FF5722;
  color: white;
  padding: 0.8rem 1.6rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-btn:hover {
  background-color: #e64a19;
}

/* Typing animation steps */
@keyframes typing {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}
</style>
