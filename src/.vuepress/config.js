const { description } = require("../../package");

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: "Laravel Engine",
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    theme: "vt",
    themeConfig: {
        repo: "",
        editLinks: false,
        docsDir: "",
        editLinkText: "",
        lastUpdated: false,
        nav: [
            {
                text: "Docs",
                link: "/docs/",
            },
            {
                text: "Fields",
                link: "/fields/",
            },
        ],
        sidebar: [
            {
                title: "Docs",
                path: '/docs/',
                children: ["/docs/", "/docs/getting-started"],
                sidebarDepth: 2,
            },
            {
                title: "Fields",
                path: '/fields/',
                children: ["/fields/", "/fields/text"],
                sidebarDepth: 2,
            },
        ],
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
