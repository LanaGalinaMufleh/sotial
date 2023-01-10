let state = {
	profilePage: {
		postData: [
			{ id: "1", message: "hello", likes: 40 },
			{ id: "2", message: "i am Elon Musk", likes: 3 },
			{ id: "3", message: "i love Mars", likes: 509 },
			{ id: "4", message: "Tesla", likes: 708 },
			{ id: "5", message: "I am rich", likes: 34 }
		],

		profileInfo: [
			{ id: 1, name: "Elon Musk", ava: "Elon-Musk.webp" }
		],
	},

	dialogesPage: {
		dialogNames: [
			{ id: "1", name: "Donald Trump" },
			{ id: "2", name: "Bill Gates" },
			{ id: "3", name: "Joe Biden" },
			{ id: "4", name: "Barak Obama" }
		],
		messageItems: [
			{ id: 1, message: "Hello. I am great" },
			{ id: 2, message: "Hello. I am richer than you" },
			{ id: 3, message: "Where I am?" },
			{ id: 4, message: "Who is there? 8)" }
		]
	},

	sideBar: {
		friends: [
			{ id: 1, name: "Bill Gates", ava: "bill.jpg"},
			{ id: 2, name: "Barak Obama", ava: "obama.jpg"},
			{ id: 3, name: "Ryan Reynolds", ava: "ryan.jpg"}
		]
	}
}

export let addPost = (text)=>{
	let newPost = {
		id:6,
		message:text ,
		likes:0
	}
	state.profilePage.postData.unshift(newPost)
}

export let addMessage = (text)=>{
	let newMess = {
		id:5,
		message:text
	}
	state.dialogesPage.messageItems.push(newMess)
}

export default state