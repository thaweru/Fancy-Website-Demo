console.log("Hello to Javascript!!");
let styles = ["Minimal.css", "Dark.css", "Crazy.css"];
let c = 0;
let n = styles.length;

function changeHref() {
    const link = document.getElementById("Theme");
	const butn = document.getElementById("themeSwitch");

    if (styles[c%n].includes("Crazy")){
        if (confirm("A Crazy Stylesheet will be Applied.\nClick No to skip")){
	    link.href =  "stylesheets/" + styles[c%n];
	}
    }else{
        link.href =  "stylesheets/" + styles[c%n];
    }
	c++;
    // Optional: update link text
    butn.value = styles[c%n].split(".")[0];
}
