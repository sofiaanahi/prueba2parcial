// TODO: Crear modelo de datos de Reserva

const { DataTypes, sequelize } = require("./database");

const reserva = sequelize.define(
  "reserva",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      defaultValue: new Date().getTime(),
    },
    reserva: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fechaReserva: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    habitacion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cantidadPersona: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    createAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defualtValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    deleteAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    createAt: true,
    updateAt: true,
    deletedAt: true,
    tableName: "reservas",
  }
);
reserva.sync({ force: false }).then(() => {
  console.log("tabla de reservas creada");
});

module.exports = reserva;
