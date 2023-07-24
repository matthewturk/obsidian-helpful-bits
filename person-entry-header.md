```dataviewjs
if (dv.current().email) {
	const url = "https://mail.google.com/mail/?view=cm&fs=1&to=" 
+ dv.current().email;
	dv.el(
  	"a", dv.current().email.split("@").join(" at "),
  	{ attr: {'href': url} }
	);
}
```