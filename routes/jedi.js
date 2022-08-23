const express = require('express');
const jediRouter = express.Router();
const Jedi = require('../models/jedi');

jediRouter.get('/view', async (req, res) => {
    try {
        const jedi = await Jedi.find();
        res.json(jedi)
    } catch (error) {
        res.json({message: error.message})
    }
});

jediRouter.get('/view/:jedi_id', async (req, res) => {

    const id = req.params.jedi_id
    try {
        const jedi = await Jedi.findById(id);

        if (!user) {
            res.status(404).json({message: 'Jedi not found'})
        } else {
            res.status(200).json(jedi)
        }
        
    } catch (error) {
        res.json({message: error.message})
    }
});


jediRouter.get('/add', (req, res) => {
    
});

jediRouter.post('/add', async (req, res) => {
    const jedi = new Jedi({
        name : 'Qui-Gon Jin',
        force: 6,
        position: 'Jedi Master'
    })
    try {
        let newJedi = await jedi.save();
        res.status(201).json(newJedi.name)
    } catch (error) {
        res.status(500).json({ message: error.message })
        
    }
});


jediRouter.patch('/update/:jedi_id', async (req, res) => {
    const update = {name: 'Qui-Gon Jin',force: 7,position: 'Jedi Master'}
    const id = req.params.jedi_id;
 
    const updated = await User.findOneAndUpdate(id,update,{new: true})
     
     try {

         res.status(200).json({message: "Success"});
 
     } catch (error) {
         res.status(500).json({ message: error.message })
 
     }
});


jediRouter.delete('/delete/:jedi_id', async (req, res) => {
    const id = req.params.jedi_id;

   const deleted = await Jedi.findOneAndDelete(id)
    
    try {
        res.status(200).json({message: "Success"});

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
});

module.exports= jediRouter;