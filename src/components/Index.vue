<template lang="jade">
	.container

</template>
<script>

</script>

<style lang="scss">
	.landing__img {
		max-width: 100%;
		height: auto;
		// -webkit-filter: drop-shadow(0px 0px 0px rgba(0,0,0,0));
		// filter: drop-shadow(0px 0px 0px rgba(0,0,0,0));
		-webkit-transition: all 0.2s;
		-webkit-transition-property: -webkit-filter;
		transition: filter 0.2s;
		overflow: hidden;
		&:hover {
			-webkit-filter: brightness(70%) drop-shadow(0px 0px 5px rgba(0,0,0,0.5));
			transition: brightness(70%) drop-shadow(0px 0px 5px rgba(0,0,0,0.5));
		}
	}
	.landing__h1 {
	width: 50%;
  height: 50%;
  overflow: auto;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
    color: #fff;
    font-size: 5em;
	}

	.landing {
		position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;

		iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
	#landing__holder {
		margin: 0 auto;
		width: 100%;
		height: 500px;
	}
	.landing__news {
		background-color: #e01600;
	}
</style>
