<script lang="ts" setup>
import type { PropType } from 'vue'

//import type { User } from '@/types'
//import OnboardCardHeader from '@/components/organisms/onboard/OnboardCardHeader.vue'

defineProps({
  title: {
    type: String
  },
  subtitle: {},
  /*user: {
    type: String as PropType<User>
  }*/
})
</script>

<template>
  <div class="onboard-card">
    <div class="onboard-card__header-wrapper" v-if="title && subtitle">
      <OnboardCardHeader class="onboard-card__header" v-if="title" :title="title"></OnboardCardHeader>
      <h2 v-if="subtitle" class="onboard-card__legend" v-html="subtitle"></h2>
    </div>
    <div class="onboard-card__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>


<style lang="sass" scoped>
@use 'sass:map'
@import '@/assets/css/all.sass'


.onboard-card
  width: 100%
  min-height: 34rem
  max-width: 68.4rem
  background-color: $white
  border-radius: $radius-02
  padding: $space-08
  box-sizing: border-box
  border: 0.02rem solid map.get($greyShades, 'greyShade10')
  box-shadow: $shadow-elevation-medium
  transition: $transition-background-color, $transition-opacity

  @media (max-width: $md-breakpoint)
    padding: $space-06
    max-width: 100%
    border-radius: $radius-01

  @media (max-width: $xs-breakpoint)
    padding: $space-04
    border: none
    box-shadow: $shadow-elevation-small
</style>
