"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskListDiagramConfiguration = void 0;
const browser_1 = require("@eclipse-glsp/theia-integration/lib/browser");
const inversify_1 = require("@theia/core/shared/inversify");
const tasklist_glsp_1 = require("tasklist-glsp");
const tasklist_language_1 = require("../../common/tasklist-language");
let TaskListDiagramConfiguration = class TaskListDiagramConfiguration extends browser_1.GLSPDiagramConfiguration {
    constructor() {
        super(...arguments);
        this.diagramType = tasklist_language_1.TaskListLanguage.diagramType;
    }
    configureContainer(container, ...containerConfiguration) {
        (0, tasklist_glsp_1.initializeTasklistDiagramContainer)(container, ...containerConfiguration);
    }
};
exports.TaskListDiagramConfiguration = TaskListDiagramConfiguration;
exports.TaskListDiagramConfiguration = TaskListDiagramConfiguration = __decorate([
    (0, inversify_1.injectable)()
], TaskListDiagramConfiguration);
//# sourceMappingURL=tasklist-diagram-configuration.js.map