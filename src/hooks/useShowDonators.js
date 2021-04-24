import { useSelector, useDispatch } from "react-redux";
import donatorsSlice from '../state/donatorsSlice.js';

const useShowDonators = () => {

    const dispatch = useDispatch();
    const { SET_SEARCH_FIELD } = donatorsSlice.actions;
    const { donators, searchField } = useSelector((state) => state.donators);

    const showDonators = () => {
        if(searchField && donators.length > 0){
            return donators.filter(donator => donator.name.toLowerCase().includes(searchField))
        } else {
            return donators
        }
    }

    const onSearchInputChange = (e) => {
        const input = e.target.value;
        dispatch(SET_SEARCH_FIELD(input.toLowerCase()));
    }

    return { showDonators, searchField, onSearchInputChange }
}

export default useShowDonators