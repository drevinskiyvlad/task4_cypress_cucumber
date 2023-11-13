const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const esbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
    projectId: '7ienfa',
    viewportWidth: 414,
    viewportHeight: 896,
    e2e: {
        specPattern: "cypress/e2e/features/*.feature",
        baseUrl: "https://www.saucedemo.com/",
        chromeWebSecurity: false,
        async setupNodeEvents(on, config) {
            await addCucumberPreprocessorPlugin(on, config);
            const preprocessor = esbuildPlugin.default || esbuildPlugin;
            on(
                "file:preprocessor",
                createBundler({
                    plugins: [preprocessor(config)],
                })
            );
            return config;
        },
    },
});
