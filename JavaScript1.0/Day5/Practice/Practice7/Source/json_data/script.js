async function test() {
    let requestOptions = {
        method: "GET",
    };

    await fetch("./data.json", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            console.log(result);
            document.getElementById("tableData").textContent = JSON.stringify(JSON.parse(result), null, 2);
        })
        .catch((error) => console.log("error", error));
}
