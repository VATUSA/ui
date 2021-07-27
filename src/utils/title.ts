import { ComponentOptionsMixin } from "@vue/runtime-core";

export default <ComponentOptionsMixin>{
	mounted() {
		document.title = "VATUSA";
		const {title} = this.$options;
		if(title) {
			this.setTitle(title)
		}
	},
	methods: {
		setTitle(title: string) {
			document.title = `${title} | VATUSA`;
		}
	}
}