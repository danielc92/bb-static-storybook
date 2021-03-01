var ghpages = require("gh-pages");

ghpages.publish(
  "build",
  {
    repo: "https://danielc92.github.io/bb-static-storybook/",
  },
  function (err) {}
);
