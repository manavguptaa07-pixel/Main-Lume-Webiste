/* ================================================================
   THE LUME THEORY — main.js
   ★ EDIT THE CONFIG BELOW (WhatsApp number, prices, Instagram) ★
   ================================================================ */
const CONFIG = {
  brand: "The Lume Theory",
  // WhatsApp number with country code, digits only (India = 91). Example: "919876543210"
  whatsapp: "916239318113",
  instagram: "https://www.instagram.com/thelumetheory/",
  currency: "₹",
  tagline: "A Brighter You"
};

const INDIA_CITIES = {
  "Andaman and Nicobar Islands":["Diglipur","Mayabunder","Port Blair","Rangat"],
  "Andhra Pradesh":["Amaravati","Anantapur","Chittoor","Eluru","Guntur","Kadapa","Kakinada","Kurnool","Machilipatnam","Nellore","Ongole","Rajahmundry","Tirupati","Vijayawada","Visakhapatnam","Vizianagaram"],
  "Arunachal Pradesh":["Along","Bomdila","Itanagar","Khonsa","Naharlagun","Pasighat","Roing","Tezu","Tawang","Ziro"],
  "Assam":["Barpeta","Dibrugarh","Diphu","Goalpara","Guwahati","Jorhat","Nagaon","Silchar","Sivasagar","Tezpur","Tinsukia"],
  "Bihar":["Arrah","Begusarai","Bhagalpur","Bihar Sharif","Darbhanga","Gaya","Hajipur","Katihar","Madhubani","Muzaffarpur","Patna","Purnia"],
  "Chandigarh":["Chandigarh"],
  "Chhattisgarh":["Ambikapur","Bhilai","Bilaspur","Dhamtari","Durg","Jagdalpur","Korba","Raigarh","Raipur","Rajnandgaon"],
  "Dadra and Nagar Haveli and Daman and Diu":["Daman","Diu","Silvassa"],
  "Delhi":["Delhi","New Delhi"],
  "Goa":["Bicholim","Canacona","Mapusa","Margao","Panaji","Ponda","Vasco da Gama"],
  "Gujarat":["Ahmedabad","Anand","Bhavnagar","Bhuj","Gandhinagar","Jamnagar","Junagadh","Mehsana","Morbi","Nadiad","Rajkot","Surat","Vadodara","Valsad"],
  "Haryana":["Ambala","Bhiwani","Faridabad","Gurugram","Hisar","Karnal","Panipat","Rohtak","Sonipat","Yamunanagar"],
  "Himachal Pradesh":["Bilaspur","Chamba","Dharamshala","Hamirpur","Kullu","Mandi","Shimla","Solan","Una"],
  "Jammu and Kashmir":["Anantnag","Baramulla","Jammu","Kathua","Srinagar","Udhampur"],
  "Jharkhand":["Bokaro","Deoghar","Dhanbad","Dumka","Giridih","Hazaribagh","Jamshedpur","Medininagar","Ranchi"],
  "Karnataka":["Ballari","Belagavi","Bengaluru","Bidar","Davangere","Dharwad","Gulbarga","Hassan","Hubballi","Mangaluru","Mysuru","Shivamogga","Tumakuru","Udupi"],
  "Kerala":["Alappuzha","Ernakulam","Kannur","Kochi","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Thiruvananthapuram","Thrissur"],
  "Ladakh":["Kargil","Leh"],
  "Lakshadweep":["Agatti","Andrott","Kavaratti","Minicoy"],
  "Madhya Pradesh":["Bhopal","Burhanpur","Gwalior","Indore","Jabalpur","Rewa","Sagar","Satna","Ujjain"],
  "Maharashtra":["Ahmednagar","Amravati","Aurangabad","Kolhapur","Mumbai","Nagpur","Nashik","Navi Mumbai","Pune","Sangli","Solapur","Thane"],
  "Manipur":["Bishnupur","Churachandpur","Imphal","Kakching","Thoubal"],
  "Meghalaya":["Baghmara","Jowai","Nongpoh","Shillong","Tura"],
  "Mizoram":["Aizawl","Champhai","Kolasib","Lunglei","Serchhip"],
  "Nagaland":["Dimapur","Kiphire","Kohima","Mokokchung","Mon","Tuensang","Wokha"],
  "Odisha":["Balasore","Berhampur","Bhubaneswar","Cuttack","Puri","Rourkela","Sambalpur"],
  "Puducherry":["Karaikal","Mahe","Puducherry","Yanam"],
  "Punjab":["Amritsar","Bathinda","Hoshiarpur","Jalandhar","Ludhiana","Moga","Pathankot","Patiala","Sangrur"],
  "Rajasthan":["Ajmer","Alwar","Banswara","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur"],
  "Sikkim":["Gangtok","Gyalshing","Mangan","Namchi","Pakyong","Singtam"],
  "Tamil Nadu":["Chennai","Coimbatore","Cuddalore","Dindigul","Erode","Hosur","Kanchipuram","Karur","Madurai","Salem","Thanjavur","Tiruchirappalli","Tirunelveli","Tiruppur","Vellore"],
  "Telangana":["Adilabad","Hyderabad","Karimnagar","Khammam","Mahabubnagar","Nalgonda","Nizamabad","Ramagundam","Warangal"],
  "Tripura":["Agartala","Ambassa","Belonia","Dharmanagar","Kailashahar","Udaipur"],
  "Uttar Pradesh":["Agra","Aligarh","Ayodhya","Bareilly","Ghaziabad","Gorakhpur","Jhansi","Kanpur","Lucknow","Mathura","Meerut","Moradabad","Noida","Prayagraj","Saharanpur","Varanasi"],
  "Uttarakhand":["Almora","Dehradun","Haldwani","Haridwar","Kashipur","Mussoorie","Nainital","Rishikesh","Roorkee"],
  "West Bengal":["Asansol","Bardhaman","Darjeeling","Durgapur","Howrah","Kharagpur","Kolkata","Malda","Siliguri"]
};

