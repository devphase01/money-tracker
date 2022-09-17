import { FaBus, FaWineGlassAlt } from 'react-icons/fa';
import { GiShoppingBag, GiHamburgerMenu } from 'react-icons/gi';
import { SiBitcoinsv } from 'react-icons/si';

class RecordService {
	iconCategory(category: string) {
		switch (category.toLocaleLowerCase()) {
			case 'bar, alcohol':
				return { RecordIcon: FaWineGlassAlt, IconColor: '#F44336' };

			case 'transportation':
				return { RecordIcon: FaBus, IconColor: '#78909C' };

			case 'shopping':
				return { RecordIcon: GiShoppingBag, IconColor: '#4FC3F7' };

			case 'investment':
				return { RecordIcon: SiBitcoinsv, IconColor: '#FF4081' };

			default:
				return { RecordIcon: GiHamburgerMenu, IconColor: '#78909C' };
		}
	}

	amountFormat(amount: number) {

		return new Intl.NumberFormat('ua-UA', {
			style: 'currency',
			currency: 'UAH',
		}).format(amount).split(',').join(' ')
			.replace('UAH', '')
			.trim();
	}

}

export default new RecordService();
