

import knex from '../database.js'

// retorna os doces
const getSweets = async function(){
    const [sweets] = await knex.raw(
        `SELECT * FROM doce`
    );
    return sweets;

}

const getSweetById = async function(id){
    const [sweet] = await knex.raw(
        `SELECT * FROM doce WHERE id = ?`,
        [id],
    );
    return sweet;
}

const createSweet = async function(sweet){
    const result = await knex.raw(
        `
        INSERT INTO doce(nome, quantidade, usuario_cadastro_id)
        VALUES(?, ?, ?)
        `,
        [sweet.name, sweet.quantity, sweet.user],
    )

}

const discardSweet = async function(sweetId, userId){
    const result = await knex.raw(
        `
        UPDATE doce
        SET 
            data_descarte=CURRENT_TIMESTAMP,
            user_descarte_id = ?
        WHERE id = ?
        `,
        [userId, sweetId],
    )
    return result.insertId
}
const deleteSweet = async function(sweetId){
    const result = await knex.raw(
        `
        DELETE doce
        WHERE id = ?
        `,
        [sweetId],
    )
    return result.insertId
}