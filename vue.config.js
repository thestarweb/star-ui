const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	configureWebpack: config => {
		if(process.env.CDN_LIST && process.env.NODE_ENV == "production"){
			const CDNList=process.env.CDN_LIST.split("|");
			let CDNURLs={};
			if(!config.externals) config.externals = {};
			CDNList.forEach((srcItem) => {
				const item = srcItem.split("::");
				config.externals[item[0]] = item[2] || item[0];
				CDNURLs[item[0]] = item[1];
			});
			// config.externals.vue="Vue";
			config.plugins.forEach((val) => {
				if (val instanceof HtmlWebpackPlugin) {
					// console.log(val)
					//let _ = val.options.templateParameters;
					// val.options.cdn={
					// 	Vue:"https://unpkg.com/vue@next"
					// };
					val.options.cdn=CDNURLs;
				}
			});
		}
	}
}