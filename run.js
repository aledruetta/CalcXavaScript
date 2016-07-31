var appWin = null;

if (!appWin || appWin.closed) {
	appWin = window.open("app.html", null,
		"width=244,height=348,menubar=0,resizable=0,scrollbars=0,status=0, \
		location=0,toolbar=0,personalbar=0");
}

setTimeout("appWin.focus()", 1);