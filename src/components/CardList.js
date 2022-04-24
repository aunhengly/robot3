import React from 'react';
import Card from './Card';

//The same as wrap in the return below:
// const CardArray = robots.map((user,i) => {
// 		return (
// 			<Card
// 				key={i}
// 				id={robots[i].id}
// 				name={robots[i].name}
// 				email={robots[i].email}
// 			/>
// 		);
// 	})
// 	return (
// 		<div>
// 				{CardArray}
// 		</div>
// 	);
// }

const CardList = ({robots}) => {
	// if(true){
	// 	throw new Error ('Noooooo! Errors Erros');
	// }
	return (
		<div>
				{
					robots.map((user,i) => {
						return (
							<Card
								key={i}
								id={robots[i].id}
								name={robots[i].name}
								email={robots[i].email}
							/>
						);
					})
				}
		</div>
	);
}

export default CardList;