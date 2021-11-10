'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      /*
      * Servico "PERTENCE À MUITOS" Pedido, por intermédio de uma terceira classe: "ItemPedido";
      */
      Servico.belongsToMany(models.Pedido, {
        foreignKey: 'PedidoId', through: 'ItemPedido', as: 'pedidos_serv'});

      // Servico "TEM MUITOS" ItemPedido;
      Servico.hasMany(models.ItemPedido, {
        foreignKey: 'ServicoId', as: 'item_servicos'});          
    }
  };
  Servico.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Servico',
  });
  return Servico;
};