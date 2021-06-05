module.exports = {
  presets: [
    [
      "next/babel",
      {
        "preset-env": {
          targets: "defaults",
          useBuiltIns: "entry",
          corejs: 3,
        },
      },
    ],
  ],
  plugins: ["styled-components"],
};
