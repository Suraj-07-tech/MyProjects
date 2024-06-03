let murga = (m) => {
  return new Promise((resolve, reject) => {
    console.log("Murga kat rha h....");
    setTimeout(() => {
      resolve(m);
      console.log("Murga kat gya");
    }, 2000)
  })
}
let murga_dhona = (m_d) => {
  return new Promise((resolve, reject) => {
    console.log("Murga dhul rha h....");
    setTimeout(() => {
      resolve(m_d);
      console.log("Murga dhul Gaya!");
    }, 2000)
  })
}
let pyaz = (p) => {
  return new Promise((resolve, reject) => {
    console.log("pyaz kat rha h....");
    setTimeout(() => {
      resolve(p);
      console.log("Pyaz Kat gya!");
    }, 2000)
  })
}
let masala = (ma) => {
  return new Promise((resolve, reject) => {
    console.log("masala bhuna ja rha h....");
    setTimeout(() => {
      resolve(ma);
      console.log("masala bhuna gya!");
    }, 2000)
  })
}
let murga_bhuna = (m_b) => {
  return new Promise((resolve, reject) => {
    console.log("Murga bhuna  ja rha hai.......");
    setTimeout(() => {
      resolve(m_b);
      console.log("Murga Bhuna gya!");
    }, 2000)
  })
}
let murga_ready = (m_r) => {
  return new Promise((resolve, reject) => {
    console.log("Murga Ready ho rha hai......!");
    setTimeout(() => {
      resolve(m_r);
      console.log("Murga Ready ho gya!... Lo khao");
    }, 2000)
  })
}

//   Using Async await 
(async function () {
  let m = await murga("🐔");
  let m_d = await murga_dhona("🫧");
  let p = await pyaz("🧅");
  let ma = await masala("🫚");
  let m_b = await murga_bhuna("🍳");
  let m_r = await murga_ready("🍴");
  console.log(m, m_d, p, ma, m_b, m_r);

})();