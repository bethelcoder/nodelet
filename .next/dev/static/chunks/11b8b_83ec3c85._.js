(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/nodelet/node_modules/@trpc/server/dist/initTRPC-DGaJyg8t.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StandardSchemaV1Error",
    ()=>StandardSchemaV1Error,
    "createBuilder",
    ()=>createBuilder,
    "createInputMiddleware",
    ()=>createInputMiddleware,
    "createMiddlewareFactory",
    ()=>createMiddlewareFactory,
    "createOutputMiddleware",
    ()=>createOutputMiddleware,
    "experimental_standaloneMiddleware",
    ()=>experimental_standaloneMiddleware,
    "getParseFn",
    ()=>getParseFn,
    "initTRPC",
    ()=>initTRPC,
    "isServerDefault",
    ()=>isServerDefault,
    "middlewareMarker",
    ()=>middlewareMarker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$getErrorShape$2d$BH60iMC2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@trpc/server/dist/getErrorShape-BH60iMC2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$DBSMdVzR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@trpc/server/dist/tracked-DBSMdVzR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$utils$2d$CLZnJdb_$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@trpc/server/dist/utils-CLZnJdb_.mjs [app-client] (ecmascript)");
;
;
;
//#region src/unstable-core-do-not-import/middleware.ts
var import_objectSpread2$2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$getErrorShape$2d$BH60iMC2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__toESM"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$getErrorShape$2d$BH60iMC2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["require_objectSpread2"])(), 1);
/** @internal */ const middlewareMarker = "middlewareMarker";
/**
* @internal
*/ function createMiddlewareFactory() {
    function createMiddlewareInner(middlewares) {
        return {
            _middlewares: middlewares,
            unstable_pipe (middlewareBuilderOrFn) {
                const pipedMiddleware = "_middlewares" in middlewareBuilderOrFn ? middlewareBuilderOrFn._middlewares : [
                    middlewareBuilderOrFn
                ];
                return createMiddlewareInner([
                    ...middlewares,
                    ...pipedMiddleware
                ]);
            }
        };
    }
    function createMiddleware(fn) {
        return createMiddlewareInner([
            fn
        ]);
    }
    return createMiddleware;
}
/**
* Create a standalone middleware
* @see https://trpc.io/docs/v11/server/middlewares#experimental-standalone-middlewares
* @deprecated use `.concat()` instead
*/ const experimental_standaloneMiddleware = ()=>({
        create: createMiddlewareFactory()
    });
/**
* @internal
* Please note, `trpc-openapi` uses this function.
*/ function createInputMiddleware(parse) {
    const inputMiddleware = async function inputValidatorMiddleware(opts) {
        let parsedInput;
        const rawInput = await opts.getRawInput();
        try {
            parsedInput = await parse(rawInput);
        } catch (cause) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$DBSMdVzR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                cause
            });
        }
        const combinedInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$utils$2d$CLZnJdb_$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(opts.input) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$utils$2d$CLZnJdb_$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(parsedInput) ? (0, import_objectSpread2$2.default)((0, import_objectSpread2$2.default)({}, opts.input), parsedInput) : parsedInput;
        return opts.next({
            input: combinedInput
        });
    };
    inputMiddleware._type = "input";
    return inputMiddleware;
}
/**
* @internal
*/ function createOutputMiddleware(parse) {
    const outputMiddleware = async function outputValidatorMiddleware({ next }) {
        const result = await next();
        if (!result.ok) return result;
        try {
            const data = await parse(result.data);
            return (0, import_objectSpread2$2.default)((0, import_objectSpread2$2.default)({}, result), {}, {
                data
            });
        } catch (cause) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$DBSMdVzR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCError"]({
                message: "Output validation failed",
                code: "INTERNAL_SERVER_ERROR",
                cause
            });
        }
    };
    outputMiddleware._type = "output";
    return outputMiddleware;
}
//#endregion
//#region src/vendor/standard-schema-v1/error.ts
var import_defineProperty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$getErrorShape$2d$BH60iMC2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__toESM"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$getErrorShape$2d$BH60iMC2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["require_defineProperty"])(), 1);
/** A schema error with useful information. */ var StandardSchemaV1Error = class extends Error {
    /**
	* Creates a schema error with useful information.
	*
	* @param issues The schema issues.
	*/ constructor(issues){
        var _issues$;
        super((_issues$ = issues[0]) === null || _issues$ === void 0 ? void 0 : _issues$.message);
        (0, import_defineProperty.default)(this, "issues", void 0);
        this.name = "SchemaError";
        this.issues = issues;
    }
};
//#endregion
//#region src/unstable-core-do-not-import/parser.ts
function getParseFn(procedureParser) {
    const parser = procedureParser;
    const isStandardSchema = "~standard" in parser;
    if (typeof parser === "function" && typeof parser.assert === "function") return parser.assert.bind(parser);
    if (typeof parser === "function" && !isStandardSchema) return parser;
    if (typeof parser.parseAsync === "function") return parser.parseAsync.bind(parser);
    if (typeof parser.parse === "function") return parser.parse.bind(parser);
    if (typeof parser.validateSync === "function") return parser.validateSync.bind(parser);
    if (typeof parser.create === "function") return parser.create.bind(parser);
    if (typeof parser.assert === "function") return (value)=>{
        parser.assert(value);
        return value;
    };
    if (isStandardSchema) return async (value)=>{
        const result = await parser["~standard"].validate(value);
        if (result.issues) throw new StandardSchemaV1Error(result.issues);
        return result.value;
    };
    throw new Error("Could not find a validator fn");
}
//#endregion
//#region ../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutPropertiesLoose.js
var require_objectWithoutPropertiesLoose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$getErrorShape$2d$BH60iMC2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__commonJS"])({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutPropertiesLoose.js" (exports, module) {
        function _objectWithoutPropertiesLoose(r, e) {
            if (null == r) return {};
            var t = {};
            for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
                if (e.includes(n)) continue;
                t[n] = r[n];
            }
            return t;
        }
        module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
});
//#endregion
//#region ../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutProperties.js
var require_objectWithoutProperties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$getErrorShape$2d$BH60iMC2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__commonJS"])({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutProperties.js" (exports, module) {
        var objectWithoutPropertiesLoose = require_objectWithoutPropertiesLoose();
        function _objectWithoutProperties$1(e, t) {
            if (null == e) return {};
            var o, r, i = objectWithoutPropertiesLoose(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
            }
            return i;
        }
        module.exports = _objectWithoutProperties$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
});
//#endregion
//#region src/unstable-core-do-not-import/procedureBuilder.ts
var import_objectWithoutProperties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$getErrorShape$2d$BH60iMC2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__toESM"])(require_objectWithoutProperties(), 1);
var import_objectSpread2$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$getErrorShape$2d$BH60iMC2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__toESM"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$getErrorShape$2d$BH60iMC2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["require_objectSpread2"])(), 1);
const _excluded = [
    "middlewares",
    "inputs",
    "meta"
];
function createNewBuilder(def1, def2) {
    const { middlewares = [], inputs, meta } = def2, rest = (0, import_objectWithoutProperties.default)(def2, _excluded);
    return createBuilder((0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$utils$2d$CLZnJdb_$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeWithoutOverrides"])(def1, rest)), {}, {
        inputs: [
            ...def1.inputs,
            ...inputs !== null && inputs !== void 0 ? inputs : []
        ],
        middlewares: [
            ...def1.middlewares,
            ...middlewares
        ],
        meta: def1.meta && meta ? (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, def1.meta), meta) : meta !== null && meta !== void 0 ? meta : def1.meta
    }));
}
function createBuilder(initDef = {}) {
    const _def = (0, import_objectSpread2$1.default)({
        procedure: true,
        inputs: [],
        middlewares: []
    }, initDef);
    const builder = {
        _def,
        input (input) {
            const parser = getParseFn(input);
            return createNewBuilder(_def, {
                inputs: [
                    input
                ],
                middlewares: [
                    createInputMiddleware(parser)
                ]
            });
        },
        output (output) {
            const parser = getParseFn(output);
            return createNewBuilder(_def, {
                output,
                middlewares: [
                    createOutputMiddleware(parser)
                ]
            });
        },
        meta (meta) {
            return createNewBuilder(_def, {
                meta
            });
        },
        use (middlewareBuilderOrFn) {
            const middlewares = "_middlewares" in middlewareBuilderOrFn ? middlewareBuilderOrFn._middlewares : [
                middlewareBuilderOrFn
            ];
            return createNewBuilder(_def, {
                middlewares
            });
        },
        unstable_concat (builder$1) {
            return createNewBuilder(_def, builder$1._def);
        },
        concat (builder$1) {
            return createNewBuilder(_def, builder$1._def);
        },
        query (resolver) {
            return createResolver((0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, _def), {}, {
                type: "query"
            }), resolver);
        },
        mutation (resolver) {
            return createResolver((0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, _def), {}, {
                type: "mutation"
            }), resolver);
        },
        subscription (resolver) {
            return createResolver((0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, _def), {}, {
                type: "subscription"
            }), resolver);
        },
        experimental_caller (caller) {
            return createNewBuilder(_def, {
                caller
            });
        }
    };
    return builder;
}
function createResolver(_defIn, resolver) {
    const finalBuilder = createNewBuilder(_defIn, {
        resolver,
        middlewares: [
            async function resolveMiddleware(opts) {
                const data = await resolver(opts);
                return {
                    marker: middlewareMarker,
                    ok: true,
                    data,
                    ctx: opts.ctx
                };
            }
        ]
    });
    const _def = (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, finalBuilder._def), {}, {
        type: _defIn.type,
        experimental_caller: Boolean(finalBuilder._def.caller),
        meta: finalBuilder._def.meta,
        $types: null
    });
    const invoke = createProcedureCaller(finalBuilder._def);
    const callerOverride = finalBuilder._def.caller;
    if (!callerOverride) return invoke;
    const callerWrapper = async (...args)=>{
        return await callerOverride({
            args,
            invoke,
            _def
        });
    };
    callerWrapper._def = _def;
    return callerWrapper;
}
const codeblock = `
This is a client-only function.
If you want to call this function on the server, see https://trpc.io/docs/v11/server/server-side-calls
`.trim();
async function callRecursive(index, _def, opts) {
    try {
        const middleware = _def.middlewares[index];
        const result = await middleware((0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, opts), {}, {
            meta: _def.meta,
            input: opts.input,
            next (_nextOpts) {
                var _nextOpts$getRawInput;
                const nextOpts = _nextOpts;
                return callRecursive(index + 1, _def, (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, opts), {}, {
                    ctx: (nextOpts === null || nextOpts === void 0 ? void 0 : nextOpts.ctx) ? (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, opts.ctx), nextOpts.ctx) : opts.ctx,
                    input: nextOpts && "input" in nextOpts ? nextOpts.input : opts.input,
                    getRawInput: (_nextOpts$getRawInput = nextOpts === null || nextOpts === void 0 ? void 0 : nextOpts.getRawInput) !== null && _nextOpts$getRawInput !== void 0 ? _nextOpts$getRawInput : opts.getRawInput
                }));
            }
        }));
        return result;
    } catch (cause) {
        return {
            ok: false,
            error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$DBSMdVzR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(cause),
            marker: middlewareMarker
        };
    }
}
function createProcedureCaller(_def) {
    async function procedure(opts) {
        if (!opts || !("getRawInput" in opts)) throw new Error(codeblock);
        const result = await callRecursive(0, _def, opts);
        if (!result) throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$DBSMdVzR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "INTERNAL_SERVER_ERROR",
            message: "No result from middlewares - did you forget to `return next()`?"
        });
        if (!result.ok) throw result.error;
        return result.data;
    }
    procedure._def = _def;
    procedure.procedure = true;
    procedure.meta = _def.meta;
    return procedure;
}
//#endregion
//#region src/unstable-core-do-not-import/rootConfig.ts
var _globalThis$process, _globalThis$process2, _globalThis$process3;
/**
* The default check to see if we're in a server
*/ const isServerDefault = typeof window === "undefined" || "Deno" in window || ((_globalThis$process = globalThis.process) === null || _globalThis$process === void 0 || (_globalThis$process = _globalThis$process.env) === null || _globalThis$process === void 0 ? void 0 : _globalThis$process["NODE_ENV"]) === "test" || !!((_globalThis$process2 = globalThis.process) === null || _globalThis$process2 === void 0 || (_globalThis$process2 = _globalThis$process2.env) === null || _globalThis$process2 === void 0 ? void 0 : _globalThis$process2["JEST_WORKER_ID"]) || !!((_globalThis$process3 = globalThis.process) === null || _globalThis$process3 === void 0 || (_globalThis$process3 = _globalThis$process3.env) === null || _globalThis$process3 === void 0 ? void 0 : _globalThis$process3["VITEST_WORKER_ID"]);
//#endregion
//#region src/unstable-core-do-not-import/initTRPC.ts
var import_objectSpread2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$getErrorShape$2d$BH60iMC2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__toESM"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$getErrorShape$2d$BH60iMC2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["require_objectSpread2"])(), 1);
var TRPCBuilder = class TRPCBuilder {
    /**
	* Add a context shape as a generic to the root object
	* @see https://trpc.io/docs/v11/server/context
	*/ context() {
        return new TRPCBuilder();
    }
    /**
	* Add a meta shape as a generic to the root object
	* @see https://trpc.io/docs/v11/quickstart
	*/ meta() {
        return new TRPCBuilder();
    }
    /**
	* Create the root object
	* @see https://trpc.io/docs/v11/server/routers#initialize-trpc
	*/ create(opts) {
        var _opts$transformer, _opts$isDev, _globalThis$process$1, _opts$allowOutsideOfS, _opts$errorFormatter, _opts$isServer;
        const config = (0, import_objectSpread2.default)((0, import_objectSpread2.default)({}, opts), {}, {
            transformer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$DBSMdVzR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataTransformer"])((_opts$transformer = opts === null || opts === void 0 ? void 0 : opts.transformer) !== null && _opts$transformer !== void 0 ? _opts$transformer : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$DBSMdVzR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTransformer"]),
            isDev: (_opts$isDev = opts === null || opts === void 0 ? void 0 : opts.isDev) !== null && _opts$isDev !== void 0 ? _opts$isDev : ((_globalThis$process$1 = globalThis.process) === null || _globalThis$process$1 === void 0 ? void 0 : _globalThis$process$1.env["NODE_ENV"]) !== "production",
            allowOutsideOfServer: (_opts$allowOutsideOfS = opts === null || opts === void 0 ? void 0 : opts.allowOutsideOfServer) !== null && _opts$allowOutsideOfS !== void 0 ? _opts$allowOutsideOfS : false,
            errorFormatter: (_opts$errorFormatter = opts === null || opts === void 0 ? void 0 : opts.errorFormatter) !== null && _opts$errorFormatter !== void 0 ? _opts$errorFormatter : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$DBSMdVzR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultFormatter"],
            isServer: (_opts$isServer = opts === null || opts === void 0 ? void 0 : opts.isServer) !== null && _opts$isServer !== void 0 ? _opts$isServer : isServerDefault,
            $types: null
        });
        {
            var _opts$isServer2;
            const isServer = (_opts$isServer2 = opts === null || opts === void 0 ? void 0 : opts.isServer) !== null && _opts$isServer2 !== void 0 ? _opts$isServer2 : isServerDefault;
            if (!isServer && (opts === null || opts === void 0 ? void 0 : opts.allowOutsideOfServer) !== true) throw new Error(`You're trying to use @trpc/server in a non-server environment. This is not supported by default.`);
        }
        return {
            _config: config,
            procedure: createBuilder({
                meta: opts === null || opts === void 0 ? void 0 : opts.defaultMeta
            }),
            middleware: createMiddlewareFactory(),
            router: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$DBSMdVzR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRouterFactory"])(config),
            mergeRouters: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$DBSMdVzR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRouters"],
            createCallerFactory: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$DBSMdVzR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCallerFactory"])()
        };
    }
};
/**
* Builder to initialize the tRPC root object - use this exactly once per backend
* @see https://trpc.io/docs/v11/quickstart
*/ const initTRPC = new TRPCBuilder();
;
 //# sourceMappingURL=initTRPC-DGaJyg8t.mjs.map
}),
"[project]/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    "use strict";
    var e = {
        114: function(e) {
            function assertPath(e) {
                if (typeof e !== "string") {
                    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
                }
            }
            function normalizeStringPosix(e, r) {
                var t = "";
                var i = 0;
                var n = -1;
                var a = 0;
                var f;
                for(var l = 0; l <= e.length; ++l){
                    if (l < e.length) f = e.charCodeAt(l);
                    else if (f === 47) break;
                    else f = 47;
                    if (f === 47) {
                        if (n === l - 1 || a === 1) {} else if (n !== l - 1 && a === 2) {
                            if (t.length < 2 || i !== 2 || t.charCodeAt(t.length - 1) !== 46 || t.charCodeAt(t.length - 2) !== 46) {
                                if (t.length > 2) {
                                    var s = t.lastIndexOf("/");
                                    if (s !== t.length - 1) {
                                        if (s === -1) {
                                            t = "";
                                            i = 0;
                                        } else {
                                            t = t.slice(0, s);
                                            i = t.length - 1 - t.lastIndexOf("/");
                                        }
                                        n = l;
                                        a = 0;
                                        continue;
                                    }
                                } else if (t.length === 2 || t.length === 1) {
                                    t = "";
                                    i = 0;
                                    n = l;
                                    a = 0;
                                    continue;
                                }
                            }
                            if (r) {
                                if (t.length > 0) t += "/..";
                                else t = "..";
                                i = 2;
                            }
                        } else {
                            if (t.length > 0) t += "/" + e.slice(n + 1, l);
                            else t = e.slice(n + 1, l);
                            i = l - n - 1;
                        }
                        n = l;
                        a = 0;
                    } else if (f === 46 && a !== -1) {
                        ++a;
                    } else {
                        a = -1;
                    }
                }
                return t;
            }
            function _format(e, r) {
                var t = r.dir || r.root;
                var i = r.base || (r.name || "") + (r.ext || "");
                if (!t) {
                    return i;
                }
                if (t === r.root) {
                    return t + i;
                }
                return t + e + i;
            }
            var r = {
                resolve: function resolve() {
                    var e = "";
                    var r = false;
                    var t;
                    for(var i = arguments.length - 1; i >= -1 && !r; i--){
                        var n;
                        if (i >= 0) n = arguments[i];
                        else {
                            if (t === undefined) t = "";
                            n = t;
                        }
                        assertPath(n);
                        if (n.length === 0) {
                            continue;
                        }
                        e = n + "/" + e;
                        r = n.charCodeAt(0) === 47;
                    }
                    e = normalizeStringPosix(e, !r);
                    if (r) {
                        if (e.length > 0) return "/" + e;
                        else return "/";
                    } else if (e.length > 0) {
                        return e;
                    } else {
                        return ".";
                    }
                },
                normalize: function normalize(e) {
                    assertPath(e);
                    if (e.length === 0) return ".";
                    var r = e.charCodeAt(0) === 47;
                    var t = e.charCodeAt(e.length - 1) === 47;
                    e = normalizeStringPosix(e, !r);
                    if (e.length === 0 && !r) e = ".";
                    if (e.length > 0 && t) e += "/";
                    if (r) return "/" + e;
                    return e;
                },
                isAbsolute: function isAbsolute(e) {
                    assertPath(e);
                    return e.length > 0 && e.charCodeAt(0) === 47;
                },
                join: function join() {
                    if (arguments.length === 0) return ".";
                    var e;
                    for(var t = 0; t < arguments.length; ++t){
                        var i = arguments[t];
                        assertPath(i);
                        if (i.length > 0) {
                            if (e === undefined) e = i;
                            else e += "/" + i;
                        }
                    }
                    if (e === undefined) return ".";
                    return r.normalize(e);
                },
                relative: function relative(e, t) {
                    assertPath(e);
                    assertPath(t);
                    if (e === t) return "";
                    e = r.resolve(e);
                    t = r.resolve(t);
                    if (e === t) return "";
                    var i = 1;
                    for(; i < e.length; ++i){
                        if (e.charCodeAt(i) !== 47) break;
                    }
                    var n = e.length;
                    var a = n - i;
                    var f = 1;
                    for(; f < t.length; ++f){
                        if (t.charCodeAt(f) !== 47) break;
                    }
                    var l = t.length;
                    var s = l - f;
                    var o = a < s ? a : s;
                    var u = -1;
                    var h = 0;
                    for(; h <= o; ++h){
                        if (h === o) {
                            if (s > o) {
                                if (t.charCodeAt(f + h) === 47) {
                                    return t.slice(f + h + 1);
                                } else if (h === 0) {
                                    return t.slice(f + h);
                                }
                            } else if (a > o) {
                                if (e.charCodeAt(i + h) === 47) {
                                    u = h;
                                } else if (h === 0) {
                                    u = 0;
                                }
                            }
                            break;
                        }
                        var c = e.charCodeAt(i + h);
                        var v = t.charCodeAt(f + h);
                        if (c !== v) break;
                        else if (c === 47) u = h;
                    }
                    var g = "";
                    for(h = i + u + 1; h <= n; ++h){
                        if (h === n || e.charCodeAt(h) === 47) {
                            if (g.length === 0) g += "..";
                            else g += "/..";
                        }
                    }
                    if (g.length > 0) return g + t.slice(f + u);
                    else {
                        f += u;
                        if (t.charCodeAt(f) === 47) ++f;
                        return t.slice(f);
                    }
                },
                _makeLong: function _makeLong(e) {
                    return e;
                },
                dirname: function dirname(e) {
                    assertPath(e);
                    if (e.length === 0) return ".";
                    var r = e.charCodeAt(0);
                    var t = r === 47;
                    var i = -1;
                    var n = true;
                    for(var a = e.length - 1; a >= 1; --a){
                        r = e.charCodeAt(a);
                        if (r === 47) {
                            if (!n) {
                                i = a;
                                break;
                            }
                        } else {
                            n = false;
                        }
                    }
                    if (i === -1) return t ? "/" : ".";
                    if (t && i === 1) return "//";
                    return e.slice(0, i);
                },
                basename: function basename(e, r) {
                    if (r !== undefined && typeof r !== "string") throw new TypeError('"ext" argument must be a string');
                    assertPath(e);
                    var t = 0;
                    var i = -1;
                    var n = true;
                    var a;
                    if (r !== undefined && r.length > 0 && r.length <= e.length) {
                        if (r.length === e.length && r === e) return "";
                        var f = r.length - 1;
                        var l = -1;
                        for(a = e.length - 1; a >= 0; --a){
                            var s = e.charCodeAt(a);
                            if (s === 47) {
                                if (!n) {
                                    t = a + 1;
                                    break;
                                }
                            } else {
                                if (l === -1) {
                                    n = false;
                                    l = a + 1;
                                }
                                if (f >= 0) {
                                    if (s === r.charCodeAt(f)) {
                                        if (--f === -1) {
                                            i = a;
                                        }
                                    } else {
                                        f = -1;
                                        i = l;
                                    }
                                }
                            }
                        }
                        if (t === i) i = l;
                        else if (i === -1) i = e.length;
                        return e.slice(t, i);
                    } else {
                        for(a = e.length - 1; a >= 0; --a){
                            if (e.charCodeAt(a) === 47) {
                                if (!n) {
                                    t = a + 1;
                                    break;
                                }
                            } else if (i === -1) {
                                n = false;
                                i = a + 1;
                            }
                        }
                        if (i === -1) return "";
                        return e.slice(t, i);
                    }
                },
                extname: function extname(e) {
                    assertPath(e);
                    var r = -1;
                    var t = 0;
                    var i = -1;
                    var n = true;
                    var a = 0;
                    for(var f = e.length - 1; f >= 0; --f){
                        var l = e.charCodeAt(f);
                        if (l === 47) {
                            if (!n) {
                                t = f + 1;
                                break;
                            }
                            continue;
                        }
                        if (i === -1) {
                            n = false;
                            i = f + 1;
                        }
                        if (l === 46) {
                            if (r === -1) r = f;
                            else if (a !== 1) a = 1;
                        } else if (r !== -1) {
                            a = -1;
                        }
                    }
                    if (r === -1 || i === -1 || a === 0 || a === 1 && r === i - 1 && r === t + 1) {
                        return "";
                    }
                    return e.slice(r, i);
                },
                format: function format(e) {
                    if (e === null || typeof e !== "object") {
                        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                    }
                    return _format("/", e);
                },
                parse: function parse(e) {
                    assertPath(e);
                    var r = {
                        root: "",
                        dir: "",
                        base: "",
                        ext: "",
                        name: ""
                    };
                    if (e.length === 0) return r;
                    var t = e.charCodeAt(0);
                    var i = t === 47;
                    var n;
                    if (i) {
                        r.root = "/";
                        n = 1;
                    } else {
                        n = 0;
                    }
                    var a = -1;
                    var f = 0;
                    var l = -1;
                    var s = true;
                    var o = e.length - 1;
                    var u = 0;
                    for(; o >= n; --o){
                        t = e.charCodeAt(o);
                        if (t === 47) {
                            if (!s) {
                                f = o + 1;
                                break;
                            }
                            continue;
                        }
                        if (l === -1) {
                            s = false;
                            l = o + 1;
                        }
                        if (t === 46) {
                            if (a === -1) a = o;
                            else if (u !== 1) u = 1;
                        } else if (a !== -1) {
                            u = -1;
                        }
                    }
                    if (a === -1 || l === -1 || u === 0 || u === 1 && a === l - 1 && a === f + 1) {
                        if (l !== -1) {
                            if (f === 0 && i) r.base = r.name = e.slice(1, l);
                            else r.base = r.name = e.slice(f, l);
                        }
                    } else {
                        if (f === 0 && i) {
                            r.name = e.slice(1, a);
                            r.base = e.slice(1, l);
                        } else {
                            r.name = e.slice(f, a);
                            r.base = e.slice(f, l);
                        }
                        r.ext = e.slice(a, l);
                    }
                    if (f > 0) r.dir = e.slice(0, f - 1);
                    else if (i) r.dir = "/";
                    return r;
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null
            };
            r.posix = r;
            e.exports = r;
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var i = r[t];
        if (i !== undefined) {
            return i.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var a = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            a = false;
        } finally{
            if (a) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/path-browserify") + "/";
    var t = __nccwpck_require__(114);
    module.exports = t;
})();
}),
"[project]/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/querystring-es3/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    "use strict";
    var e = {
        815: function(e) {
            function hasOwnProperty(e, r) {
                return Object.prototype.hasOwnProperty.call(e, r);
            }
            e.exports = function(e, n, t, o) {
                n = n || "&";
                t = t || "=";
                var a = {};
                if (typeof e !== "string" || e.length === 0) {
                    return a;
                }
                var i = /\+/g;
                e = e.split(n);
                var u = 1e3;
                if (o && typeof o.maxKeys === "number") {
                    u = o.maxKeys;
                }
                var c = e.length;
                if (u > 0 && c > u) {
                    c = u;
                }
                for(var p = 0; p < c; ++p){
                    var f = e[p].replace(i, "%20"), s = f.indexOf(t), _, l, y, d;
                    if (s >= 0) {
                        _ = f.substr(0, s);
                        l = f.substr(s + 1);
                    } else {
                        _ = f;
                        l = "";
                    }
                    y = decodeURIComponent(_);
                    d = decodeURIComponent(l);
                    if (!hasOwnProperty(a, y)) {
                        a[y] = d;
                    } else if (r(a[y])) {
                        a[y].push(d);
                    } else {
                        a[y] = [
                            a[y],
                            d
                        ];
                    }
                }
                return a;
            };
            var r = Array.isArray || function(e) {
                return Object.prototype.toString.call(e) === "[object Array]";
            };
        },
        577: function(e) {
            var stringifyPrimitive = function(e) {
                switch(typeof e){
                    case "string":
                        return e;
                    case "boolean":
                        return e ? "true" : "false";
                    case "number":
                        return isFinite(e) ? e : "";
                    default:
                        return "";
                }
            };
            e.exports = function(e, t, o, a) {
                t = t || "&";
                o = o || "=";
                if (e === null) {
                    e = undefined;
                }
                if (typeof e === "object") {
                    return map(n(e), function(n) {
                        var a = encodeURIComponent(stringifyPrimitive(n)) + o;
                        if (r(e[n])) {
                            return map(e[n], function(e) {
                                return a + encodeURIComponent(stringifyPrimitive(e));
                            }).join(t);
                        } else {
                            return a + encodeURIComponent(stringifyPrimitive(e[n]));
                        }
                    }).join(t);
                }
                if (!a) return "";
                return encodeURIComponent(stringifyPrimitive(a)) + o + encodeURIComponent(stringifyPrimitive(e));
            };
            var r = Array.isArray || function(e) {
                return Object.prototype.toString.call(e) === "[object Array]";
            };
            function map(e, r) {
                if (e.map) return e.map(r);
                var n = [];
                for(var t = 0; t < e.length; t++){
                    n.push(r(e[t], t));
                }
                return n;
            }
            var n = Object.keys || function(e) {
                var r = [];
                for(var n in e){
                    if (Object.prototype.hasOwnProperty.call(e, n)) r.push(n);
                }
                return r;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(n) {
        var t = r[n];
        if (t !== undefined) {
            return t.exports;
        }
        var o = r[n] = {
            exports: {}
        };
        var a = true;
        try {
            e[n](o, o.exports, __nccwpck_require__);
            a = false;
        } finally{
            if (a) delete r[n];
        }
        return o.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/querystring-es3") + "/";
    var n = {};
    !function() {
        var e = n;
        e.decode = e.parse = __nccwpck_require__(815);
        e.encode = e.stringify = __nccwpck_require__(577);
    }();
    module.exports = n;
})();
}),
"[project]/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/native-url/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var e = {
        452: function(e) {
            "use strict";
            e.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/querystring-es3/index.js [app-client] (ecmascript)");
        }
    };
    var t = {};
    function __nccwpck_require__(o) {
        var a = t[o];
        if (a !== undefined) {
            return a.exports;
        }
        var s = t[o] = {
            exports: {}
        };
        var n = true;
        try {
            e[o](s, s.exports, __nccwpck_require__);
            n = false;
        } finally{
            if (n) delete t[o];
        }
        return s.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/native-url") + "/";
    var o = {};
    !function() {
        var e = o;
        var t, a = (t = __nccwpck_require__(452)) && "object" == typeof t && "default" in t ? t.default : t, s = /https?|ftp|gopher|file/;
        function r(e) {
            "string" == typeof e && (e = d(e));
            var t = function(e, t, o) {
                var a = e.auth, s = e.hostname, n = e.protocol || "", p = e.pathname || "", c = e.hash || "", i = e.query || "", u = !1;
                a = a ? encodeURIComponent(a).replace(/%3A/i, ":") + "@" : "", e.host ? u = a + e.host : s && (u = a + (~s.indexOf(":") ? "[" + s + "]" : s), e.port && (u += ":" + e.port)), i && "object" == typeof i && (i = t.encode(i));
                var f = e.search || i && "?" + i || "";
                return n && ":" !== n.substr(-1) && (n += ":"), e.slashes || (!n || o.test(n)) && !1 !== u ? (u = "//" + (u || ""), p && "/" !== p[0] && (p = "/" + p)) : u || (u = ""), c && "#" !== c[0] && (c = "#" + c), f && "?" !== f[0] && (f = "?" + f), {
                    protocol: n,
                    host: u,
                    pathname: p = p.replace(/[?#]/g, encodeURIComponent),
                    search: f = f.replace("#", "%23"),
                    hash: c
                };
            }(e, a, s);
            return "" + t.protocol + t.host + t.pathname + t.search + t.hash;
        }
        var n = "http://", p = "w.w", c = n + p, i = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i, u = /https?|ftp|gopher|file/;
        function h(e, t) {
            var o = "string" == typeof e ? d(e) : e;
            e = "object" == typeof e ? r(e) : e;
            var a = d(t), s = "";
            o.protocol && !o.slashes && (s = o.protocol, e = e.replace(o.protocol, ""), s += "/" === t[0] || "/" === e[0] ? "/" : ""), s && a.protocol && (s = "", a.slashes || (s = a.protocol, t = t.replace(a.protocol, "")));
            var p = e.match(i);
            p && !a.protocol && (e = e.substr((s = p[1] + (p[2] || "")).length), /^\/\/[^/]/.test(t) && (s = s.slice(0, -1)));
            var f = new URL(e, c + "/"), m = new URL(t, f).toString().replace(c, ""), v = a.protocol || o.protocol;
            return v += o.slashes || a.slashes ? "//" : "", !s && v ? m = m.replace(n, v) : s && (m = m.replace(n, "")), u.test(m) || ~t.indexOf(".") || "/" === e.slice(-1) || "/" === t.slice(-1) || "/" !== m.slice(-1) || (m = m.slice(0, -1)), s && (m = s + ("/" === m[0] ? m.substr(1) : m)), m;
        }
        function l() {}
        l.prototype.parse = d, l.prototype.format = r, l.prototype.resolve = h, l.prototype.resolveObject = h;
        var f = /^https?|ftp|gopher|file/, m = /^(.*?)([#?].*)/, v = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i, _ = /^([a-z0-9.+-]*:)?\/\/\/*/i, b = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
        function d(e, t, o) {
            if (void 0 === t && (t = !1), void 0 === o && (o = !1), e && "object" == typeof e && e instanceof l) return e;
            var s = (e = e.trim()).match(m);
            e = s ? s[1].replace(/\\/g, "/") + s[2] : e.replace(/\\/g, "/"), b.test(e) && "/" !== e.slice(-1) && (e += "/");
            var n = !/(^javascript)/.test(e) && e.match(v), i = _.test(e), u = "";
            n && (f.test(n[1]) || (u = n[1].toLowerCase(), e = "" + n[2] + n[3]), n[2] || (i = !1, f.test(n[1]) ? (u = n[1], e = "" + n[3]) : e = "//" + n[3]), 3 !== n[2].length && 1 !== n[2].length || (u = n[1], e = "/" + n[3]));
            var g, y = (s ? s[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/), w = y && y[1], x = new l, C = "", U = "";
            try {
                g = new URL(e);
            } catch (t) {
                C = t, u || o || !/^\/\//.test(e) || /^\/\/.+[@.]/.test(e) || (U = "/", e = e.substr(1));
                try {
                    g = new URL(e, c);
                } catch (e) {
                    return x.protocol = u, x.href = u, x;
                }
            }
            x.slashes = i && !U, x.host = g.host === p ? "" : g.host, x.hostname = g.hostname === p ? "" : g.hostname.replace(/(\[|\])/g, ""), x.protocol = C ? u || null : g.protocol, x.search = g.search.replace(/\\/g, "%5C"), x.hash = g.hash.replace(/\\/g, "%5C");
            var j = e.split("#");
            !x.search && ~j[0].indexOf("?") && (x.search = "?"), x.hash || "" !== j[1] || (x.hash = "#"), x.query = t ? a.decode(g.search.substr(1)) : x.search.substr(1), x.pathname = U + (n ? function(e) {
                return e.replace(/['^|`]/g, function(e) {
                    return "%" + e.charCodeAt().toString(16).toUpperCase();
                }).replace(/((?:%[0-9A-F]{2})+)/g, function(e, t) {
                    try {
                        return decodeURIComponent(t).split("").map(function(e) {
                            var t = e.charCodeAt();
                            return t > 256 || /^[a-z0-9]$/i.test(e) ? e : "%" + t.toString(16).toUpperCase();
                        }).join("");
                    } catch (e) {
                        return t;
                    }
                });
            }(g.pathname) : g.pathname), "about:" === x.protocol && "blank" === x.pathname && (x.protocol = "", x.pathname = ""), C && "/" !== e[0] && (x.pathname = x.pathname.substr(1)), u && !f.test(u) && "/" !== e.slice(-1) && "/" === x.pathname && (x.pathname = ""), x.path = x.pathname + x.search, x.auth = [
                g.username,
                g.password
            ].map(decodeURIComponent).filter(Boolean).join(":"), x.port = g.port, w && !x.host.endsWith(w) && (x.host += w, x.port = w.slice(1)), x.href = U ? "" + x.pathname + x.search + x.hash : r(x);
            var q = /^(file)/.test(x.href) ? [
                "host",
                "hostname"
            ] : [];
            return Object.keys(x).forEach(function(e) {
                ~q.indexOf(e) || (x[e] = x[e] || null);
            }), x;
        }
        e.parse = d, e.format = r, e.resolve = h, e.resolveObject = function(e, t) {
            return d(h(e, t));
        }, e.Url = l;
    }();
    module.exports = o;
})();
}),
"[project]/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var r = e.length;
                if (r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = r;
                var f = t === r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var r = getLens(e);
                var t = r[0];
                var f = r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = r >> 16 & 255;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                if (o === 2) {
                    r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = r & 255;
                }
                if (o === 1) {
                    r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    r = e[f - 1];
                    i.push(t[r >> 2] + t[r << 4 & 63] + "==");
                } else if (n === 2) {
                    r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[r >> 10] + t[r >> 4 & 63] + t[r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var r = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var r = new Uint8Array(e);
                Object.setPrototypeOf(r, Buffer.prototype);
                return r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var t = byteLength(e, r) | 0;
                var f = createBuffer(t);
                var n = f.write(e, r);
                if (n !== t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var r = e.length < 0 ? 0 : checked(e.length) | 0;
                var t = createBuffer(r);
                for(var f = 0; f < r; f += 1){
                    t[f] = e[f] & 255;
                }
                return t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var r = checked(e.length) | 0;
                    var t = createBuffer(r);
                    if (t.length === 0) {
                        return t;
                    }
                    e.copy(t, 0, 0, r);
                    return t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (t < f) return -1;
                if (f < t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var t;
                if (r === undefined) {
                    r = 0;
                    for(t = 0; t < e.length; ++t){
                        r += e[t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(t = 0; t < e.length; ++t){
                    var i = e[t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof e);
                }
                var t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return t * 2;
                        case "hex":
                            return t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var r = 0; r < e; r += 2){
                    swap(this, r, r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var r = 0; r < e; r += 4){
                    swap(this, r, r + 3);
                    swap(this, r + 1, r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var r = 0; r < e; r += 8){
                    swap(this, r, r + 7);
                    swap(this, r + 1, r + 6);
                    swap(this, r + 2, r + 5);
                    swap(this, r + 3, r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof e);
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var r = e.length;
                if (r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var t = "";
                var f = 0;
                while(f < r){
                    t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var t = this.length;
                e = ~~e;
                r = r === undefined ? t : ~~r;
                if (e < 0) {
                    e += t;
                    if (e < 0) e = 0;
                } else if (e > t) {
                    e = t;
                }
                if (r < 0) {
                    r += t;
                    if (r < 0) r = 0;
                } else if (r > t) {
                    r = t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e] | this[e + 1] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e + 1] | this[e] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    t = e.charCodeAt(o);
                    if (t > 55295 && t < 57344) {
                        if (!n) {
                            if (t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = t;
                            continue;
                        }
                        if (t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = t;
                            continue;
                        }
                        t = (n - 55296 << 10 | t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(t);
                    } else if (t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(t >> 6 | 192, t & 63 | 128);
                    } else if (t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                    } else if (t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var r = [];
                for(var t = 0; t < e.length; ++t){
                    r.push(e.charCodeAt(t) & 255);
                }
                return r;
            }
            function utf16leToBytes(e, r) {
                var t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    t = e.charCodeAt(o);
                    f = t >> 8;
                    n = t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var r = new Array(256);
                for(var t = 0; t < 16; ++t){
                    var f = t * 16;
                    for(var n = 0; n < 16; ++n){
                        r[f + n] = e[t] + e[n];
                    }
                }
                return r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/buffer") + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();
}),
"[project]/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/os-browserify/browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/os-browserify") + "/";
    var n = {};
    !function() {
        var e = n;
        e.endianness = function() {
            return "LE";
        };
        e.hostname = function() {
            if (typeof location !== "undefined") {
                return location.hostname;
            } else return "";
        };
        e.loadavg = function() {
            return [];
        };
        e.uptime = function() {
            return 0;
        };
        e.freemem = function() {
            return Number.MAX_VALUE;
        };
        e.totalmem = function() {
            return Number.MAX_VALUE;
        };
        e.cpus = function() {
            return [];
        };
        e.type = function() {
            return "Browser";
        };
        e.release = function() {
            if (typeof navigator !== "undefined") {
                return navigator.appVersion;
            }
            return "";
        };
        e.networkInterfaces = e.getNetworkInterfaces = function() {
            return {};
        };
        e.arch = function() {
            return "javascript";
        };
        e.platform = function() {
            return "browser";
        };
        e.tmpdir = e.tmpDir = function() {
            return "/tmp";
        };
        e.EOL = "\n";
        e.homedir = function() {
            return "/";
        };
    }();
    module.exports = n;
})();
}),
"[project]/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
(function() {
    var r = {
        8992: function(r) {
            r.exports = function(r, e, n) {
                if (r.filter) return r.filter(e, n);
                if (void 0 === r || null === r) throw new TypeError;
                if ("function" != typeof e) throw new TypeError;
                var o = [];
                for(var i = 0; i < r.length; i++){
                    if (!t.call(r, i)) continue;
                    var a = r[i];
                    if (e.call(n, a, i, r)) o.push(a);
                }
                return o;
            };
            var t = Object.prototype.hasOwnProperty;
        },
        5555: function(r, t, e) {
            "use strict";
            var n = e(1212);
            var o = e(1909);
            var i = e(8737);
            var a = e(8772);
            r.exports = a || n.call(i, o);
        },
        9905: function(r, t, e) {
            "use strict";
            var n = e(1212);
            var o = e(1909);
            var i = e(5555);
            r.exports = function applyBind() {
                return i(n, o, arguments);
            };
        },
        1909: function(r) {
            "use strict";
            r.exports = Function.prototype.apply;
        },
        8737: function(r) {
            "use strict";
            r.exports = Function.prototype.call;
        },
        7152: function(r, t, e) {
            "use strict";
            var n = e(1212);
            var o = e(8202);
            var i = e(8737);
            var a = e(5555);
            r.exports = function callBindBasic(r) {
                if (r.length < 1 || typeof r[0] !== "function") {
                    throw new o("a function is required");
                }
                return a(n, i, r);
            };
        },
        8772: function(r) {
            "use strict";
            r.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
        },
        516: function(r, t, e) {
            "use strict";
            var n = e(3197);
            var o = e(9042);
            var i = o(n("String.prototype.indexOf"));
            r.exports = function callBoundIntrinsic(r, t) {
                var e = n(r, !!t);
                if (typeof e === "function" && i(r, ".prototype.") > -1) {
                    return o(e);
                }
                return e;
            };
        },
        9042: function(r, t, e) {
            "use strict";
            var n = e(3143);
            var o = e(446);
            var i = e(7152);
            var a = e(9905);
            r.exports = function callBind(r) {
                var t = i(arguments);
                var e = r.length - (arguments.length - 1);
                return n(t, 1 + (e > 0 ? e : 0), true);
            };
            if (o) {
                o(r.exports, "apply", {
                    value: a
                });
            } else {
                r.exports.apply = a;
            }
        },
        819: function(r, t, e) {
            "use strict";
            var n = e(446);
            var o = e(5182);
            var i = e(8202);
            var a = e(3990);
            r.exports = function defineDataProperty(r, t, e) {
                if (!r || typeof r !== "object" && typeof r !== "function") {
                    throw new i("`obj` must be an object or a function`");
                }
                if (typeof t !== "string" && typeof t !== "symbol") {
                    throw new i("`property` must be a string or a symbol`");
                }
                if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
                    throw new i("`nonEnumerable`, if provided, must be a boolean or null");
                }
                if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
                    throw new i("`nonWritable`, if provided, must be a boolean or null");
                }
                if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
                    throw new i("`nonConfigurable`, if provided, must be a boolean or null");
                }
                if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
                    throw new i("`loose`, if provided, must be a boolean");
                }
                var f = arguments.length > 3 ? arguments[3] : null;
                var u = arguments.length > 4 ? arguments[4] : null;
                var s = arguments.length > 5 ? arguments[5] : null;
                var c = arguments.length > 6 ? arguments[6] : false;
                var p = !!a && a(r, t);
                if (n) {
                    n(r, t, {
                        configurable: s === null && p ? p.configurable : !s,
                        enumerable: f === null && p ? p.enumerable : !f,
                        value: e,
                        writable: u === null && p ? p.writable : !u
                    });
                } else if (c || !f && !u && !s) {
                    r[t] = e;
                } else {
                    throw new o("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
                }
            };
        },
        6211: function(r, t, e) {
            "use strict";
            var n = e(7152);
            var o = e(3990);
            var i;
            try {
                i = [].__proto__ === Array.prototype;
            } catch (r) {
                if (!r || typeof r !== "object" || !("code" in r) || r.code !== "ERR_PROTO_ACCESS") {
                    throw r;
                }
            }
            var a = !!i && o && o(Object.prototype, "__proto__");
            var f = Object;
            var u = f.getPrototypeOf;
            r.exports = a && typeof a.get === "function" ? n([
                a.get
            ]) : typeof u === "function" ? function getDunder(r) {
                return u(r == null ? r : f(r));
            } : false;
        },
        446: function(r) {
            "use strict";
            var t = Object.defineProperty || false;
            if (t) {
                try {
                    t({}, "a", {
                        value: 1
                    });
                } catch (r) {
                    t = false;
                }
            }
            r.exports = t;
        },
        7181: function(r) {
            "use strict";
            r.exports = EvalError;
        },
        1545: function(r) {
            "use strict";
            r.exports = Error;
        },
        22: function(r) {
            "use strict";
            r.exports = RangeError;
        },
        2803: function(r) {
            "use strict";
            r.exports = ReferenceError;
        },
        5182: function(r) {
            "use strict";
            r.exports = SyntaxError;
        },
        8202: function(r) {
            "use strict";
            r.exports = TypeError;
        },
        3284: function(r) {
            "use strict";
            r.exports = URIError;
        },
        2811: function(r) {
            "use strict";
            r.exports = Object;
        },
        6144: function(r) {
            var t = Object.prototype.hasOwnProperty;
            var e = Object.prototype.toString;
            r.exports = function forEach(r, n, o) {
                if (e.call(n) !== "[object Function]") {
                    throw new TypeError("iterator must be a function");
                }
                var i = r.length;
                if (i === +i) {
                    for(var a = 0; a < i; a++){
                        n.call(o, r[a], a, r);
                    }
                } else {
                    for(var f in r){
                        if (t.call(r, f)) {
                            n.call(o, r[f], f, r);
                        }
                    }
                }
            };
        },
        3136: function(r) {
            "use strict";
            var t = "Function.prototype.bind called on incompatible ";
            var e = Object.prototype.toString;
            var n = Math.max;
            var o = "[object Function]";
            var i = function concatty(r, t) {
                var e = [];
                for(var n = 0; n < r.length; n += 1){
                    e[n] = r[n];
                }
                for(var o = 0; o < t.length; o += 1){
                    e[o + r.length] = t[o];
                }
                return e;
            };
            var a = function slicy(r, t) {
                var e = [];
                for(var n = t || 0, o = 0; n < r.length; n += 1, o += 1){
                    e[o] = r[n];
                }
                return e;
            };
            var joiny = function(r, t) {
                var e = "";
                for(var n = 0; n < r.length; n += 1){
                    e += r[n];
                    if (n + 1 < r.length) {
                        e += t;
                    }
                }
                return e;
            };
            r.exports = function bind(r) {
                var f = this;
                if (typeof f !== "function" || e.apply(f) !== o) {
                    throw new TypeError(t + f);
                }
                var u = a(arguments, 1);
                var s;
                var binder = function() {
                    if (this instanceof s) {
                        var t = f.apply(this, i(u, arguments));
                        if (Object(t) === t) {
                            return t;
                        }
                        return this;
                    }
                    return f.apply(r, i(u, arguments));
                };
                var c = n(0, f.length - u.length);
                var p = [];
                for(var y = 0; y < c; y++){
                    p[y] = "$" + y;
                }
                s = Function("binder", "return function (" + joiny(p, ",") + "){ return binder.apply(this,arguments); }")(binder);
                if (f.prototype) {
                    var l = function Empty() {};
                    l.prototype = f.prototype;
                    s.prototype = new l;
                    l.prototype = null;
                }
                return s;
            };
        },
        1212: function(r, t, e) {
            "use strict";
            var n = e(3136);
            r.exports = Function.prototype.bind || n;
        },
        3197: function(r, t, e) {
            "use strict";
            var n;
            var o = e(2811);
            var i = e(1545);
            var a = e(7181);
            var f = e(22);
            var u = e(2803);
            var s = e(5182);
            var c = e(8202);
            var p = e(3284);
            var y = e(7173);
            var l = e(847);
            var g = e(2916);
            var v = e(9882);
            var b = e(3291);
            var d = e(553);
            var m = e(8629);
            var h = Function;
            var getEvalledConstructor = function(r) {
                try {
                    return h('"use strict"; return (' + r + ").constructor;")();
                } catch (r) {}
            };
            var S = e(3990);
            var A = e(446);
            var throwTypeError = function() {
                throw new c;
            };
            var w = S ? function() {
                try {
                    arguments.callee;
                    return throwTypeError;
                } catch (r) {
                    try {
                        return S(arguments, "callee").get;
                    } catch (r) {
                        return throwTypeError;
                    }
                }
            }() : throwTypeError;
            var O = e(4871)();
            var j = e(699);
            var P = e(7823);
            var x = e(7904);
            var B = e(1909);
            var E = e(8737);
            var T = {};
            var I = typeof Uint8Array === "undefined" || !j ? n : j(Uint8Array);
            var k = {
                __proto__: null,
                "%AggregateError%": typeof AggregateError === "undefined" ? n : AggregateError,
                "%Array%": Array,
                "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? n : ArrayBuffer,
                "%ArrayIteratorPrototype%": O && j ? j([][Symbol.iterator]()) : n,
                "%AsyncFromSyncIteratorPrototype%": n,
                "%AsyncFunction%": T,
                "%AsyncGenerator%": T,
                "%AsyncGeneratorFunction%": T,
                "%AsyncIteratorPrototype%": T,
                "%Atomics%": typeof Atomics === "undefined" ? n : Atomics,
                "%BigInt%": typeof BigInt === "undefined" ? n : BigInt,
                "%BigInt64Array%": typeof BigInt64Array === "undefined" ? n : BigInt64Array,
                "%BigUint64Array%": typeof BigUint64Array === "undefined" ? n : BigUint64Array,
                "%Boolean%": Boolean,
                "%DataView%": typeof DataView === "undefined" ? n : DataView,
                "%Date%": Date,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": i,
                "%eval%": eval,
                "%EvalError%": a,
                "%Float16Array%": typeof Float16Array === "undefined" ? n : Float16Array,
                "%Float32Array%": typeof Float32Array === "undefined" ? n : Float32Array,
                "%Float64Array%": typeof Float64Array === "undefined" ? n : Float64Array,
                "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? n : FinalizationRegistry,
                "%Function%": h,
                "%GeneratorFunction%": T,
                "%Int8Array%": typeof Int8Array === "undefined" ? n : Int8Array,
                "%Int16Array%": typeof Int16Array === "undefined" ? n : Int16Array,
                "%Int32Array%": typeof Int32Array === "undefined" ? n : Int32Array,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": O && j ? j(j([][Symbol.iterator]())) : n,
                "%JSON%": typeof JSON === "object" ? JSON : n,
                "%Map%": typeof Map === "undefined" ? n : Map,
                "%MapIteratorPrototype%": typeof Map === "undefined" || !O || !j ? n : j((new Map)[Symbol.iterator]()),
                "%Math%": Math,
                "%Number%": Number,
                "%Object%": o,
                "%Object.getOwnPropertyDescriptor%": S,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": typeof Promise === "undefined" ? n : Promise,
                "%Proxy%": typeof Proxy === "undefined" ? n : Proxy,
                "%RangeError%": f,
                "%ReferenceError%": u,
                "%Reflect%": typeof Reflect === "undefined" ? n : Reflect,
                "%RegExp%": RegExp,
                "%Set%": typeof Set === "undefined" ? n : Set,
                "%SetIteratorPrototype%": typeof Set === "undefined" || !O || !j ? n : j((new Set)[Symbol.iterator]()),
                "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? n : SharedArrayBuffer,
                "%String%": String,
                "%StringIteratorPrototype%": O && j ? j(""[Symbol.iterator]()) : n,
                "%Symbol%": O ? Symbol : n,
                "%SyntaxError%": s,
                "%ThrowTypeError%": w,
                "%TypedArray%": I,
                "%TypeError%": c,
                "%Uint8Array%": typeof Uint8Array === "undefined" ? n : Uint8Array,
                "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? n : Uint8ClampedArray,
                "%Uint16Array%": typeof Uint16Array === "undefined" ? n : Uint16Array,
                "%Uint32Array%": typeof Uint32Array === "undefined" ? n : Uint32Array,
                "%URIError%": p,
                "%WeakMap%": typeof WeakMap === "undefined" ? n : WeakMap,
                "%WeakRef%": typeof WeakRef === "undefined" ? n : WeakRef,
                "%WeakSet%": typeof WeakSet === "undefined" ? n : WeakSet,
                "%Function.prototype.call%": E,
                "%Function.prototype.apply%": B,
                "%Object.defineProperty%": A,
                "%Object.getPrototypeOf%": P,
                "%Math.abs%": y,
                "%Math.floor%": l,
                "%Math.max%": g,
                "%Math.min%": v,
                "%Math.pow%": b,
                "%Math.round%": d,
                "%Math.sign%": m,
                "%Reflect.getPrototypeOf%": x
            };
            if (j) {
                try {
                    null.error;
                } catch (r) {
                    var F = j(j(r));
                    k["%Error.prototype%"] = F;
                }
            }
            var U = function doEval(r) {
                var t;
                if (r === "%AsyncFunction%") {
                    t = getEvalledConstructor("async function () {}");
                } else if (r === "%GeneratorFunction%") {
                    t = getEvalledConstructor("function* () {}");
                } else if (r === "%AsyncGeneratorFunction%") {
                    t = getEvalledConstructor("async function* () {}");
                } else if (r === "%AsyncGenerator%") {
                    var e = doEval("%AsyncGeneratorFunction%");
                    if (e) {
                        t = e.prototype;
                    }
                } else if (r === "%AsyncIteratorPrototype%") {
                    var n = doEval("%AsyncGenerator%");
                    if (n && j) {
                        t = j(n.prototype);
                    }
                }
                k[r] = t;
                return t;
            };
            var M = {
                __proto__: null,
                "%ArrayBufferPrototype%": [
                    "ArrayBuffer",
                    "prototype"
                ],
                "%ArrayPrototype%": [
                    "Array",
                    "prototype"
                ],
                "%ArrayProto_entries%": [
                    "Array",
                    "prototype",
                    "entries"
                ],
                "%ArrayProto_forEach%": [
                    "Array",
                    "prototype",
                    "forEach"
                ],
                "%ArrayProto_keys%": [
                    "Array",
                    "prototype",
                    "keys"
                ],
                "%ArrayProto_values%": [
                    "Array",
                    "prototype",
                    "values"
                ],
                "%AsyncFunctionPrototype%": [
                    "AsyncFunction",
                    "prototype"
                ],
                "%AsyncGenerator%": [
                    "AsyncGeneratorFunction",
                    "prototype"
                ],
                "%AsyncGeneratorPrototype%": [
                    "AsyncGeneratorFunction",
                    "prototype",
                    "prototype"
                ],
                "%BooleanPrototype%": [
                    "Boolean",
                    "prototype"
                ],
                "%DataViewPrototype%": [
                    "DataView",
                    "prototype"
                ],
                "%DatePrototype%": [
                    "Date",
                    "prototype"
                ],
                "%ErrorPrototype%": [
                    "Error",
                    "prototype"
                ],
                "%EvalErrorPrototype%": [
                    "EvalError",
                    "prototype"
                ],
                "%Float32ArrayPrototype%": [
                    "Float32Array",
                    "prototype"
                ],
                "%Float64ArrayPrototype%": [
                    "Float64Array",
                    "prototype"
                ],
                "%FunctionPrototype%": [
                    "Function",
                    "prototype"
                ],
                "%Generator%": [
                    "GeneratorFunction",
                    "prototype"
                ],
                "%GeneratorPrototype%": [
                    "GeneratorFunction",
                    "prototype",
                    "prototype"
                ],
                "%Int8ArrayPrototype%": [
                    "Int8Array",
                    "prototype"
                ],
                "%Int16ArrayPrototype%": [
                    "Int16Array",
                    "prototype"
                ],
                "%Int32ArrayPrototype%": [
                    "Int32Array",
                    "prototype"
                ],
                "%JSONParse%": [
                    "JSON",
                    "parse"
                ],
                "%JSONStringify%": [
                    "JSON",
                    "stringify"
                ],
                "%MapPrototype%": [
                    "Map",
                    "prototype"
                ],
                "%NumberPrototype%": [
                    "Number",
                    "prototype"
                ],
                "%ObjectPrototype%": [
                    "Object",
                    "prototype"
                ],
                "%ObjProto_toString%": [
                    "Object",
                    "prototype",
                    "toString"
                ],
                "%ObjProto_valueOf%": [
                    "Object",
                    "prototype",
                    "valueOf"
                ],
                "%PromisePrototype%": [
                    "Promise",
                    "prototype"
                ],
                "%PromiseProto_then%": [
                    "Promise",
                    "prototype",
                    "then"
                ],
                "%Promise_all%": [
                    "Promise",
                    "all"
                ],
                "%Promise_reject%": [
                    "Promise",
                    "reject"
                ],
                "%Promise_resolve%": [
                    "Promise",
                    "resolve"
                ],
                "%RangeErrorPrototype%": [
                    "RangeError",
                    "prototype"
                ],
                "%ReferenceErrorPrototype%": [
                    "ReferenceError",
                    "prototype"
                ],
                "%RegExpPrototype%": [
                    "RegExp",
                    "prototype"
                ],
                "%SetPrototype%": [
                    "Set",
                    "prototype"
                ],
                "%SharedArrayBufferPrototype%": [
                    "SharedArrayBuffer",
                    "prototype"
                ],
                "%StringPrototype%": [
                    "String",
                    "prototype"
                ],
                "%SymbolPrototype%": [
                    "Symbol",
                    "prototype"
                ],
                "%SyntaxErrorPrototype%": [
                    "SyntaxError",
                    "prototype"
                ],
                "%TypedArrayPrototype%": [
                    "TypedArray",
                    "prototype"
                ],
                "%TypeErrorPrototype%": [
                    "TypeError",
                    "prototype"
                ],
                "%Uint8ArrayPrototype%": [
                    "Uint8Array",
                    "prototype"
                ],
                "%Uint8ClampedArrayPrototype%": [
                    "Uint8ClampedArray",
                    "prototype"
                ],
                "%Uint16ArrayPrototype%": [
                    "Uint16Array",
                    "prototype"
                ],
                "%Uint32ArrayPrototype%": [
                    "Uint32Array",
                    "prototype"
                ],
                "%URIErrorPrototype%": [
                    "URIError",
                    "prototype"
                ],
                "%WeakMapPrototype%": [
                    "WeakMap",
                    "prototype"
                ],
                "%WeakSetPrototype%": [
                    "WeakSet",
                    "prototype"
                ]
            };
            var _ = e(1212);
            var D = e(3270);
            var R = _.call(E, Array.prototype.concat);
            var N = _.call(B, Array.prototype.splice);
            var W = _.call(E, String.prototype.replace);
            var V = _.call(E, String.prototype.slice);
            var C = _.call(E, RegExp.prototype.exec);
            var G = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
            var z = /\\(\\)?/g;
            var $ = function stringToPath(r) {
                var t = V(r, 0, 1);
                var e = V(r, -1);
                if (t === "%" && e !== "%") {
                    throw new s("invalid intrinsic syntax, expected closing `%`");
                } else if (e === "%" && t !== "%") {
                    throw new s("invalid intrinsic syntax, expected opening `%`");
                }
                var n = [];
                W(r, G, function(r, t, e, o) {
                    n[n.length] = e ? W(o, z, "$1") : t || r;
                });
                return n;
            };
            var J = function getBaseIntrinsic(r, t) {
                var e = r;
                var n;
                if (D(M, e)) {
                    n = M[e];
                    e = "%" + n[0] + "%";
                }
                if (D(k, e)) {
                    var o = k[e];
                    if (o === T) {
                        o = U(e);
                    }
                    if (typeof o === "undefined" && !t) {
                        throw new c("intrinsic " + r + " exists, but is not available. Please file an issue!");
                    }
                    return {
                        alias: n,
                        name: e,
                        value: o
                    };
                }
                throw new s("intrinsic " + r + " does not exist!");
            };
            r.exports = function GetIntrinsic(r, t) {
                if (typeof r !== "string" || r.length === 0) {
                    throw new c("intrinsic name must be a non-empty string");
                }
                if (arguments.length > 1 && typeof t !== "boolean") {
                    throw new c('"allowMissing" argument must be a boolean');
                }
                if (C(/^%?[^%]*%?$/, r) === null) {
                    throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                }
                var e = $(r);
                var o = e.length > 0 ? e[0] : "";
                var i = J("%" + o + "%", t);
                var a = i.name;
                var f = i.value;
                var u = false;
                var p = i.alias;
                if (p) {
                    o = p[0];
                    N(e, R([
                        0,
                        1
                    ], p));
                }
                for(var y = 1, l = true; y < e.length; y += 1){
                    var g = e[y];
                    var v = V(g, 0, 1);
                    var b = V(g, -1);
                    if ((v === '"' || v === "'" || v === "`" || b === '"' || b === "'" || b === "`") && v !== b) {
                        throw new s("property names with quotes must have matching quotes");
                    }
                    if (g === "constructor" || !l) {
                        u = true;
                    }
                    o += "." + g;
                    a = "%" + o + "%";
                    if (D(k, a)) {
                        f = k[a];
                    } else if (f != null) {
                        if (!(g in f)) {
                            if (!t) {
                                throw new c("base intrinsic for " + r + " exists, but the property is not available.");
                            }
                            return void n;
                        }
                        if (S && y + 1 >= e.length) {
                            var d = S(f, g);
                            l = !!d;
                            if (l && "get" in d && !("originalValue" in d.get)) {
                                f = d.get;
                            } else {
                                f = f[g];
                            }
                        } else {
                            l = D(f, g);
                            f = f[g];
                        }
                        if (l && !u) {
                            k[a] = f;
                        }
                    }
                }
                return f;
            };
        },
        7823: function(r, t, e) {
            "use strict";
            var n = e(2811);
            r.exports = n.getPrototypeOf || null;
        },
        7904: function(r) {
            "use strict";
            r.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
        },
        699: function(r, t, e) {
            "use strict";
            var n = e(7904);
            var o = e(7823);
            var i = e(6211);
            r.exports = n ? function getProto(r) {
                return n(r);
            } : o ? function getProto(r) {
                if (!r || typeof r !== "object" && typeof r !== "function") {
                    throw new TypeError("getProto: not an object");
                }
                return o(r);
            } : i ? function getProto(r) {
                return i(r);
            } : null;
        },
        4596: function(r) {
            "use strict";
            r.exports = Object.getOwnPropertyDescriptor;
        },
        3990: function(r, t, e) {
            "use strict";
            var n = e(4596);
            if (n) {
                try {
                    n([], "length");
                } catch (r) {
                    n = null;
                }
            }
            r.exports = n;
        },
        7122: function(r, t, e) {
            "use strict";
            var n = e(446);
            var o = function hasPropertyDescriptors() {
                return !!n;
            };
            o.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
                if (!n) {
                    return null;
                }
                try {
                    return n([], "length", {
                        value: 1
                    }).length !== 1;
                } catch (r) {
                    return true;
                }
            };
            r.exports = o;
        },
        9942: function(r, t, e) {
            "use strict";
            var n = typeof Symbol !== "undefined" && Symbol;
            var o = e(3773);
            r.exports = function hasNativeSymbols() {
                if (typeof n !== "function") {
                    return false;
                }
                if (typeof Symbol !== "function") {
                    return false;
                }
                if (typeof n("foo") !== "symbol") {
                    return false;
                }
                if (typeof Symbol("bar") !== "symbol") {
                    return false;
                }
                return o();
            };
        },
        3773: function(r) {
            "use strict";
            r.exports = function hasSymbols() {
                if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
                    return false;
                }
                if (typeof Symbol.iterator === "symbol") {
                    return true;
                }
                var r = {};
                var t = Symbol("test");
                var e = Object(t);
                if (typeof t === "string") {
                    return false;
                }
                if (Object.prototype.toString.call(t) !== "[object Symbol]") {
                    return false;
                }
                if (Object.prototype.toString.call(e) !== "[object Symbol]") {
                    return false;
                }
                var n = 42;
                r[t] = n;
                for(t in r){
                    return false;
                }
                if (typeof Object.keys === "function" && Object.keys(r).length !== 0) {
                    return false;
                }
                if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(r).length !== 0) {
                    return false;
                }
                var o = Object.getOwnPropertySymbols(r);
                if (o.length !== 1 || o[0] !== t) {
                    return false;
                }
                if (!Object.prototype.propertyIsEnumerable.call(r, t)) {
                    return false;
                }
                if (typeof Object.getOwnPropertyDescriptor === "function") {
                    var i = Object.getOwnPropertyDescriptor(r, t);
                    if (i.value !== n || i.enumerable !== true) {
                        return false;
                    }
                }
                return true;
            };
        },
        4871: function(r, t, e) {
            "use strict";
            var n = typeof Symbol !== "undefined" && Symbol;
            var o = e(5960);
            r.exports = function hasNativeSymbols() {
                if (typeof n !== "function") {
                    return false;
                }
                if (typeof Symbol !== "function") {
                    return false;
                }
                if (typeof n("foo") !== "symbol") {
                    return false;
                }
                if (typeof Symbol("bar") !== "symbol") {
                    return false;
                }
                return o();
            };
        },
        5960: function(r) {
            "use strict";
            r.exports = function hasSymbols() {
                if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
                    return false;
                }
                if (typeof Symbol.iterator === "symbol") {
                    return true;
                }
                var r = {};
                var t = Symbol("test");
                var e = Object(t);
                if (typeof t === "string") {
                    return false;
                }
                if (Object.prototype.toString.call(t) !== "[object Symbol]") {
                    return false;
                }
                if (Object.prototype.toString.call(e) !== "[object Symbol]") {
                    return false;
                }
                var n = 42;
                r[t] = n;
                for(var o in r){
                    return false;
                }
                if (typeof Object.keys === "function" && Object.keys(r).length !== 0) {
                    return false;
                }
                if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(r).length !== 0) {
                    return false;
                }
                var i = Object.getOwnPropertySymbols(r);
                if (i.length !== 1 || i[0] !== t) {
                    return false;
                }
                if (!Object.prototype.propertyIsEnumerable.call(r, t)) {
                    return false;
                }
                if (typeof Object.getOwnPropertyDescriptor === "function") {
                    var a = Object.getOwnPropertyDescriptor(r, t);
                    if (a.value !== n || a.enumerable !== true) {
                        return false;
                    }
                }
                return true;
            };
        },
        3270: function(r, t, e) {
            "use strict";
            var n = Function.prototype.call;
            var o = Object.prototype.hasOwnProperty;
            var i = e(1212);
            r.exports = i.call(n, o);
        },
        3782: function(r) {
            if (typeof Object.create === "function") {
                r.exports = function inherits(r, t) {
                    if (t) {
                        r.super_ = t;
                        r.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: r,
                                enumerable: false,
                                writable: true,
                                configurable: true
                            }
                        });
                    }
                };
            } else {
                r.exports = function inherits(r, t) {
                    if (t) {
                        r.super_ = t;
                        var TempCtor = function() {};
                        TempCtor.prototype = t.prototype;
                        r.prototype = new TempCtor;
                        r.prototype.constructor = r;
                    }
                };
            }
        },
        5157: function(r) {
            "use strict";
            var t = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
            var e = Object.prototype.toString;
            var n = function isArguments(r) {
                if (t && r && typeof r === "object" && Symbol.toStringTag in r) {
                    return false;
                }
                return e.call(r) === "[object Arguments]";
            };
            var o = function isArguments(r) {
                if (n(r)) {
                    return true;
                }
                return r !== null && typeof r === "object" && typeof r.length === "number" && r.length >= 0 && e.call(r) !== "[object Array]" && e.call(r.callee) === "[object Function]";
            };
            var i = function() {
                return n(arguments);
            }();
            n.isLegacyArguments = o;
            r.exports = i ? n : o;
        },
        3391: function(r) {
            "use strict";
            var t = Object.prototype.toString;
            var e = Function.prototype.toString;
            var n = /^\s*(?:function)?\*/;
            var o = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
            var i = Object.getPrototypeOf;
            var getGeneratorFunc = function() {
                if (!o) {
                    return false;
                }
                try {
                    return Function("return function*() {}")();
                } catch (r) {}
            };
            var a = getGeneratorFunc();
            var f = a ? i(a) : {};
            r.exports = function isGeneratorFunction(r) {
                if (typeof r !== "function") {
                    return false;
                }
                if (n.test(e.call(r))) {
                    return true;
                }
                if (!o) {
                    var a = t.call(r);
                    return a === "[object GeneratorFunction]";
                }
                return i(r) === f;
            };
        },
        994: function(r, t, e) {
            "use strict";
            var n = e(6144);
            var o = e(1349);
            var i = e(516);
            var a = i("Object.prototype.toString");
            var f = e(9942)();
            var u = f && typeof Symbol.toStringTag === "symbol";
            var s = o();
            var c = i("Array.prototype.indexOf", true) || function indexOf(r, t) {
                for(var e = 0; e < r.length; e += 1){
                    if (r[e] === t) {
                        return e;
                    }
                }
                return -1;
            };
            var p = i("String.prototype.slice");
            var y = {};
            var l = e(2154);
            var g = Object.getPrototypeOf;
            if (u && l && g) {
                n(s, function(r) {
                    var t = new /*TURBOPACK member replacement*/ __turbopack_context__.g[r];
                    if (!(Symbol.toStringTag in t)) {
                        throw new EvalError("this engine has support for Symbol.toStringTag, but " + r + " does not have the property! Please report this.");
                    }
                    var e = g(t);
                    var n = l(e, Symbol.toStringTag);
                    if (!n) {
                        var o = g(e);
                        n = l(o, Symbol.toStringTag);
                    }
                    y[r] = n.get;
                });
            }
            var v = function tryAllTypedArrays(r) {
                var t = false;
                n(y, function(e, n) {
                    if (!t) {
                        try {
                            t = e.call(r) === n;
                        } catch (r) {}
                    }
                });
                return t;
            };
            r.exports = function isTypedArray(r) {
                if (!r || typeof r !== "object") {
                    return false;
                }
                if (!u) {
                    var t = p(a(r), 8, -1);
                    return c(s, t) > -1;
                }
                if (!l) {
                    return false;
                }
                return v(r);
            };
        },
        7173: function(r) {
            "use strict";
            r.exports = Math.abs;
        },
        847: function(r) {
            "use strict";
            r.exports = Math.floor;
        },
        219: function(r) {
            "use strict";
            r.exports = Number.isNaN || function isNaN1(r) {
                return r !== r;
            };
        },
        2916: function(r) {
            "use strict";
            r.exports = Math.max;
        },
        9882: function(r) {
            "use strict";
            r.exports = Math.min;
        },
        3291: function(r) {
            "use strict";
            r.exports = Math.pow;
        },
        553: function(r) {
            "use strict";
            r.exports = Math.round;
        },
        8629: function(r, t, e) {
            "use strict";
            var n = e(219);
            r.exports = function sign(r) {
                if (n(r) || r === 0) {
                    return r;
                }
                return r < 0 ? -1 : +1;
            };
        },
        3143: function(r, t, e) {
            "use strict";
            var n = e(3197);
            var o = e(819);
            var i = e(7122)();
            var a = e(3990);
            var f = e(8202);
            var u = n("%Math.floor%");
            r.exports = function setFunctionLength(r, t) {
                if (typeof r !== "function") {
                    throw new f("`fn` is not a function");
                }
                if (typeof t !== "number" || t < 0 || t > 4294967295 || u(t) !== t) {
                    throw new f("`length` must be a positive 32-bit integer");
                }
                var e = arguments.length > 2 && !!arguments[2];
                var n = true;
                var s = true;
                if ("length" in r && a) {
                    var c = a(r, "length");
                    if (c && !c.configurable) {
                        n = false;
                    }
                    if (c && !c.writable) {
                        s = false;
                    }
                }
                if (n || s || !e) {
                    if (i) {
                        o(r, "length", t, true, true);
                    } else {
                        o(r, "length", t);
                    }
                }
                return r;
            };
        },
        2369: function(r) {
            r.exports = function isBuffer(r) {
                return r instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"];
            };
        },
        5584: function(r, t, e) {
            "use strict";
            var n = e(5157);
            var o = e(3391);
            var i = e(1490);
            var a = e(994);
            function uncurryThis(r) {
                return r.call.bind(r);
            }
            var f = typeof BigInt !== "undefined";
            var u = typeof Symbol !== "undefined";
            var s = uncurryThis(Object.prototype.toString);
            var c = uncurryThis(Number.prototype.valueOf);
            var p = uncurryThis(String.prototype.valueOf);
            var y = uncurryThis(Boolean.prototype.valueOf);
            if (f) {
                var l = uncurryThis(BigInt.prototype.valueOf);
            }
            if (u) {
                var g = uncurryThis(Symbol.prototype.valueOf);
            }
            function checkBoxedPrimitive(r, t) {
                if (typeof r !== "object") {
                    return false;
                }
                try {
                    t(r);
                    return true;
                } catch (r) {
                    return false;
                }
            }
            t.isArgumentsObject = n;
            t.isGeneratorFunction = o;
            t.isTypedArray = a;
            function isPromise(r) {
                return typeof Promise !== "undefined" && r instanceof Promise || r !== null && typeof r === "object" && typeof r.then === "function" && typeof r.catch === "function";
            }
            t.isPromise = isPromise;
            function isArrayBufferView(r) {
                if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
                    return ArrayBuffer.isView(r);
                }
                return a(r) || isDataView(r);
            }
            t.isArrayBufferView = isArrayBufferView;
            function isUint8Array(r) {
                return i(r) === "Uint8Array";
            }
            t.isUint8Array = isUint8Array;
            function isUint8ClampedArray(r) {
                return i(r) === "Uint8ClampedArray";
            }
            t.isUint8ClampedArray = isUint8ClampedArray;
            function isUint16Array(r) {
                return i(r) === "Uint16Array";
            }
            t.isUint16Array = isUint16Array;
            function isUint32Array(r) {
                return i(r) === "Uint32Array";
            }
            t.isUint32Array = isUint32Array;
            function isInt8Array(r) {
                return i(r) === "Int8Array";
            }
            t.isInt8Array = isInt8Array;
            function isInt16Array(r) {
                return i(r) === "Int16Array";
            }
            t.isInt16Array = isInt16Array;
            function isInt32Array(r) {
                return i(r) === "Int32Array";
            }
            t.isInt32Array = isInt32Array;
            function isFloat32Array(r) {
                return i(r) === "Float32Array";
            }
            t.isFloat32Array = isFloat32Array;
            function isFloat64Array(r) {
                return i(r) === "Float64Array";
            }
            t.isFloat64Array = isFloat64Array;
            function isBigInt64Array(r) {
                return i(r) === "BigInt64Array";
            }
            t.isBigInt64Array = isBigInt64Array;
            function isBigUint64Array(r) {
                return i(r) === "BigUint64Array";
            }
            t.isBigUint64Array = isBigUint64Array;
            function isMapToString(r) {
                return s(r) === "[object Map]";
            }
            isMapToString.working = typeof Map !== "undefined" && isMapToString(new Map);
            function isMap(r) {
                if (typeof Map === "undefined") {
                    return false;
                }
                return isMapToString.working ? isMapToString(r) : r instanceof Map;
            }
            t.isMap = isMap;
            function isSetToString(r) {
                return s(r) === "[object Set]";
            }
            isSetToString.working = typeof Set !== "undefined" && isSetToString(new Set);
            function isSet(r) {
                if (typeof Set === "undefined") {
                    return false;
                }
                return isSetToString.working ? isSetToString(r) : r instanceof Set;
            }
            t.isSet = isSet;
            function isWeakMapToString(r) {
                return s(r) === "[object WeakMap]";
            }
            isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(new WeakMap);
            function isWeakMap(r) {
                if (typeof WeakMap === "undefined") {
                    return false;
                }
                return isWeakMapToString.working ? isWeakMapToString(r) : r instanceof WeakMap;
            }
            t.isWeakMap = isWeakMap;
            function isWeakSetToString(r) {
                return s(r) === "[object WeakSet]";
            }
            isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(new WeakSet);
            function isWeakSet(r) {
                return isWeakSetToString(r);
            }
            t.isWeakSet = isWeakSet;
            function isArrayBufferToString(r) {
                return s(r) === "[object ArrayBuffer]";
            }
            isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer);
            function isArrayBuffer(r) {
                if (typeof ArrayBuffer === "undefined") {
                    return false;
                }
                return isArrayBufferToString.working ? isArrayBufferToString(r) : r instanceof ArrayBuffer;
            }
            t.isArrayBuffer = isArrayBuffer;
            function isDataViewToString(r) {
                return s(r) === "[object DataView]";
            }
            isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
            function isDataView(r) {
                if (typeof DataView === "undefined") {
                    return false;
                }
                return isDataViewToString.working ? isDataViewToString(r) : r instanceof DataView;
            }
            t.isDataView = isDataView;
            var v = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : undefined;
            function isSharedArrayBufferToString(r) {
                return s(r) === "[object SharedArrayBuffer]";
            }
            function isSharedArrayBuffer(r) {
                if (typeof v === "undefined") {
                    return false;
                }
                if (typeof isSharedArrayBufferToString.working === "undefined") {
                    isSharedArrayBufferToString.working = isSharedArrayBufferToString(new v);
                }
                return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(r) : r instanceof v;
            }
            t.isSharedArrayBuffer = isSharedArrayBuffer;
            function isAsyncFunction(r) {
                return s(r) === "[object AsyncFunction]";
            }
            t.isAsyncFunction = isAsyncFunction;
            function isMapIterator(r) {
                return s(r) === "[object Map Iterator]";
            }
            t.isMapIterator = isMapIterator;
            function isSetIterator(r) {
                return s(r) === "[object Set Iterator]";
            }
            t.isSetIterator = isSetIterator;
            function isGeneratorObject(r) {
                return s(r) === "[object Generator]";
            }
            t.isGeneratorObject = isGeneratorObject;
            function isWebAssemblyCompiledModule(r) {
                return s(r) === "[object WebAssembly.Module]";
            }
            t.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
            function isNumberObject(r) {
                return checkBoxedPrimitive(r, c);
            }
            t.isNumberObject = isNumberObject;
            function isStringObject(r) {
                return checkBoxedPrimitive(r, p);
            }
            t.isStringObject = isStringObject;
            function isBooleanObject(r) {
                return checkBoxedPrimitive(r, y);
            }
            t.isBooleanObject = isBooleanObject;
            function isBigIntObject(r) {
                return f && checkBoxedPrimitive(r, l);
            }
            t.isBigIntObject = isBigIntObject;
            function isSymbolObject(r) {
                return u && checkBoxedPrimitive(r, g);
            }
            t.isSymbolObject = isSymbolObject;
            function isBoxedPrimitive(r) {
                return isNumberObject(r) || isStringObject(r) || isBooleanObject(r) || isBigIntObject(r) || isSymbolObject(r);
            }
            t.isBoxedPrimitive = isBoxedPrimitive;
            function isAnyArrayBuffer(r) {
                return typeof Uint8Array !== "undefined" && (isArrayBuffer(r) || isSharedArrayBuffer(r));
            }
            t.isAnyArrayBuffer = isAnyArrayBuffer;
            [
                "isProxy",
                "isExternal",
                "isModuleNamespaceObject"
            ].forEach(function(r) {
                Object.defineProperty(t, r, {
                    enumerable: false,
                    value: function() {
                        throw new Error(r + " is not supported in userland");
                    }
                });
            });
        },
        8177: function(r, t, e) {
            var n = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(r) {
                var t = Object.keys(r);
                var e = {};
                for(var n = 0; n < t.length; n++){
                    e[t[n]] = Object.getOwnPropertyDescriptor(r, t[n]);
                }
                return e;
            };
            var o = /%[sdj%]/g;
            t.format = function(r) {
                if (!isString(r)) {
                    var t = [];
                    for(var e = 0; e < arguments.length; e++){
                        t.push(inspect(arguments[e]));
                    }
                    return t.join(" ");
                }
                var e = 1;
                var n = arguments;
                var i = n.length;
                var a = String(r).replace(o, function(r) {
                    if (r === "%%") return "%";
                    if (e >= i) return r;
                    switch(r){
                        case "%s":
                            return String(n[e++]);
                        case "%d":
                            return Number(n[e++]);
                        case "%j":
                            try {
                                return JSON.stringify(n[e++]);
                            } catch (r) {
                                return "[Circular]";
                            }
                        default:
                            return r;
                    }
                });
                for(var f = n[e]; e < i; f = n[++e]){
                    if (isNull(f) || !isObject(f)) {
                        a += " " + f;
                    } else {
                        a += " " + inspect(f);
                    }
                }
                return a;
            };
            t.deprecate = function(r, e) {
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].noDeprecation === true) {
                    return r;
                }
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined") {
                    return function() {
                        return t.deprecate(r, e).apply(this, arguments);
                    };
                }
                var n = false;
                function deprecated() {
                    if (!n) {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].throwDeprecation) {
                            throw new Error(e);
                        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].traceDeprecation) {
                            console.trace(e);
                        } else {
                            console.error(e);
                        }
                        n = true;
                    }
                    return r.apply(this, arguments);
                }
                return deprecated;
            };
            var i = {};
            var a = /^$/;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NODE_DEBUG) {
                var f = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NODE_DEBUG;
                f = f.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
                a = new RegExp("^" + f + "$", "i");
            }
            t.debuglog = function(r) {
                r = r.toUpperCase();
                if (!i[r]) {
                    if (a.test(r)) {
                        var e = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].pid;
                        i[r] = function() {
                            var n = t.format.apply(t, arguments);
                            console.error("%s %d: %s", r, e, n);
                        };
                    } else {
                        i[r] = function() {};
                    }
                }
                return i[r];
            };
            function inspect(r, e) {
                var n = {
                    seen: [],
                    stylize: stylizeNoColor
                };
                if (arguments.length >= 3) n.depth = arguments[2];
                if (arguments.length >= 4) n.colors = arguments[3];
                if (isBoolean(e)) {
                    n.showHidden = e;
                } else if (e) {
                    t._extend(n, e);
                }
                if (isUndefined(n.showHidden)) n.showHidden = false;
                if (isUndefined(n.depth)) n.depth = 2;
                if (isUndefined(n.colors)) n.colors = false;
                if (isUndefined(n.customInspect)) n.customInspect = true;
                if (n.colors) n.stylize = stylizeWithColor;
                return formatValue(n, r, n.depth);
            }
            t.inspect = inspect;
            inspect.colors = {
                bold: [
                    1,
                    22
                ],
                italic: [
                    3,
                    23
                ],
                underline: [
                    4,
                    24
                ],
                inverse: [
                    7,
                    27
                ],
                white: [
                    37,
                    39
                ],
                grey: [
                    90,
                    39
                ],
                black: [
                    30,
                    39
                ],
                blue: [
                    34,
                    39
                ],
                cyan: [
                    36,
                    39
                ],
                green: [
                    32,
                    39
                ],
                magenta: [
                    35,
                    39
                ],
                red: [
                    31,
                    39
                ],
                yellow: [
                    33,
                    39
                ]
            };
            inspect.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            };
            function stylizeWithColor(r, t) {
                var e = inspect.styles[t];
                if (e) {
                    return "[" + inspect.colors[e][0] + "m" + r + "[" + inspect.colors[e][1] + "m";
                } else {
                    return r;
                }
            }
            function stylizeNoColor(r, t) {
                return r;
            }
            function arrayToHash(r) {
                var t = {};
                r.forEach(function(r, e) {
                    t[r] = true;
                });
                return t;
            }
            function formatValue(r, e, n) {
                if (r.customInspect && e && isFunction(e.inspect) && e.inspect !== t.inspect && !(e.constructor && e.constructor.prototype === e)) {
                    var o = e.inspect(n, r);
                    if (!isString(o)) {
                        o = formatValue(r, o, n);
                    }
                    return o;
                }
                var i = formatPrimitive(r, e);
                if (i) {
                    return i;
                }
                var a = Object.keys(e);
                var f = arrayToHash(a);
                if (r.showHidden) {
                    a = Object.getOwnPropertyNames(e);
                }
                if (isError(e) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) {
                    return formatError(e);
                }
                if (a.length === 0) {
                    if (isFunction(e)) {
                        var u = e.name ? ": " + e.name : "";
                        return r.stylize("[Function" + u + "]", "special");
                    }
                    if (isRegExp(e)) {
                        return r.stylize(RegExp.prototype.toString.call(e), "regexp");
                    }
                    if (isDate(e)) {
                        return r.stylize(Date.prototype.toString.call(e), "date");
                    }
                    if (isError(e)) {
                        return formatError(e);
                    }
                }
                var s = "", c = false, p = [
                    "{",
                    "}"
                ];
                if (isArray(e)) {
                    c = true;
                    p = [
                        "[",
                        "]"
                    ];
                }
                if (isFunction(e)) {
                    var y = e.name ? ": " + e.name : "";
                    s = " [Function" + y + "]";
                }
                if (isRegExp(e)) {
                    s = " " + RegExp.prototype.toString.call(e);
                }
                if (isDate(e)) {
                    s = " " + Date.prototype.toUTCString.call(e);
                }
                if (isError(e)) {
                    s = " " + formatError(e);
                }
                if (a.length === 0 && (!c || e.length == 0)) {
                    return p[0] + s + p[1];
                }
                if (n < 0) {
                    if (isRegExp(e)) {
                        return r.stylize(RegExp.prototype.toString.call(e), "regexp");
                    } else {
                        return r.stylize("[Object]", "special");
                    }
                }
                r.seen.push(e);
                var l;
                if (c) {
                    l = formatArray(r, e, n, f, a);
                } else {
                    l = a.map(function(t) {
                        return formatProperty(r, e, n, f, t, c);
                    });
                }
                r.seen.pop();
                return reduceToSingleString(l, s, p);
            }
            function formatPrimitive(r, t) {
                if (isUndefined(t)) return r.stylize("undefined", "undefined");
                if (isString(t)) {
                    var e = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return r.stylize(e, "string");
                }
                if (isNumber(t)) return r.stylize("" + t, "number");
                if (isBoolean(t)) return r.stylize("" + t, "boolean");
                if (isNull(t)) return r.stylize("null", "null");
            }
            function formatError(r) {
                return "[" + Error.prototype.toString.call(r) + "]";
            }
            function formatArray(r, t, e, n, o) {
                var i = [];
                for(var a = 0, f = t.length; a < f; ++a){
                    if (hasOwnProperty(t, String(a))) {
                        i.push(formatProperty(r, t, e, n, String(a), true));
                    } else {
                        i.push("");
                    }
                }
                o.forEach(function(o) {
                    if (!o.match(/^\d+$/)) {
                        i.push(formatProperty(r, t, e, n, o, true));
                    }
                });
                return i;
            }
            function formatProperty(r, t, e, n, o, i) {
                var a, f, u;
                u = Object.getOwnPropertyDescriptor(t, o) || {
                    value: t[o]
                };
                if (u.get) {
                    if (u.set) {
                        f = r.stylize("[Getter/Setter]", "special");
                    } else {
                        f = r.stylize("[Getter]", "special");
                    }
                } else {
                    if (u.set) {
                        f = r.stylize("[Setter]", "special");
                    }
                }
                if (!hasOwnProperty(n, o)) {
                    a = "[" + o + "]";
                }
                if (!f) {
                    if (r.seen.indexOf(u.value) < 0) {
                        if (isNull(e)) {
                            f = formatValue(r, u.value, null);
                        } else {
                            f = formatValue(r, u.value, e - 1);
                        }
                        if (f.indexOf("\n") > -1) {
                            if (i) {
                                f = f.split("\n").map(function(r) {
                                    return "  " + r;
                                }).join("\n").substr(2);
                            } else {
                                f = "\n" + f.split("\n").map(function(r) {
                                    return "   " + r;
                                }).join("\n");
                            }
                        }
                    } else {
                        f = r.stylize("[Circular]", "special");
                    }
                }
                if (isUndefined(a)) {
                    if (i && o.match(/^\d+$/)) {
                        return f;
                    }
                    a = JSON.stringify("" + o);
                    if (a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                        a = a.substr(1, a.length - 2);
                        a = r.stylize(a, "name");
                    } else {
                        a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                        a = r.stylize(a, "string");
                    }
                }
                return a + ": " + f;
            }
            function reduceToSingleString(r, t, e) {
                var n = 0;
                var o = r.reduce(function(r, t) {
                    n++;
                    if (t.indexOf("\n") >= 0) n++;
                    return r + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
                }, 0);
                if (o > 60) {
                    return e[0] + (t === "" ? "" : t + "\n ") + " " + r.join(",\n  ") + " " + e[1];
                }
                return e[0] + t + " " + r.join(", ") + " " + e[1];
            }
            t.types = e(5584);
            function isArray(r) {
                return Array.isArray(r);
            }
            t.isArray = isArray;
            function isBoolean(r) {
                return typeof r === "boolean";
            }
            t.isBoolean = isBoolean;
            function isNull(r) {
                return r === null;
            }
            t.isNull = isNull;
            function isNullOrUndefined(r) {
                return r == null;
            }
            t.isNullOrUndefined = isNullOrUndefined;
            function isNumber(r) {
                return typeof r === "number";
            }
            t.isNumber = isNumber;
            function isString(r) {
                return typeof r === "string";
            }
            t.isString = isString;
            function isSymbol(r) {
                return typeof r === "symbol";
            }
            t.isSymbol = isSymbol;
            function isUndefined(r) {
                return r === void 0;
            }
            t.isUndefined = isUndefined;
            function isRegExp(r) {
                return isObject(r) && objectToString(r) === "[object RegExp]";
            }
            t.isRegExp = isRegExp;
            t.types.isRegExp = isRegExp;
            function isObject(r) {
                return typeof r === "object" && r !== null;
            }
            t.isObject = isObject;
            function isDate(r) {
                return isObject(r) && objectToString(r) === "[object Date]";
            }
            t.isDate = isDate;
            t.types.isDate = isDate;
            function isError(r) {
                return isObject(r) && (objectToString(r) === "[object Error]" || r instanceof Error);
            }
            t.isError = isError;
            t.types.isNativeError = isError;
            function isFunction(r) {
                return typeof r === "function";
            }
            t.isFunction = isFunction;
            function isPrimitive(r) {
                return r === null || typeof r === "boolean" || typeof r === "number" || typeof r === "string" || typeof r === "symbol" || typeof r === "undefined";
            }
            t.isPrimitive = isPrimitive;
            t.isBuffer = e(2369);
            function objectToString(r) {
                return Object.prototype.toString.call(r);
            }
            function pad(r) {
                return r < 10 ? "0" + r.toString(10) : r.toString(10);
            }
            var u = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ];
            function timestamp() {
                var r = new Date;
                var t = [
                    pad(r.getHours()),
                    pad(r.getMinutes()),
                    pad(r.getSeconds())
                ].join(":");
                return [
                    r.getDate(),
                    u[r.getMonth()],
                    t
                ].join(" ");
            }
            t.log = function() {
                console.log("%s - %s", timestamp(), t.format.apply(t, arguments));
            };
            t.inherits = e(3782);
            t._extend = function(r, t) {
                if (!t || !isObject(t)) return r;
                var e = Object.keys(t);
                var n = e.length;
                while(n--){
                    r[e[n]] = t[e[n]];
                }
                return r;
            };
            function hasOwnProperty(r, t) {
                return Object.prototype.hasOwnProperty.call(r, t);
            }
            var s = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : undefined;
            t.promisify = function promisify(r) {
                if (typeof r !== "function") throw new TypeError('The "original" argument must be of type Function');
                if (s && r[s]) {
                    var t = r[s];
                    if (typeof t !== "function") {
                        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                    }
                    Object.defineProperty(t, s, {
                        value: t,
                        enumerable: false,
                        writable: false,
                        configurable: true
                    });
                    return t;
                }
                function t() {
                    var t, e;
                    var n = new Promise(function(r, n) {
                        t = r;
                        e = n;
                    });
                    var o = [];
                    for(var i = 0; i < arguments.length; i++){
                        o.push(arguments[i]);
                    }
                    o.push(function(r, n) {
                        if (r) {
                            e(r);
                        } else {
                            t(n);
                        }
                    });
                    try {
                        r.apply(this, o);
                    } catch (r) {
                        e(r);
                    }
                    return n;
                }
                Object.setPrototypeOf(t, Object.getPrototypeOf(r));
                if (s) Object.defineProperty(t, s, {
                    value: t,
                    enumerable: false,
                    writable: false,
                    configurable: true
                });
                return Object.defineProperties(t, n(r));
            };
            t.promisify.custom = s;
            function callbackifyOnRejected(r, t) {
                if (!r) {
                    var e = new Error("Promise was rejected with a falsy value");
                    e.reason = r;
                    r = e;
                }
                return t(r);
            }
            function callbackify(r) {
                if (typeof r !== "function") {
                    throw new TypeError('The "original" argument must be of type Function');
                }
                function callbackified() {
                    var t = [];
                    for(var e = 0; e < arguments.length; e++){
                        t.push(arguments[e]);
                    }
                    var n = t.pop();
                    if (typeof n !== "function") {
                        throw new TypeError("The last argument must be of type Function");
                    }
                    var o = this;
                    var cb = function() {
                        return n.apply(o, arguments);
                    };
                    r.apply(this, t).then(function(r) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(cb.bind(null, null, r));
                    }, function(r) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(callbackifyOnRejected.bind(null, r, cb));
                    });
                }
                Object.setPrototypeOf(callbackified, Object.getPrototypeOf(r));
                Object.defineProperties(callbackified, n(r));
                return callbackified;
            }
            t.callbackify = callbackify;
        },
        1490: function(r, t, e) {
            "use strict";
            var n = e(6144);
            var o = e(1349);
            var i = e(516);
            var a = i("Object.prototype.toString");
            var f = e(9942)();
            var u = f && typeof Symbol.toStringTag === "symbol";
            var s = o();
            var c = i("String.prototype.slice");
            var p = {};
            var y = e(2154);
            var l = Object.getPrototypeOf;
            if (u && y && l) {
                n(s, function(r) {
                    if (typeof /*TURBOPACK member replacement*/ __turbopack_context__.g[r] === "function") {
                        var t = new /*TURBOPACK member replacement*/ __turbopack_context__.g[r];
                        if (!(Symbol.toStringTag in t)) {
                            throw new EvalError("this engine has support for Symbol.toStringTag, but " + r + " does not have the property! Please report this.");
                        }
                        var e = l(t);
                        var n = y(e, Symbol.toStringTag);
                        if (!n) {
                            var o = l(e);
                            n = y(o, Symbol.toStringTag);
                        }
                        p[r] = n.get;
                    }
                });
            }
            var g = function tryAllTypedArrays(r) {
                var t = false;
                n(p, function(e, n) {
                    if (!t) {
                        try {
                            var o = e.call(r);
                            if (o === n) {
                                t = o;
                            }
                        } catch (r) {}
                    }
                });
                return t;
            };
            var v = e(994);
            r.exports = function whichTypedArray(r) {
                if (!v(r)) {
                    return false;
                }
                if (!u) {
                    return c(a(r), 8, -1);
                }
                return g(r);
            };
        },
        1349: function(r, t, e) {
            "use strict";
            var n = e(8992);
            r.exports = function availableTypedArrays() {
                return n([
                    "BigInt64Array",
                    "BigUint64Array",
                    "Float32Array",
                    "Float64Array",
                    "Int16Array",
                    "Int32Array",
                    "Int8Array",
                    "Uint16Array",
                    "Uint32Array",
                    "Uint8Array",
                    "Uint8ClampedArray"
                ], function(r) {
                    return typeof /*TURBOPACK member replacement*/ __turbopack_context__.g[r] === "function";
                });
            };
        },
        2154: function(r, t, e) {
            "use strict";
            r.exports = e(3990);
        }
    };
    var t = {};
    function __nccwpck_require__(e) {
        var n = t[e];
        if (n !== undefined) {
            return n.exports;
        }
        var o = t[e] = {
            exports: {}
        };
        var i = true;
        try {
            r[e](o, o.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete t[e];
        }
        return o.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/util") + "/";
    var e = __nccwpck_require__(8177);
    module.exports = e;
})();
}),
"[project]/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/events/events.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    "use strict";
    var e = {
        864: function(e) {
            var t = typeof Reflect === "object" ? Reflect : null;
            var n = t && typeof t.apply === "function" ? t.apply : function ReflectApply(e, t, n) {
                return Function.prototype.apply.call(e, t, n);
            };
            var r;
            if (t && typeof t.ownKeys === "function") {
                r = t.ownKeys;
            } else if (Object.getOwnPropertySymbols) {
                r = function ReflectOwnKeys(e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                };
            } else {
                r = function ReflectOwnKeys(e) {
                    return Object.getOwnPropertyNames(e);
                };
            }
            function ProcessEmitWarning(e) {
                if (console && console.warn) console.warn(e);
            }
            var i = Number.isNaN || function NumberIsNaN(e) {
                return e !== e;
            };
            function EventEmitter() {
                EventEmitter.init.call(this);
            }
            e.exports = EventEmitter;
            e.exports.once = once;
            EventEmitter.EventEmitter = EventEmitter;
            EventEmitter.prototype._events = undefined;
            EventEmitter.prototype._eventsCount = 0;
            EventEmitter.prototype._maxListeners = undefined;
            var s = 10;
            function checkListener(e) {
                if (typeof e !== "function") {
                    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
                }
            }
            Object.defineProperty(EventEmitter, "defaultMaxListeners", {
                enumerable: true,
                get: function() {
                    return s;
                },
                set: function(e) {
                    if (typeof e !== "number" || e < 0 || i(e)) {
                        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                    }
                    s = e;
                }
            });
            EventEmitter.init = function() {
                if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
                    this._events = Object.create(null);
                    this._eventsCount = 0;
                }
                this._maxListeners = this._maxListeners || undefined;
            };
            EventEmitter.prototype.setMaxListeners = function setMaxListeners(e) {
                if (typeof e !== "number" || e < 0 || i(e)) {
                    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                }
                this._maxListeners = e;
                return this;
            };
            function _getMaxListeners(e) {
                if (e._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
                return e._maxListeners;
            }
            EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
                return _getMaxListeners(this);
            };
            EventEmitter.prototype.emit = function emit(e) {
                var t = [];
                for(var r = 1; r < arguments.length; r++)t.push(arguments[r]);
                var i = e === "error";
                var s = this._events;
                if (s !== undefined) i = i && s.error === undefined;
                else if (!i) return false;
                if (i) {
                    var o;
                    if (t.length > 0) o = t[0];
                    if (o instanceof Error) {
                        throw o;
                    }
                    var f = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                    f.context = o;
                    throw f;
                }
                var u = s[e];
                if (u === undefined) return false;
                if (typeof u === "function") {
                    n(u, this, t);
                } else {
                    var a = u.length;
                    var c = arrayClone(u, a);
                    for(var r = 0; r < a; ++r)n(c[r], this, t);
                }
                return true;
            };
            function _addListener(e, t, n, r) {
                var i;
                var s;
                var o;
                checkListener(n);
                s = e._events;
                if (s === undefined) {
                    s = e._events = Object.create(null);
                    e._eventsCount = 0;
                } else {
                    if (s.newListener !== undefined) {
                        e.emit("newListener", t, n.listener ? n.listener : n);
                        s = e._events;
                    }
                    o = s[t];
                }
                if (o === undefined) {
                    o = s[t] = n;
                    ++e._eventsCount;
                } else {
                    if (typeof o === "function") {
                        o = s[t] = r ? [
                            n,
                            o
                        ] : [
                            o,
                            n
                        ];
                    } else if (r) {
                        o.unshift(n);
                    } else {
                        o.push(n);
                    }
                    i = _getMaxListeners(e);
                    if (i > 0 && o.length > i && !o.warned) {
                        o.warned = true;
                        var f = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners " + "added. Use emitter.setMaxListeners() to " + "increase limit");
                        f.name = "MaxListenersExceededWarning";
                        f.emitter = e;
                        f.type = t;
                        f.count = o.length;
                        ProcessEmitWarning(f);
                    }
                }
                return e;
            }
            EventEmitter.prototype.addListener = function addListener(e, t) {
                return _addListener(this, e, t, false);
            };
            EventEmitter.prototype.on = EventEmitter.prototype.addListener;
            EventEmitter.prototype.prependListener = function prependListener(e, t) {
                return _addListener(this, e, t, true);
            };
            function onceWrapper() {
                if (!this.fired) {
                    this.target.removeListener(this.type, this.wrapFn);
                    this.fired = true;
                    if (arguments.length === 0) return this.listener.call(this.target);
                    return this.listener.apply(this.target, arguments);
                }
            }
            function _onceWrap(e, t, n) {
                var r = {
                    fired: false,
                    wrapFn: undefined,
                    target: e,
                    type: t,
                    listener: n
                };
                var i = onceWrapper.bind(r);
                i.listener = n;
                r.wrapFn = i;
                return i;
            }
            EventEmitter.prototype.once = function once(e, t) {
                checkListener(t);
                this.on(e, _onceWrap(this, e, t));
                return this;
            };
            EventEmitter.prototype.prependOnceListener = function prependOnceListener(e, t) {
                checkListener(t);
                this.prependListener(e, _onceWrap(this, e, t));
                return this;
            };
            EventEmitter.prototype.removeListener = function removeListener(e, t) {
                var n, r, i, s, o;
                checkListener(t);
                r = this._events;
                if (r === undefined) return this;
                n = r[e];
                if (n === undefined) return this;
                if (n === t || n.listener === t) {
                    if (--this._eventsCount === 0) this._events = Object.create(null);
                    else {
                        delete r[e];
                        if (r.removeListener) this.emit("removeListener", e, n.listener || t);
                    }
                } else if (typeof n !== "function") {
                    i = -1;
                    for(s = n.length - 1; s >= 0; s--){
                        if (n[s] === t || n[s].listener === t) {
                            o = n[s].listener;
                            i = s;
                            break;
                        }
                    }
                    if (i < 0) return this;
                    if (i === 0) n.shift();
                    else {
                        spliceOne(n, i);
                    }
                    if (n.length === 1) r[e] = n[0];
                    if (r.removeListener !== undefined) this.emit("removeListener", e, o || t);
                }
                return this;
            };
            EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
            EventEmitter.prototype.removeAllListeners = function removeAllListeners(e) {
                var t, n, r;
                n = this._events;
                if (n === undefined) return this;
                if (n.removeListener === undefined) {
                    if (arguments.length === 0) {
                        this._events = Object.create(null);
                        this._eventsCount = 0;
                    } else if (n[e] !== undefined) {
                        if (--this._eventsCount === 0) this._events = Object.create(null);
                        else delete n[e];
                    }
                    return this;
                }
                if (arguments.length === 0) {
                    var i = Object.keys(n);
                    var s;
                    for(r = 0; r < i.length; ++r){
                        s = i[r];
                        if (s === "removeListener") continue;
                        this.removeAllListeners(s);
                    }
                    this.removeAllListeners("removeListener");
                    this._events = Object.create(null);
                    this._eventsCount = 0;
                    return this;
                }
                t = n[e];
                if (typeof t === "function") {
                    this.removeListener(e, t);
                } else if (t !== undefined) {
                    for(r = t.length - 1; r >= 0; r--){
                        this.removeListener(e, t[r]);
                    }
                }
                return this;
            };
            function _listeners(e, t, n) {
                var r = e._events;
                if (r === undefined) return [];
                var i = r[t];
                if (i === undefined) return [];
                if (typeof i === "function") return n ? [
                    i.listener || i
                ] : [
                    i
                ];
                return n ? unwrapListeners(i) : arrayClone(i, i.length);
            }
            EventEmitter.prototype.listeners = function listeners(e) {
                return _listeners(this, e, true);
            };
            EventEmitter.prototype.rawListeners = function rawListeners(e) {
                return _listeners(this, e, false);
            };
            EventEmitter.listenerCount = function(e, t) {
                if (typeof e.listenerCount === "function") {
                    return e.listenerCount(t);
                } else {
                    return listenerCount.call(e, t);
                }
            };
            EventEmitter.prototype.listenerCount = listenerCount;
            function listenerCount(e) {
                var t = this._events;
                if (t !== undefined) {
                    var n = t[e];
                    if (typeof n === "function") {
                        return 1;
                    } else if (n !== undefined) {
                        return n.length;
                    }
                }
                return 0;
            }
            EventEmitter.prototype.eventNames = function eventNames() {
                return this._eventsCount > 0 ? r(this._events) : [];
            };
            function arrayClone(e, t) {
                var n = new Array(t);
                for(var r = 0; r < t; ++r)n[r] = e[r];
                return n;
            }
            function spliceOne(e, t) {
                for(; t + 1 < e.length; t++)e[t] = e[t + 1];
                e.pop();
            }
            function unwrapListeners(e) {
                var t = new Array(e.length);
                for(var n = 0; n < t.length; ++n){
                    t[n] = e[n].listener || e[n];
                }
                return t;
            }
            function once(e, t) {
                return new Promise(function(n, r) {
                    function errorListener(n) {
                        e.removeListener(t, resolver);
                        r(n);
                    }
                    function resolver() {
                        if (typeof e.removeListener === "function") {
                            e.removeListener("error", errorListener);
                        }
                        n([].slice.call(arguments));
                    }
                    eventTargetAgnosticAddListener(e, t, resolver, {
                        once: true
                    });
                    if (t !== "error") {
                        addErrorHandlerIfEventEmitter(e, errorListener, {
                            once: true
                        });
                    }
                });
            }
            function addErrorHandlerIfEventEmitter(e, t, n) {
                if (typeof e.on === "function") {
                    eventTargetAgnosticAddListener(e, "error", t, n);
                }
            }
            function eventTargetAgnosticAddListener(e, t, n, r) {
                if (typeof e.on === "function") {
                    if (r.once) {
                        e.once(t, n);
                    } else {
                        e.on(t, n);
                    }
                } else if (typeof e.addEventListener === "function") {
                    e.addEventListener(t, function wrapListener(i) {
                        if (r.once) {
                            e.removeEventListener(t, wrapListener);
                        }
                        n(i);
                    });
                } else {
                    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                }
            }
        }
    };
    var t = {};
    function __nccwpck_require__(n) {
        var r = t[n];
        if (r !== undefined) {
            return r.exports;
        }
        var i = t[n] = {
            exports: {}
        };
        var s = true;
        try {
            e[n](i, i.exports, __nccwpck_require__);
            s = false;
        } finally{
            if (s) delete t[n];
        }
        return i.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/events") + "/";
    var n = __nccwpck_require__(864);
    module.exports = n;
})();
}),
"[project]/OneDrive/Desktop/nodelet/node_modules/@prisma/client/runtime/library.mjs [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/OneDrive/Desktop/nodelet/node_modules/@prisma/client/runtime/library.mjs [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:module)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/OneDrive/Desktop/nodelet/node_modules/@prisma/client/runtime/library.mjs [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:module)");

}}),
"[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryObserver.ts
__turbopack_context__.s([
    "QueryObserver",
    ()=>QueryObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/query-core/build/modern/query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/query-core/build/modern/thenable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var QueryObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(client, options){
        super();
        this.options = options;
        this.#client = client;
        this.#selectError = null;
        this.#currentThenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pendingThenable"])();
        this.bindMethods();
        this.setOptions(options);
    }
    #client;
    #currentQuery = void 0;
    #currentQueryInitialState = void 0;
    #currentResult = void 0;
    #currentResultState;
    #currentResultOptions;
    #currentThenable;
    #selectError;
    #selectFn;
    #selectResult;
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    #lastQueryWithDefinedData;
    #staleTimeoutId;
    #refetchIntervalId;
    #currentRefetchInterval;
    #trackedProps = /* @__PURE__ */ new Set();
    bindMethods() {
        this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
        if (this.listeners.size === 1) {
            this.#currentQuery.addObserver(this);
            if (shouldFetchOnMount(this.#currentQuery, this.options)) {
                this.#executeFetch();
            } else {
                this.updateResult();
            }
            this.#updateTimers();
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.destroy();
        }
    }
    shouldFetchOnReconnect() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnReconnect);
    }
    shouldFetchOnWindowFocus() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnWindowFocus);
    }
    destroy() {
        this.listeners = /* @__PURE__ */ new Set();
        this.#clearStaleTimeout();
        this.#clearRefetchInterval();
        this.#currentQuery.removeObserver(this);
    }
    setOptions(options) {
        const prevOptions = this.options;
        const prevQuery = this.#currentQuery;
        this.options = this.#client.defaultQueryOptions(options);
        if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== "boolean") {
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        }
        this.#updateQuery();
        this.#currentQuery.setOptions(this.options);
        if (prevOptions._defaulted && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) {
            this.#client.getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: this.#currentQuery,
                observer: this
            });
        }
        const mounted = this.hasListeners();
        if (mounted && shouldFetchOptionally(this.#currentQuery, prevQuery, this.options, prevOptions)) {
            this.#executeFetch();
        }
        this.updateResult();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, this.#currentQuery) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(prevOptions.staleTime, this.#currentQuery))) {
            this.#updateStaleTimeout();
        }
        const nextRefetchInterval = this.#computeRefetchInterval();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) {
            this.#updateRefetchInterval(nextRefetchInterval);
        }
    }
    getOptimisticResult(options) {
        const query = this.#client.getQueryCache().build(this.#client, options);
        const result = this.createResult(query, options);
        if (shouldAssignObserverCurrentProperties(this, result)) {
            this.#currentResult = result;
            this.#currentResultOptions = this.options;
            this.#currentResultState = this.#currentQuery.state;
        }
        return result;
    }
    getCurrentResult() {
        return this.#currentResult;
    }
    trackResult(result, onPropTracked) {
        return new Proxy(result, {
            get: (target, key)=>{
                this.trackProp(key);
                onPropTracked?.(key);
                if (key === "promise") {
                    this.trackProp("data");
                    if (!this.options.experimental_prefetchInRender && this.#currentThenable.status === "pending") {
                        this.#currentThenable.reject(new Error("experimental_prefetchInRender feature flag is not enabled"));
                    }
                }
                return Reflect.get(target, key);
            }
        });
    }
    trackProp(key) {
        this.#trackedProps.add(key);
    }
    getCurrentQuery() {
        return this.#currentQuery;
    }
    refetch({ ...options } = {}) {
        return this.fetch({
            ...options
        });
    }
    fetchOptimistic(options) {
        const defaultedOptions = this.#client.defaultQueryOptions(options);
        const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
        return query.fetch().then(()=>this.createResult(query, defaultedOptions));
    }
    fetch(fetchOptions) {
        return this.#executeFetch({
            ...fetchOptions,
            cancelRefetch: fetchOptions.cancelRefetch ?? true
        }).then(()=>{
            this.updateResult();
            return this.#currentResult;
        });
    }
    #executeFetch(fetchOptions) {
        this.#updateQuery();
        let promise = this.#currentQuery.fetch(this.options, fetchOptions);
        if (!fetchOptions?.throwOnError) {
            promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
        }
        return promise;
    }
    #updateStaleTimeout() {
        this.#clearStaleTimeout();
        const staleTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, this.#currentQuery);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] || this.#currentResult.isStale || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTimeout"])(staleTime)) {
            return;
        }
        const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.#currentResult.dataUpdatedAt, staleTime);
        const timeout = time + 1;
        this.#staleTimeoutId = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(()=>{
            if (!this.#currentResult.isStale) {
                this.updateResult();
            }
        }, timeout);
    }
    #computeRefetchInterval() {
        return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
    }
    #updateRefetchInterval(nextInterval) {
        this.#clearRefetchInterval();
        this.#currentRefetchInterval = nextInterval;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) === false || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
            return;
        }
        this.#refetchIntervalId = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].setInterval(()=>{
            if (this.options.refetchIntervalInBackground || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusManager"].isFocused()) {
                this.#executeFetch();
            }
        }, this.#currentRefetchInterval);
    }
    #updateTimers() {
        this.#updateStaleTimeout();
        this.#updateRefetchInterval(this.#computeRefetchInterval());
    }
    #clearStaleTimeout() {
        if (this.#staleTimeoutId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].clearTimeout(this.#staleTimeoutId);
            this.#staleTimeoutId = void 0;
        }
    }
    #clearRefetchInterval() {
        if (this.#refetchIntervalId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].clearInterval(this.#refetchIntervalId);
            this.#refetchIntervalId = void 0;
        }
    }
    createResult(query, options) {
        const prevQuery = this.#currentQuery;
        const prevOptions = this.options;
        const prevResult = this.#currentResult;
        const prevResultState = this.#currentResultState;
        const prevResultOptions = this.#currentResultOptions;
        const queryChange = query !== prevQuery;
        const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
        const { state } = query;
        let newState = {
            ...state
        };
        let isPlaceholderData = false;
        let data;
        if (options._optimisticResults) {
            const mounted = this.hasListeners();
            const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
            const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
            if (fetchOnMount || fetchOptionally) {
                newState = {
                    ...newState,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchState"])(state.data, query.options)
                };
            }
            if (options._optimisticResults === "isRestoring") {
                newState.fetchStatus = "idle";
            }
        }
        let { error, errorUpdatedAt, status } = newState;
        data = newState.data;
        let skipSelect = false;
        if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
            let placeholderData;
            if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
                placeholderData = prevResult.data;
                skipSelect = true;
            } else {
                placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(this.#lastQueryWithDefinedData?.state.data, this.#lastQueryWithDefinedData) : options.placeholderData;
            }
            if (placeholderData !== void 0) {
                status = "success";
                data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, placeholderData, options);
                isPlaceholderData = true;
            }
        }
        if (options.select && data !== void 0 && !skipSelect) {
            if (prevResult && data === prevResultState?.data && options.select === this.#selectFn) {
                data = this.#selectResult;
            } else {
                try {
                    this.#selectFn = options.select;
                    data = options.select(data);
                    data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, data, options);
                    this.#selectResult = data;
                    this.#selectError = null;
                } catch (selectError) {
                    this.#selectError = selectError;
                }
            }
        }
        if (this.#selectError) {
            error = this.#selectError;
            data = this.#selectResult;
            errorUpdatedAt = Date.now();
            status = "error";
        }
        const isFetching = newState.fetchStatus === "fetching";
        const isPending = status === "pending";
        const isError = status === "error";
        const isLoading = isPending && isFetching;
        const hasData = data !== void 0;
        const result = {
            status,
            fetchStatus: newState.fetchStatus,
            isPending,
            isSuccess: status === "success",
            isError,
            isInitialLoading: isLoading,
            isLoading,
            data,
            dataUpdatedAt: newState.dataUpdatedAt,
            error,
            errorUpdatedAt,
            failureCount: newState.fetchFailureCount,
            failureReason: newState.fetchFailureReason,
            errorUpdateCount: newState.errorUpdateCount,
            isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
            isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
            isFetching,
            isRefetching: isFetching && !isPending,
            isLoadingError: isError && !hasData,
            isPaused: newState.fetchStatus === "paused",
            isPlaceholderData,
            isRefetchError: isError && hasData,
            isStale: isStale(query, options),
            refetch: this.refetch,
            promise: this.#currentThenable,
            isEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false
        };
        const nextResult = result;
        if (this.options.experimental_prefetchInRender) {
            const finalizeThenableIfPossible = (thenable)=>{
                if (nextResult.status === "error") {
                    thenable.reject(nextResult.error);
                } else if (nextResult.data !== void 0) {
                    thenable.resolve(nextResult.data);
                }
            };
            const recreateThenable = ()=>{
                const pending = this.#currentThenable = nextResult.promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pendingThenable"])();
                finalizeThenableIfPossible(pending);
            };
            const prevThenable = this.#currentThenable;
            switch(prevThenable.status){
                case "pending":
                    if (query.queryHash === prevQuery.queryHash) {
                        finalizeThenableIfPossible(prevThenable);
                    }
                    break;
                case "fulfilled":
                    if (nextResult.status === "error" || nextResult.data !== prevThenable.value) {
                        recreateThenable();
                    }
                    break;
                case "rejected":
                    if (nextResult.status !== "error" || nextResult.error !== prevThenable.reason) {
                        recreateThenable();
                    }
                    break;
            }
        }
        return nextResult;
    }
    updateResult() {
        const prevResult = this.#currentResult;
        const nextResult = this.createResult(this.#currentQuery, this.options);
        this.#currentResultState = this.#currentQuery.state;
        this.#currentResultOptions = this.options;
        if (this.#currentResultState.data !== void 0) {
            this.#lastQueryWithDefinedData = this.#currentQuery;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(nextResult, prevResult)) {
            return;
        }
        this.#currentResult = nextResult;
        const shouldNotifyListeners = ()=>{
            if (!prevResult) {
                return true;
            }
            const { notifyOnChangeProps } = this.options;
            const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
            if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
                return true;
            }
            const includedProps = new Set(notifyOnChangePropsValue ?? this.#trackedProps);
            if (this.options.throwOnError) {
                includedProps.add("error");
            }
            return Object.keys(this.#currentResult).some((key)=>{
                const typedKey = key;
                const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
                return changed && includedProps.has(typedKey);
            });
        };
        this.#notify({
            listeners: shouldNotifyListeners()
        });
    }
    #updateQuery() {
        const query = this.#client.getQueryCache().build(this.#client, this.options);
        if (query === this.#currentQuery) {
            return;
        }
        const prevQuery = this.#currentQuery;
        this.#currentQuery = query;
        this.#currentQueryInitialState = query.state;
        if (this.hasListeners()) {
            prevQuery?.removeObserver(this);
            query.addObserver(this);
        }
    }
    onQueryUpdate() {
        this.updateResult();
        if (this.hasListeners()) {
            this.#updateTimers();
        }
    }
    #notify(notifyOptions) {
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            if (notifyOptions.listeners) {
                this.listeners.forEach((listener)=>{
                    listener(this.#currentResult);
                });
            }
            this.#client.getQueryCache().notify({
                query: this.#currentQuery,
                type: "observerResultsUpdated"
            });
        });
    }
};
function shouldLoadOnMount(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
    return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query) !== "static") {
        const value = typeof field === "function" ? field(query) : field;
        return value === "always" || value !== false && isStale(query, options);
    }
    return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
    return (query !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(observer.getCurrentResult(), optimisticResult)) {
        return true;
    }
    return false;
}
;
 //# sourceMappingURL=queryObserver.js.map
}),
"[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryErrorResetBoundary",
    ()=>QueryErrorResetBoundary,
    "useQueryErrorResetBoundary",
    ()=>useQueryErrorResetBoundary
]);
// src/QueryErrorResetBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function createValue() {
    let isReset = false;
    return {
        clearReset: ()=>{
            isReset = false;
        },
        reset: ()=>{
            isReset = true;
        },
        isReset: ()=>{
            return isReset;
        }
    };
}
var QueryErrorResetBoundaryContext = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](createValue());
var useQueryErrorResetBoundary = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = ({ children })=>{
    const [value] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "QueryErrorResetBoundary.useState": ()=>createValue()
    }["QueryErrorResetBoundary.useState"]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(QueryErrorResetBoundaryContext.Provider, {
        value,
        children: typeof children === "function" ? children(value) : children
    });
};
;
 //# sourceMappingURL=QueryErrorResetBoundary.js.map
}),
"[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensurePreventErrorBoundaryRetry",
    ()=>ensurePreventErrorBoundaryRetry,
    "getHasError",
    ()=>getHasError,
    "useClearResetErrorBoundary",
    ()=>useClearResetErrorBoundary
]);
// src/errorBoundaryUtils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
"use client";
;
;
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary)=>{
    if (options.suspense || options.throwOnError || options.experimental_prefetchInRender) {
        if (!errorResetBoundary.isReset()) {
            options.retryOnMount = false;
        }
    }
};
var useClearResetErrorBoundary = (errorResetBoundary)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useClearResetErrorBoundary.useEffect": ()=>{
            errorResetBoundary.clearReset();
        }
    }["useClearResetErrorBoundary.useEffect"], [
        errorResetBoundary
    ]);
};
var getHasError = ({ result, errorResetBoundary, throwOnError, query, suspense })=>{
    return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(throwOnError, [
        result.error,
        query
    ]));
};
;
 //# sourceMappingURL=errorBoundaryUtils.js.map
}),
"[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsRestoringProvider",
    ()=>IsRestoringProvider,
    "useIsRestoring",
    ()=>useIsRestoring
]);
// src/IsRestoringProvider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
var IsRestoringContext = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](false);
var useIsRestoring = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;
;
 //# sourceMappingURL=IsRestoringProvider.js.map
}),
"[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/react-query/build/modern/suspense.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/suspense.ts
__turbopack_context__.s([
    "defaultThrowOnError",
    ()=>defaultThrowOnError,
    "ensureSuspenseTimers",
    ()=>ensureSuspenseTimers,
    "fetchOptimistic",
    ()=>fetchOptimistic,
    "shouldSuspend",
    ()=>shouldSuspend,
    "willFetch",
    ()=>willFetch
]);
var defaultThrowOnError = (_error, query)=>query.state.data === void 0;
var ensureSuspenseTimers = (defaultedOptions)=>{
    if (defaultedOptions.suspense) {
        const MIN_SUSPENSE_TIME_MS = 1e3;
        const clamp = (value)=>value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
        const originalStaleTime = defaultedOptions.staleTime;
        defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args)=>clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
        if (typeof defaultedOptions.gcTime === "number") {
            defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, MIN_SUSPENSE_TIME_MS);
        }
    }
};
var willFetch = (result, isRestoring)=>result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result)=>defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary)=>observer.fetchOptimistic(defaultedOptions).catch(()=>{
        errorResetBoundary.clearReset();
    });
