<template>
	<div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
		<header>
			<Header />
		</header>

		<main class="flex-1">
			<router-view />
		</main>
		
		<footer>
			<Footer />
		</footer>
	</div>
</template>

<script lang="ts">
// Main layout, used on public pages
import { defineComponent } from 'vue'
import Header from '@/views/partials/Header.vue';
import Footer from '@/views/partials/Footer.vue';

export default defineComponent({
	name: 'Main',
	components: {
		Header,
		Footer
	}
})
</script>