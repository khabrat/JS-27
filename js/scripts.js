(function() {
	'use strict'
	// Напишите функцию, которая выводит в HTML документ нумерованный список песен:
	var playList = [{
		author: "LED ZEPPELIN",
		song: "STAIRWAY TO HEAVEN"
	}, {
		author: "QUEEN",
		song: "BOHEMIAN RHAPSODY"
	}, {
		author: "LYNYRD SKYNYRD",
		song: "FREE BIRD"
	}, {
		author: "DEEP PURPLE",
		song: "SMOKE ON THE WATER"
	}, {
		author: "JIMI HENDRIX",
		song: "ALL ALONG THE WATCHTOWER"
	}, {
		author: "AC/DC",
		song: "BACK IN BLACK"
	}, {
		author: "QUEEN",
		song: "WE WILL ROCK YOU"
	}, {
		author: "METALLICA",
		song: "ENTER SANDMAN"
	}];

	function writeSongs(playList) {
		let h1 = document.createElement('h1'),
			container = document.querySelector('.container'),
			ol = document.createElement('ol');
		h1.innerHTML = 'Songs'
		container.appendChild(h1);
		container.appendChild(ol);
		for (let i = 0; i < playList.length; i++) {
			let li = document.createElement('li');
			li.innerHTML = playList[i].song;
			ol.appendChild(li);
		}
	}
	writeSongs(playList);
})();