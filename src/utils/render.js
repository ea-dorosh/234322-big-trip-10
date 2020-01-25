export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  AFTEREND: `afterend`,
  BEFOREEND: `beforeend`
};

export const createElement = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template;

  return container;
};

export const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTEREND:
      container.after(element);
      break;
  }
};

export const replace = (newComponent, oldComponent) => {
  const parentElement = oldComponent.parentElement;
  const newElement = newComponent;
  const oldElement = oldComponent;

  const isExistElements = !!(parentElement && newElement && oldElement);

  if (isExistElements && parentElement.contains(oldElement)) {
    parentElement.replaceChild(newElement, oldElement);
  }
};
