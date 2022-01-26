export default  {
    filterListPossession(state) {
      const listTagSelected = [];
      state.listTags.forEach((tag) => {
        if (tag.selected) {
          listTagSelected.push(tag.name);
        }
      });

      const possessionsFiltered = state.possessionsToBeTaken.filter((pos) =>
        pos.tags.some((r) => listTagSelected.indexOf(r) >= 0)
      );

      possessionsFiltered.sort((a, b) => (a.room < b.room ? -1 : 1));

      return possessionsFiltered;
    },
    possessionsNotTakenYet(_, getters) {
      return getters.filterListPossession.filter((pos) => !pos.taken);
    },
    possessionsTaken(_, getters) {
      return getters.filterListPossession.filter((pos) => pos.taken);
    }
  }