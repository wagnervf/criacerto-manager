//Fuções de  CRUD Monta Natural 

const MontaNaturalModel = require("../models/montaNatural.model");



exports.saveMontaNatural = async (req, res) => {
  try {
    const dados = req.body;


   // res.status(201).json( req.body );

    const newMontaNatural = new MontaNaturalModel(req.body);

    const MontaNatural = await newMontaNatural.save();

    res.status(201).json({ message: 'Dados da Monta Natural com sucesso!', MontaNatural });


  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Erro ao salvar os dados da Monta Natural'.error });
  }
};





// exports.getTiposSimulacoes = async (req, res) => {
//   TiposSimulacoesModel.find(function (err, tipos) {
//     if (err) return handleError(err);

//     res.status(201).json({ tipos });

  
//   });
// };

// exports.getTiposSimulacoes = async (req, res) => {
//   TiposSimulacoesModel.find({
//     field: query,
//   }, (err, docs) => {
//     console.log(docs);
//    // res.status(201).json({ message: 'Evento!', err });

//     if (err) {
//       console.log(`Error: ` + err)
//     } else {
//       if (docs.length === 0) {
//         console.log("message")
//         res.status(404).json({ message: 'Nada foi encontrado' });
//       } else {
//         res.status(201).json({ message: 'Evento!', docs });
//       }
//     }


//   });
// };

/*
exports.findEvento = async (req, res) => {
  eventoModel.find({
    field: query,
  }, (err, docs) => {
    console.log(docs);
    res.status(201).json({ message: 'Evento!', err });

    if (err) {
      console.log(`Error: ` + err)
    } else {
      if (docs.length === 0) {
        console.log("message")
        res.status(404).json({ message: 'Nada foi encontrado' });
      } else {
        res.status(201).json({ message: 'Evento!', docs });
      }
    }


  });
};
*/



