const content = document.querySelector(".content_right");

const begin = document.querySelector(".begin");

const imgs = generateImgsArray();

const baseImg = "./images/round.png";

let img = "";

let start = false;

begin.addEventListener("click", function () {
  if (start && confirm("要在玩一次吗")) {
    start = false;
    render();
  } else {
    start = true;
    this.style.transform = `rotate(${3 * 360}deg)`;
    this.style.transition = "all 3.5s";
    this.addEventListener("transitionend", function () {
      this.children[0].style.width = "75px";
      this.children[0].style.height = "75px";
      this.children[0].src = img;
      this.style.transition = "";
      this.style.transform = "";
    });
  }
});

render();

function render() {
  console.log(1);
  begin.children[0].src = baseImg;
  begin.children[0].style.width = "104px";
  begin.children[0].style.height = "104px";

  const index = getRandomIntInclusive(0, imgs.length - 1);
  img = imgs[index];
  const newImgs = imgs.map((item, i) => {
    return i !== index;
  });
  let html = "";
  for (let i = 0; i < 100; ++i) {
    let img = getRandomIntInclusive(0, newImgs.length - 1);
    if (i % 9 === 0 && i > 0) {
      img = index;
    }
    html += ` 
    <div class="content_item">
      <span>${i}</span>
      <img src="./images/values/${img}.png" alt="" />
    </div>`;
  }
  content.innerHTML = html;
}

function generateImgsArray() {
  const imgs = [];
  for (let i = 0; i <= 15; ++i) {
    imgs.push(`./images/values/${i}.png`);
  }
  return imgs;
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 包含最小值和最大值
}
