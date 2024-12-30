<template>
  <NuxtLayout :name="'page'">
    <form class="login-form">
      <div class="form-field">
        <span class="form-field__label">Username</span>
        <InputTextControl id="username" placeholder="Username" />
      </div>
      <br />
      <div class="form-field">
        <span class="form-field__label">Password</span>
        <InputTextControl id="password" type="password" placeholder="Password" />
      </div>
      <br />
      <ButtonWrapper>
        <template #floatLeft>
          <CoreButton text="Login"></CoreButton>
        </template>
      </ButtonWrapper>
    </form>
  </NuxtLayout>
</template>

<script>
</script>