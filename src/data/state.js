


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

		newPostText: ""
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
		],
		newMessText: ""
	},

	sideBar: {
		friends: [
			{ id: 1, name: "Bill Gates", ava: "bill.jpg"},
			{ id: 2, name: "Barak Obama", ava: "obama.jpg"},
			{ id: 3, name: "Ryan Reynolds", ava: "ryan.jpg"}
		]
	}
}

let rerenderTree=(state)=>{
	return
}

export let subscribe = (obsever)=>{
	rerenderTree = obsever
}

export let addPost = ()=>{
	let newPost = {
		id:6,
		message:state.profilePage.newPostText ,
		likes:0
	}
	state.profilePage.postData.unshift(newPost)
	state.profilePage.newPostText = ""
	rerenderTree(state)

}

export let onPostChange = (text)=>{
	state.profilePage.newPostText=text;
	rerenderTree(state)
}


export let addMessage = ()=>{
	let newMess = {
		id:5,
		message:state.dialogesPage.newMessText
	}
	state.dialogesPage.messageItems.push(newMess)
	state.dialogesPage.newMessText= ""
	rerenderTree(state)

}

export let onMessChange = (text)=>{
	state.dialogesPage.newMessText=text;
	rerenderTree(state)
}

export default state