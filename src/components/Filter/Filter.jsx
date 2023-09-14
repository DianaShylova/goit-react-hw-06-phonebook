import { useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";
import css from "./Filter.module.css";

export const Filter = () => {
  const dispatch = useDispatch()
  return (
    <input className={css.filter_shape} onChange={(event) => dispatch(setFilter(event.target.value))} type="text" name="filter" />
  );
};