<script setup>
const menuLinks = [
	{ title: "Home", icon: "octicon:home" },
	{ title: "Explore", icon: "mdi:music-accidental-sharp" },
	{ title: "Notifications", icon: "ic:baseline-notifications-none" },
	{ title: "Messages", icon: "solar:letter-outline" },
	{ title: "Bookmarks", icon: "material-symbols:bookmark-outline" },
	{ title: "Home", icon: "ion:ios-list-outline" },
	{ title: "Home", icon: "bxs:home-circle" },
	{ title: "Home", icon: "bxs:home-circle" },
];
</script>
<template>
	<div>
		<div class="fixed bg-white w-80 p-7 h-screen px-24 border-r border-[#E5E5E5]">
			<img src="/img/logo.png" alt="" class="mb-10" />
			<div class="">
				<nuxt-link v-for="el in menuLinks" class="flex items-center gap-5 mb-5">
					<Icon :name="el.icon" color="black" size="25px" />
					<span>{{ el.title }}</span>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
