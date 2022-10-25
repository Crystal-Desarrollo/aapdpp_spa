import {SOMETHING_WENT_WRONG} from "../i18n/common";

export function handleApiError(error){
    return error || SOMETHING_WENT_WRONG
}