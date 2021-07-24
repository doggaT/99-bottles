'use strict';

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
	const lyricsDiv = document.getElementById('lyrics');

	for (let i = 99; i >= 0; --i) {
		let newLyricLine1 = document.createElement('p');
		let newLyricLine2 = document.createElement('p');

		newLyricLine1.innerHTML = `${i} bottles of beer on the wall, ${i} bottles of beer`;
		newLyricLine2.innerHTML = `Take one down and pass it around, ${
			i - 1
		} bottles of beer on the wall`;

		lyricsDiv.appendChild(newLyricLine1);
		lyricsDiv.appendChild(newLyricLine2);

		if (i == 3) {
			--i;
			let newLyricLine1 = document.createElement('p');
			let newLyricLine2 = document.createElement('p');
			newLyricLine1.innerHTML = `${i} bottles of beer on the wall, ${i} bottles of beer`;
			newLyricLine2.innerHTML = `Take one down and pass it around, ${
				i - 1
			} bottle of beer on the wall`;
			lyricsDiv.appendChild(newLyricLine1);
			lyricsDiv.appendChild(newLyricLine2);
		}

		if (i === 2) {
			--i;
			let newLyricLine1 = document.createElement('p');
			let newLyricLine2 = document.createElement('p');
			newLyricLine1.innerHTML = `${i} bottle of beer on the wall, ${i} bottle of beer`;
			newLyricLine2.innerHTML = `Take one down and pass it around, no more bottles of beer on the wall`;
			lyricsDiv.appendChild(newLyricLine1);
			lyricsDiv.appendChild(newLyricLine2);
		}

		if (i === 1) {
			--i;
			let newLyricLine1 = document.createElement('p');
			let newLyricLine2 = document.createElement('p');
			newLyricLine1.innerHTML = `No more bottles of beer on the wall, no more bottles of beer`;
			newLyricLine2.innerHTML = `Go to the store and buy some more, 99 bottles of beer on the wall`;
			lyricsDiv.appendChild(newLyricLine1);
			lyricsDiv.appendChild(newLyricLine2);
		}
	}
});
