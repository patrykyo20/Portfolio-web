'use strict';

export function getElement(selector, context = document) {
  if (selector) {
    return context.querySelector(selector);
  }
  console.warn("Error, element on the page doesn't exist");
  return null;
}

export function getElements(selector, context = document) {
  if (selector) {
    return context.querySelectorAll(selector);
  } else {
    console.warn('Error: Invalid or empty selector.');
  }

  return null;
}

export function createElement(tagName) {
  if (typeof tagName == 'string' && tagName.trim() != '') {
    return document.createElement(tagName);
  } else {
    console.warn(`Error: Invalid tag name '${tagName}' provided.`);
  }

  return null;
}