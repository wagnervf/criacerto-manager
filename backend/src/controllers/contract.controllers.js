//Fuções de  CRUD do tipos_simulacoes

const ContractModel = require('../models/contract.model');



// exports.saveTipoSimulacao= async (req, res) => {
//   try {

//     const newTipoSimulacao = new ContractModel(req.body);

//     const TipoSimulacao = await newTipoSimulacao.save();
//     res.status(201).json({ message: 'Simulação criado com sucesso!', TipoSimulacao });


//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ error: 'Erro ao criar Simulação'.error });
//   }
// };




exports.getContract = async (req, res) => {
  console.log(res)
  ContractModel.find(function (err, tipos) {
    console.log(tipos)
    if (err) return handleError(err);

    res.status(201).json({ tipos });

  
  });
};


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



