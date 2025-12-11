import { createSlice } from '@reduxjs/toolkit';


const recalculateItemCount = (state) => {
    let itemCount = 0;
    
    state.items.forEach(item => {
        itemCount += item.quantity;
    });
    state.itemCount = itemCount;
};

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], 
        
        itemCount: 0, 
    },
    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ name, image, cost, quantity: 1 });
            }
            
            recalculateItemCount(state);
        },
        
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload);
            
            recalculateItemCount(state);
        },
        
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.name === name);
            
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity; 
            }
            
            recalculateItemCount(state);
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;