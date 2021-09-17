const Event = require('../../database/models/Event');


exports.getController = async (req,res) => {

    const consult = await Event.findAll();

    const result = consult.map(event => {
        const { dataValues } = event;

        const {
            id,
            name,
            price,
            location,
        } = dataValues;

        return {
            id,
            name,
            price,
            location
        };
    })

    res.json(result)
}

exports.getEventByIdController = (req,res) => {
    const {id} = req.params;

    res.json({msg:`mensaje desde la busqueda por id ${id}`})
}

exports.getElementByCountryAndCity = (req,res) => {
    
    const { country, city } = req.query;
    

    if(country && city){
        return res.json(
            {
                msg:`Country: ${country}   City: ${city}`
            }
        )
    }

    if(country){
        return res.json({msg:`Country: ${country}`})
    }

    if(city){
        return res.json({msg:`City: ${city}`})
    }

    res.json({msg:'no data sent'})
}