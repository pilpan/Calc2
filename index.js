let buttonEl2 = document.getElementById("res2")
buttonEl2.addEventListener('click',() => {
    let xage = document.getElementById("Xвозраст");
    let xsp02 = document.getElementById("XSpO2%");
    let xelit = document.getElementById("Xэритр");
    let xdayhosp = document.getElementById("Xденьгосп");
    let xchdd = document.getElementById("XЧДД");
    let xchcc = document.getElementById("XЧСС");
    let xleik = document.getElementById("Xлейк");
    let xtromb = document.getElementById("Xтромб");
    let xlimp = document.getElementById("Xлимф");
    let xferritin = document.getElementById("Xферритин");
    let xcp = document.getElementById("XСр");
    let xddimmer = document.getElementById("XDдимер");
    let xfibirin = document.getElementById("Xфибрин");
    let xkt = document.getElementById("XКТ");
    let res = 0.023*xage.value -0.351*xchdd.value +0.066*xchcc.value -0.198*xsp02.value -0.469*xelit.value +0.163*xleik.value -0.003*xtromb.value + 0.028*xlimp.value +0.002*xferritin.value +0.005*xcp.value +0.513*xddimmer.value -0.223*xfibirin.value +1.124*xkt.value -0.155*xdayhosp.value +17.857;
    let resel2 = document.getElementById('result2')
    resel2.innerHTML += `<p>${res}</p>`
    if (res > 0.4435) {
        resel2.innerHTML += `<p>Высокий Риск летального исхода</p>`
    } else if (res < 0.4435) {
        resel2.innerHTML += `<p>низкий риск летального исхода</p>`
    }

})