// ★ PRICES BELOW ARE PLACEHOLDERS — change `price` for each product ★
const PRODUCTS = [
  { id:"glow", name:"Lumi Glow Serum", size:"30ml", price:2200, img:"lumi-glow-serum.jpg", cat:"serum",
    tag:"Bestseller", benefits:["Radiance Boost","Rejuvenating","Glow Enhancing"],
    desc:"A radiance-focused serum in a rose-gold airless pump, made to give tired, dull-looking skin a fresher, more luminous finish.", when:"AM & PM" },
  { id:"vitc", name:"Lumi Vitamin C Serum", size:"30ml", price:2000, img:"lume-vitamin-c-serum.jpg", cat:"serum",
    tag:"Brightening", benefits:["Antioxidant","Collagen-Boosting","Brightening"],
    desc:"An antioxidant-rich Vitamin C serum for antioxidant protection and a brighter-looking complexion.", when:"Morning" },
  { id:"gluta", name:"Lume Glutathione Serum", size:"30ml", price:2500, img:"lume-glutathione-serum.jpg", cat:"serum",
    tag:"Dark Spots", benefits:["Depigmentation","Glow-Boosting","Dark Spots"],
    desc:"Targets the look of dark spots and uneven tone while boosting overall glow.", when:"Night" },
  { id:"aging", name:"Lume Anti Aging Serum", size:"30ml", price:2200, img:"lume-anti-aging-serum.jpg", cat:"serum",
    tag:"Age Care", benefits:["Wrinkle Care","Renewing","Lifting"],
    desc:"A renewing serum for wrinkle care and a lifted, smoother-looking appearance.", when:"Night" },
  { id:"repair", name:"Lume Repair Serum", size:"50ml", price:3000, img:"lume-repair-serum.jpg", cat:"serum",
    tag:"50ml Value", benefits:["Skin Renewal","Fine Line Care","Skin Repair","Improve Firmness","Hair Growth Support"],
    desc:"A multi-purpose repair serum for skin renewal, fine line care, firmness and hair growth support.", when:"Night" },
  { id:"spf", name:"Lume SPF", size:"50ml", price:1200, img:"lume-spf.jpg", cat:"sun",
    tag:"Daily Shield", benefits:["UVA + UVB","Blue Light Protection","Broad Spectrum"],
    desc:"Broad-spectrum sun protection against UVA, UVB and blue light — the last step of every morning routine.", when:"Morning" },
  { id:"day", name:"Lume Day Cream", size:"50g", price:1800, img:"lume-day-cream.jpg", cat:"cream",
    tag:"Daily Care", benefits:["Skin Barrier","Deep Hydration","Nourishment"],
    desc:"A nourishing day moisturiser that supports the skin barrier and delivers deep hydration.", when:"Morning" },
  { id:"night", name:"Lume Night Cream", size:"50g", price:1800, img:"lume-night-cream.jpg", cat:"cream",
    tag:"Overnight", benefits:["Reviving","Repairing","Hydrating"],
    desc:"A rich overnight cream that revives, repairs and hydrates while you sleep.", when:"Night" }
];
const byId = id => PRODUCTS.find(p => p.id === id);
const money = n => CONFIG.currency + n.toLocaleString("en-IN");

