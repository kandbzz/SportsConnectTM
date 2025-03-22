export default {
	images: [
		{url:"https://th.bing.com/th/id/R.4ad9ccfa7daeb6d3baa3fea37a3d3c3d?rik=MvTK2I9LVVj51Q&riu=http%3a%2f%2fryancheffernan.org%2fwp-content%2fuploads%2fryancheffernan-org%2fsites%2f1509%2fbasketball-dunk.jpg&ehk=kqu5qSg0omoRUMMa4rnYCrGG3b7aTYies1rBvYqsWx4%3d&risl=&pid=ImgRaw&r=0",page:"BasketballPage"},
		{url:"https://i.imgur.com/RIqnXQy.jpg",page:"BadmintonPage"},
		{url:"https://www.health.com/thmb/Yv4HuoQyNbHNNxgtOTm63zqxurQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Swimming-080c78802f384a4687df5a3b13d5611e-3719a8e40a3c4c43a63a4d795e47c505.jpg",page:"SwimmingPage"},
		{url:"https://golf.com/wp-content/uploads/2022/04/GettyImages-sb10066409e-001.jpeg",page:"GolfPage"},
		{url:"https://th.bing.com/th/id/OIP.5x_tVw398lhhtHRX-Dvx2QHaE8?rs=1&pid=ImgDetMain",page:"TennisPage"}
	],

	currentIndex: appsmith.store.currentIndex || 0,

	nextImage: () => {
		let newIndex = (appsmith.store.currentIndex + 1) % this.images.length;
		storeValue("currentIndex", newIndex);
	},

	prevImage: () => {
		let newIndex = (appsmith.store.currentIndex - 1 + this.images.length) % this.images.length;
		storeValue("currentIndex", newIndex);
	},

	navigateToPage: () => {
		let page = JSObject1.images[appsmith.store.currentIndex].page;
		navigateTo(page);
	}

};
