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
    res.render('add,ejs')
});

jediRouter.post('/add', async (req, res) => {
    const jedi = new Jedi({
        name : req.params.txtname,
        force: req.params.txtforce,
        position: req.params.txtpositions
    })
    try {
        let newJedi = await jedi.save();
        res.status(201).json(newJedi.name)
    } catch (error) {
        res.status(500).json({ message: error.message })
        
    }
});


jediRouter.get('/update/:jedi_id', async (req, res) => {
    const id = req.params.jedi_id;

   const updated = await Jedi.findById(id)
   res.render('update.ejs',{jediName:Jedi.name,jediForce:Jedi.force,jediRank:Jedi.position})
});

jediRouter.patch('/update/:jedi_id', async (req, res) => {
    const update = {name: req.params.txtname,surname: req.params.txtsurname,date: req.params.releaseDate}
    const id = req.params.jedi_id;
 
    const updated = await User.findOneAndUpdate(id,update,{new: true})
     
     try {

         res.status(200).json({message: "Success"});
 
     } catch (error) {
         res.status(500).json({ message: error.message })
 
     }
});


jediRouter.get('/delete/:jedi_id', async (req, res) => {
    const id = req.params.jedi_id;

   const deleted = await Jedi.findById(id)
    res.render('delete.ejs',{jediName:Jedi.name,jediForce:Jedi.force,jediRank:Jedi.position})
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