;
 //# sourceMappingURL=suspense.js.map
}),
"[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBaseQuery",
    ()=>useBaseQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/useBaseQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/react-query/build/modern/suspense.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function useBaseQuery(options, Observer, queryClient) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof options !== "object" || Array.isArray(options)) {
            throw new Error('Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object');
        }
    }
    const isRestoring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsRestoring"])();
    const errorResetBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryErrorResetBoundary"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const defaultedOptions = client.defaultQueryOptions(options);
    client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions);
    if ("TURBOPACK compile-time truthy", 1) {
        if (!defaultedOptions.queryFn) {
            console.error(`[${defaultedOptions.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`);
        }
    }
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureSuspenseTimers"])(defaultedOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensurePreventErrorBoundaryRetry"])(defaultedOptions, errorResetBoundary);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClearResetErrorBoundary"])(errorResetBoundary);
    const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useBaseQuery.useState": ()=>new Observer(client, defaultedOptions)
    }["useBaseQuery.useState"]);
    const result = observer.getOptimisticResult(defaultedOptions);
    const shouldSubscribe = !isRestoring && options.subscribed !== false;
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useBaseQuery.useSyncExternalStore.useCallback": (onStoreChange)=>{
            const unsubscribe = shouldSubscribe ? observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange)) : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
            observer.updateResult();
            return unsubscribe;
        }
    }["useBaseQuery.useSyncExternalStore.useCallback"], [
        observer,
        shouldSubscribe
    ]), {
        "useBaseQuery.useSyncExternalStore": ()=>observer.getCurrentResult()
    }["useBaseQuery.useSyncExternalStore"], {
        "useBaseQuery.useSyncExternalStore": ()=>observer.getCurrentResult()
    }["useBaseQuery.useSyncExternalStore"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useBaseQuery.useEffect": ()=>{
            observer.setOptions(defaultedOptions);
        }
    }["useBaseQuery.useEffect"], [
        defaultedOptions,
        observer
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldSuspend"])(defaultedOptions, result)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHasError"])({
        result,
        errorResetBoundary,
        throwOnError: defaultedOptions.throwOnError,
        query: client.getQueryCache().get(defaultedOptions.queryHash),
        suspense: defaultedOptions.suspense
    })) {
        throw result.error;
    }
    ;
    client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions, result);
    if (defaultedOptions.experimental_prefetchInRender && !__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["willFetch"])(result, isRestoring)) {
        const promise = isNewCacheEntry ? // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary) : // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
        client.getQueryCache().get(defaultedOptions.queryHash)?.promise;
        promise?.catch(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]).finally(()=>{
            observer.updateResult();
        });
    }
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
;
 //# sourceMappingURL=useBaseQuery.js.map
}),
"[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSuspenseQuery",
    ()=>useSuspenseQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/useSuspenseQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/react-query/build/modern/suspense.js [app-client] (ecmascript)");
