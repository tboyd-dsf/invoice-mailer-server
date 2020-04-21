module.exports = function(sequelize, DataTypes) {
    const Customers = sequelize.define("Customers", {
        propname: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        managername: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });

    return Customers;
}