/* ---------- icons ---------- */
const I = {
  bag:'<svg viewBox="0 0 24 24"><path d="M6 8h12l1 12H5L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>',
  menu:'<svg viewBox="0 0 24 24"><path d="M4 8h16M4 16h16"/></svg>',
  close:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  wa:'<svg viewBox="0 0 32 32"><path d="M16.04 3C9.4 3 4 8.38 4 15c0 2.3.65 4.45 1.78 6.28L4 29l7.9-1.74A12.1 12.1 0 0 0 16.04 27C22.68 27 28 21.62 28 15S22.68 3 16.04 3Zm0 21.9c-1.37 0-2.7-.37-3.86-1.05l-.28-.16-4.6 1.01 1.03-4.46-.18-.29A9.8 9.8 0 0 1 6.2 15c0-5.42 4.42-9.82 9.84-9.82S25.88 9.58 25.88 15s-4.42 9.9-9.84 9.9Zm5.4-7.35c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.15-.17.2-.34.22-.64.07a8.07 8.07 0 0 1-2.4-1.48 9 9 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.5.7.3 1.26.48 1.7.62.72.23 1.37.2 1.88.12.57-.08 1.75-.72 2-1.4.24-.7.24-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/></svg>',
  ig:'<svg viewBox="0 0 24 24"><path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2ZM17.3 6.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM21 8.5c-.05-1.1-.3-2.1-1.1-2.9s-1.8-1.05-2.9-1.1C15.8 4.4 8.2 4.4 7 4.5c-1.1.05-2.1.3-2.9 1.1S3.05 7.4 3 8.5C2.9 9.7 2.9 14.3 3 15.5c.05 1.1.3 2.1 1.1 2.9s1.8 1.05 2.9 1.1c1.2.1 8.8.1 10 0 1.1-.05 2.1-.3 2.9-1.1s1.05-1.8 1.1-2.9c.1-1.2.1-5.8 0-7ZM19.2 17c-.25.65-.75 1.15-1.4 1.4-1 .4-3.3.3-5.8.3s-4.8.1-5.8-.3A2.5 2.5 0 0 1 4.8 17c-.4-1-.3-3.3-.3-5s-.1-4 .3-5c.25-.65.75-1.15 1.4-1.4 1-.4 3.3-.3 5.8-.3s4.8-.1 5.8.3c.65.25 1.15.75 1.4 1.4.4 1 .3 3.3.3 5s.1 4-.3 5Z"/></svg>'
};

/* ---------- shared layout (header, footer, cart, modals) ---------- */
const PAGES = [["index.html","Home"],["shop.html","Shop"],["about.html","Our Story"],["routine.html","Routine"],["contact.html","Contact"]];
function currentPage(){ const f = location.pathname.split("/").pop() || "index.html"; return f; }

function mountLayout(){
  const cur = currentPage();
  const links = PAGES.map(([h,t]) => `<a href="${h}" class="${cur===h?"on":""}">${t}</a>`).join("");
  document.body.insertAdjacentHTML("afterbegin", `
    <div id="loader"><img class="lg" src="logo.png" alt="The Lume Theory"><div class="bar"><i></i></div></div>
    <div id="progress"></div><div id="glow"></div><canvas id="particles"></canvas>
    <div class="announce">Skin · Aesthetics · Wellness — Order directly on WhatsApp</div>
    <header class="nav" id="nav"><div class="wrap in">
      <a href="index.html" class="brand"><img src="logo.png" alt="The Lume Theory logo"><div><b>The Lume Theory</b><small>A Brighter You</small></div></a>
      <nav class="links" id="links">${links}</nav>
      <div class="actions">
        <button class="icon-btn" id="openCart" aria-label="Open cart">${I.bag}<span class="badge" id="badge">0</span></button>
        <button class="icon-btn burger" id="burger" aria-label="Menu" aria-controls="links" aria-expanded="false">${I.menu}</button>
      </div></div></header>`);
  document.body.insertAdjacentHTML("beforeend", `
    <footer class="ft"><div class="wrap">
      <div class="fg">
        <div><a href="index.html" class="brand" style="padding:0"><img src="logo.png" alt=""><div><b>The Lume Theory</b><small>A Brighter You</small></div></a>
          <p style="margin-top:18px;max-width:300px">Skin-first care, thoughtfully formulated. Serums, creams and sun protection to support healthier, brighter-looking skin.</p>
          <div class="soc"><a href="${CONFIG.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${I.ig}</a><a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.wa}</a></div></div>
        <div><h4>Explore</h4>${PAGES.map(([h,t])=>`<a href="${h}">${t}</a>`).join("")}</div>
        <div><h4>Shop</h4><a href="shop.html">All Products</a><a href="shop.html?c=serum">Serums</a><a href="shop.html?c=cream">Creams</a><a href="shop.html?c=sun">Sun Care</a></div>
        <div><h4>Order</h4><p>Add to cart and place your order straight to WhatsApp — we confirm everything personally.</p><a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener">Chat on WhatsApp</a></div>
      </div>
      <div class="fb"><span>© ${new Date().getFullYear()} The Lume Theory. All rights reserved.</span><span>Skin | Aesthetics | Wellness</span></div>
      <p class="note">Results vary from person to person. Do a patch test before first use. Consult a dermatologist for skin conditions.</p>
    </div></footer>
    <a class="fab" href="https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Hi The Lume Theory! I'd like to know more about your products.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${I.wa}</a>
    <button class="totop" id="totop" aria-label="Back to top">↑</button>
    <div id="overlay"></div>
    <aside id="drawer" aria-label="Cart"><div class="dh"><h3>Your Bag</h3><button class="icon-btn" id="closeCart" aria-label="Close cart">${I.close}</button></div>
      <div class="dbody" id="cartBody"></div>
      <div class="df" id="cartFoot"></div></aside>
    <div id="checkout"><div class="box"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><h3 style="font-size:2rem">Place Order</h3><button class="icon-btn" id="closeCo" aria-label="Close">${I.close}</button></div>
      <p style="color:var(--muted);margin-bottom:20px;font-size:.92rem">Fill in your details — your order opens in WhatsApp, ready to send to us.</p>
      <div class="sum" id="coSum"></div>
      <form id="coForm" novalidate>
        <div class="two"><div class="fld"><label>Full Name</label><input name="name" placeholder="Your name" autocomplete="name"><div class="err">Use letters only for your name</div></div>
        <div class="fld"><label>Phone</label><div class="phone-field"><span>+91</span><input name="phone" placeholder="10-digit mobile" inputmode="numeric" autocomplete="tel-national" pattern="[0-9]{10}"></div><div class="err">Enter a valid 10-digit number</div></div></div>
        <div class="fld"><label>Full Address</label><textarea name="address" rows="2" placeholder="House no., street, area, landmark"></textarea><div class="err">Please enter your address</div></div>
        <div class="two"><div class="fld"><label>State / Union Territory</label><select name="state" autocomplete="address-level1"><option value="">Select state / union territory</option>${Object.keys(INDIA_CITIES).map(state=>`<option value="${state}">${state}</option>`).join("")}</select><div class="err">Select your state or union territory</div></div>
        <div class="fld"><label>City / Town</label><input name="city" placeholder="Select a state first" list="citySuggestions" autocomplete="address-level2" disabled><datalist id="citySuggestions"></datalist><div class="err">Enter your city or town</div></div></div>
        <div class="fld"><label>Pincode</label><input name="pin" placeholder="6-digit pincode" inputmode="numeric" autocomplete="postal-code" pattern="[0-9]{6}"><div class="err">Enter a valid 6-digit pincode</div></div>
        <div class="fld"><label>Note (optional)</label><input name="note" placeholder="Skin type, allergies, delivery instructions…"></div>
        <button class="btn btn-wa" style="width:100%" type="submit">${I.wa} Send Order on WhatsApp</button>
      </form></div></div>
    <div id="qv"><div class="box" style="position:relative"><button class="icon-btn xx" id="closeQv" aria-label="Close" style="background:#0f0a07;z-index:3">${I.close}</button><img id="qvImg" alt=""><div class="txt" id="qvTxt"></div></div></div>
    <div id="toast"></div>`);
}

