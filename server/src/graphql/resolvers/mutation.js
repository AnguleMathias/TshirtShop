const bcrypt = require('bcrypt');
const ValidateFields = require('../../helpers/validateField');
const generateToken = require('../../helpers/generateToken');

const Mutation = {
  register: async (_, {name, email, password }, { db })=> {
    ValidateFields(email, password);
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return await db.query('INSERT INTO customer (name, email, password) VALUES(?,?,?)',
      [name, email, hash]).then(()=>{
        return db.query(`SELECT name, email FROM customer WHERE name=?`, [name])
    }
    ).spread(function (user) {
      return user[0];
    })
  },
   login: async (_, {name, email, password}, { db }) => {
    ValidateFields(email, password);
    const user = await db.query(`SELECT customer_id, name, email, password FROM customer WHERE email=?`, [email]);

    if (!user) throw Error('User not found');
    const match = await bcrypt.compare(password, user[0][0].password);
    if (!match) throw new Error('Incorrect password');
     const token = generateToken(user[0][0].email);
     return {
         token,
         email: user[0][0].email,
         name:user[0][0].email,
         customer_id: user[0][0].customer_id
     }
   }
};

module.exports = Mutation;