"use client";
;
;
;
function useSuspenseQuery(options, queryClient) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (options.queryFn === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"]) {
            console.error("skipToken is not allowed for useSuspenseQuery");
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseQuery"])({
        ...options,
        enabled: true,
        suspense: true,
        throwOnError: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThrowOnError"],
        placeholderData: void 0
    }, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryObserver"], queryClient);
}
;
 //# sourceMappingURL=useSuspenseQuery.js.map
}),
"[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HydrationBoundary",
    ()=>HydrationBoundary
]);
// src/HydrationBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/query-core/build/modern/hydration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/nodelet/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
"use client";
;
;
;
var HydrationBoundary = ({ children, options = {}, state, queryClient })=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const optionsRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](options);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "HydrationBoundary.useEffect": ()=>{
            optionsRef.current = options;
        }
    }["HydrationBoundary.useEffect"]);
    const hydrationQueue = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "HydrationBoundary.useMemo[hydrationQueue]": ()=>{
            if (state) {
                if (typeof state !== "object") {
                    return;
                }
                const queryCache = client.getQueryCache();
                const queries = state.queries || [];
                const newQueries = [];
                const existingQueries = [];
                for (const dehydratedQuery of queries){
                    const existingQuery = queryCache.get(dehydratedQuery.queryHash);
                    if (!existingQuery) {
                        newQueries.push(dehydratedQuery);
                    } else {
                        const hydrationIsNewer = dehydratedQuery.state.dataUpdatedAt > existingQuery.state.dataUpdatedAt || dehydratedQuery.promise && existingQuery.state.status !== "pending" && existingQuery.state.fetchStatus !== "fetching" && dehydratedQuery.dehydratedAt !== void 0 && dehydratedQuery.dehydratedAt > existingQuery.state.dataUpdatedAt;
                        if (hydrationIsNewer) {
                            existingQueries.push(dehydratedQuery);
                        }
                    }
                }
                if (newQueries.length > 0) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrate"])(client, {
                        queries: newQueries
                    }, optionsRef.current);
                }
                if (existingQueries.length > 0) {
                    return existingQueries;
                }
            }
            return void 0;
        }
    }["HydrationBoundary.useMemo[hydrationQueue]"], [
        client,
        state
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "HydrationBoundary.useEffect": ()=>{
            if (hydrationQueue) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$nodelet$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrate"])(client, {
                    queries: hydrationQueue
                }, optionsRef.current);
            }
        }
    }["HydrationBoundary.useEffect"], [
        client,
        hydrationQueue
    ]);
    return children;
};
;
 //# sourceMappingURL=HydrationBoundary.js.map
}),
]);

//# sourceMappingURL=11b8b_83ec3c85._.js.map