var G;
var options;
$(function() {
    "use strict";
    options = {
        element: "morris-donut-chart",
        data: [{}],
        formatter: function(x) {
            return x + "% of Total Cost";
        },
        resize: true,
        colors: ["#2ecc71", "#e74a25", "#00bbd9"],
    };
    G = Morris.Donut(options);
    var now = new Date();
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    $.ajax({
        url: "./json/data_dashboard.json",
        dataType: "json",
        success: function(data) {
            data.forEach((e) => {
                if (e.date === yesterday.getDate()) {
                    var cost_electric = e.Electric * 3;
                    var cost_steam = e.Steam * 4;
                    var cost_water = e.Water * 2;
                    var cost = cost_electric + cost_steam + cost_water;
                    $("#KPI_Electric").append(e.Electric);
                    $("#KPI_Steam").append(e.Steam);
                    $("#KPI_Water").append(e.Water);
                    $("#Cost").append(cost);
                    //
                    var Target_Utility = 2.89 * 4;
                    var Target_Process = 6.52 * 4;
                    var Target_Packaging = 12.66 * 4;
                    $("#Target_Utility").append(Target_Utility);
                    $("#Target_Process").append(Target_Process);
                    $("#Target_Packaging").append(Target_Packaging);
                    var Progress_Utility =
                        ((e.KPI_Electric_Utility * 3 +
                                e.KPI_Steam_Utility * 4 +
                                e.KPI_Water_Utility * 2) /
                            Target_Utility) *
                        100;
                    var Progress_Process =
                        ((e.KPI_Electric_Process * 3 +
                                e.KPI_Steam_Process * 4 +
                                e.KPI_Water_Process * 2) /
                            Target_Process) *
                        100;
                    var Progress_Packaging =
                        ((e.KPI_Electric_Packaging * 3 +
                                e.KPI_Steam_Packaging * 4 +
                                e.KPI_Water_Packaging * 2) /
                            Target_Packaging) *
                        100;
                    $("#Progress_Utility").css(
                        "width",
                        Progress_Utility.toFixed(2) + "%"
                    );
                    $("#Progress_Process").css(
                        "width",
                        Progress_Process.toFixed(2) + "%"
                    );
                    $("#Progress_Packaging").css(
                        "width",
                        Progress_Packaging.toFixed(2) + "%"
                    );
                    G.setData([{
                            label: "Electric",
                            value: ((cost_electric / cost) * 100).toFixed(2),
                        },
                        {
                            label: "Steam",
                            value: ((cost_steam / cost) * 100).toFixed(2),
                        },
                        {
                            label: "Water",
                            value: ((cost_water / cost) * 100).toFixed(2),
                        },
                    ]);
                    //
                }
            });
        },
    });

    //
    var datakpi = [];
    $.ajax({
        url: "./json/data_kpidashboard.json",
        dataType: "json",
        success: function(data) {
            data.forEach((e) => {
                if (e.month <= yesterday.getMonth()) {
                    if (e.E !== null && e.S !== null && e.W !== null) {
                        var cost_e = e.E * 3;
                        var cost_s = e.S * 4;
                        var cost_w = e.W * 2;
                        datakpi.push(cost_e + cost_s + cost_w);
                    } else {
                        datakpi.push(0);
                    }
                } else {
                    datakpi.push(0);
                }
            });
            //
            var options2 = {
                series: [{
                        name: "Plan",
                        type: "line",
                        data: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75],
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
                colors: ["#ff6600", "#006600"],
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
    var Electric = 5.64,
        Steam = 11.85,
        Water = 2.26;
    var cost_electric = Electric * 3;
    var cost_steam = Steam * 4;
    var cost_water = Water * 2;
    var cost = cost_electric + cost_steam + cost_water;
    $("#KPI_Electric").html(
        Electric + '<span class="pull-right"><i class="fa fa-bolt"></i></span>'
    );
    $("#KPI_Steam").html(
        Steam + '<span class="pull-right"><i class="fa fa-fire"></i></span>'
    );
    $("#KPI_Water").html(
        Water + '<span class="pull-right"><i class="fa fa-tint"></i></span>'
    );
    $("#Cost").html(
        cost.toFixed(2) +
        '<span class="pull-right"><i class="mdi mdi-coin"></i></span>'
    );
    //
    var Target_Utility = 11.56,
        Target_Process = 26.08,
        Target_Packaging = 50.64;
    $("#Target_Utility").text(Target_Utility);
    $("#Target_Process").text(Target_Process);
    $("#Target_Packaging").text(Target_Packaging);
    //
    var Progress_Utility = 87.22,
        Progress_Process = 90.25,
        Progress_Packaging = 71.95;
    $("#Progress_Utility").css("width", Progress_Utility.toFixed(2) + "%");
    $("#Progress_Process").css("width", Progress_Process.toFixed(2) + "%");
    $("#Progress_Packaging").css("width", Progress_Packaging.toFixed(2) + "%");
    //
    G.setData([{
            label: "Electric",
            value: ((cost_electric / cost) * 100).toFixed(2),
        },
        {
            label: "Steam",
            value: ((cost_steam / cost) * 100).toFixed(2),
        },
        {
            label: "Water",
            value: ((cost_water / cost) * 100).toFixed(2),
        },
    ]);
};

const MonthOfDay = function() {
    var now = new Date();
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    $.ajax({
        url: "./json/data_dashboard.json",
        dataType: "json",
        success: function(data) {
            data.forEach((e) => {
                if (e.date === yesterday.getDate()) {
                    var cost_electric = e.Electric * 3;
                    var cost_steam = e.Steam * 4;
                    var cost_water = e.Water * 2;
                    var cost = cost_electric + cost_steam + cost_water;

                    $("#KPI_Electric").html(
                        e.Electric +
                        '<span class="pull-right"><i class="fa fa-bolt"></i></span>'
                    );
                    $("#KPI_Steam").html(
                        e.Steam +
                        '<span class="pull-right"><i class="fa fa-fire"></i></span>'
                    );
                    $("#KPI_Water").html(
                        e.Water +
                        '<span class="pull-right"><i class="fa fa-tint"></i></span>'
                    );
                    $("#Cost").html(
                        cost.toFixed(2) +
                        '<span class="pull-right"><i class="mdi mdi-coin"></i></span>'
                    );
                    //
                    var Target_Utility = 2.89 * 4;
                    var Target_Process = 6.52 * 4;
                    var Target_Packaging = 12.66 * 4;
                    $("#Target_Utility").text(Target_Utility);
                    $("#Target_Process").text(Target_Process);
                    $("#Target_Packaging").text(Target_Packaging);
                    var Progress_Utility =
                        ((e.KPI_Electric_Utility * 3 +
                                e.KPI_Steam_Utility * 4 +
                                e.KPI_Water_Utility * 2) /
                            Target_Utility) *
                        100;
                    var Progress_Process =
                        ((e.KPI_Electric_Process * 3 +
                                e.KPI_Steam_Process * 4 +
                                e.KPI_Water_Process * 2) /
                            Target_Process) *
                        100;
                    var Progress_Packaging =
                        ((e.KPI_Electric_Packaging * 3 +
                                e.KPI_Steam_Packaging * 4 +
                                e.KPI_Water_Packaging * 2) /
                            Target_Packaging) *
                        100;
                    $("#Progress_Utility").css(
                        "width",
                        Progress_Utility.toFixed(2) + "%"
                    );
                    $("#Progress_Process").css(
                        "width",
                        Progress_Process.toFixed(2) + "%"
                    );
                    $("#Progress_Packaging").css(
                        "width",
                        Progress_Packaging.toFixed(2) + "%"
                    );
                    G.setData([{
                            label: "Electric",
                            value: ((cost_electric / cost) * 100).toFixed(2),
                        },
                        {
                            label: "Steam",
                            value: ((cost_steam / cost) * 100).toFixed(2),
                        },
                        {
                            label: "Water",
                            value: ((cost_water / cost) * 100).toFixed(2),
                        },
                    ]);
                    //
                }
            });
        },
    });
};