/* ---------- cart ---------- */
const Cart = {
  key:"lume_cart_v1",
  get(){ try{ return JSON.parse(localStorage.getItem(this.key))||[]; }catch(e){ return []; } },
  set(c){ try{ localStorage.setItem(this.key, JSON.stringify(c)); }catch(e){} render(); },
  add(id, q=1){ const c=this.get(); const f=c.find(x=>x.id===id); f? f.q+=q : c.push({id,q}); this.set(c); },
  change(id,d){ let c=this.get(); const f=c.find(x=>x.id===id); if(!f) return; f.q+=d; if(f.q<=0) c=c.filter(x=>x.id!==id); this.set(c); },
  remove(id){ this.set(this.get().filter(x=>x.id!==id)); },
  clear(){ this.set([]); },
  count(){ return this.get().reduce((a,b)=>a+b.q,0); },
  total(){ return this.get().reduce((a,b)=>a+(byId(b.id)?.price||0)*b.q,0); }
};
function render(){
  const c = Cart.get().filter(x=>byId(x.id));
  const n = Cart.count(), b = document.getElementById("badge");
  b.textContent = n; b.classList.toggle("on", n>0); b.classList.remove("bump"); void b.offsetWidth; if(n) b.classList.add("bump");
  const body = document.getElementById("cartBody"), foot = document.getElementById("cartFoot");
  if(!c.length){
    body.innerHTML = `<div class="empty"><div class="big">✦</div><p style="margin:10px 0 22px">Your bag is empty.<br>Discover your glow.</p><a class="btn btn-gold" href="shop.html">Shop Now</a></div>`;
    foot.style.display="none"; return;
  }
  foot.style.display="";
  body.innerHTML = c.map(x=>{ const p=byId(x.id); return `
    <div class="ci"><img src="${p.img}" alt="${p.name}">
      <div><b>${p.name}</b><small>${p.size} · ${money(p.price)}</small>
        <div class="qty"><button data-d="-1" data-id="${p.id}" aria-label="Decrease">−</button><span>${x.q}</span><button data-d="1" data-id="${p.id}" aria-label="Increase">+</button></div></div>
      <div style="display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end"><button class="rm" data-rm="${p.id}">Remove</button><div class="pr">${money(p.price*x.q)}</div></div></div>`; }).join("");
  foot.innerHTML = `<div class="tot"><span>Subtotal</span><span>${money(Cart.total())}</span></div>
    <small>Shipping &amp; payment options are confirmed with you on WhatsApp.</small>
    <button class="btn btn-wa" id="goCheckout">${I.wa} Place Order on WhatsApp</button>`;
}
function openCart(o=true){ document.getElementById("drawer").classList.toggle("on",o); document.getElementById("overlay").classList.toggle("on",o); document.body.style.overflow=o?"hidden":""; }
function toast(msg){ const t=document.getElementById("toast"); t.textContent=msg; t.classList.add("on"); clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove("on"),2600); }

