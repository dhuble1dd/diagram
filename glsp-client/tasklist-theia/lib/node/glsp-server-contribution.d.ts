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
import { GLSPSocketServerContribution, GLSPSocketServerContributionOptions } from '@eclipse-glsp/theia-integration/lib/node';
export declare const DEFAULT_PORT = 0;
export declare const PORT_ARG_KEY = "TASKLIST_GLSP";
export declare const LOG_DIR: string;
export declare class TaskListGLSPServerContribution extends GLSPSocketServerContribution {
    readonly id: string;
    createContributionOptions(): Partial<GLSPSocketServerContributionOptions>;
    protected processLogInfo(line: string): void;
}
//# sourceMappingURL=glsp-server-contribution.d.ts.map