import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {  Switch } from "@material-ui/core";

import "./style.scss";

import { storeDeselected, storeSelected } from "redux/slices/storesSlice";

const StoreItem = ({
    store,
    onClick
}) => {

    const { label, img, name } = store;
    const { selected } = useSelector(state => state.stores);
    const dispatch = useDispatch();


    const onToggled = (name) => {
        if(selected[name]) {
            dispatch(storeDeselected(name));
        } else {
            dispatch(storeSelected(name));
        }
    };


    return (
        <div className="store-item">
            <img src={img} alt="supermarket icon" />
            <span className="label">{label}</span>
            <Switch  onChange={onToggled}  color="primary" checked={selected[name]} />
        </div>
    );
}

export default StoreItem;