function Carro(marca, tipo, modelo, anio, color, matricula, llantas, puertas, precio, versiones, impuesto, transmision) {
    this.marca = marca
    this.tipo = tipo
    this.modelo = modelo
    this.anio = anio
    this.color = color
    this.matricula = matricula
    this.llantas = llantas
    this.puertas = puertas
    this.precio = 300000
    this.versiones = versiones
    this.impuesto = impuesto
    this.transmision = transmision
}

var total;

Carro.prototype.calcularPrecio = function () {
    var fecha = new Date();
    var anio = fecha.getFullYear();

    if (this.anio == anio)
        return this.precio;

    else {
        total = this.precio * ((anio - this.anio) * 0.15);
        if (total < 30000) {
            return 30000
        }
        else {
            return total
        }
    }
}

Carro.prototype.calcularImpuesto = function () {
    var impuestoTotal = this.calcularPrecio() * 0.10;
    return impuestoTotal;
}

function limpiarModelo() {
    document.getElementById("modelo").innerHTML = "";
    var option = document.createElement("option");
    option.textContent = "Modelo";
    var input = document.getElementById("modelo");
    input.appendChild(option);
    option.setAttribute("disabled", "true");
}


function modelos() {
    limpiarModelo();
    if (document.getElementById("marca").value === "Kia") {
        if (document.getElementById("tipo").value === "Sedán"
            || document.getElementById("tipo").value === "Hatchback") {
            var option = document.createElement("option");
            option.setAttribute = ("id", "modelo1")
            option.textContent = "Forte";
            var input = document.getElementById("modelo");
            input.appendChild(option);

            var option2 = document.createElement("option");
            option2.setAttribute = ("id", "modelo1")
            option2.textContent = "Río";
            var input = document.getElementById("modelo");
            input.appendChild(option2);

            var option3 = document.createElement("option");
            option3.setAttribute = ("id", "modelo1")
            option3.textContent = "Cerato";
            var input = document.getElementById("modelo");
            input.appendChild(option3);
        }
    }

    if (document.getElementById("marca").value === "Kia") {
        if (document.getElementById("tipo").value === "SUV"
            || document.getElementById("tipo").value === "Crossover") {

            var option = document.createElement("option");
            option.setAttribute = ("id", "modelo1")
            option.textContent = "Sorento";
            var input = document.getElementById("modelo");
            input.appendChild(option);

            var option2 = document.createElement("option");
            option2.setAttribute = ("id", "modelo1")
            option2.textContent = "Sportage";
            var input = document.getElementById("modelo");
            input.appendChild(option2);

            var option3 = document.createElement("option");
            option3.setAttribute = ("id", "modelo1")
            option3.textContent = "Soul";
            var input = document.getElementById("modelo");
            input.appendChild(option3);
        }
    }

    if (document.getElementById("marca").value === "Kia") {
        if (document.getElementById("tipo").value === "Coupé") {

            var option = document.createElement("option");
            option.setAttribute = ("id", "modelo1")
            option.textContent = "Cerato";
            var input = document.getElementById("modelo");
            input.appendChild(option);

            var option2 = document.createElement("option");
            option2.setAttribute = ("id", "modelo1")
            option2.textContent = "Forte";
            var input = document.getElementById("modelo");
            input.appendChild(option2);
        }
    }

    if (document.getElementById("marca").value === "Nissan") {
        if (document.getElementById("tipo").value === "Sedán"
            || document.getElementById("tipo").value === "Hatchback") {

            var option = document.createElement("option");
            option.setAttribute = ("id", "modelo1")
            option.textContent = "Sentra";
            var input = document.getElementById("modelo");
            input.appendChild(option);

            var option2 = document.createElement("option");
            option2.setAttribute = ("id", "modelo1")
            option2.textContent = "March";
            var input = document.getElementById("modelo");
            input.appendChild(option2);

            var option3 = document.createElement("option");
            option3.setAttribute = ("id", "modelo1")
            option3.textContent = "Versa";
            var input = document.getElementById("modelo");
            input.appendChild(option3);

            var option4 = document.createElement("option");
            option4.setAttribute = ("id", "modelo1")
            option4.textContent = "Altima";
            var input = document.getElementById("modelo");
            input.appendChild(option4);

        }
    }

    if (document.getElementById("marca").value === "Nissan") {
        if (document.getElementById("tipo").value === "Crossover"
            || document.getElementById("tipo").value === "SUV") {

            var option = document.createElement("option");
            option.setAttribute = ("id", "modelo1")
            option.textContent = "Kicks";
            var input = document.getElementById("modelo");
            input.appendChild(option);

            var option2 = document.createElement("option");
            option2.setAttribute = ("id", "modelo1")
            option2.textContent = "X-trail";
            var input = document.getElementById("modelo");
            input.appendChild(option2);
        }
    }

    if (document.getElementById("marca").value === "Nissan") {
        if (document.getElementById("tipo").value === "SUV") {

            var option = document.createElement("option");
            option.setAttribute = ("id", "modelo1")
            option.textContent = "Pathfinder";
            var input = document.getElementById("modelo");
            input.appendChild(option);

            var option2 = document.createElement("option");
            option2.setAttribute = ("id", "modelo1")
            option2.textContent = "Armada";
            var input = document.getElementById("modelo");
            input.appendChild(option2);
        }
    }

    if (document.getElementById("marca").value === "Nissan") {
        if (document.getElementById("tipo").value === "Coupé") {

            var option = document.createElement("option");
            option.setAttribute = ("id", "modelo1")
            option.textContent = "Altima";
            var input = document.getElementById("modelo");
            input.appendChild(option);

            var option2 = document.createElement("option");
            option2.setAttribute = ("id", "modelo1")
            option2.textContent = "370Z";
            var input = document.getElementById("modelo");
            input.appendChild(option2);
        }
    }

    if (document.getElementById("marca").value === "Hyundai") {
        if (document.getElementById("tipo").value === "Sedán"
            || document.getElementById("tipo").value === "Hatchback") {

            var option = document.createElement("option");
            option.setAttribute = ("id", "modelo1")
            option.textContent = "Grand i10";
            var input = document.getElementById("modelo");
            input.appendChild(option);

            var option2 = document.createElement("option");
            option2.setAttribute = ("id", "modelo1")
            option2.textContent = "Accent";
            var input = document.getElementById("modelo");
            input.appendChild(option2);

            var option3 = document.createElement("option");
            option3.setAttribute = ("id", "modelo1")
            option3.textContent = "Elantra";
            var input = document.getElementById("modelo");
            input.appendChild(option3);
        }
    }

    if (document.getElementById("marca").value === "Hyundai") {
        if (document.getElementById("tipo").value === "Crossover"
            || document.getElementById("tipo").value === "SUV") {

            var option = document.createElement("option");
            option.setAttribute = ("id", "modelo1")
            option.textContent = "Creta";
            var input = document.getElementById("modelo");
            input.appendChild(option);

            var option2 = document.createElement("option");
            option2.setAttribute = ("id", "modelo1")
            option2.textContent = "Tucson";
            var input = document.getElementById("modelo");
            input.appendChild(option2);

            var option3 = document.createElement("option");
            option3.setAttribute = ("id", "modelo1")
            option3.textContent = "Santa Fe";
            var input = document.getElementById("modelo");
            input.appendChild(option3);
        }
    }

    if (document.getElementById("marca").value === "Hyundai") {
        if (document.getElementById("tipo").value === "Coupé") {

            var option = document.createElement("option");
            option.setAttribute = ("id", "modelo1")
            option.textContent = "Tuscani";
            var input = document.getElementById("modelo");
            input.appendChild(option);
        }
    }

    if (document.getElementById("marca").value === "Mazda") {
        if (document.getElementById("tipo").value === "Sedán"
            || document.getElementById("tipo").value === "Hatchback") {

            var option = document.createElement("option");
            option.setAttribute = ("id", "modelo1")
            option.textContent = "2";
            var input = document.getElementById("modelo");
            input.appendChild(option);

            var option2 = document.createElement("option");
            option2.setAttribute = ("id", "modelo1")
            option2.textContent = "3";
            var input = document.getElementById("modelo");
            input.appendChild(option2);

            var option3 = document.createElement("option");
            option3.setAttribute = ("id", "modelo1")
            option3.textContent = "6";
            var input = document.getElementById("modelo");
            input.appendChild(option3);
        }
    }

    if (document.getElementById("marca").value === "Mazda") {
        if (document.getElementById("tipo").value === "Crossover"
            || document.getElementById("tipo").value === "SUV") {

            var option = document.createElement("option");
            option.setAttribute = ("id", "modelo1")
            option.textContent = "CX-3";
            var input = document.getElementById("modelo");
            input.appendChild(option);

            var option2 = document.createElement("option");
            option2.setAttribute = ("id", "modelo1")
            option2.textContent = "CX-5";
            var input = document.getElementById("modelo");
            input.appendChild(option2);

            var option3 = document.createElement("option");
            option3.setAttribute = ("id", "modelo1")
            option3.textContent = "CX-9";
            var input = document.getElementById("modelo");
            input.appendChild(option3);
        }
    }

    if (document.getElementById("marca").value === "Mazda") {
        if (document.getElementById("tipo").value === "Coupé") {

            var option = document.createElement("option");
            option.setAttribute = ("id", "modelo1")
            option.textContent = "MX-5";
            var input = document.getElementById("modelo");
            input.appendChild(option);
        }
    }

    if (document.getElementById("marca").value === "Chevrolet") {
        if (document.getElementById("tipo").value === "Sedán"
            || document.getElementById("tipo").value === "Hatchback") {

            var option = document.createElement("option");
            option.setAttribute = ("id", "modelo1")
            option.textContent = "Beat";
            var input = document.getElementById("modelo");
            input.appendChild(option);

            var option2 = document.createElement("option");
            option2.setAttribute = ("id", "modelo1")
            option2.textContent = "Chevy";
            var input = document.getElementById("modelo");
            input.appendChild(option2);

            var option3 = document.createElement("option");
            option3.setAttribute = ("id", "modelo1")
            option3.textContent = "Aveo";
            var input = document.getElementById("modelo");
            input.appendChild(option3);

            var option4 = document.createElement("option");
            option4.setAttribute = ("id", "modelo1")
            option4.textContent = "Cruze";
            var input = document.getElementById("modelo");
            input.appendChild(option4);

            var option5 = document.createElement("option");
            option5.setAttribute = ("id", "modelo1")
            option5.textContent = "Malibú";
            var input = document.getElementById("modelo");
            input.appendChild(option5);
        }
    }

    if (document.getElementById("marca").value === "Chevrolet") {
        if (document.getElementById("tipo").value === "Hatchback") {

            var option = document.createElement("option");
            option.setAttribute = ("id", "modelo1")
            option.textContent = "Spark";
            var input = document.getElementById("modelo");
            input.appendChild(option);
        }
    }

    if (document.getElementById("marca").value === "Chevrolet") {
        if (document.getElementById("tipo").value === "Crossover"
            || document.getElementById("tipo").value === "SUV") {

            var option = document.createElement("option");
            option.setAttribute = ("id", "modelo1")
            option.textContent = "Equinox";
            var input = document.getElementById("modelo");
            input.appendChild(option);

            var option2 = document.createElement("option");
            option2.setAttribute = ("id", "modelo1")
            option2.textContent = "Trax";
            var input = document.getElementById("modelo");
            input.appendChild(option2);

            var option3 = document.createElement("option");
            option3.setAttribute = ("id", "modelo1")
            option3.textContent = "Suburban";
            var input = document.getElementById("modelo");
            input.appendChild(option3);

            var option4 = document.createElement("option");
            option4.setAttribute = ("id", "modelo1")
            option4.textContent = "Traverse";
            var input = document.getElementById("modelo");
            input.appendChild(option4);
        }
    }

    if (document.getElementById("marca").value === "Chevrolet") {
        if (document.getElementById("tipo").value === "Coupé") {

            var option = document.createElement("option");
            option.setAttribute = ("id", "modelo1")
            option.textContent = "Corvette";
            var input = document.getElementById("modelo");
            input.appendChild(option);

            var option2 = document.createElement("option");
            option2.setAttribute = ("id", "modelo1")
            option2.textContent = "Camaro";
            var input = document.getElementById("modelo");
            input.appendChild(option2);
        }
    }

    if (document.getElementById("tipo").value === "Sedán") {
        document.getElementById("puertas").value = "4";
    }

    if (document.getElementById("tipo").value === "Hatchback"
        || document.getElementById("tipo").value === "SUV"
        || document.getElementById("tipo").value === "Crossover") {
        document.getElementById("puertas").value = "5";
    }

    if (document.getElementById("tipo").value === "Coupé") {
        document.getElementById("puertas").value = "2";
    }

    var comprar = document.getElementById("btn");

    comprar.onclick=function(){
        var marca = document.getElementById("marca").value;
        var tipo = document.getElementById("tipo").value;
        var modelo = document.getElementById("modelo").value;
        var anio = document.getElementById("anio").value;
        var color = document.getElementById("color").value;
        var matricula = document.getElementById("matricula").value;
        var llantas = document.getElementById("llantas").value;
        var puertas = document.getElementById("puertas").value;
        var precio = document.getElementById("precio")
        var versiones = document.getElementById("version").value;
        var impuesto = document.getElementById("impuesto")
        var transmision = document.getElementById("transmision").value;

        var objeto = new Carro(marca, tipo, modelo, anio, color, matricula, llantas, puertas, precio, versiones, impuesto, transmision)
        precio.value = objeto.calcularPrecio()
        impuesto.value = objeto.calcularImpuesto()

        
        var result = document.getElementById("carro");
        result.style.display = "";
        result.textContent = JSON.stringify(objeto);
    }



}