/* ---------- checkout → WhatsApp ---------- */
function openCheckout(o=true){
  const el=document.getElementById("checkout");
  if(o){
    const items=Cart.get().filter(x=>byId(x.id));
    document.getElementById("coSum").innerHTML = items.map(x=>{const p=byId(x.id);return `<div><span>${p.name} × ${x.q}</span><span>${money(p.price*x.q)}</span></div>`}).join("") + `<div class="t"><span>Total</span><span>${money(Cart.total())}</span></div>`;
  }
  el.classList.toggle("on",o);
}
function buildOrderMessage(d){
  const items=Cart.get().filter(x=>byId(x.id));
  const lines=items.map((x,i)=>{const p=byId(x.id);return `${i+1}. ${p.name} (${p.size}) × ${x.q} = ${money(p.price*x.q)}`});
  return [
    `*🛍️ New Order — ${CONFIG.brand}*`,"",
    "*Items:*",...lines,"",
    `*Total: ${money(Cart.total())}*`,"",
    "*Customer Details*",
    `Name: ${d.name}`,`Phone: +91 ${d.phone}`,`Address: ${d.address}`,`City: ${d.city}`,`State: ${d.state}`,`Pincode: ${d.pin}`,
    d.note?`Note: ${d.note}`:null,"",
    "Please confirm my order. Thank you! ✨"
  ].filter(l=>l!==null).join("\n");
}
function waLink(text){ return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`; }
function wireCheckoutInputs(){
  const form=document.getElementById("coForm");
  const contact=document.getElementById("contactForm");
  const setupForm=target=>{
    if(!target) return;
    const name=target.elements.name;
    name.addEventListener("input",()=>{ name.value=name.value.replace(/[^\p{L}\s'-]/gu,"").replace(/\s{2,}/g," "); name.closest(".fld").classList.remove("bad"); });
    const phone=target.elements.phone;
    phone.addEventListener("input",()=>{
      let digits=phone.value.replace(/\D/g,"");
      if(digits.length>10&&digits.startsWith("91")) digits=digits.slice(2);
      phone.value=digits.slice(0,10);
      phone.closest(".fld").classList.remove("bad");
    });
  };
  setupForm(form);
  setupForm(contact);

  const pin=form.elements.pin;
  pin.addEventListener("input",()=>{ pin.value=pin.value.replace(/\D/g,"").slice(0,6); pin.closest(".fld").classList.remove("bad"); });

  const state=form.elements.state;
  const city=form.elements.city;
  const suggestions=document.getElementById("citySuggestions");
  state.addEventListener("change",()=>{
    const cities=INDIA_CITIES[state.value]||[];
    city.value="";
    city.disabled=cities.length===0;
    city.placeholder=cities.length?"Type to search or choose a suggestion":"Select a state first";
    suggestions.replaceChildren(...cities.map(name=>{ const option=document.createElement("option"); option.value=name; return option; }));
    state.closest(".fld").classList.remove("bad");
    city.closest(".fld").classList.remove("bad");
  });
}
function submitOrder(e){
  e.preventDefault();
  const f=e.target, d=Object.fromEntries(new FormData(f).entries());
  Object.keys(d).forEach(k=>d[k]=String(d[k]).trim());
  const rules={name:v=>/^[\p{L}]+(?:[ '\-][\p{L}]+)*$/u.test(v),phone:v=>/^[6-9]\d{9}$/.test(v),address:v=>v.length>5,state:v=>Object.prototype.hasOwnProperty.call(INDIA_CITIES,v),city:v=>v.length>1,pin:v=>/^\d{6}$/.test(v)};
  let ok=true;
  for(const k in rules){ const bad=!rules[k](d[k]||""); f.elements[k].closest(".fld").classList.toggle("bad",bad); if(bad) ok=false; }
  if(!ok) return;
  const url=waLink(buildOrderMessage(d));
  const w=window.open(url,"_blank");
  if(!w) location.href=url;
  toast("Opening WhatsApp — just press Send ✨");
  openCheckout(false); openCart(false);
}

/* ---------- product UI ---------- */
function cardHTML(p,i=0){
  return `<article class="card rv d${(i%4)+1}" data-tilt data-product="${p.id}">
    <div class="ph" data-qv="${p.id}"><span class="tag">${p.tag}</span><img src="${p.img}" alt="${p.name}" loading="lazy"><span class="quick">Quick View</span></div>
    <div class="bd"><h3>${p.name}</h3><div class="sz">${p.size}</div>
    <div class="chips">${p.benefits.slice(0,3).map(b=>`<i>${b}</i>`).join("")}</div>
    <div class="row"><div class="price">${money(p.price)}</div><button class="add" data-add="${p.id}">Add to Bag</button></div></div></article>`;
}
function openQV(id){
  const p=byId(id); if(!p) return;
  document.getElementById("qvImg").src=p.img; document.getElementById("qvImg").alt=p.name; document.getElementById("qvImg").dataset.product=p.id;
  document.getElementById("qvTxt").innerHTML=`<span class="eyebrow">${p.tag}</span><h2>${p.name}</h2><div class="sz" style="color:var(--muted);letter-spacing:.2em;text-transform:uppercase;font-size:.75rem">${p.size} · Best used: ${p.when}</div>
    <p style="margin:18px 0;color:var(--muted)">${p.desc}</p>
    <div class="chips">${p.benefits.map(b=>`<i>${b}</i>`).join("")}</div>
    <div class="price" style="font-size:2.4rem;margin:14px 0 22px">${money(p.price)}</div>
    <div style="display:flex;gap:12px;flex-wrap:wrap"><button class="btn btn-gold" data-add="${p.id}" data-close="1">Add to Bag</button>
    <a class="btn btn-wa" target="_blank" rel="noopener" href="${waLink(`Hi ${CONFIG.brand}! I'd like to order: ${p.name} (${p.size}) — ${money(p.price)}. Please guide me with the next steps.`)}">${I.wa} Order Now</a></div>
    <p class="note">Patch test before first use. Results vary.</p>`;
  document.getElementById("qv").classList.add("on"); document.body.style.overflow="hidden";
}
function closeQV(){ document.getElementById("qv").classList.remove("on"); document.body.style.overflow=""; }

function mountGrids(){
  document.querySelectorAll("[data-grid]").forEach(g=>{
    const mode=g.dataset.grid;
    const list = mode==="featured" ? ["glow","vitc","gluta","spf"].map(byId) : PRODUCTS;
    const draw = cat => { g.innerHTML = list.filter(p=>!cat||cat==="all"||p.cat===cat).map(cardHTML).join(""); observeReveal(); };
    draw(new URLSearchParams(location.search).get("c")||"all");
    const fl=document.querySelector("[data-filters]");
    if(fl){
      const start=new URLSearchParams(location.search).get("c")||"all";
      fl.querySelectorAll("button").forEach(b=>b.classList.toggle("on",b.dataset.f===start));
      fl.addEventListener("click",e=>{ const b=e.target.closest("button"); if(!b) return;
        fl.querySelectorAll("button").forEach(x=>x.classList.remove("on")); b.classList.add("on"); draw(b.dataset.f); });
    }
  });
  const r=document.querySelector("[data-routine]");
  if(r){
    const items=l=>l.map(p=>`<div class="it"><img src="${p.img}" alt="${p.name}" loading="lazy"><div><small>${p.size}</small><b>${p.name}</b></div></div>`).join("");
    const amL=["vitc","day","spf"].map(byId), pmL=["gluta","repair","night"].map(byId);
    r.innerHTML=`<div class="tabs"><button class="on" data-t="am">☀ Morning</button><button data-t="pm">☾ Night</button></div>
      <div class="panel on" id="am"><div class="steps">
        <div class="step"><h3>Brighten</h3><p>Apply Lumi Vitamin C Serum on clean skin for antioxidant protection.</p><span class="pill">Vitamin C Serum</span></div>
        <div class="step"><h3>Hydrate</h3><p>Seal in moisture and support your skin barrier with the Day Cream.</p><span class="pill">Day Cream</span></div>
        <div class="step"><h3>Protect</h3><p>Finish with broad-spectrum SPF against UVA, UVB and blue light.</p><span class="pill">Lume SPF</span></div></div>
        <div class="rp" style="margin-top:34px">${items(amL)}</div></div>
      <div class="panel" id="pm"><div class="steps">
        <div class="step"><h3>Even Tone</h3><p>Use the Glutathione Serum to target dark spots and boost glow.</p><span class="pill">Glutathione Serum</span></div>
        <div class="step"><h3>Repair</h3><p>Layer the Repair Serum for skin renewal, fine line care and firmness.</p><span class="pill">Repair Serum</span></div>
        <div class="step"><h3>Revive</h3><p>Lock everything in overnight with the Night Cream.</p><span class="pill">Night Cream</span></div></div>
        <div class="rp" style="margin-top:34px">${items(pmL)}</div></div>
      <div class="center" style="margin-top:44px"><button class="btn btn-gold" id="addAM">Add Morning Routine</button> <button class="btn btn-line" id="addPM">Add Night Routine</button></div>`;
    r.addEventListener("click",e=>{
      const t=e.target.closest("[data-t]");
      if(t){ r.querySelectorAll(".tabs button").forEach(b=>b.classList.remove("on")); t.classList.add("on"); r.querySelectorAll(".panel").forEach(p=>p.classList.toggle("on",p.id===t.dataset.t)); }
      if(e.target.id==="addAM"){ amL.forEach(p=>Cart.add(p.id)); toast("Morning routine added to your bag ✨"); openCart(); }
      if(e.target.id==="addPM"){ pmL.forEach(p=>Cart.add(p.id)); toast("Night routine added to your bag ✨"); openCart(); }
    });
  }
  const f=document.querySelector("[data-finder]");
  if(f){
    const C=[["✨ Dullness","Lack of glow & radiance",["glow","vitc"]],["◐ Dark Spots","Uneven tone & pigmentation",["gluta","vitc"]],["〰 Fine Lines","Wrinkles & loss of firmness",["aging","repair","night"]],["💧 Dryness","Hydration & barrier care",["day","night"]],["☀ Sun Care","Daily UV & blue light shield",["spf"]]];
    f.innerHTML=`<div class="finder">${C.map((c,i)=>`<button class="concern rv d${(i%4)+1}" data-c="${i}"><b>${c[0]}</b><span>${c[1]}</span></button>`).join("")}</div><div id="result"></div>`;
    f.addEventListener("click",e=>{ const b=e.target.closest("[data-c]"); if(!b) return;
      f.querySelectorAll(".concern").forEach(x=>x.classList.remove("on")); b.classList.add("on");
      const ids=C[b.dataset.c][2]; document.getElementById("result").innerHTML=`<p class="eyebrow" style="margin-bottom:24px">Recommended for you</p><div class="grid">${ids.map(i=>cardHTML(byId(i))).join("")}</div>`; observeReveal();
      document.getElementById("result").scrollIntoView({behavior:"smooth",block:"nearest"}); });
  }
}

/* ---------- effects ---------- */
let io;
function observeReveal(){
  if(!io) io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} }),{threshold:.12,rootMargin:"0px 0px -40px 0px"});
  document.querySelectorAll(".rv:not(.in)").forEach(el=>io.observe(el));
}
function counters(){
  const cio=new IntersectionObserver(es=>es.forEach(e=>{ if(!e.isIntersecting) return; cio.unobserve(e.target);
    const el=e.target, to=+el.dataset.count, suf=el.dataset.suf||""; let s=null;
    const step=t=>{ s=s||t; const k=Math.min((t-s)/1600,1); el.textContent=Math.floor((1-Math.pow(1-k,3))*to)+suf; if(k<1) requestAnimationFrame(step); };
    requestAnimationFrame(step); }),{threshold:.5});
  document.querySelectorAll("[data-count]").forEach(el=>cio.observe(el));
}
function tilt(){
  if(matchMedia("(hover:none)").matches) return;
  document.addEventListener("mousemove",e=>{
    const g=document.getElementById("glow"); g.style.left=e.clientX+"px"; g.style.top=e.clientY+"px";
    const st=document.querySelector(".stage .tilt");
    if(st){ const r=st.parentElement.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      if(Math.abs(x)<1&&Math.abs(y)<1) st.style.transform=`rotateY(${x*18}deg) rotateX(${-y*14}deg)`; }
  });
  document.addEventListener("mousemove",e=>{
    const c=e.target.closest&&e.target.closest("[data-tilt]");
    document.querySelectorAll("[data-tilt].hot").forEach(x=>{ if(x!==c){ x.classList.remove("hot"); x.style.transform=""; } });
    if(!c) return; c.classList.add("hot"); const r=c.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    c.style.transform=`perspective(900px) rotateY(${x*9}deg) rotateX(${-y*9}deg) translateY(-6px)`; });
}
function particles(){
  const cv=document.getElementById("particles"); if(!cv||matchMedia("(prefers-reduced-motion:reduce)").matches||matchMedia("(hover:none)").matches) return;
  const x=cv.getContext("2d"); let W,H,P=[];
  const size=()=>{ W=cv.width=innerWidth; H=cv.height=innerHeight; };
  size(); addEventListener("resize",size);
  const N=innerWidth<700?22:46;
  for(let i=0;i<N;i++) P.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2.2+.4,v:Math.random()*.35+.08,a:Math.random()*.6+.2,p:Math.random()*6.28,s:Math.random()*.01+.004});
  (function loop(){ x.clearRect(0,0,W,H);
    P.forEach(p=>{ p.y-=p.v; p.p+=p.s; p.x+=Math.sin(p.p)*.35; if(p.y<-10){p.y=H+10;p.x=Math.random()*W;}
      const g=x.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*5); g.addColorStop(0,`rgba(232,207,154,${p.a*(.6+.4*Math.sin(p.p*3))})`); g.addColorStop(1,"rgba(201,161,91,0)");
      x.fillStyle=g; x.beginPath(); x.arc(p.x,p.y,p.r*5,0,6.28); x.fill(); });
    requestAnimationFrame(loop); })();
}
function parallax(){
  const nav=document.getElementById("nav"), pr=document.getElementById("progress"), tt=document.getElementById("totop");
  const hasHover=matchMedia("(hover:hover)").matches;
  let ticking=false;
  const on=()=>{ if(ticking) return; ticking=true;
    requestAnimationFrame(()=>{ const y=scrollY, h=document.documentElement.scrollHeight-innerHeight;
      nav.classList.toggle("stuck",y>40); pr.style.width=(h>0?y/h*100:0)+"%"; tt.classList.toggle("on",y>700);
      if(hasHover) document.querySelectorAll("[data-par]").forEach(el=>{ const r=el.getBoundingClientRect(); el.style.transform=`translateY(${(r.top-innerHeight/2)*(+el.dataset.par)}px)`; });
      ticking=false;
    });
  };
  addEventListener("scroll",on,{passive:true}); on();
  tt.onclick=()=>scrollTo({top:0,behavior:"smooth"});
}

/* ---------- init ---------- */
document.addEventListener("DOMContentLoaded",()=>{
  mountLayout(); mountGrids(); render(); observeReveal(); counters(); tilt(); particles(); parallax();
  const burger=document.getElementById("burger"), links=document.getElementById("links");
  const setMenuOpen=open=>{ links.classList.toggle("open",open); document.body.classList.toggle("nav-open",open); burger.setAttribute("aria-expanded",String(open)); };
  burger.onclick=()=>setMenuOpen(!links.classList.contains("open"));
  document.querySelectorAll("#links a").forEach(a=>a.addEventListener("click",()=>setMenuOpen(false)));
  document.getElementById("openCart").onclick=()=>openCart(true);
  document.getElementById("closeCart").onclick=()=>openCart(false);
  document.getElementById("overlay").onclick=()=>openCart(false);
  document.getElementById("closeCo").onclick=()=>openCheckout(false);
  document.getElementById("closeQv").onclick=closeQV;
  document.getElementById("qv").addEventListener("click",e=>{ if(e.target.id==="qv") closeQV(); });
  document.getElementById("checkout").addEventListener("click",e=>{ if(e.target.id==="checkout") openCheckout(false); });
  document.getElementById("coForm").addEventListener("submit",submitOrder);
  wireCheckoutInputs();
  document.addEventListener("keydown",e=>{ if(e.key==="Escape"){ closeQV(); openCheckout(false); openCart(false); setMenuOpen(false); } });
  document.addEventListener("click",e=>{
    const a=e.target.closest("[data-add]");
    if(a){ Cart.add(a.dataset.add); toast(byId(a.dataset.add).name+" added to your bag"); a.classList.add("ok"); const t=a.textContent; if(!a.dataset.close){ a.textContent="Added ✓"; setTimeout(()=>{a.classList.remove("ok");a.textContent=t;},1400); } else { closeQV(); openCart(true); } }
    const q=e.target.closest("[data-qv]"); if(q) openQV(q.dataset.qv);
    const d=e.target.closest("[data-d]"); if(d) Cart.change(d.dataset.id,+d.dataset.d);
    const r=e.target.closest("[data-rm]"); if(r) Cart.remove(r.dataset.rm);
    if(e.target.id==="goCheckout"||e.target.closest("#goCheckout")) openCheckout(true);
  });
  // contact form → WhatsApp
  const cf=document.getElementById("contactForm");
  if(cf) cf.addEventListener("submit",e=>{ e.preventDefault(); const d=Object.fromEntries(new FormData(cf).entries());
    d.name=d.name.trim(); d.phone=d.phone.trim(); d.message=d.message.trim();
    const phoneField=cf.elements.phone.closest(".fld");
    const invalidName=!/^[\p{L}]+(?:[ '\-][\p{L}]+)*$/u.test(d.name);
    const invalidPhone=d.phone!==""&&!/^[6-9]\d{9}$/.test(d.phone);
    cf.elements.name.closest(".fld").classList.toggle("bad",invalidName);
    phoneField.classList.toggle("bad",invalidPhone);
    if(invalidName||invalidPhone||!d.message){ toast("Check your name, phone number and message"); return; }
    const t=[`*Enquiry — ${CONFIG.brand}*`,"",`Name: ${d.name}`,d.phone?`Phone: +91 ${d.phone}`:null,`Skin concern: ${d.concern}`,"",d.message].filter(l=>l!==null).join("\n");
    window.open(waLink(t),"_blank"); toast("Opening WhatsApp…"); });
  window.addEventListener("load",()=>setTimeout(()=>document.getElementById("loader").classList.add("done"),150));
  setTimeout(()=>document.getElementById("loader")?.classList.add("done"),1800);
});