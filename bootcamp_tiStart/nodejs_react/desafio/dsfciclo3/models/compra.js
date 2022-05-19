'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Compra "PERTENCE À APENAS UM" Cliente;
      Compra.belongsTo(models.Cliente, {foreignKey: 'ClienteId', as: 'client'});

      /*
      * Compra "PERTENCE À MUITOS" Produto, por intermédio de uma terceira classe: "ItemCompra";
      */
      Compra.belongsToMany(models.Produto, {
        foreignKey: 'ProdutoId', through: 'ItemCompra', as: 'produtos_compra'});

      // Compra "TEM MUITOS" ItemCompra;
      Compra.hasMany(models.ItemCompra, {foreignKey: 'CompraId', as: 'item_compras'});       
    }
  };
  Compra.init({
    data: DataTypes.DATEONLY,
    ClienteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Compra',
  });
  return Compra;
};