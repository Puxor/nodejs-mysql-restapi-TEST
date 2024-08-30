import {pool} from '../db.js';



export const getEmployees = async (req, res) => {

    try {

        const [rows] = await pool.query('SELECT * FROM employee' )
    res.json(rows)

    } catch (error) {

        return res.status(500).json({
            message: 'Internal server error'})
        
    }
    
}


export const getEmployee = async (req, res) => {

    try {

        console.log(req.params)
    const [rows] = await pool.query ('SELECT * FROM employee WHERE id = ?', [req.params.id])
    if (rows <= 0) return res.status(404).json({message: 'employee not found'})
    res.json(rows)

    } catch (error) {

        return res.status(500).json({
            message: 'Internal server error'})
        
    }
    
}



export const postEmployees = async (req, res) => {

const {name, salary} = req.body

    try {
        
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
res.send({ 

    id : rows.insertId,
    name,
    salary 
    
 })
    } catch (error) {

        return res.status(500).json({
            message: 'Internal server error'})
        
    }

}



export const updateEmployees = async (req, res) => {

        const { id } = req.params.id
        const { name, salary } = req.body

    try {
         

    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary)', [name, salary, id, salary])

    console.log(result)

    if (result.affectedRows <= 0) return res.status(404).json({message: 'employee not found'})

    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

    res.json(rows[0])

    } catch (error) {

        return res.status(500).json({
            message: 'Internal server error'})
        
    }
    
}



export const deleteEmployees = async (req, res) => {

    try {

        const [result] = await pool.query ('DELETE FROM employee WHERE id = ?', [req.params.id])

    if (result.affectedRows <= 0) return res.status(404).json({message: 'employee not found'})

    res.sendStatus(204)  

    } catch (error) {

        return res.status(500).json({
            message: 'Internal server error'})
        
    }

      
}