import { api } from '@/lib/axios'

export interface RegisterResataurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterResataurantBody) {
  await api.post('/restaurants', { restaurantName, managerName, email, phone })
}
