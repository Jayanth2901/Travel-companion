export const validateEmail    = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
export const validatePassword = (p) => p.length >= 8;
export const validateRequired = (v) => v !== null && v !== undefined && String(v).trim() !== '';
