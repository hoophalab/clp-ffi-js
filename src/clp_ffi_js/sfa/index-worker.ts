/**
 * SFA module entry point for worker and browser environments.
 * @module
 */
import MainModuleFactory from "#clp-ffi-js/worker";

import {ClpArchiveReader} from "./ClpArchiveReader.js";


ClpArchiveReader.init(MainModuleFactory());

export * from "./index.js";
