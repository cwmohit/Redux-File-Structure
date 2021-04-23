export const postList=(state=[],action)=>{
    switch (action.type) {
        case 'POST_LIST':
            return action.payload;   
        default:
            return state;
    }
}