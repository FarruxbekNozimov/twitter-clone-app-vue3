<script setup>
const menuLinks = [
	{ title: "Home", path: "/", icon: "octicon:home" },
	{ title: "Explore", path: "/explore", icon: "mdi:music-accidental-sharp" },
	{
		title: "Notifications",
		path: "/notification",
		icon: "ion:notifications-outline",
	},
	{ title: "Messages", path: "/chat", icon: "solar:letter-outline" },
	{
		title: "Bookmarks",
		path: "/marks",
		icon: "material-symbols:bookmark-outline",
	},
	{ title: "Lists", path: "/lists", icon: "ion:ios-list-outline" },
	{ title: "Profile", path: "/profile", icon: "solar:user-broken" },
	{ title: "More", path: "/more", icon: "icon-park-outline:more-two" },
];
</script>
<template>
	<div>
		<div
			class="fixed bg-white w-80 p-7 h-screen pl-24 border-r border-slate-200">
			<img src="/img/logo.png" alt="" class="mb-10" />
			<div class="w-full">
				<nuxt-link
					v-for="el in menuLinks"
					:to="el.path"
					class="flex items-center gap-5 mb-5 w-full cursor-pointer">
					<Icon :name="el.icon" color="black" size="25px" />
					<span>{{ el.title }}</span>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<style scoped>
.nuxt-link-active {
	background: #000;
}
</style>
