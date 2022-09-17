export const accountsData = [
  {
    id: 'acc-1',
    name: 'Cash',
    amount: 600,
    type: 'Cash',
    color: '#039BE5',
    currency: 'UAH'
  },
  {
    id: 'acc-2',
    name: 'Credit',
    amount: 1600,
    type: 'Credit',
    color: '#AB47BC',
    currency: 'UAH',
  },
  {
    id: 'acc-3',
    name: 'Scholarship',
    amount: 2340,
    type: 'Credit',
    color: '#6a1b9a',
    currency: 'UAH',
  }
];

export const recordsData = [
  {
    id: 1,
    category: 'Bar, Alcohol',
    type: 'Expense',
    account: 'Cash',
    amount: 55,
    currency: 'UAH',
    date: '18 hours ago'
  },
  {
    id: 2,
    category: 'Transportation',
    type: 'Expense',
    account: 'Cash',
    amount: 15,
    currency: 'UAH',
    date: '14 hours ago'
  },
  {
    id: 3,
    category: 'Shopping',
    type: 'Expense',
    account: 'Cash',
    amount: 1500,
    currency: 'UAH',
    date: '14 hours ago'
  },
  {
    id: 4,
    category: 'Entertainment',
    type: 'Expense',
    account: 'Cash',
    amount: 15,
    currency: 'UAH',
    date: '14 hours ago'
  },
  {
    id: 5,
    category: 'Investment',
    type: 'Income',
    account: 'Cash',
    amount: 1370,
    currency: 'UAH',
    date: '14 hours ago'
  },
  {
    id: 6,
    category: 'Transportation',
    type: 'Expense',
    account: 'Cash',
    amount: 15,
    currency: 'UAH',
    date: '14 hours ago'
  },
];

export const CashFlowData = {
  income: 1300,
  expense: 1700,
  date: '4 September',
  currency: 'UAH',
};

export const ExpensesData = {
  labels: [
    'Shopping',
    'Bar, Alcohol',
    'Investment',
    'Entertainment',
    'Transportation'
  ],
  datasets: [{
    data: [1500, 55, 1370, 140, 30],
    backgroundColor: [
      '#4FC3F7',
      '#F44336',
      '#FF4081',
      '#78909C',
      '#64DD17'
    ],
    cutout: 65
  }],
};

import { FaBus, FaWineGlassAlt, FaCoins } from 'react-icons/fa';
import { GiShoppingBag, GiHamburgerMenu } from 'react-icons/gi';
import { SiBitcoinsv } from 'react-icons/si';


export const tableTemplate = [
  {
    icon: FaWineGlassAlt,
    category: 'Bar, Alcohol',
    current: 0,
    previous: 0,
    currency: 'UAH',
    color: '#F44336'
  },
  {
    icon: GiShoppingBag,
    category: 'Shopping',
    current: 0,
    previous: 0,
    currency: 'UAH',
    color: '#4FC3F7'
  },
  {
    icon: SiBitcoinsv,
    category: 'Investment',
    current: 0,
    previous: 0,
    currency: 'UAH',
    color: '#FF4081'
  },
  {
    icon: FaBus,
    category: 'Transportation',
    current: 0,
    previous: 0,
    currency: 'UAH',
    color: '#78909C'
  },
  {
    icon: GiHamburgerMenu,
    category: 'Other',
    current: 0,
    previous: 0,
    currency: 'UAH',
    color: '#78909C'
  },
];

export const tableIncomeTemplate = [
  {
    icon: FaCoins,
    category: 'Income',
    current: 0,
    previous: 0,
    currency: 'UAH',
    color: '#FBC02D'
  }
];