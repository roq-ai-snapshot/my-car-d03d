import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  status: yup.string().required(),
  user_id: yup.string().nullable(),
  vehicle_id: yup.string().nullable(),
});
