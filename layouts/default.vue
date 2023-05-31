<template>
	<div>
		<div class="w-full">
			<div class="flex">
				<Sidebar />
				<div class="ml-80 h-[100vh] w-[50%] overflow-x-auto">
					<slot />
				</div>
				<div class="w-96 border-l border-slate-200"></div>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "default",
});
</script>

<style scoped>
::-webkit-scrollbar {
	width: 7px;
}
::-webkit-scrollbar-thumb {
	background: #1d9bf0;
	border-radius: 50px;
}
</style>
