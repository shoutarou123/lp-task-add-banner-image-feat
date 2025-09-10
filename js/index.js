function checkAllOpenedAndSetHeight() {
  const width = Math.floor(window.innerWidth);
  const faqSection = document.querySelector(".faq_section");
  const plusImgs = Array.from(faqSection.querySelectorAll(".plus_img"));

  const allPlusVisible = Array.from(faqSection.querySelectorAll(".plus_img")).every(
    (img) => img.style.display !== "none" && window.getComputedStyle(img).display !== "none"
  );

  if (width <= 350) {
    let count = plusImgs.filter(
      (img) => img.style.display !== "none" && window.getComputedStyle(img).display !== "none"
    ).length;
    if (count === 1) {
      faqSection.style.height = "560px";
    } else if (count === 2) {
      faqSection.style.height = "620px";
    } else if (count === 3) {
      faqSection.style.height = "680px";
    } else if (count === 4) {
      faqSection.style.height = "740px";
    } else {
      faqSection.style.height = "";
    }
    return;
  }

  if (width > 350 && width <= 375) {
    let count = plusImgs.filter(
      (img) => img.style.display !== "none" && window.getComputedStyle(img).display !== "none"
    ).length;
    if (count === 1) {
      faqSection.style.height = "500px";
    } else if (count === 2) {
      faqSection.style.height = "560px";
    } else if (count === 3) {
      faqSection.style.height = "640px";
    } else if (count === 4) {
      faqSection.style.height = "710px";
    } else {
      faqSection.style.height = "";
    }
    return;
  }

  if (width > 375 && width <= 500) {
    let count = plusImgs.filter(
      (img) => img.style.display !== "none" && window.getComputedStyle(img).display !== "none"
    ).length;

    if (count === 1) {
      faqSection.style.height = "610px";
    } else if (count === 2) {
      faqSection.style.height = "680px";
    } else if (count === 3) {
      faqSection.style.height = "750px";
    } else if (count === 4) {
      faqSection.style.height = "800px";
    } else {
      faqSection.style.height = "";
    }
    return;
  }

  if (!allPlusVisible) {
    faqSection.style.height = "";
    return;
  }

  if (width <= 1040 && width >= 851) {
    faqSection.style.height = "864px";
  } else if (width <= 850 && width >= 501) {
    faqSection.style.height = "950px";
  } else if (width <= 500 && width >= 376) {
    faqSection.style.height = "600px";
  }
}

document.querySelectorAll(".q_flex").forEach(function (q_flex) {
  const minus = q_flex.querySelector(".minus_img");
  const plus = q_flex.querySelector(".plus_img");
  const answer = q_flex.nextElementSibling;

  // 質問部分全体をクリック可能にする
  q_flex.addEventListener("click", function () {
    if (plus.style.display === "none" || window.getComputedStyle(plus).display === "none") {
      // 現在開いている状態（マイナス表示）→ 閉じる（プラス表示）
      minus.style.display = "none";
      plus.style.display = "block";
      answer.style.display = "none";
    } else {
      // 現在閉じている状態（プラス表示）→ 開く（マイナス表示）
      minus.style.display = "block";
      plus.style.display = "none";
      answer.style.display = "block";
    }
    checkAllOpenedAndSetHeight();
  });

  // プラスマイナスアイコン個別のクリックイベントも残す（後方互換性のため）
  minus.addEventListener("click", function (e) {
    e.stopPropagation(); // 親要素のクリックイベントを防ぐ
    minus.style.display = "none";
    plus.style.display = "block";
    answer.style.display = "none";
    checkAllOpenedAndSetHeight();
  });

  plus.addEventListener("click", function (e) {
    e.stopPropagation(); // 親要素のクリックイベントを防ぐ
    minus.style.display = "block";
    plus.style.display = "none";
    answer.style.display = "block";
    checkAllOpenedAndSetHeight();
  });
});
