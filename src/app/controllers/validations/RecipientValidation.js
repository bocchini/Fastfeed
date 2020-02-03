import * as Yup from 'yup';

class RecipientValidation {
  async validationStore(data) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string().required(),
      state: Yup.string()
        .required()
        .min(2)
        .max(2),
      city: Yup.string().required(),
      zip_code: Yup.string()
        .required()
        .min(9)
        .max(9),
    });

    return schema.isValid(data);
  }

  async validationUpdate(data) {
    const schema = Yup.object().shape({
      id: Yup.number()
        .positive()
        .required(),
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.string(),
      complement: Yup.string(),
      state: Yup.string()
        .min(2)
        .max(2),
      city: Yup.string(),
      zip_code: Yup.string()
        .min(9)
        .max(9),
    });

    return schema.isValid(data);
  }
}

export default new RecipientValidation();
