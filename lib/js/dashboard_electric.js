var G;
var options;
$(function() {
    "use strict";
    options = {
        element: "graph",
        data: [{}],
        formatter: function(x) {
            return x + "% of Active Energy";
        },
        resize: true,
        colors: ["#0BA462", "#39B580", "#67C69D"],
    };
    G = Morris.Donut(options);

    var now = new Date();
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    //
    $.ajax({
        url: "./json/data_electric.json",
        dataType: "json",
        success: function(data) {
            data.forEach((e) => {
                if (e.date === yesterday.getDate()) {
                    $("#KPI_Electric").append(e.KPI);
                    $("#ActiveEnergy_Electric").append(e.ActiveEnergy);
                    $("#Beer_Electric").append(e.Beer);
                    $("#Cost").append((e.KPI * 3).toFixed(2) + "k");
                    //Cost
                    $("#progressbar_Utility").css(
                        "width",
                        ((e.Utility / 5.56) * 100).toFixed(2) + "%"
                    );
                    $("#progressbar_Process").css(
                        "width",
                        ((e.Process / 0.64) * 100).toFixed(2) + "%"
                    );
                    $("#progressbar_Packaging").css(
                        "width",
                        ((e.Packaging / 1.62) * 100).toFixed(2) + "%"
                    );
                    //
                    G.setData([{
                            label: "Utility",
                            value: (
                                (e.Utility / (e.Utility + e.Process + e.Packaging)) *
                                100
                            ).toFixed(1),
                        },
                        {
                            label: "Process",
                            value: (
                                (e.Process / (e.Utility + e.Process + e.Packaging)) *
                                100
                            ).toFixed(1),
                        },
                        {
                            label: "Packaging",
                            value: (
                                (e.Packaging / (e.Utility + e.Process + e.Packaging)) *
                                100
                            ).toFixed(1),
                        },
                    ]);
                }
            });
        },
    });
    //
    var datakpi = [];
    $.ajax({
        url: "./json/data_kpielectric.json",
        dataType: "json",
        success: function(data) {
            data.forEach((e) => {
                if (e.month <= yesterday.getMonth()) {
                    datakpi.push(e.KPI);
                } else {
                    datakpi.push(0);
                }
            });
            console.log(datakpi);

            //
            var options2 = {
                series: [{
                        name: "Plan",
                        type: "line",
                        data: [
                            5.56, 5.56, 5.56, 5.56, 5.56, 5.56, 5.56, 5.56, 5.56, 5.56, 5.56,
                            5.56,
                        ],
                    },
                    {
                        name: "Actual",
                        type: "column",
                        data: datakpi,
                    },
                ],
                chart: {
                    height: 450,
                    toolbar: {
                        show: true,
                    },
                },
                colors: ["#ff6600", "#2ecc71"],
                dataLabels: {
                    enabled: true,
                    style: {
                        colors: ["black"],
                    },
                },
                xaxis: {
                    categories: [
                        "T1",
                        "T2",
                        "T3",
                        "T4",
                        "T5",
                        "T6",
                        "T7",
                        "T8",
                        "T9",
                        "T10",
                        "T11",
                        "T12",
                    ],
                    title: {
                        text: "",
                    },
                },
                yaxis: {
                    title: {
                        text: "KPI",
                    },
                },
                legend: {
                    position: "top",
                    horizontalAlign: "center",
                    floating: true,
                    offsetY: +5,
                    offsetX: -5,
                },
            };
            var chartCost = new ApexCharts(
                document.querySelector("#myDiv"),
                options2
            );
            chartCost.render();
        },
    });
});

const yearOfDay = function() {
    var KPI = 6.15,
        ActiveEnergy = (1530862.23 * 6.15).toFixed(2),
        Beer = 1530862.23;
    $("#KPI_Electric").html(
        KPI + '<span class="pull-right"><i class="fa fa-bolt"></i></span>'
    );
    $("#ActiveEnergy_Electric").html(
        ActiveEnergy + '<span class="pull-right"><i class="fa fa-fire"></i></span>'
    );
    $("#Beer_Electric").html(
        Beer + '<span class="pull-right"><i class="fa fa-tint"></i></span>'
    );
    $("#Cost").html(
        (KPI * 3).toFixed(2) +
        "k" +
        '<span class="pull-right"><i class="mdi mdi-coin"></i></span>'
    );
    //
    var Utility = 4.96,
        Process = 0.49,
        Packaging = 1.53;
    $("#progressbar_Utility").css(
        "width",
        ((Utility / 5.56) * 100).toFixed(2) + "%"
    );
    $("#progressbar_Process").css(
        "width",
        ((Process / 0.64) * 100).toFixed(2) + "%"
    );
    $("#progressbar_Packaging").css(
        "width",
        ((Packaging / 1.62) * 100).toFixed(2) + "%"
    );
    //
    G.setData([{
            label: "Utility",
            value: ((Utility / (Utility + Process + Packaging)) * 100).toFixed(1),
        },
        {
            label: "Process",
            value: ((Process / (Utility + Process + Packaging)) * 100).toFixed(1),
        },
        {
            label: "Packaging",
            value: ((Packaging / (Utility + Process + Packaging)) * 100).toFixed(1),
        },
    ]);
};

const MonthOfDay = function() {
    var now = new Date();
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    $.ajax({
        url: "./json/data_electric.json",
        dataType: "json",
        success: function(data) {
            data.forEach((e) => {
                if (e.date === yesterday.getDate()) {
                    $("#KPI_Electric").html(
                        e.KPI + '<span class="pull-right"><i class="fa fa-bolt"></i></span>'
                    );
                    $("#ActiveEnergy_Electric").html(
                        e.ActiveEnergy +
                        '<span class="pull-right"><i class="fa fa-fire"></i></span>'
                    );
                    $("#Beer_Electric").html(
                        e.Beer +
                        '<span class="pull-right"><i class="fa fa-tint"></i></span>'
                    );
                    $("#Cost").html(
                        (e.KPI * 3).toFixed(2) +
                        "k" +
                        '<span class="pull-right"><i class="mdi mdi-coin"></i></span>'
                    );
                    //Cost
                    $("#progressbar_Utility").css(
                        "width",
                        ((e.Utility / 5.56) * 100).toFixed(2) + "%"
                    );
                    $("#progressbar_Process").css(
                        "width",
                        ((e.Process / 0.64) * 100).toFixed(2) + "%"
                    );
                    $("#progressbar_Packaging").css(
                        "width",
                        ((e.Packaging / 1.62) * 100).toFixed(2) + "%"
                    );
                    //
                    G.setData([{
                            label: "Utility",
                            value: (
                                (e.Utility / (e.Utility + e.Process + e.Packaging)) *
                                100
                            ).toFixed(1),
                        },
                        {
                            label: "Process",
                            value: (
                                (e.Process / (e.Utility + e.Process + e.Packaging)) *
                                100
                            ).toFixed(1),
                        },
                        {
                            label: "Packaging",
                            value: (
                                (e.Packaging / (e.Utility + e.Process + e.Packaging)) *
                                100
                            ).toFixed(1),
                        },
                    ]);
                }
            });
        },
    });
};