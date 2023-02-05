module.exports = function(app){
    const product = require('../controllers/productController.js')

    app.route('/list')
    .get(product.list_all_list)
    .post(product.create_a_list)

    app.route('/list/:listId')
    .get(product.read_a_list)
    .put(product.update_a_list)
    .delete(product.delete_a_list)
}