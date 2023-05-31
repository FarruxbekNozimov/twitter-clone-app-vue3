<script setup>
const { name } = defineProps(["name"]);
</script>

<template>
	<div
		class="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-5">
		<span class="font-semibold text-2xl">{{ name }}</span>
		<Icon
			name="solar:star-fall-outline"
			color="black"
			size="25px"
			class="cursor-pointer" />
	</div>
</template>

<style lang="scss" scoped></style>
