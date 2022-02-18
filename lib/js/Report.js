const form = document.querySelector("#form");
const area = document.querySelector("#para1");
const type = document.querySelector("#para2");
form.addEventListener("submit", (e) => {
    var url = `./Report/Download?type=${e.target[1].value}&area=${e.target[0].value}`;
    console.log(url);
    location.href = url;
    // $.ajax({
    //     type: "GET",
    //     async: true,
    //     data: JSON.stringify({ codeProduct: "123456" }),
    //     contentType: "application/json; charset=utf-8",
    //     dataType: "json",
    //     url: `/Report/Download?type=${e.target[1].value}&area=${e.target[0].value}&time1=${e.target[2].value} &time2=${e.target[3].value}`,
    //     success: function(data) {
    //         console.log(data);
    //     },
    // });
    e.preventDefault();
});

area.addEventListener("change", (e) => {
    if (e.target.value === "Factory") {
        var content = `
            <option value="null">
                --Select your report type--
            </option>
            <option value="KPI">KPI</option>
            <option value="Electric">Electric</option>
            <option value="Water-Steam">Water-Steam</option>
        `;
        type.innerHTML = content;
    }
    if (e.target.value === "Utility") {
        var content = `
            <option value="KPI">KPI</option>
        `;
        type.innerHTML = content;
    }
    if (e.target.value === "Process") {
        var content = `
            <option value="KPI">KPI</option>
        `;
        type.innerHTML = content;
    }
    if (e.target.value === "Packaging") {
        var content = `
            <option value="KPI">KPI</option>
        `;
        type.innerHTML = content;
    }
});