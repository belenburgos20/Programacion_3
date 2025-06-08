const home = async (req, res) => {
    res.render('index', { 
        title: 'home'
    }
)}
module.exports = {
   home
}




