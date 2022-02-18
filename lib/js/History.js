const energy = document.querySelector("#energy");
const area = document.querySelector("#area");
const equipment = document.querySelector("#equipment");
const parameter = document.querySelector("#parameter");
const from = document.querySelector("#from");
const to = document.querySelector("#to");
const search = document.querySelector("#search");
const clear = document.querySelector("#clear");

search.addEventListener("click", Chart);

area.addEventListener("change", ContentEquipment);
energy.addEventListener("change", ContentEquipment);
energy.addEventListener("change", Parameter);

function ContentEquipment() {
    if (energy.value !== null) {
        if (energy.value === "Electric") {
            if (area.value === "Utility") {
                var content = `
                    <option value="null">--Select your area--</option>
                    <option value="PM15">PM15</option>
                    <option value="PM16">PM16</option>
                    <option value="PM17">PM17</option>
                    <option value="PM18">PM18</option>
                    <option value="PM19">PM19</option>
                    <option value="PM20">PM20</option>
                    <option value="PM21">PM21</option>
                    <option value="PM22">PM22</option>
                    <option value="PM23">PM23</option>
                    <option value="PM27">PM27</option>
                    <option value="PM28">PM28</option>
                    <option value="PM29">PM29</option>
                `;
                equipment.innerHTML = content;
            }
            if (area.value === "Process") {
                var content = `
                    <option value="null">--Select your area--</option>
                    <option value="PM03">PM03</option>
                    <option value="PM04">PM04</option>
                    <option value="PM05">PM05</option>
                    <option value="PM06">PM06</option>
                    <option value="PM07">PM07</option>
                    <option value="PM08">PM08</option>
                    <option value="PM09">PM09</option>
                    <option value="PM10">PM10</option>
                    <option value="PM11">PM11</option>
                    <option value="PM12">PM12</option>
                    <option value="PM13">PM13</option>
                    <option value="PM14">PM14</option>
                    <option value="PM24">PM24</option>
                    <option value="PM25">PM25</option>
                    <option value="PM26">PM26</option>
                    <option value="PM30">PM30</option>
                    <option value="PM31">PM31</option>
                    <option value="PM32">PM32</option>
                `;
                equipment.innerHTML = content;
            }
            if (area.value === "Packaging") {
                var content = `
                    <option value="null">--Select your area--</option>
                    <option value="PM01">PM01</option>
                    <option value="PM02">PM02</option>
                `;
                equipment.innerHTML = content;
            }
        }
        if (energy.value === "Water") {
            if (area.value === "Utility") {
                var content = `
                    <option value="null">--Select your area--</option>
                    <option value="WM-10">WM-10</option>
                    <option value="WM-11">WM-11</option>
                    <option value="WM-12">WM-12</option>
                    <option value="WM-13">WM-13</option>
                    <option value="WM-14">WM-14</option>
                `;
                equipment.innerHTML = content;
            }
            if (area.value === "Process") {
                var content = `
                    <option value="null">--Select your area--</option>
                    <option value="WM-01">WM-01</option>
                    <option value="WM-02">WM-02</option>
                    <option value="WM-03">WM-03</option>
                    <option value="WM-04">WM-04</option>
                    <option value="WM-05">WM-05</option>
                    <option value="WM-07">WM-07</option>
                    <option value="WM-08">WM-08</option>
                `;
                equipment.innerHTML = content;
            }
            if (area.value === "Packaging") {
                var content = `
                    <option value="null">--Select your area--</option>
                    <option value="WM-04">WM-04</option>
                    <option value="WM-09">WM-09</option>
                    <option value="WM-19">WM-19</option>
                `;
                equipment.innerHTML = content;
            }
        }
        if (energy.value === "Steam") {
            if (area.value === "Utility") {
                var content = `
                    <option value="null">--Select your area--</option>
                    <option value="STM-01">STM-01</option>
                    <option value="STM-10">STM-10</option>
                    <option value="STM-11">STM-11</option>
                    <option value="STM-12">STM-12</option>
                    <option value="BO-01">BO-01</option>
                `;
                equipment.innerHTML = content;
            }
            if (area.value === "Process") {
                var content = `
                    <option value="null">--Select your area--</option>
                    <option value="STM-02">STM-02</option>
                    <option value="STM-03">STM-03</option>
                    <option value="STM-04">STM-04</option>
                `;
                equipment.innerHTML = content;
            }
            if (area.value === "Packaging") {
                var content = `
                    <option value="null">--Select your area--</option>
                    <option value="STM-05">STM-05</option>
                    <option value="STM-06">STM-06</option>
                    <option value="STM-07">STM-07</option>
                    <option value="STM-08">STM-08</option>
                    <option value="STM-09">STM-09</option>
                    <option value="STM-13">STM-13</option>
                    <option value="STM-14">STM-14</option>
                    <option value="STM-15">STM-15</option>
                `;
                equipment.innerHTML = content;
            }
        }
        if (energy.value === "CO2") {
            if (area.value === "Utility") {
                var content = `
                    <option value="null">--Select your area--</option>
                    <option value="CO-03">CO-03</option>
                    <option value="CO-04">CO-04</option>
                    <option value="CO-05">CO-05</option>
                `;
                equipment.innerHTML = content;
            }
            if (area.value === "Process") {
                var content = `
                    <option value="null">--Select your area--</option>
                `;
                equipment.innerHTML = content;
            }
            if (area.value === "Packaging") {
                var content = `
                    <option value="null">--Select your area--</option>
                    <option value="CO-01">CO-01</option>
                    <option value="CO-02">CO-02</option>
                    <option value="CO-06">CO-06</option>
                    <option value="CO-07">CO-07</option>
                    <option value="CO-08">CO-08</option>
                `;
                equipment.innerHTML = content;
            }
        }
    } else {}
}

