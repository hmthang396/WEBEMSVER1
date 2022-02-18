$(function() {
    var Demo = function() {
        let x = document.getElementById("myframe");
        let y = x.contentDocument;
        var random = Math.random();
        y.getElementById("dienluc1-I").innerHTML = (7.23 + random).toFixed(2);
        y.getElementById("mayphat5-I").innerHTML = (8.85 + random).toFixed(2);
        y.getElementById("dienluc3-I").innerHTML = (9.1 + random).toFixed(2);
        y.getElementById("dienluc4-I").innerHTML = (8.43 + random).toFixed(2);

        y.getElementById("dienluc1-U").innerHTML = (380 + random).toFixed(2);
        y.getElementById("mayphat5-U").innerHTML = (379.2 + random).toFixed(2);
        y.getElementById("dienluc3-U").innerHTML = (380.1 + random).toFixed(2);
        y.getElementById("dienluc4-U").innerHTML = (375.4 + random).toFixed(2);

        y.getElementById("dienluc1-P").innerHTML = (123531 + random).toFixed(2);
        y.getElementById("mayphat5-P").innerHTML = (23451.11 + random).toFixed(2);
        y.getElementById("dienluc3-P").innerHTML = (324523.12 + random).toFixed(2);
        y.getElementById("dienluc4-P").innerHTML = (1251345.1246 + random).toFixed(
            2
        );
        //nhamay1-I
        y.getElementById("nhamay1-I").innerHTML = (7.23 + random).toFixed(2);
        y.getElementById("nhamay2-I").innerHTML = (8.85 + random).toFixed(2);
        y.getElementById("nhamay3-I").innerHTML = (9.1 + random).toFixed(2);
        y.getElementById("nhamay4-I").innerHTML = (8.43 + random).toFixed(2);

        y.getElementById("nhamay1-U").innerHTML = (380 + random).toFixed(2);
        y.getElementById("nhamay2-U").innerHTML = (379.2 + random).toFixed(2);
        y.getElementById("nhamay3-U").innerHTML = (380.1 + random).toFixed(2);
        y.getElementById("nhamay4-U").innerHTML = (375.4 + random).toFixed(2);

        y.getElementById("nhamay1-P").innerHTML = (123531 + random).toFixed(2);
        y.getElementById("nhamay2-P").innerHTML = (23451.11 + random).toFixed(2);
        y.getElementById("nhamay3-P").innerHTML = (324523.12 + random).toFixed(2);
        y.getElementById("nhamay4-P").innerHTML = (1251345.1246 + random).toFixed(
            2
        );

        //
        y.getElementById("mayphat1-I").innerHTML = (0).toFixed(2);
        y.getElementById("mayphat1-U").innerHTML = (0).toFixed(2);
        y.getElementById("mayphat1-P").innerHTML = (32746.82).toFixed(2);

        y.getElementById("mayphat2-I").innerHTML = (0).toFixed(2);
        y.getElementById("mayphat2-U").innerHTML = (0).toFixed(2);
        y.getElementById("mayphat2-P").innerHTML = (1825.12).toFixed(2);

        y.getElementById("mayphat3-I").innerHTML = (0).toFixed(2);
        y.getElementById("mayphat3-U").innerHTML = (0).toFixed(2);
        y.getElementById("mayphat3-P").innerHTML = (161945.71).toFixed(2);

        y.getElementById("mayphat4-I").innerHTML = (0).toFixed(2);
        y.getElementById("mayphat4-U").innerHTML = (0).toFixed(2);
        y.getElementById("mayphat4-P").innerHTML = (1926.21).toFixed(2);

        y.getElementById("tspan837").innerHTML = (0).toFixed(2);
        y.getElementById("tspan840").innerHTML = (0).toFixed(2);
        y.getElementById("tspan843").innerHTML = (7226.15).toFixed(2);
    };

    setInterval(function() {
        Demo();
    }, 500);
});