import DeliveryManagement from '../models/DeliveryManagement';
import DeliveryManagerValidation from './validations/DeliveryManagerValidation';

class DeliveryManagementController {
  async store(req, res) {
    if (!(await DeliveryManagerValidation.validationStore(req.body))) {
      return res.status(400).json({ error: 'Validation errors' });
    }
    const deliveryExists = await DeliveryManagement.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (deliveryExists) {
      return res.status(400).json({ error: 'Delivey exists' });
    }
    const deliveryManagement = await DeliveryManagement.create(req.body);
    return res.json(deliveryManagement);
  }

  async update(req, res) {
    if (!(await DeliveryManagerValidation.validationUpdate(req.body))) {
      return res.status(400).json({ Error: 'Validation errors' });
    }
    const deliverFind = await DeliveryManagement.findByPk(req.body.id);

    if (!deliverFind) {
      return res.status(400).json({ error: 'This deliver don´t exists' });
    }
    const deliverUpdate = await deliverFind.update(req.body);
    return res.json(deliverUpdate);
  }

  async index(req, res) {
    const { page } = req.query;
    const listDeliverys = await DeliveryManagement.findAll({
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(listDeliverys);
  }

  async delete(req, res) {
    const deleteDelivery = await DeliveryManagement.findByPk(req.params.id);
    if (!deleteDelivery) {
      return res.status(400).json({ Error: 'Delivery don´t exists' });
    }
    await deleteDelivery.destroy();
    return res.json({ OK: 'Delivery detroyed' });
  }
}

export default new DeliveryManagementController();
