(function() { 'use strict'; var updateplugins = false; var plugins = Lampa.Storage.get('plugins', '[]') plugins.forEach(function(plug) { if (plug.url.indexOf('skaztv.online') >= 0) { updateplugins = true; plug.url = (plug.url + '').replace('https://v42z.github.io/plugins/all.js', 'https://lampaplugins.github.io/store/store.js'); plug.url = (plug.url + '').replace('https://v42z.github.io/plugins/all.js', 'https://lampaplugins.github.io/store/store.js'); } if (plug.url.indexOf('skaz.tv') >= 0) { updateplugins = true; plug.url = (plug.url + '').replace('https://v42z.github.io/plugins/all.js', 'https://lampaplugins.github.io/store/store.js'); plug.url = (plug.url + '').replace('https://v42z.github.io/plugins/all.js', 'https://lampaplugins.github.io/store/store.js'); } }) if (updateplugins) Lampa.Storage.set('plugins', plugins); $.getScript('https://lampaplugins.github.io/store/store.js'); })();
