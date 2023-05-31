<template>
	<div>
		<div class="container">
			<div class="flex">
				<Sidebar />
				<div class="ml-80 h-screen w-full">
					<slot />
				</div>
				<div class="aside_right"></div>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "default",
});
</script>

<style lang="scss" scoped></style>
