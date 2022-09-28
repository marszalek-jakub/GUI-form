import {createGlobalState} from 'react-hooks-global-state';

const {useGlobalState, setGlobalState} = createGlobalState({
      posts: [],
      working: false,
      isChecked: {},
      countryCode: "",
      purpose: "",
      multicountry: false,
      dataCenter: "us",
})

export {useGlobalState, setGlobalState};