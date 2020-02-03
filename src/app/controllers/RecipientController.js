import Recipient from '../models/Recipient';
import RecipientValidation from './validations/RecipientValidation';

class RecipientController {
  async store(req, res) {
    if (!(await RecipientValidation.validationStore(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const recifientExist = await Recipient.findOne({
      where: {
        name: req.body.name,
      },
    });

    if (recifientExist) {
      return res.status(400).json({ Error: 'This name exists with recipient' });
    }
    const recipient = await Recipient.create(req.body);
    return res.json(recipient);
  }

  async update(req, res) {
    if (!(await RecipientValidation.validationUpdate(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipient = await Recipient.findByPk(req.body.id);
    if (!recipient) {
      return res.status(400).json({ error: 'Recipient don´t exists!' });
    }
    const recipientUpdate = await recipient.update(req.body);
    return res.json(recipientUpdate);
  }
}

export default new RecipientController();
