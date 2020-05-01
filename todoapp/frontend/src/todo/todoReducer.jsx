const INITIAL_STATE = {
                        description: 'Ler',
                        list: [{
                            _id: 1,
                            description: '1',
                            done: true
                        },{
                            _id: 2,
                            description: '2',
                            done: false
                        },
                        {
                            _id: 3,
                            description: '3',
                            done: false
                        }]
                    }

export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return{
                ...state,
                description: action.payload
            }
        default:
            return state
    }
}