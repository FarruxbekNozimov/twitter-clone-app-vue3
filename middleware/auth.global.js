export default defineNuxtRouteMiddleware((to, from) => {
	let isAuth = true;

	if (!isAuth && to.name !== "login") {
		return navigateTo("/login");
	} else {
		return;
	}
});
