module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{js,css,scss}'
	],
	swDest: 'public/sw.js',
	swSrc: 'static/sw.js',
	modifyURLPrefix: {
		"": "/"
	}
};