function Parameter() {
    if (energy.value !== null) {
        if (energy.value === "Electric") {
            var content = `
                 <option value="null">--Select your area--</option>
                 <option value="AED">Active Energy Delivered</option>
                 <option value="RED">Reactive Energy Delivered</option>
                 <option value="CA">Current Avg</option>
                 <option value="VA">Voltage Avg</option>
                 <option value="PF">Power Factor</option>
                 <option value="DPF">Displacement Power Factor</option>
                 <option value="TDHU">Total Harmonic Distortion - Voltage</option>
                 <option value="TDHI">Total Harmonic Distortion - Current</option>
            `;
            parameter.innerHTML = content;
        }
        if (energy.value === "Water") {
            var content = `
                 <option value="null">--Select your area--</option>
                 <option value="Volume">Volume Flow</option>
                 <option value="Totalizer">Totalizer</option>
            `;
            parameter.innerHTML = content;
        }
        if (energy.value === "Steam") {
            var content = `
                 <option value="null">--Select your area--</option>
                 <option value="Mass_Flow">Mass Flow</option>
                 <option value="Totalizer">Totalizer</option>
            `;
            parameter.innerHTML = content;
        }
        if (energy.value === "CO2") {
            var content = `
                 <option value="null">--Select your area--</option>
                 <option value="Mass">Mass Flow</option>
                 <option value="Totalizer">Totalizer</option>
            `;
            parameter.innerHTML = content;
        }
    } else {}
}
var layout1 = {
    xaxis: {
        title: "Time",
    },
    yaxis: {
        title: "",
    },
    title: "Trends of Meters",
};
var options = {
    series: [],
    chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true,
        },
        toolbar: {
            autoSelected: "zoom",
        },
    },
    legend: {
        tooltipHoverFormatter: function(val, opts) {
            return (
                val +
                " - " +
                opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
                ""
            );
        },
    },
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: 0,
    },
    title: {
        text: "Trend",
        align: "left",
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
        },
    },
    yaxis: {
        labels: {
            formatter: function(val) {
                return val.toFixed(2);
            },
        },
        title: {
            text: "",
        },
    },
    xaxis: {
        type: "datetime",
    },
    tooltip: {
        shared: false,
        y: {
            formatter: function(val) {
                return val.toFixed(2);
            },
            title: function(val) {
                return val;
            },
        },
    },
};
const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

