//テスト用
const hello = () => {
    alert("hello");
}

//メンバーIDを取得
const getMemberId = () => {
    const p_mid = parent.document.getElementById("p-mid");
    return p_mid.innerHTML;
}

//決済を実行
const execPay = (mid, item, price, amount) => {
    //処理
    const sum = price * amount;
    const message = `${mid}さんが、${item}を${amount}個買いました。価格は${sum}円です。from SDK。`;
    return message;
}