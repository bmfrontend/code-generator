"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/@alilc/lowcode-code-generator/lib/index.js
var require_lib = __commonJS({
  "node_modules/@alilc/lowcode-code-generator/lib/index.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var __publicField2 = (obj, key, value) => {
      __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
      return value;
    };
    var src_exports = {};
    __export2(src_exports, {
      BUILTIN_SLOT_NAMES: () => BUILTIN_SLOT_NAMES2,
      CLASS_DEFINE_CHUNK_NAME: () => CLASS_DEFINE_CHUNK_NAME2,
      COMMON_CHUNK_NAME: () => COMMON_CHUNK_NAME2,
      COMMON_SUB_MODULE_NAME: () => COMMON_SUB_MODULE_NAME2,
      CONTAINER_TYPE: () => CONTAINER_TYPE2,
      ChunkBuilder: () => ChunkBuilder2,
      ChunkType: () => ChunkType11,
      CodeBuilder: () => CodeBuilder2,
      CodeGeneratorError: () => CodeGeneratorError6,
      CompatibilityError: () => CompatibilityError2,
      ComponentValidationError: () => ComponentValidationError,
      DEFAULT_LINK_AFTER: () => DEFAULT_LINK_AFTER3,
      DependencyType: () => DependencyType2,
      FILE_TYPE_FAMILY: () => FILE_TYPE_FAMILY2,
      FileType: () => FileType11,
      InternalDependencyType: () => InternalDependencyType2,
      NATIVE_ELE_PKG: () => NATIVE_ELE_PKG2,
      PIECE_TYPE: () => PIECE_TYPE2,
      PluginType: () => PluginType,
      ProjectBuilder: () => ProjectBuilder2,
      PublisherError: () => PublisherError,
      SUPPORT_SCHEMA_VERSION_LIST: () => SUPPORT_SCHEMA_VERSION_LIST2,
      SchemaParser: () => SchemaParser2,
      componentAnalyzer: () => componentAnalyzer2,
      createModuleBuilder: () => createModuleBuilder2,
      createProjectBuilder: () => createProjectBuilder2,
      default: () => src_default2,
      groupChunks: () => groupChunks2,
      isBuiltinSlotName: () => isBuiltinSlotName2
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_change_case22 = __toESM2(require("change-case"));
    var FileType11 = /* @__PURE__ */ ((FileType22) => {
      FileType22["CSS"] = "css";
      FileType22["SCSS"] = "scss";
      FileType22["LESS"] = "less";
      FileType22["HTML"] = "html";
      FileType22["JS"] = "js";
      FileType22["MJS"] = "mjs";
      FileType22["JSX"] = "jsx";
      FileType22["TS"] = "ts";
      FileType22["MTS"] = "mts";
      FileType22["TSX"] = "tsx";
      FileType22["JSON"] = "json";
      FileType22["MD"] = "md";
      return FileType22;
    })(FileType11 || {});
    var ChunkType11 = /* @__PURE__ */ ((ChunkType22) => {
      ChunkType22["AST"] = "ast";
      ChunkType22["STRING"] = "string";
      ChunkType22["JSON"] = "json";
      return ChunkType22;
    })(ChunkType11 || {});
    var PluginType = /* @__PURE__ */ ((PluginType2) => {
      PluginType2["COMPONENT"] = "component";
      PluginType2["UTILS"] = "utils";
      PluginType2["I18N"] = "i18n";
      return PluginType2;
    })(PluginType || {});
    var InternalDependencyType2 = /* @__PURE__ */ ((InternalDependencyType22) => {
      InternalDependencyType22["PAGE"] = "pages";
      InternalDependencyType22["BLOCK"] = "components";
      InternalDependencyType22["COMPONENT"] = "components";
      InternalDependencyType22["UTILS"] = "utils";
      return InternalDependencyType22;
    })(InternalDependencyType2 || {});
    var DependencyType2 = /* @__PURE__ */ ((DependencyType22) => {
      DependencyType22["External"] = "External";
      DependencyType22["Internal"] = "Internal";
      return DependencyType22;
    })(DependencyType2 || {});
    var CodeGeneratorError6 = class extends Error {
      constructor(message, detail) {
        super(message);
        __publicField2(this, "detail");
        this.name = this.constructor.name;
        this.detail = detail;
        Object.setPrototypeOf(this, new.target.prototype);
      }
    };
    var ComponentValidationError = class extends CodeGeneratorError6 {
    };
    var CompatibilityError2 = class extends CodeGeneratorError6 {
    };
    var PublisherError = class extends CodeGeneratorError6 {
    };
    var PIECE_TYPE2 = /* @__PURE__ */ ((PIECE_TYPE22) => {
      PIECE_TYPE22["BEFORE"] = "NodeCodePieceBefore";
      PIECE_TYPE22["TAG"] = "NodeCodePieceTag";
      PIECE_TYPE22["ATTR"] = "NodeCodePieceAttr";
      PIECE_TYPE22["CHILDREN"] = "NodeCodePieceChildren";
      PIECE_TYPE22["AFTER"] = "NodeCodePieceAfter";
      return PIECE_TYPE22;
    })(PIECE_TYPE2 || {});
    var const_exports2 = {};
    __export2(const_exports2, {
      BUILTIN_SLOT_NAMES: () => BUILTIN_SLOT_NAMES2,
      CLASS_DEFINE_CHUNK_NAME: () => CLASS_DEFINE_CHUNK_NAME2,
      COMMON_CHUNK_NAME: () => COMMON_CHUNK_NAME2,
      COMMON_SUB_MODULE_NAME: () => COMMON_SUB_MODULE_NAME2,
      CONTAINER_TYPE: () => CONTAINER_TYPE2,
      DEFAULT_LINK_AFTER: () => DEFAULT_LINK_AFTER3,
      FILE_TYPE_FAMILY: () => FILE_TYPE_FAMILY2,
      NATIVE_ELE_PKG: () => NATIVE_ELE_PKG2,
      SUPPORT_SCHEMA_VERSION_LIST: () => SUPPORT_SCHEMA_VERSION_LIST2,
      isBuiltinSlotName: () => isBuiltinSlotName2
    });
    var FILE_TYPE_FAMILY2 = [["tsx", "ts", "jsx", "js"]];
    var COMMON_CHUNK_NAME2 = {
      ExternalDepsImport: "CommonExternalDependencyImport",
      InternalDepsImport: "CommonInternalDependencyImport",
      ImportAliasDefine: "CommonImportAliasDefine",
      FileVarDefine: "CommonFileScopeVarDefine",
      FileUtilDefine: "CommonFileScopeMethodDefine",
      FileMainContent: "CommonFileMainContent",
      FileExport: "CommonFileExport",
      StyleDepsImport: "CommonStyleDepsImport",
      StyleCssContent: "CommonStyleCssContent",
      HtmlContent: "CommonHtmlContent",
      CustomContent: "CommonCustomContent"
    };
    var CLASS_DEFINE_CHUNK_NAME2 = {
      Start: "CommonClassDefineStart",
      ConstructorStart: "CommonClassDefineConstructorStart",
      ConstructorContent: "CommonClassDefineConstructorContent",
      ConstructorEnd: "CommonClassDefineConstructorEnd",
      StaticVar: "CommonClassDefineStaticVar",
      StaticMethod: "CommonClassDefineStaticMethod",
      InsVar: "CommonClassDefineInsVar",
      InsVarMethod: "CommonClassDefineInsVarMethod",
      InsMethod: "CommonClassDefineInsMethod",
      InsPrivateMethod: "CommonClassDefineInsPrivateMethod",
      End: "CommonClassDefineEnd"
    };
    var DEFAULT_LINK_AFTER3 = {
      [COMMON_CHUNK_NAME2.ExternalDepsImport]: [],
      [COMMON_CHUNK_NAME2.InternalDepsImport]: [COMMON_CHUNK_NAME2.ExternalDepsImport],
      [COMMON_CHUNK_NAME2.ImportAliasDefine]: [
        COMMON_CHUNK_NAME2.ExternalDepsImport,
        COMMON_CHUNK_NAME2.InternalDepsImport
      ],
      [COMMON_CHUNK_NAME2.FileVarDefine]: [
        COMMON_CHUNK_NAME2.ExternalDepsImport,
        COMMON_CHUNK_NAME2.InternalDepsImport,
        COMMON_CHUNK_NAME2.ImportAliasDefine
      ],
      [COMMON_CHUNK_NAME2.FileUtilDefine]: [
        COMMON_CHUNK_NAME2.ExternalDepsImport,
        COMMON_CHUNK_NAME2.InternalDepsImport,
        COMMON_CHUNK_NAME2.ImportAliasDefine,
        COMMON_CHUNK_NAME2.FileVarDefine
      ],
      [CLASS_DEFINE_CHUNK_NAME2.Start]: [
        COMMON_CHUNK_NAME2.ExternalDepsImport,
        COMMON_CHUNK_NAME2.InternalDepsImport,
        COMMON_CHUNK_NAME2.ImportAliasDefine,
        COMMON_CHUNK_NAME2.FileVarDefine,
        COMMON_CHUNK_NAME2.FileUtilDefine
      ],
      [CLASS_DEFINE_CHUNK_NAME2.ConstructorStart]: [
        CLASS_DEFINE_CHUNK_NAME2.Start,
        CLASS_DEFINE_CHUNK_NAME2.StaticVar,
        CLASS_DEFINE_CHUNK_NAME2.StaticMethod,
        CLASS_DEFINE_CHUNK_NAME2.InsVar,
        CLASS_DEFINE_CHUNK_NAME2.InsVarMethod
      ],
      [CLASS_DEFINE_CHUNK_NAME2.ConstructorContent]: [CLASS_DEFINE_CHUNK_NAME2.ConstructorStart],
      [CLASS_DEFINE_CHUNK_NAME2.ConstructorEnd]: [
        CLASS_DEFINE_CHUNK_NAME2.ConstructorStart,
        CLASS_DEFINE_CHUNK_NAME2.ConstructorContent
      ],
      [CLASS_DEFINE_CHUNK_NAME2.StaticVar]: [CLASS_DEFINE_CHUNK_NAME2.Start],
      [CLASS_DEFINE_CHUNK_NAME2.StaticMethod]: [
        CLASS_DEFINE_CHUNK_NAME2.Start,
        CLASS_DEFINE_CHUNK_NAME2.StaticVar
      ],
      [CLASS_DEFINE_CHUNK_NAME2.InsVar]: [
        CLASS_DEFINE_CHUNK_NAME2.Start,
        CLASS_DEFINE_CHUNK_NAME2.StaticVar,
        CLASS_DEFINE_CHUNK_NAME2.StaticMethod
      ],
      [CLASS_DEFINE_CHUNK_NAME2.InsVarMethod]: [
        CLASS_DEFINE_CHUNK_NAME2.Start,
        CLASS_DEFINE_CHUNK_NAME2.StaticVar,
        CLASS_DEFINE_CHUNK_NAME2.StaticMethod,
        CLASS_DEFINE_CHUNK_NAME2.InsVar
      ],
      [CLASS_DEFINE_CHUNK_NAME2.InsMethod]: [
        CLASS_DEFINE_CHUNK_NAME2.Start,
        CLASS_DEFINE_CHUNK_NAME2.StaticVar,
        CLASS_DEFINE_CHUNK_NAME2.StaticMethod,
        CLASS_DEFINE_CHUNK_NAME2.InsVar,
        CLASS_DEFINE_CHUNK_NAME2.InsVarMethod,
        CLASS_DEFINE_CHUNK_NAME2.ConstructorEnd
      ],
      [CLASS_DEFINE_CHUNK_NAME2.InsPrivateMethod]: [
        CLASS_DEFINE_CHUNK_NAME2.Start,
        CLASS_DEFINE_CHUNK_NAME2.StaticVar,
        CLASS_DEFINE_CHUNK_NAME2.StaticMethod,
        CLASS_DEFINE_CHUNK_NAME2.InsVar,
        CLASS_DEFINE_CHUNK_NAME2.InsVarMethod,
        CLASS_DEFINE_CHUNK_NAME2.InsMethod,
        CLASS_DEFINE_CHUNK_NAME2.ConstructorEnd
      ],
      [CLASS_DEFINE_CHUNK_NAME2.End]: [
        CLASS_DEFINE_CHUNK_NAME2.Start,
        CLASS_DEFINE_CHUNK_NAME2.StaticVar,
        CLASS_DEFINE_CHUNK_NAME2.StaticMethod,
        CLASS_DEFINE_CHUNK_NAME2.InsVar,
        CLASS_DEFINE_CHUNK_NAME2.InsVarMethod,
        CLASS_DEFINE_CHUNK_NAME2.InsMethod,
        CLASS_DEFINE_CHUNK_NAME2.InsPrivateMethod,
        CLASS_DEFINE_CHUNK_NAME2.ConstructorEnd
      ],
      [COMMON_CHUNK_NAME2.FileMainContent]: [
        COMMON_CHUNK_NAME2.ExternalDepsImport,
        COMMON_CHUNK_NAME2.InternalDepsImport,
        COMMON_CHUNK_NAME2.ImportAliasDefine,
        COMMON_CHUNK_NAME2.FileVarDefine,
        COMMON_CHUNK_NAME2.FileUtilDefine,
        CLASS_DEFINE_CHUNK_NAME2.End
      ],
      [COMMON_CHUNK_NAME2.FileExport]: [
        COMMON_CHUNK_NAME2.ExternalDepsImport,
        COMMON_CHUNK_NAME2.InternalDepsImport,
        COMMON_CHUNK_NAME2.ImportAliasDefine,
        COMMON_CHUNK_NAME2.FileVarDefine,
        COMMON_CHUNK_NAME2.FileUtilDefine,
        CLASS_DEFINE_CHUNK_NAME2.End,
        COMMON_CHUNK_NAME2.FileMainContent
      ],
      [COMMON_CHUNK_NAME2.StyleDepsImport]: [],
      [COMMON_CHUNK_NAME2.StyleCssContent]: [COMMON_CHUNK_NAME2.StyleDepsImport],
      [COMMON_CHUNK_NAME2.HtmlContent]: []
    };
    var COMMON_SUB_MODULE_NAME2 = "index";
    var NATIVE_ELE_PKG2 = "native";
    var CONTAINER_TYPE2 = {
      COMPONENT: "Component",
      BLOCK: "Block",
      PAGE: "Page"
    };
    var SUPPORT_SCHEMA_VERSION_LIST2 = ["0.0.1", "1.0.0"];
    var BUILTIN_SLOT_NAMES2 = [
      "pages",
      "components",
      "router",
      "entry",
      "appConfig",
      "buildConfig",
      "constants",
      "utils",
      "i18n",
      "globalStyle",
      "htmlEntry",
      "packageJSON",
      "demo"
    ];
    var isBuiltinSlotName2 = function(name) {
      return BUILTIN_SLOT_NAMES2.includes(name);
    };
    function getErrorMessage2(error) {
      if (!error) {
        return null;
      }
      if (error instanceof Error) {
        return error.message;
      }
      if (typeof error === "string") {
        return error;
      }
      if (typeof error === "object" && error !== null) {
        return getErrorMessage2(error.message) || getErrorMessage2(error.errorMessage) || getErrorMessage2(error.detail);
      }
      return null;
    }
    var schema_exports = {};
    __export2(schema_exports, {
      ContainerType: () => ContainerType2,
      handleSubNodes: () => handleSubNodes2,
      isContainerSchema: () => isContainerSchema,
      isNpmInfo: () => isNpmInfo,
      isValidContainerType: () => isValidContainerType2
    });
    var _2 = __toESM2(require("lodash"));
    var import_lowcode_types2 = require("@alilc/lowcode-types");
    var common_exports = {};
    __export2(common_exports, {
      camel2dash: () => camel2dash,
      camelize: () => camelize,
      generateID: () => generateID,
      getStaticExprValue: () => getStaticExprValue2,
      isExternalDependency: () => isExternalDependency,
      isInternalDependency: () => isInternalDependency,
      isJSExpressionFn: () => isJSExpressionFn,
      uniqueArray: () => uniqueArray2,
      upperCaseFirst: () => upperCaseFirst
    });
    var import_change_case4 = __toESM2(require("change-case"));
    var import_short_uuid = __toESM2(require("short-uuid"));
    function camel2dash(input) {
      return import_change_case4.default.paramCase(input);
    }
    function camelize(str) {
      return import_change_case4.default.camelCase(str);
    }
    function generateID() {
      return import_short_uuid.default.generate();
    }
    function upperCaseFirst(inputValue) {
      return import_change_case4.default.upperCaseFirst(inputValue);
    }
    function uniqueArray2(arr, by) {
      const map = {};
      arr.forEach((item) => {
        map[by(item)] = item;
      });
      const uniqueKeys = Array.from(new Set(Object.keys(map)));
      const uniqueItems = uniqueKeys.map((key) => map[key]);
      return uniqueItems;
    }
    function getStaticExprValue2(expr) {
      return Function(`"use strict";return (${expr})`)();
    }
    function isJSExpressionFn(data) {
      return (data == null ? void 0 : data.type) === "JSExpression" && (data == null ? void 0 : data.extType) === "function";
    }
    function isInternalDependency(dependency) {
      return dependency.dependencyType === "Internal";
    }
    function isExternalDependency(dependency) {
      return dependency.dependencyType === "External";
    }
    function isContainerSchema(x) {
      return typeof x === "object" && x && typeof x.componentName === "string" && typeof x.fileName === "string";
    }
    function isNpmInfo(x) {
      return typeof x === "object" && x && typeof x.package === "string";
    }
    var noop = () => void 0;
    var handleChildrenDefaultOptions = {
      rerun: false
    };
    var DEFAULT_MAX_DEPTH = 1e5;
    function handleSubNodes2(children, handlers, options) {
      var _a;
      const opt = {
        ...handleChildrenDefaultOptions,
        ...options || {}
      };
      const maxDepth = (_a = opt.maxDepth) != null ? _a : DEFAULT_MAX_DEPTH;
      if (maxDepth <= 0) {
        throw new Error("handleSubNodes maxDepth reached");
      }
      if (Array.isArray(children)) {
        const list = children;
        return list.map((child) => handleSubNodes2(child, handlers, { ...opt, maxDepth: maxDepth - 1 })).reduce((p, c) => p.concat(c), []);
      }
      let result;
      const childrenRes = [];
      if (children === null || children === void 0) {
        return [];
      } else if ((0, import_lowcode_types2.isDOMText)(children)) {
        const handler = handlers.string || noop;
        result = handler(children);
      } else if ((0, import_lowcode_types2.isJSExpression)(children)) {
        const handler = handlers.expression || noop;
        result = handler(children);
      } else if ((0, import_lowcode_types2.isJSSlot)(children)) {
        return handleSubNodes2(children.value, handlers, { ...opt, maxDepth: maxDepth - 1 });
      } else if ((0, import_lowcode_types2.isNodeSchema)(children)) {
        const handler = handlers.node || noop;
        const child = children;
        result = handler(child);
        if (child.children) {
          const childRes = handleSubNodes2(child.children, handlers, opt);
          childrenRes.push(...childRes);
        }
        if (child.props) {
          if (Array.isArray(child.props)) {
            child.props.forEach(({ value }) => {
              const childRes = handleCompositeValueInProps(value);
              childrenRes.push(...childRes);
            });
          } else {
            Object.values(child.props).forEach((value) => {
              const childRes = handleCompositeValueInProps(value);
              childrenRes.push(...childRes);
            });
          }
        }
      } else {
        throw new CodeGeneratorError6("handleSubNodes got invalid NodeData", children);
      }
      if (result !== void 0) {
        childrenRes.unshift(result);
      }
      return childrenRes;
      function handleCompositeValueInProps(value) {
        if ((0, import_lowcode_types2.isJSSlot)(value)) {
          return handleSubNodes2(value.value, handlers, { ...opt, maxDepth: maxDepth - 1 });
        }
        if (Array.isArray(value)) {
          return _2.flatMap(value, (v) => handleCompositeValueInProps(v));
        }
        if (!(0, import_lowcode_types2.isJSExpression)(value) && !isJSExpressionFn(value) && !(0, import_lowcode_types2.isJSFunction)(value) && typeof value === "object" && value !== null) {
          return _2.flatMap(Object.values(value), (v) => handleCompositeValueInProps(v));
        }
        return [];
      }
    }
    function isValidContainerType2(schema) {
      return [
        "Page",
        "Component",
        "Block"
      ].includes(schema.componentName);
    }
    var ContainerType2 = /* @__PURE__ */ ((ContainerType22) => {
      ContainerType22["Page"] = "Page";
      ContainerType22["Component"] = "Component";
      ContainerType22["Block"] = "Block";
      return ContainerType22;
    })(ContainerType2 || {});
    var componentAnalyzer2 = (container) => {
      let hasRefAttr = false;
      const nodeValidator = (n) => {
        if (n.props) {
          const props = n.props;
          if (props.ref) {
            hasRefAttr = true;
          }
        }
      };
      nodeValidator(container);
      if (!hasRefAttr && container.children) {
        handleSubNodes2(
          container.children,
          {
            node: nodeValidator
          },
          {
            rerun: true
          }
        );
      }
      return {
        isUsingRef: hasRefAttr
      };
    };
    var validate_exports = {};
    __export2(validate_exports, {
      ensureValidClassName: () => ensureValidClassName3,
      isValidComponentName: () => isValidComponentName,
      isValidIdentifier: () => isValidIdentifier2
    });
    var isValidIdentifier2 = (name) => {
      return /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/.test(name);
    };
    var isValidComponentName = (name) => {
      return /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF.]*$/.test(name);
    };
    var ensureValidClassName3 = (name) => {
      if (!isValidIdentifier2(name)) {
        return `$${name.replace(/[^_$a-zA-Z0-9]/g, "")}`;
      }
      return name;
    };
    var defaultContainer2 = {
      containerType: "Component",
      componentName: "Component",
      moduleName: "Index",
      fileName: "Index",
      css: "",
      props: {}
    };
    function getRootComponentName2(typeName, maps) {
      if (maps[typeName]) {
        const rec = maps[typeName];
        if (rec.destructuring) {
          return rec.componentName || typeName;
        }
        const peerName = Object.keys(maps).find((depName) => {
          const depInfo = maps[depName];
          return depName !== typeName && !depInfo.destructuring && depInfo.package === rec.package && depInfo.version === rec.version && depInfo.main === rec.main && depInfo.exportName === rec.exportName && depInfo.subName === rec.subName;
        });
        return peerName || typeName;
      }
      return typeName;
    }
    function processChildren2(schema) {
      if (schema.props) {
        if (Array.isArray(schema.props)) {
        } else {
          const nodeProps = schema.props;
          if (nodeProps.children) {
            if (!schema.children) {
              schema.children = nodeProps.children;
            } else {
              let _children = [];
              if (Array.isArray(schema.children)) {
                _children = _children.concat(schema.children);
              } else {
                _children.push(schema.children);
              }
              if (Array.isArray(nodeProps.children)) {
                _children = _children.concat(nodeProps.children);
              } else {
                _children.push(nodeProps.children);
              }
              schema.children = _children;
            }
            delete nodeProps.children;
          }
        }
      }
    }
    function getInternalDep2(internalDeps, depName) {
      const dep = internalDeps[depName];
      return dep && dep.type !== "pages" ? dep : null;
    }
    var SchemaParser2 = class {
      validate(schema) {
        if (SUPPORT_SCHEMA_VERSION_LIST2.indexOf(schema.version) < 0) {
          throw new CompatibilityError2(`Not support schema with version [${schema.version}]`);
        }
        return true;
      }
      parse(schemaSrc) {
        const compDeps = {};
        const internalDeps = {};
        let utilsDeps = [];
        const schema = this.decodeSchema(schemaSrc);
        schema.componentsMap.forEach((info) => {
          var _a, _b;
          if (info.componentName) {
            compDeps[info.componentName] = {
              ...info,
              dependencyType: "External",
              componentName: info.componentName,
              exportName: (_a = info.exportName) != null ? _a : info.componentName,
              version: info.version || "*",
              destructuring: (_b = info.destructuring) != null ? _b : false
            };
          }
        });
        let containers;
        if (schema.componentsTree.length > 0) {
          const firstRoot = schema.componentsTree[0];
          if (!firstRoot.fileName && !isValidContainerType2(firstRoot)) {
            const container = {
              ...firstRoot,
              ...defaultContainer2,
              props: firstRoot.props || defaultContainer2.props,
              css: firstRoot.css || defaultContainer2.css,
              moduleName: firstRoot.moduleName || defaultContainer2.moduleName,
              children: schema.componentsTree
            };
            containers = [container];
          } else {
            containers = schema.componentsTree.map((n) => {
              const subRoot = n;
              const container = {
                ...subRoot,
                componentName: getRootComponentName2(subRoot.componentName, compDeps),
                containerType: subRoot.componentName,
                moduleName: ensureValidClassName3(subRoot.componentName === "Component" ? subRoot.fileName : import_change_case22.default.pascalCase(subRoot.fileName))
              };
              return container;
            });
          }
        } else {
          throw new CodeGeneratorError6("Can't find anything to generate.");
        }
        containers = containers.map((con) => ({
          ...con,
          analyzeResult: componentAnalyzer2(con)
        }));
        containers.forEach((container) => {
          let type;
          switch (container.containerType) {
            case "Page":
              type = "pages";
              break;
            case "Block":
              type = "components";
              break;
            default:
              type = "components";
              break;
          }
          const dep = {
            type,
            moduleName: container.moduleName,
            destructuring: false,
            exportName: container.moduleName,
            dependencyType: "Internal"
          };
          internalDeps[dep.moduleName] = dep;
        });
        const containersDeps = [].concat(...containers.map((c) => c.deps || []));
        containers.forEach((container) => {
          if (container.children) {
            handleSubNodes2(
              container.children,
              {
                node: (i) => processChildren2(i)
              },
              {
                rerun: true
              }
            );
          }
        });
        containers.forEach((container) => {
          const depNames = this.getComponentNames(container);
          container.deps = uniqueArray2(depNames, (i) => i).map((depName) => getInternalDep2(internalDeps, depName) || compDeps[depName]).filter(Boolean);
        });
        const routes = containers.filter((container) => container.containerType === "Page").map((page) => {
          const { meta } = page;
          if (meta) {
            return {
              path: meta.router || `/${page.fileName}`,
              fileName: page.fileName,
              componentName: page.moduleName
            };
          }
          return {
            path: "",
            fileName: page.fileName,
            componentName: page.moduleName
          };
        });
        const routerDeps = routes.map((r) => internalDeps[r.componentName] || compDeps[r.componentName]).filter((dep) => !!dep);
        let utils;
        if (schema.utils) {
          utils = schema.utils;
          utilsDeps = schema.utils.filter(
            (u) => u.type !== "function"
          ).map(
            (u) => {
              var _a, _b;
              return {
                ...u.content,
                componentName: u.name,
                version: u.content.version || "*",
                destructuring: (_a = u.content.destructuring) != null ? _a : false,
                exportName: (_b = u.content.exportName) != null ? _b : u.name
              };
            }
          );
        } else {
          utils = [];
        }
        let npms = [];
        containers.forEach((con) => {
          const p = (con.deps || []).map((dep) => {
            return dep.dependencyType === "External" ? dep : null;
          }).filter((dep) => dep !== null);
          const npmInfos = p.filter(Boolean).map((i) => ({
            package: i.package,
            version: i.version
          }));
          npms.push(...npmInfos);
        });
        npms.push(
          ...utilsDeps.map((utilsDep) => ({
            package: utilsDep.package,
            version: utilsDep.version
          }))
        );
        npms = uniqueArray2(npms, (i) => i.package).filter(Boolean);
        return {
          containers,
          globalUtils: {
            utils,
            deps: utilsDeps
          },
          globalI18n: schema.i18n,
          globalRouter: {
            routes,
            deps: routerDeps
          },
          project: {
            css: schema.css,
            constants: schema.constants,
            config: schema.config || {},
            meta: schema.meta || {},
            i18n: schema.i18n,
            containersDeps,
            utilsDeps,
            packages: npms || [],
            dataSourcesTypes: this.collectDataSourcesTypes(schema),
            projectRemark: this.getProjectRemark(containers)
          }
        };
      }
      getProjectRemark(containers) {
        return {
          isSingleComponent: containers.length === 1 && containers[0].containerType === "Component"
        };
      }
      getComponentNames(children) {
        return handleSubNodes2(
          children,
          {
            node: (i) => i.componentName
          },
          {
            rerun: true
          }
        );
      }
      decodeSchema(schemaSrc) {
        let schema;
        if (typeof schemaSrc === "string") {
          try {
            schema = JSON.parse(schemaSrc);
          } catch (error) {
            throw new CodeGeneratorError6(
              `Parse schema failed: ${getErrorMessage2(error) || "unknown reason"}`
            );
          }
        } else {
          schema = schemaSrc;
        }
        return schema;
      }
      collectDataSourcesTypes(schema) {
        var _a, _b;
        const dataSourcesTypes = /* @__PURE__ */ new Set();
        const defaultDataSourceType = "fetch";
        (_b = (_a = schema.dataSource) == null ? void 0 : _a.list) == null ? void 0 : _b.forEach((ds) => {
          dataSourcesTypes.add(ds.type || defaultDataSourceType);
        });
        schema.componentsTree.forEach((rootNode) => {
          var _a2, _b2;
          (_b2 = (_a2 = rootNode.dataSource) == null ? void 0 : _a2.list) == null ? void 0 : _b2.forEach((ds) => {
            dataSourcesTypes.add(ds.type || defaultDataSourceType);
          });
        });
        return Array.from(dataSourcesTypes.values());
      }
    };
    var resultHelper_exports = {};
    __export2(resultHelper_exports, {
      addDirectory: () => addDirectory2,
      addFile: () => addFile3,
      createResultDir: () => createResultDir4,
      createResultFile: () => createResultFile2,
      findDir: () => findDir,
      findFile: () => findFile,
      flattenResult: () => flattenResult,
      getFileNameWithExt: () => getFileNameWithExt,
      globDirs: () => globDirs,
      globFiles: () => globFiles,
      removeDirsFromResult: () => removeDirsFromResult,
      removeFilesFromResult: () => removeFilesFromResult,
      scanDirs: () => scanDirs,
      scanFiles: () => scanFiles
    });
    var import_nanomatch = __toESM2(require("nanomatch"));
    function createResultFile2(name, ext = "jsx", content = "") {
      return {
        name,
        ext,
        content
      };
    }
    function createResultDir4(name) {
      return {
        name,
        dirs: [],
        files: []
      };
    }
    function addDirectory2(target, dir) {
      if (target.dirs.findIndex((d) => d.name === dir.name) < 0) {
        target.dirs.push(dir);
      } else {
        throw new CodeGeneratorError6(
          `Adding same directory to one directory: ${dir.name} -> ${target.name}`
        );
      }
    }
    function addFile3(target, file2) {
      if (target.files.findIndex((f) => f.name === file2.name && f.ext === file2.ext) < 0) {
        target.files.push(file2);
      } else {
        throw new CodeGeneratorError6(
          `Adding same file to one directory: ${file2.name} -> ${target.name}`
        );
      }
    }
    function flattenResult(dir, cwd = "") {
      if (!dir.files.length && !dir.dirs.length) {
        return [];
      }
      return [
        ...dir.files.map(
          (file2) => ({
            pathName: joinPath(cwd, `${file2.name}${file2.ext ? `.${file2.ext}` : ""}`),
            content: file2.content
          })
        )
      ].concat(...dir.dirs.map((subDir) => flattenResult(subDir, joinPath(cwd, subDir.name))));
    }
    function findFile(result, fileGlobExpr, options = {}, resultDirPath = getResultNameOrDefault(result, "")) {
      const maxDepth = !/\/|\*\*/.test(fileGlobExpr) ? 1 : void 0;
      const files = scanFiles(result, resultDirPath, maxDepth);
      for (let [filePath, file2] of files) {
        if (import_nanomatch.default.isMatch(filePath, fileGlobExpr, options)) {
          return file2;
        }
      }
      return null;
    }
    function* globFiles(result, fileGlobExpr, options = {}, resultDirPath = getResultNameOrDefault(result, "")) {
      const files = scanFiles(result, resultDirPath);
      for (let [filePath, file2] of files) {
        if (import_nanomatch.default.isMatch(filePath, fileGlobExpr, options)) {
          yield [filePath, file2];
        }
      }
    }
    function* scanFiles(result, resultDirPath = getResultNameOrDefault(result, ""), maxDepth = 1e4) {
      for (let file2 of result.files) {
        const fileName = getFileNameWithExt(file2);
        yield [joinPath(resultDirPath, fileName), file2];
      }
      for (let subDir of result.dirs) {
        yield* scanFiles(subDir, joinPath(resultDirPath, subDir.name), maxDepth - 1);
      }
    }
    function getFileNameWithExt(file2) {
      return `${file2.name}${file2.ext ? `.${file2.ext}` : ""}`;
    }
    function getResultNameOrDefault(result, defaultDir = "/") {
      return result.name && result.name !== "." ? result.name : defaultDir;
    }
    function joinPath(...pathParts) {
      return pathParts.filter((x) => x !== "" && x !== ".").join("/").replace(/\\+/g, "/").replace(/\/+/g, "/");
    }
    function* scanDirs(result, resultDirPath = getResultNameOrDefault(result, ""), maxDepth = 1e4) {
      yield [resultDirPath, result];
      for (let subDir of result.dirs) {
        yield* scanDirs(subDir, joinPath(resultDirPath, subDir.name), maxDepth - 1);
      }
    }
    function* globDirs(result, dirGlobExpr, options = {}, resultDirPath = getResultNameOrDefault(result, "")) {
      const dirs = scanDirs(result, resultDirPath);
      for (let [dirPath, dir] of dirs) {
        if (import_nanomatch.default.isMatch(dirPath, dirGlobExpr, options)) {
          yield [dirPath, dir];
        }
      }
    }
    function findDir(result, dirGlobExpr, options = {}, resultDirPath = getResultNameOrDefault(result, "")) {
      const dirs = scanDirs(result, resultDirPath);
      for (let [dirPath, dir] of dirs) {
        if (import_nanomatch.default.isMatch(dirPath, dirGlobExpr, options)) {
          return dir;
        }
      }
      return null;
    }
    function removeFilesFromResult(result, filePathGlobExpr, globOptions = {}) {
      let removedCount = 0;
      const [dirPath, fileName] = splitPath(filePathGlobExpr);
      const dirs = dirPath ? globDirs(result, dirPath) : [["", result]];
      for (let [, dir] of dirs) {
        const files = globFiles(dir, fileName, globOptions, ".");
        for (let [, file2] of files) {
          dir.files.splice(dir.files.indexOf(file2), 1);
          removedCount += 1;
        }
      }
      return removedCount;
    }
    function removeDirsFromResult(result, dirPathGlobExpr, globOptions = {}) {
      let removedCount = 0;
      const [dirPath, fileName] = splitPath(dirPathGlobExpr);
      const dirs = dirPath ? globDirs(result, dirPath) : [["", result]];
      for (let [, dir] of dirs) {
        const foundDirs = globDirs(dir, fileName, globOptions, ".");
        for (let [, foundDir] of foundDirs) {
          dir.dirs.splice(dir.dirs.indexOf(foundDir), 1);
          removedCount += 1;
        }
      }
      return removedCount;
    }
    function splitPath(filePath) {
      const parts = filePath.split("/");
      const fileName = parts.pop() || "";
      return [joinPath(...parts), fileName];
    }
    function whichFamily2(type) {
      const idx = FILE_TYPE_FAMILY2.findIndex((family) => family.indexOf(type) >= 0);
      if (idx < 0) {
        return void 0;
      }
      return [idx, FILE_TYPE_FAMILY2[idx]];
    }
    var groupChunks2 = (chunks) => {
      const tmp = {};
      const col = chunks.reduce((chunksSet, chunk) => {
        const fileKey = chunk.subModule || COMMON_SUB_MODULE_NAME2;
        if (!chunksSet[fileKey]) {
          chunksSet[fileKey] = [];
        }
        const res = whichFamily2(chunk.fileType);
        const info = {
          chunk
        };
        if (res) {
          const [familyIdx, family] = res;
          const rank = family.indexOf(chunk.fileType);
          if (tmp[fileKey]) {
            if (tmp[fileKey][familyIdx] !== void 0) {
              if (tmp[fileKey][familyIdx] > rank) {
                tmp[fileKey][familyIdx] = rank;
              }
            } else {
              tmp[fileKey][familyIdx] = rank;
            }
          } else {
            tmp[fileKey] = {};
            tmp[fileKey][familyIdx] = rank;
          }
          info.familyIdx = familyIdx;
        }
        chunksSet[fileKey].push(info);
        return chunksSet;
      }, {});
      const result = [];
      Object.keys(col).forEach((key) => {
        const byType = {};
        col[key].forEach((info) => {
          let t3 = info.chunk.fileType;
          if (info.familyIdx !== void 0) {
            t3 = FILE_TYPE_FAMILY2[info.familyIdx][tmp[key][info.familyIdx]];
            info.chunk.fileType = t3;
          }
          if (!byType[t3]) {
            byType[t3] = [];
          }
          byType[t3].push(info.chunk);
        });
        result.push(...Object.keys(byType).map((t3) => byType[t3]));
      });
      return result;
    };
    var ChunkBuilder2 = class {
      constructor(plugins4 = []) {
        __publicField2(this, "plugins");
        this.plugins = plugins4;
      }
      async run(ir, initialStructure = {
        ir,
        chunks: [],
        depNames: [],
        contextData: {}
      }) {
        const structure = initialStructure;
        const finalStructure = await this.plugins.reduce(
          async (previousPluginOperation, plugin) => {
            const modifiedStructure = await previousPluginOperation;
            return plugin(modifiedStructure);
          },
          Promise.resolve(structure)
        );
        const chunks = groupChunks2(finalStructure.chunks);
        return {
          chunks
        };
      }
      getPlugins() {
        return this.plugins;
      }
      addPlugin(plugin) {
        this.plugins.push(plugin);
      }
    };
    var CodeBuilder2 = class {
      constructor(chunkDefinitions = []) {
        __publicField2(this, "chunkDefinitions", []);
        __publicField2(this, "generators", {
          ["string"]: (str) => str,
          ["json"]: (json) => JSON.stringify(json)
        });
        this.chunkDefinitions = chunkDefinitions;
      }
      link(chunkDefinitions = []) {
        const chunks = chunkDefinitions || this.chunkDefinitions;
        if (chunks.length <= 0) {
          return "";
        }
        const unprocessedChunks = chunks.map((chunk) => {
          return {
            name: chunk.name,
            type: chunk.type,
            content: chunk.content,
            linkAfter: this.cleanupInvalidChunks(chunk.linkAfter, chunks)
          };
        });
        const resultingString = [];
        while (unprocessedChunks.length > 0) {
          let indexToRemove = 0;
          for (let index = 0; index < unprocessedChunks.length; index++) {
            if (unprocessedChunks[index].linkAfter.length <= 0) {
              indexToRemove = index;
              break;
            }
          }
          if (unprocessedChunks[indexToRemove].linkAfter.length > 0) {
            throw new CodeGeneratorError6(
              "Operation aborted. Reason: cyclic dependency between chunks."
            );
          }
          const { type, content, name } = unprocessedChunks[indexToRemove];
          const compiledContent = this.generateByType(type, content);
          if (compiledContent) {
            resultingString.push(`${compiledContent}
`);
          }
          unprocessedChunks.splice(indexToRemove, 1);
          if (!unprocessedChunks.some((ch) => ch.name === name)) {
            unprocessedChunks.forEach(
              (ch) => {
                ch.linkAfter = ch.linkAfter.filter((after) => after !== name);
              }
            );
          }
        }
        return resultingString.join("\n");
      }
      generateByType(type, content) {
        if (!content) {
          return "";
        }
        if (Array.isArray(content)) {
          return content.map((contentItem) => this.generateByType(type, contentItem)).join("\n");
        }
        if (!this.generators[type]) {
          throw new Error(
            `Attempted to generate unknown type ${type}. Please register a generator for this type in builder/index.ts`
          );
        }
        return this.generators[type](content);
      }
      cleanupInvalidChunks(linkAfter, chunks) {
        return linkAfter.filter((chunkName) => chunks.some((chunk) => chunk.name === chunkName));
      }
    };
    function createModuleBuilder2(options = {
      plugins: [],
      postProcessors: []
    }) {
      const chunkGenerator = new ChunkBuilder2(options.plugins);
      const linker = new CodeBuilder2();
      const generateModule = async (input) => {
        const moduleMainName = options.mainFileName || COMMON_SUB_MODULE_NAME2;
        if (chunkGenerator.getPlugins().length <= 0) {
          throw new CodeGeneratorError6(
            "No plugins found. Component generation cannot work without any plugins!"
          );
        }
        let files = [];
        const { chunks } = await chunkGenerator.run(input, {
          ir: input,
          chunks: [],
          depNames: [],
          contextData: options.contextData || {}
        });
        chunks.forEach((fileChunkList) => {
          const content = linker.link(fileChunkList);
          const file2 = createResultFile2(
            fileChunkList[0].subModule || moduleMainName,
            fileChunkList[0].fileType,
            content
          );
          files.push(file2);
        });
        if (options.postProcessors.length > 0) {
          files = files.map((file2) => {
            let { content, ext: type, name } = file2;
            options.postProcessors.forEach((processer) => {
              content = processer(content, type, name);
            });
            return createResultFile2(file2.name, type, content);
          });
        }
        return {
          files
        };
      };
      const generateModuleCode = async (schema) => {
        const schemaParser = new SchemaParser2();
        const parseResult = schemaParser.parse(schema);
        const containerInfo = parseResult.containers[0];
        const { files } = await generateModule(containerInfo);
        const dir = createResultDir4(containerInfo.moduleName);
        files.forEach((file2) => addFile3(dir, file2));
        return dir;
      };
      const linkCodeChunks = (chunks, fileName) => {
        const files = [];
        Object.keys(chunks).forEach((fileKey) => {
          const fileChunkList = chunks[fileKey];
          const content = linker.link(fileChunkList);
          const file2 = createResultFile2(
            fileChunkList[0].subModule || fileName,
            fileChunkList[0].fileType,
            content
          );
          files.push(file2);
        });
        return files;
      };
      return {
        generateModule,
        generateModuleCode,
        linkCodeChunks,
        addPlugin: chunkGenerator.addPlugin.bind(chunkGenerator)
      };
    }
    var ProjectBuilder2 = class {
      constructor(builderOptions) {
        __publicField2(this, "template");
        __publicField2(this, "plugins");
        __publicField2(this, "postProcessors");
        __publicField2(this, "schemaParser");
        __publicField2(this, "projectPreProcessors");
        __publicField2(this, "projectPostProcessors");
        __publicField2(this, "inStrictMode");
        __publicField2(this, "extraContextData");
        let customBuilderOptions = builderOptions;
        if (typeof builderOptions.customizeBuilderOptions === "function") {
          customBuilderOptions = builderOptions.customizeBuilderOptions(builderOptions);
        }
        const {
          template,
          plugins: plugins4,
          postProcessors,
          schemaParser = new SchemaParser2(),
          projectPreProcessors = [],
          projectPostProcessors = [],
          inStrictMode = false,
          extraContextData = {}
        } = customBuilderOptions;
        this.template = template;
        this.plugins = plugins4;
        this.postProcessors = postProcessors;
        this.schemaParser = schemaParser;
        this.projectPreProcessors = projectPreProcessors;
        this.projectPostProcessors = projectPostProcessors;
        this.inStrictMode = inStrictMode;
        this.extraContextData = extraContextData;
      }
      async generateProject(originalSchema) {
        var _a, _b, _c;
        const { schemaParser } = this;
        let schema = typeof originalSchema === "string" ? JSON.parse(originalSchema) : originalSchema;
        for (const preProcessor of this.projectPreProcessors) {
          schema = await preProcessor(schema);
        }
        if (!schemaParser.validate(schema)) {
          throw new CodeGeneratorError6("Schema is invalid");
        }
        const parseResult = schemaParser.parse(schema);
        const projectRoot = await this.template.generateTemplate(parseResult);
        let buildResult = [];
        const builders = this.createModuleBuilders({
          extraContextData: {
            projectRemark: (_a = parseResult == null ? void 0 : parseResult.project) == null ? void 0 : _a.projectRemark,
            template: this.template
          }
        });
        const containerBuildResult = await Promise.all(
          parseResult.containers.map(async (containerInfo) => {
            let builder;
            let path2;
            if (containerInfo.containerType === "Page") {
              builder = builders.pages;
              path2 = this.template.slots.pages.path;
            } else {
              builder = builders.components;
              path2 = this.template.slots.components.path;
            }
            const { files } = await builder.generateModule(containerInfo);
            return {
              moduleName: containerInfo.moduleName,
              path: path2,
              files
            };
          })
        );
        buildResult = buildResult.concat(containerBuildResult);
        if (parseResult.globalRouter && builders.router) {
          const { files } = await builders.router.generateModule(parseResult.globalRouter);
          buildResult.push({
            path: this.template.slots.router.path,
            files
          });
        }
        if (parseResult.project && builders.entry) {
          const { files } = await builders.entry.generateModule(parseResult.project);
          buildResult.push({
            path: this.template.slots.entry.path,
            files
          });
        }
        if (builders.appConfig) {
          const { files } = await builders.appConfig.generateModule(parseResult);
          buildResult.push({
            path: this.template.slots.appConfig.path,
            files
          });
        }
        if (builders.buildConfig) {
          const { files } = await builders.buildConfig.generateModule(parseResult);
          buildResult.push({
            path: this.template.slots.buildConfig.path,
            files
          });
        }
        if (parseResult.project && builders.constants && this.template.slots.constants) {
          const { files } = await builders.constants.generateModule(parseResult.project);
          buildResult.push({
            path: this.template.slots.constants.path,
            files
          });
        }
        if (parseResult.globalUtils && builders.utils && this.template.slots.utils) {
          const { files } = await builders.utils.generateModule(parseResult.globalUtils);
          buildResult.push({
            path: this.template.slots.utils.path,
            files
          });
        }
        if (builders.i18n && this.template.slots.i18n) {
          const { files } = await builders.i18n.generateModule(parseResult.project);
          buildResult.push({
            path: this.template.slots.i18n.path,
            files
          });
        }
        if (parseResult.project && builders.globalStyle) {
          const { files } = await builders.globalStyle.generateModule(parseResult.project);
          buildResult.push({
            path: this.template.slots.globalStyle.path,
            files
          });
        }
        if (parseResult.project && builders.htmlEntry) {
          const { files } = await builders.htmlEntry.generateModule(parseResult.project);
          buildResult.push({
            path: this.template.slots.htmlEntry.path,
            files
          });
        }
        if (parseResult.project && builders.packageJSON) {
          const { files } = await builders.packageJSON.generateModule(parseResult.project);
          buildResult.push({
            path: this.template.slots.packageJSON.path,
            files
          });
        }
        if (parseResult.project && builders.demo) {
          const { files } = await builders.demo.generateModule(parseResult.project);
          buildResult.push({
            path: this.template.slots.demo.path,
            files
          });
        }
        await this.generateExtraSlots(builders, parseResult, buildResult);
        const isSingleComponent = (_c = (_b = parseResult == null ? void 0 : parseResult.project) == null ? void 0 : _b.projectRemark) == null ? void 0 : _c.isSingleComponent;
        buildResult.forEach((moduleInfo) => {
          let targetDir = getDirFromRoot2(projectRoot, moduleInfo.path);
          if (moduleInfo.moduleName && !isSingleComponent) {
            const dir = createResultDir4(moduleInfo.moduleName);
            addDirectory2(targetDir, dir);
            targetDir = dir;
          }
          moduleInfo.files.forEach((file2) => addFile3(targetDir, file2));
        });
        let finalResult = projectRoot;
        for (const projectPostProcessor of this.projectPostProcessors) {
          finalResult = await projectPostProcessor(finalResult, schema, originalSchema, {
            template: this.template,
            parseResult
          });
        }
        return finalResult;
      }
      createModuleBuilders(extraContextData = {}) {
        const builders = {};
        Object.keys(this.plugins).forEach((pluginName) => {
          if (this.plugins[pluginName].length > 0) {
            const options = {};
            if (this.template.slots[pluginName] && this.template.slots[pluginName].fileName) {
              options.mainFileName = this.template.slots[pluginName].fileName;
            }
            builders[pluginName] = createModuleBuilder2({
              plugins: this.plugins[pluginName],
              postProcessors: this.postProcessors,
              contextData: {
                inStrictMode: this.inStrictMode,
                tolerateEvalErrors: true,
                evalErrorsHandler: "",
                ...this.extraContextData,
                ...extraContextData
              },
              ...options
            });
          }
        });
        return builders;
      }
      async generateExtraSlots(builders, parseResult, buildResult) {
        for (const slotName in this.template.slots) {
          if (!isBuiltinSlotName2(slotName)) {
            const { files } = await builders[slotName].generateModule(parseResult);
            buildResult.push({
              path: this.template.slots[slotName].path,
              files
            });
          }
        }
      }
    };
    function createProjectBuilder2(initOptions) {
      return new ProjectBuilder2(initOptions);
    }
    function getDirFromRoot2(root, path2) {
      let current = root;
      path2.forEach((p) => {
        const exist = current.dirs.find((d) => d.name === p);
        if (exist) {
          current = exist;
        } else {
          const newDir = createResultDir4(p);
          addDirectory2(current, newDir);
          current = newDir;
        }
      });
      return current;
    }
    var defaultFs = __toESM2(require("fs"));
    var systemFs = __toESM2(require("fs"));
    var import_path = require("path");
    var writeFolder = async (folder, currentPath, createProjectFolder = true, fs3 = systemFs) => {
      const { name, files, dirs } = folder;
      const folderPath = createProjectFolder ? (0, import_path.join)(currentPath, name) : currentPath;
      if (!fs3.existsSync(folderPath)) {
        await createDirectory(folderPath, fs3);
      }
      const promises = [
        writeFilesToFolder(folderPath, files, fs3),
        writeSubFoldersToFolder(folderPath, dirs, fs3)
      ];
      await Promise.all(promises);
    };
    var writeFilesToFolder = async (folderPath, files, fs3) => {
      const promises = files.map((file2) => {
        const fileName = file2.ext ? `${file2.name}.${file2.ext}` : file2.name;
        const filePath = (0, import_path.join)(folderPath, fileName);
        return writeContentToFile(filePath, file2.content, "utf8", fs3);
      });
      await Promise.all(promises);
    };
    var writeSubFoldersToFolder = async (folderPath, subFolders, fs3) => {
      const promises = subFolders.map((subFolder) => {
        return writeFolder(subFolder, folderPath, true, fs3);
      });
      await Promise.all(promises);
    };
    var createDirectory = (pathToDir, fs3) => {
      return new Promise((resolve2, reject) => {
        fs3.mkdir(pathToDir, { recursive: true }, (err) => {
          err ? reject(err) : resolve2();
        });
      });
    };
    var writeContentToFile = (filePath, fileContent, encoding = "utf8", fs3) => {
      return new Promise((resolve2, reject) => {
        fs3.writeFile(filePath, fileContent, { encoding }, (err) => {
          err ? reject(err) : resolve2();
        });
      });
    };
    var createDiskPublisher = (params = {}) => {
      let { project, outputPath = "./" } = params;
      const { fs: fs3 = defaultFs } = params;
      const getProject = () => {
        if (!project) {
          throw new PublisherError("MissingProject");
        }
        return project;
      };
      const setProject = (projectToSet) => {
        project = projectToSet;
      };
      const getOutputPath = () => {
        return outputPath;
      };
      const setOutputPath = (path2) => {
        outputPath = path2;
      };
      const publish = async (options = {}) => {
        var _a;
        const projectToPublish = options.project || project;
        if (!projectToPublish) {
          throw new PublisherError("MissingProject");
        }
        const projectOutputPath = options.outputPath || outputPath;
        const overrideProjectSlug = options.projectSlug || params.projectSlug;
        const createProjectFolder = (_a = options.createProjectFolder) != null ? _a : params.createProjectFolder;
        if (overrideProjectSlug) {
          projectToPublish.name = overrideProjectSlug;
        }
        try {
          await writeFolder(projectToPublish, projectOutputPath, createProjectFolder, fs3);
          return { success: true, payload: projectOutputPath };
        } catch (error) {
          throw new PublisherError(getErrorMessage2(error) || "UnknownError");
        }
      };
      return {
        publish,
        getProject,
        setProject,
        getOutputPath,
        setOutputPath
      };
    };
    var import_jszip = __toESM2(require("jszip"));
    var isNodeProcess = () => {
      return typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node !== "undefined";
    };
    var writeZipToDisk = (zipFolderPath, content, zipName) => {
      if (!isNodeProcess()) {
        throw new Error("ZipPublisher: writeZipToDisk is only available in NodeJS");
      }
      const fs3 = require("fs");
      const path2 = require("path");
      if (!fs3.existsSync(zipFolderPath)) {
        fs3.mkdirSync(zipFolderPath, { recursive: true });
      }
      const zipPath = path2.join(zipFolderPath, `${zipName}.zip`);
      const writeStream = fs3.createWriteStream(zipPath);
      writeStream.write(content);
      writeStream.end();
    };
    var generateProjectZip = async (project) => {
      let zip = new import_jszip.default();
      zip = writeFolderToZip(project, zip, true);
      const zipType = isNodeProcess() ? "nodebuffer" : "blob";
      return zip.generateAsync({ type: zipType });
    };
    var writeFolderToZip = (folder, parentFolder, ignoreFolder = false) => {
      const zipFolder = ignoreFolder ? parentFolder : parentFolder.folder(folder.name);
      if (zipFolder !== null) {
        folder.files.forEach((file2) => {
          const options = {};
          const fileName = file2.ext ? `${file2.name}.${file2.ext}` : file2.name;
          zipFolder.file(fileName, file2.content, options);
        });
        folder.dirs.forEach((subFolder) => {
          writeFolderToZip(subFolder, zipFolder);
        });
      }
      return parentFolder;
    };
    var import_file_saver = require("file-saver");
    var createZipPublisher = (params = {}) => {
      let { project, outputPath } = params;
      const getProject = () => project;
      const setProject = (projectToSet) => {
        project = projectToSet;
      };
      const getOutputPath = () => outputPath;
      const setOutputPath = (path2) => {
        outputPath = path2;
      };
      const publish = async (options = {}) => {
        const projectToPublish = options.project || project;
        if (!projectToPublish) {
          throw new PublisherError("MissingProject");
        }
        const zipName = options.projectSlug || params.projectSlug || projectToPublish.name;
        try {
          const zipContent = await generateProjectZip(projectToPublish);
          if (isNodeProcess()) {
            const projectOutputPath = options.outputPath || outputPath;
            if (projectOutputPath) {
              await writeZipToDisk(projectOutputPath, zipContent, zipName);
            }
          } else {
            (0, import_file_saver.saveAs)(zipContent, `${zipName}.zip`);
          }
          return { success: true, payload: zipContent };
        } catch (error) {
          throw new PublisherError(getErrorMessage2(error) || "UnknownError");
        }
      };
      return {
        publish,
        getProject,
        setProject,
        getOutputPath,
        setOutputPath
      };
    };
    var import_lodash2 = require("lodash");
    var DEP_MAIN_BLOCKLIST = ["lib", "lib/index", "es", "es/index", "main"];
    var DEFAULT_EXPORT_NAME = "__default__";
    function groupDepsByPack(deps) {
      const depMap = {};
      const addDep = (pkg, dep) => {
        if (!depMap[pkg]) {
          depMap[pkg] = [];
        }
        depMap[pkg].push(dep);
      };
      deps.forEach((dep) => {
        if (dep.dependencyType === "Internal") {
          addDep(`${dep.moduleName}${dep.main ? `/${dep.main}` : ""}`, dep);
        } else {
          let depMain = "";
          if (dep.main && DEP_MAIN_BLOCKLIST.indexOf(dep.main) < 0) {
            depMain = dep.main;
          }
          if (depMain.substring(0, 1) === "/") {
            depMain = depMain.substring(1);
          }
          addDep(`${dep.package}${depMain ? `/${depMain}` : ""}`, dep);
        }
      });
      return depMap;
    }
    function getDependencyIdentifier(info) {
      return info.aliasName || info.exportName;
    }
    function getExportNameOfDep(dep) {
      if (dep.destructuring) {
        return dep.exportName || dep.componentName || throwNewError("destructuring dependency must have exportName or componentName");
      }
      if (!dep.subName) {
        return dep.componentName || dep.exportName || throwNewError("dependency item must have componentName or exportName");
      }
      return dep.exportName || `__$${(0, import_lodash2.camelCase)(
        (0, import_lodash2.get)(dep, "moduleName") || (0, import_lodash2.get)(dep, "package") || throwNewError("dep.moduleName or dep.package is undefined")
      )}_default`;
    }
    function throwNewError(msg) {
      throw new Error(msg);
    }
    function buildPackageImport(pkg, deps, targetFileType, useAliasName) {
      if (!pkg || pkg === "undefined" || pkg === "null") {
        return [];
      }
      const chunks = [];
      const exportItems = {};
      const defaultExportNames = [];
      const depsInfo = deps.map((dep) => {
        const info = {
          exportName: getExportNameOfDep(dep),
          isDefault: !dep.destructuring,
          subName: dep.subName || void 0,
          nodeIdentifier: dep.componentName || void 0,
          source: dep
        };
        if (info.isDefault) {
          if (defaultExportNames.indexOf(info.exportName) < 0) {
            defaultExportNames.push(info.exportName);
          }
        }
        if (!info.subName) {
          if (info.nodeIdentifier === info.exportName) {
            info.nodeIdentifier = void 0;
          }
          if (info.isDefault) {
            info.aliasName = info.nodeIdentifier || info.exportName;
            info.exportName = DEFAULT_EXPORT_NAME;
          }
          if (info.nodeIdentifier) {
            info.aliasName = info.nodeIdentifier;
            info.nodeIdentifier = void 0;
          }
        } else {
          if (info.isDefault) {
            info.aliasName = info.exportName;
            info.exportName = DEFAULT_EXPORT_NAME;
          }
          if (info.nodeIdentifier === `${info.exportName}.${info.subName}`) {
            info.nodeIdentifier = void 0;
          }
        }
        return info;
      });
      depsInfo.forEach((info) => {
        if (!exportItems[info.exportName]) {
          exportItems[info.exportName] = {
            exportName: info.exportName,
            isDefault: info.isDefault,
            aliasNames: [],
            needOriginExport: false
          };
        }
        if (!info.nodeIdentifier && !info.aliasName) {
          exportItems[info.exportName].needOriginExport = true;
        }
      });
      depsInfo.forEach((info) => {
        if (info.aliasName) {
          const { aliasNames } = exportItems[info.exportName];
          if (aliasNames.indexOf(info.aliasName) < 0) {
            aliasNames.push(info.aliasName);
          }
        }
      });
      depsInfo.forEach((info) => {
        if (info.nodeIdentifier) {
          const exportItem = exportItems[info.exportName];
          if (!exportItem.needOriginExport && exportItem.aliasNames.length > 0) {
            info.aliasName = exportItem.aliasNames[0];
          }
        }
      });
      const nodeIdentifiers = depsInfo.map((info) => info.nodeIdentifier).filter(Boolean);
      const conflictInfos = (0, import_lodash2.flatMap)(Object.keys(exportItems), (exportName) => {
        const exportItem = exportItems[exportName];
        const usedNames = [
          ...exportItem.aliasNames,
          ...exportItem.needOriginExport || exportItem.aliasNames.length <= 0 ? [exportName] : []
        ];
        const conflictNames = usedNames.filter((n) => nodeIdentifiers.indexOf(n) >= 0);
        if (conflictNames.length > 0) {
          return [
            ...conflictNames.indexOf(exportName) >= 0 ? [[exportName, true, exportItem]] : [],
            ...conflictNames.filter((n) => n !== exportName).map((n) => [n, false, exportItem])
          ];
        }
        return [];
      });
      const conflictExports = conflictInfos.filter((c) => c[1]).map((c) => c[0]);
      const conflictAlias = conflictInfos.filter((c) => !c[1]).map((c) => c[0]);
      const solutions = {};
      depsInfo.forEach((info) => {
        if (info.aliasName && conflictAlias.indexOf(info.aliasName) >= 0) {
          let solution = solutions[info.aliasName];
          if (!solution) {
            solution = `${info.aliasName}Alias`;
            const conflictItem = (conflictInfos.find((c) => c[0] === info.aliasName) || [])[2];
            conflictItem.aliasNames = conflictItem.aliasNames.filter((a) => a !== info.aliasName);
            conflictItem.aliasNames.push(solution);
            solutions[info.aliasName] = solution;
          }
          info.aliasName = solution;
        }
        if (conflictExports.indexOf(info.exportName) >= 0) {
          let solution = solutions[info.exportName];
          if (!solution) {
            solution = `${info.exportName}Export`;
            const conflictItem = (conflictInfos.find((c) => c[0] === info.exportName) || [])[2];
            conflictItem.aliasNames.push(solution);
            conflictItem.needOriginExport = false;
            solutions[info.exportName] = solution;
          }
          info.aliasName = solution;
        }
      });
      depsInfo.forEach((info) => {
        const name = info.aliasName || info.exportName;
        if (!isValidIdentifier2(name)) {
          throw new CodeGeneratorError6(`Invalid Identifier [${name}]`);
        }
        if (info.nodeIdentifier && !isValidIdentifier2(info.nodeIdentifier)) {
          throw new CodeGeneratorError6(`Invalid Identifier [${info.nodeIdentifier}]`);
        }
      });
      const aliasDefineStatements = {};
      if (useAliasName) {
        Object.keys(exportItems).forEach((exportName) => {
          var _a;
          const aliasList = ((_a = exportItems[exportName]) == null ? void 0 : _a.aliasNames) || [];
          if (aliasList.length > 0) {
            const srcName = exportItems[exportName].needOriginExport ? exportName : aliasList[0];
            const aliasNameList = exportItems[exportName].needOriginExport ? aliasList : aliasList.slice(1);
            aliasNameList.forEach((a) => {
              if (!aliasDefineStatements[a]) {
                aliasDefineStatements[a] = `const ${a} = ${srcName};`;
              }
            });
          }
        });
      }
      function getDefaultExportName(info) {
        if (info.isDefault) {
          return defaultExportNames[0];
        }
        return info.exportName;
      }
      depsInfo.forEach((info) => {
        if (info.nodeIdentifier) {
          const ownerName = getDependencyIdentifier(info);
          chunks.push({
            type: "string",
            fileType: targetFileType,
            name: COMMON_CHUNK_NAME2.ImportAliasDefine,
            content: useAliasName ? `const ${info.nodeIdentifier} = ${ownerName}.${info.subName};` : "",
            linkAfter: [COMMON_CHUNK_NAME2.ExternalDepsImport, COMMON_CHUNK_NAME2.InternalDepsImport],
            ext: {
              originalName: `${getDefaultExportName(info)}.${info.subName}`,
              aliasName: info.nodeIdentifier,
              dependency: info.source
            }
          });
        } else if (info.aliasName) {
          if (info.isDefault && defaultExportNames.find((n) => n === info.aliasName)) {
            delete aliasDefineStatements[info.aliasName];
            return;
          }
          let contentStatement = "";
          if (aliasDefineStatements[info.aliasName]) {
            contentStatement = aliasDefineStatements[info.aliasName];
            delete aliasDefineStatements[info.aliasName];
          }
          chunks.push({
            type: "string",
            fileType: targetFileType,
            name: COMMON_CHUNK_NAME2.ImportAliasDefine,
            content: contentStatement,
            linkAfter: [COMMON_CHUNK_NAME2.ExternalDepsImport, COMMON_CHUNK_NAME2.InternalDepsImport],
            ext: {
              originalName: getDefaultExportName(info),
              aliasName: info.aliasName,
              dependency: info.source
            }
          });
        }
      });
      Object.keys(aliasDefineStatements).forEach((a) => {
        chunks.push({
          type: "string",
          fileType: targetFileType,
          name: COMMON_CHUNK_NAME2.ImportAliasDefine,
          content: aliasDefineStatements[a],
          linkAfter: [COMMON_CHUNK_NAME2.ExternalDepsImport, COMMON_CHUNK_NAME2.InternalDepsImport]
        });
      });
      const exportItemList = Object.keys(exportItems).map((k) => exportItems[k]);
      const defaultExport = exportItemList.filter((item) => item.isDefault);
      const otherExports = exportItemList.filter((item) => !item.isDefault);
      const statementL = ["import"];
      if (defaultExport.length > 0) {
        if (useAliasName) {
          statementL.push(defaultExportNames[0]);
        } else {
          statementL.push(defaultExport[0].aliasNames[0]);
        }
        if (otherExports.length > 0) {
          statementL.push(", ");
        }
      }
      if (otherExports.length > 0) {
        const items = otherExports.map((item) => {
          return !useAliasName || item.needOriginExport || item.aliasNames.length <= 0 ? item.exportName : `${item.exportName} as ${item.aliasNames[0]}`;
        });
        statementL.push(`{ ${items.join(", ")} }`);
      }
      statementL.push("from");
      const getInternalDependencyModuleId = () => `@/${deps[0].type}/${pkg}`;
      if (deps[0].dependencyType === "Internal") {
        statementL.push(`'${getInternalDependencyModuleId()}';`);
        chunks.push({
          type: "string",
          fileType: targetFileType,
          name: COMMON_CHUNK_NAME2.InternalDepsImport,
          content: statementL.join(" "),
          linkAfter: [COMMON_CHUNK_NAME2.ExternalDepsImport]
        });
      } else {
        statementL.push(`'${pkg}';`);
        chunks.push({
          type: "string",
          fileType: targetFileType,
          name: COMMON_CHUNK_NAME2.ExternalDepsImport,
          content: statementL.join(" "),
          linkAfter: []
        });
      }
      if (defaultExportNames.length > 1) {
        if (deps[0].dependencyType === "Internal") {
          defaultExportNames.slice(1).forEach((exportName) => {
            chunks.push({
              type: "string",
              fileType: targetFileType,
              name: COMMON_CHUNK_NAME2.InternalDepsImport,
              content: `import ${exportName} from '${getInternalDependencyModuleId()}';`,
              linkAfter: [COMMON_CHUNK_NAME2.ExternalDepsImport]
            });
          });
        } else {
          defaultExportNames.slice(1).forEach((exportName) => {
            chunks.push({
              type: "string",
              fileType: targetFileType,
              name: COMMON_CHUNK_NAME2.ExternalDepsImport,
              content: `import ${exportName} from '${pkg}';`,
              linkAfter: []
            });
            chunks.push({
              type: "string",
              fileType: targetFileType,
              name: COMMON_CHUNK_NAME2.ImportAliasDefine,
              content: "",
              linkAfter: [],
              ext: {
                aliasName: exportName,
                originalName: exportName,
                dependency: {
                  package: pkg,
                  componentName: exportName
                }
              }
            });
          });
        }
      }
      return chunks;
    }
    var pluginFactory10 = (config) => {
      const cfg = {
        fileType: "js",
        useAliasName: true,
        ...config || {}
      };
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        if (ir && ir.deps && ir.deps.length > 0) {
          const deps = cfg.filter ? cfg.filter(ir.deps) : ir.deps;
          const packs = groupDepsByPack(deps);
          Object.keys(packs).forEach((pkg) => {
            const chunks = buildPackageImport(pkg, packs[pkg], cfg.fileType, cfg.useAliasName);
            next.chunks.push(...chunks);
          });
        }
        return next;
      };
      return plugin;
    };
    var esmodule_default = pluginFactory10;
    var import_change_case32 = __toESM2(require("change-case"));
    var pluginFactory22 = () => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        const { chunks } = next;
        if (ir && ir.deps && ir.deps.length > 0) {
          let lowcodeMaterialsStyleAdded = false;
          let fusionUIStyleAdded = false;
          let nextStyleAddedMap = {};
          ir.deps.forEach((dep) => {
            if (dep.package === "@alifd/next" && !nextStyleAddedMap[dep.exportName]) {
              chunks.push({
                type: "string",
                fileType: "jsx",
                name: COMMON_CHUNK_NAME2.InternalDepsImport,
                content: `import '@alifd/next/lib/${import_change_case32.default.paramCase(dep.exportName)}/style';`,
                linkAfter: [COMMON_CHUNK_NAME2.ExternalDepsImport]
              });
              nextStyleAddedMap[dep.exportName] = true;
            } else if (dep.package === "@alilc/lowcode-materials" && !lowcodeMaterialsStyleAdded) {
              chunks.push({
                type: "string",
                fileType: "jsx",
                name: COMMON_CHUNK_NAME2.InternalDepsImport,
                content: "import '@alilc/lowcode-materials/lib/style';",
                linkAfter: [COMMON_CHUNK_NAME2.ExternalDepsImport]
              });
              lowcodeMaterialsStyleAdded = true;
            } else if (dep.package === "@alifd/fusion-ui" && !fusionUIStyleAdded) {
              chunks.push({
                type: "string",
                fileType: "jsx",
                name: COMMON_CHUNK_NAME2.InternalDepsImport,
                content: "import '@alifd/fusion-ui/lib/style';",
                linkAfter: [COMMON_CHUNK_NAME2.ExternalDepsImport]
              });
              fusionUIStyleAdded = true;
            }
          });
        }
        return next;
      };
      return plugin;
    };
    var styleImport_default = pluginFactory22;
    var import_change_case42 = __toESM2(require("change-case"));
    var REACT_CHUNK_NAME = {
      ClassRenderStart: "ReactComponentClassRenderStart",
      ClassRenderPre: "ReactComponentClassRenderPre",
      ClassRenderEnd: "ReactComponentClassRenderEnd",
      ClassRenderJSX: "ReactComponentClassRenderJSX",
      ClassDidMountStart: "ReactComponentClassDidMountStart",
      ClassDidMountEnd: "ReactComponentClassDidMountEnd",
      ClassDidMountContent: "ReactComponentClassDidMountContent"
    };
    var pluginFactory32 = () => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        const componentClassName = ensureValidClassName3(
          `${import_change_case42.default.pascalCase(ir.moduleName)}$$${ir.containerType}`
        );
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: CLASS_DEFINE_CHUNK_NAME2.Start,
          content: `class ${componentClassName} extends React.Component {`,
          linkAfter: [
            COMMON_CHUNK_NAME2.ExternalDepsImport,
            COMMON_CHUNK_NAME2.InternalDepsImport,
            COMMON_CHUNK_NAME2.ImportAliasDefine,
            COMMON_CHUNK_NAME2.FileVarDefine,
            COMMON_CHUNK_NAME2.FileUtilDefine
          ]
        });
        if (ir.containerType === "Component") {
          next.chunks.push({
            type: "string",
            fileType: "jsx",
            name: CLASS_DEFINE_CHUNK_NAME2.InsVar,
            content: `static displayName = '${ir.moduleName}';`,
            linkAfter: [
              CLASS_DEFINE_CHUNK_NAME2.Start
            ]
          });
        }
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: CLASS_DEFINE_CHUNK_NAME2.End,
          content: "}",
          linkAfter: [
            ...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.End],
            REACT_CHUNK_NAME.ClassRenderEnd,
            REACT_CHUNK_NAME.ClassDidMountEnd
          ]
        });
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: CLASS_DEFINE_CHUNK_NAME2.ConstructorStart,
          content: "constructor(props, context) { super(props); ",
          linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.ConstructorStart]]
        });
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: CLASS_DEFINE_CHUNK_NAME2.ConstructorEnd,
          content: "}",
          linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.ConstructorEnd]]
        });
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: REACT_CHUNK_NAME.ClassDidMountStart,
          content: "componentDidMount() {",
          linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.End]]
        });
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: REACT_CHUNK_NAME.ClassDidMountEnd,
          content: "}",
          linkAfter: [REACT_CHUNK_NAME.ClassDidMountContent, REACT_CHUNK_NAME.ClassDidMountStart]
        });
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: REACT_CHUNK_NAME.ClassRenderStart,
          content: "render() {",
          linkAfter: [
            ...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.End],
            REACT_CHUNK_NAME.ClassDidMountEnd
          ]
        });
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: REACT_CHUNK_NAME.ClassRenderEnd,
          content: "}",
          linkAfter: [
            REACT_CHUNK_NAME.ClassRenderStart,
            REACT_CHUNK_NAME.ClassRenderPre,
            REACT_CHUNK_NAME.ClassRenderJSX
          ]
        });
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: COMMON_CHUNK_NAME2.FileExport,
          content: `export default ${componentClassName};`,
          linkAfter: [
            COMMON_CHUNK_NAME2.ExternalDepsImport,
            COMMON_CHUNK_NAME2.InternalDepsImport,
            COMMON_CHUNK_NAME2.ImportAliasDefine,
            COMMON_CHUNK_NAME2.FileVarDefine,
            COMMON_CHUNK_NAME2.FileUtilDefine,
            CLASS_DEFINE_CHUNK_NAME2.End
          ]
        });
        return next;
      };
      return plugin;
    };
    var containerClass_default = pluginFactory32;
    var compositeType_exports = {};
    __export2(compositeType_exports, {
      generateCompositeType: () => generateCompositeType2
    });
    var import_lowcode_types4 = require("@alilc/lowcode-types");
    var import_lodash22 = __toESM2(require("lodash"));
    var jsExpression_exports = {};
    __export2(jsExpression_exports, {
      generateExpression: () => generateExpression,
      generateFunction: () => generateFunction,
      isBroadJSFunction: () => isBroadJSFunction
    });
    var parser2 = __toESM2(require("@babel/parser"));
    var import_generator72 = __toESM2(require("@babel/generator"));
    var import_traverse2 = __toESM2(require("@babel/traverse"));
    var t2 = __toESM2(require("@babel/types"));
    var import_lowcode_types22 = require("@alilc/lowcode-types");
    var expressionParser_exports = {};
    __export2(expressionParser_exports, {
      ParseError: () => ParseError,
      parseExpression: () => parseExpression2,
      parseExpressionConvertThis2Context: () => parseExpressionConvertThis2Context,
      parseExpressionGetGlobalVariables: () => parseExpressionGetGlobalVariables,
      parseExpressionGetKeywords: () => parseExpressionGetKeywords,
      transformExpressionLocalRef: () => transformExpressionLocalRef
    });
    var parser = __toESM2(require("@babel/parser"));
    var import_generator62 = __toESM2(require("@babel/generator"));
    var import_traverse = __toESM2(require("@babel/traverse"));
    var t = __toESM2(require("@babel/types"));
    var import_types10 = require("@babel/types");
    var OrderedSet = class {
      constructor(items) {
        __publicField2(this, "_set", /* @__PURE__ */ new Set());
        __publicField2(this, "_arr", []);
        if (items) {
          this._set = new Set(items);
          this._arr = items.slice(0);
        }
      }
      add(item) {
        if (!this._set.has(item)) {
          this._set.add(item);
          this._arr.push(item);
        }
      }
      delete(item) {
        if (this._set.has(item)) {
          this._set.delete(item);
          this._arr.splice(this._arr.indexOf(item), 1);
        }
      }
      has(item) {
        return this._set.has(item);
      }
      toArray() {
        return this._arr.slice(0);
      }
    };
    var ParseError = class extends Error {
      constructor(expr, detail) {
        super(`Failed to parse expression "${typeof expr === "string" ? expr : (0, import_generator62.default)(expr)}"`);
        __publicField2(this, "expr");
        __publicField2(this, "detail");
        this.expr = expr;
        this.detail = detail;
        Object.setPrototypeOf(this, new.target.prototype);
      }
    };
    var MAYBE_EXPRESSIONS = {
      ArrayExpression: { fields: ["elements"] },
      AssignmentExpression: { fields: ["left", "right"] },
      BinaryExpression: { fields: ["left", "right"] },
      CallExpression: { fields: ["arguments", "callee"] },
      ConditionalExpression: { fields: ["test", "consequent", "alternate"] },
      DoWhileStatement: { fields: ["test"] },
      ExpressionStatement: { fields: ["expression"] },
      ForInStatement: { fields: ["right"] },
      ForStatement: { fields: ["init", "test", "update"] },
      IfStatement: { fields: ["test"] },
      LogicalExpression: { fields: ["left", "right"] },
      MemberExpression: {
        fields: (node) => {
          return node.type === "MemberExpression" && node.computed ? ["object", "property"] : ["object"];
        }
      },
      NewExpression: { fields: ["callee", "arguments"] },
      ObjectMethod: {
        fields: (node) => {
          return node.type === "ObjectMethod" && node.computed ? ["key"] : [];
        }
      },
      ObjectProperty: {
        fields: (node) => {
          return node.type === "ObjectProperty" && node.computed ? ["key", "value"] : ["value"];
        }
      },
      ReturnStatement: { fields: ["argument"] },
      SequenceExpression: { fields: ["expressions"] },
      ParenthesizedExpression: { fields: ["expression"] },
      SwitchCase: { fields: ["test"] },
      SwitchStatement: { fields: ["discriminant"] },
      ThrowStatement: { fields: ["argument"] },
      UnaryExpression: { fields: ["argument"] },
      UpdateExpression: { fields: ["argument"] },
      VariableDeclarator: { fields: ["init"] },
      WhileStatement: { fields: ["test"] },
      WithStatement: { fields: ["object"] },
      AssignmentPattern: { fields: ["right"] },
      ArrowFunctionExpression: { fields: ["body"] },
      ClassExpression: { fields: ["superClass"] },
      ClassDeclaration: { fields: ["superClass"] },
      ExportDefaultDeclaration: { fields: ["declaration"] },
      ForOfStatement: { fields: ["right"] },
      ClassMethod: {
        fields: (node) => {
          return node.type === "ClassMethod" && node.computed ? ["key"] : [];
        }
      },
      SpreadElement: { fields: ["argument"] },
      TaggedTemplateExpression: { fields: ["tag"] },
      TemplateLiteral: { fields: ["expressions"] },
      YieldExpression: { fields: ["argument"] },
      AwaitExpression: { fields: ["argument"] },
      OptionalMemberExpression: {
        fields: (node) => {
          return node.type === "OptionalMemberExpression" && node.computed ? ["object", "property"] : ["object"];
        }
      },
      OptionalCallExpression: { fields: ["callee", "arguments"] },
      JSXSpreadAttribute: { fields: ["argument"] },
      BindExpression: { fields: ["object", "callee"] },
      ClassProperty: {
        fields: (node) => {
          return node.type === "ClassProperty" && node.computed ? ["key", "value"] : ["value"];
        }
      },
      PipelineTopicExpression: { fields: ["expression"] },
      PipelineBareFunction: { fields: ["callee"] },
      ClassPrivateProperty: { fields: ["value"] },
      Decorator: { fields: ["expression"] },
      TupleExpression: { fields: ["elements"] },
      TSDeclareMethod: {
        fields: (node) => {
          return node.type === "TSDeclareMethod" && node.computed ? ["key"] : [];
        }
      },
      TSPropertySignature: {
        fields: (node) => {
          return node.type === "TSPropertySignature" && node.computed ? ["key", "initializer"] : ["initializer"];
        }
      },
      TSMethodSignature: {
        fields: (node) => {
          return node.type === "TSMethodSignature" && node.computed ? ["key"] : [];
        }
      },
      TSAsExpression: { fields: ["expression"] },
      TSTypeAssertion: { fields: ["expression"] },
      TSEnumDeclaration: { fields: ["initializer"] },
      TSEnumMember: { fields: ["initializer"] },
      TSNonNullExpression: { fields: ["expression"] },
      TSExportAssignment: { fields: ["expression"] }
    };
    var CROSS_THIS_SCOPE_TYPE_NODE = {
      ArrowFunctionExpression: false,
      FunctionExpression: true,
      FunctionDeclaration: true,
      ClassDeclaration: true,
      ClassExpression: true,
      ClassBody: true,
      ClassImplements: true,
      ClassMethod: true,
      ClassPrivateMethod: true,
      ClassProperty: true,
      ClassPrivateProperty: true,
      DeclareClass: true
    };
    var JS_KEYWORDS = ["arguments", "this", "super"];
    function parseExpressionGetKeywords(expr) {
      if (!expr) {
        return [];
      }
      try {
        const keywordVars = new OrderedSet();
        const ast = parser.parse(`!(${expr});`, {
          plugins: [
            "jsx"
          ]
        });
        const addIdentifierIfNeeded = (x) => {
          if (typeof x === "object" && (0, import_types10.isIdentifier)(x) && JS_KEYWORDS.includes(x.name)) {
            keywordVars.add(x.name);
          }
        };
        (0, import_traverse.default)(ast, {
          enter(path2) {
            var _a;
            const { node } = path2;
            const expressionFields = (_a = MAYBE_EXPRESSIONS[node.type]) == null ? void 0 : _a.fields;
            if (expressionFields) {
              (typeof expressionFields === "function" ? expressionFields(node) : expressionFields).forEach((fieldName) => {
                const fieldValue = node[fieldName];
                if (typeof fieldValue === "object") {
                  if (Array.isArray(fieldValue)) {
                    fieldValue.forEach((item) => {
                      addIdentifierIfNeeded(item);
                    });
                  } else {
                    addIdentifierIfNeeded(fieldValue);
                  }
                }
              });
            }
          }
        });
        return keywordVars.toArray().filter(Boolean);
      } catch (e) {
        throw new ParseError(expr, e);
      }
    }
    function parseExpressionGetGlobalVariables(expr, { filter = () => true } = {}) {
      if (!expr) {
        return [];
      }
      try {
        const undeclaredVars = new OrderedSet();
        const ast = parser.parse(`!(${expr});`);
        const addUndeclaredIdentifierIfNeeded = (x, path2) => {
          if (typeof x === "object" && (0, import_types10.isIdentifier)(x) && !path2.scope.hasBinding(x.name)) {
            undeclaredVars.add(x.name);
          }
        };
        (0, import_traverse.default)(ast, {
          enter(path2) {
            var _a;
            const { node } = path2;
            const expressionFields = (_a = MAYBE_EXPRESSIONS[node.type]) == null ? void 0 : _a.fields;
            if (expressionFields) {
              (typeof expressionFields === "function" ? expressionFields(node) : expressionFields).forEach((fieldName) => {
                const fieldValue = node[fieldName];
                if (typeof fieldValue === "object") {
                  if (Array.isArray(fieldValue)) {
                    fieldValue.forEach((item) => {
                      addUndeclaredIdentifierIfNeeded(item, path2);
                    });
                  } else {
                    addUndeclaredIdentifierIfNeeded(fieldValue, path2);
                  }
                }
              });
            }
          }
        });
        return undeclaredVars.toArray().filter(filter);
      } catch (e) {
        throw new ParseError(expr, e);
      }
    }
    function parseExpressionConvertThis2Context(expr, contextName = "__$$context", localVariables = []) {
      if (!expr) {
        return expr;
      }
      try {
        const exprAst = typeof expr === "string" ? parser.parseExpression(expr) : expr;
        const exprWrapAst = t.expressionStatement(exprAst);
        const fileAst = t.file(t.program([exprWrapAst]));
        const localVariablesSet = new Set(localVariables);
        let thisScopeLevel = CROSS_THIS_SCOPE_TYPE_NODE[exprAst.type] ? -1 : 0;
        (0, import_traverse.default)(fileAst, {
          enter(path2) {
            if (CROSS_THIS_SCOPE_TYPE_NODE[path2.node.type]) {
              thisScopeLevel++;
            }
          },
          exit(path2) {
            if (CROSS_THIS_SCOPE_TYPE_NODE[path2.node.type]) {
              thisScopeLevel--;
            }
          },
          MemberExpression(path2) {
            if (!path2.isMemberExpression()) {
              return;
            }
            const obj = path2.get("object");
            if (!obj.isThisExpression()) {
              return;
            }
            if (!path2.node.computed) {
              const prop = path2.get("property");
              if (prop.isIdentifier() && localVariablesSet.has(prop.node.name)) {
                path2.replaceWith(t.identifier(prop.node.name));
                return;
              }
            }
            if (thisScopeLevel <= 0) {
              obj.replaceWith(t.identifier(contextName));
            }
          },
          ThisExpression(path2) {
            if (!path2.isThisExpression()) {
              return;
            }
            if (path2.parent.type === "MemberExpression") {
              return;
            }
            if (thisScopeLevel <= 0) {
              path2.replaceWith(t.identifier(contextName));
            }
          }
        });
        const { code } = (0, import_generator62.default)(exprWrapAst.expression, { sourceMaps: false });
        return code;
      } catch (e) {
        throw new ParseError(expr, e);
      }
    }
    function parseExpression2(expr) {
      try {
        return parser.parseExpression(expr);
      } catch (e) {
        throw new ParseError(expr, e);
      }
    }
    function transformExpressionLocalRef(expr, scope) {
      if (!expr) {
        return expr;
      }
      if (!scope) {
        throw new Error("transform expression without scope");
      }
      try {
        const exprAst = typeof expr === "string" ? parser.parseExpression(expr) : expr;
        const exprWrapAst = t.expressionStatement(exprAst);
        const fileAst = t.file(t.program([exprWrapAst]));
        (0, import_traverse.default)(fileAst, {
          MemberExpression(path2) {
            if (!path2.isMemberExpression()) {
              return;
            }
            const obj = path2.get("object");
            if (!obj.isThisExpression()) {
              return;
            }
            const prop = path2.get("property");
            let memberName = "";
            if (!path2.node.computed && prop.isIdentifier()) {
              memberName = prop.node.name;
            } else if (path2.node.computed && prop.isStringLiteral()) {
              memberName = prop.node.value;
            }
            if (memberName && scope.bindings && scope.bindings.hasBinding(memberName)) {
              path2.replaceWith(t.identifier(memberName));
            }
          }
        });
        const { code } = (0, import_generator62.default)(exprWrapAst.expression, { sourceMaps: false });
        return code;
      } catch (e) {
        throw new ParseError(expr, e);
      }
    }
    function parseFunction(content) {
      try {
        const ast = parser2.parse(`(${content});`, {
          plugins: [
            "jsx"
          ]
        });
        let resultNode = null;
        (0, import_traverse2.default)(ast, {
          FunctionExpression(path2) {
            resultNode = path2.node;
            path2.stop();
          }
        });
        return resultNode;
      } catch (e) {
        throw new ParseError(content, e);
      }
    }
    function transformFuncExpr2MethodMember(methodName, content) {
      const funcNode = parseFunction(content);
      if (funcNode) {
        const targetNode = t2.classMethod(
          "method",
          methodName && t2.identifier(methodName) || funcNode.id || t2.identifier("notDefineName"),
          funcNode.params,
          funcNode.body,
          void 0,
          void 0,
          void 0,
          funcNode.async || void 0
        );
        const { code: resultCode } = (0, import_generator72.default)(targetNode, { sourceMaps: false });
        return resultCode;
      }
      throw new Error("Can not find Function Statement");
    }
    function getArrowFunction(content) {
      const funcNode = parseFunction(content);
      if (funcNode) {
        const targetNode = t2.arrowFunctionExpression(
          funcNode.params,
          funcNode.body,
          funcNode.async || void 0
        );
        const { code: resultCode } = (0, import_generator72.default)(targetNode, { sourceMaps: false });
        return resultCode;
      }
      throw new Error("Can not find Function Statement");
    }
    function getBodyStatements(content) {
      const funcNode = parseFunction(content);
      if (funcNode) {
        const statements = funcNode.body.body;
        const targetNode = t2.program(statements, void 0, "module", void 0);
        const { code: resultCode } = (0, import_generator72.default)(targetNode, { sourceMaps: false });
        return resultCode;
      }
      throw new Error("Can not find Function Statement");
    }
    function isBroadJSFunction(value) {
      return isJSExpressionFn(value) || (0, import_lowcode_types22.isJSFunction)(value);
    }
    function generateExpression(value, scope) {
      if ((0, import_lowcode_types22.isJSExpression)(value)) {
        const exprVal = value.value.trim();
        if (!exprVal) {
          return "null";
        }
        const afterProcessWithLocals = transformExpressionLocalRef(exprVal, scope);
        return afterProcessWithLocals;
      }
      throw new CodeGeneratorError6("Not a JSExpression");
    }
    function getFunctionSource(cfg) {
      return cfg.source || cfg.value || cfg.compiled;
    }
    function generateFunction(value, config = {
      name: void 0,
      isMember: false,
      isBlock: false,
      isArrow: false,
      isBindExpr: false
    }) {
      if (isBroadJSFunction(value)) {
        const functionCfg = value;
        const functionSource = getFunctionSource(functionCfg);
        if (config.isMember) {
          return transformFuncExpr2MethodMember(config.name || "", functionSource);
        }
        if (config.isBlock) {
          return getBodyStatements(functionSource);
        }
        if (config.isArrow) {
          return getArrowFunction(functionSource);
        }
        if (config.isBindExpr) {
          return `(${functionSource}).bind(this)`;
        }
        return functionSource;
      }
      if ((0, import_lowcode_types22.isJSExpression)(value)) {
        return value.value;
      }
      throw new CodeGeneratorError6("Not a JSFunction or JSExpression");
    }
    var jsSlot_exports = {};
    __export2(jsSlot_exports, {
      generateJsSlot: () => generateJsSlot
    });
    var import_lowcode_types3 = require("@alilc/lowcode-types");
    function unwrapJsExprQuoteInJsx2(jsxExpr) {
      if (jsxExpr.length >= 2 && jsxExpr[0] === "{" && jsxExpr[jsxExpr.length - 1] === "}") {
        return jsxExpr.slice(1, jsxExpr.length - 1);
      }
      return jsxExpr;
    }
    function generateSingleLineComment(commentText) {
      return `/* ${commentText.split("\n").join(" ").replace(/\*\//g, "*-/")}*/`;
    }
    function generateJsSlot(slot, scope, generator) {
      if ((0, import_lowcode_types3.isJSSlot)(slot)) {
        const { title, params, value } = slot;
        const slotScope = params ? scope.createSubScope(params || []) : scope;
        const contentExpr = !value ? "null" : generateNodeDataOrArrayForJsSlot(value, generator, slotScope);
        if (params) {
          return [
            title && generateSingleLineComment(title),
            "(",
            (params || []).join(", "),
            ") => ((__$$context) => (",
            contentExpr,
            "))(",
            `  __$$createChildContext(__$$context, { ${(params || []).join(", ")} }`,
            "))"
          ].filter(Boolean).join("");
        }
        return contentExpr || "[]";
      }
      throw new CodeGeneratorError6("Not a JSSlot");
    }
    function generateNodeDataOrArrayForJsSlot(value, generator, scope) {
      if (Array.isArray(value)) {
        if (value.length === 0) {
          return "[]";
        }
        if (value.length === 1) {
          return unwrapJsExprQuoteInJsx2(generator(value, scope)) || "null";
        }
        return `[
${value.map((v) => {
          if (typeof v === "string") {
            return JSON.stringify(v);
          }
          return unwrapJsExprQuoteInJsx2(generator(v, scope)) || "null";
        }).join(",\n") || "null"}
]`;
      }
      return unwrapJsExprQuoteInJsx2(generator(value, scope)) || "null";
    }
    function executeFunctionStack2(input, scope, funcs, baseFunc, config) {
      const funcList = [];
      if (Array.isArray(funcs)) {
        funcList.push(...funcs);
      } else {
        funcList.push(funcs);
      }
      let next = baseFunc;
      while (funcList.length > 0) {
        const func = funcList.pop();
        if (func) {
          const warppedFunc = ((nextFunc) => (i, s, cfg) => func(i, s, cfg, nextFunc))(next);
          next = warppedFunc;
        }
      }
      return next(input, scope, config);
    }
    function isVariable(v) {
      if (import_lodash22.default.isObject(v) && v.type === "variable") {
        return true;
      }
      return false;
    }
    function isDataSource(v) {
      return typeof v === "object" && v != null && v.type === "DataSource";
    }
    function generateArray(value, scope, options = {}) {
      const body = value.map((v) => generateUnknownType(v, scope, options)).join(",");
      return `[${body}]`;
    }
    function generateObject(value, scope, options = {}) {
      if (value.type === "i18n") {
        if (value.params && typeof value.params === "object") {
          return `this._i18nText(${generateUnknownType(import_lodash22.default.omit(value, "type"), scope, options)})`;
        }
        return `this._i18nText(${JSON.stringify(import_lodash22.default.omit(value, "type"))})`;
      }
      const body = Object.keys(value).map((key) => {
        const propName = JSON.stringify(key);
        const v = generateUnknownType(value[key], scope, options);
        return `${propName}: ${v}`;
      }).join(",\n");
      return `{${body}}`;
    }
    function generateString(value) {
      return JSON.stringify(value);
    }
    function generateNumber(value) {
      return String(value);
    }
    function generateBool(value) {
      return value ? "true" : "false";
    }
    function genFunction(value) {
      const globalVars = parseExpressionGetKeywords(value.value);
      if (globalVars.includes("arguments")) {
        return generateFunction(value, { isBindExpr: true });
      }
      return generateFunction(value, { isArrow: true });
    }
    function genJsSlot(value, scope, options = {}) {
      if (options.nodeGenerator) {
        return generateJsSlot(value, scope, options.nodeGenerator);
      }
      return "";
    }
    function generateUnknownType(value, scope, options = {}) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      if (import_lodash22.default.isUndefined(value)) {
        return "undefined";
      }
      if (import_lodash22.default.isNull(value)) {
        return "null";
      }
      if (import_lodash22.default.isArray(value)) {
        if ((_a = options.handlers) == null ? void 0 : _a.array) {
          return executeFunctionStack2(value, scope, options.handlers.array, generateArray, options);
        }
        return generateArray(value, scope, options);
      }
      if (isVariable(value)) {
        const transValue = {
          type: "JSExpression",
          value: value.variable
        };
        if ((_b = options.handlers) == null ? void 0 : _b.expression) {
          const expression = executeFunctionStack2(
            transValue,
            scope,
            options.handlers.expression,
            generateExpression,
            options
          );
          return expression || "undefined";
        }
        return generateExpression(transValue, scope);
      }
      if ((0, import_lowcode_types4.isJSExpression)(value)) {
        if ((_c = options.handlers) == null ? void 0 : _c.expression) {
          return executeFunctionStack2(
            value,
            scope,
            options.handlers.expression,
            generateExpression,
            options
          );
        }
        return generateExpression(value, scope);
      }
      if ((0, import_lowcode_types4.isJSFunction)(value) || isJSExpressionFn(value)) {
        if ((_d = options.handlers) == null ? void 0 : _d.function) {
          return executeFunctionStack2(value, scope, options.handlers.function, genFunction, options);
        }
        return genFunction(value);
      }
      if ((0, import_lowcode_types4.isJSSlot)(value)) {
        if ((_e = options.handlers) == null ? void 0 : _e.slot) {
          return executeFunctionStack2(value, scope, options.handlers.slot, genJsSlot, options);
        }
        return genJsSlot(value, scope, options);
      }
      if (isDataSource(value)) {
        return generateUnknownType(
          {
            type: "JSExpression",
            value: `this.dataSourceMap[${JSON.stringify(value.id)}]`
          },
          scope,
          options
        );
      }
      if (import_lodash22.default.isObject(value)) {
        if ((_f = options.handlers) == null ? void 0 : _f.object) {
          return executeFunctionStack2(value, scope, options.handlers.object, generateObject, options);
        }
        return generateObject(value, scope, options);
      }
      if (import_lodash22.default.isString(value)) {
        if ((_g = options.handlers) == null ? void 0 : _g.string) {
          return executeFunctionStack2(value, scope, options.handlers.string, generateString, options);
        }
        return generateString(value);
      }
      if (import_lodash22.default.isNumber(value)) {
        if ((_h = options.handlers) == null ? void 0 : _h.number) {
          return executeFunctionStack2(value, scope, options.handlers.number, generateNumber, options);
        }
        return generateNumber(value);
      }
      if (import_lodash22.default.isBoolean(value)) {
        if ((_i = options.handlers) == null ? void 0 : _i.boolean) {
          return executeFunctionStack2(value, scope, options.handlers.boolean, generateBool, options);
        }
        return generateBool(value);
      }
      throw new CodeGeneratorError6("Meet unknown composite value type");
    }
    function generateCompositeType2(value, scope, options = {}) {
      const result = generateUnknownType(value, scope, options);
      return result;
    }
    var Scope_exports = {};
    __export2(Scope_exports, {
      Scope: () => Scope2
    });
    var ScopeBindings = class {
      constructor(p = null) {
        __publicField2(this, "parent");
        __publicField2(this, "_bindings", new OrderedSet());
        this.parent = p;
      }
      hasBinding(varName) {
        var _a;
        return this._bindings.has(varName) || !!((_a = this.parent) == null ? void 0 : _a.hasBinding(varName));
      }
      hasOwnBinding(varName) {
        return this._bindings.has(varName);
      }
      addBinding(varName) {
        this._bindings.add(varName);
      }
      removeBinding(varName) {
        this._bindings.delete(varName);
      }
      getAllBindings() {
        const allBindings = new OrderedSet(this._bindings.toArray());
        for (let { parent } = this; parent; parent = parent == null ? void 0 : parent.parent) {
          parent.getAllOwnedBindings().forEach((varName) => {
            allBindings.add(varName);
          });
        }
        return allBindings.toArray();
      }
      getAllOwnedBindings() {
        return this._bindings.toArray();
      }
    };
    var Scope2 = class {
      constructor(parent = null) {
        this.parent = parent;
        __publicField2(this, "bindings");
        this.bindings = void 0;
      }
      static createRootScope() {
        return new Scope2();
      }
      createSubScope(ownIdentifiers) {
        const originalScopeBindings = this.bindings;
        const newScopeBindings = new ScopeBindings(originalScopeBindings);
        ownIdentifiers.forEach((identifier3) => {
          newScopeBindings.addBinding(identifier3);
        });
        const newScope = new Scope2(this);
        newScope.bindings = newScopeBindings;
        return newScope;
      }
    };
    var pluginFactory42 = (config) => {
      const cfg = {
        fileType: "jsx",
        implementType: "inConstructor",
        ...config
      };
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        const scope = Scope2.createRootScope();
        const state = ir.state || {};
        const fields = Object.keys(state).map((stateName) => {
          const value = generateCompositeType2(state[stateName], scope);
          return `${stateName}: ${value},`;
        });
        if (cfg.implementType === "inConstructor") {
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME2.ConstructorContent,
            content: `this.state = { ${fields.join("")} };`,
            linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.ConstructorContent]]
          });
        } else if (cfg.implementType === "insMember") {
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME2.InsVar,
            content: `state = { ${fields.join("")} };`,
            linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.InsVar]]
          });
        }
        return next;
      };
      return plugin;
    };
    var containerInitState_default = pluginFactory42;
    var pluginFactory52 = (config) => {
      const cfg = {
        fileType: "jsx",
        ...config
      };
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        const scope = Scope2.createRootScope();
        const { inStrictMode } = next.contextData;
        if (!inStrictMode) {
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME2.InsVar,
            content: `
          _context = this;
        `,
            linkAfter: [CLASS_DEFINE_CHUNK_NAME2.Start]
          });
        } else {
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME2.InsVar,
            content: `
          _context = this._createContext();
        `,
            linkAfter: [CLASS_DEFINE_CHUNK_NAME2.Start]
          });
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME2.InsPrivateMethod,
            content: `
          _createContext() {
            const self = this;
            const context = {
              get state() { return self.state; },
              setState(newState, callback) { self.setState(newState, callback); },
              get dataSourceMap() { return self._dataSourceEngine.dataSourceMap || {}; },
              async reloadDataSource() { await self._dataSourceEngine.reloadDataSource(); },
              get utils() { return self.utils; },
              get page() { return context; },
              get component() { return context; },
              get props() { return self.props; },
              get constants() { return self.constants; },
              get $() { return self.$ },
              get $$() { return self.$$ },
              ...this._methods,
            };
  
            return context;
          }
        `,
            linkAfter: DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.InsPrivateMethod]
          });
        }
        return next;
      };
      return plugin;
    };
    var containerInjectContext_default = pluginFactory52;
    var pathHelper_exports = {};
    __export2(pathHelper_exports, {
      getSlotRelativePath: () => getSlotRelativePath
    });
    function relativePath(from, to) {
      const length = Math.min(from.length, to.length);
      let samePartsLength = length;
      for (let i = 0; i < length; i++) {
        if (from[i] !== to[i]) {
          samePartsLength = i;
          break;
        }
      }
      if (samePartsLength === 0) {
        return to;
      }
      let outputParts = [];
      for (let i = samePartsLength; i < from.length; i++) {
        outputParts.push("..");
      }
      outputParts = [...outputParts, ...to.slice(samePartsLength)];
      if (outputParts[0] !== "..") {
        outputParts.unshift(".");
      }
      return outputParts;
    }
    function getSlotRelativePath(options) {
      var _a, _b, _c;
      const { contextData, from, to } = options;
      const isSingleComponent = (_b = (_a = contextData == null ? void 0 : contextData.extraContextData) == null ? void 0 : _a.projectRemark) == null ? void 0 : _b.isSingleComponent;
      const template = (_c = contextData == null ? void 0 : contextData.extraContextData) == null ? void 0 : _c.template;
      let toPath = template.slots[to].path;
      toPath = [...toPath, template.slots[to].fileName];
      let fromPath = template.slots[from].path;
      if (!isSingleComponent && ["components", "pages"].indexOf(from) !== -1) {
        fromPath = [...fromPath, "pageName"];
      }
      return relativePath(fromPath, toPath).join("/");
    }
    var pluginFactory62 = (config) => {
      const cfg = {
        fileType: "jsx",
        ...config
      };
      const plugin = async (pre) => {
        var _a;
        const next = {
          ...pre
        };
        const ir = next.ir;
        next.contextData.useRefApi = true;
        const useRef = !!((_a = ir.analyzeResult) == null ? void 0 : _a.isUsingRef);
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: COMMON_CHUNK_NAME2.InternalDepsImport,
          content: `
        import utils${useRef ? ", { RefsManager }" : ""} from '${getSlotRelativePath({ contextData: next.contextData, from: "components", to: "utils" })}';
      `,
          linkAfter: [COMMON_CHUNK_NAME2.ExternalDepsImport]
        });
        if (cfg.preferClassProperty) {
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME2.InsVar,
            content: "utils = utils;",
            linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.InsVar]]
          });
        } else {
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME2.ConstructorContent,
            content: "this.utils = utils;",
            linkAfter: [CLASS_DEFINE_CHUNK_NAME2.ConstructorStart]
          });
        }
        if (useRef) {
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME2.ConstructorContent,
            content: "this._refsManager = new RefsManager();",
            linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.ConstructorContent]]
          });
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME2.InsMethod,
            content: `
          $ = (refName) => {
            return this._refsManager.get(refName);
          }
        `,
            linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.InsMethod]]
          });
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME2.InsMethod,
            content: `
          $$ = (refName) => {
            return this._refsManager.getAll(refName);
          }
        `,
            linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.InsMethod]]
          });
        } else {
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME2.InsMethod,
            content: " $ = () => null; ",
            linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.InsMethod]]
          });
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME2.InsMethod,
            content: " $$ = () => [];        ",
            linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.InsMethod]]
          });
        }
        return next;
      };
      return plugin;
    };
    var containerInjectUtils_default = pluginFactory62;
    var import_lowcode_types5 = require("@alilc/lowcode-types");
    var import_change_case5 = __toESM2(require("change-case"));
    var pluginFactory72 = (config) => {
      const cfg = {
        ...config,
        fileType: (config == null ? void 0 : config.fileType) || "jsx"
      };
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const scope = Scope2.createRootScope();
        const dataSourceConfig = isValidContainerType2(pre.ir) ? pre.ir.dataSource : null;
        const dataSourceItems = dataSourceConfig && dataSourceConfig.list || [];
        const dataSourceEngineOptions = { runtimeConfig: true };
        if (dataSourceItems.length > 0) {
          const requestHandlersMap = {};
          dataSourceItems.forEach((ds) => {
            var _a, _b;
            const dsType = ds.type || "fetch";
            if (!(dsType in requestHandlersMap) && dsType !== "custom") {
              const handlerFactoryName = `__$$create${import_change_case5.default.pascal(dsType)}RequestHandler`;
              requestHandlersMap[dsType] = {
                type: "JSExpression",
                value: handlerFactoryName + (dsType === "urlParams" ? "(window.location.search)" : "()")
              };
              const handlerFactoryExportName = `create${import_change_case5.default.pascal(dsType)}Handler`;
              const handlerPkgName = ((_b = (_a = cfg.datasourceConfig) == null ? void 0 : _a.handlersPackages) == null ? void 0 : _b[dsType]) || `@alilc/lowcode-datasource-${import_change_case5.default.kebab(dsType)}-handler`;
              next.chunks.push({
                type: "string",
                fileType: "jsx",
                name: COMMON_CHUNK_NAME2.ExternalDepsImport,
                content: `
              import { ${handlerFactoryExportName} as ${handlerFactoryName} } from '${handlerPkgName}';
            `,
                linkAfter: []
              });
            }
          });
          Object.assign(dataSourceEngineOptions, { requestHandlersMap });
          next.chunks.push({
            type: "string",
            fileType: "jsx",
            name: COMMON_CHUNK_NAME2.ExternalDepsImport,
            content: `
          import { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';
        `,
            linkAfter: []
          });
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME2.InsVar,
            content: `
          _dataSourceConfig = this._defineDataSourceConfig();
          _dataSourceEngine = __$$createDataSourceEngine(
            this._dataSourceConfig,
            this,
            ${generateCompositeType2(dataSourceEngineOptions, scope)}
          );

          get dataSourceMap() {
            return this._dataSourceEngine.dataSourceMap || {};
          }

          reloadDataSource = async () => {
            await this._dataSourceEngine.reloadDataSource();
          }

          `,
            linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.InsVar]]
          });
          next.chunks.unshift({
            type: "string",
            fileType: cfg.fileType,
            name: REACT_CHUNK_NAME.ClassDidMountContent,
            content: `
          this._dataSourceEngine.reloadDataSource();
        `,
            linkAfter: [REACT_CHUNK_NAME.ClassDidMountStart]
          });
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME2.InsMethod,
            content: `
  _defineDataSourceConfig() {
    const _this = this;
    return (${generateCompositeType2(
              {
                ...dataSourceConfig,
                list: [
                  ...dataSourceItems.map((item) => ({
                    ...item,
                    isInit: wrapAsFunction(item.isInit, scope),
                    options: wrapAsFunction(item.options, scope)
                  }))
                ]
              },
              scope,
              {
                handlers: {
                  function: (jsFunc) => parseExpressionConvertThis2Context(jsFunc.value, "_this"),
                  expression: (jsExpr) => parseExpressionConvertThis2Context(jsExpr.value, "_this")
                }
              }
            )});
  }
        `,
            linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.InsMethod]]
          });
        }
        return next;
      };
      return plugin;
    };
    var containerInjectDataSourceEngine_default = pluginFactory72;
    function wrapAsFunction(value, scope) {
      if ((0, import_lowcode_types5.isJSExpression)(value) || (0, import_lowcode_types5.isJSFunction)(value) || isJSExpressionFn(value)) {
        return {
          type: "JSExpression",
          value: `function(){ return ((${value.value}))}.bind(this)`
        };
      }
      return {
        type: "JSExpression",
        value: `function(){return((${generateCompositeType2(value, scope)}))}.bind(this)`
      };
    }
    var pluginFactory82 = (config) => {
      const cfg = {
        fileType: "jsx",
        ...config
      };
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: COMMON_CHUNK_NAME2.InternalDepsImport,
          content: "import __$$constants from '../../constants';",
          linkAfter: [COMMON_CHUNK_NAME2.ExternalDepsImport]
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME2.InsVar,
          content: `
        get constants() {
          return __$$constants || {};
        }
        `,
          linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.InsVar]]
        });
        return next;
      };
      return plugin;
    };
    var containerInjectConstants_default = pluginFactory82;
    var pluginFactory92 = (config) => {
      const cfg = {
        fileType: "jsx",
        ...config
      };
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: COMMON_CHUNK_NAME2.InternalDepsImport,
          content: `
        import * as __$$i18n from '${getSlotRelativePath({ contextData: next.contextData, from: "components", to: "i18n" })}';
      `,
          linkAfter: [COMMON_CHUNK_NAME2.ExternalDepsImport]
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME2.ConstructorContent,
          content: `
        __$$i18n._inject2(this);
      `,
          linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.ConstructorContent]]
        });
        return next;
      };
      return plugin;
    };
    var containerInjectI18n_default = pluginFactory92;
    var import_lowcode_types6 = require("@alilc/lowcode-types");
    var pluginFactory102 = (config) => {
      const cfg = {
        fileType: "jsx",
        exportNameMapping: {},
        normalizeNameMapping: {},
        ...config
      };
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        if (ir.lifeCycles) {
          const { lifeCycles } = ir;
          const chunks = Object.keys(lifeCycles).map((lifeCycleName) => {
            var _a;
            if (!(0, import_lowcode_types6.isJSFunction)(lifeCycles[lifeCycleName]) && !isJSExpressionFn(lifeCycles[lifeCycleName]) && !(0, import_lowcode_types6.isJSExpression)(lifeCycles[lifeCycleName])) {
              return null;
            }
            let normalizeName;
            if (lifeCycleName === "constructor") {
              normalizeName = lifeCycleName;
            } else {
              normalizeName = cfg.normalizeNameMapping[lifeCycleName] || lifeCycleName;
            }
            if ((_a = cfg == null ? void 0 : cfg.exclude) == null ? void 0 : _a.includes(normalizeName)) {
              return null;
            }
            const exportName = cfg.exportNameMapping[lifeCycleName] || lifeCycleName;
            if (normalizeName === "constructor") {
              return {
                type: "string",
                fileType: cfg.fileType,
                name: CLASS_DEFINE_CHUNK_NAME2.ConstructorContent,
                content: generateFunction(lifeCycles[lifeCycleName], { isBlock: true }),
                linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.ConstructorStart]]
              };
            }
            if (normalizeName === "componentDidMount") {
              return {
                type: "string",
                fileType: cfg.fileType,
                name: REACT_CHUNK_NAME.ClassDidMountContent,
                content: generateFunction(lifeCycles[lifeCycleName], { isBlock: true }),
                linkAfter: [REACT_CHUNK_NAME.ClassDidMountStart]
              };
            }
            if (normalizeName === "render") {
              return {
                type: "string",
                fileType: cfg.fileType,
                name: REACT_CHUNK_NAME.ClassRenderPre,
                content: generateFunction(lifeCycles[lifeCycleName], { isBlock: true }),
                linkAfter: [REACT_CHUNK_NAME.ClassRenderStart]
              };
            }
            return {
              type: "string",
              fileType: cfg.fileType,
              name: CLASS_DEFINE_CHUNK_NAME2.InsMethod,
              content: generateFunction(lifeCycles[lifeCycleName], {
                name: exportName,
                isMember: true
              }),
              linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.InsMethod]]
            };
          }).filter((i) => !!i);
          next.chunks.push(...chunks.filter((x) => x !== null));
        }
        return next;
      };
      return plugin;
    };
    var containerLifeCycle_default = pluginFactory102;
    var pluginFactory11 = (config) => {
      const cfg = {
        fileType: "jsx",
        ...config
      };
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        const { inStrictMode } = next.contextData;
        if (!ir.methods) {
          return next;
        }
        const { methods } = ir;
        const chunks = Object.keys(methods).map((methodName) => ({
          type: "string",
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME2.InsMethod,
          content: generateFunction(methods[methodName], { name: methodName, isMember: true }),
          linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.InsMethod]]
        }));
        next.chunks.push(...chunks);
        if (inStrictMode) {
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME2.ConstructorContent,
            content: Object.keys(ir.methods).map(
              (methodName) => isValidIdentifier2(methodName) ? `.${methodName}` : `[${JSON.stringify(methodName)}]`
            ).map((method) => `this._context${method} = this${method};`).join("\n"),
            linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.ConstructorContent]]
          });
        }
        return next;
      };
      return plugin;
    };
    var containerMethod_default = pluginFactory11;
    var nodeToJSX_exports = {};
    __export2(nodeToJSX_exports, {
      createNodeGenerator: () => createNodeGenerator,
      createReactNodeGenerator: () => createReactNodeGenerator,
      generateConditionReactCtrl: () => generateConditionReactCtrl,
      generateReactExprInJS: () => generateReactExprInJS,
      generateReactLoopCtrl: () => generateReactLoopCtrl,
      isPureString: () => isPureString2
    });
    var import_lodash4 = __toESM2(require("lodash"));
    var import_function = require("fp-ts/function");
    var import_lowcode_types7 = require("@alilc/lowcode-types");
    var import_lodash3 = __toESM2(require("lodash"));
    var SPECIAL_CHARS = `
\r'"<>&`;
    var SPECIAL_CHARS_REG = new RegExp(
      `[${SPECIAL_CHARS.split("").map((c) => `\\x${import_lodash3.default.padStart(c.charCodeAt(0).toString(16), 2, "0")}`).join("")}]`,
      "g"
    );
    function encodeJsxStringNode2(str) {
      return str.replace(SPECIAL_CHARS_REG, (c) => `&#${c.charCodeAt(0)};`);
    }
    var import_generator16 = __toESM2(require("@babel/generator"));
    function transformThis2Context(expr, scope, { ignoreRootScope = false } = {}) {
      var _a;
      if (ignoreRootScope && scope.parent == null) {
        return typeof expr === "string" ? expr : (0, import_generator16.default)(expr).code;
      }
      return parseExpressionConvertThis2Context(
        expr,
        "__$$context",
        ((_a = scope.bindings) == null ? void 0 : _a.getAllBindings()) || []
      );
    }
    function mergeNodeGeneratorConfig2(cfg1, cfg2 = {}) {
      const resCfg = {};
      if (cfg1.handlers || cfg2.handlers) {
        resCfg.handlers = {
          ...cfg1.handlers || {},
          ...cfg2.handlers || {}
        };
      }
      if (cfg1.tagMapping || cfg2.tagMapping) {
        resCfg.tagMapping = cfg2.tagMapping || cfg1.tagMapping;
      }
      if (cfg1.attrPlugins || cfg2.attrPlugins) {
        resCfg.attrPlugins = [];
        resCfg.attrPlugins.push(...cfg2.attrPlugins || []);
        resCfg.attrPlugins.push(...cfg1.attrPlugins || []);
      }
      if (cfg1.nodePlugins || cfg2.nodePlugins) {
        resCfg.nodePlugins = [];
        resCfg.nodePlugins.push(...cfg2.nodePlugins || []);
        resCfg.nodePlugins.push(...cfg1.nodePlugins || []);
      }
      return resCfg;
    }
    function isPureString2(v) {
      return v[0] === "'" && v[v.length - 1] === "'" || v[0] === '"' && v[v.length - 1] === '"';
    }
    function generateAttrValue2(attrData, scope, config) {
      const valueStr = generateCompositeType2(attrData.attrValue, scope, {
        handlers: config == null ? void 0 : config.handlers,
        nodeGenerator: config == null ? void 0 : config.self
      });
      return [
        {
          type: "NodeCodePieceAttr",
          name: attrData.attrName,
          value: valueStr
        }
      ];
    }
    function generateAttr2(attrName, attrValue, scope, config) {
      let pieces;
      if (config == null ? void 0 : config.attrPlugins) {
        pieces = executeFunctionStack2(
          { attrName, attrValue },
          scope,
          config.attrPlugins,
          generateAttrValue2,
          config
        );
      } else {
        pieces = generateAttrValue2({ attrName, attrValue }, scope, config);
      }
      pieces = pieces.map((p) => {
        let newValue;
        if (p.value && isPureString2(p.value)) {
          const content = getStaticExprValue2(p.value);
          newValue = JSON.stringify(encodeJsxStringNode2(content));
        } else {
          newValue = `{${p.value}}`;
        }
        return {
          value: `${p.name}=${newValue}`,
          type: "NodeCodePieceAttr"
        };
      });
      return pieces;
    }
    function generateAttrs2(nodeItem, scope, config) {
      const { props } = nodeItem;
      let pieces = [];
      if (props) {
        if (!Array.isArray(props)) {
          Object.keys(props).forEach((propName) => {
            if (isValidIdentifier2(propName)) {
              pieces = pieces.concat(generateAttr2(propName, props[propName], scope, config));
            }
          });
        } else {
          props.forEach((prop) => {
            if (prop.name && isValidIdentifier2(prop.name) && !prop.spread) {
              pieces = pieces.concat(generateAttr2(prop.name, prop.value, scope, config));
            }
          });
        }
      }
      return pieces;
    }
    function generateBasicNode2(nodeItem, scope, config) {
      const pieces = [];
      const tagName = ((config == null ? void 0 : config.tagMapping) || import_lodash4.default.identity)(nodeItem.componentName);
      pieces.push({
        value: tagName || "",
        type: "NodeCodePieceTag"
      });
      return pieces;
    }
    function generateSimpleNode2(nodeItem, scope, config) {
      const basicParts = generateBasicNode2(nodeItem, scope, config) || [];
      const attrParts = generateAttrs2(nodeItem, scope, config) || [];
      const childrenParts = [];
      if (nodeItem.children && (config == null ? void 0 : config.self)) {
        const childrenStr = config.self(nodeItem.children, scope);
        childrenParts.push({
          type: "NodeCodePieceChildren",
          value: childrenStr
        });
      }
      return [...basicParts, ...attrParts, ...childrenParts];
    }
    function linkPieces2(pieces) {
      const tagsPieces = pieces.filter((p) => p.type === "NodeCodePieceTag");
      if (tagsPieces.length !== 1) {
        throw new CodeGeneratorError6("Only one tag definition required", tagsPieces);
      }
      const tagName = tagsPieces[0].value;
      const beforeParts = pieces.filter((p) => p.type === "NodeCodePieceBefore").map((p) => p.value).join("");
      const afterParts = pieces.filter((p) => p.type === "NodeCodePieceAfter").map((p) => p.value).join("");
      const childrenParts = pieces.filter((p) => p.type === "NodeCodePieceChildren").map((p) => p.value).join("");
      let attrsParts = pieces.filter((p) => p.type === "NodeCodePieceAttr").map((p) => p.value).join(" ");
      attrsParts = attrsParts ? ` ${attrsParts}` : "";
      if (childrenParts) {
        return `${beforeParts}<${tagName}${attrsParts}>${childrenParts}</${tagName}>${afterParts}`;
      }
      return `${beforeParts}<${tagName}${attrsParts} />${afterParts}`;
    }
    function generateNodeSchema2(nodeItem, scope, config) {
      const pieces = [];
      if (config == null ? void 0 : config.nodePlugins) {
        const res = executeFunctionStack2(
          nodeItem,
          scope,
          config.nodePlugins,
          generateSimpleNode2,
          config
        );
        pieces.push(...res);
      } else {
        pieces.push(...generateSimpleNode2(nodeItem, scope, config));
      }
      return linkPieces2(pieces);
    }
    function generateReactLoopCtrl(nodeItem, scope, config, next) {
      var _a, _b, _c;
      if (nodeItem.loop) {
        const tolerateEvalErrors = (_a = config == null ? void 0 : config.tolerateEvalErrors) != null ? _a : true;
        const loopItemName = ((_b = nodeItem.loopArgs) == null ? void 0 : _b[0]) || "item";
        const loopIndexName = ((_c = nodeItem.loopArgs) == null ? void 0 : _c[1]) || "index";
        const subScope = scope.createSubScope([loopItemName, loopIndexName]);
        const pieces = next ? next(nodeItem, subScope, config) : [];
        const loopDataExpr = (0, import_function.pipe)(
          nodeItem.loop,
          (expr) => generateCompositeType2(expr, scope, {
            handlers: config == null ? void 0 : config.handlers,
            tolerateEvalErrors: false
          }),
          (expr) => transformThis2Context(expr, scope, { ignoreRootScope: true }),
          (expr) => tolerateEvalErrors ? `__$$evalArray(() => (${expr}))` : expr
        );
        pieces.unshift({
          value: `(${loopDataExpr}).map((${loopItemName}, ${loopIndexName}) => ((__$$context) => (`,
          type: "NodeCodePieceBefore"
        });
        pieces.push({
          value: `))(__$$createChildContext(__$$context, { ${loopItemName}, ${loopIndexName} })))`,
          type: "NodeCodePieceAfter"
        });
        return pieces;
      }
      return next ? next(nodeItem, scope, config) : [];
    }
    function generateConditionReactCtrl(nodeItem, scope, config, next) {
      const pieces = next ? next(nodeItem, scope, config) : [];
      if (nodeItem.condition != null && nodeItem.condition !== true) {
        const value = generateCompositeType2(nodeItem.condition, scope, {
          handlers: config == null ? void 0 : config.handlers
        });
        pieces.unshift({
          value: `!!(${value}) && (`,
          type: "NodeCodePieceBefore"
        });
        pieces.push({
          value: ")",
          type: "NodeCodePieceAfter"
        });
      }
      return pieces;
    }
    function generateReactExprInJS(nodeItem, scope, config, next) {
      const pieces = next ? next(nodeItem, scope, config) : [];
      if (nodeItem.condition != null && nodeItem.condition !== true || nodeItem.loop != null) {
        pieces.unshift({
          value: "{",
          type: "NodeCodePieceBefore"
        });
        pieces.push({
          value: "}",
          type: "NodeCodePieceAfter"
        });
      }
      return pieces;
    }
    var handleChildren2 = (v) => v.join("");
    function createNodeGenerator(cfg = {}) {
      const generateNode = (nodeItem, scope) => {
        if (import_lodash4.default.isArray(nodeItem)) {
          const resList = nodeItem.map((n) => generateNode(n, scope));
          return handleChildren2(resList);
        }
        if ((0, import_lowcode_types7.isNodeSchema)(nodeItem)) {
          return generateNodeSchema2(nodeItem, scope, {
            ...cfg,
            self: generateNode
          });
        }
        const valueStr = generateCompositeType2(nodeItem, scope, {
          handlers: cfg.handlers,
          nodeGenerator: generateNode
        });
        if (isPureString2(valueStr)) {
          return encodeJsxStringNode2(getStaticExprValue2(valueStr));
        }
        return `{${valueStr}}`;
      };
      return (nodeItem, scope) => unwrapJsExprQuoteInJsx2(generateNode(nodeItem, scope));
    }
    var defaultReactGeneratorConfig = {
      nodePlugins: [generateReactExprInJS, generateReactLoopCtrl, generateConditionReactCtrl]
    };
    function createReactNodeGenerator(cfg) {
      const newCfg = mergeNodeGeneratorConfig2(defaultReactGeneratorConfig, cfg);
      return createNodeGenerator(newCfg);
    }
    function isLiteralAtomicExpr(expr) {
      return expr === "null" || expr === "undefined" || expr === "true" || expr === "false" || /^-?\d+(\.\d+)?$/.test(expr);
    }
    function isSimpleStraightLiteral(expr) {
      switch (expr.type) {
        case "BigIntLiteral":
        case "BooleanLiteral":
        case "DecimalLiteral":
        case "NullLiteral":
        case "NumericLiteral":
        case "RegExpLiteral":
        case "StringLiteral":
          return true;
        default:
          return false;
      }
    }
    function transformJsExpr(expr, scope, { dontWrapEval = false, dontTransformThis2ContextAtRootScope = false } = {}) {
      if (!expr) {
        return "undefined";
      }
      if (isLiteralAtomicExpr(expr)) {
        return expr;
      }
      const exprAst = parseExpression2(expr);
      if (isSimpleStraightLiteral(exprAst)) {
        return expr;
      }
      if (dontWrapEval) {
        return transformThis2Context(exprAst, scope, {
          ignoreRootScope: dontTransformThis2ContextAtRootScope
        });
      }
      switch (exprAst.type) {
        case "ArrowFunctionExpression":
        case "FunctionExpression":
          return transformThis2Context(exprAst, scope, {
            ignoreRootScope: dontTransformThis2ContextAtRootScope
          });
        default:
          break;
      }
      return `__$$eval(() => (${transformThis2Context(exprAst, scope, {
        ignoreRootScope: dontTransformThis2ContextAtRootScope
      })}))`;
    }
    var pluginFactory12 = (config) => {
      const cfg = {
        fileType: "jsx",
        nodeTypeMapping: {},
        ...config
      };
      const { nodeTypeMapping } = cfg;
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const { tolerateEvalErrors = true, evalErrorsHandler = "" } = next.contextData;
        const customHandlers = {
          expression(input, scope2, config2) {
            var _a;
            return transformJsExpr(generateExpression(input, scope2), scope2, {
              dontWrapEval: !((_a = config2 == null ? void 0 : config2.tolerateEvalErrors) != null ? _a : tolerateEvalErrors),
              dontTransformThis2ContextAtRootScope: true
            });
          },
          function(input, scope2) {
            return transformThis2Context(
              generateCompositeType2(
                {
                  type: "JSFunction",
                  value: input.value || "function () {}"
                },
                Scope2.createRootScope()
              ),
              scope2,
              { ignoreRootScope: true }
            );
          }
        };
        const generatorPlugins = {
          handlers: customHandlers,
          tagMapping: (v) => nodeTypeMapping[v] || v,
          tolerateEvalErrors
        };
        if (next.contextData.useRefApi) {
          generatorPlugins.attrPlugins = [
            (attrData, scope2, pluginCfg, nextFunc) => {
              if (attrData.attrName === "ref") {
                return [
                  {
                    name: attrData.attrName,
                    value: `this._refsManager.linkRef('${attrData.attrValue}')`,
                    type: "NodeCodePieceAttr"
                  }
                ];
              }
              return nextFunc ? nextFunc(attrData, scope2, pluginCfg) : [];
            }
          ];
        }
        const generator = createReactNodeGenerator(generatorPlugins);
        const ir = next.ir;
        const scope = Scope2.createRootScope();
        const jsxContent = generator(ir, scope);
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: REACT_CHUNK_NAME.ClassRenderJSX,
          content: `
        const __$$context = this._context || this;
        const { state } = __$$context;
        return ${jsxContent};
      `,
          linkAfter: [REACT_CHUNK_NAME.ClassRenderStart, REACT_CHUNK_NAME.ClassRenderPre]
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: COMMON_CHUNK_NAME2.CustomContent,
          content: [
            tolerateEvalErrors && `
          function __$$eval(expr) {
            try {
              return expr();
            } catch (error) {
              ${evalErrorsHandler}
            }
          }

          function __$$evalArray(expr) {
            const res = __$$eval(expr);
            return Array.isArray(res) ? res : [];
          }
      `,
            `
        function __$$createChildContext(oldContext, ext) {
          const childContext = {
            ...oldContext,
            ...ext,
          };
          childContext.__proto__ = oldContext;
          return childContext;
        }
      `
          ].filter(Boolean).join("\n"),
          linkAfter: [COMMON_CHUNK_NAME2.FileExport]
        });
        return next;
      };
      return plugin;
    };
    var jsx_default = pluginFactory12;
    var pluginFactory13 = () => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: COMMON_CHUNK_NAME2.ExternalDepsImport,
          content: `
// \u6CE8\u610F: \u51FA\u7801\u5F15\u64CE\u6CE8\u5165\u7684\u4E34\u65F6\u53D8\u91CF\u9ED8\u8BA4\u90FD\u4EE5 "__$$" \u5F00\u5934\uFF0C\u7981\u6B62\u5728\u642D\u5EFA\u7684\u4EE3\u7801\u4E2D\u76F4\u63A5\u8BBF\u95EE\u3002
// \u4F8B\u5916\uFF1Areact \u6846\u67B6\u7684\u5BFC\u51FA\u540D\u548C\u5404\u79CD\u7EC4\u4EF6\u540D\u9664\u5916\u3002
import React from 'react';`,
          linkAfter: []
        });
        return next;
      };
      return plugin;
    };
    var reactCommonDeps_default = pluginFactory13;
    var pluginFactory14 = (config) => {
      const cfg = {
        fileType: "css",
        moduleFileType: "jsx",
        ...config
      };
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: COMMON_CHUNK_NAME2.StyleCssContent,
          content: ir.css,
          linkAfter: [COMMON_CHUNK_NAME2.StyleDepsImport]
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.moduleFileType,
          name: COMMON_CHUNK_NAME2.InternalDepsImport,
          content: `import './index.${cfg.fileType}';`,
          linkAfter: [COMMON_CHUNK_NAME2.ExternalDepsImport]
        });
        return next;
      };
      return plugin;
    };
    var css_default = pluginFactory14;
    var pluginFactory15 = () => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        const scope = Scope2.createRootScope();
        const constantStr = generateCompositeType2(ir.constants || {}, scope);
        next.chunks.push({
          type: "string",
          fileType: "js",
          name: COMMON_CHUNK_NAME2.FileVarDefine,
          content: `
        const __$$constants = (${constantStr});
      `,
          linkAfter: [
            COMMON_CHUNK_NAME2.ExternalDepsImport,
            COMMON_CHUNK_NAME2.InternalDepsImport,
            COMMON_CHUNK_NAME2.ImportAliasDefine
          ]
        });
        next.chunks.push({
          type: "string",
          fileType: "js",
          name: COMMON_CHUNK_NAME2.FileExport,
          content: `
        export default __$$constants;
      `,
          linkAfter: [
            COMMON_CHUNK_NAME2.ExternalDepsImport,
            COMMON_CHUNK_NAME2.InternalDepsImport,
            COMMON_CHUNK_NAME2.ImportAliasDefine,
            COMMON_CHUNK_NAME2.FileVarDefine,
            COMMON_CHUNK_NAME2.FileUtilDefine,
            COMMON_CHUNK_NAME2.FileMainContent
          ]
        });
        return next;
      };
      return plugin;
    };
    var constants_default = pluginFactory15;
    var pluginFactory16 = () => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        const i18nStr = ir.i18n ? JSON.stringify(ir.i18n, null, 2) : "{}";
        next.chunks.push({
          type: "string",
          fileType: "js",
          name: COMMON_CHUNK_NAME2.FileMainContent,
          content: `
        const i18nConfig = ${i18nStr};

        let locale = typeof navigator === 'object' && typeof navigator.language === 'string' ? navigator.language : 'zh-CN';

        const getLocale = () => locale;

        const setLocale = (target) => {
          locale = target;
        };

        const isEmptyVariables = variables => (
          Array.isArray(variables) && variables.length === 0
          || typeof variables === 'object' && (!variables || Object.keys(variables).length === 0)
        );

        // \u6309\u4F4E\u4EE3\u7801\u89C4\u8303\u91CC\u9762\u7684\u8981\u6C42\u8FDB\u884C\u53D8\u91CF\u66FF\u6362
        const format = (msg, variables) => (
          typeof msg === 'string'
            ? msg.replace(/\\$?\\{(\\w+)\\}/g, (match, key) => variables?.[key] ?? '')
            : msg
        );

        const i18nFormat = ({ id, defaultMessage, fallback }, variables) => {
          const msg = i18nConfig[locale]?.[id] ??  i18nConfig[locale.replace('-', '_')]?.[id] ??  defaultMessage;
          if (msg == null) {
            console.warn('[i18n]: unknown message id: %o (locale=%o)', id, locale);
            return fallback === undefined ? \`\${id}\` : fallback;
          }

          return format(msg, variables);
        }

        const i18n = (id, params) => {
          return i18nFormat({ id }, params);
        };

        // \u5C06\u56FD\u9645\u5316\u7684\u4E00\u4E9B\u65B9\u6CD5\u6CE8\u5165\u5230\u76EE\u6807\u5BF9\u8C61&\u4E0A\u4E0B\u6587\u4E2D
        const _inject2 = (target) => {
          target.i18n = i18n;
          target.getLocale = getLocale;
          target.setLocale = (locale) => {
            setLocale(locale);
            target.forceUpdate();
          };
          target._i18nText = (t) => {
            // \u4F18\u5148\u53D6\u76F4\u63A5\u4F20\u8FC7\u6765\u7684\u8BED\u6599
            const localMsg = t[locale] ?? t[String(locale).replace('-', '_')]
            if (localMsg != null) {
              return format(localMsg, t.params);
            }

            // \u5176\u6B21\u7528\u9879\u76EE\u7EA7\u522B\u7684
            const projectMsg = i18nFormat({ id: t.key, fallback: null }, t.params);
            if (projectMsg != null) {
              return projectMsg;
            }

            // \u515C\u5E95\u7528 use \u6307\u5B9A\u7684\u6216\u9ED8\u8BA4\u8BED\u8A00\u7684
            return format(t[t.use || "zh-CN"] ?? t.en_US, t.params);
          }

          // \u6CE8\u5165\u5230\u4E0A\u4E0B\u6587\u4E2D\u53BB
          if (target._context && target._context !== target) {
            Object.assign(target._context, {
              i18n,
              getLocale, setLocale: target.setLocale
            });
          }
        }
      `,
          linkAfter: [
            COMMON_CHUNK_NAME2.ExternalDepsImport,
            COMMON_CHUNK_NAME2.InternalDepsImport,
            COMMON_CHUNK_NAME2.ImportAliasDefine,
            COMMON_CHUNK_NAME2.FileVarDefine,
            COMMON_CHUNK_NAME2.FileUtilDefine
          ]
        });
        next.chunks.push({
          type: "string",
          fileType: "js",
          name: COMMON_CHUNK_NAME2.FileExport,
          content: `
        export {
          getLocale,
          setLocale,
          i18n,
          i18nFormat,
          _inject2,
        };
      `,
          linkAfter: [
            COMMON_CHUNK_NAME2.ExternalDepsImport,
            COMMON_CHUNK_NAME2.InternalDepsImport,
            COMMON_CHUNK_NAME2.ImportAliasDefine,
            COMMON_CHUNK_NAME2.FileVarDefine,
            COMMON_CHUNK_NAME2.FileUtilDefine,
            COMMON_CHUNK_NAME2.FileMainContent
          ]
        });
        return next;
      };
      return plugin;
    };
    var i18n_default = pluginFactory16;
    var pluginFactory17 = (baseFramework) => {
      const plugin = async (pre) => {
        const framework = baseFramework || "react";
        const next = {
          ...pre
        };
        const ir = next.ir;
        next.chunks.push({
          type: "string",
          fileType: "js",
          name: COMMON_CHUNK_NAME2.ExternalDepsImport,
          content: `
        import { createRef } from '${framework}';
      `,
          linkAfter: []
        });
        next.chunks.push({
          type: "string",
          fileType: "js",
          name: COMMON_CHUNK_NAME2.FileUtilDefine,
          content: `
        export class RefsManager {
          constructor() {
            this.refInsStore = {};
          }

          clearNullRefs() {
            Object.keys(this.refInsStore).forEach((refName) => {
              const filteredInsList = this.refInsStore[refName].filter(insRef => !!insRef.current);
              if (filteredInsList.length > 0) {
                this.refInsStore[refName] = filteredInsList;
              } else {
                delete this.refInsStore[refName];
              }
            });
          }

          get(refName) {
            this.clearNullRefs();
            if (this.refInsStore[refName] && this.refInsStore[refName].length > 0) {
              return this.refInsStore[refName][0].current;
            }

            return null;
          }

          getAll(refName) {
            this.clearNullRefs();
            if (this.refInsStore[refName] && this.refInsStore[refName].length > 0) {
              return this.refInsStore[refName].map(i => i.current);
            }

            return [];
          }

          linkRef(refName) {
            const refIns = createRef();
            this.refInsStore[refName] = this.refInsStore[refName] || [];
            this.refInsStore[refName].push(refIns);
            return refIns;
          }
        }
      `,
          linkAfter: [...DEFAULT_LINK_AFTER3[COMMON_CHUNK_NAME2.FileUtilDefine]]
        });
        if (ir.utils) {
          next.chunks.push({
            type: "string",
            fileType: "js",
            name: COMMON_CHUNK_NAME2.FileExport,
            content: `
          export default {
        `,
            linkAfter: [
              COMMON_CHUNK_NAME2.ExternalDepsImport,
              COMMON_CHUNK_NAME2.InternalDepsImport,
              COMMON_CHUNK_NAME2.ImportAliasDefine,
              COMMON_CHUNK_NAME2.FileVarDefine,
              COMMON_CHUNK_NAME2.FileUtilDefine,
              COMMON_CHUNK_NAME2.FileMainContent
            ]
          });
          ir.utils.forEach((util) => {
            if (util.type === "function") {
              next.chunks.push({
                type: "string",
                fileType: "js",
                name: COMMON_CHUNK_NAME2.FileVarDefine,
                content: `
              const ${util.name} = ${util.content.value};
            `,
                linkAfter: [
                  COMMON_CHUNK_NAME2.ExternalDepsImport,
                  COMMON_CHUNK_NAME2.InternalDepsImport,
                  COMMON_CHUNK_NAME2.ImportAliasDefine
                ]
              });
            }
            next.chunks.push({
              type: "string",
              fileType: "js",
              name: COMMON_CHUNK_NAME2.FileExport,
              content: `${util.name},`,
              linkAfter: [
                COMMON_CHUNK_NAME2.ExternalDepsImport,
                COMMON_CHUNK_NAME2.InternalDepsImport,
                COMMON_CHUNK_NAME2.ImportAliasDefine,
                COMMON_CHUNK_NAME2.FileVarDefine,
                COMMON_CHUNK_NAME2.FileUtilDefine,
                COMMON_CHUNK_NAME2.FileMainContent
              ]
            });
          });
          next.chunks.push({
            type: "string",
            fileType: "js",
            name: COMMON_CHUNK_NAME2.FileExport,
            content: `
          };
        `,
            linkAfter: [
              COMMON_CHUNK_NAME2.ExternalDepsImport,
              COMMON_CHUNK_NAME2.InternalDepsImport,
              COMMON_CHUNK_NAME2.ImportAliasDefine,
              COMMON_CHUNK_NAME2.FileVarDefine,
              COMMON_CHUNK_NAME2.FileUtilDefine,
              COMMON_CHUNK_NAME2.FileMainContent
            ]
          });
        }
        return next;
      };
      return plugin;
    };
    var utils_default = pluginFactory17;
    var templateHelper_exports = {};
    __export2(templateHelper_exports, {
      insertFile: () => insertFile,
      runFileGenerator: () => runFileGenerator2
    });
    function insertFile(root, path2, file2) {
      let current = root;
      path2.forEach((pathNode) => {
        const dir = current.dirs.find((d) => d.name === pathNode);
        if (dir) {
          current = dir;
        } else {
          const newDir = createResultDir4(pathNode);
          addDirectory2(current, newDir);
          current = newDir;
        }
      });
      addFile3(current, file2);
    }
    function runFileGenerator2(root, fun) {
      try {
        const result = fun();
        const [path2, file2] = result;
        insertFile(root, path2, file2);
      } catch (error) {
        throw new Error(`Error: ${typeof fun}`);
      }
    }
    function getFile81() {
      return [
        [],
        {
          name: "abc",
          ext: "json",
          content: `
{
  "type": "ice-app",
  "builder": "@ali/builder-ice-app"
}
    `
        }
      ];
    }
    function getFile210() {
      return [
        [],
        {
          name: "build",
          ext: "json",
          content: `
{
  "entry": "src/app.js",
  "plugins": [
    [
      "build-plugin-fusion",
      {
        "themePackage": "@alifd/theme-design-pro"
      }
    ],
    [
      "build-plugin-moment-locales",
      {
        "locales": [
          "zh-cn"
        ]
      }
    ]
  ]
}
      `
        }
      ];
    }
    function getFile310() {
      const file2 = createResultFile2(
        ".editorconfig",
        "",
        `
# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
    `
      );
      return [[], file2];
    }
    function getFile410() {
      const file2 = createResultFile2(
        ".eslintignore",
        "",
        `
# \u5FFD\u7565\u76EE\u5F55
build/
tests/
demo/
.ice/

# node \u8986\u76D6\u7387\u6587\u4EF6
coverage/

# \u5FFD\u7565\u6587\u4EF6
**/*-min.js
**/*.min.js

package-lock.json
yarn.lock
    `
      );
      return [[], file2];
    }
    function getFile510() {
      const file2 = createResultFile2(
        ".eslintrc",
        "js",
        `
const { eslint } = require('@ice/spec');

module.exports = eslint;
    `
      );
      return [[], file2];
    }
    function getFile610() {
      const file2 = createResultFile2(
        ".gitignore",
        "",
        `
# See https://help.github.com/ignore-files/ for more about ignoring files.

# dependencies
node_modules/

# production
build/
dist/
tmp/
lib/

# misc
.idea/
.happypack
.DS_Store
*.swp
*.dia~
.ice

npm-debug.log*
yarn-debug.log*
yarn-error.log*
index.module.scss.d.ts
    `
      );
      return [[], file2];
    }
    function getFile710() {
      const file2 = createResultFile2(
        "jsconfig",
        "json",
        `
{
  "compilerOptions": {
    "baseUrl": ".",
    "jsx": "react",
    "paths": {
      "@/*": ["./src/*"],
      "ice": [".ice/index.ts"],
      "ice/*": [".ice/pages/*"]
    }
  }
}
    `
      );
      return [[], file2];
    }
    function getFile82() {
      const file2 = createResultFile2(
        ".prettierignore",
        "",
        `
build/
tests/
demo/
.ice/
coverage/
**/*-min.js
**/*.min.js
package-lock.json
yarn.lock
    `
      );
      return [[], file2];
    }
    function getFile92() {
      const file2 = createResultFile2(
        ".prettierrc",
        "js",
        `
const { prettier } = require('@ice/spec');

module.exports = prettier;
    `
      );
      return [[], file2];
    }
    function getFile102() {
      const file2 = createResultFile2(
        "README",
        "md",
        `
## Scaffold Lite

> \u8F7B\u91CF\u7EA7\u6A21\u677F\uFF0C\u4F7F\u7528 JavaScript\uFF0C\u4EC5\u5305\u542B\u57FA\u7840\u7684 Layout\u3002

## \u4F7F\u7528

\`\`\`bash
# \u5B89\u88C5\u4F9D\u8D56
$ npm install

# \u542F\u52A8\u670D\u52A1
$ npm start  # visit http://localhost:3333
\`\`\`

[More docs](https://ice.work/docs/guide/about).

## \u76EE\u5F55

\`\`\`md
\u251C\u2500\u2500 build/                         # \u6784\u5EFA\u4EA7\u7269
\u251C\u2500\u2500 mock/                          # \u672C\u5730\u6A21\u62DF\u6570\u636E
\u2502   \u251C\u2500\u2500 index.[j,t]s
\u251C\u2500\u2500 public/
\u2502   \u251C\u2500\u2500 index.html                 # \u5E94\u7528\u5165\u53E3 HTML
\u2502   \u2514\u2500\u2500 favicon.png                # Favicon
\u251C\u2500\u2500 src/                           # \u6E90\u7801\u8DEF\u5F84
\u2502   \u251C\u2500\u2500 components/                # \u81EA\u5B9A\u4E49\u4E1A\u52A1\u7EC4\u4EF6
\u2502   \u2502   \u2514\u2500\u2500 Guide/
\u2502   \u2502       \u251C\u2500\u2500 index.[j,t]sx
\u2502   \u2502       \u251C\u2500\u2500 index.module.scss
\u2502   \u251C\u2500\u2500 layouts/                   # \u5E03\u5C40\u7EC4\u4EF6
\u2502   \u2502   \u2514\u2500\u2500 BasicLayout/
\u2502   \u2502       \u251C\u2500\u2500 index.[j,t]sx
\u2502   \u2502       \u2514\u2500\u2500 index.module.scss
\u2502   \u251C\u2500\u2500 pages/                     # \u9875\u9762
\u2502   \u2502   \u2514\u2500\u2500 Home/                  # home \u9875\u9762\uFF0C\u7EA6\u5B9A\u8DEF\u7531\u8F6C\u6210\u5C0F\u5199
\u2502   \u2502       \u251C\u2500\u2500 components/        # \u9875\u9762\u7EA7\u81EA\u5B9A\u4E49\u4E1A\u52A1\u7EC4\u4EF6
\u2502   \u2502       \u251C\u2500\u2500 models.[j,t]sx     # \u9875\u9762\u7EA7\u6570\u636E\u72B6\u6001
\u2502   \u2502       \u251C\u2500\u2500 index.[j,t]sx      # \u9875\u9762\u5165\u53E3
\u2502   \u2502       \u2514\u2500\u2500 index.module.scss  # \u9875\u9762\u6837\u5F0F\u6587\u4EF6
\u2502   \u251C\u2500\u2500 configs/                   # [\u53EF\u9009] \u914D\u7F6E\u6587\u4EF6
\u2502   \u2502   \u2514\u2500\u2500 menu.[j,t]s            # [\u53EF\u9009] \u83DC\u5355\u914D\u7F6E
\u2502   \u251C\u2500\u2500 models/                    # [\u53EF\u9009] \u5E94\u7528\u7EA7\u6570\u636E\u72B6\u6001
\u2502   \u2502   \u2514\u2500\u2500 user.[j,t]s
\u2502   \u251C\u2500\u2500 utils/                     # [\u53EF\u9009] \u5DE5\u5177\u5E93
\u2502   \u251C\u2500\u2500 global.scss                # \u5168\u5C40\u6837\u5F0F
\u2502   \u251C\u2500\u2500 routes.[j,t]s              # \u8DEF\u7531\u914D\u7F6E
\u2502   \u2514\u2500\u2500 app.[j,t]s[x]              # \u5E94\u7528\u5165\u53E3\u811A\u672C
\u251C\u2500\u2500 build.json                     # \u5DE5\u7A0B\u914D\u7F6E
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 .editorconfig
\u251C\u2500\u2500 .eslintignore
\u251C\u2500\u2500 .eslintrc.[j,t]s
\u251C\u2500\u2500 .gitignore
\u251C\u2500\u2500 .stylelintignore
\u251C\u2500\u2500 .stylelintrc.[j,t]s
\u251C\u2500\u2500 .gitignore
\u2514\u2500\u2500 [j,t]sconfig.json
\`\`\`
    `
      );
      return [[], file2];
    }
    function getFile112() {
      const file2 = createResultFile2(
        "index",
        "jsx",
        `
import React from 'react';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <p className={styles.footer}>
      <span className={styles.logo}>Alibaba Fusion</span>
      <br />
      <span className={styles.copyright}>\xA9 2019-\u73B0\u5728 Alibaba Fusion & ICE</span>
    </p>
  );
}
    `
      );
      return [["src", "layouts", "BasicLayout", "components", "Footer"], file2];
    }
    function getFile122() {
      const file2 = createResultFile2(
        "index",
        "module.scss",
        `
.footer {
  line-height: 20px;
  text-align: center;
}

.logo {
  font-weight: bold;
  font-size: 16px;
}

.copyright {
  font-size: 12px;
}
    `
      );
      return [["src", "layouts", "BasicLayout", "components", "Footer"], file2];
    }
    function getFile132() {
      const file2 = createResultFile2(
        "index",
        "jsx",
        `
import React from 'react';
import { Link } from 'ice';
import styles from './index.module.scss';

export default function Logo({ image, text, url }) {
  return (
    <div className="logo">
      <Link to={url || '/'} className={styles.logo}>
        {image && <img src={image} alt="logo" />}
        <span>{text}</span>
      </Link>
    </div>
  );
}
    `
      );
      return [["src", "layouts", "BasicLayout", "components", "Logo"], file2];
    }
    function getFile142() {
      const file2 = createResultFile2(
        "index",
        "module.scss",
        `
.logo{
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-text1-1;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;

  &:visited, &:link {
    color: $color-text1-1;
  }

  img {
    height: 24px;
    margin-right: 10px;
  }
}
    `
      );
      return [["src", "layouts", "BasicLayout", "components", "Logo"], file2];
    }
    function getFile152() {
      const file2 = createResultFile2(
        "index",
        "jsx",
        `
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'ice';
import { Nav } from '@alifd/next';
import { asideMenuConfig } from '../../menuConfig';

const { SubNav } = Nav;
const NavItem = Nav.Item;

function getNavMenuItems(menusData) {
  if (!menusData) {
    return [];
  }

  return menusData
    .filter(item => item.name && !item.hideInMenu)
    .map((item, index) => getSubMenuOrItem(item, index));
}

function getSubMenuOrItem(item, index) {
  if (item.children && item.children.some(child => child.name)) {
    const childrenItems = getNavMenuItems(item.children);

    if (childrenItems && childrenItems.length > 0) {
      const subNav = (
        <SubNav key={index} icon={item.icon} label={item.name}>
          {childrenItems}
        </SubNav>
      );
      return subNav;
    }

    return null;
  }

  const navItem = (
    <NavItem key={item.path} icon={item.icon}>
      <Link to={item.path}>{item.name}</Link>
    </NavItem>
  );
  return navItem;
}

const Navigation = (props, context) => {
  const { location } = props;
  const { pathname } = location;
  const { isCollapse } = context;
  return (
    <Nav
      type="primary"
      selectedKeys={[pathname]}
      defaultSelectedKeys={[pathname]}
      embeddable
      openMode="single"
      iconOnly={isCollapse}
      hasArrow={false}
      mode={isCollapse ? 'popup' : 'inline'}
    >
      {getNavMenuItems(asideMenuConfig)}
    </Nav>
  );
};

Navigation.contextTypes = {
  isCollapse: PropTypes.bool,
};
const PageNav = withRouter(Navigation);
export default PageNav;
    `
      );
      return [["src", "layouts", "BasicLayout", "components", "PageNav"], file2];
    }
    function getFile162() {
      const file2 = createResultFile2(
        "index",
        "jsx",
        `
import React, { useState } from 'react';
import { Shell, ConfigProvider } from '@alifd/next';
import PageNav from './components/PageNav';
import Logo from './components/Logo';
import Footer from './components/Footer';

(function() {
  const throttle = function(type, name, obj = window) {
    let running = false;

    const func = () => {
      if (running) {
        return;
      }

      running = true;
      requestAnimationFrame(() => {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };

    obj.addEventListener(type, func);
  };

  throttle('resize', 'optimizedResize');
})();

export default function BasicLayout({ children }) {
  const getDevice = width => {
    const isPhone =
      typeof navigator !== 'undefined' && navigator && navigator.userAgent.match(/phone/gi);

    if (width < 680 || isPhone) {
      return 'phone';
    }
    if (width < 1280 && width > 680) {
      return 'tablet';
    }
    return 'desktop';
  };

  const [device, setDevice] = useState(getDevice(NaN));
  window.addEventListener('optimizedResize', e => {
    setDevice(getDevice(e && e.target && e.target.innerWidth));
  });
  return (
    <ConfigProvider device={device}>
      <Shell
        type="dark"
        style={{
          minHeight: '100vh',
        }}
      >
        <Shell.Branding>
          <Logo
            image="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png"
            text="Logo"
          />
        </Shell.Branding>
        <Shell.Navigation
          direction="hoz"
          style={{
            marginRight: 10,
          }}
        ></Shell.Navigation>
        <Shell.Action></Shell.Action>
        <Shell.Navigation>
          <PageNav />
        </Shell.Navigation>

        <Shell.Content>{children}</Shell.Content>
        <Shell.Footer>
          <Footer />
        </Shell.Footer>
      </Shell>
    </ConfigProvider>
  );
}
    `
      );
      return [["src", "layouts", "BasicLayout"], file2];
    }
    function getFile172() {
      const file2 = createResultFile2(
        "menuConfig",
        "js",
        `
const headerMenuConfig = [];
const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/',
    icon: 'smile',
  },
];
export { headerMenuConfig, asideMenuConfig };
    `
      );
      return [["src", "layouts", "BasicLayout"], file2];
    }
    function getFile182() {
      const file2 = createResultFile2(
        ".stylelintignore",
        "",
        `
# \u5FFD\u7565\u76EE\u5F55
build/
tests/
demo/

# node \u8986\u76D6\u7387\u6587\u4EF6
coverage/
    `
      );
      return [[], file2];
    }
    function getFile192() {
      const file2 = createResultFile2(
        ".stylelintrc",
        "js",
        `
const { stylelint } = require('@ice/spec');

module.exports = stylelint;
    `
      );
      return [[], file2];
    }
    function getFile202() {
      const file2 = createResultFile2(
        "tsconfig",
        "json",
        `
{
  "compileOnSave": false,
  "buildOnSave": false,
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "build",
    "module": "esnext",
    "target": "es6",
    "jsx": "react",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "lib": ["es6", "dom"],
    "sourceMap": true,
    "allowJs": true,
    "rootDir": "./",
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": false,
    "importHelpers": true,
    "strictNullChecks": true,
    "suppressImplicitAnyIndexErrors": true,
    "noUnusedLocals": true,
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./src/*"],
      "ice": [".ice/index.ts"],
      "ice/*": [".ice/pages/*"]
    }
  },
  "include": ["src/*", ".ice"],
  "exclude": ["node_modules", "build", "public"]
}
    `
      );
      return [[], file2];
    }
    function generateStaticFiles2(root = createResultDir4(".")) {
      runFileGenerator2(root, getFile202);
      runFileGenerator2(root, getFile192);
      runFileGenerator2(root, getFile182);
      runFileGenerator2(root, getFile92);
      runFileGenerator2(root, getFile82);
      runFileGenerator2(root, getFile710);
      runFileGenerator2(root, getFile610);
      runFileGenerator2(root, getFile510);
      runFileGenerator2(root, getFile410);
      runFileGenerator2(root, getFile310);
      runFileGenerator2(root, getFile210);
      runFileGenerator2(root, getFile81);
      runFileGenerator2(root, getFile102);
      runFileGenerator2(root, getFile162);
      runFileGenerator2(root, getFile172);
      runFileGenerator2(root, getFile112);
      runFileGenerator2(root, getFile122);
      runFileGenerator2(root, getFile132);
      runFileGenerator2(root, getFile142);
      runFileGenerator2(root, getFile152);
      return root;
    }
    var icejsTemplate = {
      slots: {
        components: {
          path: ["src", "components"]
        },
        pages: {
          path: ["src", "pages"]
        },
        router: {
          path: ["src"],
          fileName: "routes"
        },
        entry: {
          path: ["src"],
          fileName: "app"
        },
        constants: {
          path: ["src"],
          fileName: "constants"
        },
        utils: {
          path: ["src"],
          fileName: "utils"
        },
        i18n: {
          path: ["src"],
          fileName: "i18n"
        },
        globalStyle: {
          path: ["src"],
          fileName: "global"
        },
        htmlEntry: {
          path: ["public"],
          fileName: "index"
        },
        packageJSON: {
          path: [],
          fileName: "package"
        }
      },
      generateTemplate() {
        return generateStaticFiles2();
      }
    };
    var template_default2 = icejsTemplate;
    var pluginFactory18 = () => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        next.chunks.push({
          type: "string",
          fileType: "js",
          name: COMMON_CHUNK_NAME2.ExternalDepsImport,
          content: `
        import { createApp } from 'ice';
      `,
          linkAfter: []
        });
        next.chunks.push({
          type: "string",
          fileType: "js",
          name: COMMON_CHUNK_NAME2.FileMainContent,
          content: `
        const appConfig = {
          app: {
            rootId: 'app',
          },
          router: {
            type: 'hash',
          },
        };
        createApp(appConfig);
      `,
          linkAfter: [
            COMMON_CHUNK_NAME2.ExternalDepsImport,
            COMMON_CHUNK_NAME2.InternalDepsImport,
            COMMON_CHUNK_NAME2.ImportAliasDefine,
            COMMON_CHUNK_NAME2.FileVarDefine,
            COMMON_CHUNK_NAME2.FileUtilDefine
          ]
        });
        return next;
      };
      return plugin;
    };
    var entry_default = pluginFactory18;
    var pluginFactory19 = () => {
      const plugin = async (pre) => {
        var _a;
        const next = {
          ...pre
        };
        const ir = next.ir;
        next.chunks.push({
          type: "string",
          fileType: "html",
          name: COMMON_CHUNK_NAME2.HtmlContent,
          content: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1" />
            <meta name="viewport" content="width=device-width" />
            <title>${((_a = ir == null ? void 0 : ir.meta) == null ? void 0 : _a.name) || "Ice App"}</title>
          </head>
          <body>
            <div id="app"></div>
          </body>
        </html>
      `,
          linkAfter: []
        });
        return next;
      };
      return plugin;
    };
    var entryHtml_default = pluginFactory19;
    var pluginFactory20 = () => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        next.chunks.push({
          type: "string",
          fileType: "scss",
          name: COMMON_CHUNK_NAME2.StyleDepsImport,
          content: `
        // \u5F15\u5165\u9ED8\u8BA4\u5168\u5C40\u6837\u5F0F
        @import '@alifd/next/reset.scss';
      `,
          linkAfter: []
        });
        next.chunks.push({
          type: "string",
          fileType: "scss",
          name: COMMON_CHUNK_NAME2.StyleCssContent,
          content: `
        body {
          -webkit-font-smoothing: antialiased;
        }
      `,
          linkAfter: [COMMON_CHUNK_NAME2.StyleDepsImport]
        });
        next.chunks.push({
          type: "string",
          fileType: "scss",
          name: COMMON_CHUNK_NAME2.StyleCssContent,
          content: ir.css || "",
          linkAfter: [COMMON_CHUNK_NAME2.StyleDepsImport]
        });
        return next;
      };
      return plugin;
    };
    var globalStyle_default = pluginFactory20;
    var dataSource_exports = {};
    __export2(dataSource_exports, {
      buildDataSourceDependencies: () => buildDataSourceDependencies2
    });
    var import_change_case6 = __toESM2(require("change-case"));
    function buildDataSourceDependencies2(ir, cfg = {}) {
      return {
        [cfg.enginePackage || "@alilc/lowcode-datasource-engine"]: cfg.engineVersion || "^1.0.0",
        ...(ir.dataSourcesTypes || []).reduce(
          (acc, dsType) => {
            var _a;
            return {
              ...acc,
              [getDataSourceHandlerPackageName(dsType)]: ((_a = cfg.handlersVersion) == null ? void 0 : _a[dsType]) || "^1.0.0"
            };
          },
          {}
        )
      };
      function getDataSourceHandlerPackageName(dsType) {
        var _a;
        return ((_a = cfg.handlersPackages) == null ? void 0 : _a[dsType]) || `@alilc/lowcode-datasource-${import_change_case6.default.kebab(dsType)}-handler`;
      }
    }
    var pluginFactory21 = (cfg) => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        const packageJson = {
          name: (cfg == null ? void 0 : cfg.packageName) || "icejs-demo-app",
          version: (cfg == null ? void 0 : cfg.packageVersion) || "0.1.5",
          description: "\u8F7B\u91CF\u7EA7\u6A21\u677F\uFF0C\u4F7F\u7528 JavaScript\uFF0C\u4EC5\u5305\u542B\u57FA\u7840\u7684 Layout\u3002",
          dependencies: {
            moment: "^2.24.0",
            react: "^16.4.1",
            "react-dom": "^16.4.1",
            "react-router": "^5.2.1",
            "@alifd/theme-design-pro": "^0.x",
            "intl-messageformat": "^9.3.6",
            "@ice/store": "^1.4.3",
            "@loadable/component": "^5.15.2",
            ...buildDataSourceDependencies2(ir, cfg == null ? void 0 : cfg.datasourceConfig)
          },
          devDependencies: {
            "@ice/spec": "^1.0.0",
            "build-plugin-fusion": "^0.1.0",
            "build-plugin-moment-locales": "^0.1.0",
            eslint: "^6.0.1",
            "ice.js": "^1.0.0",
            stylelint: "^13.2.0"
          },
          scripts: {
            start: "icejs start",
            build: "icejs build",
            lint: "npm run eslint && npm run stylelint",
            eslint: "eslint --cache --ext .js,.jsx ./",
            stylelint: "stylelint ./**/*.scss"
          },
          ideMode: {
            name: "ice-react"
          },
          iceworks: {
            type: "react",
            adapter: "adapter-react-v3"
          },
          engines: {
            node: ">=8.0.0"
          },
          repository: {
            type: "git",
            url: "http://gitlab.xxx.com/msd/leak-scan/tree/master"
          },
          private: true,
          originTemplate: "@alifd/scaffold-lite-js"
        };
        ir.packages.forEach((packageInfo) => {
          packageJson.dependencies[packageInfo.package] = packageInfo.version;
        });
        next.chunks.push({
          type: "json",
          fileType: "json",
          name: COMMON_CHUNK_NAME2.FileMainContent,
          content: packageJson,
          linkAfter: []
        });
        return next;
      };
      return plugin;
    };
    var packageJSON_default = pluginFactory21;
    var pluginFactory222 = () => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        next.chunks.push({
          type: "string",
          fileType: "js",
          name: COMMON_CHUNK_NAME2.InternalDepsImport,
          content: `
        import BasicLayout from '@/layouts/BasicLayout';
      `,
          linkAfter: [COMMON_CHUNK_NAME2.ExternalDepsImport]
        });
        next.chunks.push({
          type: "string",
          fileType: "js",
          name: COMMON_CHUNK_NAME2.FileVarDefine,
          content: `
        const routerConfig = [
          {
            path: '/',
            component: BasicLayout,
            children: [
              ${ir.routes.map(
            (route) => `
                    {
                      path: '${route.path}',
                      component: ${route.componentName},
                    }
                  `
          ).join(",")}
            ],
          },
        ];
      `,
          linkAfter: [
            COMMON_CHUNK_NAME2.ExternalDepsImport,
            COMMON_CHUNK_NAME2.InternalDepsImport,
            COMMON_CHUNK_NAME2.ImportAliasDefine,
            COMMON_CHUNK_NAME2.FileUtilDefine
          ]
        });
        next.chunks.push({
          type: "string",
          fileType: "js",
          name: COMMON_CHUNK_NAME2.FileExport,
          content: `
        export default routerConfig;
      `,
          linkAfter: [
            COMMON_CHUNK_NAME2.ExternalDepsImport,
            COMMON_CHUNK_NAME2.InternalDepsImport,
            COMMON_CHUNK_NAME2.FileUtilDefine,
            COMMON_CHUNK_NAME2.ImportAliasDefine,
            COMMON_CHUNK_NAME2.FileVarDefine,
            COMMON_CHUNK_NAME2.FileMainContent
          ]
        });
        return next;
      };
      return plugin;
    };
    var router_default = pluginFactory222;
    var icejs_default = {
      template: template_default2,
      plugins: {
        entry: entry_default,
        entryHtml: entryHtml_default,
        globalStyle: globalStyle_default,
        packageJSON: packageJSON_default,
        router: router_default
      }
    };
    var import_prettier2 = __toESM2(require("prettier"));
    var import_parser_babel2 = __toESM2(require("prettier/parser-babel"));
    var import_parser_postcss2 = __toESM2(require("prettier/parser-postcss"));
    var import_parser_html2 = __toESM2(require("prettier/parser-html"));
    var PARSERS2 = ["css", "scss", "less", "json", "html", "vue"];
    var factory2 = (config) => {
      const cfg = {
        customFileTypeParser: {},
        ...config
      };
      const codePrettier = (content, fileType) => {
        let parser3;
        if (fileType === "js" || fileType === "jsx" || fileType === "ts" || fileType === "tsx") {
          parser3 = "babel-ts";
        } else if (fileType === "json") {
          parser3 = "json-stringify";
        } else if (PARSERS2.indexOf(fileType) >= 0) {
          parser3 = fileType;
        } else if (cfg.customFileTypeParser[fileType]) {
          parser3 = cfg.customFileTypeParser[fileType];
        } else {
          return content;
        }
        return import_prettier2.default.format(content, {
          parser: parser3,
          plugins: [import_parser_babel2.default, import_parser_postcss2.default, import_parser_html2.default, ...cfg.plugins || []],
          singleQuote: true,
          jsxSingleQuote: false
        });
      };
      return codePrettier;
    };
    var prettier_default = factory2;
    function createIceJsProjectBuilder2(options) {
      return createProjectBuilder2({
        inStrictMode: options == null ? void 0 : options.inStrictMode,
        extraContextData: { ...options },
        template: icejs_default.template,
        plugins: {
          components: [
            reactCommonDeps_default(),
            esmodule_default({
              fileType: "jsx"
            }),
            styleImport_default(),
            containerClass_default(),
            containerInjectContext_default(),
            containerInjectUtils_default(),
            containerInjectDataSourceEngine_default(),
            containerInjectI18n_default(),
            containerInjectConstants_default(),
            containerInitState_default(),
            containerLifeCycle_default(),
            containerMethod_default(),
            jsx_default({
              nodeTypeMapping: {
                Div: "div",
                Component: "div",
                Page: "div",
                Block: "div"
              }
            }),
            css_default()
          ],
          pages: [
            reactCommonDeps_default(),
            esmodule_default({
              fileType: "jsx"
            }),
            styleImport_default(),
            containerClass_default(),
            containerInjectContext_default(),
            containerInjectUtils_default(),
            containerInjectDataSourceEngine_default(),
            containerInjectI18n_default(),
            containerInjectConstants_default(),
            containerInitState_default(),
            containerLifeCycle_default(),
            containerMethod_default(),
            jsx_default({
              nodeTypeMapping: {
                Div: "div",
                Component: "div",
                Page: "div",
                Block: "div"
              }
            }),
            css_default()
          ],
          router: [esmodule_default(), icejs_default.plugins.router()],
          entry: [icejs_default.plugins.entry()],
          constants: [constants_default()],
          utils: [esmodule_default(), utils_default("react")],
          i18n: [i18n_default()],
          globalStyle: [icejs_default.plugins.globalStyle()],
          htmlEntry: [icejs_default.plugins.entryHtml()],
          packageJSON: [icejs_default.plugins.packageJSON()]
        },
        postProcessors: [prettier_default()],
        customizeBuilderOptions: options == null ? void 0 : options.customizeBuilderOptions
      });
    }
    var plugins2 = {
      containerClass: containerClass_default,
      containerInjectContext: containerInjectContext_default,
      containerInjectUtils: containerInjectUtils_default,
      containerInjectDataSourceEngine: containerInjectDataSourceEngine_default,
      containerInjectI18n: containerInjectI18n_default,
      containerInjectConstants: containerInjectConstants_default,
      containerInitState: containerInitState_default,
      containerLifeCycle: containerLifeCycle_default,
      containerMethod: containerMethod_default,
      jsx: jsx_default,
      commonDeps: reactCommonDeps_default,
      reactCommonDeps: reactCommonDeps_default
    };
    function getFile212() {
      const file2 = createResultFile2(
        ".gitignore",
        "",
        `
# See https://help.github.com/ignore-files/ for more about ignoring files.

# dependencies
node_modules/

# production
build/
dist/
tmp/
lib/

# misc
.idea/
.happypack
.DS_Store
*.swp
*.dia~
.ice

npm-debug.log*
yarn-debug.log*
yarn-error.log*
index.module.scss.d.ts
    `
      );
      return [[], file2];
    }
    function getFile222() {
      const file2 = createResultFile2(
        "README",
        "md",
        "This project is generated by lowcode-code-generator & lowcode-solution-icejs3."
      );
      return [[], file2];
    }
    function getFile232() {
      const file2 = createResultFile2(
        ".browserslistrc",
        "",
        `defaults
ios_saf 9
    `
      );
      return [[], file2];
    }
    function getFile242() {
      const file2 = createResultFile2(
        "typings.d",
        "ts",
        `/// <reference types="@ice/app/types" />

export {};
declare global {
  interface Window {
    g_config: Record<string, any>;
  }
}
    `
      );
      return [["src"], file2];
    }
    function getFile252() {
      const file2 = createResultFile2(
        "document",
        "tsx",
        `import React from 'react';
import { Meta, Title, Links, Main, Scripts } from 'ice';

export default function Document() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="ice.js 3 lite scaffold" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="//alifd.alicdn.com/npm/@alifd/next/1.21.16/next.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <Meta />
        <Title />
        <Links />
      </head>
      <body>
        <Main />
        <script crossOrigin="anonymous" src="//g.alicdn.com/code/lib/react/18.2.0/umd/react.development.js" />
        <script crossOrigin="anonymous" src="//g.alicdn.com/code/lib/react-dom/18.2.0/umd/react-dom.development.js" />
        <script crossOrigin="anonymous" src="//g.alicdn.com/code/lib/??react-router/6.9.0/react-router.production.min.js,react-router-dom/6.9.0/react-router-dom.production.min.js" />
        <script crossOrigin="anonymous" src="//g.alicdn.com/code/lib/alifd__next/1.26.22/next.min.js" />
        <script crossOrigin="anonymous" src="//g.alicdn.com/code/lib/prop-types/15.7.2/prop-types.js" />
        <script crossOrigin="anonymous" src="//g.alicdn.com/platform/c/??lodash/4.6.1/lodash.min.js,immutable/3.7.6/dist/immutable.min.js" />
        <Scripts />
      </body>
    </html>
  );
}`
      );
      return [["src"], file2];
    }
    function getFile262() {
      const file2 = createResultFile2(
        "index",
        "jsx",
        `
import React from 'react';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <p className={styles.footer}>
      <span className={styles.logo}>Alibaba Fusion</span>
      <br />
      <span className={styles.copyright}>\xA9 2019-\u73B0\u5728 Alibaba Fusion & ICE</span>
    </p>
  );
}
    `
      );
      return [["src", "layouts", "BasicLayout", "components", "Footer"], file2];
    }
    function getFile272() {
      const file2 = createResultFile2(
        "index",
        "module.scss",
        `
.footer {
  line-height: 20px;
  text-align: center;
}

.logo {
  font-weight: bold;
  font-size: 16px;
}

.copyright {
  font-size: 12px;
}
    `
      );
      return [["src", "layouts", "BasicLayout", "components", "Footer"], file2];
    }
    function getFile282() {
      const file2 = createResultFile2(
        "index",
        "jsx",
        `
import React from 'react';
import { Link } from 'ice';
import styles from './index.module.scss';

export default function Logo({ image, text, url }) {
  return (
    <div className="logo">
      <Link to={url || '/'} className={styles.logo}>
        {image && <img src={image} alt="logo" />}
        <span>{text}</span>
      </Link>
    </div>
  );
}
    `
      );
      return [["src", "layouts", "BasicLayout", "components", "Logo"], file2];
    }
    function getFile292() {
      const file2 = createResultFile2(
        "index",
        "module.scss",
        `
.logo{
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FF7300;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;

  &:visited, &:link {
    color: #FF7300;
  }

  img {
    height: 24px;
    margin-right: 10px;
  }
}
    `
      );
      return [["src", "layouts", "BasicLayout", "components", "Logo"], file2];
    }
    function getFile302() {
      const file2 = createResultFile2(
        "index",
        "jsx",
        `import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'ice';
import { Nav } from '@alifd/next';
import { asideMenuConfig } from '../../menuConfig';

const { SubNav } = Nav;
const NavItem = Nav.Item;

function getNavMenuItems(menusData) {
  if (!menusData) {
    return [];
  }

  return menusData
    .filter(item => item.name && !item.hideInMenu)
    .map((item, index) => getSubMenuOrItem(item, index));
}

function getSubMenuOrItem(item, index) {
  if (item.children && item.children.some(child => child.name)) {
    const childrenItems = getNavMenuItems(item.children);

    if (childrenItems && childrenItems.length > 0) {
      const subNav = (
        <SubNav key={index} icon={item.icon} label={item.name}>
          {childrenItems}
        </SubNav>
      );
      return subNav;
    }

    return null;
  }

  const navItem = (
    <NavItem key={item.path} icon={item.icon}>
      <Link to={item.path}>{item.name}</Link>
    </NavItem>
  );
  return navItem;
}

const Navigation = (props, context) => {
  const location = useLocation();
  const { pathname } = location;
  const { isCollapse } = context;
  return (
    <Nav
      type="primary"
      selectedKeys={[pathname]}
      defaultSelectedKeys={[pathname]}
      embeddable
      openMode="single"
      iconOnly={isCollapse}
      hasArrow={false}
      mode={isCollapse ? 'popup' : 'inline'}
    >
      {getNavMenuItems(asideMenuConfig)}
    </Nav>
  );
};

Navigation.contextTypes = {
  isCollapse: PropTypes.bool,
};
export default Navigation;
    `
      );
      return [["src", "layouts", "BasicLayout", "components", "PageNav"], file2];
    }
    function getFile312() {
      const file2 = createResultFile2(
        "index",
        "jsx",
        `
import React, { useState } from 'react';
import { Shell, ConfigProvider } from '@alifd/next';
import PageNav from './components/PageNav';
import Logo from './components/Logo';
import Footer from './components/Footer';

(function() {
  const throttle = function(type, name, obj = window) {
    let running = false;

    const func = () => {
      if (running) {
        return;
      }

      running = true;
      requestAnimationFrame(() => {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };

    obj.addEventListener(type, func);
  };

  throttle('resize', 'optimizedResize');
})();

export default function BasicLayout({ children }) {
  const getDevice = width => {
    const isPhone =
      typeof navigator !== 'undefined' && navigator && navigator.userAgent.match(/phone/gi);

    if (width < 680 || isPhone) {
      return 'phone';
    }
    if (width < 1280 && width > 680) {
      return 'tablet';
    }
    return 'desktop';
  };

  const [device, setDevice] = useState(getDevice(NaN));
  window.addEventListener('optimizedResize', e => {
    setDevice(getDevice(e && e.target && e.target.innerWidth));
  });
  return (
    <ConfigProvider device={device}>
      <Shell
        type="dark"
        style={{
          minHeight: '100vh',
        }}
      >
        <Shell.Branding>
          <Logo
            image="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png"
            text="Logo"
          />
        </Shell.Branding>
        <Shell.Navigation
          direction="hoz"
          style={{
            marginRight: 10,
          }}
        ></Shell.Navigation>
        <Shell.Action></Shell.Action>
        <Shell.Navigation>
          <PageNav />
        </Shell.Navigation>

        <Shell.Content>{children}</Shell.Content>
        <Shell.Footer>
          <Footer />
        </Shell.Footer>
      </Shell>
    </ConfigProvider>
  );
}
    `
      );
      return [["src", "layouts", "BasicLayout"], file2];
    }
    function getFile322() {
      const file2 = createResultFile2(
        "menuConfig",
        "js",
        `
const headerMenuConfig = [];
const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/',
    icon: 'smile',
  },
];
export { headerMenuConfig, asideMenuConfig };
    `
      );
      return [["src", "layouts", "BasicLayout"], file2];
    }
    function generateStaticFiles22(root = createResultDir4(".")) {
      runFileGenerator2(root, getFile212);
      runFileGenerator2(root, getFile222);
      runFileGenerator2(root, getFile232);
      runFileGenerator2(root, getFile242);
      runFileGenerator2(root, getFile252);
      runFileGenerator2(root, getFile262);
      runFileGenerator2(root, getFile272);
      runFileGenerator2(root, getFile282);
      runFileGenerator2(root, getFile292);
      runFileGenerator2(root, getFile302);
      runFileGenerator2(root, getFile312);
      runFileGenerator2(root, getFile322);
      return root;
    }
    var icejs3Template = {
      slots: {
        components: {
          path: ["src", "components"],
          fileName: "index"
        },
        pages: {
          path: ["src", "pages"],
          fileName: "index"
        },
        entry: {
          path: ["src"],
          fileName: "app"
        },
        constants: {
          path: ["src"],
          fileName: "constants"
        },
        utils: {
          path: ["src"],
          fileName: "utils"
        },
        i18n: {
          path: ["src"],
          fileName: "i18n"
        },
        globalStyle: {
          path: ["src"],
          fileName: "global"
        },
        packageJSON: {
          path: [],
          fileName: "package"
        },
        appConfig: {
          path: ["src"],
          fileName: "app"
        },
        buildConfig: {
          path: [],
          fileName: "ice.config"
        },
        layout: {
          path: ["src", "pages"],
          fileName: "layout"
        }
      },
      generateTemplate() {
        return generateStaticFiles22();
      }
    };
    var template_default22 = icejs3Template;
    var pluginFactory23 = () => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        next.chunks.push({
          type: "string",
          fileType: "scss",
          name: COMMON_CHUNK_NAME2.StyleDepsImport,
          content: `
        // \u5F15\u5165\u9ED8\u8BA4\u5168\u5C40\u6837\u5F0F
        @import '@alifd/next/reset.scss';
      `,
          linkAfter: []
        });
        next.chunks.push({
          type: "string",
          fileType: "scss",
          name: COMMON_CHUNK_NAME2.StyleCssContent,
          content: `
        body {
          -webkit-font-smoothing: antialiased;
        }
      `,
          linkAfter: [COMMON_CHUNK_NAME2.StyleDepsImport]
        });
        next.chunks.push({
          type: "string",
          fileType: "scss",
          name: COMMON_CHUNK_NAME2.StyleCssContent,
          content: ir.css || "",
          linkAfter: [COMMON_CHUNK_NAME2.StyleDepsImport]
        });
        return next;
      };
      return plugin;
    };
    var globalStyle_default2 = pluginFactory23;
    var pluginFactory24 = (cfg) => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        const packageJson = {
          name: (cfg == null ? void 0 : cfg.packageName) || "icejs3-demo-app",
          version: (cfg == null ? void 0 : cfg.packageVersion) || "0.1.5",
          description: "icejs 3 \u8F7B\u91CF\u7EA7\u6A21\u677F\uFF0C\u4F7F\u7528 JavaScript\uFF0C\u4EC5\u5305\u542B\u57FA\u7840\u7684 Layout\u3002",
          dependencies: {
            moment: "^2.24.0",
            react: "^18.2.0",
            "react-dom": "^18.2.0",
            "react-router": "^6.9.0",
            "react-router-dom": "^6.9.0",
            "intl-messageformat": "^9.3.6",
            "@alifd/next": "1.26.15",
            "@ice/runtime": "~1.1.0",
            ...buildDataSourceDependencies2(ir, cfg == null ? void 0 : cfg.datasourceConfig)
          },
          devDependencies: {
            "@ice/app": "~3.1.0",
            "@types/react": "^18.0.0",
            "@types/react-dom": "^18.0.0",
            "@types/node": "^18.11.17",
            "@ice/plugin-fusion": "^1.0.1",
            "@ice/plugin-moment-locales": "^1.0.0",
            eslint: "^6.0.1",
            stylelint: "^13.2.0"
          },
          scripts: {
            start: "ice start",
            build: "ice build",
            lint: "npm run eslint && npm run stylelint",
            eslint: "eslint --cache --ext .js,.jsx ./",
            stylelint: "stylelint ./**/*.scss"
          },
          engines: {
            node: ">=14.0.0"
          },
          repository: {
            type: "git",
            url: "http://gitlab.xxx.com/msd/leak-scan/tree/master"
          },
          private: true,
          originTemplate: "@alifd/scaffold-lite-js"
        };
        ir.packages.forEach((packageInfo) => {
          packageJson.dependencies[packageInfo.package] = packageInfo.version;
        });
        next.chunks.push({
          type: "json",
          fileType: "json",
          name: COMMON_CHUNK_NAME2.FileMainContent,
          content: packageJson,
          linkAfter: []
        });
        return next;
      };
      return plugin;
    };
    var packageJSON_default2 = pluginFactory24;
    var pluginFactory25 = () => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: COMMON_CHUNK_NAME2.FileMainContent,
          content: `
      import { Outlet } from 'ice';
      import BasicLayout from '@/layouts/BasicLayout';

      export default function Layout() {
        return (
          <BasicLayout>
            <Outlet />
          </BasicLayout>
        );;
      }
      `,
          linkAfter: []
        });
        return next;
      };
      return plugin;
    };
    var layout_default = pluginFactory25;
    function getContent() {
      return `import { defineAppConfig } from 'ice';

// App config, see https://v3.ice.work/docs/guide/basic/app
export default defineAppConfig(() => ({
  // Set your configs here.
  app: {
    rootId: 'App',
  },
  router: {
    type: 'browser',
    basename: '/',
  },
}));`;
    }
    var pluginFactory26 = () => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        next.chunks.push({
          type: "string",
          fileType: "ts",
          name: COMMON_CHUNK_NAME2.FileMainContent,
          content: getContent(),
          linkAfter: []
        });
        return next;
      };
      return plugin;
    };
    var appConfig_default = pluginFactory26;
    var import_prettier3 = __toESM2(require("prettier"));
    var import_parser_babel22 = __toESM2(require("prettier/parser-babel"));
    function format(content, options = {}) {
      return import_prettier3.default.format(content, {
        parser: "babel",
        plugins: [import_parser_babel22.default],
        singleQuote: true,
        jsxSingleQuote: false,
        ...options
      });
    }
    function getThemeInfo(theme) {
      const sepIdx = theme.indexOf("@", 1);
      if (sepIdx === -1) {
        return { name: theme };
      }
      return {
        name: theme.slice(0, sepIdx),
        version: theme.slice(sepIdx + 1)
      };
    }
    function getContent2(cfg, routesContent) {
      return `
import { join } from 'path';
import { defineConfig } from '@ice/app';
import _ from 'lodash';
import fusion from '@ice/plugin-fusion';
import locales from '@ice/plugin-moment-locales';
import type { Plugin } from '@ice/app/esm/types';

interface PluginOptions {
  id: string;
}

const plugin: Plugin<PluginOptions> = (options) => ({
  // name \u53EF\u9009\uFF0C\u63D2\u4EF6\u540D\u79F0
  name: 'plugin-name',
  // setup \u5FC5\u9009\uFF0C\u7528\u4E8E\u5B9A\u5236\u5DE5\u7A0B\u6784\u5EFA\u914D\u7F6E
  setup: ({ onGetConfig, modifyUserConfig }) => {
    modifyUserConfig('codeSplitting', 'page');

    onGetConfig((config) => {
      config.entry = {
        web: join(process.cwd(), '.ice/entry.client.tsx'),
      };

      config.cssFilename = '[name].css';

      config.configureWebpack = config.configureWebpack || [];
      config.configureWebpack?.push((webpackConfig) => {
        if (webpackConfig.output) {
          webpackConfig.output.filename = '[name].js';
          webpackConfig.output.chunkFilename = '[name].js';
        }
        return webpackConfig;
      });

      config.swcOptions = _.merge(config.swcOptions, {
        compilationConfig: {
          jsc: {
            transform: {
              react: {
                runtime: 'classic',
              },
            },
          },
        }
      });

      // \u89E3\u51B3 webpack publicPath \u95EE\u9898
      config.transforms = config.transforms || [];
      config.transforms.push((source: string, id: string) => {
        if (id.includes('.ice/entry.client.tsx')) {
          let code = \`
          if (!__webpack_public_path__?.startsWith('http') && document.currentScript) {
            // @ts-ignore
            __webpack_public_path__ = document.currentScript.src.replace(/^(.*\\\\/)[^/]+$/, '$1');
            window.__ICE_ASSETS_MANIFEST__ = window.__ICE_ASSETS_MANIFEST__ || {};
            window.__ICE_ASSETS_MANIFEST__.publicPath = __webpack_public_path__;
          }
          \`;
          code += source;
          return { code };
        }
      });
    });
  },
});

// The project config, see https://v3.ice.work/docs/guide/basic/config
const minify = process.env.NODE_ENV === 'production' ? 'swc' : false;
export default defineConfig(() => ({
  ssr: false,
  ssg: false,
  minify,
  ${routesContent}
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-dom/client': 'ReactDOM',
    '@alifd/next': 'Next',
    lodash: 'var window._',
    '@alilc/lowcode-engine': 'var window.AliLowCodeEngine',
  },
  plugins: [
    fusion(${(cfg == null ? void 0 : cfg.themePackage) ? `{
      importStyle: 'sass',
      themePackage: '${getThemeInfo(cfg.themePackage).name}',
    }` : `{
      importStyle: 'sass',
    }`}),
    locales(),
    plugin(),
  ]
}));
  `;
    }
    function getRoutesContent(navData, needShell = true) {
      const routes = [
        "routes: {",
        "  defineRoutes: route => {"
      ];
      function _getRoutes(nav, _routes = []) {
        const { slug, children } = nav;
        if (children && children.length > 0) {
          children.forEach((_nav) => _getRoutes(_nav, _routes));
        } else if (slug) {
          _routes.push(`route('/${slug}', '${slug}/index.jsx');`);
        }
      }
      if (needShell) {
        routes.push("    route('/', 'layout.jsx', () => {");
      }
      navData == null ? void 0 : navData.forEach((nav) => {
        _getRoutes(nav, routes);
      });
      if (needShell) {
        routes.push("    });");
      }
      routes.push("  }");
      routes.push("  },");
      return routes.join("\n");
    }
    var pluginFactory27 = (cfg) => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const { navConfig } = next.contextData;
        const routesContent = (navConfig == null ? void 0 : navConfig.data) ? getRoutesContent(navConfig.data, true) : "";
        next.chunks.push({
          type: "string",
          fileType: "mts",
          name: COMMON_CHUNK_NAME2.FileMainContent,
          content: format(getContent2(cfg, routesContent)),
          linkAfter: []
        });
        return next;
      };
      return plugin;
    };
    var buildConfig_default = pluginFactory27;
    var icejs3_default = {
      template: template_default22,
      plugins: {
        appConfig: appConfig_default,
        buildConfig: buildConfig_default,
        globalStyle: globalStyle_default2,
        packageJSON: packageJSON_default2,
        layout: layout_default
      }
    };
    function createIceJsProjectBuilder22(options) {
      return createProjectBuilder2({
        inStrictMode: options == null ? void 0 : options.inStrictMode,
        extraContextData: { ...options },
        template: icejs3_default.template,
        plugins: {
          components: [
            reactCommonDeps_default(),
            esmodule_default({
              fileType: "jsx"
            }),
            styleImport_default(),
            containerClass_default(),
            containerInjectContext_default(),
            containerInjectUtils_default(),
            containerInjectDataSourceEngine_default(),
            containerInjectI18n_default(),
            containerInjectConstants_default(),
            containerInitState_default(),
            containerLifeCycle_default(),
            containerMethod_default(),
            jsx_default({
              nodeTypeMapping: {
                Div: "div",
                Component: "div",
                Page: "div",
                Block: "div"
              }
            }),
            css_default()
          ],
          pages: [
            reactCommonDeps_default(),
            esmodule_default({
              fileType: "jsx"
            }),
            styleImport_default(),
            containerClass_default(),
            containerInjectContext_default(),
            containerInjectUtils_default(),
            containerInjectDataSourceEngine_default(),
            containerInjectI18n_default(),
            containerInjectConstants_default(),
            containerInitState_default(),
            containerLifeCycle_default(),
            containerMethod_default(),
            jsx_default({
              nodeTypeMapping: {
                Div: "div",
                Component: "div",
                Page: "div",
                Block: "div",
                Box: "div"
              }
            }),
            css_default()
          ],
          constants: [constants_default()],
          utils: [esmodule_default(), utils_default("react")],
          i18n: [i18n_default()],
          globalStyle: [icejs3_default.plugins.globalStyle()],
          packageJSON: [icejs3_default.plugins.packageJSON()],
          buildConfig: [icejs3_default.plugins.buildConfig()],
          appConfig: [icejs3_default.plugins.appConfig()],
          layout: [icejs3_default.plugins.layout()]
        },
        postProcessors: [prettier_default()],
        customizeBuilderOptions: options == null ? void 0 : options.customizeBuilderOptions
      });
    }
    var plugins22 = {
      containerClass: containerClass_default,
      containerInitState: containerInitState_default,
      containerInjectContext: containerInjectContext_default,
      containerInjectUtils: containerInjectUtils_default,
      containerInjectI18n: containerInjectI18n_default,
      containerInjectDataSourceEngine: containerInjectDataSourceEngine_default,
      containerLifeCycle: containerLifeCycle_default,
      containerMethod: containerMethod_default,
      jsx: jsx_default,
      commonDeps: reactCommonDeps_default
    };
    var import_change_case7 = __toESM2(require("change-case"));
    var RAX_CHUNK_NAME = {
      ClassDidMountBegin: "RaxComponentClassDidMountBegin",
      ClassDidMountContent: "RaxComponentClassDidMountContent",
      ClassDidMountEnd: "RaxComponentClassDidMountEnd",
      ClassWillUnmountBegin: "RaxComponentClassWillUnmountBegin",
      ClassWillUnmountContent: "RaxComponentClassWillUnmountContent",
      ClassWillUnmountEnd: "RaxComponentClassWillUnmountEnd",
      ClassRenderBegin: "RaxComponentClassRenderBegin",
      ClassRenderPre: "RaxComponentClassRenderPre",
      ClassRenderJSX: "RaxComponentClassRenderJSX",
      ClassRenderEnd: "RaxComponentClassRenderEnd",
      MethodsBegin: "RaxComponentMethodsBegin",
      MethodsContent: "RaxComponentMethodsContent",
      MethodsEnd: "RaxComponentMethodsEnd",
      LifeCyclesBegin: "RaxComponentLifeCyclesBegin",
      LifeCyclesContent: "RaxComponentLifeCyclesContent",
      LifeCyclesEnd: "RaxComponentLifeCyclesEnd"
    };
    var pluginFactory28 = () => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        const componentClassName = ensureValidClassName3(
          `${import_change_case7.default.pascalCase(ir.moduleName)}$$Page`
        );
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: CLASS_DEFINE_CHUNK_NAME2.Start,
          content: `class ${componentClassName} extends Component {`,
          linkAfter: [
            COMMON_CHUNK_NAME2.ExternalDepsImport,
            COMMON_CHUNK_NAME2.InternalDepsImport,
            COMMON_CHUNK_NAME2.ImportAliasDefine,
            COMMON_CHUNK_NAME2.FileVarDefine,
            COMMON_CHUNK_NAME2.FileUtilDefine
          ]
        });
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: CLASS_DEFINE_CHUNK_NAME2.End,
          content: "}",
          linkAfter: [
            CLASS_DEFINE_CHUNK_NAME2.Start,
            CLASS_DEFINE_CHUNK_NAME2.InsPrivateMethod,
            RAX_CHUNK_NAME.ClassRenderEnd,
            RAX_CHUNK_NAME.MethodsEnd
          ]
        });
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: CLASS_DEFINE_CHUNK_NAME2.ConstructorStart,
          content: "constructor(props, context) { super(props); ",
          linkAfter: DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.ConstructorStart]
        });
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: CLASS_DEFINE_CHUNK_NAME2.ConstructorEnd,
          content: "} /* end of constructor */",
          linkAfter: DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.ConstructorEnd]
        });
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: RAX_CHUNK_NAME.ClassDidMountBegin,
          content: "componentDidMount() {",
          linkAfter: [
            CLASS_DEFINE_CHUNK_NAME2.Start,
            CLASS_DEFINE_CHUNK_NAME2.InsVar,
            CLASS_DEFINE_CHUNK_NAME2.InsMethod,
            CLASS_DEFINE_CHUNK_NAME2.ConstructorEnd
          ]
        });
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: RAX_CHUNK_NAME.ClassDidMountEnd,
          content: "} /* end of componentDidMount */",
          linkAfter: [RAX_CHUNK_NAME.ClassDidMountBegin, RAX_CHUNK_NAME.ClassDidMountContent]
        });
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: RAX_CHUNK_NAME.ClassWillUnmountBegin,
          content: "componentWillUnmount() {",
          linkAfter: [
            CLASS_DEFINE_CHUNK_NAME2.Start,
            CLASS_DEFINE_CHUNK_NAME2.InsVar,
            CLASS_DEFINE_CHUNK_NAME2.InsMethod,
            RAX_CHUNK_NAME.ClassDidMountEnd
          ]
        });
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: RAX_CHUNK_NAME.ClassWillUnmountEnd,
          content: "} /* end of componentWillUnmount */",
          linkAfter: [RAX_CHUNK_NAME.ClassWillUnmountBegin, RAX_CHUNK_NAME.ClassWillUnmountContent]
        });
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: RAX_CHUNK_NAME.ClassRenderBegin,
          content: "render() {",
          linkAfter: [RAX_CHUNK_NAME.ClassDidMountEnd, RAX_CHUNK_NAME.ClassWillUnmountEnd]
        });
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: RAX_CHUNK_NAME.ClassRenderEnd,
          content: "} /* end of render */",
          linkAfter: [
            RAX_CHUNK_NAME.ClassRenderBegin,
            RAX_CHUNK_NAME.ClassRenderPre,
            RAX_CHUNK_NAME.ClassRenderJSX
          ]
        });
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: COMMON_CHUNK_NAME2.FileExport,
          content: `export default ${componentClassName};`,
          linkAfter: [
            COMMON_CHUNK_NAME2.ExternalDepsImport,
            COMMON_CHUNK_NAME2.InternalDepsImport,
            COMMON_CHUNK_NAME2.ImportAliasDefine,
            COMMON_CHUNK_NAME2.FileVarDefine,
            COMMON_CHUNK_NAME2.FileUtilDefine,
            CLASS_DEFINE_CHUNK_NAME2.End
          ]
        });
        return next;
      };
      return plugin;
    };
    var containerClass_default2 = pluginFactory28;
    var import_lodash5 = __toESM2(require("lodash"));
    var import_lowcode_types8 = require("@alilc/lowcode-types");
    var import_debug = __toESM2(require("debug"));
    var debug = (0, import_debug.default)("code-generator");
    var pluginFactory29 = (config) => {
      const cfg = {
        fileType: "jsx",
        exportNameMapping: {},
        normalizeNameMapping: {
          didMount: "componentDidMount",
          willUnmount: "componentWillUnmount"
        },
        ...config
      };
      const exportNameMapping = new Map(Object.entries(cfg.exportNameMapping));
      const normalizeNameMapping = new Map(Object.entries(cfg.normalizeNameMapping));
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        const { lifeCycles } = ir;
        if (lifeCycles && !import_lodash5.default.isEmpty(lifeCycles)) {
          Object.entries(lifeCycles).forEach(([lifeCycleName, lifeCycleMethodExpr]) => {
            if (!(0, import_lowcode_types8.isJSFunction)(lifeCycles[lifeCycleName]) && !isJSExpressionFn(lifeCycles[lifeCycleName]) && !(0, import_lowcode_types8.isJSExpression)(lifeCycles[lifeCycleName])) {
              return;
            }
            const normalizeName = normalizeNameMapping.get(lifeCycleName) || lifeCycleName;
            const exportName = exportNameMapping.get(lifeCycleName) || lifeCycleName;
            next.chunks.push({
              type: "string",
              fileType: cfg.fileType,
              name: RAX_CHUNK_NAME.LifeCyclesContent,
              content: `${exportName}: (${lifeCycleMethodExpr.value}),`,
              linkAfter: [RAX_CHUNK_NAME.LifeCyclesBegin]
            });
            if (normalizeName === "constructor") {
              next.chunks.push({
                type: "string",
                fileType: cfg.fileType,
                name: CLASS_DEFINE_CHUNK_NAME2.ConstructorContent,
                content: `this._lifeCycles.${exportName}();`,
                linkAfter: [CLASS_DEFINE_CHUNK_NAME2.ConstructorStart]
              });
            } else if (normalizeName === "componentDidMount") {
              next.chunks.push({
                type: "string",
                fileType: cfg.fileType,
                name: RAX_CHUNK_NAME.ClassDidMountContent,
                content: `this._lifeCycles.${exportName}();`,
                linkAfter: [RAX_CHUNK_NAME.ClassDidMountBegin]
              });
            } else if (normalizeName === "componentWillUnmount") {
              next.chunks.push({
                type: "string",
                fileType: cfg.fileType,
                name: RAX_CHUNK_NAME.ClassWillUnmountContent,
                content: `this._lifeCycles.${exportName}();`,
                linkAfter: [RAX_CHUNK_NAME.ClassWillUnmountBegin]
              });
            } else {
              debug(`[CodeGen]: unknown life cycle: ${lifeCycleName}`);
            }
          });
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME2.InsVar,
            content: "_lifeCycles = this._defineLifeCycles();",
            linkAfter: [CLASS_DEFINE_CHUNK_NAME2.Start]
          });
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: RAX_CHUNK_NAME.LifeCyclesBegin,
            content: `
          _defineLifeCycles() {
            const __$$lifeCycles = ({
        `,
            linkAfter: [RAX_CHUNK_NAME.ClassRenderEnd, CLASS_DEFINE_CHUNK_NAME2.InsPrivateMethod]
          });
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: RAX_CHUNK_NAME.LifeCyclesEnd,
            content: `
            });

            // \u4E3A\u6240\u6709\u7684\u65B9\u6CD5\u7ED1\u5B9A\u4E0A\u4E0B\u6587
            Object.entries(__$$lifeCycles).forEach(([lifeCycleName, lifeCycleMethod]) => {
              if (typeof lifeCycleMethod === 'function') {
                __$$lifeCycles[lifeCycleName] = (...args) => {
                  return lifeCycleMethod.apply(this._context, args);
                }
              }
            });

            return __$$lifeCycles;
          }
        `,
            linkAfter: [RAX_CHUNK_NAME.LifeCyclesBegin, RAX_CHUNK_NAME.LifeCyclesContent]
          });
        }
        return next;
      };
      return plugin;
    };
    var containerLifeCycle_default2 = pluginFactory29;
    var pluginFactory30 = (config) => {
      const cfg = {
        fileType: "jsx",
        ...config
      };
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME2.InsVar,
          content: `
         _methods = this._defineMethods();
      `,
          linkAfter: [CLASS_DEFINE_CHUNK_NAME2.Start]
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: RAX_CHUNK_NAME.MethodsBegin,
          content: `
        _defineMethods() {
          return ({
      `,
          linkAfter: [
            RAX_CHUNK_NAME.ClassRenderEnd,
            CLASS_DEFINE_CHUNK_NAME2.InsPrivateMethod,
            RAX_CHUNK_NAME.LifeCyclesEnd
          ]
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: RAX_CHUNK_NAME.MethodsEnd,
          content: `
          });
        }
      `,
          linkAfter: [RAX_CHUNK_NAME.MethodsBegin, RAX_CHUNK_NAME.MethodsContent]
        });
        if (ir.methods && Object.keys(ir.methods).length > 0) {
          Object.entries(ir.methods).forEach(([methodName, methodDefine]) => {
            next.chunks.push({
              type: "string",
              fileType: cfg.fileType,
              name: RAX_CHUNK_NAME.MethodsContent,
              content: `${methodName}: (${methodDefine.value}),`,
              linkAfter: [RAX_CHUNK_NAME.MethodsBegin]
            });
          });
        }
        return next;
      };
      return plugin;
    };
    var containerMethods_default = pluginFactory30;
    var pluginFactory31 = (config) => {
      const cfg = {
        fileType: "jsx",
        implementType: "insMember",
        ...config
      };
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        const scope = Scope2.createRootScope();
        const state = ir.state || {};
        const fields = Object.keys(state).map((stateName) => {
          const value = generateCompositeType2(state[stateName], scope);
          return `${JSON.stringify(stateName)}: ${value}`;
        });
        if (cfg.implementType === "inConstructor") {
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME2.ConstructorContent,
            content: `this.state = { ${fields.join(",")} };`,
            linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.ConstructorContent]]
          });
        } else if (cfg.implementType === "insMember") {
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME2.InsVar,
            content: `state = { ${fields.join(",")} };`,
            linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.InsVar]]
          });
        }
        return next;
      };
      return plugin;
    };
    var containerInitState_default2 = pluginFactory31;
    var pluginFactory322 = (config) => {
      const cfg = {
        fileType: "jsx",
        ...config
      };
      const plugin = async (pre) => {
        var _a;
        const next = {
          ...pre
        };
        const ir = next.ir;
        const useRef = !!((_a = ir.analyzeResult) == null ? void 0 : _a.isUsingRef);
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: COMMON_CHUNK_NAME2.InternalDepsImport,
          content: "import __$$constants from '../../constants';",
          linkAfter: [COMMON_CHUNK_NAME2.ExternalDepsImport]
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: COMMON_CHUNK_NAME2.InternalDepsImport,
          content: "import * as __$$i18n from '../../i18n';",
          linkAfter: [COMMON_CHUNK_NAME2.ExternalDepsImport]
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME2.ConstructorContent,
          content: `
        __$$i18n._inject2(this);
      `,
          linkAfter: [...DEFAULT_LINK_AFTER3[CLASS_DEFINE_CHUNK_NAME2.ConstructorContent]]
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME2.InsVar,
          content: `
        _context = this._createContext();
      `,
          linkAfter: [CLASS_DEFINE_CHUNK_NAME2.Start]
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME2.InsPrivateMethod,
          content: `
        _createContext() {
          const self = this;
          const context = {
            get state() {
              return self.state;
            },
            setState(newState, callback) {
              self.setState(newState, callback);
            },
            get dataSourceMap() {
              return self._dataSourceEngine.dataSourceMap || {};
            },
            async reloadDataSource() {
              await self._dataSourceEngine.reloadDataSource();
            },
            get utils() {
              return self._utils;
            },
            get page() {
              return context;
            },
            get component() {
              return context;
            },
            get props() {
              return self.props;
            },
            get constants() {
              return __$$constants;
            },
            i18n: __$$i18n.i18n,
            i18nFormat: __$$i18n.i18nFormat,
            getLocale: __$$i18n.getLocale,
            setLocale(locale) {
              __$$i18n.setLocale(locale);
              self.forceUpdate();
            },${useRef ? `
                  $(refName) {
                    return self._refsManager.get(refName);
                  },
                  $$(refName) {
                    return self._refsManager.getAll(refName);
                  },
                  get _refsManager() {
                    if (!self._refsManager) {
                      self._refsManager = new RefsManager();
                    }
                    return self._refsManager;
                  },
                ` : ""}
            ...this._methods,
          };

          return context;
        }
      `,
          linkAfter: [RAX_CHUNK_NAME.ClassRenderEnd]
        });
        return next;
      };
      return plugin;
    };
    var containerInjectContext_default2 = pluginFactory322;
    var import_lowcode_types9 = require("@alilc/lowcode-types");
    var import_change_case8 = __toESM2(require("change-case"));
    var pluginFactory33 = (config) => {
      var _a;
      const cfg = {
        fileType: "jsx",
        ...config,
        dataSourceHandlersPackageMap: (config == null ? void 0 : config.dataSourceHandlersPackageMap) || ((_a = config == null ? void 0 : config.datasourceConfig) == null ? void 0 : _a.handlersPackages)
      };
      const plugin = async (pre) => {
        var _a2;
        const next = {
          ...pre
        };
        const scope = Scope2.createRootScope();
        const dataSourceConfig = isContainerSchema(pre.ir) ? pre.ir.dataSource : null;
        const dataSourceItems = dataSourceConfig && dataSourceConfig.list || [];
        const dataSourceEngineOptions = { runtimeConfig: true };
        if (dataSourceItems.length > 0) {
          const requestHandlersMap = {};
          dataSourceItems.forEach((ds) => {
            var _a3;
            const dsType = ds.type || "fetch";
            if (!(dsType in requestHandlersMap) && dsType !== "custom") {
              const handlerFactoryName = `__$$create${import_change_case8.default.pascal(dsType)}RequestHandler`;
              requestHandlersMap[dsType] = {
                type: "JSExpression",
                value: `${handlerFactoryName}(${dsType === "urlParams" ? "__$$getSearchParams()" : ""})`
              };
              const handlerFactoryExportName = `create${import_change_case8.default.pascal(dsType)}Handler`;
              const handlerPkgName = ((_a3 = cfg.dataSourceHandlersPackageMap) == null ? void 0 : _a3[dsType]) || `@alilc/lowcode-datasource-${import_change_case8.default.kebab(dsType)}-handler`;
              next.chunks.push({
                type: "string",
                fileType: "jsx",
                name: COMMON_CHUNK_NAME2.ExternalDepsImport,
                content: `
              import { ${handlerFactoryExportName} as ${handlerFactoryName} } from '${handlerPkgName}';
            `,
                linkAfter: []
              });
            }
          });
          Object.assign(dataSourceEngineOptions, { requestHandlersMap });
        }
        const datasourceEnginePackageName = ((_a2 = cfg.datasourceConfig) == null ? void 0 : _a2.enginePackage) || "@alilc/lowcode-datasource-engine";
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: COMMON_CHUNK_NAME2.ExternalDepsImport,
          content: `
        import { create as __$$createDataSourceEngine } from '${datasourceEnginePackageName}/runtime';
      `,
          linkAfter: []
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME2.InsVar,
          content: `
        _dataSourceConfig = this._defineDataSourceConfig();
        _dataSourceEngine = __$$createDataSourceEngine(
          this._dataSourceConfig,
          this._context,
          ${generateCompositeType2(dataSourceEngineOptions, scope)}
        );`,
          linkAfter: [CLASS_DEFINE_CHUNK_NAME2.Start]
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: RAX_CHUNK_NAME.ClassDidMountContent,
          content: `
        this._dataSourceEngine.reloadDataSource();
      `,
          linkAfter: [RAX_CHUNK_NAME.ClassDidMountBegin]
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME2.InsPrivateMethod,
          content: `
_defineDataSourceConfig() {
  const __$$context = this._context;
  return (${generateCompositeType2(
            {
              ...dataSourceConfig,
              list: [
                ...dataSourceItems.map((item) => {
                  var _a3;
                  return {
                    errorHandler: {
                      type: "JSFunction",
                      value: `function (err){
              setTimeout(() => {
                this.setState({ __refresh: Date.now() + Math.random() });
              }, 0);
              throw err;
            }`
                    },
                    ...item,
                    isInit: typeof item.isInit === "boolean" || typeof item.isInit === "undefined" ? (_a3 = item.isInit) != null ? _a3 : true : wrapAsFunction2(item.isInit, scope),
                    options: wrapAsFunction2(item.options, scope)
                  };
                })
              ]
            },
            scope,
            {
              handlers: {
                function: (jsFunc) => parseExpressionConvertThis2Context(jsFunc.value, "__$$context"),
                expression: (jsExpr) => parseExpressionConvertThis2Context(jsExpr.value, "__$$context")
              }
            }
          )});
}
      `,
          linkAfter: [RAX_CHUNK_NAME.ClassRenderEnd]
        });
        return next;
      };
      return plugin;
    };
    var containerInjectDataSourceEngine_default2 = pluginFactory33;
    function wrapAsFunction2(value, scope) {
      if ((0, import_lowcode_types9.isJSExpression)(value) || (0, import_lowcode_types9.isJSFunction)(value)) {
        return {
          type: "JSExpression",
          value: `function(){ return ((${value.value}))}`
        };
      }
      return {
        type: "JSExpression",
        value: `function(){return((${generateCompositeType2(value, scope)}))}`
      };
    }
    var pluginFactory34 = (config) => {
      const cfg = {
        fileType: "jsx",
        ...config
      };
      const plugin = async (pre) => {
        var _a;
        const next = {
          ...pre
        };
        const ir = next.ir;
        const useRef = !!((_a = ir.analyzeResult) == null ? void 0 : _a.isUsingRef);
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: COMMON_CHUNK_NAME2.InternalDepsImport,
          content: `
        import __$$projectUtils${useRef ? ", { RefsManager }" : ""} from '../../utils';
      `,
          linkAfter: [COMMON_CHUNK_NAME2.ExternalDepsImport]
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME2.InsVar,
          content: "_utils = this._defineUtils();",
          linkAfter: [CLASS_DEFINE_CHUNK_NAME2.Start]
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME2.InsPrivateMethod,
          content: `
        _defineUtils() {
          return {
            ...__$$projectUtils,
          };
        }`,
          linkAfter: [RAX_CHUNK_NAME.ClassRenderEnd]
        });
        return next;
      };
      return plugin;
    };
    var containerInjectUtils_default2 = pluginFactory34;
    var import_lowcode_types10 = require("@alilc/lowcode-types");
    var import_lodash6 = __toESM2(require("lodash"));
    var import_change_case9 = __toESM2(require("change-case"));
    var pluginFactory35 = (config) => {
      const cfg = {
        fileType: "jsx",
        ...config
      };
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        const rootScope = Scope2.createRootScope();
        const { tolerateEvalErrors = true, evalErrorsHandler = "" } = next.contextData;
        const componentsNameAliasMap = /* @__PURE__ */ new Map();
        next.chunks.forEach((chunk) => {
          if (isImportAliasDefineChunk(chunk)) {
            componentsNameAliasMap.set(chunk.ext.aliasName, chunk.ext.originalName);
          }
        });
        const mapComponentNameToAliasOrKeepIt = (componentName) => componentsNameAliasMap.get(componentName) || componentName;
        next.chunks = next.chunks.filter((chunk) => !isImportAliasDefineChunk(chunk));
        const customHandlers = {
          expression(input, scope) {
            return transformJsExpr(generateExpression(input, scope), scope, {
              dontWrapEval: !tolerateEvalErrors
            });
          },
          function(input, scope) {
            return transformThis2Context(input.value || "null", scope);
          }
        };
        const commonNodeGenerator = createNodeGenerator({
          handlers: customHandlers,
          tagMapping: mapComponentNameToAliasOrKeepIt,
          nodePlugins: [generateReactExprInJS, generateConditionReactCtrl, generateRaxLoopCtrl],
          attrPlugins: [generateNodeAttrForRax.bind({ cfg })]
        });
        const jsxContent = commonNodeGenerator(ir, rootScope);
        if (!cfg.ignoreMiniApp) {
          next.chunks.push({
            type: "string",
            fileType: cfg.fileType,
            name: COMMON_CHUNK_NAME2.ExternalDepsImport,
            content: "import { isMiniApp as __$$isMiniApp } from 'universal-env';",
            linkAfter: []
          });
        }
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: RAX_CHUNK_NAME.ClassRenderPre,
          content: `
        const __$$context = this._context;
        const { state, setState, dataSourceMap, reloadDataSource, utils, constants, i18n, i18nFormat, getLocale, setLocale } = __$$context;
      `,
          linkAfter: [RAX_CHUNK_NAME.ClassRenderBegin]
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: RAX_CHUNK_NAME.ClassRenderJSX,
          content: `return ${jsxContent};`,
          linkAfter: [RAX_CHUNK_NAME.ClassRenderBegin, RAX_CHUNK_NAME.ClassRenderPre]
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: COMMON_CHUNK_NAME2.CustomContent,
          content: [
            tolerateEvalErrors && `
        function __$$eval(expr) {
          try {
            return expr();
          } catch (error) {
            ${evalErrorsHandler}
          }
        }

        function __$$evalArray(expr) {
          const res = __$$eval(expr);
          return Array.isArray(res) ? res : [];
        }
        `,
            `
        function __$$createChildContext(oldContext, ext) {
          return Object.assign({}, oldContext, ext);
        }
      `
          ].filter(Boolean).join("\n"),
          linkAfter: [COMMON_CHUNK_NAME2.FileExport]
        });
        return next;
        function generateRaxLoopCtrl(nodeItem, scope, config2, next2) {
          var _a, _b;
          if (nodeItem.loop) {
            const loopItemName = ((_a = nodeItem.loopArgs) == null ? void 0 : _a[0]) || "item";
            const loopIndexName = ((_b = nodeItem.loopArgs) == null ? void 0 : _b[1]) || "index";
            const subScope = scope.createSubScope([loopItemName, loopIndexName]);
            const pieces = next2 ? next2(nodeItem, subScope, config2) : [];
            const loopDataExpr = tolerateEvalErrors ? `__$$evalArray(() => (${transformThis2Context(
              generateCompositeType2(nodeItem.loop, scope, { handlers: config2 == null ? void 0 : config2.handlers }),
              scope
            )}))` : `(${transformThis2Context(
              generateCompositeType2(nodeItem.loop, scope, { handlers: config2 == null ? void 0 : config2.handlers }),
              scope
            )})`;
            pieces.unshift({
              value: `${loopDataExpr}.map((${loopItemName}, ${loopIndexName}) => ((__$$context) => (`,
              type: "NodeCodePieceBefore"
            });
            pieces.push({
              value: `))(__$$createChildContext(__$$context, { ${loopItemName}, ${loopIndexName} })))`,
              type: "NodeCodePieceAfter"
            });
            return pieces;
          }
          return next2 ? next2(nodeItem, scope, config2) : [];
        }
      };
      return plugin;
    };
    var jsx_default2 = pluginFactory35;
    function isImportAliasDefineChunk(chunk) {
      var _a;
      return chunk.name === COMMON_CHUNK_NAME2.ImportAliasDefine && !!chunk.ext && typeof chunk.ext.aliasName === "string" && typeof chunk.ext.originalName === "string" && !!((_a = chunk.ext.dependency) == null ? void 0 : _a.componentName);
    }
    function generateNodeAttrForRax(attrData, scope, config, next) {
      if (!this.cfg.ignoreMiniApp && /^on/.test(attrData.attrName)) {
        return generateEventHandlerAttrForRax(attrData.attrName, attrData.attrValue, scope, config);
      }
      if (attrData.attrName === "ref") {
        return [
          {
            name: attrData.attrName,
            value: `__$$context._refsManager.linkRef('${attrData.attrValue}')`,
            type: "NodeCodePieceAttr"
          }
        ];
      }
      return next ? next(attrData, scope, config) : [];
    }
    function generateEventHandlerAttrForRax(attrName, attrValue, scope, config) {
      var _a;
      const valueExpr = generateCompositeType2(
        (0, import_lowcode_types10.isJSExpression)(attrValue) ? { type: "JSFunction", value: attrValue.value } : attrValue,
        scope,
        {
          handlers: config == null ? void 0 : config.handlers
        }
      );
      const currentScopeVariables = ((_a = scope.bindings) == null ? void 0 : _a.getAllBindings()) || [];
      if (currentScopeVariables.length <= 0) {
        return [
          {
            type: "NodeCodePieceAttr",
            name: attrName,
            value: valueExpr
          }
        ];
      }
      const undeclaredVariablesInValueExpr = parseExpressionGetGlobalVariables(valueExpr);
      const referencedLocalVariables = import_lodash6.default.intersection(
        undeclaredVariablesInValueExpr,
        currentScopeVariables
      );
      if (referencedLocalVariables.length <= 0) {
        return [
          {
            type: "NodeCodePieceAttr",
            name: attrName,
            value: valueExpr
          }
        ];
      }
      const wrappedAttrValueExpr = [
        "(...__$$args) => {",
        "  if (__$$isMiniApp) {",
        "    const __$$event = __$$args[0];",
        ...referencedLocalVariables.map(
          (localVar) => `const ${localVar} = __$$event.target.dataset.${localVar};`
        ),
        `    return (${valueExpr}).apply(this, __$$args);`,
        "  } else {",
        `    return (${valueExpr}).apply(this, __$$args);`,
        "  }",
        "}"
      ].join("\n");
      return [
        ...referencedLocalVariables.map((localVar) => ({
          type: "NodeCodePieceAttr",
          name: `data-${import_change_case9.default.snake(localVar)}`,
          value: localVar
        })),
        {
          type: "NodeCodePieceAttr",
          name: attrName,
          value: wrappedAttrValueExpr
        }
      ];
    }
    var pluginFactory36 = () => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: COMMON_CHUNK_NAME2.ExternalDepsImport,
          content: `
        // \u6CE8\u610F: \u51FA\u7801\u5F15\u64CE\u6CE8\u5165\u7684\u4E34\u65F6\u53D8\u91CF\u9ED8\u8BA4\u90FD\u4EE5 "__$$" \u5F00\u5934\uFF0C\u7981\u6B62\u5728\u642D\u5EFA\u7684\u4EE3\u7801\u4E2D\u76F4\u63A5\u8BBF\u95EE\u3002
        // \u4F8B\u5916\uFF1Arax \u6846\u67B6\u7684\u5BFC\u51FA\u540D\u548C\u5404\u79CD\u7EC4\u4EF6\u540D\u9664\u5916\u3002
        import { createElement, Component } from 'rax';
        import { getSearchParams as __$$getSearchParams } from 'rax-app';
      `,
          linkAfter: []
        });
        return next;
      };
      return plugin;
    };
    var commonDeps_default = pluginFactory36;
    function getFile332() {
      return [
        ["."],
        {
          name: ".eslintignore",
          ext: "",
          content: "node_modules/\nlib/\ndist/\nbuild/\ncoverage/\ndemo/\nes/\n.rax/\n"
        }
      ];
    }
    function getFile342() {
      return [
        ["."],
        {
          name: ".eslintrc",
          ext: "js",
          content: "const { getESLintConfig } = require('@iceworks/spec');\n\n// https://www.npmjs.com/package/@iceworks/spec\nmodule.exports = {\n  ...getESLintConfig('rax'),\n  rules: {\n    'max-len': ['error', { code: 200 }],\n    'function-paren-newline': 'off',\n    '@typescript-eslint/indent': 'off',\n    'prettier/prettier': 'off',\n    'no-empty': 'off',\n    'no-unused-vars': 'off',\n    '@iceworks/best-practices/recommend-functional-component': 'off',\n  },\n};\n"
        }
      ];
    }
    function getFile352() {
      return [
        ["."],
        {
          name: ".gitignore",
          ext: "",
          content: "# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.\n\n*~\n*.swp\n*.log\n\n.DS_Store\n.idea/\n.temp/\n\nbuild/\ndist/\nlib/\ncoverage/\nnode_modules/\n.rax/\n\ntemplate.yml"
        }
      ];
    }
    function getFile362() {
      return [
        ["."],
        {
          name: ".prettierignore",
          ext: "",
          content: "node_modules/\nlib/\ndist/\nbuild/\ncoverage/\ndemo/\nes/\n.rax/\n"
        }
      ];
    }
    function getFile372() {
      return [
        ["."],
        {
          name: ".prettierrc",
          ext: "js",
          content: "const { getPrettierConfig } = require('@iceworks/spec');\n\nmodule.exports = getPrettierConfig('rax');\n"
        }
      ];
    }
    function getFile382() {
      return [
        ["."],
        {
          name: ".stylelintignore",
          ext: "",
          content: "node_modules/\nlib/\ndist/\nbuild/\ncoverage/\ndemo/\nes/\n.rax/\n"
        }
      ];
    }
    function getFile392() {
      return [
        ["."],
        {
          name: ".stylelintrc",
          ext: "js",
          content: "const { getStylelintConfig } = require('@iceworks/spec');\n\nmodule.exports = getStylelintConfig('rax');\n"
        }
      ];
    }
    function getFile402() {
      return [
        ["."],
        {
          name: "jsconfig",
          ext: "json",
          content: '{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "jsx": "react",\n    "paths": {\n      "@/*": ["./src/*"],\n      "rax-app": [".rax/index.ts"]\n    }\n  }\n}\n'
        }
      ];
    }
    function getFile412() {
      return [
        ["."],
        {
          name: "README",
          ext: "md",
          content: "# rax-materials-basic-app\n\n## Getting Started\n\n### `npm run start`\n\nRuns the app in development mode.\n\nOpen [http://localhost:3333](http://localhost:3333) to view it in the browser.\n\nThe page will reload if you make edits.\n\n### `npm run build`\n\nBuilds the app for production to the `build` folder.\n"
        }
      ];
    }
    function getFile422() {
      return [
        ["."],
        {
          name: "tsconfig",
          ext: "json",
          content: '{\n  "compileOnSave": false,\n  "buildOnSave": false,\n  "compilerOptions": {\n    "baseUrl": ".",\n    "outDir": "build",\n    "module": "esnext",\n    "target": "es6",\n    "jsx": "preserve",\n    "jsxFactory": "createElement",\n    "moduleResolution": "node",\n    "allowSyntheticDefaultImports": true,\n    "lib": ["es6", "dom"],\n    "sourceMap": true,\n    "allowJs": true,\n    "rootDir": "./",\n    "forceConsistentCasingInFileNames": true,\n    "noImplicitReturns": true,\n    "noImplicitThis": true,\n    "noImplicitAny": false,\n    "importHelpers": true,\n    "strictNullChecks": true,\n    "suppressImplicitAnyIndexErrors": true,\n    "noUnusedLocals": true,\n    "skipLibCheck": true,\n    "paths": {\n      "@/*": ["./src/*"],\n      "rax-app": [".rax/index.ts"]\n    }\n  },\n  "include": ["src", ".rax"],\n  "exclude": ["node_modules", "build", "public"]\n}'
        }
      ];
    }
    function generateStaticFiles3(root = createResultDir4(".")) {
      runFileGenerator2(root, getFile332);
      runFileGenerator2(root, getFile342);
      runFileGenerator2(root, getFile352);
      runFileGenerator2(root, getFile362);
      runFileGenerator2(root, getFile372);
      runFileGenerator2(root, getFile382);
      runFileGenerator2(root, getFile392);
      runFileGenerator2(root, getFile402);
      runFileGenerator2(root, getFile412);
      runFileGenerator2(root, getFile422);
      return root;
    }
    var raxAppTemplate = {
      slots: {
        components: {
          path: ["src", "components"]
        },
        pages: {
          path: ["src", "pages"]
        },
        router: {
          path: ["src"],
          fileName: "router"
        },
        entry: {
          path: ["src"],
          fileName: "app"
        },
        appConfig: {
          path: ["src"],
          fileName: "app"
        },
        buildConfig: {
          path: [],
          fileName: "build"
        },
        constants: {
          path: ["src"],
          fileName: "constants"
        },
        utils: {
          path: ["src"],
          fileName: "utils"
        },
        i18n: {
          path: ["src"],
          fileName: "i18n"
        },
        globalStyle: {
          path: ["src"],
          fileName: "global"
        },
        htmlEntry: {
          path: ["src", "document"],
          fileName: "index"
        },
        packageJSON: {
          path: [],
          fileName: "package"
        }
      },
      async generateTemplate() {
        return generateStaticFiles3();
      }
    };
    var template_default3 = raxAppTemplate;
    var pluginFactory37 = (cfg) => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        next.chunks.push({
          type: "string",
          fileType: "js",
          name: COMMON_CHUNK_NAME2.ExternalDepsImport,
          content: `
import { runApp } from 'rax-app';

import './global.${(cfg == null ? void 0 : cfg.globalStylesFileType) || "css"}';
`,
          linkAfter: []
        });
        const appConfig = (cfg == null ? void 0 : cfg.appConfig) || {};
        Object.assign(appConfig, {
          router: {
            mode: "hash",
            ...appConfig.router
          }
        });
        next.chunks.push({
          type: "string",
          fileType: "js",
          name: COMMON_CHUNK_NAME2.FileMainContent,
          content: `
runApp(${JSON.stringify(appConfig, null, 2)});
`,
          linkAfter: [
            COMMON_CHUNK_NAME2.ExternalDepsImport,
            COMMON_CHUNK_NAME2.InternalDepsImport,
            COMMON_CHUNK_NAME2.ImportAliasDefine,
            COMMON_CHUNK_NAME2.FileVarDefine,
            COMMON_CHUNK_NAME2.FileUtilDefine
          ]
        });
        return next;
      };
      return plugin;
    };
    var entry_default2 = pluginFactory37;
    var import_change_case10 = __toESM2(require("change-case"));
    var pluginFactory38 = (cfg) => {
      const plugin = async (pre) => {
        var _a, _b, _c, _d, _e, _f;
        const next = {
          ...pre
        };
        const ir = next.ir;
        const routes = ((_b = (_a = ir.globalRouter) == null ? void 0 : _a.routes) == null ? void 0 : _b.map((route) => ({
          path: route.path,
          source: `pages/${ensureValidClassName3(import_change_case10.default.pascalCase(route.fileName))}/index`
        }))) || [{ path: "/", source: "pages/Home/index" }];
        next.chunks.push({
          type: "string",
          fileType: "json",
          name: COMMON_CHUNK_NAME2.CustomContent,
          content: `
{
  "routes": ${JSON.stringify(routes, null, 2)},
  "window": {
    "title": ${JSON.stringify(
            (cfg == null ? void 0 : cfg.title) || ((_d = (_c = ir.project) == null ? void 0 : _c.meta) == null ? void 0 : _d.title) || ((_f = (_e = ir.project) == null ? void 0 : _e.meta) == null ? void 0 : _f.name) || ""
          )}
  }
}
      `,
          linkAfter: []
        });
        return next;
      };
      return plugin;
    };
    var appConfig_default2 = pluginFactory38;
    var pluginFactory39 = (cfg) => {
      const plugin = async (pre) => {
        var _a, _b, _c, _d, _e;
        const next = {
          ...pre
        };
        const ir = next.ir;
        const miniAppBuildType = ((_a = cfg == null ? void 0 : cfg.buildConfig) == null ? void 0 : _a.miniAppBuildType) || ((_c = (_b = ir.project) == null ? void 0 : _b.config) == null ? void 0 : _c.miniAppBuildType);
        const targets = (cfg == null ? void 0 : cfg.targets) || ["web"];
        const buildCfg = {
          inlineStyle: false,
          plugins: [],
          targets,
          miniapp: miniAppBuildType ? {
            buildType: miniAppBuildType,
            ...(_d = cfg == null ? void 0 : cfg.buildConfig) == null ? void 0 : _d.miniapp
          } : (_e = cfg == null ? void 0 : cfg.buildConfig) == null ? void 0 : _e.miniapp,
          ...cfg == null ? void 0 : cfg.buildConfig
        };
        next.chunks.push({
          type: "string",
          fileType: "json",
          name: COMMON_CHUNK_NAME2.CustomContent,
          content: `${JSON.stringify(buildCfg, null, 2)}
`,
          linkAfter: []
        });
        return next;
      };
      return plugin;
    };
    var buildConfig_default2 = pluginFactory39;
    var pluginFactory40 = (cfg) => {
      const plugin = async (pre) => {
        var _a;
        const next = {
          ...pre
        };
        const ir = next.ir;
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: COMMON_CHUNK_NAME2.CustomContent,
          content: `
import { createElement } from 'rax';
import { Root, Style, Script } from 'rax-document';

function Document() {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover"
        />
        <title>${(cfg == null ? void 0 : cfg.title) || ((_a = ir == null ? void 0 : ir.meta) == null ? void 0 : _a.name) || "Rax App"}</title>
        <Style />
      </head>
      <body>
        {/* root container */}
        <Root />
        <Script />
      </body>
    </html>
  );
}

export default Document;
`,
          linkAfter: []
        });
        return next;
      };
      return plugin;
    };
    var entryDocument_default = pluginFactory40;
    var pluginFactory41 = (config) => {
      const cfg = {
        fileType: "scss",
        ...config
      };
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: COMMON_CHUNK_NAME2.StyleDepsImport,
          content: "",
          linkAfter: []
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: COMMON_CHUNK_NAME2.StyleCssContent,
          content: `
body {
  -webkit-font-smoothing: antialiased;
}
`,
          linkAfter: [COMMON_CHUNK_NAME2.StyleDepsImport]
        });
        next.chunks.push({
          type: "string",
          fileType: cfg.fileType,
          name: COMMON_CHUNK_NAME2.StyleCssContent,
          content: ir.css || "",
          linkAfter: [COMMON_CHUNK_NAME2.StyleDepsImport]
        });
        return next;
      };
      return plugin;
    };
    var globalStyle_default3 = pluginFactory41;
    var version_exports = {};
    __export2(version_exports, {
      calcCompatibleVersion: () => calcCompatibleVersion
    });
    var import_semver = __toESM2(require("semver"));
    function calcCompatibleVersion(v1, v2) {
      if (!v1 && !v2) {
        return "*";
      }
      if (!v1 || v1 === "*") {
        return v2 || "*";
      }
      if (!v2 || v2 === "*") {
        return v1;
      }
      if (v1 === v2) {
        return v1;
      }
      if (!import_semver.default.intersects(v1, v2, { loose: true })) {
        throw new Error(`no compatible versions for "${v1}" and "${v2}"`);
      }
      if (import_semver.default.subset(v1, v2, { loose: true })) {
        return v1;
      }
      return v2;
    }
    var pluginFactory422 = (cfg) => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        const ir = next.ir;
        const npmDeps = getNpmDependencies(ir);
        const packageJson = {
          name: (cfg == null ? void 0 : cfg.packageName) || "rax-demo-app",
          private: true,
          version: (cfg == null ? void 0 : cfg.packageVersion) || "1.0.0",
          scripts: {
            start: "rax-app start",
            build: "rax-app build",
            eslint: "eslint --ext .js,.jsx ./",
            stylelint: 'stylelint "**/*.{css,scss,less}"',
            prettier: "prettier **/* --write",
            lint: "npm run eslint && npm run stylelint"
          },
          dependencies: {
            ...buildDataSourceDependencies2(ir, cfg == null ? void 0 : cfg.datasourceConfig),
            "universal-env": "^3.2.0",
            "intl-messageformat": "^9.3.6",
            rax: "^1.1.0",
            "rax-document": "^0.1.6",
            ...npmDeps.reduce(
              (acc, npm) => ({
                ...acc,
                [npm.package]: npm.version || "*"
              }),
              {}
            )
          },
          devDependencies: {
            "@iceworks/spec": "^1.0.0",
            "rax-app": "^3.0.0",
            eslint: "^6.8.0",
            prettier: "^2.1.2",
            stylelint: "^13.7.2"
          }
        };
        next.chunks.push({
          type: "json",
          fileType: "json",
          name: COMMON_CHUNK_NAME2.FileMainContent,
          content: packageJson,
          linkAfter: []
        });
        return next;
      };
      return plugin;
    };
    var packageJSON_default3 = pluginFactory422;
    function getNpmDependencies(project) {
      const npmDeps = [];
      const npmNameToPkgMap = /* @__PURE__ */ new Map();
      const allDeps = project.packages;
      allDeps.forEach((dep) => {
        if (!isNpmInfo(dep)) {
          return;
        }
        const existing = npmNameToPkgMap.get(dep.package);
        if (!existing) {
          npmNameToPkgMap.set(dep.package, dep);
          npmDeps.push(dep);
          return;
        }
        if (existing.version !== dep.version) {
          try {
            npmNameToPkgMap.set(dep.package, {
              ...existing,
              version: calcCompatibleVersion(existing.version, dep.version)
            });
          } catch (e) {
            throw new Error(
              `Cannot find compatible version for ${dep.package}. Detail: ${getErrorMessage2(e)}`
            );
          }
        }
      });
      return npmDeps;
    }
    var rax_default = {
      template: template_default3,
      plugins: {
        appConfig: appConfig_default2,
        buildConfig: buildConfig_default2,
        entry: entry_default2,
        entryDocument: entryDocument_default,
        globalStyle: globalStyle_default3,
        packageJSON: packageJSON_default3
      }
    };
    function createRaxProjectBuilder(options) {
      return createProjectBuilder2({
        inStrictMode: options == null ? void 0 : options.inStrictMode,
        extraContextData: { ...options },
        template: rax_default.template,
        plugins: {
          components: [
            commonDeps_default(),
            esmodule_default({ fileType: "jsx", useAliasName: false }),
            containerClass_default2(),
            containerInitState_default2(),
            containerMethods_default(),
            containerInjectContext_default2(),
            containerInjectDataSourceEngine_default2(options),
            containerInjectUtils_default2(),
            containerLifeCycle_default2(),
            jsx_default2(),
            css_default()
          ],
          pages: [
            commonDeps_default(),
            esmodule_default({ fileType: "jsx" }),
            containerClass_default2(),
            containerInitState_default2(),
            containerMethods_default(),
            containerInjectContext_default2(),
            containerInjectDataSourceEngine_default2(options),
            containerInjectUtils_default2(),
            containerLifeCycle_default2(),
            jsx_default2(),
            css_default()
          ],
          appConfig: [rax_default.plugins.appConfig(options)],
          buildConfig: [rax_default.plugins.buildConfig(options)],
          entry: [rax_default.plugins.entry(options)],
          constants: [constants_default()],
          utils: [esmodule_default(), utils_default("rax")],
          i18n: [i18n_default()],
          globalStyle: [
            rax_default.plugins.globalStyle({ fileType: (options == null ? void 0 : options.globalStylesFileType) || "css" })
          ],
          htmlEntry: [rax_default.plugins.entryDocument(options)],
          packageJSON: [rax_default.plugins.packageJSON(options)]
        },
        postProcessors: [prettier_default()],
        customizeBuilderOptions: options == null ? void 0 : options.customizeBuilderOptions
      });
    }
    var plugins3 = {
      containerClass: containerClass_default2,
      containerLifeCycles: containerLifeCycle_default2,
      containerMethods: containerMethods_default,
      containerInitState: containerInitState_default2,
      containerInjectContext: containerInjectContext_default2,
      containerInjectDataSourceEngine: containerInjectDataSourceEngine_default2,
      containerInjectUtils: containerInjectUtils_default2,
      jsx: jsx_default2,
      commonDeps: commonDeps_default,
      raxApp: rax_default
    };
    var pluginFactory43 = () => {
      const plugin = async (pre) => {
        const next = {
          ...pre
        };
        next.chunks.push({
          type: "string",
          fileType: "jsx",
          name: COMMON_CHUNK_NAME2.InternalDepsImport,
          content: "import * from 'react';",
          linkAfter: []
        });
        return next;
      };
      return plugin;
    };
    var requireUtils_default = pluginFactory43;
    var utils_exports = {};
    __export2(utils_exports, {
      common: () => common_exports,
      compositeType: () => compositeType_exports,
      dataSource: () => dataSource_exports,
      expressionParser: () => expressionParser_exports,
      jsExpression: () => jsExpression_exports,
      jsSlot: () => jsSlot_exports,
      nodeToJSX: () => nodeToJSX_exports,
      pathHelper: () => pathHelper_exports,
      resultHelper: () => resultHelper_exports,
      schema: () => schema_exports,
      scope: () => Scope_exports,
      templateHelper: () => templateHelper_exports,
      validate: () => validate_exports,
      version: () => version_exports
    });
    var src_default2 = {
      createProjectBuilder: createProjectBuilder2,
      createModuleBuilder: createModuleBuilder2,
      solutions: {
        icejs: createIceJsProjectBuilder2,
        icejs3: createIceJsProjectBuilder22,
        rax: createRaxProjectBuilder
      },
      solutionParts: {
        icejs: icejs_default,
        icejs3: icejs3_default,
        rax: rax_default
      },
      publishers: {
        disk: createDiskPublisher,
        zip: createZipPublisher
      },
      plugins: {
        common: {
          esmodule: esmodule_default,
          esModule: esmodule_default,
          requireUtils: requireUtils_default,
          styleImport: styleImport_default
        },
        style: {
          css: css_default
        },
        project: {
          constants: constants_default,
          i18n: i18n_default,
          utils: utils_default
        },
        icejs: {
          ...plugins2
        },
        icejs3: {
          ...plugins22
        },
        rax: {
          ...plugins3
        },
        react: {
          ...plugins2
        }
      },
      postprocessor: {
        prettier: prettier_default
      },
      utils: utils_exports,
      chunkNames: {
        COMMON_CHUNK_NAME: COMMON_CHUNK_NAME2,
        CLASS_DEFINE_CHUNK_NAME: CLASS_DEFINE_CHUNK_NAME2,
        REACT_CHUNK_NAME
      },
      defaultLinkAfter: {
        COMMON_DEFAULT_LINK_AFTER: DEFAULT_LINK_AFTER3
      },
      constants: const_exports2
    };
  }
});

// src/cli/index.ts
var cli_exports = {};
__export(cli_exports, {
  initSolution: () => initSolution,
  run: () => run
});
module.exports = __toCommonJS(cli_exports);

// src/cli/run.ts
var import_chalk = __toESM(require("chalk"));
var fs = __toESM(require("fs-extra"));
var import_json5 = __toESM(require("json5"));
var import_jsonc = require("jsonc");

// src/solutions/utils/helper.ts
function executeFunctionStack(input, scope, funcs, baseFunc, config) {
  const funcList = [];
  if (Array.isArray(funcs)) {
    funcList.push(...funcs);
  } else {
    funcList.push(funcs);
  }
  let next = baseFunc;
  while (funcList.length > 0) {
    const func = funcList.pop();
    if (func) {
      const warppedFunc = ((nextFunc) => (i, s, cfg) => func(i, s, cfg, nextFunc))(next);
      next = warppedFunc;
    }
  }
  return next(input, scope, config);
}
function unwrapJsExprQuoteInJsx(jsxExpr) {
  if (jsxExpr.length >= 2 && jsxExpr[0] === "{" && jsxExpr[jsxExpr.length - 1] === "}") {
    return jsxExpr.slice(1, jsxExpr.length - 1);
  }
  return jsxExpr;
}
function getErrorMessage(error) {
  if (!error) {
    return null;
  }
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  if (typeof error === "object" && error !== null) {
    return getErrorMessage(error.message) || getErrorMessage(error.errorMessage) || getErrorMessage(error.detail);
  }
  return null;
}

// src/cli/run.ts
var import_lowcode_code_generator22 = __toESM(require_lib());

// src/generator/ProjectBuilder.ts
var import_lowcode_code_generator7 = __toESM(require_lib());

// src/parser/SchemaParser.ts
var import_change_case = __toESM(require("change-case"));
var import_lowcode_code_generator2 = __toESM(require_lib());

// src/const/index.ts
var const_exports = {};
__export(const_exports, {
  BUILTIN_SLOT_NAMES: () => BUILTIN_SLOT_NAMES,
  CLASS_DEFINE_CHUNK_NAME: () => CLASS_DEFINE_CHUNK_NAME,
  COMMON_CHUNK_NAME: () => COMMON_CHUNK_NAME,
  COMMON_SUB_MODULE_NAME: () => COMMON_SUB_MODULE_NAME,
  CONTAINER_TYPE: () => CONTAINER_TYPE,
  DEFAULT_LINK_AFTER: () => DEFAULT_LINK_AFTER,
  FILE_TYPE_FAMILY: () => FILE_TYPE_FAMILY,
  NATIVE_ELE_PKG: () => NATIVE_ELE_PKG,
  SUPPORT_SCHEMA_VERSION_LIST: () => SUPPORT_SCHEMA_VERSION_LIST,
  isBuiltinSlotName: () => isBuiltinSlotName
});

// src/const/file.ts
var import_lowcode_code_generator = __toESM(require_lib());
var FILE_TYPE_FAMILY = [[import_lowcode_code_generator.FileType.TSX, import_lowcode_code_generator.FileType.TS, import_lowcode_code_generator.FileType.JSX, import_lowcode_code_generator.FileType.JS]];

// src/const/generator.ts
var COMMON_CHUNK_NAME = {
  ExternalDepsImport: "CommonExternalDependencyImport",
  InternalDepsImport: "CommonInternalDependencyImport",
  ImportAliasDefine: "CommonImportAliasDefine",
  FileVarDefine: "CommonFileScopeVarDefine",
  FileUtilDefine: "CommonFileScopeMethodDefine",
  FileMainContent: "CommonFileMainContent",
  FileExport: "CommonFileExport",
  StyleDepsImport: "CommonStyleDepsImport",
  StyleCssContent: "CommonStyleCssContent",
  HtmlContent: "CommonHtmlContent",
  CustomContent: "CommonCustomContent"
};
var CLASS_DEFINE_CHUNK_NAME = {
  Start: "CommonClassDefineStart",
  ConstructorStart: "CommonClassDefineConstructorStart",
  ConstructorContent: "CommonClassDefineConstructorContent",
  ConstructorEnd: "CommonClassDefineConstructorEnd",
  StaticVar: "CommonClassDefineStaticVar",
  StaticMethod: "CommonClassDefineStaticMethod",
  InsVar: "CommonClassDefineInsVar",
  InsVarMethod: "CommonClassDefineInsVarMethod",
  InsMethod: "CommonClassDefineInsMethod",
  InsPrivateMethod: "CommonClassDefineInsPrivateMethod",
  End: "CommonClassDefineEnd"
};
var DEFAULT_LINK_AFTER = {
  [COMMON_CHUNK_NAME.ExternalDepsImport]: [],
  [COMMON_CHUNK_NAME.InternalDepsImport]: [
    COMMON_CHUNK_NAME.ExternalDepsImport
  ],
  [COMMON_CHUNK_NAME.ImportAliasDefine]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
    COMMON_CHUNK_NAME.InternalDepsImport
  ],
  [COMMON_CHUNK_NAME.FileVarDefine]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
    COMMON_CHUNK_NAME.InternalDepsImport,
    COMMON_CHUNK_NAME.ImportAliasDefine
  ],
  [COMMON_CHUNK_NAME.FileUtilDefine]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
    COMMON_CHUNK_NAME.InternalDepsImport,
    COMMON_CHUNK_NAME.ImportAliasDefine,
    COMMON_CHUNK_NAME.FileVarDefine
  ],
  [CLASS_DEFINE_CHUNK_NAME.Start]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
    COMMON_CHUNK_NAME.InternalDepsImport,
    COMMON_CHUNK_NAME.ImportAliasDefine,
    COMMON_CHUNK_NAME.FileVarDefine,
    COMMON_CHUNK_NAME.FileUtilDefine
  ],
  [CLASS_DEFINE_CHUNK_NAME.ConstructorStart]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
    CLASS_DEFINE_CHUNK_NAME.StaticMethod,
    CLASS_DEFINE_CHUNK_NAME.InsVar,
    CLASS_DEFINE_CHUNK_NAME.InsVarMethod
  ],
  [CLASS_DEFINE_CHUNK_NAME.ConstructorContent]: [
    CLASS_DEFINE_CHUNK_NAME.ConstructorStart
  ],
  [CLASS_DEFINE_CHUNK_NAME.ConstructorEnd]: [
    CLASS_DEFINE_CHUNK_NAME.ConstructorStart,
    CLASS_DEFINE_CHUNK_NAME.ConstructorContent
  ],
  [CLASS_DEFINE_CHUNK_NAME.StaticVar]: [
    CLASS_DEFINE_CHUNK_NAME.Start
  ],
  [CLASS_DEFINE_CHUNK_NAME.StaticMethod]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar
  ],
  [CLASS_DEFINE_CHUNK_NAME.InsVar]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
    CLASS_DEFINE_CHUNK_NAME.StaticMethod
  ],
  [CLASS_DEFINE_CHUNK_NAME.InsVarMethod]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
    CLASS_DEFINE_CHUNK_NAME.StaticMethod,
    CLASS_DEFINE_CHUNK_NAME.InsVar
  ],
  [CLASS_DEFINE_CHUNK_NAME.InsMethod]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
    CLASS_DEFINE_CHUNK_NAME.StaticMethod,
    CLASS_DEFINE_CHUNK_NAME.InsVar,
    CLASS_DEFINE_CHUNK_NAME.InsVarMethod,
    CLASS_DEFINE_CHUNK_NAME.ConstructorEnd
  ],
  [CLASS_DEFINE_CHUNK_NAME.InsPrivateMethod]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
    CLASS_DEFINE_CHUNK_NAME.StaticMethod,
    CLASS_DEFINE_CHUNK_NAME.InsVar,
    CLASS_DEFINE_CHUNK_NAME.InsVarMethod,
    CLASS_DEFINE_CHUNK_NAME.InsMethod,
    CLASS_DEFINE_CHUNK_NAME.ConstructorEnd
  ],
  [CLASS_DEFINE_CHUNK_NAME.End]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
    CLASS_DEFINE_CHUNK_NAME.StaticMethod,
    CLASS_DEFINE_CHUNK_NAME.InsVar,
    CLASS_DEFINE_CHUNK_NAME.InsVarMethod,
    CLASS_DEFINE_CHUNK_NAME.InsMethod,
    CLASS_DEFINE_CHUNK_NAME.InsPrivateMethod,
    CLASS_DEFINE_CHUNK_NAME.ConstructorEnd
  ],
  [COMMON_CHUNK_NAME.FileMainContent]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
    COMMON_CHUNK_NAME.InternalDepsImport,
    COMMON_CHUNK_NAME.ImportAliasDefine,
    COMMON_CHUNK_NAME.FileVarDefine,
    COMMON_CHUNK_NAME.FileUtilDefine,
    CLASS_DEFINE_CHUNK_NAME.End
  ],
  [COMMON_CHUNK_NAME.FileExport]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
    COMMON_CHUNK_NAME.InternalDepsImport,
    COMMON_CHUNK_NAME.ImportAliasDefine,
    COMMON_CHUNK_NAME.FileVarDefine,
    COMMON_CHUNK_NAME.FileUtilDefine,
    CLASS_DEFINE_CHUNK_NAME.End,
    COMMON_CHUNK_NAME.FileMainContent
  ],
  [COMMON_CHUNK_NAME.StyleDepsImport]: [],
  [COMMON_CHUNK_NAME.StyleCssContent]: [
    COMMON_CHUNK_NAME.StyleDepsImport
  ],
  [COMMON_CHUNK_NAME.HtmlContent]: []
};
var COMMON_SUB_MODULE_NAME = "index";

// src/const/index.ts
var NATIVE_ELE_PKG = "native";
var CONTAINER_TYPE = {
  COMPONENT: "Component",
  BLOCK: "Block",
  PAGE: "Page"
};
var SUPPORT_SCHEMA_VERSION_LIST = ["0.0.1", "1.0.0"];
var BUILTIN_SLOT_NAMES = [
  "pages",
  "components",
  "router",
  "module",
  "entry",
  "appConfig",
  "buildConfig",
  "constants",
  "utils",
  "i18n",
  "globalStyle",
  "htmlEntry",
  "packageJSON",
  "demo"
];
var isBuiltinSlotName = function(name) {
  return BUILTIN_SLOT_NAMES.includes(name);
};

// src/parser/SchemaParser.ts
var import_lowcode_code_generator3 = __toESM(require_lib());
var { uniqueArray } = import_lowcode_code_generator3.default.utils.common;
var { handleSubNodes, isValidContainerType, ContainerType } = import_lowcode_code_generator3.default.utils.schema;
var { ensureValidClassName } = import_lowcode_code_generator3.default.utils.validate;
var defaultContainer = {
  containerType: "Component",
  componentName: "Component",
  moduleName: "demo",
  fileName: "demo.component",
  css: "",
  props: {}
};
function getRootComponentName(typeName, maps) {
  if (maps[typeName]) {
    const rec = maps[typeName];
    if (rec.destructuring) {
      return rec.componentName || typeName;
    }
    const peerName = Object.keys(maps).find((depName) => {
      const depInfo = maps[depName];
      return depName !== typeName && !depInfo.destructuring && depInfo.package === rec.package && depInfo.version === rec.version && depInfo.main === rec.main && depInfo.exportName === rec.exportName && depInfo.subName === rec.subName;
    });
    return peerName || typeName;
  }
  return typeName;
}
function processChildren(schema) {
  if (schema.props) {
    if (Array.isArray(schema.props)) {
    } else {
      const nodeProps = schema.props;
      if (nodeProps.children) {
        if (!schema.children) {
          schema.children = nodeProps.children;
        } else {
          let _children = [];
          if (Array.isArray(schema.children)) {
            _children = _children.concat(schema.children);
          } else {
            _children.push(schema.children);
          }
          if (Array.isArray(nodeProps.children)) {
            _children = _children.concat(nodeProps.children);
          } else {
            _children.push(nodeProps.children);
          }
          schema.children = _children;
        }
        delete nodeProps.children;
      }
    }
  }
}
function getInternalDep(internalDeps, depName) {
  const dep = internalDeps[depName];
  return dep && dep.type !== import_lowcode_code_generator2.InternalDependencyType.PAGE ? dep : null;
}
var SchemaParser = class {
  validate(schema) {
    if (SUPPORT_SCHEMA_VERSION_LIST.indexOf(schema.version) < 0) {
      throw new import_lowcode_code_generator2.CompatibilityError(`Not support schema with version [${schema.version}]`);
    }
    return true;
  }
  parse(schemaSrc) {
    const compDeps = {};
    const moduleDeps = [];
    const internalDeps = {};
    let utilsDeps = [];
    const schema = this.decodeSchema(schemaSrc);
    schema.componentsMap.forEach((info) => {
      var _a;
      if (info.componentName) {
        const depInfo = {
          ...info,
          dependencyType: import_lowcode_code_generator2.DependencyType.External,
          componentName: info.componentName,
          exportName: info.exportName || info.componentName,
          version: info.version || "*",
          destructuring: (_a = info.destructuring) != null ? _a : false
        };
        compDeps[info.componentName] = depInfo;
        moduleDeps.push(depInfo);
      }
    });
    let containers;
    if (schema.componentsTree.length > 0) {
      const firstRoot = schema.componentsTree[0];
      if (!firstRoot.fileName && !isValidContainerType(firstRoot)) {
        const container = {
          ...firstRoot,
          ...defaultContainer,
          props: firstRoot.props || defaultContainer.props,
          css: firstRoot.css || defaultContainer.css,
          moduleName: firstRoot.moduleName || defaultContainer.moduleName,
          children: schema.componentsTree
        };
        containers = [container];
      } else {
        containers = schema.componentsTree.map((n) => {
          const subRoot = n;
          const container = {
            ...subRoot,
            componentName: getRootComponentName(subRoot.componentName, compDeps),
            containerType: subRoot.componentName,
            moduleName: ensureValidClassName(subRoot.componentName === ContainerType.Component ? subRoot.fileName : import_change_case.default.pascalCase(subRoot.fileName))
          };
          return container;
        });
      }
    } else {
      throw new import_lowcode_code_generator2.CodeGeneratorError("Can't find anything to generate.");
    }
    containers = containers.map((con) => ({
      ...con,
      analyzeResult: (0, import_lowcode_code_generator3.componentAnalyzer)(con)
    }));
    containers.forEach((container) => {
      let type;
      switch (container.containerType) {
        case "Page":
          type = import_lowcode_code_generator2.InternalDependencyType.PAGE;
          break;
        case "Block":
          type = import_lowcode_code_generator2.InternalDependencyType.BLOCK;
          break;
        default:
          type = import_lowcode_code_generator2.InternalDependencyType.COMPONENT;
          break;
      }
      const dep = {
        type,
        moduleName: container.moduleName,
        destructuring: false,
        exportName: container.moduleName,
        dependencyType: import_lowcode_code_generator2.DependencyType.Internal
      };
      internalDeps[dep.moduleName] = dep;
    });
    const containersDeps = [].concat(...containers.map((c) => c.deps || []));
    containers.forEach((container) => {
      if (container.children) {
        handleSubNodes(
          container.children,
          {
            node: (i) => processChildren(i)
          },
          {
            rerun: true
          }
        );
      }
    });
    containers.forEach((container) => {
      const depNames = this.getComponentNames(container);
      container.deps = uniqueArray(depNames, (i) => i).map((depName) => getInternalDep(internalDeps, depName) || compDeps[depName]).filter(Boolean);
    });
    const routes = containers.filter((container) => container.containerType === "Page").map((page) => {
      return {
        path: page.fileName,
        fileName: page.fileName,
        componentName: page.moduleName
      };
    });
    const routerDeps = routes.map((r) => internalDeps[r.componentName] || compDeps[r.componentName]).filter((dep) => !!dep);
    let utils;
    if (schema.utils) {
      utils = schema.utils;
      utilsDeps = schema.utils.filter(
        (u) => u.type !== "function"
      ).map(
        (u) => {
          var _a, _b;
          return {
            ...u.content,
            componentName: u.name,
            version: u.content.version || "*",
            destructuring: (_a = u.content.destructuring) != null ? _a : false,
            exportName: (_b = u.content.exportName) != null ? _b : u.name
          };
        }
      );
    } else {
      utils = [];
    }
    let npms = [];
    containers.forEach((con) => {
      const p = (con.deps || []).map((dep) => {
        return dep.dependencyType === import_lowcode_code_generator2.DependencyType.External ? dep : null;
      }).filter((dep) => dep !== null);
      const npmInfos = p.filter(Boolean).map((i) => ({
        package: i.package,
        version: i.version
      }));
      npms.push(...npmInfos);
    });
    npms.push(
      ...utilsDeps.map((utilsDep) => ({
        package: utilsDep.package,
        version: utilsDep.version
      }))
    );
    npms = uniqueArray(npms, (i) => i.package).filter(Boolean);
    return {
      containers,
      globalUtils: {
        utils,
        deps: utilsDeps
      },
      globalI18n: schema.i18n,
      globalRouter: {
        routes,
        deps: routerDeps
      },
      module: {
        moduleDeps,
        routes,
        deps: routerDeps
      },
      project: {
        css: schema.css,
        constants: schema.constants,
        config: schema.config || {},
        meta: schema.meta || {},
        i18n: schema.i18n,
        containersDeps,
        utilsDeps,
        packages: npms || [],
        dataSourcesTypes: this.collectDataSourcesTypes(schema),
        projectRemark: this.getProjectRemark(containers)
      }
    };
  }
  getProjectRemark(containers) {
    return {
      isSingleComponent: containers.length === 1 && containers[0].containerType === "Component"
    };
  }
  getComponentNames(children) {
    return handleSubNodes(
      children,
      {
        node: (i) => i.componentName
      },
      {
        rerun: true
      }
    );
  }
  decodeSchema(schemaSrc) {
    let schema;
    if (typeof schemaSrc === "string") {
      try {
        schema = JSON.parse(schemaSrc);
      } catch (error) {
        throw new import_lowcode_code_generator2.CodeGeneratorError(
          `Parse schema failed: ${getErrorMessage(error) || "unknown reason"}`
        );
      }
    } else {
      schema = schemaSrc;
    }
    return schema;
  }
  collectDataSourcesTypes(schema) {
    var _a, _b;
    const dataSourcesTypes = /* @__PURE__ */ new Set();
    const defaultDataSourceType = "fetch";
    (_b = (_a = schema.dataSource) == null ? void 0 : _a.list) == null ? void 0 : _b.forEach((ds) => {
      dataSourcesTypes.add(ds.type || defaultDataSourceType);
    });
    schema.componentsTree.forEach((rootNode) => {
      var _a2, _b2;
      (_b2 = (_a2 = rootNode.dataSource) == null ? void 0 : _a2.list) == null ? void 0 : _b2.forEach((ds) => {
        dataSourcesTypes.add(ds.type || defaultDataSourceType);
      });
    });
    return Array.from(dataSourcesTypes.values());
  }
};

// src/generator/ProjectBuilder.ts
var import_lowcode_code_generator8 = __toESM(require_lib());

// src/generator/ModuleBuilder.ts
var import_change_case2 = __toESM(require("change-case"));
var import_lowcode_code_generator5 = __toESM(require_lib());

// src/generator/ChunkBuilder.ts
function whichFamily(type) {
  const idx = FILE_TYPE_FAMILY.findIndex((family) => family.indexOf(type) >= 0);
  if (idx < 0) {
    return void 0;
  }
  return [idx, FILE_TYPE_FAMILY[idx]];
}
var groupChunks = (chunks) => {
  const tmp = {};
  const col = chunks.reduce((chunksSet, chunk) => {
    const fileKey = chunk.subModule || COMMON_SUB_MODULE_NAME;
    if (!chunksSet[fileKey]) {
      chunksSet[fileKey] = [];
    }
    const res = whichFamily(chunk.fileType);
    const info = {
      chunk
    };
    if (res) {
      const [familyIdx, family] = res;
      const rank = family.indexOf(chunk.fileType);
      if (tmp[fileKey]) {
        if (tmp[fileKey][familyIdx] !== void 0) {
          if (tmp[fileKey][familyIdx] > rank) {
            tmp[fileKey][familyIdx] = rank;
          }
        } else {
          tmp[fileKey][familyIdx] = rank;
        }
      } else {
        tmp[fileKey] = {};
        tmp[fileKey][familyIdx] = rank;
      }
      info.familyIdx = familyIdx;
    }
    chunksSet[fileKey].push(info);
    return chunksSet;
  }, {});
  const result = [];
  Object.keys(col).forEach((key) => {
    const byType = {};
    col[key].forEach((info) => {
      let t = info.chunk.fileType;
      if (info.familyIdx !== void 0) {
        t = FILE_TYPE_FAMILY[info.familyIdx][tmp[key][info.familyIdx]];
        info.chunk.fileType = t;
      }
      if (!byType[t]) {
        byType[t] = [];
      }
      byType[t].push(info.chunk);
    });
    result.push(...Object.keys(byType).map((t) => byType[t]));
  });
  return result;
};
var ChunkBuilder = class {
  constructor(plugins2 = []) {
    __publicField(this, "plugins");
    this.plugins = plugins2;
  }
  async run(ir, initialStructure = {
    ir,
    chunks: [],
    depNames: [],
    contextData: {}
  }) {
    const structure = initialStructure;
    const finalStructure = await this.plugins.reduce(
      async (previousPluginOperation, plugin) => {
        const modifiedStructure = await previousPluginOperation;
        return plugin(modifiedStructure);
      },
      Promise.resolve(structure)
    );
    const chunks = groupChunks(finalStructure.chunks);
    return {
      chunks
    };
  }
  getPlugins() {
    return this.plugins;
  }
  addPlugin(plugin) {
    this.plugins.push(plugin);
  }
};

// src/generator/CodeBuilder.ts
var import_lowcode_code_generator4 = __toESM(require_lib());
var CodeBuilder = class {
  constructor(chunkDefinitions = []) {
    __publicField(this, "chunkDefinitions", []);
    __publicField(this, "generators", {
      [import_lowcode_code_generator4.ChunkType.STRING]: (str) => str,
      [import_lowcode_code_generator4.ChunkType.JSON]: (json) => JSON.stringify(json)
    });
    this.chunkDefinitions = chunkDefinitions;
  }
  link(chunkDefinitions = []) {
    const chunks = chunkDefinitions || this.chunkDefinitions;
    if (chunks.length <= 0) {
      return "";
    }
    const unprocessedChunks = chunks.map((chunk) => {
      return {
        name: chunk.name,
        type: chunk.type,
        content: chunk.content,
        linkAfter: this.cleanupInvalidChunks(chunk.linkAfter, chunks)
      };
    });
    const resultingString = [];
    while (unprocessedChunks.length > 0) {
      let indexToRemove = 0;
      for (let index = 0; index < unprocessedChunks.length; index++) {
        if (unprocessedChunks[index].linkAfter.length <= 0) {
          indexToRemove = index;
          break;
        }
      }
      if (unprocessedChunks[indexToRemove].linkAfter.length > 0) {
        throw new import_lowcode_code_generator4.CodeGeneratorError(
          "Operation aborted. Reason: cyclic dependency between chunks."
        );
      }
      const { type, content, name } = unprocessedChunks[indexToRemove];
      const compiledContent = this.generateByType(type, content);
      if (compiledContent) {
        resultingString.push(`${compiledContent}
`);
      }
      unprocessedChunks.splice(indexToRemove, 1);
      if (!unprocessedChunks.some((ch) => ch.name === name)) {
        unprocessedChunks.forEach(
          (ch) => {
            ch.linkAfter = ch.linkAfter.filter((after) => after !== name);
          }
        );
      }
    }
    return resultingString.join("\n");
  }
  generateByType(type, content) {
    if (!content) {
      return "";
    }
    if (Array.isArray(content)) {
      return content.map((contentItem) => this.generateByType(type, contentItem)).join("\n");
    }
    if (!this.generators[type]) {
      throw new Error(
        `Attempted to generate unknown type ${type}. Please register a generator for this type in builder/index.ts`
      );
    }
    return this.generators[type](content);
  }
  cleanupInvalidChunks(linkAfter, chunks) {
    return linkAfter.filter((chunkName) => chunks.some((chunk) => chunk.name === chunkName));
  }
};

// src/generator/ModuleBuilder.ts
var import_lowcode_code_generator6 = __toESM(require_lib());
var { createResultFile, createResultDir, addFile } = import_lowcode_code_generator6.default.utils.resultHelper;
function createModuleBuilder(options = {
  plugins: [],
  postProcessors: []
}) {
  const chunkGenerator = new ChunkBuilder(options.plugins);
  const linker = new CodeBuilder();
  const generateModule = async (input) => {
    let moduleName = (input == null ? void 0 : input.moduleName) ? input.moduleName : "demoTest";
    moduleName = import_change_case2.default.snakeCase(moduleName).replace("_", "-");
    const COMMON_SUB_MODULE_NAME2 = `${moduleName}.component`;
    const moduleMainName = options.mainFileName || COMMON_SUB_MODULE_NAME2;
    if (chunkGenerator.getPlugins().length <= 0) {
      throw new import_lowcode_code_generator5.CodeGeneratorError(
        "No plugins found. Component generation cannot work without any plugins!"
      );
    }
    let files = [];
    const { chunks } = await chunkGenerator.run(input, {
      ir: input,
      chunks: [],
      depNames: [],
      contextData: options.contextData || {}
    });
    chunks.forEach((fileChunkList) => {
      const content = linker.link(fileChunkList);
      const file = createResultFile(
        fileChunkList[0].subModule || moduleMainName,
        fileChunkList[0].fileType,
        content
      );
      files.push(file);
    });
    if (options.postProcessors.length > 0) {
      files = files.map((file) => {
        let { content, ext: type, name } = file;
        options.postProcessors.forEach((processer) => {
          content = processer(content, type, name);
        });
        return createResultFile(file.name, type, content);
      });
    }
    return {
      files
    };
  };
  const generateModuleCode = async (schema) => {
    const schemaParser = new SchemaParser();
    const parseResult = schemaParser.parse(schema);
    const containerInfo = parseResult.containers[0];
    const { files } = await generateModule(containerInfo);
    const dir = createResultDir(containerInfo.moduleName);
    files.forEach((file) => addFile(dir, file));
    return dir;
  };
  const linkCodeChunks = (chunks, fileName) => {
    const files = [];
    Object.keys(chunks).forEach((fileKey) => {
      const fileChunkList = chunks[fileKey];
      const content = linker.link(fileChunkList);
      const file = createResultFile(
        fileChunkList[0].subModule || fileName,
        fileChunkList[0].fileType,
        content
      );
      files.push(file);
    });
    return files;
  };
  return {
    generateModule,
    generateModuleCode,
    linkCodeChunks,
    addPlugin: chunkGenerator.addPlugin.bind(chunkGenerator)
  };
}

// src/generator/ProjectBuilder.ts
var { createResultDir: createResultDir2, addDirectory, addFile: addFile2 } = import_lowcode_code_generator8.default.utils.resultHelper;
var ProjectBuilder = class {
  constructor(builderOptions) {
    __publicField(this, "template");
    __publicField(this, "plugins");
    __publicField(this, "postProcessors");
    __publicField(this, "schemaParser");
    __publicField(this, "projectPreProcessors");
    __publicField(this, "projectPostProcessors");
    __publicField(this, "inStrictMode");
    __publicField(this, "extraContextData");
    let customBuilderOptions = builderOptions;
    if (typeof builderOptions.customizeBuilderOptions === "function") {
      customBuilderOptions = builderOptions.customizeBuilderOptions(builderOptions);
    }
    const {
      template,
      plugins: plugins2,
      postProcessors,
      schemaParser = new SchemaParser(),
      projectPreProcessors = [],
      projectPostProcessors = [],
      inStrictMode = false,
      extraContextData = {}
    } = customBuilderOptions;
    this.template = template;
    this.plugins = plugins2;
    this.postProcessors = postProcessors;
    this.schemaParser = schemaParser;
    this.projectPreProcessors = projectPreProcessors;
    this.projectPostProcessors = projectPostProcessors;
    this.inStrictMode = inStrictMode;
    this.extraContextData = extraContextData;
  }
  async generateProject(originalSchema) {
    var _a, _b, _c, _d;
    const { schemaParser } = this;
    let schema = typeof originalSchema === "string" ? JSON.parse(originalSchema) : originalSchema;
    for (const preProcessor of this.projectPreProcessors) {
      schema = await preProcessor(schema);
    }
    if (!schemaParser.validate(schema)) {
      throw new import_lowcode_code_generator7.CodeGeneratorError("Schema is invalid");
    }
    const parseResult = schemaParser.parse(schema);
    const projectRoot = await this.template.generateTemplate(parseResult);
    let buildResult = [];
    const builders = this.createModuleBuilders({
      extraContextData: {
        projectRemark: (_a = parseResult == null ? void 0 : parseResult.project) == null ? void 0 : _a.projectRemark,
        template: this.template
      }
    });
    const containerBuildResult = await Promise.all(
      parseResult.containers.map(async (containerInfo) => {
        let builder;
        let path2;
        if (containerInfo.containerType === "Page") {
          builder = builders.pages;
          path2 = this.template.slots.pages.path;
        } else {
          builder = builders.components;
          path2 = this.template.slots.components.path;
        }
        const { files } = await builder.generateModule(containerInfo);
        return {
          moduleName: containerInfo.moduleName.toLowerCase(),
          path: path2,
          files
        };
      })
    );
    buildResult = buildResult.concat(containerBuildResult);
    if (parseResult.globalRouter && builders.router) {
      const { files } = await builders.router.generateModule(parseResult.globalRouter);
      buildResult.push({
        path: this.template.slots.router.path,
        files
      });
    }
    if (parseResult.module && builders.module) {
      const { files } = await builders.module.generateModule(parseResult.module);
      buildResult.push({
        path: this.template.slots.module.path,
        files
      });
    }
    if (parseResult.project && builders.entry) {
      const { files } = await builders.entry.generateModule(parseResult.project);
      buildResult.push({
        path: ((_b = this.template.slots.entry) == null ? void 0 : _b.path) || ".",
        files
      });
    }
    if (builders.appConfig) {
      const { files } = await builders.appConfig.generateModule(parseResult);
      buildResult.push({
        path: this.template.slots.appConfig.path,
        files
      });
    }
    if (builders.buildConfig) {
      const { files } = await builders.buildConfig.generateModule(parseResult);
      buildResult.push({
        path: this.template.slots.buildConfig.path,
        files
      });
    }
    if (parseResult.project && builders.constants && this.template.slots.constants) {
      const { files } = await builders.constants.generateModule(parseResult.project);
      buildResult.push({
        path: this.template.slots.constants.path,
        files
      });
    }
    if (parseResult.globalUtils && builders.utils && this.template.slots.utils) {
      const { files } = await builders.utils.generateModule(parseResult.globalUtils);
      buildResult.push({
        path: this.template.slots.utils.path,
        files
      });
    }
    if (builders.i18n && this.template.slots.i18n) {
      const { files } = await builders.i18n.generateModule(parseResult.project);
      buildResult.push({
        path: this.template.slots.i18n.path,
        files
      });
    }
    if (parseResult.project && builders.globalStyle) {
      const { files } = await builders.globalStyle.generateModule(parseResult.project);
      buildResult.push({
        path: this.template.slots.globalStyle.path,
        files
      });
    }
    if (parseResult.project && builders.htmlEntry) {
      const { files } = await builders.htmlEntry.generateModule(parseResult.project);
      buildResult.push({
        path: this.template.slots.htmlEntry.path,
        files
      });
    }
    if (parseResult.project && builders.packageJSON) {
      const { files } = await builders.packageJSON.generateModule(parseResult.project);
      buildResult.push({
        path: this.template.slots.packageJSON.path,
        files
      });
    }
    if (parseResult.project && builders.demo) {
      const { files } = await builders.demo.generateModule(parseResult.project);
      buildResult.push({
        path: this.template.slots.demo.path,
        files
      });
    }
    await this.generateExtraSlots(builders, parseResult, buildResult);
    const isSingleComponent = (_d = (_c = parseResult == null ? void 0 : parseResult.project) == null ? void 0 : _c.projectRemark) == null ? void 0 : _d.isSingleComponent;
    buildResult.forEach((moduleInfo) => {
      let targetDir = getDirFromRoot(projectRoot, moduleInfo.path);
      if (moduleInfo.moduleName && !isSingleComponent) {
        const dir = createResultDir2(moduleInfo.moduleName);
        addDirectory(targetDir, dir);
        targetDir = dir;
      }
      moduleInfo.files.forEach((file) => addFile2(targetDir, file));
    });
    let finalResult = projectRoot;
    for (const projectPostProcessor of this.projectPostProcessors) {
      finalResult = await projectPostProcessor(finalResult, schema, originalSchema, {
        template: this.template,
        parseResult
      });
    }
    return finalResult;
  }
  createModuleBuilders(extraContextData = {}) {
    const builders = {};
    Object.keys(this.plugins).forEach((pluginName) => {
      if (this.plugins[pluginName].length > 0) {
        const options = {};
        if (this.template.slots[pluginName] && this.template.slots[pluginName].fileName) {
          options.mainFileName = this.template.slots[pluginName].fileName;
        }
        builders[pluginName] = createModuleBuilder({
          plugins: this.plugins[pluginName],
          postProcessors: this.postProcessors,
          contextData: {
            inStrictMode: this.inStrictMode,
            tolerateEvalErrors: true,
            evalErrorsHandler: "",
            ...this.extraContextData,
            ...extraContextData
          },
          ...options
        });
      }
    });
    return builders;
  }
  async generateExtraSlots(builders, parseResult, buildResult) {
    for (const slotName in this.template.slots) {
      if (!isBuiltinSlotName(slotName)) {
        const { files } = await builders[slotName].generateModule(parseResult);
        buildResult.push({
          path: this.template.slots[slotName].path,
          files
        });
      }
    }
  }
};
function createProjectBuilder(initOptions) {
  return new ProjectBuilder(initOptions);
}
function getDirFromRoot(root, path2) {
  let current = root;
  path2.forEach((p) => {
    const exist = current.dirs.find((d) => d.name === p);
    if (exist) {
      current = exist;
    } else {
      const newDir = createResultDir2(p);
      addDirectory(current, newDir);
      current = newDir;
    }
  });
  return current;
}

// src/solutions/template/static-files.ts
var import_lowcode_code_generator9 = __toESM(require_lib());

// src/solutions/template/files/ .lintstagedrc.js.ts
function getFile() {
  return [
    [],
    {
      name: " .lintstagedrc",
      ext: "js",
      content: "// .lintstagedrc.js\nmodule.exports = {\n  '*.js': ['prettier --config .prettierrc --write', 'eslint --fix --ext .js'],\n  '*.ts': ['prettier --config .prettierrc --write', 'eslint --fix --ext .ts'],\n  '*.json': 'prettier --config .prettierrc --write',\n};"
    }
  ];
}

// src/solutions/template/files/.browserslistrc.ts
function getFile2() {
  return [
    [],
    {
      name: ".browserslistrc",
      ext: "",
      content: "# This file is used by the build system to adjust CSS and JS output to support the specified browsers below.\n# For additional information regarding the format and rule options, please see:\n# https://github.com/browserslist/browserslist#queries\n\n# You can see what browsers were selected by your queries by running:\n#   npx browserslist\n\n> 0.5%\nlast 2 versions\nFirefox ESR\nnot dead\nnot IE 9-11 # For IE 9-11 support, remove 'not'."
    }
  ];
}

// src/solutions/template/files/.drone.yml.ts
function getFile3() {
  return [
    [],
    {
      name: ".drone",
      ext: "yml",
      content: '#12\nkind: pipeline\ntype: docker\nname: CI Process\nsteps:\n  - name: npm package\n    image: node:14.21.1\n    commands:\n      - npm config set prefix "/var/lib/node_modules"\n      - npm config set registry=https://registry.npmmirror.com\n      - npm install --unsafe-perm\n      - npm cache clean --force\n      - rm -rf node_modules/.cache/angular-build-dl\n      - npm run build-prod\n    volumes:\n      - name: cache\n        path: /root/.npm\n      - name: node\n        path: /drone/src/node_modules\n    when:\n      status: [success]\n  - name: version control\n    image: registry.digiwincloud.com.cn/base/base_vc\n    commands:\n      - make -C version_control branch=$DRONE_TARGET_BRANCH\n    when:\n      status: [success]\n\n  - name: dap publish docker image\n    image: plugins/docker\n    settings:\n      username:\n        from_secret: dockerUsername\n      password:\n        from_secret: dockerPassword\n      repo: registry.digiwincloud.com.cn/tiger/demofrontend-5.2.0\n      registry: registry.digiwincloud.com.cn\n      experimental: true\n    when:\n      status: [ success ]\n\n\ntrigger:\n  branch:\n    - feature\n    - release\n    - develop\n    - master\n  event:\n    - push\n    - pull_request\n    - cron\nvolumes:\n  - name: cache\n    host:\n      path: /var/lib/cache/npm-test\n  - name: node\n    host:\n      path: /data/package/demo_frontend/node_modules\n'
    }
  ];
}

// src/solutions/template/files/.editorconfig.ts
function getFile4() {
  return [
    [],
    {
      name: ".editorconfig",
      ext: "",
      content: "# Editor configuration, see http://editorconfig.org\nroot = true\n\n[*]\ncharset = utf-8\nindent_style = space\nindent_size = 2\ninsert_final_newline = true\ntrim_trailing_whitespace = true\nend_of_line = lf\n\n[*.md]\nmax_line_length = off\ntrim_trailing_whitespace = false\n"
    }
  ];
}

// src/solutions/template/files/.eslintrc.json.ts
function getFile5() {
  return [
    [],
    {
      name: ".eslintrc",
      ext: "json",
      content: '{\n  "root": true,\n  "ignorePatterns": [\n    "projects/**/*"\n  ],\n  "overrides": [\n    {\n      "files": [\n        "*.ts"\n      ],\n      "parserOptions": {\n        "project": [\n          "tsconfig.json"\n        ],\n        "createDefaultProgram": true\n      },\n      "extends": [\n        "plugin:@angular-eslint/recommended",\n        "plugin:@angular-eslint/template/process-inline-templates"\n      ],\n      "rules": {\n        "spaced-comment": [\n          "error",\n          "always",\n          {\n            "line": {\n              "markers": [\n                "/"\n              ],\n              "exceptions": [\n                "-",\n                "+"\n              ]\n            },\n            "block": {\n              "markers": [\n                "!"\n              ],\n              "exceptions": [\n                "*"\n              ],\n              "balanced": true\n            }\n          }\n        ],\n        "curly": [\n          "error",\n          "all"\n        ],\n        "eol-last": "error",\n        "guard-for-in": "error",\n        "indent": [\n          "error",\n          2,\n          {\n            "SwitchCase": 1\n          }\n        ],\n        "no-labels": "error",\n        "max-len": [\n          "error",\n          340,\n          4\n        ],\n        "no-caller": "error",\n        "no-bitwise": "error",\n        "no-console": "off",\n        "no-restricted-syntax": [\n          "error",\n          {\n            "selector": "CallExpression[callee.object.name=\\"console\\"][callee.property.name!=/^(log|warn|error|info|trace)$/]",\n            "message": "Unexpected property on console object was called"\n          }\n        ],\n        "no-new-wrappers": "error",\n        "no-debugger": "error",\n        "no-empty": "off",\n        "no-eval": "error",\n        "no-shadow": [\n          "error",\n          {\n            "hoist": "functions"\n          }\n        ],\n        "no-throw-literal": "error",\n        "no-fallthrough": "error",\n        "no-trailing-spaces": "error",\n        "no-unused-expressions": [\n          "error",\n          {\n            "allowTernary": true\n          }\n        ],\n        "no-var": "error",\n        "prefer-const": [\n          "error",\n          {\n            "destructuring": "any",\n            "ignoreReadBeforeAssign": false\n          }\n        ],\n        "quotes": [\n          "error",\n          "single",\n          {\n            "allowTemplateLiterals": true,\n            "avoidEscape": true\n          }\n        ],\n        "radix": "error",\n        "semi": [\n          "error",\n          "always"\n        ],\n        "eqeqeq": [\n          "error",\n          "allow-null"\n        ],\n        "camelcase": "off",\n        "@angular-eslint/directive-selector": [\n          "error",\n          {\n            "type": "attribute",\n            "prefix": [\n              "app",\n              "dw",\n              "cust",\n              "demo"\n            ],\n            "style": "camelCase"\n          }\n        ],\n        "@angular-eslint/component-selector": [\n          "error",\n          {\n            "type": "element",\n            "prefix": [\n              "app",\n              "dw",\n              "cust",\n              "demo"\n            ],\n            "style": "kebab-case"\n          }\n        ],\n        "@angular-eslint/no-inputs-metadata-property": "error",\n        "@angular-eslint/no-outputs-metadata-property": "error",\n        "@angular-eslint/no-host-metadata-property": "error",\n        "@angular-eslint/no-input-rename": "error",\n        "@angular-eslint/no-output-rename": "error",\n        "@angular-eslint/use-lifecycle-interface": "error",\n        "@angular-eslint/use-pipe-transform-interface": "error",\n        "@angular-eslint/component-class-suffix": "error",\n        "@angular-eslint/directive-class-suffix": "error",\n        "@angular-eslint/use-component-view-encapsulation": "off",\n        "@angular-eslint/no-attribute-decorator": "error",\n        "@angular-eslint/no-output-native": "error",\n        "@angular-eslint/no-output-on-prefix": "error",\n        "@angular-eslint/no-forward-ref": "off",\n        "@angular-eslint/no-unused-css": "off",\n        "@angular-eslint/contextual-lifecycle": "error",\n        "@angular-eslint/no-pipe-impure": "error",\n        "@angular-eslint/no-empty-lifecycle-method": [\n          "off"\n        ],\n        "@angular-eslint/no-conflicting-lifecycle": "off"\n      }\n    },\n    {\n      "files": [\n        "*.html"\n      ],\n      "extends": [\n        "plugin:@angular-eslint/template/recommended"\n      ],\n      "rules": {}\n    }\n  ]\n}'
    }
  ];
}

// src/solutions/template/files/.gitignore.ts
function getFile6() {
  return [
    [],
    {
      name: ".gitignore",
      ext: "",
      content: "# See http://help.github.com/ignore-files/ for more about ignoring files.\n\n# compiled output\n/dist\n/tmp\n/out-tsc\n/doc\n\n# dependencies\n/node_modules\n\n# IDEs and editors\n/.idea\n.project\n.classpath\n.c9/\n*.launch\n.settings/\n*.sublime-workspace\n\n# IDE - VSCode\n.vscode/*\n!.vscode/settings.json\n!.vscode/tasks.json\n!.vscode/launch.json\n!.vscode/extensions.json\n\n# misc\n/.sass-cache\n/connect.lock\n/coverage\n/libpeerconnection.log\nnpm-debug.log\ntestem.log\n/typings\n\n# e2e\n/e2e/*.js\n/e2e/*.map\n\n# System Files\n.DS_Store\nThumbs.db\npackage-lock.json\n\ngitDiff.sh\n.update\n\n# SonarQube\n.scannerwork\nsonar-project.properties\n\n.git"
    }
  ];
}

// src/solutions/template/files/.npmrc.ts
function getFile7() {
  return [
    [],
    {
      name: ".npmrc",
      ext: "",
      content: 'registry=https://registry.npmmirror.com\nunsafe-perm=true\n@webdpt:registry=https://repo.digiwincloud.com.cn/maven/repository/npm-webdpt/\n@app-custom:registry=https://tiger-devops-nexus.digiwincloud.com.cn/repository/npm-app-custom/\nnode-options=--max-old-space-size=15000\n//bm-npm-devops.digiwinlocal.com.cn/:_authToken="JmN1OXQ9pYO11gdqWNpauQ=="\n@bm-custom:registry=http://bm-npm-devops.digiwinlocal.com.cn/\n'
    }
  ];
}

// src/solutions/template/files/angular.json.ts
function getFile8() {
  return [
    [],
    {
      name: "angular",
      ext: "json",
      content: '{\n  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",\n  "version": 1,\n  "newProjectRoot": "projects",\n  "projects": {\n    "ng-webdpt": {\n      "root": "",\n      "sourceRoot": "src",\n      "prefix": "demo",\n      "projectType": "application",\n      "architect": {\n        "build": {\n          "builder": "ngx-build-plus:browser",\n          "options": {\n            "allowedCommonJsDependencies": [\n              "crypto-js",\n              "ag-grid-angular",\n              "ag-grid-community",\n              "@ant-design/colors",\n              "date-fns/format",\n              "date-fns/parse",\n              "@webdpt/framework/themes",\n              "ag-grid-enterprise"\n            ],\n            "outputPath": "dist",\n            "index": "src/index.html",\n            "main": "src/main.ts",\n            "tsConfig": "src/tsconfig.app.json",\n            "polyfills": "src/polyfills.ts",\n            "assets": [\n              "src/assets",\n              "src/favicon.ico",\n              {\n                "glob": "**/*",\n                "input": "./node_modules/@webdpt/framework/assets/dw-framework",\n                "output": "assets/dw-framework"\n              },\n              {\n                "glob": "**/*",\n                "input": "src/assets",\n                "output": "assets"\n              },\n              {\n                "glob": "**/*",\n                "input": "./node_modules/@ant-design/icons-angular/src/inline-svg/",\n                "output": "assets"\n              }\n            ],\n            "styles": [\n              "src/styles.less"\n            ],\n            "stylePreprocessorOptions": {\n              "includePaths": ["src/app/implementation/style"]\n            },\n            "scripts": [\n              "node_modules/jsencrypt/bin/jsencrypt.js",\n              "src/assets/iconfont/iconfont.js",\n              "node_modules/echarts/dist/echarts.min.js",\n              "node_modules/systemjs/dist/s.js",\n              "node_modules/systemjs/dist/extras/named-register.js",\n              "node_modules/systemjs/dist/extras/amd.js"\n            ],\n            "vendorChunk": true,\n            "extractLicenses": false,\n            "buildOptimizer": false,\n            "sourceMap": true,\n            "optimization": false,\n            "namedChunks": true,\n   "commonChunk": false\n          },\n          "configurations": {\n            "production": {\n              "budgets": [\n                {\n                  "type": "anyComponentStyle",\n                  "maximumWarning": "6kb"\n                }\n              ],\n              "optimization": true,\n              "outputHashing": "all",\n              "sourceMap": false,\n              "namedChunks": false,\n              "extractLicenses": true,\n              "vendorChunk": false,\n              "buildOptimizer": true,\n              "fileReplacements": [\n                {\n                  "replace": "src/environments/environment.ts",\n                  "with": "src/environments/environment.prod.ts"\n                }\n              ],\n              "serviceWorker": true,\n            "plugin": "~/node_modules/@webdpt/mfa-utils/lib/ngx-build-plugin-merge.js",\n              "singleBundle": true\n            },\n            "service-worker-dev": {\n              "budgets": [\n                {\n                  "type": "anyComponentStyle",\n                  "maximumWarning": "6kb"\n                }\n              ],\n              "outputHashing": "all",\n              "namedChunks": false,\n              "extractLicenses": true,\n              "vendorChunk": false,\n              "serviceWorker": true\n            },\n            "development": {\n              "buildOptimizer": false,\n              "optimization": false,\n              "vendorChunk": true,\n              "extractLicenses": false,\n              "sourceMap": true,\n              "namedChunks": true\n            }\n          },\n          "defaultConfiguration": "production"\n        },\n        "serve": {\n          "builder": "ngx-build-plus:dev-server",\n          "options": {\n            "browserTarget": "ng-webdpt:build:development",\n            "port": 4211\n             },\n          "configurations": {\n            "production": {\n              "browserTarget": "ng-webdpt:build:production"\n              }\n          }\n        },\n        "extract-i18n": {\n          "builder": "ngx-build-plus:extract-i18n",\n          "options": {\n            "browserTarget": "ng-webdpt:build"\n                }\n        },\n        "test": {\n          "builder": "@angular-devkit/build-angular:karma",\n          "options": {\n            "main": "src/test.ts",\n            "karmaConfig": "./karma.conf.js",\n            "polyfills": "src/polyfills.ts",\n            "tsConfig": "src/tsconfig.spec.json",\n            "scripts": [\n              "node_modules/jsencrypt/bin/jsencrypt.js",\n              "src/assets/iconfont/iconfont.js"\n            ],\n            "styles": [\n              "src/styles.less"\n            ],\n            "assets": [\n              "src/assets",\n              "src/favicon.ico",\n              {\n                "glob": "**/*",\n                "input": "./node_modules/@webdpt/framework/assets/dw-framework",\n                "output": "assets/dw-framework"\n              },\n              {\n                "glob": "**/*",\n                "input": "src/assets",\n                "output": "assets"\n              },\n              {\n                "glob": "**/*",\n                "input": "./node_modules/@ant-design/icons-angular/src/inline-svg/",\n                "output": "assets"\n              }\n            ]\n          }\n        },\n        "e2e": {\n          "builder": "@angular-devkit/build-angular:protractor",\n          "options": {\n            "protractorConfig": "e2e/protractor.conf.js",\n            "devServerTarget": "ng-webdpt:serve"\n          },\n          "configurations": {\n            "production": {\n              "devServerTarget": "ng-webdpt:serve:production"\n            }\n          }\n        },\n        "lint": {\n          "builder": "@angular-eslint/builder:lint",\n          "options": {\n            "lintFilePatterns": [\n              "src/**/*.ts",\n              "src/**/*.html"\n            ]\n          }\n        }\n      }\n    }\n  }, \n  "defaultProject": "ng-webdpt", \n  "schematics": { \n    "@schematics/angular:component": { \n      "prefix": "app", \n      "style": "less"\n }, \n    "@schematics/angular:directive": { \n      "prefix": "app"\n }\n }, \n  "cli": { \n    "warnings": {}, \n    "analytics": false, \n    "defaultCollection": "@angular-eslint/schematics"\n }\n} \n'
    }
  ];
}

// src/solutions/template/files/Dockerfile.ts
function getFile9() {
  return [
    [],
    {
      name: "Dockerfile",
      ext: "",
      content: '# \u6253\u5305\u5C08\u6848\nFROM        registry.digiwincloud.com.cn/base/digiwin_alpine_nginx:1.12.1\nENV         buildfile=./buildfile\nCOPY        ./dist/ /usr/share/nginx/html/\nADD         ${buildfile}/nginx.conf /etc/nginx/\nADD         ${buildfile}/default.conf /etc/nginx/conf.d/\nADD         ${buildfile}/frontendShell.sh /usr/share/nginx/html/\nADD         ${buildfile}/dockerEnv.sh /usr/share/nginx/html/\nRUN         chmod +x /usr/share/nginx/html/frontendShell.sh\nRUN         chmod +x /usr/share/nginx/html/dockerEnv.sh\nWORKDIR     /usr/share/nginx/html\nEXPOSE      80\nENTRYPOINT ["/usr/share/nginx/html/frontendShell.sh"]\n'
    }
  ];
}

// src/solutions/template/files/karma.conf.js.ts
function getFile10() {
  return [
    [],
    {
      name: "karma.conf",
      ext: "js",
      content: "// Karma configuration file, see link for more information\n// https://karma-runner.github.io/1.0/config/configuration-file.html\n\nmodule.exports = function (config) {\n  config.set({\n    basePath: '',\n    frameworks: ['jasmine', '@angular-devkit/build-angular'],\n    plugins: [\n      require('karma-jasmine'),\n      require('karma-chrome-launcher'),\n      require('karma-jasmine-html-reporter'),\n      require('karma-coverage'),\n      require('@angular-devkit/build-angular/plugins/karma')\n    ],\n    client: {\n      clearContext: false // leave Jasmine Spec Runner output visible in browser\n    },\n    coverageReporter: {\n      dir: require('path').join(__dirname, './coverage/ng-webdpt'),\n      subdir: '.',\n      reporters: [\n        { type: 'html' },\n        { type: 'lcovonly' },\n        { type: 'text-summary' }\n      ]\n    },\n    reporters: ['progress', 'kjhtml'],\n    port: 9876,\n    colors: true,\n    logLevel: config.LOG_INFO,\n    autoWatch: true,\n    browsers: ['ChromeHeadless'],\n    singleRun: false,\n    restartOnFileChange: true\n  });\n};\n"
    }
  ];
}

// src/solutions/template/files/Makefile.ts
function getFile11() {
  return [
    [],
    {
      name: "Makefile",
      ext: "",
      content: '# \u9700\u4FEE\u6539\u7684\u53C3\u6578\r\n## app id\r\nAPP_ID=demo\r\n## app \u540D\u7A31\r\nAPP_NAME=demo\r\n## \u5E73\u53F0\u7248\u672C\r\nPLATFORM_VERSION=5.2.10\r\n## dap \u5E73\u53F0\u985E\u5225\uFF0C\u524D\u7AEF\u5C31\u662F frontend, \u5F8C\u7AEF\u5C31\u662F backend\r\nDAP_TYPE=frontend\r\n## registry \u4F4D\u7F6E\r\nDOCKER_REGISTRY_URL=registry.digiwincloud.com.cn\r\n\r\n\r\nSHELL=/bin/bash\r\n\r\n# npm \u76F8\u95DC\u6307\u4EE4\r\nNPM=npm\r\nNPM_INSTALL=$(NPM) install\r\nNPM_RUN=$(NPM) run\r\nNPM_TEST=$(NPM) test\r\nNPM_BUILD=$(NPM_RUN) build\r\nNPM_BUILD_PROD=$(NPM_BUILD)-prod\r\n\r\n# angular \u76F8\u95DC\u6307\u4EE4\r\nNG=ng\r\nNG_SERVE=$(NG) serve\r\nNG_SERVE_PROD=$(NG_SERVE) prod\r\n\r\n\r\n#\u7248\u672C\u63A7\u5236\r\nVERSION:=$(shell cat VERSION)\r\nSUB_VERSION_FILE=./version_control/BUILD\r\n\r\n#docker\r\nDOCKER_CMD=docker\r\nDOCKER_BUILD=$(DOCKER_CMD) build\r\nDOCKER_RM_IMAGE=$(DOCKER_CMD) rmi\r\nDOCKER_PUSH=$(DOCKER_CMD) push\r\nDOCKER_IMAGE_REGISTRY=$(DOCKER_REGISTRY_URL)/$(APP_ID)/\r\nDOCKER_IMAGE_NAME=$(APP_NAME)$(DAP_TYPE)-$(PLATFORM_VERSION)\r\nDOCKER_FULL_IMAGE=$(DOCKER_IMAGE_REGISTRY)$(DOCKER_IMAGE_NAME):$(VERSION).$(shell cat $(SUB_VERSION_FILE))\r\n\r\n\r\ninit:\r\n	$(GIT_ADD_REMOTE) $(GIT_REPOSITORY)\r\ninstall:\r\n	$(NPM_INSTALL)\r\ntest:\r\n	$(NPM_TEST)\r\nunit-test: install test\r\nbuild:\r\n	$(NPM_INSTALL)\r\n	$(NPM_BUILD_PROD)\r\nbuild_prod:\r\n	$(NPM_INSTALL)\r\n	$(NPM_BUILD_PROD)\r\nmove_dist:\r\n	tar cvf dist.tar dist\r\n	mv dist.tar buildfile\r\nclean:\r\n	rm -rf buildfile/dist.tar\r\n	rm -rf dist\r\n\r\ndocker_build:\r\n	@echo "\u958B\u59CB\u6253\u5305 Docker Image - $(DOCKER_FULL_IMAGE)"\r\n	$(DOCKER_BUILD) -t $(DOCKER_FULL_IMAGE) .\r\ndocker_push:\r\n	@echo "\u958B\u59CB push docker image - $(DOCKER_FULL_IMAGE)"\r\n	$(DOCKER_PUSH) $(DOCKER_FULL_IMAGE)\r\ndocker_clean:\r\n	$(DOCKER_RM_IMAGE) $(DOCKER_FULL_IMAGE)\r\ndocker_ci: vc docker_build docker_push docker_clean\r\nvc:\r\n	@make -C version_control branch=$$branch\r\n'
    }
  ];
}

// src/solutions/template/files/ngcc.config.js.ts
function getFile12() {
  return [
    [],
    {
      name: "ngcc.config",
      ext: "js",
      content: "module.exports = {\n  packages: {\n    '@webdpt/components': {\n      ignorableDeepImportMatchers: [\n        /ng-quicksilver\\/date-picker\\/standard-types/,\n        /iv-viewer\\//\n      ]\n    }\n  },\n};\n"
    }
  ];
}

// src/solutions/template/files/ngsw-config.json.ts
function getFile13() {
  return [
    [],
    {
      name: "ngsw-config",
      ext: "json",
      content: '{\n  "index": "/index.html",\n  "assetGroups": [\n    {\n      "name": "app",\n      "installMode": "lazy",\n      "resources": {\n        "files": [\n          "/favicon.ico",\n          "/index.html",\n          "/*.css",\n          "/*.js"\n        ]\n      }\n    }, {\n      "name": "assets",\n      "installMode": "lazy",\n      "updateMode": "lazy",\n      "resources": {\n        "files": [\n          "/assets/**",\n          "!/assets/**/*.json"\n        ]\n      }\n    }\n  ],\n  "dataGroups": [\n    {\n      "name": "app",\n      "urls": ["**"],\n      "cacheConfig": {\n        "strategy": "freshness",\n        "maxSize": 0,\n        "maxAge": "0u",\n        "timeout": "3s"\n      }\n    }\n  ]\n}\n'
    }
  ];
}

// src/solutions/template/files/patches/@schematics+update+0.1102.12.patch.ts
function getFile14() {
  return [
    ["patches"],
    {
      name: "@schematics+update+0.1102.12",
      ext: "patch",
      content: 'diff --git a/node_modules/@schematics/update/migrate/schema.json b/node_modules/@schematics/update/migrate/schema.json\nindex 58fca36..257ee01 100644\n--- a/node_modules/@schematics/update/migrate/schema.json\n+++ b/node_modules/@schematics/update/migrate/schema.json\n@@ -1,6 +1,6 @@\n {\n   "$schema": "http://json-schema.org/schema",\n-  "id": "PostUpdateSchema",\n+  "$id": "PostUpdateSchema",\n   "type": "object",\n   "properties": {\n     "package": {\ndiff --git a/node_modules/@schematics/update/update/schema.json b/node_modules/@schematics/update/update/schema.json\nindex d921b9d..465cf9e 100644\n--- a/node_modules/@schematics/update/update/schema.json\n+++ b/node_modules/@schematics/update/update/schema.json\n@@ -1,6 +1,6 @@\n {\n   "$schema": "http://json-schema.org/schema",\n-  "id": "SchematicsUpdateSchema",\n+  "$id": "SchematicsUpdateSchema",\n   "title": "Schematic Options Schema",\n   "type": "object",\n   "properties": {\n'
    }
  ];
}

// src/solutions/template/files/projects/.DS_Store.ts
function getFile15() {
  return [
    ["projects"],
    {
      name: ".DS_Store",
      ext: "",
      content: "\0\0\0Bud1\0\0\0\0\0\b\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0p\0tlg1Scomp\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0w\0e\0b\0d\0p\0tlg1Scomp\0\0\0\0\0\0Wf\0\0\0\0w\0e\0b\0d\0p\0tmoDDblob\0\0\0\bf\uFFFDrc\uFFFD$\uFFFDA\0\0\0\0w\0e\0b\0d\0p\0tmodDblob\0\0\0\bf\uFFFDrc\uFFFD$\uFFFDA\0\0\0\0w\0e\0b\0d\0p\0tph1Scomp\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\v\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\v\0\0\0E\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0DSDB\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0`\0\0\0\0\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"
    }
  ];
}

// src/solutions/template/files/projects/webdpt/builds/dw-zip.js.ts
function getFile16() {
  return [
    ["projects", "webdpt", "builds"],
    {
      name: "dw-zip",
      ext: "js",
      content: "const fs = require('fs');\nconst path = require('path');\nconst archiver = require('archiver');\n\n// --input \u8F38\u5165\u76EE\u9304\u3002\u76F8\u5C0D\u8DEF\u5F91\u65BC workspace\u3002\u9810\u8A2D\u70BA dist\u3002\n\nlet check = true; // \u6AA2\u67E5\u662F\u5426\u53EF\u4EE5\u9032\u884C\u58D3\u7E2E\nconst workspace = process.cwd(); // \u5DE5\u4F5C\u76EE\u9304\nlet input = 'dist';\n\nconst argvs = {};\nprocess.argv.forEach(\n  (prgvItem) => {\n    if (prgvItem.startsWith('--') && prgvItem.indexOf('=') !== -1) {\n      const argvKey = prgvItem.substring(2, prgvItem.indexOf('='));\n      const argvValue = prgvItem.substring(prgvItem.indexOf('=') + 1, prgvItem.length);\n      argvs[argvKey] = argvValue;\n    }\n  }\n);\n\nif (argvs['input']) {\n  input = argvs['input'];\n}\ninput = path.join(workspace, input);\n\nif (!fs.existsSync(input)) {\n  check = false;\n  console.log(input, '\u4E0D\u5B58\u5728');\n}\n\nif (check) {\n  zipDir();\n}\n\nfunction zipDir() {\n  const tmpPath = path.join(workspace, 'tmp');\n  if (!fs.existsSync(tmpPath)) {\n    fs.mkdirSync(tmpPath);\n  }\n  const outputFile = path.join(tmpPath, path.basename(input) + '.zip');\n  // create a file to stream archive data to.\n  const output = fs.createWriteStream(outputFile);\n  const archiveZip = archiver('zip');\n\n  // listen for all archive data to be written\n  // 'close' event is fired only when a file descriptor is involved\n  output.on('close', function () {\n    console.log('output file:', outputFile);\n    if (archiveZip.pointer() <= 22) {\n      console.log('\u8ACB\u6AA2\u67E5 zip \u5167\u5BB9');\n    }\n    console.log(archiveZip.pointer() + ' total bytes');\n  });\n\n  // This event is fired when the data source is drained no matter what was the data source.\n  // It is not part of this library but rather from the NodeJS Stream API.\n  // @see: https://nodejs.org/api/stream.html#stream_event_end\n  output.on('end', function () {\n    console.log('Data has been drained');\n  });\n\n  // good practice to catch warnings (ie stat failures and other non-blocking errors)\n  archiveZip.on('warning', function (err) {\n    if (err.code === 'ENOENT') {\n      // log warning\n      console.warn(err);\n    } else {\n      // throw error\n      throw err;\n    }\n  });\n\n  // good practice to catch this error explicitly\n  archiveZip.on('error', function (err) {\n    throw err;\n  });\n\n  // pipe archive data to the file\n  archiveZip.pipe(output);\n\n  // append files from a sub-directory, putting its contents at the root of archive\n  archiveZip.directory(input, false);\n\n  // finalize the archive (ie we are done appending files but streams have to finish yet)\n  // 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand\n  archiveZip.finalize();\n}\n"
    }
  ];
}

// src/solutions/template/files/projects/webdpt/builds/generate.js.ts
function getFile17() {
  return [
    ["projects", "webdpt", "builds"],
    {
      name: "generate",
      ext: "js",
      content: '/**\n * \u7BC4\u4F8B\uFF1A\n * npm run gmc --\n *   --name service-doc\n *   --service true\n *   --folder implementation/programs/crs\n *   --parent-module crs.module.ts\n *   --routing true\n *   --route-name service-doc\n *   --components service-doc-list,service-doc-modify\n *\n * \u53C3\u6578\u8AAA\u660E\uFF1A\n *   --name          \u6A21\u7D44\u540D\u7A31\u3002\n *   --service       \u5275\u5EFA\u540C\u540D\u7684service\n *   --no-service    \u4E0D\u5275\u5EFAservcie\n *   --folder        \u57FA\u790E\u5DE5\u4F5C\u76EE\u9304\uFF0C\u5728\u6B64\u76EE\u9304\u4E0B\u5EFA\u7ACB\u65B0\u7684\u6A21\u7D44\u76EE\u9304\u53CA\u76F8\u95DC\u6A94\u6848\u3002\n *   --parent-module \u4E0A\u5C64\u6A21\u7D44\u540D\u7A31\u3002\n *   --routing       \u662F\u5426\u5EFA\u7ACB\u8DEF\u7531\u6A21\u7D44\u3002\n *   --route-name    \u8DEF\u7531\u540D\u7A31\uFF0C\u5728\u4E0A\u5C64\u6A21\u7D44\u5167\u5EFA\u7ACBloadChildren\u914D\u7F6E\uFF0C\u4F9D\u8CF4`--parentModule`\u53C3\u6578\u3002\n *   --components    \u5728\u65B0\u6A21\u7D44\u4E0B\u5EFA\u7ACB\u7D44\u4EF6\uFF0C\u4EE5\u9017\u865F\u5206\u9694\u591A\u500B\u7D44\u4EF6\u540D\u7A31\u3002\n */\n\n\nconst program = require("commander");\nconst {spawnSync} = require("child_process");\nconst fs = require("fs");\nconst path = require("path");\nconst {insertComponentToRoutingModule, insertProgramOrMenuModel} = require("./parse-routes");\nconst APP_ROOT = process.cwd();\nconst I18N_PATH = "src/assets/i18n";\nconst LANGUAGES = ["en_US", "zh_CN", "zh_TW"];\n\nconst program_model_path = "src/app/implementation/program-info/model/program.model.ts";\nconst menu_model_path = "src/app/implementation/menu/model/menu.model.ts";\n\nprogram\n  .version("0.0.1")\n  .description("\u7522\u751F\u6A21\u7D44\u8207\u7D44\u4EF6")\n  .requiredOption("--name <name>", "\u6A21\u7D44\u540D\u7A31")\n  .requiredOption("--folder <folder>", "\u5DE5\u4F5C\u8DEF\u5F91")\n  .requiredOption("--parent-module <parentModule>", "\u4E0A\u5C64\u6A21\u7D44\u6A94\u6848\u540D\u7A31")\n  .option("--route-name [routeName]", "\u8DEF\u7531\u540D\u7A31")\n  .option("--components [components]", "\u7D44\u4EF6", (value)=>value.split(","), [])\n  .option("--routing", "\u662F\u5426\u751F\u6210\u8DEF\u7531\u6A21\u7D44", true)\n  .option("--service", "\u662F\u5426\u751F\u6210\u670D\u52D9", true)\n  .option("--no-service", "\u4E0D\u751F\u6210\u670D\u52D9", true)\n  // .option("--dry-run", "\u9810\u89BD\u8B8A\u66F4", true)\n  // .option("--no-dry-run", "\u76F4\u63A5\u904B\u884C")\n  .parse(process.argv);\n\nconst {name, folder, parentModule, routeName, components, routing, dryRun, service} = program;\n\nlet genModuleCmd = "npm run ng generate module --"\n\nif (name) {\n  genModuleCmd += ` ${name}`;\n} else {\n  console.log("\\x1b[31m%s\\x1b[0m", `\u8ACB\u63D0\u4F9B\u6A21\u7D44\u540D\u7A31 --name [\u6A21\u7D44\u540D\u7A31]`);\n  process.exit();\n}\n\nif (folder) {\n  if (fs.existsSync(path.join(APP_ROOT, folder))) {\n    genModuleCmd += ` --path ${folder}`;\n  } else {\n    console.log("\\x1b[31m%s\\x1b[0m", `\u6307\u5B9A\u7684--folder [${folder}]\u4E0D\u5B58\u5728\u3002`);\n    process.exit();\n  }\n}\n\nif (parentModule) {\n  genModuleCmd += ` --module ${parentModule}`;\n}\n\nif (routeName) {\n  if (!parentModule) {\n    console.log("\\x1b[31m%s\\x1b[0m", `\u8ACB\u63D0\u4F9B\u4E0A\u5C64\u6A21\u7D44\u6A94\u6848\u540D\u7A31 --parent-module [\u4E0A\u5C64\u6A21\u7D44\u6A94\u6848\u540D\u7A31]`);\n    process.exit();\n  }\n  genModuleCmd += ` --route ${routeName}`;\n}\n\nlet genModuleCmdDry = genModuleCmd;\nif (dryRun) {\n  genModuleCmdDry += ` --dry-run`;\n}\n\n// \u5275\u5EFAmodule\nconst genModuleProcess = spawnSync(genModuleCmdDry, {stdio: [process.stdin, process.stdout, process.stderr], shell: true});\n\nif (genModuleProcess.status === 0) {\n\n  // \u5275\u5EFAcomponents\n  const componentBaseFolder = combinePath(folder, name);\n\n  for (let index in components) {\n    const componentName = components[index];\n    const genComponentCmd = generateComponentCommand(componentName, name, componentBaseFolder, routing, true);\n    const genComponentProcess = spawnSync(genComponentCmd, {\n      stdio: [process.stdin, process.stdout, process.stderr],\n      shell: true\n    });\n    if (genComponentProcess.status !== 0) {\n      process.exit(1);\n    }\n    createI18nFile(componentName);\n\n    const routingFile = path.join(folder, name, name + "-routing.module.ts");\n    const componentFile = path.join(componentName, componentName + ".component.ts");\n\n    insertComponentToRoutingModule(routingFile, componentFile);\n\n    insertProgramOrMenuModel(componentName, menu_model_path, name, \'menu\');\n\n    insertProgramOrMenuModel(componentName, program_model_path, name, \'program\');\n  }\n\n  // \u5275\u5EFAservice\n  if (service) {\n    const serviceFolder = path.join(folder, name).replace(/\\\\/g, "/");\n    const genServiceCmd = `npm run ng generate service ${name} -- --path ${serviceFolder}`;\n    const genServiceProcess = spawnSync(genServiceCmd, {stdio: [process.stdin, process.stdout, process.stderr], shell: true});\n    if (genServiceProcess.status !== 0) {\n      process.exit(1);\n    }\n  }\n}\n\nfunction generateComponentCommand(name, module, path, routing, dryRun) {\n  let command = `npm run ng generate component ${name} -- --path ${path}`;\n  if (module) {\n    command += ` --module ${module}.module.ts`;\n  }\n  return command;\n}\n\n/**\n * windows\u74B0\u5883\u4E0B\uFF0Cng g c --path\u7121\u6CD5\u63A5\u53D7\u53CD\u659C\u7DDA\u8DEF\u5F91\n */\nfunction combinePath(path1, path2) {\n  return path1 + (path2.startsWith("/") ? "" : "/") + path2;\n}\n\nfunction createI18nFile(name) {\n  for (const index in LANGUAGES) {\n    const lang = LANGUAGES[index];\n    const i18nPath = path.join(APP_ROOT, I18N_PATH, lang, name) + ".json";\n    if (!fs.existsSync(i18nPath)) {\n      fs.writeFile(i18nPath, "{}", function(err){\n        if (err) {\n          console.log("\\x1b[31m%s\\x1b[0m", `\u5EFA\u7ACB [${i18nPath}] \u5931\u6557!`);\n        } else {\n          console.log("\\x1b[32m%s\\x1b[0m", `\u5EFA\u7ACB ${i18nPath}`);\n        }\n      });\n    }\n  }\n}\n'
    }
  ];
}

// src/solutions/template/files/projects/webdpt/builds/parse-routes.js.ts
function getFile18() {
  return [
    ["projects", "webdpt", "builds"],
    {
      name: "parse-routes",
      ext: "js",
      content: "#!/usr/bin/env node\n\nconst { classify } = require('@angular-devkit/core/src/utils/strings');\nconst {ts, SourceFile} = require('typescript');\nconst {tsquery} = require('@phenomnomnominal/tsquery');\nconst fs = require('fs');\nconst {Linter} = require('tslint');\nconst path = require('path');\n\nfunction insertComponentToRoutingModule(_routingFile, _componentFile) {\n  const routingFile = path.join(process.cwd(), _routingFile);\n\n  const codeText = fs.readFileSync(routingFile, 'utf-8');\n\n  const sourceFile = tsquery.ast(codeText);\n  const routerVariableNode = _findRouteVariableNode(sourceFile);\n  if (routerVariableNode) {\n    // \u8DEF\u7531\u7684\u8B8A\u6578\u540D\u7A31\u5982\uFF1Aroutes\n    const routesVariable = routerVariableNode.escapedText;\n\n    // \u627E\u5230\u8DEF\u7531\u8B8A\u6578Routes\n    const routes = _findRoutesNode(sourceFile, routesVariable);\n    if (routes.length === 0) return;\n\n    // \u53D6\u5F97\u6700\u5F8C\u4E00\u500B\u8DEF\u7531\u914D\u7F6ERoute\n    const lastRoute = tsquery(routes[0], 'ObjectLiteralExpression:last-child');\n    if (lastRoute.length === 0) return;\n\n    // \u53D6\u5F97\u6700\u5F8C\u4E00\u500B\u8DEF\u7531Routes\u7684\u7E2E\u6392\n    const {character} = sourceFile.getLineAndCharacterOfPosition(lastRoute[0].getStart());\n\n    // \u53D6\u5F97\u8981\u63D2\u5165\u7684\u5B57\u4E32\n    const fix = _getRouteConfig(character, _componentFile);\n\n    // \u63D2\u5165route\n    let result = _insertRoute(codeText, fix, lastRoute[0].getEnd());\n\n    // \u63D2\u5165import\n    result = _insertImports(result, sourceFile, _componentFile);\n\n    // \u56DE\u5BEB\u6A94\u6848\n    fs.writeFileSync(_routingFile, result, 'utf-8');\n\n    console.log('\\x1b[32m%s\\x1b[0m', `\u4FEE\u6539 ${_routingFile} \u52A0\u5165 ${_componentFile}\u8DEF\u7531`);\n  }\n}\n\nfunction _getComponentName(file) {\n  const mainFileName = path.basename(file).replace(path.extname(file), '').replace(/[\\.]/g, '-', '-');\n  if (mainFileName) {\n    return classify(mainFileName);\n  }\n  return null;\n}\n\nfunction _getRoutePathName(file) {\n  return path.basename(file).replace(path.extname(file), '').replace(/\\.component/, '');\n}\n\nfunction _getNameWithoutExtName(file) {\n  let _file = file;\n  if (_file.startsWith('.') !== 0) {\n    _file = './' + _file;\n  }\n  return _file.replace(path.extname(_file), '').replace(/\\\\/g, '/');\n}\n\nfunction _insertImports(codeText, sourceFile, _componentFile) {\n  const componentName = _getComponentName(_componentFile);\n  const importsNodes = tsquery(sourceFile, 'ImportDeclaration');\n  if (importsNodes.length === 0) return;\n  const importNode = importsNodes[importsNodes.length - 1];\n\n  const insert = '\\nimport { ' + componentName + ' } from \\''+ _getNameWithoutExtName(_componentFile) +'\\';\\n';\n  return _insertText(codeText, importNode.getEnd(), insert);\n}\n\nfunction _insertText(source, startPoint, text) {\n  return source.substring(0, startPoint) + text + source.substring(startPoint);\n}\n\nfunction _insertRoute(codeText, text, startIndex) {\n  return _insertText(codeText, startIndex, text);\n}\n\nfunction _findRouteVariableNode(sourceFile) {\n  const importsNode = tsquery(sourceFile, 'PropertyAssignment:has(Identifier[name=\"imports\"]):has(CallExpression:has(PropertyAccessExpression:has(Identifier[name=\"RouterModule\"])):has(Identifier[name=\"forChild\"]))');\n  if (importsNode.length === 1) {\n    const routerVariableNode = tsquery(importsNode[0], 'CallExpression:has(Identifier[name=\"RouterModule\"]) > Identifier');\n    if (routerVariableNode.length === 1) {\n      return routerVariableNode[0];\n    }\n  }\n  return null;\n}\n\nfunction _findRoutesNode(sourceFile, routesName) {\n  return tsquery(sourceFile, 'VariableDeclaration:has(Identifier[name=\"' + routesName + '\"]) > ArrayLiteralExpression');\n}\n\nfunction _getRouteConfig(character, _componentFile) {\n  const componentName = _getComponentName(_componentFile);\n  const path = _getRoutePathName(_componentFile);\n  let text = ',\\n{' +\n    '\\n  path: \\''+ path +'\\',' +\n    '\\n  component: ' + componentName +\n    '\\n}';\n  return text.replace(/\\n/g, `\\n${' '.repeat(character)}`)+'\\n';\n}\n\nfunction _findExportVariable(sourceFile) {\n  const nodes = tsquery.query(sourceFile, 'VariableStatement:has(ExportKeyword):has(ArrayLiteralExpression)');\n  if (nodes.length > 0) {\n    const programViarable = nodes[0];\n    return programViarable;\n  }\n  return null;\n}\n\nfunction _existAssignment(sourceFile, id) {\n  return tsquery.query(sourceFile, `PropertyAssignment:has(StringLiteral[value='${id}'])`).length > 0;\n}\n\n\nfunction insertProgramOrMenuModel(name, modelPath, parentName, type) {\n  const fullPath = path.join(process.cwd(), modelPath);\n  const codeText = fs.readFileSync(fullPath, 'utf-8');\n  const sourceFile = tsquery.ast(codeText);\n  const variable = _findExportVariable(sourceFile);\n  let template = '';\n  switch (type) {\n    case 'program':\n      template = `{ 'id': '${name}', 'module': 'root', 'type': '', 'routerLink', '/${parentName}/${name}' }`;\n      break;\n    case 'menu':\n      template = `{ 'id': '${name}', 'type': 'program', 'iconClass': 'dwType:chrome', 'programId': '${name}' }`;\n  }\n\n  if (_existAssignment(variable, name)) {\n    console.log(\"\\x1b[32m%s\\x1b[0m\", `[${name}] \u5DF2\u5B58\u5728\u65BC ${modelPath}`);\n    return;\n  }\n\n  const arrayLiteralExpression = tsquery.query(variable, 'ArrayLiteralExpression');\n  if (arrayLiteralExpression.length > 0) {\n    let resultText = codeText;\n    const programs = tsquery.query(arrayLiteralExpression[0], 'ObjectLiteralExpression:last-child');\n    // \u88DC\u5230\u6700\u5F8C\u4E00\u500B\n    if (programs.length > 0) {\n      const program = programs[0];\n      const {character} = sourceFile.getLineAndCharacterOfPosition(program.getStart());\n      let result =  '';\n      if (codeText[program.getEnd()] !== ',') {\n        result = ',\\n' + result;\n      }else {\n        result = '\\n' + result;\n      }\n      result = result + ' '.repeat(character) + template;\n      resultText = _insertText(codeText, program.getEnd(), result);\n    } else {\n      // \u52A0\u5165\u5230\u7A7AArray\u4E2D\n      const emptyArray = arrayLiteralExpression[0];\n      const result = `\\n  ${template}\\n`;\n      resultText = _insertText(codeText, emptyArray.getStart() + 1, result);\n    }\n    fs.writeFileSync(modelPath, resultText, 'utf-8');\n    console.log(\"\\x1b[32m%s\\x1b[0m\", `\u4FEE\u6539 ${modelPath}`);\n  }\n}\n\nexports = module.exports = {};\nexports.insertComponentToRoutingModule = insertComponentToRoutingModule;\nexports.insertProgramOrMenuModel = insertProgramOrMenuModel;\n"
    }
  ];
}

// src/solutions/template/files/projects/webdpt/builds/replace-sw.js.ts
function getFile19() {
  return [
    ["projects", "webdpt", "builds"],
    {
      name: "replace-sw",
      ext: "js",
      content: "'use strict';\n\nconst fs = require('fs');\nconst safetyWorker = 'dist/safety-worker.js';\nconst ngswWorker = 'dist/ngsw-worker.js';\nconst ngswJson = 'dist/ngsw.json';\nconst swJson = 'dist/assets/sw.json';\n\n/**\n * * https://angular.cn/guide/service-worker-devops#service-worker-safety\n */\nif (fs.existsSync(ngswWorker) && fs.existsSync(safetyWorker)) {\n\n  /* \u5229\u7528safety-worker\u8A3B\u92B7\u73FE\u6709\u7684service worker\u3002 */\n  fs.copyFileSync(safetyWorker, ngswWorker);\n\n  // if (fs.existsSync(ngswJson)) {\n  //\n  //   /* \u8B80\u53D6ngsw.json\u5167\u5BB9 */\n  //   const ngswJsonData = fs.readFileSync(ngswJson, 'utf8');\n  //   const ngsw = JSON.parse(ngswJsonData);\n  //\n  //   /* \u5C07ngsw.json\u88E1\u7684timestamp\u5BEB\u5165\u65B0\u6A94sw.json\uFF0C\u4E26\u522A\u9664ngsw.json\u3002  */\n  //   fs.writeFileSync(swJson, JSON.stringify({timestamp: ngsw.timestamp}));\n  //\n  //   /* \u66AB\u4E0D\u522A\uFF0C\u8B93\u820A\u7684sw\u6AA2\u67E5\u5230\u66F4\u65B0\u4E26\u63D0\u793A\u91CD\u6574\uFF0C\u4EE5\u4FBF\u5237\u65B0\u53D6\u5F97\u6700\u65B0\u7684\u624B\u52D5\u6AA2\u67E5\u7248\u672C\u3002 */\n  //   // fs.unlinkSync(ngswJson);\n  //\n  // }\n}\nfs.writeFileSync(swJson, JSON.stringify({timestamp: (new Date()).getTime()}));\n"
    }
  ];
}

// src/solutions/template/files/projects/webdpt/builds/rewrite-package.js.ts
function getFile20() {
  return [
    ["projects", "webdpt", "builds"],
    {
      name: "rewrite-package",
      ext: "js",
      content: "'use strict';\n\nconst fs = require('fs');\nconst packagePath = './package.json';\n\nfs.readFile(packagePath, ((err, data) => {\n  if (err) throw err;\n  let packageJson = JSON.parse(data);\n  let postInstall = packageJson.scripts.postinstall;\n  if (postInstall.indexOf('projects/webdpt/framework') === -1) {\n    postInstall = postInstall.replace(' ng-quicksilver ', ' ng-quicksilver projects/webdpt/framework ');\n    packageJson.scripts.postinstall = postInstall;\n    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));\n  }\n}));\n"
    }
  ];
}

// src/solutions/template/files/projects/webdpt/docker-ci/env-install/buildfile/default.conf.ts
function getFile21() {
  return [
    ["projects", "webdpt", "docker-ci", "env-install", "buildfile"],
    {
      name: "default",
      ext: "conf",
      content: "server {\n    listen       80;\n    server_name  localhost;\n\n    location / {\n        expires -1;\n        try_files $uri $uri/ /index.html;\n        root   /usr/share/nginx/html;\n        index  index.html index.htm;\n    }\n\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n}\n\n"
    }
  ];
}

// src/solutions/template/files/projects/webdpt/docker-ci/env-install/buildfile/dockerEnv.sh.ts
function getFile22() {
  return [
    ["projects", "webdpt", "docker-ci", "env-install", "buildfile"],
    {
      name: "dockerEnv",
      ext: "sh",
      content: `#!/bin/sh

function log_info()
{
  local date=\`date\`
  local para=$1
  echo "$date $1"
  $1
  echo "log info:$date $1" &>> $SYS_LOG
}
SYS_LOG=dockerEnv.log

#\u7A0B\u5F0F\u8DEF\u5F91
Path=$1
#\u6A94\u6848\u985E\u578B
TypeName=$2
#\u6392\u9664\u6A94\u6848
removeName=$3

#\u4FEE\u6539\u65B9\u6CD5\u4E00
find $Path/ -name "*.$TypeName" -a ! -name "$removeName"  | xargs  grep -r '@' > envSpace.txt

sed 's/[[:space:]]//g' envSpace.txt > env.txt
envDate=$(cat env.txt)

#\u8FF4\u5708\u89E3\u6790@
for date in \${envDate}; do
 #echo $date
 field=2
 env=test
 filePath=$(cut -d':' -f1 <<< "$date")
 #echo $filePath
 while [[ "$env" != ""  ]]; do
  env=$(cut -d'@' -f$field <<< "$date")
  let "field+=2"
  if [ "$env" != "" ]; then
   #\u4FEE\u6539\u65B9\u6CD5\u4E8C
   envReplace=\${env//./_}
   log_info "sed -i s#@"$env"@#"$(eval echo \\$$envReplace)"#g $filePath"
  fi
 done
done

rm -f envSpace.txt
rm -f env.txt

`
    }
  ];
}

// src/solutions/template/files/projects/webdpt/docker-ci/env-install/buildfile/frontendShell.sh.ts
function getFile23() {
  return [
    ["projects", "webdpt", "docker-ci", "env-install", "buildfile"],
    {
      name: "frontendShell",
      ext: "sh",
      content: '#!/bin/sh\nbash dockerEnv.sh /usr/share/nginx/html/assets json api.dev.json\nnginx -g "daemon off;"\n'
    }
  ];
}

// src/solutions/template/files/projects/webdpt/docker-ci/env-install/buildfile/nginx.conf.ts
function getFile24() {
  return [
    ["projects", "webdpt", "docker-ci", "env-install", "buildfile"],
    {
      name: "nginx",
      ext: "conf",
      content: `user  nginx;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    gzip_static on;
    gzip_http_version 1.1;
    gzip_vary on;
    gzip_min_length 1000;
    gzip_types application/javascript text/css application/json application/x-javascript application/xml application/xml+rss text/javascript text/plain text/xml image/svg+xml;

    include /etc/nginx/conf.d/*.conf;

}

`
    }
  ];
}

// src/solutions/template/files/projects/webdpt/docker-ci/env-install/Dockerfile.ts
function getFile25() {
  return [
    ["projects", "webdpt", "docker-ci", "env-install"],
    {
      name: "Dockerfile",
      ext: "",
      content: '# \u5B89\u88DD\u76F8\u4F9D\u5957\u4EF6\nFROM        node:12.22.7 AS build_base\nRUN         mkdir -p /build\nWORKDIR     /build\nCOPY        package.json ./\nRUN         mkdir -p ./projects\n## \u5E73\u53F0 packages \u5B89\u88DD\u6A94\nCOPY        .npmrc ./\nCOPY        ./projects/webdpt/webdpt-packages ./projects/webdpt/webdpt-packages\nRUN         npm install --unsafe-perm\n\n# Build \u5C08\u6848\nFROM        build_base AS builder\nLABEL       maintainer="DAP\u5E73\u53F0\u4E2D\u5FC3"\nWORKDIR     /build\nCOPY        . .\nRUN         npm run build-prod\n\n# \u6253\u5305\u5C08\u6848\nFROM        registry.digiwincloud.com.cn/base/digiwin_alpine_nginx:1.12.1\nENV         buildfile=./buildfile\nCOPY        --from=builder /build/dist/ /usr/share/nginx/html/\nADD         ${buildfile}/nginx.conf /etc/nginx/\nADD         ${buildfile}/default.conf /etc/nginx/conf.d/\nADD         ${buildfile}/frontendShell.sh /usr/share/nginx/html/\nADD         ${buildfile}/dockerEnv.sh /usr/share/nginx/html/\nRUN         chmod +x /usr/share/nginx/html/frontendShell.sh\nRUN         chmod +x /usr/share/nginx/html/dockerEnv.sh\nWORKDIR     /usr/share/nginx/html\nEXPOSE      80\nENTRYPOINT ["/usr/share/nginx/html/frontendShell.sh"]\n'
    }
  ];
}

// src/solutions/template/files/projects/webdpt/docker-ci/env-install/Makefile.ts
function getFile26() {
  return [
    ["projects", "webdpt", "docker-ci", "env-install"],
    {
      name: "Makefile",
      ext: "",
      content: '# \u9700\u4FEE\u6539\u7684\u53C3\u6578\n## app id\nAPP_ID=<app_id>\n## app \u540D\u7A31\nAPP_NAME=<app_name>\n## \u5E73\u53F0\u7248\u672C\nPLATFORM_VERSION=5.2.0\n## dap \u5E73\u53F0\u985E\u5225\uFF0C\u524D\u7AEF\u5C31\u662F frontend, \u5F8C\u7AEF\u5C31\u662F backend\nDAP_TYPE=frontend\n## registry \u4F4D\u7F6E\nDOCKER_REGISTRY_URL=registry.digiwincloud.com.cn\n\n\nSHELL=/bin/bash\n\n# npm \u76F8\u95DC\u6307\u4EE4\nNPM=npm\nNPM_INSTALL=$(NPM) install\nNPM_RUN=$(NPM) run\nNPM_TEST=$(NPM) test\nNPM_BUILD=$(NPM_RUN) build\nNPM_BUILD_PROD=$(NPM_BUILD)-prod\n\n# angular \u76F8\u95DC\u6307\u4EE4\nNG=ng\nNG_SERVE=$(NG) serve\nNG_SERVE_PROD=$(NG_SERVE) prod\n\n\n#\u7248\u672C\u63A7\u5236\nVERSION:=$(shell cat VERSION)\nSUB_VERSION_FILE=./version_control/BUILD\n\n#docker\nDOCKER_CMD=docker\nDOCKER_BUILD=$(DOCKER_CMD) build\nDOCKER_RM_IMAGE=$(DOCKER_CMD) rmi\nDOCKER_PUSH=$(DOCKER_CMD) push\nDOCKER_IMAGE_REGISTRY=$(DOCKER_REGISTRY_URL)/$(APP_ID)/\nDOCKER_IMAGE_NAME=$(APP_NAME)$(DAP_TYPE)-$(PLATFORM_VERSION)\nDOCKER_FULL_IMAGE=$(DOCKER_IMAGE_REGISTRY)$(DOCKER_IMAGE_NAME):$(VERSION).$(shell cat $(SUB_VERSION_FILE))\n\n\ninit:\n	$(GIT_ADD_REMOTE) $(GIT_REPOSITORY)\ninstall:\n	$(NPM_INSTALL)\ntest:\n	$(NPM_TEST)\nunit-test: install test\nbuild:\n	$(NPM_INSTALL)\n	$(NPM_BUILD_PROD)\nbuild_prod:\n	$(NPM_INSTALL)\n	$(NPM_BUILD_PROD)\nmove_dist:\n	tar cvf dist.tar dist\n	mv dist.tar buildfile\nclean:\n	rm -rf buildfile/dist.tar\n	rm -rf dist\n\ndocker_build:\n	@echo "\u958B\u59CB\u6253\u5305 Docker Image - $(DOCKER_FULL_IMAGE)"\n	$(DOCKER_BUILD) -t $(DOCKER_FULL_IMAGE) .\ndocker_push:\n	@echo "\u958B\u59CB push docker image - $(DOCKER_FULL_IMAGE)"\n	$(DOCKER_PUSH) $(DOCKER_FULL_IMAGE)\ndocker_clean:\n	$(DOCKER_RM_IMAGE) $(DOCKER_FULL_IMAGE)\ndocker_ci: vc docker_build docker_push docker_clean\nvc:\n	@make -C version_control branch=$$branch\n'
    }
  ];
}

// src/solutions/template/files/projects/webdpt/docker-ci/env-install/version_control/Makefile.ts
function getFile27() {
  return [
    ["projects", "webdpt", "docker-ci", "env-install", "version_control"],
    {
      name: "Makefile",
      ext: "",
      content: '#\u7248\u672C\u6A94\u6848\nLAST_APP_VERSION_FILE=APP_VERSION\nBUILD_VERSION_FILE=BUILD\n\n#\u7248\u672C\u8B8A\u6578\nVERSION:=$(shell cat ../VERSION)\nINIT_BUILD_VERSION=999\nBUILD_VERSION=$(shell echo $(shell cat $(BUILD_VERSION_FILE))+1 | bc)\nexport APP_VERSION=$(shell cat $(LAST_APP_VERSION_FILE))\n#Git\nGIT_CMD=git\nGIT_BRANCH=$(GIT_CMD) branch\nGIT_ADD=$(GIT_CMD) add\nGIT_COMMIT=$(GIT_CMD) commit\nGIT_PUSH=$(GIT_CMD) push\nGIT_CURRENT_BRANCH=$$branch\nGIT_TAG=$(GIT_CMD) tag\n# Pure targets.\n#.PHONY: all\nall: check_version_file_is_exist check_version add_version commit_record add_tag\n#\u521D\u59CB\u5316 build version \u6A94\u6848\ninit_build_version:\n	touch $(BUILD_VERSION_FILE)\n	echo $(INIT_BUILD_VERSION) > $(BUILD_VERSION_FILE)\n#\u521D\u59CB\u5316 app version\ninit_app_version:\n	touch $(LAST_APP_VERSION_FILE)\n	echo $(VERSION) > $(LAST_APP_VERSION_FILE)\n\n#\u6AA2\u67E5\u7248\u672C\u6A94\u6848\u662F\u5426\u5B58\u5728\ncheck_version_file_is_exist:\nifeq "$(wildcard $(BUILD_VERSION_FILE))" ""\n	@make init_build_version\nendif\nifeq "$(wildcard $(LAST_APP_VERSION_FILE))" ""\n	@make init_app_version\nendif\n\n#\u6AA2\u67E5\u7248\u672C\ncheck_version:\n	@if [ $(shell cat $(LAST_APP_VERSION_FILE)) != $(VERSION) ]; then\\\n		make init_app_version;\\\n        make init_build_version;\\\n	fi\nadd_version:\n	echo $(BUILD_VERSION) > $(BUILD_VERSION_FILE)\ncommit_record:\n	$(GIT_ADD) $(LAST_APP_VERSION_FILE)\n	$(GIT_ADD) $(BUILD_VERSION_FILE)\n	$(GIT_COMMIT) -m "auto increment build version $(shell cat BUILD)"\n	$(GIT_PUSH) origin HEAD:"$(GIT_CURRENT_BRANCH)"\nadd_tag:\n	$(GIT_TAG) -a v$(shell cat APP_VERSION).$(shell cat BUILD) -m "auto increment build version v$(shell cat APP_VERSION).$(shell cat BUILD)"\n	$(GIT_PUSH) origin v$(shell cat APP_VERSION).$(shell cat BUILD)\n'
    }
  ];
}

// src/solutions/template/files/projects/webdpt/docker-ci/env-install/VERSION.ts
function getFile28() {
  return [
    ["projects", "webdpt", "docker-ci", "env-install"],
    { name: "VERSION", ext: "", content: "1.0.0\n" }
  ];
}

// src/solutions/template/files/projects/webdpt/webdpt-packages/.gitkeep.ts
function getFile29() {
  return [["projects", "webdpt", "webdpt-packages"], { name: ".gitkeep", ext: "", content: "" }];
}

// src/solutions/template/files/README.md.ts
function getFile30() {
  return [
    [],
    {
      name: "README",
      ext: "md",
      content: "# Ng-Web\u7AEF\u5E73\u53F0\n\nThis project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.\n\u9700\u642D\u914Dnodejs 8.8\u4EE5\u4E0A(\u542Bnpm)\n\n## Development server\n\nRun `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.\n\n## Code scaffolding\n\nRun `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.\n\n## Build\n\nRun `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.\n\n## Running unit tests\n\nRun `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).\n\n## Running end-to-end tests\n\nRun `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).\n\n## Further help\n\nTo get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).\n"
    }
  ];
}

// src/solutions/template/files/src/.browserslistrc.ts
function getFile31() {
  return [
    ["src"],
    {
      name: ".browserslistrc",
      ext: "",
      content: "# This file is used by the build system to adjust CSS and JS output to support the specified browsers below.\n# For additional information regarding the format and rule options, please see:\n# https://github.com/browserslist/browserslist#queries\n\n# You can see what browsers were selected by your queries by running:\n#   npx browserslist\n\n#> 0.5%\n#last 2 versions\n#Firefox ESR\n#not dead\n#not IE 9-11 # For IE 9-11 support, remove 'not'.\n\nlast 1 Chrome version\nlast 1 Firefox version\nlast 2 Edge major versions\nlast 2 Safari major versions\nlast 2 iOS major versions\nFirefox ESR\nnot IE 11 # Angular supports IE 11 only as an opt-in. To opt-in, remove the 'not' prefix on this line.\n"
    }
  ];
}

// src/solutions/template/files/src/.DS_Store.ts
function getFile32() {
  return [
    ["src"],
    {
      name: ".DS_Store",
      ext: "",
      content: "\0\0\0Bud1\0\0\0\0\0\b\0\0\0\0\0\0\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0t\0slg1Scomp\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0a\0s\0s\0e\0t\0slg1Scomp\0\0\0\0\0\uFFFD\\9\0\0\0\0a\0s\0s\0e\0t\0smoDDblob\0\0\0\b\uFFFD\u02A0\uFFFD\uFFFDF\uFFFDA\0\0\0\0a\0s\0s\0e\0t\0smodDblob\0\0\0\b\uFFFD\u02A0\uFFFD\uFFFDF\uFFFDA\0\0\0\0a\0s\0s\0e\0t\0sph1Scomp\0\0\0\0\0\uFFFD\uFFFD\0\0\0\0\0e\x002\0elg1Scomp\0\0\0\0\0\0\0\0\0\0\0e\x002\0emoDDblob\0\0\0\b\uFFFD\uFFFDzc\uFFFD$\uFFFDA\0\0\0\0e\x002\0emodDblob\0\0\0\b\uFFFD\uFFFDzc\uFFFD$\uFFFDA\0\0\0\0e\x002\0eph1Scomp\0\0\0\0\0\0\0\0\0\0\f\0e\0n\0v\0i\0r\0o\0n\0m\0e\0n\0t\0slg1Scomp\0\0\0\0\0\0Z\0\0\0\f\0e\0n\0v\0i\0r\0o\0n\0m\0e\0n\0t\0smoDDblob\0\0\0\bk\uFFFD-\uFFFD\uFFFDB\uFFFDA\0\0\0\f\0e\0n\0v\0i\0r\0o\0n\0m\0e\0n\0t\0smodDblob\0\0\0\bk\uFFFD-\uFFFD\uFFFDB\uFFFDA\0\0\0\f\0e\0n\0v\0i\0r\0o\0n\0m\0e\0n\0t\0sph1Scomp\0\0\0\0\0\0 \0\0\0\0	\0m\0o\0c\0k\0-\0d\0a\0t\0alg1Scomp\0\0\0\0\0\0q\0\0\0	\0m\0o\0c\0k\0-\0d\0a\0t\0amoDDblob\0\0\0\b%\uFFFD-\uFFFD\uFFFDB\uFFFDA\0\0\0	\0m\0o\0c\0k\0-\0d\0a\0t\0amodDblob\0\0\0\b%\uFFFD-\uFFFD\uFFFDB\uFFFDA\0\0\0	\0m\0o\0c\0k\0-\0d\0a\0t\0aph1Scomp\0\0\0\0\0\0 \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\v\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\v\0\0\0E\0\0\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0DSDB\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0`\0\0\0\0\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"
    }
  ];
}

// src/solutions/template/files/src/assets/.DS_Store.ts
function getFile33() {
  return [
    ["src", "assets"],
    {
      name: ".DS_Store",
      ext: "",
      content: "\0\0\0Bud1\0\0\0\0\0\b\0\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0lg1Scomp\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0i\x001\x008\0nlg1Scomp\0\0\0\0\0\0\uFFFD\0\0\0\0i\x001\x008\0nmoDDblob\0\0\0\b\uFFFD-uc\uFFFD$\uFFFDA\0\0\0\0i\x001\x008\0nmodDblob\0\0\0\b\uFFFD-uc\uFFFD$\uFFFDA\0\0\0\0i\x001\x008\0nph1Scomp\0\0\0\0\0\x000\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\v\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\v\0\0\0E\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0DSDB\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0`\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"
    }
  ];
}

// src/solutions/template/files/src/assets/api.dev.json.ts
function getFile34() {
  return [
    ["src", "assets"],
    {
      name: "api.dev",
      ext: "json",
      content: '{\n  "apiUrl": "https://iia-test.apps.digiwincloud.com.cn",\n  "iamUrl": "https://iam-test.digiwincloud.com.cn",\n  "emcUrl": "https://emc-test.digiwincloud.com.cn",\n  "eocUrl": "https://eoc-test.digiwincloud.com.cn",\n  "omUrl": "https://om-test.digiwincloud.com.cn",\n  "consoleUrl": "https://console-test.digiwincloud.com.cn",\n  "marketUrl": "https://market-test.digiwincloud.com.cn",\n  "omcUrl": "https://omc-test.digiwincloud.com.cn",\n  "gmcUrl": "https://gmc-test.digiwincloud.com.cn",\n  "cacUrl": "https://cac-test.digiwincloud.com.cn",\n  "frUrl": "https://dap-rpt.apps.digiwincloud.com.cn",\n  "dmcUrl": "https://dmc-hw-test.digiwincloud.com.cn",\n  "screenUrl": "https://dwdashboard.apps.digiwincloud.com.cn",\n  "analytics": {\n    "gtm": "@ANALYTICS_GTM@",\n    "baidu": "@ANALYTICS_BAIDU@"\n  },\n  "multiTenant": "true",\n  "dwAppSecret": "@DW_APP_SECRET@"\n}\n'
    }
  ];
}

// src/solutions/template/files/src/assets/api.json.ts
function getFile35() {
  return [
    ["src", "assets"],
    {
      name: "api",
      ext: "json",
      content: '{\n  "apiUrl": "@WEB_SERVICE_URL@",\n  "iamUrl": "@IAM_SERVICE_URL@",\n  "emcUrl": "@EMC_SERVICE_URL@",\n  "eocUrl": "@EOC_SERVICE_URL@",\n  "omUrl": "@OM_URL@",\n  "consoleUrl": "@CONSOLE_URL@",\n  "marketUrl": "@MARKET_URL@",\n  "omcUrl": "@OMC_SERVICE_URL@",\n  "gmcUrl": "@GMC_SERVICE_URL@",\n  "cacUrl": "@CAC_SERVICE_URL@",\n  "frUrl": "@FINEREPORT_URL@",\n  "dmcUrl": "@DMC_SERVICE_URL@",\n  "analytics": {\n    "gtm": "@ANALYTICS_GTM@",\n    "baidu": "@ANALYTICS_BAIDU@"\n  },\n  "multiTenant": "@MULTI_TENANT@",\n  "dwAppSecret": "@DW_APP_SECRET@"\n}\n'
    }
  ];
}

// src/solutions/template/files/src/assets/i18n/en_US/basic.json.ts
function getFile36() {
  return [["src", "assets", "i18n", "en_US"], { name: "basic", ext: "json", content: "{\n  \n}" }];
}

// src/solutions/template/files/src/assets/i18n/zh_CN/basic.json.ts
function getFile37() {
  return [["src", "assets", "i18n", "zh_CN"], { name: "basic", ext: "json", content: "{\n  \n}" }];
}

// src/solutions/template/files/src/assets/i18n/zh_TW/basic.json.ts
function getFile38() {
  return [["src", "assets", "i18n", "zh_TW"], { name: "basic", ext: "json", content: "{\n  \n}" }];
}

// src/solutions/template/files/src/assets/iconfont/iconfont.css.ts
function getFile39() {
  return [
    ["src", "assets", "iconfont"],
    {
      name: "iconfont",
      ext: "css",
      content: `@font-face {
  font-family: 'font-class';
  src: url('iconfont.ttf?t=1621938128860') format('truetype'); /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
}

.iconfont {
  width: 1em;
  height: 1em;
  vertical-align: -0.072em;
  fill: currentColor;
  overflow: hidden;
}

.font-class {
  font-family: 'font-class' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.iconjiangxu:before {
  content: '\\e6ad';
}

.iconjiangxu1:before {
  content: '\\e6b4';
}

.iconrenwuyuqishuaitishi:before {
  content: "\\e69d";
}

.iconyingwanchengshengyugongshi:before {
  content: "\\e69c";
}

.iconbiaogezhonglahou:before {
  content: "\\e69b";
}

.iconbiaogezhongchaoqian:before {
  content: "\\e69a";
}

.iconlahou:before {
  content: "\\e699";
}

.iconchaoqian:before {
  content: "\\e698";
}

.iconzhunshi:before {
  content: "\\e697";
}

.iconsousuo:before {
  content: "\\e633";
}

.iconhuishouzhan1:before {
  content: "\\e696";
}

.iconbianzu:before {
  content: "\\e695";
}

.icondelete3:before {
  content: "\\e65c";
}

.iconselectRelation:before {
  content: "\\e69e";
}

.iconjiaofuwu:before {
  content: "\\e692";
}

.iconlichengbei:before {
  content: "\\e693";
}

.iconqianhe:before {
  content: "\\e694";
}

.iconzhuomian:before {
  content: "\\e690";
}

.iconprev:before {
  content: "\\e68f";
}

.iconnext:before {
  content: "\\e68e";
}

.icon_back_to_top:before {
  content: "\\e68d";
}

.iconbeizhu:before {
  content: "\\e68c";
}

.iconzhankai:before {
  content: "\\e68b";
}

.iconshouqi:before {
  content: "\\e68a";
}

.iconzhixingren:before {
  content: "\\e689";
}

.iconmuban:before {
  content: "\\e688";
}

.iconupload1:before {
  content: "\\e687";
}

.icondelete2:before {
  content: "\\e686";
}

.icon_icon_location:before {
  content: "\\e685";
}

.icon_single_arrow:before {
  content: "\\e684";
}

.icon_eye_open:before {
  content: "\\e683";
}

.icon_eye_close:before {
  content: "\\e680";
}

.icon_doughnut_legend2:before {
  content: "\\e681";
}

.icon_doughnut_legend:before {
  content: "\\e682";
}

.iconshaixuan2:before {
  content: "\\e67f";
}

.iconquanpin:before {
  content: "\\e67b";
}

.iconkehu:before {
  content: "\\e67c";
}

.iconshuoming:before {
  content: "\\e67d";
}

.icontcqp:before {
  content: "\\e67e";
}

.iconzhuanpai:before {
  content: "\\e67a";
}

.icon_proxy_date:before {
  content: "\\e679";
}

.icon_arrow_right:before {
  content: "\\e678";
}

.icondaoru:before {
  content: "\\e672";
}

.icondaoruchenggong:before {
  content: "\\e673";
}

.iconzhengzaijinhang:before {
  content: "\\e674";
}

.iconshijian:before {
  content: "\\e675";
}

.iconyichangtishi:before {
  content: "\\e676";
}

.iconchenggongda:before {
  content: "\\e677";
}

.icon_bot_speak_dot:before {
  content: "\\e671";
}

.icon_bot_eye:before {
  content: "\\e670";
}

.icon_desktop_performer:before {
  content: "\\e66f";
}

.icon_desktop_notice:before {
  content: "\\e66e";
}

.iconxiala:before {
  content: "\\e66d";
}

.iconicon_init-project:before {
  content: "\\e665";
}

.iconicon_design:before {
  content: "\\e666";
}

.iconicon_login-out:before {
  content: "\\e667";
}

.iconicon_basic-data:before {
  content: "\\e668";
}

.iconicon_project-progress:before {
  content: "\\e669";
}

.iconicon_my-task:before {
  content: "\\e66a";
}

.iconicon_progress-check:before {
  content: "\\e66b";
}

.iconicon_project-view:before {
  content: "\\e66c";
}

.iconzuixiaocengjiicon:before {
  content: "\\e664";
}

.iconicon_setting:before {
  content: "\\e605";
}

.iconicon_notice:before {
  content: "\\e661";
}

.iconicon_all-menu:before {
  content: "\\e662";
}

.iconicon_module:before {
  content: "\\e663";
}

.iconicon_tenant:before {
  content: "\\e600";
}

.iconxinjianicon:before {
  content: "\\e660";
}

.iconxiaotianjiazixiang:before {
  content: "\\e65f";
}

.iconriqi:before {
  content: "\\e65e";
}

.iconqianzhirenwu:before {
  content: "\\e65d";
}

.icongongshi:before {
  content: "\\e65b";
}

.iconfuzeren:before {
  content: "\\e65a";
}

.iconcengji:before {
  content: "\\e659";
}

.icongouxuan:before {
  content: "\\e658";
}

.iconbianzu12:before {
  content: "\\e657";
}

.iconguanbi2:before {
  content: "\\e656";
}

.iconguanbi1:before {
  content: "\\e655";
}

.iconyichangxiaoicon:before {
  content: "\\e654";
}

.iconyuqixiao2:before {
  content: "\\e653";
}

.iconyuqi1:before {
  content: "\\e651";
}

.iconyuqixiao1:before {
  content: "\\e652";
}

.iconyiwancheng-xuanzhong:before {
  content: "\\e650";
}

.iconbianzu22:before {
  content: "\\e64f";
}

.iconzhengchang-guanliren:before {
  content: "\\e64e";
}

.iconyichang-guanliren:before {
  content: "\\e64d";
}

.iconperson:before {
  content: "\\e64c";
}

.iconxingzhuangjiehe:before {
  content: "\\e641";
}

.iconlujing1:before {
  content: "\\e63e";
}

.iconlujing:before {
  content: "\\e606";
}

.iconxingzhuang:before {
  content: "\\e602";
}

.iconshebeizong:before {
  content: "\\e601";
}

.iconz1:before {
  content: "\\e64a";
}

.iconproject:before {
  content: "\\e64b";
}

.iconz:before {
  content: "\\e648";
}

.iconjy:before {
  content: "\\e647";
}

.iconsc:before {
  content: "\\e644";
}

.iconsj:before {
  content: "\\e645";
}

.iconyc:before {
  content: "\\e646";
}

.icongf1:before {
  content: "\\e643";
}

.iconwf:before {
  content: "\\e642";
}

.iconxin:before {
  content: "\\e640";
}

.iconyuan:before {
  content: "\\e63f";
}

.iconnone:before {
  content: "\\e63d";
}

.iconclose:before {
  content: "\\e63c";
}

.icontip:before {
  content: "\\e63b";
}

.iconsuggestion:before {
  content: "\\e637";
}

.iconhousehold:before {
  content: "\\e638";
}

.icontotal:before {
  content: "\\e639";
}

.iconraw-material:before {
  content: "\\e63a";
}

.iconicon-test:before {
  content: "\\e636";
}

.icondate-red:before {
  content: "\\e635";
}

.icondate1:before {
  content: "\\e634";
}

.iconset:before {
  content: "\\e631";
}

.iconshare:before {
  content: "\\e632";
}

.iconUpload-more:before {
  content: "\\e630";
}

.icondown:before {
  content: "\\e62e";
}

.iconup:before {
  content: "\\e62f";
}

.iconchaxun:before {
  content: "\\e62a";
}

.iconfaqi:before {
  content: "\\e62b";
}

.iconjindu:before {
  content: "\\e62c";
}

.iconrenwu:before {
  content: "\\e62d";
}

.iconyuqi:before {
  content: "\\e628";
}

.iconjinji:before {
  content: "\\e629";
}

.iconconduct:before {
  content: "\\e627";
}

.iconmore3:before {
  content: "\\e649";
}

.iconmore2:before {
  content: "\\e626";
}

.iconback:before {
  content: "\\e625";
}

.icondelete1:before {
  content: "\\e624";
}

.iconmore:before {
  content: "\\e623";
}

.icondai:before {
  content: "\\e622";
}

.iconnew:before {
  content: "\\e621";
}

.iconwarn:before {
  content: "\\e61b";
}

.iconagent:before {
  content: "\\e61e";
}

.iconabnormal:before {
  content: "\\e61f";
}

.iconnews:before {
  content: "\\e620";
}

.iconimportant:before {
  content: "\\e61c";
}

.iconoverdue:before {
  content: "\\e61d";
}

.icongreen-hook:before {
  content: "\\e619";
}

.iconignore:before {
  content: "\\e61a";
}

.iconreasonable:before {
  content: "\\e618";
}

.iconsuggest:before {
  content: "\\e617";
}

.iconchanging:before {
  content: "\\e615";
}

.iconchanged:before {
  content: "\\e616";
}

.iconexplain:before {
  content: "\\e614";
}

.iconreplace:before {
  content: "\\e613";
}

.iconnotice2:before {
  content: "\\e611";
}

.iconnotice:before {
  content: "\\e612";
}

.iconProcessing:before {
  content: "\\e610";
}

.iconschedule:before {
  content: "\\e60f";
}

.icondate:before {
  content: "\\e60d";
}

.icondelete:before {
  content: "\\e60e";
}

.icondownload:before {
  content: "\\e60a";
}

.icondrop-down1:before {
  content: "\\e60b";
}

.icondismantle:before {
  content: "\\e60c";
}

.iconsee:before {
  content: "\\e607";
}

.iconrefresh:before {
  content: "\\e608";
}

.iconupload:before {
  content: "\\e609";
}

.iconedit1:before {
  content: "\\e603";
}

.iconcall1:before {
  content: "\\e604";
}

`
    }
  ];
}

// src/solutions/template/files/src/assets/iconfont/iconfont.js.ts
function getFile40() {
  return [
    ["src", "assets", "iconfont"],
    {
      name: "iconfont",
      ext: "js",
    }
  ];
}

// src/solutions/template/files/src/assets/iconfont/iconfont.ttf.ts
function getFile41() {
  return [
    ["src", "assets", "iconfont"],
    {
      name: "iconfont",
      ext: "ttf",
      content: `\0\0\0\0\v\0\uFFFD\0\x000GSUB \uFFFD%z\0\08\0\0\0TOS/2<\uFFFDI\uFFFD\0\0\uFFFD\0\0\0Vcmapd\uFFFD\uFFFDO\0\0D\0\0
glyfi@\uFFFD\0\0\uFFFD\0\0\uFFFD|head fD\uFFFD\0\0\0\uFFFD\0\0\x006hhea\v%\b\0\0\0\uFFFD\0\0\0$hmtx|\uFFFD\uFFFD\uFFFD\0\0\uFFFD\0\0\`loca$\uFFFD\0R\0\0T\0\02maxp\uFFFD\0\uFFFD\0\0\0\0\0 name\uFFFD<\uFFFD\0\0\uFFFD\0\0gposto\0\uFFFD\uFFFD\0\0\uFFFDl\0\0\uFFFD\0\0\0\uFFFD\uFFFD\uFFFD\0\0\b\0\uFFFD\uFFFD\uFFFD\uFFFD\x07\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\0\0\0\0\0\0j\uFFFD\uFFFD\uFFFD_<\uFFFD\0\v\0\0\0\0\0\uFFFD\u0480P\0\0\0\0\uFFFD\u0480P\uFFFD\uFFFD\uFFFDs\x07\uFFFD\uFFFD\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\uFFFD\0\uFFFD\0\0\0\0\0\0\0\0\0
\0
\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0
\x000\0>\0DFLT\0latn\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0liga\0\b\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\00\uFFFD\0\0\0\uFFFD\uFFFD\0\0\0\uFFFD\uFFFD\uFFFD\0\0\uFFFD\x002\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0PfEd\0\uFFFD\uFFFD\0\uFFFD\uFFFD\uFFFD\uFFFD\0\\\uFFFD\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\0\0\0\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\0\0\0\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\0\0\b\0\0\0\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0N\0\0\0\0\0\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\0\0\0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\0\0\0\0\0\0]\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0q\uFFFD\uFFFD\0\0\0\0\0\0\0\uFFFD\uFFFD\0\0\0\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\0\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\uFFFDD\0\0\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\0\0\0\0\0\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\0\0\0\0\0\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0,\0\0\0\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\0\0\0,\0\0
\0\0\uFFFD\0d\0\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0\uFFFD\0\uFFFD\uFFFD\uFFFD\0\0\0\0\0\0&\0\0\0?\0V\0U\0\uFFFD\0\uFFFD\0;\0T\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0|\0\uFFFD\0\uFFFD\0}\0~\0\x7F\0{\0z\0y\0x\0w\0v\0t\0r\0s\0n\0o\0p\0q\0\0\0m\0k\0l\0\b\0j\0j\0i\0e\0f\0g\0h\0d\0c\0b\0S\0a\0\`\0R\0_\0^\0[\0\\\0]\0Z\0Y\0u\0W\0X\0Q\0P\0P\0O\0N\0L\0M\0K\0J\0I\0I\0H\0G\0F\0E\0D\0\v\0C\0B\0A\0@\0<\0=\0>\0:\x002\x003\x004\x005\x006\x007\x008\x009\x001\x000\0/\0.\0-\0'\0(\0)\0*\0+\0,\0\0&\0%\0!\0"\0#\0$\0 \0\0\0\0\0\x1B\0\0\v\0\0\0\0\0\0\0\0\0\0\0\r\0\0\0
\0	\0\x07\0\0\0\0\0\0\0\f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\f\0\0\0\0\x07x\0\0\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\uFFFD\0\0\0\0?\0\0\uFFFD\0\0\uFFFD\0\0\0V\0\0\uFFFD\0\0\uFFFD\0\0\0U\0\0\uFFFD\0\0\uFFFD\0\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\0;\0\0\uFFFD\0\0\uFFFD\0\0\0T\0\0\uFFFD\x07\0\0\uFFFD\x07\0\0\0\uFFFD\0\0\uFFFD\b\0\0\uFFFD\b\0\0\0\uFFFD\0\0\uFFFD	\0\0\uFFFD	\0\0\0\uFFFD\0\0\uFFFD
\0\0\uFFFD
\0\0\0\uFFFD\0\0\uFFFD\v\0\0\uFFFD\v\0\0\0\uFFFD\0\0\uFFFD\f\0\0\uFFFD\f\0\0\0\uFFFD\0\0\uFFFD\r\0\0\uFFFD\r\0\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\0\uFFFD\0\0\uFFFD\x1B\0\0\uFFFD\x1B\0\0\0|\0\0\uFFFD\0\0\uFFFD\0\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\0}\0\0\uFFFD\0\0\uFFFD\0\0\0~\0\0\uFFFD \0\0\uFFFD \0\0\0\x7F\0\0\uFFFD!\0\0\uFFFD!\0\0\0{\0\0\uFFFD"\0\0\uFFFD"\0\0\0z\0\0\uFFFD#\0\0\uFFFD#\0\0\0y\0\0\uFFFD$\0\0\uFFFD$\0\0\0x\0\0\uFFFD%\0\0\uFFFD%\0\0\0w\0\0\uFFFD&\0\0\uFFFD&\0\0\0v\0\0\uFFFD'\0\0\uFFFD'\0\0\0t\0\0\uFFFD(\0\0\uFFFD(\0\0\0r\0\0\uFFFD)\0\0\uFFFD)\0\0\0s\0\0\uFFFD*\0\0\uFFFD*\0\0\0n\0\0\uFFFD+\0\0\uFFFD+\0\0\0o\0\0\uFFFD,\0\0\uFFFD,\0\0\0p\0\0\uFFFD-\0\0\uFFFD-\0\0\0q\0\0\uFFFD.\0\0\uFFFD.\0\0\0\0\0\uFFFD/\0\0\uFFFD/\0\0\0\0\0\uFFFD0\0\0\uFFFD0\0\0\0m\0\0\uFFFD1\0\0\uFFFD1\0\0\0k\0\0\uFFFD2\0\0\uFFFD2\0\0\0l\0\0\uFFFD3\0\0\uFFFD3\0\0\0\b\0\0\uFFFD4\0\0\uFFFD4\0\0\0j\0\0\uFFFD5\0\0\uFFFD5\0\0\0j\0\0\uFFFD6\0\0\uFFFD6\0\0\0i\0\0\uFFFD7\0\0\uFFFD7\0\0\0e\0\0\uFFFD8\0\0\uFFFD8\0\0\0f\0\0\uFFFD9\0\0\uFFFD9\0\0\0g\0\0\uFFFD:\0\0\uFFFD:\0\0\0h\0\0\uFFFD;\0\0\uFFFD;\0\0\0d\0\0\uFFFD<\0\0\uFFFD<\0\0\0c\0\0\uFFFD=\0\0\uFFFD=\0\0\0b\0\0\uFFFD>\0\0\uFFFD>\0\0\0S\0\0\uFFFD?\0\0\uFFFD?\0\0\0a\0\0\uFFFD@\0\0\uFFFD@\0\0\0\`\0\0\uFFFDA\0\0\uFFFDA\0\0\0R\0\0\uFFFDB\0\0\uFFFDB\0\0\0_\0\0\uFFFDC\0\0\uFFFDC\0\0\0^\0\0\uFFFDD\0\0\uFFFDD\0\0\0[\0\0\uFFFDE\0\0\uFFFDE\0\0\0\\\0\0\uFFFDF\0\0\uFFFDF\0\0\0]\0\0\uFFFDG\0\0\uFFFDG\0\0\0Z\0\0\uFFFDH\0\0\uFFFDH\0\0\0Y\0\0\uFFFDI\0\0\uFFFDI\0\0\0u\0\0\uFFFDJ\0\0\uFFFDJ\0\0\0W\0\0\uFFFDK\0\0\uFFFDK\0\0\0X\0\0\uFFFDL\0\0\uFFFDL\0\0\0Q\0\0\uFFFDM\0\0\uFFFDM\0\0\0P\0\0\uFFFDN\0\0\uFFFDN\0\0\0P\0\0\uFFFDO\0\0\uFFFDO\0\0\0O\0\0\uFFFDP\0\0\uFFFDP\0\0\0N\0\0\uFFFDQ\0\0\uFFFDQ\0\0\0L\0\0\uFFFDR\0\0\uFFFDR\0\0\0M\0\0\uFFFDS\0\0\uFFFDS\0\0\0K\0\0\uFFFDT\0\0\uFFFDT\0\0\0J\0\0\uFFFDU\0\0\uFFFDU\0\0\0I\0\0\uFFFDV\0\0\uFFFDV\0\0\0I\0\0\uFFFDW\0\0\uFFFDW\0\0\0H\0\0\uFFFDX\0\0\uFFFDX\0\0\0G\0\0\uFFFDY\0\0\uFFFDY\0\0\0F\0\0\uFFFDZ\0\0\uFFFDZ\0\0\0E\0\0\uFFFD[\0\0\uFFFD[\0\0\0D\0\0\uFFFD\\\0\0\uFFFD\\\0\0\0\v\0\0\uFFFD]\0\0\uFFFD]\0\0\0C\0\0\uFFFD^\0\0\uFFFD^\0\0\0B\0\0\uFFFD_\0\0\uFFFD_\0\0\0A\0\0\uFFFD\`\0\0\uFFFD\`\0\0\0@\0\0\uFFFDa\0\0\uFFFDa\0\0\0<\0\0\uFFFDb\0\0\uFFFDb\0\0\0=\0\0\uFFFDc\0\0\uFFFDc\0\0\0>\0\0\uFFFDd\0\0\uFFFDd\0\0\0:\0\0\uFFFDe\0\0\uFFFDe\0\0\x002\0\0\uFFFDf\0\0\uFFFDf\0\0\x003\0\0\uFFFDg\0\0\uFFFDg\0\0\x004\0\0\uFFFDh\0\0\uFFFDh\0\0\x005\0\0\uFFFDi\0\0\uFFFDi\0\0\x006\0\0\uFFFDj\0\0\uFFFDj\0\0\x007\0\0\uFFFDk\0\0\uFFFDk\0\0\x008\0\0\uFFFDl\0\0\uFFFDl\0\0\x009\0\0\uFFFDm\0\0\uFFFDm\0\0\x001\0\0\uFFFDn\0\0\uFFFDn\0\0\x000\0\0\uFFFDo\0\0\uFFFDo\0\0\0/\0\0\uFFFDp\0\0\uFFFDp\0\0\0.\0\0\uFFFDq\0\0\uFFFDq\0\0\0-\0\0\uFFFDr\0\0\uFFFDr\0\0\0'\0\0\uFFFDs\0\0\uFFFDs\0\0\0(\0\0\uFFFDt\0\0\uFFFDt\0\0\0)\0\0\uFFFDu\0\0\uFFFDu\0\0\0*\0\0\uFFFDv\0\0\uFFFDv\0\0\0+\0\0\uFFFDw\0\0\uFFFDw\0\0\0,\0\0\uFFFDx\0\0\uFFFDx\0\0\0\0\0\uFFFDy\0\0\uFFFDy\0\0\0&\0\0\uFFFDz\0\0\uFFFDz\0\0\0%\0\0\uFFFD{\0\0\uFFFD{\0\0\0!\0\0\uFFFD|\0\0\uFFFD|\0\0\0"\0\0\uFFFD}\0\0\uFFFD}\0\0\0#\0\0\uFFFD~\0\0\uFFFD~\0\0\0$\0\0\uFFFD\x7F\0\0\uFFFD\x7F\0\0\0 \0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\x1B\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\v\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\r\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0
\0\0\uFFFD\0\0\uFFFD\0\0\0	\0\0\uFFFD\0\0\uFFFD\0\0\0\x07\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\0\0\uFFFD\0\0\uFFFD\0\0\0\f\0\0\0\0\0\0\0(\0\uFFFD:\uFFFD\uFFFDp\\\uFFFD\uFFFD\uFFFD.\uFFFD\x07\\\x07\uFFFD\x07\uFFFD\b\br\b\uFFFD	\f	N


J
\uFFFD\v2\v\\\v\uFFFD\ft\f\uFFFD\f\uFFFD\f\uFFFD\rl\r\uFFFD$\uFFFD\uFFFD\uFFFD*\uFFFDH\uFFFD\uFFFD\b"~\uFFFD\uFFFDp\uFFFD\uFFFDT\uFFFD\uFFFD&\uFFFDN\uFFFDX\uFFFD4d\uFFFD\x1B.\x1B\uFFFD\uFFFD\uFFFD4f\uFFFD\uFFFDF\uFFFD\uFFFD 4 \uFFFD \uFFFD!f!t!\uFFFD"\f"x#\uFFFD$j%\uFFFD&\uFFFD'X(@)\uFFFD*:+Z,0,\uFFFD..\uFFFD.\uFFFD/@/p/\uFFFD0\uFFFD0\uFFFD1T2\uFFFD33\uFFFD4H4\uFFFD5\uFFFD6(6\uFFFD7H88:8d8\uFFFD8\uFFFD99\uFFFD:0:\uFFFD;J;\uFFFD<B<~=D=\uFFFD=\uFFFD>D>\uFFFD?8?\uFFFD@&@\uFFFD@\uFFFDA\\BB\uFFFDB\uFFFDCjC\uFFFDDDXD\uFFFDEZE\uFFFDF\fF\uFFFD\0\0\0\0\0\uFFFD\uFFFD\`\uFFFD\0\r\0\0\0%2674.#""264&\uFFFD\b*\b&\x1B-*6\`+55V55\uFFFD\x1B\x1B4/A0\uFFFD>9\\88\\9\0\0\x07\uFFFD\uFFFD\uFFFD\uFFFD\0\uFFFD\x008\0J\0Z\0k\0z\0\uFFFD\0\uFFFD\0\0!"'&5467326=6323!26=>22373\x07&'&!"3!2>54&##"&'546;2#3#"&=46732#'#"&=46;2#%32+"&=43#"&=46;2#\0\uFFFDf8!\r2#V
	
1\x1B	\x07e\r
-\v\v\r\r1&39-WsEz\uFFFDi\r
!
\b\uFFFDr1h\uFFFD2f34k\uFFFD\uFFFD5\rm5\rm\r\rx(\uFFFD!0\x07	0	\b\f\x1B\b\b1$\uFFFD&2\uFFFD\b\f\uFFFD\uFFFD\v		\uFFFD"FB!BF\uFFFDJ\r!F!\uFFFD\rJ\r\rN\uFFFDJ\r\rJ\r\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0'\0\0"27>7654./&=462\uFFFDc\uFFFD\uFFFDL'&\uFFFDY]\uFFFD]Y\uFFFD&'L\uFFFD\uFFFDd\v$\uFFFD$\uFFFD\x7FL\uFFFD\uFFFDce]Y\uFFFD&''&\uFFFDY]ec\uFFFD\uFFFDL\uFFFDQ\f\uFFFD\r\uFFFD\uFFFD\uFFFD\f$\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0#\x003\0\0"2>54'.'&2.546#2.546\uFFFDf\uFFFD\uFFFDNN\uFFFD\uFFFD\u02FC\uFFFDM('\uFFFD\\^'
\uFFFD\b\b\uFFFD\x07\v\uFFFD
\uFFFD\b\b\uFFFD\x07\v\uFFFDN\uFFFD\uFFFD\u033B\uFFFDNN\uFFFD\uFFFDfh_[\uFFFD&)\uFFFD\uFFFD\v\uFFFD		\uFFFD\b\x07
\uFFFD\r\v\uFFFD		\uFFFD\b\x07
\uFFFD\r\0\x07\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0\0\0#\0/\x003\x007\0;\0\0!27>764'.'&"\x07\x07!5#!5\x07#.>73#3!!'#3\0\uFFFD\0('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(\uFFFD\uFFFD\uFFFD2%x%\x7F\uFFFD\v
\uFFFD\v\uFFFD\uFFFD=\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDh_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\x07777\uFFFD\uFFFD\v7\uFFFDSV+k+\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0\0\0)\0>\0J\0V\0\0!27>764'.'&"\x07\x07%2#!"&5463&"&/&"?>'#";26.'#";>.\0\uFFFD\0('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(\uFFFD\x1B%%\x1B\uFFFD\uFFFD\x1B%%\x1BQ\b\b{\f$\x07\x078

\uFFFD\x07o\uFFFD

\uFFFD
\r
\uFFFD

\uFFFD
\r\uFFFDh_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_y!\uFFFD\uFFFD!!R!\uFFFDT\f1\b\x07h8\r\r\r\rt\r\r\f\r\0\0	\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0\0\0"\0+\0E\0O\0[\0g\0n\0\0!27>764'.'&"\x07\x07%&47&465\x07264&""\x07"&'&+"3!26=4&#!54&#!"#".6;2'#".6;2#546;\0\uFFFD\0('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(Y\f\f}k		"\v	\uFFFD\x07\v\v\x07\uFFFD\x07\v\v\x07\uFFFD\uFFFD1\v\x07\uFFFD\uFFFD\x07\v\uFFFD\x07\v\v\b\uFFFD\x07\v
\b\uFFFD\x07\v\v\b\uFFFD\x07\v
\uFFFD\uFFFD6
\b$\uFFFDh_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_P\f\uFFFD 7\x07\x07\v\bt\b\f\f\bt\b\v#\uFFFD\uFFFD\b\f\f\uFFFD

X	\r	\r\uFFFD\uFFFD\x07\f\0\0\0\0\uFFFD~\uFFFD\uFFFD\0\0-\0\0%&/\x07'.'&7>76\x07\x07>.326!\uFFFD\x07\b\uFFFD\`rncf\uFFFD\v\v+,\uFFFDpmhj\uFFFD!#\uFFFDDJP\uFFFD\uFFFD\uFFFDu4\x1Be\uFFFDU:n\uFFFD\uFFFD\x07\b\uFFFD=01\uFFFDqnfh\uFFFD&'\uFFFDplil+4\uFFFD\uFFFD\uFFFDa6y\uFFFD\uFFFD\uFFFDM%\0\0\0\uFFFD\uFFFD\0\uFFFD\0\x009\0_\0\0%!7>/.3!>4&.#6.326'!2>?6.\x07'.\x076?\uFFFD\uFFFD\uFFFD]	#"#e\uFFFD\rfK\uFFFD\v'$\r\bs\uFFFD\f(HH\r\uFFFD9	g
		\x07\x07\v-	&'	\uFFFD\x07\x1B\x07\uFFFD\x07\f\x1B\x07\uFFFD\`\rN\uFFFD\fe&\uFFFD\uFFFD\f\x1B\r(&\v'\uFFFD(I*H(\r\x1B\uFFFD'	.
d'\x07\0\v\r\f\v\uFFFD\uFFFD\v\f\v\uFFFD\0\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\0\x009\0_\0\0%!7>/.3!>4&.#6.326'!2>?6.\x07'.\x076?\uFFFD\uFFFD\uFFFD]	#"#e\uFFFD\rfK\uFFFD\v'$\r\bs\uFFFD\f(HH\r\uFFFD9	g
		\x07\x07\v-	&'	\uFFFD\x07\x1B\x07\uFFFD\x07\f\x1B\x07\uFFFD\`\rN\uFFFD\fe&\uFFFD\uFFFD\f\x1B\r(&\v'\uFFFD(I*H(\r\x1B\uFFFD'	.
d'\x07\0\v\r\f\v\uFFFD\uFFFD\v\f\v\uFFFD\0\0\0\0\0\0\uFFFD\uFFFD\uFFFD\0	\0\x007\0D\0Q\0^\0\0%#!"&5!%463!2)#54&#!"#";3!2>53264&2654&"#2654&"!2654&"$\uFFFD>$>\uFFFD?\x07,\x07\uFFFD\uFFFD|\uFFFD4$\uFFFD\uFFFD$3\uFFFDp&3\x1B\uFFFD\x1B3'p\uFFFD\uFFFDm"%%\uFFFDp\b\b&&$33$&\uFFFDj\x1B3&&3\x1B\uFFFD\uFFFDQ\uFFFD\uFFFDp\uFFFD\uFFFDp\uFFFD\uFFFDp\0\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\0\0\0\f\0/\0T\0\03!2#!"54!2>&/&#>6'."\x07!">/3.'.2>76&#\uFFFD\0\uFFFD\uFFFD\uFFFD\0\uFFFD3
U\f3\uFFFDCZbV:
\fJlzlJ\r\r\uFFFD\uFFFD\uFFFD\x07
V\v3\uFFFDCZbU;
	\rJlzlJ\f\f
\uFFFD\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD7\x07\f\fV\v3/F$.M0\f\x07\f<^66^<
:\x07\v\fV\v3.G$.M0		\b<^66^<
\0\0\0\0\uFFFD\uFFFD\uFFFD\0\x008\0K\0e\0\0&"#\x07;\x072?5.'&'>.\x07\x07\x07#"3!27>'\x07'.7>3\x07'&6?67676T\f\v\uFFFD\f	
\f\uFFFD\f"\fw0C) 9n\uFFFD\uFFFDGZ;8#w\uFFFD\f\f\uFFFD\f\b\uFFFD	}\uFFFD\uFFFD'%\\qv3G)(\uFFFD&\uFFFD\uFFFDCn"\uFFFD\v\x1B\v\uFFFD\uFFFDdL7\x1B\uFFFDb\uFFFD	"\r\f	\r\f!\fw\uFFFD\uFFFD%4	H\uFFFD\uFFFDn: )OL_a\\\uFFFDV\x07D	\uFFFD\x1Bu\uFFFDD\uFFFDE3J"\r'EBNP\uFFFDW\uFFFD2M
\x1B"
_\b\bfc"\r\b\uFFFD\uFFFD\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0?\0b\0o\0x\0\0\x07\x07\x07\x07"'&'&'&'&>76767676'.'&\x07"&54>76!4/&7>#!&\x07".76?>\x07".4>2'&2>&m\f
.[IT\x1BS?G3	/&:&,Q6C- \x07\f,)}T@sU J\uFFFDSD\uFFFDy*E\uFFFD\uFFFD7m\f\r\fZ-\x07\uFFFD\uFFFD\uFFFDn	"@+\b\r
\uFFFD'DOC''DOC'\uFFFD++;*+()#)]nXN\rJIQV\r\v@A5>*(QASR<1VPKQ1]=.1U\uFFFDiL;\`\uFFFDG\uFFFD	\b	\b\uFFFDN\r8rK\r\v!\x7F(C'(BOC''C!+<)*;*\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0'\0N\0\0!"&=4>;&'.5467>\x07\x0732%!54&#!"&5467>5.'&\x07#!"\uFFFD\uFFFDU6 \uFFFD\v5"#,)'i9Fw$%&$1\f\uFFFD 6\uFFFDl]\uFFFD\uFFFD+)\x1B3V2(K *.\uFFFD\uFFFD\x7F\uFFFD";"KD*f6=o+*,QACK9l,8S";"\uFFFDU\uFFFDC|0M+6_9P+&J5}A\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0\0\x008\0<\0\0!27>764'.'&"\x07\x07%!"3!#"3!26&+5!2654&!5\0\uFFFD\0('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(\uFFFD\uFFFD\x07

\x07\uFFFD\x07

\x07x
		
\uFFFD\0\x07

\uFFFD\uFFFD\uFFFDh_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD
\x07\uFFFDf\x07
3

3
\x07\uFFFD\x07
\uFFFD\uFFFDEE\0\0\0\0\0\0\uFFFD}Y\x7F\0\0\0"\x07>&'	>.\x1B\uFFFD\uFFFD
\v\v
3/\uFFFD\uFFFD
\f~\r\uFFFD:	\x1B\b\uFFFD<%/\uFFFD\uFFFD\f$#\0\0\0\0\0\0\uFFFD\uFFFDU\uFFFD\0\0\027>4&'&	\uFFFD5
\v\v
\uFFFD\uFFFD/\uFFFD\uFFFD
\f~\r\uFFFD	\x1B\b\uFFFD%/\uFFFDj\uFFFDg\f$#\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0$\0=\0\0"\x07\x0727>764'.'&!2#!"&46"/"&5\x07"&4?62\uFFFDh_[\uFFFD&((&\uFFFD[_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD\uFFFD0\v\v\uFFFD\uFFFD
U	\x1B	kj
	\uFFFD	\x1B	\uFFFD
\x7F('\uFFFD[_\uFFFD_[\uFFFD'(('\uFFFD[_\uFFFD^\\\uFFFD'(\uFFFD\uFFFD\uFFFD\uFFFD		h\uFFFD\uFFFD
\vg
	\uFFFD

\uFFFD	\x1B\0\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0!\0.\x007\0\0."2>4".4>2"2676&"264&\uFFFD%\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDII\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDI\uFFFD:\uFFFD\uFFFD\uFFFDt>>t\uFFFD\uFFFD\uFFFDu??\uFFFD\uFFFD +ZV\uFFFDII\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDII\uFFFD\uFFFD\uFFFD\uFFFD{:??t\uFFFD\uFFFD\uFFFDt??t\uFFFD\uFFFD\uFFFD\uFFFD!\uFFFD\uFFFD !\uFFFDD++\0\0\0\0\uFFFD\uFFFD\uFFFDA\0\0\0\0&\0\0"\x07\x07276764'&'&62"/&>2\0zhe<==<eh\uFFFDhe<==<eh6	\b\uFFFD\b\b\uFFFD\b\b\uFFFD\uFFFD\uFFFD=<eh\uFFFDhe<==<eh\uFFFDhe<=\uFFFD\uFFFD\b\b\uFFFD\b\b\uFFFD\b\b\uFFFD\0\0\0\0\0\uFFFD\uFFFD\uFFFDA\0\0\0\0&\0\0276764'&'&"\x07\x07"&4?62"/\0zhe<==<eh\uFFFDhe<==<eh6	\b\uFFFD\b\b\uFFFD\b\b\uFFFD\uFFFD\uFFFD@=<eh\uFFFDhe<==<eh\uFFFDhe<=u\b\b\uFFFD\b\b\uFFFD\b\b\uFFFD\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\0\0\0\f\0+\0R\0\uFFFD\0\03!2#!"54".5467.=4>73\x07\x07\x0727>4&'.67>=6&'.67>4'&'.67>=6&'#&\x07.76\x07\x07\uFFFD\0\uFFFD\uFFFD\uFFFD\0\uFFFD\uFFFD6X2?6\x1B6!!6 \x1B6?2X>"0	\x07
)2)"&U%"*3(
\x07\b/#\uFFFD\x07\v\b\x07	\r\x07$\r		\x1B(8)/*%\uFFFD\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\x1B. 2\f75!7""7!57\f2 .\uFFFD2#5)\b!	

	!!\b)6"3\uFFFD\uFFFD	\f\f\r
*%\x07	\r;)**
)1'
\0\0\b\0\0\uFFFD\uFFFD\0\uFFFD\0\0\0\f\0\0\0\0\0 \0$\0\03!2#!"54#'##3#3#5#3\uFFFD\0\uFFFD\uFFFD\uFFFD\0\uFFFD\f\uFFFD;\uFFFD\u0154\uFFFD\uFFFD\u2000E\u2ED4\uFFFD\uFFFD\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDN\u0667\uFFFD'Y\0\0\0\0\0\uFFFD\uFFFD\uFFFD\0\0M\0\02"/"&5\x07"&4?62+532>4.#4."";#".54>7>76\v\x07n\v \v,,\f\vj
OED[6W1DvF%%2T11T2Dv\uFFFDvD2T11T2%%FvD1W6[DE\uFFFD\x07h\v
(\uFFFD\uFFFD1(

h\uFFFD"!vIGf8EsCG0RcR0EsCCsE0RcR0GCsE8fGIv!"\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\x004\0A\0P\0\0"'&'&'&54>2\x07\x07\x07"3676767654.#5".4>2"2>4.#5\0#==e=QAx\uFFFD\uFFFD\uFFFDxAF7_BM%F\uFFFD\`5>1R5:>6N.95a\x7FF1S11SbS11S1..8..~*:ag\uFFFD\uFFFDV\uFFFDyAAy\uFFFDV}\x7FeaB9\uFFFD6b\x7FFnpWS6+29SUkfF\uFFFDa6\x07\uFFFD\uFFFD1ScS11ScS1\x1B\x1B/7/\x1B\x1B/7/\x1B\x07\0\0\0\uFFFD}R\0\0\0	1&>1\x07.746n\uFFFD\uFFFD(8\uFFFD\uFFFD]*'\fnr8(\uFFFD]\uFFFD^\b#\x1B\0\0\0\uFFFD\uFFFDu\x7F\0\f\0\x001\0H\0\0%".4>2>4.'2\x07\x07"&'&'67676767"\x07\x07\x07 76767&'&'&\uFFFDCqBBq\uFFFDpCCpC'@&&@ND''D'y\uFFFDVh9",:V\uFFFD\uFFFD\uFFFDVh9",:Vnqy\uFFFD\uFFFD~e\uFFFDAA\uFFFDe~\uFFFD\uFFFD~f\uFFFDBB\uFFFDf~\uFFFD\uFFFDBq\uFFFDqCBq\uFFFDqB\uFFFD(BNB('CPC'\uFFFD[Ra\uFFFD83B6Q\\[Ra\uFFFD83B5R-.d54_~\uFFFD\uFFFD\x7F_3554^\x7F\uFFFD\uFFFD~_45\0\0\0\0\0\uFFFD\uFFFD\x07\uFFFD\uFFFD\0#\x003\0C\0T\0d\0\0&\x07\x07\x07 '&'&'.\x07 767676&.7>\x07#!"&'&>'%".7>\x07"&'&>#\x07\uFFFD6W\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDW\v)+
c\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDd\r\uFFFD\uFFFD\x1B\b4.6 4%\uFFFD%>5.\x07>\b\x1B\uFFFD\uFFFDm$#\x07n\x07#("\bw\b12\vwq\f\uFFFDfe6776ef\uFFFD\v"\x07\uFFFDus>??>su\uFFFD5\uFFFD}\r,\x1B
-\x1B\uFFFD\uFFFD +\x1B,\v\uFFFD\uFFFD\r\uFFFD\x1B!+\x07\r%\uFFFD\uFFFD1+0\uFFFD\uFFFD!\0\0\uFFFD\uFFFD\uFFFD\x7F\0\uFFFD\0\0%\0\02\x07\x07"'.'&47>76"2>4.\0h_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_hFuEEu\uFFFDuEEu\uFFFD('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(\uFFFD\0Eu\uFFFDuEEu\uFFFDuE\0\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\0\0\0	\0\0\uFFFD\0\uFFFD\0\uFFFD\uFFFD\0\uFFFD\0\0\0\0\0\0\0q\uFFFD\0\x1B\0\0%"'&5&'&>3!2\x07\x07\uFFFD\f\uFFFD
p\f\r
\uFFFDLE\r\v\r\f\x07\r\v\uFFFD\uFFFD\uFFFD\x1B=?\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0"\0:\0T\0\0"#"3!2654&!"26=3264&)";\x072?2654&"54&"3!264&+7>.\uFFFD\uFFFD%\uFFFD\uFFFD\uFFFD\uFFFD \uFFFDB\uFFFD\uFFFD\uFFFD\uFFFD\f \f\uFFFD \uFFFD\uFFFD\f\uFFFD %\uFFFD\uFFFD\b	.\uFFFD %R\uFFFD\uFFFD\uFFFD  \uFFFD\f \v\uFFFD\uFFFD%\uFFFD\uFFFD\f\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD	\r\0\0\0\uFFFD\uFFFDA\uFFFD\0\0?\0\0276767654'&'&'&"\x07\x07\x07&'&/\x07'7'\x07\x07'\x07\x07\x07\x07\x07!'&'&'&95.&"\x074<\uFFFD<4\x1B\b"&/4\0E1?5\uFFFD#EF#|5?1E
\x07A\x07	\r#6197+>#<*5!!5*<#>+7916#\uFFFD$\uFFFD7EEEE9\uFFFD$%((&\0\0\0\0\0\0\uFFFD\uFFFDU\uFFFD\0\0&\x007\0\0!2#!"&=4632\x07#!"&=.>"35>._	\r\r	\uFFFD\uFFFD	\r\r	\uFFFDX\uFFFDm(&jO\uFFFD\0Oj&(n\uFFFDXI\uFFFDT/hF\uFFFDGg0U\uFFFD\r	*	\r\r	*	\r\uFFFDL\uFFFD\uFFFD\uFFFD\uFFFD(RR(\uFFFD\uFFFD\uFFFD\uFFFDLVBu\uFFFD\uFFFDdaad\uFFFD\uFFFDuB\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0/\0A\0R\0\0%\x07"&4?#"&463!2"&776232#!"&5462"&5463!2#!!"&463!462S\uFFFD\v \f\uFFFD\uFFFD)\x1B\uFFFD\v \f\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD(\uFFFD\uFFFDj\uFFFD\uFFFD\uFFFD\uFFFD\f \f\uFFFD\uFFFD\uFFFDV\uFFFD\v \v\uFFFD)\uFFFD\uFFFD)\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0#\x006\0M\0\x00767>;>5%64'%.\x07\x07>=\x0754&'&\x0767676"!54&"3!26=4&r\f\b0{\uFFFD;\v\x07\vK\uFFFD\uFFFD	\fXMtCV\uFFFD\uFFFD\uFFFD]\uFFFDYVA_:\uFFFD\uFFFD\uFFFD!\uFFFD\uFFFD\x07
=]2[\b\r\uFFFD\f(\f\uFFFD
\v[	!1]y\uFFFD\r\uFFFD0\uFFFD\uFFFD1MQ\x7FM9\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0*\x007\0D\0P\0\\\0\0!.54>3!2"3!2>74.#"&=462!"&=462!.463!2#"&46;2\x1B\uFFFD\uFFFD)M;  ;M)W*M: <h\uFFFDz!9""9!I&?%"9"\uFFFD\uFFFD"\uFFFD"\uFFFD\uFFFDX\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD~ :M)*M::M*\uFFFD\uFFFD;f<c"8"\uFFFD\uFFFD!9!%?%
"8"Q\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD"!\uFFFD\uFFFD""\0\0\0\0\0\0\uFFFD7\0\0-\0\0%5."\x07!5."\x073!26%2?64&"4&"'&"\uFFFD$\uFFFDa$\uFFFD\uFFFD9\r%\r\uFFFD\f%\rU'U\r%\f^\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\f\f\uFFFD\r%\fV;\uFFFD\uFFFDV\f%\r\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0,\0\0"\x07\x0727>764'.'&\x07&/&>>\uFFFDh_\\\uFFFD'(('\uFFFD\\_\uFFFD^\\\uFFFD'(('\uFFFD\\^\uFFFD

\uFFFDh\x07\x07\uFFFD

\uFFFD\uFFFD
\v\uFFFD('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(\uFFFD\uFFFD	
\uFFFDC\x07\x07\uFFFD
\v\uFFFD\uFFFD

\0\0\0\b\uFFFD\uFFFD\uFFFD\x7F\0\uFFFD\0\0!\x001\0@\0R\0d\0t\0\uFFFD\0\0+"&=46;2&/.67>+"&=46;2+"&=46;2&/.67>\x07&'.6?>%546;2+"&7>&'.6\0 \uFFFD  \uFFFD\uFFFD\f'+L\f\f\f(*L\f\f\uFFFD\uFFFD 4 \x1B4\x1B 4  43\uFFFD+'\rL\f\f\f'+L\f\fL\r'+\f\fL\r'+\f\f\uFFFD\uFFFD\uFFFD !\x1B\uFFFD \uFFFDL\r'+\f\fL\r'+\f\ff  4 \x1B\uFFFD\uFFFD\f\fL\r'+\f\fL\r'+\uFFFD  \uFFFD\uFFFDf  \uFFFD 4\uFFFD\f\fL\r'+\f\fL\r'+\uFFFD+L\f\f\f'+L\f\f\f(*\uFFFD4\x1B 4\x1B GL\f\f\f'+L\f\f\f(*\0\0\uFFFD\uFFFD\uFFFD\x7F\uFFFD\0\0%\x007\0\0".4>2"\x07\x07276764'&'&"/&5462\0f\uFFFD\uFFFDNN\uFFFD\uFFFD\u033C\uFFFDNN\uFFFD\uFFFDfwfc:<<:cf\uFFFDfc:<<:cf(\v\uFFFD\v\uFFFD\b	\uFFFDN\uFFFD\uFFFD\u033C\uFFFDNN\uFFFD\uFFFD\u033C\uFFFDN\uFFFD<:cf\uFFFDfc:<<:cf\uFFFDfc:<\uFFFD_\v\uFFFD\v<\uFFFD\u04D3\b\r\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0"\x009\0\0"\x07\x07 7676'&'&#'"&47632\x07+'&'&547>7632\uFFFD\uFFFDpk@AA@lopl?AA?lp\uFFFD>\v#0!/\b\f-&\f& %4\uFFFDA@ko\uFFFD\uFFFDpl?AA?lppk@A\uFFFD\uFFFD\f\f/A/C\uFFFD\uFFFD65\uFFFDGH	\b'#\0\0\0\uFFFD\uFFFD\uFFFD\0\x000\0\02\x07\x07"'.'&47>76#""/&+";276&\0h_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_;?\uFFFD
G\v3\uFFFD\v
\v\uFFFD\uFFFD('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(\uFFFD\uFFFD\uFFFDd\v\uFFFDF\v\0\0\0\0\uFFFD\uFFFD\0\uFFFD\0\0\0\f\0\0!1 1!1 1\0\0\uFFFD\0\uFFFD\0\uFFFD\uFFFD\0\uFFFD\0\0\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0\0\f\0\0!1 !1 \uFFFD\0\0\uFFFD\0\uFFFD\0\uFFFD\uFFFD\0\uFFFD\0\uFFFD\0\0\0\0\0\b\uFFFD\uFFFD\uFFFD\x7F\0\uFFFD\0\0\0\r\0\0\x1B\0\0)\0*\x007\0\0#2>4."#2>4."#2>4."#2>4."\uFFFD\uFFFD9btb::btb9\uFFFD\uFFFD9btb::btb9+\uFFFD:btb99btb:\uFFFD\uFFFD:btb99btb:\uFFFD:b::btb99b\uFFFDp:b99btb::b:b::btb99b\uFFFDp:b99btb::b\0\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\x001\0=\0K\0\0!";2?32654&+2'&+"&547>3!2\x07!"3!264&\x07#32>4.\\\uFFFDN*7*\uFFFDp\b\fk\uFFFD,47\uFFFD::99\uFFFD\b\uFFFD	\uFFFD\uFFFDF\f\f\uFFFD\f\uFFFD\uFFFD\v\v\uFFFD\b\b\b\uFFFD;,\uFFFD-|\f\f|.+\uFFFD,;\uFFFD\uFFFD?@@?\uFFFD\r	\b		\b	\rt\uFFFD\x07\x07\0\0\0\0\uFFFD\uFFFDg\uFFFD\0\0\0!f\uFFFD\uFFFD\uFFFD\uFFFD\0\0\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\x005\0R\0\0"\x07\x0732>76.\x07'"'&'&4767622654'.'&26=3264&+54&"#";\uFFFDg_[\uFFFD'(('\uFFFD[_ga\uFFFD\uFFFD+\x07\v\x07#x\uFFFDRudb9;;9bd\uFFFDea9;!)&\uFFFD\\^h\uFFFD\uFFFD \uFFFD\uFFFD\x7F('\uFFFD[_\uFFFD^\\\uFFFD'(F\uFFFDV
In;;9ae\uFFFDdb9;;9bdug_[\uFFFD'(\uFFFD2\uFFFD \uFFFD\uFFFD \uFFFD\0\0\f\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0+\0A\0S\0c\0p\0s\0w\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\02#!"&=33!2654'#5&#!"\x07#54632\x07\x07#!"&/47673!"3!2654&#16'#".676\x07\x07'\x07#57'7\x073\x0777\x077\x077%6'#.6763%\x077\x077\x077%6+".6763&/&\uFFFDL\uFFFD, \uFFFDI,<\b\uFFFD	\uFFFD\b\x07\uFFFD:\b<,\f\x07\uFFFD,\f\x07\uFFFD\uFFFD\uFFFDlz



\uFFFD\v\b\x07\v\uFFFD\uFFFD\`\`\`\`\`\`\`\`\`\`\`\uFFFD0\uFFFD\uFFFD>\uFFFDQ?++,+>\uFFFD



\uFFFD\v\b\x07\v\uFFFD!>)+()>C	

	\uFFFD\v\b\x07\vo\uFFFD\uFFFD\uFFFD\uFFFD1.!\uFFFD\uFFFD**MN\b\bm\uFFFD	\uFFFD\uFFFD+\uFFFD\0\x1B\x07\uFFFD,\r\x1B\x07\uFFFD\r@\uFFFD\uFFFDl\uFFFD\uFFFD		\v\x07\vK\`\`\`\`\`\`\`\`\`\`\`\uFFFD0F\uFFFD>\uFFFDq>,++,>^		\f\x07
\uFFFD>+,))>7		\v\b
F\uFFFD\uFFFD\0\0\0\uFFFD\x7F\uFFFD\uFFFD\0\x008\0\0!!2#!".'4>7!2"&'#\x07".?!"&463!'&47362\uFFFD\uFFFD\uFFFD(\uFFFD\uFFFD!7! 8 \v!8!!C\uFFFD\f"\vF\uFFFD\uFFFDgF\v\v\f!\f\uFFFD.\uFFFD\uFFFD" 7!!7! 7!\uFFFD\uFFFD\uFFFDy\uFFFD\f!\fH"G\f!\f\f\f\uFFFD)\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0&\0@\0P\0\0".54>3!2#!"3!265462#"#'./&7>32\x07#"\x07\x077654'&/&#\uFFFD(C''C(_\uFFFD\uFFFD##\uFFFD##(C'\uFFFD\uFFFD\uFFFD\uFFFD6=*	\b\uFFFDF\rw\uFFFDTV\uFFFD\x07{%?%\uFFFD%?%! \uFFFDn!!I\uFFFD\uFFFD%?%=\uFFFD\uFFFD)<6\uFFFDE\rg\uFFFDTV\uFFFD	\b\0\0\0\0\f\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\x07\0\0\0%\0-\x005\0B\0K\0S\0[\0h\0q\0\0#"&46;!2#!'"2>4.\x07"&462!"&463!;2+'"2>4.\x07"&462!"&463!;2+'"2>4.\x07"&462\u03E9\uFFFD\uFFFDE\uFFFD\uFFFDm'C((COC''C(++<++\uFFFD\uFFFDE\uFFFD\uFFFD\uFFFDQ(C''COC''C'**=++\uFFFD\uFFFD\uFFFD7\uFFFD\uFFFD\uFFFDb(C''COC''C'**=++Z  \uFFFD(BPC''CPB(\uFFFD+<++<+\uFFFD  \uFFFD'COC''COC(\uFFFD*=++=*\uFFFDH  \uFFFD'COC''COC'\uFFFD*=++=*\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\f\0\0%\0L\0Y\0k\0\0!&!264&#\x07!"!>&'\x07#&3>.!".54>3!2.'4&#!"3!"264'&"&5746?\uFFFD\uFFFD-\uFFFD~\uFFFD\uFFFDX\uFFFDtx%\uFFFD\0(B''B(}'B'!$\uFFFD\uFFFD$$\0\uFFFD\fq\f \v\uFFFD\uFFFD\f&\uFFFD\uFFFD\uFFFD#"\uFFFD"#\uFFFD""\uFFFD\uFFFD";"\0#;"";#\uFFFD\uFFFD  \uFFFD\0 \uFFFD!\v\uFFFD\uFFFD\f!\vr\v\uFFFD\uFFFD\uFFFD\x1B&!\uFFFD\0\0\0\0\0\uFFFD\uFFFD\uFFFD\x7F\0,\0H\0Z\0\0!\x073264&'%#.55>3!32655..+7267>4/7>\x07\x07".>73R\uFFFDW\f+G*.K+\uFFFD\uFFFDS\v)8>*\uFFFD\v)8/J\uFFFD$\uFFFDUL\x7FI,Rl:/Y%\uFFFD\f	\uFFFD
/Y9\`8+N=!;N*:a8\x7F.K+\uFFFDW\f+H)!>*\x7F\v)8=+\uFFFD?\uFFFD\v,G*\uFFFD\uFFFDLZP\uFFFDM:kR-\uFFFD\b\f\uFFFD\f=\uFFFD99_9;NTO=!;b\0\0\0\0\b\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0\0&\0/\0;\0G\0S\0}\0\0%&'&#"\x0732764>&7"2>4.\x07"&462"3!264&#!"3!2654264&+"3#".54>3!226=4.#!";2654\uFFFD4B@D\uFFFDj4B@D\uFFFDj\uFFFDH:\uFFFD\uFFFD::\uFFFD\uFFFD\uFFFD,\x1B\x1B,2,\x1B\x1B,\uFFFD\uFFFD\x07\uFFFD\uFFFD\uFFFD\r\uFFFDf\uFFFD\uFFFD33M2'2X6\uFFFD\uFFFD6W33W6\uFFFDSU-+\uFFFD	U,,\uFFFD\bV;;VU;;\uFFFD\x1B,2,\x1B\x1B,2,\x1B\uFFFD\uFFFD\uFFFD\0&\uFFFD\uFFFD''\uFFFD3\uFFFD33\uFFFD\uFFFD6W33W6\uFFFD\uFFFD6W3&\0\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0,\x008\0D\0P\0\0!2#!".54>"3!2>54.#3264&+"!264&#!"!264&#!"\uFFFD\b#C2\x1B\x1B2C#\uFFFD\uFFFD$B3\x1B\x1B3B$0&\b00\uFFFD'\uFFFD\uFFFD\uFFFD\uFFFDW\uFFFD\uFFFDW\uFFFD2B$\uFFFDj$B22B$\uFFFD$B2L0\uFFFDj&0\uFFFD0\uFFFD\uFFFD\uFFFD\uFFFD\0\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\x008\0E\0\0467&'.7&'"&'\x07'\x07\x076\x07>267&>67.".4>\uFFFD2(&(V>BIGXGIA>V'')12(&(V>BIGXGIA>V'')1\uFFFDZ&C''CL?$%>\uFFFD,GIA>V(&)12(&(U>AIGXGIA>V(&)12(&(V=@JGa%BLB&'?L?'\0\0\0\0\0\0\uFFFD\x7F\uFFFD\uFFFD\0\0<\0\03+./&6273#!.'5&673>5476767546Y\v\f\f?''=
\v\\XIGR\x1B\f!#\uFFFD\uFFFD!"*)GHX\f\v%-0%
\uFFFD%\b41\uFFFDZ\uFFFD$#\x1B\0XNK01	%\0\0\0\0\b\0\0\uFFFD\uFFFD\uFFFDR\0\0\0\f\0\r\0\0\0&\0'\x003\0\01#1"514312!1#1"5143121#1"514312!1#1"514312\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\v\uFFFD\uFFFD\uFFFD\uFFFDQ\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\`\uFFFD\0\0 \0"\x003\0\0%%&7%>.7%>4&'%&\x0773\r%&7%>.\x07\uFFFD\uFFFD\b#
\uFFFD\r!\uFFFD\uFFFD
\uFFFD\f\f\uFFFD\uFFFD\uFFFD	\uFFFD	o\uFFFD\x1B\uFFFD
!\r\b\uFFFD\r!\uFFFD\uFFFD\uFFFD\x07"#\x07\uFFFD\x07\x07\uFFFD\x07"!\uFFFD\uFFFD\b\b\uFFFD\x1B\uFFFD\x07\x07\uFFFD\b##\uFFFD\uFFFD\uFFFD"!\b\uFFFD\b\b\uFFFD\b!!\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0'\0V\0\02675174./7>54'."\x07\x073326=4./7>54.'#"#3\v?tM7@%#{\uFFFD{$$?8Mu?\f\uFFFD5]C$4a@.5+M1\f\v	1=";%}\f\vZ\uFFFD|!\b\v(\uFFFDIOCBNNBCOI\uFFFD(\v\b!|\uFFFDZ\v\r\uFFFD\x075Vn;\r\fK\uFFFDf\b\v!k<7bD\r[8)H1\b\0\0\0\0\0\uFFFD\uFFFD\uFFFDw\0\v\0\x1B\0\0"&463!2#&>2".7Mf\uFFFD	\v\v\v\v\uFFFD##\uFFFD\f\f\f\f\uFFFD\uFFFD\v\f\f\v\0\0\0\0\0\0\uFFFD\uFFFD\uFFFD\0\0\0\x1B\0\0!!"&463!2#462"&5\0\uFFFD\0.\x1B\x1B\uFFFD\uFFFD\uFFFD\x1B%\x1B\x1B%\x1B\uFFFD\uFFFD\0\uFFFD\x1B%\x1B\x1B%\x1B\uFFFD\x1B\x1B\uFFFD^\0\0\0\0\x07\0\0\uFFFD\uFFFD\0\uFFFD\0\0\0\f\x002\0?\0K\0X\0n\0\03!2#!"54!"&54632"3!2654&"&4632"&=4627#"&46;2"&=462"'.?#"&46;2\uFFFD\0\uFFFD\uFFFD\uFFFD\0\uFFFD\uFFFD\uFFFDw##\b\f\f\f\f\b\uFFFD\b\v\v\v\v	""\uFFFD\uFFFD\b\v\v\v\v\uFFFDN\b\f\f\bN	\v\vF\b\f\f\f\f~\x07\bE\uFFFD\b\f\f\b\uFFFD\vF
\uFFFD\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD"u"\v\f\v	\uFFFD\uFFFD\b\v\v\bu	\v\f\v"\uFFFD\uFFFD"\uFFFD\f\b'\b\f\f\b'\b\f\f\v\v\f\f\b'\b\f\f\b'\b\f\uFFFD\uFFFD\x07\uFFFD\f\f\x07\b\uFFFD\x07\0\0	\0\0\uFFFD\uFFFD\0\uFFFD\0\0\0\f\0\0,\x007\0A\0J\0S\0d\0\03!2#!"54!"3!2654&#!"&5463!2\x07#"73264&\x07#";26&%"264&\x07"&4627\x07'&2?64.\uFFFD\0\uFFFD\uFFFD\uFFFD\0\uFFFD\uFFFD\uFFFD\uFFFD**l++\uFFFD\uFFFDl;\uFFFD\v\v\v\v\uFFFD\b

\b\uFFFD\v

\v\uFFFD\v

\uFFFD\uFFFD\x1B%%5%%\x07\b<\v%I\v\uFFFD\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\uFFFD*\uFFFD\uFFFD++l*\uFFFDLl[
\v\uFFFD.%5%%5%S\b\uFFFD<
%I
\0\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\0\0\0\f\0\0'\0<\0\03!2#!"54"2>4..4>77#54&+";26754&\uFFFD\0\uFFFD\uFFFD\uFFFD\0\uFFFD\0FuEEu\uFFFDuEEuF<d::d<;d::d4o\uFFFD\uFFFD\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0Eu\uFFFDuEEu\uFFFDuE\uFFFD"<exe<<eve<\uFFFDo\uFFFD\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\0\0\0\f\0?\0O\0\03!2#!"54"=.'>54.#"\x0726=>773265/".547>32\uFFFD\0\uFFFD\uFFFD\uFFFD\0\uFFFD\uFFFD\x07I7!$*I*B\\% 6H\b\r/I+

;0\x07\r\uFFFD4!).B4\uFFFD\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD(<_E'+H+\\B'E^;\b\r	*G*-@\b\r	\uFFFD3/!B/4\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\0\0\0\f\0\x000\0@\0D\0\03!2#!"54"/.>76'"/.>76'"/&4?6'7'\uFFFD\0\uFFFD\uFFFD\uFFFD\0\uFFFD\uFFFD\b	\b\uFFFD\uFFFD\b	\x07\uFFFD\uFFFD\b	\b\uFFFD\uFFFD\b	\x07\uFFFD\uFFFD

\uFFFD\v\f\uFFFD\v\v\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD~ww~k~vv~k~~\x07\x07~~\uFFFDccd\0\0\0\uFFFD\x7F\0\uFFFD\0\0\0\0#!\x07\x07#&/.>>\0=i=\uFFFD\uFFFD\uFFFD\b\x07\uFFFD\uFFFD\x07\x07}
j+\b\uFFFD\uFFFD\uFFFD=i=\b\b\uFFFD\uFFFD\uFFFD	vL\b\0\0\0\0\0\0\0\uFFFD\0\0\0'&\x076?264/764&"\x07\uFFFD\uFFFD\f"\f\uFFFD\uFFFD\b\b\uFFFD\uFFFD\f"\f\uFFFD\uFFFD\f"\f\uFFFD\uFFFD\f"\f\uFFFD\uFFFD\x07\b\uFFFD\uFFFD\f"\f\uFFFD\uFFFD\f"\f\0\0\0\uFFFD\uFFFD\0\uFFFD\0\x005\0\0"\x07\x0727>764'.'&"/\x07"&4?'&462762\0i_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_m\v\v\uFFFD\uFFFD\v
\uFFFD\uFFFD
\v\uFFFD\uFFFD\v
\uFFFD\uFFFD\uFFFD('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(\uFFFD*

\uFFFD\uFFFD
\v\uFFFD\uFFFD\v
\uFFFD\uFFFD
\v\uFFFD\uFFFD
 \0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFDq\uFFFD\0\0\0+\x004\0\0	#!".67>	'&\x073!262"&/&6264&"\uFFFD\uFFFD3\uFFFDf2\uFFFD.50|\uFFFD3\uFFFD3\uFFFD\uFFFD-+ + *++L\uFFFD:33:\uFFFD\x1B\uFFFD\uFFFD\uFFFD\uFFFD,-\uFFFD\uFFFD-\uFFFD5*\0\0\0\0\uFFFD\uFFFD\uFFFD\\\0\0%\0:\0O\0\0".4>2\x07\x07"\x07\x07 7676'&'&\x072\x07\x07"'&'&4767654."3!2>4.#\0v\uFFFDvv\uFFFD\uFFFDfd:<<:dfw\uFFFDol?@@?lool?@@?lo\uFFFDm^[5775[^\uFFFD^[5775[^\x7F\f\f\x1B\f\r\r\f7v\uFFFD\uFFFD\uFFFDv<:df\uFFFDfd:<\uFFFD@?lo\uFFFD\uFFFDol?@@?lool?@I75[^\uFFFD^[5775[^\uFFFD^[57\uFFFD\uFFFD\uFFFD\f\r\r\f\uFFFD\uFFFD\x1B\f\f\0\0\0\0\x07\0\0\uFFFD\x7F\uFFFD\0\x000\0@\0P\0\`\0p\0\uFFFD\0\02\x07\x07"'.'&47>76"\x07\x072767654.'&2+"&=46372+"&54632+"&=4632+"&=46372+"&5463\0^WI{Y.('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_h|jg<>><gj\uFFFDjg<>)On@N\uFFFD\uFFFD\f\f\v\vw\f\f\v\vw\f\f\f\fv\f\f\f\fv\f\f\f\f\uFFFD!\x1Ba\uFFFD\uFFFDNh_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(9><gj\uFFFDjg<>><gj|F\uFFFDrU\uFFFDQ\f\uFFFD\f\f\uFFFD\f\uFFFD\f\uFFFD\uFFFD\f\f&\f;\v\uFFFD\f\f\uFFFD\vu\vw\f\fw\f\uFFFD\f\uFFFD\uFFFD\f\f	\f\0\0\0\0\uFFFD\uFFFD\uFFFD\x7F\0\uFFFD\0\0)\0\0"'.'&47>762\x07\x074&"3!264&#\0h_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_S,@\uFFFD('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(\v\uFFFD\uFFFD,\0\0\0\uFFFD\uFFFD\0\uFFFD\0\0*\0\0"\x07\x0727>764'.'&"/&462762\x07\0h_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD\uFFFD\uFFFD\r#\r\uFFFD\r$\r\uFFFD\uFFFD\r$\r\uFFFD('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(\uFFFDe\uFFFD\f\f\uFFFD\v"\f\uFFFD\uFFFD\f"\v\0\uFFFD\uFFFD\uFFFD\x7F\0\uFFFD\0\0-\0?\0\0"\x07\x0727>764'.'&\x072\x07\x07"'&'&47676"/&4>762\x07\0h_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_hl]Z5665Z]\uFFFD]Z5665Z]c\uFFFD\uFFFD\r#\r\uFFFD\r$\r\uFFFD\uFFFD\r$\r\uFFFD('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(r65Z]\uFFFD]Z5665Z]\uFFFD]Z56\uFFFD\uFFFD\uFFFD\f\f\uFFFD\f"\r\uFFFD\uFFFD\f"\v\0\0\0\0\uFFFD\uFFFD\0\uFFFD\0\0\0\f\0!\0.\0\0) ) #!"&7>72?.4>\0\0\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\b\uFFFD\x07\bBrIx\bxIrB\uFFFD\uFFFD>m??m|h<<h\uFFFD\uFFFD\0\uFFFD\0\uFFFD\0\0\0\0\uFFFD\uFFFD\b
N\uFFFDhwwh\uFFFDNp=l|l=>i|i>\0\0\0\uFFFD\uFFFD\0\uFFFD\0\0\0\f\0!\0.\0\0) ) #!"&7>72?.4>\0\0\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\b\uFFFD\x07\bBrIx\bxIrB\uFFFD\uFFFD>m??m|h<<h\uFFFD\uFFFD\0\uFFFD\0\uFFFD\0\0\0\0\uFFFD\uFFFD\b
N\uFFFDhwwh\uFFFDNp=l|l=>i|i>\0\0\0\uFFFD\uFFFD\uFFFD\0\x004\0F\0M\0Y\0e\0\02\x07\x07"'.'&47>76+3!>=.+\x07"&'.!#32653.#"3%2+.6372+.463\0h_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD\uFFFD\uFFFD\r * 
\uFFFD\uFFFD\b
R!\uFFFD\f\uFFFD\uFFFD>3		\uFFFD\x07
\uFFFD\b	\uFFFD\x07	\uFFFD('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(\uFFFD\uFFFDts\f\x07\x07h\b\uFFFD\uFFFD\x1B6	\v/\uFFFDy	\f		\v	j	\f	\b\f	\0\0\0\uFFFD\uFFFDV\uFFFD\0\0\0\uFFFD\uFFFD\uFFFD\0\uFFFD\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\0\0\0!\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDH\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0,\0?\0G\0S\0_\0\0!"#"3!2>532>5!"&546;3!7#!"&5463!;'"'.=\x07!"3!264&\x07!"3!264&\uFFFD\uFFFD\uFFFD ;$&!7!$; \uFFFD!;$!;$\uFFFD\uFFFD\uFFFD#(%#$; ~(\uFFFD(\uFFFD#((>$;!__\uFFFD\uFFFD\uFFFD\uFFFD\r\uFFFD\uFFFD\x7F#;!#;!\uFFFD\uFFFD!:$$:!$; \uFFFD\uFFFDD(|(\uFFFD\uFFFD ;$(\uFFFD''|(\x7F!;$@-_\uFFFD\uFFFD\uFFFD\0\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\0\b\0$\0<\0H\0\03!4&#!'!2#!".54>;2\x07#"3!>54&#!"&/.!2#!"&46\uFFFD\x07)3-\uFFFD\uFFFDM)F(!)E)\uFFFD.)E))E)\uFFFD)Hq\uFFFD,,\uFFFD,,\uFFFD\uFFFD2P\x07(\uFFFD/\uFFFD\uFFFD\uFFFD-K)E)@$\uFFFD:)E))E)\uFFFD)E))#,\uFFFDV-,\uFFFD ,;/D\uFFFD|\0\0\0\0\f\0\0\uFFFD\uFFFD\uFFFD\0\x001\0;\0E\0R\0g\0s\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\0"\x07\x0727>764'.'&"'.'&47>762\x07\x07'\x077'7?'7\x07'\x0727676.\x07\x07"\x07&43>32'.\x07;676&"2676##".'&6>'."\x077>262676\x07"&'&67"3!24#!2#!"43\0h_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_haZV\uFFFD$&&$\uFFFDVZ\uFFFDZV\uFFFD$&&$\uFFFDVZO'\x1B	$"J'
$"\uFFFD\uFFFD1_\`2\uFFFDA}78~BY\uFFFD\uFFFD%$\uFFFD\uFFFDE.VW/\uFFFDbE\uFFFD99\uFFFDFY\uFFFD\uFFFD%$\uFFFD\uFFFDn1\uFFFD\uFFFD\uFFFD1\x07/\uFFFD\uFFFD\uFFFD/\uFFFD\uFFFD/\uFFFD\uFFFD\uFFFD/\x071\uFFFD\uFFFD\uFFFD1\uFFFDJ\uFFFD\uFFFDK\uFFFD\uFFFD\uFFFD('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(\uFFFD &$\uFFFDVZ\uFFFDZV\uFFFD$&&$\uFFFDVZ\uFFFDZV\uFFFD$&\uFFFD$"''\x1B\uFFFD\uFFFD%"&'\uFFFDkFGl
$#$%ByQPwA\uFFFDzdDEe\uFFFD\uFFFD)'(*ByQPwA\uFFFDGQQGENNE\uFFFD\uFFFDENNEGQQGY\uFFFD\uFFFD\0\0\0
\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\b\0\0\0>\0N\0R\0a\0m\0y\0\uFFFD\0\0"264&\x07264&"2>&%#54&+&'."\x07\x07#"#"3!2654&%6762#>\x07!!!33!26=3!"3!26.!"3!26.'!"3!26.^i\r	|
7=7	{	h\x1B\uFFFD$\f(\f\uFFFD\uFFFD\uFFFD\uFFFD+Q\uFFFD2B\r
	\rD\uFFFD\uFFFD\uFFFD\b\bM		\uFFFD\uFFFD\b\bM		\uFFFD\uFFFD\b\bM	L  \uFFFD  D  \uFFFD	)*\r	\uFFFD\uFFFDG\x07\b\b
\vP2\uFFFD0\uFFFD	\r\r	\uFFFD=\x1B\uFFFD\uFFFD\uFFFD\0\0\f\0\0\uFFFD\uFFFD\uFFFD\0\x001\0;\0E\0R\0g\0s\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\0"\x07\x0727>764'.'&"'.'&47>762\x07\x07'\x077'7?'7\x07'\x0727676.\x07\x07"\x07&43>32'.\x07;676&"2676##".'&6>'."\x077>262676\x07"&'&67"3!24#!2#!"43\0h_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_haZV\uFFFD$&&$\uFFFDVZ\uFFFDZV\uFFFD$&&$\uFFFDVZO'\x1B	$"J'
$"\uFFFD\uFFFD1_\`2\uFFFDA}78~BY\uFFFD\uFFFD%$\uFFFD\uFFFDE.VW/\uFFFDbE\uFFFD99\uFFFDFY\uFFFD\uFFFD%$\uFFFD\uFFFDn1\uFFFD\uFFFD\uFFFD1\x07/\uFFFD\uFFFD\uFFFD/\uFFFD\uFFFD/\uFFFD\uFFFD\uFFFD/\x071\uFFFD\uFFFD\uFFFD1\uFFFDJ\uFFFD\uFFFDK\uFFFD\uFFFD\uFFFD('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(\uFFFD &$\uFFFDVZ\uFFFDZV\uFFFD$&&$\uFFFDVZ\uFFFDZV\uFFFD$&\uFFFD$"''\x1B\uFFFD\uFFFD%"&'\uFFFDkFGl
$#$%ByQPwA\uFFFDzdDEe\uFFFD\uFFFD)'(*ByQPwA\uFFFDGQQGENNE\uFFFD\uFFFDENNEGQQGY\uFFFD\uFFFD\0\0\0
\uFFFD\uFFFD\0\0\uFFFD\uFFFD\0\0\0\f\x004\0]\0a\0e\0n\0v\0\uFFFD\0\uFFFD\0\03!2#!"54535#535#53535#5#5##3#3#3#3#367;>7"#"'&'67'\x07#67#3\x073\x07&'\x07\x07#53#53%7.'\x07\x077&'\x07676767&'6767'\x07\x07&'&'\x07\x07'5>7&'\x075#3\x07\x077\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD6\uFFFD\v\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD&&\uFFFD5nn\uFFFD\uFFFDrrvv\uFFFD\uFFFD\uFFFD\uFFFD*,C8X\uFFFD\f#\uFFFDO4>($\v)(\uFFFDb+(a
*.
\uFFFDQQQQ\uFFFD3\x07!0\uFFFD+<(fXDA^\b
\r	]D4!8,+\x1B5 0>]\b\v	n\x072N
\x07D\uFFFDO
\x07\f\b\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDl\uFFFD\uFFFD\uFFFD4-)*&Q,Q//,%,%,&*)-4P 2)\v	\f&S\uFFFD	RW1dEG8!1F.6 \uFFFD%v%H!#&\b!A\uFFFDM(EE&\r\r\b GE\`Pr\bdJV?;PJ_\x07pRYAC)\x07\r\f	'8.\uFFFD6\uFFFD	
\0\x07\uFFFD\uFFFD\uFFFD\x7F\uFFFD\uFFFD\0\x002\0>\0U\0_\0|\0\uFFFD\0\02\x07\x07#!".5476763!"3!2>54.5!!5!5#!6767'\x07#67'\x07\x07673\x07%7&'&'\x076767>7&'&'6=#\x07\x07\x07'67'\x07\x07\uFFFDOEB&((&BEO\uFFFDn;kR-('BDP\uFFFD\uFFFDn,Q=""=Q,\uFFFD,P>!!>P\uFFFDb\uFFFD\uFFFD\v\uFFFD\uFFFDH\uFFFD\uFFFD\r1\uFFFD\rI *0*$\uFFFD\x1B\uFFFDu++(')'(*F\\:2 /3I\b\x1B\vZ93I\f.8c\r \uFFFDHC7 +&"\uFFFD('BDP\uFFFDJPDB'(-Rk;\uFFFDPDB'(I"=Q,\uFFFDJ,Q=""=Q,\uFFFD,Q="\uFFFDED\uFFFD\uFFFD\uFFFDE!-1;3,>\r[MR3;^O4\f\x7F91\uFFFD/A8FS7;#
 OGq!.-A2G9F0	 >jv.:@:,\0\0\0\f\uFFFD\uFFFD\0\0\uFFFD\uFFFD\0\0\0\f\0\0#\0=\0E\0M\0m\0q\0\uFFFD\0\uFFFD\0\uFFFD\0\03!2#!"545!35#&'\x07#7&'&'\x07676735#6767#\x07\x07#3\x07\x07?.'\x077.'\x073\x07\x07#'767654'&'67'\x07#5!27>=35!3#'?&'&'\x07>7'\x07\x07\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD6\uFFFD\uFFFD\uFFFD;\uFFFD	9\v\uFFFD$\r!2\uFFFDb:6\x1B\uFFFD\uFFFD\v;\r\uFFFD\uFFFD01O	c"5!4o#%u;\x1B;o\uFFFDI3\f\r
\b\x1B
\f')\b\uFFFD\uFFFD\uFFFD\uFFFD(#\x1B\v\uFFFD\uFFFD\uFFFD|1	\uFFFD2/#\uFFFD\uFFFD+\r3\f\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDl\uFFFD\uFFFD\uFFFDLL\uFFFD/\x1B\uFFFD4)%'\uFFFD\uFFFD)%;0'7*DM$7$0'\x1B\x1B	\uFFFD*$\f&\r'\uFFFD-5)7\uFFFDE=8=\b	\f	8#"1l\uFFFD\uFFFD\uFFFD44\uFFFD3\r\x1B\uFFFD44\uFFFD\f!)#52/.j"#e4\f2+/\0\0\0\uFFFD\uFFFD\uFFFD\x7F\uFFFD\uFFFD\0\x002\0\`\0q\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\02\x07\x07#!".5476763!"3!2>54.27>53\x0767'\x07#7&'>7'\x07#3\x07&'\x07#3#'%33#735!3\x07#\x0767676=#\x07\x07\x077&'\x077&'&'\x07>5#+"'276%33##6765#\x07\x07\x077&'&'\x0767'\x077&'&'\x07\uFFFDOEB&((&BEO\uFFFDn;kR-('BDP\uFFFD\uFFFDn,Q=""=Q,\uFFFD,P>!!>P\uFFFD\uFFFD,\x1B!\r>3"*	+ ?)\f\uFFFD"#!%N5\uFFFDr\b=\x07\fc\uFFFDA\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\x07\bmU2*\r?\f%-M
C/'\\+]+$  (! #\uFFFD\r7\b\b,\v+\x1B\uFFFD\uFFFD\uFFFD6\uFFFD_5\uFFFD\uFFFDX$\x1B3\b
8\bH(%! &W\f0*75\uFFFD++6\uFFFD('BDP\uFFFDJPDB'(-Rk;\uFFFDPDB'(I"=Q,\uFFFDJ,Q=""=Q,\uFFFD,Q="\uFFFD\uFFFD\x1B\v=(\v4p
O';0!*4&<\uFFFD\uFFFD\r&\uFFFD\uFFFD\uFFFDX@<<%\x1B\uFFFD\uFFFD\uFFFD /)6)7\uFFFD\uFFFD,!."(\b/)G)N\uFFFD81\uFFFD\uFFFD\x07\x1BK\uFFFD\uFFFD\b\x07\f"
\uFFFD\uFFFD\uFFFDf\uFFFD\uFFFD2\uFFFD\uFFFDI\uFFFD+O;W	\uFFFD\uFFFD3!- '\x07\x1BP602\uFFFD\uFFFDi~$=\uFFFD+'!\x1BB\0\0\0\b\uFFFD\uFFFD\0\0\uFFFD\uFFFD\0\0\0\f\0\0.\x002\0<\0D\0x\0\03!2#!"5467'\x0767%5#535#5##5##3#7#536767'\x077.'\x0767673\x07#"'7>7>7657!675!5#7&'\x07!3\x07\x07\x07\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD6\uFFFD#5M*\x07\uFFFDYRR7h8HHW\uFFFDhh\uFFFD !6: >/;.:\uFFFDN-%\uFFFD\x07\f\r\v32	\vD#\v	\uFFFD\uFFFD2\uFFFD)\f7\x1B\v\uFFFD\uFFFD\uFFFD	!(F\v\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDl\uFFFD\uFFFD6\uFFFD;CC}*
%
\x1B"\uFFFD\uFFFD\uFFFD7\uFFFD6wwvv6\uFFFD77\uFFFD\uFFFD\uFFFD\x1B$&'"AGJ*I<W\\[\v\v\r
\fr~\v
87"63"7U2J3=$	\0\uFFFD\uFFFD\uFFFD\x7F\uFFFD\uFFFD\0V\0_\0\uFFFD\0\uFFFD\0\uFFFD\0\0%2>7.'#"&'67'\x07&'35#&7##567'\x07\x0767#3\x077#'27>=6?'\x0753\x07677&'&'\x0767673\x07#"'7>7>76?!675!5!7&'\x07!3\x07\x07\x072\x07\x07#!".5476763!"3!2>54.\uFFFD$\f\r*K1= 3\f\uFFFD\uFFFD	F\b\uFFFDG202SIS\x07L1\uFFFD\uFFFDZF\uFFFD\x07
H\b0\x1B %!Az\uFFFDRWMD "27!!3?\uFFFD^6,\uFFFD\b\x07\r><
\rR*
\uFFFD\uFFFDr\uFFFD\uFFFD1%C!\r\uFFFD\uFFFD\uFFFD\f(/U\uFFFDOEB&((&BEO\uFFFDn;kR-('BDP\uFFFD\uFFFDn,Q=""=Q,\uFFFD,P>!!>P\x1BD?\rD;94LZ=::Z@eho^s9\r
\r
\be@s\fD\uFFFD	\x07)!\uFFFD\x07=fzSG) (:="\uFFFD'" #F\uFFFD\uFFFD3WIipm\r&\f\uFFFD\uFFFD\r\f"DC)A=)Cf=Y>J+
 T('BDP\uFFFDJPDB'(-Rk;\uFFFDPDB'(I"=Q,\uFFFDJ,Q=""=Q,\uFFFD,Q="\0\0\x07\uFFFD\uFFFD\uFFFD\x7F\uFFFD\0	\0%\0Q\0Y\0b\0|\0\uFFFD\0\05#&'\x07#35#567'\x07\x07\x07\x07676=3%27>=35#535#67'\x07#7.'\x07#3#3#'?.'\x07\x07>7'\x072#!".5476763!"3!2>54.v\r<
\uFFFDDJ\uFFFDN7%@;?
&\v!\b+\r^\uFFFDV\x1B
\uFFFD\uFFFD\uFFFDV?e)
7	\bP\uFFFD\uFFFD\uFFFD5\v\uFFFD/	"-!\uFFFD(\r6
#PDB'(-Rk;\uFFFDJ;kR-('BDP\uFFFD\uFFFDJ,Q=""=Q,\uFFFD,Q=""=Q>8#+)8\uFFFD\uFFFDj?\uFFFD2\v\uFFFD]=[9	>hKe\uFFFD\uFFFD\v\r\uFFFD:B9>\r91\v6\x1B9B:\uFFFD\r D>A&I%!>\0('BDP\uFFFDJ;kR--Rk;\uFFFDPDB'(I"=Q,\uFFFDJ,Q=""=Q,\uFFFD,Q="\0\0\0\0\b\uFFFD\uFFFD\uFFFD\x7F\uFFFD\0\x001\0A\0Y\0]\0a\0k\0s\0\02#!".5476763!"3!2>54.676=!5!\x07\x0727>=3#7'\x07#3+!5!!5!>7'\x077&/\x07\uFFFDPDB'(-Rk;\uFFFDJ;kR-('BDP\uFFFD\uFFFDJ,Q=""=Q,\uFFFD,Q=""=Q\uFFFD\uFFFD,\r\uFFFD\uFFFD\v*\f&\uFFFD/"\r\uFFFD\uFFFDQ
\uFFFD\uFFFD\bU\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDF\x1BA@ \r"\uFFFD9[\v6a\uFFFD('BDP\uFFFDJ;kR--Rk;\uFFFDPDB'(I"=Q,\uFFFDJ,Q=""=Q,\uFFFD,Q="\uFFFDN\x7F[t\uFFFD?\uFFFDqMsI\x1B\uFFFD1\v\uFFFD\uFFFD\x07n;\uFFFD:\uFFFD\uFFFDT)$L\x1B\f#"c\fn\0\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0*\0<\0T\0m\0v\0\x7F\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\uFFFD\0\02#!"&54?63!3!265!\x07\x07"&'&'%!\x07!22>5463!%232+#"&=#"4;546232+"=#"&54;54'2"&46"264&%232+"&=#"&46;546%232+&=#"&46;546%2"&46"264&\x07\x07'\x07'7'77'\x075?\x07\x07'\x07'7'77	\x07\uFFFD\b'\uFFFD\uFFFD'\b\uFFFD\x07	v\uFFFD\uFFFD=\uFFFD\uFFFD\b&6;6%\b\uFFFD\uFFFD\uFFFD$\x07#<E;$ \uFFFD\uFFFD\b\x07\x07\x1B\x07\b\b1\b\x07	\b	\uFFFD\x07\v
\v
\uFFFD\uFFFD\b\b\uFFFD\x07%%\uFFFD\uFFFD(\uFFFD,,-..--,\uFFFDTTT\uFFFD+45../ .,l\uFFFD		\uFFFDX'(\x1B\uFFFD\v\x07\uFFFD\uFFFD\uFFFD^\uFFFD
1&"5\uFFFD\uFFFD\b#;##;#\x07\uFFFD\b\b\x07\b\b\x07\x07\x07\b\x07R
\v\v
(\x07	\b

\x07	<\b%%<))\uFFFD\uFFFD+- -. ., -,\uFFFD33r+5 5. ...,\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0-\0Q\0\0"'.'&47>762\x07\x07"\x07\x07276764'&'&764/&"'&"\x072?2?64'\uFFFDh_\\\uFFFD'(('\uFFFD\\_\uFFFD_[\uFFFD&))&\uFFFD[_h}li=??=il\uFFFDlh>??>hlX\uFFFD\x07\x07\x07\x07\uFFFD\uFFFD\x07\b\b\b\uFFFD\uFFFD\b\b\b\x07\uFFFD\uFFFD\x07\x07\x07\x07~)&\uFFFD[_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_[\uFFFD'(\uFFFD?=il\uFFFDlh>??>hl\uFFFDli=?\uFFFD2\uFFFD\x07\b\x07\x07\uFFFD\uFFFD\b\b\b	\uFFFD\uFFFD\x07	\x07\x07\uFFFD\uFFFD\x07\x07\x07	\0\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0%\x002\0?\0\0".'&4>762\x07"2>4."&514>'"&=>2\uFFFDc\uFFFD\uFFFD&'L\uFFFDZ]\u0237\uFFFD&'K\uFFFDZ\\eS\uFFFDu??u\uFFFD\uFFFD\uFFFDt@@t\uFFFDR
\f!cK\uFFFDZ\\\u0237\uFFFD&'L\uFFFDZ]\u0237\uFFFD&(\uFFFD?u\uFFFD\uFFFD\uFFFDu@@t\uFFFD\uFFFD\uFFFDu?\uFFFD\x7F\f
\uFFFD\uFFFD\uFFFD\0\0\uFFFD\uFFFD\uFFFD\x7F\0\uFFFD\0\0\x1B\0\0)\0\0"\x07\x0727>764'.'&77'7\x07'76\0h_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD{Fwu\x1Bu<"w ;\x07
\uFFFD('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(\uFFFD\uFFFDpn	n3p	8\0\0\0\uFFFD\uFFFD\uFFFD\0\0\0\0\x07\x07#!.'467!6\x07'!\x07\v\r\uFFFD\uFFFD'/_-1\uFFFDK;\uFFFDc4)\uFFFD\uFFFD!\v\b3$M$,5\uFFFD\uFFFD\uFFFD\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0:\0V\0\0%#"'&'.5'3;276767\x07\x07#"'&'.5'4676;2\x07\x0736?6767\x07+"'.'51\uFFFDe\`XHEO(&\uFFFD\uFFFD\u06DC&*OFHYaee\`YGFN\uFFFDsw\uFFFD\uFFFDus\uFFFDOFHYai\uFFFD\uFFFD&)\uFFFDsv\uFFFD\uFFFDus\uFFFD)&\uFFFD\uFFFD\f
*\uFFFD\v\x07\x07
\uFFFD+\v\v@

(\uFFFD,\r\r\r\f+\uFFFD(	\v\uFFFD\uFFFD"\x07
\uFFFD+\r\r\r\f+\uFFFD
\x07#\0\0\0	\uFFFD\uFFFD\uFFFD\uFFFD\0@\0\f\0\0&\x003\0@\0M\0Z\0l\0x\0\0.4>2"2>4.\x07".4>2".4>2"2>4.".4>2"2>4.\x07!'4&/76?\x07%3>7'"'\x07\uFFFD4W33WgX33X3(C''CPC''C(//8/\x1B\x1B/\uFFFD\uFFFD6[55[k[55[5*G))GSG))GK6[55[k[55[5*G))GSG))G\uFFFD\uFFFD\uFFFD("\r\uFFFD\r&X%\uFFFD#(\uFFFD\uFFFD\uFFFD( q(Z(s '\uFFFD3WgW43XgW3P(COC((COC(\uFFFD/7//7/\uFFFD\uFFFD5[k[55[k[5_)GSG))GSG)\uFFFD\uFFFD5[k[55[k[5_)GSG))GSG)\uFFFD)G	\uFFFD	\b\uFFFD\bG))G\uFFFD\uFFFDG\0\0\0\0\0\0V\uFFFD\0\0\037\x07'\x07'7%7\uFFFD\uFFFD\uFFFD*\uFFFD\uFFFD\uFFFDi\uFFFD\uFFFDh\uFFFD\uFFFD\uFFFD*\uFFFD\uFFFD\uFFFD\uFFFDi\uFFFDJ\uFFFDV\uFFFD\uFFFDV\uFFFDJ\uFFFDi\0\0\0\0\uFFFD\uFFFD\0\uFFFD\0\0\0\f\0,\x006\0P\0b\0\0!1 1!1 1!"&546;546235462323!265%!54&+"&=#"&=#""/&4>76\0\0\uFFFD\0\uFFFD\0\uFFFD\uFFFDb))E\r\uFFFD\rE))\uFFFD/	\uFFFD	\uFFFD4\uFFFD	E\r\uFFFD\rE	\uFFFD	?\f\x07.j\x07\fz\uFFFD\uFFFD\0\uFFFD\0\0\0\uFFFD\uFFFD)p)				)\uFFFD\uFFFD)X\uFFFD\uFFFD		./	
\r\r

\r\r
	\uFFFD\uFFFD:\x07\r,i\r\x07x\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\r\0\0{\0\uFFFD\0\0%".4>2#"2>4.#".54&'&'&\x07./.>76754&'.?>767>54>;27>\x07\x07'&\x07\x07#%2;2654676?>6?6&'.75&67>/&'&\x07&'&'.'.+"\x07'&\x07\x07\x0776\0=g==gzg==g=)E((EQE))E0\uFFFD\x1B.\x1B\b\x07\f(& 
Z
\v\f\x07%XO%\f\x07\b\x1B.\x1B\uFFFD.\x1B\b\x07'(X
\v\f\r\v
XO%\b\x07\b-\x1B\uFFFD\uFFFD
\uFFFD
\x1B	
9\bX\b\bT	\x07\f8
\uFFFD\f

9	V\x07\b\x1B\x1B\bX	\uFFFD;dxd;;dxd;m'COD''DOC'\uFFFDn-\x07\f\x07	\x07
\v\uFFFD'&
\b4\x07\rM$\uFFFD#\b\x07\f\x07,-\x07\f\x07	\x07	\v#\uFFFD'%
\b3\x07
#(\uFFFD#\r\f\f\x07-\uFFFD\r\b\f0\x1B

/\f
\b\uFFFD\b2(1\b\uFFFD\b\f\b\r/\v
0\f
	\uFFFD\b\r1(1	\x07\f\uFFFD\b\v\0\0\0\uFFFD\uFFFD\uFFFD@\x001\0>\0K\0V\0\0%"\x07%654'732>4."\x07&'&#"3272>4.2"'&54>".4>2"&4762C1K\uFFFD\uFFFD\uFFFD*8-H))HYH)\f\uFFFD+-2(K99K(@2h*FWH))H\uFFFD$0S*\uFFFD&!9""9C9""8V+0I1\uFFFD0)\uFFFD,9\uFFFD )HXH**H, \uFFFD+\x1B9KQK9\uFFFD*D'*HXH*4S0$+\uFFFD\uFFFD"9C9""9C9"\uFFFD\uFFFD0SS0\0\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\0\0\0\f\0\r\0\x002\0g\0\0%3!21#!"5143!21#!"5142"/"&5\x07"&4?62+532>4.#4."";#".54>7>76%$n$$\uFFFD\uFFFD$$n$$\uFFFD\uFFFD$\uFFFD\x07n\v \v,,\f\vj
OED[6W1DvF%%2T11T2Dv\uFFFDvD2T11T2%%FvD1W6[DE[$%%$\uFFFD$%%$a\x07h\v\v'\uFFFD\uFFFD1'\v
hL"!vIGf8EsCG0RcR0EsCCsE0RcR0GCsE8fGIv!"\0\0\0\0\uFFFD\uFFFD\uFFFD\0\0-\0B\0W\0d\0y\0\0%54>2+"&46;26".=4&+"&46;2#".=462;2#""&=4>;24."2>"/.>\x07\uFFFD

)G*\uFFFD\uFFFD -M

- \uFFFD\uFFFD*G)\uFFFDZ\uFFFD*G) - \uFFFD\uFFFD - )G*\uFFFD5-L[L--L[L-7
\f63ysQ"Yuy_+%L\uFFFD



\uFFFD)G) -\uFFFD\uFFFD\v\v\v\v\uFFFD - *F\uFFFD\uFFFD)G)\uFFFD\uFFFD- \uFFFD- \uFFFD\uFFFD*F* \uFFFDs-M,,MZM,,Mb7\v
7%,_xvX"Rrz3\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\x1B\0R\0[\0\0#5."#326753>4&7.\x07\x073267>.\x07'&'&'&67676\x07\x0767>&"&462\x07\uFFFD\x1B\uFFFD\uFFFD\x1B\uFFFD\uFFFD2\uFFFD\uFFFDec\uFFFD=?6dNQdACF\uFFFD<\b\v	P\uFFFDZxWT !@XVtwxX\uFFFD\\"0!\uFFFD\v\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDW|4cNQ\uFFFDfb\uFFFD=@&%1\x1B XVsw\uFFFDVU   o\uFFFD\uFFFDX?7
\v	O\uFFFD\uFFFD\uFFFD\uFFFD\0\0\f\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\x07\0\0\0%\0-\x005\0B\0K\0S\0[\0h\0q\0\0#.467;!\x07!'&>4.\x07"&462!.467!;\x07#'&>4.\x07"&462!.467!;\x07#'"2>4.\x07"&462\u03E9\uFFFD\uFFFDE\uFFFD\uFFFDm'F((FNA''A'++<++\uFFFD\uFFFDE\uFFFD\uFFFD\uFFFDQ(E((EOA&&A'**=++\uFFFD\uFFFD\uFFFD7\uFFFD\uFFFD\uFFFDb(C''COC''C'**=++Z\uFFFD'DPD'(BNB(\uFFFD+<++<+\uFFFD\uFFFD&EOD'(BNB(\uFFFD*=++=*\uFFFDH\uFFFD'COC''COC'\uFFFD*=++=*\0\0\0\0\x07\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0*\x007\0G\0Z\0h\0v\0\0463!234&#!"3!5!"&5";2>4.#%4&#!"3!26'!"3!2>4.#54&";2>4.'&>4.'".4>2#?\uFFFD?*\uFFFD+**\uFFFD\uFFFDj\uFFFD\r\r~\b\b\b\b\v\r\uFFFD\uFFFD\r\rj\r\uFFFD\uFFFD				j\b\b\b\uFFFD>\r^			hDtDCu\uFFFDpAApC3T22TeT22T3&^\uFFFD\uFFFD\\**\uFFFD\uFFFD*?\uFFFD\b\b\uFFFD\r\uFFFD	\b\b	\uFFFD\uFFFDf\r\r\uFFFD\r	\b\uFFFDBs\uFFFDsBCq\uFFFDqC\uFFFDP2TeT22TeT2\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\x000\0D\0\04'.'&"\x07\x077>766762\x07\x07"'.'.6"/.5462#\uFFFD('\uFFFD[_\uFFFD_\\\uFFFD&))&\uFFFD\\_\uFFFD_[\uFFFD'(\uFFFD\uFFFD9KM\uFFFDOJr !! rJN\uFFFDMKr  ?\v	\uFFFD\f'\uFFFD\b\uFFFDg_\\\uFFFD&))&\uFFFD\\_\uFFFD_[\uFFFD'(('\uFFFD\\_\uFFFD9 !! rJN\uFFFDMKr !! sJM\uFFFD\uFFFD\uFFFDPj\x07\uFFFD^\x07 \0\0\0\b\0\0\uFFFD\uFFFD\0\uFFFD\0\0%\x002\0@\0N\0]\0l\0r\0\0%#5.'.#"3!264&>32!"&=462"'.?>"/&>\x07"&'&6?6"/.>\x07#73\x07\uFFFDv\x073*2\x7F\uFFFD\x7Fb4w\x1B\x1B\uFFFD\x1B\x1B\uFFFDIsCGyG\uFFFD\uFFFD!\uFFFD\r\v
(\v \x1B\v'\r\uFFFDY\r(
\x1B!\v'\v\r\v\v\x07\r<\r<\x07\uFFFD0	\x07<\r;\f\x07\uFFFDi#\uFFFDz#\uFFFD7b%-0/Ys@\uFFFD\uFFFD$$\uFFFD<d9@mA\uFFFD\uFFFD\uFFFD::%\b\b\f/\f\f//\f\f/\f	\x07u\f
\x07\f\v
\f\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\b\uFFFD\uFFFD\uFFFD\x7F\0\uFFFD\0\0!\x001\0@\0R\0d\0t\0\uFFFD\0\0+"&=46;2&/.67>+"&=46;2+"&=46;2&/.67>\x07&'.6?>%546;2+"&7>&'.6\0 \uFFFD  \uFFFD\uFFFD\f'+M\f\f\f(*L\f\f\uFFFD\uFFFD 4 \x1B4\x1B 4  43\uFFFD+'\rL\f\f\f'+M\f\fM\f'+\f\fL\r'+\f\f\uFFFD\uFFFD\uFFFD !\x1B\uFFFD \uFFFDL\r'+\f\fL\r'+\f\ff  4 \x1B\uFFFD\uFFFD\f\fL\r'+\f\fM\f'+\uFFFD  \uFFFD\uFFFDf  \uFFFD 3\uFFFD\f\fM\f'+\f\fL\r'+\uFFFD+L\f\f\f'+M\f\f\f(*\uFFFD4\x1B 4\x1B GL\f\f\f(*L\f\f\f(*\0\0\0\0\uFFFD\uFFFDU\uFFFD\0\0\027>4&'&	\uFFFD5
\v\v
\uFFFD\uFFFD/\uFFFD\uFFFD
\f~\r\uFFFD	\x1B\b\uFFFD%/\uFFFDj\uFFFDg\f$#\0\0\0\0\uFFFD\uFFFDU\uFFFD\0\0\027>4&'&	\uFFFD5
\v\v
\uFFFD\uFFFD/\uFFFD\uFFFD
\f~\r\uFFFD	\x1B\b\uFFFD%/\uFFFDj\uFFFDg\f$#\0\0\0\0\0\0\uFFFD\uFFFD\0\0\0\0%"'&4762!"&463!2t\v\uFFFD\uFFFD\v\v\x07\v\v\uFFFD\uFFFD\b\b\uFFFD\uFFFD\uFFFDM\v\x07\v\v\x07\v\v\uFFFD\uFFFD\b\f\b\0\0\0\0\0\0C\uFFFD\0#\0\0	.	67	>&'	>.\x07\uFFFD\uFFFD\uFFFD
\x07\x07	\uFFFD\uFFFD
\b\x07\x1B		\x07
\uFFFD\uFFFD
\x07	\uFFFD	\x07\x07
\uFFFD\uFFFD\uFFFD\uFFFD	\x1B\x07\b
\uFFFD\uFFFD
\x07	
\x07\b	\0\0\0\0\0\0\0\uFFFD\0\f\0\0&\0\0"2>4.!"2>4.!"2>4.\uFFFD11900911900911900181190181190181190\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0\0\0'\x000\0L\0\0!27>764'.'&"\x07\x0767'\x07677.'\x07&'#&'&'7'\x07&'#\x07776\0\uFFFD\0('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(\uFFFD$3X1\x07& \uFFFD+3(K\v(\uFFFD\x07\uFFFD\b7\x07\uFFFD\b\uFFFD%)F\uFFFDh_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD\uFFFD\uFFFD:7C|*	#
#*\uFFFD\uFFFD\uFFFD5\uFFFD\uFFFD\f20C>q3RS\\P3\uFFFDIR \0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0\0\0-\0C\0J\0c\0\0!27>764'.'&"\x07\x0754/33##/#27'"&'3654&#"\x077#>32767337##/##/#\0\uFFFD\0('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(\uFFFD!k51"k4\uFFFD+'=(\uFFFD303# bt#\x1B\x1B\uFFFD\x07	\b<?0#."\r 3A\uFFFDh_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD\uFFFD9D\uFFFDC\uFFFD<D\uFFFD\uFFFD\uFFFD '"
4>&:#!\uFFFD##\uFFFDw/\r&w\uFFFDDD\uFFFD\uFFFDDD\uFFFD\uFFFD\0\0	\0\0\uFFFD\uFFFD\0\uFFFD\0\0\0\f\0\0,\0>\0I\0T\0\`\0i\0\0!1 1!1 1!"3!2654&#!"&5463!2\x07'&6?6.#&73264&\x07#";264&%"3264&\x07"&632\0\0\uFFFD\0\uFFFD\0\uFFFD\uFFFD.&77&\uFFFD&77\b\x1B\uFFFD.\x1B\x1B\uFFFD\x1B\uFFFD\uFFFDK\x07\r0\r\fY\x07\uFFFD\uFFFD\uFFFD
\r\r
\uFFFD\r\r\uFFFD
\r\r\uFFFD\uFFFD  ))\r\r	\uFFFD\uFFFD\0\uFFFD\0\0\0\uFFFD7&\uFFFD.&77&\uFFFD&7\uFFFD\uFFFD\x1B\x1B\uFFFD\x1B\x1B6K\r\x070Z\x07F\r\r\uFFFD\r\r/ & ):)]\r\r\0\0\0\uFFFD\uFFFD\0\uFFFD\0\0\0\f\0-\0X\0\0!1 1!1 1"&54767675&546;2\x07"\x07\x07\x0727654&'&'.?47>54'&#\0\0\uFFFD\0\uFFFD\0\f\uFFFD\uFFFD 2.7^bWWb\f<8.2\uFFFD\uFFFD;#.T\f\f
6/)2VA\uFFFDBU1*/6	\r\v+(.#;\uFFFD\uFFFD\0\uFFFD\0\0\0\uFFFD\uFFFDGF \x1B\b\rE\uFFFDVbbVC0X,\r\b\x1B FG\uFFFD"M\uFFFD5\x072	\r"\f55\f"\r
1\x07\x1BiSM"\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\0\0\0\f\0\x001\0>\0G\0\0!1 1!1 1#!".47>2\x07."\x073!2>4'2"&=46&6\0\0\uFFFD\0\uFFFD\0U\r\r,\uFFFD\uFFFD-\f\f.4-\r*\x07\uFFFD\uFFFD\r\f\x1B\r\r\uFFFD\uFFFD	\r\r
	\f\f\uFFFD\uFFFD\0\uFFFD\0\0\0\uFFFD\uFFFD!4,,4\uFFFD\x1B\x1B\v\r\r\v\uFFFD!\v\r\r\vC\r
\uFFFD	\f\f	\uFFFD
\r\uFFFD\uFFFD\r\r\0\0\0\uFFFD\uFFFD\0\uFFFD\0\0\0\f\0!\0F\0\`\0\0!1 1!1 1"'1.>27361\x07%"&=46?54>?5462#%!26=4&/54."\0\0\uFFFD\0\uFFFD\0?;
	\b
4n3		
=\uFFFD\uFFFD#2"?S/\b\f\f\b?h;1#\uFFFD*
\f\uFFFD\f
%7]o^7\uFFFD\uFFFD\0\uFFFD\0\0\0\uFFFD\uFFFD		

l2#+
\uFFFD/XG+	\f\f	\bGo@\uFFFD
+#2y\v\v\uFFFD8^88^8\uFFFD\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0"\0\0"'.'&47>762\x07\x07'7/\x07\uFFFDd[X\uFFFD&&&&\uFFFDX[\uFFFD[X\uFFFD%&&%\uFFFDX[d\uFFFD$\uFFFD\uFFFD__\u04D9$U&&\uFFFDX[\uFFFD[X\uFFFD&&&&\uFFFDX[\uFFFD[X\uFFFD&& h\u075D!\uFFFD\uFFFD!\uFFFD\uFFFD\0\0\x07\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0\0&\0/\x008\0r\0\uFFFD\0\0276764'&'&"\x07\x07264&"7&>&'>.264&"#"'&'&4767632\x072?2636'4/.&#"\x07\x0737>.54&";>4&'\uFFFD75Z^\uFFFD][5665[]\uFFFD^Z57/\r\x1B&\x1B'\uFFFD!\b&!\b
 $
 \uFFFD\r\x1B&\x1B'lQTgYU3443UYg+%'	\f	\f
A\f\x07E\x07\x07\x1B!!zie;==;eizg\\\r
\f\x1B\uFFFD\uFFFDXn^\\5885\\^\uFFFD^\\5885\\^\uFFFD\uFFFD\r'\x1B\x1B'\x1B\uFFFD'!\b& \uFFFD &
 %&\x1B\x1B&\uFFFDR(53VZ\uFFFDYW35
3\f	Yt\f\x07-\x07=<gi\uFFFDig<=/\x07	S\uFFFD\uFFFD\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0#\0\0"2>4.\x07&/&>>\uFFFDf\uFFFD\uFFFDNN\uFFFD\uFFFD\u02FC\uFFFDMM\uFFFD\uFFFD\uFFFD

\uFFFDg\x07\uFFFD

\uFFFD\uFFFD
\uFFFDN\uFFFD\uFFFD\u02FC\uFFFDMM\uFFFD\uFFFD\u02FC\uFFFDN\uFFFD\uFFFD	
\uFFFDC\x07\x07\uFFFD

\uFFFD\uFFFD
\0\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0\x004\0=\0\0"2>54'.'&2"&46>2"&'."\x07".6"&462\uFFFDf\uFFFD\uFFFDNN\uFFFD\uFFFD\u02FC\uFFFDM('\uFFFD\\^\uFFFD\uFFFD''9((	&\uFFFD\uFFFD\uFFFD&\b\bu\uFFFDu\b
((8((\uFFFDN\uFFFD\uFFFD\u033B\uFFFDNN\uFFFD\uFFFDfh_[\uFFFD&)\uFFFD\uFFFD(8((8(\uFFFDbP^^P\b\f\f?LL@\f\f(8((8(\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0\x004\0=\0\0"2>54'.'&2"&46"&'.>2267>2'"&462\uFFFDf\uFFFD\uFFFDNN\uFFFD\uFFFD\u02FC\uFFFDM('\uFFFD\\^\uFFFD\uFFFD''9((&\uFFFD\uFFFD\uFFFD&\b\bu\uFFFDu\b.((8((\uFFFDN\uFFFD\uFFFD\u033B\uFFFDNN\uFFFD\uFFFDfh_[\uFFFD&)\uFFFD\uFFFD(8((8(\uFFFD\uFFFDP^^P\x07\f\r?KK@\f\r\uFFFD(8((8(\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0%\0<\0\0"\x07\x0727>764'.'&#"&47632\x07+'&'&'67>7632\0h_[\uFFFD'(('\uFFFD[_\uFFFD_[\uFFFD'(('\uFFFD[_&\f&3 $2\f0)\f(#(8\uFFFD('\uFFFD[_\uFFFD_\\\uFFFD'(('\uFFFD\\_\uFFFD_[\uFFFD'(\uFFFD\uFFFD\r\f2F2H\x9CG+\uFFFDLM		*&!\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0!\x001\0B\0U\0h\0\04&'!!65+"&=46;!"3!2656&\x07+"&=46;2#5&>735#\x07\x07#\x073\x07#367676'53\uFFFD\uFFFDs\uFFFDN\uFFFD\uFFFD\uFFFDK\uFFFDt\uFFFD8\x1B\uFFFD\uFFFD\x1B\uFFFDF4Z6MA?$%Os\uFFFDsF5Z6MA?$%Q\uFFFDb\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDp\uFFFD\uFFFD]}\uFFFD\uFFFDT6\\7Z('ACM\uFFFDE\uFFFD6\\7Z('@CL\0\0\0\0\uFFFD\uFFFD\0\uFFFD\0\0 \x003\0F\0\0467!\x07!&5!2#!"&5&67356.'#53\x073\x07#3#&'&'&75#@\uFFFD\uFFFDu\uFFFD\uFFFDt\uFFFDF4Z6MA?$%Os\uFFFDsF5Z6MA?$%Q\uFFFDb\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]\uFFFD6\\7Z('ACM\uFFFDE\uFFFD6\\7Z('@CL\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0!\0Q\0\027>764'.'&#">&'&&7>6\x07\x07'"&'&56767>'.\x07\x07\x07'&'&\uFFFDY[\uFFFD[X\uFFFD%&'%\uFFFDX[d\`\uFFFD\uFFFDK\uFFFD%7&(6\uFFFD\b@W/0V;\b#.\f+%\v\x07\x1B+3?!\x07\x07\f\f\uFFFDe[X\uFFFD%&'%\uFFFDX[\uFFFD[X\uFFFD%'K\uFFFD\uFFFD\uFFFD\uFFFD\x1B%'7&\uFFFD-B &J/3/\x1B&\v$5\f
"1 .D\f'\x07\f\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0&\0>\0V\0\0!"3!2>54.#!"&5463!2!\x072?6=4&#!"'&"3!26=4&#!764t\uFFFD%>%&2\x1B\uFFFD\x1B2&&2)(\uFFFD((\uFFFD(\uFFFD\0;\uFFFD\uFFFD\x07\r	\uFFFDu\b\r\r\uFFFD\x07\uFFFD\r	\uFFFD\b\r\r\b\uFFFD\u014A\x07\uFFFD%>%\uFFFD\x1B2&&2\x1B\uFFFD\x1B2&\uFFFD\uFFFD((\uFFFD((\uFFFD\uFFFD\uFFFD\uFFFD	*	\f\f	\b\r\uFFFD\uFFFD	*	\f\f	\b\r\uFFFD\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0$\x000\0\02+\x07/#"'&5463#32>4.7!3!264&\\*73-\uFFFDk\f\bp\uFFFD*7*v\uFFFD\v\v\uFFFD\b\b\b\uFFFD\uFFFDF\v\v\uFFFD\v\uFFFD;,\uFFFD+.|\v\f|-\uFFFD,;\uFFFDi\x07\x07\uFFFD\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\x001\0=\0K\0\0!";2?32654&+2'&+"&547>3!2\x07!"3!264&\x07#32>4.\\\uFFFDN*7*\uFFFDp\b\fk\uFFFD,47\uFFFD::99\uFFFD\b\uFFFD	\uFFFD\uFFFDF\f\f\uFFFD\f\uFFFD\uFFFD\v\v\uFFFD\b\b\b\uFFFD;,\uFFFD-|\f\f|.+\uFFFD,;\uFFFD\uFFFD?@@?\uFFFD\r	\b		\b	\rt\uFFFD\x07\x07\0\0\uFFFD\uFFFD\uFFFD\uFFFD\x07\uFFFD\0<\0I\0m\0\0&'&\x07\x07>./.675>72\x07\x07\x07327>7>."2>4.'."\x07132?72673>&Yfc\uFFFDPTk1;<Y\v
Kh+-<\uFFFDs<r3[86

'#c=\r
\v\b\x07Ft'5 1x\uFFFD\uFFFD
\v\f\v\v\uFFFD{	\f}\x07	\b\v?

>\f
751:=\uFFFDfc\uFFFDPS6\v
\x1B\r\r-\uFFFD\uFFFD\uFFFDKbp8ZYgid:Y\x1B\r
\v gCW\uFFFD\u0164\uFFFD\uFFFD\v
\v

\uFFFD
\v\b\uFFFD\x07\f\rM\uFFFD\uFFFD
\vYJ\f\r\0\0\0\0\uFFFD\uFFFD\0\uFFFD\x005\0>\0G\0P\0Y\0\0"'.'&47>762\x07.7654'&'&"\x07\x0776\x07\x07#%264&".4>.4623"&4>\0h_\\\uFFFD'(('\uFFFD\\_\uFFFD_\\\uFFFD'(\f\x1B
;:bd\uFFFDdb:;[\uFFFD\uFFFDb\f\bFH,$4$$4$\uFFFD\x1B&&6&&\uFFFD\x1B&&6&&\uFFFD\x1B&&5'&\x7F('\uFFFD\\_\uFFFD_\\\uFFFD'(('\uFFFD\\_h97\x07/0ueb9;;9beug\uFFFD{%\b\v\uFFFD$$4$$'6'(6''6''6((6'(7'\0\0\0\0\uFFFD\uFFFD\uFFFD7\0#\0'\0?\0\0#54&+"!54&+"#"3!2654&!!%53;26=!;26=3\uFFFD\uFFFD=\uFFFD\uFFFD=\uFFFD#:\uFFFD5\uFFFD\uFFFD5\uFFFD==\uFFFD\uFFFDFFFF\uFFFD,\uFFFD\uFFFD5\uFFFDJ\uFFFD5555\uFFFD\0\0\0\0\0\0\uFFFD\uFFFD\uFFFD\0	\0\x007\0D\0Q\0^\0\0%#!"&5!%463!2)#54&#!"#";3!2>53264&2654&"#2654&"!2654&"$\uFFFD>$>\uFFFD?\x07,\x07\uFFFD\uFFFD|\uFFFD4$\uFFFD\uFFFD$3\uFFFDp&3\x1B\uFFFD\x1B3'p\uFFFD\uFFFDm"%%\uFFFDp\b\b&&$33$&\uFFFDj\x1B3&&3\x1B\uFFFD\uFFFDQ\uFFFD\uFFFDp\uFFFD\uFFFDp\uFFFD\uFFFDp\0\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\0\0M\0\0"/&4624627622+532>4.#4."";#".54>7>76\uFFFD\x07n\v\f,,\v \vjOED[6W1DvF%%2T11T2Dv\uFFFDvD2T11T2%%FvD1W6[DE3\x07h
\v'1\uFFFD\uFFFD'\v
h\uFFFD"!vIGf8EsCG0RcR0EsCCsE0RcR0GCsE8fGIv!"\0\0\0\0\0\0\0\0\uFFFDc\0\0\0%76.\x07	.7\0\r\uFFFD
 \f\uFFFD\uFFFD\uFFFD\uFFFD\x07\x07\uFFFD\r\`\uFFFD\r \v\uFFFDo\uFFFD\b\x07\b\uFFFDP\0\0\0\0\f\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\0\x07\0\v\0\0\0\0\x1B\0 \0$\0(\0,\x000\0\0!!!5!!!!5!%3#!#53\x07#53\x07#53+53\x07#53\x07#53!3#\v\uFFFD\uFFFDH\uFFFD\uFFFD\uFFFDJ\uFFFD\uFFFDH\uFFFD\uFFFD\uFFFDJ\uFFFD\uFFFD##gEE\uFFFDFF\uFFFDFE\uFFFDFF\uFFFDFF\uFFFDEE\uFFFD###]\uFFFD\uFFFD\uFFFD\uFFFDv]\uFFFD\uFFFD\uFFFD\uFFFD1111111111111\0\uFFFD\uFFFD\0\0\uFFFD\0\0%\x002\0?\0\0%\x07 '&'.67676 '."\x0726764".4>2"2>4.\uFFFDXy}\uFFFD\uFFFD}xYYx}}yXLP\uFFFD\uFFFD\uFFFDPP\uFFFD\uFFFD\uFFFDP\uFFFDH@n@@n\uFFFDm@@mA.O--O\\N..N\uFFFDwBEEBw"VV"wCEECw"VV\uFFFDs\x7F\x7FsEt\x7F\x7FtE\uFFFD\uFFFD@o\x7Fo@@n\uFFFDn@\uFFFD.O[O..N]N.\0\0\0\uFFFD\uFFFD\uFFFD\x7F\0\0*\0F\0f\0\0\x07!"&46;5462\x07\x07'"&74632\x07.'&6763>7>3\x07&'.#"\x07\x07#.76767632\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\`\uFFFD \v
\uFFFDG\uFFFD\u0173\uFFFD)\b	\r"\x07#x\uFFFDQ^\uFFFD|\f,7\v#x\uFFFDQ\\\uFFFD=@\x1BIHdfq\`ZW\uFFFD+\v \uFFFD\uFFFD\uFFFD\f\x07\uFFFD\uFFFD\v\uFFFD\v		\uFFFDFLH\uFFFDY	 \b\vIo=K\uFFFD[\fy\uFFFD
\b\v\rIo=LDF[\f \fiRQ-.&$\uFFFDW!\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\0\0M\0\02"/"&5\x07"&4?62+532>4.#4."";#".54>7>76\v\x07n\v \v,,\f\vj
OED[6W1DvF%%2T11T2Dv\uFFFDvD2T11T2%%FvD1W6[DE\uFFFD\x07h\v
(\uFFFD\uFFFD1(

h\uFFFD"!vIGf8EsCG0RcR0EsCCsE0RcR0GCsE8fGIv!"\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\0\x1B\0(\0\0"!!264&#!"!2654&2764&"\x07\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD'88'2'8\uFFFD\uFFFD'\r\uFFFD'\uFFFD\f\x1B\uFFFD\uFFFD2'8'\uFFFD\uFFFD'78'\f\x1B\uFFFD\uFFFD'\uFFFD'\0\0\uFFFD\uFFFD\uFFFDs\uFFFD\0\0'\0K\0v\0\02654.#"322654'&'&#"3%>/.\x07?>&/&.'76?>3&'&'.'&'.?6\uFFFD!:c:'B'\uFFFD 10QTaNCA&'\uFFFD\x1Bo59a.\uFFFD\uFFFD\uFFFDY].a\x07\uFFFD S=e\uFFFD>\x07	
O\b@\uFFFDu\v\bS	\x1B\v\uFFFD\v\va_BELQ\uFFFD?;'%e\v\b\uFFFD;c: 'B'bSQ01!'&AC0Q!\uFFFD\ba-^Z\uFFFD\uFFFD,a87\x07o\x1B=>\uFFFDe\uFFFD\v\bR	
v\uFFFD@\bS
	s\v\v\`&':?\uFFFDQKFB\`d	\r\0\0\0\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\x07\0\x1B\0\0\0\0\0\0\0\b\0"\0\0\0\0\0\0\0\b\0*\0\0\0\0\0\0\0\v\x002\0\0\0\0\0\0\0\b\0=\0\0\0\0\0\0
\0+\0E\0\0\0\0\0\0\v\0\0p\0\0	\0\0\0&\0\uFFFD\0\0	\0\0\0\uFFFD\0\0	\0\0\0\uFFFD\0\0	\0\0\0\uFFFD\0\0	\0\0\0\uFFFD\0\0	\0\0\0\uFFFD\0\0	\0\0\0\uFFFD\0\0	\0
\0V\r\0\0	\0\v\0&cCreated by iconfonticonfontRegulariconfonticonfontVersion 1.0iconfontGenerated by svg2ttf from Fontello project.http://fontello.com\0C\0r\0e\0a\0t\0e\0d\0 \0b\0y\0 \0i\0c\0o\0n\0f\0o\0n\0t\0i\0c\0o\0n\0f\0o\0n\0t\0R\0e\0g\0u\0l\0a\0r\0i\0c\0o\0n\0f\0o\0n\0t\0i\0c\0o\0n\0f\0o\0n\0t\0V\0e\0r\0s\0i\0o\0n\0 \x001\0.\x000\0i\0c\0o\0n\0f\0o\0n\0t\0G\0e\0n\0e\0r\0a\0t\0e\0d\0 \0b\0y\0 \0s\0v\0g\x002\0t\0t\0f\0 \0f\0r\0o\0m\0 \0F\0o\0n\0t\0e\0l\0l\0o\0 \0p\0r\0o\0j\0e\0c\0t\0.\0h\0t\0t\0p\0:\0/\0/\0f\0o\0n\0t\0e\0l\0l\0o\0.\0c\0o\0m\0\0\0\0\0\0\0\0\0
\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\x07\b	
\v\f\r\x1B !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~\x7F\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0renwuyuqishuaitishiyingwanchengshengyugongshibiaogezhonglahoubiaogezhongchaoqianlahou\bchaoqian\x07zhunshisousuo\fhuishouzhan1bianzu\x07delete3selectRelation\bjiaofuwu
lichengbeiqianhe\bzhuomianprevnext\f_back_to_topbeizhu\x07zhankaishouqi
zhixingrenmuban\x07upload1_icon_location\r_single_arrow	_eye_open
_eye_close_doughnut_legend2_doughnut_legend	shaixuan2\x07quanpinkehu\bshuomingtcqp\bzhuanpai\v_proxy_datedaorudaoruchenggongzhengzaijinhang\x07shijian\fyichangtishi\vchenggongda_bot_speak_dot\b_bot_eye_desktop_performer_desktop_noticexialaicon_init-project\vicon_designicon_login-outicon_basic-dataicon_project-progress\ficon_my-taskicon_progress-checkicon_project-viewzuixiaocengjiicon\ficon_setting\vicon_notice\ricon_all-menu\vicon_module\vicon_tenant\vxinjianiconxiaotianjiazixiangriqi\fqianzhirenwu\x07gongshi\x07fuzerencengji\x07gouxuan\bbianzu12\x07guanbi2yichangxiaoicon	yuqixiao2yuqi1	yuqixiao1yiwancheng-xuanzhong\bbianzu22zhengchang-guanlirenpersonxingzhuangjiehe\x07lujing1lujing
xingzhuang
shebeizongz1\x07projectzjyscsjycgf1wfxinyuannoneclosetip
suggestion	householdtotal\fraw-material	icon-test\bdate-redsetshare\vUpload-morechaxunfaqijindurenwuyuqijinji\x07conductmore3more2back\x07delete1moredainewwarnagent\babnormalnews	important\x07overdue
green-hookignore
reasonable\x07suggest\bchanging\x07changed\x07explain\x07replace\x07notice2notice
Processing\bscheduledatedelete\bdownload
drop-down1	dismantlesee\x07refreshuploadedit1call1\0\0\0\0`
    }
  ];
}

// src/solutions/template/files/src/bootstrap.ts.ts
function getFile42() {
  return [
    ["src"],
    {
      name: "bootstrap",
      ext: "ts",
      content: "import { enableProdMode } from '@angular/core';\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\n\nimport { AppModule } from './app/app.module';\n\nimport { registerLocaleData } from '@angular/common';\nimport zh from '@angular/common/locales/zh';\nimport { environment } from './environments/environment';\nimport { bootstrap } from '@angular-architects/module-federation-tools';\n\n/*\nif (environment.production) {\n  enableProdMode();\n}\n*/\n\nregisterLocaleData(zh);\n\n/*\nplatformBrowserDynamic().bootstrapModule(AppModule)\n  .catch(err => console.log(err));\n*/\n\nbootstrap(AppModule, {\n  production: environment.production,\n  compilerOptions: {\n    ngZone: (window as any).ngZone\n  }\n});\n"
    }
  ];
}

// src/solutions/template/files/src/e2e/protractor.conf.js.ts
function getFile43() {
  return [["src", "e2e"], { name: "protractor.conf", ext: "js", content: "" }];
}

// src/solutions/template/files/src/e2e/tsconfig.json.ts
function getFile44() {
  return [["src", "e2e"], { name: "tsconfig", ext: "json", content: "{}" }];
}

// src/solutions/template/files/src/environments/environment.prod.ts.ts
function getFile45() {
  return [
    ["src", "environments"],
    {
      name: "environment.prod",
      ext: "ts",
      content: "export const environment = {\n  production: true,\n  mock: {\n    db: {},\n    methods: {}\n  }\n};\n"
    }
  ];
}

// src/solutions/template/files/src/environments/environment.ts.ts
function getFile46() {
  return [
    ["src", "environments"],
    {
      name: "environment",
      ext: "ts",
      content: "// The file contents for the current environment will overwrite these during build.\n// The build system defaults to the dev environment which uses `environment.ts`, but if you do\n// `ng build --env=prod` then `environment.prod.ts` will be used instead.\n// The list of which env maps to which file can be found in `.angular-cli.json`.\n\nimport { mockDB, requestMethodImpl } from '../mock-data';\n\nexport const environment = {\n  production: false,\n  mock: {\n    db: mockDB,\n    methods: requestMethodImpl\n  }\n};\n"
    }
  ];
}

// src/solutions/template/files/src/favicon.ico.ts
function getFile47() {
  return [
    ["src"],
    {
      name: "favicon",
      ext: "ico",
      content: "\0\0\0\0\0\0\0 \0h\0\0\0\0\0(\0\0\0\0\0\0 \0\0\0\0 \0\0\0\0\0@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD*\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD+\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\0\uFFFD\uFFFD\r\0\uFFFDs\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\0\uFFFDv\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\u07AD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\0\uFFFD\0\uFFFDv\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\r\0\uFFFD \0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\r\0\u0754\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD]\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\r\0\u0740\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\r\0\uFFFD/\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD	\0\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\r\0\u0740\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD8\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\u0739\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\r\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\f\0\uFFFD2\0\uFFFD;\r\0\uFFFD!\0\0\uFFFD\f\0\uFFFD6\0\uFFFD	\r\0\uFFFD\0\u077B\0\uFFFD\uFFFD\0\u07A6\0\0\0\0\0\0\0\0\0\uFFFDh\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\f\0\uFFFDC\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\f\0\uFFFDC\0\0\0\0\0\uFFFD+\0\uFFFD\uFFFD\0\uFFFD>\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD^\r\0\uFFFDP\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\r\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\0\uFFFD\uFFFD\f\0\uFFFDU\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\n\0\uFFFD\0\uFFFDf\0\uFFFD\uFFFD\0\uFFFD\uFFFD\0\uFFFD\uFFFD\r\0\u0786\0\0\0\0\0\0\0\0\0\uFFFD:\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\f\0\uFFFDU\0\uFFFD\uFFFD\0\uFFFD\uFFFD\f\0\uFFFD3\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\u0764\0\uFFFD\uFFFD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFDM\0\u0751\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\x07\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\b\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\x07\uFFFD\uFFFD\uFFFD\uFFFD\x7F\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD"
    }
  ];
}

// src/solutions/template/files/src/main.ts.ts
function getFile48() {
  return [
    ["src"],
    {
      name: "main",
      ext: "ts",
      content: "import('./bootstrap')\n	.catch(err => console.error(err));\n"
    }
  ];
}

// src/solutions/template/files/src/mock-data/index.ts.ts
function getFile49() {
  return [
    ["src", "mock-data"],
    {
      name: "index",
      ext: "ts",
      content: "const i18ntw = require('../assets/i18n/zh_TW/basic.json');\nconst i18ncn = require('../assets/i18n/zh_CN/basic.json');\nconst i18nen = require('../assets/i18n/en_US/basic.json');\n\n// import { demo1DocumentOrder } from './showcase/demo1/document-order/document-order';\n\n\nexport const mockDB = {};\n\nmockDB['assets/i18n/zh_TW/basic'] = i18ntw;\nmockDB['assets/i18n/zh_CN/basic'] = i18ncn;\nmockDB['assets/i18n/en_US/basic'] = i18nen;\n\n// mockDB['DEMO_DAP_CURRENT/DemoOrder/List'] = demo1DocumentOrder.data;\n// mockDB['DEMO_DAP_CURRENT/DemoOrder'] = demo1DocumentOrder.data;\n\n\nexport const requestMethodImpl = {};\n// requestMethodImpl['DEMO_DAP_CURRENT/DemoOrder/List'] = {\n//   get: demo1DocumentOrder.getList,\n//   post: demo1DocumentOrder.postMethod,\n//   delete: demo1DocumentOrder.deleteMethod,\n//   put: demo1DocumentOrder.putMethod\n// };\n// requestMethodImpl['DEMO_DAP_CURRENT/DemoOrder'] = {\n//   get: demo1DocumentOrder.getMethod,\n//   post: demo1DocumentOrder.postMethod,\n//   delete: demo1DocumentOrder.deleteMethod,\n//   put: demo1DocumentOrder.putMethod\n// };\n"
    }
  ];
}

// src/solutions/template/files/src/mock-data/typings.d.ts.ts
function getFile50() {
  return [
    ["src", "mock-data"],
    {
      name: "typings.d",
      ext: "ts",
      content: "declare module '*.json' {\n  const value: any;\n  export default value;\n}\n"
    }
  ];
}

// src/solutions/template/files/src/polyfills.ts.ts
function getFile51() {
  return [
    ["src"],
    {
      name: "polyfills",
      ext: "ts",
      content: "\n\n\n/**\n * Required to support Web Animations `@angular/platform-browser/animations`.\n * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation\n **/\n// import 'web-animations-js';  // Run `npm install --save web-animations-js`.\n\n\n\n/** *************************************************************************************************\n * Zone JS is required by Angular itself.\n */\nimport 'zone.js';  // Included with Angular CLI.\n\n\n\n/** *************************************************************************************************\n * APPLICATION IMPORTS\n */\n\n/**\n * Date, currency, decimal and percent pipes.\n * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10\n */\n// import 'intl';  // Run `npm install --save intl`.\n/**\n * Need to import at least one locale-data with intl.\n */\n// import 'intl/locale-data/jsonp/en';\n"
    }
  ];
}

// src/solutions/template/files/src/test.ts.ts
function getFile52() {
  return [
    ["src"],
    {
      name: "test",
      ext: "ts",
      content: "// This file is required by karma.conf.js and loads recursively all the .spec and framework files\n\nimport 'zone.js/testing';\nimport { getTestBed } from '@angular/core/testing';\nimport {\n  BrowserDynamicTestingModule,\n  platformBrowserDynamicTesting\n} from '@angular/platform-browser-dynamic/testing';\n\ndeclare const require: any;\n\n// First, initialize the Angular testing environment.\ngetTestBed().initTestEnvironment(\n  BrowserDynamicTestingModule,\n  platformBrowserDynamicTesting()\n);\n// Then we find all the tests.\nconst context = require.context('./', true, /\\.spec\\.ts$/);\n// And load the modules.\ncontext.keys().map(context);\n"
    }
  ];
}

// src/solutions/template/files/src/tsconfig.app.json.ts
function getFile53() {
  return [
    ["src"],
    {
      name: "tsconfig.app",
      ext: "json",
      content: '{\n  "extends": "../tsconfig.json",\n  "compilerOptions": {\n    "outDir": "../out-tsc/app",\n    "types": ["node"]\n  },\n  "files": [\n    "main.ts",\n    "polyfills.ts",\n ],\n  "include": [\n    "src/**/*.d.ts"\n  ]\n}\n'
    }
  ];
}

// src/solutions/template/files/src/typings.d.ts.ts
function getFile54() {
  return [
    ["src"],
    {
      name: "typings.d",
      ext: "ts",
      content: "/* SystemJS module definition */\ndeclare let module: NodeModule;\ninterface NodeModule {\n  id: string;\n}\ndeclare module '!raw-loader!*' {\n  const contents: string;\n  export = contents;\n}\n\nexport {};\n"
    }
  ];
}

// src/solutions/template/files/themeCssBuild.js.ts
function getFile55() {
  return [
    [],
    {
      name: "themeCssBuild",
      ext: "js",
      content: `var fs = require('fs'),
  path = require('path'),
  exec = require('child_process').exec,
  less = require('less'),
  sourcePath, targetPath;
// sourcePath = 'src/styles.less';
// targetPath = 'src/css/';
sourcePath = 'src/app/theme'; // less\u6A94\u4F86\u6E90\u8DEF\u5F91
targetPath = 'src/assets/themes'; // \u8F49\u63DB\u70BAcss\u5F8C\u5B58\u6A94\u8DEF\u5F91
cssPath = 'assets/themes'; // \u5C08\u6848\u5B58\u53D6css\u8DEF\u5F91
//\u81EA\u8A02\u8DEF\u5F91:\u83B7\u53D6\u547D\u4EE4\u884C\u4E2D\u7684\u8DEF\u5F84
process.argv.forEach(function (val, index, array) {
  console.log(val);
  if (index == 2) {
    sourcePath = val;
  }
  if (index == 3) {
    targetPath = val;
  }
  if (index == 4) {
    cssPath = val;
  }
})

var lessc = function (rootPath, targetPath, cssPath) {

  //**\u7C21\u6613\u6E2C\u8A66\u5BEB\u6CD5 */
  // //\u5224\u65AD\u6587\u4EF6\u662F\u5426\u4E3Aless\u6587\u4EF6
  // if (path.extname(rootPath) === ".less") {
  //   var currentFilePath = path.resolve(rootPath);
  //   var newFilePath = path.resolve(targetPath, path.basename(currentFilePath, '.less') + ".css");
  //   if (!fs.existsSync(targetPath)) {
  //     fs.mkdirSync(targetPath);
  //   }
  //   // \u65B9\u6CD5\u4E00:\u7528less render
  //   less.render(fs.readFileSync(currentFilePath).toString(), {
  //     filename: path.resolve(currentFilePath),
  //   }, function (e, output) {
  //     if (e) {
  //       console.log(e);
  //     }
  //     fs.writeFileSync(newFilePath, output.css);
  //   });
  //   ////\u65B9\u6CD5\u4E8C:\u4F7F\u7528\u547D\u4EE4\u5217lessc,\u4F46\u932F\u8AA4\u8A0A\u606F\u4E0D\u77E5\u5982\u4F55\u5217\u51FA
  //   // exec("lessc -x" + currentFilePath + " > " + newFilePath);
  // }
  //**\u7C21\u6613\u6E2C\u8A66\u5BEB\u6CD5END */

  //\u53D6\u5F97\u5F53\u524D\u7EDD\u5BF9\u8DEF\u5F84
  rootPath = path.resolve(rootPath);
  //\u76EE\u6807\u8DEF\u5F84\u7EDD\u5BF9\u8DEF\u5F84
  targetPath = path.resolve(targetPath);
  
  //\u5224\u65AD\u76EE\u5F55\u662F\u5426\u5B58\u5728
  fs.exists(rootPath, function (exists) {
    //\u8DEF\u5F84\u5B58\u5728
    if (exists) {
      var jsonArr=[];
      //\u83B7\u53D6\u5F53\u524D\u8DEF\u5F84\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u548C\u8DEF\u5F84\u540D
      var childArray = fs.readdirSync(rootPath);
      if (childArray.length) {
        var id = '';
        var themePath = '';
        var jsonFilePath = path.resolve(targetPath, "themeJson.json");
        for (var i = 0; i < childArray.length; i++) {
          var currentFilePath = path.resolve(rootPath, childArray[i]);
          var currentTargetPath = path.resolve(targetPath, childArray[i])
          //\u8BFB\u53D6\u6587\u4EF6\u4FE1\u606F
          var stats = fs.statSync(currentFilePath);
          //\u82E5\u662F\u76EE\u5F55\u5219\u9012\u5F52\u8C03\u7528
          if (stats.isDirectory()) {
            //lessc(currentFilePath, currentTargetPath);
          } else {
            //\u5224\u65AD\u6587\u4EF6\u662F\u5426\u4E3Aless\u6587\u4EF6
            if (path.extname(currentFilePath) === ".less") {
              var newFilePath = path.resolve(targetPath, path.basename(currentFilePath, '.less') + ".css");
              id = path.basename(currentFilePath, '.less');
              themePath = cssPath + '/' + id + '.css';
              if (!fs.existsSync(targetPath)) {
                fs.mkdirSync(targetPath);
              }
              // \u65B9\u6CD5\u4E00:\u7528less render
              (function(currentFilePath, newFilePath, id, themePath) {
                less.render(fs.readFileSync(currentFilePath).toString(), {
                  filename: path.resolve(currentFilePath),
                  javascriptEnabled: true
                }, function (e, output) {
                  if (e) {
                    console.log(e); // \u932F\u8AA4\u8A0A\u606F
                  }
                  console.log(newFilePath);
                  jsonArr.push({"id":id, "path":themePath});
                  fs.writeFileSync(newFilePath, output.css);\u3000// \u5BEB\u5165css
                  fs.writeFileSync(jsonFilePath,JSON.stringify(jsonArr)); // \u7522\u751Fcss\u540D\u7A31\u53CA\u8DEF\u5F91
                });
            })(currentFilePath, newFilePath, id, themePath);              
              ////\u65B9\u6CD5\u4E8C:\u4F7F\u7528\u547D\u4EE4\u5217lessc,\u4F46\u932F\u8AA4\u8A0A\u606F\u4E0D\u77E5\u5982\u4F55\u5217\u51FA
              // exec("lessc -x " + currentFilePath + " > " + newFilePath);
            }
          }
        }
      }
      
    } else {
      console.log("directory is not exists");
    }
  });

}

lessc(sourcePath, targetPath, cssPath);
`
    }
  ];
}

// src/solutions/template/files/tsconfig.json.ts
function getFile56() {
  return [
    [],
    {
      name: "tsconfig",
      ext: "json",
      content: '{\n  "compileOnSave": false,\n  "compilerOptions": {\n    "downlevelIteration": true,\n    "module": "es2020",\n    "outDir": "./dist/out-tsc",\n    "sourceMap": true,\n    "declaration": false,\n    "moduleResolution": "node",\n    "emitDecoratorMetadata": true,\n    "experimentalDecorators": true,\n    "target": "es2015",\n    "importHelpers": true,\n    "types": [\n      "node"\n    ],\n    "typeRoots": [\n      "node_modules/@types"\n    ],\n    "baseUrl": ".",\n    "lib": [\n      "es2018",\n      "dom"\n    ],\n    "skipLibCheck": true,\n    "resolveJsonModule": true\n  }\n}\n'
    }
  ];
}

// src/solutions/template/files/version_control/APP_VERSION.ts
function getFile57() {
  return [["version_control"], { name: "APP_VERSION", ext: "", content: "1.0.0" }];
}

// src/solutions/template/files/version_control/BUILD.ts
function getFile58() {
  return [["version_control"], { name: "BUILD", ext: "", content: "1000\n" }];
}

// src/solutions/template/files/version_control/Makefile.ts
function getFile59() {
  return [
    ["version_control"],
    {
      name: "Makefile",
      ext: "",
      content: '#\u7248\u672C\u6A94\u6848\r\nLAST_APP_VERSION_FILE=APP_VERSION\r\nBUILD_VERSION_FILE=BUILD\r\n\r\n#\u7248\u672C\u8B8A\u6578\r\nVERSION:=$(shell cat ../VERSION)\r\nINIT_BUILD_VERSION=999\r\nBUILD_VERSION=$(shell echo $(shell cat $(BUILD_VERSION_FILE))+1 | bc)\r\nexport APP_VERSION=$(shell cat $(LAST_APP_VERSION_FILE))\r\n#Git\r\nGIT_CMD=git\r\nGIT_BRANCH=$(GIT_CMD) branch\r\nGIT_ADD=$(GIT_CMD) add\r\nGIT_COMMIT=$(GIT_CMD) commit\r\nGIT_PUSH=$(GIT_CMD) push\r\nGIT_CURRENT_BRANCH=$$branch\r\nGIT_TAG=$(GIT_CMD) tag\r\n# Pure targets.\r\n#.PHONY: all\r\nall: check_version_file_is_exist check_version add_version commit_record add_tag write_tag_to_file\r\n#\u521D\u59CB\u5316 build version \u6A94\u6848\r\ninit_build_version:\r\n	touch $(BUILD_VERSION_FILE)\r\n	echo $(INIT_BUILD_VERSION) > $(BUILD_VERSION_FILE)\r\n#\u521D\u59CB\u5316 app version\r\ninit_app_version:\r\n	touch $(LAST_APP_VERSION_FILE)\r\n	echo $(VERSION) > $(LAST_APP_VERSION_FILE)\r\n\r\n#\u6AA2\u67E5\u7248\u672C\u6A94\u6848\u662F\u5426\u5B58\u5728\r\ncheck_version_file_is_exist:\r\nifeq "$(wildcard $(BUILD_VERSION_FILE))" ""\r\n	@make init_build_version\r\nendif\r\nifeq "$(wildcard $(LAST_APP_VERSION_FILE))" ""\r\n	@make init_app_version\r\nendif\r\n\r\n#\u6AA2\u67E5\u7248\u672C\r\ncheck_version:\r\n	@if [ $(shell cat $(LAST_APP_VERSION_FILE)) != $(VERSION) ]; then\\\r\n		make init_app_version;\\\r\n				make init_build_version;\\\r\n	fi\r\nadd_version:\r\n	echo $(BUILD_VERSION) > $(BUILD_VERSION_FILE)\r\ncommit_record:\r\n	$(GIT_ADD) $(LAST_APP_VERSION_FILE)\r\n	$(GIT_ADD) $(BUILD_VERSION_FILE)\r\n	$(GIT_COMMIT) --no-verify -m "auto increment build version $(shell cat BUILD) [CI SKIP]"\r\n	$(GIT_PUSH) origin HEAD:"$(GIT_CURRENT_BRANCH)"\r\nadd_tag:\r\n	$(GIT_TAG) -a v$(shell cat APP_VERSION).$(shell cat BUILD) -m "auto increment build version v$(shell cat APP_VERSION).$(shell cat BUILD)"\r\n	$(GIT_PUSH) origin v$(shell cat APP_VERSION).$(shell cat BUILD)\r\n# \u8FD9\u4E2A\u662Fdrone\u6253\u5305docker\u81EA\u5B9A\u4E49tag\u7248\u672C\u53F7\u7684\u6765\u6E90\r\nwrite_tag_to_file:\r\n	echo "$(shell cat APP_VERSION).$(shell cat BUILD)" > ../.tags\r\n'
    }
  ];
}

// src/solutions/template/files/VERSION.ts
function getFile60() {
  return [[], { name: "VERSION", ext: "", content: "1.0.0" }];
}

// src/solutions/template/files/src/app/app-routing.module.ts.ts
function getFile61() {
  return [
    ["src", "app"],
    {
      name: "app-routing.module",
      ext: "ts",
      content: "import { NgModule } from '@angular/core';\nimport { RouterModule, Routes } from '@angular/router';\n\nimport { PageNotFoundComponent } from './page-not-found.component';\n\nconst routes: Routes = [\n  {\n    path: '',\n    pathMatch: 'prefix',\n    loadChildren: (): Promise<any> => import('./implementation/implementation.module').then(m => m.ImplementationModule)\n  },\n  {\n    path: '**',\n    component: PageNotFoundComponent\n  }\n];\n\n\n@NgModule({\n  imports: [\n    RouterModule.forRoot(\n      routes,\n      { relativeLinkResolution: 'legacy' }\n      // , { enableTracing: true } // debugging purposes only\n    ),\n  ],\n  declarations: [\n    PageNotFoundComponent\n  ],\n  exports: [\n    RouterModule\n  ]\n})\nexport class AppRoutingModule {\n}\n"
    }
  ];
}

// src/solutions/template/files/src/app/app.component.less.ts
function getFile62() {
  return [["src", "app"], { name: "app.component", ext: "less", content: "" }];
}

// src/solutions/template/files/src/app/app.component.ts.ts
function getFile63() {
  return [
    ["src", "app"],
    {
      name: "app.component",
      ext: "ts",
      content: "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  template: `\n  <router-outlet></router-outlet>\n  `,\n  styleUrls: ['./app.component.less']\n})\nexport class AppComponent {\n  constructor() { }\n}\n"
    }
  ];
}

// src/solutions/template/files/src/app/app.module.ts.ts
function getFile64() {
  return [
    ["src", "app"],
    {
      name: "app.module",
      ext: "ts",
      content: "import { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\nimport { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';\nimport { BrowserAnimationsModule } from '@angular/platform-browser/animations';\n\nimport { AppComponent } from './app.component';\nimport { AppRoutingModule } from './app-routing.module';\nimport { FrameworkModule } from '@webdpt/framework';\nimport { ImplementationModule } from './implementation/implementation.module';\nimport { SYSTEM_CONFIG } from './config/system-config';\nimport { SystemModule } from './config/system.module';\n\n@NgModule({\n  imports: [\n    BrowserModule,\n    BrowserAnimationsModule,\n    AppRoutingModule,\n    HttpClientModule,\n    HttpClientJsonpModule,\n    FrameworkModule.forRoot([], SYSTEM_CONFIG),\n\n    SystemModule.forRoot([]),\n    ImplementationModule.forRoot([]),\n  ],\n  declarations: [\n    AppComponent\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {\n}\n"
    }
  ];
}

// src/solutions/template/files/src/app/config/app-auth-token.ts.ts
function getFile65() {
  return [
    ["src", "app", "config"],
    {
      name: "app-auth-token",
      ext: "ts",
      content: "/**\n * IAM \u7684 digi-middleware-auth-app [\u5404\u61C9\u7528\u7CFB\u7D71\u7684AppToken].\n */\n// eslint-disable-next-line max-len\nexport const DigiMiddlewareAuthApp = '';\n"
    }
  ];
}

// src/solutions/template/files/src/app/config/system-config.ts.ts
function getFile66() {
  return [
    ["src", "app", "config"],
    {
      name: "system-config",
      ext: "ts",
      content: "import { DigiMiddlewareAuthApp } from './app-auth-token';\nimport { IDWDmcUserInfo } from '@webdpt/framework/config';\n\n// \u958B\u767C\u74B0\u5883\u8B8A\u6578\nexport const SYSTEM_CONFIG: IAppConfig = {\n  dwAppId: 'sampleApp1',\n  dwAppName: '\u7BC4\u4F8B\u61C9\u7528',\n  defaultApp: '/',\n  dwLogoPath: '',\n  dwDateFormat: 'yyyy/MM/dd',\n  dwTimeFormat: 'HH:mm:ss',\n  dwUsingTab: false,\n  dwTabMultiOpen: false,\n  defaultLogin: '/',\n  dwAppAuthToken: DigiMiddlewareAuthApp,\n  dwLoadMaskHttp: true,\n  dwLoadMaskDelay: 0,\n  dwDmcUserInfo: {\n    username: '',\n    password: ''\n  },\n  dwTabStoreStrategy: 'session'\n};\n\nexport interface IAppConfig {\n  dwAppId: string; // Application ID(\u5C0D\u61C9\u5230\u4E92\u806F\u61C9\u7528\u7BA1\u7406\u4E2D\u5FC3)\n  dwAppName: string; // Application NAME(\u5C0D\u61C9\u5230\u4E92\u806F\u61C9\u7528\u7BA1\u7406\u4E2D\u5FC3)\n  defaultApp: string; // \u9996\u9801\u8DEF\u5F91\n  dwLogoPath: string; // Logo\u5716\u6A94\u8DEF\u5F91\n  dwDateFormat: string; // \u65E5\u671F\u683C\u5F0F\n  dwTimeFormat: string; // \u6642\u9593\u683C\u5F0F\n  dwUsingTab: boolean; // \u662F\u5426\u555F\u7528\u591A\u9801\u4F48\u5C40\n  dwTabMultiOpen: boolean; // \u591A\u9801\u4F48\u5C40\u9810\u8A2D\u662F\u5426\u53EF\u91CD\u8986\u958B\u555F\u4F5C\u696D\n  defaultLogin: string; // \u767B\u5165\u9801\u8DEF\u5F91\n  dwAppAuthToken: string; // IAM \u7684 digi-middleware-auth-app [\u5404\u61C9\u7528\u7CFB\u7D71\u7684AppToken].\n  dwLoadMaskHttp: boolean; // HTTP\u52A0\u8F09\u906E\u7F69\u662F\u5426\u555F\u7528\n  dwLoadMaskDelay: number; // \u5EF6\u9072\u986F\u793A\u52A0\u8F09\u6548\u679C\u7684\u6642\u9593\u6BEB\u79D2\n  dwDmcUserInfo: IDWDmcUserInfo; // \u6587\u6A94\u4E2D\u5FC3\u7684\u767B\u5165\u5E33\u5BC6\n  dwTabStoreStrategy?: 'session' | 'local' | 'none'; // \u591A\u9801\u7C64\u5132\u5B58\u7B56\u7565\n}\n\nfunction loadJSON(filePath: string): any {\n  const json = loadTextFileAjaxSync(filePath, 'application/json');\n  const obj = JSON.parse(json);\n  return obj;\n}\n\nfunction loadTextFileAjaxSync(filePath: string, mimeType: string): string {\n  const xmlhttp = new XMLHttpRequest();\n  xmlhttp.open('GET', filePath, false);\n  if (mimeType != null) {\n    if (xmlhttp.overrideMimeType) {\n      xmlhttp.overrideMimeType(mimeType);\n    }\n  }\n  xmlhttp.send();\n  if (xmlhttp.status === 200) {\n    return xmlhttp.responseText;\n  } else {\n    return null;\n  }\n}\n"
    }
  ];
}

// src/solutions/template/files/src/app/config/system.module.ts.ts
function getFile67() {
  return [
    ["src", "app", "config"],
    {
      name: "system.module",
      ext: "ts",
      content: "import { ModuleWithProviders, NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { Provider } from '@angular/compiler/src/core';\n\nimport { DwMockModule } from '@webdpt/framework/mock';\nimport { DW_MOCK, DW_APP_AUTH_TOKEN } from '@webdpt/framework/config';\nimport { environment } from '../../environments/environment';\nimport { DigiMiddlewareAuthApp } from './app-auth-token';\n\n\n@NgModule({\n  imports: [\n    CommonModule,\n    DwMockModule\n  ],\n  declarations: []\n})\nexport class SystemModule {\n  static forRoot(providers: Provider[]): ModuleWithProviders<SystemModule> {\n    return {\n      ngModule: SystemModule,\n      providers: [\n        {\n          provide: DW_MOCK,\n          useValue: environment.mock\n        },\n        {\n          provide: DW_APP_AUTH_TOKEN,\n          useValue: DigiMiddlewareAuthApp\n        },\n        ...providers\n      ]\n    };\n  }\n}\n"
    }
  ];
}

// src/solutions/template/files/src/app/page-not-found.component.ts.ts
function getFile68() {
  return [
    ["src", "app"],
    {
      name: "page-not-found.component",
      ext: "ts",
      content: "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-prog001',\n  template: `<h1>404</h1>`\n})\nexport class PageNotFoundComponent {\n\n  constructor() { }\n\n\n}\n"
    }
  ];
}

// src/solutions/template/files/src/app/style.less.ts
function getFile69() {
  return [
    ["src", "app"],
    { name: "style", ext: "less", content: "@import './implementation/style/index.less';\n" }
  ];
}

// src/solutions/template/files/src/app/implementation/auth/login/login-routing.module.ts.ts
function getFile70() {
  return [
    ["src", "app", "implementation", "auth", "login"],
    {
      name: "login-routing.module",
      ext: "ts",
      content: "import { NgModule } from '@angular/core';\nimport { RouterModule, Routes } from '@angular/router';\nimport { LoginComponent } from './login.component';\n\n\nconst routes: Routes = [\n  {\n    path: '',\n    component: LoginComponent,\n    pathMatch: 'prefix',\n  },\n];\n\n@NgModule({\n  imports: [\n    RouterModule.forChild(routes)\n  ],\n  exports: [RouterModule]\n})\nexport class LoginRoutingModule {\n}\n"
    }
  ];
}

// src/solutions/template/files/src/app/implementation/auth/login/login.module.ts.ts
function getFile71() {
  return [
    ["src", "app", "implementation", "auth", "login"],
    {
      name: "login.module",
      ext: "ts",
      content: "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\n\nimport { SharedModule } from '../../shared/shared.module';\nimport { LoginRoutingModule } from './login-routing.module';\nimport { LoginComponent } from './login.component';\nimport { DwLoginModule } from '@webdpt/components/login';\nimport { DwGridModule } from 'ng-quicksilver/grid';\nimport { TranslateModule } from '@ngx-translate/core';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    LoginRoutingModule,\n    SharedModule,\n    DwLoginModule,\n    DwGridModule,\n    TranslateModule\n  ],\n  declarations: [\n    LoginComponent\n  ]\n})\nexport class LoginModule { }\n"
    }
  ];
}

// src/solutions/template/files/src/app/implementation/auth/login/login.component.html.ts
function getFile72() {
  return [
    ["src", "app", "implementation", "auth", "login"],
    {
      name: "login.component",
      ext: "html",
      content: `<div dw-row class="login-bg">
  <div dw-col dwSpan="24" class="login-content">
    <div dw-row class="login-main-block">
      <div dw-col [dwXs]="'8'" [dwSm]="'8'" [dwMd]="'9'" [dwLg]="'9'">
      </div>
      <div dw-col [dwXs]="'8'" [dwSm]="'8'" [dwMd]="'6'" [dwLg]="'6'" style="z-index: 1">
        <dw-login-block [showRemember]="true" [showLanguage]="true"></dw-login-block>
      </div>
      <div dw-col [dwXs]="'8'" [dwSm]="'8'" [dwMd]="'9'" [dwLg]="'9'">
      </div>
    </div>
    <div dw-row class="login-copyright-block" dwJustify="center">
      <div dw-col dwSpan="24" class="login-copyright">
        <span>\xA9 Data Systems Consulting Co., Ltd. All rights reserved.</span>
      </div>
    </div>
  </div>
</div>
`
    }
  ];
}

// src/solutions/template/files/src/app/implementation/auth/login/login.component.less.ts
function getFile73() {
  return [
    ["src", "app", "implementation", "auth", "login"],
    {
      name: "login.component",
      ext: "less",
      content: ".login-bg {\n  background-color: rgba(0, 21, 41, 1);\n  height: 100%;\n  padding-top: 200px;\n}\n\n.login-logo {\n  margin-bottom: 10px;\n}\n.login-form {\n  min-width: 250px;\n}\n\n.login-form-forgot {\n  float: right;\n}\n\n.login-form-button {\n  width: 100%;\n}\n\n.login-copyright {\n  text-align: center;\n}\n.login-copyright span {\n  font-size: 14px;\n}\nspan {\n  color: white;\n}\n"
    }
  ];
}

// src/solutions/template/files/src/app/implementation/auth/login/login.component.ts.ts
function getFile74() {
  return [
    ["src", "app", "implementation", "auth", "login"],
    {
      name: "login.component",
      ext: "ts",
      content: "import { Component, Inject, OnInit } from '@angular/core';\nimport { Logo_Path } from '@webdpt/framework/config';\n\n@Component({\n  selector: 'app-login',\n  templateUrl: './login.component.html',\n  styleUrls: ['./login.component.less']\n})\nexport class LoginComponent {\n\n  constructor(\n    @Inject(Logo_Path) public dwLogoPath: string,\n  ) { }\n}\n"
    }
  ];
}

// src/solutions/template/files/src/app/implementation/implementation-routing.module.ts.ts
function getFile75() {
  return [
    ["src", "app", "implementation"],
    {
      name: "implementation-routing.module",
      ext: "ts",
      content: "import { NgModule } from '@angular/core';\nimport { RouterModule, Routes } from '@angular/router';\n\nimport { DwSsoLoginComponent } from '@webdpt/components/sso-login';\n\nconst routes: Routes = [\n  {\n    path: '',\n    pathMatch: 'prefix',\n    redirectTo: 'pages',\n  },\n  {\n    path: 'pages',\n    pathMatch: 'full',\n    loadChildren: (): Promise<any> => import('./programs/pages/pages.module').then(m => m.PagesModule),\n  },\n  {\n    path: 'login',\n    pathMatch: 'full',\n    loadChildren: (): Promise<any> => import('./auth/login/login.module').then(m => m.LoginModule),\n  },\n  {\n    path: 'sso-login',\n    pathMatch: 'full',\n    component: DwSsoLoginComponent\n  }\n];\n\n@NgModule({\n  imports: [RouterModule.forChild(routes)],\n  exports: [RouterModule]\n})\nexport class ImplementationRoutingModule { }\n"
    }
  ];
}

// src/solutions/template/files/src/app/implementation/implementation.module.ts.ts
function getFile76() {
  return [
    ["src", "app", "implementation"],
    {
      name: "implementation.module",
      ext: "ts",
      content: "import { NgModule, ModuleWithProviders } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { Provider } from '@angular/compiler/src/core';\nimport { HTTP_INTERCEPTORS } from '@angular/common/http';\nimport { DwSsoLoginModule } from '@webdpt/components/sso-login';\n\nimport {\n  DW_LANGUAGE_JSON\n} from '@webdpt/framework/config';\nimport { DwHttpApiInterceptor } from '@webdpt/framework/http';\nimport { ImplementationRoutingModule } from './implementation-routing.module';\nimport { SharedModule } from './shared/shared.module';\nimport { languageList } from './language/model/language.config';\n\nimport { NzModalService } from 'ng-zorro-antd/modal';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ImplementationRoutingModule,\n    SharedModule, // \u5171\u4EAB\u6A21\u7D44\n    DwSsoLoginModule,\n\n  ],\n  declarations: [],\n  providers: []\n})\nexport class ImplementationModule {\n  static forRoot(providers: Provider[]): ModuleWithProviders<ImplementationModule> {\n    return {\n      ngModule: ImplementationModule,\n      providers: [\n        ...SharedModule.forRoot([]).providers,\n\n        { provide: DW_LANGUAGE_JSON, useValue: languageList },\n        { provide: NzModalService, useClass: NzModalService },\n\n        DwHttpApiInterceptor,\n        {\n          provide: HTTP_INTERCEPTORS,\n          useExisting: DwHttpApiInterceptor,\n          multi: true\n        },\n        ...providers\n      ]\n    };\n  }\n}\n"
    }
  ];
}

// src/solutions/template/files/src/app/implementation/language/model/language.config.ts.ts
function getFile77() {
  return [
    ["src", "app", "implementation", "language", "model"],
    {
      name: "language.config",
      ext: "ts",
      content: "// \u53EF\u7528\u8A9E\u8A00\u6E05\u55AE\u975C\u614B\u8A2D\u5B9A\u6A94\nexport const languageList = [\n  {\n    'value': 'en_US',\n    'label': 'English'\n  },\n  {\n    'value': 'zh_CN',\n    'label': '\u7B80\u4F53'\n  },\n  {\n    'value': 'zh_TW',\n    'label': '\u7E41\u9AD4'\n  }\n];\n"
    }
  ];
}

// src/solutions/template/files/src/app/implementation/shared/shared.module.ts.ts
function getFile78() {
  return [
    ["src", "app", "implementation", "shared"],
    {
      name: "shared.module",
      ext: "ts",
      content: "import { NgModule ,ModuleWithProviders} from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { FormsModule, ReactiveFormsModule } from '@angular/forms';\nimport { Provider } from '@angular/compiler/src/core';\n\n\nimport { TranslateModule } from '@ngx-translate/core';\n\n\nimport { NzMessageModule } from 'ng-zorro-antd/message';\n\n\nconst modules = [\n  NzMessageModule\n]\n\n/**\n * \u5171\u4EAB\u6A21\u7D44\n *\n * @export\n * @class SharedModule\n */\n@NgModule({\n  imports: [\n    CommonModule,\n    FormsModule,\n    ReactiveFormsModule,\n    TranslateModule,\n    ...modules\n  ],\n  exports: [\n    CommonModule,\n    FormsModule,\n    ReactiveFormsModule,\n    TranslateModule,\n    ...modules\n  ],\n  providers: [],\n})\nexport class SharedModule {\n  static forRoot(providers: Provider[]): ModuleWithProviders<SharedModule> {\n    return {\n      ngModule: SharedModule,\n      providers: [...providers],\n    };\n  }\n }\n"
    }
  ];
}

// src/solutions/template/files/src/app/implementation/style/index.less.ts
function getFile79() {
  return [
    ["src", "app", "implementation", "style"],
    { name: "index", ext: "less", content: "@import './variable.less';\n" }
  ];
}

// src/solutions/template/files/src/app/implementation/style/variable.less.ts
function getFile80() {
  return [
    ["src", "app", "implementation", "style"],
    { name: "variable", ext: "less", content: "" }
  ];
}

// src/solutions/template/static-files.ts
var { createResultDir: createResultDir3 } = import_lowcode_code_generator9.default.utils.resultHelper;
var { runFileGenerator } = import_lowcode_code_generator9.default.utils.templateHelper;
function generateStaticFiles(root = createResultDir3(".")) {
  runFileGenerator(root, getFile);
  runFileGenerator(root, getFile2);
  runFileGenerator(root, getFile3);
  runFileGenerator(root, getFile4);
  runFileGenerator(root, getFile5);
  runFileGenerator(root, getFile6);
  runFileGenerator(root, getFile7);
  runFileGenerator(root, getFile8);
  runFileGenerator(root, getFile9);
  runFileGenerator(root, getFile10);
  runFileGenerator(root, getFile11);
  runFileGenerator(root, getFile12);
  runFileGenerator(root, getFile13);
  runFileGenerator(root, getFile14);
  runFileGenerator(root, getFile15);
  runFileGenerator(root, getFile16);
  runFileGenerator(root, getFile17);
  runFileGenerator(root, getFile18);
  runFileGenerator(root, getFile19);
  runFileGenerator(root, getFile20);
  runFileGenerator(root, getFile21);
  runFileGenerator(root, getFile22);
  runFileGenerator(root, getFile23);
  runFileGenerator(root, getFile24);
  runFileGenerator(root, getFile25);
  runFileGenerator(root, getFile26);
  runFileGenerator(root, getFile27);
  runFileGenerator(root, getFile28);
  runFileGenerator(root, getFile29);
  runFileGenerator(root, getFile30);
  runFileGenerator(root, getFile31);
  runFileGenerator(root, getFile32);
  runFileGenerator(root, getFile33);
  runFileGenerator(root, getFile34);
  runFileGenerator(root, getFile35);
  runFileGenerator(root, getFile36);
  runFileGenerator(root, getFile37);
  runFileGenerator(root, getFile38);
  runFileGenerator(root, getFile39);
  runFileGenerator(root, getFile40);
  runFileGenerator(root, getFile41);
  runFileGenerator(root, getFile42);
  runFileGenerator(root, getFile43);
  runFileGenerator(root, getFile44);
  runFileGenerator(root, getFile45);
  runFileGenerator(root, getFile46);
  runFileGenerator(root, getFile47);
  runFileGenerator(root, getFile48);
  runFileGenerator(root, getFile49);
  runFileGenerator(root, getFile50);
  runFileGenerator(root, getFile51);
  runFileGenerator(root, getFile52);
  runFileGenerator(root, getFile53);
  runFileGenerator(root, getFile54);
  runFileGenerator(root, getFile55);
  runFileGenerator(root, getFile56);
  runFileGenerator(root, getFile57);
  runFileGenerator(root, getFile58);
  runFileGenerator(root, getFile59);
  runFileGenerator(root, getFile60);
  runFileGenerator(root, getFile61);
  runFileGenerator(root, getFile62);
  runFileGenerator(root, getFile63);
  runFileGenerator(root, getFile64);
  runFileGenerator(root, getFile65);
  runFileGenerator(root, getFile66);
  runFileGenerator(root, getFile67);
  runFileGenerator(root, getFile68);
  runFileGenerator(root, getFile69);
  runFileGenerator(root, getFile70);
  runFileGenerator(root, getFile71);
  runFileGenerator(root, getFile72);
  runFileGenerator(root, getFile73);
  runFileGenerator(root, getFile74);
  runFileGenerator(root, getFile75);
  runFileGenerator(root, getFile76);
  runFileGenerator(root, getFile77);
  runFileGenerator(root, getFile78);
  runFileGenerator(root, getFile79);
  runFileGenerator(root, getFile80);
  return root;
}

// src/solutions/template/index.ts
var ajsTemplate = {
  slots: {
    components: {
      path: ["src", "app", "implementation", "programs", "components"]
    },
    pages: {
      path: ["src", "app", "implementation", "programs", "pages"]
    },
    router: {
      path: ["src", "app", "implementation", "programs", "pages"],
      fileName: "pages-routing.module"
    },
    module: {
      path: ["src", "app", "implementation", "programs", "pages"],
      fileName: "pages.module"
    },
    entry: {
      path: ["src"],
      fileName: "main"
    },
    utils: {
      path: ["src"],
      fileName: "utils"
    },
    i18n: {
      path: ["src"],
      fileName: "i18n"
    },
    globalStyle: {
      path: ["src"],
      fileName: "styles"
    },
    htmlEntry: {
      path: ["src"],
      fileName: "index"
    },
    packageJSON: {
      path: [],
      fileName: "package"
    }
  },
  generateTemplate() {
    return generateStaticFiles();
  }
};
var template_default = ajsTemplate;

// src/solutions/plugins/ajsRoutingModule.ts
var import_lowcode_code_generator10 = __toESM(require_lib());
var pluginFactory = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    next.chunks.push({
      type: import_lowcode_code_generator10.ChunkType.STRING,
      fileType: import_lowcode_code_generator10.FileType.TS,
      name: COMMON_CHUNK_NAME.ExternalDepsImport,
      content: `
        import { NgModule } from '@angular/core';
        import { Routes, RouterModule} from '@angular/router';
      `,
      linkAfter: []
    });
    if (ir && ir.deps && ir.deps.length > 0) {
      ir.deps.forEach((pkg) => {
        const fileName = pkg.exportName.toLowerCase();
        next.chunks.push({
          type: import_lowcode_code_generator10.ChunkType.STRING,
          fileType: import_lowcode_code_generator10.FileType.TS,
          name: COMMON_CHUNK_NAME.InternalDepsImport,
          content: `
            import { ${pkg.exportName}Component } from '@pages/${fileName}/${fileName}.component';
          `,
          linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
        });
      });
    }
    const firstComponent = ir.routes[0];
    next.chunks.push({
      type: import_lowcode_code_generator10.ChunkType.STRING,
      fileType: import_lowcode_code_generator10.FileType.TS,
      name: COMMON_CHUNK_NAME.FileVarDefine,
      content: `
        const routes: Routes = [
          { path: '', redirectTo: '/${firstComponent.path}', pathMatch: 'full' },
          ${ir.routes.map(
        (route) => `{
                            path: '${route.path}',
                            component: ${route.componentName}Component,
                          }
                        `
      ).join(",")}
        ];
      `,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileUtilDefine
      ]
    });
    next.chunks.push({
      type: import_lowcode_code_generator10.ChunkType.STRING,
      fileType: import_lowcode_code_generator10.FileType.TS,
      name: COMMON_CHUNK_NAME.FileExport,
      content: `
        @NgModule({
          imports: [RouterModule.forChild(routes)],
          exports: [RouterModule]
        })
        export class PagesRoutingModule { }
      `,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileUtilDefine,
        COMMON_CHUNK_NAME.FileVarDefine,
        COMMON_CHUNK_NAME.FileMainContent
      ]
    });
    return next;
  };
  return plugin;
};
var ajsRoutingModule_default = pluginFactory;

// src/solutions/plugins/ajsHtml.ts
var import_lowcode_code_generator13 = __toESM(require_lib());

// src/solutions/utils/codeForAjs.ts
var import_lodash = __toESM(require("lodash"));
var import_lowcode_types = require("@alilc/lowcode-types");
var import_lowcode_code_generator11 = __toESM(require_lib());
var import_lowcode_code_generator12 = __toESM(require_lib());
var { generateCompositeType } = import_lowcode_code_generator12.default.utils.compositeType;
var { isValidIdentifier } = import_lowcode_code_generator12.default.utils.validate;
function mergeNodeGeneratorConfig(cfg1, cfg2 = {}) {
  const resCfg = {};
  if (cfg1.handlers || cfg2.handlers) {
    resCfg.handlers = {
      ...cfg1.handlers || {},
      ...cfg2.handlers || {}
    };
  }
  if (cfg1.tagMapping || cfg2.tagMapping) {
    resCfg.tagMapping = cfg2.tagMapping || cfg1.tagMapping;
  }
  if (cfg1.attrPlugins || cfg2.attrPlugins) {
    resCfg.attrPlugins = [];
    resCfg.attrPlugins.push(...cfg2.attrPlugins || []);
    resCfg.attrPlugins.push(...cfg1.attrPlugins || []);
  }
  if (cfg1.nodePlugins || cfg2.nodePlugins) {
    resCfg.nodePlugins = [];
    resCfg.nodePlugins.push(...cfg2.nodePlugins || []);
    resCfg.nodePlugins.push(...cfg1.nodePlugins || []);
  }
  return resCfg;
}
function isPureString(v) {
  return v[0] === "'" && v[v.length - 1] === "'" || v[0] === '"' && v[v.length - 1] === '"';
}
function generateAttrValue(attrData, scope, config) {
  const valueStr = generateCompositeType(attrData.attrValue, scope, {
    handlers: config == null ? void 0 : config.handlers,
    nodeGenerator: config == null ? void 0 : config.self
  });
  return [
    {
      type: import_lowcode_code_generator11.PIECE_TYPE.ATTR,
      name: attrData.attrName,
      value: valueStr
    }
  ];
}
function generateAttr(attrName, attrValue, scope, config) {
  let pieces;
  if (config == null ? void 0 : config.attrPlugins) {
    pieces = executeFunctionStack(
      { attrName, attrValue },
      scope,
      config.attrPlugins,
      generateAttrValue,
      config
    );
  } else {
    pieces = generateAttrValue({ attrName, attrValue }, scope, config);
  }
  pieces = pieces.map((p) => {
    let newValue;
    if (p.value && isPureString(p.value)) {
      const content = getStaticExprValue(p.value);
      newValue = JSON.stringify(encodeJsxStringNode(content));
    } else {
      newValue = `{${p.value}}`;
    }
    return {
      value: `${p.name}=${newValue}`,
      type: import_lowcode_code_generator11.PIECE_TYPE.ATTR
    };
  });
  return pieces;
}
function generateAttrs(nodeItem, scope, config) {
  const { props } = nodeItem;
  let pieces = [];
  if (props) {
    if (!Array.isArray(props)) {
      Object.keys(props).forEach((propName) => {
        if (isValidIdentifier(propName)) {
          let newPropName = propName;
          if (propName === "style") {
            return;
          }
          if (propName === "className") {
            newPropName = "class";
          }
          pieces = pieces.concat(generateAttr(newPropName, props[propName], scope, config));
        }
      });
    } else {
      props.forEach((prop) => {
        if (prop.name && isValidIdentifier(prop.name) && !prop.spread) {
          pieces = pieces.concat(generateAttr(prop.name, prop.value, scope, config));
        }
      });
    }
  }
  return pieces;
}
function generateBasicNode(nodeItem, scope, config) {
  const pieces = [];
  const tagName = ((config == null ? void 0 : config.tagMapping) || import_lodash.default.identity)(nodeItem.componentName);
  pieces.push({
    value: tagName || "",
    type: import_lowcode_code_generator11.PIECE_TYPE.TAG
  });
  return pieces;
}
function generateSimpleNode(nodeItem, scope, config) {
  const basicParts = generateBasicNode(nodeItem, scope, config) || [];
  const attrParts = generateAttrs(nodeItem, scope, config) || [];
  const childrenParts = [];
  if (nodeItem.children && (config == null ? void 0 : config.self)) {
    const childrenStr = config.self(nodeItem.children, scope);
    childrenParts.push({
      type: import_lowcode_code_generator11.PIECE_TYPE.CHILDREN,
      value: childrenStr
    });
  }
  return [...basicParts, ...attrParts, ...childrenParts];
}
function linkPieces(pieces) {
  const tagsPieces = pieces.filter((p) => p.type === import_lowcode_code_generator11.PIECE_TYPE.TAG);
  if (tagsPieces.length !== 1) {
    throw new import_lowcode_code_generator11.CodeGeneratorError("Only one tag definition required", tagsPieces);
  }
  const tagName = tagsPieces[0].value;
  const beforeParts = pieces.filter((p) => p.type === import_lowcode_code_generator11.PIECE_TYPE.BEFORE).map((p) => p.value).join("");
  const afterParts = pieces.filter((p) => p.type === import_lowcode_code_generator11.PIECE_TYPE.AFTER).map((p) => p.value).join("");
  const childrenParts = pieces.filter((p) => p.type === import_lowcode_code_generator11.PIECE_TYPE.CHILDREN).map((p) => p.value).join("");
  let attrsParts = pieces.filter((p) => p.type === import_lowcode_code_generator11.PIECE_TYPE.ATTR).map((p) => p.value).join(" ");
  attrsParts = attrsParts ? ` ${attrsParts}` : "";
  if (childrenParts) {
    return `${beforeParts}<${tagName}${attrsParts}>${childrenParts}</${tagName}>${afterParts}`;
  }
  const closeTag = tagName.split(" ")[0];
  return `
            <${tagName}${attrsParts} >
              ${afterParts}
            </${closeTag}>

          `;
}
function generateNodeSchema(nodeItem, scope, config) {
  const pieces = [];
  if (config == null ? void 0 : config.nodePlugins) {
    const res = executeFunctionStack(
      nodeItem,
      scope,
      config.nodePlugins,
      generateSimpleNode,
      config
    );
    pieces.push(...res);
  } else {
    pieces.push(...generateSimpleNode(nodeItem, scope, config));
  }
  return linkPieces(pieces);
}
var handleChildren = (v) => v.join("");
function encodeJsxStringNode(str) {
  const SPECIAL_CHARS = `
\r'"<>&`;
  const SPECIAL_CHARS_REG = new RegExp(
    `[${SPECIAL_CHARS.split("").map((c) => `\\x${import_lodash.default.padStart(c.charCodeAt(0).toString(16), 2, "0")}`).join("")}]`,
    "g"
  );
  return str.replace(SPECIAL_CHARS_REG, (c) => `&#${c.charCodeAt(0)};`);
}
function getStaticExprValue(expr) {
  return Function(`"use strict";return (${expr})`)();
}
function createAjsNodeGenerator(cfg = {}) {
  const generateNode = (nodeItem, scope) => {
    if (import_lodash.default.isArray(nodeItem)) {
      const resList = nodeItem.map((n) => generateNode(n, scope));
      return handleChildren(resList);
    }
    if ((0, import_lowcode_types.isNodeSchema)(nodeItem)) {
      return generateNodeSchema(nodeItem, scope, {
        ...cfg,
        self: generateNode
      });
    }
    const valueStr = generateCompositeType(nodeItem, scope, {
      handlers: cfg.handlers,
      nodeGenerator: generateNode
    });
    if (isPureString(valueStr)) {
      return encodeJsxStringNode(getStaticExprValue(valueStr));
    }
    return `{${valueStr}}`;
  };
  return (nodeItem, scope) => unwrapJsExprQuoteInJsx(generateNode(nodeItem, scope));
}
var defaultAngularGeneratorConfig = {
  nodePlugins: []
};
function createAngularNodeGenerator(cfg) {
  const newCfg = mergeNodeGeneratorConfig(defaultAngularGeneratorConfig, cfg);
  return createAjsNodeGenerator(newCfg);
}
function traverse(node, lessClasses) {
  var _a;
  if (node.id && node.props && node.props.style) {
    const id = `#${node.id}`;
    const style = node.props.style;
    let lessClass = `${id} {
`;
    for (const [key, value] of Object.entries(style)) {
      lessClass += `  ${key}: ${value};
`;
    }
    lessClass += "}\n";
    lessClasses.push(lessClass);
  }
  if (node.children) {
    console.log(node.children);
    (_a = node.children) == null ? void 0 : _a.forEach((child) => traverse(child, lessClasses));
  }
}
function generateLessClasses(children) {
  const lessClasses = [];
  const childrenArray = Array.isArray(children) ? children : [children];
  childrenArray.forEach((child) => traverse(child, lessClasses));
  return lessClasses.join("\n");
}

// src/solutions/plugins/ajsHtml.ts
var { Scope } = import_lowcode_code_generator13.default.utils.scope;
var pluginFactory2 = (config) => {
  const cfg = {
    fileType: import_lowcode_code_generator13.FileType.HTML,
    nodeTypeMapping: {},
    ...config
  };
  const nodeTypeMapping = {
    Div: "div",
    Component: "div",
    Page: "div",
    Block: "div",
    Button: "button bm-button",
    Divider: "bm-divider",
    Icon: 'i class="icon" bmIcon [iconfont]="icon" ',
    Pagination: "bm-pagination",
    SecondTitle: "bm-second-title",
    Tabs: "bm-tabset",
    Cascader: "bm-cascader",
    CompoundSelector: "bm-cascader",
    DatePicker: "bm-date-picker",
    InputNumber: "bm-input-number",
    InputPercent: "bm-input-percent",
    InputSearch: "bm-input-search",
    OpenWindow: "bm-open-window",
    Slider: "bm-slider",
    Switch: "bm-switch ",
    TimePicker: "bm-time-picker",
    TreeSelect: "bm-tree-select",
    Collapse: "",
    ContainExplicit: "bm-contain-explicit",
    DescriptionList: "bm-description-list",
    IndicatorCard: "bm-indicator-card",
    InfoCard: "bm-info-card",
    Statistic: "bm-statistic",
    Tags: "bm-tags",
    Tree: "bm-tree",
    Alert: "bm-alert",
    Progress: "bm-progress",
    Result: "bm-result",
    Spin: "bm-spin"
  };
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const generatorPlugins = {
      tagMapping: (v) => nodeTypeMapping[v] || v
    };
    const generator = createAngularNodeGenerator(generatorPlugins);
    const ir = next.ir;
    const scope = Scope.createRootScope();
    const htmlContent = generator(ir, scope);
    next.chunks.push({
      type: import_lowcode_code_generator13.ChunkType.STRING,
      fileType: cfg.fileType,
      name: COMMON_CHUNK_NAME.HtmlContent,
      content: `
       ${htmlContent}
      `,
      linkAfter: []
    });
    return next;
  };
  return plugin;
};
var ajsHtml_default = pluginFactory2;

// src/solutions/plugins/ajsLess.ts
var import_lowcode_code_generator14 = __toESM(require_lib());
var pluginFactory3 = (config) => {
  const cfg = {
    fileType: import_lowcode_code_generator14.FileType.LESS,
    moduleFileType: import_lowcode_code_generator14.FileType.TS,
    ...config
  };
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    let lessClasses;
    if (ir.children) {
      lessClasses = generateLessClasses(ir.children);
    }
    next.chunks.push({
      type: import_lowcode_code_generator14.ChunkType.STRING,
      fileType: cfg.fileType,
      name: COMMON_CHUNK_NAME.StyleCssContent,
      content: `
         :host {
            ${ir.css}
            
            ${lessClasses}
         }



      
      `,
      linkAfter: [COMMON_CHUNK_NAME.StyleDepsImport]
    });
    return next;
  };
  return plugin;
};
var ajsLess_default = pluginFactory3;

// src/solutions/plugins/ajsEntryHtml.ts
var import_lowcode_code_generator15 = __toESM(require_lib());
var pluginFactory4 = () => {
  const plugin = async (pre) => {
    var _a;
    const next = {
      ...pre
    };
    const ir = next.ir;
    next.chunks.push({
      type: import_lowcode_code_generator15.ChunkType.STRING,
      fileType: import_lowcode_code_generator15.FileType.HTML,
      name: COMMON_CHUNK_NAME.HtmlContent,
      content: `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>${((_a = ir == null ? void 0 : ir.meta) == null ? void 0 : _a.name) || "Demo App"}</title>
          <base href="/">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="icon" type="image/x-icon" href="favicon.ico">
          <meta name="theme-color" content="#1976d2">
          <script>
            // TODO\uFF1AChrome 80 Bug\u9020\u6210\u4E0D\u5B9A\u6642\u51FA\u73FEform\u7684error
            // \u66AB\u89E3\uFF1A\u8986\u5BEBreduce\uFF0Chttps://github.com/angular/angular/issues/35219
            (function () {
              const arrayReduce = Array.prototype.reduce;
              let callback;
              Object.defineProperty(Array.prototype, 'reduce', {
                value: function (cb, ...args) {
                  callback = cb;
                  return arrayReduce.call(this, callback, ...args);
                }
              });
            })();
          <\/script>
        </head>
        <body>
          <app-root></app-root>
          <script>
            // \u8F09\u5165\u5E73\u53F0JavaScript
            var dwScript = document.createElement('script');
            dwScript.src = './assets/dw-framework/dw-index.js?dwTime=' + new Date().getTime();

            if (document.head) {
              document.head.appendChild(dwScript);
            } else { // IE8
              document.getElementsByTagName('head')[0].appendChild(dwScript);
            }
          <\/script>
        </body>
      </html>
      `,
      linkAfter: []
    });
    return next;
  };
  return plugin;
};
var ajsEntryHtml_default = pluginFactory4;

// src/solutions/plugins/ajsCommonDeps.ts
var import_lowcode_code_generator16 = __toESM(require_lib());
var pluginFactory5 = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    next.chunks.push({
      type: import_lowcode_code_generator16.ChunkType.STRING,
      fileType: import_lowcode_code_generator16.FileType.TS,
      name: COMMON_CHUNK_NAME.ExternalDepsImport,
      content: `
       import { Component, OnInit } from '@angular/core';
      `,
      linkAfter: []
    });
    return next;
  };
  return plugin;
};
var ajsCommonDeps_default = pluginFactory5;

// src/solutions/plugins/ajsGlobalStyle.ts
var import_lowcode_code_generator17 = __toESM(require_lib());
var pluginFactory6 = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    next.chunks.push({
      type: import_lowcode_code_generator17.ChunkType.STRING,
      fileType: import_lowcode_code_generator17.FileType.LESS,
      name: COMMON_CHUNK_NAME.StyleDepsImport,
      content: `
        /* You can add global styles to this file; and also import other style files */
        // Third Library

        // \u5E73\u53F0UI\u5957\u4EF6
        @import '~ng-quicksilver/src/ng-quicksilver.less';
        @import './app/style.less';
        // @import './src/app/theme/theme-green.less';
        // @import './src/app/theme/theme-green.less';
        @import '~ag-grid-community/dist/styles/ag-grid.css';
        @import '~ag-grid-community/dist/styles/ag-theme-alpine.css';
        @import '~ag-grid-community/dist/styles/ag-theme-material.css';
        @import '~ag-grid-community/dist/styles/ag-theme-balham.css';
        @import '~ag-grid-community/dist/styles/ag-theme-balham-dark.css';
        // @import "~ng-zorro-antd/ng-zorro-antd.less";
      `,
      linkAfter: []
    });
    next.chunks.push({
      type: import_lowcode_code_generator17.ChunkType.STRING,
      fileType: import_lowcode_code_generator17.FileType.LESS,
      name: COMMON_CHUNK_NAME.StyleCssContent,
      content: `
        .ag-theme-alpine {
          @include ag-theme-alpine((
              odd-row-background-color: #CFD8DC
          ))
        }
      `,
      linkAfter: [COMMON_CHUNK_NAME.StyleDepsImport]
    });
    next.chunks.push({
      type: import_lowcode_code_generator17.ChunkType.STRING,
      fileType: import_lowcode_code_generator17.FileType.LESS,
      name: COMMON_CHUNK_NAME.StyleCssContent,
      content: ir.css || "",
      linkAfter: [COMMON_CHUNK_NAME.StyleDepsImport]
    });
    return next;
  };
  return plugin;
};
var ajsGlobalStyle_default = pluginFactory6;

// src/solutions/plugins/ajsPacJson.ts
var import_lowcode_code_generator18 = __toESM(require_lib());
var import_lowcode_code_generator19 = __toESM(require_lib());
var { buildDataSourceDependencies } = import_lowcode_code_generator19.default.utils.dataSource;
var pluginFactory7 = (cfg) => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    const packageJson = {
      name: (cfg == null ? void 0 : cfg.packageName) || "ajs-demo-app",
      version: (cfg == null ? void 0 : cfg.packageVersion) || "0.0.0",
      description: "",
      scripts: {
        "postinstall": "npx patch-package@6.5.1 && ngcc",
        "ng": "ng",
        "start": "node  ./node_modules/@angular/cli/bin/ng serve --port 4211 --open",
        "start-prod": "ng serve --configuration production",
        "build": "ng build",
        "test": "node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng test",
        "framework-test": "ng test @webdpt/framework --code-coverage --watch",
        "components-test": "ng test @webdpt/components --code-coverage --watch",
        "mfa-app-test": "ng test @webdpt/mfa-app --code-coverage --watch",
        "lint": "ng lint ng-webdpt",
        "e2e": "ng e2e",
        "buildCss": "node themeCssBuild",
        "generate-i18n-files": "ngx-translate-extract -i ./src -o ./src/i18n/default-en.json --clean --sort --format namespaced-json",
        "build-prod": "node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build --configuration production && node projects/webdpt/builds/replace-sw.js && npm run dw-zip",
        "doc:build": "compodoc -p src/tsconfig.app.json -d ./doc",
        "doc:serve": "compodoc -s -r 4201 -d ./doc",
        "doc:buildandserve": "compodoc -p ./tsconfig.json -s -r 4201 -d ./doc",
        "sonar": "sonar-scanner",
        "gmc": "node projects/webdpt/builds/generate.js",
        "dw-zip": "node projects/webdpt/builds/dw-zip.js",
        "run:all": "node node_modules/@angular-architects/module-federation/src/server/mf-dev-server.js"
      },
      private: true,
      dependencies: {
        "@angular-architects/module-federation": "12.5.3",
        "@angular-architects/module-federation-tools": "12.5.3",
        "@angular-devkit/architect": "0.1202.16",
        "@angular/animations": "12.2.16",
        "@angular/cdk": "^12.1.0",
        "@angular/common": "12.2.16",
        "@angular/compiler": "12.2.16",
        "@angular/core": "12.2.16",
        "@angular/forms": "12.2.16",
        "@angular/material": "12.2.13",
        "@angular/platform-browser": "12.2.16",
        "@angular/platform-browser-dynamic": "12.2.16",
        "@angular/router": "12.2.16",
        "@angular/service-worker": "12.2.16",
        "@ant-design/icons-angular": "^12.0.3",
        "@docgeni/cli": "2.0.1",
        "@docgeni/template": "2.0.1",
        "@ngtools/webpack": "^18.2.3",
        "@ngx-translate/core": "^13.0.0",
        "@ngx-translate/http-loader": "^6.0.0",
        "@types/requirejs": "^2.1.31",
        "@webdpt/analytics": "5.2.0-1006",
        "@webdpt/athena-framework": "5.2.11-1000",
        "@webdpt/components": "5.2.0-1006",
        "@webdpt/framework": "5.2.0-1006",
        "@webdpt/framework-js": "5.2.11-1000",
        "@webdpt/iv-viewer": "2.0.1",
        "@webdpt/mfa-app": "^5.2.0-1006",
        "@webdpt/mfa-utils": "^5.2.0-1006",
        "@webdpt/programs": "5.2.0-1006",
        "ag-grid-angular": "^26.0.0",
        "ag-grid-community": "^26.0.0",
        "ag-grid-enterprise": "^26.0.0",
        "angular-gridster2": "^12.0.0",
        "angular-in-memory-web-api": "^0.9.0",
        "angular-split": "^3.0.3",
        "angular2-uuid": "^1.1.1",
        "bignumber.js": "^9.0.1",
        "classlist.js": "1.1.20150312",
        "core-js": "^3.8.0",
        "crypto-js": "^3.1.9-1",
        "date-fns": "^2.10.0",
        "dayjs": "^1.10.4",
        "echarts": "^5.5.1",
        "exceljs": "^4.4.0",
        "fast-deep-equal": "^3.1.3",
        "file-loader": "6.0.0",
        "file-saver": "^2.0.5",
        "jsencrypt": "^3.0.0-rc.1",
        "jsonpath": "^1.0.2",
        "moment": "2.24.0",
        "ng-quicksilver": "https://repo.digiwincloud.com.cn/maven/repository/npm-webdpt/ng-quicksilver/-/ng-quicksilver-12.1.1-1000.tgz",
        "ng-zorro-antd": "https://repo.digiwincloud.com.cn/maven/repository/npm-webdpt/ng-zorro-antd/-/ng-zorro-antd-12.1.1-1000.tgz",
        "ngx-color": "5.1.3",
        "ngx-echarts": "^4.2.2",
        "ngx-highlightjs": "^2.1.1",
        "ngx-image-cropper": "^4.0.0",
        "ngx-mask": "^12.0.0",
        "paho-mqtt": "^1.1.0",
        "qrcode": "^1.5.3",
        "resize-observer-polyfill": "^1.5.1",
        "rrule": "2.6.0",
        "rxjs": "~6.6.0",
        "sonarqube-scanner": "^2.4.1",
        "systemjs": "^6.15.1",
        "tslib": "^2.3.0",
        "tslint-sonarts": "^1.9.0",
        "web-animations-js": "^2.3.2",
        "xlsx": "^0.16.4",
        ...buildDataSourceDependencies(ir, cfg == null ? void 0 : cfg.datasourceConfig)
      },
      devDependencies: {
        "@angular/material": "12.2.13",
        "@angular-devkit/build-angular": "12.2.16",
        "@angular-devkit/core": "12.2.16",
        "@angular-devkit/schematics": "12.2.16",
        "@angular-devkit/schematics-cli": "12.2.16",
        "@angular-eslint/builder": "^12.7.0",
        "@angular-eslint/eslint-plugin": "^12.7.0",
        "@angular-eslint/eslint-plugin-template": "^12.7.0",
        "@angular-eslint/schematics": "^12.7.0",
        "@angular-eslint/template-parser": "^12.7.0",
        "@angular/cli": "12.2.16",
        "@angular/compiler-cli": "12.2.16",
        "@angular/language-service": "12.2.16",
        "@biesbjerg/ngx-translate-extract": "^2.3.4",
        "@compodoc/compodoc": "^1.1.3",
        "@phenomnomnominal/tsquery": "^4.1.0",
        "@schematics/angular": "12.2.16",
        "@schematics/update": "0.1102.12",
        "@types/jasmine": "~3.6.0",
        "@types/jasminewd2": "~2.0.3",
        "@types/node": "^12.11.1",
        "@typescript-eslint/eslint-plugin": "4.28.2",
        "@typescript-eslint/parser": "4.28.2",
        "@webdpt/schematics": "5.2.0-1006",
        "archiver": "5.3.1",
        "codelyzer": "^6.0.0",
        "commander": "^5.1.0",
        "jsstore": "^4.3.7",
        "cpx": "^1.5.0",
        "css-loader": "^6.10.0",
        "eslint": "^7.26.0",
        "inquirer": "^7.3.0",
        "jasmine-core": "~3.8.0",
        "jasmine-spec-reporter": "~5.0.0",
        "karma": "~6.3.15",
        "karma-chrome-launcher": "~3.1.0",
        "karma-coverage": "~2.0.3",
        "karma-jasmine": "~4.0.0",
        "karma-jasmine-html-reporter": "^1.5.0",
        "less": "^3.10.3",
        "ng-packagr": "^12.1.1",
        "ngx-build-plus": "12.2.0",
        "protractor": "~7.0.0",
        "raw-loader": "0.5.1",
        "style-loader": "^3.3.4",
        "ts-node": "~7.0.0",
        "tslib": "^2.0.0",
        "tslint": "~6.1.0",
        "typescript": "~4.3.5",
        "webpack-bundle-analyzer": "^3.7.0",
        "zone.js": "~0.11.4"
      },
      ideMode: {
        name: "ice-react"
      },
      iceworks: {
        type: "react",
        adapter: "adapter-react-v3"
      },
      engines: {
        node: ">=8.0.0"
      },
      originTemplate: "@alifd/scaffold-lite-js"
    };
    ir.packages.forEach((packageInfo) => {
      packageJson.dependencies[packageInfo.package] = packageInfo.version;
    });
    next.chunks.push({
      type: import_lowcode_code_generator18.ChunkType.JSON,
      fileType: import_lowcode_code_generator18.FileType.JSON,
      name: COMMON_CHUNK_NAME.FileMainContent,
      content: packageJson,
      linkAfter: []
    });
    return next;
  };
  return plugin;
};
var ajsPacJson_default = pluginFactory7;

// src/solutions/plugins/ajsContentClass.ts
var import_change_case3 = __toESM(require("change-case"));

// src/solutions/plugins/const.ts
var ANGULAR_CHUNK_NAME = {
  ClassOnInitStart: "ReactComponentClassOnIniStart",
  ClassOnInitEnd: "ReactComponentClassOnIniEnd",
  ClassOnInitContent: "ReactComponentClassOnIniContent"
};

// src/solutions/plugins/ajsContentClass.ts
var import_lowcode_code_generator20 = __toESM(require_lib());
var { ensureValidClassName: ensureValidClassName2 } = import_lowcode_code_generator20.default.utils.validate;
var pluginFactory8 = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    const componentClassName = ensureValidClassName2(
      `${import_change_case3.default.pascalCase(ir.moduleName)}`
    );
    next.chunks.push({
      type: import_lowcode_code_generator20.ChunkType.STRING,
      fileType: import_lowcode_code_generator20.FileType.TS,
      name: CLASS_DEFINE_CHUNK_NAME.Start,
      content: `
          @Component({
            selector: 'app-${ir.fileName}',
            templateUrl: './${ir.fileName}.component.html',
            styleUrls: ['./${ir.fileName}.component.less'],
          })
          export class ${componentClassName}  implements OnInit {
      `,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.FileVarDefine,
        COMMON_CHUNK_NAME.FileUtilDefine
      ]
    });
    next.chunks.push({
      type: import_lowcode_code_generator20.ChunkType.STRING,
      fileType: import_lowcode_code_generator20.FileType.TS,
      name: CLASS_DEFINE_CHUNK_NAME.ConstructorStart,
      content: "constructor() { ; ",
      linkAfter: [
        CLASS_DEFINE_CHUNK_NAME.Start,
        CLASS_DEFINE_CHUNK_NAME.StaticVar,
        CLASS_DEFINE_CHUNK_NAME.StaticMethod,
        CLASS_DEFINE_CHUNK_NAME.InsVar,
        CLASS_DEFINE_CHUNK_NAME.InsVarMethod
      ]
    });
    next.chunks.push({
      type: import_lowcode_code_generator20.ChunkType.STRING,
      fileType: import_lowcode_code_generator20.FileType.TS,
      name: CLASS_DEFINE_CHUNK_NAME.ConstructorEnd,
      content: "}",
      linkAfter: [
        CLASS_DEFINE_CHUNK_NAME.ConstructorStart,
        CLASS_DEFINE_CHUNK_NAME.ConstructorContent
      ]
    });
    next.chunks.push({
      type: import_lowcode_code_generator20.ChunkType.STRING,
      fileType: import_lowcode_code_generator20.FileType.TS,
      name: ANGULAR_CHUNK_NAME.ClassOnInitStart,
      content: "ngOnInit() {",
      linkAfter: [
        CLASS_DEFINE_CHUNK_NAME.Start,
        CLASS_DEFINE_CHUNK_NAME.StaticVar,
        CLASS_DEFINE_CHUNK_NAME.StaticMethod,
        CLASS_DEFINE_CHUNK_NAME.InsVar,
        CLASS_DEFINE_CHUNK_NAME.InsVarMethod,
        CLASS_DEFINE_CHUNK_NAME.InsMethod,
        CLASS_DEFINE_CHUNK_NAME.ConstructorEnd
      ]
    });
    next.chunks.push({
      type: import_lowcode_code_generator20.ChunkType.STRING,
      fileType: import_lowcode_code_generator20.FileType.TS,
      name: ANGULAR_CHUNK_NAME.ClassOnInitEnd,
      content: "}",
      linkAfter: [
        ANGULAR_CHUNK_NAME.ClassOnInitContent,
        ANGULAR_CHUNK_NAME.ClassOnInitStart
      ]
    });
    next.chunks.push({
      type: import_lowcode_code_generator20.ChunkType.STRING,
      fileType: import_lowcode_code_generator20.FileType.TS,
      name: CLASS_DEFINE_CHUNK_NAME.End,
      content: "}",
      linkAfter: [
        CLASS_DEFINE_CHUNK_NAME.Start,
        CLASS_DEFINE_CHUNK_NAME.StaticVar,
        CLASS_DEFINE_CHUNK_NAME.StaticMethod,
        CLASS_DEFINE_CHUNK_NAME.InsVar,
        CLASS_DEFINE_CHUNK_NAME.InsVarMethod,
        CLASS_DEFINE_CHUNK_NAME.InsMethod,
        CLASS_DEFINE_CHUNK_NAME.ConstructorEnd,
        ANGULAR_CHUNK_NAME.ClassOnInitEnd
      ]
    });
    return next;
  };
  return plugin;
};
var ajsContentClass_default = pluginFactory8;

// src/solutions/plugins/ajsPrettier.ts
var import_prettier = __toESM(require("prettier"));
var import_parser_babel = __toESM(require("prettier/parser-babel"));
var import_parser_postcss = __toESM(require("prettier/parser-postcss"));
var import_parser_html = __toESM(require("prettier/parser-html"));
var PARSERS = ["css", "scss", "less", "json", "html", "vue"];
var factory = (config) => {
  const cfg = {
    customFileTypeParser: {},
    ...config
  };
  const codePrettier = (content, fileType) => {
    let parser;
    if (fileType === "js" || fileType === "jsx" || fileType === "ts" || fileType === "tsx") {
      parser = "babel-ts";
    } else if (fileType === "json") {
      parser = "json-stringify";
    } else if (PARSERS.indexOf(fileType) >= 0) {
      parser = fileType;
    } else if (cfg.customFileTypeParser[fileType]) {
      parser = cfg.customFileTypeParser[fileType];
    } else {
      return content;
    }
    return import_prettier.default.format(content, {
      parser,
      plugins: [import_parser_babel.default, import_parser_postcss.default, import_parser_html.default, ...cfg.plugins || []],
      singleQuote: true,
      jsxSingleQuote: false
    });
  };
  return codePrettier;
};
var ajsPrettier_default = factory;

// src/solutions/plugins/ajsPageModule.ts
var import_lowcode_code_generator21 = __toESM(require_lib());

// src/solutions/map/bmCustom.ts
var BmModuleMap = {
  Button: "BmButtonModule",
  Divider: "BmDividerModule",
  Icon: "BmIconModule",
  Dropdown: "BmDropdownModule",
  Pagination: "BmPaginationModule",
  SecondTitle: "BmSecondTitleModule",
  Form: "BmFormModule",
  Cascader: "BmCascaderModule",
  Checkbox: "BmCheckboxModule",
  CompoundSelector: "BmCompoundSelectorModule",
  DatePicker: "BmDatePickerModule",
  Input: "BmInputModule",
  InputNumber: "BmInputNumberModule",
  InputPercent: "BmInputPercentModule",
  InputSearch: "BmInputSearchModule",
  OpenWindow: "BmOpenWindowModule",
  Radio: "BmRadioModule",
  Select: "BmSelectModule",
  Slider: "BmSliderModule",
  Switch: "BmSwitchModule",
  TimePicker: "BmTimePickerModule",
  TreeSelect: "BmTreeSelectModule",
  Collapse: "BmCollapseModule",
  ContainExplicit: "BmContainExplicitModule",
  DescriptionList: "BmDescriptionListModule",
  IndicatorCard: "BmIndicatorCardModule",
  Popover: "BmPopoverModule",
  Statistic: "BmStatisticModule",
  Tags: "BmTagsModule",
  Timeline: "BmTimelineModule",
  Tooltip: "BmTooltipModule",
  Tree: "BmTreeModule",
  Alert: "BmAlertModule",
  Drawer: "BmDrawerModule",
  Message: "BmMessageModule",
  Modal: "BmModalModule",
  Popconfirm: "BmPopconfirmModule",
  Progress: "BmProgressModule",
  Result: "BmResultModule",
  Spin: "BmSpinModule"
};

// src/solutions/plugins/ajsPageModule.ts
var pluginFactory9 = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    next.chunks.push({
      type: import_lowcode_code_generator21.ChunkType.STRING,
      fileType: import_lowcode_code_generator21.FileType.TS,
      name: COMMON_CHUNK_NAME.ExternalDepsImport,
      content: `
        import { NgModule } from '@angular/core';
        import { CommonModule } from '@angular/common';
        import { SharedModule } from '../../shared/shared.module';
      `,
      linkAfter: []
    });
    next.chunks.push({
      type: import_lowcode_code_generator21.ChunkType.STRING,
      fileType: import_lowcode_code_generator21.FileType.TS,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: `
        import { PagesRoutingModule } from './pages-routing.module';
      `,
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
    });
    const componentList = [];
    const fileNameList = [];
    if (ir && ir.deps && ir.deps.length > 0) {
      ir.deps.forEach((pkg) => {
        const exportName = pkg.exportName;
        const componentName = `${exportName}Component`;
        const fileName = exportName.toLowerCase();
        componentList.push(componentName);
        fileNameList.push(fileName);
      });
    }
    ;
    const componentModuleList = [];
    if (ir.moduleDeps.length > 0) {
      ir.moduleDeps.forEach((pkg) => {
        componentModuleList.push({
          module: BmModuleMap[pkg.exportName],
          package: pkg.package,
          main: (pkg == null ? void 0 : pkg.main) || ""
        });
      });
    }
    if (componentModuleList.length > 0) {
      componentModuleList.forEach((i) => {
        if (i.module) {
          next.chunks.push({
            type: import_lowcode_code_generator21.ChunkType.STRING,
            fileType: import_lowcode_code_generator21.FileType.TS,
            name: COMMON_CHUNK_NAME.InternalDepsImport,
            content: `
              import { ${i.module} } from '${i.package}/${i.main}';
            `,
            linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
          });
        }
      });
    }
    if (fileNameList.length > 0) {
      fileNameList.forEach((i) => {
        const componentName = i.charAt(0).toUpperCase() + i.slice(1);
        next.chunks.push({
          type: import_lowcode_code_generator21.ChunkType.STRING,
          fileType: import_lowcode_code_generator21.FileType.TS,
          name: COMMON_CHUNK_NAME.InternalDepsImport,
          content: `
            import { ${componentName}Component } from './${i}/${i}.component';
          `,
          linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
        });
      });
    }
    next.chunks.push({
      type: import_lowcode_code_generator21.ChunkType.STRING,
      fileType: import_lowcode_code_generator21.FileType.TS,
      name: COMMON_CHUNK_NAME.FileMainContent,
      content: `
      @NgModule({
        imports: [
          CommonModule,
          SharedModule,
          PagesRoutingModule,
          ${componentModuleList.map((i) => {
        return i.module || "";
      }).join(",")}
        ],
        declarations: [${componentList.join(",")}],
      })
     
      `,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileUtilDefine,
        COMMON_CHUNK_NAME.FileVarDefine
      ]
    });
    next.chunks.push({
      type: import_lowcode_code_generator21.ChunkType.STRING,
      fileType: import_lowcode_code_generator21.FileType.TS,
      name: COMMON_CHUNK_NAME.FileExport,
      content: `
        export class PagesModule { }
      `,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileUtilDefine,
        COMMON_CHUNK_NAME.FileVarDefine,
        COMMON_CHUNK_NAME.FileMainContent
      ]
    });
    return next;
  };
  return plugin;
};
var ajsPageModule_default = pluginFactory9;

// src/solutions/ajs.ts
function createIceJsProjectBuilder(options) {
  return createProjectBuilder({
    inStrictMode: options == null ? void 0 : options.inStrictMode,
    extraContextData: { ...options },
    template: template_default,
    plugins: {
      components: [
        ajsCommonDeps_default(),
        ajsContentClass_default(),
        ajsLess_default(),
        ajsHtml_default()
      ],
      pages: [
        ajsCommonDeps_default(),
        ajsContentClass_default(),
        ajsLess_default(),
        ajsHtml_default()
      ],
      router: [ajsRoutingModule_default()],
      module: [ajsPageModule_default()],
      globalStyle: [ajsGlobalStyle_default()],
      htmlEntry: [ajsEntryHtml_default()],
      packageJSON: [ajsPacJson_default()]
    },
    postProcessors: [ajsPrettier_default()],
    customizeBuilderOptions: options == null ? void 0 : options.customizeBuilderOptions
  });
}
var plugins = {
  router: ajsRoutingModule_default,
  ajsHtml: ajsHtml_default,
  ajsLess: ajsLess_default,
  ajsEntryHtml: ajsEntryHtml_default,
  ajsCommonDeps: ajsCommonDeps_default,
  ajsGlobalStyle: ajsGlobalStyle_default,
  ajsPacJson: ajsPacJson_default,
  ajsPageModule: ajsPageModule_default,
  ajsContentClass: ajsContentClass_default,
  ajsPrettier: ajsPrettier_default
};

// src/index.ts
var src_default = {
  createProjectBuilder,
  createModuleBuilder,
  ajs: createIceJsProjectBuilder,
  plugins: {
    ajs: {
      ...plugins
    },
    angular: {
      ...plugins
    }
  },
  chunkNames: {
    COMMON_CHUNK_NAME,
    CLASS_DEFINE_CHUNK_NAME,
    ANGULAR_CHUNK_NAME
  },
  defaultLinkAfter: {
    COMMON_DEFAULT_LINK_AFTER: DEFAULT_LINK_AFTER
  },
  constants: const_exports
};

// src/cli/run.ts
async function run(args, options) {
  try {
    const schemaFile = options.input || args[0];
    if (!schemaFile) {
      throw new Error(
        "a schema file must be specified by `--input <schema.json>` or by the first positional argument"
      );
    }
    if (options.input && args.length > 0 || args.length > 1) {
      throw new Error(
        "only one schema file can be specified, either by `--input <schema.json>` or by the first positional argument"
      );
    }
    let solutionOptions = {};
    if (options.solutionOptions) {
      try {
        solutionOptions = JSON.parse(options.solutionOptions);
      } catch (err) {
        throw new Error(
          `solution options parse error, error message is "${err.message}"`
        );
      }
    }
    const schema = await loadSchemaFile(schemaFile);
    const createProjectBuilder2 = src_default.ajs;
    const builder = createProjectBuilder2(solutionOptions);
    const generatedSourceCodes = await builder.generateProject(schema);
    const publisher = import_lowcode_code_generator22.default.publishers.disk();
    await publisher.publish({
      project: generatedSourceCodes,
      outputPath: options.output || "generated",
      projectSlug: "example",
      createProjectFolder: false
    });
    return 0;
  } catch (e) {
    console.log(import_chalk.default.red(getErrorMessage(e) || `Unexpected error: ${e}`));
    if (typeof e === "object" && (e == null ? void 0 : e.stack) && options.verbose) {
      console.log(import_chalk.default.gray(e.stack));
    }
    return 1;
  }
}
async function loadSchemaFile(schemaFile) {
  if (!schemaFile) {
    throw new Error("invalid schema file name");
  }
  const schemaFileContent = await fs.readFile(schemaFile, "utf8");
  if (/\.json5/.test(schemaFile)) {
    return import_json5.default.parse(schemaFileContent);
  }
  return import_jsonc.jsonc.parse(schemaFileContent);
}

// src/cli/init-solution.ts
var fs2 = __toESM(require("fs-extra"));
var path = __toESM(require("path"));
var import_chalk2 = __toESM(require("chalk"));
var changeCase4 = __toESM(require("change-case"));

// src/cli/solutions/example-ajs-solution.ts
function getLowcodeSolutionTemplateFiles() {
  return [
    {
      file: ".editorconfig",
      content: `root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
quote_type = single

[*.md]
trim_trailing_whitespace = false
`
    },
    {
      file: ".eslintignore",
      content: `# \u5FFD\u7565\u76EE\u5F55
node_modules/
build/
dist/
test-cases/
test/
tests/
output/
es/
lib/
coverage/

# \u5FFD\u7565\u6587\u4EF6
**/*.min.js
**/*-min.js
**/*.bundle.js
`
    },
    {
      file: ".eslintrc.js",
      content: `module.exports = {
  extends: 'eslint-config-ali/typescript/react',
  rules: {
    'max-len': ['error', { code: 200 }],
    'comma-dangle': 0,
  },
};
`
    },
    {
      file: ".gitignore",
      content: `# project custom
build
es
lib
dist
output
package-lock.json
deploy-space/packages
deploy-space/.env
generated

# IDE
.vscode
.idea

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock


# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release
lib

# Dependency directories
node_modules/
jspm_packages/

# TypeScript v1 declaration files
typings/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
.env.test

# parcel-bundler cache (https://parceljs.org/)
.cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# mac config files
.DS_Store

# codealike
codealike.json
.node
`
    },
    {
      file: ".prettierignore",
      content: "/test-cases/"
    },
    {
      file: ".prettierrc",
      content: `{
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "es5"
}
`
    },
    {
      file: "CHANGELOG.md",
      content: ""
    },
    {
      file: "CONTRIBUTING.md",
      content: `# \u6B22\u8FCE\u5171\u5EFA

# \u6CE8\u610F

- \u6CE8\u610F\u89E3\u51B3 eslint \u95EE\u9898
- \u6CE8\u610F\u4EE3\u7801\u683C\u5F0F\u5316 -- \u5EFA\u8BAE\u5B89\u88C5 prettier \u63D2\u4EF6
- \u53D1\u5E03\u524D\u6CE8\u610F\u8981\u8DD1\u901A demo \u548C\u6240\u6709\u7684\u5355\u6D4B

## \u672C\u5730\u8C03\u8BD5\u8FD0\u884C Demo

\`\`\`sh
> npm run demo
\`\`\`

## \u672C\u5730\u8DD1\u5355\u6D4B

\`\`\`sh
> npm test
\`\`\`
`
    },
    {
      file: "README.md",
      content: `# \u4F4E\u4EE3\u7801\u51FA\u7801\u81EA\u5B9A\u4E49\u65B9\u6848\u4E4B Hello World

## \u76F4\u63A5\u6267\u884C

\`\`\`sh
> npx ali-lowcode-solution-hello-world demo-schema.json
\`\`\`

## \u672C\u5730\u8C03\u8BD5\u8FD0\u884C Demo

\`\`\`sh
> npm run demo
\`\`\`
`
    },
    {
      file: "demo-schema.json",
      content: `{
  "version": "1.0.0",
  "componentsMap": [
    {
      "componentName": "Button",
      "package": "@alifd/next",
      "version": "1.19.18",
      "destructuring": true,
      "exportName": "Button"
    },
    {
      "componentName": "Button.Group",
      "package": "@alifd/next",
      "version": "1.19.18",
      "destructuring": true,
      "exportName": "Button",
      "subName": "Group"
    },
    {
      "componentName": "Input",
      "package": "@alifd/next",
      "version": "1.19.18",
      "destructuring": true,
      "exportName": "Input"
    },
    {
      "componentName": "Form",
      "package": "@alifd/next",
      "version": "1.19.18",
      "destructuring": true,
      "exportName": "Form"
    },
    {
      "componentName": "Form.Item",
      "package": "@alifd/next",
      "version": "1.19.18",
      "destructuring": true,
      "exportName": "Form",
      "subName": "Item"
    },
    {
      "componentName": "NumberPicker",
      "package": "@alifd/next",
      "version": "1.19.18",
      "destructuring": true,
      "exportName": "NumberPicker"
    },
    {
      "componentName": "Select",
      "package": "@alifd/next",
      "version": "1.19.18",
      "destructuring": true,
      "exportName": "Select"
    }
  ],
  "componentsTree": [
    {
      "componentName": "Page",
      "id": "node$1",
      "meta": {
        "title": "\u6D4B\u8BD5",
        "router": "/"
      },
      "props": {
        "ref": "outterView",
        "autoLoading": true
      },
      "fileName": "test",
      "state": {
        "text": "outter"
      },
      "lifeCycles": {
        "componentDidMount": {
          "type": "JSFunction",
          "value": "function componentDidMount() {\\n  console.log('componentDidMount');\\n}"
        }
      },
      "methodsModule": {
        "type": "JSModule",
        "source": "export function helloWorld() {\\n  console.log('Hello world!');\\n}\\n"
      },
      "dataSource": {
        "list": [
          {
            "id": "urlParams",
            "type": "urlParams"
          },

          {
            "id": "user",
            "type": "fetch",
            "options": {
              "method": "GET",
              "uri": "https://shs.xxx.com/mock/1458/demo/user",
              "isSync": true
            },
            "dataHandler": {
              "type": "JSExpression",
              "value": "function (response) {\\nif (!response.data.success){\\n    throw new Error(response.data.message);\\n  }\\n  return response.data.data;\\n}"
            }
          },

          {
            "id": "orders",
            "type": "fetch",
            "options": {
              "method": "GET",
              "uri": "https://shs.xxx.com/mock/1458/demo/orders",
              "isSync": true
            },
            "dataHandler": {
              "type": "JSExpression",
              "value": "function (response) {\\nif (!response.data.success){\\n    throw new Error(response.data.message);\\n  }\\n  return response.data.data.result;\\n}"
            }
          }
        ],
        "dataHandler": {
          "type": "JSExpression",
          "value": "function (dataMap) {\\n  console.info(\\"All datasources loaded:\\", dataMap);\\n}"
        }
      },
      "children": [
        {
          "componentName": "Form",
          "id": "node$2",
          "props": {
            "labelCol": {
              "type": "JSExpression",
              "value": "this.state.colNum"
            },
            "style": {},
            "ref": "testForm"
          },
          "children": [
            {
              "componentName": "Form.Item",
              "id": "node$3",
              "props": {
                "label": "\u59D3\u540D\uFF1A",
                "name": "name",
                "initValue": "\u674E\u96F7"
              },
              "children": [
                {
                  "componentName": "Input",
                  "id": "node$4",
                  "props": {
                    "placeholder": "\u8BF7\u8F93\u5165",
                    "size": "medium",
                    "style": {
                      "width": 320
                    }
                  }
                }
              ]
            },
            {
              "componentName": "Form.Item",
              "id": "node$5",
              "props": {
                "label": "\u5E74\u9F84\uFF1A",
                "name": "age",
                "initValue": "22"
              },
              "children": [
                {
                  "componentName": "NumberPicker",
                  "id": "node$6",
                  "props": {
                    "size": "medium",
                    "type": "normal"
                  }
                }
              ]
            },
            {
              "componentName": "Form.Item",
              "id": "node$7",
              "props": {
                "label": "\u804C\u4E1A\uFF1A",
                "name": "profession"
              },
              "children": [
                {
                  "componentName": "Select",
                  "id": "node$8",
                  "props": {
                    "dataSource": [
                      {
                        "label": "\u6559\u5E08",
                        "value": "t"
                      },
                      {
                        "label": "\u533B\u751F",
                        "value": "d"
                      },
                      {
                        "label": "\u6B4C\u624B",
                        "value": "s"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "componentName": "Div",
              "id": "node$9",
              "props": {
                "style": {
                  "textAlign": "center"
                }
              },
              "children": [
                {
                  "componentName": "Button.Group",
                  "id": "node$a",
                  "props": {},
                  "children": [
                    {
                      "componentName": "Button",
                      "id": "node$b",
                      "condition": {
                        "type": "JSExpression",
                        "value": "this.index >= 1"
                      },
                      "loop": ["a", "b", "c"],
                      "props": {
                        "type": "primary",
                        "style": {
                          "margin": "0 5px 0 5px"
                        }
                      },
                      "children": [
                        {
                          "type": "JSExpression",
                          "value": "this.item"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "constants": {
    "ENV": "prod",
    "DOMAIN": "xxx.xxx.com"
  },
  "css": "body {font-size: 12px;} .table { width: 100px;}",
  "config": {
    "sdkVersion": "1.0.3",
    "historyMode": "hash",
    "targetRootID": "J_Container",
    "layout": {
      "componentName": "BasicLayout",
      "props": {
        "logo": "...",
        "name": "\u6D4B\u8BD5\u7F51\u7AD9"
      }
    },
    "theme": {
      "package": "@alife/theme-fusion",
      "version": "^0.1.0",
      "primary": "#ff9966"
    }
  },
  "meta": {
    "name": "demo\u5E94\u7528",
    "git_group": "appGroup",
    "project_name": "app_demo",
    "description": "\u8FD9\u662F\u4E00\u4E2A\u6D4B\u8BD5\u5E94\u7528",
    "spma": "spa23d",
    "creator": "\u6708\u98DE"
  }
}
`
    },
    {
      file: "jest.config.js",
      content: `module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/test-cases/', '/static-files/', '/lib/'],
};
`
    },
    {
      file: "package.json",
      content: `{
  "name": "ali-lowcode-solution-hello-world",
  "version": "1.0.0",
  "description": "AlLowCode Code Generate Solution - Hello World",
  "files": [
    "src",
    "lib",
    "tests",
    "jest.config.js",
    ".editorconfig",
    ".eslintignore",
    ".eslintrc.js",
    ".gitignore",
    ".prettierignore",
    ".prettierrc",
    "CHANGELOG.md",
    "CONTRIBUTING.md",
    "demo-schema.json",
    "package.json",
    "README.md",
    "tsconfig.json"
  ],
  "main": "lib/index.js",
  "scripts": {
    "start": "jest --watch",
    "build": "npm run clean && concurrently 'npm run build:ts' 'npm run lint'",
    "build:ts": "tsc",
    "check:type": "tsc -p . --noEmit",
    "clean": "rm -rf build dist lib generated",
    "dev": "build-scripts start",
    "lint": "eslint --ext .tsx,.ts,.js,.jsx src",
    "lintfix": "eslint --fix --color --ext .tsx,.ts,.js,.jsx src",
    "lint-staged": "lint-staged",
    "prepublishOnly": "npm run build",
    "postpublish": "git push origin master --tags",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:update-snapshots": "cross-env UPDATE_EXPECTED=true npx jest",
    "demo": "npm run build && npx @alilc/lowcode-code-generator --solution . --output generated demo-schema.json"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:your-name/ali-lowcode-solution-hello-world.git"
  },
  "author": "",
  "license": "ISC",
  "publishConfig": {
    "registry": "https://registry.npm.xxx.com"
  },
  "dependencies": {
    "@alilc/lowcode-code-generator": "^1.0.0",
    "@alilc/lowcode-types": "^1.0.0",
    "tslib": "^2.3.0"
  },
  "devDependencies": {
    "@types/async": "^3.2.3",
    "@types/jest": "^26.0.17",
    "@typescript-eslint/eslint-plugin": "^4.28.4",
    "@typescript-eslint/parser": "^4.28.4",
    "async": "^3.2.0",
    "babel-runtime": "^6.26.0",
    "concurrently": "^5.2.0",
    "cross-env": "^7.0.0",
    "debug": "^4.1.1",
    "eslint": "^7.31.0",
    "eslint-config-ali": "^12.1.0",
    "eslint-plugin-import": "^2.23.4",
    "eslint-plugin-react": "^7.24.0",
    "eslint-plugin-react-hooks": "^4.2.0",
    "glob": "^7.2.0",
    "husky": "4.2.5",
    "jest": "^26.6.3",
    "json5": "^2.2.0",
    "lint-staged": "10.1.x",
    "lodash": "^4.17.21",
    "md5": "^2.2.1",
    "prettier": "^2.3.2",
    "ts-jest": "^26.4.4",
    "ts-node": "^9.0.0",
    "typescript": "4.x"
  }
}
`
    },
    {
      file: "tsconfig.json",
      content: `{
  "compilerOptions": {
    "esModuleInterop": true,
    "declaration": true,
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": true,
    "importHelpers": true,
    "incremental": false,
    "jsx": "react",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "stripInternal": true,
    "outDir": "./lib",
    "declarationDir": "./lib",
    "rootDirs": ["./src"],
    "target": "es6",
    "module": "commonjs",
    "lib": ["esnext"],
    "types": ["jest", "node"],
    "noUnusedLocals": false,
    "noUnusedParameters": false
  },
  "include": ["src/**/*", "typings/**/*"]
}
`
    },
    {
      file: "src/index.ts",
      content: `import CodeGen from '@alilc/lowcode-code-generator';

import examplePlugin from './plugins/example';

export default function createHelloWorldProjectBuilder() {
  return CodeGen.createProjectBuilder({
    template: CodeGen.solutionParts.ajs.template,
    plugins: {
      components: [
        CodeGen.plugins.ajs.reactCommonDeps(),
        CodeGen.plugins.common.esModule({ fileType: 'jsx' }),
        CodeGen.plugins.common.styleImport(),
        CodeGen.plugins.ajs.containerClass(),
        CodeGen.plugins.ajs.containerInjectContext(),
        CodeGen.plugins.ajs.containerInjectUtils(),
        CodeGen.plugins.ajs.containerInjectDataSourceEngine(),
        CodeGen.plugins.ajs.containerInjectI18n(),
        CodeGen.plugins.ajs.containerInjectConstants(),
        CodeGen.plugins.ajs.containerInitState(),
        CodeGen.plugins.ajs.containerLifeCycle(),
        CodeGen.plugins.ajs.containerMethod(),
        examplePlugin(),
        CodeGen.plugins.ajs.jsx({
          nodeTypeMapping: {
            Div: 'div',
            Component: 'div',
            Page: 'div',
            Block: 'div',
          },
        }),
        CodeGen.plugins.style.css(),
      ],
      pages: [
        CodeGen.plugins.ajs.reactCommonDeps(),
        CodeGen.plugins.common.esModule({ fileType: 'jsx' }),
        CodeGen.plugins.common.styleImport(),
        CodeGen.plugins.ajs.containerClass(),
        CodeGen.plugins.ajs.containerInjectContext(),
        CodeGen.plugins.ajs.containerInjectUtils(),
        CodeGen.plugins.ajs.containerInjectDataSourceEngine(),
        CodeGen.plugins.ajs.containerInjectI18n(),
        CodeGen.plugins.ajs.containerInjectConstants(),
        CodeGen.plugins.ajs.containerInitState(),
        CodeGen.plugins.ajs.containerLifeCycle(),
        CodeGen.plugins.ajs.containerMethod(),
        examplePlugin(),
        CodeGen.plugins.ajs.jsx({
          nodeTypeMapping: {
            Div: 'div',
            Component: 'div',
            Page: 'div',
            Block: 'div',
          },
        }),
        CodeGen.plugins.style.css(),
      ],
      router: [
        CodeGen.plugins.common.esModule(),
        CodeGen.solutionParts.ajs.plugins.router(),
      ],
      entry: [CodeGen.solutionParts.ajs.plugins.entry()],
      constants: [CodeGen.plugins.project.constants()],
      utils: [
        CodeGen.plugins.common.esModule(),
        CodeGen.plugins.project.utils('react'),
      ],
      i18n: [CodeGen.plugins.project.i18n()],
      globalStyle: [CodeGen.solutionParts.ajs.plugins.globalStyle()],
      htmlEntry: [CodeGen.solutionParts.ajs.plugins.entryHtml()],
      packageJSON: [CodeGen.solutionParts.ajs.plugins.packageJSON()],
    },
    postProcessors: [CodeGen.postprocessor.prettier()],
  });
}
`
    },
    {
      file: "src/plugins/example.ts",
      content: `import {
  ICodeStruct,
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  FileType,
  ChunkType,
  IContainerInfo,
  COMMON_CHUNK_NAME,
  CLASS_DEFINE_CHUNK_NAME,
  DEFAULT_LINK_AFTER,
} from '@alilc/lowcode-code-generator';

export interface PluginConfig {
  fileType: string;
}

const pluginFactory: BuilderComponentPluginFactory<PluginConfig> = (
  config?
) => {
  const cfg: PluginConfig = {
    fileType: FileType.JSX,
    ...config,
  };

  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const ir = next.ir as IContainerInfo & {
      methodsModule?: {
        type?: 'JSModule';
        source?: string;
      };
    };

    if (ir.methodsModule?.type !== 'JSModule' || !ir.methodsModule?.source) {
      return next;
    }

    // \u521B\u5EFA methods.jsx
    next.chunks.push({
      type: ChunkType.STRING,
      subModule: 'methods',
      fileType: cfg.fileType,
      name: COMMON_CHUNK_NAME.CustomContent,
      content: ir.methodsModule.source,
      linkAfter: [],
    });

    // \u5F15\u5165\u5BF9\u5E94\u7684\u6A21\u5757
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: cfg.fileType,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: "import __$$methodsModule from './methods';",
      linkAfter: [...DEFAULT_LINK_AFTER[COMMON_CHUNK_NAME.InternalDepsImport]],
    });

    // \u5C06\u5BFC\u51FA\u7684\u4E1C\u4E1C\u90FD\u653E\u5230 class \u4E0A\u5B9E\u4F8B\u65B9\u6CD5\u90E8\u5206
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: cfg.fileType,
      name: CLASS_DEFINE_CHUNK_NAME.ConstructorContent,
      content: 'Object.assign(this, __$$methodsModule);',
      linkAfter: [
        ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorContent],
      ],
    });

    return next;
  };

  return plugin;
};

export default pluginFactory;
`
    },
    {
      file: "tests/basic.test.ts",
      content: `test('basic functions should be ok', () => {
  // \u8FD9\u91CC\u653E\u4E00\u4E9B\u5355\u5143\u6D4B\u8BD5
  expect(0).toBe(0);
});
`
    }
  ];
}

// src/cli/init-solution.ts
async function initSolution(args, options) {
  try {
    const cwd = process.cwd();
    let solutionName = args[0] || "hello";
    let solutionPath = path.resolve(cwd, solutionName);
    if (solutionName === ".") {
      solutionName = path.basename(cwd);
      solutionPath = cwd;
    }
    const modifyFileContent = (content) => content.replace(/hello-world/g, changeCase4.paramCase(solutionName)).replace(/HelloWorld/g, changeCase4.pascalCase(solutionName)).replace(/Hello World/g, changeCase4.titleCase(solutionName));
    await ensureDirExists(solutionPath);
    const templateFiles = getLowcodeSolutionTemplateFiles();
    for (const templateFile of templateFiles) {
      if (options.verbose) {
        console.log("%s", import_chalk2.default.gray(`creating file ${templateFile.file}`));
      }
      const templateFilePath = path.join(solutionPath, templateFile.file);
      await ensureDirExists(path.dirname(templateFilePath));
      await fs2.writeFile(templateFilePath, modifyFileContent(templateFile.content), { encoding: "utf-8" });
    }
    if (!options.quiet) {
      console.log("%s", import_chalk2.default.green(`solution ${solutionName} created successfully`));
    }
    return 0;
  } catch (e) {
    console.log(import_chalk2.default.red(getErrorMessage(e) || `Unexpected error: ${e}`));
    if (typeof e === "object" && (e == null ? void 0 : e.stack) && options.verbose) {
      console.log(import_chalk2.default.gray(e.stack));
    }
    return 1;
  }
}
async function ensureDirExists(dirPath) {
  try {
    await fs2.mkdir(dirPath, { recursive: true });
  } catch (e) {
    if (e.code === "EEXIST") {
      return;
    }
    throw e;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  initSolution,
  run
});
//# sourceMappingURL=cli.js.map