!function(e){e.dataLayer=e.dataLayer||[];var r=0;function t(){var a=Math.abs(e.scrollY-r);e.scrollY!==r&&a>=10&&(e.dataLayer.push({event:"breobox-user-scroll"}),e.removeEventListener("scroll",t,!0))}e.addEventListener("load",(function(){setTimeout((function(){r=e.scrollY,e.addEventListener("scroll",t,!0)}),777)}))}(window);