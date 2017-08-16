/**
 * 使用cheerio在后端处理html文档
 * 运行：node cheerio.js
 */

const cheerio = require('cheerio');
const $ = cheerio.load('<h2 class="title">Hello world</h2>');

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

console.log($.html());
console.log($.text());
console.log($('h2').hasClass('welcome'));
