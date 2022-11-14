const Tugas = require("../models/Tugas")

module.exports = {
  getAllTugas: async (req, res) => {
    const tugas = await Tugas.find().populate("user", "name")

    res.json({
      message: "success get data",
      data: tugas
    })
  }, 

  getTugasByID: (req, res) => {

  },

  addTugas: (req, res) => {
    const data = req.body
    const tugas = new Tugas(data)
    tugas.save()

    res.json({
      message: "tugas has been created"
    })
  },

  deleteTugasByID: async (req, res) => {
    try {
      const data = req.body
      const tugas = await Tugas.deleteOne({id: data.id})

      res.json({
        message: "success get data user",
        data: users
      })
    } catch (error) {
      console.log(error);
    }
  },

  updateTugasByID: async (req, res) => {
      try {
        const users = await Tugas.findOne({ _id: req.params.id });
  
        if (Tugas) {
          await Tugas.updateOne({
            title: req.body.title,
            content: req.body.content,
            user: verified.id,
          });
  
          await Tugas.save();
  
          res.status(201).json({
            message: " data has been update ",
          });
        }
      } catch (error) {
        res.status(401).json({
          message: " cannot be updated",
        });
      }
  },
}