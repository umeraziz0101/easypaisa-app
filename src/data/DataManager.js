import {IconImages} from '../utils/assets/Icons';
import data from './data.json';
export const appDetail = data.app;
export const users = data.users;
export const promotions = data.promotions;
export const cashPoints = data.cashPoints;
export const cashPointsBVS = data.cashPointsBVS;
export const carouselItems = data.carouselItems.map(item => ({
  id: item.id,
  title: item.title,
  icon: IconImages[item.iconKey],
}));
