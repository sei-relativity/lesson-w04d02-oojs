'use strict';

import ATM from './atm.js';

const account = new ATM('checking' , 1000);
account.deposit(500)
account.withdraw(600);