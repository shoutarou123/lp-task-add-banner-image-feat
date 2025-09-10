const banner = document.getElementById("bannerSection");
document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("bannerSection").style.display = "none";
});

// バナー状態を記録
let bannerVisible = false;

function handleBannerVisibility() {
  const scrollY = window.scrollY; // スクロール位置
  const windowH = window.innerHeight; // 画面高さ
  const docH = document.documentElement.scrollHeight; // 全体高さ
  const buffer = 200;
  const nearTop = scrollY < buffer; // 最上部付近
  const nearBottom = scrollY > docH - windowH - buffer; // 最下部付近

  if (nearTop || nearBottom) {
    if (bannerVisible) {
      banner.style.display = "none";
      bannerVisible = false;
    }
    return;
  }

  if (!bannerVisible) {
    banner.style.display = "block";
    bannerVisible = true;
  }
}

window.addEventListener("scroll", handleBannerVisibility);
banner.style.display = "none"; // 初期は非表示
