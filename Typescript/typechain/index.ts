console.log("hello");{
    "compilerOptions": {
        "module": "CommonJS",
        "target": "ES2020",
        "sourceMap": true
    },
    "include": ["index.ts"],
    "exclude": ["node_modules"],
    "scripts": {
        "start": "node index.js",
        "prestart": "tsc"
    }
}