/* LIVE TIME FROM 29 DECEMBER */
const startDate = new Date("2024-12-29T00:00:00");

setInterval(() => {
  const now = new Date();
  let diff = Math.floor((now - startDate) / 1000);

  const days = Math.floor(diff / (3600*24));
  diff %= 3600*24;
  const hours = Math.floor(diff / 3600);
  diff %= 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  document.getElementById("liveTime").innerText =
    `${days} দিন ${hours} ঘন্টা ${minutes} মিনিট ${seconds} সেকেন্ড`;
}, 1000);

/* PHOTO UPLOAD */
const input = document.getElementById("photoInput");
const gallery = document.getElementById("gallery");

input.addEventListener("change", () => {
  gallery.innerHTML = "";
  [...input.files].forEach(file => {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    gallery.appendChild(img);
  });
});

/* CANDLES */
const candlesDiv = document.getElementById("candles");
let lit = 0;
for(let i=0;i<19;i++){
  const c=document.createElement("div");
  c.className="candle";
  c.onclick=()=>{
    if(!c.classList.contains("on")){
      c.classList.add("on");
      lit++;
      if(lit===19){
        document.getElementById("blowBtn").classList.remove("hidden");
      }
    }
  };
  candlesDiv.appendChild(c);
}

document.getElementById("blowBtn").onclick=()=>{
  document.querySelectorAll(".candle").forEach(c=>c.classList.remove("on"));
  document.getElementById("cutBtn").classList.remove("hidden");
};

document.getElementById("cutBtn").onclick=()=>{
  document.getElementById("cakeSection").classList.add("hidden");
  document.getElementById("letter").classList.remove("hidden");
  typeWriter();
};

/* LETTER */
const text = `
পল্লবী,

শুভ জন্মদিন, আমার মায়ামনি 💖

আজকের দিনটা শুধু তোমার।
এই সময়, এই মুহূর্ত,
সবটাই তোমার জন্য।

ভালো থেকো,
হাসতে থেকো,
আর জানো—আমি আছি।

— আকাশ
`;

let i=0;
function typeWriter(){
  if(i<text.length){
    document.getElementById("letterText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter,40);
  }
}
