
export function base(active: boolean, index: number) {
  return `${ active ? 'var(--grey-900)' : 'var(--black)' }`;
};


export function index(active: boolean, index: number) {
  return `${active ? index === 0 ? 'var(--secondary-dark)' : index === 1 ? 'var(--primary-light)' : index === 2 ? 'var(--tertiary-light)' : 'var(--black)' : 'var(--black)' }`;
};
