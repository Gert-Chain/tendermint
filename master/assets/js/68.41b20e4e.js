(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{632:function(e,t,o){"use strict";o.r(t);var s=o(1),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"docs-build-workflow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docs-build-workflow"}},[e._v("#")]),e._v(" Docs Build Workflow")]),e._v(" "),o("p",[e._v("The documentation for Tendermint Core is hosted at:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://docs.tendermint.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.tendermint.com/"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("built from the files in this "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/master/docs",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("docs")]),e._v(" directory for "),o("code",[e._v("master")]),o("OutboundLink")],1),e._v("\nand other supported release branches.")]),e._v(" "),o("h2",{attrs:{id:"how-it-works"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" How It Works")]),e._v(" "),o("p",[e._v("There is a "),o("a",{attrs:{href:"https://github.com/tendermint/docs/actions/workflows/deployment.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Actions workflow"),o("OutboundLink")],1),e._v("\nin the "),o("code",[e._v("tendermint/docs")]),e._v(" repository that clones and builds the documentation\nsite from the contents of this "),o("code",[e._v("docs")]),e._v(" directory, for "),o("code",[e._v("master")]),e._v(" and for the\nbackport branch of each supported release. Under the hood, this workflow runs\n"),o("code",[e._v("make build-docs")]),e._v(" from the "),o("a",{attrs:{href:"../Makefile#L214"}},[e._v("Makefile")]),e._v(".")]),e._v(" "),o("p",[e._v("The list of supported versions are defined in "),o("a",{attrs:{href:"./.vuepress/config.js"}},[o("code",[e._v("config.js")])]),e._v(",\nwhich defines the UI menu on the documentation site, and also in\n"),o("a",{attrs:{href:"./versions"}},[o("code",[e._v("docs/versions")])]),e._v(", which determines which branches are built.")]),e._v(" "),o("p",[e._v("The last entry in the "),o("code",[e._v("docs/versions")]),e._v(" file determines which version is linked\nby default from the generated "),o("code",[e._v("index.html")]),e._v(". This should generally be the most\nrecent release, rather than "),o("code",[e._v("master")]),e._v(", so that new users are not confused by\ndocumentation for unreleased features.")]),e._v(" "),o("h2",{attrs:{id:"readme"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#readme"}},[e._v("#")]),e._v(" README")]),e._v(" "),o("p",[e._v("The "),o("RouterLink",{attrs:{to:"/"}},[e._v("README.md")]),e._v(" is also the landing page for the documentation\non the website. During the Jenkins build, the current commit is added to the bottom\nof the README.")],1),e._v(" "),o("h2",{attrs:{id:"config-js"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#config-js"}},[e._v("#")]),e._v(" Config.js")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"./.vuepress/config.js"}},[e._v("config.js")]),e._v(" generates the sidebar and Table of Contents\non the website docs. Note the use of relative links and the omission of\nfile extensions. Additional features are available to improve the look\nof the sidebar.")]),e._v(" "),o("h2",{attrs:{id:"links"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[e._v("#")]),e._v(" Links")]),e._v(" "),o("p",[o("strong",[e._v("NOTE:")]),e._v(" Strongly consider the existing links - both within this directory\nand to the website docs - when moving or deleting files.")]),e._v(" "),o("p",[e._v("Links to directories "),o("em",[e._v("MUST")]),e._v(" end in a "),o("code",[e._v("/")]),e._v(".")]),e._v(" "),o("p",[e._v("Relative links should be used nearly everywhere, having discovered and weighed the following:")]),e._v(" "),o("h3",{attrs:{id:"relative"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#relative"}},[e._v("#")]),e._v(" Relative")]),e._v(" "),o("p",[e._v("Where is the other file, relative to the current one?")]),e._v(" "),o("ul",[o("li",[e._v("works both on GitHub and for the VuePress build")]),e._v(" "),o("li",[e._v("confusing / annoying to have things like: "),o("code",[e._v("../../../../myfile.md")])]),e._v(" "),o("li",[e._v("requires more updates when files are re-shuffled")])]),e._v(" "),o("h3",{attrs:{id:"absolute"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#absolute"}},[e._v("#")]),e._v(" Absolute")]),e._v(" "),o("p",[e._v("Where is the other file, given the root of the repo?")]),e._v(" "),o("ul",[o("li",[e._v("works on GitHub, doesn't work for the VuePress build")]),e._v(" "),o("li",[e._v("this is much nicer: "),o("code",[e._v("/docs/hereitis/myfile.md")])]),e._v(" "),o("li",[e._v("if you move that file around, the links inside it are preserved (but not to it, of course)")])]),e._v(" "),o("h3",{attrs:{id:"full"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#full"}},[e._v("#")]),e._v(" Full")]),e._v(" "),o("p",[e._v("The full GitHub URL to a file or directory. Used occasionally when it makes sense\nto send users to the GitHub.")]),e._v(" "),o("h2",{attrs:{id:"building-locally"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building-locally"}},[e._v("#")]),e._v(" Building Locally")]),e._v(" "),o("p",[e._v("Make sure you are in the "),o("code",[e._v("docs")]),e._v(" directory and run the following commands:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cm0gLXJmIG5vZGVfbW9kdWxlcwo="}}),e._v(" "),o("p",[e._v("This command will remove old version of the visual theme and required packages. This step is optional.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bnBtIGluc3RhbGwK"}}),e._v(" "),o("p",[e._v("Install the theme and all dependencies.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bnBtIHJ1biBzZXJ2ZQo="}}),e._v(" "),o("p",[e._v("Run "),o("code",[e._v("pre")]),e._v(" and "),o("code",[e._v("post")]),e._v(" hooks and start a hot-reloading web-server. See output of this command for the URL (it is often "),o("a",{attrs:{href:"https://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://localhost:8080"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("p",[e._v("To build documentation as a static website run "),o("code",[e._v("npm run build")]),e._v(". You will find the website in "),o("code",[e._v(".vuepress/dist")]),e._v(" directory.")]),e._v(" "),o("h2",{attrs:{id:"search"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#search"}},[e._v("#")]),e._v(" Search")]),e._v(" "),o("p",[e._v("We are using "),o("a",{attrs:{href:"https://www.algolia.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Algolia"),o("OutboundLink")],1),e._v(" to power full-text search. This uses a public API search-only key in the "),o("code",[e._v("config.js")]),e._v(" as well as a "),o("a",{attrs:{href:"https://github.com/algolia/docsearch-configs/blob/master/configs/tendermint.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("tendermint.json"),o("OutboundLink")],1),e._v(" configuration file that we can update with PRs.")]),e._v(" "),o("h2",{attrs:{id:"consistency"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consistency"}},[e._v("#")]),e._v(" Consistency")]),e._v(" "),o("p",[e._v("Because the build processes are identical (as is the information contained herein), this file should be kept in sync as\nmuch as possible with its "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/DOCS_README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("counterpart in the Cosmos SDK repo"),o("OutboundLink")],1),e._v(".")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);