var G;
var options;
$(function() {
    ("use strict");
    options = {
        element: "graph",
        data: [{}],
        formatter: function(x) {
            return x + "% of Active Water";
        },
        resize: true,
        colors: ["#0000ff", "#4d4dff", "#9999ff"],
    };
    G = Morris.Donut(options);
    var now = new Date();
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    //
    $.ajax({
        url: "./json/data_water.json",
        dataType: "json",
        success: function(data) {
            data.forEach((e) => {
                if (e.date === yesterday.getDate()) {
                    $("#KPI_Water").append(e.KPI);
                    $("#ActiveEnergy_Water").append(e.ActiveEnergy);
                    $("#Beer_Water").append(e.Beer);
                    $("#Cost").append(e.KPI * 2 + "k");
                    //Cost
                    $("#progressbar_Utility").css(
                        "width",
                        ((e.Utility / 0.3) * 100).toFixed(2) + "%"
                    );
                    $("#progressbar_Process").css(
                        "width",
                        ((e.Process / 1.5) * 100).toFixed(2) + "%"
                    );
                    $("#progressbar_Packaging").css(
                        "width",
                        ((e.Packaging / 1.94) * 100).toFixed(2) + "%"
                    );
                    //
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
        url: "./json/data_kpiwater.json",
        dataType: "json",
        success: function(data) {
            data.forEach((e) => {
                if (e.month < yesterday.getMonth()) {
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
                        data: [2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3],
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
                colors: ["#ff6600", "#00bbd9"],
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
    var KPI = 2.26,
        ActiveEnergy = ((1530862.23 * 2.26) / 10).toFixed(2),
        Beer = 1530862.23;
    $("#KPI_Water").html(
        KPI + '<span class="pull-right"><i class="fa fa-bolt"></i></span>'
    );
    $("#ActiveEnergy_Water").html(
        ActiveEnergy + '<span class="pull-right"><i class="fa fa-fire"></i></span>'
    );
    $("#Beer_Water").html(
        Beer + '<span class="pull-right"><i class="fa fa-tint"></i></span>'
    );
    $("#Cost").html(
        KPI * 4 +
        "k" +
        '<span class="pull-right"><i class="mdi mdi-coin"></i></span>'
    );
    //
    var Utility = 0.248,
        Process = 1.461,
        Packaging = 0.69;
    $("#progressbar_Utility").css(
        "width",
        ((Utility / 0.3) * 100).toFixed(2) + "%"
    );
    $("#progressbar_Process").css(
        "width",
        ((Process / 1.5) * 100).toFixed(2) + "%"
    );
    $("#progressbar_Packaging").css(
        "width",
        ((Packaging / 1.94) * 100).toFixed(2) + "%"
    );
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
    //
    $.ajax({
        url: "./json/data_water.json",
        dataType: "json",
        success: function(data) {
            data.forEach((e) => {
                if (e.date === yesterday.getDate()) {
                    $("#KPI_Water").html(
                        e.KPI + '<span class="pull-right"><i class="fa fa-bolt"></i></span>'
                    );
                    $("#ActiveEnergy_Water").html(
                        e.ActiveEnergy +
                        '<span class="pull-right"><i class="fa fa-fire"></i></span>'
                    );
                    $("#Beer_Water").html(
                        e.Beer +
                        '<span class="pull-right"><i class="fa fa-tint"></i></span>'
                    );
                    $("#Cost").html(
                        e.KPI * 4 +
                        "k" +
                        '<span class="pull-right"><i class="mdi mdi-coin"></i></span>'
                    );
                    //Cost
                    $("#progressbar_Utility").css(
                        "width",
                        ((e.Utility / 0.3) * 100).toFixed(2) + "%"
                    );
                    $("#progressbar_Process").css(
                        "width",
                        ((e.Process / 1.5) * 100).toFixed(2) + "%"
                    );
                    $("#progressbar_Packaging").css(
                        "width",
                        ((e.Packaging / 1.94) * 100).toFixed(2) + "%"
                    );
                    //
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