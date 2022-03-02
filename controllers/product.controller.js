var Product = require('../schemas/product.schema');

async function addProduct(req, res) {
    try {
        console.log(req.body)
        if (!req.body.name || !req.body.price || !req.body.stock) {
            return res.status(400).send({error:'Falta un campo obligatorio'})
        }
    
    let newProduct = new Product(req.body);
    console.log(newProduct)
    await newProduct.save()
    res.send({productoNuevo : newProduct})
} catch(error){
        res.status(404).send(error)
    }
};

async function getProducts(req, res) {
    const productosDB = await Product.find()
    res.send({
        products: productosDB
    })
}

async function getProduct(req, res) {
    const productId = req.query.product_id;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).send('No se encuntro el producto que busca')
    return res.status(200).send({
        product: product
    });
}

async function deleteProduct(req, res) {
    const ProductIdDelete = req.query.product_id_delete;
    const productDelete = await Product.findByIdAndDelete(ProductIdDelete);
    if (!productDelete) return res.status(404).send('No se encuntro el producto que desea borrar')

    return res.status(200).send(`El producto ${productDelete.name} ha sido borrado correctamente`);
}

async function updateProduct(req, res) {
    const id = req.params.upd_id;
    const productChangesToApply = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, productChangesToApply, {
        new: true});
        console.log(updateProduct)
    if (!updatedProduct) return res.status(404).send('No se encuntro el Producto que desea modificar');
    return res.status(200).send(updatedProduct);
}
module.exports = {
    addProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct,
}