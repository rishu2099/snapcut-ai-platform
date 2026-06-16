const KEY = "snapcut:last-result";
function saveResultSession(data) {
  sessionStorage.setItem(KEY, JSON.stringify(data));
}
function loadResultSession() {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
export {
  loadResultSession as l,
  saveResultSession as s
};
