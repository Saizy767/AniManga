import { searchChangerAction } from "../action/SearchBoxAction";
import { searchChangeReducer } from "../reducer/SearchBoxReducer";


it('should return a ABC' ,()=>{
    
    //1.test data
    let action= searchChangerAction('ABC')
    const state={ 
        state:''};

    //2.action
    let newState = searchChangeReducer(state, action);

    //3.expect
    expect (newState.state).toBe('ABC')
})
it('should return a Number5',()=>{
    //1.test data
    let action= searchChangerAction('Number5')
    const state={ 
        state:''};

    //2.action
    let newState = searchChangeReducer(state, action);

    //3.expect
    expect (newState.state).toBe('Number5')
})