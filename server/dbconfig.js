const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',    /*כאן לשים סיסמא באם יש */
    database: 'test_3'      /*כאן לשים את השם של ה DB */
})
/* sdfsefsef */
con.connect(err => {  
    if (err) {
        return console.log(err)
    }

    console.log("conected to mysql server");
})

const SQL = (q) => {
    return new Promise((resolve, reject) => {
        con.query(q, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}


module.exports = SQL


// dbcongid   בדרךכלל זה בתוך קובץ