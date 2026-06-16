const KEY = "snapcut:last-result";

export type ResultSession = {
  imageUrl: string;
  originalImageUrl?: string;
};

export function saveResultSession(data: ResultSession) {
  sessionStorage.setItem(KEY, JSON.stringify(data));
}

export function loadResultSession(): ResultSession | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ResultSession) : null;
  } catch {
    return null;
  }
}
