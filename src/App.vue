<template>
	<div id="app">
		<crud />
	</div>
</template>

<script>
	import Crud from './components/Crud'

	export default {
		name: 'App',
		components: {
			Crud
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Poppins', sans-serif;
	}
</style>
