<script setup></script>

<template>
	<main id="sample" class="w-full h-full">
		<Header name="Home" />
		<div class="relative flex p-5 border-b border-slate-200">
			<nuxt-img src="/img/main_img.png" class="h-[60px]"></nuxt-img>
			<div class="ml-3">
				<textarea
					cols="50"
					rows="2"
					class="resize-none w-full border-0 outline-none px-2 rounded-xl py-1"
					placeholder="What's happening"></textarea>
				<div class="flex px-3 mt-5 gap-5">
					<Icon
						name="material-symbols:photo-library-outline-rounded"
						color="#1D9BF0"
						size="25px"
						class="cursor-pointer" />
					<Icon
						name="material-symbols:gif-box-outline"
						color="#1D9BF0"
						size="25px"
						class="cursor-pointer" />
					<Icon
						name="ci:building-02"
						color="#1D9BF0"
						size="25px"
						class="cursor-pointer" />
					<Icon
						name="ph:smiley"
						color="#1D9BF0"
						size="25px"
						class="cursor-pointer" />
					<Icon
						name="mdi:calendar-clock-outline"
						color="#1D9BF0"
						size="25px"
						class="cursor-pointer" />
				</div>
			</div>
			<button
				class="absolute bottom-3 right-3 opacity-50 rounded-full text-white bg-[#1DA1F2] h-[50px] w-[100px]">
				Tweet
			</button>
		</div>
		<div class="w-full">
		
		</div>
	</main>
</template>

<style scoped></style>
