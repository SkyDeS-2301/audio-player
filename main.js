const musicData = [
	{
		id: 1,
		title: 'Welcome',
		images: './images/welcome.jpeg',
		path: './audio/welcome.mp3',
		duration: '2:44',
	},
	{
		id: 2,
		title: 'Shiny',
		images: './images/shiny.jpeg',
		path: './audio/shiny.mp3',
		duration: '3:05',
	},
	{
		id: 3,
		title: 'So High',
		images: './images/so-high.jpeg',
		path: './audio/so-high.mp3',
		duration: '3:22',
	},
	{
		id: 4,
		title: 'After Dark',
		images: './images/after-dark.jpeg',
		path: './audio/after-dark.mp3',
		duration: '4:19',
	},
	{
		id: 5,
		title: 'Next Level',
		images: './images/nextLevel.jpeg',
		path: './audio/nextLevel.mp3',
		duration: '2:18',
	},
	{
		id: 6,
		title: 'Happy Nation',
		images: './images/happy-nation.jpeg',
		path: './audio/happy-nation.mp3',
		duration: '4:15',
	},
	{
		id: 7,
		title: '20',
		images: './images/lera-20.jpeg',
		path: './audio/lera-20.mp3',
		duration: '3:13',
	},
	{
		id: 8,
		title: 'Light',
		images: './images/light.jpeg',
		path: './audio/light.mp3',
		duration: '3:39',
	},
	{
		id: 9,
		title: 'Soul',
		images: './images/soul.jpeg',
		path: './audio/soul.mp3',
		duration: '2:49',
	},
	{
		id: 10,
		title: 'Date',
		images: './images/date.jpeg',
		path: './audio/date.mp3',
		duration: '2:32',
	},
];

const list = document.querySelector( '.list' );

fillList()
const listItems = list.querySelectorAll('.list-item');

function fillList() {
	const activeDataMusic = [];

	musicData.forEach( m => {
		const musicEl = `<li class='list-item'>
								                <div class='list-item-inner'>
								                    <button class='play'>&gt;</button>
								                    <div class='counter'>${ m.id }</div>
								                    <img src=${ m.images } alt=${ m.title } class='item-img'>
								                    <p class='item-title'>${ m.title }</p>
								                    <div class='item-duration'>${ m.duration }</div>
								                </div>
								                <audio class='item-audio' src=${ m.path }></audio>
								            </li>`
		activeDataMusic.push( musicEl )

	} )
	list.innerHTML = activeDataMusic.join( '' )
}

list.addEventListener( 'click', handleAction )
list.addEventListener( 'dblclick', handleStop )

function handleAction( e ) {
	if (e.target.classList.contains('play')) {
		listItems.forEach(item => {
			const audio = item.querySelector('.item-audio')
			audio.pause()
		})
		e.target.closest('.list-item').querySelector('.item-audio').play()
	}
}
function handleStop() {
	listItems.forEach(item => {
		const audio = item.querySelector('.item-audio')
		audio.pause()
	})
}

list.addEventListener( 'mouseover', handleHover )

function handleHover( e ) {
	if ( e.target.classList.contains('list-item') ) {
		const hiddenPlay = e.target.querySelector('.play')
		if (hiddenPlay) {
			hiddenPlay.style.visibility = 'visible'
			e.target.querySelector('.counter').style.visibility = 'hidden'
		}
	}
}

list.addEventListener( 'mouseleave', handleHoverOut )

function handleHoverOut() {
	listItems.forEach(item => {
		const hiddenPlay = item.querySelector('.play')
		if (hiddenPlay) {
			hiddenPlay.style.visibility = 'hidden'
			item.querySelector('.counter').style.visibility = 'visible'
		}
	})
}