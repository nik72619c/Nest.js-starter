import {QueryInterface} from 'sequelize';
module.exports = {
    up: (queryInterface: QueryInterface, Sequelize) => {

        // @ts-ignore
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },

            name: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING,
            },

            username: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING,
            },

            email: {
                type: Sequelize.STRING,
                unique: true,
            },

            passwordHash: {
                type: Sequelize.STRING,
            },

            gender: {
                type: Sequelize.STRING,
            },

            status: {
                type: Sequelize.STRING,
            },

            twoFaSecret: {
                type: Sequelize.STRING,
            },

            twoFaEnabled: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },

            wrongLoginAttempts: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },

            passwordAttributes: {
                type: Sequelize.JSON,
            },
            emailAttributes: {
                type: Sequelize.JSON,
            },
            role: {
                type: Sequelize.STRING,
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },

            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        }).then(async () => {

        });
    },

    down: (queryInterface: QueryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    },
};
