const bcrypt = require("bcryptjs");

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      
      
      for (let i = 0; i < users.length; i++) {
        //check if password and hash are the same compareSync(password, hash)
        const pinExists = bcrypt.compareSync(password, users[i].password);
        //console.log(pinExists)
        if (users[i].username === username && pinExists) {
          let userObjToReturn = users[i];
          
          delete userObjToReturn.password;
          console.log(userObjToReturn);
          return res.status(200).send(userObjToReturn)
        }
      }

      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        const pin = req.body.password;
        console.log(req.body.password)

         //Salt represents complexity of our encryption in terms of patterns
         const salt = bcrypt.genSaltSync(10);
         console.log(salt);
 
         //The hash represents the actual encryption of our password
         const pinHash = bcrypt.hashSync(pin,salt);
         //Update object to include encrypted password instead of password and add it to the users array
         let hashUserObj = req.body;
         hashUserObj.password = pinHash;
         console.log(hashUserObj);
         
        users.push(hashUserObj);
        res.status(200).send(req.body)
        console.log(users);
    }
}