import Model from "./js/model"
import View from "./js/view"
import Controller from "./js/controller"
import EventEmitter from "./js/event-emitter"
import "./reset.scss";
import "./style.scss";
 const model = new Model();
 const view = new View
 new Controller(model, view)