module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	ignorePatterns: [".next", "node_modules", "vendor"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:prettier/recommended", // Should be the last element in array
	],
	rules: {
		// Includes .prettierrc.js rules
		"prettier/prettier": ["error", {}, { usePrettierrc: true }],

		// We will use TypeScript's types for component props instead
		"react/prop-types": "off",

		// No need to import React when using Next.js
		"react/react-in-jsx-scope": "off",

		// This rule is not compatible with Next.js's <Link /> components
		"jsx-a11y/anchor-is-valid": "off",

		// Allow unused vars with _ prefix
		"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

		// I suggest this setting for requiring return types on functions only where useful
		"@typescript-eslint/explicit-function-return-type": [
			"warn",
			{
				allowExpressions: true,
				allowConciseArrowFunctionExpressionsStartingWithVoid: true,
			},
		],
	},
};
