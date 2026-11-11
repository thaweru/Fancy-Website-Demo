console.log("Hello to Javascript!!");
let styles = ["Minimal.css", "Dark.css"];
let c = 0;
let n = styles.length;

function changeHref() {
    const link = document.getElementById("Theme");
	const butn = document.getElementById("themeSwitch");
	
    // Example: pick a random URL from the list
    link.href =  "stylesheets/" + styles[c%n];
	c++;
    // Optional: update link text
    butn.value = styles[c%n];
}