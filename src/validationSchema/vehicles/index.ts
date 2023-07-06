import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  type: yup.string().required(),
  model: yup.string().required(),
  availability: yup.boolean().required(),
  location: yup.string().required(),
  organization_id: yup.string().nullable(),
});
