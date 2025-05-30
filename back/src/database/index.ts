import { Sequelize } from 'sequelize'
require('dotenv').config()

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'dpg-d0sfu63uibrs73ad1o10-a',
    port: parseInt('5432'),
    database: 'biomob_banco_de_dados',
    username: 'biomob_banco_de_dados_user',
    password: 'c5s2NCMhMcJignbiQjMmbzDRrNzuWX2P',
    define: {
      underscored: true
    }
})