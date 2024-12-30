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
      <span class="greeting">
        "Welcome, <span class="username">{{ userDataStore.$state.username }}!</span> We're excited to have you here.
        Let's make
        great things happen together!"
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
}

/* Animated greeting text */
.greeting {
  font-size: 2rem;
  font-family: 'Verdana', sans-serif;
  color: #333;
  font-weight: bold;
  display: inline-block;
  opacity: 0;
  transform: translateY(-30px);
  animation: fadeInUp 1s ease forwards;
  animation-delay: 0.5s;
  /* Delay for better visibility */
}

/* Username styled differently */
.username {
  color: #466ae0;
  /* Use a nice color for the username */
  font-size: 2.2rem;
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
  /* Slightly darker shade on hover */
}

/* Keyframes for fade and slide-in animation */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
