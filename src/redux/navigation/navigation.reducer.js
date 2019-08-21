const INITIAL_STATE = {
    isHidden: true,
    isToggled: false
}

const navigationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SHOW_NAV':
            return {
                ...state,
                isHidden: false
            }
        case 'HIDE_NAV':
            return {
                ...state,
                isHidden: true
            }
        case 'TOGGLE_NAV':
            return {
                ...state,
                isToggled: !state.isToggled
            }
        default:
            return state
    }
}

export default navigationReducer;