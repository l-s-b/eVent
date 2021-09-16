const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Event = sequelize.define('event', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    starring: {
        type: DataTypes.STRING,
        allowNull: true
    },
    virtual: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    location: { // PUEDE TAMBIÉN SER UN EVENTO REMOTO, Y PROVEER UN LINK
        type: DataTypes.STRING, //Previously processed at frontend.
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pictures: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
    start_date: { // AAAA-MM-DD
        type: DataTypes.STRING,
        validate: { isDate: true },
        allowNull: false,
    },
    finish_date: { // AAAA-MM-DD
        type: DataTypes.STRING,
        validate: {
            isDate: true,
        },
        allowNull: true,
    },
    schedule: { //TEMPORARY. CONVERT INTO SEPARATE MODEL AFTERWARDS
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },
    isRecurrent: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    weekdays: {
        type: DataTypes.ARRAY(DataTypes.ENUM(
            "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
            )),
        allowNull: false,
    },
    tags: { // TEMPORARY. TURN INTO SEPARATE MODEL AFTERWARDS
        type: DataTypes.ENUM(
            "Exteriores", "Interiores", "En vivo", "Recital", "Teatro", "Película", "Disco", "Deportes"
            ),
        allowNull: false,
    },
    age_rating: {
        type: DataTypes.ENUM("0+", "7+", "13+", "18+"),
        allowNull: false,
    },
    price: { //SINGULAR FOR NOW. THEN TRY TO TURN INTO PRICES
        type: DataTypes.STRING,
        allowNull: false,
    },
    ticket_limit: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    seat_booking: {
        /* ?????????????? */
        type: DataTypes.STRING,
        allowNull:true
    },
})

module.exports = Event;