'use strict'

const { db:config } = require('@chons-gym/config')

//contraladores
const setupUser = require('./lib/users')
const setupProduct = require('./lib/products')
const setupReservation = require ('./lib/reservations')
const setupSchedule = require ('./lib/schedules')
const setupSale = require ('./lib/sales')
const setupMembership = require ('./lib/memberships')
const setupClasss = require ('./lib/classes')
const setupDetail_Membership = require ('./lib/detail_memberships')
const setupDetail_Sale = require ('./lib/detail_sales')
const setupType_Class = require ('./lib/type_classs')
const setupType_Membership = require ('./lib/type_memberships')
const setupMarchinery = require ('./lib/marchinerys')
const setupInstallation = require ('./lib/installations')
const setupPlan = require ('./lib/plans')
const setupNovelty = require ('./lib/noveltys')
const setupTip = require ('./lib/tips')

const setupDatabase = require('./lib/db')
const setupUserModel = require('./models/user.model')
const setupReservationModel = require('./models/reservation.model')
const setupProductModel = require('./models/product.model')
const setupDetail_SaleModel = require('./models/detail_sale.model')
const setupSaleModel = require('./models/sale.model')
const setupCityModel = require('./models/city.model')
const setupClassModel = require('./models/class.model')
const setupCountryModel = require('./models/country.model')
const setupDepartmentModel = require('./models/department.model')
const setupDetail_MembershipModel = require('./models/detail_membership.model')
const setupMembershipModel = require('./models/membership.model')
const setupScheduleModel = require('./models/schedule.model')
const setupType_ClassModel = require('./models/type_class.model')
const setupType_MembershipModel = require('./models/type_merbership.model')
const setupDayModel = require('./models/day.model')
const setupInventoryModel = require('./models/inventory.model')
const setupRoutineModel = require('./models/routine.model')
const setupDietModel = require('./models/diet.model')
const setupInstallationModel = require('./models/installation.model')
const setupMarchineryModel = require('./models/marchinery.model')
const setupPlanModel = require('./models/plan.model')
const setupNoveltyModel = require('./models/novelty.model')
const setupTipModel = require('./models/tip.model')



// const setupAgent = require('./lib/agent')

module.exports = async function () {
  const sequelize = setupDatabase(config)
  const UserModel = setupUserModel(config)
  const ReservationModel = setupReservationModel(config)
  const ProductModel = setupProductModel(config)
  const Detail_SaleModel = setupDetail_SaleModel(config)
  const CityModel = setupCityModel(config)
  const ClassModel = setupClassModel(config)
  const CountryModel = setupCountryModel(config)
  const DepartmentModel = setupDepartmentModel(config)
  const Detail_MembershipModel = setupDetail_MembershipModel(config)
  const MembershipModel = setupMembershipModel(config)
  const SaleModel = setupSaleModel(config)
  const ScheduleModel = setupScheduleModel(config)
  const Type_ClassModel = setupType_ClassModel(config)
  const Type_MembershipModel = setupType_MembershipModel(config)
  const DayModel = setupDayModel(config)
  const InventoryModel = setupInventoryModel(config)
  const RoutineModel = setupRoutineModel(config)
  const DietModel = setupDietModel(config)
  const InstallationModel = setupInstallationModel(config)
  const MarchineryModel = setupMarchineryModel(config)
  const PlanModel = setupPlanModel(config)
  const NoveltyModel = setupNoveltyModel(config)
  const TipModel = setupTipModel(config)


  // relaciones de resevas a usuario
  UserModel.hasMany(ReservationModel)
  ReservationModel.belongsTo(UserModel)
  // relaciones de resevas a clase
  ClassModel.hasMany(ReservationModel)
  ReservationModel.belongsTo(ClassModel)
  //relaciones de detalle_ventas a productos
  ProductModel.hasMany(Detail_SaleModel)
  Detail_SaleModel.belongsTo(ProductModel)
  //relaciones de productos  a ventas 
  SaleModel.hasMany(productModel)
  Product_SaleModel.belongsTo(SaleModel)
  // relacion de venta a usuarios
  UserModel.hasMany(SaleModel, {foreignKey: 'clienteId'})
  SaleModel.belongsTo(UserModel, {foreignKey: 'empleadoId'})
  //relacion de detalle_membresia a tipo membresia
  Type_MembershipModel.hasMany(Detail_MembershipModel)
  Detail_MembershipModel.belongsTo(Type_MembershipModel)
  //relacion de detalle_membresia a membresia
  MembershipModel.hasMany(Detail_MembershipModel)
  Detail_MembershipModel.belongsTo(MembershipModel)
  //relacion de membresia a usuarios
  UserModel.hasMany(MembershipModel, {foreignKey: 'clienteId'})
  MembershipModel.belongsTo(UserModel, {foreignKey: 'empleadoId'})
  //relacion de clase a usuarios
  UserModel.hasMany(ClassModel)
  ClassModel.belongsTo(UserModel)
  //relacion de clase a dia
  DayModel.hasMany(ClassModel)
  ClassModel.belongsTo(DayModel)
  // relacion de clase a horarios
  ScheduleModel.hasMany(ClassModel)
  ClassModel.belongsTo(ScheduleModel)
  // relacion de clase tipo_clase 
  Type_ClassModel.hasMany(ClassModel)
  ClassModel.belongsTo(Type_ClassModel)
  // relacion de usuarios a paises
  CountryModel.hasMany(UserModel)
  UserModel.belongsTo(CountryModel)
  // relacion de departamentos a paises
  CountryModel.hasMany(DepartmentModel)
  DepartmentModel.belongsTo(CountryModel)
  // relacion de ciudadad a departamentos
  DepartmentModel.hasMany(CityModel)
  CityModel.belongsTo(DepartmentModel)
  // relacion de ciudadad a pais
  CountryModel.hasMany(CityModel)
  CityModel.belongsTo(CountryModel)
  // relacion de rutina a user
  UserModel.hasMany(RoutineModel)
  RoutineModel.belongsTo(UserModel)
  // relacion de dieta a user
  UserModel.hasMany(DietModel)
  DietModel.belongsTo(UserModel)
  // relaciones de inventario a maquinaria y productos
  MarchineryModel.hasMany(InventoryModel, {foreignKey: 'machineryId'})
  InventoryModel.belongsTo(ProductModel, {foreignKey: 'productId'})

  //fin de las relaciones

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }
 
  const User = setupUser(UserModel)
  const Product = setupProduct(ProductModel)
  const Reservation = setupReservation(ReservationModel)
  const Schedule = setupSchedule(ScheduleModel)
  const Sale = setupSale(SaleModel)
  const Membership = setupMembership(MembershipModel)
  const Classs = setupClasss(ClassModel)
  const Detail_Membership = setupDetail_Membership(Detail_MembershipModel)
  const Detail_Sale = setupDetail_Sale(Detail_SaleModel)
  const Type_Class = setupType_Class(Type_ClassModel)
  const Type_Membership = setupType_Membership(Type_MembershipModel)
  const Marchinery = setupMarchinery(MarchineryModel)
  const Installation = setupInstallation(InstallationModel)
  const Plan = setupPlan(PlanModel)
  const Novelty = setupNovelty(NoveltyModel)
  const Tip = setupTip(TipModel)
  return {
    async setup() {
      await sequelize.sync({ force: true })
    },
    User,
    Product,
    Reservation,
    Schedule,
    Sale,
    Membership,
    Classs,
    Detail_Membership,
    Detail_Sale,
    Type_Class,
    Type_Membership,
    Marchinery,
    Installation,
    Plan,
    Novelty,
    Tip
  }
}
