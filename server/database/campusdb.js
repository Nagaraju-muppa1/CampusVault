const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://nagarajumuppavaram2491:skillbridge123@cluster0.uhzf0p4.mongodb.net/CampusVault?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{console.log("DB successfully connected")})
.catch((e)=>{console.log(e)});
const campus = mongoose.connection
module.exports = campus;