<template>
	<Root />
</template>

<script lang="ts">
// Initial component loaded to get Vue bootstrapped.
import { defineComponent } from 'vue'
import Root from '@/views/app/Root.vue'

export default defineComponent({
	name: 'App',
	components: { Root }
})
</script>

