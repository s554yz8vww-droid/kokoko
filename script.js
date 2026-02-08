const map = L.map('map').setView([33.5597, 133.5311], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

function addSpot(lat, lng, name, category, img) {
  const icon = L.divIcon({
    className: '',
    html: `<div class="pin ${category}"></div>`
  });

  L.marker([lat, lng], { icon: icon })
    .addTo(map)
    .bindPopup(`
      <div>
        <div class="popup-title ${category}">${name}</div>
        <img src="${img}" class="popup-img">
      </div>
    `);
}

/* 自然 */
addSpot(33.4389, 133.4304, "四万十川", "nature",
  "https://upload.wikimedia.org/wikipedia/commons/9/9a/Shimanto_River.jpg");
addSpot(33.4964, 133.2542, "柏島", "nature",
  "https://upload.wikimedia.org/wikipedia/commons/4/4d/Kashiwajima_beach.jpg");
addSpot(33.8786, 134.0250, "室戸岬", "nature",
  "https://upload.wikimedia.org/wikipedia/commons/0/0f/Cape_Muroto.jpg");
addSpot(33.7744, 133.0106, "仁淀ブルー", "nature",
  "https://upload.wikimedia.org/wikipedia/commons/1/19/Niyodo_River.jpg");

/* 歴史 */
addSpot(33.5589, 133.5314, "高知城", "history",
  "https://upload.wikimedia.org/wikipedia/commons/5/5d/Kochi_Castle.jpg");
addSpot(33.5039, 133.5683, "坂本龍馬記念館", "history",
  "https://upload.wikimedia.org/wikipedia/commons/6/63/Sakamoto_Ryoma_Memorial_Museum.jpg");
addSpot(33.5682, 133.5443, "桂浜", "history",
  "https://upload.wikimedia.org/wikipedia/commons/3/3e/Katsurahama.jpg");

/* 食 */
addSpot(33.5596, 133.5310, "ひろめ市場", "food",
  "https://upload.wikimedia.org/wikipedia/commons/6/6c/Hirome_Market.jpg");
addSpot(33.5605, 133.5300, "かつおのたたき", "food",
  "https://upload.wikimedia.org/wikipedia/commons/9/9e/Katsuo_no_tataki.jpg");
addSpot(33.5498, 133.5422, "土佐巻き", "food",
  "https://upload.wikimedia.org/wikipedia/commons/2/2a/Tosamaki.jpg");
