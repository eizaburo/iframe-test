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

    //子要素取得
    const c_mid = document.getElementById("c-mid");
    const c_item = document.getElementById("c-item");
    const c_price = document.getElementById("c-price");
    const c_amount = document.getElementById("c-amount");
    const c_btn = document.getElementById("c-btn");

    //処理
    const sum = c_price.value * c_amount.value;
    const message = `${mid}さんが、${item}を${amount}個買いました。価格は${sum}円です。from SDK。`;
    return message;
}