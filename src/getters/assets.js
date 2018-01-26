export function getAssets({ assets }) {
  return assets;
}

export function getAssetById({ assets }) {
  return (id) => ((assets && assets[id]) ? assets[id] : false);
}

export function getAssetFieldById({ assets }) {
  return (field, id) => ((assets && assets[id]) ? assets[id][field] : false);
}

export function getBaseMarket(state) {
  return state.baseMarket;
}
