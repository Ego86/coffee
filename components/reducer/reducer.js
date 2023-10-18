export const initialState = []
export let initialStateCount = 1
export const CoffeeSlice = {
name:"Coffee",
reducer: {
    Coffee: (action) => { 
        localStorage.setItem(action.id, JSON.stringify(action))
    },
    CoffeeDelete: (action) => {
console.log(action)
        const isExit = Object.keys(localStorage)
        .map(item => {
            const element = JSON.parse(localStorage[item])
            return element})
        // .some((item )=> item.id === action.id)
        console.log(isExit)
        
        if(isExit){
            localStorage.removeItem(action.id)
            }
    }
}
}
export const {reducer} =  CoffeeSlice