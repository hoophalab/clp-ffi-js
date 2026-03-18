/**
 * SFA module entry point for Node.js environments.
 * @module
 */
import MainModuleFactory from "#clp-ffi-js/node";

import {ClpArchiveReader} from "./ClpArchiveReader.js";


ClpArchiveReader.init(MainModuleFactory());

export * from "./index.js";
