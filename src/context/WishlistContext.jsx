import { createContext, useContext, useEffect, useState } from 'react';
import { useToast } from './ToastContext';

const WishlistContext = createContext(null);
const STORAGE_KEY = 'wanderly:wishlist';

function readStored() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function WishlistProvider({ children }) {
  const [ids, setIds] = useState(readStored);
  const { showToast } = useToast();

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }, [ids]);

  const isWishlisted = (id) => ids.includes(id);

  const toggleWishlist = (id, label) => {
    setIds((prev) => {
      const exists = prev.includes(id);
      showToast(exists ? `Removed ${label ?? 'item'} from wishlist` : `Saved ${label ?? 'item'} to wishlist`);
      return exists ? prev.filter((x) => x !== id) : [...prev, id];
    });
  };

  return (
    <WishlistContext.Provider value={{ ids, isWishlisted, toggleWishlist, count: ids.length }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider');
  return ctx;
}
