(function() {
	'use strict';

	Lampa.Platform.tv();

	function _0x2de6(_0x30bba5, _0x439b89) {
		var _0x1cb13d = _0x1dcc();
		return _0x2de6 = function (_0x33a86f, _0xa7027e) {
			_0x33a86f = _0x33a86f - 0x79;
			var _0x313236 = _0x1cb13d[_0x33a86f];
			return _0x313236;
		}, _0x2de6(_0x30bba5, _0x439b89);
	}

	(function (_0x126888, _0x480d31) {
		var _0x2f804a = _0x2de6,
			_0x4cb6c4 = _0x126888();
		while (!![]) {
			try {
				var _0x3744fc = -parseInt(_0x2f804a(0x84)) / 0x1 * (parseInt(_0x2f804a(0x7b)) / 0x2) + -parseInt(_0x2f804a(0x7f)) / 0x3 + parseInt(_0x2f804a(0x8b)) / 0x4 * (parseInt(_0x2f804a(0x8e)) / 0x5) + -parseInt(_0x2f804a(0x80)) / 0x6 + -parseInt(_0x2f804a(0x88)) / 0x7 + -parseInt(_0x2f804a(0x9b)) / 0x8 + parseInt(_0x2f804a(0x8a)) / 0x9;
				if (_0x3744fc === _0x480d31) break;
				else _0x4cb6c4['push'](_0x4cb6c4['shift']());
			} catch (_0x2b557c) {
				_0x4cb6c4['push'](_0x4cb6c4['shift']());
			}
		}
	}(_0x1dcc, 0x252bc), (function () {
		var _0x32b0fb = setInterval(function () {
			if (typeof Lampa !== 'undefined') {
				clearInterval(_0x32b0fb);

				try {
					// Проверка наличия Manifest и метода get
					if (Lampa['Manifest'] && typeof Lampa['Manifest']['get'] === 'function') {
						var scriptUrl = Lampa['Manifest']['get']('online_script', '');
						if (scriptUrl) {
							Lampa['Utils']['putScriptAsync'](scriptUrl, function () {
								console.log('Скрипт успешно загружен:', scriptUrl);
							});
						} else {
							Lampa['Noty'].show('Ошибка доступа: скрипт не найден');
						}
					} else {
						Lampa['Noty'].show('Ошибка: Manifest или метод get отсутствует');
					}
				} catch (error) {
					// Обработка ошибок
					Lampa['Noty'].show('Ошибка доступа: ' + error.message);
				}
			}
		}, 200);
	}()));

	function _0x1dcc() {
		var _0x52efb3 = ['toString', '1171128rczVrY', 'set', 'show', '26BQRCLQ', 'Noty', 'Ошибка\x20доступа', 'putScriptAsync', '287892GtpFmK', '1133190oXjfKB', 'bind', 'return\x20(function()\x20', 'search', '6838TszSrx', 'tyusdt', 'undefined', 'constructor', '1881313NcTCco', '__proto__', '5932773CcQUfV', '22112OAYCTg', '(((.+)+)+)+$', 'prototype', '255dZfZnu', 'bylampa', 'origin', 'Utils', 'Storage', 'Manifest', 'get', 'log', 'lampac_unic_id', 'http://185.87.48.42:2627/online.js', 'trace', 'apply'];
		_0x1dcc = function () {
			return _0x52efb3;
		};
		return _0x1dcc();
	}
})();
