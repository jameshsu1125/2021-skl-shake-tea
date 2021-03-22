module.exports = {
	toBase64(data) {
		return btoa(encodeURIComponent(escape(JSON.stringify(data))));
	},
	toJson(str) {
		return JSON.parse(unescape(decodeURIComponent(window.atob(str))));
	},
};
