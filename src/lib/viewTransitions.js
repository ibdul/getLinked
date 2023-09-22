export default function viewTransition(action) {
  if (!document.startViewTransition) return;
  document.startViewTransition(action);
}
