const reserva = require("../models/Reserva");
const ctrlReservas = {};

ctrlReservas.ListaReservas = (req, res) => {
  res.render("listado-reserva");
};

ctrlReservas.FormNuevaReserva = (req, res) => {
  res.render("nueva-reserva");
};

ctrlReservas.FormEditarReserva = (req, res) => {
  const { id } = req.params;
  res.render("editar-reserva", { id });
};

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas

ctrlReservas.obtenerReserva = async (req, res) => {
  try {
    const reservas = await reserva.findAll({
      where: {
        estado: true,
      },
    });

    return res.json(reservas);
  } catch (error) {
    console.log("Error al obtener las reservas", error);
    return res.status(500).json({
      message: "Error al obtener las reservas",
    });
  }
};

// Crear una reserva

ctrlReservas.crearRerserva = async (req, res) => {
  const {
    reserva,
    fechaReserva,
    nombre,
    apellido,
    habitacion,
    cantidadPersona,
  } = req.body;

  console.log("los datos que vienen en la peticion: ", req.body);

  try {
    const nuevaReserva = new reserva({
      reserva,
      fechaReserva,
      nombre,
      apellido,
      habitacion,
      cantidadPersona,
    });
    // se guarda en la BD
    await nuevaReserva.save();

    return res.status(201).json({
      message: "reserva creada con exito",
    });
  } catch (error) {
    console.log("Error al crear la reserva", error);
    return res.status(500).json({
      message: "Erorr al crear la reserva",
    });
  }
};

// Actualizar una reserva
// Eliminar una reserva de forma lógica

module.exports = ctrlReservas;
