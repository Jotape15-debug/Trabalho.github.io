function Calcular() {
    var valor = parseFloat(document.getElementById('valor').value);
    var quantidade = parseInt(document.getElementById('quantidade').value);
    var deducoes = parseFloat(document.getElementById('deducoes').value);
    
    if (quantidade <= 0) {
        window.location.reload();
        return;
    }
    
    var Bruto = valor * quantidade;
    var INSS = 0;

    if (Bruto <= 1320) {
        INSS = Bruto * 0.075;
    } else if (Bruto <= 2571.29) {
        INSS = Bruto * 0.09;
    } else if (Bruto <= 3856.94) {
        INSS = Bruto * 0.12;
    } else if (Bruto <= 7507.49) {
        INSS = Bruto * 0.14;
    }

    var IRPF = 0;

    
    if (Bruto > 2112) {
        if (Bruto <= 2826.65) {
            IRPF = Bruto * 0.075;
        } else if (Bruto <= 3751.06) {
            IRPF = Bruto * 0.15;
        } else if (Bruto <= 4664.68) {
            IRPF = Bruto * 0.225;
        }
    }

    var sim = document.getElementById('sim');
    var Vt = 0;

   
    if (sim.checked) {
        Vt = Bruto * 0.06;
    }

    
    var descontosf = INSS + IRPF + Vt + deducoes;
    var salarioliquido = Bruto - descontosf;

   
    document.getElementById('Bruto').innerHTML = Bruto.toFixed(2);
    document.getElementById('INSS').innerHTML = INSS.toFixed(2);
    document.getElementById('IRPF').innerHTML = IRPF.toFixed(2);
    document.getElementById('Vt').innerHTML = Vt.toFixed(2);
    document.getElementById('deducoes').innerHTML = deducoes.toFixed(2);
    document.getElementById('salarioliquido').innerHTML = salarioliquido.toFixed(2);
}