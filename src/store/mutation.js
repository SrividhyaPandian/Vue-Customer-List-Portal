// Mutations is where the state variables can be updated after respective actions.
import router from "../router";

export default {
    UPDATE_ACTIVE_STATE(state, payload) {
        state.activeState = payload
        router.push({ path: `/${payload}` });
    }
}