import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
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
}

export default new RecipientController();
