import {pool} from '../db.js';

export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS solution');
    res.json(result[0]);
}