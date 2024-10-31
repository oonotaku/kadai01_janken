// alert(1);

// ボックス1、2、3のクリック状況を管理するフラグ
let selectedImage = "";
let boxClicked = false;

$(".box1_4").css('pointer-events', 'none'); // ボックス4をクリックできないようにする

$(document).ready(function () {
    // クリックした場所に画像を表示
    $('.box1_1').click(function (event) {
        // 画像の位置をクリック位置に合わせる
        $('#image').css({
            'top': event.pageY + 'px',
            'left': event.pageX + 'px',
            'display': 'block' // 画像を表示
        });
        selectedImage = "魔王"; // クリックされた画像の種類を保存
        boxClicked = true; // ボックス1がクリックされたことを記録
        enableBox4(); // ボックス4を有効にするかチェック
    });
});

$(document).ready(function () {
    // クリックした場所に画像を表示
    $('.box1_2').click(function (event) {
        // 画像の位置をクリック位置に合わせる
        $('#image1_2').css({
            'top': event.pageY + 'px',
            'left': event.pageX + 'px',
            'display': 'block' // 画像を表示
        });
        selectedImage = "村尾"; // クリックされた画像の種類を保存
        boxClicked = true; // ボックス1がクリックされたことを記録
        enableBox4(); // ボックス4を有効にするかチェック
    });
});

$(document).ready(function () {
    // クリックした場所に画像を表示
    $('.box1_3').click(function (event) {
        // 画像の位置をクリック位置に合わせる
        $('#image1_3').css({
            'top': event.pageY + 'px',
            'left': event.pageX + 'px',
            'display': 'block' // 画像を表示
        });
        selectedImage = "森伊蔵"; // クリックされた画像の種類を保存
        boxClicked = true; // ボックス1がクリックされたことを記録
        enableBox4(); // ボックス4を有効にするかチェック
    });
});


$(".box1_4").on("click", function (event) {
    var num = Math.floor(Math.random() * 3);
    console.log(num, "");

    if (num === 0) {
        popupImage = "魔王";
        console.log("魔王");
        $("#image1_4").css({
            'top': event.pageY + 'px',
            'left': event.pageX + 'px',
            'display': 'block' // 画像を表示
        });
    } else if (num === 1) {
        popupImage = "村尾";
        console.log("村尾");
        $("#image1_5").css({
            'top': event.pageY + 'px',
            'left': event.pageX + 'px',
            'display': 'block' // 画像を表示
        });
    } else if (num === 2) {
        popupImage = "森伊蔵";
        console.log("森伊蔵");
        $("#image1_6").css({
            'top': event.pageY + 'px',
            'left': event.pageX + 'px',
            'display': 'block' // 画像を表示
        });
    }
    // ボックス4も一度クリックされたら無効化
    $(this).css('pointer-events', 'none');
    // クリックされたボックス1-3の画像とボックス4の画像の組み合わせでコメントを生成
    if (selectedImage === "魔王" && popupImage === "魔王") {

        $(".kekka").html("店主お勧め焼酎一杯無料ゲット！")
    } else if (selectedImage === "村尾" && popupImage === "村尾") {

        $(".kekka").html("茹で落花生ゲット！")
    } else if (selectedImage === "森伊蔵" && popupImage === "森伊蔵") {

        $(".kekka").html("レバ刺しゲット！")
    } else {
        comment = `${selectedImage} & ${popupImage} - `;
        $(".kekka").html("一杯頼んでもう一度チャレンジ！")
    }

    // コメントを表示
    // alert(comment);
    // この下は消さない🤗
});
function enableBox4() {
    if (boxClicked) {
        // ボックス1, 2, 3がすべてクリックされたらボックス4を有効化
        $(".box1_4").css('pointer-events', 'auto');
        console.log("ボックス4がクリック可能になりました");
    }
}
// リセットボタンの動作
$('#resetButton').on('click', function () {
    // ボックス1-4を再びクリック可能に
$('.box1_1, .box1_2, .box1_3, .box1_4').css('pointer-events', 'auto');

    // 画像を非表示に
$('#image, #image1_2, #image1_3, #image1_4, #image1_5, #image1_6').css('display', 'none');

    // 状態をリセット
    selectedImage = "";
    boxClicked = false;
    $(".box1_4").css('pointer-events', 'none'); // ボックス4を再び無効化
    $(".kekka").html("結果は。。"); // 初期メッセージに戻す
});

// ボックス1, 2, 3がクリックされたかチェックし、ボックス4を有効にする関数
function enableBox4() {
    if (boxClicked) {
        $(".box1_4").css('pointer-events', 'auto');
        console.log("ボックス4がクリック可能になりました");
    }
}




