const platos = [
    {
        id: 1,
        nombre: "Carpaccio fresco",
        detalle: "Entrada Carpaccio de salmón con cítricos",
        precio: 65.50,
        imagen: "/images/Carpaccio-de-salmon.jpg"
    },
    {
        id: 2,
        nombre: "Risotto de berenjena",
        detalle: "Risotto de berenjena y queso de cabra",
        precio: 47.00,
        imagen: "/images/Risotto-berenjena-queso-cabra.jpg"
    },
    {
        id: 3,
        nombre: "Mousse de arroz",
        detalle: "Mousse de arroz con leche y aroma de azahar",
        precio: 27.50,
        imagen: "/images/Mousse-de-arroz-con-leche.jpg"
    },
    {
        id: 4,
        nombre: "Espárragos blancos",
        detalle: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        precio: 37.50,
        imagen: "/images/esparragos.png"
    }
]


module.exports = {
    index : (req , res) => {
        return res.render('index', {menu:platos} );
    },
    detalle : (req , res) => {
        const platoEncontrado = platos.find(elemento => elemento.id == req.params.id )
        if (platoEncontrado) {
            return res.render('detalleMenu', {plato:platoEncontrado} );
            } 
            else return res.render('ERROR 404 NOT FOUND');
        }

    }

