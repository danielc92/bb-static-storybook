# Deploy instructions

Build storybook static in web repo
`yarn build-storybook -s ./assets`

Copy contents of the generated `storybook-static` folder into the `build` folder of this repo.

Run the deploy script.

`node publish.js`

Wait a few minutes and visit the hosted url. At the moment it is:
`https://danielc92.github.io/bb-static-storybook`