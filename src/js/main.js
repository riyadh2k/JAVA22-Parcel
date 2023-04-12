const img = document.createElement('img');

// const relative = '../media/skyrim.webp';
// const imgUrl = new URL(relative, import.meta.url); funkar inte, i fall man har många bilder bör man hitta ett annat sätt att visa bilder

const imgUrl = new URL("../media/pink.jpg", import.meta.url);

console.log(imgUrl);
img.src = imgUrl;
document.body.append(img);
