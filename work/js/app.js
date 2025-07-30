document.getElementById("get-weather").addEventListener("click", () => {
    let cityCode = document.getElementById("city-select").value ;
    if (!cityCode) {
        alert("都市を選択してください。");
        return;
    }
    let url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${cityCode}.json`;
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("天気情報の取得に失敗しました。");
        }
        return response.json();
    })
    .then(weather => {
        console.log(weather);

    })
});