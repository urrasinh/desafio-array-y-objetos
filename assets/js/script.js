let radiologia = [
    {
        hora: '11:00',
        especialista: 'Ignacio Schulz',
        paciente: 'Francisca Rojas',
        rut: '9878782-1',
        prevision: 'Fonasa'
    },
    {
        hora: '11:00',
        especialista: 'Federico Subercaseaux',
        paciente: 'Pamela Estrada',
        rut: '15345241-3',
        prevision: 'Isapre'
    },
    {
        hora: '11:30',
        especialista: 'Federico Subercaseaux',
        paciente: 'Pamela Estrada',
        rut: '15345241-3',
        prevision: 'Isapre'
    },
    {
        hora: '15:00',
        especialista: 'Fernando Wurthz',
        paciente: 'Armando Luna',
        rut: '16445345-9',
        prevision: 'Isapre'
    },
    {
        hora: '15:30',
        especialista: 'Ana Maria Godoy',
        paciente: 'Manuel Godoy',
        rut: '17666419-0',
        prevision: 'Fonasa'
    },
    {
        hora: '16:00',
        especialista: 'Patricia Suazo',
        paciente: 'Ramon Ulloa',
        rut: '14989389-K',
        prevision: 'Fonasa'
    }
]

var traumatologia = [
    {
        hora: '08:00',
        especialista: 'maria paz altuzarra',
        paciente: 'aula sanchez',
        rut: '15554774-5',
        prevision: 'fonasa'
    },

    {
        hora: '10:00',
        especialista: 'raul araya',
        paciente: 'angelica navas',
        rut: '15444147-9',
        prevision: 'isapre'
    },

    {
        hora: '10:30',
        especialista: 'maria arriagada',
        paciente: 'ana klapp',
        rut: '17879423-9',
        prevision: 'isapre'

    },

    {
        hora: '11:00',
        especialista: 'alejandro badilla',
        paciente: 'felipe mardones',
        rut: '1547423-6',
        prevision: 'isapre'
    },

    {
        hora: '11:30',
        especialista: 'cecilia budnik',
        paciente: 'diego marre',
        rut: '16554741-K',
        prevision: 'fonasa'
    },

    {
        hora: '12:00',
        especialista: 'arturo cavagnaro',
        paciente: 'cecilia mendez',
        rut: '9747535-8',
        prevision: 'isapre'
    },

    {
        hora: '12:30',
        especialista: 'andres kanacri',
        paciente: 'marcial suazo',
        rut: '11254785-5K',
        prevision: 'isapre'
    }
]

let dental = [
    {
        hora: '8:30',
        especialista: 'Andrea Zuñiga',
        paciente: 'Marcela Retamal',
        rut: '11123425-6',
        prevision: 'Isapre'
    },
    {
        hora: '11:00',
        especialista: 'Maria Pia Zañartu',
        paciente: 'Angel Muñoz',
        rut: '9878789-2',
        prevision: 'Isapre'
    },
    {
        hora: '11:30',
        especialista: 'Scarlett Witting',
        paciente: 'Mario Kast',
        rut: '7998789-5',
        prevision: 'Fonasa'
    },
    {
        hora: '13:00',
        especialista: 'Francisco Von Teuber',
        paciente: 'Karin Fernandez',
        rut: '18887662-K',
        prevision: 'Fonasa'
    },
    {
        hora: '13:30',
        especialista: 'Eduardo Viñuela',
        paciente: 'Hugo Sanchez',
        rut: '17665461-4',
        prevision: 'Fonasa'
    },
    {
        hora: '14:00',
        especialista: 'Raquel Villaseca',
        paciente: 'Ana Sepulveda',
        rut: '14441281-0',
        prevision: 'Isapre'
    },
]



var texto = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";

for (var i = 0; i < radiologia.length; i++) {
    texto += `<tr>
        <td>${radiologia[i].hora}</td>
        <td>${radiologia[i].especialista}</td>
        <td>${radiologia[i].paciente}</td>
        <td>${radiologia[i].rut}</td>
        <td>${radiologia[i].prevision}</td>
        </tr>`;
}
document.getElementById("cuerpo-tabla").innerHTML = texto;






function mostrar(datos) {
    for (let i = 0; i < datos.length; i++) {
        const consulta = datos[i]
    }
    const primero = datos[0]
    const ultimo = datos[datos.length - 1]
    document.write(`Primera atención: ${primero.paciente} - ${primero.prevision}, Última atención:${ultimo.prevision}<br>`)
}


mostrar(radiologia)
mostrar(traumatologia)
mostrar(dental)
