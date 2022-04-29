export function createElement(type, props) {
  const element = document.createElement(type);
  for (let prop in props) {
    element.setAttribute(prop, props[prop]);
  }
  return element;
}

export function createElements(count, fn, start) {
  const docFrag = document.createDocumentFragment();
  for (let i = start; i < count + start; i++) {
    docFrag.appendChild(fn(i));
  }
  return docFrag;
}
