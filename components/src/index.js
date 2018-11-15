import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'

const App = () => {
   return (
         <div className='ui container comments'>
            <div className='comment'>
					<CommentDetail 
					author='Pam'
					timeAgo='Today at 1:27AM'
					message='Todo manso perreke'
					image={faker.image.avatar()} 
					/>
					<CommentDetail 
					author='Sam'
					timeAgo='Today at 7:25PM'
					message='Que onda rrope'
					image={faker.image.avatar()} 
					/>
					<CommentDetail 
					author='Jam'
					timeAgo='Today at 5:00PM'
					message='Nice Blog Post!'
					image={faker.image.avatar()} 
					/>
            </div>
         </div>
   )
}

ReactDOM.render(<App />, document.querySelector('#root'))