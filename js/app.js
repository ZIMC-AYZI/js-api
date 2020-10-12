import { HeaderComponent } from './components/header.component.js'
import { BODY_ELEMENT, insertPosition, renderElement } from './utils.js';
import { ModalComponent } from './components/modal.component.js';


export class appComponent {
  init() {
    const headerComponent = new HeaderComponent(),
      headerElement = headerComponent.getElement();

    renderElement(BODY_ELEMENT,headerElement,insertPosition.BEFORE_BEGIN);
    headerComponent.addEventListeners();

    const modalComponent = new ModalComponent(),
      modalElement = modalComponent.getElement();

    renderElement(BODY_ELEMENT, modalElement, insertPosition.BEFORE_BEGIN);
    modalComponent.addEventListeners();

  };
}