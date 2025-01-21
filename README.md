# Crypto Exchange Widget ₿

[🇺🇸 EN](https://github.com/kr4chinin/crypto-exchange-widget/blob/master/README.md) | [🇷🇺 RU](https://github.com/kr4chinin/crypto-exchange-widget/blob/master/README_RU.md)

[Ссылка на деплой 🔗](https://crypto-exchange-widget.vercel.app/)

This repo represents a technical assignment which requires to create a basic crypto exchange widget. This widget feature over 200 real cryptocurrencies and real exchange rates. Works both ways and has an ability to reverse the exchange.

![widget-demo](https://github.com/user-attachments/assets/5452aff0-8094-44fb-bba9-076c45183e27)

## Start application

`VITE_BASE_API_URL` environment variable is required to run the application. Should be specified in the `.env` or `.env.local` file/s in the root directory.

```bash
# Clone the repo to an empty directory
gh repo clone kr4chinin/crypto-exchange-widget .

# Install dependencies
npm install

# Start application
npm start
```

## Functional requirements

### Main functionality

- [x] Exchange form with input fields for source and target currency amounts
- [x] Ability to select source and target currency pairs from available cryptocurrencies
- [x] Display of current exchange rate
- [x] Automatic amount calculation when entering values in any of the fields

### Additional features

- [x] Search by cryptocurrency name and symbol in the currency dropdown list
- [x] Validation of entered values, only positive numbers allowed
- [x] Loading spinner when receiving rates in each of the numeric inputs
- [x] Reverse button that swaps cryptocurrencies when clicked

## Technical requirements

### Technical stack

- React, TypeScript
- Vite
- Mantine
- Mobx
- styled-components

<img width="634" alt="widget" src="https://github.com/user-attachments/assets/96afde29-e223-482f-85a1-b25a0f2794e1" />