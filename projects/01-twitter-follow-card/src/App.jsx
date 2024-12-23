import TwitterFollowCard from './TwitterFollowCard';
import './App.css';

function App() {
	const users = [
		{
			id:0,
			userName: 'obsoleteSony',
			name: 'Obsolete Sony',
			initialIsFollowing: false
		},
		{
			id:1,
			userName: 'midudev',
			name: 'Miguel Ángel Durán',
			initialIsFollowing: true
		},
		{
			id:2,
			userName: 'DiscussingFilm',
			name: 'DiscussingFilm',
			initialIsFollowing: false
		},
		{
			id:3,
			userName: 'AlertaNews24',
			name: 'AlertaNews24',
			initialIsFollowing: false
		}
	]

  return(
		<section className='tw-followCardList'>
			{
				users.map((user) => (
					<TwitterFollowCard 
						key={user.id}
						userName={user.userName}
						initialIsFollowing={user.initialIsFollowing}
					>
						{user.name}
					</TwitterFollowCard>
				))
			}
		</section>
  )
}

export default App;