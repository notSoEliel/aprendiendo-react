import { useState } from 'react';
import './TwFollowCard.css';

// eslint-disable-next-line react/prop-types
function TwitterFollowCard({children, userName, initialIsFollowing}) {
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
	const avatar = `https://unavatar.io/${userName}`;

	const text = isFollowing ? 'Siguiendo' : 'Seguir';
	const buttonClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
	const handleFollow = () => {
		setIsFollowing(!isFollowing);
	}

	return(
		<article className='tw-followCard'>
			<header className='tw-followCard-header'>
			<img 
				className='tw-followCard-avatar'
				src={avatar} alt="Avatar de Usuario" 
			/>
			<div className='tw-followCard-info'>
				<strong>{children}</strong>
				<span className='tw-followCard-infoUserName'>@{userName}</span>
			</div>
			</header>
			<aside>
				<button 
					onClick={handleFollow} 
					className={buttonClass}
				>
					<span className='tw-followCard-button-text'>{text}</span>
					<span className='tw-followCard-button-text-aux'>Dejar de seguir</span>
				</button>
			</aside>
		</article>
  )
}

export default TwitterFollowCard;