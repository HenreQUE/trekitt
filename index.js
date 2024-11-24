// Registro de Material FUNÇÃO

async function registrarMaterial(event) {
    event.preventDefault()

    const codigoMaterial = document.querySelector('#codigo_material').value
    const nomeMaterial = document.querySelector('#nome_material').value
    const tipoMaterial = document.querySelector('#tipo_material').value
    const dimensoesMaterial = document.querySelector('#dimensoes_material').value

    const data = {codigoMaterial, nomeMaterial, tipoMaterial, dimensoesMaterial};
    console.log(data)

    const response = await fetch('http://localhost:3001/material/registrar', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();

    console.log(results);
    if(results.success) {
        alert(results.message)
    } else {
        alert(alert.message)
    }
}

// Registro de Kit FUNÇÃO

async function registrarKit(event) {
    event.preventDefault()

    const codigoKit = document.getElementById('codigo_kit').value
    const nomeKit = document.getElementById('nome_kit').value
    const tipoKit = document.getElementById('tipo_kit').value
    const dimensoesKit = document.getElementById('dimensoes_kit').value

    const data = {codigoKit, nomeKit, tipoKit, dimensoesKit};
    console.log(data)

    const response = await fetch('http://localhost:3001/kit/registrar', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();

    console.log(results);
    if(results.success) {
        alert(results.message)
    } else {
        alert(alert.message)
    }
}

