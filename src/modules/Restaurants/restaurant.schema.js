import z from 'zod';

import { extractValidationData } from '../../common/utils/extractErrorData.js';

const restaurantSchema = z.object({
  name: z.string().min(3).max(20),
  address: z.string().min(3),
  rating: z.number().min(1).max(10),
});

export const validateRestaurant = (data) => {
  const result = restaurantSchema.safeParse(data);

  const {
    hasError,
    errorMessages,
    data: restaurantData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    restaurantData,
  };
};
