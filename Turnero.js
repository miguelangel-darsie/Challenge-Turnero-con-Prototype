// Persona
var Persona = function (nombre, apellido, dni) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.hablar = function () {
        console.log("hola, mi nombre es " + this.nombre + " " + this.apellido);
    }
}


//Profesionales de la salud

var Especialidad = function (titulo, turnosDisponibles) {
    this.titulo = titulo;
    this.turnosDisponibles = turnosDisponibles;
}

var especialidades = [
    odontologo = new Especialidad("Odontologo", 5),
    pediatra = new Especialidad("Pediatra", 10),
    oncologo = new Especialidad("Oncologo", 3),
    cirujano = new Especialidad("Cirujano", 1),
    podologo = new Especialidad("Podologo", 15)
]


var Profesional = function (nombre, apellido, dni, titulo) {
    Persona.call(this, nombre, apellido, dni);
    this.especialidad = especialidades[titulo].titulo
    this.turnosDisponibles = especialidades[titulo].turnosDisponibles
    
    this.turnero = function (boolean, numeroDeTurnos) {
        if (boolean) {
            this.turnosDisponibles += numeroDeTurnos;
            console.log(this.turnosDisponibles);
        } else {
            let resultado = this.turnosDisponibles - numeroDeTurnos;
            if (resultado > 0) {
                this.turnosDisponibles = resultado;
            } else {
                this.turnosDisponibles = 0;
            }
        } this
    }
}

var especialistas = [];

function crearEspecialista(){
    var nombreEspecialista = document.getElementById("nombre-doc").value
    var apellidoEspecialista = document.getElementById("apellido-doc").value
    var dniEspecialista = document.getElementById("dni-doc").value
    var tituloEspecialista = document.getElementById("especialidades").value

    
    var especialista = new Profesional(nombreEspecialista, apellidoEspecialista, dniEspecialista, tituloEspecialista)
    especialistas.push(especialista)
    alert("Bienvenido Dr/Dra " + nombreEspecialista + " " + apellidoEspecialista )
}



// PACIENTES

var Paciente = function (nombre, apellido, dni) {
    Persona.call(this, nombre, apellido, dni);
    this.solicitarTurno = function (buscarDoctor, turno) {
        var doctor = especialistas.find(especialista => especialista.titulo == buscarDoctor);
        console.log(doctor.nombre);
        let resultado = doctor.turnosDisponibles - turno
        if (resultado >= 0) {
            alert("Se ha reservado exitosamente el turno con " + doctor.nombre + " " + doctor.apellido);
            doctor.turnosDisponibles -= turno;
        } else {
            alert("Lamentablemente, " + doctor.nombre + " " + doctor.apellido + "no tiene mas turnos disponibles para el día de la fecha.\nDisculpe las molestias.");
        } return;

    }
}

var pacientes = [];

function crearPaciente(){
    var nombrePaciente = document.getElementById("nombre").value
    var apellidoPaciente = document.getElementById("apellido").value
    var dniPaciente = document.getElementById("dni").value
    
    var paciente = new Paciente(nombrePaciente, apellidoPaciente, dniPaciente)
    pacientes.push(paciente)
    alert("Bienvenido " + nombrePaciente + " " + apellidoPaciente )
}