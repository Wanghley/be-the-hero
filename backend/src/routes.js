const express = require('express');
const { celebrate,Segments,Joi } = require('celebrate');

const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


routes.post('/sessions',SessionController.create);
//List all ongs signed up
routes.get('/ongs',OngController.index);

//Route to add a new ong
routes.post('/ongs', celebrate({
    //Validação da informação recebida
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(14),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}),OngController.create);

//Route to add a new incident
routes.post('/incidents',IncidentController.create);
routes.get('/incidents',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),IncidentController.index);

routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
       id: Joi.number().required(), 
    })
}),IncidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}),ProfileController.index);
/**
 * EXAMPLES OF USE ROTES
 */

/*
routes.get('/',(req,res)=>{
    return res.json({
        'evento': 'Semana'
    });
});

routes.get('/users',(req,res)=>{
    const queries = req.query; //query params

    console.log(queries);

    res.json({
        'event':'user created sucessfull',
        'name':'omnistack 11.0'
    });
});

//FILTRO DE ROTA POR ID
routes.get('/users/:id',(req,res)=>{
    const queries = req.query; //query params
    const id = req.params; //route params

    console.log(queries);
    console.log(id)

    res.json({
        'event':'user created sucessfull',
        'name':'omnistack 11.0'
    });
});

//REQUEST params
routes.post('/newuser',(req,res)=>{
    const body = req.body; //request params

    console.log(body);

    res.json({
        'event':'user created sucessfull',
        'name':'omnistack 11.0'
    });
});*/




module.exports=routes; //exportar variáveis