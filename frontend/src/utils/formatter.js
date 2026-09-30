export const formatDate      = (d) => new Date(d).toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
export const formatCurrency  = (n, currency='INR') => new Intl.NumberFormat('en-IN', { style:'currency', currency }).format(n);
export const formatRelative  = (d) => {
  const diff = (Date.now() - new Date(d)) / 1000;
  if (diff < 60)   return 'just now';
  if (diff < 3600) return `${Math.floor(diff/60)}m ago`;
  if (diff < 86400)return `${Math.floor(diff/3600)}h ago`;
  return formatDate(d);
};
