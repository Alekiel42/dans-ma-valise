export default  {
    deletePossession(state, payload) {
      state.possessionsToBeTaken.splice(payload.index, 1);
    },
    addPossession(state, payload) {
        state.possessionsToBeTaken.unshift(payload.possession);
    },
    changeTakenValue(state, payload) {
        state.possessionsToBeTaken[payload.index].taken = !state.possessionsToBeTaken[payload.index].taken
    },
    handlePossessionsTaken(state, payload) {
      const posIndex = state.possessionsToBeTaken.findIndex(
        (pos) => pos.id === payload.id
      );
      if (posIndex !== -1) {
        //todo doublon with changeTaken method
        state.possessionsToBeTaken[posIndex].taken = !state.possessionsToBeTaken[posIndex].taken
      }
    },
    changeStatusTag(state, payload) { 
      const tagIndex = state.listTags.findIndex((tag) => tag.name === payload.name);
      if (tagIndex !== -1) {
        state.listTags[tagIndex].selected = !state.listTags[tagIndex].selected;
      }
    }
}