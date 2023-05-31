<script setup>
import Editor from "@tinymce/tinymce-vue";
const val = ref("");
</script>

<template>
	<main id="sample" class="w-full h-full">
		<Editor
			api-key="2jqkv5gf942k1xzw81fy3ppgh0s0ddn3jxxt6p5vvvxezsdm"
			:init="{
				plugins: 'lists link image code help wordcount',
			}"
			v-model="val" />
	</main>
</template>

<style scoped>
.logo {
	display: block;
	margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
	#sample {
		display: flex;
		flex-direction: column;
		place-items: center;
		width: 1000px;
	}
}
</style>
