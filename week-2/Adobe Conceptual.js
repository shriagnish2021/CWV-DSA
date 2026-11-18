const state = {
    user: { id: 101, details: { city: 'Bangalore' } },
    theme: 'dark'
};

// const newState = {...state };
const newState = { ...state, user: { ...state.user, details: { ...state.user.details } } };
newState.user.details.city = 'Chennai';

console.log(state.user.details.city);
// Expected output? Why did it change?

/**Output: 
 * Chennai
 * Because of shallow copy
 */
