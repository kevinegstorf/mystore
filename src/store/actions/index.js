export const ADD_TO_CARD = 'ADD_TO_CARD';

export function addToCard(id) {
	const action = {
		type: ADD_TO_CARD,
		id
	};
	return action;
}
