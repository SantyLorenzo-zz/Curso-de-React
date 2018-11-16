import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
   return (
        <div className='ui container comments'>

		<ApprovalCard>
			<div>
				<h4>Are you sure you want to do this?</h4>
			</div>
		</ApprovalCard>


            <div className='comment'>
					<ApprovalCard>
					<CommentDetail 
					author='Pam'
					timeAgo='Today at 1:27AM'
					message='Todo manso perreke'
					image={faker.image.avatar()} 
					/>
					</ApprovalCard>

					<ApprovalCard>
					<CommentDetail 
					author='Sam'
					timeAgo='Today at 7:25PM'
					message='Que onda rrope'
					image={faker.image.avatar()} 
					/>
					</ApprovalCard>

					<ApprovalCard>
					<CommentDetail 
					author='Jam'
					timeAgo='Today at 5:00PM'
					message='Nice Blog Post!'
					image={faker.image.avatar()} 
					/>
					</ApprovalCard>
            </div>
         </div>
   )
}

ReactDOM.render(<App />, document.querySelector('#root'))