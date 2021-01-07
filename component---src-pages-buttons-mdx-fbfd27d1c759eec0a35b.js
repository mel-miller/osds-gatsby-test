(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Ja8M:function(t,n,e){"use strict";e.r(n),e.d(n,"_frontmatter",(function(){return s})),e.d(n,"default",(function(){return p}));var o=e("zLVn"),u=(e("q1tI"),e("7ljp")),a=e("Bl7J"),b=e("4UH4"),s={},c={_frontmatter:s},r=a.a;function p(t){var n=t.components,e=Object(o.a)(t,["components"]);return Object(u.b)(r,Object.assign({},c,e,{components:n,mdxType:"MDXLayout"}),Object(u.b)("h1",null,"Buttons"),Object(u.b)("div",{className:"osds-button-group"},Object(u.b)(b.a,{buttonText:"Primary Button",mdxType:"Button"}),Object(u.b)(b.a,{buttonType:"secondary",buttonText:"Secondary Button",mdxType:"Button"}),Object(u.b)(b.a,{buttonType:"outline",buttonText:"Alt Primary Button",mdxType:"Button"}),Object(u.b)(b.a,{buttonType:"outline-secondary",buttonText:"Alt Secondary Button",mdxType:"Button"})),Object(u.b)("h2",{className:"section-header"},"Component Source Code"),Object(u.b)("pre",null,Object(u.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'import React from "react"\n\nfunction Button(props) {\n  var classes = (function (buttonType) {\n    return buttonType ? `osds-button osds-button--${buttonType}` : "osds-button"\n  })(props.buttonType)\n\n  return <button className={classes}>{props.buttonText}</button>\n}\n\nexport default Button\n')),Object(u.b)("h2",{className:"section-header"},"Implementation"),Object(u.b)("pre",null,Object(u.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'<Button buttonType="secondary" buttonText="Secondary Button" />\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-buttons-mdx-fbfd27d1c759eec0a35b.js.map