import * as Yup from 'yup';

class DeliveryManagerValidation {
  async validationStore(data) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    return schema.isValid(data);
  }

  async validationUpdate(data) {
    const schema = Yup.object().shape({
      id: Yup.number()
        .positive()
        .required(),
      name: Yup.string(),
      email: Yup.string().email(),
    });

    return schema.isValid(data);
  }
}

export default new DeliveryManagerValidation();
