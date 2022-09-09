const secred = "lolo";
const trayer = [];

window.addEventListener("keyup", (e) => {
  trayer.push(e.key);
  trayer.splice(-secred.length - 1, trayer.length - secred.length);
  trayer.join("").includes(secred) && alert("ding ding");
  console.log(trayer);
});
