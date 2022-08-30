const language = require('./language.js');
const Folder = require('./folder.js');

genshin = {};

genshin.language = genshin.languages = language;
genshin.folder = genshin.folders = Folder;

module.exports = genshin;