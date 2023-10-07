const promocaoModel = require('./promocaoController');

// Criar uma nova promoção
exports.createPromocao = async (req, res) => {
  try {
    const novaPromocao = new promocaoModel(req.body);
    const promocaoSalva = await novaPromocao.save();
    res.status(201).json(promocaoSalva);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar a promoção' });
  }
};

// Atualizar uma promoção existente
exports.updatePromocao = async (req, res) => {
  try {
    const { id } = req.params;
    const promocaoAtualizada = await promocaoModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(promocaoAtualizada);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a promoção' });
  }
};

// Recuperar todas as promoções
exports.getAllPromocoes = async (req, res) => {
  try {
    const promocoes = await promocaoModel.find();
    res.json(promocoes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar as promoções' });
  }
};

// Recuperar uma promoção por ID
exports.getPromocaoById = async (req, res) => {
  try {
    const { id } = req.params;
    const promocao = await promocaoModel.findById(id);
    if (!promocao) {
      return res.status(404).json({ error: 'Promoção não encontrada' });
    }
    res.json(promocao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar a promoção' });
  }
};

// Remover uma promoção
exports.deletePromocao = async (req, res) => {
  try {
    const { id } = req.params;
    await promocaoModel.findByIdAndRemove(id);
    res.json({ message: 'Promoção removida com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover a promoção' });
  }
};
