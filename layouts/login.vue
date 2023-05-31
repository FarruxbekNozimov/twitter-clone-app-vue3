<template>
	<div>
		<div class="container">
			<div>
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "login",
});
</script>

<style lang="scss" scoped></style>
