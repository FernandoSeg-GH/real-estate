const sitemap= require('nextjs-sitemap-generator');
const path= require('path');

sitemap({
    baseUrl: 'https://can-vai.com/',
    pagesDirectory: path.resolve(__dirname,'../pages/'),
    targetDirectory: path.resolve(__dirname, '../pages/'),
    ignoredExtensions: ['images'],
    ignoredPaths: [
        '404',
        'favicon',
        'index'
    ],
    extraPaths: [
        '/'
    ]
})