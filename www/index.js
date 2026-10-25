// www.delta-a.net/… → https://delta-a.net/…（パスと ?… はそのまま）
export default {
	fetch(request) {
		const u = new URL(request.url);
		u.protocol = "https:";
		u.hostname = "delta-a.net";
		u.port = "";
		return Response.redirect(u.toString(), 301);
	},
};
