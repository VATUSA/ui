<template>
	<div class="hero">
		<div class="blur py-20">
			<div class="container mx-auto">
				<router-link to="">
					<VATUSALogo xs />
				</router-link>
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>

.hero {
	background-image: url('/src/assets/images/american-flag.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	position: relative;

	&::before {
		@apply bg-primary-light dark:bg-primary;
		opacity: 0.9;
		height: 100%;
		width: 100%;
		left: 0;
		top: 0;
		content: "";
		position: absolute;
	}
}

.blur {
	backdrop-filter: blur(0.5rem);
}

</style>