import { createReducer, on } from "@ngrx/store";
import { ItemType } from "../interface/item-type";
import { addItemAction } from "./item-list.action";

const initialState: ItemType[] = [];

export const itemListReducer = createReducer(
    initialState,
    on(addItemAction, (state, action) => { return state.concat(action.payload) })
);