function Chart(e) {
    if (
        energy.value === "Electric" &&
        area.value !== "null" &&
        equipment.value !== "null" &&
        equipment.value !== ""
    ) {
        if (parameter.value !== null) {
            $.ajax({
                url: "./json/chartElectric.json",
                dataType: "json",
                success: function(data) {
                    var name;
                    var dataChart = [];
                    var xdata = [],
                        ydata = [];
                    var time = new Date();
                    time.setDate(time.getDate() - 1);
                    time.setSeconds(0);
                    time.setMinutes(0);
                    //
                    data.forEach((e) => {
                        if (parameter.value === "AED") {
                            time.setMinutes(e.id);
                            dataChart.push({
                                x: time.getFullYear() +
                                    "-" +
                                    pad(time.getMonth() + 1) +
                                    "-" +
                                    pad(time.getDate()) +
                                    " " +
                                    pad(time.getHours() + ":" + pad(time.getMinutes())),
                                y: e.AED,
                            });
                            name = equipment.value + " Active Energy Delivered";
                        }
                        if (parameter.value === "CA") {
                            dataChart.push({
                                x: time.getFullYear() +
                                    "-" +
                                    pad(time.getMonth() + 1) +
                                    "-" +
                                    pad(time.getDate()) +
                                    " " +
                                    pad(time.getHours() + ":" + pad(time.getMinutes())),
                                y: e.CA,
                            });
                            ydata.push(e.CA);
                            time.setMinutes(e.id);
                            xdata.push(
                                time.getFullYear() +
                                "-" +
                                pad(time.getMonth() + 1) +
                                "-" +
                                pad(time.getDate()) +
                                " " +
                                pad(time.getHours() + ":" + pad(time.getMinutes()))
                            );
                            name = equipment.value + " Current Avg";
                        }
                        if (parameter.value === "RED") {
                            dataChart.push({
                                x: time.getFullYear() +
                                    "-" +
                                    pad(time.getMonth() + 1) +
                                    "-" +
                                    pad(time.getDate()) +
                                    " " +
                                    pad(time.getHours() + ":" + pad(time.getMinutes())),
                                y: e.RED,
                            });
                            ydata.push(e.RED);
                            time.setMinutes(e.id);
                            xdata.push(
                                time.getFullYear() +
                                "-" +
                                pad(time.getMonth() + 1) +
                                "-" +
                                pad(time.getDate()) +
                                " " +
                                pad(time.getHours() + ":" + pad(time.getMinutes()))
                            );
                            name = equipment.value + " Reactive Energy Delivered";
                        }
                        if (parameter.value === "VA") {
                            time.setMinutes(e.id);
                            dataChart.push({
                                x: time.getFullYear() +
                                    "-" +
                                    pad(time.getMonth() + 1) +
                                    "-" +
                                    pad(time.getDate()) +
                                    " " +
                                    pad(time.getHours() + ":" + pad(time.getMinutes())),
                                y: e.VA,
                            });
                            name = equipment.value + " Voltage Avg";
                        }
                        if (parameter.value === "PF") {
                            time.setMinutes(e.id);
                            dataChart.push({
                                x: time.getFullYear() +
                                    "-" +
                                    pad(time.getMonth() + 1) +
                                    "-" +
                                    pad(time.getDate()) +
                                    " " +
                                    pad(time.getHours() + ":" + pad(time.getMinutes())),
                                y: e.PF,
                            });
                            name = equipment.value + " Power Factor";
                        }
                        if (parameter.value === "DPF") {
                            time.setMinutes(e.id);
                            dataChart.push({
                                x: time.getFullYear() +
                                    "-" +
                                    pad(time.getMonth() + 1) +
                                    "-" +
                                    pad(time.getDate()) +
                                    " " +
                                    pad(time.getHours() + ":" + pad(time.getMinutes())),
                                y: e.DPF,
                            });
                            name = equipment.value + " Displacement Power Factor";
                        }
                        if (parameter.value === "TDHU") {
                            time.setMinutes(e.id);
                            dataChart.push({
                                x: time.getFullYear() +
                                    "-" +
                                    pad(time.getMonth() + 1) +
                                    "-" +
                                    pad(time.getDate()) +
                                    " " +
                                    pad(time.getHours() + ":" + pad(time.getMinutes())),
                                y: e.TDHU,
                            });
                            name = equipment.value + " Total Harmonic Distortion - Voltage";
                        }
                        if (parameter.value === "TDHI") {
                            time.setMinutes(e.id);
                            dataChart.push({
                                x: time.getFullYear() +
                                    "-" +
                                    pad(time.getMonth() + 1) +
                                    "-" +
                                    pad(time.getDate()) +
                                    " " +
                                    pad(time.getHours() + ":" + pad(time.getMinutes())),
                                y: e.TDHI,
                            });
                            name = equipment.value + " Total Harmonic Distortion - Current";
                        }
                    });
                    //
                    options.series.push({
                        name: name,
                        data: dataChart,
                    });
                    chart.updateOptions(options);
                    // chart = {
                    //     name: name,
                    //     x: xdata,
                    //     y: ydata,
                    //     type: "line",
                    // };
                    // Plotly.newPlot("chart", [chart], layout1);
                },
            });
        }
    }
    if (
        energy.value === "Water" &&
        area.value !== "null" &&
        equipment.value !== "null" &&
        equipment.value !== ""
    ) {
        if (parameter.value !== null) {
            $.ajax({
                url: "./json/chartWater.json",
                dataType: "json",
                success: function(data) {
                    var name;
                    var dataChart = [];
                    var xdata = [],
                        ydata = [];
                    var time = new Date();
                    time.setDate(time.getDate() - 1);
                    time.setSeconds(0);
                    //
                    data.forEach((e) => {
                        if (parameter.value === "Volume") {
                            time.setMinutes(e.id);
                            dataChart.push({
                                x: time.getFullYear() +
                                    "-" +
                                    pad(time.getMonth() + 1) +
                                    "-" +
                                    pad(time.getDate()) +
                                    " " +
                                    pad(time.getHours() + ":" + pad(time.getMinutes())),
                                y: e.Volume,
                            });
                            name = equipment.value + " Volume Flow";
                        }
                        if (parameter.value === "Totalizer") {
                            time.setMinutes(e.id);
                            dataChart.push({
                                x: time.getFullYear() +
                                    "-" +
                                    pad(time.getMonth() + 1) +
                                    "-" +
                                    pad(time.getDate()) +
                                    " " +
                                    pad(time.getHours() + ":" + pad(time.getMinutes())),
                                y: e.Totalizer,
                            });
                            name = equipment.value + " Totalizer";
                        }
                    });
                    //
                    options.series.push({
                        name: name,
                        data: dataChart,
                    });

                    chart.updateOptions(options);
                },
            });
        }
    }
    if (
        energy.value === "Steam" &&
        area.value !== "null" &&
        equipment.value !== "null" &&
        equipment.value !== ""
    ) {
        if (parameter.value !== null) {
            $.ajax({
                url: "./json/chartSteam.json",
                dataType: "json",
                success: function(data) {
                    var name;
                    var dataChart = [];
                    var xdata = [],
                        ydata = [];
                    var time = new Date();
                    time.setDate(time.getDate() - 1);
                    time.setSeconds(0);
                    //
                    data.forEach((e) => {
                        if (parameter.value === "Mass_Flow") {
                            time.setMinutes(e.id);
                            dataChart.push({
                                x: time.getFullYear() +
                                    "-" +
                                    pad(time.getMonth() + 1) +
                                    "-" +
                                    pad(time.getDate()) +
                                    " " +
                                    pad(time.getHours() + ":" + pad(time.getMinutes())),
                                y: e.Mass_Flow,
                            });
                            name = equipment.value + " Mass Flow";
                        }
                        if (parameter.value === "Totalizer") {
                            time.setMinutes(e.id);
                            dataChart.push({
                                x: time.getFullYear() +
                                    "-" +
                                    pad(time.getMonth() + 1) +
                                    "-" +
                                    pad(time.getDate()) +
                                    " " +
                                    pad(time.getHours() + ":" + pad(time.getMinutes())),
                                y: e.Totalizer,
                            });
                            name = equipment.value + " Totalizer";
                        }
                    });
                    //
                    options.series.push({
                        name: name,
                        data: dataChart,
                    });
                    chart.updateOptions(options);
                },
            });
        }
    }
    if (area.value === "null" || area.value === "" || area.value === null) {
        confirm("Vui lòng chọn khu vực.");
    } else {
        if (equipment.value === "null" || equipment.value === "") {
            confirm("Vui lòng chọn thiết bị");
        }
    }
    console.log(area.value);
    e.preventDefault();
}
clear.addEventListener("click", function() {
    options.series = [];
    chart.updateOptions(options);
});

function pad(n) {
    return n < 10 ? "0" + n : n;
}