"use strict";

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = void 0 && (void 0).__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Collections;

    (function (Collections) {
      var Generic;

      (function (Generic) {
        var CDictionary = /*#__PURE__*/function () {
          function CDictionary(options) {
            _classCallCheck(this, CDictionary);

            this.m_comparer = new Generic.CEqualityComparer();
            this.m_data = [];

            if (options != null) {
              if (options.comparer != null) this.m_comparer = options.comparer;
            }
          }

          _createClass(CDictionary, [{
            key: "Add",
            value: function Add(key, value) {
              if (this.ContainKey(key)) throw new Error();
              this.m_data.push({
                key: key,
                value: value
              });
            }
          }, {
            key: "ContainKey",
            value: function ContainKey(key) {
              for (var i = 0; i < this.m_data.length; i++) {
                var n = this.m_data[i];
                if (this.m_comparer.Equals(n.key, key)) return true;
              }

              return false;
            }
          }, {
            key: "Remove",
            value: function Remove(key) {
              throw new Error("Method not implemented.");
            }
          }, {
            key: "Get",
            value: function Get(key) {
              for (var i = 0; i < this.m_data.length; i++) {
                var n = this.m_data[i];
                if (this.m_comparer.Equals(n.key, key)) return n.value;
              }

              return null;
            }
          }, {
            key: "Clear",
            value: function Clear() {
              this.m_data = [];
            }
          }, {
            key: "Each",
            value: function Each(process) {
              for (var i = 0; i < this.m_data.length; i++) {
                var n = this.m_data[i];
                process.Execute(n.key, n.value);
              }
            }
          }]);

          return CDictionary;
        }();

        Generic.CDictionary = CDictionary;
      })(Generic = Collections.Generic || (Collections.Generic = {}));
    })(Collections = System.Collections || (System.Collections = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Collections;

    (function (Collections) {
      var Generic;

      (function (Generic) {
        var CEqualityComparer = /*#__PURE__*/function () {
          function CEqualityComparer() {
            _classCallCheck(this, CEqualityComparer);
          }

          _createClass(CEqualityComparer, [{
            key: "Equals",
            value: function Equals(a, b) {
              return a === b;
            }
          }]);

          return CEqualityComparer;
        }();

        Generic.CEqualityComparer = CEqualityComparer;
      })(Generic = Collections.Generic || (Collections.Generic = {}));
    })(Collections = System.Collections || (System.Collections = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {})); // namespace iberbar.System.Metadata
// {
//     export class CMetadataContainerBuilder
//     {
//         private readonly m_configurationCallbacks: Builder.CDeferredCallback[] = [];
//         public AddAttribute( type: Reflection.CType, target: UAttributeTarget, attribute: CAttribute ): void
//         {
//             this.AddCallback( registry =>
//             {
//             });
//         }
//         public Build(): IMetadataContainer
//         {
//             return null;
//         }
//         public AddCallback( callback: ( registry: Core.IMetadataRegistry ) => void ): void
//         {
//             let c = new Builder.CDeferredCallback( callback );
//             this.m_configurationCallbacks.push( c );
//         }
//     }
// }


var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Metadata;

    (function (Metadata) {
      var Core;

      (function (Core) {
        var CMetadataCollection = /*#__PURE__*/function () {
          function CMetadataCollection() {
            _classCallCheck(this, CMetadataCollection);

            this.m_list = [];
          }

          _createClass(CMetadataCollection, [{
            key: "AddAttribute",
            value: function AddAttribute(attribute) {
              this.m_list.splice(0, 0, attribute);
            }
          }, {
            key: "GetAttributeOne",
            value: function GetAttributeOne(type) {
              for (var i = 0; i < this.m_list.length; i++) {
                var attribute = this.m_list[i];
                if (attribute.GetType().IsEquivalentTo(type)) return attribute;
              }

              return null;
            }
          }, {
            key: "GetAttributes",
            value: function GetAttributes(type) {
              var attributeList = [];

              for (var i = 0; i < this.m_list.length; i++) {
                var attribute = this.m_list[i];
                if (attribute.GetType().IsEquivalentTo(type)) attributeList.push(attribute);
              }

              return attributeList;
            }
          }, {
            key: "GetAttributesAll",
            value: function GetAttributesAll() {
              throw new Error("Method not implemented.");
            }
          }]);

          return CMetadataCollection;
        }();

        Core.CMetadataCollection = CMetadataCollection;
      })(Core = Metadata.Core || (Metadata.Core = {}));
    })(Metadata = System.Metadata || (System.Metadata = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {})); /// <reference path="./CMetadataCollection.ts" />


var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Metadata;

    (function (Metadata) {
      var Core;

      (function (Core) {
        var CMetadataContainer = /*#__PURE__*/function () {
          function CMetadataContainer() {
            _classCallCheck(this, CMetadataContainer);

            this.m_pool = new System.Collections.Generic.CDictionary({
              comparer: this
            });
          }

          _createClass(CMetadataContainer, [{
            key: "GetOrAddCollection",
            value: function GetOrAddCollection(key) {
              var collection = this.m_pool.Get(key);

              if (collection == null) {
                this.m_pool.Add(key, collection = new Core.CMetadataCollection());
              }

              return collection;
            }
          }, {
            key: "GetCollection",
            value: function GetCollection(key) {
              var collection = this.m_pool.Get(key);
              if (collection == null) return CMetadataContainer.EmptyCollection;
              return collection;
            }
          }, {
            key: "Equals",
            value: function Equals(a, b) {
              return a.Equals(b);
            }
          }]);

          return CMetadataContainer;
        }();

        CMetadataContainer.EmptyCollection = new Core.CMetadataCollection();
        Core.CMetadataContainer = CMetadataContainer;
      })(Core = Metadata.Core || (Metadata.Core = {}));
    })(Metadata = System.Metadata || (System.Metadata = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {})); /// <reference path="./Core/CMetadataContainer.ts" />


var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Metadata;

    (function (Metadata) {
      Metadata.Container = new Metadata.Core.CMetadataContainer();
    })(Metadata = System.Metadata || (System.Metadata = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {})); // namespace iberbar.System.Metadata.Builder
// {
//     export class CDeferredCallback
//     {
//         public constructor( callback: ( registry: Core.IMetadataRegistry ) => void )
//         {
//         }
//     }
// }


var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Metadata;

    (function (Metadata) {
      var Core;

      (function (Core) {
        var CMetadataKey = /*#__PURE__*/function () {
          function CMetadataKey(type, target) {
            _classCallCheck(this, CMetadataKey);

            this.m_type = type;
            this.m_target = target;
          }

          _createClass(CMetadataKey, [{
            key: "Equals",
            value: function Equals(other) {
              return this.m_type.IsEquivalentTo(other.m_type) && this.m_target == other.m_target;
            }
          }]);

          return CMetadataKey;
        }();

        Core.CMetadataKey = CMetadataKey;
      })(Core = Metadata.Core || (Metadata.Core = {}));
    })(Metadata = System.Metadata || (System.Metadata = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Metadata;

    (function (Metadata) {
      var Core;

      (function (Core) {
        var CMetadataKeyForClass = /*#__PURE__*/function (_Core$CMetadataKey) {
          _inherits(CMetadataKeyForClass, _Core$CMetadataKey);

          var _super = _createSuper(CMetadataKeyForClass);

          function CMetadataKeyForClass(type, target) {
            _classCallCheck(this, CMetadataKeyForClass);

            return _super.call(this, type, target);
          }

          _createClass(CMetadataKeyForClass, [{
            key: "Equals",
            value: function Equals(other) {
              if (_get(_getPrototypeOf(CMetadataKeyForClass.prototype), "Equals", this).call(this, other) == false) return false;
              if (other instanceof CMetadataKeyForClass) return true;
              return false;
            }
          }]);

          return CMetadataKeyForClass;
        }(Core.CMetadataKey);

        Core.CMetadataKeyForClass = CMetadataKeyForClass;
      })(Core = Metadata.Core || (Metadata.Core = {}));
    })(Metadata = System.Metadata || (System.Metadata = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Metadata;

    (function (Metadata) {
      var Core;

      (function (Core) {
        var CMetadataKeyForNamed = /*#__PURE__*/function (_Core$CMetadataKey2) {
          _inherits(CMetadataKeyForNamed, _Core$CMetadataKey2);

          var _super2 = _createSuper(CMetadataKeyForNamed);

          function CMetadataKeyForNamed(type, target, name) {
            var _this;

            _classCallCheck(this, CMetadataKeyForNamed);

            _this = _super2.call(this, type, target);
            _this.m_name = null;
            _this.m_name = name;
            return _this;
          }

          _createClass(CMetadataKeyForNamed, [{
            key: "Equals",
            value: function Equals(other) {
              if (_get(_getPrototypeOf(CMetadataKeyForNamed.prototype), "Equals", this).call(this, other) == false) return false;
              if (other instanceof CMetadataKeyForNamed && other.m_name == this.m_name) return true;
              return false;
            }
          }]);

          return CMetadataKeyForNamed;
        }(Core.CMetadataKey);

        Core.CMetadataKeyForNamed = CMetadataKeyForNamed;
      })(Core = Metadata.Core || (Metadata.Core = {}));
    })(Metadata = System.Metadata || (System.Metadata = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Metadata;

    (function (Metadata) {
      var Core;

      (function (Core) {
        var CMetadataKeyForParameter = /*#__PURE__*/function (_Core$CMetadataKey3) {
          _inherits(CMetadataKeyForParameter, _Core$CMetadataKey3);

          var _super3 = _createSuper(CMetadataKeyForParameter);

          function CMetadataKeyForParameter(type, target, methodName, index) {
            var _this2;

            _classCallCheck(this, CMetadataKeyForParameter);

            _this2 = _super3.call(this, type, target);
            _this2.m_methodName = null;
            _this2.m_index = null;
            _this2.m_index = index;
            _this2.m_methodName = methodName;
            return _this2;
          }

          _createClass(CMetadataKeyForParameter, [{
            key: "Equals",
            value: function Equals(other) {
              if (_get(_getPrototypeOf(CMetadataKeyForParameter.prototype), "Equals", this).call(this, other) == false) return false;
              if (other instanceof CMetadataKeyForParameter && this.m_methodName == other.m_methodName && other.m_index == this.m_index) return true;
              return false;
            }
          }]);

          return CMetadataKeyForParameter;
        }(Core.CMetadataKey);

        Core.CMetadataKeyForParameter = CMetadataKeyForParameter;
      })(Core = Metadata.Core || (Metadata.Core = {}));
    })(Metadata = System.Metadata || (System.Metadata = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Reflection;

    (function (Reflection) {
      /**
       * 自动映射构造函数的参数类型
       *
       * 需要tsconfig配置 "emitDecoratorMetadata": true
       * @param target
       */
      function AutoReflectMetadata_Constructor(target) {
        var paramtypes = Reflect.getMetadata("design:paramtypes", target); // if ( paramtypes == null )
        //     throw new Error( '需要tsconfig配置 "emitDecoratorMetadata": true' );

        if (paramtypes != null) {
          var _loop = function _loop(parameterIndex) {
            var key = new System.Metadata.Core.CMetadataKeyForParameter(Reflection.TypeOf__(target.prototype), System.UAttributeTarget.Parameter, "constructor", parameterIndex);
            var attribute = new Reflection.CDeclaringTypeAttribute(function () {
              return Reflection.TypeOf(paramtypes[parameterIndex]);
            }, null);
            System.Metadata.Container.GetOrAddCollection(key).AddAttribute(attribute);
          };

          for (var parameterIndex = 0; parameterIndex < paramtypes.length; parameterIndex++) {
            _loop(parameterIndex);
          }
        }
      }

      Reflection.AutoReflectMetadata_Constructor = AutoReflectMetadata_Constructor; //     /**
      //  * 自动映射构造函数的参数类型
      //  * 
      //  * 需要tsconfig配置 "emitDecoratorMetadata": true
      //  * @param target 
      //  */
      // export function AutoReflectMetadata_Constructor()
      // {
      //     return function( target: any ): any
      //     {
      //         let paramtypes: Array< TypeConstructor<any> > = Reflect.getMetadata( "design:paramtypes", target );
      //         // if ( paramtypes == null )
      //         //     throw new Error( '需要tsconfig配置 "emitDecoratorMetadata": true' );
      //         if ( paramtypes != null )
      //         {
      //             for ( let parameterIndex = 0; parameterIndex < paramtypes.length; parameterIndex ++ )
      //             {
      //                 let key = new Metadata.Core.CMetadataKeyForParameter( Reflection.TypeOf__( target.prototype ), UAttributeTarget.Parameter, "constructor", parameterIndex );
      //                 let attribute = new CDeclaringTypeAttribute( TypeOf( paramtypes[ parameterIndex ] ), null );
      //                 Metadata.Container.GetOrAddCollection( key ).AddAttribute( attribute );
      //             }
      //         }
      //     }
      // }

      /**
       * 自动映射字段类型
       *
       * 需要tsconfig配置 "emitDecoratorMetadata": true
       */

      function AutoReflectMetadata_Field(target, fieldName) {
        Reflection.Enumerable(target, fieldName);
        var typeConstructor = Reflect.getMetadata("design:type", target, fieldName); // if ( typeConstructor == null )
        //     throw new Error( '需要tsconfig配置 "emitDecoratorMetadata": true' );

        if (typeConstructor != null) {
          var key = new System.Metadata.Core.CMetadataKeyForNamed(Reflection.TypeOf__(target), System.UAttributeTarget.Field, fieldName);
          var attribute = new Reflection.CDeclaringTypeAttribute(function () {
            return Reflection.TypeOf(typeConstructor);
          }, null);
          System.Metadata.Container.GetOrAddCollection(key).AddAttribute(attribute);
        }
      }

      Reflection.AutoReflectMetadata_Field = AutoReflectMetadata_Field;
      /**
       * 自动映射属性类型
       *
       * 需要tsconfig配置 "emitDecoratorMetadata": true
       */

      function AutoReflectMetadata_Property(target, propertyName, descriptor) {
        if (descriptor.set == null && descriptor.get == null) throw new Error("Can't auto reflect on method.");
        var typeConstructor = Reflect.getMetadata("design:type", target, propertyName); // if ( typeConstructor == null )
        //     throw new Error( '需要tsconfig配置 "emitDecoratorMetadata": true' );

        if (typeConstructor != null) {
          var key = new System.Metadata.Core.CMetadataKeyForNamed(Reflection.TypeOf__(target), System.UAttributeTarget.Property, propertyName);
          var attribute = new Reflection.CDeclaringTypeAttribute(function () {
            return Reflection.TypeOf(typeConstructor);
          }, null);
          System.Metadata.Container.GetOrAddCollection(key).AddAttribute(attribute);
        }
      }

      Reflection.AutoReflectMetadata_Property = AutoReflectMetadata_Property;
      /**
       * 自动映射方法的返回类型和参数类型
       *
       * 需要tsconfig配置 "emitDecoratorMetadata": true
       */

      function AutoReflectMetadata_Method(target, methodName, descriptor) {
        if (descriptor.set != null || descriptor.get != null) throw new Error("Can't auto reflect on property.");
        var key;
        var attribute;
        var returntypeConstructor = Reflect.getMetadata("design:returntype", target, methodName); // if ( returntypeConstructor == null )
        //     throw new Error( '需要tsconfig配置 "emitDecoratorMetadata": true' );

        if (returntypeConstructor != null) {
          key = new System.Metadata.Core.CMetadataKeyForNamed(Reflection.TypeOf__(target), System.UAttributeTarget.Method, methodName);
          attribute = new Reflection.CDeclaringTypeAttribute(function () {
            return Reflection.TypeOf(returntypeConstructor);
          }, null);
          System.Metadata.Container.GetOrAddCollection(key).AddAttribute(attribute);
        }

        var paramtypeConstructors = Reflect.getMetadata("design:paramtypes", target); // if ( paramtypeConstructors == null )
        //     throw new Error( '需要tsconfig配置 "emitDecoratorMetadata": true' );

        if (paramtypeConstructors != null) {
          var _loop2 = function _loop2(parameterIndex) {
            var key = new System.Metadata.Core.CMetadataKeyForParameter(Reflection.TypeOf__(target.prototype), System.UAttributeTarget.Parameter, methodName, parameterIndex);
            var attribute = new Reflection.CDeclaringTypeAttribute(function () {
              return Reflection.TypeOf(paramtypeConstructors[parameterIndex]);
            }, null);
            System.Metadata.Container.GetOrAddCollection(key).AddAttribute(attribute);
          };

          for (var parameterIndex = 0; parameterIndex < paramtypeConstructors.length; parameterIndex++) {
            _loop2(parameterIndex);
          }
        }
      }

      Reflection.AutoReflectMetadata_Method = AutoReflectMetadata_Method;
    })(Reflection = System.Reflection || (System.Reflection = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Reflection;

    (function (Reflection) {
      var CAssembly = /*#__PURE__*/function () {
        function CAssembly(s) {
          _classCallCheck(this, CAssembly);

          this.m_jsmodule = null;
          this.m_jsmodule = s;
        }

        _createClass(CAssembly, [{
          key: "GetTypes",
          value: function GetTypes() {
            return this.GetTypesInternal(this.m_jsmodule);
          }
        }, {
          key: "GetTypesInternal",
          value: function GetTypesInternal(obj) {
            var js_typeof = _typeof(obj);

            if (js_typeof != "object") return [];
            var types = [];

            for (var k in obj) {
              var v = obj[k];
              if (v == undefined || v == null) continue;

              if (v["prototype"] != null) {
                types.push(System.Reflection.TypeOf(v));
                types = types.concat(this.GetTypesInternal(v));
                continue;
              }

              types = types.concat(this.GetTypesInternal(v));
            }

            return types;
          }
        }]);

        return CAssembly;
      }();

      Reflection.CAssembly = CAssembly;
    })(Reflection = System.Reflection || (System.Reflection = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Reflection;

    (function (Reflection) {
      var CMemberInfo = /*#__PURE__*/function () {
        function CMemberInfo(name, prototype) {
          _classCallCheck(this, CMemberInfo);

          this.m_name = null;
          this.m_prototype = null;
          this.m_metadataCollection = null;
          this.m_name = name;
          this.m_prototype = prototype;
        }

        _createClass(CMemberInfo, [{
          key: "GetJsPrototype",
          value: function GetJsPrototype() {
            return this.m_prototype;
          }
        }, {
          key: "GetCustomAttributeOne",
          value: function GetCustomAttributeOne(attributeType) {
            return this.MetadataCollection.GetAttributeOne(attributeType);
          }
        }, {
          key: "GetCustomAttributes",
          value: function GetCustomAttributes(attributeType) {
            return this.MetadataCollection.GetAttributes(attributeType);
          }
        }, {
          key: "GetCustomAttributesAll",
          value: function GetCustomAttributesAll() {
            return this.MetadataCollection.GetAttributesAll();
          }
        }, {
          key: "IsDefined",
          value: function IsDefined(attributeType) {
            return this.MetadataCollection.GetAttributeOne(attributeType) == null ? false : true;
          }
        }, {
          key: "GetMetadataKey",
          value: function GetMetadataKey() {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "Name",
          get: function get() {
            return this.m_name;
          }
          /**
           * Gets the class that declares this member.
           *
           * 声明此成员的Class类型，下面实例中的Text属性MemberInfo的DeclaringType返回 **Biubiu**
           *
           * @returns The Type object for the class that declares this member.
           *
           * ```js
           * class Biubiu
           * {
           *      get Text(): string { return  ""; }
           * }
           * ```
           */

        }, {
          key: "DeclaringType",
          get: function get() {
            return Reflection.TypeOf(this.m_prototype.constructor);
          }
        }, {
          key: "MetadataCollection",
          get: function get() {
            if (this.m_metadataCollection == null) {
              var key = this.GetMetadataKey();
              this.m_metadataCollection = System.Metadata.Container.GetCollection(key);
            }

            return this.m_metadataCollection;
          }
        }]);

        return CMemberInfo;
      }();

      Reflection.CMemberInfo = CMemberInfo;
    })(Reflection = System.Reflection || (System.Reflection = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {})); /// <reference path="./MemberInfo.ts" />


var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Reflection;

    (function (Reflection) {
      var CMethodBase = /*#__PURE__*/function (_Reflection$CMemberIn) {
        _inherits(CMethodBase, _Reflection$CMemberIn);

        var _super4 = _createSuper(CMethodBase);

        function CMethodBase() {
          _classCallCheck(this, CMethodBase);

          return _super4.apply(this, arguments);
        }

        return CMethodBase;
      }(Reflection.CMemberInfo);

      Reflection.CMethodBase = CMethodBase;
    })(Reflection = System.Reflection || (System.Reflection = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {})); /// <reference path="./CMethodBase.ts" />


var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Reflection;

    (function (Reflection) {
      var CConstructorInfo = /*#__PURE__*/function (_Reflection$CMethodBa) {
        _inherits(CConstructorInfo, _Reflection$CMethodBa);

        var _super5 = _createSuper(CConstructorInfo);

        function CConstructorInfo() {
          _classCallCheck(this, CConstructorInfo);

          return _super5.apply(this, arguments);
        }

        _createClass(CConstructorInfo, [{
          key: "Invoke",
          value: function Invoke() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return _construct(this.JsConstructor, args);
          }
        }, {
          key: "JsConstructor",
          get: function get() {
            return this.m_prototype.constructor;
          }
        }]);

        return CConstructorInfo;
      }(Reflection.CMethodBase);

      Reflection.CConstructorInfo = CConstructorInfo;
    })(Reflection = System.Reflection || (System.Reflection = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var UAttributeTarget;

    (function (UAttributeTarget) {
      UAttributeTarget[UAttributeTarget["Class"] = 1] = "Class";
      UAttributeTarget[UAttributeTarget["Field"] = 2] = "Field";
      UAttributeTarget[UAttributeTarget["Method"] = 4] = "Method";
      UAttributeTarget[UAttributeTarget["Parameter"] = 8] = "Parameter";
      UAttributeTarget[UAttributeTarget["Property"] = 16] = "Property";
      UAttributeTarget[UAttributeTarget["All"] = 31] = "All";
    })(UAttributeTarget = System.UAttributeTarget || (System.UAttributeTarget = {}));

    ;
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    /**
     * 特性基类
     */
    var CAttribute = function CAttribute() {
      _classCallCheck(this, CAttribute);
    };

    System.CAttribute = CAttribute;
    ;
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {})); /// <reference path="./CAttribute.ts" />
/// <reference path="./UAttributeTarget.ts" />


var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var CAttributeUsageAttribute = /*#__PURE__*/function (_System$CAttribute) {
      _inherits(CAttributeUsageAttribute, _System$CAttribute);

      var _super6 = _createSuper(CAttributeUsageAttribute);

      function CAttributeUsageAttribute(validOn, allowMultiple, inherit) {
        var _this3;

        _classCallCheck(this, CAttributeUsageAttribute);

        _this3 = _super6.call(this);
        _this3.m_validOn = validOn;
        _this3.m_allowMultiple = allowMultiple == null ? true : allowMultiple;
        _this3.m_inherited = inherit == null ? true : inherit;
        return _this3;
      }

      _createClass(CAttributeUsageAttribute, [{
        key: "ValidOn",
        get: function get() {
          return this.m_validOn;
        }
      }, {
        key: "AllowMultiple",
        get: function get() {
          return this.m_allowMultiple;
        }
      }, {
        key: "Inherited",
        get: function get() {
          return this.m_inherited;
        }
      }]);

      return CAttributeUsageAttribute;
    }(System.CAttribute);

    CAttributeUsageAttribute.DefaultUsage = new CAttributeUsageAttribute(System.UAttributeTarget.All, true, true);
    System.CAttributeUsageAttribute = CAttributeUsageAttribute;
    ;
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {})); /// <reference path="./MemberInfo.ts" />


var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Reflection;

    (function (Reflection) {
      var CFieldInfo = /*#__PURE__*/function (_Reflection$CMemberIn2) {
        _inherits(CFieldInfo, _Reflection$CMemberIn2);

        var _super7 = _createSuper(CFieldInfo);

        function CFieldInfo() {
          _classCallCheck(this, CFieldInfo);

          return _super7.apply(this, arguments);
        }

        _createClass(CFieldInfo, [{
          key: "SetValue",
          value: function SetValue(obj, value) {
            obj[this.m_name] = value;
          }
        }, {
          key: "GetValue",
          value: function GetValue(obj) {
            return obj[this.m_name];
          }
        }, {
          key: "GetMetadataKey",
          value: function GetMetadataKey() {
            return new System.Metadata.Core.CMetadataKeyForNamed(this.DeclaringType, System.UAttributeTarget.Field, this.Name);
          }
        }, {
          key: "MemberType",
          get: function get() {
            return Reflection.UMemberTypes.Field;
          }
        }]);

        return CFieldInfo;
      }(Reflection.CMemberInfo);

      Reflection.CFieldInfo = CFieldInfo;
    })(Reflection = System.Reflection || (System.Reflection = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {})); /// <reference path="./MemberInfo.ts" />
/// <reference path="./CMethodBase.ts" />


var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Reflection;

    (function (Reflection) {
      var CMethodInfo = /*#__PURE__*/function (_Reflection$CMethodBa2) {
        _inherits(CMethodInfo, _Reflection$CMethodBa2);

        var _super8 = _createSuper(CMethodInfo);

        function CMethodInfo() {
          _classCallCheck(this, CMethodInfo);

          return _super8.apply(this, arguments);
        }

        _createClass(CMethodInfo, [{
          key: "Invoke",
          // protected readonly m_method: Function = null;
          // protected constructor( n: string, prototype: TypePrototype< any >, method: Function )
          // {
          //     super( n, prototype );
          //     this.m_method = method;
          // }
          value: function Invoke(obj) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            return this.Method.apply(obj, args);
          } // public GetParameters(): Array< CParameterInfo >
          // {
          //     let classType = this.DeclaringType;
          //     let parameterCount = this.Method.length;
          //     let infos: Array< CParameterInfo > = Array( parameterCount );
          //     if ( parameterCount > 0 )
          //     {
          //         for ( let i = 0; i < parameterCount; i ++ )
          //         {
          //             let key: Metadata.Core.CMetadataKey = null;
          //             if ( this.Name.startsWith( "get_" ) || this.Name.startsWith( "set_" ) )
          //             {
          //                 key = new Metadata.Core.CMetadataKeyForNamed( classType, UAttributeTarget.Property, this.Name.substr( 4 ) );
          //             }
          //             else
          //             {
          //                 key = new Metadata.Core.CMetadataKeyForParameter( classType, UAttributeTarget.Parameter, this.Name, i );
          //             }
          //             let typeAttribute = Metadata.Container.GetCollection( key ).GetAttributeOne( TypeOf( CDeclaringTypeAttribute ) );
          //             infos[ i ] = new CParameterInfo( this.m_prototype, this, i, ( typeAttribute == null ) ? null : typeAttribute.DeclaringType );
          //         }
          //     }
          //     return infos;
          // }
          // public get Descriptor()
          // {
          //     return Reflect.getOwnPropertyDescriptor( this.m_prototype, this.m_name );
          // }

        }, {
          key: "GetMetadataKey",
          value: function GetMetadataKey() {
            return new System.Metadata.Core.CMetadataKeyForNamed(this.DeclaringType, System.UAttributeTarget.Method, this.Name);
          }
        }]);

        return CMethodInfo;
      }(Reflection.CMethodBase);

      Reflection.CMethodInfo = CMethodInfo;
    })(Reflection = System.Reflection || (System.Reflection = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {})); /// <reference path="./MemberInfo.ts" />


var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Reflection;

    (function (Reflection) {
      var CPropertyInfo = /*#__PURE__*/function (_Reflection$CMemberIn3) {
        _inherits(CPropertyInfo, _Reflection$CMemberIn3);

        var _super9 = _createSuper(CPropertyInfo);

        function CPropertyInfo() {
          _classCallCheck(this, CPropertyInfo);

          return _super9.apply(this, arguments);
        }

        _createClass(CPropertyInfo, [{
          key: "GetMetadataKey",
          value: function GetMetadataKey() {
            return new System.Metadata.Core.CMetadataKeyForNamed(this.DeclaringType, System.UAttributeTarget.Property, this.Name);
          }
        }]);

        return CPropertyInfo;
      }(Reflection.CMemberInfo);

      Reflection.CPropertyInfo = CPropertyInfo;
    })(Reflection = System.Reflection || (System.Reflection = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Reflection;

    (function (Reflection) {
      var CParameterInfo = function CParameterInfo() {
        _classCallCheck(this, CParameterInfo);
      };

      Reflection.CParameterInfo = CParameterInfo;
    })(Reflection = System.Reflection || (System.Reflection = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {})); /// <reference path="./ConstructorInfo.ts" />
/// <reference path="./FieldInfo.ts" />
/// <reference path="./MethodInfo.ts" />
/// <reference path="./PropertyInfo.ts" />
/// <reference path="./ParameterInfo.ts" />
/// <reference path="./ICustomAttributeProvider.ts" />


var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Reflection;

    (function (Reflection) {
      ;
      ;

      function GetOrCreateDictionaryInJsPrototype(prototype, key) {
        var data = null;

        if (prototype.hasOwnProperty(key) == false) {
          data = prototype[key] = {};
        } else {
          data = prototype[key];
        }

        return data;
      }

      Reflection.GetOrCreateDictionaryInJsPrototype = GetOrCreateDictionaryInJsPrototype;

      function GetOrCreateArrayInJsPrototype(prototype, key) {
        var data = null;

        if (prototype.hasOwnProperty(key) == false) {
          data = prototype[key] = [];
        } else {
          data = prototype[key];
        }

        return data;
      }

      Reflection.GetOrCreateArrayInJsPrototype = GetOrCreateArrayInJsPrototype;
      ;

      var CType = /*#__PURE__*/function () {
        function CType() {
          _classCallCheck(this, CType);
        }

        _createClass(CType, [{
          key: "GetFieldOne",
          value: function GetFieldOne(name) {
            var info = this.GetOwnFieldOne(name);

            if (info == null) {
              var baseType = this.BaseType;

              while (baseType) {
                info = baseType.GetOwnFieldOne(name);
                if (info != null) return info;
                baseType = baseType.BaseType;
              }
            }

            return info;
          }
        }, {
          key: "GetFields",
          value: function GetFields() {
            var array = this.GetOwnFields();
            var baseType = this.BaseType;

            while (baseType) {
              array = array.concat(baseType.GetOwnFields());
              baseType = baseType.BaseType;
            }

            return array;
          }
        }, {
          key: "GetMethodOne",
          value: function GetMethodOne(key) {
            var info = this.GetOwnMethodOne(key);

            if (info != null) {
              return info;
            }

            var baseType = this.BaseType;

            while (baseType) {
              info = baseType.GetOwnMethodOne(key);

              if (info != null) {
                return info;
              }

              baseType = baseType.BaseType;
            }

            return null;
          }
        }, {
          key: "GetMethods",
          value: function GetMethods() {
            var array = this.GetOwnMethods();
            var baseType = this.BaseType;

            while (baseType) {
              array = array.concat(baseType.GetOwnMethods());
              baseType = baseType.BaseType;
            }

            return array;
          }
        }, {
          key: "GetProperties",
          value: function GetProperties() {
            var array = this.GetOwnProperties();
            var baseType = this.BaseType;

            while (baseType) {
              array = array.concat(baseType.GetOwnProperties());
              baseType = baseType.BaseType;
            }

            return array;
          }
        }, {
          key: "GetProperty",
          value: function GetProperty(key) {
            var propertyInfo = this.GetOwnProperty(key);
            if (propertyInfo != null) return propertyInfo;
            var baseType = this.BaseType;

            while (baseType) {
              propertyInfo = baseType.GetOwnProperty(key);
              if (propertyInfo != null) return propertyInfo;
            }

            return null;
          }
        }]);

        return CType;
      }();

      Reflection.CType = CType;

      var CRuntimeType = /*#__PURE__*/function (_CType) {
        _inherits(CRuntimeType, _CType);

        var _super10 = _createSuper(CRuntimeType);

        function CRuntimeType(proto) {
          var _this4;

          _classCallCheck(this, CRuntimeType);

          _this4 = _super10.call(this);
          _this4.m_proto = null;
          _this4.m_metadataCollection = null;
          _this4.m_proto = proto;
          return _this4;
        }

        _createClass(CRuntimeType, [{
          key: "Equals",
          value: function Equals(other) {
            return this.IsEquivalentTo(System.dynamic_cast(other, CRuntimeType));
          }
        }, {
          key: "GetJsPrototype",
          value: function GetJsPrototype() {
            return this.m_proto;
          }
        }, {
          key: "GetJsConstructor",
          value: function GetJsConstructor() {
            return this.m_proto.constructor;
          }
        }, {
          key: "GetConstructor",
          value: function GetConstructor() {
            return new CRuntimeConstructorInfo("constructor", this.m_proto);
          }
        }, {
          key: "GetFieldOne",
          value: function GetFieldOne(name) {
            var info = this.GetOwnFieldOne(name);

            if (info == null) {
              var baseType = this.BaseType;

              while (baseType) {
                info = baseType.GetOwnFieldOne(name);
                if (info != null) return info;
                baseType = baseType.BaseType;
              }
            }

            return info;
          }
        }, {
          key: "GetOwnFieldOne",
          value: function GetOwnFieldOne(name) {
            var proto = this.GetJsPrototype();
            var info = null;
            var descriptor = Reflect.getOwnPropertyDescriptor(proto, Reflection.ReflectFieldsKey);
            if (descriptor == null || descriptor.value == null) return null;
            if (name in descriptor.value == false) return null;
            info = new CRuntimeFieldInfo(name, proto);
            return info;
          }
        }, {
          key: "GetFields",
          value: function GetFields() {
            var array = this.GetOwnFields();
            var baseType = this.BaseType;

            while (baseType) {
              array = array.concat(baseType.GetOwnFields());
              baseType = baseType.BaseType;
            }

            return array;
          }
        }, {
          key: "GetOwnFields",
          value: function GetOwnFields() {
            var proto = this.GetJsPrototype();
            var array = [];
            var descriptor = Reflect.getOwnPropertyDescriptor(proto, Reflection.ReflectFieldsKey);
            if (descriptor == null || descriptor.value == null) return array;
            var keys = descriptor.value;

            for (var k in keys) {
              array.push(new CRuntimeFieldInfo(k, proto));
            }

            return array;
          }
        }, {
          key: "GetMethodOne",
          value: function GetMethodOne(key) {
            var info = this.GetOwnMethodOne(key);

            if (info != null) {
              return info;
            }

            var baseType = this.BaseType;

            while (baseType) {
              info = baseType.GetOwnMethodOne(key);

              if (info != null) {
                return info;
              }

              baseType = baseType.BaseType;
            }

            return null;
          }
        }, {
          key: "GetOwnMethodOne",
          value: function GetOwnMethodOne(key) {
            var info = null;
            var descriptor = Reflect.getOwnPropertyDescriptor(this.m_proto, key);
            if (descriptor == null) return null;
            info = new CRuntimeMethodInfo(key, this.m_proto, descriptor.value);
            return info;
          }
        }, {
          key: "GetMethods",
          value: function GetMethods() {
            var array = this.GetOwnMethods();
            var baseType = this.BaseType;

            while (baseType) {
              array = array.concat(baseType.GetOwnMethods());
              baseType = baseType.BaseType;
            }

            return array;
          }
        }, {
          key: "GetOwnMethods",
          value: function GetOwnMethods() {
            var array = [];
            var keys = Reflect.ownKeys(this.m_proto);

            for (var i = 0; i < keys.length; i++) {
              var k = keys[i];
              if (k == "constructor") continue;
              var descriptor = Reflect.getOwnPropertyDescriptor(this.m_proto, k);
              if (descriptor == null) continue;
              if (descriptor.value == null || typeof descriptor.value != "function") continue;
              array.push(new CRuntimeMethodInfo(k, this.m_proto, descriptor.value));
            }

            return array;
          }
        }, {
          key: "GetProperties",
          value: function GetProperties() {
            var array = this.GetOwnProperties();
            var baseType = this.BaseType;

            while (baseType) {
              array = array.concat(baseType.GetOwnProperties());
              baseType = baseType.BaseType;
            }

            return array;
          }
        }, {
          key: "GetProperty",
          value: function GetProperty(key) {
            var propertyInfo = this.GetOwnProperty(key);
            if (propertyInfo != null) return propertyInfo;
            var baseType = this.BaseType;

            while (baseType) {
              propertyInfo = baseType.GetOwnProperty(key);
              if (propertyInfo != null) return propertyInfo;
            }

            return null;
          }
        }, {
          key: "GetOwnProperties",
          value: function GetOwnProperties() {
            var array = [];
            var keys = Reflect.ownKeys(this.m_proto);

            for (var i = 0; i < keys.length; i++) {
              var k = keys[i];
              if (k == "constructor") continue;
              var descriptor = Reflect.getOwnPropertyDescriptor(this.m_proto, k);
              if (descriptor == null) continue;
              if (descriptor.set == null && descriptor.get == null) continue;
              array.push(new CRuntimePropertyInfo(k, this.m_proto));
            }

            return array;
          }
        }, {
          key: "GetOwnProperty",
          value: function GetOwnProperty(key) {
            var descriptor = Reflect.getOwnPropertyDescriptor(this.m_proto, key);
            if (descriptor == null) return null;
            if (descriptor.set == null && descriptor.get == null) return null;
            return new CRuntimePropertyInfo(key, this.m_proto);
          }
          /**
           * **(只读)**
           *
           * 获取父类类型
           */

        }, {
          key: "IsEquivalentTo",

          /**
           * 对比当前类型是否与参数type类型一样
           * @param type 对比参照类型
           */
          value: function IsEquivalentTo(type) {
            if (type == null) return false;
            if (typeof type == "function") return type.prototype == this.m_proto;
            if (type.m_proto === this.m_proto) return true;
            return false;
          }
          /**
           * 判断当前类型是否继承于参数type类型
           * @param type 父类类型
           */

        }, {
          key: "IsInheritFrom",
          value: function IsInheritFrom(type) {
            var baseType = this.BaseType;

            while (baseType) {
              if (baseType.IsEquivalentTo(type)) return true;
              baseType = baseType.BaseType;
            }

            return false;
          }
        }, {
          key: "GetCustomAttributeOne",
          value: function GetCustomAttributeOne(attributeType, inherit) {
            if (this.IsEquivalentTo(System.CAttributeUsageAttribute) == true) return null;

            if (inherit == true) {
              var attr = this.GetCustomAttributeOne(attributeType, false);
              if (attr != null) return attr;
              var attrUsage = attributeType.GetCustomAttributeOne(Reflection.TypeOf(System.CAttributeUsageAttribute), true);
              if (attrUsage == null) attrUsage = System.CAttributeUsageAttribute.DefaultUsage;

              if (attrUsage.Inherited == true) {
                var baseType = this.BaseType;

                while (baseType != null) {
                  attr = baseType.GetCustomAttributeOne(attributeType, false);
                  if (attr != null) return attr;
                  baseType = baseType.BaseType;
                }
              }

              return null;
            } else {
              return this.MetadataCollection.GetAttributeOne(attributeType);
            }
          }
        }, {
          key: "GetCustomAttributes",
          value: function GetCustomAttributes(attributeType, inherit) {
            if (inherit == true) {
              var attrs = this.GetCustomAttributes(attributeType, false);
              var attrUsage = attributeType.GetCustomAttributeOne(Reflection.TypeOf(System.CAttributeUsageAttribute), true);

              if (attrUsage == null) {
                attrUsage = System.CAttributeUsageAttribute.DefaultUsage;
              }

              if (attrUsage.Inherited == true) {
                var baseType = this.BaseType;

                while (baseType != null) {
                  attrs = attrs.concat(baseType.GetCustomAttributes(attributeType, false));
                  baseType = baseType.BaseType;
                }
              }

              return attrs;
            } else {
              return this.MetadataCollection.GetAttributes(attributeType);
            }
          }
        }, {
          key: "GetCustomAttributesAll",
          value: function GetCustomAttributesAll() {
            return this.MetadataCollection.GetAttributesAll();
          }
        }, {
          key: "IsDefined",
          value: function IsDefined(attributeType, inherit) {
            return false;
          }
        }, {
          key: "BaseType",
          get: function get() {
            var protoBase = Reflect.getPrototypeOf(this.m_proto);
            if (protoBase == null) return null;
            if (protoBase == Object.prototype) return null;
            return new CRuntimeType(protoBase);
          }
        }, {
          key: "MetadataCollection",
          get: function get() {
            if (this.m_metadataCollection == null) {
              var key = new System.Metadata.Core.CMetadataKeyForClass(this, System.UAttributeTarget.Class);
              this.m_metadataCollection = System.Metadata.Container.GetCollection(key);
            }

            return this.m_metadataCollection;
          }
        }]);

        return CRuntimeType;
      }(CType);

      function TypeOf(type) {
        return new CRuntimeType(type.prototype);
      }

      Reflection.TypeOf = TypeOf;

      function TypeOf__(prototype) {
        return new CRuntimeType(prototype);
      }

      Reflection.TypeOf__ = TypeOf__;

      function GetObjectType(o) {
        return o.GetType();
      }

      Reflection.GetObjectType = GetObjectType;
      /**
       * 用于互相类型引用的场景
       * @param delay
       */

      function TypeOfDelay(delay) {
        return function () {
          return new CRuntimeType(delay().prototype);
        };
      }

      Reflection.TypeOfDelay = TypeOfDelay;

      var CRuntimeConstructorInfo = /*#__PURE__*/function (_Reflection$CConstruc) {
        _inherits(CRuntimeConstructorInfo, _Reflection$CConstruc);

        var _super11 = _createSuper(CRuntimeConstructorInfo);

        function CRuntimeConstructorInfo(name, prototype) {
          _classCallCheck(this, CRuntimeConstructorInfo);

          return _super11.call(this, name, prototype);
        }

        _createClass(CRuntimeConstructorInfo, [{
          key: "GetParameters",
          value: function GetParameters() {
            var classType = this.DeclaringType;
            var parameterCount = this.JsConstructor.length;
            var infos = Array(parameterCount);

            if (parameterCount > 0) {
              for (var i = 0; i < parameterCount; i++) {
                var key = new System.Metadata.Core.CMetadataKeyForParameter(classType, System.UAttributeTarget.Parameter, this.Name, i);
                var typeAttribute = System.Metadata.Container.GetCollection(key).GetAttributeOne(TypeOf(Reflection.CDeclaringTypeAttribute));
                infos[i] = new CRuntimeParameterInfo(this.m_prototype, this, i, typeAttribute == null ? null : typeAttribute.DeclaringType);
              }
            }

            return infos;
          }
        }, {
          key: "MemberType",
          get: function get() {
            return Reflection.UMemberTypes.Constructor;
          }
        }, {
          key: "Descriptor",
          get: function get() {
            return null;
          }
        }]);

        return CRuntimeConstructorInfo;
      }(Reflection.CConstructorInfo);

      var CRuntimeMethodInfo = /*#__PURE__*/function (_Reflection$CMethodIn) {
        _inherits(CRuntimeMethodInfo, _Reflection$CMethodIn);

        var _super12 = _createSuper(CRuntimeMethodInfo);

        function CRuntimeMethodInfo(name, prototype, method, fromProperty) {
          var _this5;

          _classCallCheck(this, CRuntimeMethodInfo);

          _this5 = _super12.call(this, name, prototype);
          _this5.m_method = null;
          _this5.m_fromProperty = null;
          _this5.m_method = method;
          _this5.m_fromProperty = fromProperty;
          return _this5;
        }

        _createClass(CRuntimeMethodInfo, [{
          key: "GetParameters",
          value: function GetParameters() {
            var classType = this.DeclaringType;
            var parameterCount = this.Method.length;
            var infos = Array(parameterCount);

            if (parameterCount > 0) {
              for (var i = 0; i < parameterCount; i++) {
                var typeAttribute = null;
                var parameterName = null;

                if (this.m_fromProperty == null) {
                  var key = new System.Metadata.Core.CMetadataKeyForParameter(classType, System.UAttributeTarget.Parameter, this.Name, i);
                  var attrsCollection = System.Metadata.Container.GetCollection(key);
                  typeAttribute = attrsCollection.GetAttributeOne(TypeOf(Reflection.CDeclaringTypeAttribute));
                  var nameAttribute = attrsCollection.GetAttributeOne(TypeOf(Reflection.CNamedAttribute));
                  if (nameAttribute = null) parameterName = nameAttribute.Text;
                } else {
                  typeAttribute = this.m_fromProperty.GetCustomAttributeOne(TypeOf(Reflection.CDeclaringTypeAttribute));
                  parameterName = this.m_fromProperty.Name;
                }

                infos[i] = new CRuntimeParameterInfo(this.m_prototype, this, i, typeAttribute == null ? null : typeAttribute.DeclaringType, parameterName);
              }
            }

            return infos;
          }
        }, {
          key: "MemberType",
          get: function get() {
            return Reflection.UMemberTypes.Method;
          }
        }, {
          key: "Method",
          get: function get() {
            return this.m_method;
          }
        }, {
          key: "Descriptor",
          get: function get() {
            if (this.m_fromProperty == null) return Reflect.getOwnPropertyDescriptor(this.m_prototype, this.Name);
            return Reflect.getOwnPropertyDescriptor(this.m_prototype, this.m_fromProperty.Name);
          }
        }]);

        return CRuntimeMethodInfo;
      }(Reflection.CMethodInfo);

      var CRuntimePropertyInfo = /*#__PURE__*/function (_Reflection$CProperty) {
        _inherits(CRuntimePropertyInfo, _Reflection$CProperty);

        var _super13 = _createSuper(CRuntimePropertyInfo);

        function CRuntimePropertyInfo(name, prototype) {
          _classCallCheck(this, CRuntimePropertyInfo);

          return _super13.call(this, name, prototype);
        }

        _createClass(CRuntimePropertyInfo, [{
          key: "SetValue",
          value: function SetValue(obj, value) {
            obj[this.m_name] = value;
          }
        }, {
          key: "GetValue",
          value: function GetValue(obj) {
            return obj[this.m_name];
          }
        }, {
          key: "GetMetadataKey",
          value: function GetMetadataKey() {
            return new System.Metadata.Core.CMetadataKeyForNamed(this.DeclaringType, System.UAttributeTarget.Property, this.Name);
          }
        }, {
          key: "GetSetMethod",
          value: function GetSetMethod() {
            var descriptor = Reflect.getOwnPropertyDescriptor(this.m_prototype, this.m_name);
            if (descriptor.set == undefined) return undefined;
            return new CRuntimeMethodInfo("get_" + this.Name, this.m_prototype, descriptor.set, this);
          }
        }, {
          key: "GetGetMethod",
          value: function GetGetMethod() {
            var descriptor = Reflect.getOwnPropertyDescriptor(this.m_prototype, this.m_name);
            if (descriptor.get == undefined) return undefined;
            return new CRuntimeMethodInfo("get_" + this.Name, this.m_prototype, descriptor.get, this);
          }
        }, {
          key: "MemberType",
          get: function get() {
            return Reflection.UMemberTypes.Property;
          }
        }, {
          key: "PropertyType",
          get: function get() {
            var attr = this.GetCustomAttributeOne(TypeOf(Reflection.CDeclaringTypeAttribute));
            if (attr == null) return null;
            return attr.DeclaringType;
          }
        }, {
          key: "CanWrite",
          get: function get() {
            var descriptor = Reflect.getOwnPropertyDescriptor(this.m_prototype, this.m_name);
            return descriptor.set != undefined;
          }
        }, {
          key: "CanRead",
          get: function get() {
            var descriptor = Reflect.getOwnPropertyDescriptor(this.m_prototype, this.m_name);
            return descriptor.get != undefined;
          }
        }]);

        return CRuntimePropertyInfo;
      }(Reflection.CPropertyInfo);

      var CRuntimeFieldInfo = /*#__PURE__*/function (_Reflection$CFieldInf) {
        _inherits(CRuntimeFieldInfo, _Reflection$CFieldInf);

        var _super14 = _createSuper(CRuntimeFieldInfo);

        function CRuntimeFieldInfo(name, prototype) {
          _classCallCheck(this, CRuntimeFieldInfo);

          return _super14.call(this, name, prototype);
        }

        _createClass(CRuntimeFieldInfo, [{
          key: "FieldType",
          get: function get() {
            var attr = this.GetCustomAttributeOne(TypeOf(Reflection.CDeclaringTypeAttribute));
            if (attr == null) return null;
            return attr.DeclaringType;
          }
        }]);

        return CRuntimeFieldInfo;
      }(Reflection.CFieldInfo);

      var CRuntimeParameterInfo = /*#__PURE__*/function (_Reflection$CParamete) {
        _inherits(CRuntimeParameterInfo, _Reflection$CParamete);

        var _super15 = _createSuper(CRuntimeParameterInfo);

        function CRuntimeParameterInfo(prototype, member, parameterIndex, parameterType, parameterName) {
          var _this6;

          _classCallCheck(this, CRuntimeParameterInfo);

          _this6 = _super15.call(this);
          _this6.m_prototype = null; // protected m_methodName: string = null;
          // protected m_descriptor: PropertyDescriptor = null;

          _this6.m_member = null;
          _this6.m_parameterIndex = null;
          _this6.m_parameterName = null;
          _this6.m_parameterType = null;
          _this6.m_metadataCollection = null;
          _this6.m_prototype = prototype;
          _this6.m_member = member;
          _this6.m_parameterIndex = parameterIndex;
          _this6.m_parameterName = parameterName;
          _this6.m_parameterType = parameterType;
          return _this6;
        }

        _createClass(CRuntimeParameterInfo, [{
          key: "GetMetadataKey",
          value: function GetMetadataKey() {
            return new System.Metadata.Core.CMetadataKeyForParameter(this.DeclaringType, System.UAttributeTarget.Parameter, this.m_member.Name, this.ParameterIndex);
          }
        }, {
          key: "GetCustomAttributeOne",
          value: function GetCustomAttributeOne(attributeType) {
            return this.MetadataCollection.GetAttributeOne(attributeType);
          }
        }, {
          key: "GetCustomAttributes",
          value: function GetCustomAttributes(attributeType) {
            return this.MetadataCollection.GetAttributes(attributeType);
          }
        }, {
          key: "GetCustomAttributesAll",
          value: function GetCustomAttributesAll() {
            return this.MetadataCollection.GetAttributesAll();
          }
        }, {
          key: "IsDefined",
          value: function IsDefined(attributeType) {
            return this.MetadataCollection.GetAttributeOne(attributeType) == null ? false : true;
          }
        }, {
          key: "DeclaringType",
          get: function get() {
            return new CRuntimeType(this.m_prototype);
          }
        }, {
          key: "ParameterIndex",
          get: function get() {
            return this.m_parameterIndex;
          }
        }, {
          key: "Name",
          get: function get() {
            return this.m_parameterName;
          }
        }, {
          key: "ParameterType",
          get: function get() {
            return this.m_parameterType;
          }
        }, {
          key: "MetadataCollection",
          get: function get() {
            if (this.m_metadataCollection == null) {
              var key = this.GetMetadataKey();
              this.m_metadataCollection = System.Metadata.Container.GetCollection(key);
            }

            return this.m_metadataCollection;
          }
        }]);

        return CRuntimeParameterInfo;
      }(Reflection.CParameterInfo);
    })(Reflection = System.Reflection || (System.Reflection = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {})); /// <reference path="./Reflection/Type.ts" />


Object.prototype.GetType = function () {
  return iberbar.System.Reflection.TypeOf__(Reflect.getPrototypeOf(this));
};
/**
 * 不可枚举
 */


Reflect.defineProperty(Object.prototype, "GetType", {
  enumerable: false
}); /// <reference path="./CAttributeUsageAttribute.ts" />
/// <reference path="./Object_GetType.ts" />

var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    function AttributeDecorate(attribute) {
      return function (target, propertyName, descriptorOrParameterIndex) {
        var attributeUsage = attribute.GetType().GetCustomAttributeOne(System.Reflection.TypeOf(System.CAttributeUsageAttribute), true);

        if (attributeUsage == null) {
          attributeUsage = System.CAttributeUsageAttribute.DefaultUsage;
        }

        if (propertyName == undefined) {
          propertyName = "constructor";

          if (descriptorOrParameterIndex == null) {
            CAttributeDecorateHelper.DecorateClass(attribute, attributeUsage, target);
          } else if (_typeof(descriptorOrParameterIndex) == "object") {
            CAttributeDecorateHelper.DecorateMethod(attribute, attributeUsage, target, propertyName, descriptorOrParameterIndex.value);
          } else if (typeof descriptorOrParameterIndex == "number") {
            CAttributeDecorateHelper.DecorateParameter(attribute, attributeUsage, target.prototype, propertyName, descriptorOrParameterIndex);
          }
        } else {
          if (descriptorOrParameterIndex == null) {
            CAttributeDecorateHelper.DecorateField(attribute, attributeUsage, target, propertyName);
          } else if (_typeof(descriptorOrParameterIndex) == "object") {
            if (descriptorOrParameterIndex.set == undefined && descriptorOrParameterIndex.get == undefined) {
              CAttributeDecorateHelper.DecorateMethod(attribute, attributeUsage, target, propertyName, descriptorOrParameterIndex.value);
            } else {
              CAttributeDecorateHelper.DecorateProperty(attribute, attributeUsage, target, propertyName);
            }
          } else {
            CAttributeDecorateHelper.DecorateParameter(attribute, attributeUsage, target, propertyName, descriptorOrParameterIndex);
          }
        }
      };
    }

    System.AttributeDecorate = AttributeDecorate;
    System.Attribute = AttributeDecorate;

    var CAttributeDecorateHelper = /*#__PURE__*/function () {
      function CAttributeDecorateHelper() {
        _classCallCheck(this, CAttributeDecorateHelper);
      }

      _createClass(CAttributeDecorateHelper, null, [{
        key: "DecorateClass",
        value: function DecorateClass(attribute, usage, targetConstructor) {
          CAttributeDecorateHelper.CheckTargetValidOn(attribute, usage, System.UAttributeTarget.Class);
          var key = new System.Metadata.Core.CMetadataKeyForClass(System.Reflection.TypeOf__(targetConstructor.prototype), System.UAttributeTarget.Class);
          System.Metadata.Container.GetOrAddCollection(key).AddAttribute(attribute);
        }
      }, {
        key: "DecorateField",
        value: function DecorateField(attribute, usage, targetPrototype, fieldName) {
          CAttributeDecorateHelper.CheckTargetValidOn(attribute, usage, System.UAttributeTarget.Field);
          var key = new System.Metadata.Core.CMetadataKeyForNamed(System.Reflection.TypeOf__(targetPrototype), System.UAttributeTarget.Field, fieldName);
          System.Metadata.Container.GetOrAddCollection(key).AddAttribute(attribute);
        }
      }, {
        key: "DecorateProperty",
        value: function DecorateProperty(attribute, usage, targetPrototype, propertyName) {
          CAttributeDecorateHelper.CheckTargetValidOn(attribute, usage, System.UAttributeTarget.Property);
          var key = new System.Metadata.Core.CMetadataKeyForNamed(System.Reflection.TypeOf__(targetPrototype), System.UAttributeTarget.Property, propertyName);
          System.Metadata.Container.GetOrAddCollection(key).AddAttribute(attribute);
        }
      }, {
        key: "DecorateMethod",
        value: function DecorateMethod(attribute, usage, targetPrototype, methodName, method) {
          CAttributeDecorateHelper.CheckTargetValidOn(attribute, usage, System.UAttributeTarget.Method);
          var key = new System.Metadata.Core.CMetadataKeyForNamed(System.Reflection.TypeOf__(targetPrototype), System.UAttributeTarget.Method, methodName);
          System.Metadata.Container.GetOrAddCollection(key).AddAttribute(attribute);
        }
      }, {
        key: "DecorateParameter",
        value: function DecorateParameter(attribute, usage, targetPrototype, methodName, parameterIndex) {
          CAttributeDecorateHelper.CheckTargetValidOn(attribute, usage, System.UAttributeTarget.Parameter);
          var key = new System.Metadata.Core.CMetadataKeyForParameter(System.Reflection.TypeOf__(targetPrototype), System.UAttributeTarget.Parameter, methodName, parameterIndex);
          System.Metadata.Container.GetOrAddCollection(key).AddAttribute(attribute);
        }
      }, {
        key: "CheckTargetValidOn",
        value: function CheckTargetValidOn(attribute, usage, target) {
          if (usage != null && (usage.ValidOn & target) != target) {
            throw new Error("Can't use ".concat(attribute.constructor.name, " to decorate ").concat(System.UAttributeTarget[target]));
          }
        }
      }]);

      return CAttributeDecorateHelper;
    }();

    CAttributeDecorateHelper.uSymbolForConstruc = "Jasmine::System:Attribute";
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {})); /// <reference path="./CAttributeUsageAttribute.ts" />
/// <reference path="./AttributeDecorate.ts" />


var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    /**
     *
     * @param validOn
     * @param allowMultiple
     * @param inherit
     */
    function AttributeUsage(validOn, allowMultiple, inherit) {
      return System.AttributeDecorate(new System.CAttributeUsageAttribute(validOn, allowMultiple, inherit));
    }

    System.AttributeUsage = AttributeUsage;
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {})); /// <reference path="../UAttributeTarget.ts" />
/// <reference path="../CAttribute.ts" />
/// <reference path="../AttributeUsage.ts" />


var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Reflection;

    (function (Reflection) {
      var CDeclaringTypeAttribute = /*#__PURE__*/function (_System$CAttribute2) {
        _inherits(CDeclaringTypeAttribute, _System$CAttribute2);

        var _super16 = _createSuper(CDeclaringTypeAttribute);

        function CDeclaringTypeAttribute(type, genericTypes) {
          var _this7;

          _classCallCheck(this, CDeclaringTypeAttribute);

          _this7 = _super16.call(this);
          _this7.m_type = null;
          _this7.m_typesGeneric = null;
          _this7.m_typesGenericReal = null;
          _this7.m_type = type;
          _this7.m_typesGeneric = genericTypes;
          if (_this7.m_typesGeneric == null || _this7.m_typesGeneric.length == 0) _this7.m_isGeneric = false;else _this7.m_isGeneric = true;
          return _this7;
        }

        _createClass(CDeclaringTypeAttribute, [{
          key: "DeclaringType",
          get: function get() {
            return this.m_type();
          }
        }, {
          key: "GenericTypes",
          get: function get() {
            if (this.m_isGeneric == false) return null;

            if (this.m_typesGenericReal == null) {
              for (var i = 0; i < this.m_typesGeneric.length; i++) {
                var gt = this.m_typesGeneric[i];
                this.m_typesGenericReal.push(gt());
              }
            }

            return this.m_typesGenericReal;
          }
        }, {
          key: "IsGenericType",
          get: function get() {
            return this.m_typesGeneric == undefined || this.m_typesGeneric.length == 0 ? false : true;
          }
        }]);

        return CDeclaringTypeAttribute;
      }(System.CAttribute);

      CDeclaringTypeAttribute = __decorate([System.AttributeUsage(System.UAttributeTarget.Method | System.UAttributeTarget.Field | System.UAttributeTarget.Property | System.UAttributeTarget.Parameter, false, false), __metadata("design:paramtypes", [Function, Array])], CDeclaringTypeAttribute);
      Reflection.CDeclaringTypeAttribute = CDeclaringTypeAttribute;
      /**
       * 声明装饰器
       *
       * + 装饰 Field 字段：修饰字段类型
       * + 装饰 Property 属性：修饰属性的类型
       * + 装饰 Method 方法：修饰方法的返回值类型
       * + 装饰 Parameter 参数：修饰方法的参数类型
       *
       * @param type
       */

      function DeclaringType(type, genericTypes) {
        return function (target, memberName, descriptorOrParameterIndex) {
          if (typeof descriptorOrParameterIndex == "undefined" || _typeof(descriptorOrParameterIndex) == "object") {
            Reflection.Enumerable(target, memberName, descriptorOrParameterIndex);
          }

          var temp = Array();

          if (genericTypes != null && genericTypes.length > 0) {
            var _loop3 = function _loop3(i) {
              var gt = genericTypes[i];
              temp.push(function () {
                return gt;
              });
            };

            for (var i = 0; i < genericTypes.length; i++) {
              _loop3(i);
            }
          }

          System.AttributeDecorate(new CDeclaringTypeAttribute(function () {
            return type;
          }, temp))(target, memberName, descriptorOrParameterIndex);
        };
      }

      Reflection.DeclaringType = DeclaringType;
      /**
       * 声明装饰器-延后
       *
       * + 装饰 Field 字段：修饰字段类型
       * + 装饰 Property 属性：修饰属性的类型
       * + 装饰 Method 方法：修饰方法的返回值类型
       * + 装饰 Parameter 参数：修饰方法的参数类型
       *
       * @param type
       */

      function DeclaringTypeDelay(type, genericTypes) {
        return function (target, memberName, descriptorOrParameterIndex) {
          if (typeof descriptorOrParameterIndex == "undefined" || _typeof(descriptorOrParameterIndex) == "object") {
            Reflection.Enumerable(target, memberName, descriptorOrParameterIndex);
          }

          System.AttributeDecorate(new CDeclaringTypeAttribute(type, genericTypes))(target, memberName, descriptorOrParameterIndex);
        };
      }

      Reflection.DeclaringTypeDelay = DeclaringTypeDelay;
    })(Reflection = System.Reflection || (System.Reflection = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Reflection;

    (function (Reflection) {
      Reflection.ReflectFieldsKey = "Jasmine::System::Reflect::Fields";

      function Enumerable(target, propertyName, descriptor) {
        if (descriptor == null) {
          var fieldsDescriptor = null; // 检查是否存在相同名称的field字段
          // let protoBase = Reflect.getPrototypeOf( target );
          // while ( protoBase )
          // {
          //     if ( protoBase == null )
          //         break;
          //     if ( protoBase == Object.prototype )
          //         break;
          //     fieldsDescriptor = Reflect.getOwnPropertyDescriptor( protoBase, ReflectFieldsKey );
          //     if ( fieldsDescriptor != null && fieldsDescriptor.value != null && ( propertyName in fieldsDescriptor.value ) )
          //         return;
          //     protoBase = Reflect.getPrototypeOf( protoBase );
          // }

          fieldsDescriptor = Reflect.getOwnPropertyDescriptor(target, Reflection.ReflectFieldsKey);
          var fields = null;

          if (fieldsDescriptor == null) {
            fields = {};
            Reflect.defineProperty(target, Reflection.ReflectFieldsKey, {
              value: fields,
              enumerable: true
            });
          } else {
            fields = fieldsDescriptor.value;
          }

          fields[propertyName] = {};
        } else {
          descriptor.enumerable = true;
        }
      }

      Reflection.Enumerable = Enumerable;
    })(Reflection = System.Reflection || (System.Reflection = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {})); /// <reference path="../UAttributeTarget.ts" />
/// <reference path="../CAttribute.ts" />
/// <reference path="../AttributeUsage.ts" />


var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Reflection;

    (function (Reflection) {
      var CNamedAttribute = /*#__PURE__*/function (_System$CAttribute3) {
        _inherits(CNamedAttribute, _System$CAttribute3);

        var _super17 = _createSuper(CNamedAttribute);

        function CNamedAttribute(text) {
          var _this8;

          _classCallCheck(this, CNamedAttribute);

          _this8 = _super17.call(this);
          _this8.m_text = null;
          _this8.m_text = text;
          return _this8;
        }

        _createClass(CNamedAttribute, [{
          key: "Text",
          get: function get() {
            return this.m_text;
          }
        }]);

        return CNamedAttribute;
      }(System.CAttribute);

      CNamedAttribute = __decorate([System.AttributeUsage(System.UAttributeTarget.Parameter, false, false), __metadata("design:paramtypes", [String])], CNamedAttribute);
      Reflection.CNamedAttribute = CNamedAttribute;

      function Named(text) {
        return System.AttributeDecorate(new CNamedAttribute(text));
      }

      Reflection.Named = Named;
    })(Reflection = System.Reflection || (System.Reflection = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Reflection;

    (function (Reflection) {
      var CTypeNicknameAttribute = /*#__PURE__*/function (_System$CAttribute4) {
        _inherits(CTypeNicknameAttribute, _System$CAttribute4);

        var _super18 = _createSuper(CTypeNicknameAttribute);

        function CTypeNicknameAttribute(nickname) {
          var _this9;

          _classCallCheck(this, CTypeNicknameAttribute);

          _this9 = _super18.call(this);
          _this9.m_nickname = null;
          _this9.m_nickname = nickname;
          return _this9;
        }

        _createClass(CTypeNicknameAttribute, [{
          key: "Nickname",
          get: function get() {
            return this.m_nickname;
          }
        }]);

        return CTypeNicknameAttribute;
      }(System.CAttribute);

      CTypeNicknameAttribute = __decorate([System.AttributeUsage(System.UAttributeTarget.Class, true, false), __metadata("design:paramtypes", [String])], CTypeNicknameAttribute);
      ;

      function TypeNickname(nickname) {
        return System.AttributeDecorate(new CTypeNicknameAttribute(nickname));
      }

      Reflection.TypeNickname = TypeNickname;
      ;

      Reflection.CType.prototype.GetNicknames = function () {
        var nicknames = Array();
        var nicknameAttrs = this.GetCustomAttributes(Reflection.TypeOf(CTypeNicknameAttribute), false);

        for (var i = 0; i < nicknameAttrs.length; i++) {
          var n = nicknameAttrs[i];
          nicknames.push(n.Nickname);
        }

        nicknames.push(this.GetJsConstructor().name);
        return nicknames;
      };

      Reflection.CType.prototype.GetNickname = function () {
        var nicknameAttr = this.GetCustomAttributeOne(Reflection.TypeOf(CTypeNicknameAttribute), false);

        if (nicknameAttr == null) {
          return this.GetJsConstructor().name;
        }

        return nicknameAttr.Nickname;
      };
    })(Reflection = System.Reflection || (System.Reflection = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var Reflection;

    (function (Reflection) {
      var UMemberTypes;

      (function (UMemberTypes) {
        UMemberTypes[UMemberTypes["Constructor"] = 1] = "Constructor";
        UMemberTypes[UMemberTypes["Field"] = 2] = "Field";
        UMemberTypes[UMemberTypes["Method"] = 4] = "Method";
        UMemberTypes[UMemberTypes["Property"] = 8] = "Property";
        UMemberTypes[UMemberTypes["TypeInfo"] = 16] = "TypeInfo";
      })(UMemberTypes = Reflection.UMemberTypes || (Reflection.UMemberTypes = {}));
    })(Reflection = System.Reflection || (System.Reflection = {}));
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    var TCallback = /*#__PURE__*/function () {
      function TCallback(process, handler) {
        _classCallCheck(this, TCallback);

        // this.process = process;
        // this.handler = handler;
        this.m_executable = process.bind(handler);
      } // public get Execute(): T
      // {
      //     return this.m_executable;
      // }


      _createClass(TCallback, [{
        key: "Execute",
        value: function Execute() {
          return this.m_executable.apply(this, arguments);
        }
      }]);

      return TCallback;
    }();

    System.TCallback = TCallback;
    ;

    var TCallbackArray = /*#__PURE__*/function () {
      function TCallbackArray() {
        _classCallCheck(this, TCallbackArray);

        this.callbacks = [];
      }

      _createClass(TCallbackArray, [{
        key: "Add",
        value: function Add(callback) {
          if (callback instanceof Array) {
            for (var i = 0; i < callback.length; i++) {
              var cb = callback[i];
              if (typeof cb == "function") this.callbacks.push(new TCallback(cb));else this.callbacks.push(cb);
            }
          } else {
            if (typeof callback == "function") this.callbacks.push(new TCallback(callback));else this.callbacks.push(callback);
          }
        }
      }, {
        key: "Execute",
        value: function Execute() {
          if (this.callbacks != null && this.callbacks.length > 0) {
            for (var i = 0; i < this.callbacks.length; i++) {
              var cb = this.callbacks[i];
              if (cb == null) continue;
              cb.Execute.apply(cb, arguments);
            }
          }
        }
      }, {
        key: "Copy",
        value: function Copy() {
          var copycat = new TCallbackArray();

          for (var i = 0; i < this.callbacks.length; i++) {
            var cb = this.callbacks[i];
            copycat.callbacks.push(cb);
          }

          return copycat;
        }
      }]);

      return TCallbackArray;
    }();

    System.TCallbackArray = TCallbackArray;
    ;
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));

Object.prototype.__Callback = function (method) {
  return new iberbar.System.TCallback(method, this);
};

Reflect.defineProperty(Object.prototype, "__Callback", {
  enumerable: false
});
var iberbar;

(function (iberbar) {
  var System;

  (function (System) {
    function dynamic_cast(o, t) {
      if (o instanceof t) return o;
      return null;
    }

    System.dynamic_cast = dynamic_cast;
  })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));

Array.prototype.FirstOrDefault = function (predicate) {
  if (predicate == null) {
    if (this.length == 0) return null;
    return this[0];
  }

  for (var i = 0; i < this.length; i++) {
    if (predicate(this[i], i)) return this[i];
  }

  return null;
};

Array.prototype.Where = function (predicate) {
  var temp = [];

  for (var i = 0; i < this.length; i++) {
    if (predicate(this[i], i)) temp.push(this[i]);
  }

  return temp;
};

Array.prototype.RemoveAt = function (index) {
  return this.splice(index, 1);
};

Array.prototype.Remove = function (element) {
  return this.Where(function (e) {
    return e != element;
  });
};

Array.prototype.RemoveWhere = function (predicate) {
  var temp = [];

  for (var i = 0; i < this.length; i++) {
    if (predicate(this[i], i) == false) temp.push(this[i]);
  }

  return temp;
};

Array.convertAll = function (array, converter) {
  var arrayOutput = Array();

  for (var i = 0; i < array.length; i++) {
    var a = array[i];
    arrayOutput.push(converter(a));
  }

  return arrayOutput;
}; // namespace iberbar.System
// {
//     export type OutParameter< T > = { __out: T };
// }
// namespace iberbar.System
// {
//     export type RefParameter< T > = { value: T };
// }
/// <reference path="./Reflection/Type.ts" />
/// <reference path="./Reflection/DeclaringType.ts" />


var TypeOf = iberbar.System.Reflection.TypeOf;
var TypeOfDelay = iberbar.System.Reflection.TypeOfDelay;
var GetObjectType = iberbar.System.Reflection.GetObjectType;
var DeclaringType = iberbar.System.Reflection.DeclaringType;
var DeclaringTypeDelay = iberbar.System.Reflection.DeclaringTypeDelay;
var __Callback = iberbar.System.__Callback;
var AutoReflectMetadata_Constructor = iberbar.System.Reflection.AutoReflectMetadata_Constructor;
var AutoReflectMetadata_Field = iberbar.System.Reflection.AutoReflectMetadata_Field;
var AutoReflectMetadata_Property = iberbar.System.Reflection.AutoReflectMetadata_Property;
var AutoReflectMetadata_Method = iberbar.System.Reflection.AutoReflectMetadata_Method;
"use strict";

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = void 0 && (void 0).__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var CContainerBuilder = /*#__PURE__*/function () {
      function CContainerBuilder() {
        _classCallCheck(this, CContainerBuilder);

        this.m_wasBuilt = false;
        this.m_configurationCallbacks = Array();
      }

      _createClass(CContainerBuilder, [{
        key: "Register",
        value: function Register(type, delegate) {
          var rb = new Autofac.Builder.CRegistrationBuilder(new Autofac.Core.CTypedService(iberbar.System.Reflection.TypeOf(Object)), new Autofac.Builder.CSimpleActivatorData(new Autofac.Activators.Delegate.CDelegateActivator(type, delegate)), new Autofac.Builder.CSingleRegistrationStyle());
          rb.RegisterData.DeferredCallback = this.RegisterCallback(iberbar.System.__Callback(function (cr) {
            Autofac.Builder.CRegistrationBuilderHelper.RegisterSingleComponent(cr, rb);
          }));
          return rb;
        }
      }, {
        key: "RegisterType",
        value: function RegisterType(type) {
          var rb = new Autofac.Builder.CRegistrationBuilder(new Autofac.Core.CTypedService(type), new Autofac.Builder.CConcreteReflectionActivatorData(type), new Autofac.Builder.CSingleRegistrationStyle());
          rb.RegisterData.DeferredCallback = this.RegisterCallback(iberbar.System.__Callback(function (cr) {
            Autofac.Builder.CRegistrationBuilderHelper.RegisterSingleComponent(cr, rb);
          }));
          return rb;
        }
      }, {
        key: "RegisterInstance",
        value: function RegisterInstance(type, instance) {
          var activator = new Autofac.Activators.ProvidedInstance.CProvidedInstanceActivator(instance);
          var rb = new Autofac.Builder.CRegistrationBuilder(new Autofac.Core.CTypedService(type), new Autofac.Builder.CSimpleActivatorData(activator), new Autofac.Builder.CSingleRegistrationStyle());
          rb.SingleInstance();
          rb.RegisterData.DeferredCallback = this.RegisterCallback(iberbar.System.__Callback(function (cr) {
            if (rb.RegisterData.Lifetime instanceof Autofac.Core.Lifetime.CRootScopeLifetime == false || rb.RegisterData.Sharing != Autofac.Core.UInstanceSharing.Shared) {
              throw new Error();
            } // Dispose控制
            // 暂不实现
            // 


            Autofac.Builder.CRegistrationBuilderHelper.RegisterSingleComponent(cr, rb);
          }));
          return rb;
        }
        /**
         * 可以访问注册类中类；
         *
         * 只能注册export的类型;
         *
         * @param assemblies
         */

      }, {
        key: "RegisterAssemblyTypes",
        value: function RegisterAssemblyTypes() {
          for (var _len = arguments.length, assemblies = new Array(_len), _key = 0; _key < _len; _key++) {
            assemblies[_key] = arguments[_key];
          }

          return Autofac.Features.Scanning.CScanningRegistrationExtensions.RegisterAssemblyTypes(this, assemblies);
        }
      }, {
        key: "RegisterTypes",
        value: function RegisterTypes(types) {
          return Autofac.Features.Scanning.CScanningRegistrationExtensions.RegisterTypes(this, types);
        }
      }, {
        key: "RegisterCallback",
        value: function RegisterCallback(configurationCallback) {
          var c = new Autofac.Builder.CDeferredCallback(configurationCallback);
          this.m_configurationCallbacks.push(c);
          return c;
        }
      }, {
        key: "Build",
        value: function Build() {
          var container = new Autofac.Core.CContainer();
          this.BuildInternal(container.ComponentRegistry);
          return container;
        }
      }, {
        key: "BuildInternal",
        value: function BuildInternal(componentRegistry) {
          if (this.m_wasBuilt == true) throw new Error();
          this.m_wasBuilt = true;

          for (var i = 0; i < this.m_configurationCallbacks.length; i++) {
            var callback = this.m_configurationCallbacks[i];
            callback.Callback.Execute(componentRegistry);
          }
        }
      }]);

      return CContainerBuilder;
    }();

    Autofac.CContainerBuilder = CContainerBuilder;
    ;
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var CInjectLifetimeScopeAttribute = /*#__PURE__*/function (_iberbar$System$CAttr) {
      _inherits(CInjectLifetimeScopeAttribute, _iberbar$System$CAttr);

      var _super = _createSuper(CInjectLifetimeScopeAttribute);

      function CInjectLifetimeScopeAttribute() {
        _classCallCheck(this, CInjectLifetimeScopeAttribute);

        return _super.apply(this, arguments);
      }

      return CInjectLifetimeScopeAttribute;
    }(iberbar.System.CAttribute);

    CInjectLifetimeScopeAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Parameter | iberbar.System.UAttributeTarget.Property, false, false)], CInjectLifetimeScopeAttribute);
    Autofac.CInjectLifetimeScopeAttribute = CInjectLifetimeScopeAttribute;

    function InjectLifetimeScope() {
      return iberbar.System.AttributeDecorate(new CInjectLifetimeScopeAttribute());
    }

    Autofac.InjectLifetimeScope = InjectLifetimeScope;
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var CModule = /*#__PURE__*/function () {
      function CModule() {
        _classCallCheck(this, CModule);
      }

      _createClass(CModule, [{
        key: "Load",
        value: function Load() {}
      }]);

      return CModule;
    }();

    Autofac.CModule = CModule;
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var CParameter = function CParameter() {
        _classCallCheck(this, CParameter);
      };

      Core.CParameter = CParameter;
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {})); /// <reference path="./CParameter.ts" />


var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var CConstantParameter = /*#__PURE__*/function (_Core$CParameter) {
        _inherits(CConstantParameter, _Core$CParameter);

        var _super2 = _createSuper(CConstantParameter);

        function CConstantParameter(value, predicate) {
          var _this;

          _classCallCheck(this, CConstantParameter);

          _this = _super2.call(this);
          _this.m_predicate = null;
          _this.m_value = null;
          _this.m_predicate = predicate;
          _this.m_value = value;
          return _this;
        }

        _createClass(CConstantParameter, [{
          key: "CanSupplyValue",
          value: function CanSupplyValue(pi, context) {
            var _this2 = this;

            if (this.m_predicate(pi)) {
              return {
                ret: true,
                valueProvider: function valueProvider() {
                  return _this2.Value;
                }
              };
            }

            return {
              ret: false
            };
          }
        }, {
          key: "Value",
          get: function get() {
            return this.m_value;
          }
        }]);

        return CConstantParameter;
      }(Core.CParameter);

      Core.CConstantParameter = CConstantParameter;
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {})); /// <reference path="./Core/CConstantParameter.ts" />


var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var CNamedParameter = /*#__PURE__*/function (_Autofac$Core$CConsta) {
      _inherits(CNamedParameter, _Autofac$Core$CConsta);

      var _super3 = _createSuper(CNamedParameter);

      function CNamedParameter(name, value) {
        _classCallCheck(this, CNamedParameter);

        return _super3.call(this, value, function (pi) {
          return pi.Name == name;
        });
      }

      return CNamedParameter;
    }(Autofac.Core.CConstantParameter);

    Autofac.CNamedParameter = CNamedParameter;
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {})); /// <reference path="./Core/CConstantParameter.ts" />


var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var CPositionalParameter = /*#__PURE__*/function (_Autofac$Core$CConsta2) {
      _inherits(CPositionalParameter, _Autofac$Core$CConsta2);

      var _super4 = _createSuper(CPositionalParameter);

      function CPositionalParameter(position, value) {
        var _this3;

        _classCallCheck(this, CPositionalParameter);

        _this3 = _super4.call(this, value, function (pi) {
          return pi.ParameterIndex == position;
        });
        _this3.m_position = null;
        _this3.m_position = position;
        return _this3;
      }

      _createClass(CPositionalParameter, [{
        key: "Position",
        get: function get() {
          return this.m_position;
        }
      }]);

      return CPositionalParameter;
    }(Autofac.Core.CConstantParameter);

    Autofac.CPositionalParameter = CPositionalParameter;
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {})); /// <reference path="./Core/CConstantParameter.ts" />


var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var CTypedParameter = /*#__PURE__*/function (_Autofac$Core$CConsta3) {
      _inherits(CTypedParameter, _Autofac$Core$CConsta3);

      var _super5 = _createSuper(CTypedParameter);

      function CTypedParameter(type, value) {
        var _this4;

        _classCallCheck(this, CTypedParameter);

        _this4 = _super5.call(this, value, function (pi) {
          return pi.ParameterType && pi.ParameterType.IsEquivalentTo(type);
        });
        _this4.m_type = null;
        _this4.m_type = type;
        return _this4;
      }

      _createClass(CTypedParameter, [{
        key: "Type",
        get: function get() {
          return this.m_type;
        }
      }]);

      return CTypedParameter;
    }(Autofac.Core.CConstantParameter);

    Autofac.CTypedParameter = CTypedParameter;
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var CInjectionAttribute = /*#__PURE__*/function (_iberbar$System$CAttr2) {
      _inherits(CInjectionAttribute, _iberbar$System$CAttr2);

      var _super6 = _createSuper(CInjectionAttribute);

      function CInjectionAttribute() {
        _classCallCheck(this, CInjectionAttribute);

        return _super6.apply(this, arguments);
      }

      return CInjectionAttribute;
    }(iberbar.System.CAttribute);

    CInjectionAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Field, false, false)], CInjectionAttribute);
    Autofac.CInjectionAttribute = CInjectionAttribute;
    ;

    var CInjectionProviderAttribute = /*#__PURE__*/function (_iberbar$System$CAttr3) {
      _inherits(CInjectionProviderAttribute, _iberbar$System$CAttr3);

      var _super7 = _createSuper(CInjectionProviderAttribute);

      function CInjectionProviderAttribute() {
        _classCallCheck(this, CInjectionProviderAttribute);

        return _super7.apply(this, arguments);
      }

      return CInjectionProviderAttribute;
    }(iberbar.System.CAttribute);

    CInjectionProviderAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Field | iberbar.System.UAttributeTarget.Parameter, false, false)], CInjectionProviderAttribute);
    Autofac.CInjectionProviderAttribute = CInjectionProviderAttribute;

    var CWithNameAttribute = /*#__PURE__*/function (_iberbar$System$CAttr4) {
      _inherits(CWithNameAttribute, _iberbar$System$CAttr4);

      var _super8 = _createSuper(CWithNameAttribute);

      function CWithNameAttribute(name) {
        var _this5;

        _classCallCheck(this, CWithNameAttribute);

        _this5 = _super8.call(this);
        _this5.m_name = null;
        _this5.m_name = name;
        return _this5;
      }

      _createClass(CWithNameAttribute, [{
        key: "Name",
        get: function get() {
          return this.m_name;
        }
      }]);

      return CWithNameAttribute;
    }(iberbar.System.CAttribute);

    CWithNameAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Field | iberbar.System.UAttributeTarget.Parameter, false, false), __metadata("design:paramtypes", [String])], CWithNameAttribute);
    Autofac.CWithNameAttribute = CWithNameAttribute;

    var CWithKeyAttribute = /*#__PURE__*/function (_iberbar$System$CAttr5) {
      _inherits(CWithKeyAttribute, _iberbar$System$CAttr5);

      var _super9 = _createSuper(CWithKeyAttribute);

      function CWithKeyAttribute(key) {
        var _this6;

        _classCallCheck(this, CWithKeyAttribute);

        _this6 = _super9.call(this);
        _this6.m_key = null;
        _this6.m_key = key;
        return _this6;
      }

      _createClass(CWithKeyAttribute, [{
        key: "Key",
        get: function get() {
          return this.m_key;
        }
      }]);

      return CWithKeyAttribute;
    }(iberbar.System.CAttribute);

    CWithKeyAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Field | iberbar.System.UAttributeTarget.Parameter, false, false), __metadata("design:paramtypes", [Object])], CWithKeyAttribute);
    Autofac.CWithKeyAttribute = CWithKeyAttribute;
    /**
     * **（函数声明）**
     *
     * 在类字段位置声明注入
     */

    function Injection() {
      return iberbar.System.Attribute(new CInjectionAttribute());
    }

    Autofac.Injection = Injection;
    /**
     * 注入IProvider提供器
     */

    function InjectionProvider() {
      return function (target, memberName, parameterIndex) {
        if (parameterIndex == undefined) {
          iberbar.System.Reflection.Enumerable(target, memberName);
        }

        iberbar.System.Attribute(new CInjectionProviderAttribute())(target, memberName, parameterIndex);
      };
    }

    Autofac.InjectionProvider = InjectionProvider;

    function WithName(name) {
      return iberbar.System.Attribute(new CWithNameAttribute(name));
    }

    Autofac.WithName = WithName;

    function WithKey(key) {
      return iberbar.System.Attribute(new CWithKeyAttribute(key));
    }

    Autofac.WithKey = WithKey; // /**
    //  * **（数据类型声明）**
    //  * 
    //  * Injection方法的返回类型声明
    //  */
    // export type UInjectionReturn = (
    //     typeWhere: any,
    //     propertyKey: string,
    //     parameterIndex?: number
    // ) => void;
    // /**
    //  * **（函数声明）**
    //  * 
    //  * 在属性或者构造器中的参数位置声明注入
    //  * @param type 注入类型
    //  * @param name 键名、别名
    //  */
    // export function Injection( type: System.Reflection.CType, name?: string | IKey ): UInjectionReturn
    // {
    //     return function(
    //         target: any,
    //         propertyKey: string,
    //         parameterIndex?: number ): void
    //     {
    //         let prototype: System.Reflection.TypePrototype< object > & Builder.UInjectionOnTypePrototype = null;
    //         // 属性注入
    //         if ( parameterIndex == undefined )
    //         {
    //             prototype = target;
    //             let defs: { [ key: string ]: Builder.UInjectionNode } = null;
    //             if ( prototype.hasOwnProperty( Builder.uInjectionForField ) == false )
    //             {
    //                 let defsOld: { [ key: string ]: Builder.UInjectionNode } = prototype[ Builder.uInjectionForField ];
    //                 defs = prototype[ Builder.uInjectionForField ] = Object.assign( {}, defsOld );
    //             }
    //             else
    //             {
    //                 defs = prototype[ Builder.uInjectionForField ];
    //             }
    //             let injectionNode: Builder.UInjectionNode =
    //             {
    //                 type: type
    //             };
    //             if ( name != null )
    //             {
    //                 if ( typeof( name ) == "string" )
    //                     injectionNode.name = name;
    //                 else
    //                     injectionNode.key = name;
    //             }
    //             defs[ propertyKey ] = injectionNode;
    //         }
    //         else
    //         {
    //             // 构造函数注入
    //             if ( propertyKey == undefined )
    //             {
    //                 prototype = target.prototype;
    //                 let defs: Builder.UInjectionNode[] = null;
    //                 if ( prototype.hasOwnProperty( Builder.uInjectionForConstructor ) == false )
    //                 {
    //                     defs = prototype[ Builder.uInjectionForConstructor ] = Array( prototype.constructor.length );
    //                 }
    //                 else
    //                 {
    //                     defs = prototype[ Builder.uInjectionForConstructor ];
    //                 }
    //                 let injectionNode: Builder.UInjectionNode =
    //                 {
    //                     type: type
    //                 };
    //                 if ( name != null )
    //                 {
    //                     if ( typeof( name ) == "string" )
    //                         injectionNode.name = name;
    //                     else
    //                         injectionNode.key = name;
    //                 }
    //                 defs[ parameterIndex ] = injectionNode;
    //             }
    //             // 方法注入
    //             else
    //             {
    //                 prototype = target;
    //                 let defs: { [ key: string ]: Builder.UInjectionNode } = null;
    //                 if ( prototype.hasOwnProperty( Builder.uInjectionForMethod ) == false )
    //                 {
    //                     defs = prototype[ Builder.uInjectionForMethod ] = {};
    //                 }
    //                 else
    //                 {
    //                     defs = prototype[ Builder.uInjectionForMethod ];
    //                 }
    //                 let injectionNode: Builder.UInjectionNode =
    //                 {
    //                     type: type,
    //                 };
    //                 if ( name != null )
    //                 {
    //                     if ( typeof( name ) == "string" )
    //                         injectionNode.name = name;
    //                     else
    //                         injectionNode.key = name;
    //                 }
    //                 defs[ parameterIndex ] = injectionNode;
    //             }
    //         }
    //     }
    // }
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var CStringKey = /*#__PURE__*/function () {
      function CStringKey(str) {
        _classCallCheck(this, CStringKey);

        this.m_str = null;
        this.m_str = str;
      }

      _createClass(CStringKey, [{
        key: "Equals",
        value: function Equals(key) {
          throw new Error("Method not implemented.");
        }
      }]);

      return CStringKey;
    }();

    Autofac.CStringKey = CStringKey; // export class CIndex< TKey extends IKey, TService extends object > extends System.CFunction< ( key: TKey ) => TService >
    // {
    // };
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {})); // namespace iberbar.Autofac
// {
//     /**
//      * **（接口）**
//      * 
//      * Autofac提供器
//      */
//     export interface IProvider
//     {
//         /**
//          * 获取实例
//          * @param type 依赖类型
//          */
//         Resolve< TService extends object >(
//             type: System.Reflection.CType< TService >
//         ): TService;
//         /**
//          * 获取实例
//          * @param type 依赖类型
//          * @param name 键名
//          */
//         ResolveNamed< TService extends object >(
//             type: System.Reflection.CType< TService >,
//             name: string
//         ): TService;
//         /**
//          * 获取实例
//          * @param type 依赖类型
//          * @param key 键名
//          */
//         ResolveKeyed< TService extends object, TKey extends IKey >(
//             type: System.Reflection.CType< TService >,
//             key: TKey
//         ): TService;
//         //ResolveIndex< TKey extends IKey, TService extends object >(): CIndex< TKey, TService >;
//     };
// }


var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    function Resolve(componentContext, type) {
      for (var _len2 = arguments.length, parameters = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        parameters[_key2 - 2] = arguments[_key2];
      }

      var ret = TryResolveService(componentContext, new Autofac.Core.CTypedService(type), parameters);

      if (ret.succeed == false) {
        throw new Error("Can't resolve instance of type (".concat(type.GetNickname(), ")"));
      }

      return ret.instance;
    }

    Autofac.Resolve = Resolve;

    function TryResolveService(componentContext, service, parameters) {
      var registration = componentContext.ComponentRegistry.GetRegistration(service);

      if (registration == null) {
        return {
          succeed: false
        };
      }

      return {
        succeed: true,
        instance: componentContext.ResolveComponent(registration, parameters)
      };
    }

    Autofac.TryResolveService = TryResolveService;
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Activators;

    (function (Activators) {
      var CInstanceActivator = /*#__PURE__*/function () {
        function CInstanceActivator(implementationType) {
          _classCallCheck(this, CInstanceActivator);

          this.m_limitType = null;
          this.m_limitType = implementationType;
        }

        _createClass(CInstanceActivator, [{
          key: "ActivateInstance",
          value: function ActivateInstance(context, parameters) {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "GetLimitType",
          value: function GetLimitType() {
            return this.m_limitType;
          }
        }, {
          key: "Dispose",
          value: function Dispose() {
            throw new Error("Method not implemented.");
          }
        }]);

        return CInstanceActivator;
      }();

      Activators.CInstanceActivator = CInstanceActivator;
    })(Activators = Autofac.Activators || (Autofac.Activators = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Activators;

    (function (Activators) {
      var Delegate;

      (function (Delegate) {
        var CDelegateActivator = /*#__PURE__*/function (_Activators$CInstance) {
          _inherits(CDelegateActivator, _Activators$CInstance);

          var _super10 = _createSuper(CDelegateActivator);

          function CDelegateActivator(implementationType, activationFunction) {
            var _this7;

            _classCallCheck(this, CDelegateActivator);

            _this7 = _super10.call(this, implementationType);
            if (typeof activationFunction == "function") _this7.m_activationFunction = iberbar.System.__Callback(activationFunction);else _this7.m_activationFunction = activationFunction;
            return _this7;
          }

          _createClass(CDelegateActivator, [{
            key: "ActivateInstance",
            value: function ActivateInstance(context, parameters) {
              var result = this.m_activationFunction.Execute(context, parameters);

              if (result == null) {
                throw new Error("....");
              }

              return result;
            }
          }]);

          return CDelegateActivator;
        }(Activators.CInstanceActivator);

        Delegate.CDelegateActivator = CDelegateActivator;
      })(Delegate = Activators.Delegate || (Activators.Delegate = {}));
    })(Activators = Autofac.Activators || (Autofac.Activators = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Activators;

    (function (Activators) {
      var ProvidedInstance;

      (function (ProvidedInstance) {
        var CProvidedInstanceActivator = /*#__PURE__*/function (_Activators$CInstance2) {
          _inherits(CProvidedInstanceActivator, _Activators$CInstance2);

          var _super11 = _createSuper(CProvidedInstanceActivator);

          function CProvidedInstanceActivator(instance) {
            var _this8;

            _classCallCheck(this, CProvidedInstanceActivator);

            _this8 = _super11.call(this, instance.GetType());
            _this8.m_actived = false;
            _this8.m_instance = null;
            _this8.m_instance = instance;
            return _this8;
          }

          _createClass(CProvidedInstanceActivator, [{
            key: "ActivateInstance",
            value: function ActivateInstance(context, parameters) {
              if (this.m_actived == true) throw new Error();
              this.m_actived = true;
              return this.m_instance;
            }
          }]);

          return CProvidedInstanceActivator;
        }(Activators.CInstanceActivator);

        ProvidedInstance.CProvidedInstanceActivator = CProvidedInstanceActivator;
      })(ProvidedInstance = Activators.ProvidedInstance || (Activators.ProvidedInstance = {}));
    })(Activators = Autofac.Activators || (Autofac.Activators = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Activators;

    (function (Activators) {
      var Reflection;

      (function (Reflection) {
        var CAutowiringParameter = /*#__PURE__*/function (_Autofac$Core$CParame) {
          _inherits(CAutowiringParameter, _Autofac$Core$CParame);

          var _super12 = _createSuper(CAutowiringParameter);

          function CAutowiringParameter() {
            _classCallCheck(this, CAutowiringParameter);

            return _super12.apply(this, arguments);
          }

          _createClass(CAutowiringParameter, [{
            key: "CanSupplyValue",
            value: function CanSupplyValue(pi, context) {
              var registration;

              if (pi.GetCustomAttributeOne(iberbar.System.Reflection.TypeOf(Autofac.CInjectLifetimeScopeAttribute)) != null) {
                registration = context.ComponentRegistry.GetRegistration(new Autofac.Core.CLifetimeScopeService());
                if (registration == null) return {
                  ret: false
                };
                return {
                  ret: true,
                  valueProvider: function valueProvider() {
                    return context.ResolveComponent(registration, []);
                  }
                };
              }

              if (pi.ParameterType == null) return {
                ret: false
              };
              registration = context.ComponentRegistry.GetRegistration(new Autofac.Core.CTypedService(pi.ParameterType));
              if (registration == null) return {
                ret: false
              };
              return {
                ret: true,
                valueProvider: function valueProvider() {
                  return context.ResolveComponent(registration, []);
                }
              };
            }
          }]);

          return CAutowiringParameter;
        }(Autofac.Core.CParameter);

        Reflection.CAutowiringParameter = CAutowiringParameter;
      })(Reflection = Activators.Reflection || (Activators.Reflection = {}));
    })(Activators = Autofac.Activators || (Autofac.Activators = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Activators;

    (function (Activators) {
      var Reflection;

      (function (Reflection) {
        var CTypeComparer = /*#__PURE__*/function () {
          function CTypeComparer() {
            _classCallCheck(this, CTypeComparer);
          }

          _createClass(CTypeComparer, [{
            key: "Equals",
            value: function Equals(a, b) {
              return a.IsEquivalentTo(b);
            }
          }]);

          return CTypeComparer;
        }();

        var CAutowiringPropertyInjector = /*#__PURE__*/function () {
          function CAutowiringPropertyInjector() {
            _classCallCheck(this, CAutowiringPropertyInjector);
          }

          _createClass(CAutowiringPropertyInjector, null, [{
            key: "InjectProperties",

            /**
             *
             * @param context
             * @param instance
             * @param propertySelector
             * @param parameters 注意，此处的参数列表是Resolve时传入的
             */
            value: function InjectProperties(context, instance, propertySelector, parameters) {
              var type = instance.GetType();
              var injectableProperties = this.InjectableProperties.Get(type);

              if (injectableProperties == null) {
                this.InjectableProperties.Add(type, injectableProperties = this.GetInjectableProperties(type));
              }

              for (var i = 0; i < injectableProperties.length; i++) {
                var propertyInfo = injectableProperties[i];
                if (propertySelector.InjectProperty(propertyInfo, instance) == false) continue; // let setParameter = propertyInfo.GetSetMethod().GetParameters()[ 0 ];
                // let parameter = parameters.FirstOrDefault( ( p ) => p.CanSupplyValue( setParameter, context ).ret == true );
                // if ( parameter != null )
                // {
                // }

                var registration = void 0;

                if (propertyInfo.GetCustomAttributeOne(iberbar.System.Reflection.TypeOf(Autofac.CInjectLifetimeScopeAttribute)) != null) {
                  registration = context.ComponentRegistry.GetRegistration(new Autofac.Core.CLifetimeScopeService());
                  if (registration == null) throw new Error("Can't resolve the instance of type (ILifetimeScope)");
                } else {
                  var propertyType = propertyInfo.PropertyType;
                  if (propertyType == null) continue;
                  var propertyService = new Autofac.Core.CTypedService(propertyType);
                  registration = context.ComponentRegistry.GetRegistration(propertyService);
                  if (registration == null) continue;
                }

                var propertyValue = null;

                try {
                  propertyValue = context.ResolveComponent(registration, []);
                } catch (e) {
                  console.error(e);
                }

                propertyInfo.SetValue(instance, propertyValue);
              }
            }
          }, {
            key: "GetInjectableProperties",
            value: function GetInjectableProperties(instanceType) {
              var injectableProperties = [];
              var properties = instanceType.GetProperties();

              for (var i = 0; i < properties.length; i++) {
                var pi = properties[i];
                if (pi.CanWrite == false) continue;
                injectableProperties.push(pi);
              }

              return injectableProperties;
            }
          }]);

          return CAutowiringPropertyInjector;
        }();

        CAutowiringPropertyInjector.InjectableProperties = new iberbar.System.Collections.Generic.CDictionary({
          comparer: new CTypeComparer()
        });
        Reflection.CAutowiringPropertyInjector = CAutowiringPropertyInjector;
      })(Reflection = Activators.Reflection || (Activators.Reflection = {}));
    })(Activators = Autofac.Activators || (Autofac.Activators = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Activators;

    (function (Activators) {
      var Reflection;

      (function (Reflection) {
        var CConstructorParameterBinding = /*#__PURE__*/function () {
          function CConstructorParameterBinding(ci, availableParameters, context) {
            _classCallCheck(this, CConstructorParameterBinding);

            this.m_canInstantiate = false;
            this.m_ci = null;
            this.m_valueRetrievers = null;
            this.m_firstNonBindableParameter = null;
            this.m_ci = ci;
            this.m_canInstantiate = true;
            var parameters = ci.GetParameters();
            this.m_valueRetrievers = Array(parameters.length);

            for (var i = 0; i < parameters.length; i++) {
              var pi = parameters[i];
              var foundValue = false;

              for (var j = 0; j < availableParameters.length; j++) {
                var param = availableParameters[j];
                var canSupplyValue = param.CanSupplyValue(pi, context);

                if (canSupplyValue.ret == true) {
                  this.m_valueRetrievers[i] = canSupplyValue.valueProvider;
                  foundValue = true;
                  break;
                }
              }

              if (foundValue == false) {
                this.m_canInstantiate = false;
                this.m_firstNonBindableParameter = pi;
                break;
              }
            }
          }

          _createClass(CConstructorParameterBinding, [{
            key: "Instantiate",
            value: function Instantiate() {
              if (this.CanInstantiate == false) throw new Error();
              var values = Array(this.m_valueRetrievers.length);

              for (var i = 0; i < this.m_valueRetrievers.length; i++) {
                var m_valueRetrieverTemp = this.m_valueRetrievers[i];
                if (m_valueRetrieverTemp == null || m_valueRetrieverTemp == undefined) continue;
                values[i] = m_valueRetrieverTemp();
              }

              try {
                var _this$m_ci;

                return (_this$m_ci = this.m_ci).Invoke.apply(_this$m_ci, values);
              } catch (e) {
                throw e;
              }
            }
          }, {
            key: "CanInstantiate",
            get: function get() {
              return this.m_canInstantiate;
            }
          }]);

          return CConstructorParameterBinding;
        }();

        Reflection.CConstructorParameterBinding = CConstructorParameterBinding;
      })(Reflection = Activators.Reflection || (Activators.Reflection = {}));
    })(Activators = Autofac.Activators || (Autofac.Activators = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Activators;

    (function (Activators) {
      var Reflection;

      (function (Reflection) {
        var CDefaultValueParameter = /*#__PURE__*/function (_Autofac$Core$CParame2) {
          _inherits(CDefaultValueParameter, _Autofac$Core$CParame2);

          var _super13 = _createSuper(CDefaultValueParameter);

          function CDefaultValueParameter() {
            _classCallCheck(this, CDefaultValueParameter);

            return _super13.apply(this, arguments);
          }

          _createClass(CDefaultValueParameter, [{
            key: "CanSupplyValue",
            value: function CanSupplyValue(pi, context) {
              return {
                ret: true,
                valueProvider: function valueProvider() {
                  return null;
                }
              };
            }
          }]);

          return CDefaultValueParameter;
        }(Autofac.Core.CParameter);

        Reflection.CDefaultValueParameter = CDefaultValueParameter;
      })(Reflection = Activators.Reflection || (Activators.Reflection = {}));
    })(Activators = Autofac.Activators || (Autofac.Activators = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {})); /// <reference path="../CInstanceActivator.ts" />


var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Activators;

    (function (Activators) {
      var Reflection;

      (function (Reflection) {
        /**
         * Uses reflection to activate instances of a type.
         */
        var CReflectionActivator = /*#__PURE__*/function (_Activators$CInstance3) {
          _inherits(CReflectionActivator, _Activators$CInstance3);

          var _super14 = _createSuper(CReflectionActivator);

          function CReflectionActivator(implementationType, configuredParameters, configuredProperties) {
            var _this9;

            _classCallCheck(this, CReflectionActivator);

            _this9 = _super14.call(this, implementationType);
            _this9.m_implementationType = null;
            _this9.m_configuredProperties = null;
            _this9.m_defaultParameters = null;
            _this9.m_constructor = null;
            _this9.m_implementationType = implementationType;
            _this9.m_constructor = _this9.m_implementationType.GetConstructor();
            _this9.m_defaultParameters = configuredParameters.concat([new Reflection.CAutowiringParameter(), new Reflection.CDefaultValueParameter()]);
            _this9.m_configuredProperties = configuredProperties;
            return _this9;
          }

          _createClass(CReflectionActivator, [{
            key: "ActivateInstance",
            value: function ActivateInstance(context, parameters) {
              var binding = this.GetConstructorBinding(context, parameters);

              if (binding.CanInstantiate == false) {
                throw new Error();
              }

              var instance = binding.Instantiate(); // let instance: object = null;
              // let constructorParameters = this.m_constructor.GetParameters();
              // if ( constructorParameters.length > 0 )
              // {
              //     let values = Array< object >( constructorParameters.length );
              //     for ( let i = 0; i < constructorParameters.length; i ++ )
              //     {
              //         const cp = constructorParameters[ i ];
              //         let typeAttribute = cp.GetCustomAttributeOne( System.Reflection.TypeOf( System.Reflection.CDeclaringTypeAttribute ) );
              //         if ( typeAttribute == null )
              //         {
              //             values[ i ] = null;
              //         }
              //         else
              //         {
              //         }
              //     }
              // }
              // else
              // {
              //     instance = this.m_constructor.Invoke();
              // }

              this.InjectProperties(instance, context);
              return instance;
            }
          }, {
            key: "Dispose",
            value: function Dispose() {
              throw new Error("Method not implemented.");
            }
          }, {
            key: "GetConstructorBinding",
            value: function GetConstructorBinding(context, parameters) {
              var prioritisedParameters = [];
              if (parameters != null && parameters.length > 0) prioritisedParameters = parameters;
              if (this.m_defaultParameters != null && this.m_defaultParameters.length > 0) prioritisedParameters = prioritisedParameters.concat(this.m_defaultParameters);
              var binding = new Reflection.CConstructorParameterBinding(this.m_constructor, prioritisedParameters, context);
              return binding;
            }
          }, {
            key: "InjectProperties",
            value: function InjectProperties(instance, context) {
              if (this.m_configuredProperties.length == 0) return;
              var actualProperties = instance.GetType().GetProperties().Where(function (pi) {
                return pi.CanWrite;
              });

              for (var i = 0; i < this.m_configuredProperties.length; i++) {
                var configuredProperty = this.m_configuredProperties[i];

                for (var _i = 0; _i < actualProperties.length; _i++) {
                  var propertyInfo = actualProperties[_i];

                  if (propertyInfo.GetCustomAttributeOne(iberbar.System.Reflection.TypeOf(Autofac.CInjectLifetimeScopeAttribute)) != null) {
                    configuredProperty = new Reflection.CAutowiringParameter();
                  }

                  var setter = propertyInfo.GetSetMethod();
                  var canSupplyValue = configuredProperty.CanSupplyValue(setter.GetParameters()[0], context);

                  if (canSupplyValue.ret == true) {
                    actualProperties.splice(_i, 1);
                    propertyInfo.SetValue(instance, canSupplyValue.valueProvider());
                    break;
                  }
                }
              }
            }
          }]);

          return CReflectionActivator;
        }(Activators.CInstanceActivator);

        Reflection.CReflectionActivator = CReflectionActivator;
      })(Reflection = Activators.Reflection || (Activators.Reflection = {}));
    })(Activators = Autofac.Activators || (Autofac.Activators = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Builder;

    (function (Builder) {
      var CReflectionActivatorData = /*#__PURE__*/function () {
        function CReflectionActivatorData(implementer) {
          _classCallCheck(this, CReflectionActivatorData);

          this.m_implementationType = null;
          this.m_constructor = null;
          this.m_configuredParameters = [];
          this.m_configuredProperties = [];
          this.m_implementationType = implementer;
          this.m_constructor = this.m_implementationType.GetConstructor();
        }

        _createClass(CReflectionActivatorData, [{
          key: "ImplementationType",
          get: function get() {
            return this.m_implementationType;
          }
        }, {
          key: "ConfiguredParameters",
          get: function get() {
            return this.m_configuredParameters;
          }
        }, {
          key: "ConfiguredProperties",
          get: function get() {
            return this.m_configuredProperties;
          }
        }]);

        return CReflectionActivatorData;
      }();

      Builder.CReflectionActivatorData = CReflectionActivatorData;
    })(Builder = Autofac.Builder || (Autofac.Builder = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {})); /// <reference path="./CReflectionActivatorData.ts" />


var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Builder;

    (function (Builder) {
      /**
       * Reflection activator data for concrete types.
       */
      var CConcreteReflectionActivatorData = /*#__PURE__*/function (_Builder$CReflectionA) {
        _inherits(CConcreteReflectionActivatorData, _Builder$CReflectionA);

        var _super15 = _createSuper(CConcreteReflectionActivatorData);

        //private readonly m_activator: Core.IInstanceActivator = null;
        function CConcreteReflectionActivatorData(implementer) {
          _classCallCheck(this, CConcreteReflectionActivatorData);

          return _super15.call(this, implementer);
        }

        _createClass(CConcreteReflectionActivatorData, [{
          key: "GetTypes",
          value: function GetTypes() {
            var _this10 = this;

            return function () {
              return _this10.ImplementationType;
            };
          }
        }, {
          key: "GetActivator",
          value: function GetActivator() {
            return new Autofac.Activators.Reflection.CReflectionActivator(this.ImplementationType, this.ConfiguredParameters, this.ConfiguredProperties);
          }
        }, {
          key: "Dispose",
          value: function Dispose() {
            throw new Error("Method not implemented.");
          }
        }]);

        return CConcreteReflectionActivatorData;
      }(Builder.CReflectionActivatorData);

      Builder.CConcreteReflectionActivatorData = CConcreteReflectionActivatorData;
    })(Builder = Autofac.Builder || (Autofac.Builder = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Builder;

    (function (Builder) {
      var CDeferredCallback = /*#__PURE__*/function () {
        function CDeferredCallback(callback) {
          _classCallCheck(this, CDeferredCallback);

          this.m_callback = null;
          this.m_callback = callback;
        }

        _createClass(CDeferredCallback, [{
          key: "Callback",
          get: function get() {
            return this.m_callback;
          }
        }]);

        return CDeferredCallback;
      }();

      Builder.CDeferredCallback = CDeferredCallback;
    })(Builder = Autofac.Builder || (Autofac.Builder = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Builder;

    (function (Builder) {
      var CRegistrationBuilder = /*#__PURE__*/function () {
        function CRegistrationBuilder(service, activatorData, style) {
          _classCallCheck(this, CRegistrationBuilder);

          this.m_registrationData = null;
          this.m_activatorData = null;
          this.m_registrationStyle = null;
          this.m_registrationData = new Builder.CRegistrationData(service);
          this.m_activatorData = activatorData;
          this.m_registrationStyle = style;
        }

        _createClass(CRegistrationBuilder, [{
          key: "GetActivatorDataEx",
          value: function GetActivatorDataEx(t) {
            if (this.m_activatorData instanceof t) {
              return this.m_activatorData;
            }

            return null;
          }
        }, {
          key: "Named",
          value: function Named(type, name) {
            this.m_registrationData.AddService(new Autofac.Core.CKeyedService(name, type));
            return this;
          }
        }, {
          key: "Keyed",
          value: function Keyed(type, key) {
            this.m_registrationData.AddService(new Autofac.Core.CKeyedService(key, type));
            return this;
          }
        }, {
          key: "KeyedMapping",
          value: function KeyedMapping(type, servicesKeyMapping) {
            if (this.m_activatorData instanceof Builder.CScanningActivatorData) {
              this.m_activatorData.Filters.push(function (t) {
                return t.IsInheritFrom(type);
              });

              this.__As2(function (t) {
                return new Autofac.Core.CKeyedService(servicesKeyMapping(t), type);
              });
            } else if (this.m_activatorData instanceof Builder.CConcreteReflectionActivatorData) {
              this.m_registrationData.AddService(new Autofac.Core.CKeyedService(servicesKeyMapping(this.m_activatorData.ImplementationType), this.m_activatorData.ImplementationType));
            }

            return this;
          }
        }, {
          key: "As",
          value: function As(type) {
            this.m_registrationData.AddService(new Autofac.Core.CTypedService(type));
            return this;
          }
        }, {
          key: "AsEx",
          value: function AsEx(services) {
            this.m_registrationData.AddServices(services);
            return this;
          }
        }, {
          key: "__As1",
          value: function __As1(serviceMapping) {
            return this.__As2(function (t) {
              return new Autofac.Core.CTypedService(serviceMapping(t));
            });
          }
        }, {
          key: "__As2",
          value: function __As2(serviceMapping) {
            return this.__As3(function (t) {
              return [serviceMapping(t)];
            });
          }
        }, {
          key: "__As3",
          value: function __As3(serviceMapping) {
            return Autofac.Features.Scanning.CScanningRegistrationExtensions.As(this, serviceMapping);
          }
        }, {
          key: "AsSelf",
          value: function AsSelf() {
            if (this.m_activatorData instanceof Builder.CScanningActivatorData) {
              this.__As1(function (t) {
                return t;
              });
            } else if (this.m_activatorData instanceof Builder.CConcreteReflectionActivatorData) {
              this.m_registrationData.AddService(new Autofac.Core.CTypedService(this.m_activatorData.ImplementationType));
            } //return this.__As( this.m_activatorData.GetTypes() );


            return this;
          }
        }, {
          key: "Where",
          value: function Where(predicate) {
            if (this.m_activatorData instanceof Builder.CScanningActivatorData == false) throw new Error();
            this.m_activatorData.Filters.push(predicate);
            return this;
          }
        }, {
          key: "SingleInstance",
          value: function SingleInstance() {
            this.m_registrationData.Sharing = Autofac.Core.UInstanceSharing.Shared;
            this.m_registrationData.Lifetime = new Autofac.Core.Lifetime.CRootScopeLifetime();
            return this;
          }
        }, {
          key: "InstancePerDependency",
          value: function InstancePerDependency() {
            this.m_registrationData.Sharing = Autofac.Core.UInstanceSharing.None;
            this.m_registrationData.Lifetime = new Autofac.Core.Lifetime.CCurrentScopeLifetime();
            return this;
          }
        }, {
          key: "InstancePerLifetimeScope",
          value: function InstancePerLifetimeScope() {
            this.m_registrationData.Sharing = Autofac.Core.UInstanceSharing.Shared;
            this.m_registrationData.Lifetime = new Autofac.Core.Lifetime.CCurrentScopeLifetime();
            return this;
          }
        }, {
          key: "InstancePerMatchingLifetimeScope",
          value: function InstancePerMatchingLifetimeScope() {
            this.m_registrationData.Sharing = Autofac.Core.UInstanceSharing.Shared;

            for (var _len3 = arguments.length, scopeTag = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              scopeTag[_key3] = arguments[_key3];
            }

            this.m_registrationData.Lifetime = _construct(Autofac.Core.Lifetime.CMatchingScopeLifetime, scopeTag);
            return this;
          }
        }, {
          key: "PropertiesAutowired",
          value: function PropertiesAutowired(propertySelector) {
            if (propertySelector == undefined) {
              propertySelector = new Autofac.Core.CDefaultPropertySelector(false);
            }

            this.m_registrationData.ActivatingHandlers.Add(function (sender, e) {
              Autofac.Activators.Reflection.CAutowiringPropertyInjector.InjectProperties(e.Context, e.Instance, propertySelector, e.Parameters);
            });
            return this;
          }
        }, {
          key: "WithParameter",
          value: function WithParameter(parameter) {
            var activatorData = this.GetActivatorDataEx(Builder.CReflectionActivatorData);

            if (activatorData != null) {
              activatorData.ConfiguredParameters.push(parameter);
            }

            return this;
          }
        }, {
          key: "WithParameters",
          value: function WithParameters(parameters) {
            for (var i = 0; i < parameters.length; i++) {
              var p = parameters[i];
              this.WithParameter(p);
            }

            return this;
          }
        }, {
          key: "WithProperty",
          value: function WithProperty(parameter) {
            var activatorData = this.GetActivatorDataEx(Builder.CReflectionActivatorData);
            if (activatorData != null) activatorData.ConfiguredProperties.push(parameter);
            return this;
          }
        }, {
          key: "WithProperties",
          value: function WithProperties(parameters) {
            for (var i = 0; i < parameters.length; i++) {
              var p = parameters[i];
              this.WithProperty(p);
            }

            return this;
          }
        }, {
          key: "OnActivating",
          value: function OnActivating(callback) {
            this.m_registrationData.ActivatingHandlers.Add(function (s, e) {
              var args = new Autofac.Core.CActivatingEventArgs(e.Context, e.Registration, e.Parameters, e.Instance);
              if (typeof callback == "function") callback(args);else callback.Execute(args);
              e.Instance = args.Instance;
            });
            return this;
          }
        }, {
          key: "OnActivated",
          value: function OnActivated() {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "RegisterData",
          get: function get() {
            return this.m_registrationData;
          }
        }, {
          key: "ActivatorData",
          get: function get() {
            return this.m_activatorData;
          }
        }, {
          key: "RegistrationStyle",
          get: function get() {
            return this.m_registrationStyle;
          }
        }]);

        return CRegistrationBuilder;
      }();

      Builder.CRegistrationBuilder = CRegistrationBuilder;
    })(Builder = Autofac.Builder || (Autofac.Builder = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Builder;

    (function (Builder) {
      var CRegistrationBuilderHelper = /*#__PURE__*/function () {
        function CRegistrationBuilderHelper() {
          _classCallCheck(this, CRegistrationBuilderHelper);
        }

        _createClass(CRegistrationBuilderHelper, null, [{
          key: "RegisterSingleComponent",
          value: function RegisterSingleComponent(cr, rb) {
            var registration = this.CreateRegistrationForBuilder(rb);
            cr.Register(registration, false);
          }
        }, {
          key: "CreateRegistrationForBuilder",
          value: function CreateRegistrationForBuilder(rb) {
            return this.CreateRegistration(rb.RegistrationStyle.ID, rb.RegisterData, rb.ActivatorData.GetActivator(), rb.RegisterData.GetServices());
          }
        }, {
          key: "CreateRegistration",
          value: function CreateRegistration(id, data, activator, services, target) {
            var limitType = activator.GetLimitType();

            for (var i = 0; i < services.length; i++) {
              var ts = services[i];
              if (ts.hasOwnProperty("GetServiceType") == false) continue;

              if (limitType.IsInheritFrom(ts.GetServiceType()) == false) {
                throw new Error("");
              }
            }

            var registration = new Autofac.Core.Registration.CComponentRegistration(id, activator, data.Lifetime, data.Sharing, null, data.GetServices(), null, target);
            registration.Activating.Add(data.ActivatingHandlers.callbacks);
            return registration;
          }
        }]);

        return CRegistrationBuilderHelper;
      }();

      Builder.CRegistrationBuilderHelper = CRegistrationBuilderHelper;
    })(Builder = Autofac.Builder || (Autofac.Builder = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Builder;

    (function (Builder) {
      var CRegistrationData = /*#__PURE__*/function () {
        function CRegistrationData(defaultService) {
          _classCallCheck(this, CRegistrationData);

          this.m_defaultService = null;
          this.m_defaultServiceOverriden = false;
          this.m_services = Array();
          this.m_sharing = Autofac.Core.UInstanceSharing.None;
          this.m_lifetime = new Autofac.Core.Lifetime.CCurrentScopeLifetime();
          this.m_deferredCallback = null;
          this.m_activatingHandlers = new iberbar.System.TCallbackArray();
          this.m_defaultService = defaultService;
        }

        _createClass(CRegistrationData, [{
          key: "AddService",
          value: function AddService(service) {
            this.m_defaultServiceOverriden = true;
            this.m_services.push(service);
          }
        }, {
          key: "AddServices",
          value: function AddServices(services) {
            this.m_defaultServiceOverriden = true;
            this.m_services = this.m_services.concat(services);
          }
        }, {
          key: "GetServices",
          value: function GetServices() {
            if (this.m_defaultServiceOverriden == true) return this.m_services;
            return this.m_services.length == 0 ? [this.m_defaultService] : this.m_services;
          }
        }, {
          key: "CopyFrom",
          value: function CopyFrom(that, includeDefaultService) {
            if (includeDefaultService == true) this.m_defaultService = that.m_defaultService;
            this.m_defaultServiceOverriden = that.m_defaultServiceOverriden;
            this.m_lifetime = that.m_lifetime;
            this.m_sharing = that.m_sharing;
            this.m_services = this.CopyArray(that.m_services);
            this.m_activatingHandlers = that.m_activatingHandlers.Copy();
          }
        }, {
          key: "CopyArray",
          value: function CopyArray(src) {
            var dest = [];

            for (var i = 0; i < src.length; i++) {
              var temp = src[i];
              dest.push(temp);
            }

            return dest;
          }
        }, {
          key: "Lifetime",
          set: function set(value) {
            this.m_lifetime = value;
          },
          get: function get() {
            return this.m_lifetime;
          }
        }, {
          key: "Sharing",
          set: function set(value) {
            this.m_sharing = value;
          },
          get: function get() {
            return this.m_sharing;
          }
        }, {
          key: "DeferredCallback",
          set: function set(value) {
            this.m_deferredCallback = value;
          },
          get: function get() {
            return this.m_deferredCallback;
          }
        }, {
          key: "ActivatingHandlers",
          get: function get() {
            return this.m_activatingHandlers;
          }
        }]);

        return CRegistrationData;
      }();

      Builder.CRegistrationData = CRegistrationData;
      ;
    })(Builder = Autofac.Builder || (Autofac.Builder = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Builder;

    (function (Builder) {
      var CScanningActivatorData = /*#__PURE__*/function (_Builder$CReflectionA2) {
        _inherits(CScanningActivatorData, _Builder$CReflectionA2);

        var _super16 = _createSuper(CScanningActivatorData);

        function CScanningActivatorData() {
          var _this11;

          _classCallCheck(this, CScanningActivatorData);

          _this11 = _super16.call(this, iberbar.System.Reflection.TypeOf(Object));
          _this11.m_filter = [];
          _this11.m_configurationActions = [];
          return _this11;
        }

        _createClass(CScanningActivatorData, [{
          key: "GetTypes",
          value: function GetTypes() {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "GetActivator",
          value: function GetActivator() {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "Filters",
          get: function get() {
            return this.m_filter;
          }
        }, {
          key: "ConfigurationActions",
          get: function get() {
            return this.m_configurationActions;
          }
        }]);

        return CScanningActivatorData;
      }(Builder.CReflectionActivatorData);

      Builder.CScanningActivatorData = CScanningActivatorData;
    })(Builder = Autofac.Builder || (Autofac.Builder = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Builder;

    (function (Builder) {
      var CSimpleActivatorData = /*#__PURE__*/function () {
        function CSimpleActivatorData(activator) {
          _classCallCheck(this, CSimpleActivatorData);

          this.m_activator = null;
          this.m_activator = activator;
        }

        _createClass(CSimpleActivatorData, [{
          key: "GetTypes",
          value: function GetTypes() {
            var _this12 = this;

            return function () {
              return _this12.m_activator.GetLimitType();
            };
          }
        }, {
          key: "GetActivator",
          value: function GetActivator() {
            return this.m_activator;
          }
        }]);

        return CSimpleActivatorData;
      }();

      Builder.CSimpleActivatorData = CSimpleActivatorData;
    })(Builder = Autofac.Builder || (Autofac.Builder = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Builder;

    (function (Builder) {
      var CSingleRegistrationStyle = /*#__PURE__*/function () {
        function CSingleRegistrationStyle() {
          _classCallCheck(this, CSingleRegistrationStyle);

          this.m_id = Autofac.Core.GenID();
          this.m_preserveDefaults = false;
        }

        _createClass(CSingleRegistrationStyle, [{
          key: "ID",
          get: function get() {
            return this.m_id;
          }
        }, {
          key: "PreserveDefaults",
          set: function set(value) {
            this.m_preserveDefaults = value;
          },
          get: function get() {
            return this.m_preserveDefaults;
          }
        }]);

        return CSingleRegistrationStyle;
      }();

      Builder.CSingleRegistrationStyle = CSingleRegistrationStyle;
    })(Builder = Autofac.Builder || (Autofac.Builder = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Builder;

    (function (Builder) {
      ;
    })(Builder = Autofac.Builder || (Autofac.Builder = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var CActivatingEventArgs = /*#__PURE__*/function () {
        function CActivatingEventArgs(context, registration, parameters, instance) {
          _classCallCheck(this, CActivatingEventArgs);

          this.m_instance = null;
          this.m_context = null;
          this.m_registration = null;
          this.m_parameters = null;
          this.m_context = context;
          this.m_registration = registration;
          this.m_parameters = parameters;
          this.m_instance = instance;
        }

        _createClass(CActivatingEventArgs, [{
          key: "ReplaceInstance",
          value: function ReplaceInstance(instance) {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "Context",
          get: function get() {
            return this.m_context;
          }
        }, {
          key: "Registration",
          get: function get() {
            return this.m_registration;
          }
        }, {
          key: "Parameters",
          get: function get() {
            return this.m_parameters;
          }
        }, {
          key: "Instance",
          get: function get() {
            return this.m_instance;
          },
          set: function set(value) {
            if (value == null) throw Error("");
            this.m_instance = value;
          }
        }]);

        return CActivatingEventArgs;
      }();

      Core.CActivatingEventArgs = CActivatingEventArgs;
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var CContainer = /*#__PURE__*/function () {
        function CContainer() {
          _classCallCheck(this, CContainer);

          this.m_rootLifetimeScope = null;
          this.m_componentRegistry = null;
          this.m_componentRegistry = new Core.Registration.CComponentRegistry();
          this.m_componentRegistry.Register(new Core.Registration.CComponentRegistration(Core.Lifetime.CLifetimeScope.SelfRegistrationId, new Autofac.Activators.Delegate.CDelegateActivator(iberbar.System.Reflection.TypeOf(Object), function () {
            throw new Error();
          }), new Core.Lifetime.CCurrentScopeLifetime(), Core.UInstanceSharing.Shared, null, [new Core.CLifetimeScopeService()], null));
          this.m_rootLifetimeScope = new Core.Lifetime.CLifetimeScope(this.m_componentRegistry, null, null);
        }

        _createClass(CContainer, [{
          key: "GetTag",
          value: function GetTag() {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "BeginLifetimeScope",
          value: function BeginLifetimeScope(tag) {
            return this.m_rootLifetimeScope.BeginLifetimeScope(tag);
          }
        }, {
          key: "Dispose",
          value: function Dispose() {
            this.m_rootLifetimeScope.Dispose();
          }
        }, {
          key: "ResolveComponent",
          value: function ResolveComponent(registration, parameters) {
            return this.m_rootLifetimeScope.ResolveComponent(registration, parameters);
          }
        }, {
          key: "Resolve",
          value: function Resolve(type) {
            var _this$m_rootLifetimeS;

            for (var _len4 = arguments.length, parameters = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
              parameters[_key4 - 1] = arguments[_key4];
            }

            return (_this$m_rootLifetimeS = this.m_rootLifetimeScope).Resolve.apply(_this$m_rootLifetimeS, [type].concat(parameters));
          }
        }, {
          key: "ResolveNamed",
          value: function ResolveNamed(type, name) {
            var _this$m_rootLifetimeS2;

            for (var _len5 = arguments.length, parameters = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
              parameters[_key5 - 2] = arguments[_key5];
            }

            return (_this$m_rootLifetimeS2 = this.m_rootLifetimeScope).ResolveNamed.apply(_this$m_rootLifetimeS2, [type, name].concat(parameters));
          }
        }, {
          key: "ResolveKeyed",
          value: function ResolveKeyed(type, key) {
            var _this$m_rootLifetimeS3;

            for (var _len6 = arguments.length, parameters = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
              parameters[_key6 - 2] = arguments[_key6];
            }

            return (_this$m_rootLifetimeS3 = this.m_rootLifetimeScope).ResolveKeyed.apply(_this$m_rootLifetimeS3, [type, key].concat(parameters));
          }
        }, {
          key: "TryResolveKeyed",
          value: function TryResolveKeyed(type, key) {
            var _this$m_rootLifetimeS4;

            for (var _len7 = arguments.length, parameters = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
              parameters[_key7 - 2] = arguments[_key7];
            }

            return (_this$m_rootLifetimeS4 = this.m_rootLifetimeScope).TryResolveKeyed.apply(_this$m_rootLifetimeS4, [type, key].concat(parameters));
          }
        }, {
          key: "GetDisposer",
          value: function GetDisposer() {
            return this.m_rootLifetimeScope.GetDisposer();
          }
        }, {
          key: "ComponentRegistry",
          get: function get() {
            return this.m_componentRegistry;
          }
        }]);

        return CContainer;
      }();

      Core.CContainer = CContainer;
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var CDefaultPropertySelector = /*#__PURE__*/function () {
        function CDefaultPropertySelector(preserveSetValues) {
          _classCallCheck(this, CDefaultPropertySelector);

          this.m_preserveSetValues = false;
          this.m_preserveSetValues = preserveSetValues == true ? true : false;
        }
        /**
         * Provides default filtering to determine if property should be injected by rejecting
         * @param propertyInfo
         * @param instance
         */


        _createClass(CDefaultPropertySelector, [{
          key: "InjectProperty",
          value: function InjectProperty(propertyInfo, instance) {
            if (propertyInfo.CanWrite == false) {
              return false;
            }

            if (this.m_preserveSetValues == true && propertyInfo.CanRead == false) {
              return propertyInfo.GetValue(instance) == null;
            }

            return true;
          }
        }]);

        return CDefaultPropertySelector;
      }();

      Core.CDefaultPropertySelector = CDefaultPropertySelector;
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var CDelegatePropertySelector = /*#__PURE__*/function () {
        function CDelegatePropertySelector() {
          _classCallCheck(this, CDelegatePropertySelector);
        }

        _createClass(CDelegatePropertySelector, [{
          key: "InjectProperty",
          value: function InjectProperty(propertyInfo, instance) {
            throw new Error("Method not implemented.");
          }
        }]);

        return CDelegatePropertySelector;
      }();

      Core.CDelegatePropertySelector = CDelegatePropertySelector;
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var CDisposer = /*#__PURE__*/function () {
        function CDisposer() {
          _classCallCheck(this, CDisposer);

          this.m_items = [];
        }

        _createClass(CDisposer, [{
          key: "AddInstanceForDisposal",
          value: function AddInstanceForDisposal(instance) {
            this.m_items.push(instance);
          }
        }, {
          key: "Dispose",
          value: function Dispose() {
            for (var i = 0; i < this.m_items.length; i++) {
              var item = this.m_items[i];
              item.Dispose();
            }

            this.m_items = null;
          }
        }]);

        return CDisposer;
      }();

      Core.CDisposer = CDisposer;
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var CService = function CService() {
        _classCallCheck(this, CService);
      };

      Core.CService = CService;
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {})); /// <reference path="./CService.ts" />


var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var CKeyedService = /*#__PURE__*/function (_Core$CService) {
        _inherits(CKeyedService, _Core$CService);

        var _super17 = _createSuper(CKeyedService);

        function CKeyedService(serviceKey, serviceType) {
          var _this13;

          _classCallCheck(this, CKeyedService);

          _this13 = _super17.call(this);
          _this13.m_serviceType = null;
          _this13.m_key = null;
          _this13.m_key = serviceKey;
          _this13.m_serviceType = serviceType;
          return _this13;
        }

        _createClass(CKeyedService, [{
          key: "GetServiceType",
          value: function GetServiceType() {
            return this.m_serviceType;
          }
        }, {
          key: "ChangeType",
          value: function ChangeType(newType) {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "Equals",
          value: function Equals(other) {
            if (other.m_serviceType == undefined) return false;
            if (other.m_key == undefined) return false;
            return this.GetType().IsEquivalentTo(other.GetType()) && this.m_serviceType.IsEquivalentTo(other.m_serviceType) && this.CompareKeys(this.m_key, other.m_key);
          }
        }, {
          key: "CompareKeys",
          value: function CompareKeys(k1, k2) {
            if (k1 === k2) return true;
            if (k1.Equals != undefined && k2.Equals != undefined && k1.Equals(k2)) return true;
            return false;
          }
        }]);

        return CKeyedService;
      }(Core.CService);

      Core.CKeyedService = CKeyedService;
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var CLifetimeScopeService = /*#__PURE__*/function (_Core$CService2) {
        _inherits(CLifetimeScopeService, _Core$CService2);

        var _super18 = _createSuper(CLifetimeScopeService);

        function CLifetimeScopeService() {
          _classCallCheck(this, CLifetimeScopeService);

          return _super18.call(this);
        }

        _createClass(CLifetimeScopeService, [{
          key: "Equals",
          value: function Equals(other) {
            return other instanceof CLifetimeScopeService;
          }
        }]);

        return CLifetimeScopeService;
      }(Core.CService);

      Core.CLifetimeScopeService = CLifetimeScopeService;
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {})); /// <reference path="./CConstantParameter.ts" />


var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var CNamedPropertyParameter = /*#__PURE__*/function (_Core$CConstantParame) {
        _inherits(CNamedPropertyParameter, _Core$CConstantParame);

        var _super19 = _createSuper(CNamedPropertyParameter);

        function CNamedPropertyParameter(name, value) {
          _classCallCheck(this, CNamedPropertyParameter);

          return _super19.call(this, value, function (pi) {
            return true;
          });
        }

        return CNamedPropertyParameter;
      }(Core.CConstantParameter);

      Core.CNamedPropertyParameter = CNamedPropertyParameter;
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var CResolvedParameter = /*#__PURE__*/function (_Core$CParameter2) {
        _inherits(CResolvedParameter, _Core$CParameter2);

        var _super20 = _createSuper(CResolvedParameter);

        function CResolvedParameter() {
          _classCallCheck(this, CResolvedParameter);

          return _super20.apply(this, arguments);
        }

        _createClass(CResolvedParameter, [{
          key: "CanSupplyValue",
          value: function CanSupplyValue(pi, context) {
            throw new Error("Method not implemented.");
          }
        }]);

        return CResolvedParameter;
      }(Core.CParameter);

      Core.CResolvedParameter = CResolvedParameter;
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var CServiceEqualityComparer = /*#__PURE__*/function () {
        function CServiceEqualityComparer() {
          _classCallCheck(this, CServiceEqualityComparer);
        }

        _createClass(CServiceEqualityComparer, [{
          key: "Equals",
          value: function Equals(a, b) {
            return a.Equals(b);
          }
        }]);

        return CServiceEqualityComparer;
      }();

      Core.CServiceEqualityComparer = CServiceEqualityComparer;
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var CTypedService = /*#__PURE__*/function (_Core$CService3) {
        _inherits(CTypedService, _Core$CService3);

        var _super21 = _createSuper(CTypedService);

        function CTypedService(serviceType) {
          var _this14;

          _classCallCheck(this, CTypedService);

          _this14 = _super21.call(this);
          _this14.m_serviceType = null;
          _this14.m_serviceType = serviceType;
          return _this14;
        }

        _createClass(CTypedService, [{
          key: "GetServiceType",
          value: function GetServiceType() {
            return this.m_serviceType;
          }
        }, {
          key: "ChangeType",
          value: function ChangeType(newType) {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "Equals",
          value: function Equals(other) {
            if (other.m_serviceType == undefined) return false;
            return this.GetType().IsEquivalentTo(other.GetType()) && this.m_serviceType.IsEquivalentTo(other.m_serviceType);
          }
        }]);

        return CTypedService;
      }(Core.CService);

      Core.CTypedService = CTypedService;
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var genID = 0;

      function GenID() {
        genID++;
        return genID.toString();
      }

      Core.GenID = GenID;
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var UInstanceSharing;

      (function (UInstanceSharing) {
        UInstanceSharing[UInstanceSharing["None"] = 0] = "None";
        UInstanceSharing[UInstanceSharing["Shared"] = 1] = "Shared";
      })(UInstanceSharing = Core.UInstanceSharing || (Core.UInstanceSharing = {}));
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var Lifetime;

      (function (Lifetime) {
        var CCurrentScopeLifetime = /*#__PURE__*/function () {
          function CCurrentScopeLifetime() {
            _classCallCheck(this, CCurrentScopeLifetime);
          }

          _createClass(CCurrentScopeLifetime, [{
            key: "FindScope",
            value: function FindScope(mostNestedVisibleScope) {
              return mostNestedVisibleScope;
            }
          }]);

          return CCurrentScopeLifetime;
        }();

        Lifetime.CCurrentScopeLifetime = CCurrentScopeLifetime;
      })(Lifetime = Core.Lifetime || (Core.Lifetime = {}));
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var Lifetime;

      (function (Lifetime) {
        var CLifetimeScope = /*#__PURE__*/function () {
          function CLifetimeScope(componentRegistry, lifetimeScopeParent, tag) {
            _classCallCheck(this, CLifetimeScope);

            this.m_componentRegistry = null;
            this.m_lifetimeScopeRoot = null;
            this.m_lifetimeScopeParent = null;
            this.m_tag = null;
            this.m_disposer = new Core.CDisposer();
            this.m_sharedInstances = new iberbar.System.Collections.Generic.CDictionary();
            this.m_componentRegistry = componentRegistry;
            this.m_lifetimeScopeParent = lifetimeScopeParent;

            if (this.m_lifetimeScopeParent == null) {
              this.m_lifetimeScopeRoot = this;
              this.m_tag = CLifetimeScope.RootTag;
            } else {
              if (tag == null) throw new Error();
              this.m_lifetimeScopeRoot = lifetimeScopeParent.GetRootLifetimeScope();
              this.m_tag = tag;
            } // 保存自己的ID


            this.m_sharedInstances.Add(CLifetimeScope.SelfRegistrationId, this);
          }

          _createClass(CLifetimeScope, [{
            key: "GetParentLifetimeScope",
            value: function GetParentLifetimeScope() {
              return this.m_lifetimeScopeParent;
            }
          }, {
            key: "GetRootLifetimeScope",
            value: function GetRootLifetimeScope() {
              return this.m_lifetimeScopeRoot;
            }
          }, {
            key: "GetOrCreateAndShare",
            value: function GetOrCreateAndShare(id, creator) {
              var instance = this.m_sharedInstances.Get(id);
              if (instance != null) return instance;
              instance = creator.Execute();
              this.m_sharedInstances.Add(id, instance);
              return instance;
            }
          }, {
            key: "BeginLifetimeScope",
            value: function BeginLifetimeScope(tag) {
              if (tag == undefined) {
                return this.BeginLifetimeScope(CLifetimeScope.MakeAnonymousTag());
              }

              this.CheckTagIsUnique(tag);
              var scope = new CLifetimeScope(this.m_componentRegistry, this, tag);
              return scope;
            }
          }, {
            key: "ResolveComponent",
            value: function ResolveComponent(registration, parameters) {
              this.CheckNotDisposed();
              var operation = new Core.Resolving.CResolveOperation(this);
              return operation.Execute(registration, parameters);
            }
          }, {
            key: "Resolve",
            value: function Resolve(type) {
              for (var _len8 = arguments.length, parameters = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
                parameters[_key8 - 1] = arguments[_key8];
              }

              var ret = this.TryResolveService(new Core.CTypedService(type), parameters);

              if (ret.succeed == false) {
                throw new Error("Can't resolve instance of type (".concat(type.GetNickname(), ")"));
              }

              return ret.instance;
            }
          }, {
            key: "ResolveNamed",
            value: function ResolveNamed(type, name) {
              for (var _len9 = arguments.length, parameters = new Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
                parameters[_key9 - 2] = arguments[_key9];
              }

              var ret = this.TryResolveService(new Core.CKeyedService(name, type), parameters);

              if (ret.succeed == false) {
                throw new Error();
              }

              return ret.instance;
            }
          }, {
            key: "ResolveKeyed",
            value: function ResolveKeyed(type, key) {
              for (var _len10 = arguments.length, parameters = new Array(_len10 > 2 ? _len10 - 2 : 0), _key10 = 2; _key10 < _len10; _key10++) {
                parameters[_key10 - 2] = arguments[_key10];
              }

              var ret = this.TryResolveService(new Core.CKeyedService(key, type), parameters);

              if (ret.succeed == false) {
                throw new Error("Can't resolve instance of type (".concat(type.GetNickname(), ") with key<").concat(key.toString(), ">"));
              }

              return ret.instance;
            }
          }, {
            key: "TryResolveKeyed",
            value: function TryResolveKeyed(type, key) {
              for (var _len11 = arguments.length, parameters = new Array(_len11 > 2 ? _len11 - 2 : 0), _key11 = 2; _key11 < _len11; _key11++) {
                parameters[_key11 - 2] = arguments[_key11];
              }

              var ret = this.TryResolveService(new Core.CKeyedService(key, type), parameters);

              if (ret.succeed == false) {
                return null;
              }

              return ret.instance;
            }
          }, {
            key: "TryResolveService",
            value: function TryResolveService(service, parameters) {
              var registration = this.ComponentRegistry.GetRegistration(service);

              if (registration == null) {
                return {
                  succeed: false
                };
              }

              return {
                succeed: true,
                instance: this.ResolveComponent(registration, parameters)
              };
            }
          }, {
            key: "Dispose",
            value: function Dispose() {
              this.m_disposer.Dispose();
              this.m_sharedInstances.Clear();
            }
          }, {
            key: "GetTag",
            value: function GetTag() {
              return this.m_tag;
            }
          }, {
            key: "CheckTagIsUnique",
            value: function CheckTagIsUnique(tag) {
              var scopeParent = this;

              while (scopeParent) {
                if (scopeParent.GetTag() == tag) {
                  throw new Error("");
                }

                scopeParent = scopeParent.GetParentLifetimeScope();
              }
            }
          }, {
            key: "CheckNotDisposed",
            value: function CheckNotDisposed() {}
          }, {
            key: "GetDisposer",
            value: function GetDisposer() {
              return this.m_disposer;
            }
          }, {
            key: "ComponentRegistry",
            get: function get() {
              return this.m_componentRegistry;
            }
          }], [{
            key: "MakeAnonymousTag",
            value: function MakeAnonymousTag() {
              return Symbol();
            }
          }]);

          return CLifetimeScope;
        }();

        CLifetimeScope.SelfRegistrationId = Core.GenID();
        CLifetimeScope.RootTag = "root";
        Lifetime.CLifetimeScope = CLifetimeScope;
      })(Lifetime = Core.Lifetime || (Core.Lifetime = {}));
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var Lifetime;

      (function (Lifetime) {
        var CMatchingScopeLifetime = /*#__PURE__*/function () {
          function CMatchingScopeLifetime() {
            _classCallCheck(this, CMatchingScopeLifetime);

            this.m_tagToMatch = null;

            for (var _len12 = arguments.length, scopeTag = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
              scopeTag[_key12] = arguments[_key12];
            }

            this.m_tagToMatch = scopeTag;
          }

          _createClass(CMatchingScopeLifetime, [{
            key: "FindScope",
            value: function FindScope(mostNestedVisibleScope) {
              var next = mostNestedVisibleScope;

              while (next) {
                if (this.m_tagToMatch.indexOf(next.GetTag()) >= 0) return next;
                next = next.GetParentLifetimeScope();
              }

              throw new Error();
            }
          }]);

          return CMatchingScopeLifetime;
        }();

        Lifetime.CMatchingScopeLifetime = CMatchingScopeLifetime;
      })(Lifetime = Core.Lifetime || (Core.Lifetime = {}));
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var Lifetime;

      (function (Lifetime) {
        var CRootScopeLifetime = /*#__PURE__*/function () {
          function CRootScopeLifetime() {
            _classCallCheck(this, CRootScopeLifetime);
          }

          _createClass(CRootScopeLifetime, [{
            key: "FindScope",
            value: function FindScope(mostNestedVisibleScope) {
              return mostNestedVisibleScope.GetRootLifetimeScope();
            }
          }]);

          return CRootScopeLifetime;
        }();

        Lifetime.CRootScopeLifetime = CRootScopeLifetime;
      })(Lifetime = Core.Lifetime || (Core.Lifetime = {}));
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var Registration;

      (function (Registration) {
        var CComponentRegistration = /*#__PURE__*/function () {
          function CComponentRegistration(id, activator, lifetime, sharing, ownership, services, metadata, target) {
            _classCallCheck(this, CComponentRegistration);

            this.m_activatingHandlers = new iberbar.System.TCallbackArray();
            this.m_id = id;
            this.m_activator = activator;
            this.m_lifetime = lifetime;
            this.m_sharing = sharing;
            this.m_ownership = ownership;
            this.m_services = services;
            this.m_metadata = metadata;
            this.m_target = target;
          }

          _createClass(CComponentRegistration, [{
            key: "RaisePreparing",
            value: function RaisePreparing(context, parameters) {
              throw new Error("Method not implemented.");
            }
          }, {
            key: "RaiseActivating",
            value: function RaiseActivating(context, parameters, instance) {
              var args = new Core.CActivatingEventArgs(context, this, parameters, instance);
              this.Activating.Execute(this, args);
              return args.Instance;
            }
          }, {
            key: "RaiseActivated",
            value: function RaiseActivated(context, parameters, instance) {
              throw new Error("Method not implemented.");
            }
          }, {
            key: "Dispose",
            value: function Dispose() {
              throw new Error("Method not implemented.");
            }
          }, {
            key: "ID",
            get: function get() {
              return this.m_id;
            }
          }, {
            key: "Activator",
            get: function get() {
              return this.m_activator;
            }
          }, {
            key: "Lifetime",
            get: function get() {
              return this.m_lifetime;
            }
          }, {
            key: "Sharing",
            get: function get() {
              return this.m_sharing;
            }
          }, {
            key: "Services",
            get: function get() {
              return this.m_services;
            }
          }, {
            key: "Metadta",
            get: function get() {
              return this.m_metadata;
            }
          }, {
            key: "Target",
            get: function get() {
              return this.m_target;
            }
          }, {
            key: "Preparing",
            get: function get() {
              throw new Error("Method not implemented.");
            }
          }, {
            key: "Activating",
            get: function get() {
              return this.m_activatingHandlers;
            }
          }, {
            key: "Activated",
            get: function get() {
              throw new Error("Method not implemented.");
            }
          }]);

          return CComponentRegistration;
        }();

        Registration.CComponentRegistration = CComponentRegistration;
      })(Registration = Core.Registration || (Core.Registration = {}));
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var Registration;

      (function (Registration) {
        var CComponentRegistry = /*#__PURE__*/function () {
          function CComponentRegistry() {
            _classCallCheck(this, CComponentRegistry);

            this.m_registrations = [];
            this.m_serviceInfo = new iberbar.System.Collections.Generic.CDictionary({
              comparer: new Core.CServiceEqualityComparer()
            });
          }

          _createClass(CComponentRegistry, [{
            key: "GetProperties",
            value: function GetProperties() {
              throw new Error("Method not implemented.");
            }
          }, {
            key: "GetRegistration",
            value: function GetRegistration(service) {
              var info = this.m_serviceInfo.Get(service);
              if (info == null) return null;
              var componentRegistration = info.GetRegistration();
              return componentRegistration;
            }
          }, {
            key: "IsRegistered",
            value: function IsRegistered(service) {
              throw new Error("Method not implemented.");
            }
          }, {
            key: "Register",
            value: function Register(registration, preserveDefaults) {
              this.AddRegistration(registration, preserveDefaults);
            }
          }, {
            key: "GetRegistrations",
            value: function GetRegistrations() {
              throw new Error("Method not implemented.");
            }
          }, {
            key: "GetRegistrationsFor",
            value: function GetRegistrationsFor(service) {
              throw new Error("Method not implemented.");
            }
          }, {
            key: "AddRegistrationSource",
            value: function AddRegistrationSource(source) {
              throw new Error("Method not implemented.");
            }
          }, {
            key: "GetRegistrationSources",
            value: function GetRegistrationSources() {
              throw new Error("Method not implemented.");
            }
          }, {
            key: "HasLocalComponents",
            value: function HasLocalComponents() {
              throw new Error("Method not implemented.");
            }
          }, {
            key: "Dispose",
            value: function Dispose() {
              throw new Error("Method not implemented.");
            }
          }, {
            key: "AddRegistration",
            value: function AddRegistration(registration, preserveDefaults) {
              var originatedFromSource = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
              var services = registration.Services;

              for (var i = 0; i < services.length; i++) {
                var s = services[i];
                var info = this.GetServiceInfo(s);
                info.AddImplementation(registration, preserveDefaults, originatedFromSource);
              }

              this.m_registrations.push(registration);
            }
          }, {
            key: "GetServiceInfo",
            value: function GetServiceInfo(service) {
              var info = this.m_serviceInfo.Get(service);
              if (info != null) return info;
              info = new Registration.CServiceRegistrationInfo(service);
              this.m_serviceInfo.Add(service, info);
              return info;
            }
          }]);

          return CComponentRegistry;
        }();

        Registration.CComponentRegistry = CComponentRegistry;
      })(Registration = Core.Registration || (Core.Registration = {}));
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var Registration;

      (function (Registration) {
        var CServiceRegistrationInfo = /*#__PURE__*/function () {
          function CServiceRegistrationInfo(service) {
            _classCallCheck(this, CServiceRegistrationInfo);

            this.m_service = null;
            this.m_defaultImplementations = [];
            this.m_preserveDefaultImplementations = null;
            this.m_sourceImplementations = null;
            this.m_service = service;
          }

          _createClass(CServiceRegistrationInfo, [{
            key: "AddImplementation",
            value: function AddImplementation(registration, preserveDefaults, originatedFromSource) {
              if (preserveDefaults == true) {
                if (originatedFromSource == true) {
                  if (this.m_sourceImplementations == null) {
                    this.m_sourceImplementations = [];
                  }

                  this.m_sourceImplementations.push(registration);
                } else {
                  if (this.m_preserveDefaultImplementations == null) {
                    this.m_preserveDefaultImplementations = [];
                  }

                  this.m_preserveDefaultImplementations.push(registration);
                }
              } else {
                if (originatedFromSource == true) throw new Error();
                this.m_defaultImplementations.push(registration);
              }
            }
          }, {
            key: "GetRegistration",
            value: function GetRegistration() {
              var componentRegistration = null;

              if (this.m_defaultImplementations != null) {
                if (this.m_defaultImplementations.length > 0) componentRegistration = this.m_defaultImplementations[this.m_defaultImplementations.length - 1];
              }

              if (componentRegistration == null) {
                if (this.m_sourceImplementations != null && this.m_sourceImplementations.length > 0) componentRegistration = this.m_sourceImplementations[0];
              }

              if (componentRegistration == null) {
                if (this.m_preserveDefaultImplementations != null && this.m_preserveDefaultImplementations.length > 0) componentRegistration = this.m_preserveDefaultImplementations[0];
              }

              return componentRegistration;
            }
          }]);

          return CServiceRegistrationInfo;
        }();

        Registration.CServiceRegistrationInfo = CServiceRegistrationInfo;
      })(Registration = Core.Registration || (Core.Registration = {}));
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var Resolving;

      (function (Resolving) {
        var CInstanceLookup = /*#__PURE__*/function () {
          function CInstanceLookup(registration, context, mostNestedVisibleScope, parameters) {
            _classCallCheck(this, CInstanceLookup);

            this.m_registration = null;
            this.m_context = null;
            this.m_activationScope = null;
            this.m_parameters = null;
            this.m_executed = false;
            this.m_newInstance = null;
            this.m_registration = registration;
            this.m_context = context;
            this.m_parameters = parameters;

            try {
              this.m_activationScope = this.m_registration.Lifetime.FindScope(mostNestedVisibleScope);
            } catch (e) {
              throw e;
            }
          }

          _createClass(CInstanceLookup, [{
            key: "GetComponentRegistration",
            value: function GetComponentRegistration() {
              return this.m_registration;
            }
          }, {
            key: "GetActivationScope",
            value: function GetActivationScope() {
              return this.m_activationScope;
            }
          }, {
            key: "GetParameters",
            value: function GetParameters() {
              return this.m_parameters;
            }
          }, {
            key: "ResolveComponent",
            value: function ResolveComponent(registration, parameters) {
              return this.m_context.GetOrCreateInstance(this.m_activationScope, registration, parameters);
            }
          }, {
            key: "Execute",
            value: function Execute() {
              var _this15 = this;

              if (this.m_executed == true) throw new Error();
              this.m_executed = true;
              var instance = null;

              if (this.m_registration.Sharing == Core.UInstanceSharing.None) {
                instance = this.Activate(this.m_parameters);
              } else {
                instance = this.m_activationScope.GetOrCreateAndShare(this.m_registration.ID, this.__Callback(function () {
                  return _this15.Activate(_this15.m_parameters);
                }));
              }

              return instance;
            }
          }, {
            key: "Activate",
            value: function Activate(parameters) {
              try {
                this.m_newInstance = this.m_registration.Activator.ActivateInstance(this, parameters);
              } catch (error) {
                throw error;
              } // dispose


              if (this.m_newInstance["Dispose"] != undefined) {
                this.m_activationScope.GetDisposer().AddInstanceForDisposal(this.m_newInstance);
              }

              this.m_newInstance = this.m_registration.RaiseActivating(this, parameters, this.m_newInstance);
              return this.m_newInstance;
            }
          }, {
            key: "ComponentRegistry",
            get: function get() {
              return this.m_activationScope.ComponentRegistry;
            }
          }]);

          return CInstanceLookup;
        }();

        Resolving.CInstanceLookup = CInstanceLookup;
      })(Resolving = Core.Resolving || (Core.Resolving = {}));
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Core;

    (function (Core) {
      var Resolving;

      (function (Resolving) {
        var CResolveOperation = /*#__PURE__*/function () {
          function CResolveOperation(mostNestedLifetimeScope) {
            _classCallCheck(this, CResolveOperation);

            this.m_mostNestedLifetimeScope = null;
            this.m_mostNestedLifetimeScope = mostNestedLifetimeScope;
          }

          _createClass(CResolveOperation, [{
            key: "ResolveComponent",
            value: function ResolveComponent(registration, parameters) {
              return this.GetOrCreateInstance(this.m_mostNestedLifetimeScope, registration, parameters);
            }
          }, {
            key: "Execute",
            value: function Execute(registration, parameters) {
              var result = null;

              try {
                result = this.ResolveComponent(registration, parameters);
              } catch (e) {
                throw e;
              }

              return result;
            }
          }, {
            key: "GetOrCreateInstance",
            value: function GetOrCreateInstance(currentLifetimeScope, registration, parameters) {
              var lookup = new Resolving.CInstanceLookup(registration, this, currentLifetimeScope, parameters);
              var instance = lookup.Execute();
              return instance;
            }
          }, {
            key: "TryResolveService",
            value: function TryResolveService(service, parameters) {
              return Autofac.TryResolveService(this, service, parameters);
            }
          }, {
            key: "ComponentRegistry",
            get: function get() {
              return this.m_mostNestedLifetimeScope.ComponentRegistry;
            }
          }]);

          return CResolveOperation;
        }();

        Resolving.CResolveOperation = CResolveOperation;
      })(Resolving = Core.Resolving || (Core.Resolving = {}));
    })(Core = Autofac.Core || (Autofac.Core = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var Features;

    (function (Features) {
      var Scanning;

      (function (Scanning) {
        var CScanningRegistrationExtensions = /*#__PURE__*/function () {
          function CScanningRegistrationExtensions() {
            _classCallCheck(this, CScanningRegistrationExtensions);
          }

          _createClass(CScanningRegistrationExtensions, null, [{
            key: "RegisterAssemblyTypes",
            value: function RegisterAssemblyTypes(containerBuilder, assemblies) {
              var rb = new Autofac.Builder.CRegistrationBuilder(new Autofac.Core.CTypedService(iberbar.System.Reflection.TypeOf(Object)), new Autofac.Builder.CScanningActivatorData(), {});
              rb.RegisterData.DeferredCallback = containerBuilder.RegisterCallback(iberbar.System.__Callback(function (cr) {
                CScanningRegistrationExtensions.ScanAssemblies(assemblies, cr, rb);
              }));
              return rb;
            }
          }, {
            key: "RegisterTypes",
            value: function RegisterTypes(containerBuilder, types) {
              var rb = new Autofac.Builder.CRegistrationBuilder(new Autofac.Core.CTypedService(iberbar.System.Reflection.TypeOf(Object)), new Autofac.Builder.CScanningActivatorData(), {});
              rb.RegisterData.DeferredCallback = containerBuilder.RegisterCallback(iberbar.System.__Callback(function (cr) {
                CScanningRegistrationExtensions.ScanTypes(types, cr, rb);
              }));
              return rb;
            }
          }, {
            key: "ScanAssemblies",
            value: function ScanAssemblies(assemblies, componentRegistry, registrationBuilder) {
              var types = [];

              for (var i = 0; i < assemblies.length; i++) {
                var assembly = assemblies[i];
                types = types.concat(assembly.GetTypes());
              }

              this.ScanTypes(types, componentRegistry, registrationBuilder);
            }
          }, {
            key: "ScanTypes",
            value: function ScanTypes(types, componentRegistry, registrationBuilder) {
              var activatorData = registrationBuilder.ActivatorData;
              var filters = activatorData.Filters;

              for (var i = 0; i < types.length; i++) {
                var t = types[i];
                var fit = true;

                for (var j = 0; j < filters.length; j++) {
                  var filterTemp = filters[j];

                  if (filterTemp(t) == false) {
                    fit = false;
                    break;
                  }
                }

                if (fit == false) continue;
                var scanned = new Autofac.Builder.CRegistrationBuilder(new Autofac.Core.CTypedService(t), new Autofac.Builder.CConcreteReflectionActivatorData(t), new Autofac.Builder.CSingleRegistrationStyle());
                scanned.RegisterData.CopyFrom(registrationBuilder.RegisterData, false);

                for (var _j = 0; _j < activatorData.ConfigurationActions.length; _j++) {
                  var action = activatorData.ConfigurationActions[_j];
                  action(t, scanned);
                }

                if (scanned.RegisterData.GetServices().length > 0) Autofac.Builder.CRegistrationBuilderHelper.RegisterSingleComponent(componentRegistry, scanned);
              }
            }
          }, {
            key: "As",
            value: function As(registrationBuilder, serviceMapping) {
              var activatorData = registrationBuilder.ActivatorData;
              activatorData.ConfigurationActions.push(function (type, rb) {
                var mapped = serviceMapping(type);
                var impl = rb.ActivatorData.ImplementationType;
                var applied = [];

                for (var i = 0; i < mapped.length; i++) {
                  var s = mapped[i];
                  var c = s;

                  if (c["GetServiceType"] != undefined) {
                    if (impl.IsInheritFrom(c.GetServiceType()) || impl.IsEquivalentTo(c.GetServiceType())) {
                      applied.push(s);
                    }
                  }
                }

                rb.AsEx(applied);
              });
              return registrationBuilder;
            }
          }]);

          return CScanningRegistrationExtensions;
        }();

        Scanning.CScanningRegistrationExtensions = CScanningRegistrationExtensions;
      })(Scanning = Features.Scanning || (Features.Scanning = {}));
    })(Features = Autofac.Features || (Autofac.Features = {}));
  })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var iberbar;

(function (iberbar) {
  var Event;

  (function (Event) {
    var CEvent = function CEvent() {
      _classCallCheck(this, CEvent);
    };

    Event.CEvent = CEvent;
    ;
  })(Event = iberbar.Event || (iberbar.Event = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Event;

  (function (Event) {
    var IEventBus = function IEventBus() {
      _classCallCheck(this, IEventBus);
    };

    Event.IEventBus = IEventBus;
    ;
  })(Event = iberbar.Event || (iberbar.Event = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Event;

  (function (Event) {
    var IStateMachine = /*#__PURE__*/function () {
      function IStateMachine() {
        _classCallCheck(this, IStateMachine);
      }

      _createClass(IStateMachine, [{
        key: "AddState",
        value: function AddState(state) {
          throw new Error('Not implements');
        }
      }, {
        key: "GetState",
        value: function GetState(stateType) {
          throw new Error('Not implements');
        }
      }]);

      return IStateMachine;
    }();

    Event.IStateMachine = IStateMachine;
  })(Event = iberbar.Event || (iberbar.Event = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Event;

  (function (Event) {
    var IStateNode = /*#__PURE__*/function () {
      function IStateNode() {
        _classCallCheck(this, IStateNode);
      }

      _createClass(IStateNode, [{
        key: "Initialize",
        value: function Initialize() {
          throw new Error('Not implements');
        }
      }]);

      return IStateNode;
    }();

    Event.IStateNode = IStateNode;
  })(Event = iberbar.Event || (iberbar.Event = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Event;

  (function (Event) {
    var Implements;

    (function (Implements) {
      var CEventBus = /*#__PURE__*/function (_Event$IEventBus) {
        _inherits(CEventBus, _Event$IEventBus);

        var _super = _createSuper(CEventBus);

        function CEventBus() {
          var _this;

          _classCallCheck(this, CEventBus);

          _this = _super.apply(this, arguments);
          _this.m_events = new WeakMap();
          return _this;
        }

        _createClass(CEventBus, [{
          key: "Listen",
          value: function Listen(eventType, listener, once) {
            var prototype = eventType.GetJsPrototype();
            var array = this.m_events.get(prototype);

            if (array == null) {
              array = Array();
              array.push({
                listener: typeof listener == "function" ? __Callback(listener) : listener,
                kick: once == true ? 1 : -1
              });
              this.m_events.set(prototype, array);
            } else {
              for (var i = 0; i < array.length; i++) {
                var delegateTemp = array[i];
                if (delegateTemp.listener == listener) return;
              }

              array.push({
                listener: typeof listener == "function" ? __Callback(listener) : listener,
                kick: once == true ? 1 : -1
              });
            }
          }
        }, {
          key: "Send",
          value: function Send(eventData) {
            var prototype = eventData.GetType().GetJsPrototype();
            var delegates = this.m_events.get(prototype);
            if (delegates == null) return;

            for (var i = 0; i < delegates.length; i++) {
              var delegateTemp = delegates[i];
              if (delegateTemp.kick == 0) continue;
              delegateTemp.kick--;
              delegateTemp.listener.Execute(eventData);
            }

            for (var _i = 0; _i < delegates.length;) {
              var _delegateTemp = delegates[_i];

              if (_delegateTemp.kick == 0) {
                delegates.splice(_i, 1);
              } else {
                _i++;
              }
            }
          }
        }]);

        return CEventBus;
      }(Event.IEventBus);

      Implements.CEventBus = CEventBus;
      ;
    })(Implements = Event.Implements || (Event.Implements = {}));
  })(Event = iberbar.Event || (iberbar.Event = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var Event;

  (function (Event) {
    var Implements;

    (function (Implements) {
      var CStateMachine = /*#__PURE__*/function (_Event$IStateMachine) {
        _inherits(CStateMachine, _Event$IStateMachine);

        var _super2 = _createSuper(CStateMachine);

        function CStateMachine() {
          var _this2;

          _classCallCheck(this, CStateMachine);

          _this2 = _super2.apply(this, arguments);
          _this2.m_state = new WeakMap();
          return _this2;
        }

        _createClass(CStateMachine, [{
          key: "AddState",
          value: function AddState(state) {
            var prototype = state.GetType().GetJsPrototype();
            var stateTemp = this.m_state.get(prototype);

            if (stateTemp != null) {
              throw Error("there is exist state");
            }

            this.m_state.set(prototype, state);
            state.Initialize();
          }
        }, {
          key: "GetState",
          value: function GetState(stateType) {
            var prototype = stateType.GetJsPrototype();
            var state = this.m_state.get(prototype);
            return state;
          }
        }]);

        return CStateMachine;
      }(Event.IStateMachine);

      Implements.CStateMachine = CStateMachine;
    })(Implements = Event.Implements || (Event.Implements = {}));
  })(Event = iberbar.Event || (iberbar.Event = {}));
})(iberbar || (iberbar = {}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL1N5c3RlbS9Db2xsZWN0aW9ucy9HZW5lcmljL0NEaWN0aW9uYXJ5LnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vU3lzdGVtL0NvbGxlY3Rpb25zL0dlbmVyaWMvQ0VxdWFsaXR5Q29tcGFyZXIudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9TeXN0ZW0vTWV0YWRhdGEvQ01ldGFkYXRhQ29udGFpbmVyQnVpbGRlci50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL1N5c3RlbS9NZXRhZGF0YS9Db3JlL0NNZXRhZGF0YUNvbGxlY3Rpb24udHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9TeXN0ZW0vTWV0YWRhdGEvQ29yZS9DTWV0YWRhdGFDb250YWluZXIudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9TeXN0ZW0vTWV0YWRhdGEvX19NZXRhZGF0YUNvbnRhaW5lckluc3RhbmNlLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vU3lzdGVtL01ldGFkYXRhL0J1aWxkZXIvQ0RlZmVycmVkQ2FsbGJhY2sudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9TeXN0ZW0vTWV0YWRhdGEvQ29yZS9DTWV0YWRhdGFLZXkudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9TeXN0ZW0vTWV0YWRhdGEvQ29yZS9DTWV0YWRhdGFLZXlGb3JDbGFzcy50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL1N5c3RlbS9NZXRhZGF0YS9Db3JlL0NNZXRhZGF0YUtleUZvck5hbWVkLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vU3lzdGVtL01ldGFkYXRhL0NvcmUvQ01ldGFkYXRhS2V5Rm9yUGFyYW1ldGVyLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vU3lzdGVtL1JlZmxlY3Rpb24vQXV0b1JlZmxlY3RNZXRhZGF0YS50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL1N5c3RlbS9SZWZsZWN0aW9uL0NBc3NlbWJseS50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL1N5c3RlbS9SZWZsZWN0aW9uL01lbWJlckluZm8udHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9TeXN0ZW0vUmVmbGVjdGlvbi9DTWV0aG9kQmFzZS50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL1N5c3RlbS9SZWZsZWN0aW9uL0NvbnN0cnVjdG9ySW5mby50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL1N5c3RlbS9VQXR0cmlidXRlVGFyZ2V0LnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vU3lzdGVtL0NBdHRyaWJ1dGUudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9TeXN0ZW0vQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vU3lzdGVtL1JlZmxlY3Rpb24vRmllbGRJbmZvLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vU3lzdGVtL1JlZmxlY3Rpb24vTWV0aG9kSW5mby50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL1N5c3RlbS9SZWZsZWN0aW9uL1Byb3BlcnR5SW5mby50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL1N5c3RlbS9SZWZsZWN0aW9uL1BhcmFtZXRlckluZm8udHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9TeXN0ZW0vUmVmbGVjdGlvbi9UeXBlLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vU3lzdGVtL09iamVjdF9HZXRUeXBlLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vU3lzdGVtL0F0dHJpYnV0ZURlY29yYXRlLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vU3lzdGVtL0F0dHJpYnV0ZVVzYWdlLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vU3lzdGVtL1JlZmxlY3Rpb24vRGVjbGFyaW5nVHlwZS50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL1N5c3RlbS9SZWZsZWN0aW9uL0VudW1lcmFibGUudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9TeXN0ZW0vUmVmbGVjdGlvbi9OYW1lZEF0dHJpYnV0ZS50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL1N5c3RlbS9SZWZsZWN0aW9uL1R5cGVOaWNrbmFtZS50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL1N5c3RlbS9SZWZsZWN0aW9uL1VNZW1iZXJUeXBlcy50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL1N5c3RlbS9DYWxsYmFjay50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL1N5c3RlbS9EeW5hbWljQ2FzdC50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL1N5c3RlbS9Kc0FycmF5RXh0ZW5zaW9uLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vU3lzdGVtL091dFBhcmFtZXRlci50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL1N5c3RlbS9SZWZQYXJhbWV0ZXIudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9TeXN0ZW0vX18udHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0NDb250YWluZXJCdWlsZGVyLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vQXV0b2ZhYy9DSW5qZWN0TGlmZXRpbWVTY29wZUF0dHJpYnV0ZS50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL0F1dG9mYWMvQ01vZHVsZS50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL0F1dG9mYWMvQ29yZS9DUGFyYW1ldGVyLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vQXV0b2ZhYy9Db3JlL0NDb25zdGFudFBhcmFtZXRlci50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL0F1dG9mYWMvQ05hbWVkUGFyYW1ldGVyLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vQXV0b2ZhYy9DUG9zaXRpb25hbFBhcmFtZXRlci50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL0F1dG9mYWMvQ1R5cGVkUGFyYW1ldGVyLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vQXV0b2ZhYy9JbmplY3Rpb24udHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0tleS50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL0F1dG9mYWMvUHJvdmlkZXIudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL1Jlc29sdXRpb25FeHRlbnNpb25zLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vQXV0b2ZhYy9BY3RpdmF0b3JzL0NJbnN0YW5jZUFjdGl2YXRvci50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL0F1dG9mYWMvQWN0aXZhdG9ycy9EZWxlZ2F0ZS9DRGVsZWdhdGVBY3RpdmF0b3IudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0FjdGl2YXRvcnMvUHJvdmlkZWRJbnN0YW5jZS9DUHJvdmlkZWRJbnN0YW5jZUFjdGl2YXRvci50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL0F1dG9mYWMvQWN0aXZhdG9ycy9SZWZsZWN0aW9uL0NBdXRvd2lyaW5nUGFyYW1ldGVyLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vQXV0b2ZhYy9BY3RpdmF0b3JzL1JlZmxlY3Rpb24vQ0F1dG93aXJpbmdQcm9wZXJ0eUluamVjdG9yLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vQXV0b2ZhYy9BY3RpdmF0b3JzL1JlZmxlY3Rpb24vQ0NvbnN0cnVjdG9yUGFyYW1ldGVyQmluZGluZy50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL0F1dG9mYWMvQWN0aXZhdG9ycy9SZWZsZWN0aW9uL0NEZWZhdWx0VmFsdWVQYXJhbWV0ZXIudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0FjdGl2YXRvcnMvUmVmbGVjdGlvbi9DUmVmbGVjdGlvbkFjdGl2YXRvci50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL0F1dG9mYWMvQnVpbGRlci9DUmVmbGVjdGlvbkFjdGl2YXRvckRhdGEudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0J1aWxkZXIvQ0NvbmNyZXRlUmVmbGVjdGlvbkFjdGl2YXRvckRhdGEudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0J1aWxkZXIvQ0RlZmVycmVkQ2FsbGJhY2sudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0J1aWxkZXIvQ1JlZ2lzdHJhdGlvbkJ1aWxkZXIudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0J1aWxkZXIvQ1JlZ2lzdHJhdGlvbkJ1aWxkZXJIZWxwZXIudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0J1aWxkZXIvQ1JlZ2lzdHJhdGlvbkRhdGEudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0J1aWxkZXIvQ1NjYW5uaW5nQWN0aXZhdG9yRGF0YS50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL0F1dG9mYWMvQnVpbGRlci9DU2ltcGxlQWN0aXZhdG9yRGF0YS50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL0F1dG9mYWMvQnVpbGRlci9DU2luZ2xlUmVnaXN0cmF0aW9uU3R5bGUudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0J1aWxkZXIvSVJlZ2lzdHJhdGlvbkJ1aWxkZXIudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0NvcmUvQ0FjdGl2YXRpbmdFdmVudEFyZ3MudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0NvcmUvQ0NvbnRhaW5lci50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL0F1dG9mYWMvQ29yZS9DRGVmYXVsdFByb3BlcnR5U2VsZWN0b3IudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0NvcmUvQ0RlbGVnYXRlUHJvcGVydHlTZWxlY3Rvci50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL0F1dG9mYWMvQ29yZS9DRGlzcG9zZXIudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0NvcmUvQ1NlcnZpY2UudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0NvcmUvQ0tleWVkU2VydmljZS50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL0F1dG9mYWMvQ29yZS9DTGlmZXRpbWVTY29wZVNlcnZpY2UudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0NvcmUvQ05hbWVkUHJvcGVydHlQYXJhbWV0ZXIudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0NvcmUvQ1Jlc29sdmVkUGFyYW1ldGVyLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vQXV0b2ZhYy9Db3JlL0NTZXJ2aWNlRXF1YWxpdHlDb21wYXJlci50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL0F1dG9mYWMvQ29yZS9DVHlwZWRTZXJ2aWNlLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vQXV0b2ZhYy9Db3JlL0dlbklELnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vQXV0b2ZhYy9Db3JlL1VJbnN0YW5jZVNoYXJpbmcudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0NvcmUvTGlmZXRpbWUvQ0N1cnJlbnRTY29wZUxpZmV0aW1lLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vQXV0b2ZhYy9Db3JlL0xpZmV0aW1lL0NMaWZldGltZVNjb3BlLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vQXV0b2ZhYy9Db3JlL0xpZmV0aW1lL0NNYXRjaGluZ1Njb3BlTGlmZXRpbWUudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0NvcmUvTGlmZXRpbWUvQ1Jvb3RTY29wZUxpZmV0aW1lLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vQXV0b2ZhYy9Db3JlL1JlZ2lzdHJhdGlvbi9DQ29tcG9uZW50UmVnaXN0cmF0aW9uLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vQXV0b2ZhYy9Db3JlL1JlZ2lzdHJhdGlvbi9DQ29tcG9uZW50UmVnaXN0cnkudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9BdXRvZmFjL0NvcmUvUmVnaXN0cmF0aW9uL0NTZXJ2aWNlUmVnaXN0cmF0aW9uSW5mby50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL0F1dG9mYWMvQ29yZS9SZXNvbHZpbmcvQ0luc3RhbmNlTG9va3VwLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vQXV0b2ZhYy9Db3JlL1Jlc29sdmluZy9DUmVzb2x2ZU9wZXJhdGlvbi50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL0F1dG9mYWMvRmVhdHVyZXMvU2Nhbm5pbmcvQ1NjYW5uaW5nUmVnaXN0cmF0aW9uRXh0ZW5zaW9ucy50cyIsIkc6L1Rlc3QvVGVtcC9UeXBlc2NyaXB0QXV0b2ZhYy1tYXN0ZXIvYmluL0V2ZW50L0V2ZW50LnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vRXZlbnQvRXZlbnRCdXMudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9FdmVudC9TdGF0ZU1hY2hpbmUudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9FdmVudC9TdGF0ZU5vZGUudHMiLCJHOi9UZXN0L1RlbXAvVHlwZXNjcmlwdEF1dG9mYWMtbWFzdGVyL2Jpbi9FdmVudC9pbXBsZW1lbnRzL0V2ZW50QnVzLnRzIiwiRzovVGVzdC9UZW1wL1R5cGVzY3JpcHRBdXRvZmFjLW1hc3Rlci9iaW4vRXZlbnQvaW1wbGVtZW50cy9TdGF0ZU1hY2hpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFVLE9BQVY7O0FBQUEsQ0FBQSxVQUFVLE9BQVYsRUFBaUI7QUFBQyxNQUFBLE1BQUE7O0FBQUEsR0FBQSxVQUFBLE1BQUEsRUFBTTtBQUFDLFFBQUEsV0FBQTs7QUFBQSxLQUFBLFVBQUEsV0FBQSxFQUFXO0FBQUMsVUFBQSxPQUFBOztB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QSxLQUFBLEtBQUEsT0FBQSxDQUFBLEtBQUEsR0FBSyxFQUFMLENBQUE7QUF5QmpCLENBekJELEVBQVUsT0FBTyxLQUFQLE9BQU8sR0FBQSxFQUFBLENBQWpCIiwiZmlsZSI6ImliZXJiYXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDRGljdGlvbmFyeTwgVEtleSwgVFZhbHVlID4gaW1wbGVtZW50cyBJRGljdGlvbmFyeTwgVEtleSwgVFZhbHVlID5cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIG1fY29tcGFyZXI6IElFcXVhbGl0eUNvbXBhcmVyPCBUS2V5ID4gPSBuZXcgQ0VxdWFsaXR5Q29tcGFyZXI8IFRLZXkgPigpO1xyXG5cclxuICAgICAgICBwcml2YXRlIG1fZGF0YTogeyBrZXk6IFRLZXksIHZhbHVlOiBUVmFsdWUgfVtdID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCBvcHRpb25zPzoge1xyXG4gICAgICAgICAgICBjb21wYXJlcj86IElFcXVhbGl0eUNvbXBhcmVyPCBUS2V5ID5cclxuICAgICAgICB9IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggb3B0aW9ucyAhPSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBvcHRpb25zLmNvbXBhcmVyICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9jb21wYXJlciA9IG9wdGlvbnMuY29tcGFyZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFkZChrZXk6IFRLZXksIHZhbHVlOiBUVmFsdWUpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuQ29udGFpbktleSgga2V5ICkgKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9kYXRhLnB1c2goIHsga2V5OiBrZXksIHZhbHVlOiB2YWx1ZSB9ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDb250YWluS2V5KGtleTogVEtleSk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubV9kYXRhLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBuID0gdGhpcy5tX2RhdGFbIGkgXTtcclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5tX2NvbXBhcmVyLkVxdWFscyggbi5rZXksIGtleSApIClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSZW1vdmUoa2V5OiBUS2V5KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXQoa2V5OiBUS2V5KTogVFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLm1fZGF0YS5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbiA9IHRoaXMubV9kYXRhWyBpIF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMubV9jb21wYXJlci5FcXVhbHMoIG4ua2V5LCBrZXkgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4udmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDbGVhcigpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fZGF0YSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEVhY2goIHByb2Nlc3M6IFN5c3RlbS5UQ2FsbGJhY2s8ICgga2V5OiBUS2V5LCB2YWx1ZTogVFZhbHVlICkgPT4gdm9pZCA+ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubV9kYXRhLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBuID0gdGhpcy5tX2RhdGFbIGkgXTtcclxuICAgICAgICAgICAgICAgIHByb2Nlc3MuRXhlY3V0ZSggbi5rZXksIG4udmFsdWUgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWNcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENFcXVhbGl0eUNvbXBhcmVyPCBUID4gaW1wbGVtZW50cyBJRXF1YWxpdHlDb21wYXJlcjwgVCA+XHJcbiAgICB7XHJcbiAgICAgICAgRXF1YWxzKCBhOiBULCBiOiBUICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBhID09PSBiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbi8vIG5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5NZXRhZGF0YVxyXG4vLyB7XHJcbi8vICAgICBleHBvcnQgY2xhc3MgQ01ldGFkYXRhQ29udGFpbmVyQnVpbGRlclxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9jb25maWd1cmF0aW9uQ2FsbGJhY2tzOiBCdWlsZGVyLkNEZWZlcnJlZENhbGxiYWNrW10gPSBbXTtcclxuXHJcbi8vICAgICAgICAgcHVibGljIEFkZEF0dHJpYnV0ZSggdHlwZTogUmVmbGVjdGlvbi5DVHlwZSwgdGFyZ2V0OiBVQXR0cmlidXRlVGFyZ2V0LCBhdHRyaWJ1dGU6IENBdHRyaWJ1dGUgKTogdm9pZFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5BZGRDYWxsYmFjayggcmVnaXN0cnkgPT5cclxuLy8gICAgICAgICAgICAge1xyXG5cclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBwdWJsaWMgQnVpbGQoKTogSU1ldGFkYXRhQ29udGFpbmVyXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIHB1YmxpYyBBZGRDYWxsYmFjayggY2FsbGJhY2s6ICggcmVnaXN0cnk6IENvcmUuSU1ldGFkYXRhUmVnaXN0cnkgKSA9PiB2b2lkICk6IHZvaWRcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIGxldCBjID0gbmV3IEJ1aWxkZXIuQ0RlZmVycmVkQ2FsbGJhY2soIGNhbGxiYWNrICk7XHJcbi8vICAgICAgICAgICAgIHRoaXMubV9jb25maWd1cmF0aW9uQ2FsbGJhY2tzLnB1c2goIGMgKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5NZXRhZGF0YS5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDTWV0YWRhdGFDb2xsZWN0aW9uIGltcGxlbWVudHMgSU1ldGFkYXRhQ29sbGVjdGlvblxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9saXN0OiBDQXR0cmlidXRlW10gPSBbXTtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBBZGRBdHRyaWJ1dGUoIGF0dHJpYnV0ZTogQ0F0dHJpYnV0ZSApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fbGlzdC5zcGxpY2UoIDAsIDAsIGF0dHJpYnV0ZSApO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIEdldEF0dHJpYnV0ZU9uZTxUIGV4dGVuZHMgQ0F0dHJpYnV0ZT4oIHR5cGU6IFJlZmxlY3Rpb24uQ1R5cGUgKTogVFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5tX2xpc3QubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IHRoaXMubV9saXN0WyBpIF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIGF0dHJpYnV0ZS5HZXRUeXBlKCkuSXNFcXVpdmFsZW50VG8oIHR5cGUgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUPmF0dHJpYnV0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldEF0dHJpYnV0ZXM8VCBleHRlbmRzIENBdHRyaWJ1dGU+KCB0eXBlOiBSZWZsZWN0aW9uLkNUeXBlPFQ+ICk6IFRbXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZUxpc3Q6IFRbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLm1fbGlzdC5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gdGhpcy5tX2xpc3RbIGkgXTtcclxuICAgICAgICAgICAgICAgIGlmICggYXR0cmlidXRlLkdldFR5cGUoKS5Jc0VxdWl2YWxlbnRUbyggdHlwZSApIClcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVMaXN0LnB1c2goIDxUPmF0dHJpYnV0ZSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVMaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBHZXRBdHRyaWJ1dGVzQWxsKCk6IENBdHRyaWJ1dGVbXSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NNZXRhZGF0YUNvbGxlY3Rpb24udHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5NZXRhZGF0YS5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDTWV0YWRhdGFDb250YWluZXIgaW1wbGVtZW50cyBJTWV0YWRhdGFDb250YWluZXIsIENvbGxlY3Rpb25zLkdlbmVyaWMuSUVxdWFsaXR5Q29tcGFyZXI8Q01ldGFkYXRhS2V5PlxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9wb29sOiBDb2xsZWN0aW9ucy5HZW5lcmljLklEaWN0aW9uYXJ5PCBDTWV0YWRhdGFLZXksIElNZXRhZGF0YUNvbGxlY3Rpb24gPiA9IG5ldyBDb2xsZWN0aW9ucy5HZW5lcmljLkNEaWN0aW9uYXJ5KCB7IGNvbXBhcmVyOiB0aGlzIH0gKTtcclxuXHJcbiAgICAgICAgcHVibGljIEdldE9yQWRkQ29sbGVjdGlvbigga2V5OiBDb3JlLkNNZXRhZGF0YUtleSApOiBJTWV0YWRhdGFDb2xsZWN0aW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY29sbGVjdGlvbiA9IHRoaXMubV9wb29sLkdldCgga2V5ICk7XHJcbiAgICAgICAgICAgIGlmICggY29sbGVjdGlvbiA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3Bvb2wuQWRkKCBrZXksIGNvbGxlY3Rpb24gPSBuZXcgQ01ldGFkYXRhQ29sbGVjdGlvbigpICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0Q29sbGVjdGlvbigga2V5OiBDb3JlLkNNZXRhZGF0YUtleSApOiBJTWV0YWRhdGFDb2xsZWN0aW9uUmVhZG9ubHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb2xsZWN0aW9uID0gdGhpcy5tX3Bvb2wuR2V0KCBrZXkgKTtcclxuICAgICAgICAgICAgaWYgKCBjb2xsZWN0aW9uID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENNZXRhZGF0YUNvbnRhaW5lci5FbXB0eUNvbGxlY3Rpb247XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEVxdWFscyggYTogQ01ldGFkYXRhS2V5LCBiOiBDTWV0YWRhdGFLZXkgKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEuRXF1YWxzKCBiICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVtcHR5Q29sbGVjdGlvbiA9IG5ldyBDTWV0YWRhdGFDb2xsZWN0aW9uKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvcmUvQ01ldGFkYXRhQ29udGFpbmVyLnRzXCIgLz5cclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uTWV0YWRhdGFcclxue1xyXG4gICAgZXhwb3J0IGNvbnN0IENvbnRhaW5lcjogSU1ldGFkYXRhQ29udGFpbmVyID0gbmV3IENvcmUuQ01ldGFkYXRhQ29udGFpbmVyKCk7XHJcbn0iLCJcclxuLy8gbmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLk1ldGFkYXRhLkJ1aWxkZXJcclxuLy8ge1xyXG4vLyAgICAgZXhwb3J0IGNsYXNzIENEZWZlcnJlZENhbGxiYWNrXHJcbi8vICAgICB7XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBjYWxsYmFjazogKCByZWdpc3RyeTogQ29yZS5JTWV0YWRhdGFSZWdpc3RyeSApID0+IHZvaWQgKVxyXG4vLyAgICAgICAgIHtcclxuXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9IiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5NZXRhZGF0YS5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDTWV0YWRhdGFLZXkgaW1wbGVtZW50cyBJRXF1YXRhYmxlPENNZXRhZGF0YUtleT5cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fdHlwZTogUmVmbGVjdGlvbi5DVHlwZTtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fdGFyZ2V0OiBVQXR0cmlidXRlVGFyZ2V0O1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHR5cGU6IFJlZmxlY3Rpb24uQ1R5cGUsIHRhcmdldDogVUF0dHJpYnV0ZVRhcmdldCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fdHlwZSA9IHR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMubV90YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRXF1YWxzKG90aGVyOiBDTWV0YWRhdGFLZXkpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3R5cGUuSXNFcXVpdmFsZW50VG8oIG90aGVyLm1fdHlwZSApICYmIHRoaXMubV90YXJnZXQgPT0gb3RoZXIubV90YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLk1ldGFkYXRhLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENNZXRhZGF0YUtleUZvckNsYXNzIGV4dGVuZHMgQ01ldGFkYXRhS2V5XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCB0eXBlOiBSZWZsZWN0aW9uLkNUeXBlLCB0YXJnZXQ6IFVBdHRyaWJ1dGVUYXJnZXQgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoIHR5cGUsIHRhcmdldCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEVxdWFscyggb3RoZXI6IENNZXRhZGF0YUtleSApOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHN1cGVyLkVxdWFscyggb3RoZXIgKSA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggb3RoZXIgaW5zdGFuY2VvZiBDTWV0YWRhdGFLZXlGb3JDbGFzcyApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5NZXRhZGF0YS5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDTWV0YWRhdGFLZXlGb3JOYW1lZCBleHRlbmRzIENNZXRhZGF0YUtleVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9uYW1lOiBzdHJpbmcgfCBzeW1ib2wgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHR5cGU6IFJlZmxlY3Rpb24uQ1R5cGUsIHRhcmdldDogVUF0dHJpYnV0ZVRhcmdldCwgbmFtZTogc3RyaW5nIHwgc3ltYm9sIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCB0eXBlLCB0YXJnZXQgKTtcclxuICAgICAgICAgICAgdGhpcy5tX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEVxdWFscyggb3RoZXI6IENNZXRhZGF0YUtleSApOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHN1cGVyLkVxdWFscyggb3RoZXIgKSA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggb3RoZXIgaW5zdGFuY2VvZiBDTWV0YWRhdGFLZXlGb3JOYW1lZCAmJiBvdGhlci5tX25hbWUgPT0gdGhpcy5tX25hbWUgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uTWV0YWRhdGEuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ01ldGFkYXRhS2V5Rm9yUGFyYW1ldGVyIGV4dGVuZHMgQ01ldGFkYXRhS2V5XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX21ldGhvZE5hbWU6IHN0cmluZyB8IHN5bWJvbCA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2luZGV4OiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHR5cGU6IFJlZmxlY3Rpb24uQ1R5cGUsIHRhcmdldDogVUF0dHJpYnV0ZVRhcmdldCwgbWV0aG9kTmFtZTogc3RyaW5nIHwgc3ltYm9sLCBpbmRleDogbnVtYmVyIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCB0eXBlLCB0YXJnZXQgKTtcclxuICAgICAgICAgICAgdGhpcy5tX2luZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMubV9tZXRob2ROYW1lID0gbWV0aG9kTmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBFcXVhbHMoIG90aGVyOiBDTWV0YWRhdGFLZXkgKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBzdXBlci5FcXVhbHMoIG90aGVyICkgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIG90aGVyIGluc3RhbmNlb2YgQ01ldGFkYXRhS2V5Rm9yUGFyYW1ldGVyICYmIHRoaXMubV9tZXRob2ROYW1lID09IG90aGVyLm1fbWV0aG9kTmFtZSAmJiBvdGhlci5tX2luZGV4ID09IHRoaXMubV9pbmRleCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxuXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvblxue1xuICAgIC8qKlxuICAgICAqIOiHquWKqOaYoOWwhOaehOmAoOWHveaVsOeahOWPguaVsOexu+Wei1xuICAgICAqIFxuICAgICAqIOmcgOimgXRzY29uZmln6YWN572uIFwiZW1pdERlY29yYXRvck1ldGFkYXRhXCI6IHRydWVcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFxuICAgICAqL1xuICAgIGV4cG9ydCBmdW5jdGlvbiBBdXRvUmVmbGVjdE1ldGFkYXRhX0NvbnN0cnVjdG9yKCB0YXJnZXQ6IGFueSApOiBhbnlcbiAgICB7XG4gICAgICAgIGxldCBwYXJhbXR5cGVzOiBBcnJheTwgVHlwZUNvbnN0cnVjdG9yPGFueT4gPiA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoIFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgdGFyZ2V0ICk7XG4gICAgICAgIC8vIGlmICggcGFyYW10eXBlcyA9PSBudWxsIClcbiAgICAgICAgLy8gICAgIHRocm93IG5ldyBFcnJvciggJ+mcgOimgXRzY29uZmln6YWN572uIFwiZW1pdERlY29yYXRvck1ldGFkYXRhXCI6IHRydWUnICk7XG4gICAgICAgIGlmICggcGFyYW10eXBlcyAhPSBudWxsIClcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yICggbGV0IHBhcmFtZXRlckluZGV4ID0gMDsgcGFyYW1ldGVySW5kZXggPCBwYXJhbXR5cGVzLmxlbmd0aDsgcGFyYW1ldGVySW5kZXggKysgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JQYXJhbWV0ZXIoIFJlZmxlY3Rpb24uVHlwZU9mX18oIHRhcmdldC5wcm90b3R5cGUgKSwgVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIFwiY29uc3RydWN0b3JcIiwgcGFyYW1ldGVySW5kZXggKTtcbiAgICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gbmV3IENEZWNsYXJpbmdUeXBlQXR0cmlidXRlKCAoKSA9PiBUeXBlT2YoIHBhcmFtdHlwZXNbIHBhcmFtZXRlckluZGV4IF0gKSwgbnVsbCApO1xuICAgICAgICAgICAgICAgIE1ldGFkYXRhLkNvbnRhaW5lci5HZXRPckFkZENvbGxlY3Rpb24oIGtleSApLkFkZEF0dHJpYnV0ZSggYXR0cmlidXRlICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAgICAgLyoqXG4gICAgLy8gICog6Ieq5Yqo5pig5bCE5p6E6YCg5Ye95pWw55qE5Y+C5pWw57G75Z6LXG4gICAgLy8gICogXG4gICAgLy8gICog6ZyA6KaBdHNjb25maWfphY3nva4gXCJlbWl0RGVjb3JhdG9yTWV0YWRhdGFcIjogdHJ1ZVxuICAgIC8vICAqIEBwYXJhbSB0YXJnZXQgXG4gICAgLy8gICovXG4gICAgLy8gZXhwb3J0IGZ1bmN0aW9uIEF1dG9SZWZsZWN0TWV0YWRhdGFfQ29uc3RydWN0b3IoKVxuICAgIC8vIHtcbiAgICAvLyAgICAgcmV0dXJuIGZ1bmN0aW9uKCB0YXJnZXQ6IGFueSApOiBhbnlcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgbGV0IHBhcmFtdHlwZXM6IEFycmF5PCBUeXBlQ29uc3RydWN0b3I8YW55PiA+ID0gUmVmbGVjdC5nZXRNZXRhZGF0YSggXCJkZXNpZ246cGFyYW10eXBlc1wiLCB0YXJnZXQgKTtcbiAgICAvLyAgICAgICAgIC8vIGlmICggcGFyYW10eXBlcyA9PSBudWxsIClcbiAgICAvLyAgICAgICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoICfpnIDopoF0c2NvbmZpZ+mFjee9riBcImVtaXREZWNvcmF0b3JNZXRhZGF0YVwiOiB0cnVlJyApO1xuICAgIC8vICAgICAgICAgaWYgKCBwYXJhbXR5cGVzICE9IG51bGwgKVxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIGZvciAoIGxldCBwYXJhbWV0ZXJJbmRleCA9IDA7IHBhcmFtZXRlckluZGV4IDwgcGFyYW10eXBlcy5sZW5ndGg7IHBhcmFtZXRlckluZGV4ICsrIClcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JQYXJhbWV0ZXIoIFJlZmxlY3Rpb24uVHlwZU9mX18oIHRhcmdldC5wcm90b3R5cGUgKSwgVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIFwiY29uc3RydWN0b3JcIiwgcGFyYW1ldGVySW5kZXggKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IG5ldyBDRGVjbGFyaW5nVHlwZUF0dHJpYnV0ZSggVHlwZU9mKCBwYXJhbXR5cGVzWyBwYXJhbWV0ZXJJbmRleCBdICksIG51bGwgKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgTWV0YWRhdGEuQ29udGFpbmVyLkdldE9yQWRkQ29sbGVjdGlvbigga2V5ICkuQWRkQXR0cmlidXRlKCBhdHRyaWJ1dGUgKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvKipcbiAgICAgKiDoh6rliqjmmKDlsITlrZfmrrXnsbvlnotcbiAgICAgKiBcbiAgICAgKiDpnIDopoF0c2NvbmZpZ+mFjee9riBcImVtaXREZWNvcmF0b3JNZXRhZGF0YVwiOiB0cnVlXG4gICAgICovXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEF1dG9SZWZsZWN0TWV0YWRhdGFfRmllbGQoIHRhcmdldDogYW55LCBmaWVsZE5hbWU6IHN0cmluZyApOiBhbnlcbiAgICB7XG4gICAgICAgIEVudW1lcmFibGUoIHRhcmdldCwgZmllbGROYW1lICk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdHlwZUNvbnN0cnVjdG9yID0gUmVmbGVjdC5nZXRNZXRhZGF0YSggXCJkZXNpZ246dHlwZVwiLCB0YXJnZXQsIGZpZWxkTmFtZSApO1xuICAgICAgICAvLyBpZiAoIHR5cGVDb25zdHJ1Y3RvciA9PSBudWxsIClcbiAgICAgICAgLy8gICAgIHRocm93IG5ldyBFcnJvciggJ+mcgOimgXRzY29uZmln6YWN572uIFwiZW1pdERlY29yYXRvck1ldGFkYXRhXCI6IHRydWUnICk7XG4gICAgICAgIGlmICggdHlwZUNvbnN0cnVjdG9yICE9IG51bGwgKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQga2V5ID0gbmV3IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5Rm9yTmFtZWQoIFJlZmxlY3Rpb24uVHlwZU9mX18oIHRhcmdldCApLCBVQXR0cmlidXRlVGFyZ2V0LkZpZWxkLCBmaWVsZE5hbWUgKTtcbiAgICAgICAgICAgIGxldCBhdHRyaWJ1dGUgPSBuZXcgQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUoICgpID0+IFR5cGVPZiggdHlwZUNvbnN0cnVjdG9yICksIG51bGwgKTtcbiAgICAgICAgICAgIE1ldGFkYXRhLkNvbnRhaW5lci5HZXRPckFkZENvbGxlY3Rpb24oIGtleSApLkFkZEF0dHJpYnV0ZSggYXR0cmlidXRlICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDoh6rliqjmmKDlsITlsZ7mgKfnsbvlnotcbiAgICAgKiBcbiAgICAgKiDpnIDopoF0c2NvbmZpZ+mFjee9riBcImVtaXREZWNvcmF0b3JNZXRhZGF0YVwiOiB0cnVlXG4gICAgICovXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEF1dG9SZWZsZWN0TWV0YWRhdGFfUHJvcGVydHkoIHRhcmdldDogYW55LCBwcm9wZXJ0eU5hbWU6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yICk6IGFueVxuICAgIHtcbiAgICAgICAgaWYgKCBkZXNjcmlwdG9yLnNldCA9PSBudWxsICYmIGRlc2NyaXB0b3IuZ2V0ID09IG51bGwgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIkNhbid0IGF1dG8gcmVmbGVjdCBvbiBtZXRob2QuXCIgKTtcbiAgICAgICAgbGV0IHR5cGVDb25zdHJ1Y3RvciA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoIFwiZGVzaWduOnR5cGVcIiwgdGFyZ2V0LCBwcm9wZXJ0eU5hbWUgKTtcbiAgICAgICAgLy8gaWYgKCB0eXBlQ29uc3RydWN0b3IgPT0gbnVsbCApXG4gICAgICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoICfpnIDopoF0c2NvbmZpZ+mFjee9riBcImVtaXREZWNvcmF0b3JNZXRhZGF0YVwiOiB0cnVlJyApO1xuICAgICAgICBpZiAoIHR5cGVDb25zdHJ1Y3RvciAhPSBudWxsIClcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGtleSA9IG5ldyBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleUZvck5hbWVkKCBSZWZsZWN0aW9uLlR5cGVPZl9fKCB0YXJnZXQgKSwgVUF0dHJpYnV0ZVRhcmdldC5Qcm9wZXJ0eSwgcHJvcGVydHlOYW1lICk7XG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gbmV3IENEZWNsYXJpbmdUeXBlQXR0cmlidXRlKCAoKSA9PiBUeXBlT2YoIHR5cGVDb25zdHJ1Y3RvciApLCBudWxsICk7XG4gICAgICAgICAgICBNZXRhZGF0YS5Db250YWluZXIuR2V0T3JBZGRDb2xsZWN0aW9uKCBrZXkgKS5BZGRBdHRyaWJ1dGUoIGF0dHJpYnV0ZSApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6Ieq5Yqo5pig5bCE5pa55rOV55qE6L+U5Zue57G75Z6L5ZKM5Y+C5pWw57G75Z6LXG4gICAgICogXG4gICAgICog6ZyA6KaBdHNjb25maWfphY3nva4gXCJlbWl0RGVjb3JhdG9yTWV0YWRhdGFcIjogdHJ1ZVxuICAgICAqL1xuICAgIGV4cG9ydCBmdW5jdGlvbiBBdXRvUmVmbGVjdE1ldGFkYXRhX01ldGhvZCggdGFyZ2V0OiBhbnksIG1ldGhvZE5hbWU6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yICk6IGFueVxuICAgIHtcbiAgICAgICAgaWYgKCBkZXNjcmlwdG9yLnNldCAhPSBudWxsIHx8IGRlc2NyaXB0b3IuZ2V0ICE9IG51bGwgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIkNhbid0IGF1dG8gcmVmbGVjdCBvbiBwcm9wZXJ0eS5cIiApO1xuXG4gICAgICAgIGxldCBrZXk6IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5O1xuICAgICAgICBsZXQgYXR0cmlidXRlOiBDQXR0cmlidXRlO1xuXG4gICAgICAgIGxldCByZXR1cm50eXBlQ29uc3RydWN0b3IgPSBSZWZsZWN0LmdldE1ldGFkYXRhKCBcImRlc2lnbjpyZXR1cm50eXBlXCIsIHRhcmdldCwgbWV0aG9kTmFtZSApO1xuICAgICAgICAvLyBpZiAoIHJldHVybnR5cGVDb25zdHJ1Y3RvciA9PSBudWxsIClcbiAgICAgICAgLy8gICAgIHRocm93IG5ldyBFcnJvciggJ+mcgOimgXRzY29uZmln6YWN572uIFwiZW1pdERlY29yYXRvck1ldGFkYXRhXCI6IHRydWUnICk7XG4gICAgICAgIGlmICggcmV0dXJudHlwZUNvbnN0cnVjdG9yICE9IG51bGwgKVxuICAgICAgICB7XG4gICAgICAgICAgICBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JOYW1lZCggUmVmbGVjdGlvbi5UeXBlT2ZfXyggdGFyZ2V0ICksIFVBdHRyaWJ1dGVUYXJnZXQuTWV0aG9kLCBtZXRob2ROYW1lICk7XG4gICAgICAgICAgICBhdHRyaWJ1dGUgPSBuZXcgQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUoICgpID0+IFR5cGVPZiggcmV0dXJudHlwZUNvbnN0cnVjdG9yICksIG51bGwgKTtcbiAgICAgICAgICAgIE1ldGFkYXRhLkNvbnRhaW5lci5HZXRPckFkZENvbGxlY3Rpb24oIGtleSApLkFkZEF0dHJpYnV0ZSggYXR0cmlidXRlICk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFyYW10eXBlQ29uc3RydWN0b3JzOiBBcnJheTwgVHlwZUNvbnN0cnVjdG9yPGFueT4gPiA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoIFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgdGFyZ2V0ICk7XG4gICAgICAgIC8vIGlmICggcGFyYW10eXBlQ29uc3RydWN0b3JzID09IG51bGwgKVxuICAgICAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKCAn6ZyA6KaBdHNjb25maWfphY3nva4gXCJlbWl0RGVjb3JhdG9yTWV0YWRhdGFcIjogdHJ1ZScgKTtcbiAgICAgICAgaWYgKCBwYXJhbXR5cGVDb25zdHJ1Y3RvcnMgIT0gbnVsbCApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAoIGxldCBwYXJhbWV0ZXJJbmRleCA9IDA7IHBhcmFtZXRlckluZGV4IDwgcGFyYW10eXBlQ29uc3RydWN0b3JzLmxlbmd0aDsgcGFyYW1ldGVySW5kZXggKysgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JQYXJhbWV0ZXIoIFJlZmxlY3Rpb24uVHlwZU9mX18oIHRhcmdldC5wcm90b3R5cGUgKSwgVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIG1ldGhvZE5hbWUsIHBhcmFtZXRlckluZGV4ICk7XG4gICAgICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IG5ldyBDRGVjbGFyaW5nVHlwZUF0dHJpYnV0ZSggKCkgPT4gVHlwZU9mKCBwYXJhbXR5cGVDb25zdHJ1Y3RvcnNbIHBhcmFtZXRlckluZGV4IF0gKSwgbnVsbCApO1xuICAgICAgICAgICAgICAgIE1ldGFkYXRhLkNvbnRhaW5lci5HZXRPckFkZENvbGxlY3Rpb24oIGtleSApLkFkZEF0dHJpYnV0ZSggYXR0cmlidXRlICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvblxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0Fzc2VtYmx5XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2pzbW9kdWxlOiBhbnkgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHM6IGFueSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fanNtb2R1bGUgPSBzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFR5cGVzKCk6IENUeXBlW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkdldFR5cGVzSW50ZXJuYWwoIHRoaXMubV9qc21vZHVsZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBHZXRUeXBlc0ludGVybmFsKCBvYmo6IGFueSApOiBDVHlwZVtdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQganNfdHlwZW9mID0gdHlwZW9mKCBvYmogKTtcclxuICAgICAgICAgICAgaWYgKCBqc190eXBlb2YgIT0gXCJvYmplY3RcIiApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgIGxldCB0eXBlczogQ1R5cGVbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKCBjb25zdCBrIGluIG9iaiApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBvYmpbIGsgXTtcclxuICAgICAgICAgICAgICAgIGlmICggdiA9PSB1bmRlZmluZWQgfHwgdiA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGlmICggdlsgXCJwcm90b3R5cGVcIiBdICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVzLnB1c2goIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggdiApICk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZXMgPSB0eXBlcy5jb25jYXQoIHRoaXMuR2V0VHlwZXNJbnRlcm5hbCggdiApICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0eXBlcyA9IHR5cGVzLmNvbmNhdCggdGhpcy5HZXRUeXBlc0ludGVybmFsKCB2ICkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHlwZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb25cclxue1xyXG4gICAgZXhwb3J0IHR5cGUgVU1lbWJlclN5bWJvbCA9IHN0cmluZztcclxuXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ01lbWJlckluZm8gaW1wbGVtZW50cyBJQ3VzdG9tQXR0cmlidXRlUHJvdmlkZXJcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbV9uYW1lOiBVTWVtYmVyU3ltYm9sID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbV9wcm90b3R5cGU6IFR5cGVQcm90b3R5cGU8IG9iamVjdCA+ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX21ldGFkYXRhQ29sbGVjdGlvbjogTWV0YWRhdGEuSU1ldGFkYXRhQ29sbGVjdGlvblJlYWRvbmx5ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKCBuYW1lOiBVTWVtYmVyU3ltYm9sLCBwcm90b3R5cGU6IFR5cGVQcm90b3R5cGU8IG9iamVjdCA+IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX3Byb3RvdHlwZSA9IHByb3RvdHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgTWVtYmVyVHlwZSgpOiBVTWVtYmVyVHlwZXM7XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgTmFtZSgpOiBVTWVtYmVyU3ltYm9sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX25hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIHRoZSBjbGFzcyB0aGF0IGRlY2xhcmVzIHRoaXMgbWVtYmVyLlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIOWjsOaYjuatpOaIkOWRmOeahENsYXNz57G75Z6L77yM5LiL6Z2i5a6e5L6L5Lit55qEVGV4dOWxnuaAp01lbWJlckluZm/nmoREZWNsYXJpbmdUeXBl6L+U5ZueICoqQml1Yml1KipcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcmV0dXJucyBUaGUgVHlwZSBvYmplY3QgZm9yIHRoZSBjbGFzcyB0aGF0IGRlY2xhcmVzIHRoaXMgbWVtYmVyLlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIGBgYGpzXHJcbiAgICAgICAgICogY2xhc3MgQml1Yml1XHJcbiAgICAgICAgICoge1xyXG4gICAgICAgICAqICAgICAgZ2V0IFRleHQoKTogc3RyaW5nIHsgcmV0dXJuICBcIlwiOyB9XHJcbiAgICAgICAgICogfVxyXG4gICAgICAgICAqIGBgYFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXQgRGVjbGFyaW5nVHlwZSgpOiBDVHlwZTwgb2JqZWN0ID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBUeXBlT2YoIHRoaXMubV9wcm90b3R5cGUuY29uc3RydWN0b3IgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRKc1Byb3RvdHlwZTwgVEV4dHJhIGV4dGVuZHMge30gPSB7fSA+KCk6IFR5cGVQcm90b3R5cGU8IG9iamVjdCA+ICYgVEV4dHJhXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gPGFueT50aGlzLm1fcHJvdG90eXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXQgTWV0YWRhdGFDb2xsZWN0aW9uKCk6IE1ldGFkYXRhLklNZXRhZGF0YUNvbGxlY3Rpb25SZWFkb25seVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fbWV0YWRhdGFDb2xsZWN0aW9uID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5HZXRNZXRhZGF0YUtleSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX21ldGFkYXRhQ29sbGVjdGlvbiA9IE1ldGFkYXRhLkNvbnRhaW5lci5HZXRDb2xsZWN0aW9uKCBrZXkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX21ldGFkYXRhQ29sbGVjdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRDdXN0b21BdHRyaWJ1dGVPbmU8IFRBdHRyaWJ1dGUgZXh0ZW5kcyBDQXR0cmlidXRlID4oIGF0dHJpYnV0ZVR5cGU6IENUeXBlPCBUQXR0cmlidXRlID4gKTogVEF0dHJpYnV0ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuTWV0YWRhdGFDb2xsZWN0aW9uLkdldEF0dHJpYnV0ZU9uZSggYXR0cmlidXRlVHlwZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEN1c3RvbUF0dHJpYnV0ZXM8IFRBdHRyaWJ1dGUgZXh0ZW5kcyBDQXR0cmlidXRlID4oIGF0dHJpYnV0ZVR5cGU6IENUeXBlPCBUQXR0cmlidXRlID4gKTogVEF0dHJpYnV0ZVtdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5NZXRhZGF0YUNvbGxlY3Rpb24uR2V0QXR0cmlidXRlcyggYXR0cmlidXRlVHlwZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEN1c3RvbUF0dHJpYnV0ZXNBbGwoKTogQ0F0dHJpYnV0ZVtdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5NZXRhZGF0YUNvbGxlY3Rpb24uR2V0QXR0cmlidXRlc0FsbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIElzRGVmaW5lZDwgVEF0dHJpYnV0ZSBleHRlbmRzIENBdHRyaWJ1dGUgPiggYXR0cmlidXRlVHlwZTogQ1R5cGU8IFRBdHRyaWJ1dGUgPiApOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKCB0aGlzLk1ldGFkYXRhQ29sbGVjdGlvbi5HZXRBdHRyaWJ1dGVPbmUoIGF0dHJpYnV0ZVR5cGUgKSA9PSBudWxsICkgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0TWV0YWRhdGFLZXkoKTogTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL01lbWJlckluZm8udHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDTWV0aG9kQmFzZSBleHRlbmRzIENNZW1iZXJJbmZvXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldFBhcmFtZXRlcnMoKTogQXJyYXk8IENQYXJhbWV0ZXJJbmZvID47XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgRGVzY3JpcHRvcigpOiBQcm9wZXJ0eURlc2NyaXB0b3I7XHJcbiAgICB9XHJcbn0iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ01ldGhvZEJhc2UudHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDQ29uc3RydWN0b3JJbmZvIGV4dGVuZHMgQ01ldGhvZEJhc2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgZ2V0IEpzQ29uc3RydWN0b3IoKTogVHlwZUNvbnN0cnVjdG9yPCBvYmplY3QgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9wcm90b3R5cGUuY29uc3RydWN0b3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSW52b2tlKCAuLi5hcmdzOiBhbnlbXSApOiBvYmplY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5Kc0NvbnN0cnVjdG9yKCAuLi5hcmdzICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0UGFyYW1ldGVycygpOiBBcnJheTwgQ1BhcmFtZXRlckluZm8gPjtcclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbVxyXG57XHJcbiAgICBleHBvcnQgZW51bSBVQXR0cmlidXRlVGFyZ2V0XHJcbiAgICB7XHJcbiAgICAgICAgQ2xhc3MgPSAweDAwMDEsXHJcbiAgICAgICAgRmllbGQgPSAweDAwMDIsXHJcbiAgICAgICAgTWV0aG9kID0gMHgwMDA0LFxyXG4gICAgICAgIFBhcmFtZXRlciA9IDB4MDAwOCxcclxuICAgICAgICBQcm9wZXJ0eSA9IDB4MDAxMCxcclxuICAgICAgICBBbGwgPSBDbGFzcyB8IEZpZWxkIHwgTWV0aG9kIHwgUGFyYW1ldGVyIHwgUHJvcGVydHksXHJcbiAgICB9O1xyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW1cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiDnibnmgKfln7rnsbtcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIENBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgIH07XHJcbn1cclxuXHJcbiIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9DQXR0cmlidXRlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vVUF0dHJpYnV0ZVRhcmdldC50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUgZXh0ZW5kcyBDQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fdmFsaWRPbjogbnVtYmVyO1xyXG4gICAgICAgIHByb3RlY3RlZCBtX2FsbG93TXVsdGlwbGU/OiBib29sZWFuO1xyXG4gICAgICAgIHByb3RlY3RlZCBtX2luaGVyaXRlZD86IGJvb2xlYW47XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgVmFsaWRPbigpIDogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV92YWxpZE9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgZ2V0IEFsbG93TXVsdGlwbGUoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9hbGxvd011bHRpcGxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBJbmhlcml0ZWQoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9pbmhlcml0ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHZhbGlkT246IG51bWJlciwgYWxsb3dNdWx0aXBsZT86IGJvb2xlYW4sIGluaGVyaXQ/OiBib29sZWFuIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV92YWxpZE9uID0gdmFsaWRPbjtcclxuICAgICAgICAgICAgdGhpcy5tX2FsbG93TXVsdGlwbGUgPSAoIGFsbG93TXVsdGlwbGUgPT0gbnVsbCApID8gdHJ1ZSA6IGFsbG93TXVsdGlwbGU7XHJcbiAgICAgICAgICAgIHRoaXMubV9pbmhlcml0ZWQgPSAoIGluaGVyaXQgPT0gbnVsbCApID8gdHJ1ZSA6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIERlZmF1bHRVc2FnZSA9IG5ldyBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUoIFVBdHRyaWJ1dGVUYXJnZXQuQWxsLCB0cnVlLCB0cnVlICk7XHJcbiAgICB9O1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vTWVtYmVySW5mby50c1wiIC8+XHJcblxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDRmllbGRJbmZvIGV4dGVuZHMgQ01lbWJlckluZm9cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgZ2V0IE1lbWJlclR5cGUoKTogVU1lbWJlclR5cGVzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gVU1lbWJlclR5cGVzLkZpZWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFNldFZhbHVlKCBvYmo6IG9iamVjdCwgdmFsdWU6IGFueSApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAoPGFueT5vYmopWyB0aGlzLm1fbmFtZSBdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0VmFsdWUoIG9iajogb2JqZWN0ICk6IGFueVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8YW55Pm9iailbIHRoaXMubV9uYW1lIF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0TWV0YWRhdGFLZXkoKTogTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JOYW1lZCggdGhpcy5EZWNsYXJpbmdUeXBlLCBVQXR0cmlidXRlVGFyZ2V0LkZpZWxkLCB0aGlzLk5hbWUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgRmllbGRUeXBlKCk6IENUeXBlO1xyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL01lbWJlckluZm8udHNcIiAvPlxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ01ldGhvZEJhc2UudHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDTWV0aG9kSW5mbyBleHRlbmRzIENNZXRob2RCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gcHJvdGVjdGVkIHJlYWRvbmx5IG1fbWV0aG9kOiBGdW5jdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIHByb3RlY3RlZCBjb25zdHJ1Y3Rvciggbjogc3RyaW5nLCBwcm90b3R5cGU6IFR5cGVQcm90b3R5cGU8IGFueSA+LCBtZXRob2Q6IEZ1bmN0aW9uIClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIHN1cGVyKCBuLCBwcm90b3R5cGUgKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5tX21ldGhvZCA9IG1ldGhvZDtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBJbnZva2UoIG9iajogYW55LCAuLi5hcmdzOiBhbnlbXSApOiBhbnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLk1ldGhvZC5hcHBseSggb2JqLCBhcmdzICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwdWJsaWMgR2V0UGFyYW1ldGVycygpOiBBcnJheTwgQ1BhcmFtZXRlckluZm8gPlxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgbGV0IGNsYXNzVHlwZSA9IHRoaXMuRGVjbGFyaW5nVHlwZTtcclxuICAgICAgICAvLyAgICAgbGV0IHBhcmFtZXRlckNvdW50ID0gdGhpcy5NZXRob2QubGVuZ3RoO1xyXG4gICAgICAgIC8vICAgICBsZXQgaW5mb3M6IEFycmF5PCBDUGFyYW1ldGVySW5mbyA+ID0gQXJyYXkoIHBhcmFtZXRlckNvdW50ICk7XHJcbiAgICAgICAgLy8gICAgIGlmICggcGFyYW1ldGVyQ291bnQgPiAwIClcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVyQ291bnQ7IGkgKysgKVxyXG4gICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBrZXk6IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5ID0gbnVsbDtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoIHRoaXMuTmFtZS5zdGFydHNXaXRoKCBcImdldF9cIiApIHx8IHRoaXMuTmFtZS5zdGFydHNXaXRoKCBcInNldF9cIiApIClcclxuICAgICAgICAvLyAgICAgICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGtleSA9IG5ldyBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleUZvck5hbWVkKCBjbGFzc1R5cGUsIFVBdHRyaWJ1dGVUYXJnZXQuUHJvcGVydHksIHRoaXMuTmFtZS5zdWJzdHIoIDQgKSApO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgLy8gICAgICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JQYXJhbWV0ZXIoIGNsYXNzVHlwZSwgVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIHRoaXMuTmFtZSwgaSApO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgdHlwZUF0dHJpYnV0ZSA9IE1ldGFkYXRhLkNvbnRhaW5lci5HZXRDb2xsZWN0aW9uKCBrZXkgKS5HZXRBdHRyaWJ1dGVPbmUoIFR5cGVPZiggQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUgKSApO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGluZm9zWyBpIF0gPSBuZXcgQ1BhcmFtZXRlckluZm8oIHRoaXMubV9wcm90b3R5cGUsIHRoaXMsIGksICggdHlwZUF0dHJpYnV0ZSA9PSBudWxsICkgPyBudWxsIDogdHlwZUF0dHJpYnV0ZS5EZWNsYXJpbmdUeXBlICk7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgcmV0dXJuIGluZm9zO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gcHVibGljIGdldCBEZXNjcmlwdG9yKClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpcy5tX3Byb3RvdHlwZSwgdGhpcy5tX25hbWUgKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRNZXRhZGF0YUtleSgpOiBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleUZvck5hbWVkKCB0aGlzLkRlY2xhcmluZ1R5cGUsIFVBdHRyaWJ1dGVUYXJnZXQuTWV0aG9kLCB0aGlzLk5hbWUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXQgTWV0aG9kKCk6IEZ1bmN0aW9uO1xyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL01lbWJlckluZm8udHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDUHJvcGVydHlJbmZvIGV4dGVuZHMgQ01lbWJlckluZm9cclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIHRoZSB0eXBlIG9mIHRoaXMgcHJvcGVydHlcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiDlsZ7mgKfnmoTnsbvlnotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IFByb3BlcnR5VHlwZSgpOiBDVHlwZTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IFNldFZhbHVlKCBvYmo6IGFueSwgdmFsdWU6IGFueSApOiB2b2lkO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0VmFsdWUoIG9iajogYW55ICk6IGFueTtcclxuXHJcbiAgICAgICAgcHVibGljIEdldE1ldGFkYXRhS2V5KCk6IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5Rm9yTmFtZWQoIHRoaXMuRGVjbGFyaW5nVHlwZSwgVUF0dHJpYnV0ZVRhcmdldC5Qcm9wZXJ0eSwgdGhpcy5OYW1lICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IENhbldyaXRlKCk6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgQ2FuUmVhZCgpOiBib29sZWFuXHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRTZXRNZXRob2QoKTogQ01ldGhvZEluZm87XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRHZXRNZXRob2QoKTogQ01ldGhvZEluZm87XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDUGFyYW1ldGVySW5mbyBpbXBsZW1lbnRzIElDdXN0b21BdHRyaWJ1dGVQcm92aWRlclxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IFBhcmFtZXRlckluZGV4KCk6IG51bWJlcjtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldCBOYW1lKCk6IHN0cmluZztcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldCBQYXJhbWV0ZXJUeXBlKCk6IENUeXBlO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0Q3VzdG9tQXR0cmlidXRlT25lPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+ICk6IFRBdHRyaWJ1dGU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRDdXN0b21BdHRyaWJ1dGVzPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+ICk6IFRBdHRyaWJ1dGVbXTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldEN1c3RvbUF0dHJpYnV0ZXNBbGwoKTogQ0F0dHJpYnV0ZVtdO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSXNEZWZpbmVkPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+ICk6IGJvb2xlYW47XHJcbiAgICB9XHJcbn0iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29uc3RydWN0b3JJbmZvLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRmllbGRJbmZvLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vTWV0aG9kSW5mby50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1Byb3BlcnR5SW5mby50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1BhcmFtZXRlckluZm8udHNcIiAvPlxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUN1c3RvbUF0dHJpYnV0ZVByb3ZpZGVyLnRzXCIgLz5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogb2JqZWN0IOa0vueUn+exu+eahOaehOmAoOWZqOexu+Wei1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFR5cGVDb25zdHJ1Y3RvcjwgVCBleHRlbmRzIG9iamVjdCA+IGV4dGVuZHMgRnVuY3Rpb25cclxuICAgIHtcclxuICAgICAgICBuZXcgKCAuLi5hcmdzOiBhbnlbXSApOiBUO1xyXG4gICAgICAgIC8vcHJvdG90eXBlOiBUIHwgVHlwZVByb3RvdHlwZTwgVCA+O1xyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFR5cGVDb25zdHJ1Y3RvckFic3RyYWN0PCBUIGV4dGVuZHMgb2JqZWN0ID4gZXh0ZW5kcyBGdW5jdGlvblxyXG4gICAge1xyXG4gICAgICAgIHByb3RvdHlwZTogVCB8IFR5cGVQcm90b3R5cGU8IFQgPjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBleHBvcnQgaW50ZXJmYWNlIFR5cGVDb25zdHJ1Y3Rvck5ldzwgVCBleHRlbmRzIG9iamVjdCA+IGV4dGVuZHMgRnVuY3Rpb25cclxuICAgIC8vIHtcclxuICAgIC8vICAgICBuZXcgKCAuLi5hcmdzOiBhbnlbXSApOiBUO1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogb2JqZWN0IOa0vueUn+exu+eahHByb3RvdHlwZeexu+Wei1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFR5cGVQcm90b3R5cGU8IFQgZXh0ZW5kcyBvYmplY3QgPiBleHRlbmRzIE9iamVjdFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yOiBUeXBlQ29uc3RydWN0b3I8IFQgPjtcclxuICAgIH07XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEdldE9yQ3JlYXRlRGljdGlvbmFyeUluSnNQcm90b3R5cGU8IFQgZXh0ZW5kcyB7fSA+KCBwcm90b3R5cGU6IFR5cGVQcm90b3R5cGU8IG9iamVjdCA+LCBrZXk6IHN0cmluZyApIDogVFxyXG4gICAge1xyXG4gICAgICAgIGxldCBkYXRhOiBUID0gbnVsbDtcclxuICAgICAgICBpZiAoIHByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgga2V5ICkgPT0gZmFsc2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YSA9ICg8YW55PnByb3RvdHlwZSlbIGtleSBdID0gPFQ+e307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGEgPSAoPGFueT5wcm90b3R5cGUpWyBrZXkgXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEdldE9yQ3JlYXRlQXJyYXlJbkpzUHJvdG90eXBlPCBUIGV4dGVuZHMge30gPiggcHJvdG90eXBlOiBUeXBlUHJvdG90eXBlPCBvYmplY3QgPiwga2V5OiBzdHJpbmcgKSA6IEFycmF5PCBUID5cclxuICAgIHtcclxuICAgICAgICBsZXQgZGF0YTogQXJyYXk8IFQgPiA9IG51bGw7XHJcbiAgICAgICAgaWYgKCBwcm90b3R5cGUuaGFzT3duUHJvcGVydHkoIGtleSApID09IGZhbHNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGEgPSAoPGFueT5wcm90b3R5cGUpWyBrZXkgXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhID0gKDxhbnk+cHJvdG90eXBlKVsga2V5IF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSURlbGF5VHlwZTwgVCBleHRlbmRzIG9iamVjdCA9IG9iamVjdCA+XHJcbiAgICB7XHJcbiAgICAgICAgKCk6IENUeXBlPFQ+O1xyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ1R5cGU8IFQgZXh0ZW5kcyBvYmplY3QgPSBvYmplY3QgPiBpbXBsZW1lbnRzIElDdXN0b21BdHRyaWJ1dGVQcm92aWRlciwgSUVxdWF0YWJsZTwgQ1R5cGUgPlxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEVxdWFscyggb3RoZXI6IENUeXBlICk6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRKc1Byb3RvdHlwZTwgVEV4dHJhIGV4dGVuZHMge30gPSB7fSA+KCk6IFR5cGVQcm90b3R5cGU8IFQgPiAmIFRFeHRyYTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldEpzQ29uc3RydWN0b3IoKTogVHlwZUNvbnN0cnVjdG9yPCBUID47XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRDb25zdHJ1Y3RvcigpOiBDQ29uc3RydWN0b3JJbmZvO1xyXG4gICAgXHJcbiAgICAgICAgcHVibGljIEdldEZpZWxkT25lKCBuYW1lOiBzdHJpbmcgKTogQ0ZpZWxkSW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGluZm86IENGaWVsZEluZm8gPSB0aGlzLkdldE93bkZpZWxkT25lKCBuYW1lICk7XHJcbiAgICAgICAgICAgIGlmICggaW5mbyA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJhc2VUeXBlID0gdGhpcy5CYXNlVHlwZTtcclxuICAgICAgICAgICAgICAgIHdoaWxlICggYmFzZVR5cGUgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZm8gPSBiYXNlVHlwZS5HZXRPd25GaWVsZE9uZSggbmFtZSApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggaW5mbyAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZm87XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBiYXNlVHlwZSA9IGJhc2VUeXBlLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRPd25GaWVsZE9uZSggbmFtZTogc3RyaW5nICk6IENGaWVsZEluZm87XHJcbiAgICBcclxuICAgICAgICBwdWJsaWMgR2V0RmllbGRzKCk6IENGaWVsZEluZm9bXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5HZXRPd25GaWVsZHMoKTtcclxuICAgICAgICAgICAgbGV0IGJhc2VUeXBlID0gdGhpcy5CYXNlVHlwZTtcclxuICAgICAgICAgICAgd2hpbGUgKCBiYXNlVHlwZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KCBiYXNlVHlwZS5HZXRPd25GaWVsZHMoKSApO1xyXG4gICAgICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZS5CYXNlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldE93bkZpZWxkcygpOiBDRmllbGRJbmZvW11cclxuXHJcbiAgICAgICAgcHVibGljIEdldE1ldGhvZE9uZSgga2V5OiBzdHJpbmcgKTogQ01ldGhvZEluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpbmZvOiBDTWV0aG9kSW5mbyA9IHRoaXMuR2V0T3duTWV0aG9kT25lKCBrZXkgKTtcclxuICAgICAgICAgICAgaWYgKCBpbmZvICE9IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW5mbyA9IGJhc2VUeXBlLkdldE93bk1ldGhvZE9uZSgga2V5ICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGluZm8gIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZm87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBiYXNlVHlwZSA9IGJhc2VUeXBlLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldE93bk1ldGhvZE9uZSgga2V5OiBzdHJpbmcgKTogQ01ldGhvZEluZm87XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRNZXRob2RzKCk6IENNZXRob2RJbmZvW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuR2V0T3duTWV0aG9kcygpO1xyXG4gICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkgPSBhcnJheS5jb25jYXQoIGJhc2VUeXBlLkdldE93bk1ldGhvZHMoKSApO1xyXG4gICAgICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZS5CYXNlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0T3duTWV0aG9kcygpOiBDTWV0aG9kSW5mb1tdO1xyXG5cclxuICAgICAgICBwdWJsaWMgR2V0UHJvcGVydGllcygpOiBDUHJvcGVydHlJbmZvW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuR2V0T3duUHJvcGVydGllcygpO1xyXG4gICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkgPSBhcnJheS5jb25jYXQoIGJhc2VUeXBlLkdldE93blByb3BlcnRpZXMoKSApO1xyXG4gICAgICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZS5CYXNlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0UHJvcGVydHkoIGtleTogc3RyaW5nIHwgc3ltYm9sICk6IENQcm9wZXJ0eUluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eUluZm8gPSB0aGlzLkdldE93blByb3BlcnR5KCBrZXkgKTtcclxuICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eUluZm8gIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHlJbmZvO1xyXG4gICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlJbmZvID0gYmFzZVR5cGUuR2V0T3duUHJvcGVydHkoIGtleSApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eUluZm8gIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHlJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldE93blByb3BlcnRpZXMoKTogQ1Byb3BlcnR5SW5mb1tdO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0T3duUHJvcGVydHkoIGtleTogc3RyaW5nIHwgc3ltYm9sICk6IENQcm9wZXJ0eUluZm87XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICoqKOWPquivuykqKlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIOiOt+WPlueItuexu+exu+Wei1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgQmFzZVR5cGUoKTogQ1R5cGU7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWvueavlOW9k+WJjeexu+Wei+aYr+WQpuS4juWPguaVsHR5cGXnsbvlnovkuIDmoLdcclxuICAgICAgICAgKiBAcGFyYW0gdHlwZSDlr7nmr5Tlj4LnhafnsbvlnotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSXNFcXVpdmFsZW50VG8oIHR5cGU6IENUeXBlIHwgVHlwZUNvbnN0cnVjdG9yPG9iamVjdD4gKTogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Yik5pat5b2T5YmN57G75Z6L5piv5ZCm57un5om/5LqO5Y+C5pWwdHlwZeexu+Wei1xyXG4gICAgICAgICAqIEBwYXJhbSB0eXBlIOeItuexu+exu+Wei1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBJc0luaGVyaXRGcm9tKCB0eXBlOiBDVHlwZSApOiBib29sZWFuO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0Q3VzdG9tQXR0cmlidXRlT25lPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+LCBpbmhlcml0OiBib29sZWFuICk6IFRBdHRyaWJ1dGU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRDdXN0b21BdHRyaWJ1dGVzPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+LCBpbmhlcml0OiBib29sZWFuICk6IFRBdHRyaWJ1dGVbXTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldEN1c3RvbUF0dHJpYnV0ZXNBbGwoKTogQ0F0dHJpYnV0ZVtdO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSXNEZWZpbmVkPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+LCBpbmhlcml0OiBib29sZWFuICk6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIC8vcHVibGljIGFic3RyYWN0IENhc3QoIG86IGFueSApOiBUO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIENSdW50aW1lVHlwZTwgVCBleHRlbmRzIG9iamVjdCA9IG9iamVjdCA+IGV4dGVuZHMgQ1R5cGU8IFQgPlxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9wcm90bzogVHlwZVByb3RvdHlwZTwgVCA+ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX21ldGFkYXRhQ29sbGVjdGlvbjogTWV0YWRhdGEuSU1ldGFkYXRhQ29sbGVjdGlvblJlYWRvbmx5ID0gbnVsbDtcclxuICAgIFxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggcHJvdG86IFR5cGVQcm90b3R5cGU8IFQgPiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1fcHJvdG8gPSBwcm90bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBFcXVhbHMoIG90aGVyOiBDUnVudGltZVR5cGUgKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuSXNFcXVpdmFsZW50VG8oIGR5bmFtaWNfY2FzdCggb3RoZXIsIENSdW50aW1lVHlwZSApICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0SnNQcm90b3R5cGU8IFRFeHRyYSBleHRlbmRzIHt9ID0ge30gPigpOiBUeXBlUHJvdG90eXBlPCBUID4gJiBURXh0cmFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiA8IFR5cGVQcm90b3R5cGU8IFQgPiAmIFRFeHRyYSA+dGhpcy5tX3Byb3RvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEpzQ29uc3RydWN0b3IoKTogVHlwZUNvbnN0cnVjdG9yPCBUID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcHJvdG8uY29uc3RydWN0b3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0Q29uc3RydWN0b3IoKTogQ0NvbnN0cnVjdG9ySW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDUnVudGltZUNvbnN0cnVjdG9ySW5mbyggXCJjb25zdHJ1Y3RvclwiLCB0aGlzLm1fcHJvdG8gKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBwdWJsaWMgR2V0RmllbGRPbmUoIG5hbWU6IHN0cmluZyApOiBDRmllbGRJbmZvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaW5mbzogQ0ZpZWxkSW5mbyA9IHRoaXMuR2V0T3duRmllbGRPbmUoIG5hbWUgKTtcclxuICAgICAgICAgICAgaWYgKCBpbmZvID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKCBiYXNlVHlwZSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5mbyA9IGJhc2VUeXBlLkdldE93bkZpZWxkT25lKCBuYW1lICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpbmZvICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5mbztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VUeXBlID0gYmFzZVR5cGUuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGluZm87XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHVibGljIEdldE93bkZpZWxkT25lKCBuYW1lOiBzdHJpbmcgKTogQ0ZpZWxkSW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHByb3RvID0gdGhpcy5HZXRKc1Byb3RvdHlwZSgpO1xyXG4gICAgICAgICAgICBsZXQgaW5mbzogQ0ZpZWxkSW5mbyA9IG51bGw7XHJcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHByb3RvLCBSZWZsZWN0RmllbGRzS2V5ICk7XHJcbiAgICAgICAgICAgIGlmICggZGVzY3JpcHRvciA9PSBudWxsIHx8IGRlc2NyaXB0b3IudmFsdWUgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCAoIG5hbWUgaW4gZGVzY3JpcHRvci52YWx1ZSApID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBpbmZvID0gbmV3IENSdW50aW1lRmllbGRJbmZvKCBuYW1lLCBwcm90byApO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5mbztcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBwdWJsaWMgR2V0RmllbGRzKCk6IENGaWVsZEluZm9bXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5HZXRPd25GaWVsZHMoKTtcclxuICAgICAgICAgICAgbGV0IGJhc2VUeXBlID0gdGhpcy5CYXNlVHlwZTtcclxuICAgICAgICAgICAgd2hpbGUgKCBiYXNlVHlwZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KCBiYXNlVHlwZS5HZXRPd25GaWVsZHMoKSApO1xyXG4gICAgICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZS5CYXNlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHVibGljIEdldE93bkZpZWxkcygpOiBDRmllbGRJbmZvW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcm90byA9IHRoaXMuR2V0SnNQcm90b3R5cGUoKTtcclxuICAgICAgICAgICAgbGV0IGFycmF5OiBDRmllbGRJbmZvW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggcHJvdG8sIFJlZmxlY3RGaWVsZHNLZXkgKTtcclxuICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yID09IG51bGwgfHwgZGVzY3JpcHRvci52YWx1ZSA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheTtcclxuICAgICAgICAgICAgbGV0IGtleXMgPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG4gICAgICAgICAgICBmb3IgKCBjb25zdCBrIGluIGtleXMgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKCBuZXcgQ1J1bnRpbWVGaWVsZEluZm8oIGssIHByb3RvICkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0TWV0aG9kT25lKCBrZXk6IHN0cmluZyApOiBDTWV0aG9kSW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGluZm86IENNZXRob2RJbmZvID0gdGhpcy5HZXRPd25NZXRob2RPbmUoIGtleSApO1xyXG4gICAgICAgICAgICBpZiAoIGluZm8gIT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBiYXNlVHlwZSA9IHRoaXMuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgIHdoaWxlICggYmFzZVR5cGUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbmZvID0gYmFzZVR5cGUuR2V0T3duTWV0aG9kT25lKCBrZXkgKTtcclxuICAgICAgICAgICAgICAgIGlmICggaW5mbyAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5mbztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJhc2VUeXBlID0gYmFzZVR5cGUuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0T3duTWV0aG9kT25lKCBrZXk6IHN0cmluZyApOiBDTWV0aG9kSW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGluZm86IENNZXRob2RJbmZvID0gbnVsbDtcclxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpcy5tX3Byb3RvLCBrZXkgKTtcclxuICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGluZm8gPSBuZXcgQ1J1bnRpbWVNZXRob2RJbmZvKCBrZXksIHRoaXMubV9wcm90bywgZGVzY3JpcHRvci52YWx1ZSApO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRNZXRob2RzKCk6IENNZXRob2RJbmZvW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuR2V0T3duTWV0aG9kcygpO1xyXG4gICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkgPSBhcnJheS5jb25jYXQoIGJhc2VUeXBlLkdldE93bk1ldGhvZHMoKSApO1xyXG4gICAgICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZS5CYXNlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0T3duTWV0aG9kcygpOiBDTWV0aG9kSW5mb1tdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXk6IENNZXRob2RJbmZvW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IGtleXMgPSBSZWZsZWN0Lm93bktleXMoIHRoaXMubV9wcm90byApO1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGsgPSBrZXlzWyBpIF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIGsgPT0gXCJjb25zdHJ1Y3RvclwiIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRoaXMubV9wcm90bywgayApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yLnZhbHVlID09IG51bGwgfHwgdHlwZW9mKCBkZXNjcmlwdG9yLnZhbHVlICkgIT0gXCJmdW5jdGlvblwiIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goIG5ldyBDUnVudGltZU1ldGhvZEluZm8oIDxzdHJpbmc+aywgdGhpcy5tX3Byb3RvLCBkZXNjcmlwdG9yLnZhbHVlICkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0UHJvcGVydGllcygpOiBDUHJvcGVydHlJbmZvW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuR2V0T3duUHJvcGVydGllcygpO1xyXG4gICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkgPSBhcnJheS5jb25jYXQoIGJhc2VUeXBlLkdldE93blByb3BlcnRpZXMoKSApO1xyXG4gICAgICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZS5CYXNlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0UHJvcGVydHkoIGtleTogc3RyaW5nIHwgc3ltYm9sICk6IENQcm9wZXJ0eUluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eUluZm8gPSB0aGlzLkdldE93blByb3BlcnR5KCBrZXkgKTtcclxuICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eUluZm8gIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHlJbmZvO1xyXG4gICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlJbmZvID0gYmFzZVR5cGUuR2V0T3duUHJvcGVydHkoIGtleSApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eUluZm8gIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHlJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldE93blByb3BlcnRpZXMoKTogQ1Byb3BlcnR5SW5mb1tdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXk6IENQcm9wZXJ0eUluZm9bXSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQga2V5cyA9IFJlZmxlY3Qub3duS2V5cyggdGhpcy5tX3Byb3RvICk7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGsgPSBrZXlzWyBpIF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIGsgPT0gXCJjb25zdHJ1Y3RvclwiIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRoaXMubV9wcm90bywgayApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yLnNldCA9PSBudWxsICYmIGRlc2NyaXB0b3IuZ2V0ID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaCggbmV3IENSdW50aW1lUHJvcGVydHlJbmZvKCA8c3RyaW5nPmssIHRoaXMubV9wcm90byApICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldE93blByb3BlcnR5KCBrZXk6IHN0cmluZyB8IHN5bWJvbCApOiBDUHJvcGVydHlJbmZvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0aGlzLm1fcHJvdG8sIGtleSApO1xyXG4gICAgICAgICAgICBpZiAoIGRlc2NyaXB0b3IgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yLnNldCA9PSBudWxsICYmIGRlc2NyaXB0b3IuZ2V0ID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ1J1bnRpbWVQcm9wZXJ0eUluZm8oIDxzdHJpbmc+a2V5LCB0aGlzLm1fcHJvdG8gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICoqKOWPquivuykqKlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIOiOt+WPlueItuexu+exu+Wei1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXQgQmFzZVR5cGUoKTogQ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcm90b0Jhc2UgPSBSZWZsZWN0LmdldFByb3RvdHlwZU9mKCB0aGlzLm1fcHJvdG8gKTtcclxuICAgICAgICAgICAgaWYgKCBwcm90b0Jhc2UgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCBwcm90b0Jhc2UgPT0gT2JqZWN0LnByb3RvdHlwZSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDUnVudGltZVR5cGUoIDxUeXBlUHJvdG90eXBlPG9iamVjdD4+cHJvdG9CYXNlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlr7nmr5TlvZPliY3nsbvlnovmmK/lkKbkuI7lj4LmlbB0eXBl57G75Z6L5LiA5qC3XHJcbiAgICAgICAgICogQHBhcmFtIHR5cGUg5a+55q+U5Y+C54Wn57G75Z6LXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIElzRXF1aXZhbGVudFRvKCB0eXBlOiBDUnVudGltZVR5cGUgfCBUeXBlQ29uc3RydWN0b3I8b2JqZWN0PiApOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHR5cGUgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggdHlwZW9mKCB0eXBlICkgPT0gXCJmdW5jdGlvblwiIClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlLnByb3RvdHlwZSA9PSB0aGlzLm1fcHJvdG87XHJcbiAgICAgICAgICAgIGlmICggdHlwZS5tX3Byb3RvID09PSB0aGlzLm1fcHJvdG8gKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIpOaWreW9k+WJjeexu+Wei+aYr+WQpue7p+aJv+S6juWPguaVsHR5cGXnsbvlnotcclxuICAgICAgICAgKiBAcGFyYW0gdHlwZSDniLbnsbvnsbvlnotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgSXNJbmhlcml0RnJvbSggdHlwZTogQ1R5cGUgKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJhc2VUeXBlID0gdGhpcy5CYXNlVHlwZTtcclxuICAgICAgICAgICAgd2hpbGUgKCBiYXNlVHlwZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggYmFzZVR5cGUuSXNFcXVpdmFsZW50VG8oIHR5cGUgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICBiYXNlVHlwZSA9IGJhc2VUeXBlLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0IE1ldGFkYXRhQ29sbGVjdGlvbigpOiBNZXRhZGF0YS5JTWV0YWRhdGFDb2xsZWN0aW9uUmVhZG9ubHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX21ldGFkYXRhQ29sbGVjdGlvbiA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IG5ldyBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleUZvckNsYXNzKCB0aGlzLCBVQXR0cmlidXRlVGFyZ2V0LkNsYXNzICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fbWV0YWRhdGFDb2xsZWN0aW9uID0gTWV0YWRhdGEuQ29udGFpbmVyLkdldENvbGxlY3Rpb24oIGtleSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fbWV0YWRhdGFDb2xsZWN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEN1c3RvbUF0dHJpYnV0ZU9uZTwgVEF0dHJpYnV0ZSBleHRlbmRzIENBdHRyaWJ1dGUgPiggYXR0cmlidXRlVHlwZTogQ1R5cGU8IFRBdHRyaWJ1dGUgPiwgaW5oZXJpdDogYm9vbGVhbiApOiBUQXR0cmlidXRlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuSXNFcXVpdmFsZW50VG8oIENBdHRyaWJ1dGVVc2FnZUF0dHJpYnV0ZSApID09IHRydWUgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGluaGVyaXQgPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBhdHRyID0gdGhpcy5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIGF0dHJpYnV0ZVR5cGUsIGZhbHNlICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGF0dHIgIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dHI7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGF0dHJVc2FnZSA9IGF0dHJpYnV0ZVR5cGUuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBSZWZsZWN0aW9uLlR5cGVPZiggQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlICksIHRydWUgKTtcclxuICAgICAgICAgICAgICAgIGlmICggYXR0clVzYWdlID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJVc2FnZSA9IENBdHRyaWJ1dGVVc2FnZUF0dHJpYnV0ZS5EZWZhdWx0VXNhZ2U7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBhdHRyVXNhZ2UuSW5oZXJpdGVkID09IHRydWUgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXNlVHlwZSA9IHRoaXMuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCBiYXNlVHlwZSAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHIgPSBiYXNlVHlwZS5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIGF0dHJpYnV0ZVR5cGUsIGZhbHNlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggYXR0ciAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlVHlwZSA9IGJhc2VUeXBlLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLk1ldGFkYXRhQ29sbGVjdGlvbi5HZXRBdHRyaWJ1dGVPbmUoIGF0dHJpYnV0ZVR5cGUgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEN1c3RvbUF0dHJpYnV0ZXM8IFRBdHRyaWJ1dGUgZXh0ZW5kcyBDQXR0cmlidXRlID4oIGF0dHJpYnV0ZVR5cGU6IENUeXBlPCBUQXR0cmlidXRlID4sIGluaGVyaXQ6IGJvb2xlYW4gKTogVEF0dHJpYnV0ZVtdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIGluaGVyaXQgPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBhdHRycyA9IHRoaXMuR2V0Q3VzdG9tQXR0cmlidXRlcyggYXR0cmlidXRlVHlwZSwgZmFsc2UgKTtcclxuICAgICAgICAgICAgICAgIGxldCBhdHRyVXNhZ2UgPSBhdHRyaWJ1dGVUeXBlLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggUmVmbGVjdGlvbi5UeXBlT2YoIENBdHRyaWJ1dGVVc2FnZUF0dHJpYnV0ZSApLCB0cnVlICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGF0dHJVc2FnZSA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyVXNhZ2UgPSBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUuRGVmYXVsdFVzYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCBhdHRyVXNhZ2UuSW5oZXJpdGVkID09IHRydWUgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXNlVHlwZSA9IHRoaXMuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCBiYXNlVHlwZSAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzID0gYXR0cnMuY29uY2F0KCBiYXNlVHlwZS5HZXRDdXN0b21BdHRyaWJ1dGVzKCBhdHRyaWJ1dGVUeXBlLCBmYWxzZSApICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VUeXBlID0gYmFzZVR5cGUuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuTWV0YWRhdGFDb2xsZWN0aW9uLkdldEF0dHJpYnV0ZXMoIGF0dHJpYnV0ZVR5cGUgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEN1c3RvbUF0dHJpYnV0ZXNBbGwoKTogQ0F0dHJpYnV0ZVtdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5NZXRhZGF0YUNvbGxlY3Rpb24uR2V0QXR0cmlidXRlc0FsbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIElzRGVmaW5lZDwgVEF0dHJpYnV0ZSBleHRlbmRzIENBdHRyaWJ1dGUgPiggYXR0cmlidXRlVHlwZTogQ1R5cGU8IFRBdHRyaWJ1dGUgPiwgaW5oZXJpdDogYm9vbGVhbiApOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gVHlwZU9mPCBUIGV4dGVuZHMgb2JqZWN0ID4oIHR5cGU6IFR5cGVDb25zdHJ1Y3RvcjwgVCA+IHwgVHlwZUNvbnN0cnVjdG9yQWJzdHJhY3Q8IFQgPiApOiBDVHlwZTwgVCA+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDUnVudGltZVR5cGUoIHR5cGUucHJvdG90eXBlICk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFR5cGVPZl9fPCBUIGV4dGVuZHMgb2JqZWN0ID4oIHByb3RvdHlwZTogVHlwZVByb3RvdHlwZTwgVCA+ICk6IENUeXBlPCBUID5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IENSdW50aW1lVHlwZSggcHJvdG90eXBlICk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEdldE9iamVjdFR5cGUoIG86IGFueSApOiBDVHlwZVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBvLkdldFR5cGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeUqOS6juS6kuebuOexu+Wei+W8leeUqOeahOWcuuaZr1xyXG4gICAgICogQHBhcmFtIGRlbGF5IFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gVHlwZU9mRGVsYXk8IFQgZXh0ZW5kcyBvYmplY3QgPiggZGVsYXk6ICgpID0+IFR5cGVDb25zdHJ1Y3RvcjwgVCA+IHwgVHlwZUNvbnN0cnVjdG9yQWJzdHJhY3Q8IFQgPiApOiBJRGVsYXlUeXBlPCBUID5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gbmV3IENSdW50aW1lVHlwZSggZGVsYXkoKS5wcm90b3R5cGUgKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBDUnVudGltZUNvbnN0cnVjdG9ySW5mbyBleHRlbmRzIENDb25zdHJ1Y3RvckluZm9cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIG5hbWU6IHN0cmluZywgcHJvdG90eXBlOiBUeXBlUHJvdG90eXBlPCBvYmplY3QgPiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggbmFtZSwgcHJvdG90eXBlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IE1lbWJlclR5cGUoKTogVU1lbWJlclR5cGVzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gVU1lbWJlclR5cGVzLkNvbnN0cnVjdG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFBhcmFtZXRlcnMoKTogQ1BhcmFtZXRlckluZm9bXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNsYXNzVHlwZSA9IHRoaXMuRGVjbGFyaW5nVHlwZTtcclxuICAgICAgICAgICAgbGV0IHBhcmFtZXRlckNvdW50ID0gdGhpcy5Kc0NvbnN0cnVjdG9yLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IGluZm9zOiBBcnJheTwgQ1BhcmFtZXRlckluZm8gPiA9IEFycmF5KCBwYXJhbWV0ZXJDb3VudCApO1xyXG4gICAgICAgICAgICBpZiAoIHBhcmFtZXRlckNvdW50ID4gMCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHBhcmFtZXRlckNvdW50OyBpICsrIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQga2V5ID0gbmV3IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5Rm9yUGFyYW1ldGVyKCBjbGFzc1R5cGUsIFVBdHRyaWJ1dGVUYXJnZXQuUGFyYW1ldGVyLCB0aGlzLk5hbWUsIGkgKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZUF0dHJpYnV0ZSA9IE1ldGFkYXRhLkNvbnRhaW5lci5HZXRDb2xsZWN0aW9uKCBrZXkgKS5HZXRBdHRyaWJ1dGVPbmUoIFR5cGVPZiggQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUgKSApO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZm9zWyBpIF0gPSBuZXcgQ1J1bnRpbWVQYXJhbWV0ZXJJbmZvKCB0aGlzLm1fcHJvdG90eXBlLCB0aGlzLCBpLCAoIHR5cGVBdHRyaWJ1dGUgPT0gbnVsbCApID8gbnVsbCA6IHR5cGVBdHRyaWJ1dGUuRGVjbGFyaW5nVHlwZSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpbmZvcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgRGVzY3JpcHRvcigpOiBQcm9wZXJ0eURlc2NyaXB0b3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xhc3MgQ1J1bnRpbWVNZXRob2RJbmZvIGV4dGVuZHMgQ01ldGhvZEluZm9cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fbWV0aG9kOiBGdW5jdGlvbiA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2Zyb21Qcm9wZXJ0eTogQ1Byb3BlcnR5SW5mbyA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nLCBwcm90b3R5cGU6IFR5cGVQcm90b3R5cGU8IGFueSA+LCBtZXRob2Q6IEZ1bmN0aW9uLCBmcm9tUHJvcGVydHk/OiBDUHJvcGVydHlJbmZvIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCBuYW1lLCBwcm90b3R5cGUgKTtcclxuICAgICAgICAgICAgdGhpcy5tX21ldGhvZCA9IG1ldGhvZDtcclxuICAgICAgICAgICAgdGhpcy5tX2Zyb21Qcm9wZXJ0eSA9IGZyb21Qcm9wZXJ0eTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgTWVtYmVyVHlwZSgpOiBVTWVtYmVyVHlwZXNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBVTWVtYmVyVHlwZXMuTWV0aG9kO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldCBNZXRob2QoKTogRnVuY3Rpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fbWV0aG9kO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFBhcmFtZXRlcnMoKTogQ1BhcmFtZXRlckluZm9bXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNsYXNzVHlwZSA9IHRoaXMuRGVjbGFyaW5nVHlwZTtcclxuICAgICAgICAgICAgbGV0IHBhcmFtZXRlckNvdW50ID0gdGhpcy5NZXRob2QubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgaW5mb3M6IEFycmF5PCBDUGFyYW1ldGVySW5mbyA+ID0gQXJyYXkoIHBhcmFtZXRlckNvdW50ICk7XHJcbiAgICAgICAgICAgIGlmICggcGFyYW1ldGVyQ291bnQgPiAwIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVyQ291bnQ7IGkgKysgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlQXR0cmlidXRlOiBDRGVjbGFyaW5nVHlwZUF0dHJpYnV0ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtZXRlck5hbWU6IHN0cmluZyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLm1fZnJvbVByb3BlcnR5ID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IG5ldyBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleUZvclBhcmFtZXRlciggY2xhc3NUeXBlLCBVQXR0cmlidXRlVGFyZ2V0LlBhcmFtZXRlciwgdGhpcy5OYW1lLCBpICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdHRyc0NvbGxlY3Rpb24gPSBNZXRhZGF0YS5Db250YWluZXIuR2V0Q29sbGVjdGlvbigga2V5ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVBdHRyaWJ1dGUgPSBhdHRyc0NvbGxlY3Rpb24uR2V0QXR0cmlidXRlT25lKCBUeXBlT2YoIENEZWNsYXJpbmdUeXBlQXR0cmlidXRlICkgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWVBdHRyaWJ1dGUgPSBhdHRyc0NvbGxlY3Rpb24uR2V0QXR0cmlidXRlT25lKCBUeXBlT2YoIENOYW1lZEF0dHJpYnV0ZSApICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbmFtZUF0dHJpYnV0ZSAhID0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJOYW1lID0gbmFtZUF0dHJpYnV0ZS5UZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlQXR0cmlidXRlID0gdGhpcy5tX2Zyb21Qcm9wZXJ0eS5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIFR5cGVPZiggQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUgKSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJOYW1lID0gdGhpcy5tX2Zyb21Qcm9wZXJ0eS5OYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5mb3NbIGkgXSA9IG5ldyBDUnVudGltZVBhcmFtZXRlckluZm8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubV9wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICggdHlwZUF0dHJpYnV0ZSA9PSBudWxsICkgPyBudWxsIDogdHlwZUF0dHJpYnV0ZS5EZWNsYXJpbmdUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJOYW1lICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGluZm9zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBEZXNjcmlwdG9yKCk6IFByb3BlcnR5RGVzY3JpcHRvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fZnJvbVByb3BlcnR5ID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0aGlzLm1fcHJvdG90eXBlLCB0aGlzLk5hbWUgKTtcclxuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0aGlzLm1fcHJvdG90eXBlLCB0aGlzLm1fZnJvbVByb3BlcnR5Lk5hbWUgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNsYXNzIENSdW50aW1lUHJvcGVydHlJbmZvIGV4dGVuZHMgQ1Byb3BlcnR5SW5mb1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nLCBwcm90b3R5cGU6IFR5cGVQcm90b3R5cGU8IG9iamVjdCA+IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCBuYW1lLCBwcm90b3R5cGUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgTWVtYmVyVHlwZSgpOiBVTWVtYmVyVHlwZXNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBVTWVtYmVyVHlwZXMuUHJvcGVydHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBnZXQgUHJvcGVydHlUeXBlKCk6IENUeXBlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYXR0ciA9IHRoaXMuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBUeXBlT2YoIENEZWNsYXJpbmdUeXBlQXR0cmlidXRlICkgKTtcclxuICAgICAgICAgICAgaWYgKCBhdHRyID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyLkRlY2xhcmluZ1R5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2V0VmFsdWUoIG9iajogYW55LCB2YWx1ZTogYW55ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9ialsgdGhpcy5tX25hbWUgXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFZhbHVlKCBvYmo6IGFueSApOiBhbnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmpbIHRoaXMubV9uYW1lIF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0TWV0YWRhdGFLZXkoKTogTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JOYW1lZCggdGhpcy5EZWNsYXJpbmdUeXBlLCBVQXR0cmlidXRlVGFyZ2V0LlByb3BlcnR5LCB0aGlzLk5hbWUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQ2FuV3JpdGUoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpcy5tX3Byb3RvdHlwZSwgdGhpcy5tX25hbWUgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3Iuc2V0ICE9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQ2FuUmVhZCgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0aGlzLm1fcHJvdG90eXBlLCB0aGlzLm1fbmFtZSApO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQgIT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFNldE1ldGhvZCgpOiBDTWV0aG9kSW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpcy5tX3Byb3RvdHlwZSwgdGhpcy5tX25hbWUgKTtcclxuICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yLnNldCA9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDUnVudGltZU1ldGhvZEluZm8oIFwiZ2V0X1wiICsgdGhpcy5OYW1lLCB0aGlzLm1fcHJvdG90eXBlLCBkZXNjcmlwdG9yLnNldCwgdGhpcyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEdldE1ldGhvZCgpOiBDTWV0aG9kSW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpcy5tX3Byb3RvdHlwZSwgdGhpcy5tX25hbWUgKTtcclxuICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yLmdldCA9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDUnVudGltZU1ldGhvZEluZm8oIFwiZ2V0X1wiICsgdGhpcy5OYW1lLCB0aGlzLm1fcHJvdG90eXBlLCBkZXNjcmlwdG9yLmdldCwgdGhpcyApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xhc3MgQ1J1bnRpbWVGaWVsZEluZm8gZXh0ZW5kcyBDRmllbGRJbmZvXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBuYW1lOiBzdHJpbmcsIHByb3RvdHlwZTogVHlwZVByb3RvdHlwZTwgb2JqZWN0ID4gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoIG5hbWUsIHByb3RvdHlwZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBGaWVsZFR5cGUoKTogQ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyID0gdGhpcy5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIFR5cGVPZiggQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUgKSApO1xyXG4gICAgICAgICAgICBpZiAoIGF0dHIgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHIuRGVjbGFyaW5nVHlwZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNsYXNzIENSdW50aW1lUGFyYW1ldGVySW5mbyBleHRlbmRzIENQYXJhbWV0ZXJJbmZvXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fcHJvdG90eXBlOiBUeXBlUHJvdG90eXBlPCBvYmplY3QgPiA9IG51bGw7XHJcbiAgICAgICAgLy8gcHJvdGVjdGVkIG1fbWV0aG9kTmFtZTogc3RyaW5nID0gbnVsbDtcclxuICAgICAgICAvLyBwcm90ZWN0ZWQgbV9kZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9tZW1iZXI6IENNZW1iZXJJbmZvID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9wYXJhbWV0ZXJJbmRleDogbnVtYmVyID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIG1fcGFyYW1ldGVyTmFtZTogc3RyaW5nID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fcGFyYW1ldGVyVHlwZTogQ1R5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICBwcml2YXRlIG1fbWV0YWRhdGFDb2xsZWN0aW9uOiBNZXRhZGF0YS5JTWV0YWRhdGFDb2xsZWN0aW9uUmVhZG9ubHkgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHByb3RvdHlwZTogVHlwZVByb3RvdHlwZTwgb2JqZWN0ID4sIG1lbWJlcjogQ01lbWJlckluZm8sIHBhcmFtZXRlckluZGV4OiBudW1iZXIsIHBhcmFtZXRlclR5cGU6IENUeXBlLCBwYXJhbWV0ZXJOYW1lPzogc3RyaW5nIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9wcm90b3R5cGUgPSBwcm90b3R5cGU7XHJcbiAgICAgICAgICAgIHRoaXMubV9tZW1iZXIgPSBtZW1iZXI7XHJcbiAgICAgICAgICAgIHRoaXMubV9wYXJhbWV0ZXJJbmRleCA9IHBhcmFtZXRlckluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLm1fcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlck5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9wYXJhbWV0ZXJUeXBlID0gcGFyYW1ldGVyVHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgRGVjbGFyaW5nVHlwZSgpOiBDVHlwZTwgb2JqZWN0ID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ1J1bnRpbWVUeXBlKCB0aGlzLm1fcHJvdG90eXBlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFBhcmFtZXRlckluZGV4KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcGFyYW1ldGVySW5kZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IE5hbWUoKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3BhcmFtZXRlck5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFBhcmFtZXRlclR5cGUoKTogQ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcGFyYW1ldGVyVHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRNZXRhZGF0YUtleSgpOiBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleUZvclBhcmFtZXRlciggdGhpcy5EZWNsYXJpbmdUeXBlLCBVQXR0cmlidXRlVGFyZ2V0LlBhcmFtZXRlciwgdGhpcy5tX21lbWJlci5OYW1lLCB0aGlzLlBhcmFtZXRlckluZGV4ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldCBNZXRhZGF0YUNvbGxlY3Rpb24oKTogTWV0YWRhdGEuSU1ldGFkYXRhQ29sbGVjdGlvblJlYWRvbmx5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV9tZXRhZGF0YUNvbGxlY3Rpb24gPT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSB0aGlzLkdldE1ldGFkYXRhS2V5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fbWV0YWRhdGFDb2xsZWN0aW9uID0gTWV0YWRhdGEuQ29udGFpbmVyLkdldENvbGxlY3Rpb24oIGtleSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fbWV0YWRhdGFDb2xsZWN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEN1c3RvbUF0dHJpYnV0ZU9uZTwgVEF0dHJpYnV0ZSBleHRlbmRzIENBdHRyaWJ1dGUgPiggYXR0cmlidXRlVHlwZTogQ1R5cGU8IFRBdHRyaWJ1dGUgPiApOiBUQXR0cmlidXRlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5NZXRhZGF0YUNvbGxlY3Rpb24uR2V0QXR0cmlidXRlT25lKCBhdHRyaWJ1dGVUeXBlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0Q3VzdG9tQXR0cmlidXRlczwgVEF0dHJpYnV0ZSBleHRlbmRzIENBdHRyaWJ1dGUgPiggYXR0cmlidXRlVHlwZTogQ1R5cGU8IFRBdHRyaWJ1dGUgPiApOiBUQXR0cmlidXRlW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLk1ldGFkYXRhQ29sbGVjdGlvbi5HZXRBdHRyaWJ1dGVzKCBhdHRyaWJ1dGVUeXBlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0Q3VzdG9tQXR0cmlidXRlc0FsbCgpOiBDQXR0cmlidXRlW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLk1ldGFkYXRhQ29sbGVjdGlvbi5HZXRBdHRyaWJ1dGVzQWxsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSXNEZWZpbmVkPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+ICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoIHRoaXMuTWV0YWRhdGFDb2xsZWN0aW9uLkdldEF0dHJpYnV0ZU9uZSggYXR0cmlidXRlVHlwZSApID09IG51bGwgKSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1JlZmxlY3Rpb24vVHlwZS50c1wiIC8+XHJcblxyXG5cclxuaW50ZXJmYWNlIE9iamVjdFxyXG57XHJcbiAgICBHZXRUeXBlKCk6IGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IE9iamVjdCA+O1xyXG59XHJcblxyXG5PYmplY3QucHJvdG90eXBlLkdldFR5cGUgPSBmdW5jdGlvbigpOiBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBPYmplY3QgPlxyXG57XHJcbiAgICByZXR1cm4gaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2ZfXyggPGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb24uVHlwZVByb3RvdHlwZTxvYmplY3Q+PlJlZmxlY3QuZ2V0UHJvdG90eXBlT2YoIHRoaXMgKSApO1xyXG59XHJcblxyXG4vKipcclxuICog5LiN5Y+v5p6a5Li+XHJcbiAqL1xyXG5SZWZsZWN0LmRlZmluZVByb3BlcnR5KCBPYmplY3QucHJvdG90eXBlLCBcIkdldFR5cGVcIiwgeyBlbnVtZXJhYmxlOiBmYWxzZSB9ICk7XHJcblxyXG5cclxuIiwiXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9DQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9PYmplY3RfR2V0VHlwZS50c1wiIC8+XHJcblxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbVxyXG57XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQXR0cmlidXRlRGVjb3JhdGUoIGF0dHJpYnV0ZTogQ0F0dHJpYnV0ZSApOiBVRGVjb3JhdG9yRnVuY3Rpb25UeXBlXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICggdGFyZ2V0OiBhbnksIHByb3BlcnR5TmFtZT86IHN0cmluZyB8IHN5bWJvbCwgZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXg/OiBQcm9wZXJ0eURlc2NyaXB0b3IgfCBudW1iZXIgKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZVVzYWdlID0gYXR0cmlidXRlLkdldFR5cGUoKS5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIFJlZmxlY3Rpb24uVHlwZU9mKCBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUgKSwgdHJ1ZSApO1xyXG4gICAgICAgICAgICBpZiAoIGF0dHJpYnV0ZVVzYWdlID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVVc2FnZSA9IENBdHRyaWJ1dGVVc2FnZUF0dHJpYnV0ZS5EZWZhdWx0VXNhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eU5hbWUgPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gXCJjb25zdHJ1Y3RvclwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDQXR0cmlidXRlRGVjb3JhdGVIZWxwZXIuRGVjb3JhdGVDbGFzcyggYXR0cmlidXRlLCBhdHRyaWJ1dGVVc2FnZSwgdGFyZ2V0ICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICggdHlwZW9mKCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCApID09IFwib2JqZWN0XCIgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlci5EZWNvcmF0ZU1ldGhvZCggYXR0cmlidXRlLCBhdHRyaWJ1dGVVc2FnZSwgdGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4LnZhbHVlICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICggdHlwZW9mKCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCApID09IFwibnVtYmVyXCIgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlci5EZWNvcmF0ZVBhcmFtZXRlciggYXR0cmlidXRlLCBhdHRyaWJ1dGVVc2FnZSwgdGFyZ2V0LnByb3RvdHlwZSwgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDQXR0cmlidXRlRGVjb3JhdGVIZWxwZXIuRGVjb3JhdGVGaWVsZCggYXR0cmlidXRlLCBhdHRyaWJ1dGVVc2FnZSwgdGFyZ2V0LCBwcm9wZXJ0eU5hbWUgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCB0eXBlb2YoIGRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4ICkgPT0gXCJvYmplY3RcIiApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleC5zZXQgPT0gdW5kZWZpbmVkICYmIGRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4LmdldCA9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ0F0dHJpYnV0ZURlY29yYXRlSGVscGVyLkRlY29yYXRlTWV0aG9kKCBhdHRyaWJ1dGUsIGF0dHJpYnV0ZVVzYWdlLCB0YXJnZXQsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXgudmFsdWUgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ0F0dHJpYnV0ZURlY29yYXRlSGVscGVyLkRlY29yYXRlUHJvcGVydHkoIGF0dHJpYnV0ZSwgYXR0cmlidXRlVXNhZ2UsIHRhcmdldCwgcHJvcGVydHlOYW1lICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlci5EZWNvcmF0ZVBhcmFtZXRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVVc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4ICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBleHBvcnQgdmFyIEF0dHJpYnV0ZSA9IEF0dHJpYnV0ZURlY29yYXRlO1xyXG5cclxuICAgIGNsYXNzIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdVN5bWJvbEZvckNvbnN0cnVjOiBVU3ltYm9sID0gXCJKYXNtaW5lOjpTeXN0ZW06QXR0cmlidXRlXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRGVjb3JhdGVDbGFzcyhcclxuICAgICAgICAgICAgYXR0cmlidXRlOiBDQXR0cmlidXRlLFxyXG4gICAgICAgICAgICB1c2FnZTogQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlLFxyXG4gICAgICAgICAgICB0YXJnZXRDb25zdHJ1Y3RvcjogUmVmbGVjdGlvbi5UeXBlQ29uc3RydWN0b3I8IG9iamVjdCA+ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlci5DaGVja1RhcmdldFZhbGlkT24oIGF0dHJpYnV0ZSwgdXNhZ2UsIFVBdHRyaWJ1dGVUYXJnZXQuQ2xhc3MgKTtcclxuICAgICAgICAgICAgbGV0IGtleSA9IG5ldyBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleUZvckNsYXNzKCBSZWZsZWN0aW9uLlR5cGVPZl9fKCB0YXJnZXRDb25zdHJ1Y3Rvci5wcm90b3R5cGUgKSwgVUF0dHJpYnV0ZVRhcmdldC5DbGFzcyApO1xyXG4gICAgICAgICAgICBNZXRhZGF0YS5Db250YWluZXIuR2V0T3JBZGRDb2xsZWN0aW9uKCBrZXkgKS5BZGRBdHRyaWJ1dGUoIGF0dHJpYnV0ZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBEZWNvcmF0ZUZpZWxkKFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6IENBdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHVzYWdlOiBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHRhcmdldFByb3RvdHlwZTogUmVmbGVjdGlvbi5UeXBlUHJvdG90eXBlPCBvYmplY3QgPixcclxuICAgICAgICAgICAgZmllbGROYW1lOiBzdHJpbmcgfCBzeW1ib2wgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ0F0dHJpYnV0ZURlY29yYXRlSGVscGVyLkNoZWNrVGFyZ2V0VmFsaWRPbiggYXR0cmlidXRlLCB1c2FnZSwgVUF0dHJpYnV0ZVRhcmdldC5GaWVsZCApO1xyXG4gICAgICAgICAgICBsZXQga2V5ID0gbmV3IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5Rm9yTmFtZWQoIFJlZmxlY3Rpb24uVHlwZU9mX18oIHRhcmdldFByb3RvdHlwZSApLCBVQXR0cmlidXRlVGFyZ2V0LkZpZWxkLCBmaWVsZE5hbWUgKTtcclxuICAgICAgICAgICAgTWV0YWRhdGEuQ29udGFpbmVyLkdldE9yQWRkQ29sbGVjdGlvbigga2V5ICkuQWRkQXR0cmlidXRlKCBhdHRyaWJ1dGUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRGVjb3JhdGVQcm9wZXJ0eShcclxuICAgICAgICAgICAgYXR0cmlidXRlOiBDQXR0cmlidXRlLFxyXG4gICAgICAgICAgICB1c2FnZTogQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlLFxyXG4gICAgICAgICAgICB0YXJnZXRQcm90b3R5cGU6IFJlZmxlY3Rpb24uVHlwZVByb3RvdHlwZTwgb2JqZWN0ID4sXHJcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogc3RyaW5nIHwgc3ltYm9sICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlci5DaGVja1RhcmdldFZhbGlkT24oIGF0dHJpYnV0ZSwgdXNhZ2UsIFVBdHRyaWJ1dGVUYXJnZXQuUHJvcGVydHkgKTtcclxuICAgICAgICAgICAgbGV0IGtleSA9IG5ldyBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleUZvck5hbWVkKCBSZWZsZWN0aW9uLlR5cGVPZl9fKCB0YXJnZXRQcm90b3R5cGUgKSwgVUF0dHJpYnV0ZVRhcmdldC5Qcm9wZXJ0eSwgcHJvcGVydHlOYW1lICk7XHJcbiAgICAgICAgICAgIE1ldGFkYXRhLkNvbnRhaW5lci5HZXRPckFkZENvbGxlY3Rpb24oIGtleSApLkFkZEF0dHJpYnV0ZSggYXR0cmlidXRlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIERlY29yYXRlTWV0aG9kKFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6IENBdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHVzYWdlOiBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHRhcmdldFByb3RvdHlwZTogUmVmbGVjdGlvbi5UeXBlUHJvdG90eXBlPCBvYmplY3QgPixcclxuICAgICAgICAgICAgbWV0aG9kTmFtZTogc3RyaW5nIHwgc3ltYm9sLFxyXG4gICAgICAgICAgICBtZXRob2Q6IEZ1bmN0aW9uICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlci5DaGVja1RhcmdldFZhbGlkT24oIGF0dHJpYnV0ZSwgdXNhZ2UsIFVBdHRyaWJ1dGVUYXJnZXQuTWV0aG9kICk7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JOYW1lZCggUmVmbGVjdGlvbi5UeXBlT2ZfXyggdGFyZ2V0UHJvdG90eXBlICksIFVBdHRyaWJ1dGVUYXJnZXQuTWV0aG9kLCBtZXRob2ROYW1lICk7XHJcbiAgICAgICAgICAgIE1ldGFkYXRhLkNvbnRhaW5lci5HZXRPckFkZENvbGxlY3Rpb24oIGtleSApLkFkZEF0dHJpYnV0ZSggYXR0cmlidXRlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIERlY29yYXRlUGFyYW1ldGVyKFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6IENBdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHVzYWdlOiBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHRhcmdldFByb3RvdHlwZTogUmVmbGVjdGlvbi5UeXBlUHJvdG90eXBlPCBvYmplY3QgPixcclxuICAgICAgICAgICAgbWV0aG9kTmFtZTogc3RyaW5nIHwgc3ltYm9sLFxyXG4gICAgICAgICAgICBwYXJhbWV0ZXJJbmRleDogbnVtYmVyLFxyXG4gICAgICAgICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlci5DaGVja1RhcmdldFZhbGlkT24oIGF0dHJpYnV0ZSwgdXNhZ2UsIFVBdHRyaWJ1dGVUYXJnZXQuUGFyYW1ldGVyICk7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JQYXJhbWV0ZXIoIFJlZmxlY3Rpb24uVHlwZU9mX18oIHRhcmdldFByb3RvdHlwZSApLCBVQXR0cmlidXRlVGFyZ2V0LlBhcmFtZXRlciwgbWV0aG9kTmFtZSwgcGFyYW1ldGVySW5kZXggKTtcclxuICAgICAgICAgICAgTWV0YWRhdGEuQ29udGFpbmVyLkdldE9yQWRkQ29sbGVjdGlvbigga2V5ICkuQWRkQXR0cmlidXRlKCBhdHRyaWJ1dGUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ2hlY2tUYXJnZXRWYWxpZE9uKCBhdHRyaWJ1dGU6IENBdHRyaWJ1dGUsIHVzYWdlOiBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUsIHRhcmdldDogVUF0dHJpYnV0ZVRhcmdldCApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHVzYWdlICE9IG51bGwgJiYgKHVzYWdlLlZhbGlkT24gJiB0YXJnZXQpICE9IHRhcmdldCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggYENhbid0IHVzZSAke2F0dHJpYnV0ZS5jb25zdHJ1Y3Rvci5uYW1lfSB0byBkZWNvcmF0ZSAke1VBdHRyaWJ1dGVUYXJnZXRbdGFyZ2V0XX1gICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9DQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9BdHRyaWJ1dGVEZWNvcmF0ZS50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gdmFsaWRPbiBcclxuICAgICAqIEBwYXJhbSBhbGxvd011bHRpcGxlIFxyXG4gICAgICogQHBhcmFtIGluaGVyaXQgXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBBdHRyaWJ1dGVVc2FnZSggdmFsaWRPbjogbnVtYmVyLCBhbGxvd011bHRpcGxlPzogYm9vbGVhbiwgaW5oZXJpdD86IGJvb2xlYW4gKTogVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JDbGFzc1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBBdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IENBdHRyaWJ1dGVVc2FnZUF0dHJpYnV0ZSggdmFsaWRPbiwgYWxsb3dNdWx0aXBsZSwgaW5oZXJpdCApICk7XHJcbiAgICB9XHJcbn0iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1VBdHRyaWJ1dGVUYXJnZXQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ0F0dHJpYnV0ZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BdHRyaWJ1dGVVc2FnZS50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb25cclxue1xyXG4gICAgQEF0dHJpYnV0ZVVzYWdlKCBVQXR0cmlidXRlVGFyZ2V0Lk1ldGhvZCB8IFVBdHRyaWJ1dGVUYXJnZXQuRmllbGQgfCBVQXR0cmlidXRlVGFyZ2V0LlByb3BlcnR5IHwgVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIGZhbHNlLCBmYWxzZSApXHJcbiAgICBleHBvcnQgY2xhc3MgQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUgZXh0ZW5kcyBDQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fdHlwZTogSURlbGF5VHlwZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBtX3R5cGVzR2VuZXJpYzogQXJyYXk8IElEZWxheVR5cGUgPiA9IG51bGw7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBtX2lzR2VuZXJpYzogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG1fdHlwZXNHZW5lcmljUmVhbDogQXJyYXk8IENUeXBlID4gPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHR5cGU6IElEZWxheVR5cGUsIGdlbmVyaWNUeXBlczogQXJyYXk8IElEZWxheVR5cGUgPiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1fdHlwZSA9IHR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMubV90eXBlc0dlbmVyaWMgPSBnZW5lcmljVHlwZXM7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX3R5cGVzR2VuZXJpYyA9PSBudWxsIHx8IHRoaXMubV90eXBlc0dlbmVyaWMubGVuZ3RoID09IDAgKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2lzR2VuZXJpYyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1faXNHZW5lcmljID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgRGVjbGFyaW5nVHlwZSgpOiBDVHlwZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV90eXBlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IEdlbmVyaWNUeXBlcygpOiBBcnJheTwgQ1R5cGUgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1faXNHZW5lcmljID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV90eXBlc0dlbmVyaWNSZWFsID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLm1fdHlwZXNHZW5lcmljLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGd0ID0gdGhpcy5tX3R5cGVzR2VuZXJpY1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV90eXBlc0dlbmVyaWNSZWFsLnB1c2goIGd0KCkgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3R5cGVzR2VuZXJpY1JlYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IElzR2VuZXJpY1R5cGUoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICggdGhpcy5tX3R5cGVzR2VuZXJpYyA9PSB1bmRlZmluZWQgfHwgdGhpcy5tX3R5cGVzR2VuZXJpYy5sZW5ndGggPT0gMCApID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWjsOaYjuijhemlsOWZqFxyXG4gICAgICogXHJcbiAgICAgKiArIOijhemlsCBGaWVsZCDlrZfmrrXvvJrkv67ppbDlrZfmrrXnsbvlnotcclxuICAgICAqICsg6KOF6aWwIFByb3BlcnR5IOWxnuaAp++8muS/rumlsOWxnuaAp+eahOexu+Wei1xyXG4gICAgICogKyDoo4XppbAgTWV0aG9kIOaWueazle+8muS/rumlsOaWueazleeahOi/lOWbnuWAvOexu+Wei1xyXG4gICAgICogKyDoo4XppbAgUGFyYW1ldGVyIOWPguaVsO+8muS/rumlsOaWueazleeahOWPguaVsOexu+Wei1xyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIERlY2xhcmluZ1R5cGUoIHR5cGU6IENUeXBlLCBnZW5lcmljVHlwZXM/OiBDVHlwZVtdICk6IFVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yRmllbGQgJiBVRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvclByb3BlcnR5ICYgVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JNZXRob2QgJiBVRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvclBhcmFtZXRlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiggdGFyZ2V0OiBhbnksIG1lbWJlck5hbWU6IHN0cmluZywgZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXg/OiBQcm9wZXJ0eURlc2NyaXB0b3IgfCBudW1iZXIgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0eXBlb2YoIGRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4ICkgPT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2YoIGRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4ICkgPT0gXCJvYmplY3RcIiApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEVudW1lcmFibGUoIHRhcmdldCwgbWVtYmVyTmFtZSwgZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXggKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdGVtcDogQXJyYXk8IElEZWxheVR5cGUgPiA9IEFycmF5KCk7XHJcbiAgICAgICAgICAgIGlmICggZ2VuZXJpY1R5cGVzICE9IG51bGwgJiYgZ2VuZXJpY1R5cGVzLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBnZW5lcmljVHlwZXMubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3QgPSBnZW5lcmljVHlwZXNbIGkgXTtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wLnB1c2goICgpID0+IGd0ICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQXR0cmlidXRlRGVjb3JhdGUoIG5ldyBDRGVjbGFyaW5nVHlwZUF0dHJpYnV0ZSggKCkgPT4gdHlwZSwgdGVtcCApICkoIHRhcmdldCwgbWVtYmVyTmFtZSwgPGFueT5kZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWjsOaYjuijhemlsOWZqC3lu7blkI5cclxuICAgICAqIFxyXG4gICAgICogKyDoo4XppbAgRmllbGQg5a2X5q6177ya5L+u6aWw5a2X5q6157G75Z6LXHJcbiAgICAgKiArIOijhemlsCBQcm9wZXJ0eSDlsZ7mgKfvvJrkv67ppbDlsZ7mgKfnmoTnsbvlnotcclxuICAgICAqICsg6KOF6aWwIE1ldGhvZCDmlrnms5XvvJrkv67ppbDmlrnms5XnmoTov5Tlm57lgLznsbvlnotcclxuICAgICAqICsg6KOF6aWwIFBhcmFtZXRlciDlj4LmlbDvvJrkv67ppbDmlrnms5XnmoTlj4LmlbDnsbvlnotcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHR5cGUgXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBEZWNsYXJpbmdUeXBlRGVsYXkoIHR5cGU6IElEZWxheVR5cGUsIGdlbmVyaWNUeXBlcz86IElEZWxheVR5cGVbXSApOiBVRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvckZpZWxkICYgVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JQcm9wZXJ0eSAmIFVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yTWV0aG9kICYgVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oIHRhcmdldDogYW55LCBtZW1iZXJOYW1lOiBzdHJpbmcsIGRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4PzogUHJvcGVydHlEZXNjcmlwdG9yIHwgbnVtYmVyIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdHlwZW9mKCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCApID09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mKCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCApID09IFwib2JqZWN0XCIgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBFbnVtZXJhYmxlKCB0YXJnZXQsIG1lbWJlck5hbWUsIGRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQXR0cmlidXRlRGVjb3JhdGUoIG5ldyBDRGVjbGFyaW5nVHlwZUF0dHJpYnV0ZSggdHlwZSwgZ2VuZXJpY1R5cGVzICkgKSggdGFyZ2V0LCBtZW1iZXJOYW1lLCA8YW55PmRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvblxyXG57XHJcbiAgICBleHBvcnQgY29uc3QgUmVmbGVjdEZpZWxkc0tleSA9IFwiSmFzbWluZTo6U3lzdGVtOjpSZWZsZWN0OjpGaWVsZHNcIjtcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gRW51bWVyYWJsZSggdGFyZ2V0OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nLCBkZXNjcmlwdG9yPzogUHJvcGVydHlEZXNjcmlwdG9yICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIGRlc2NyaXB0b3IgPT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZmllbGRzRGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yID0gbnVsbDtcclxuICAgICAgICAgICAgLy8g5qOA5p+l5piv5ZCm5a2Y5Zyo55u45ZCM5ZCN56ew55qEZmllbGTlrZfmrrVcclxuICAgICAgICAgICAgLy8gbGV0IHByb3RvQmFzZSA9IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YoIHRhcmdldCApO1xyXG4gICAgICAgICAgICAvLyB3aGlsZSAoIHByb3RvQmFzZSApXHJcbiAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgLy8gICAgIGlmICggcHJvdG9CYXNlID09IG51bGwgKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKCBwcm90b0Jhc2UgPT0gT2JqZWN0LnByb3RvdHlwZSApXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgZmllbGRzRGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCBwcm90b0Jhc2UsIFJlZmxlY3RGaWVsZHNLZXkgKTtcclxuICAgICAgICAgICAgLy8gICAgIGlmICggZmllbGRzRGVzY3JpcHRvciAhPSBudWxsICYmIGZpZWxkc0Rlc2NyaXB0b3IudmFsdWUgIT0gbnVsbCAmJiAoIHByb3BlcnR5TmFtZSBpbiBmaWVsZHNEZXNjcmlwdG9yLnZhbHVlICkgKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgICAgcHJvdG9CYXNlID0gUmVmbGVjdC5nZXRQcm90b3R5cGVPZiggcHJvdG9CYXNlICk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGZpZWxkc0Rlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGFyZ2V0LCBSZWZsZWN0RmllbGRzS2V5ICk7XHJcbiAgICAgICAgICAgIGxldCBmaWVsZHMgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIGZpZWxkc0Rlc2NyaXB0b3IgPT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkcyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LCBSZWZsZWN0RmllbGRzS2V5LCB7IHZhbHVlOiBmaWVsZHMsIGVudW1lcmFibGU6IHRydWUgfSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGRzID0gZmllbGRzRGVzY3JpcHRvci52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaWVsZHNbIHByb3BlcnR5TmFtZSBdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9VQXR0cmlidXRlVGFyZ2V0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NBdHRyaWJ1dGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQXR0cmlidXRlVXNhZ2UudHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIEBBdHRyaWJ1dGVVc2FnZSggVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIGZhbHNlLCBmYWxzZSApXHJcbiAgICBleHBvcnQgY2xhc3MgQ05hbWVkQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV90ZXh0OiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHRleHQ6IHN0cmluZyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1fdGV4dCA9IHRleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFRleHQoKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3RleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBOYW1lZCggdGV4dDogc3RyaW5nICk6IFVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yUGFyYW1ldGVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIEF0dHJpYnV0ZURlY29yYXRlKCBuZXcgQ05hbWVkQXR0cmlidXRlKCB0ZXh0ICkgKTtcclxuICAgIH1cclxufVxyXG4iLCJcblxuXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvblxue1xuICAgIEBBdHRyaWJ1dGVVc2FnZSggVUF0dHJpYnV0ZVRhcmdldC5DbGFzcywgdHJ1ZSwgZmFsc2UgKVxuICAgIGNsYXNzIENUeXBlTmlja25hbWVBdHRyaWJ1dGUgZXh0ZW5kcyBDQXR0cmlidXRlXG4gICAge1xuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fbmlja25hbWU6IHN0cmluZyA9IG51bGw7XG5cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBuaWNrbmFtZTogc3RyaW5nIClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMubV9uaWNrbmFtZSA9IG5pY2tuYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGdldCBOaWNrbmFtZSgpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9uaWNrbmFtZTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBUeXBlTmlja25hbWUoIG5pY2tuYW1lOiBzdHJpbmcgKTogVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JDbGFzc1xuICAgIHtcbiAgICAgICAgcmV0dXJuIEF0dHJpYnV0ZURlY29yYXRlKCBuZXcgQ1R5cGVOaWNrbmFtZUF0dHJpYnV0ZSggbmlja25hbWUgKSApO1xuICAgIH1cblxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ1R5cGVcbiAgICB7XG4gICAgICAgIEdldE5pY2tuYW1lcygpOiBBcnJheTwgc3RyaW5nID47XG4gICAgICAgIEdldE5pY2tuYW1lKCk6IHN0cmluZztcbiAgICB9O1xuXG5cbiAgICBDVHlwZS5wcm90b3R5cGUuR2V0Tmlja25hbWVzID0gZnVuY3Rpb24oKTogQXJyYXk8IHN0cmluZyA+XG4gICAge1xuICAgICAgICBsZXQgbmlja25hbWVzID0gQXJyYXk8IHN0cmluZyA+KCk7XG4gICAgICAgIGxldCBuaWNrbmFtZUF0dHJzID0gdGhpcy5HZXRDdXN0b21BdHRyaWJ1dGVzKCBUeXBlT2YoIENUeXBlTmlja25hbWVBdHRyaWJ1dGUgKSwgZmFsc2UgKTtcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgbmlja25hbWVBdHRycy5sZW5ndGg7IGkgKysgKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgbiA9IG5pY2tuYW1lQXR0cnNbIGkgXTtcbiAgICAgICAgICAgIG5pY2tuYW1lcy5wdXNoKCBuLk5pY2tuYW1lICk7XG4gICAgICAgIH1cbiAgICAgICAgbmlja25hbWVzLnB1c2goIHRoaXMuR2V0SnNDb25zdHJ1Y3RvcigpLm5hbWUgKTtcbiAgICAgICAgcmV0dXJuIG5pY2tuYW1lcztcbiAgICB9XG5cbiAgICBDVHlwZS5wcm90b3R5cGUuR2V0Tmlja25hbWUgPSBmdW5jdGlvbigpOiBzdHJpbmdcbiAgICB7XG4gICAgICAgIGxldCBuaWNrbmFtZUF0dHIgPSB0aGlzLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggVHlwZU9mKCBDVHlwZU5pY2tuYW1lQXR0cmlidXRlICksIGZhbHNlICk7XG4gICAgICAgIGlmICggbmlja25hbWVBdHRyID09IG51bGwgKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5HZXRKc0NvbnN0cnVjdG9yKCkubmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmlja25hbWVBdHRyLk5pY2tuYW1lO1xuICAgIH1cbn1cblxuIiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIGV4cG9ydCBlbnVtIFVNZW1iZXJUeXBlc1xyXG4gICAge1xyXG4gICAgICAgIENvbnN0cnVjdG9yID0gMSxcclxuICAgICAgICBGaWVsZCA9IDIsXHJcbiAgICAgICAgTWV0aG9kID0gNCxcclxuICAgICAgICBQcm9wZXJ0eSA9IDgsXHJcbiAgICAgICAgVHlwZUluZm8gPSAxNlxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBUQ2FsbGJhY2s8IFQgZXh0ZW5kcyAoLi4uYXJnczogYW55KSA9PiBhbnkgPlxyXG4gICAge1xyXG4gICAgICAgIC8vIGhhbmRsZXI6IGFueTtcclxuICAgICAgICAvLyBwcm9jZXNzOiBUO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fZXhlY3V0YWJsZTogVDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBwcm9jZXNzPzogVCwgaGFuZGxlcj86IGFueSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnByb2Nlc3MgPSBwcm9jZXNzO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgICAgICB0aGlzLm1fZXhlY3V0YWJsZSA9IHByb2Nlc3MuYmluZCggaGFuZGxlciApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcHVibGljIGdldCBFeGVjdXRlKCk6IFRcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLm1fZXhlY3V0YWJsZTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBFeGVjdXRlKCAuLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+ICk6IFJldHVyblR5cGU8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fZXhlY3V0YWJsZSggLi4uPGFueVtdPmFyZ3MgKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGV4cG9ydCB0eXBlIFRDYWxsYmFja09yRnVuY3Rpb248IFQgZXh0ZW5kcyAoLi4uYXJnczogYW55KSA9PiBhbnkgPiA9IFQgfCBUQ2FsbGJhY2s8IFQgPiA7XHJcblxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUQ2FsbGJhY2tBcnJheTwgVCBleHRlbmRzICguLi5hcmdzOiBhbnkpID0+IGFueSA+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGNhbGxiYWNrczogVENhbGxiYWNrPCBUID5bXSA9IFtdO1xyXG5cclxuICAgICAgICBwdWJsaWMgQWRkKCBjYWxsYmFjazogVENhbGxiYWNrT3JGdW5jdGlvbjwgVCA+IHwgQXJyYXk8IFRDYWxsYmFja09yRnVuY3Rpb248IFQgPiA+IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggY2FsbGJhY2sgaW5zdGFuY2VvZiBBcnJheSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGNhbGxiYWNrLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNiID0gY2FsbGJhY2tbIGkgXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiggY2IgKSA9PSBcImZ1bmN0aW9uXCIgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKCBuZXcgVENhbGxiYWNrKCBjYiApICk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKCBjYiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mKCBjYWxsYmFjayApID09IFwiZnVuY3Rpb25cIiApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja3MucHVzaCggbmV3IFRDYWxsYmFjayggY2FsbGJhY2sgKSApO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goIGNhbGxiYWNrICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBFeGVjdXRlKCAuLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5jYWxsYmFja3MgIT0gbnVsbCAmJiB0aGlzLmNhbGxiYWNrcy5sZW5ndGggPiAwIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5jYWxsYmFja3MubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2IgPSB0aGlzLmNhbGxiYWNrc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggY2IgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLkV4ZWN1dGUoIC4uLmFyZ3MgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIENvcHkoKTogVENhbGxiYWNrQXJyYXk8IFQgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvcHljYXQgPSBuZXcgVENhbGxiYWNrQXJyYXk8IFQgPigpO1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLmNhbGxiYWNrcy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2IgPSB0aGlzLmNhbGxiYWNrc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgY29weWNhdC5jYWxsYmFja3MucHVzaCggY2IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29weWNhdDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG59XHJcblxyXG5pbnRlcmZhY2UgT2JqZWN0XHJcbntcclxuICAgIC8qKlxyXG4gICAgICogKirih6kg5ouT5bGV5pa55rOVKipcclxuICAgICAqIFxyXG4gICAgICog5p6E5bu65Zue6LCD5Ye95pWw5a+56LGhXHJcbiAgICAgKiBAcGFyYW0gbWV0aG9kIOaWueazlSBcclxuICAgICAqL1xyXG4gICAgX19DYWxsYmFjazwgVCBleHRlbmRzICggLi4uYXJnczogYW55W10gKSA9PiBhbnkgPiggbWV0aG9kOiBUICk6IGliZXJiYXIuU3lzdGVtLlRDYWxsYmFjazwgVCA+O1xyXG59XHJcblxyXG5PYmplY3QucHJvdG90eXBlLl9fQ2FsbGJhY2sgPSBmdW5jdGlvbjwgVCBleHRlbmRzICggLi4uYXJnczogYW55W10gKSA9PiBhbnkgPiggbWV0aG9kOiBUICk6IGliZXJiYXIuU3lzdGVtLlRDYWxsYmFjazwgVCA+XHJcbntcclxuICAgIHJldHVybiBuZXcgaWJlcmJhci5TeXN0ZW0uVENhbGxiYWNrKCBtZXRob2QsIHRoaXMgKTtcclxufVxyXG5cclxuUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSggT2JqZWN0LnByb3RvdHlwZSwgXCJfX0NhbGxiYWNrXCIsIHsgZW51bWVyYWJsZTogZmFsc2UgfSApOyIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtXHJcbntcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBkeW5hbWljX2Nhc3Q8VCBleHRlbmRzIG9iamVjdD4oIG86IGFueSwgdDogaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvbi5UeXBlQ29uc3RydWN0b3I8IFQgPiApXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBvIGluc3RhbmNlb2YgdCApXHJcbiAgICAgICAgICAgIHJldHVybiA8VD5vO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5kZWNsYXJlIGludGVyZmFjZSBBcnJheTxUPlxyXG57XHJcbiAgICBGaXJzdE9yRGVmYXVsdCggcHJlZGljYXRlPzogKCBlOiBULCBpbmRleDogbnVtYmVyICkgPT4gYm9vbGVhbiApOiBUO1xyXG4gICAgV2hlcmUoIHByZWRpY2F0ZTogKCBlOiBULCBpbmRleDogbnVtYmVyICkgPT4gYm9vbGVhbiApOiBBcnJheTxUPjtcclxuICAgIFJlbW92ZUF0KCBpbmRleDogbnVtYmVyICk6IEFycmF5PFQ+O1xyXG4gICAgUmVtb3ZlPFQ+KCBlbGVtZW50OiBUICk6IEFycmF5PFQ+O1xyXG4gICAgUmVtb3ZlV2hlcmU8VD4oIHByZWRpY2F0ZTogKCBlOiBULCBpbmRleDogbnVtYmVyICkgPT4gYm9vbGVhbiApOiBBcnJheTxUPjtcclxufVxyXG5cclxuZGVjbGFyZSBpbnRlcmZhY2UgUmVhZG9ubHlBcnJheTxUPlxyXG57XHJcbiAgICBGaXJzdE9yRGVmYXVsdCggcHJlZGljYXRlPzogKCBlOiBULCBpbmRleDogbnVtYmVyICkgPT4gYm9vbGVhbiApOiBUO1xyXG4gICAgV2hlcmUoIHByZWRpY2F0ZTogKCBlOiBULCBpbmRleDogbnVtYmVyICkgPT4gYm9vbGVhbiApOiBBcnJheTxUPjtcclxuICAgIFNhZmVGb3JFYWNoKCBmdW5jOiAoIGU6IFQsIGluZGV4OiBudW1iZXIgKSA9PiBib29sZWFuICk6IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBBcnJheUNvbnN0cnVjdG9yXHJcbntcclxuICAgIGNvbnZlcnRBbGw8IFRJbnB1dCwgVE91dHB1dCA+KCBhcnJheTogQXJyYXk8IFRJbnB1dCA+LCBjb252ZXJ0ZXI6ICggaW5wdXQ6IFRJbnB1dCApID0+IFRPdXRwdXQgKTogQXJyYXk8IFRPdXRwdXQgPjtcclxufVxyXG5cclxuQXJyYXkucHJvdG90eXBlLkZpcnN0T3JEZWZhdWx0ID0gZnVuY3Rpb248VD4oIHByZWRpY2F0ZT86ICggZTogVCwgaW5kZXg6IG51bWJlciApID0+IGJvb2xlYW4gKTogVFxyXG57XHJcbiAgICBpZiAoIHByZWRpY2F0ZSA9PSBudWxsIClcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMubGVuZ3RoID09IDAgKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gdGhpc1sgMCBdO1xyXG4gICAgfVxyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKysgKVxyXG4gICAge1xyXG4gICAgICAgIGlmICggcHJlZGljYXRlKCB0aGlzWyBpIF0sIGkgKSApXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzWyBpIF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuQXJyYXkucHJvdG90eXBlLldoZXJlID0gZnVuY3Rpb248VD4oIHByZWRpY2F0ZTogKCBlOiBULCBpbmRleDogbnVtYmVyICkgPT4gYm9vbGVhbiApOiBBcnJheTxUPlxyXG57XHJcbiAgICBsZXQgdGVtcCA9IFtdO1xyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKysgKVxyXG4gICAge1xyXG4gICAgICAgIGlmICggcHJlZGljYXRlKCB0aGlzWyBpIF0sIGkgKSApXHJcbiAgICAgICAgICAgIHRlbXAucHVzaCggdGhpc1sgaSBdICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGVtcDtcclxufVxyXG5cclxuQXJyYXkucHJvdG90eXBlLlJlbW92ZUF0ID0gZnVuY3Rpb24oIHRoaXM6IEFycmF5PGFueT4sIGluZGV4OiBudW1iZXIgKTogQXJyYXk8YW55PlxyXG57XHJcbiAgICByZXR1cm4gdGhpcy5zcGxpY2UoIGluZGV4LCAxICk7XHJcbn1cclxuXHJcbkFycmF5LnByb3RvdHlwZS5SZW1vdmUgPSBmdW5jdGlvbjxUPiggdGhpczogQXJyYXk8VD4sIGVsZW1lbnQ6IFQgKTogQXJyYXk8VD5cclxue1xyXG4gICAgcmV0dXJuIHRoaXMuV2hlcmUoIGUgPT4gZSAhPSBlbGVtZW50ICk7XHJcbn1cclxuXHJcbkFycmF5LnByb3RvdHlwZS5SZW1vdmVXaGVyZSA9IGZ1bmN0aW9uPFQ+KCB0aGlzOiBBcnJheTxUPiwgcHJlZGljYXRlOiAoIGU6IFQsIGluZGV4OiBudW1iZXIgKSA9PiBib29sZWFuICk6IEFycmF5PCBUID5cclxue1xyXG4gICAgbGV0IHRlbXAgPSBbXTtcclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICsrIClcclxuICAgIHtcclxuICAgICAgICBpZiAoIHByZWRpY2F0ZSggdGhpc1sgaSBdLCBpICkgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICB0ZW1wLnB1c2goIHRoaXNbIGkgXSApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXA7XHJcbn1cclxuXHJcbkFycmF5LmNvbnZlcnRBbGwgPSBmdW5jdGlvbjwgVElucHV0LCBUT3V0cHV0ID4oIGFycmF5OiBBcnJheTwgVElucHV0ID4sIGNvbnZlcnRlcjogKCBpbnB1dDogVElucHV0ICkgPT4gVE91dHB1dCApOiBBcnJheTwgVE91dHB1dCA+XHJcbntcclxuICAgIGxldCBhcnJheU91dHB1dDogQXJyYXk8IFRPdXRwdXQgPiA9IEFycmF5KCk7XHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKysgKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBhID0gYXJyYXlbIGkgXTtcclxuICAgICAgICBhcnJheU91dHB1dC5wdXNoKCBjb252ZXJ0ZXIoIGEgKSApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5T3V0cHV0O1xyXG59XHJcblxyXG4iLCJcclxuXHJcbi8vIG5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbVxyXG4vLyB7XHJcbi8vICAgICBleHBvcnQgdHlwZSBPdXRQYXJhbWV0ZXI8IFQgPiA9IHsgX19vdXQ6IFQgfTtcclxuLy8gfSIsIlxyXG4vLyBuYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW1cclxuLy8ge1xyXG4vLyAgICAgZXhwb3J0IHR5cGUgUmVmUGFyYW1ldGVyPCBUID4gPSB7IHZhbHVlOiBUIH07XHJcbi8vIH1cclxuIiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1JlZmxlY3Rpb24vVHlwZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1JlZmxlY3Rpb24vRGVjbGFyaW5nVHlwZS50c1wiIC8+XHJcblxyXG5jb25zdCBUeXBlT2YgPSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZjtcclxuY29uc3QgVHlwZU9mRGVsYXkgPSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZkRlbGF5O1xyXG5jb25zdCBHZXRPYmplY3RUeXBlID0gaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvbi5HZXRPYmplY3RUeXBlO1xyXG5jb25zdCBEZWNsYXJpbmdUeXBlID0gaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvbi5EZWNsYXJpbmdUeXBlO1xyXG5jb25zdCBEZWNsYXJpbmdUeXBlRGVsYXkgPSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uLkRlY2xhcmluZ1R5cGVEZWxheTtcclxuY29uc3QgX19DYWxsYmFjayA9IGliZXJiYXIuU3lzdGVtLl9fQ2FsbGJhY2s7XHJcbmNvbnN0IEF1dG9SZWZsZWN0TWV0YWRhdGFfQ29uc3RydWN0b3IgPSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uLkF1dG9SZWZsZWN0TWV0YWRhdGFfQ29uc3RydWN0b3I7XHJcbmNvbnN0IEF1dG9SZWZsZWN0TWV0YWRhdGFfRmllbGQgPSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uLkF1dG9SZWZsZWN0TWV0YWRhdGFfRmllbGQ7XHJcbmNvbnN0IEF1dG9SZWZsZWN0TWV0YWRhdGFfUHJvcGVydHkgPSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uLkF1dG9SZWZsZWN0TWV0YWRhdGFfUHJvcGVydHk7XHJcbmNvbnN0IEF1dG9SZWZsZWN0TWV0YWRhdGFfTWV0aG9kID0gaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvbi5BdXRvUmVmbGVjdE1ldGFkYXRhX01ldGhvZDsiLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWNcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENDb250YWluZXJCdWlsZGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBtX3dhc0J1aWx0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2NvbmZpZ3VyYXRpb25DYWxsYmFja3M6IEFycmF5PCBCdWlsZGVyLkNEZWZlcnJlZENhbGxiYWNrID4gPSBBcnJheSgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgUmVnaXN0ZXI8IFQgZXh0ZW5kcyBvYmplY3QgPihcclxuICAgICAgICAgICAgdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IFQgPixcclxuICAgICAgICAgICAgZGVsZWdhdGU6IFN5c3RlbS5UQ2FsbGJhY2tPckZ1bmN0aW9uPCBBY3RpdmF0b3JzLkRlbGVnYXRlLlVBY3RpdmF0aW9uRnVuY3Rpb248IFQgPiA+XHJcbiAgICAgICAgKTogQnVpbGRlci5JUmVnaXN0cmF0aW9uQnVpbGRlcjwgVCA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmIgPSBuZXcgQnVpbGRlci5DUmVnaXN0cmF0aW9uQnVpbGRlcihcclxuICAgICAgICAgICAgICAgIG5ldyBDb3JlLkNUeXBlZFNlcnZpY2UoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggT2JqZWN0ICkgKSxcclxuICAgICAgICAgICAgICAgIG5ldyBCdWlsZGVyLkNTaW1wbGVBY3RpdmF0b3JEYXRhKCBuZXcgQWN0aXZhdG9ycy5EZWxlZ2F0ZS5DRGVsZWdhdGVBY3RpdmF0b3IoIHR5cGUsIGRlbGVnYXRlICkgKSxcclxuICAgICAgICAgICAgICAgIG5ldyBCdWlsZGVyLkNTaW5nbGVSZWdpc3RyYXRpb25TdHlsZSgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJiLlJlZ2lzdGVyRGF0YS5EZWZlcnJlZENhbGxiYWNrID0gdGhpcy5SZWdpc3RlckNhbGxiYWNrKCBTeXN0ZW0uX19DYWxsYmFjayggZnVuY3Rpb24oIGNyIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQnVpbGRlci5DUmVnaXN0cmF0aW9uQnVpbGRlckhlbHBlci5SZWdpc3RlclNpbmdsZUNvbXBvbmVudCggY3IsIHJiICk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFJlZ2lzdGVyVHlwZTwgVCBleHRlbmRzIG9iamVjdCA+KCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVCA+ICk6IEJ1aWxkZXIuSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8IFQgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJiID0gbmV3IEJ1aWxkZXIuQ1JlZ2lzdHJhdGlvbkJ1aWxkZXIoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ29yZS5DVHlwZWRTZXJ2aWNlKCB0eXBlICksXHJcbiAgICAgICAgICAgICAgICBuZXcgQnVpbGRlci5DQ29uY3JldGVSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YSggdHlwZSApLFxyXG4gICAgICAgICAgICAgICAgbmV3IEJ1aWxkZXIuQ1NpbmdsZVJlZ2lzdHJhdGlvblN0eWxlKCkgKTtcclxuICAgICAgICAgICAgcmIuUmVnaXN0ZXJEYXRhLkRlZmVycmVkQ2FsbGJhY2sgPSB0aGlzLlJlZ2lzdGVyQ2FsbGJhY2soIFN5c3RlbS5fX0NhbGxiYWNrKCBmdW5jdGlvbiggY3IgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBCdWlsZGVyLkNSZWdpc3RyYXRpb25CdWlsZGVySGVscGVyLlJlZ2lzdGVyU2luZ2xlQ29tcG9uZW50KCBjciwgcmIgKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUmVnaXN0ZXJJbnN0YW5jZTwgVCBleHRlbmRzIG9iamVjdCA+KCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVCA+LCBpbnN0YW5jZTogVCApOiBCdWlsZGVyLklSZWdpc3RyYXRpb25CdWlsZGVyPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZhdG9yID0gbmV3IEFjdGl2YXRvcnMuUHJvdmlkZWRJbnN0YW5jZS5DUHJvdmlkZWRJbnN0YW5jZUFjdGl2YXRvciggaW5zdGFuY2UgKTtcclxuICAgICAgICAgICAgbGV0IHJiID0gbmV3IEJ1aWxkZXIuQ1JlZ2lzdHJhdGlvbkJ1aWxkZXIoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ29yZS5DVHlwZWRTZXJ2aWNlKCB0eXBlICksXHJcbiAgICAgICAgICAgICAgICBuZXcgQnVpbGRlci5DU2ltcGxlQWN0aXZhdG9yRGF0YSggYWN0aXZhdG9yICksXHJcbiAgICAgICAgICAgICAgICBuZXcgQnVpbGRlci5DU2luZ2xlUmVnaXN0cmF0aW9uU3R5bGUoKSApO1xyXG4gICAgICAgICAgICByYi5TaW5nbGVJbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICByYi5SZWdpc3RlckRhdGEuRGVmZXJyZWRDYWxsYmFjayA9IHRoaXMuUmVnaXN0ZXJDYWxsYmFjayggU3lzdGVtLl9fQ2FsbGJhY2soIGZ1bmN0aW9uKCBjciApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggKCByYi5SZWdpc3RlckRhdGEuTGlmZXRpbWUgaW5zdGFuY2VvZiBDb3JlLkxpZmV0aW1lLkNSb290U2NvcGVMaWZldGltZSApID09IGZhbHNlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgcmIuUmVnaXN0ZXJEYXRhLlNoYXJpbmcgIT0gQ29yZS5VSW5zdGFuY2VTaGFyaW5nLlNoYXJlZCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGlzcG9zZeaOp+WItlxyXG4gICAgICAgICAgICAgICAgLy8g5pqC5LiN5a6e546wXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgICAgICBCdWlsZGVyLkNSZWdpc3RyYXRpb25CdWlsZGVySGVscGVyLlJlZ2lzdGVyU2luZ2xlQ29tcG9uZW50KCBjciwgcmIgKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlj6/ku6Xorr/pl67ms6jlhoznsbvkuK3nsbvvvJtcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiDlj6rog73ms6jlhoxleHBvcnTnmoTnsbvlnos7XHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGFzc2VtYmxpZXMgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIFJlZ2lzdGVyQXNzZW1ibHlUeXBlcyggLi4uYXNzZW1ibGllczogUmVhZG9ubHlBcnJheTwgU3lzdGVtLlJlZmxlY3Rpb24uQ0Fzc2VtYmx5ID4gKTogQnVpbGRlci5JUmVnaXN0cmF0aW9uQnVpbGRlcjxvYmplY3Q+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRmVhdHVyZXMuU2Nhbm5pbmcuQ1NjYW5uaW5nUmVnaXN0cmF0aW9uRXh0ZW5zaW9ucy5SZWdpc3RlckFzc2VtYmx5VHlwZXMoIHRoaXMsIGFzc2VtYmxpZXMgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBSZWdpc3RlclR5cGVzKCB0eXBlczogUmVhZG9ubHlBcnJheTwgU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgPiApOiBCdWlsZGVyLklSZWdpc3RyYXRpb25CdWlsZGVyPG9iamVjdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBGZWF0dXJlcy5TY2FubmluZy5DU2Nhbm5pbmdSZWdpc3RyYXRpb25FeHRlbnNpb25zLlJlZ2lzdGVyVHlwZXMoIHRoaXMsIHR5cGVzICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUmVnaXN0ZXJDYWxsYmFjayggY29uZmlndXJhdGlvbkNhbGxiYWNrOiBTeXN0ZW0uQWN0aW9uPCBDb3JlLklDb21wb25lbnRSZWdpc3RyeSA+ICk6IGFueVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGMgPSBuZXcgQnVpbGRlci5DRGVmZXJyZWRDYWxsYmFjayggY29uZmlndXJhdGlvbkNhbGxiYWNrICk7XHJcbiAgICAgICAgICAgIHRoaXMubV9jb25maWd1cmF0aW9uQ2FsbGJhY2tzLnB1c2goIGMgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQnVpbGQoKTogSUNvbnRhaW5lclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IG5ldyBDb3JlLkNDb250YWluZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5CdWlsZEludGVybmFsKCBjb250YWluZXIuQ29tcG9uZW50UmVnaXN0cnkgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIEJ1aWxkSW50ZXJuYWwoIGNvbXBvbmVudFJlZ2lzdHJ5OiBDb3JlLklDb21wb25lbnRSZWdpc3RyeSApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV93YXNCdWlsdCA9PSB0cnVlIClcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tX3dhc0J1aWx0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubV9jb25maWd1cmF0aW9uQ2FsbGJhY2tzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjYWxsYmFjayA9IHRoaXMubV9jb25maWd1cmF0aW9uQ2FsbGJhY2tzWyBpIF07XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5DYWxsYmFjay5FeGVjdXRlKCBjb21wb25lbnRSZWdpc3RyeSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhY1xyXG57XHJcbiAgICBAU3lzdGVtLkF0dHJpYnV0ZVVzYWdlKCBTeXN0ZW0uVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIgfCBTeXN0ZW0uVUF0dHJpYnV0ZVRhcmdldC5Qcm9wZXJ0eSwgZmFsc2UsIGZhbHNlIClcclxuICAgIGV4cG9ydCBjbGFzcyBDSW5qZWN0TGlmZXRpbWVTY29wZUF0dHJpYnV0ZSBleHRlbmRzIFN5c3RlbS5DQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEluamVjdExpZmV0aW1lU2NvcGUoKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yUGFyYW1ldGVyICYgU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yUHJvcGVydHlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3lzdGVtLkF0dHJpYnV0ZURlY29yYXRlKCBuZXcgQ0luamVjdExpZmV0aW1lU2NvcGVBdHRyaWJ1dGUoKSApO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDTW9kdWxlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIExvYWQoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDUGFyYW1ldGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IENhblN1cHBseVZhbHVlKFxyXG4gICAgICAgICAgICBwaTogU3lzdGVtLlJlZmxlY3Rpb24uQ1BhcmFtZXRlckluZm8sXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0XHJcbiAgICAgICAgKTogeyByZXQ6IGJvb2xlYW4sIHZhbHVlUHJvdmlkZXI/OiAoKSA9PiBvYmplY3QgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ1BhcmFtZXRlci50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDQ29uc3RhbnRQYXJhbWV0ZXIgZXh0ZW5kcyBDUGFyYW1ldGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3ByZWRpY2F0ZTogKCBwYXJhbWV0ZXJJbmZvOiBTeXN0ZW0uUmVmbGVjdGlvbi5DUGFyYW1ldGVySW5mbyApID0+IGJvb2xlYW4gPSBudWxsO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fdmFsdWU6IG9iamVjdCA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggdmFsdWU6IG9iamVjdCwgcHJlZGljYXRlOiAoIHBhcmFtZXRlckluZm86IFN5c3RlbS5SZWZsZWN0aW9uLkNQYXJhbWV0ZXJJbmZvICkgPT4gYm9vbGVhbiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1fcHJlZGljYXRlID0gcHJlZGljYXRlO1xyXG4gICAgICAgICAgICB0aGlzLm1fdmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgVmFsdWUoKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3ZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIENhblN1cHBseVZhbHVlKFxyXG4gICAgICAgICAgICBwaTogU3lzdGVtLlJlZmxlY3Rpb24uQ1BhcmFtZXRlckluZm8sXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0XHJcbiAgICAgICAgKTogeyByZXQ6IGJvb2xlYW4sIHZhbHVlUHJvdmlkZXI/OiAoKSA9PiBvYmplY3QgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubV9wcmVkaWNhdGUocGkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3ZpZGVyOiAoKSA9PiB0aGlzLlZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmV0OiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufSIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db3JlL0NDb25zdGFudFBhcmFtZXRlci50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhY1xyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ05hbWVkUGFyYW1ldGVyIGV4dGVuZHMgQ29yZS5DQ29uc3RhbnRQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIG5hbWU6IHN0cmluZywgdmFsdWU6IG9iamVjdCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggdmFsdWUsIHBpID0+IHBpLk5hbWUgPT0gbmFtZSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29yZS9DQ29uc3RhbnRQYXJhbWV0ZXIudHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWNcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENQb3NpdGlvbmFsUGFyYW1ldGVyIGV4dGVuZHMgQ29yZS5DQ29uc3RhbnRQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fcG9zaXRpb246IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggcG9zaXRpb246IG51bWJlciwgdmFsdWU6IG9iamVjdCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggdmFsdWUsIHBpID0+IHBpLlBhcmFtZXRlckluZGV4ID09IHBvc2l0aW9uICk7XHJcbiAgICAgICAgICAgIHRoaXMubV9wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBQb3NpdGlvbigpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvcmUvQ0NvbnN0YW50UGFyYW1ldGVyLnRzXCIgLz5cclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDVHlwZWRQYXJhbWV0ZXIgZXh0ZW5kcyBDb3JlLkNDb25zdGFudFBhcmFtZXRlclxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV90eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUsIHZhbHVlOiBvYmplY3QgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoIHZhbHVlLCBwaSA9PiBwaS5QYXJhbWV0ZXJUeXBlICYmIHBpLlBhcmFtZXRlclR5cGUuSXNFcXVpdmFsZW50VG8oIHR5cGUgKSApO1xyXG4gICAgICAgICAgICB0aGlzLm1fdHlwZSA9IHR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFR5cGUoKTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fdHlwZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWNcclxue1xyXG4gICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuRmllbGQsIGZhbHNlLCBmYWxzZSApXHJcbiAgICBleHBvcnQgY2xhc3MgQ0luamVjdGlvbkF0dHJpYnV0ZSBleHRlbmRzIFN5c3RlbS5DQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9O1xyXG5cclxuICAgIEBTeXN0ZW0uQXR0cmlidXRlVXNhZ2UoIFN5c3RlbS5VQXR0cmlidXRlVGFyZ2V0LkZpZWxkIHwgU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuUGFyYW1ldGVyLCBmYWxzZSwgZmFsc2UgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENJbmplY3Rpb25Qcm92aWRlckF0dHJpYnV0ZSBleHRlbmRzIFN5c3RlbS5DQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuRmllbGQgfCBTeXN0ZW0uVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIGZhbHNlLCBmYWxzZSApXHJcbiAgICBleHBvcnQgY2xhc3MgQ1dpdGhOYW1lQXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9uYW1lOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9uYW1lID0gbmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgTmFtZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX25hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBTeXN0ZW0uQXR0cmlidXRlVXNhZ2UoIFN5c3RlbS5VQXR0cmlidXRlVGFyZ2V0LkZpZWxkIHwgU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuUGFyYW1ldGVyLCBmYWxzZSwgZmFsc2UgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENXaXRoS2V5QXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9rZXk6IElLZXkgPSBudWxsO1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcigga2V5OiBJS2V5IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9rZXkgPSBrZXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IEtleSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2tleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAqKu+8iOWHveaVsOWjsOaYju+8iSoqXHJcbiAgICAgKiBcclxuICAgICAqIOWcqOexu+Wtl+auteS9jee9ruWjsOaYjuazqOWFpVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gSW5qZWN0aW9uKCk6IFN5c3RlbS5VRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvckZpZWxkXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbS5BdHRyaWJ1dGUoIG5ldyBDSW5qZWN0aW9uQXR0cmlidXRlKCkgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOazqOWFpUlQcm92aWRlcuaPkOS+m+WZqFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gSW5qZWN0aW9uUHJvdmlkZXIoKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yRmllbGQgJiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCB0YXJnZXQ6IGFueSwgbWVtYmVyTmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJJbmRleD86IG51bWJlciApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHBhcmFtZXRlckluZGV4ID09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFN5c3RlbS5SZWZsZWN0aW9uLkVudW1lcmFibGUoIHRhcmdldCwgbWVtYmVyTmFtZSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFN5c3RlbS5BdHRyaWJ1dGUoIG5ldyBDSW5qZWN0aW9uUHJvdmlkZXJBdHRyaWJ1dGUoKSApKCB0YXJnZXQsIG1lbWJlck5hbWUsIHBhcmFtZXRlckluZGV4ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBXaXRoTmFtZSggbmFtZTogc3RyaW5nICk6IFN5c3RlbS5VRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvckZpZWxkICYgU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yUGFyYW1ldGVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbS5BdHRyaWJ1dGUoIG5ldyBDV2l0aE5hbWVBdHRyaWJ1dGUoIG5hbWUgKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBXaXRoS2V5KCBrZXk6IElLZXkgKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yRmllbGQgJiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3lzdGVtLkF0dHJpYnV0ZSggbmV3IENXaXRoS2V5QXR0cmlidXRlKCBrZXkgKSApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAvKipcclxuICAgIC8vICAqICoq77yI5pWw5o2u57G75Z6L5aOw5piO77yJKipcclxuICAgIC8vICAqIFxyXG4gICAgLy8gICogSW5qZWN0aW9u5pa55rOV55qE6L+U5Zue57G75Z6L5aOw5piOXHJcbiAgICAvLyAgKi9cclxuICAgIC8vIGV4cG9ydCB0eXBlIFVJbmplY3Rpb25SZXR1cm4gPSAoXHJcbiAgICAvLyAgICAgdHlwZVdoZXJlOiBhbnksXHJcbiAgICAvLyAgICAgcHJvcGVydHlLZXk6IHN0cmluZyxcclxuICAgIC8vICAgICBwYXJhbWV0ZXJJbmRleD86IG51bWJlclxyXG4gICAgLy8gKSA9PiB2b2lkO1xyXG5cclxuICAgIC8vIC8qKlxyXG4gICAgLy8gICogKirvvIjlh73mlbDlo7DmmI7vvIkqKlxyXG4gICAgLy8gICogXHJcbiAgICAvLyAgKiDlnKjlsZ7mgKfmiJbogIXmnoTpgKDlmajkuK3nmoTlj4LmlbDkvY3nva7lo7DmmI7ms6jlhaVcclxuICAgIC8vICAqIEBwYXJhbSB0eXBlIOazqOWFpeexu+Wei1xyXG4gICAgLy8gICogQHBhcmFtIG5hbWUg6ZSu5ZCN44CB5Yir5ZCNXHJcbiAgICAvLyAgKi9cclxuICAgIC8vIGV4cG9ydCBmdW5jdGlvbiBJbmplY3Rpb24oIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlLCBuYW1lPzogc3RyaW5nIHwgSUtleSApOiBVSW5qZWN0aW9uUmV0dXJuXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGZ1bmN0aW9uKFxyXG4gICAgLy8gICAgICAgICB0YXJnZXQ6IGFueSxcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlLZXk6IHN0cmluZyxcclxuICAgIC8vICAgICAgICAgcGFyYW1ldGVySW5kZXg/OiBudW1iZXIgKTogdm9pZFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgbGV0IHByb3RvdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uVHlwZVByb3RvdHlwZTwgb2JqZWN0ID4gJiBCdWlsZGVyLlVJbmplY3Rpb25PblR5cGVQcm90b3R5cGUgPSBudWxsO1xyXG4gICAgLy8gICAgICAgICAvLyDlsZ7mgKfms6jlhaVcclxuICAgIC8vICAgICAgICAgaWYgKCBwYXJhbWV0ZXJJbmRleCA9PSB1bmRlZmluZWQgKVxyXG4gICAgLy8gICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICBwcm90b3R5cGUgPSB0YXJnZXQ7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGRlZnM6IHsgWyBrZXk6IHN0cmluZyBdOiBCdWlsZGVyLlVJbmplY3Rpb25Ob2RlIH0gPSBudWxsO1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKCBwcm90b3R5cGUuaGFzT3duUHJvcGVydHkoIEJ1aWxkZXIudUluamVjdGlvbkZvckZpZWxkICkgPT0gZmFsc2UgKVxyXG4gICAgLy8gICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBkZWZzT2xkOiB7IFsga2V5OiBzdHJpbmcgXTogQnVpbGRlci5VSW5qZWN0aW9uTm9kZSB9ID0gcHJvdG90eXBlWyBCdWlsZGVyLnVJbmplY3Rpb25Gb3JGaWVsZCBdO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlZnMgPSBwcm90b3R5cGVbIEJ1aWxkZXIudUluamVjdGlvbkZvckZpZWxkIF0gPSBPYmplY3QuYXNzaWduKCB7fSwgZGVmc09sZCApO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgZWxzZVxyXG4gICAgLy8gICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlZnMgPSBwcm90b3R5cGVbIEJ1aWxkZXIudUluamVjdGlvbkZvckZpZWxkIF07XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgaW5qZWN0aW9uTm9kZTogQnVpbGRlci5VSW5qZWN0aW9uTm9kZSA9XHJcbiAgICAvLyAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdHlwZTogdHlwZVxyXG4gICAgLy8gICAgICAgICAgICAgfTtcclxuICAgIC8vICAgICAgICAgICAgIGlmICggbmFtZSAhPSBudWxsIClcclxuICAgIC8vICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiggbmFtZSApID09IFwic3RyaW5nXCIgKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpbmplY3Rpb25Ob2RlLm5hbWUgPSBuYW1lO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGVsc2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaW5qZWN0aW9uTm9kZS5rZXkgPSBuYW1lO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgZGVmc1sgcHJvcGVydHlLZXkgXSA9IGluamVjdGlvbk5vZGU7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgZWxzZVxyXG4gICAgLy8gICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyDmnoTpgKDlh73mlbDms6jlhaVcclxuICAgIC8vICAgICAgICAgICAgIGlmICggcHJvcGVydHlLZXkgPT0gdW5kZWZpbmVkIClcclxuICAgIC8vICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBwcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBkZWZzOiBCdWlsZGVyLlVJbmplY3Rpb25Ob2RlW10gPSBudWxsO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICggcHJvdG90eXBlLmhhc093blByb3BlcnR5KCBCdWlsZGVyLnVJbmplY3Rpb25Gb3JDb25zdHJ1Y3RvciApID09IGZhbHNlIClcclxuICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRlZnMgPSBwcm90b3R5cGVbIEJ1aWxkZXIudUluamVjdGlvbkZvckNvbnN0cnVjdG9yIF0gPSBBcnJheSggcHJvdG90eXBlLmNvbnN0cnVjdG9yLmxlbmd0aCApO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBkZWZzID0gcHJvdG90eXBlWyBCdWlsZGVyLnVJbmplY3Rpb25Gb3JDb25zdHJ1Y3RvciBdO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgaW5qZWN0aW9uTm9kZTogQnVpbGRlci5VSW5qZWN0aW9uTm9kZSA9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoIG5hbWUgIT0gbnVsbCApXHJcbiAgICAvLyAgICAgICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiggbmFtZSApID09IFwic3RyaW5nXCIgKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaW5qZWN0aW9uTm9kZS5uYW1lID0gbmFtZTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaW5qZWN0aW9uTm9kZS5rZXkgPSBuYW1lO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICBkZWZzWyBwYXJhbWV0ZXJJbmRleCBdID0gaW5qZWN0aW9uTm9kZTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIC8vIOaWueazleazqOWFpVxyXG4gICAgLy8gICAgICAgICAgICAgZWxzZVxyXG4gICAgLy8gICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHByb3RvdHlwZSA9IHRhcmdldDtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGRlZnM6IHsgWyBrZXk6IHN0cmluZyBdOiBCdWlsZGVyLlVJbmplY3Rpb25Ob2RlIH0gPSBudWxsO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICggcHJvdG90eXBlLmhhc093blByb3BlcnR5KCBCdWlsZGVyLnVJbmplY3Rpb25Gb3JNZXRob2QgKSA9PSBmYWxzZSApXHJcbiAgICAvLyAgICAgICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBkZWZzID0gcHJvdG90eXBlWyBCdWlsZGVyLnVJbmplY3Rpb25Gb3JNZXRob2QgXSA9IHt9O1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBkZWZzID0gcHJvdG90eXBlWyBCdWlsZGVyLnVJbmplY3Rpb25Gb3JNZXRob2QgXTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGluamVjdGlvbk5vZGU6IEJ1aWxkZXIuVUluamVjdGlvbk5vZGUgPVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgIC8vICAgICAgICAgICAgICAgICB9O1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICggbmFtZSAhPSBudWxsIClcclxuICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mKCBuYW1lICkgPT0gXCJzdHJpbmdcIiApXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpbmplY3Rpb25Ob2RlLm5hbWUgPSBuYW1lO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpbmplY3Rpb25Ob2RlLmtleSA9IG5hbWU7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlZnNbIHBhcmFtZXRlckluZGV4IF0gPSBpbmplY3Rpb25Ob2RlO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUtleVxyXG4gICAge1xyXG4gICAgICAgIEVxdWFscygga2V5OiBJS2V5ICk6IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENTdHJpbmdLZXkgaW1wbGVtZW50cyBJS2V5XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3N0cjogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBzdHI6IHN0cmluZyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fc3RyID0gc3RyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRXF1YWxzKGtleTogSUtleSk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvLyBleHBvcnQgY2xhc3MgQ0luZGV4PCBUS2V5IGV4dGVuZHMgSUtleSwgVFNlcnZpY2UgZXh0ZW5kcyBvYmplY3QgPiBleHRlbmRzIFN5c3RlbS5DRnVuY3Rpb248ICgga2V5OiBUS2V5ICkgPT4gVFNlcnZpY2UgPlxyXG4gICAgLy8ge1xyXG4gICAgLy8gfTtcclxufVxyXG4iLCJcclxuXHJcbi8vIG5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWNcclxuLy8ge1xyXG4vLyAgICAgLyoqXHJcbi8vICAgICAgKiAqKu+8iOaOpeWPo++8iSoqXHJcbi8vICAgICAgKiBcclxuLy8gICAgICAqIEF1dG9mYWPmj5DkvpvlmahcclxuLy8gICAgICAqL1xyXG4vLyAgICAgZXhwb3J0IGludGVyZmFjZSBJUHJvdmlkZXJcclxuLy8gICAgIHtcclxuLy8gICAgICAgICAvKipcclxuLy8gICAgICAgICAgKiDojrflj5blrp7kvotcclxuLy8gICAgICAgICAgKiBAcGFyYW0gdHlwZSDkvp3otZbnsbvlnotcclxuLy8gICAgICAgICAgKi9cclxuLy8gICAgICAgICBSZXNvbHZlPCBUU2VydmljZSBleHRlbmRzIG9iamVjdCA+KFxyXG4vLyAgICAgICAgICAgICB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVFNlcnZpY2UgPlxyXG4vLyAgICAgICAgICk6IFRTZXJ2aWNlO1xyXG5cclxuLy8gICAgICAgICAvKipcclxuLy8gICAgICAgICAgKiDojrflj5blrp7kvotcclxuLy8gICAgICAgICAgKiBAcGFyYW0gdHlwZSDkvp3otZbnsbvlnotcclxuLy8gICAgICAgICAgKiBAcGFyYW0gbmFtZSDplK7lkI1cclxuLy8gICAgICAgICAgKi9cclxuLy8gICAgICAgICBSZXNvbHZlTmFtZWQ8IFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0ID4oXHJcbi8vICAgICAgICAgICAgIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBUU2VydmljZSA+LFxyXG4vLyAgICAgICAgICAgICBuYW1lOiBzdHJpbmdcclxuLy8gICAgICAgICApOiBUU2VydmljZTtcclxuXHJcbi8vICAgICAgICAgLyoqXHJcbi8vICAgICAgICAgICog6I635Y+W5a6e5L6LXHJcbi8vICAgICAgICAgICogQHBhcmFtIHR5cGUg5L6d6LWW57G75Z6LXHJcbi8vICAgICAgICAgICogQHBhcmFtIGtleSDplK7lkI1cclxuLy8gICAgICAgICAgKi9cclxuLy8gICAgICAgICBSZXNvbHZlS2V5ZWQ8IFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0LCBUS2V5IGV4dGVuZHMgSUtleSA+KFxyXG4vLyAgICAgICAgICAgICB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVFNlcnZpY2UgPixcclxuLy8gICAgICAgICAgICAga2V5OiBUS2V5XHJcbi8vICAgICAgICAgKTogVFNlcnZpY2U7XHJcblxyXG4vLyAgICAgICAgIC8vUmVzb2x2ZUluZGV4PCBUS2V5IGV4dGVuZHMgSUtleSwgVFNlcnZpY2UgZXh0ZW5kcyBvYmplY3QgPigpOiBDSW5kZXg8IFRLZXksIFRTZXJ2aWNlID47XHJcbi8vICAgICB9O1xyXG4vLyB9IiwiXG5cblxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhY1xue1xuICAgIGV4cG9ydCBmdW5jdGlvbiBSZXNvbHZlPFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0PiggY29tcG9uZW50Q29udGV4dDogSUNvbXBvbmVudENvbnRleHQsIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPFRTZXJ2aWNlPiwgLi4ucGFyYW1ldGVyczogQ29yZS5DUGFyYW1ldGVyW10gKTogVFNlcnZpY2VcbiAgICB7XG4gICAgICAgIGxldCByZXQgPSBUcnlSZXNvbHZlU2VydmljZSggY29tcG9uZW50Q29udGV4dCwgbmV3IENvcmUuQ1R5cGVkU2VydmljZSggdHlwZSApLCBwYXJhbWV0ZXJzICk7XG4gICAgICAgIGlmICggcmV0LnN1Y2NlZWQgPT0gZmFsc2UgKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIGBDYW4ndCByZXNvbHZlIGluc3RhbmNlIG9mIHR5cGUgKCR7dHlwZS5HZXROaWNrbmFtZSgpfSlgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxUU2VydmljZT5yZXQuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFRyeVJlc29sdmVTZXJ2aWNlKCBjb21wb25lbnRDb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCwgc2VydmljZTogQ29yZS5DU2VydmljZSwgcGFyYW1ldGVyczogQ29yZS5DUGFyYW1ldGVyW10gKTogeyBzdWNjZWVkOiBib29sZWFuLCBpbnN0YW5jZT86IG9iamVjdCB9XG4gICAge1xuICAgICAgICBsZXQgcmVnaXN0cmF0aW9uID0gY29tcG9uZW50Q29udGV4dC5Db21wb25lbnRSZWdpc3RyeS5HZXRSZWdpc3RyYXRpb24oIHNlcnZpY2UgKTtcbiAgICAgICAgaWYgKCByZWdpc3RyYXRpb24gPT0gbnVsbCApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3VjY2VlZDogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN1Y2NlZWQ6IHRydWUsXG4gICAgICAgICAgICBpbnN0YW5jZTogY29tcG9uZW50Q29udGV4dC5SZXNvbHZlQ29tcG9uZW50KCByZWdpc3RyYXRpb24sIHBhcmFtZXRlcnMgKVxuICAgICAgICB9O1xuICAgIH1cbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQWN0aXZhdG9yc1xyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ0luc3RhbmNlQWN0aXZhdG9yIGltcGxlbWVudHMgQ29yZS5JSW5zdGFuY2VBY3RpdmF0b3JcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fbGltaXRUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCBpbXBsZW1lbnRhdGlvblR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9saW1pdFR5cGUgPSBpbXBsZW1lbnRhdGlvblR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBBY3RpdmF0ZUluc3RhbmNlKGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0LCBwYXJhbWV0ZXJzPzogQ29yZS5DUGFyYW1ldGVyW10pOiBvYmplY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR2V0TGltaXRUeXBlKCk6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2xpbWl0VHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERpc3Bvc2UoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkFjdGl2YXRvcnMuRGVsZWdhdGVcclxue1xyXG4gICAgZXhwb3J0IHR5cGUgVUFjdGl2YXRpb25GdW5jdGlvbjwgVCBleHRlbmRzIG9iamVjdCA9IG9iamVjdCA+ID0gKCBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCwgcGFyYW1ldGVyczogUmVhZG9ubHlBcnJheTxDb3JlLkNQYXJhbWV0ZXI+ICkgPT4gVDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ0RlbGVnYXRlQWN0aXZhdG9yIGV4dGVuZHMgQ0luc3RhbmNlQWN0aXZhdG9yIGltcGxlbWVudHMgQ29yZS5JSW5zdGFuY2VBY3RpdmF0b3JcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fYWN0aXZhdGlvbkZ1bmN0aW9uOiBTeXN0ZW0uVENhbGxiYWNrPCBVQWN0aXZhdGlvbkZ1bmN0aW9uID47XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggaW1wbGVtZW50YXRpb25UeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSwgYWN0aXZhdGlvbkZ1bmN0aW9uOiBTeXN0ZW0uVENhbGxiYWNrT3JGdW5jdGlvbjwgVUFjdGl2YXRpb25GdW5jdGlvbiA+IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCBpbXBsZW1lbnRhdGlvblR5cGUgKTtcclxuICAgICAgICAgICAgaWYgKCB0eXBlb2YoIGFjdGl2YXRpb25GdW5jdGlvbiApID09IFwiZnVuY3Rpb25cIiApXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fYWN0aXZhdGlvbkZ1bmN0aW9uID0gU3lzdGVtLl9fQ2FsbGJhY2soIGFjdGl2YXRpb25GdW5jdGlvbiApO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fYWN0aXZhdGlvbkZ1bmN0aW9uID0gYWN0aXZhdGlvbkZ1bmN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEFjdGl2YXRlSW5zdGFuY2UoY29udGV4dDogSUNvbXBvbmVudENvbnRleHQsIHBhcmFtZXRlcnM/OiBDb3JlLkNQYXJhbWV0ZXJbXSk6IG9iamVjdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMubV9hY3RpdmF0aW9uRnVuY3Rpb24uRXhlY3V0ZSggY29udGV4dCwgcGFyYW1ldGVycyApO1xyXG4gICAgICAgICAgICBpZiAoIHJlc3VsdCA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIi4uLi5cIiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkFjdGl2YXRvcnMuUHJvdmlkZWRJbnN0YW5jZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1Byb3ZpZGVkSW5zdGFuY2VBY3RpdmF0b3IgZXh0ZW5kcyBDSW5zdGFuY2VBY3RpdmF0b3JcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIG1fYWN0aXZlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9pbnN0YW5jZTogb2JqZWN0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBpbnN0YW5jZTogb2JqZWN0IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCBpbnN0YW5jZS5HZXRUeXBlKCkgKTtcclxuICAgICAgICAgICAgdGhpcy5tX2luc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQWN0aXZhdGVJbnN0YW5jZSggY29udGV4dDogSUNvbXBvbmVudENvbnRleHQsIHBhcmFtZXRlcnM/OiBDb3JlLkNQYXJhbWV0ZXJbXSApOiBvYmplY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX2FjdGl2ZWQgPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubV9hY3RpdmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1faW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkFjdGl2YXRvcnMuUmVmbGVjdGlvblxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0F1dG93aXJpbmdQYXJhbWV0ZXIgZXh0ZW5kcyBDb3JlLkNQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQ2FuU3VwcGx5VmFsdWUoXHJcbiAgICAgICAgICAgIHBpOiBTeXN0ZW0uUmVmbGVjdGlvbi5DUGFyYW1ldGVySW5mbyxcclxuICAgICAgICAgICAgY29udGV4dDogSUNvbXBvbmVudENvbnRleHRcclxuICAgICAgICApOiB7IHJldDogYm9vbGVhbiwgdmFsdWVQcm92aWRlcj86ICgpID0+IG9iamVjdCB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmVnaXN0cmF0aW9uOiBDb3JlLklDb21wb25lbnRSZWdpc3RyYXRpb247XHJcbiAgICAgICAgICAgIGlmICggcGkuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIENJbmplY3RMaWZldGltZVNjb3BlQXR0cmlidXRlICkgKSAhPSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uID0gY29udGV4dC5Db21wb25lbnRSZWdpc3RyeS5HZXRSZWdpc3RyYXRpb24oIG5ldyBDb3JlLkNMaWZldGltZVNjb3BlU2VydmljZSgpICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHJlZ2lzdHJhdGlvbiA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyByZXQ6IGZhbHNlIH07XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICByZXQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVQcm92aWRlcjogKCkgPT4gY29udGV4dC5SZXNvbHZlQ29tcG9uZW50KCByZWdpc3RyYXRpb24sIFtdIClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggcGkuUGFyYW1ldGVyVHlwZSA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHJldDogZmFsc2UgfTtcclxuXHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvbiA9IGNvbnRleHQuQ29tcG9uZW50UmVnaXN0cnkuR2V0UmVnaXN0cmF0aW9uKCBuZXcgQ29yZS5DVHlwZWRTZXJ2aWNlKCBwaS5QYXJhbWV0ZXJUeXBlICkgKTtcclxuICAgICAgICAgICAgaWYgKCByZWdpc3RyYXRpb24gPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyByZXQ6IGZhbHNlIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmV0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVQcm92aWRlcjogKCkgPT4gY29udGV4dC5SZXNvbHZlQ29tcG9uZW50KCByZWdpc3RyYXRpb24sIFtdIClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQWN0aXZhdG9ycy5SZWZsZWN0aW9uXHJcbntcclxuICAgIGNsYXNzIENUeXBlQ29tcGFyZXIgaW1wbGVtZW50cyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRXF1YWxpdHlDb21wYXJlcjwgU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBFcXVhbHMoIGE6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlLCBiOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5Jc0VxdWl2YWxlbnRUbyggYiApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ0F1dG93aXJpbmdQcm9wZXJ0eUluamVjdG9yXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgSW5qZWN0YWJsZVByb3BlcnRpZXM6IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklEaWN0aW9uYXJ5PCBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSwgU3lzdGVtLlJlZmxlY3Rpb24uQ1Byb3BlcnR5SW5mb1tdID4gPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuQ0RpY3Rpb25hcnkoIHsgY29tcGFyZXI6IG5ldyBDVHlwZUNvbXBhcmVyKCkgfSApO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gY29udGV4dCBcclxuICAgICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgXHJcbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5U2VsZWN0b3IgXHJcbiAgICAgICAgICogQHBhcmFtIHBhcmFtZXRlcnMg5rOo5oSP77yM5q2k5aSE55qE5Y+C5pWw5YiX6KGo5pivUmVzb2x2ZeaXtuS8oOWFpeeahFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSW5qZWN0UHJvcGVydGllcyhcclxuICAgICAgICAgICAgY29udGV4dDogSUNvbXBvbmVudENvbnRleHQsXHJcbiAgICAgICAgICAgIGluc3RhbmNlOiBvYmplY3QsXHJcbiAgICAgICAgICAgIHByb3BlcnR5U2VsZWN0b3I6IENvcmUuSVByb3BlcnR5U2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IFJlYWRvbmx5QXJyYXk8Q29yZS5DUGFyYW1ldGVyPiApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHlwZSA9IGluc3RhbmNlLkdldFR5cGUoKTtcclxuICAgICAgICAgICAgbGV0IGluamVjdGFibGVQcm9wZXJ0aWVzID0gdGhpcy5JbmplY3RhYmxlUHJvcGVydGllcy5HZXQoIHR5cGUgKTtcclxuICAgICAgICAgICAgaWYgKCBpbmplY3RhYmxlUHJvcGVydGllcyA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5JbmplY3RhYmxlUHJvcGVydGllcy5BZGQoIHR5cGUsIGluamVjdGFibGVQcm9wZXJ0aWVzID0gdGhpcy5HZXRJbmplY3RhYmxlUHJvcGVydGllcyggdHlwZSApICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGluamVjdGFibGVQcm9wZXJ0aWVzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eUluZm8gPSBpbmplY3RhYmxlUHJvcGVydGllc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eVNlbGVjdG9yLkluamVjdFByb3BlcnR5KCBwcm9wZXJ0eUluZm8sIGluc3RhbmNlICkgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxldCBzZXRQYXJhbWV0ZXIgPSBwcm9wZXJ0eUluZm8uR2V0U2V0TWV0aG9kKCkuR2V0UGFyYW1ldGVycygpWyAwIF07XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgcGFyYW1ldGVyID0gcGFyYW1ldGVycy5GaXJzdE9yRGVmYXVsdCggKCBwICkgPT4gcC5DYW5TdXBwbHlWYWx1ZSggc2V0UGFyYW1ldGVyLCBjb250ZXh0ICkucmV0ID09IHRydWUgKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmICggcGFyYW1ldGVyICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZWdpc3RyYXRpb246IENvcmUuSUNvbXBvbmVudFJlZ2lzdHJhdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHByb3BlcnR5SW5mby5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQ0luamVjdExpZmV0aW1lU2NvcGVBdHRyaWJ1dGUgKSApICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbiA9IGNvbnRleHQuQ29tcG9uZW50UmVnaXN0cnkuR2V0UmVnaXN0cmF0aW9uKCBuZXcgQ29yZS5DTGlmZXRpbWVTY29wZVNlcnZpY2UoKSApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggcmVnaXN0cmF0aW9uID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIGBDYW4ndCByZXNvbHZlIHRoZSBpbnN0YW5jZSBvZiB0eXBlIChJTGlmZXRpbWVTY29wZSlgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5VHlwZSA9IHByb3BlcnR5SW5mby5Qcm9wZXJ0eVR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eVR5cGUgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5U2VydmljZSA9IG5ldyBDb3JlLkNUeXBlZFNlcnZpY2UoIHByb3BlcnR5VHlwZSApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbiA9IGNvbnRleHQuQ29tcG9uZW50UmVnaXN0cnkuR2V0UmVnaXN0cmF0aW9uKCBwcm9wZXJ0eVNlcnZpY2UgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHJlZ2lzdHJhdGlvbiA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5VmFsdWU6IG9iamVjdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gY29udGV4dC5SZXNvbHZlQ29tcG9uZW50KCByZWdpc3RyYXRpb24sIFtdICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoIGUgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGUgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHByb3BlcnR5SW5mby5TZXRWYWx1ZSggaW5zdGFuY2UsIHByb3BlcnR5VmFsdWUgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgR2V0SW5qZWN0YWJsZVByb3BlcnRpZXMoIGluc3RhbmNlVHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKTogU3lzdGVtLlJlZmxlY3Rpb24uQ1Byb3BlcnR5SW5mb1tdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaW5qZWN0YWJsZVByb3BlcnRpZXMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHByb3BlcnRpZXMgPSBpbnN0YW5jZVR5cGUuR2V0UHJvcGVydGllcygpO1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBwaSA9IHByb3BlcnRpZXNbIGkgXTtcclxuICAgICAgICAgICAgICAgIGlmICggcGkuQ2FuV3JpdGUgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgaW5qZWN0YWJsZVByb3BlcnRpZXMucHVzaCggcGkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaW5qZWN0YWJsZVByb3BlcnRpZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3ByaXZhdGUgc3RhdGljIEluc3RhbmNlVHlwZU5hbWVkUGFyYW1ldGVyOiBzdHJpbmcgPSBcIkF1dG9mYWMuQXV0b3dpcmluZ1Byb3BlcnR5SW5qZWN0b3IuSW5zdGFuY2VUeXBlXCI7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5BY3RpdmF0b3JzLlJlZmxlY3Rpb25cclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENDb25zdHJ1Y3RvclBhcmFtZXRlckJpbmRpbmdcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIG1fY2FuSW5zdGFudGlhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2NpOiBTeXN0ZW0uUmVmbGVjdGlvbi5DQ29uc3RydWN0b3JJbmZvID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX3ZhbHVlUmV0cmlldmVyczogKCgpID0+IG9iamVjdClbXSA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9maXJzdE5vbkJpbmRhYmxlUGFyYW1ldGVyOiBTeXN0ZW0uUmVmbGVjdGlvbi5DUGFyYW1ldGVySW5mbyA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggY2k6IFN5c3RlbS5SZWZsZWN0aW9uLkNDb25zdHJ1Y3RvckluZm8sIGF2YWlsYWJsZVBhcmFtZXRlcnM6IENvcmUuQ1BhcmFtZXRlcltdLCBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fY2kgPSBjaTtcclxuICAgICAgICAgICAgdGhpcy5tX2Nhbkluc3RhbnRpYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgcGFyYW1ldGVycyA9IGNpLkdldFBhcmFtZXRlcnMoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubV92YWx1ZVJldHJpZXZlcnMgPSBBcnJheSggcGFyYW1ldGVycy5sZW5ndGggKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGkgPSBwYXJhbWV0ZXJzWyBpIF07XHJcbiAgICAgICAgICAgICAgICBsZXQgZm91bmRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yICggbGV0IGogPSAwOyBqIDwgYXZhaWxhYmxlUGFyYW1ldGVycy5sZW5ndGg7IGogKysgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbSA9IGF2YWlsYWJsZVBhcmFtZXRlcnNbIGogXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FuU3VwcGx5VmFsdWUgPSBwYXJhbS5DYW5TdXBwbHlWYWx1ZSggcGksIGNvbnRleHQgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGNhblN1cHBseVZhbHVlLnJldCA9PSB0cnVlIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubV92YWx1ZVJldHJpZXZlcnNbIGkgXSA9IGNhblN1cHBseVZhbHVlLnZhbHVlUHJvdmlkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBmb3VuZFZhbHVlID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fY2FuSW5zdGFudGlhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fZmlyc3ROb25CaW5kYWJsZVBhcmFtZXRlciA9IHBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSW5zdGFudGlhdGUoKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuQ2FuSW5zdGFudGlhdGUgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsdWVzOiBvYmplY3RbXSA9IEFycmF5KCB0aGlzLm1fdmFsdWVSZXRyaWV2ZXJzLmxlbmd0aCApO1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLm1fdmFsdWVSZXRyaWV2ZXJzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBtX3ZhbHVlUmV0cmlldmVyVGVtcCA9IHRoaXMubV92YWx1ZVJldHJpZXZlcnNbIGkgXTtcclxuICAgICAgICAgICAgICAgIGlmICggbV92YWx1ZVJldHJpZXZlclRlbXAgPT0gbnVsbCB8fCBtX3ZhbHVlUmV0cmlldmVyVGVtcCA9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzWyBpIF0gPSBtX3ZhbHVlUmV0cmlldmVyVGVtcCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9jaS5JbnZva2UoIC4uLnZhbHVlcyApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoICggZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQ2FuSW5zdGFudGlhdGUoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9jYW5JbnN0YW50aWF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQWN0aXZhdG9ycy5SZWZsZWN0aW9uXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDRGVmYXVsdFZhbHVlUGFyYW1ldGVyIGV4dGVuZHMgQ29yZS5DUGFyYW1ldGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIENhblN1cHBseVZhbHVlKHBpOiBTeXN0ZW0uUmVmbGVjdGlvbi5DUGFyYW1ldGVySW5mbywgY29udGV4dDogSUNvbXBvbmVudENvbnRleHQpOiB7IHJldDogYm9vbGVhbjsgdmFsdWVQcm92aWRlcj86ICgpID0+IG9iamVjdDsgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJldDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlUHJvdmlkZXI6ICgpID0+IG51bGxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcHVibGljIENhblN1cHBseVZhbHVlKFxyXG4gICAgICAgIC8vICAgICBwaTogU3lzdGVtLlJlZmxlY3Rpb24uQ1BhcmFtZXRlckluZm8sXHJcbiAgICAgICAgLy8gICAgIGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0LFxyXG4gICAgICAgIC8vICAgICB2YWx1ZVByb3ZpZGVyOiBTeXN0ZW0uT3V0UGFyYW1ldGVyPCgpID0+IG9iamVjdD5cclxuICAgICAgICAvLyApOiBib29sZWFuXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICB2YWx1ZVByb3ZpZGVyLl9fb3V0ID0gKCkgPT4gbnVsbDtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9DSW5zdGFuY2VBY3RpdmF0b3IudHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQWN0aXZhdG9ycy5SZWZsZWN0aW9uXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogVXNlcyByZWZsZWN0aW9uIHRvIGFjdGl2YXRlIGluc3RhbmNlcyBvZiBhIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDUmVmbGVjdGlvbkFjdGl2YXRvciBleHRlbmRzIENJbnN0YW5jZUFjdGl2YXRvclxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9pbXBsZW1lbnRhdGlvblR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2NvbmZpZ3VyZWRQcm9wZXJ0aWVzOiBSZWFkb25seUFycmF5PCBDb3JlLkNQYXJhbWV0ZXIgPiA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9kZWZhdWx0UGFyYW1ldGVyczogUmVhZG9ubHlBcnJheTwgQ29yZS5DUGFyYW1ldGVyID4gPSBudWxsIDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2NvbnN0cnVjdG9yOiBTeXN0ZW0uUmVmbGVjdGlvbi5DQ29uc3RydWN0b3JJbmZvID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIGltcGxlbWVudGF0aW9uVHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyZWRQYXJhbWV0ZXJzOiBSZWFkb25seUFycmF5PCBDb3JlLkNQYXJhbWV0ZXIgPixcclxuICAgICAgICAgICAgY29uZmlndXJlZFByb3BlcnRpZXM6IFJlYWRvbmx5QXJyYXk8IENvcmUuQ1BhcmFtZXRlciA+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoIGltcGxlbWVudGF0aW9uVHlwZSApO1xyXG4gICAgICAgICAgICB0aGlzLm1faW1wbGVtZW50YXRpb25UeXBlID0gaW1wbGVtZW50YXRpb25UeXBlO1xyXG4gICAgICAgICAgICB0aGlzLm1fY29uc3RydWN0b3IgPSB0aGlzLm1faW1wbGVtZW50YXRpb25UeXBlLkdldENvbnN0cnVjdG9yKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1fZGVmYXVsdFBhcmFtZXRlcnMgPSBjb25maWd1cmVkUGFyYW1ldGVycy5jb25jYXQoIFtcclxuICAgICAgICAgICAgICAgIG5ldyBDQXV0b3dpcmluZ1BhcmFtZXRlcigpLFxyXG4gICAgICAgICAgICAgICAgbmV3IENEZWZhdWx0VmFsdWVQYXJhbWV0ZXIoKVxyXG4gICAgICAgICAgICBdICk7XHJcbiAgICAgICAgICAgIHRoaXMubV9jb25maWd1cmVkUHJvcGVydGllcyA9IGNvbmZpZ3VyZWRQcm9wZXJ0aWVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQWN0aXZhdGVJbnN0YW5jZShjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCwgcGFyYW1ldGVycz86IGFueVtdKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYmluZGluZyA9IHRoaXMuR2V0Q29uc3RydWN0b3JCaW5kaW5nKCBjb250ZXh0LCBwYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgICAgIGlmICggYmluZGluZy5DYW5JbnN0YW50aWF0ZSA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBpbnN0YW5jZSA9IGJpbmRpbmcuSW5zdGFudGlhdGUoKTtcclxuICAgICAgICAgICAgLy8gbGV0IGluc3RhbmNlOiBvYmplY3QgPSBudWxsO1xyXG4gICAgICAgICAgICAvLyBsZXQgY29uc3RydWN0b3JQYXJhbWV0ZXJzID0gdGhpcy5tX2NvbnN0cnVjdG9yLkdldFBhcmFtZXRlcnMoKTtcclxuICAgICAgICAgICAgLy8gaWYgKCBjb25zdHJ1Y3RvclBhcmFtZXRlcnMubGVuZ3RoID4gMCApXHJcbiAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgLy8gICAgIGxldCB2YWx1ZXMgPSBBcnJheTwgb2JqZWN0ID4oIGNvbnN0cnVjdG9yUGFyYW1ldGVycy5sZW5ndGggKTtcclxuICAgICAgICAgICAgLy8gICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGNvbnN0cnVjdG9yUGFyYW1ldGVycy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICAvLyAgICAge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGNwID0gY29uc3RydWN0b3JQYXJhbWV0ZXJzWyBpIF07XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV0IHR5cGVBdHRyaWJ1dGUgPSBjcC5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggU3lzdGVtLlJlZmxlY3Rpb24uQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUgKSApO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlmICggdHlwZUF0dHJpYnV0ZSA9PSBudWxsIClcclxuICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlc1sgaSBdID0gbnVsbDtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGVsc2VcclxuICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAvLyAgICAgaW5zdGFuY2UgPSB0aGlzLm1fY29uc3RydWN0b3IuSW52b2tlKCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgdGhpcy5JbmplY3RQcm9wZXJ0aWVzKCBpbnN0YW5jZSwgY29udGV4dCApO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEaXNwb3NlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBHZXRDb25zdHJ1Y3RvckJpbmRpbmcoIGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0LCBwYXJhbWV0ZXJzOiBDb3JlLkNQYXJhbWV0ZXJbXSApOiBDQ29uc3RydWN0b3JQYXJhbWV0ZXJCaW5kaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcHJpb3JpdGlzZWRQYXJhbWV0ZXJzOiBDb3JlLkNQYXJhbWV0ZXJbXSA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoIHBhcmFtZXRlcnMgIT0gbnVsbCAmJiBwYXJhbWV0ZXJzLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdGlzZWRQYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fZGVmYXVsdFBhcmFtZXRlcnMgIT0gbnVsbCAmJiB0aGlzLm1fZGVmYXVsdFBhcmFtZXRlcnMubGVuZ3RoID4gMCApXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0aXNlZFBhcmFtZXRlcnMgPSBwcmlvcml0aXNlZFBhcmFtZXRlcnMuY29uY2F0KCB0aGlzLm1fZGVmYXVsdFBhcmFtZXRlcnMgKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBiaW5kaW5nID0gbmV3IENDb25zdHJ1Y3RvclBhcmFtZXRlckJpbmRpbmcoIHRoaXMubV9jb25zdHJ1Y3RvciwgcHJpb3JpdGlzZWRQYXJhbWV0ZXJzLCBjb250ZXh0ICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYmluZGluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgSW5qZWN0UHJvcGVydGllcyggaW5zdGFuY2U6IG9iamVjdCwgY29udGV4dDogSUNvbXBvbmVudENvbnRleHQgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fY29uZmlndXJlZFByb3BlcnRpZXMubGVuZ3RoID09IDAgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFjdHVhbFByb3BlcnRpZXMgPSBpbnN0YW5jZS5HZXRUeXBlKCkuR2V0UHJvcGVydGllcygpLldoZXJlKCAoIHBpICkgPT4gcGkuQ2FuV3JpdGUgKTtcclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5tX2NvbmZpZ3VyZWRQcm9wZXJ0aWVzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb25maWd1cmVkUHJvcGVydHkgPSB0aGlzLm1fY29uZmlndXJlZFByb3BlcnRpZXNbIGkgXTtcclxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGFjdHVhbFByb3BlcnRpZXMubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlJbmZvID0gYWN0dWFsUHJvcGVydGllc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggcHJvcGVydHlJbmZvLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBDSW5qZWN0TGlmZXRpbWVTY29wZUF0dHJpYnV0ZSApICkgIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmVkUHJvcGVydHkgPSBuZXcgQ0F1dG93aXJpbmdQYXJhbWV0ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNldHRlciA9IHByb3BlcnR5SW5mby5HZXRTZXRNZXRob2QoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FuU3VwcGx5VmFsdWUgPSBjb25maWd1cmVkUHJvcGVydHkuQ2FuU3VwcGx5VmFsdWUoIHNldHRlci5HZXRQYXJhbWV0ZXJzKClbIDAgXSwgY29udGV4dCApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggY2FuU3VwcGx5VmFsdWUucmV0ID09IHRydWUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsUHJvcGVydGllcy5zcGxpY2UoIGksIDEgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlJbmZvLlNldFZhbHVlKCBpbnN0YW5jZSwgY2FuU3VwcGx5VmFsdWUudmFsdWVQcm92aWRlcigpICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkJ1aWxkZXJcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgbV9pbXBsZW1lbnRhdGlvblR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX2NvbnN0cnVjdG9yOiBTeXN0ZW0uUmVmbGVjdGlvbi5DQ29uc3RydWN0b3JJbmZvID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2NvbmZpZ3VyZWRQYXJhbWV0ZXJzOiBDb3JlLkNQYXJhbWV0ZXJbXSA9IFtdO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fY29uZmlndXJlZFByb3BlcnRpZXM6IENvcmUuQ1BhcmFtZXRlcltdID0gW107XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggaW1wbGVtZW50ZXI6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9pbXBsZW1lbnRhdGlvblR5cGUgPSBpbXBsZW1lbnRlcjtcclxuICAgICAgICAgICAgdGhpcy5tX2NvbnN0cnVjdG9yID0gdGhpcy5tX2ltcGxlbWVudGF0aW9uVHlwZS5HZXRDb25zdHJ1Y3RvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBJbXBsZW1lbnRhdGlvblR5cGUoKTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1faW1wbGVtZW50YXRpb25UeXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBDb25maWd1cmVkUGFyYW1ldGVycygpOiBDb3JlLkNQYXJhbWV0ZXJbXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9jb25maWd1cmVkUGFyYW1ldGVycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQ29uZmlndXJlZFByb3BlcnRpZXMoKTogQ29yZS5DUGFyYW1ldGVyW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY29uZmlndXJlZFByb3BlcnRpZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YS50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5CdWlsZGVyXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogUmVmbGVjdGlvbiBhY3RpdmF0b3IgZGF0YSBmb3IgY29uY3JldGUgdHlwZXMuXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDQ29uY3JldGVSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YSBleHRlbmRzIENSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YSBpbXBsZW1lbnRzIElDb25jcmV0ZUFjdGl2YXRvckRhdGEsIElBY3RpdmF0b3JEYXRhXHJcbiAgICB7XHJcblxyXG4gICAgICAgIC8vcHJpdmF0ZSByZWFkb25seSBtX2FjdGl2YXRvcjogQ29yZS5JSW5zdGFuY2VBY3RpdmF0b3IgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGltcGxlbWVudGVyOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggaW1wbGVtZW50ZXIgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldFR5cGVzKCk6ICggdDogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKSA9PiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB0aGlzLkltcGxlbWVudGF0aW9uVHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldEFjdGl2YXRvcigpOiBDb3JlLklJbnN0YW5jZUFjdGl2YXRvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBY3RpdmF0b3JzLlJlZmxlY3Rpb24uQ1JlZmxlY3Rpb25BY3RpdmF0b3IoXHJcbiAgICAgICAgICAgICAgICB0aGlzLkltcGxlbWVudGF0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29uZmlndXJlZFBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbmZpZ3VyZWRQcm9wZXJ0aWVzICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEaXNwb3NlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5CdWlsZGVyXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDRGVmZXJyZWRDYWxsYmFja1xyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9jYWxsYmFjazogU3lzdGVtLkFjdGlvbjwgQ29yZS5JQ29tcG9uZW50UmVnaXN0cnkgPiA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggY2FsbGJhY2s6IFN5c3RlbS5BY3Rpb248IENvcmUuSUNvbXBvbmVudFJlZ2lzdHJ5ID4gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2NhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IENhbGxiYWNrKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY2FsbGJhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkJ1aWxkZXJcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdCBleHRlbmRzIG9iamVjdD4gaW1wbGVtZW50cyBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fcmVnaXN0cmF0aW9uRGF0YTogQ1JlZ2lzdHJhdGlvbkRhdGEgPSBudWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBtX2FjdGl2YXRvckRhdGE6IElBY3RpdmF0b3JEYXRhID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9yZWdpc3RyYXRpb25TdHlsZTogYW55ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBzZXJ2aWNlOiBDb3JlLkNTZXJ2aWNlLCBhY3RpdmF0b3JEYXRhOiBJQWN0aXZhdG9yRGF0YSwgc3R5bGU6IGFueSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YSA9IG5ldyBDUmVnaXN0cmF0aW9uRGF0YSggc2VydmljZSApO1xyXG4gICAgICAgICAgICB0aGlzLm1fYWN0aXZhdG9yRGF0YSA9IGFjdGl2YXRvckRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25TdHlsZSA9IHN0eWxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBSZWdpc3RlckRhdGEoKTogQ1JlZ2lzdHJhdGlvbkRhdGFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQWN0aXZhdG9yRGF0YSgpOiBJQWN0aXZhdG9yRGF0YVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9hY3RpdmF0b3JEYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR2V0QWN0aXZhdG9yRGF0YUV4PFQgZXh0ZW5kcyBvYmplY3QgPiggdDogU3lzdGVtLlJlZmxlY3Rpb24uVHlwZUNvbnN0cnVjdG9yPCBUID4gKTogVFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fYWN0aXZhdG9yRGF0YSBpbnN0YW5jZW9mIHQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX2FjdGl2YXRvckRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFJlZ2lzdHJhdGlvblN0eWxlKCk6IGFueVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9yZWdpc3RyYXRpb25TdHlsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE5hbWVkPFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0Pih0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTxUU2VydmljZT4sIG5hbWU6IHN0cmluZyk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25EYXRhLkFkZFNlcnZpY2UoIG5ldyBDb3JlLkNLZXllZFNlcnZpY2UoIG5hbWUsIHR5cGUgKSApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEtleWVkPFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0PiggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8VFNlcnZpY2U+LCBrZXk6IGFueSApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5BZGRTZXJ2aWNlKCBuZXcgQ29yZS5DS2V5ZWRTZXJ2aWNlKCBrZXksIHR5cGUgKSApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEtleWVkTWFwcGluZzwgVFNlcnZpY2UgZXh0ZW5kcyBvYmplY3QgPiggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IFRTZXJ2aWNlID4sIHNlcnZpY2VzS2V5TWFwcGluZzogKCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApID0+IGFueSApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV9hY3RpdmF0b3JEYXRhIGluc3RhbmNlb2YgQ1NjYW5uaW5nQWN0aXZhdG9yRGF0YSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9hY3RpdmF0b3JEYXRhLkZpbHRlcnMucHVzaCggdCA9PiB0LklzSW5oZXJpdEZyb20oIHR5cGUgKSApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX0FzMiggdCA9PiBuZXcgQ29yZS5DS2V5ZWRTZXJ2aWNlKCBzZXJ2aWNlc0tleU1hcHBpbmcoIHQgKSwgdHlwZSApICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIHRoaXMubV9hY3RpdmF0b3JEYXRhIGluc3RhbmNlb2YgQ0NvbmNyZXRlUmVmbGVjdGlvbkFjdGl2YXRvckRhdGEgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5BZGRTZXJ2aWNlKCBuZXcgQ29yZS5DS2V5ZWRTZXJ2aWNlKCBzZXJ2aWNlc0tleU1hcHBpbmcoIHRoaXMubV9hY3RpdmF0b3JEYXRhLkltcGxlbWVudGF0aW9uVHlwZSApLCB0aGlzLm1fYWN0aXZhdG9yRGF0YS5JbXBsZW1lbnRhdGlvblR5cGUgKSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQXM8VFNlcnZpY2UgZXh0ZW5kcyBvYmplY3Q+KHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPFRTZXJ2aWNlPik6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25EYXRhLkFkZFNlcnZpY2UoIG5ldyBDb3JlLkNUeXBlZFNlcnZpY2UoIHR5cGUgKSApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFzRXgoIHNlcnZpY2VzOiBDb3JlLkNTZXJ2aWNlW10gKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3JlZ2lzdHJhdGlvbkRhdGEuQWRkU2VydmljZXMoIHNlcnZpY2VzICk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfX0FzMSggc2VydmljZU1hcHBpbmc6ICggdDogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKSA9PiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX0FzMiggdCA9PiBuZXcgQ29yZS5DVHlwZWRTZXJ2aWNlKCBzZXJ2aWNlTWFwcGluZyggdCApICkgKTsgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX19BczIoIHNlcnZpY2VNYXBwaW5nOiAoIHQ6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICkgPT4gQ29yZS5DU2VydmljZSApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX0FzMyggdCA9PiBbIHNlcnZpY2VNYXBwaW5nKCB0ICkgXSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfX0FzMyggc2VydmljZU1hcHBpbmc6ICggdDogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKSA9PiBDb3JlLkNTZXJ2aWNlW10gKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEZlYXR1cmVzLlNjYW5uaW5nLkNTY2FubmluZ1JlZ2lzdHJhdGlvbkV4dGVuc2lvbnMuQXMoIHRoaXMsIHNlcnZpY2VNYXBwaW5nICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBBc1NlbGYoKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fYWN0aXZhdG9yRGF0YSBpbnN0YW5jZW9mIENTY2FubmluZ0FjdGl2YXRvckRhdGEgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fQXMxKCB0ID0+IHQgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICggdGhpcy5tX2FjdGl2YXRvckRhdGEgaW5zdGFuY2VvZiBDQ29uY3JldGVSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25EYXRhLkFkZFNlcnZpY2UoIG5ldyBDb3JlLkNUeXBlZFNlcnZpY2UoIHRoaXMubV9hY3RpdmF0b3JEYXRhLkltcGxlbWVudGF0aW9uVHlwZSApICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9yZXR1cm4gdGhpcy5fX0FzKCB0aGlzLm1fYWN0aXZhdG9yRGF0YS5HZXRUeXBlcygpICk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFdoZXJlKCBwcmVkaWNhdGU6ICggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKSA9PiBib29sZWFuICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggKCB0aGlzLm1fYWN0aXZhdG9yRGF0YSBpbnN0YW5jZW9mIEJ1aWxkZXIuQ1NjYW5uaW5nQWN0aXZhdG9yRGF0YSApID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG5cclxuICAgICAgICAgICAgKDxCdWlsZGVyLkNTY2FubmluZ0FjdGl2YXRvckRhdGE+dGhpcy5tX2FjdGl2YXRvckRhdGEpLkZpbHRlcnMucHVzaCggcHJlZGljYXRlICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFNpbmdsZUluc3RhbmNlKCk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25EYXRhLlNoYXJpbmcgPSBDb3JlLlVJbnN0YW5jZVNoYXJpbmcuU2hhcmVkO1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5MaWZldGltZSA9IG5ldyBDb3JlLkxpZmV0aW1lLkNSb290U2NvcGVMaWZldGltZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEluc3RhbmNlUGVyRGVwZW5kZW5jeSgpOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5TaGFyaW5nID0gQ29yZS5VSW5zdGFuY2VTaGFyaW5nLk5vbmU7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25EYXRhLkxpZmV0aW1lID0gbmV3IENvcmUuTGlmZXRpbWUuQ0N1cnJlbnRTY29wZUxpZmV0aW1lKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgSW5zdGFuY2VQZXJMaWZldGltZVNjb3BlKCk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25EYXRhLlNoYXJpbmcgPSBDb3JlLlVJbnN0YW5jZVNoYXJpbmcuU2hhcmVkO1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5MaWZldGltZSA9IG5ldyBDb3JlLkxpZmV0aW1lLkNDdXJyZW50U2NvcGVMaWZldGltZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEluc3RhbmNlUGVyTWF0Y2hpbmdMaWZldGltZVNjb3BlKCAuLi5zY29wZVRhZzogVUxpZmV0aW1lU2NvcGVUYWdUeXBlW10gKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3JlZ2lzdHJhdGlvbkRhdGEuU2hhcmluZyA9IENvcmUuVUluc3RhbmNlU2hhcmluZy5TaGFyZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25EYXRhLkxpZmV0aW1lID0gbmV3IENvcmUuTGlmZXRpbWUuQ01hdGNoaW5nU2NvcGVMaWZldGltZSggLi4uc2NvcGVUYWcgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBQcm9wZXJ0aWVzQXV0b3dpcmVkKCBwcm9wZXJ0eVNlbGVjdG9yPzogQ29yZS5JUHJvcGVydHlTZWxlY3RvciApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHByb3BlcnR5U2VsZWN0b3IgPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlTZWxlY3RvciA9IG5ldyBDb3JlLkNEZWZhdWx0UHJvcGVydHlTZWxlY3RvciggZmFsc2UgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5BY3RpdmF0aW5nSGFuZGxlcnMuQWRkKCAoIHNlbmRlciwgZSApID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEFjdGl2YXRvcnMuUmVmbGVjdGlvbi5DQXV0b3dpcmluZ1Byb3BlcnR5SW5qZWN0b3IuSW5qZWN0UHJvcGVydGllcyggZS5Db250ZXh0LCBlLkluc3RhbmNlLCBwcm9wZXJ0eVNlbGVjdG9yLCBlLlBhcmFtZXRlcnMgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFdpdGhQYXJhbWV0ZXIoIHBhcmFtZXRlcjogQ29yZS5DUGFyYW1ldGVyICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmF0b3JEYXRhID0gdGhpcy5HZXRBY3RpdmF0b3JEYXRhRXgoIENSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YSApO1xyXG4gICAgICAgICAgICBpZiAoIGFjdGl2YXRvckRhdGEgIT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2YXRvckRhdGEuQ29uZmlndXJlZFBhcmFtZXRlcnMucHVzaCggcGFyYW1ldGVyICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgV2l0aFBhcmFtZXRlcnMoIHBhcmFtZXRlcnM6IFJlYWRvbmx5QXJyYXk8IENvcmUuQ1BhcmFtZXRlciA+ICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHAgPSBwYXJhbWV0ZXJzWyBpIF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLldpdGhQYXJhbWV0ZXIoIHAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBXaXRoUHJvcGVydHkoIHBhcmFtZXRlcjogQ29yZS5DUGFyYW1ldGVyICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmF0b3JEYXRhID0gdGhpcy5HZXRBY3RpdmF0b3JEYXRhRXgoIENSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YSApO1xyXG4gICAgICAgICAgICBpZiAoIGFjdGl2YXRvckRhdGEgIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICBhY3RpdmF0b3JEYXRhLkNvbmZpZ3VyZWRQcm9wZXJ0aWVzLnB1c2goIHBhcmFtZXRlciApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBXaXRoUHJvcGVydGllcyggcGFyYW1ldGVyczogUmVhZG9ubHlBcnJheTwgQ29yZS5DUGFyYW1ldGVyID4gKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcCA9IHBhcmFtZXRlcnNbIGkgXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuV2l0aFByb3BlcnR5KCBwICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPbkFjdGl2YXRpbmcoIGNhbGxiYWNrOiBDb3JlLlVDYWxsYmFja0FjdGl2YXRpbmc8VExpbWl0PiApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5BY3RpdmF0aW5nSGFuZGxlcnMuQWRkKCAocywgZSkgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBuZXcgQ29yZS5DQWN0aXZhdGluZ0V2ZW50QXJnczxUTGltaXQ+KGUuQ29udGV4dCwgZS5SZWdpc3RyYXRpb24sIGUuUGFyYW1ldGVycywgPFRMaW1pdD5lLkluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mKCBjYWxsYmFjayApID09IFwiZnVuY3Rpb25cIiApXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soIGFyZ3MgKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5FeGVjdXRlKCBhcmdzICk7XHJcbiAgICAgICAgICAgICAgICBlLkluc3RhbmNlID0gYXJncy5JbnN0YW5jZTtcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9uQWN0aXZhdGVkKCk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5CdWlsZGVyXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDUmVnaXN0cmF0aW9uQnVpbGRlckhlbHBlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgUmVnaXN0ZXJTaW5nbGVDb21wb25lbnQoXHJcbiAgICAgICAgICAgIGNyOiBDb3JlLklDb21wb25lbnRSZWdpc3RyeSxcclxuICAgICAgICAgICAgcmI6IElSZWdpc3RyYXRpb25CdWlsZGVyPG9iamVjdD4gKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlZ2lzdHJhdGlvbiA9IHRoaXMuQ3JlYXRlUmVnaXN0cmF0aW9uRm9yQnVpbGRlciggcmIgKTtcclxuICAgICAgICAgICAgY3IuUmVnaXN0ZXIoIHJlZ2lzdHJhdGlvbiwgZmFsc2UgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlUmVnaXN0cmF0aW9uRm9yQnVpbGRlcihcclxuICAgICAgICAgICAgcmI6IElSZWdpc3RyYXRpb25CdWlsZGVyPG9iamVjdD4gKTogQ29yZS5JQ29tcG9uZW50UmVnaXN0cmF0aW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5DcmVhdGVSZWdpc3RyYXRpb24oXHJcbiAgICAgICAgICAgICAgICByYi5SZWdpc3RyYXRpb25TdHlsZS5JRCxcclxuICAgICAgICAgICAgICAgIHJiLlJlZ2lzdGVyRGF0YSxcclxuICAgICAgICAgICAgICAgIHJiLkFjdGl2YXRvckRhdGEuR2V0QWN0aXZhdG9yKCksXHJcbiAgICAgICAgICAgICAgICByYi5SZWdpc3RlckRhdGEuR2V0U2VydmljZXMoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDcmVhdGVSZWdpc3RyYXRpb24oXHJcbiAgICAgICAgICAgIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGRhdGE6IENSZWdpc3RyYXRpb25EYXRhLFxyXG4gICAgICAgICAgICBhY3RpdmF0b3I6IENvcmUuSUluc3RhbmNlQWN0aXZhdG9yLFxyXG4gICAgICAgICAgICBzZXJ2aWNlczogQXJyYXk8IENvcmUuQ1NlcnZpY2UgPixcclxuICAgICAgICAgICAgdGFyZ2V0PzogQ29yZS5JQ29tcG9uZW50UmVnaXN0cmF0aW9uICk6IENvcmUuSUNvbXBvbmVudFJlZ2lzdHJhdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGxpbWl0VHlwZSA9IGFjdGl2YXRvci5HZXRMaW1pdFR5cGUoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHNlcnZpY2VzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCB0cyA9IHNlcnZpY2VzWyBpIF07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0cy5oYXNPd25Qcm9wZXJ0eSggXCJHZXRTZXJ2aWNlVHlwZVwiICkgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoIGxpbWl0VHlwZS5Jc0luaGVyaXRGcm9tKCAoKDxDb3JlLklTZXJ2aWNlV2l0aFR5cGU+PGFueT50cykpLkdldFNlcnZpY2VUeXBlKCkgKSA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIlwiICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCByZWdpc3RyYXRpb24gPSBuZXcgQ29yZS5SZWdpc3RyYXRpb24uQ0NvbXBvbmVudFJlZ2lzdHJhdGlvbihcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZhdG9yLFxyXG4gICAgICAgICAgICAgICAgZGF0YS5MaWZldGltZSxcclxuICAgICAgICAgICAgICAgIGRhdGEuU2hhcmluZyxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBkYXRhLkdldFNlcnZpY2VzKCksXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICByZWdpc3RyYXRpb24uQWN0aXZhdGluZy5BZGQoIGRhdGEuQWN0aXZhdGluZ0hhbmRsZXJzLmNhbGxiYWNrcyApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHJlZ2lzdHJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5CdWlsZGVyXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDUmVnaXN0cmF0aW9uRGF0YVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgbV9kZWZhdWx0U2VydmljZTogQ29yZS5DU2VydmljZSA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSBtX2RlZmF1bHRTZXJ2aWNlT3ZlcnJpZGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgcHJpdmF0ZSBtX3NlcnZpY2VzOiBBcnJheTwgQ29yZS5DU2VydmljZSA+ID0gQXJyYXkoKTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX3NoYXJpbmc6IENvcmUuVUluc3RhbmNlU2hhcmluZyA9IENvcmUuVUluc3RhbmNlU2hhcmluZy5Ob25lO1xyXG4gICAgICAgIHByaXZhdGUgbV9saWZldGltZTogQ29yZS5JQ29tcG9uZW50TGlmZXRpbWUgPSBuZXcgQ29yZS5MaWZldGltZS5DQ3VycmVudFNjb3BlTGlmZXRpbWUoKTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX2RlZmVycmVkQ2FsbGJhY2s6IENEZWZlcnJlZENhbGxiYWNrID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX2FjdGl2YXRpbmdIYW5kbGVyczogU3lzdGVtLlRDYWxsYmFja0FycmF5PCAoIHNlbmRlcjogYW55LCBlOiBDb3JlLkNBY3RpdmF0aW5nRXZlbnRBcmdzPG9iamVjdD4gKSA9PiB2b2lkID4gPSBuZXcgU3lzdGVtLlRDYWxsYmFja0FycmF5KCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggZGVmYXVsdFNlcnZpY2U6IENvcmUuQ1NlcnZpY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2RlZmF1bHRTZXJ2aWNlID0gZGVmYXVsdFNlcnZpY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQWRkU2VydmljZSggc2VydmljZTogQ29yZS5DU2VydmljZSApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fZGVmYXVsdFNlcnZpY2VPdmVycmlkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1fc2VydmljZXMucHVzaCggc2VydmljZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEFkZFNlcnZpY2VzKCBzZXJ2aWNlczogQ29yZS5DU2VydmljZVtdICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9kZWZhdWx0U2VydmljZU92ZXJyaWRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9zZXJ2aWNlcyA9IHRoaXMubV9zZXJ2aWNlcy5jb25jYXQoIHNlcnZpY2VzICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0U2VydmljZXMoKTogQXJyYXk8IENvcmUuQ1NlcnZpY2UgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fZGVmYXVsdFNlcnZpY2VPdmVycmlkZW4gPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX3NlcnZpY2VzO1xyXG4gICAgICAgICAgICByZXR1cm4gKCB0aGlzLm1fc2VydmljZXMubGVuZ3RoID09IDAgKSA/IFsgdGhpcy5tX2RlZmF1bHRTZXJ2aWNlIF06IHRoaXMubV9zZXJ2aWNlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgTGlmZXRpbWUoIHZhbHVlOiBDb3JlLklDb21wb25lbnRMaWZldGltZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fbGlmZXRpbWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgTGlmZXRpbWUoKTogQ29yZS5JQ29tcG9uZW50TGlmZXRpbWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fbGlmZXRpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IFNoYXJpbmcoIHZhbHVlOiBDb3JlLlVJbnN0YW5jZVNoYXJpbmcgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3NoYXJpbmcgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgU2hhcmluZygpOiBDb3JlLlVJbnN0YW5jZVNoYXJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fc2hhcmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgRGVmZXJyZWRDYWxsYmFjayggdmFsdWU6IENEZWZlcnJlZENhbGxiYWNrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9kZWZlcnJlZENhbGxiYWNrID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IERlZmVycmVkQ2FsbGJhY2soKTogQ0RlZmVycmVkQ2FsbGJhY2tcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fZGVmZXJyZWRDYWxsYmFjaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQWN0aXZhdGluZ0hhbmRsZXJzKCk6IFN5c3RlbS5UQ2FsbGJhY2tBcnJheTwgKCBzZW5kZXI6IGFueSwgZTogQ29yZS5DQWN0aXZhdGluZ0V2ZW50QXJnczxvYmplY3Q+ICkgPT4gdm9pZCA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2FjdGl2YXRpbmdIYW5kbGVycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb3B5RnJvbSggdGhhdDogQ1JlZ2lzdHJhdGlvbkRhdGEsIGluY2x1ZGVEZWZhdWx0U2VydmljZTogYm9vbGVhbiApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIGluY2x1ZGVEZWZhdWx0U2VydmljZSA9PSB0cnVlIClcclxuICAgICAgICAgICAgICAgIHRoaXMubV9kZWZhdWx0U2VydmljZSA9IHRoYXQubV9kZWZhdWx0U2VydmljZTtcclxuICAgICAgICAgICAgdGhpcy5tX2RlZmF1bHRTZXJ2aWNlT3ZlcnJpZGVuID0gdGhhdC5tX2RlZmF1bHRTZXJ2aWNlT3ZlcnJpZGVuO1xyXG4gICAgICAgICAgICB0aGlzLm1fbGlmZXRpbWUgPSB0aGF0Lm1fbGlmZXRpbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9zaGFyaW5nID0gdGhhdC5tX3NoYXJpbmc7XHJcbiAgICAgICAgICAgIHRoaXMubV9zZXJ2aWNlcyA9IHRoaXMuQ29weUFycmF5KCB0aGF0Lm1fc2VydmljZXMgKTtcclxuICAgICAgICAgICAgdGhpcy5tX2FjdGl2YXRpbmdIYW5kbGVycyA9IHRoYXQubV9hY3RpdmF0aW5nSGFuZGxlcnMuQ29weSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBDb3B5QXJyYXk8VD4oIHNyYzogVFtdICk6IFRbXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRlc3QgPSBbXTtcclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gc3JjWyBpIF07XHJcbiAgICAgICAgICAgICAgICBkZXN0LnB1c2goIHRlbXAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkJ1aWxkZXJcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENTY2FubmluZ0FjdGl2YXRvckRhdGEgZXh0ZW5kcyBDUmVmbGVjdGlvbkFjdGl2YXRvckRhdGEgaW1wbGVtZW50cyBJQWN0aXZhdG9yRGF0YVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9maWx0ZXI6ICgoIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICkgPT4gYm9vbGVhbilbXSA9IFtdO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fY29uZmlndXJhdGlvbkFjdGlvbnM6ICggKHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlLCByYjogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8b2JqZWN0PiApID0+IHZvaWQgKVtdID0gW107XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBPYmplY3QgKSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR2V0VHlwZXMoKTogKCB0OiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApID0+IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldEFjdGl2YXRvcigpOiBDb3JlLklJbnN0YW5jZUFjdGl2YXRvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IEZpbHRlcnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9maWx0ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IENvbmZpZ3VyYXRpb25BY3Rpb25zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY29uZmlndXJhdGlvbkFjdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkJ1aWxkZXJcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENTaW1wbGVBY3RpdmF0b3JEYXRhIGltcGxlbWVudHMgSUFjdGl2YXRvckRhdGEsIElDb25jcmV0ZUFjdGl2YXRvckRhdGFcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fYWN0aXZhdG9yOiBDb3JlLklJbnN0YW5jZUFjdGl2YXRvciA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggYWN0aXZhdG9yOiBDb3JlLklJbnN0YW5jZUFjdGl2YXRvciApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fYWN0aXZhdG9yID0gYWN0aXZhdG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFR5cGVzKCk6ICggdDogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKSA9PiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHRoaXMubV9hY3RpdmF0b3IuR2V0TGltaXRUeXBlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0QWN0aXZhdG9yKCk6IENvcmUuSUluc3RhbmNlQWN0aXZhdG9yIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9hY3RpdmF0b3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQnVpbGRlclxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1NpbmdsZVJlZ2lzdHJhdGlvblN0eWxlXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2lkOiBzdHJpbmcgPSBDb3JlLkdlbklEKCk7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9wcmVzZXJ2ZURlZmF1bHRzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgSUQoKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2lkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCBQcmVzZXJ2ZURlZmF1bHRzKCB2YWx1ZTogYm9vbGVhbiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fcHJlc2VydmVEZWZhdWx0cyA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBQcmVzZXJ2ZURlZmF1bHRzKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcHJlc2VydmVEZWZhdWx0cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkJ1aWxkZXJcclxue1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQgZXh0ZW5kcyBvYmplY3Q+XHJcbiAgICB7XHJcbiAgICAgICAgcmVhZG9ubHkgUmVnaXN0ZXJEYXRhOiBDUmVnaXN0cmF0aW9uRGF0YTtcclxuXHJcbiAgICAgICAgcmVhZG9ubHkgQWN0aXZhdG9yRGF0YTogSUFjdGl2YXRvckRhdGE7XHJcblxyXG4gICAgICAgIHJlYWRvbmx5IFJlZ2lzdHJhdGlvblN0eWxlOiBhbnk7XHJcblxyXG4gICAgICAgIE5hbWVkPCBUU2VydmljZSBleHRlbmRzIG9iamVjdCA+KCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVFNlcnZpY2UgPiwgbmFtZTogc3RyaW5nICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD47XHJcblxyXG4gICAgICAgIEtleWVkPCBUU2VydmljZSBleHRlbmRzIG9iamVjdCA+KCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVFNlcnZpY2UgPiwga2V5OiBhbnkgKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PjtcclxuXHJcbiAgICAgICAgS2V5ZWRNYXBwaW5nPCBUU2VydmljZSBleHRlbmRzIG9iamVjdCA+KCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVFNlcnZpY2UgPiwgc2VydmljZXNLZXlNYXBwaW5nOiAoIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICkgPT4gYW55ICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD47XHJcblxyXG4gICAgICAgIEFzPCBUU2VydmljZSBleHRlbmRzIG9iamVjdCA+KCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVFNlcnZpY2UgPiApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+O1xyXG5cclxuICAgICAgICBBc0V4KCBzZXJ2aWNlczogQ29yZS5DU2VydmljZVtdICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD47XHJcblxyXG4gICAgICAgIEFzU2VsZigpOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+O1xyXG5cclxuICAgICAgICBXaGVyZSggcHJlZGljYXRlOiAoIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICkgPT4gYm9vbGVhbiApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+O1xyXG5cclxuICAgICAgICBTaW5nbGVJbnN0YW5jZSgpOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+O1xyXG5cclxuICAgICAgICBJbnN0YW5jZVBlckRlcGVuZGVuY3koKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PjtcclxuXHJcbiAgICAgICAgSW5zdGFuY2VQZXJMaWZldGltZVNjb3BlKCk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD47XHJcblxyXG4gICAgICAgIEluc3RhbmNlUGVyTWF0Y2hpbmdMaWZldGltZVNjb3BlKCBzY29wZVRhZzogVUxpZmV0aW1lU2NvcGVUYWdUeXBlICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD47XHJcblxyXG4gICAgICAgIFByb3BlcnRpZXNBdXRvd2lyZWQoIHByb3BlcnR5U2VsZWN0b3I/OiBDb3JlLklQcm9wZXJ0eVNlbGVjdG9yLCBhbGxvd0NpcmN1bGFyRGVwZW5kZW5jaWVzPzogYm9vbGVhbiApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+O1xyXG5cclxuICAgICAgICBXaXRoUGFyYW1ldGVyKCBwYXJhbWV0ZXI6IENvcmUuQ1BhcmFtZXRlciApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+O1xyXG5cclxuICAgICAgICBXaXRoUGFyYW1ldGVycyggcGFyYW1ldGVyczogUmVhZG9ubHlBcnJheTwgQ29yZS5DUGFyYW1ldGVyID4gKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PjtcclxuXHJcbiAgICAgICAgV2l0aFByb3BlcnR5KCBwYXJhbWV0ZXI6IENvcmUuQ1BhcmFtZXRlciApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+O1xyXG5cclxuICAgICAgICBXaXRoUHJvcGVydGllcyggcGFyYW1ldGVyczogUmVhZG9ubHlBcnJheTwgQ29yZS5DUGFyYW1ldGVyID4gKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PjtcclxuXHJcbiAgICAgICAgT25BY3RpdmF0aW5nKCBjYWxsYmFjazogQ29yZS5VQ2FsbGJhY2tBY3RpdmF0aW5nPFRMaW1pdD4gKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PjtcclxuXHJcbiAgICAgICAgT25BY3RpdmF0ZWQoKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PjtcclxuICAgIH07XHJcbn1cclxuXHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDQWN0aXZhdGluZ0V2ZW50QXJnczwgVCA+IGltcGxlbWVudHMgSUFjdGl2YXRpbmdFdmVudEFyZ3M8IFQgPlxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgbV9pbnN0YW5jZTogVCA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9jb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9yZWdpc3RyYXRpb246IElDb21wb25lbnRSZWdpc3RyYXRpb24gPSBudWxsO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fcGFyYW1ldGVyczogUmVhZG9ubHlBcnJheTwgQ1BhcmFtZXRlciA+ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCxcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uLFxyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzOiBSZWFkb25seUFycmF5PCBDUGFyYW1ldGVyID4sXHJcbiAgICAgICAgICAgIGluc3RhbmNlOiBUIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICAgICAgdGhpcy5tX3JlZ2lzdHJhdGlvbiA9IHJlZ2lzdHJhdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5tX3BhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xyXG4gICAgICAgICAgICB0aGlzLm1faW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBSZXBsYWNlSW5zdGFuY2UoIGluc3RhbmNlOiBvYmplY3QgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IENvbnRleHQoKTogSUNvbXBvbmVudENvbnRleHRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY29udGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgUmVnaXN0cmF0aW9uKCk6IElDb21wb25lbnRSZWdpc3RyYXRpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcmVnaXN0cmF0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBQYXJhbWV0ZXJzKCk6IFJlYWRvbmx5QXJyYXk8IENQYXJhbWV0ZXIgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9wYXJhbWV0ZXJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBJbnN0YW5jZSgpOiBUXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2luc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCBJbnN0YW5jZSggdmFsdWU6IFQgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB2YWx1ZSA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCBcIlwiICk7XHJcbiAgICAgICAgICAgIHRoaXMubV9pbnN0YW5jZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDQ29udGFpbmVyIGltcGxlbWVudHMgSUNvbnRhaW5lclxyXG4gICAge1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fcm9vdExpZmV0aW1lU2NvcGU6IElMaWZldGltZVNjb3BlID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fY29tcG9uZW50UmVnaXN0cnk6IElDb21wb25lbnRSZWdpc3RyeSA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50UmVnaXN0cnkgPSBuZXcgUmVnaXN0cmF0aW9uLkNDb21wb25lbnRSZWdpc3RyeSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50UmVnaXN0cnkuUmVnaXN0ZXIoIG5ldyBSZWdpc3RyYXRpb24uQ0NvbXBvbmVudFJlZ2lzdHJhdGlvbihcclxuICAgICAgICAgICAgICAgIExpZmV0aW1lLkNMaWZldGltZVNjb3BlLlNlbGZSZWdpc3RyYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5ldyBBY3RpdmF0b3JzLkRlbGVnYXRlLkNEZWxlZ2F0ZUFjdGl2YXRvciggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBPYmplY3QgKSwgKCkgPT4geyB0aHJvdyBuZXcgRXJyb3IoKTsgfSApLFxyXG4gICAgICAgICAgICAgICAgbmV3IExpZmV0aW1lLkNDdXJyZW50U2NvcGVMaWZldGltZSgpLFxyXG4gICAgICAgICAgICAgICAgVUluc3RhbmNlU2hhcmluZy5TaGFyZWQsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgWyBuZXcgQ0xpZmV0aW1lU2NvcGVTZXJ2aWNlKCkgXSxcclxuICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9yb290TGlmZXRpbWVTY29wZSA9IG5ldyBMaWZldGltZS5DTGlmZXRpbWVTY29wZSggdGhpcy5tX2NvbXBvbmVudFJlZ2lzdHJ5LCBudWxsLCBudWxsICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXRUYWcoKTogVUxpZmV0aW1lU2NvcGVUYWdUeXBlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEJlZ2luTGlmZXRpbWVTY29wZSh0YWc/OiBVTGlmZXRpbWVTY29wZVRhZ1R5cGUpOiBJTGlmZXRpbWVTY29wZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcm9vdExpZmV0aW1lU2NvcGUuQmVnaW5MaWZldGltZVNjb3BlKCB0YWcgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5tX3Jvb3RMaWZldGltZVNjb3BlLkRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQ29tcG9uZW50UmVnaXN0cnkoKTogQ29yZS5JQ29tcG9uZW50UmVnaXN0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY29tcG9uZW50UmVnaXN0cnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSZXNvbHZlQ29tcG9uZW50KHJlZ2lzdHJhdGlvbjogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiwgcGFyYW1ldGVyczogQ1BhcmFtZXRlcltdKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3Jvb3RMaWZldGltZVNjb3BlLlJlc29sdmVDb21wb25lbnQoIHJlZ2lzdHJhdGlvbiwgcGFyYW1ldGVycyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmVzb2x2ZTxUU2VydmljZSBleHRlbmRzIG9iamVjdD4odHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8VFNlcnZpY2U+LCAuLi5wYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10pOiBUU2VydmljZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9yb290TGlmZXRpbWVTY29wZS5SZXNvbHZlKCB0eXBlLCAuLi5wYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSZXNvbHZlTmFtZWQ8VFNlcnZpY2UgZXh0ZW5kcyBvYmplY3Q+KCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTxUU2VydmljZT4sIG5hbWU6IHN0cmluZywgLi4ucGFyYW1ldGVyczogQ1BhcmFtZXRlcltdICk6IFRTZXJ2aWNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3Jvb3RMaWZldGltZVNjb3BlLlJlc29sdmVOYW1lZCggdHlwZSwgbmFtZSwgLi4ucGFyYW1ldGVycyApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBSZXNvbHZlS2V5ZWQ8VFNlcnZpY2UgZXh0ZW5kcyBvYmplY3QsIFRLZXk+KHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPFRTZXJ2aWNlPiwga2V5OiBUS2V5LCAuLi5wYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10pOiBUU2VydmljZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9yb290TGlmZXRpbWVTY29wZS5SZXNvbHZlS2V5ZWQoIHR5cGUsIGtleSwgLi4ucGFyYW1ldGVycyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRyeVJlc29sdmVLZXllZDxUU2VydmljZSBleHRlbmRzIG9iamVjdCwgVEtleT4odHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8VFNlcnZpY2U+LCBrZXk6IFRLZXksIC4uLnBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSk6IFRTZXJ2aWNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3Jvb3RMaWZldGltZVNjb3BlLlRyeVJlc29sdmVLZXllZCggdHlwZSwga2V5LCAuLi5wYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0RGlzcG9zZXIoKTogSURpc3Bvc2VyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3Jvb3RMaWZldGltZVNjb3BlLkdldERpc3Bvc2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0RlZmF1bHRQcm9wZXJ0eVNlbGVjdG9yIGltcGxlbWVudHMgSVByb3BlcnR5U2VsZWN0b3JcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9wcmVzZXJ2ZVNldFZhbHVlczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHByZXNlcnZlU2V0VmFsdWVzPzogYm9vbGVhbiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fcHJlc2VydmVTZXRWYWx1ZXMgPSAoIHByZXNlcnZlU2V0VmFsdWVzID09IHRydWUgKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFByb3ZpZGVzIGRlZmF1bHQgZmlsdGVyaW5nIHRvIGRldGVybWluZSBpZiBwcm9wZXJ0eSBzaG91bGQgYmUgaW5qZWN0ZWQgYnkgcmVqZWN0aW5nXHJcbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5SW5mbyBcclxuICAgICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIEluamVjdFByb3BlcnR5KCBwcm9wZXJ0eUluZm86IFN5c3RlbS5SZWZsZWN0aW9uLkNQcm9wZXJ0eUluZm8sIGluc3RhbmNlOiBvYmplY3QgKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eUluZm8uQ2FuV3JpdGUgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX3ByZXNlcnZlU2V0VmFsdWVzID09IHRydWUgJiYgcHJvcGVydHlJbmZvLkNhblJlYWQgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHlJbmZvLkdldFZhbHVlKCBpbnN0YW5jZSApID09IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDRGVsZWdhdGVQcm9wZXJ0eVNlbGVjdG9yIGltcGxlbWVudHMgSVByb3BlcnR5U2VsZWN0b3JcclxuICAgIHtcclxuICAgICAgICBJbmplY3RQcm9wZXJ0eSggcHJvcGVydHlJbmZvOiBTeXN0ZW0uUmVmbGVjdGlvbi5DUHJvcGVydHlJbmZvLCBpbnN0YW5jZTogb2JqZWN0ICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0Rpc3Bvc2VyIGltcGxlbWVudHMgSURpc3Bvc2VyXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBtX2l0ZW1zOiBTeXN0ZW0uSURpc3Bvc2FibGVbXSA9IFtdO1xyXG5cclxuICAgICAgICBBZGRJbnN0YW5jZUZvckRpc3Bvc2FsKGluc3RhbmNlOiBTeXN0ZW0uSURpc3Bvc2FibGUpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5tX2l0ZW1zLnB1c2goIGluc3RhbmNlICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIERpc3Bvc2UoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5tX2l0ZW1zLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5tX2l0ZW1zWyBpIF07XHJcbiAgICAgICAgICAgICAgICBpdGVtLkRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1faXRlbXMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDU2VydmljZSBpbXBsZW1lbnRzIFN5c3RlbS5JRXF1YXRhYmxlPCBDU2VydmljZSA+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEVxdWFscyhvdGhlcjogQ1NlcnZpY2UpOiBib29sZWFuO1xyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NTZXJ2aWNlLnRzXCIgLz5cclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENLZXllZFNlcnZpY2UgZXh0ZW5kcyBDU2VydmljZSBpbXBsZW1lbnRzIElTZXJ2aWNlV2l0aFR5cGVcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fc2VydmljZVR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2tleTogYW55ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBzZXJ2aWNlS2V5OiBhbnksIHNlcnZpY2VUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1fa2V5ID0gc2VydmljZUtleTtcclxuICAgICAgICAgICAgdGhpcy5tX3NlcnZpY2VUeXBlID0gc2VydmljZVR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXRTZXJ2aWNlVHlwZSgpOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9zZXJ2aWNlVHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENoYW5nZVR5cGUobmV3VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8b2JqZWN0Pik6IENTZXJ2aWNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBFcXVhbHMoIG90aGVyOiBDS2V5ZWRTZXJ2aWNlICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggb3RoZXIubV9zZXJ2aWNlVHlwZSA9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIG90aGVyLm1fa2V5ID09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkdldFR5cGUoKS5Jc0VxdWl2YWxlbnRUbyggb3RoZXIuR2V0VHlwZSgpICkgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zZXJ2aWNlVHlwZS5Jc0VxdWl2YWxlbnRUbyggb3RoZXIubV9zZXJ2aWNlVHlwZSApICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbXBhcmVLZXlzKCB0aGlzLm1fa2V5LCBvdGhlci5tX2tleSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBDb21wYXJlS2V5cyggazE6IGFueSwgazI6IGFueSApOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIGsxID09PSBrMiApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCAoPFN5c3RlbS5JRXF1YXRhYmxlPGFueT4+azEpLkVxdWFscyAhPSB1bmRlZmluZWQgJiYgKDxTeXN0ZW0uSUVxdWF0YWJsZTxhbnk+PmsyKS5FcXVhbHMgIT0gdW5kZWZpbmVkICYmICg8U3lzdGVtLklFcXVhdGFibGU8YW55Pj5rMSkuRXF1YWxzKCBrMiApIClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENMaWZldGltZVNjb3BlU2VydmljZSBleHRlbmRzIENTZXJ2aWNlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRXF1YWxzKCBvdGhlcjogQ0xpZmV0aW1lU2NvcGVTZXJ2aWNlICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBvdGhlciBpbnN0YW5jZW9mIENMaWZldGltZVNjb3BlU2VydmljZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NDb25zdGFudFBhcmFtZXRlci50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDTmFtZWRQcm9wZXJ0eVBhcmFtZXRlciBleHRlbmRzIENDb25zdGFudFBhcmFtZXRlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nLCB2YWx1ZTogb2JqZWN0IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCB2YWx1ZSwgcGkgPT4gdHJ1ZSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDUmVzb2x2ZWRQYXJhbWV0ZXIgZXh0ZW5kcyBDUGFyYW1ldGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIENhblN1cHBseVZhbHVlKHBpOiBTeXN0ZW0uUmVmbGVjdGlvbi5DUGFyYW1ldGVySW5mbywgY29udGV4dDogSUNvbXBvbmVudENvbnRleHQpOiB7IHJldDogYm9vbGVhbjsgdmFsdWVQcm92aWRlcj86ICgpID0+IG9iamVjdDsgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1NlcnZpY2VFcXVhbGl0eUNvbXBhcmVyIGltcGxlbWVudHMgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVxdWFsaXR5Q29tcGFyZXI8IENTZXJ2aWNlID5cclxuICAgIHtcclxuICAgICAgICBFcXVhbHMoYTogQ1NlcnZpY2UsIGI6IENTZXJ2aWNlKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEuRXF1YWxzKCBiICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENUeXBlZFNlcnZpY2UgZXh0ZW5kcyBDU2VydmljZSBpbXBsZW1lbnRzIElTZXJ2aWNlV2l0aFR5cGVcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fc2VydmljZVR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBzZXJ2aWNlVHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5tX3NlcnZpY2VUeXBlID0gc2VydmljZVR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0U2VydmljZVR5cGUoKTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fc2VydmljZVR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQ2hhbmdlVHlwZSggbmV3VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKTogQ1NlcnZpY2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEVxdWFscyggb3RoZXI6IENUeXBlZFNlcnZpY2UgKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBvdGhlci5tX3NlcnZpY2VUeXBlID09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkdldFR5cGUoKS5Jc0VxdWl2YWxlbnRUbyggb3RoZXIuR2V0VHlwZSgpICkgJiYgdGhpcy5tX3NlcnZpY2VUeXBlLklzRXF1aXZhbGVudFRvKCBvdGhlci5tX3NlcnZpY2VUeXBlICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICB2YXIgZ2VuSUQgPSAwO1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEdlbklEKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGdlbklEICsrO1xyXG4gICAgICAgIHJldHVybiBnZW5JRC50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBlbnVtIFVJbnN0YW5jZVNoYXJpbmdcclxuICAgIHtcclxuICAgICAgICBOb25lLFxyXG4gICAgICAgIFNoYXJlZCxcclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlLkxpZmV0aW1lXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDQ3VycmVudFNjb3BlTGlmZXRpbWUgaW1wbGVtZW50cyBJQ29tcG9uZW50TGlmZXRpbWVcclxuICAgIHtcclxuICAgICAgICBGaW5kU2NvcGUobW9zdE5lc3RlZFZpc2libGVTY29wZTogSVNoYXJpbmdMaWZldGltZVNjb3BlKTogSVNoYXJpbmdMaWZldGltZVNjb3BlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9zdE5lc3RlZFZpc2libGVTY29wZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZS5MaWZldGltZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0xpZmV0aW1lU2NvcGUgaW1wbGVtZW50cyBJU2hhcmluZ0xpZmV0aW1lU2NvcGVcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fY29tcG9uZW50UmVnaXN0cnk6IElDb21wb25lbnRSZWdpc3RyeSA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2xpZmV0aW1lU2NvcGVSb290OiBJU2hhcmluZ0xpZmV0aW1lU2NvcGUgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9saWZldGltZVNjb3BlUGFyZW50OiBJU2hhcmluZ0xpZmV0aW1lU2NvcGUgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV90YWc6IFVMaWZldGltZVNjb3BlVGFnVHlwZSA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2Rpc3Bvc2VyOiBJRGlzcG9zZXIgPSBuZXcgQ0Rpc3Bvc2VyKCk7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9zaGFyZWRJbnN0YW5jZXM6IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklEaWN0aW9uYXJ5PCBzdHJpbmcsIG9iamVjdCA+ID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkNEaWN0aW9uYXJ5KCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU2VsZlJlZ2lzdHJhdGlvbklkID0gQ29yZS5HZW5JRCgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGNvbXBvbmVudFJlZ2lzdHJ5OiBJQ29tcG9uZW50UmVnaXN0cnksIGxpZmV0aW1lU2NvcGVQYXJlbnQ6IENMaWZldGltZVNjb3BlLCB0YWc6IFVMaWZldGltZVNjb3BlVGFnVHlwZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50UmVnaXN0cnkgPSBjb21wb25lbnRSZWdpc3RyeTtcclxuICAgICAgICAgICAgdGhpcy5tX2xpZmV0aW1lU2NvcGVQYXJlbnQgPSBsaWZldGltZVNjb3BlUGFyZW50O1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV9saWZldGltZVNjb3BlUGFyZW50ID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fbGlmZXRpbWVTY29wZVJvb3QgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3RhZyA9IENMaWZldGltZVNjb3BlLlJvb3RUYWc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRhZyA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9saWZldGltZVNjb3BlUm9vdCA9IGxpZmV0aW1lU2NvcGVQYXJlbnQuR2V0Um9vdExpZmV0aW1lU2NvcGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubV90YWcgPSB0YWc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOS/neWtmOiHquW3seeahElEXHJcbiAgICAgICAgICAgIHRoaXMubV9zaGFyZWRJbnN0YW5jZXMuQWRkKCBDTGlmZXRpbWVTY29wZS5TZWxmUmVnaXN0cmF0aW9uSWQsIHRoaXMgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFJvb3RUYWc6IFVMaWZldGltZVNjb3BlVGFnVHlwZSA9IFwicm9vdFwiO1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBNYWtlQW5vbnltb3VzVGFnKCk6IFVMaWZldGltZVNjb3BlVGFnVHlwZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFN5bWJvbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFBhcmVudExpZmV0aW1lU2NvcGUoKTogSVNoYXJpbmdMaWZldGltZVNjb3BlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2xpZmV0aW1lU2NvcGVQYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0Um9vdExpZmV0aW1lU2NvcGUoKTogSVNoYXJpbmdMaWZldGltZVNjb3BlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2xpZmV0aW1lU2NvcGVSb290O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldE9yQ3JlYXRlQW5kU2hhcmUoIGlkOiBzdHJpbmcsIGNyZWF0b3I6IFN5c3RlbS5UQ2FsbGJhY2s8ICgpID0+IG9iamVjdCA+ICk6IG9iamVjdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gdGhpcy5tX3NoYXJlZEluc3RhbmNlcy5HZXQoIGlkICk7XHJcbiAgICAgICAgICAgIGlmICggaW5zdGFuY2UgIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcblxyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IGNyZWF0b3IuRXhlY3V0ZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tX3NoYXJlZEluc3RhbmNlcy5BZGQoIGlkLCBpbnN0YW5jZSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEJlZ2luTGlmZXRpbWVTY29wZSggdGFnPzogVUxpZmV0aW1lU2NvcGVUYWdUeXBlICk6IElMaWZldGltZVNjb3BlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRhZyA9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5CZWdpbkxpZmV0aW1lU2NvcGUoIENMaWZldGltZVNjb3BlLk1ha2VBbm9ueW1vdXNUYWcoKSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLkNoZWNrVGFnSXNVbmlxdWUoIHRhZyApO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNjb3BlID0gbmV3IENMaWZldGltZVNjb3BlKCB0aGlzLm1fY29tcG9uZW50UmVnaXN0cnksIHRoaXMsIHRhZyApO1xyXG4gICAgICAgICAgICByZXR1cm4gc2NvcGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBnZXQgQ29tcG9uZW50UmVnaXN0cnkoKTogSUNvbXBvbmVudFJlZ2lzdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2NvbXBvbmVudFJlZ2lzdHJ5O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBSZXNvbHZlQ29tcG9uZW50KHJlZ2lzdHJhdGlvbjogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiwgcGFyYW1ldGVyczogQ1BhcmFtZXRlcltdKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkNoZWNrTm90RGlzcG9zZWQoKTtcclxuICAgICAgICAgICAgbGV0IG9wZXJhdGlvbiA9IG5ldyBSZXNvbHZpbmcuQ1Jlc29sdmVPcGVyYXRpb24oIHRoaXMgKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wZXJhdGlvbi5FeGVjdXRlKCByZWdpc3RyYXRpb24sIHBhcmFtZXRlcnMgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlc29sdmU8VFNlcnZpY2UgZXh0ZW5kcyBvYmplY3Q+KCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTxUU2VydmljZT4sIC4uLnBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSApOiBUU2VydmljZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJldCA9IHRoaXMuVHJ5UmVzb2x2ZVNlcnZpY2UoIG5ldyBDVHlwZWRTZXJ2aWNlKCB0eXBlICksIHBhcmFtZXRlcnMgKTtcclxuICAgICAgICAgICAgaWYgKCByZXQuc3VjY2VlZCA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggYENhbid0IHJlc29sdmUgaW5zdGFuY2Ugb2YgdHlwZSAoJHt0eXBlLkdldE5pY2tuYW1lKCl9KWAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPFRTZXJ2aWNlPnJldC5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlc29sdmVOYW1lZDxUU2VydmljZSBleHRlbmRzIG9iamVjdD4oIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPFRTZXJ2aWNlPiwgbmFtZTogc3RyaW5nLCAuLi5wYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10gKTogVFNlcnZpY2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSB0aGlzLlRyeVJlc29sdmVTZXJ2aWNlKCBuZXcgQ0tleWVkU2VydmljZSggbmFtZSwgdHlwZSApLCBwYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgICAgIGlmICggcmV0LnN1Y2NlZWQgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPFRTZXJ2aWNlPnJldC5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBSZXNvbHZlS2V5ZWQ8VFNlcnZpY2UgZXh0ZW5kcyBvYmplY3QsIFRLZXk+KCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTxUU2VydmljZT4sIGtleTogVEtleSwgLi4ucGFyYW1ldGVyczogQ1BhcmFtZXRlcltdICk6IFRTZXJ2aWNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmV0ID0gdGhpcy5UcnlSZXNvbHZlU2VydmljZSggbmV3IENLZXllZFNlcnZpY2UoIGtleSwgdHlwZSApLCBwYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgICAgIGlmICggcmV0LnN1Y2NlZWQgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIGBDYW4ndCByZXNvbHZlIGluc3RhbmNlIG9mIHR5cGUgKCR7dHlwZS5HZXROaWNrbmFtZSgpfSkgd2l0aCBrZXk8JHtrZXkudG9TdHJpbmcoKX0+YCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiA8VFNlcnZpY2U+cmV0Lmluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRyeVJlc29sdmVLZXllZDxUU2VydmljZSBleHRlbmRzIG9iamVjdCwgVEtleT4oIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPFRTZXJ2aWNlPiwga2V5OiBUS2V5LCAuLi5wYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10gKTogVFNlcnZpY2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSB0aGlzLlRyeVJlc29sdmVTZXJ2aWNlKCBuZXcgQ0tleWVkU2VydmljZSgga2V5LCB0eXBlICksIHBhcmFtZXRlcnMgKTtcclxuICAgICAgICAgICAgaWYgKCByZXQuc3VjY2VlZCA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiA8VFNlcnZpY2U+cmV0Lmluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBUcnlSZXNvbHZlU2VydmljZSggc2VydmljZTogQ1NlcnZpY2UsIHBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSApOiB7IHN1Y2NlZWQ6IGJvb2xlYW4sIGluc3RhbmNlPzogb2JqZWN0IH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZWdpc3RyYXRpb24gPSB0aGlzLkNvbXBvbmVudFJlZ2lzdHJ5LkdldFJlZ2lzdHJhdGlvbiggc2VydmljZSApO1xyXG4gICAgICAgICAgICBpZiAoIHJlZ2lzdHJhdGlvbiA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZWVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3VjY2VlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlOiB0aGlzLlJlc29sdmVDb21wb25lbnQoIHJlZ2lzdHJhdGlvbiwgcGFyYW1ldGVycyApXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGlzcG9zZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fZGlzcG9zZXIuRGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1fc2hhcmVkSW5zdGFuY2VzLkNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0VGFnKCkgOiBVTGlmZXRpbWVTY29wZVRhZ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fdGFnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBDaGVja1RhZ0lzVW5pcXVlKCB0YWc6IFVMaWZldGltZVNjb3BlVGFnVHlwZSApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc2NvcGVQYXJlbnQ6IElTaGFyaW5nTGlmZXRpbWVTY29wZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIHdoaWxlICggc2NvcGVQYXJlbnQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHNjb3BlUGFyZW50LkdldFRhZygpID09IHRhZyApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIlwiICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzY29wZVBhcmVudCA9IHNjb3BlUGFyZW50LkdldFBhcmVudExpZmV0aW1lU2NvcGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBDaGVja05vdERpc3Bvc2VkKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0RGlzcG9zZXIoKTogSURpc3Bvc2VyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2Rpc3Bvc2VyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlLkxpZmV0aW1lXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDTWF0Y2hpbmdTY29wZUxpZmV0aW1lIGltcGxlbWVudHMgSUNvbXBvbmVudExpZmV0aW1lXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3RhZ1RvTWF0Y2g6IFVMaWZldGltZVNjb3BlVGFnVHlwZVtdID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCAuLi5zY29wZVRhZzogVUxpZmV0aW1lU2NvcGVUYWdUeXBlW10gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3RhZ1RvTWF0Y2ggPSBzY29wZVRhZztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgRmluZFNjb3BlKG1vc3ROZXN0ZWRWaXNpYmxlU2NvcGU6IElTaGFyaW5nTGlmZXRpbWVTY29wZSk6IElTaGFyaW5nTGlmZXRpbWVTY29wZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG5leHQgPSBtb3N0TmVzdGVkVmlzaWJsZVNjb3BlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIG5leHQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMubV90YWdUb01hdGNoLmluZGV4T2YoIG5leHQuR2V0VGFnKCkgKSA+PSAwIClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcclxuICAgICAgICAgICAgICAgIG5leHQgPSBuZXh0LkdldFBhcmVudExpZmV0aW1lU2NvcGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZS5MaWZldGltZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1Jvb3RTY29wZUxpZmV0aW1lIGltcGxlbWVudHMgSUNvbXBvbmVudExpZmV0aW1lXHJcbiAgICB7XHJcbiAgICAgICAgRmluZFNjb3BlKG1vc3ROZXN0ZWRWaXNpYmxlU2NvcGU6IElTaGFyaW5nTGlmZXRpbWVTY29wZSk6IElTaGFyaW5nTGlmZXRpbWVTY29wZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vc3ROZXN0ZWRWaXNpYmxlU2NvcGUuR2V0Um9vdExpZmV0aW1lU2NvcGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJcclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmUuUmVnaXN0cmF0aW9uXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDQ29tcG9uZW50UmVnaXN0cmF0aW9uIGltcGxlbWVudHMgSUNvbXBvbmVudFJlZ2lzdHJhdGlvblxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgbV9pZDogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgbV9hY3RpdmF0b3I6IElJbnN0YW5jZUFjdGl2YXRvcjtcclxuICAgICAgICBwcml2YXRlIG1fbGlmZXRpbWU6IElDb21wb25lbnRMaWZldGltZTtcclxuICAgICAgICBwcml2YXRlIG1fc2hhcmluZzogVUluc3RhbmNlU2hhcmluZztcclxuICAgICAgICBwcml2YXRlIG1fb3duZXJzaGlwOiBhbnk7XHJcbiAgICAgICAgcHJpdmF0ZSBtX3NlcnZpY2VzOiBSZWFkb25seUFycmF5PCBDU2VydmljZSA+O1xyXG4gICAgICAgIHByaXZhdGUgbV9tZXRhZGF0YTogeyBbIGtleTogc3RyaW5nIF06IG9iamVjdCB9O1xyXG4gICAgICAgIHByaXZhdGUgbV90YXJnZXQ6IElDb21wb25lbnRSZWdpc3RyYXRpb247XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9hY3RpdmF0aW5nSGFuZGxlcnM6IFN5c3RlbS5UQ2FsbGJhY2tBcnJheTwgKCBzZW5kZXI6IGFueSwgZTogQ29yZS5JQWN0aXZhdGluZ0V2ZW50QXJnczxvYmplY3Q+ICkgPT4gdm9pZCA+ID0gbmV3IFN5c3RlbS5UQ2FsbGJhY2tBcnJheSgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGFjdGl2YXRvcjogSUluc3RhbmNlQWN0aXZhdG9yLFxyXG4gICAgICAgICAgICBsaWZldGltZTogSUNvbXBvbmVudExpZmV0aW1lLFxyXG4gICAgICAgICAgICBzaGFyaW5nOiBVSW5zdGFuY2VTaGFyaW5nLFxyXG4gICAgICAgICAgICBvd25lcnNoaXA6IGFueSxcclxuICAgICAgICAgICAgc2VydmljZXM6IFJlYWRvbmx5QXJyYXk8IENTZXJ2aWNlID4sXHJcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7IFsga2V5OiBzdHJpbmcgXTogb2JqZWN0IH0sXHJcbiAgICAgICAgICAgIHRhcmdldD86IElDb21wb25lbnRSZWdpc3RyYXRpb24gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2lkID0gaWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9hY3RpdmF0b3IgPSBhY3RpdmF0b3I7XHJcbiAgICAgICAgICAgIHRoaXMubV9saWZldGltZSA9IGxpZmV0aW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fc2hhcmluZyA9IHNoYXJpbmc7XHJcbiAgICAgICAgICAgIHRoaXMubV9vd25lcnNoaXAgPSBvd25lcnNoaXA7XHJcbiAgICAgICAgICAgIHRoaXMubV9zZXJ2aWNlcyA9IHNlcnZpY2VzO1xyXG4gICAgICAgICAgICB0aGlzLm1fbWV0YWRhdGEgPSBtZXRhZGF0YTtcclxuICAgICAgICAgICAgdGhpcy5tX3RhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgSUQoKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2lkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBBY3RpdmF0b3IoKTogSUluc3RhbmNlQWN0aXZhdG9yXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2FjdGl2YXRvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgTGlmZXRpbWUoKTogSUNvbXBvbmVudExpZmV0aW1lXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2xpZmV0aW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBTaGFyaW5nKCk6IFVJbnN0YW5jZVNoYXJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fc2hhcmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgU2VydmljZXMoKTogUmVhZG9ubHlBcnJheTwgQ1NlcnZpY2UgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9zZXJ2aWNlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgTWV0YWR0YSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX21ldGFkYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBUYXJnZXQoKTogSUNvbXBvbmVudFJlZ2lzdHJhdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV90YXJnZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFByZXBhcmluZygpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSYWlzZVByZXBhcmluZyhjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCwgcGFyYW1ldGVyczogQXJyYXk8IGFueSA+KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IEFjdGl2YXRpbmcoKTogU3lzdGVtLlRDYWxsYmFja0FycmF5PCAoIHNlbmRlcjogYW55LCBlOiBDb3JlLklBY3RpdmF0aW5nRXZlbnRBcmdzPG9iamVjdD4gKSA9PiB2b2lkID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fYWN0aXZhdGluZ0hhbmRsZXJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFJhaXNlQWN0aXZhdGluZyhjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCwgcGFyYW1ldGVyczogUmVhZG9ubHlBcnJheTwgQ1BhcmFtZXRlciA+LCBpbnN0YW5jZTogb2JqZWN0ICk6IG9iamVjdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGFyZ3MgPSBuZXcgQ0FjdGl2YXRpbmdFdmVudEFyZ3MoIGNvbnRleHQsIHRoaXMsIHBhcmFtZXRlcnMsIGluc3RhbmNlICk7XHJcbiAgICAgICAgICAgIHRoaXMuQWN0aXZhdGluZy5FeGVjdXRlKCB0aGlzLCBhcmdzICk7XHJcbiAgICAgICAgICAgIHJldHVybiBhcmdzLkluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBBY3RpdmF0ZWQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSYWlzZUFjdGl2YXRlZChjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCwgcGFyYW1ldGVyczogUmVhZG9ubHlBcnJheTwgQ1BhcmFtZXRlciA+LCBpbnN0YW5jZTogb2JqZWN0KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEaXNwb3NlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlLlJlZ2lzdHJhdGlvblxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0NvbXBvbmVudFJlZ2lzdHJ5IGltcGxlbWVudHMgSUNvbXBvbmVudFJlZ2lzdHJ5XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3JlZ2lzdHJhdGlvbnM6IElDb21wb25lbnRSZWdpc3RyYXRpb25bXSA9IFtdO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fc2VydmljZUluZm86IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklEaWN0aW9uYXJ5PCBDU2VydmljZSwgQ1NlcnZpY2VSZWdpc3RyYXRpb25JbmZvID4gPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuQ0RpY3Rpb25hcnk8IENTZXJ2aWNlLCBDU2VydmljZVJlZ2lzdHJhdGlvbkluZm8gPiggeyBjb21wYXJlcjogbmV3IENTZXJ2aWNlRXF1YWxpdHlDb21wYXJlcigpIH0gKTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEdldFByb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0ge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgR2V0UmVnaXN0cmF0aW9uKHNlcnZpY2U6IENTZXJ2aWNlKTogSUNvbXBvbmVudFJlZ2lzdHJhdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGluZm8gPSB0aGlzLm1fc2VydmljZUluZm8uR2V0KCBzZXJ2aWNlICk7XHJcbiAgICAgICAgICAgIGlmICggaW5mbyA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50UmVnaXN0cmF0aW9uID0gaW5mby5HZXRSZWdpc3RyYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlZ2lzdHJhdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIElzUmVnaXN0ZXJlZChzZXJ2aWNlOiBDU2VydmljZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlZ2lzdGVyKCByZWdpc3RyYXRpb246IElDb21wb25lbnRSZWdpc3RyYXRpb24sIHByZXNlcnZlRGVmYXVsdHM/OiBib29sZWFuICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuQWRkUmVnaXN0cmF0aW9uKCByZWdpc3RyYXRpb24sIHByZXNlcnZlRGVmYXVsdHMgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldFJlZ2lzdHJhdGlvbnMoKTogQXJyYXk8IElDb21wb25lbnRSZWdpc3RyYXRpb24gPiB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR2V0UmVnaXN0cmF0aW9uc0ZvcihzZXJ2aWNlOiBDU2VydmljZSk6IEFycmF5PCBJQ29tcG9uZW50UmVnaXN0cmF0aW9uID4ge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFkZFJlZ2lzdHJhdGlvblNvdXJjZShzb3VyY2U6IElSZWdpc3RyYXRpb25Tb3VyY2UpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXRSZWdpc3RyYXRpb25Tb3VyY2VzKCk6IEFycmF5PCBJUmVnaXN0cmF0aW9uU291cmNlID4ge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEhhc0xvY2FsQ29tcG9uZW50cygpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgQWRkUmVnaXN0cmF0aW9uKCByZWdpc3RyYXRpb246IElDb21wb25lbnRSZWdpc3RyYXRpb24sIHByZXNlcnZlRGVmYXVsdHM6IGJvb2xlYW4sIG9yaWdpbmF0ZWRGcm9tU291cmNlOiBib29sZWFuID0gZmFsc2UgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHNlcnZpY2VzID0gcmVnaXN0cmF0aW9uLlNlcnZpY2VzO1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBzZXJ2aWNlcy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcyA9IHNlcnZpY2VzWyBpIF07XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5mbyA9IHRoaXMuR2V0U2VydmljZUluZm8oIHMgKTtcclxuICAgICAgICAgICAgICAgIGluZm8uQWRkSW1wbGVtZW50YXRpb24oIHJlZ2lzdHJhdGlvbiwgcHJlc2VydmVEZWZhdWx0cywgb3JpZ2luYXRlZEZyb21Tb3VyY2UgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9ucy5wdXNoKCByZWdpc3RyYXRpb24gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgR2V0U2VydmljZUluZm8oIHNlcnZpY2U6IENTZXJ2aWNlICk6IENTZXJ2aWNlUmVnaXN0cmF0aW9uSW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGluZm8gPSB0aGlzLm1fc2VydmljZUluZm8uR2V0KCBzZXJ2aWNlICk7XHJcbiAgICAgICAgICAgIGlmICggaW5mbyAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmZvO1xyXG4gICAgICAgICAgICBpbmZvID0gbmV3IENTZXJ2aWNlUmVnaXN0cmF0aW9uSW5mbyggc2VydmljZSApO1xyXG4gICAgICAgICAgICB0aGlzLm1fc2VydmljZUluZm8uQWRkKCBzZXJ2aWNlLCBpbmZvICk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlLlJlZ2lzdHJhdGlvblxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1NlcnZpY2VSZWdpc3RyYXRpb25JbmZvXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3NlcnZpY2U6IENTZXJ2aWNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2RlZmF1bHRJbXBsZW1lbnRhdGlvbnM6IElDb21wb25lbnRSZWdpc3RyYXRpb25bXSA9IFtdO1xyXG5cclxuICAgICAgICBwcml2YXRlIG1fcHJlc2VydmVEZWZhdWx0SW1wbGVtZW50YXRpb25zOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uW10gPSBudWxsO1xyXG5cclxuICAgICAgICBwcml2YXRlIG1fc291cmNlSW1wbGVtZW50YXRpb25zOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uW10gPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHNlcnZpY2U6IENTZXJ2aWNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBBZGRJbXBsZW1lbnRhdGlvbiggcmVnaXN0cmF0aW9uOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uLCBwcmVzZXJ2ZURlZmF1bHRzOiBib29sZWFuLCBvcmlnaW5hdGVkRnJvbVNvdXJjZTogYm9vbGVhbiApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHByZXNlcnZlRGVmYXVsdHMgPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggb3JpZ2luYXRlZEZyb21Tb3VyY2UgPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLm1fc291cmNlSW1wbGVtZW50YXRpb25zID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tX3NvdXJjZUltcGxlbWVudGF0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX3NvdXJjZUltcGxlbWVudGF0aW9ucy5wdXNoKCByZWdpc3RyYXRpb24gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMubV9wcmVzZXJ2ZURlZmF1bHRJbXBsZW1lbnRhdGlvbnMgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1fcHJlc2VydmVEZWZhdWx0SW1wbGVtZW50YXRpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fcHJlc2VydmVEZWZhdWx0SW1wbGVtZW50YXRpb25zLnB1c2goIHJlZ2lzdHJhdGlvbiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBvcmlnaW5hdGVkRnJvbVNvdXJjZSA9PSB0cnVlIClcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fZGVmYXVsdEltcGxlbWVudGF0aW9ucy5wdXNoKCByZWdpc3RyYXRpb24gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFJlZ2lzdHJhdGlvbigpOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50UmVnaXN0cmF0aW9uOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX2RlZmF1bHRJbXBsZW1lbnRhdGlvbnMgIT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5tX2RlZmF1bHRJbXBsZW1lbnRhdGlvbnMubGVuZ3RoID4gMCApXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UmVnaXN0cmF0aW9uID0gdGhpcy5tX2RlZmF1bHRJbXBsZW1lbnRhdGlvbnNbIHRoaXMubV9kZWZhdWx0SW1wbGVtZW50YXRpb25zLmxlbmd0aCAtIDEgXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBjb21wb25lbnRSZWdpc3RyYXRpb24gPT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5tX3NvdXJjZUltcGxlbWVudGF0aW9ucyAhPSBudWxsICYmIHRoaXMubV9zb3VyY2VJbXBsZW1lbnRhdGlvbnMubGVuZ3RoID4gMCApXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UmVnaXN0cmF0aW9uID0gdGhpcy5tX3NvdXJjZUltcGxlbWVudGF0aW9uc1sgMCBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGNvbXBvbmVudFJlZ2lzdHJhdGlvbiA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLm1fcHJlc2VydmVEZWZhdWx0SW1wbGVtZW50YXRpb25zICE9IG51bGwgJiYgdGhpcy5tX3ByZXNlcnZlRGVmYXVsdEltcGxlbWVudGF0aW9ucy5sZW5ndGggPiAwIClcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRSZWdpc3RyYXRpb24gPSB0aGlzLm1fcHJlc2VydmVEZWZhdWx0SW1wbGVtZW50YXRpb25zWyAwIF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRSZWdpc3RyYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZS5SZXNvbHZpbmdcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENJbnN0YW5jZUxvb2t1cCBpbXBsZW1lbnRzIElDb21wb25lbnRDb250ZXh0LCBJSW5zdGFuY2VMb29rdXBcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fcmVnaXN0cmF0aW9uOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2NvbnRleHQ6IElSZXNvbHZlT3BlcmF0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2FjdGl2YXRpb25TY29wZTogSVNoYXJpbmdMaWZldGltZVNjb3BlID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3BhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9leGVjdXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwcml2YXRlIG1fbmV3SW5zdGFuY2U6IG9iamVjdCA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uLFxyXG4gICAgICAgICAgICBjb250ZXh0OiBJUmVzb2x2ZU9wZXJhdGlvbixcclxuICAgICAgICAgICAgbW9zdE5lc3RlZFZpc2libGVTY29wZTogSVNoYXJpbmdMaWZldGltZVNjb3BlLFxyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW11cclxuICAgICAgICApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uID0gcmVnaXN0cmF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1fY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9hY3RpdmF0aW9uU2NvcGUgPSB0aGlzLm1fcmVnaXN0cmF0aW9uLkxpZmV0aW1lLkZpbmRTY29wZSggbW9zdE5lc3RlZFZpc2libGVTY29wZSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoICggZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldENvbXBvbmVudFJlZ2lzdHJhdGlvbigpOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9yZWdpc3RyYXRpb25cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldEFjdGl2YXRpb25TY29wZSgpOiBJTGlmZXRpbWVTY29wZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fYWN0aXZhdGlvblNjb3BlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR2V0UGFyYW1ldGVycygpOiBDUGFyYW1ldGVyW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3BhcmFtZXRlcnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IENvbXBvbmVudFJlZ2lzdHJ5KCk6IElDb21wb25lbnRSZWdpc3RyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9hY3RpdmF0aW9uU2NvcGUuQ29tcG9uZW50UmVnaXN0cnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSZXNvbHZlQ29tcG9uZW50KHJlZ2lzdHJhdGlvbjogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiwgcGFyYW1ldGVyczogQ1BhcmFtZXRlcltdKTogb2JqZWN0IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9jb250ZXh0LkdldE9yQ3JlYXRlSW5zdGFuY2UoIHRoaXMubV9hY3RpdmF0aW9uU2NvcGUsIHJlZ2lzdHJhdGlvbiwgcGFyYW1ldGVycyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRXhlY3V0ZSgpOiBvYmplY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX2V4ZWN1dGVkID09IHRydWUgKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1fZXhlY3V0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGluc3RhbmNlOiBhbnkgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fcmVnaXN0cmF0aW9uLlNoYXJpbmcgPT0gVUluc3RhbmNlU2hhcmluZy5Ob25lIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLkFjdGl2YXRlKCB0aGlzLm1fcGFyYW1ldGVycyApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLm1fYWN0aXZhdGlvblNjb3BlLkdldE9yQ3JlYXRlQW5kU2hhcmUoIHRoaXMubV9yZWdpc3RyYXRpb24uSUQsIHRoaXMuX19DYWxsYmFjayggKCkgPT4gdGhpcy5BY3RpdmF0ZSggdGhpcy5tX3BhcmFtZXRlcnMgKSApICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgQWN0aXZhdGUoIHBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSApOiBvYmplY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fbmV3SW5zdGFuY2UgPSB0aGlzLm1fcmVnaXN0cmF0aW9uLkFjdGl2YXRvci5BY3RpdmF0ZUluc3RhbmNlKCB0aGlzLCBwYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZGlzcG9zZVxyXG4gICAgICAgICAgICBpZiAoICg8YW55PnRoaXMubV9uZXdJbnN0YW5jZSlbIFwiRGlzcG9zZVwiIF0gIT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2FjdGl2YXRpb25TY29wZS5HZXREaXNwb3NlcigpLkFkZEluc3RhbmNlRm9yRGlzcG9zYWwoIDxhbnk+dGhpcy5tX25ld0luc3RhbmNlICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubV9uZXdJbnN0YW5jZSA9IHRoaXMubV9yZWdpc3RyYXRpb24uUmFpc2VBY3RpdmF0aW5nKCB0aGlzLCBwYXJhbWV0ZXJzLCB0aGlzLm1fbmV3SW5zdGFuY2UgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fbmV3SW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmUuUmVzb2x2aW5nXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDUmVzb2x2ZU9wZXJhdGlvbiBpbXBsZW1lbnRzIElDb21wb25lbnRDb250ZXh0LCBJUmVzb2x2ZU9wZXJhdGlvblxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9tb3N0TmVzdGVkTGlmZXRpbWVTY29wZTogSVNoYXJpbmdMaWZldGltZVNjb3BlID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBtb3N0TmVzdGVkTGlmZXRpbWVTY29wZTogSVNoYXJpbmdMaWZldGltZVNjb3BlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9tb3N0TmVzdGVkTGlmZXRpbWVTY29wZSA9IG1vc3ROZXN0ZWRMaWZldGltZVNjb3BlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBDb21wb25lbnRSZWdpc3RyeSgpOiBJQ29tcG9uZW50UmVnaXN0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fbW9zdE5lc3RlZExpZmV0aW1lU2NvcGUuQ29tcG9uZW50UmVnaXN0cnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSZXNvbHZlQ29tcG9uZW50KHJlZ2lzdHJhdGlvbjogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiwgcGFyYW1ldGVyczogQ1BhcmFtZXRlcltdKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5HZXRPckNyZWF0ZUluc3RhbmNlKCB0aGlzLm1fbW9zdE5lc3RlZExpZmV0aW1lU2NvcGUsIHJlZ2lzdHJhdGlvbiwgcGFyYW1ldGVycyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRXhlY3V0ZSggcmVnaXN0cmF0aW9uOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uLCBwYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10gKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSBudWxsO1xyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5SZXNvbHZlQ29tcG9uZW50KCByZWdpc3RyYXRpb24sIHBhcmFtZXRlcnMgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoIGUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXRPckNyZWF0ZUluc3RhbmNlKCBjdXJyZW50TGlmZXRpbWVTY29wZTogSVNoYXJpbmdMaWZldGltZVNjb3BlLCByZWdpc3RyYXRpb246IElDb21wb25lbnRSZWdpc3RyYXRpb24sIHBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSApOiBvYmplY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBsb29rdXAgPSBuZXcgQ0luc3RhbmNlTG9va3VwKCByZWdpc3RyYXRpb24sIHRoaXMsIGN1cnJlbnRMaWZldGltZVNjb3BlLCBwYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgICAgIGxldCBpbnN0YW5jZSA9IGxvb2t1cC5FeGVjdXRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUcnlSZXNvbHZlU2VydmljZSggc2VydmljZTogQ1NlcnZpY2UsIHBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSApOiB7IHN1Y2NlZWQ6IGJvb2xlYW4sIGluc3RhbmNlPzogb2JqZWN0IH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBUcnlSZXNvbHZlU2VydmljZSggdGhpcywgc2VydmljZSwgcGFyYW1ldGVycyApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5GZWF0dXJlcy5TY2FubmluZ1xyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1NjYW5uaW5nUmVnaXN0cmF0aW9uRXh0ZW5zaW9uc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgUmVnaXN0ZXJBc3NlbWJseVR5cGVzKCBjb250YWluZXJCdWlsZGVyOiBDQ29udGFpbmVyQnVpbGRlciwgYXNzZW1ibGllczogUmVhZG9ubHlBcnJheTwgU3lzdGVtLlJlZmxlY3Rpb24uQ0Fzc2VtYmx5ID4gKTogQnVpbGRlci5JUmVnaXN0cmF0aW9uQnVpbGRlcjxvYmplY3Q+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmIgPSBuZXcgQnVpbGRlci5DUmVnaXN0cmF0aW9uQnVpbGRlcihcclxuICAgICAgICAgICAgICAgIG5ldyBDb3JlLkNUeXBlZFNlcnZpY2UoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggT2JqZWN0ICkgKSxcclxuICAgICAgICAgICAgICAgIG5ldyBCdWlsZGVyLkNTY2FubmluZ0FjdGl2YXRvckRhdGEoKSxcclxuICAgICAgICAgICAgICAgIHt9ICk7XHJcbiAgICAgICAgICAgIHJiLlJlZ2lzdGVyRGF0YS5EZWZlcnJlZENhbGxiYWNrID0gY29udGFpbmVyQnVpbGRlci5SZWdpc3RlckNhbGxiYWNrKCBTeXN0ZW0uX19DYWxsYmFjayggZnVuY3Rpb24oIHRoaXM6IENDb250YWluZXJCdWlsZGVyLCBjciApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIENTY2FubmluZ1JlZ2lzdHJhdGlvbkV4dGVuc2lvbnMuU2NhbkFzc2VtYmxpZXMoIGFzc2VtYmxpZXMsIGNyLCByYiApO1xyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgcmV0dXJuIHJiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBSZWdpc3RlclR5cGVzKCBjb250YWluZXJCdWlsZGVyOiBDQ29udGFpbmVyQnVpbGRlciwgdHlwZXM6IFJlYWRvbmx5QXJyYXk8IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID4gKTogQnVpbGRlci5JUmVnaXN0cmF0aW9uQnVpbGRlcjxvYmplY3Q+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmIgPSBuZXcgQnVpbGRlci5DUmVnaXN0cmF0aW9uQnVpbGRlcihcclxuICAgICAgICAgICAgICAgIG5ldyBDb3JlLkNUeXBlZFNlcnZpY2UoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggT2JqZWN0ICkgKSxcclxuICAgICAgICAgICAgICAgIG5ldyBCdWlsZGVyLkNTY2FubmluZ0FjdGl2YXRvckRhdGEoKSxcclxuICAgICAgICAgICAgICAgIHt9ICk7XHJcbiAgICAgICAgICAgIHJiLlJlZ2lzdGVyRGF0YS5EZWZlcnJlZENhbGxiYWNrID0gY29udGFpbmVyQnVpbGRlci5SZWdpc3RlckNhbGxiYWNrKCBTeXN0ZW0uX19DYWxsYmFjayggZnVuY3Rpb24oIHRoaXM6IENDb250YWluZXJCdWlsZGVyLCBjciApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIENTY2FubmluZ1JlZ2lzdHJhdGlvbkV4dGVuc2lvbnMuU2NhblR5cGVzKCB0eXBlcywgY3IsIHJiICk7XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICByZXR1cm4gcmI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBTY2FuQXNzZW1ibGllcyggYXNzZW1ibGllczogUmVhZG9ubHlBcnJheTwgU3lzdGVtLlJlZmxlY3Rpb24uQ0Fzc2VtYmx5ID4sIGNvbXBvbmVudFJlZ2lzdHJ5OiBDb3JlLklDb21wb25lbnRSZWdpc3RyeSwgcmVnaXN0cmF0aW9uQnVpbGRlcjogQnVpbGRlci5JUmVnaXN0cmF0aW9uQnVpbGRlcjxvYmplY3Q+ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0eXBlczogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGVbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBhc3NlbWJsaWVzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBhc3NlbWJseSA9IGFzc2VtYmxpZXNbIGkgXTtcclxuICAgICAgICAgICAgICAgIHR5cGVzID0gdHlwZXMuY29uY2F0KCBhc3NlbWJseS5HZXRUeXBlcygpICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5TY2FuVHlwZXMoIHR5cGVzLCBjb21wb25lbnRSZWdpc3RyeSwgcmVnaXN0cmF0aW9uQnVpbGRlciApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgU2NhblR5cGVzKCB0eXBlczogUmVhZG9ubHlBcnJheTwgU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgPiwgY29tcG9uZW50UmVnaXN0cnk6IENvcmUuSUNvbXBvbmVudFJlZ2lzdHJ5LCByZWdpc3RyYXRpb25CdWlsZGVyOiBCdWlsZGVyLklSZWdpc3RyYXRpb25CdWlsZGVyPG9iamVjdD4gKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2YXRvckRhdGE6IEJ1aWxkZXIuQ1NjYW5uaW5nQWN0aXZhdG9yRGF0YSA9IDxCdWlsZGVyLkNTY2FubmluZ0FjdGl2YXRvckRhdGE+cmVnaXN0cmF0aW9uQnVpbGRlci5BY3RpdmF0b3JEYXRhO1xyXG4gICAgICAgICAgICBsZXQgZmlsdGVycyA9IGFjdGl2YXRvckRhdGEuRmlsdGVycztcclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdHlwZXMubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHQgPSB0eXBlc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaiA9IDA7IGogPCBmaWx0ZXJzLmxlbmd0aDsgaiArKyApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlclRlbXAgPSBmaWx0ZXJzWyBqIF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmaWx0ZXJUZW1wKCB0ICkgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZml0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICggZml0ID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGxldCBzY2FubmVkID0gbmV3IEJ1aWxkZXIuQ1JlZ2lzdHJhdGlvbkJ1aWxkZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvcmUuQ1R5cGVkU2VydmljZSggdCApLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBCdWlsZGVyLkNDb25jcmV0ZVJlZmxlY3Rpb25BY3RpdmF0b3JEYXRhKCB0ICksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEJ1aWxkZXIuQ1NpbmdsZVJlZ2lzdHJhdGlvblN0eWxlKCkgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzY2FubmVkLlJlZ2lzdGVyRGF0YS5Db3B5RnJvbSggcmVnaXN0cmF0aW9uQnVpbGRlci5SZWdpc3RlckRhdGEsIGZhbHNlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICggbGV0IGogPSAwOyBqIDwgYWN0aXZhdG9yRGF0YS5Db25maWd1cmF0aW9uQWN0aW9ucy5sZW5ndGg7IGogKysgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpb24gPSBhY3RpdmF0b3JEYXRhLkNvbmZpZ3VyYXRpb25BY3Rpb25zWyBqIF07XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uKCB0LCBzY2FubmVkICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBzY2FubmVkLlJlZ2lzdGVyRGF0YS5HZXRTZXJ2aWNlcygpLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICAgICAgICAgIEJ1aWxkZXIuQ1JlZ2lzdHJhdGlvbkJ1aWxkZXJIZWxwZXIuUmVnaXN0ZXJTaW5nbGVDb21wb25lbnQoIGNvbXBvbmVudFJlZ2lzdHJ5LCBzY2FubmVkICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQXMoIHJlZ2lzdHJhdGlvbkJ1aWxkZXI6IEJ1aWxkZXIuSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8b2JqZWN0Piwgc2VydmljZU1hcHBpbmc6ICggdDogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKSA9PiBDb3JlLkNTZXJ2aWNlW10gKTogQnVpbGRlci5JUmVnaXN0cmF0aW9uQnVpbGRlcjxvYmplY3Q+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZhdG9yRGF0YTogQnVpbGRlci5DU2Nhbm5pbmdBY3RpdmF0b3JEYXRhID0gPEJ1aWxkZXIuQ1NjYW5uaW5nQWN0aXZhdG9yRGF0YT5yZWdpc3RyYXRpb25CdWlsZGVyLkFjdGl2YXRvckRhdGE7XHJcbiAgICAgICAgICAgIGFjdGl2YXRvckRhdGEuQ29uZmlndXJhdGlvbkFjdGlvbnMucHVzaCggZnVuY3Rpb24oIHR5cGUsIHJiIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hcHBlZCA9IHNlcnZpY2VNYXBwaW5nKCB0eXBlICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1wbCA9ICg8QnVpbGRlci5DQ29uY3JldGVSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YT5yYi5BY3RpdmF0b3JEYXRhKS5JbXBsZW1lbnRhdGlvblR5cGU7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXBwbGllZDogQ29yZS5DU2VydmljZVtdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBtYXBwZWQubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcyA9IG1hcHBlZFsgaSBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjID0gPENvcmUuSVNlcnZpY2VXaXRoVHlwZT48YW55PnM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBjWyBcIkdldFNlcnZpY2VUeXBlXCIgXSAhPSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBpbXBsLklzSW5oZXJpdEZyb20oIGMuR2V0U2VydmljZVR5cGUoKSApIHx8IGltcGwuSXNFcXVpdmFsZW50VG8oIGMuR2V0U2VydmljZVR5cGUoKSApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGllZC5wdXNoKCBzICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByYi5Bc0V4KCBhcHBsaWVkICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVnaXN0cmF0aW9uQnVpbGRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkV2ZW50XHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDRXZlbnRcclxuICAgIHtcclxuICAgIH07XHJcblxyXG4gICAgLy8gZXhwb3J0IGludGVyZmFjZSBURXZlbnRDb25zdHJ1Y3RvcjwgVEV2ZW50IGV4dGVuZHMgQ0V2ZW50ID5cclxuICAgIC8vIHtcclxuICAgIC8vICAgICBuZXcgKCAuLi5hcmdzOiBhbnlbXSApOiBURXZlbnRcclxuICAgIC8vIH07XHJcblxyXG4gICAgZXhwb3J0IHR5cGUgVEV2ZW50Q29uc3RydWN0b3I8IFRFdmVudCBleHRlbmRzIENFdmVudCA+ID0gU3lzdGVtLlJlZmxlY3Rpb24uVHlwZUNvbnN0cnVjdG9yPCBURXZlbnQgPjtcclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuRXZlbnRcclxue1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIElFdmVudEJ1c1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBMaXN0ZW48IFRFdmVudCBleHRlbmRzIENFdmVudCA+KCBldmVudFR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBURXZlbnQgPiwgbGlzdGVuZXI6IFN5c3RlbS5UQ2FsbGJhY2tPckZ1bmN0aW9uPCBVRXZlbnRCdXNMaXN0ZW5lckZ1bmN0aW9uPCBURXZlbnQgPiA+LCBvbmNlPzogYm9vbGVhbiApOiB2b2lkO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgU2VuZDwgVEV2ZW50IGV4dGVuZHMgQ0V2ZW50ID4oIGV2ZW50RGF0YTogVEV2ZW50ICk6IHZvaWQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGV4cG9ydCB0eXBlIFVFdmVudEJ1c0xpc3RlbmVyRnVuY3Rpb248IFRFdmVudCBleHRlbmRzIENFdmVudCA+ID0gKCBldmVudERhdGE6IFRFdmVudCApID0+IHZvaWQ7XHJcbiAgICBleHBvcnQgdHlwZSBJRXZlbnRCdXNMaXN0ZW5lcjwgVEV2ZW50IGV4dGVuZHMgQ0V2ZW50ID4gPSBTeXN0ZW0uVENhbGxiYWNrPCBVRXZlbnRCdXNMaXN0ZW5lckZ1bmN0aW9uPCBURXZlbnQgPiA+O1xyXG5cclxufSIsIlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkV2ZW50XHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBJU3RhdGVNYWNoaW5lXHJcbiAgICB7XHJcbiAgICAgICAgQWRkU3RhdGUoIHN0YXRlOiBJU3RhdGVOb2RlICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudHMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldFN0YXRlPCBUU3RhdGVOb2RlIGV4dGVuZHMgSVN0YXRlTm9kZSA+KCBzdGF0ZVR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBUU3RhdGVOb2RlID4gKTogVFN0YXRlTm9kZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50cycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkV2ZW50XHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBJU3RhdGVOb2RlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIEluaXRpYWxpemUoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50cycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuRXZlbnQuSW1wbGVtZW50c1xyXG57XHJcbiAgICB0eXBlIFVFdmVudERlbGVnYXRlID1cclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5lcjogSUV2ZW50QnVzTGlzdGVuZXI8IENFdmVudCA+O1xyXG4gICAgICAgIGtpY2s6IG51bWJlcjtcclxuICAgIH07XHJcblxyXG4gICAgdHlwZSBVRXZlbnREZWxlZ2F0ZUxpc3QgPSBBcnJheTwgVUV2ZW50RGVsZWdhdGUgPjtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ0V2ZW50QnVzIGV4dGVuZHMgSUV2ZW50QnVzXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fZXZlbnRzOiBXZWFrTWFwPCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlUHJvdG90eXBlPCBDRXZlbnQgPiwgVUV2ZW50RGVsZWdhdGVMaXN0ID4gPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgTGlzdGVuPCBURXZlbnQgZXh0ZW5kcyBDRXZlbnQgPiggZXZlbnRUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVEV2ZW50ID4sIGxpc3RlbmVyOiBTeXN0ZW0uVENhbGxiYWNrT3JGdW5jdGlvbjwgVUV2ZW50QnVzTGlzdGVuZXJGdW5jdGlvbjwgVEV2ZW50ID4gPiwgb25jZT86IGJvb2xlYW4gKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHByb3RvdHlwZSA9IGV2ZW50VHlwZS5HZXRKc1Byb3RvdHlwZTx7fT4oKTtcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5tX2V2ZW50cy5nZXQoIHByb3RvdHlwZSApO1xyXG4gICAgICAgICAgICBpZiAoIGFycmF5ID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnJheSA9IEFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXI6ICggdHlwZW9mKCBsaXN0ZW5lciApID09IFwiZnVuY3Rpb25cIiApID8gX19DYWxsYmFjayggbGlzdGVuZXIgKSA6IGxpc3RlbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGtpY2s6ICggb25jZSA9PSB0cnVlICkgPyAxIDogLTFcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9ldmVudHMuc2V0KCBwcm90b3R5cGUsIGFycmF5ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IoIGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGVnYXRlVGVtcCA9IGFycmF5WyBpIF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBkZWxlZ2F0ZVRlbXAubGlzdGVuZXIgPT0gbGlzdGVuZXIgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXI6ICggdHlwZW9mKCBsaXN0ZW5lciApID09IFwiZnVuY3Rpb25cIiApID8gX19DYWxsYmFjayggbGlzdGVuZXIgKSA6IGxpc3RlbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGtpY2s6ICggb25jZSA9PSB0cnVlICkgPyAxIDogLTFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2VuZDwgVEV2ZW50IGV4dGVuZHMgQ0V2ZW50ID4oIGV2ZW50RGF0YTogVEV2ZW50ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcm90b3R5cGUgPSBldmVudERhdGEuR2V0VHlwZSgpLkdldEpzUHJvdG90eXBlPCB7fSA+KCk7XHJcbiAgICAgICAgICAgIGxldCBkZWxlZ2F0ZXMgPSB0aGlzLm1fZXZlbnRzLmdldCggcHJvdG90eXBlICk7XHJcbiAgICAgICAgICAgIGlmICggZGVsZWdhdGVzID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBkZWxlZ2F0ZXMubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlbGVnYXRlVGVtcCA9IGRlbGVnYXRlc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBkZWxlZ2F0ZVRlbXAua2ljayA9PSAwIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBkZWxlZ2F0ZVRlbXAua2ljayAtLTtcclxuICAgICAgICAgICAgICAgIGRlbGVnYXRlVGVtcC5saXN0ZW5lci5FeGVjdXRlKCBldmVudERhdGEgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBkZWxlZ2F0ZXMubGVuZ3RoOyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWxlZ2F0ZVRlbXAgPSBkZWxlZ2F0ZXNbIGkgXTtcclxuICAgICAgICAgICAgICAgIGlmICggZGVsZWdhdGVUZW1wLmtpY2sgPT0gMCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGVzLnNwbGljZSggaSwgMSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuRXZlbnQuSW1wbGVtZW50c1xyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1N0YXRlTWFjaGluZSBleHRlbmRzIElTdGF0ZU1hY2hpbmVcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9zdGF0ZTogV2Vha01hcDwgU3lzdGVtLlJlZmxlY3Rpb24uVHlwZVByb3RvdHlwZTwgSVN0YXRlTm9kZSA+LCBJU3RhdGVOb2RlID4gPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgQWRkU3RhdGUoIHN0YXRlOiBJU3RhdGVOb2RlICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcm90b3R5cGU6IGFueSA9IHN0YXRlLkdldFR5cGUoKS5HZXRKc1Byb3RvdHlwZSgpO1xyXG4gICAgICAgICAgICBsZXQgc3RhdGVUZW1wID0gdGhpcy5tX3N0YXRlLmdldCggcHJvdG90eXBlICk7XHJcbiAgICAgICAgICAgIGlmICggc3RhdGVUZW1wICE9IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvciggXCJ0aGVyZSBpcyBleGlzdCBzdGF0ZVwiICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tX3N0YXRlLnNldCggPGFueT5wcm90b3R5cGUsIHN0YXRlICk7XHJcbiAgICAgICAgICAgIHN0YXRlLkluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRTdGF0ZTwgVFN0YXRlTm9kZSBleHRlbmRzIElTdGF0ZU5vZGUgPiggc3RhdGVUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVFN0YXRlTm9kZSA+ICk6IFRTdGF0ZU5vZGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcm90b3R5cGUgPSBzdGF0ZVR5cGUuR2V0SnNQcm90b3R5cGUoKTtcclxuICAgICAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5tX3N0YXRlLmdldCggcHJvdG90eXBlICk7XHJcbiAgICAgICAgICAgIHJldHVybiA8VFN0YXRlTm9kZT5zdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
