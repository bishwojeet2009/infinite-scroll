import { createAction, props } from "@ngrx/store";
import { ItemType } from "../interface/item-type";

const ADDITEM = 'AddItem'


export const addItemAction = createAction(
    ADDITEM,
    props<{ payload: ItemType[] }>()
)