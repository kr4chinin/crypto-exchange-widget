# Crypto Exchange Widget ₿

This repo represents a technical assignment which requires to create a basic crypto exchange widget. This widget feature over 200 real cryptocurrencies and real exchange rates. Works both ways and has an ability to reverse the exchange.

## Start application

`VITE_BASE_API_URL` environment variable is required to run the application. Should be specified in the `.env` or `.env.local` file/s in the root directory.

```bash
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
