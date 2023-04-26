import { CHANGE_SEARCH_FIELD } from './constant.tsx';
export const { setSearchField } = (text) => ({
	type: "CHANGE_SEARCH_FIELD",
	payload: text
})
