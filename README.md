# dbapp-mobile

## Getting started

running environment:
\*Requires Node (https://nodejs.org/en/download/)

- cd dbapp
- yarn

There is requirement to export right module in App.tsx file

- export default function App() - to run the mobile app
- export { default } from './src/storybook'; - to run the components docs.

After leaving one module exported as default in App.tsx run:

- yarn start

Register module does not work due to no BE solution. You can Sign In to the app by using

- `admin/admin`

credentials.

## App usage

dbapp is mobile app which allows user to insert data related to sugar level and injected insulin amount. The app will give action hints to diabetic which inform user if he should consume causal or some extra portion of hydrates in case of hypoglicemic. The system also returns information about range of sugar - if the sugar level is low, fine or too high!

## Code maintenance

#### MVP

- Back-end side services: sign in, sign up, storage of measurements, storage of injection history, tests coverage
- Front-end: Persisting auth token, replacing context `setLoggedUser()` to run conditionally depeding on back-end response, tests coverage

#### Future release

- Back-end side: implementing ML algorithm to adjust `getCarboRequirement()` function for specyfic user requirements
- Front-end side: adjusting views to make it possible to see more records or measurements and injections, fetch measurement and injection data with BE
