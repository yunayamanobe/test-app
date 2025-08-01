function fortune() {
  const animals = [
    { name: "ウーパールーパー", image: "uparupa.png" },
    { name: "大カラス", image: "ohkarasu.png" },
    { name: "黒猫", image: "kuroneko.png" },
    { name: "ハリネズミ", image: "harinezumi.png" },
    { name: "銀蛇", image: "ginhebi.png" }
  ];

  const fortunes = [
    "パワー全開大吉！今日は最高の一日になるでしょう！水辺を歩くとさらに最高になります！",
    "中吉！なにかいいことがあるかも！でも画鋲は踏みます！気を付けてください！",
    "小吉。ちょっとだけ良い日！でもコンビニに行くとランチは全部売り切れてます！サイゼリヤに行きましょう！",
    "吉。穏やかに過ごせそう。でも仕事は忙しいです。仕方ないよね。",
    "凶...セブンイレブンのおにぎりクーポンをまた使い忘れちゃったね…今日はおとなしくしてよう。"
  ];

  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  // テキストの出力
  const resultText = `${randomAnimal.name}が言いました：「${randomFortune}」`;
  document.getElementById("fortune-text").innerText = resultText;

  // 画像の出力
  const img = document.getElementById("fortune-image");
  img.src = randomAnimal.image;
  img.alt = randomAnimal.name;
  img.style.display = "block";
}

