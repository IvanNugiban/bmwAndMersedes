import {bindActionCreators} from "redux";
import {carSliceActions} from "../redux/reducers/carSlice";
import {useAppDispatch} from "../redux/reduxTypedHooks";

const AllActions = {
    ...carSliceActions
}

const useAction = () => {
    const dispatch = useAppDispatch();

    return bindActionCreators(AllActions, dispatch)
}

export default useAction;