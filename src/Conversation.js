import DogImage1 from './images/dog-image-1.jpg'
import DogImage2 from './images/dog-image-2.jpg'
import DogImage3 from './images/dog-image-3.jpg'

const Conversation = [
	{	
		type: 'text',
		text: 'That sounds great. I’d be happy with that.',
		from: 'recipient',
		delay: 1,
	},
	{	
		type: 'text',
		text: 'Could you send over some pictures of your dog, please?',
		from: 'recipient',
		delay: 2
	},
	{	
		type: 'image',
		images: [DogImage1, DogImage2, DogImage3],
		from: 'sender',
		delay: 3
	},
	{	
		type: 'text',
		text: 'Here are a few pictures. She’s a happy girl!',
		from: 'sender',
		delay: 2
	},
	{	
		type: 'text',
		text: 'Can you make it?',
		from: 'sender',
		delay: 2
	},
	{	
		type: 'text',
		text: 'She looks so happy! The time we discussed works. How long shall I take her out for?',
		from: 'recipient',
		delay: 3
	},
	{	
		type: 'option',
		text: '30 minute walk',
		price: '$29',
		from: 'recipient',
		delay: 3
	},
	{	
		type: 'option',
		text: '1 hour walk',
		price: '$49',
		from: 'recipient',
		delay: 0
	}
]

export default Conversation;