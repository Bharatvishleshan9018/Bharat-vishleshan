const data=[
["India","भारत की अर्थव्यवस्था को समझने के लिए किन आंकड़ों पर नजर रखें?","GDP, उत्पादन और रोजगार से जुड़े प्रमुख आंकड़ों को आसान भाषा में समझिए।","india.html"],
["Politics","नीति और राजनीति को समझने के लिए किन तथ्यों को देखें?","नीतियों, दस्तावेजों और सार्वजनिक आंकड़ों को समझने का आसान तरीका।","Politics.html"],
["Banking","UPI और Digital Payments से जुड़े बदलाव समझिए","बैंकिंग और डिजिटल पेमेंट्स के नियमों का सरल explainer।","banking.html"],
["Business","भारत में कारोबार और स्टार्टअप: जरूरी आंकड़े","निवेश, कारोबार और entrepreneurship से जुड़े प्रमुख trends।","business.html"],
["Tax & Economy","GST और Tax System: क्या बदला और क्यों?","GST और tax collection से जुड़े आंकड़ों का सरल विश्लेषण।","tax-economy.html"],
["India","भारत में Manufacturing: उत्पादन और exports","Manufacturing sector के प्रमुख indicators को data के साथ समझिए।","india.html"]
];
function render(items=data){document.getElementById("grid").innerHTML=items.map(a=>`<article class="article"><div class="article-img">${a[0]}</div><div class="article-body"><small>${a[0]}</small><h3>${a[1]}</h3><p>${a[2]}</p><a class="read" href="pages/${a[3]}">पूरा पढ़ें →</a></div></article>`).join("")}
function search(){let q=document.getElementById("q").value.toLowerCase();render(data.filter(a=>a.join(" ").toLowerCase().includes(q)))}
function toggleSearch(){document.getElementById("search").classList.toggle("open")}
function toggleMenu(){document.getElementById("menu").classList.toggle("open")}
render();