"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskListTheiaFrontendModule = void 0;
/********************************************************************************
 * Copyright (c) 2022 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied:
 * -- GNU General Public License, version 2 with the GNU Classpath Exception
 * which is available at https://www.gnu.org/software/classpath/license.html
 * -- MIT License which is available at https://opensource.org/license/mit.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0 OR MIT
 ********************************************************************************/
const theia_integration_1 = require("@eclipse-glsp/theia-integration");
const tasklist_language_1 = require("../common/tasklist-language");
const tasklist_diagram_configuration_1 = require("./diagram/tasklist-diagram-configuration");
class TaskListTheiaFrontendModule extends theia_integration_1.GLSPTheiaFrontendModule {
    constructor() {
        super(...arguments);
        this.diagramLanguage = tasklist_language_1.TaskListLanguage;
    }
    bindDiagramConfiguration(context) {
        context.bind(theia_integration_1.DiagramConfiguration).to(tasklist_diagram_configuration_1.TaskListDiagramConfiguration);
    }
}
exports.TaskListTheiaFrontendModule = TaskListTheiaFrontendModule;
exports.default = new TaskListTheiaFrontendModule();
//# sourceMappingURL=frontend-module.js.map