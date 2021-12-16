"use strict";

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
        var CDictionary =
        /*#__PURE__*/
        function () {
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
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = this.m_data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var n = _step.value;
                  if (this.m_comparer.Equals(n.key, key)) return true;
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                    _iterator["return"]();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
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
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = this.m_data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var n = _step2.value;
                  if (this.m_comparer.Equals(n.key, key)) return n.value;
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                    _iterator2["return"]();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }

              return null;
            }
          }, {
            key: "Clear",
            value: function Clear() {
              // for ( const n of this.m_data )
              // {
              //     if ( n.value != null && (<any>n.value)[ "Dispose" ] != null )
              //     {
              //         (<any>n.value)[ "Dispose" ]();
              //     }
              // }
              this.m_data = [];
            }
          }, {
            key: "Each",
            value: function Each(process) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = this.m_data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var n = _step3.value;
                  process.Execute(n.key, n.value);
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                    _iterator3["return"]();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
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
        var CEqualityComparer =
        /*#__PURE__*/
        function () {
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
        var CMetadataCollection =
        /*#__PURE__*/
        function () {
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
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = this.m_list[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var attribute = _step4.value;
                  if (attribute.GetType().IsEquivalentTo(type)) return attribute;
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                    _iterator4["return"]();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }

              return null;
            }
          }, {
            key: "GetAttributes",
            value: function GetAttributes(type) {
              var attributeList = [];
              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                for (var _iterator5 = this.m_list[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                  var attribute = _step5.value;
                  if (attribute.GetType().IsEquivalentTo(type)) attributeList.push(attribute);
                }
              } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                    _iterator5["return"]();
                  }
                } finally {
                  if (_didIteratorError5) {
                    throw _iteratorError5;
                  }
                }
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
        var CMetadataContainer =
        /*#__PURE__*/
        function () {
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
        var CMetadataKey =
        /*#__PURE__*/
        function () {
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
        var CMetadataKeyForClass =
        /*#__PURE__*/
        function (_Core$CMetadataKey) {
          _inherits(CMetadataKeyForClass, _Core$CMetadataKey);

          function CMetadataKeyForClass(type, target) {
            _classCallCheck(this, CMetadataKeyForClass);

            return _possibleConstructorReturn(this, _getPrototypeOf(CMetadataKeyForClass).call(this, type, target));
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
        var CMetadataKeyForNamed =
        /*#__PURE__*/
        function (_Core$CMetadataKey2) {
          _inherits(CMetadataKeyForNamed, _Core$CMetadataKey2);

          function CMetadataKeyForNamed(type, target, name) {
            var _this;

            _classCallCheck(this, CMetadataKeyForNamed);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(CMetadataKeyForNamed).call(this, type, target));
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
        var CMetadataKeyForParameter =
        /*#__PURE__*/
        function (_Core$CMetadataKey3) {
          _inherits(CMetadataKeyForParameter, _Core$CMetadataKey3);

          function CMetadataKeyForParameter(type, target, methodName, index) {
            var _this2;

            _classCallCheck(this, CMetadataKeyForParameter);

            _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CMetadataKeyForParameter).call(this, type, target));
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
      var CAssembly =
      /*#__PURE__*/
      function () {
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
      var CMemberInfo =
      /*#__PURE__*/
      function () {
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
      var CMethodBase =
      /*#__PURE__*/
      function (_Reflection$CMemberIn) {
        _inherits(CMethodBase, _Reflection$CMemberIn);

        function CMethodBase() {
          _classCallCheck(this, CMethodBase);

          return _possibleConstructorReturn(this, _getPrototypeOf(CMethodBase).apply(this, arguments));
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
      var CConstructorInfo =
      /*#__PURE__*/
      function (_Reflection$CMethodBa) {
        _inherits(CConstructorInfo, _Reflection$CMethodBa);

        function CConstructorInfo() {
          _classCallCheck(this, CConstructorInfo);

          return _possibleConstructorReturn(this, _getPrototypeOf(CConstructorInfo).apply(this, arguments));
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
    var CAttributeUsageAttribute =
    /*#__PURE__*/
    function (_System$CAttribute) {
      _inherits(CAttributeUsageAttribute, _System$CAttribute);

      function CAttributeUsageAttribute(validOn, allowMultiple, inherit) {
        var _this3;

        _classCallCheck(this, CAttributeUsageAttribute);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(CAttributeUsageAttribute).call(this));
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
      var CFieldInfo =
      /*#__PURE__*/
      function (_Reflection$CMemberIn2) {
        _inherits(CFieldInfo, _Reflection$CMemberIn2);

        function CFieldInfo() {
          _classCallCheck(this, CFieldInfo);

          return _possibleConstructorReturn(this, _getPrototypeOf(CFieldInfo).apply(this, arguments));
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
      var CMethodInfo =
      /*#__PURE__*/
      function (_Reflection$CMethodBa2) {
        _inherits(CMethodInfo, _Reflection$CMethodBa2);

        function CMethodInfo() {
          _classCallCheck(this, CMethodInfo);

          return _possibleConstructorReturn(this, _getPrototypeOf(CMethodInfo).apply(this, arguments));
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
      var CPropertyInfo =
      /*#__PURE__*/
      function (_Reflection$CMemberIn3) {
        _inherits(CPropertyInfo, _Reflection$CMemberIn3);

        function CPropertyInfo() {
          _classCallCheck(this, CPropertyInfo);

          return _possibleConstructorReturn(this, _getPrototypeOf(CPropertyInfo).apply(this, arguments));
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

      var CType =
      /*#__PURE__*/
      function () {
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

      var CRuntimeType =
      /*#__PURE__*/
      function (_CType) {
        _inherits(CRuntimeType, _CType);

        function CRuntimeType(proto) {
          var _this4;

          _classCallCheck(this, CRuntimeType);

          _this4 = _possibleConstructorReturn(this, _getPrototypeOf(CRuntimeType).call(this));
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
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
              for (var _iterator6 = keys[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var k = _step6.value;
                if (k == "constructor") continue;
                var descriptor = Reflect.getOwnPropertyDescriptor(this.m_proto, k);
                if (descriptor == null) continue;
                if (descriptor.value == null || typeof descriptor.value != "function") continue;
                array.push(new CRuntimeMethodInfo(k, this.m_proto, descriptor.value));
              }
            } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                  _iterator6["return"]();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
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
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = keys[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var k = _step7.value;
                if (k == "constructor") continue;
                var descriptor = Reflect.getOwnPropertyDescriptor(this.m_proto, k);
                if (descriptor == null) continue;
                if (descriptor.set == null && descriptor.get == null) continue;
                array.push(new CRuntimePropertyInfo(k, this.m_proto));
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                  _iterator7["return"]();
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
              }
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

      var CRuntimeConstructorInfo =
      /*#__PURE__*/
      function (_Reflection$CConstruc) {
        _inherits(CRuntimeConstructorInfo, _Reflection$CConstruc);

        function CRuntimeConstructorInfo(name, prototype) {
          _classCallCheck(this, CRuntimeConstructorInfo);

          return _possibleConstructorReturn(this, _getPrototypeOf(CRuntimeConstructorInfo).call(this, name, prototype));
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

      var CRuntimeMethodInfo =
      /*#__PURE__*/
      function (_Reflection$CMethodIn) {
        _inherits(CRuntimeMethodInfo, _Reflection$CMethodIn);

        function CRuntimeMethodInfo(name, prototype, method, fromProperty) {
          var _this5;

          _classCallCheck(this, CRuntimeMethodInfo);

          _this5 = _possibleConstructorReturn(this, _getPrototypeOf(CRuntimeMethodInfo).call(this, name, prototype));
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

      var CRuntimePropertyInfo =
      /*#__PURE__*/
      function (_Reflection$CProperty) {
        _inherits(CRuntimePropertyInfo, _Reflection$CProperty);

        function CRuntimePropertyInfo(name, prototype) {
          _classCallCheck(this, CRuntimePropertyInfo);

          return _possibleConstructorReturn(this, _getPrototypeOf(CRuntimePropertyInfo).call(this, name, prototype));
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

      var CRuntimeFieldInfo =
      /*#__PURE__*/
      function (_Reflection$CFieldInf) {
        _inherits(CRuntimeFieldInfo, _Reflection$CFieldInf);

        function CRuntimeFieldInfo(name, prototype) {
          _classCallCheck(this, CRuntimeFieldInfo);

          return _possibleConstructorReturn(this, _getPrototypeOf(CRuntimeFieldInfo).call(this, name, prototype));
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

      var CRuntimeParameterInfo =
      /*#__PURE__*/
      function (_Reflection$CParamete) {
        _inherits(CRuntimeParameterInfo, _Reflection$CParamete);

        function CRuntimeParameterInfo(prototype, member, parameterIndex, parameterType, parameterName) {
          var _this6;

          _classCallCheck(this, CRuntimeParameterInfo);

          _this6 = _possibleConstructorReturn(this, _getPrototypeOf(CRuntimeParameterInfo).call(this));
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

    var CAttributeDecorateHelper =
    /*#__PURE__*/
    function () {
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
      var CDeclaringTypeAttribute =
      /*#__PURE__*/
      function (_System$CAttribute2) {
        _inherits(CDeclaringTypeAttribute, _System$CAttribute2);

        function CDeclaringTypeAttribute(type, genericTypes) {
          var _this7;

          _classCallCheck(this, CDeclaringTypeAttribute);

          _this7 = _possibleConstructorReturn(this, _getPrototypeOf(CDeclaringTypeAttribute).call(this));
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
              var _iteratorNormalCompletion8 = true;
              var _didIteratorError8 = false;
              var _iteratorError8 = undefined;

              try {
                for (var _iterator8 = this.m_typesGeneric[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                  var gt = _step8.value;
                  this.m_typesGenericReal.push(gt());
                }
              } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                    _iterator8["return"]();
                  }
                } finally {
                  if (_didIteratorError8) {
                    throw _iteratorError8;
                  }
                }
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
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
              var _loop3 = function _loop3() {
                var gt = _step9.value;
                temp.push(function () {
                  return gt;
                });
              };

              for (var _iterator9 = genericTypes[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                _loop3();
              }
            } catch (err) {
              _didIteratorError9 = true;
              _iteratorError9 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
                  _iterator9["return"]();
                }
              } finally {
                if (_didIteratorError9) {
                  throw _iteratorError9;
                }
              }
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
      var CNamedAttribute =
      /*#__PURE__*/
      function (_System$CAttribute3) {
        _inherits(CNamedAttribute, _System$CAttribute3);

        function CNamedAttribute(text) {
          var _this8;

          _classCallCheck(this, CNamedAttribute);

          _this8 = _possibleConstructorReturn(this, _getPrototypeOf(CNamedAttribute).call(this));
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
      var CTypeNicknameAttribute =
      /*#__PURE__*/
      function (_System$CAttribute4) {
        _inherits(CTypeNicknameAttribute, _System$CAttribute4);

        function CTypeNicknameAttribute(nickname) {
          var _this9;

          _classCallCheck(this, CTypeNicknameAttribute);

          _this9 = _possibleConstructorReturn(this, _getPrototypeOf(CTypeNicknameAttribute).call(this));
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
        var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
          for (var _iterator10 = nicknameAttrs[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            var n = _step10.value;
            nicknames.push(n.Nickname);
          }
        } catch (err) {
          _didIteratorError10 = true;
          _iteratorError10 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
              _iterator10["return"]();
            }
          } finally {
            if (_didIteratorError10) {
              throw _iteratorError10;
            }
          }
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
    var TCallback =
    /*#__PURE__*/
    function () {
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

    var TCallbackArray =
    /*#__PURE__*/
    function () {
      function TCallbackArray() {
        _classCallCheck(this, TCallbackArray);

        this.callbacks = [];
      }

      _createClass(TCallbackArray, [{
        key: "Add",
        value: function Add(callback) {
          if (callback instanceof Array) {
            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
              for (var _iterator11 = callback[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                var c = _step11.value;
                if (typeof c == "function") this.callbacks.push(new TCallback(c));else this.callbacks.push(c);
              }
            } catch (err) {
              _didIteratorError11 = true;
              _iteratorError11 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
                  _iterator11["return"]();
                }
              } finally {
                if (_didIteratorError11) {
                  throw _iteratorError11;
                }
              }
            }
          } else {
            if (typeof callback == "function") this.callbacks.push(new TCallback(callback));else this.callbacks.push(callback);
          }
        }
      }, {
        key: "Execute",
        value: function Execute() {
          if (this.callbacks != null && this.callbacks.length > 0) {
            var _iteratorNormalCompletion12 = true;
            var _didIteratorError12 = false;
            var _iteratorError12 = undefined;

            try {
              for (var _iterator12 = this.callbacks[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                var cb = _step12.value;
                if (cb == null) continue;
                cb.Execute.apply(cb, arguments);
              }
            } catch (err) {
              _didIteratorError12 = true;
              _iteratorError12 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
                  _iterator12["return"]();
                }
              } finally {
                if (_didIteratorError12) {
                  throw _iteratorError12;
                }
              }
            }
          }
        }
      }, {
        key: "Copy",
        value: function Copy() {
          var copycat = new TCallbackArray();
          var _iteratorNormalCompletion13 = true;
          var _didIteratorError13 = false;
          var _iteratorError13 = undefined;

          try {
            for (var _iterator13 = this.callbacks[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
              var c = _step13.value;
              copycat.callbacks.push(c);
            }
          } catch (err) {
            _didIteratorError13 = true;
            _iteratorError13 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
                _iterator13["return"]();
              }
            } finally {
              if (_didIteratorError13) {
                throw _iteratorError13;
              }
            }
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

Array.prototype.firstOrDefault = function (predicate) {
  if (predicate == null) {
    if (this.length == 0) return null;
    return this[0];
  }

  for (var i = 0; i < this.length; i++) {
    if (predicate(this[i], i)) return this[i];
  }

  return null;
};

Array.prototype.where = function (predicate) {
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
  return this.where(function (e) {
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
  var _iteratorNormalCompletion14 = true;
  var _didIteratorError14 = false;
  var _iteratorError14 = undefined;

  try {
    for (var _iterator14 = array[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
      var a = _step14.value;
      arrayOutput.push(converter(a));
    }
  } catch (err) {
    _didIteratorError14 = true;
    _iteratorError14 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
        _iterator14["return"]();
      }
    } finally {
      if (_didIteratorError14) {
        throw _iteratorError14;
      }
    }
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
var DeclaringType = iberbar.System.Reflection.DeclaringType;
var DeclaringTypeDelay = iberbar.System.Reflection.DeclaringTypeDelay;
var __Callback = iberbar.System.__Callback;
var AutoReflectMetadata_Constructor = iberbar.System.Reflection.AutoReflectMetadata_Constructor;
var AutoReflectMetadata_Field = iberbar.System.Reflection.AutoReflectMetadata_Field;
var AutoReflectMetadata_Property = iberbar.System.Reflection.AutoReflectMetadata_Property;
var AutoReflectMetadata_Method = iberbar.System.Reflection.AutoReflectMetadata_Method;
"use strict";

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var CContainerBuilder =
    /*#__PURE__*/
    function () {
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
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.m_configurationCallbacks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var callback = _step.value;
              callback.Callback.Execute(componentRegistry);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
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
    var CInjectLifetimeScopeAttribute =
    /*#__PURE__*/
    function (_iberbar$System$CAttr) {
      _inherits(CInjectLifetimeScopeAttribute, _iberbar$System$CAttr);

      function CInjectLifetimeScopeAttribute() {
        _classCallCheck(this, CInjectLifetimeScopeAttribute);

        return _possibleConstructorReturn(this, _getPrototypeOf(CInjectLifetimeScopeAttribute).apply(this, arguments));
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
    var CModule =
    /*#__PURE__*/
    function () {
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
      var CConstantParameter =
      /*#__PURE__*/
      function (_Core$CParameter) {
        _inherits(CConstantParameter, _Core$CParameter);

        function CConstantParameter(value, predicate) {
          var _this;

          _classCallCheck(this, CConstantParameter);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(CConstantParameter).call(this));
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
    var CNamedParameter =
    /*#__PURE__*/
    function (_Autofac$Core$CConsta) {
      _inherits(CNamedParameter, _Autofac$Core$CConsta);

      function CNamedParameter(name, value) {
        _classCallCheck(this, CNamedParameter);

        return _possibleConstructorReturn(this, _getPrototypeOf(CNamedParameter).call(this, value, function (pi) {
          return pi.Name == name;
        }));
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
    var CPositionalParameter =
    /*#__PURE__*/
    function (_Autofac$Core$CConsta2) {
      _inherits(CPositionalParameter, _Autofac$Core$CConsta2);

      function CPositionalParameter(position, value) {
        var _this3;

        _classCallCheck(this, CPositionalParameter);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(CPositionalParameter).call(this, value, function (pi) {
          return pi.ParameterIndex == position;
        }));
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
    var CTypedParameter =
    /*#__PURE__*/
    function (_Autofac$Core$CConsta3) {
      _inherits(CTypedParameter, _Autofac$Core$CConsta3);

      function CTypedParameter(type, value) {
        var _this4;

        _classCallCheck(this, CTypedParameter);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(CTypedParameter).call(this, value, function (pi) {
          return pi.ParameterType && pi.ParameterType.IsEquivalentTo(type);
        }));
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
})(iberbar || (iberbar = {})); // namespace iberbar.Autofac
// {
//     @System.AttributeUsage( System.UAttributeTarget.Field, false, false )
//     export class CInjectionAttribute extends System.CAttribute
//     {
//     };
//     @System.AttributeUsage( System.UAttributeTarget.Field | System.UAttributeTarget.Parameter, false, false )
//     export class CInjectionProviderAttribute extends System.CAttribute
//     {
//     }
//     @System.AttributeUsage( System.UAttributeTarget.Field | System.UAttributeTarget.Parameter, false, false )
//     export class CWithNameAttribute extends System.CAttribute
//     {
//         protected m_name: string = null;
//         public constructor( name: string )
//         {
//             super();
//             this.m_name = name;
//         }
//         public get Name()
//         {
//             return this.m_name;
//         }
//     }
//     @System.AttributeUsage( System.UAttributeTarget.Field | System.UAttributeTarget.Parameter, false, false )
//     export class CWithKeyAttribute extends System.CAttribute
//     {
//         protected m_key: IKey = null;
//         public constructor( key: IKey )
//         {
//             super();
//             this.m_key = key;
//         }
//         public get Key()
//         {
//             return this.m_key;
//         }
//     }
//     /**
//      * **（函数声明）**
//      * 
//      * 在类字段位置声明注入
//      */
//     export function Injection(): System.UDecoratorFunctionType_ForField
//     {
//         return System.Attribute( new CInjectionAttribute() );
//     }
//     /**
//      * 注入IProvider提供器
//      */
//     export function InjectionProvider(): System.UDecoratorFunctionType_ForField & System.UDecoratorFunctionType_ForParameter
//     {
//         return function ( target: any, memberName: string, parameterIndex?: number )
//         {
//             if ( parameterIndex == undefined )
//             {
//                 System.Reflection.Enumerable( target, memberName );
//             }
//             System.Attribute( new CInjectionProviderAttribute() )( target, memberName, parameterIndex );
//         }
//     }
//     export function WithName( name: string ): System.UDecoratorFunctionType_ForField & System.UDecoratorFunctionType_ForParameter
//     {
//         return System.Attribute( new CWithNameAttribute( name ) );
//     }
//     export function WithKey( key: IKey ): System.UDecoratorFunctionType_ForField & System.UDecoratorFunctionType_ForParameter
//     {
//         return System.Attribute( new CWithKeyAttribute( key ) );
//     }
//     // /**
//     //  * **（数据类型声明）**
//     //  * 
//     //  * Injection方法的返回类型声明
//     //  */
//     // export type UInjectionReturn = (
//     //     typeWhere: any,
//     //     propertyKey: string,
//     //     parameterIndex?: number
//     // ) => void;
//     // /**
//     //  * **（函数声明）**
//     //  * 
//     //  * 在属性或者构造器中的参数位置声明注入
//     //  * @param type 注入类型
//     //  * @param name 键名、别名
//     //  */
//     // export function Injection( type: System.Reflection.CType, name?: string | IKey ): UInjectionReturn
//     // {
//     //     return function(
//     //         target: any,
//     //         propertyKey: string,
//     //         parameterIndex?: number ): void
//     //     {
//     //         let prototype: System.Reflection.TypePrototype< object > & Builder.UInjectionOnTypePrototype = null;
//     //         // 属性注入
//     //         if ( parameterIndex == undefined )
//     //         {
//     //             prototype = target;
//     //             let defs: { [ key: string ]: Builder.UInjectionNode } = null;
//     //             if ( prototype.hasOwnProperty( Builder.uInjectionForField ) == false )
//     //             {
//     //                 let defsOld: { [ key: string ]: Builder.UInjectionNode } = prototype[ Builder.uInjectionForField ];
//     //                 defs = prototype[ Builder.uInjectionForField ] = Object.assign( {}, defsOld );
//     //             }
//     //             else
//     //             {
//     //                 defs = prototype[ Builder.uInjectionForField ];
//     //             }
//     //             let injectionNode: Builder.UInjectionNode =
//     //             {
//     //                 type: type
//     //             };
//     //             if ( name != null )
//     //             {
//     //                 if ( typeof( name ) == "string" )
//     //                     injectionNode.name = name;
//     //                 else
//     //                     injectionNode.key = name;
//     //             }
//     //             defs[ propertyKey ] = injectionNode;
//     //         }
//     //         else
//     //         {
//     //             // 构造函数注入
//     //             if ( propertyKey == undefined )
//     //             {
//     //                 prototype = target.prototype;
//     //                 let defs: Builder.UInjectionNode[] = null;
//     //                 if ( prototype.hasOwnProperty( Builder.uInjectionForConstructor ) == false )
//     //                 {
//     //                     defs = prototype[ Builder.uInjectionForConstructor ] = Array( prototype.constructor.length );
//     //                 }
//     //                 else
//     //                 {
//     //                     defs = prototype[ Builder.uInjectionForConstructor ];
//     //                 }
//     //                 let injectionNode: Builder.UInjectionNode =
//     //                 {
//     //                     type: type
//     //                 };
//     //                 if ( name != null )
//     //                 {
//     //                     if ( typeof( name ) == "string" )
//     //                         injectionNode.name = name;
//     //                     else
//     //                         injectionNode.key = name;
//     //                 }
//     //                 defs[ parameterIndex ] = injectionNode;
//     //             }
//     //             // 方法注入
//     //             else
//     //             {
//     //                 prototype = target;
//     //                 let defs: { [ key: string ]: Builder.UInjectionNode } = null;
//     //                 if ( prototype.hasOwnProperty( Builder.uInjectionForMethod ) == false )
//     //                 {
//     //                     defs = prototype[ Builder.uInjectionForMethod ] = {};
//     //                 }
//     //                 else
//     //                 {
//     //                     defs = prototype[ Builder.uInjectionForMethod ];
//     //                 }
//     //                 let injectionNode: Builder.UInjectionNode =
//     //                 {
//     //                     type: type,
//     //                 };
//     //                 if ( name != null )
//     //                 {
//     //                     if ( typeof( name ) == "string" )
//     //                         injectionNode.name = name;
//     //                     else
//     //                         injectionNode.key = name;
//     //                 }
//     //                 defs[ parameterIndex ] = injectionNode;
//     //             }
//     //         }
//     //     }
//     // }
// }


var iberbar;

(function (iberbar) {
  var Autofac;

  (function (Autofac) {
    var CStringKey =
    /*#__PURE__*/
    function () {
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
    var Activators;

    (function (Activators) {
      var CInstanceActivator =
      /*#__PURE__*/
      function () {
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
        var CDelegateActivator =
        /*#__PURE__*/
        function (_Activators$CInstance) {
          _inherits(CDelegateActivator, _Activators$CInstance);

          function CDelegateActivator(implementationType, activationFunction) {
            var _this5;

            _classCallCheck(this, CDelegateActivator);

            _this5 = _possibleConstructorReturn(this, _getPrototypeOf(CDelegateActivator).call(this, implementationType));
            if (typeof activationFunction == "function") _this5.m_activationFunction = iberbar.System.__Callback(activationFunction);else _this5.m_activationFunction = activationFunction;
            return _this5;
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
        var CProvidedInstanceActivator =
        /*#__PURE__*/
        function (_Activators$CInstance2) {
          _inherits(CProvidedInstanceActivator, _Activators$CInstance2);

          function CProvidedInstanceActivator(instance) {
            var _this6;

            _classCallCheck(this, CProvidedInstanceActivator);

            _this6 = _possibleConstructorReturn(this, _getPrototypeOf(CProvidedInstanceActivator).call(this, instance.GetType()));
            _this6.m_actived = false;
            _this6.m_instance = null;
            _this6.m_instance = instance;
            return _this6;
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
        var CAutowiringParameter =
        /*#__PURE__*/
        function (_Autofac$Core$CParame) {
          _inherits(CAutowiringParameter, _Autofac$Core$CParame);

          function CAutowiringParameter() {
            _classCallCheck(this, CAutowiringParameter);

            return _possibleConstructorReturn(this, _getPrototypeOf(CAutowiringParameter).apply(this, arguments));
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
        var CTypeComparer =
        /*#__PURE__*/
        function () {
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

        var CAutowiringPropertyInjector =
        /*#__PURE__*/
        function () {
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
                // let parameter = parameters.firstOrDefault( ( p ) => p.CanSupplyValue( setParameter, context ).ret == true );
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
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = properties[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var pi = _step2.value;
                  if (pi.CanWrite == false) continue;
                  injectableProperties.push(pi);
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                    _iterator2["return"]();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
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
        var CConstructorParameterBinding =
        /*#__PURE__*/
        function () {
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
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = availableParameters[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var param = _step3.value;
                  var canSupplyValue = param.CanSupplyValue(pi, context);

                  if (canSupplyValue.ret == true) {
                    this.m_valueRetrievers[i] = canSupplyValue.valueProvider;
                    foundValue = true;
                    break;
                  }
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                    _iterator3["return"]();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
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
                values[i] = this.m_valueRetrievers[i]();
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
        var CDefaultValueParameter =
        /*#__PURE__*/
        function (_Autofac$Core$CParame2) {
          _inherits(CDefaultValueParameter, _Autofac$Core$CParame2);

          function CDefaultValueParameter() {
            _classCallCheck(this, CDefaultValueParameter);

            return _possibleConstructorReturn(this, _getPrototypeOf(CDefaultValueParameter).apply(this, arguments));
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
        var CReflectionActivator =
        /*#__PURE__*/
        function (_Activators$CInstance3) {
          _inherits(CReflectionActivator, _Activators$CInstance3);

          function CReflectionActivator(implementationType, configuredParameters, configuredProperties) {
            var _this7;

            _classCallCheck(this, CReflectionActivator);

            _this7 = _possibleConstructorReturn(this, _getPrototypeOf(CReflectionActivator).call(this, implementationType));
            _this7.m_implementationType = null;
            _this7.m_configuredProperties = null;
            _this7.m_defaultParameters = null;
            _this7.m_constructor = null;
            _this7.m_implementationType = implementationType;
            _this7.m_constructor = _this7.m_implementationType.GetConstructor();
            _this7.m_defaultParameters = configuredParameters.concat([new Reflection.CAutowiringParameter(), new Reflection.CDefaultValueParameter()]);
            _this7.m_configuredProperties = configuredProperties;
            return _this7;
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
              var actualProperties = instance.GetType().GetProperties().where(function (pi) {
                return pi.CanWrite;
              });
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = this.m_configuredProperties[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var configuredProperty = _step4.value;

                  for (var i = 0; i < actualProperties.length; i++) {
                    var propertyInfo = actualProperties[i];

                    if (propertyInfo.GetCustomAttributeOne(iberbar.System.Reflection.TypeOf(Autofac.CInjectLifetimeScopeAttribute)) != null) {
                      configuredProperty = new Reflection.CAutowiringParameter();
                    }

                    var setter = propertyInfo.GetSetMethod();
                    var canSupplyValue = configuredProperty.CanSupplyValue(setter.GetParameters()[0], context);

                    if (canSupplyValue.ret == true) {
                      actualProperties.splice(i, 1);
                      propertyInfo.SetValue(instance, canSupplyValue.valueProvider());
                      break;
                    }
                  }
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                    _iterator4["return"]();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
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
      var CReflectionActivatorData =
      /*#__PURE__*/
      function () {
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
      var CConcreteReflectionActivatorData =
      /*#__PURE__*/
      function (_Builder$CReflectionA) {
        _inherits(CConcreteReflectionActivatorData, _Builder$CReflectionA);

        //private readonly m_activator: Core.IInstanceActivator = null;
        function CConcreteReflectionActivatorData(implementer) {
          _classCallCheck(this, CConcreteReflectionActivatorData);

          return _possibleConstructorReturn(this, _getPrototypeOf(CConcreteReflectionActivatorData).call(this, implementer));
        }

        _createClass(CConcreteReflectionActivatorData, [{
          key: "GetTypes",
          value: function GetTypes() {
            var _this8 = this;

            return function () {
              return _this8.ImplementationType;
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
      var CDeferredCallback =
      /*#__PURE__*/
      function () {
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
      var CRegistrationBuilder =
      /*#__PURE__*/
      function () {
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

            for (var _len2 = arguments.length, scopeTag = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              scopeTag[_key2] = arguments[_key2];
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
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = parameters[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var p = _step5.value;
                this.WithParameter(p);
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                  _iterator5["return"]();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
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
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
              for (var _iterator6 = parameters[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var p = _step6.value;
                this.WithProperty(p);
              }
            } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                  _iterator6["return"]();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
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
      var CRegistrationBuilderHelper =
      /*#__PURE__*/
      function () {
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
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = services[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var ts = _step7.value;
                if (ts.hasOwnProperty("GetServiceType") == false) continue;

                if (limitType.IsInheritFrom(ts.GetServiceType()) == false) {
                  throw new Error("");
                }
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                  _iterator7["return"]();
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
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
      var CRegistrationData =
      /*#__PURE__*/
      function () {
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
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
              for (var _iterator8 = src[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                var temp = _step8.value;
                dest.push(temp);
              }
            } catch (err) {
              _didIteratorError8 = true;
              _iteratorError8 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                  _iterator8["return"]();
                }
              } finally {
                if (_didIteratorError8) {
                  throw _iteratorError8;
                }
              }
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
      var CScanningActivatorData =
      /*#__PURE__*/
      function (_Builder$CReflectionA2) {
        _inherits(CScanningActivatorData, _Builder$CReflectionA2);

        function CScanningActivatorData() {
          var _this9;

          _classCallCheck(this, CScanningActivatorData);

          _this9 = _possibleConstructorReturn(this, _getPrototypeOf(CScanningActivatorData).call(this, iberbar.System.Reflection.TypeOf(Object)));
          _this9.m_filter = [];
          _this9.m_configurationActions = [];
          return _this9;
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
      var CSimpleActivatorData =
      /*#__PURE__*/
      function () {
        function CSimpleActivatorData(activator) {
          _classCallCheck(this, CSimpleActivatorData);

          this.m_activator = null;
          this.m_activator = activator;
        }

        _createClass(CSimpleActivatorData, [{
          key: "GetTypes",
          value: function GetTypes() {
            var _this10 = this;

            return function () {
              return _this10.m_activator.GetLimitType();
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
      var CSingleRegistrationStyle =
      /*#__PURE__*/
      function () {
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
      var CActivatingEventArgs =
      /*#__PURE__*/
      function () {
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
      var CContainer =
      /*#__PURE__*/
      function () {
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

            for (var _len3 = arguments.length, parameters = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              parameters[_key3 - 1] = arguments[_key3];
            }

            return (_this$m_rootLifetimeS = this.m_rootLifetimeScope).Resolve.apply(_this$m_rootLifetimeS, [type].concat(parameters));
          }
        }, {
          key: "ResolveNamed",
          value: function ResolveNamed(type, name) {
            var _this$m_rootLifetimeS2;

            for (var _len4 = arguments.length, parameters = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
              parameters[_key4 - 2] = arguments[_key4];
            }

            return (_this$m_rootLifetimeS2 = this.m_rootLifetimeScope).ResolveNamed.apply(_this$m_rootLifetimeS2, [type, name].concat(parameters));
          }
        }, {
          key: "ResolveKeyed",
          value: function ResolveKeyed(type, key) {
            var _this$m_rootLifetimeS3;

            for (var _len5 = arguments.length, parameters = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
              parameters[_key5 - 2] = arguments[_key5];
            }

            return (_this$m_rootLifetimeS3 = this.m_rootLifetimeScope).ResolveKeyed.apply(_this$m_rootLifetimeS3, [type, key].concat(parameters));
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
      var CDefaultPropertySelector =
      /*#__PURE__*/
      function () {
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
      var CDelegatePropertySelector =
      /*#__PURE__*/
      function () {
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
      var CDisposer =
      /*#__PURE__*/
      function () {
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
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
              for (var _iterator9 = this.m_items[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var item = _step9.value;
                item.Dispose();
              }
            } catch (err) {
              _didIteratorError9 = true;
              _iteratorError9 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
                  _iterator9["return"]();
                }
              } finally {
                if (_didIteratorError9) {
                  throw _iteratorError9;
                }
              }
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
      var CKeyedService =
      /*#__PURE__*/
      function (_Core$CService) {
        _inherits(CKeyedService, _Core$CService);

        function CKeyedService(serviceKey, serviceType) {
          var _this11;

          _classCallCheck(this, CKeyedService);

          _this11 = _possibleConstructorReturn(this, _getPrototypeOf(CKeyedService).call(this));
          _this11.m_serviceType = null;
          _this11.m_key = null;
          _this11.m_key = serviceKey;
          _this11.m_serviceType = serviceType;
          return _this11;
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
      var CLifetimeScopeService =
      /*#__PURE__*/
      function (_Core$CService2) {
        _inherits(CLifetimeScopeService, _Core$CService2);

        function CLifetimeScopeService() {
          _classCallCheck(this, CLifetimeScopeService);

          return _possibleConstructorReturn(this, _getPrototypeOf(CLifetimeScopeService).call(this));
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
      var CNamedPropertyParameter =
      /*#__PURE__*/
      function (_Core$CConstantParame) {
        _inherits(CNamedPropertyParameter, _Core$CConstantParame);

        function CNamedPropertyParameter(name, value) {
          _classCallCheck(this, CNamedPropertyParameter);

          return _possibleConstructorReturn(this, _getPrototypeOf(CNamedPropertyParameter).call(this, value, function (pi) {
            return true;
          }));
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
      var CResolvedParameter =
      /*#__PURE__*/
      function (_Core$CParameter2) {
        _inherits(CResolvedParameter, _Core$CParameter2);

        function CResolvedParameter() {
          _classCallCheck(this, CResolvedParameter);

          return _possibleConstructorReturn(this, _getPrototypeOf(CResolvedParameter).apply(this, arguments));
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
      var CServiceEqualityComparer =
      /*#__PURE__*/
      function () {
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
      var CTypedService =
      /*#__PURE__*/
      function (_Core$CService3) {
        _inherits(CTypedService, _Core$CService3);

        function CTypedService(serviceType) {
          var _this12;

          _classCallCheck(this, CTypedService);

          _this12 = _possibleConstructorReturn(this, _getPrototypeOf(CTypedService).call(this));
          _this12.m_serviceType = null;
          _this12.m_serviceType = serviceType;
          return _this12;
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
        var CCurrentScopeLifetime =
        /*#__PURE__*/
        function () {
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
        var CLifetimeScope =
        /*#__PURE__*/
        function () {
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
              for (var _len6 = arguments.length, parameters = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
                parameters[_key6 - 1] = arguments[_key6];
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
              for (var _len7 = arguments.length, parameters = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
                parameters[_key7 - 2] = arguments[_key7];
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
              for (var _len8 = arguments.length, parameters = new Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
                parameters[_key8 - 2] = arguments[_key8];
              }

              var ret = this.TryResolveService(new Core.CKeyedService(key, type), parameters);

              if (ret.succeed == false) {
                throw new Error();
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
        var CMatchingScopeLifetime =
        /*#__PURE__*/
        function () {
          function CMatchingScopeLifetime() {
            _classCallCheck(this, CMatchingScopeLifetime);

            this.m_tagToMatch = null;

            for (var _len9 = arguments.length, scopeTag = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              scopeTag[_key9] = arguments[_key9];
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
        var CRootScopeLifetime =
        /*#__PURE__*/
        function () {
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
        var CComponentRegistration =
        /*#__PURE__*/
        function () {
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
        var CComponentRegistry =
        /*#__PURE__*/
        function () {
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
              var _iteratorNormalCompletion10 = true;
              var _didIteratorError10 = false;
              var _iteratorError10 = undefined;

              try {
                for (var _iterator10 = services[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                  var s = _step10.value;
                  var info = this.GetServiceInfo(s);
                  info.AddImplementation(registration, preserveDefaults, originatedFromSource);
                }
              } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
                    _iterator10["return"]();
                  }
                } finally {
                  if (_didIteratorError10) {
                    throw _iteratorError10;
                  }
                }
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
        var CServiceRegistrationInfo =
        /*#__PURE__*/
        function () {
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
        var CInstanceLookup =
        /*#__PURE__*/
        function () {
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
              var _this13 = this;

              if (this.m_executed == true) throw new Error();
              this.m_executed = true;
              var instance = null;

              if (this.m_registration.Sharing == Core.UInstanceSharing.None) {
                instance = this.Activate(this.m_parameters);
              } else {
                instance = this.m_activationScope.GetOrCreateAndShare(this.m_registration.ID, this.__Callback(function () {
                  return _this13.Activate(_this13.m_parameters);
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
        var CResolveOperation =
        /*#__PURE__*/
        function () {
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
        var CScanningRegistrationExtensions =
        /*#__PURE__*/
        function () {
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
              var _iteratorNormalCompletion11 = true;
              var _didIteratorError11 = false;
              var _iteratorError11 = undefined;

              try {
                for (var _iterator11 = assemblies[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                  var assembly = _step11.value;
                  types = types.concat(assembly.GetTypes());
                }
              } catch (err) {
                _didIteratorError11 = true;
                _iteratorError11 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
                    _iterator11["return"]();
                  }
                } finally {
                  if (_didIteratorError11) {
                    throw _iteratorError11;
                  }
                }
              }

              this.ScanTypes(types, componentRegistry, registrationBuilder);
            }
          }, {
            key: "ScanTypes",
            value: function ScanTypes(types, componentRegistry, registrationBuilder) {
              var activatorData = registrationBuilder.ActivatorData;
              var filters = activatorData.Filters;
              var _iteratorNormalCompletion12 = true;
              var _didIteratorError12 = false;
              var _iteratorError12 = undefined;

              try {
                for (var _iterator12 = types[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                  var t = _step12.value;
                  var fit = true;
                  var _iteratorNormalCompletion13 = true;
                  var _didIteratorError13 = false;
                  var _iteratorError13 = undefined;

                  try {
                    for (var _iterator13 = filters[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                      var filterTemp = _step13.value;

                      if (filterTemp(t) == false) {
                        fit = false;
                        break;
                      }
                    }
                  } catch (err) {
                    _didIteratorError13 = true;
                    _iteratorError13 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
                        _iterator13["return"]();
                      }
                    } finally {
                      if (_didIteratorError13) {
                        throw _iteratorError13;
                      }
                    }
                  }

                  if (fit == false) continue;
                  var scanned = new Autofac.Builder.CRegistrationBuilder(new Autofac.Core.CTypedService(t), new Autofac.Builder.CConcreteReflectionActivatorData(t), new Autofac.Builder.CSingleRegistrationStyle());
                  scanned.RegisterData.CopyFrom(registrationBuilder.RegisterData, false);
                  var _iteratorNormalCompletion14 = true;
                  var _didIteratorError14 = false;
                  var _iteratorError14 = undefined;

                  try {
                    for (var _iterator14 = activatorData.ConfigurationActions[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                      var action = _step14.value;
                      action(t, scanned);
                    }
                  } catch (err) {
                    _didIteratorError14 = true;
                    _iteratorError14 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
                        _iterator14["return"]();
                      }
                    } finally {
                      if (_didIteratorError14) {
                        throw _iteratorError14;
                      }
                    }
                  }

                  if (scanned.RegisterData.GetServices().length > 0) Autofac.Builder.CRegistrationBuilderHelper.RegisterSingleComponent(componentRegistry, scanned);
                }
              } catch (err) {
                _didIteratorError12 = true;
                _iteratorError12 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
                    _iterator12["return"]();
                  }
                } finally {
                  if (_didIteratorError12) {
                    throw _iteratorError12;
                  }
                }
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
                var _iteratorNormalCompletion15 = true;
                var _didIteratorError15 = false;
                var _iteratorError15 = undefined;

                try {
                  for (var _iterator15 = mapped[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                    var s = _step15.value;
                    var c = s;

                    if (c["GetServiceType"] != undefined) {
                      if (impl.IsInheritFrom(c.GetServiceType()) || impl.IsEquivalentTo(c.GetServiceType())) {
                        applied.push(s);
                      }
                    }
                  }
                } catch (err) {
                  _didIteratorError15 = true;
                  _iteratorError15 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
                      _iterator15["return"]();
                    }
                  } finally {
                    if (_didIteratorError15) {
                      throw _iteratorError15;
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  var MVC;

  (function (MVC) {
    var Attributes;

    (function (Attributes) {
      var CAddControllerAttribute =
      /*#__PURE__*/
      function (_iberbar$System$CAttr) {
        _inherits(CAddControllerAttribute, _iberbar$System$CAttr);

        function CAddControllerAttribute(controllerType) {
          var _this;

          _classCallCheck(this, CAddControllerAttribute);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(CAddControllerAttribute).call(this));
          _this.m_controllerType = null;
          _this.m_controllerType = controllerType;
          return _this;
        }

        _createClass(CAddControllerAttribute, [{
          key: "ControllerType",
          get: function get() {
            return this.m_controllerType();
          }
        }]);

        return CAddControllerAttribute;
      }(iberbar.System.CAttribute);

      CAddControllerAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Class, true, true), __metadata("design:paramtypes", [Function])], CAddControllerAttribute);
      Attributes.CAddControllerAttribute = CAddControllerAttribute;
    })(Attributes = MVC.Attributes || (MVC.Attributes = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var Attributes;

    (function (Attributes) {
      var CAddViewComponentAttribute =
      /*#__PURE__*/
      function (_iberbar$System$CAttr2) {
        _inherits(CAddViewComponentAttribute, _iberbar$System$CAttr2);

        function CAddViewComponentAttribute(componentType) {
          var _this2;

          _classCallCheck(this, CAddViewComponentAttribute);

          _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CAddViewComponentAttribute).call(this));
          _this2.m_componentType = null;
          _this2.m_componentType = componentType;
          return _this2;
        }

        _createClass(CAddViewComponentAttribute, [{
          key: "ComponentType",
          get: function get() {
            return this.m_componentType();
          }
        }]);

        return CAddViewComponentAttribute;
      }(iberbar.System.CAttribute);

      CAddViewComponentAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Class, true, true), __metadata("design:paramtypes", [Function])], CAddViewComponentAttribute);
      Attributes.CAddViewComponentAttribute = CAddViewComponentAttribute;
    })(Attributes = MVC.Attributes || (MVC.Attributes = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var Attributes;

    (function (Attributes) {
      var CDisableViewComponentAttribute =
      /*#__PURE__*/
      function (_iberbar$System$CAttr3) {
        _inherits(CDisableViewComponentAttribute, _iberbar$System$CAttr3);

        function CDisableViewComponentAttribute(componentType) {
          var _this3;

          _classCallCheck(this, CDisableViewComponentAttribute);

          _this3 = _possibleConstructorReturn(this, _getPrototypeOf(CDisableViewComponentAttribute).call(this));
          _this3.m_componentType = null;
          _this3.m_componentType = componentType;
          return _this3;
        }

        _createClass(CDisableViewComponentAttribute, [{
          key: "ComponentType",
          get: function get() {
            return this.m_componentType();
          }
        }]);

        return CDisableViewComponentAttribute;
      }(iberbar.System.CAttribute);

      CDisableViewComponentAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Class, true, true), __metadata("design:paramtypes", [Function])], CDisableViewComponentAttribute);
      Attributes.CDisableViewComponentAttribute = CDisableViewComponentAttribute;
    })(Attributes = MVC.Attributes || (MVC.Attributes = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var Attributes;

    (function (Attributes) {
      var CViewModelAttribute =
      /*#__PURE__*/
      function (_iberbar$System$CAttr4) {
        _inherits(CViewModelAttribute, _iberbar$System$CAttr4);

        function CViewModelAttribute() {
          _classCallCheck(this, CViewModelAttribute);

          return _possibleConstructorReturn(this, _getPrototypeOf(CViewModelAttribute).apply(this, arguments));
        }

        return CViewModelAttribute;
      }(iberbar.System.CAttribute);

      CViewModelAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Field, false, false)], CViewModelAttribute);
      Attributes.CViewModelAttribute = CViewModelAttribute;
    })(Attributes = MVC.Attributes || (MVC.Attributes = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var Attributes;

    (function (Attributes) {
      var SetActionSummaryAttribute =
      /*#__PURE__*/
      function (_iberbar$System$CAttr5) {
        _inherits(SetActionSummaryAttribute, _iberbar$System$CAttr5);

        function SetActionSummaryAttribute(name, summary) {
          var _this4;

          _classCallCheck(this, SetActionSummaryAttribute);

          _this4 = _possibleConstructorReturn(this, _getPrototypeOf(SetActionSummaryAttribute).call(this));
          _this4.m_name = null;
          _this4.m_summary = null;
          _this4.m_name = name;
          _this4.m_summary = summary;
          return _this4;
        }

        _createClass(SetActionSummaryAttribute, [{
          key: "Name",
          get: function get() {
            return this.m_name;
          }
        }, {
          key: "Summary",
          get: function get() {
            return this.m_summary;
          }
        }]);

        return SetActionSummaryAttribute;
      }(iberbar.System.CAttribute);

      SetActionSummaryAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Method, false, false), __metadata("design:paramtypes", [String, String])], SetActionSummaryAttribute);
      Attributes.SetActionSummaryAttribute = SetActionSummaryAttribute;
    })(Attributes = MVC.Attributes || (MVC.Attributes = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var Attributes;

    (function (Attributes) {
      var CSetControllerAttribute =
      /*#__PURE__*/
      function (_iberbar$System$CAttr6) {
        _inherits(CSetControllerAttribute, _iberbar$System$CAttr6);

        function CSetControllerAttribute(controllerType) {
          var _this5;

          _classCallCheck(this, CSetControllerAttribute);

          _this5 = _possibleConstructorReturn(this, _getPrototypeOf(CSetControllerAttribute).call(this));
          _this5.m_controllerType = null;
          _this5.m_controllerType = controllerType;
          return _this5;
        }

        _createClass(CSetControllerAttribute, [{
          key: "ControllerType",
          get: function get() {
            return this.m_controllerType();
          }
        }]);

        return CSetControllerAttribute;
      }(iberbar.System.CAttribute);

      CSetControllerAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Class, true, true), __metadata("design:paramtypes", [Function])], CSetControllerAttribute);
      Attributes.CSetControllerAttribute = CSetControllerAttribute;
    })(Attributes = MVC.Attributes || (MVC.Attributes = {}));
    /**
     * **特性**
     *
     * + 标记视图所使用的控制器类型
     * + 修饰：类
     *
     * @param controllerType 控制器类型
     */


    function SetController(controllerType) {
      return iberbar.System.AttributeDecorate(new Attributes.CSetControllerAttribute(controllerType));
    }

    MVC.SetController = SetController;
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {})); // namespace iberbar.MVC.Registration
// {
//     export class CRegistrator
//     {
//         private m_builder: Autofac.CContainerBuilder = null;
//         public constructor( builder: Autofac.CContainerBuilder )
//         {
//             this.m_builder = builder;
//         }
//         public RegisterCommonComponents(): void
//         {
//             let types = [
//                 TypeOf( ViewComponents.CInitComponent_ViewsDependsOn ),
//                 TypeOf( ViewComponents.CInitComponent_BindPropertiesWithElementsAndViews ),
//                 TypeOf( ViewComponents.CInitComponent_BindActions ),
//                 TypeOf( ViewComponents.CInitComponent_BindOverScroll ),
//                 TypeOf( ViewComponents.CInitComponent_ViewController )
//             ];
//             this.m_builder.RegisterTypes( types ).AsSelf().InstancePerDependency().PropertiesAutowired();
//         }
//         public RegisterCustomComponent( componentType: System.Reflection.CType ): void
//         {
//             this.m_builder.RegisterType( componentType ).AsSelf().InstancePerDependency().PropertiesAutowired();
//         }
//         // public RegisterViews( ...assemblies: System.Reflection.CAssembly[] ): void
//         // {
//         //     const vt = TypeOf( CView );
//         //     let viewTypes_SingleInstance: Array< System.Reflection.CType > = Array();
//         //     let viewTypes_Transient: Array< System.Reflection.CType > = Array();
//         //     let viewTypes: Array< System.Reflection.CType >;
//         //     assemblies.forEach( assembly =>
//         //     {
//         //         let types = assembly.GetTypes();
//         //         types.forEach( t =>
//         //         {
//         //             if ( t.IsInheritFrom( vt ) == false )
//         //                 return;
//         //             if ( t.GetCustomAttributeOne( TypeOf( CSingleInstanceViewAttribute ), true ) == null )
//         //                 viewTypes_Transient.push( t );
//         //             else
//         //                 viewTypes_SingleInstance.push( t );
//         //         })
//         //     } );
//         //     this.m_builder.RegisterTypes( viewTypes_SingleInstance ).AsSelf().SingleInstance();
//         //     this.m_builder.RegisterTypes( viewTypes_Transient ).AsSelf().InstancePerDependency();
//         //     for ( const t of viewTypes )
//         //     {
//         //         this.RegisterViewsWhereDependOn( <System.Reflection.CType<CView>>t );
//         //     }
//         // }
//         // public RegisterViewsWhereDependOn( viewType: System.Reflection.CType< CView > ): void
//         // {
//         //     let attrDependOnList = viewType.GetCustomAttributes( TypeOf( Attributes.DependOnViewAttribute ), false );
//         //     if ( attrDependOnList == null || attrDependOnList.length == 0 )
//         //         return;
//         //     for ( const attr of attrDependOnList )
//         //     {
//         //         if ( attr.ViewType.GetCustomAttributeOne( TypeOf( CSingleInstanceViewAttribute ), true ) == null )
//         //             this.m_builder.RegisterType( attr.ViewType ).InstancePerDependency();
//         //         else
//         //             this.m_builder.RegisterType( attr.ViewType ).SingleInstance();
//         //         this.RegisterViewsWhereDependOn( attr.ViewType );
//         //     }
//         // }
//     }
// }


var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var Registration;

    (function (Registration) {
      var CSingleInstanceViewAttribute =
      /*#__PURE__*/
      function (_iberbar$System$CAttr7) {
        _inherits(CSingleInstanceViewAttribute, _iberbar$System$CAttr7);

        function CSingleInstanceViewAttribute() {
          _classCallCheck(this, CSingleInstanceViewAttribute);

          return _possibleConstructorReturn(this, _getPrototypeOf(CSingleInstanceViewAttribute).apply(this, arguments));
        }

        return CSingleInstanceViewAttribute;
      }(iberbar.System.CAttribute);

      Registration.CSingleInstanceViewAttribute = CSingleInstanceViewAttribute;

      function SingleInstanceView() {
        return iberbar.System.AttributeDecorate(new CSingleInstanceViewAttribute());
      }

      Registration.SingleInstanceView = SingleInstanceView;
    })(Registration = MVC.Registration || (MVC.Registration = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var Core;

    (function (Core) {
      var CActionBinder = function CActionBinder() {
        _classCallCheck(this, CActionBinder);
      };

      Core.CActionBinder = CActionBinder;
    })(Core = MVC.Core || (MVC.Core = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var Core;

    (function (Core) {
      var CComponentBindActions =
      /*#__PURE__*/
      function () {
        function CComponentBindActions() {
          _classCallCheck(this, CComponentBindActions);

          this.m_binderResult = null;
        }

        _createClass(CComponentBindActions, [{
          key: "InitView",
          value: function InitView(view) {
            var binder = view.LifetimeScope.Resolve(iberbar.System.Reflection.TypeOf(Core.CActionBinder));
            this.m_binderResult = binder.BindActions(view, null);
          }
        }, {
          key: "ReInitView",
          value: function ReInitView(view) {
            this.m_binderResult.Dispose();
            this.m_binderResult = null;
            this.InitView(view);
          }
        }, {
          key: "Dispose",
          value: function Dispose() {
            this.m_binderResult.Dispose();
          }
        }]);

        return CComponentBindActions;
      }();

      CComponentBindActions = __decorate([iberbar.System.Reflection.AutoReflectMetadata_Constructor, iberbar.System.Reflection.TypeNickname("iberbar::MVC::Components::CComponentBindActions")], CComponentBindActions);
      Core.CComponentBindActions = CComponentBindActions;
    })(Core = MVC.Core || (MVC.Core = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var Core;

    (function (Core) {
      var CComponentBindModels =
      /*#__PURE__*/
      function () {
        function CComponentBindModels() {
          _classCallCheck(this, CComponentBindModels);
        }

        _createClass(CComponentBindModels, [{
          key: "InitView",
          value: function InitView(view) {
            var binder = view.LifetimeScope.Resolve(iberbar.System.Reflection.TypeOf(Core.CViewModelBinder));
            var viewType = view.GetType();
            var fieldInfos = viewType.GetFields();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = fieldInfos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var field = _step.value;
                if (field.IsDefined(iberbar.System.Reflection.TypeOf(MVC.Attributes.CViewModelAttribute)) == false) continue;
                if (field.FieldType == null) continue;
                var model = view.LifetimeScope.Resolve(field.FieldType);
                binder.BindModel(view, model);
                field.SetValue(view, model);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        }, {
          key: "ReInitView",
          value: function ReInitView(view) {
            this.InitView(view);
          }
        }]);

        return CComponentBindModels;
      }();

      Core.CComponentBindModels = CComponentBindModels;
    })(Core = MVC.Core || (MVC.Core = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var Core;

    (function (Core) {
      var CComponentKernel = function CComponentKernel() {
        _classCallCheck(this, CComponentKernel);
      };

      Core.CComponentKernel = CComponentKernel;
    })(Core = MVC.Core || (MVC.Core = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var Core;

    (function (Core) {
      var CInitComponent_ViewController =
      /*#__PURE__*/
      function () {
        function CInitComponent_ViewController() {
          _classCallCheck(this, CInitComponent_ViewController);

          this.m_binderResults = null;
        }

        _createClass(CInitComponent_ViewController, [{
          key: "InitView",
          value: function InitView(view) {
            var viewType = view.GetType();
            var controllerTypeAttributes = viewType.GetCustomAttributes(TypeOf(MVC.Attributes.CAddControllerAttribute), true);
            if (controllerTypeAttributes.length == 0) return;
            this.m_binderResults = Array();
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = controllerTypeAttributes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var attribute = _step2.value;
                var binder = view.LifetimeScope.Resolve(iberbar.System.Reflection.TypeOf(Core.CActionBinder));
                var binderResult = binder.BindActions(view, attribute.ControllerType);
                this.m_binderResults.push(binderResult);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        }, {
          key: "ReInitView",
          value: function ReInitView(view) {
            if (this.m_binderResults != null && this.m_binderResults.length > 0) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = this.m_binderResults[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var r = _step3.value;
                  r.Dispose();
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                    _iterator3["return"]();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }

              this.m_binderResults = null;
            }

            this.InitView(view);
          }
        }, {
          key: "Dispose",
          value: function Dispose() {
            if (this.m_binderResults != null && this.m_binderResults.length > 0) {
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = this.m_binderResults[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var r = _step4.value;
                  r.Dispose();
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                    _iterator4["return"]();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }

              this.m_binderResults = null;
            }
          }
        }]);

        return CInitComponent_ViewController;
      }();

      CInitComponent_ViewController = __decorate([iberbar.System.Reflection.AutoReflectMetadata_Constructor, iberbar.System.Reflection.TypeNickname("iberbar::Mvc::ViewComponents::CInitComponent_ViewController")], CInitComponent_ViewController);
      Core.CInitComponent_ViewController = CInitComponent_ViewController;
      ;
    })(Core = MVC.Core || (MVC.Core = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var Core;

    (function (Core) {
      var CDefaultMapper =
      /*#__PURE__*/
      function () {
        function CDefaultMapper(componentKernelType, componentTypes) {
          _classCallCheck(this, CDefaultMapper);

          this.m_componentKernelType = null;
          this.m_componentTypes = null;
          this.m_componentTypesForViews = new iberbar.System.Collections.Generic.CDictionary({
            comparer: this
          });
          this.m_componentKernelType = componentKernelType;
          this.m_componentTypes = componentTypes;
        }

        _createClass(CDefaultMapper, [{
          key: "GetComponentKernelType",
          value: function GetComponentKernelType() {
            return this.m_componentKernelType;
          }
        }, {
          key: "GetComponentTypes",
          value: function GetComponentTypes(viewType) {
            var componentTypes;
            componentTypes = this.m_componentTypesForViews.Get(viewType);

            if (componentTypes == null) {
              componentTypes = Array.apply(void 0, _toConsumableArray(this.m_componentTypes));
              var attrs = viewType.GetCustomAttributes(iberbar.System.Reflection.TypeOf(MVC.Attributes.CAddViewComponentAttribute), true);

              if (attrs.length > 0) {
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                  for (var _iterator5 = attrs[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var attribute = _step5.value;
                    componentTypes.push(attribute.ComponentType);
                  }
                } catch (err) {
                  _didIteratorError5 = true;
                  _iteratorError5 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                      _iterator5["return"]();
                    }
                  } finally {
                    if (_didIteratorError5) {
                      throw _iteratorError5;
                    }
                  }
                }
              }

              this.m_componentTypesForViews.Add(viewType, componentTypes);
            }

            return componentTypes;
          }
        }, {
          key: "Equals",
          value: function Equals(a, b) {
            return a.IsEquivalentTo(b);
          }
        }]);

        return CDefaultMapper;
      }();

      Core.CDefaultMapper = CDefaultMapper;
    })(Core = MVC.Core || (MVC.Core = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var Core;

    (function (Core) {
      var CViewModelBinder = function CViewModelBinder() {
        _classCallCheck(this, CViewModelBinder);
      };

      Core.CViewModelBinder = CViewModelBinder;
    })(Core = MVC.Core || (MVC.Core = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var Core;

    (function (Core) {
      var CMapper = function CMapper() {
        _classCallCheck(this, CMapper);
      };

      Core.CMapper = CMapper;
    })(Core = MVC.Core || (MVC.Core = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    function AddController(controllerType) {
      return iberbar.System.AttributeDecorate(new MVC.Attributes.CAddControllerAttribute(controllerType));
    }

    MVC.AddController = AddController;
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    function AddViewComponent(componentType) {
      return iberbar.System.AttributeDecorate(new MVC.Attributes.CAddViewComponentAttribute(componentType));
    }

    MVC.AddViewComponent = AddViewComponent;
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var CBuilder =
    /*#__PURE__*/
    function () {
      function CBuilder(cb) {
        _classCallCheck(this, CBuilder);

        this.m_cb = null;
        this.m_componentKernelType = null;
        this.m_componentTypes = Array();
        this.m_componentTypesCommon = Array();
        this.m_cb = cb;
      }
      /**
       * 设置内核组件
       * @param componentKernelType
       */


      _createClass(CBuilder, [{
        key: "SetComponentKernel",
        value: function SetComponentKernel(componentKernelType) {
          this.m_componentKernelType = componentKernelType;
          this.m_cb.RegisterType(componentKernelType).AsSelf().InstancePerDependency();
        }
        /**
         * 添加通用的组件
         * @param componentType
         */

      }, {
        key: "AddComponent",
        value: function AddComponent(componentType, common) {
          if (this.m_componentTypes.firstOrDefault(function (t) {
            return t.IsEquivalentTo(componentType);
          }) == null && this.m_componentTypesCommon.firstOrDefault(function (t) {
            return t.IsEquivalentTo(componentType);
          }) == null) {
            if (common == false) this.m_componentTypesCommon.push(componentType);else this.m_componentTypes.push(componentType);
            this.m_cb.RegisterType(componentType).AsSelf().InstancePerDependency();
          }
        }
        /**
         * 注册模型绑定组件
         * @param modelBinderType 模型绑定器的类型
         * @param modelComponentType (可选)组件类型，默认 iberbar.MVC.Core.CComponentBindModels
         */

      }, {
        key: "AddComponentBindModels",
        value: function AddComponentBindModels(modelBinderType, modelComponentType) {
          this.m_cb.RegisterType(modelBinderType).AsSelf().As(iberbar.System.Reflection.TypeOf(MVC.Core.CViewModelBinder)).SingleInstance();
          this.AddComponent(modelComponentType == null ? iberbar.System.Reflection.TypeOf(MVC.Core.CComponentBindModels) : modelComponentType);
        }
        /**
         * 注册事件绑定组件
         * @param actionBinderType
         * @param actionComponentType
         * @param controllerComponentType
         */

      }, {
        key: "AddComponentBindActions",
        value: function AddComponentBindActions(actionBinderType, actionComponentType, controllerComponentType) {
          this.m_cb.RegisterType(actionBinderType).AsSelf().As(iberbar.System.Reflection.TypeOf(MVC.Core.CActionBinder)).SingleInstance();
          this.AddComponent(actionComponentType == null ? iberbar.System.Reflection.TypeOf(MVC.Core.CComponentBindActions) : actionComponentType);
          this.AddComponent(controllerComponentType == null ? iberbar.System.Reflection.TypeOf(MVC.Core.CInitComponent_ViewController) : controllerComponentType);
        }
        /**
         * 注册视图类型，搜索其使用的控制器类型并注册
         * @param viewType 视图类型
         */

      }, {
        key: "RegisterView",
        value: function RegisterView(viewType) {
          var attrsController = viewType.GetCustomAttributes(iberbar.System.Reflection.TypeOf(MVC.Attributes.CAddControllerAttribute), true);

          if (attrsController.length > 0) {
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
              for (var _iterator6 = attrsController[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var attr = _step6.value;
                this.m_cb.RegisterType(attr.ControllerType).AsSelf().InstancePerDependency();
              }
            } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                  _iterator6["return"]();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
            }
          }

          var attrsComponent = viewType.GetCustomAttributes(iberbar.System.Reflection.TypeOf(MVC.Attributes.CAddViewComponentAttribute), true);

          if (attrsComponent.length > 0) {
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = attrsComponent[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var _attr = _step7.value;
                this.AddComponent(_attr.ComponentType, false);
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                  _iterator7["return"]();
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
              }
            }
          }

          var fieldInfos = viewType.GetFields();

          if (fieldInfos.length > 0) {
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
              for (var _iterator8 = fieldInfos[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                var field = _step8.value;
                if (field.IsDefined(iberbar.System.Reflection.TypeOf(MVC.Attributes.CViewModelAttribute)) == false) continue;
                if (field.FieldType == null) continue;
                this.m_cb.RegisterType(field.FieldType).AsSelf().InstancePerDependency();
              }
            } catch (err) {
              _didIteratorError8 = true;
              _iteratorError8 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                  _iterator8["return"]();
                }
              } finally {
                if (_didIteratorError8) {
                  throw _iteratorError8;
                }
              }
            }
          }

          return this.m_cb.RegisterType(viewType).PropertiesAutowired();
        }
      }, {
        key: "Build",
        value: function Build() {
          var mapper = new MVC.Core.CDefaultMapper(this.m_componentKernelType, this.m_componentTypes);
          this.m_cb.RegisterInstance(iberbar.System.Reflection.TypeOf(MVC.Core.CDefaultMapper), mapper).AsSelf().As(iberbar.System.Reflection.TypeOf(MVC.Core.CMapper));
        }
      }]);

      return CBuilder;
    }();

    MVC.CBuilder = CBuilder;
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var CView =
    /*#__PURE__*/
    function () {
      function CView() {
        _classCallCheck(this, CView);

        this.m_id = null;
        this.m_componentKernel = null;
        this.m_components = Array();
        /**
         * autofac注入
         */

        this.m_lifetimeScope = null;
      }

      _createClass(CView, [{
        key: "Create",
        value: function Create() {
          this.ResolveComponents();
          var ret = this.InitComponentKernel.apply(this, arguments);
          this.InitComponents();
          this.OnCreated();
          return ret;
        }
      }, {
        key: "ReCreate",
        value: function ReCreate() {
          try {
            this.m_componentKernel.ReCreate(this);
          } catch (error) {
            console.error("Failed to initialize the kernel component of type <".concat(this.m_componentKernel.GetType().GetNickname(), ">"));
            console.error(error.stack);
          }

          this.InitComponents();
          this.OnCreated();
        }
      }, {
        key: "OnCreated",
        value: function OnCreated() {}
      }, {
        key: "InitComponentKernel",
        value: function InitComponentKernel() {
          try {
            var _this$m_componentKern;

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return (_this$m_componentKern = this.m_componentKernel).Create.apply(_this$m_componentKern, [this].concat(args));
          } catch (error) {
            console.error("Failed to initialize the kernel component of type <".concat(this.m_componentKernel.GetType().GetNickname(), ">"));
            console.error(error.stack);
          }
        }
      }, {
        key: "ResolveComponents",
        value: function ResolveComponents() {
          var _this6 = this;

          var mapper = this.GetMapper();
          var type = this.GetType();
          var componentKernelType = mapper.GetComponentKernelType();
          this.m_componentKernel = this.LifetimeScope.Resolve(componentKernelType, new iberbar.Autofac.CTypedParameter(iberbar.System.Reflection.TypeOf(CView), this));
          var componentTypes = mapper.GetComponentTypes(type);
          var attributesDisabled = type.GetCustomAttributes(iberbar.System.Reflection.TypeOf(MVC.Attributes.CDisableViewComponentAttribute), true);
          var _iteratorNormalCompletion9 = true;
          var _didIteratorError9 = false;
          var _iteratorError9 = undefined;

          try {
            var _loop = function _loop() {
              var componentType = _step9.value;
              var parameters = [new iberbar.Autofac.CTypedParameter(TypeOf(CView), _this6)];
              if (componentType == null) return "continue";
              if (attributesDisabled.firstOrDefault(function (ad) {
                return ad.ComponentType.IsEquivalentTo(componentType);
              }) != null) return "continue";

              if (_this6.m_components.firstOrDefault(function (c) {
                return c.GetType().IsEquivalentTo(componentType);
              }) != null) {
                console.error("duplicate type of component(".concat(componentType.GetNickname(), ") for view<").concat(type.GetNickname(), ">."));
                return "continue";
              }

              var component = null;

              try {
                var _this6$LifetimeScope;

                component = (_this6$LifetimeScope = _this6.LifetimeScope).Resolve.apply(_this6$LifetimeScope, [componentType].concat(parameters));
              } catch (error) {
                console.error("Can't resolve instance of component type(".concat(componentType.GetNickname(), ") for view<").concat(type.GetNickname(), ">"));
                console.error(error.stack);
              }

              if (component != null) {
                _this6.m_components.push(component);
              }
            };

            for (var _iterator9 = componentTypes[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
              var _ret = _loop();

              if (_ret === "continue") continue;
            }
          } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
                _iterator9["return"]();
              }
            } finally {
              if (_didIteratorError9) {
                throw _iteratorError9;
              }
            }
          }
        }
      }, {
        key: "InitComponents",
        value: function InitComponents() {
          var type = this.GetType();
          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = this.m_components[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var component = _step10.value;

              if (component.InitView != undefined) {
                try {
                  component.InitView(this);
                } catch (error) {
                  console.error("Exception occurred when the component(".concat(component.GetType().GetNickname(), ") initialized for view<").concat(type.GetNickname(), ">."));
                  console.error(error.stack);
                }
              }
            }
          } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
                _iterator10["return"]();
              }
            } finally {
              if (_didIteratorError10) {
                throw _iteratorError10;
              }
            }
          }
        }
      }, {
        key: "GetComponentKernel",
        value: function GetComponentKernel() {
          return this.m_componentKernel;
        }
      }, {
        key: "GetComponent",
        value: function GetComponent(type) {
          return this.m_components.firstOrDefault(function (t) {
            return t.GetType().IsEquivalentTo(type);
          });
        }
      }, {
        key: "Show",
        value: function Show() {
          this.GetComponentKernel().Show(this.__Callback(this.OnShow));
        }
      }, {
        key: "Hide",
        value: function Hide() {
          this.GetComponentKernel().Hide(this.__Callback(this.OnHide));
        }
      }, {
        key: "IsShow",
        value: function IsShow() {
          return this.GetComponentKernel().IsShow();
        }
      }, {
        key: "GetMapper",
        value: function GetMapper() {
          return this.LifetimeScope.Resolve(iberbar.System.Reflection.TypeOf(MVC.Core.CMapper));
        }
      }, {
        key: "Dispose",
        value: function Dispose() {
          var _iteratorNormalCompletion11 = true;
          var _didIteratorError11 = false;
          var _iteratorError11 = undefined;

          try {
            for (var _iterator11 = this.m_components[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
              var c = _step11.value;

              if (c.Dispose != null) {
                c.Dispose();
              }
            }
          } catch (err) {
            _didIteratorError11 = true;
            _iteratorError11 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
                _iterator11["return"]();
              }
            } finally {
              if (_didIteratorError11) {
                throw _iteratorError11;
              }
            }
          }

          if (this.m_componentKernel != null) {
            this.m_componentKernel.Dispose();
          }
        }
      }, {
        key: "OnShow",
        value: function OnShow() {}
      }, {
        key: "OnHide",
        value: function OnHide() {}
      }, {
        key: "LifetimeScope",
        set: function set(value) {
          this.m_lifetimeScope = value;
        },
        get: function get() {
          return this.m_lifetimeScope;
        }
      }, {
        key: "ID",
        set: function set(id) {
          this.m_id = id;
        },
        get: function get() {
          return this.m_id;
        }
      }]);

      return CView;
    }();

    __decorate([iberbar.Autofac.InjectLifetimeScope(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], CView.prototype, "LifetimeScope", null);

    MVC.CView = CView;
    ;
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {})); // namespace iberbar.MVC
// {
//     var uAllocateID: number = 0;
//     export function AllocateID(): string
//     {
//         uAllocateID++;
//         return "iberbar_Mvc1_" + uAllocateID;
//     }
//     export class CDataModel
//     {
//     }
//     export class CViewModel
//     {
//         /**
//          * 从视图中获取JQuery元素
//          * @param view 
//          */
//         public GetElementsFromView( view: CView ): void
//         {
//             let elementRoot = view.GetElementRoot()
//             let modelType = this.GetType();
//             let fieldInfos = modelType.GetFields();
//             for ( const fi of fieldInfos )
//             {
//                 let attrFromElement = fi.GetCustomAttributeOne( System.Reflection.TypeOf( Attributes.FromElementAttribute ) );
//                 if ( attrFromElement == null )
//                     continue;
//                 let elementWhere: JQuery = null;
//                 if ( attrFromElement.FromBody == true )
//                 {
//                     elementWhere = $( document.body ).find( attrFromElement.SelectorText );
//                 }
//                 else
//                 {
//                     if ( attrFromElement.SelectorText == null )
//                         elementWhere = elementRoot;
//                     else
//                         elementWhere = elementRoot.find( attrFromElement.SelectorText );
//                 }
//                 fi.SetValue( this, elementWhere );
//             }
//         }
//         /**
//          * 将data数据反射到当前的ViewModel中
//          * @param data 数据
//          */
//         public FromObject( data: any ): void
//         {
//             let modelType = this.GetType();
//             let fieldInfos = modelType.GetFields();
//             for ( const fi of fieldInfos )
//             {
//                 let attrFromElement = fi.GetCustomAttributeOne( System.Reflection.TypeOf( Attributes.FromElementAttribute ) );
//                 if ( attrFromElement == null )
//                     continue;
//                 let element: JQuery = fi.GetValue( this );
//                 if ( element == null || element.length == 0 )
//                     continue;
//                 let dataValue = data[ fi.Name ];
//                 let dataType = typeof( dataValue );
//                 if ( dataValue == null )
//                     continue;
//                 if ( dataType == "boolean" )
//                 {
//                     element.prop( "checked", dataValue );
//                 }
//                 else if ( dataType == "string" || dataType == "number" )
//                 {
//                     element.val( dataValue );
//                 }
//             }
//             let propertyInfos = modelType.GetProperties();
//             for ( const pi of propertyInfos )
//             {
//                 let dataValue = data[ pi.Name ];
//                 let dataType = typeof( dataValue );
//                 if ( dataValue == null )
//                     continue;
//                 pi.SetValue( this, dataValue );
//             }
//         }
//         /**
//          * 将当前的ViewModel模型反射到数据
//          * @param type 数据类型
//          */
//         public ToObject< T extends object >( type: System.Reflection.CType< T > ): T
//         {
//             let obj = type.GetConstructor().Invoke();
//             let modelType = this.GetType();
//             let fieldInfos = modelType.GetFields();
//             for ( const fi of fieldInfos )
//             {
//                 let attrFromElement = fi.GetCustomAttributeOne( System.Reflection.TypeOf( Attributes.FromElementAttribute ) );
//                 if ( attrFromElement == null )
//                     continue;
//                 let fi_obj = type.GetFieldOne( fi.Name );
//                 if ( fi_obj == null )
//                     continue;
//                 let attrDeclaringType = fi_obj.GetCustomAttributeOne( System.Reflection.TypeOf( System.Reflection.CDeclaringTypeAttribute ) );
//                 if ( attrDeclaringType == null )
//                     continue;
//                 let element = <JQuery>fi.GetValue( this );
//                 let dataValueType = attrDeclaringType.DeclaringType;
//                 let dataValue: any = null;
//                 if ( dataValueType.IsEquivalentTo( System.Reflection.TypeOf( Number ) ) )
//                 {
//                     dataValue = Number( element.val() );
//                     if ( Number.isNaN( dataValue ) )
//                         dataValue = null;
//                 }
//                 else if ( dataValueType.IsEquivalentTo( System.Reflection.TypeOf( String ) ) )
//                 {
//                     dataValue = element.val().toString();
//                 }
//                 else if ( dataValueType.IsEquivalentTo( System.Reflection.TypeOf( Boolean ) ) )
//                 {
//                     dataValue = element.prop( "checked" );
//                 }
//                 fi_obj.SetValue( obj, dataValue );
//             }
//             return <T>obj;
//         }
//     }
//     export abstract class CViewController
//     {
//     };
//     // export interface IViewProvider
//     // {
//     //     ResolveView< TView extends CView >( viewType: System.Reflection.CType< TView > ): TView;
//     // }
//     // var uViewProvider: IViewProvider = null;
//     // var uIocProvider: Autofac.IProvider = null;
//     // export function InitializeViewProvider( provider: IViewProvider ): void
//     // {
//     //     uViewProvider = provider;
//     //     //console.debug( Reflect.defineProperty( Mvc, "uViewProvider", { writable: false } ) );
//     // }
//     // export function GetViewProvider(): IViewProvider
//     // {
//     //     return uViewProvider;
//     // }
//     var uIocProvider: Autofac.ILifetimeScope = null;
//     export function InitializeIoc( iocProvider: Autofac.ILifetimeScope ): void
//     {
//         uIocProvider = iocProvider;
//     }
//     export function GetIoc(): Autofac.ILifetimeScope
//     {
//         return uIocProvider;
//     }
// }


var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    function DisableViewComponent(componentType) {
      return iberbar.System.AttributeDecorate(new MVC.Attributes.CDisableViewComponentAttribute(componentType));
    }

    MVC.DisableViewComponent = DisableViewComponent;
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    function ViewModel() {
      return iberbar.System.AttributeDecorate(new MVC.Attributes.CViewModelAttribute());
    }

    MVC.ViewModel = ViewModel;
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var Attributes;

      (function (Attributes) {
        var CDependOnViewAttribute =
        /*#__PURE__*/
        function (_iberbar$System$CAttr) {
          _inherits(CDependOnViewAttribute, _iberbar$System$CAttr);

          function CDependOnViewAttribute(viewType, selectorText) {
            var _this;

            _classCallCheck(this, CDependOnViewAttribute);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(CDependOnViewAttribute).call(this));
            _this.m_selectorText = null;
            _this.m_fromBody = false;
            _this.m_createMethod = KernelJquery.UViewCreateStyle.Append;
            _this.m_viewType = null;
            _this.m_selectorText = selectorText;
            _this.m_viewType = viewType;
            return _this;
          }

          _createClass(CDependOnViewAttribute, [{
            key: "ViewType",
            get: function get() {
              return this.m_viewType;
            }
          }, {
            key: "SelectorText",
            get: function get() {
              return this.m_selectorText;
            }
          }, {
            key: "FromBody",
            set: function set(value) {
              this.m_fromBody = value;
            },
            get: function get() {
              return this.m_fromBody;
            }
          }, {
            key: "CreateMethod",
            set: function set(value) {
              this.m_createMethod = value;
            },
            get: function get() {
              return this.m_createMethod;
            }
          }]);

          return CDependOnViewAttribute;
        }(iberbar.System.CAttribute);

        CDependOnViewAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Class, true, false), __metadata("design:paramtypes", [iberbar.System.Reflection.CType, String])], CDependOnViewAttribute);
        Attributes.CDependOnViewAttribute = CDependOnViewAttribute;
        ;
      })(Attributes = KernelJquery.Attributes || (KernelJquery.Attributes = {}));
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var Attributes;

      (function (Attributes) {
        var COverScrollAttribute =
        /*#__PURE__*/
        function (_iberbar$System$CAttr2) {
          _inherits(COverScrollAttribute, _iberbar$System$CAttr2);

          function COverScrollAttribute(selectorText) {
            var _this2;

            _classCallCheck(this, COverScrollAttribute);

            _this2 = _possibleConstructorReturn(this, _getPrototypeOf(COverScrollAttribute).call(this));
            _this2.m_selectorText = null;
            _this2.m_selectorText = selectorText;
            return _this2;
          }

          _createClass(COverScrollAttribute, [{
            key: "SelectorText",
            get: function get() {
              return this.m_selectorText;
            }
          }]);

          return COverScrollAttribute;
        }(iberbar.System.CAttribute);

        COverScrollAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Class, true, true), __metadata("design:paramtypes", [String])], COverScrollAttribute);
        Attributes.COverScrollAttribute = COverScrollAttribute;
        ;
      })(Attributes = KernelJquery.Attributes || (KernelJquery.Attributes = {}));
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var Attributes;

      (function (Attributes) {
        var CSetActionAttribute =
        /*#__PURE__*/
        function (_iberbar$System$CAttr3) {
          _inherits(CSetActionAttribute, _iberbar$System$CAttr3);

          function CSetActionAttribute(event, selectorText, fromBody) {
            var _this3;

            _classCallCheck(this, CSetActionAttribute);

            _this3 = _possibleConstructorReturn(this, _getPrototypeOf(CSetActionAttribute).call(this));
            _this3.m_event = null;
            _this3.m_selectorText = null;
            _this3.m_fromBody = false;
            _this3.m_event = event;
            _this3.m_selectorText = selectorText;
            _this3.m_fromBody = fromBody;
            return _this3;
          }

          _createClass(CSetActionAttribute, [{
            key: "Event",
            get: function get() {
              return this.m_event;
            }
          }, {
            key: "SelectorText",
            get: function get() {
              return this.m_selectorText;
            }
          }, {
            key: "FromBody",
            get: function get() {
              return this.m_fromBody;
            }
          }]);

          return CSetActionAttribute;
        }(iberbar.System.CAttribute);

        CSetActionAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Method, true, false), __metadata("design:paramtypes", [String, String, Boolean])], CSetActionAttribute);
        Attributes.CSetActionAttribute = CSetActionAttribute;
      })(Attributes = KernelJquery.Attributes || (KernelJquery.Attributes = {}));
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var Attributes;

      (function (Attributes) {
        var CTriggerElementAttribute =
        /*#__PURE__*/
        function (_iberbar$System$CAttr4) {
          _inherits(CTriggerElementAttribute, _iberbar$System$CAttr4);

          function CTriggerElementAttribute() {
            _classCallCheck(this, CTriggerElementAttribute);

            return _possibleConstructorReturn(this, _getPrototypeOf(CTriggerElementAttribute).apply(this, arguments));
          }

          return CTriggerElementAttribute;
        }(iberbar.System.CAttribute);

        CTriggerElementAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Parameter, false, false)], CTriggerElementAttribute);
        Attributes.CTriggerElementAttribute = CTriggerElementAttribute;
      })(Attributes = KernelJquery.Attributes || (KernelJquery.Attributes = {}));
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var Attributes;

      (function (Attributes) {
        var CTriggerEventAttribute =
        /*#__PURE__*/
        function (_iberbar$System$CAttr5) {
          _inherits(CTriggerEventAttribute, _iberbar$System$CAttr5);

          function CTriggerEventAttribute() {
            _classCallCheck(this, CTriggerEventAttribute);

            return _possibleConstructorReturn(this, _getPrototypeOf(CTriggerEventAttribute).apply(this, arguments));
          }

          return CTriggerEventAttribute;
        }(iberbar.System.CAttribute);

        CTriggerEventAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Parameter, false, false)], CTriggerEventAttribute);
        Attributes.CTriggerEventAttribute = CTriggerEventAttribute;
      })(Attributes = KernelJquery.Attributes || (KernelJquery.Attributes = {}));
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var Attributes;

      (function (Attributes) {
        var CTriggerViewAttribute =
        /*#__PURE__*/
        function (_iberbar$System$CAttr6) {
          _inherits(CTriggerViewAttribute, _iberbar$System$CAttr6);

          function CTriggerViewAttribute() {
            _classCallCheck(this, CTriggerViewAttribute);

            return _possibleConstructorReturn(this, _getPrototypeOf(CTriggerViewAttribute).apply(this, arguments));
          }

          return CTriggerViewAttribute;
        }(iberbar.System.CAttribute);

        CTriggerViewAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Parameter, false, false)], CTriggerViewAttribute);
        Attributes.CTriggerViewAttribute = CTriggerViewAttribute;
      })(Attributes = KernelJquery.Attributes || (KernelJquery.Attributes = {}));
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var Attributes;

      (function (Attributes) {
        var CWatchOverScrollAttribute =
        /*#__PURE__*/
        function (_iberbar$System$CAttr7) {
          _inherits(CWatchOverScrollAttribute, _iberbar$System$CAttr7);

          function CWatchOverScrollAttribute() {
            _classCallCheck(this, CWatchOverScrollAttribute);

            return _possibleConstructorReturn(this, _getPrototypeOf(CWatchOverScrollAttribute).apply(this, arguments));
          }

          return CWatchOverScrollAttribute;
        }(iberbar.System.CAttribute);

        CWatchOverScrollAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Method, false, false)], CWatchOverScrollAttribute);
        Attributes.CWatchOverScrollAttribute = CWatchOverScrollAttribute;
      })(Attributes = KernelJquery.Attributes || (KernelJquery.Attributes = {}));
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var Attributes;

      (function (Attributes) {
        var FromElementAttribute =
        /*#__PURE__*/
        function (_iberbar$System$CAttr8) {
          _inherits(FromElementAttribute, _iberbar$System$CAttr8);

          function FromElementAttribute(selectorText, fromBody) {
            var _this4;

            _classCallCheck(this, FromElementAttribute);

            _this4 = _possibleConstructorReturn(this, _getPrototypeOf(FromElementAttribute).call(this));
            _this4.m_selectorText = null;
            _this4.m_fromBody = false;
            _this4.m_selectorText = selectorText;
            return _this4;
          }

          _createClass(FromElementAttribute, [{
            key: "SelectorText",
            get: function get() {
              return this.m_selectorText;
            }
          }, {
            key: "FromBody",
            get: function get() {
              return this.m_fromBody;
            }
          }]);

          return FromElementAttribute;
        }(iberbar.System.CAttribute);

        FromElementAttribute = __decorate([iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Field, false, false), __metadata("design:paramtypes", [String, Boolean])], FromElementAttribute);
        Attributes.FromElementAttribute = FromElementAttribute;
        ;
      })(Attributes = KernelJquery.Attributes || (KernelJquery.Attributes = {}));
      /**
       * **(特性)**
       *
       * + 获取JQuery元素，内部会调用 System.Reflection.Enumerable 装饰器
       * + 修饰：字段
       *
       * @param selectorText JQuery选择器
       * @param fromBody (可选)是否从Body开始查找选择
       */


      function FromElement(selectorText, fromBody) {
        return function (target, fieldName) {
          iberbar.System.Reflection.Enumerable(target, fieldName);
          iberbar.System.AttributeDecorate(new Attributes.FromElementAttribute(selectorText, fromBody == true ? true : false))(target, fieldName);
        };
      }

      KernelJquery.FromElement = FromElement;
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var Attributes;

      (function (Attributes) {
        var FromViewAttribute =
        /*#__PURE__*/
        function (_iberbar$System$CAttr9) {
          _inherits(FromViewAttribute, _iberbar$System$CAttr9);

          function FromViewAttribute() {
            _classCallCheck(this, FromViewAttribute);

            return _possibleConstructorReturn(this, _getPrototypeOf(FromViewAttribute).call(this));
          }

          return FromViewAttribute;
        }(iberbar.System.CAttribute);

        Attributes.FromViewAttribute = FromViewAttribute;
        ;
      })(Attributes = KernelJquery.Attributes || (KernelJquery.Attributes = {}));

      function FromView() {
        return iberbar.System.AttributeDecorate(new Attributes.FromViewAttribute());
      }

      KernelJquery.FromView = FromView;
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var Components;

      (function (Components) {
        var CActionBinder =
        /*#__PURE__*/
        function () {
          function CActionBinder() {
            _classCallCheck(this, CActionBinder);
          }

          _createClass(CActionBinder, [{
            key: "BindActions",
            value: function BindActions(view, handlerType) {
              var result = new Components.CActionBinderResult();
              this.ReBindActionsForType(view, handlerType);
              return result;
            }
          }, {
            key: "ReBindActionsForType",
            value: function ReBindActionsForType(view, type) {
              var methodInfos = type == null ? view.GetType().GetMethods() : type.GetMethods();
              var binder = this;
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                var _loop = function _loop() {
                  var mi = _step.value;
                  var actionAttrList = mi.GetCustomAttributes(iberbar.System.Reflection.TypeOf(KernelJquery.Attributes.CSetActionAttribute));
                  if (actionAttrList == null || actionAttrList.length == 0) return "continue";
                  var _iteratorNormalCompletion2 = true;
                  var _didIteratorError2 = false;
                  var _iteratorError2 = undefined;

                  try {
                    for (var _iterator2 = actionAttrList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var actionAttr = _step2.value;
                      var event = actionAttr.Event;
                      var selectorText = actionAttr.SelectorText;
                      var elementTemp = null;

                      if (actionAttr.FromBody == true) {
                        if (selectorText == null) elementTemp = $("body");else elementTemp = $(selectorText);
                      } else {
                        if (selectorText == null) elementTemp = view.GetElementRoot();else elementTemp = view.GetElementRoot().find(selectorText);
                      }

                      if (elementTemp == null || elementTemp.length == 0) continue;

                      if (event == "click") {
                        elementTemp.click(function (e) {
                          return binder.InvokeControllerMethod(view, type, $(this), e, mi);
                        });
                      } else if (event == "valuechange") {
                        elementTemp.change(function (e) {
                          return binder.InvokeControllerMethod(view, type, $(this), e, mi);
                        });
                      } else {
                        elementTemp.on(event, function (e) {
                          return binder.InvokeControllerMethod(view, type, $(this), e, mi);
                        });
                      }
                    }
                  } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                        _iterator2["return"]();
                      }
                    } finally {
                      if (_didIteratorError2) {
                        throw _iteratorError2;
                      }
                    }
                  }
                };

                for (var _iterator = methodInfos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var _ret = _loop();

                  if (_ret === "continue") continue;
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                    _iterator["return"]();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            }
          }, {
            key: "InvokeControllerMethod",
            value: function InvokeControllerMethod(view, type, elementEvent, jqEvent, methodInfo) {
              var provider = view.LifetimeScope;
              var caller = type == null ? view : provider.Resolve(type);
              var parameterInfos = methodInfo.GetParameters();
              var parameters = Array(parameterInfos.length);

              for (var parameterIndex = 0; parameterIndex < parameterInfos.length; parameterIndex++) {
                var pi = parameterInfos[parameterIndex];

                if (pi.IsDefined(iberbar.System.Reflection.TypeOf(KernelJquery.Attributes.CTriggerElementAttribute))) {
                  parameters[parameterIndex] = elementEvent;
                  continue;
                }

                if (pi.IsDefined(iberbar.System.Reflection.TypeOf(KernelJquery.Attributes.CTriggerEventAttribute))) {
                  parameters[parameterIndex] = jqEvent;
                  continue;
                }

                if (pi.IsDefined(iberbar.System.Reflection.TypeOf(KernelJquery.Attributes.CTriggerViewAttribute))) {
                  parameters[parameterIndex] = view;
                  continue;
                }

                if (pi.IsDefined(iberbar.System.Reflection.TypeOf(iberbar.Autofac.CInjectLifetimeScopeAttribute))) {
                  parameters[parameterIndex] = provider;
                  continue;
                } //let attrDeclaringType = pi.GetCustomAttributeOne( System.Reflection.TypeOf( System.Reflection.CDeclaringTypeAttribute ) );


                var parameterType = pi.ParameterType;
                var parameterName = pi.Name;

                if (parameterType != null) {
                  parameters[parameterIndex] = provider.Resolve(parameterType); // let attrIocWithName = pi.GetCustomAttributeOne( System.Reflection.TypeOf( Autofac.CWithNameAttribute ) );
                  // if ( attrIocWithName != null )
                  // {
                  //     parameters[ parameterIndex ] = provider.ResolveNamed( parameterType, attrIocWithName.Name );
                  // }
                  // else
                  // {
                  //     let attrIocWithKey = pi.GetCustomAttributeOne( System.Reflection.TypeOf( Autofac.CWithKeyAttribute ) );
                  //     if ( attrIocWithKey != null )
                  //     {
                  //         parameters[ parameterIndex ] = provider.ResolveKeyed( parameterType, attrIocWithKey.Key );
                  //     }
                  //     else
                  //     {
                  //         parameters[ parameterIndex ] = provider.Resolve( parameterType );
                  //     }
                  // }

                  continue;
                }
              }

              return methodInfo.Invoke.apply(methodInfo, [caller].concat(parameters));
            }
          }]);

          return CActionBinder;
        }();

        Components.CActionBinder = CActionBinder;
      })(Components = KernelJquery.Components || (KernelJquery.Components = {}));
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var Components;

      (function (Components) {
        var CActionBinderResult =
        /*#__PURE__*/
        function () {
          function CActionBinderResult() {
            _classCallCheck(this, CActionBinderResult);
          }

          _createClass(CActionBinderResult, [{
            key: "Dispose",
            value: function Dispose() {}
          }]);

          return CActionBinderResult;
        }();

        Components.CActionBinderResult = CActionBinderResult;
      })(Components = KernelJquery.Components || (KernelJquery.Components = {}));
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var Components;

      (function (Components) {
        var CComponentDependOnViews =
        /*#__PURE__*/
        function () {
          function CComponentDependOnViews() {
            _classCallCheck(this, CComponentDependOnViews);

            this.m_viewsDependOn = Array();
          }

          _createClass(CComponentDependOnViews, [{
            key: "InitView",
            value: function InitView(view) {
              var viewProvider = view.LifetimeScope;
              var attrList_ViewDependOn = view.GetType().GetCustomAttributes(iberbar.System.Reflection.TypeOf(KernelJquery.Attributes.CDependOnViewAttribute), false);

              if (attrList_ViewDependOn != null && attrList_ViewDependOn.length > 0) {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                  for (var _iterator3 = attrList_ViewDependOn[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var attr = _step3.value;
                    var viewTemp = viewProvider.Resolve(attr.ViewType);

                    if (viewTemp == null) {
                      throw new Error("can't resolve view of type \"".concat(attr.ViewType.GetNickname(), "\""));
                    }

                    var elementWhere = null;

                    if (attr.FromBody == true) {
                      elementWhere = $(document.body);
                    } else {
                      if (attr.SelectorText == null) elementWhere = view.GetElementRoot();else elementWhere = view.GetElementRoot().find(attr.SelectorText);
                    }

                    viewTemp.Create(elementWhere, attr.CreateMethod);
                    this.m_viewsDependOn.push({
                      viewType: attr.ViewType,
                      viewInstance: viewTemp
                    });
                  }
                } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                      _iterator3["return"]();
                    }
                  } finally {
                    if (_didIteratorError3) {
                      throw _iteratorError3;
                    }
                  }
                }
              }
            }
          }, {
            key: "ReInitView",
            value: function ReInitView(view) {
              if (this.m_viewsDependOn.length > 0) {
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                  for (var _iterator4 = this.m_viewsDependOn[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var vd = _step4.value;
                    vd.viewInstance.Dispose();
                  }
                } catch (err) {
                  _didIteratorError4 = true;
                  _iteratorError4 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                      _iterator4["return"]();
                    }
                  } finally {
                    if (_didIteratorError4) {
                      throw _iteratorError4;
                    }
                  }
                }

                this.m_viewsDependOn = Array();
              }

              this.InitView(view);
            }
          }, {
            key: "Views",
            get: function get() {
              return this.m_viewsDependOn;
            }
          }]);

          return CComponentDependOnViews;
        }();

        CComponentDependOnViews = __decorate([iberbar.System.Reflection.AutoReflectMetadata_Constructor, iberbar.System.Reflection.TypeNickname("iberbar::MVC::KernelJquery::Components::CComponentDependOnViews")], CComponentDependOnViews);
        Components.CComponentDependOnViews = CComponentDependOnViews;
        ;
      })(Components = KernelJquery.Components || (KernelJquery.Components = {}));
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var Components;

      (function (Components) {
        var CComponentFadeIn =
        /*#__PURE__*/
        function () {
          function CComponentFadeIn() {
            _classCallCheck(this, CComponentFadeIn);

            this.m_duration = null;
          }

          _createClass(CComponentFadeIn, [{
            key: "Duration",
            get: function get() {
              return this.m_duration;
            },
            set: function set(value) {
              this.m_duration = value;
            }
          }]);

          return CComponentFadeIn;
        }();

        CComponentFadeIn = __decorate([iberbar.System.Reflection.TypeNickname("iberbar::MVC::KernelJquery::Components::CComponentFadeIn")], CComponentFadeIn);
        Components.CComponentFadeIn = CComponentFadeIn;
      })(Components = KernelJquery.Components || (KernelJquery.Components = {}));
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var Components;

      (function (Components) {
        var CComponentFadeOut =
        /*#__PURE__*/
        function () {
          function CComponentFadeOut() {
            _classCallCheck(this, CComponentFadeOut);

            this.m_duration = null;
          }

          _createClass(CComponentFadeOut, [{
            key: "Duration",
            get: function get() {
              return this.m_duration;
            },
            set: function set(value) {
              this.m_duration = value;
            }
          }]);

          return CComponentFadeOut;
        }();

        CComponentFadeOut = __decorate([iberbar.System.Reflection.TypeNickname("iberbar::MVC::KernelJquery::Components::CComponentFadeOut")], CComponentFadeOut);
        Components.CComponentFadeOut = CComponentFadeOut;
      })(Components = KernelJquery.Components || (KernelJquery.Components = {}));
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var Components;

      (function (Components) {
        var uAllocateID = 0;

        function AllocateID() {
          uAllocateID++;
          return "iberbar_MVC2_" + uAllocateID;
        }

        Components.AllocateID = AllocateID;

        var CComponentKernelJQuery =
        /*#__PURE__*/
        function (_MVC$Core$CComponentK) {
          _inherits(CComponentKernelJQuery, _MVC$Core$CComponentK);

          function CComponentKernelJQuery() {
            var _this5;

            _classCallCheck(this, CComponentKernelJQuery);

            _this5 = _possibleConstructorReturn(this, _getPrototypeOf(CComponentKernelJQuery).apply(this, arguments));
            _this5.m_uniqueId = null;
            _this5.m_elementRoot = null;
            _this5.m_componentFadeIn = null;
            _this5.m_componentFadeOut = null;
            return _this5;
          }

          _createClass(CComponentKernelJQuery, [{
            key: "Create",
            value: function Create(view, element, method) {
              this.m_uniqueId = AllocateID();
              var strHTML;
              var classes;

              try {
                strHTML = view.ReturnHTML();
                classes = view.ReturnClasses();
              } catch (error) {
                console.error("Failed to create html with JQueryKernel");
                console.error(error.stack);
                return;
              }

              var strClasses = "";

              if (classes != null && classes.length > 0) {
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                  for (var _iterator5 = classes[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var cls = _step5.value;
                    strClasses += cls + " ";
                  }
                } catch (err) {
                  _didIteratorError5 = true;
                  _iteratorError5 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                      _iterator5["return"]();
                    }
                  } finally {
                    if (_didIteratorError5) {
                      throw _iteratorError5;
                    }
                  }
                }

                strClasses = "class=\"".concat(strClasses, "\"");
              }

              strHTML = "<div id=\"".concat(this.m_uniqueId, "\" ").concat(strClasses, ">").concat(strHTML, "</div>");

              if (method == KernelJquery.UViewCreateStyle.Append) {
                this.m_elementRoot = element.append(strHTML).find("#" + this.m_uniqueId);
              } else if (method == KernelJquery.UViewCreateStyle.Before) {
                this.m_elementRoot = element.before(strHTML).parent().find("#" + this.m_uniqueId);
              } else {
                this.m_elementRoot = element.after(strHTML).parent().find("#" + this.m_uniqueId);
              }

              this.m_componentFadeIn = view.GetComponent(TypeOf(Components.CComponentFadeIn));
              this.m_componentFadeOut = view.GetComponent(TypeOf(Components.CComponentFadeOut));
            }
          }, {
            key: "ReCreate",
            value: function ReCreate(view) {
              var strHTML;

              try {
                strHTML = view.ReturnHTML();
              } catch (error) {
                console.error("Failed to create html with JQueryKernel");
                console.error(error.stack);
                return;
              }

              this.m_elementRoot.empty().append(strHTML);
            }
          }, {
            key: "Show",
            value: function Show(onshow) {
              if (this.m_componentFadeIn == null) {
                this.m_elementRoot.show();
                onshow.Execute();
              } else {
                this.m_elementRoot.show(this.m_componentFadeIn.Duration, function () {
                  onshow.Execute();
                });
              }
            }
          }, {
            key: "Hide",
            value: function Hide(onhide) {
              if (this.m_componentFadeOut == null) {
                this.m_elementRoot.hide();
                onhide.Execute();
              } else {
                this.m_elementRoot.hide(this.m_componentFadeOut.Duration, function () {
                  onhide.Execute();
                });
              }
            }
          }, {
            key: "IsShow",
            value: function IsShow() {
              return this.m_elementRoot.is(":hidden") == false;
            }
          }, {
            key: "Dispose",
            value: function Dispose() {
              this.m_elementRoot.remove();
              this.m_elementRoot = null;
            }
          }, {
            key: "ElementRoot",
            get: function get() {
              return this.m_elementRoot;
            }
          }]);

          return CComponentKernelJQuery;
        }(MVC.Core.CComponentKernel);

        Components.CComponentKernelJQuery = CComponentKernelJQuery;
      })(Components = KernelJquery.Components || (KernelJquery.Components = {}));
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var Components;

      (function (Components) {
        var CComponentOverScroll =
        /*#__PURE__*/
        function () {
          function CComponentOverScroll() {
            _classCallCheck(this, CComponentOverScroll);
          }

          _createClass(CComponentOverScroll, [{
            key: "InitView",
            value: function InitView(view) {
              var viewType = view.GetType();
              var componentKernel = view.GetComponentKernelJquery();
              var watch = this.FindWatchMethod(viewType);
              var attributes = viewType.GetCustomAttributes(TypeOf(KernelJquery.Attributes.COverScrollAttribute), true);
              var _iteratorNormalCompletion6 = true;
              var _didIteratorError6 = false;
              var _iteratorError6 = undefined;

              try {
                for (var _iterator6 = attributes[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                  var attr = _step6.value;
                  var element = null;
                  var selectorText = attr.SelectorText;

                  if (selectorText == null) {
                    element = componentKernel.ElementRoot;
                  } else {
                    element = componentKernel.ElementRoot.find(selectorText);
                  }

                  if (element.length > 0) {
                    element.css("overflow-x", "hidden");
                    element.css("overflow-y", "auto");
                    element.css("-webkit-overflow-scrolling", "touch");
                    this.SetOverScroll(view, element.get(0), watch);
                  }
                }
              } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                    _iterator6["return"]();
                  }
                } finally {
                  if (_didIteratorError6) {
                    throw _iteratorError6;
                  }
                }
              }
            }
          }, {
            key: "ReInitView",
            value: function ReInitView(view) {
              this.InitView(view);
            }
          }, {
            key: "FindWatchMethod",
            value: function FindWatchMethod(viewType) {
              var methodInfos = viewType.GetMethods();
              var _iteratorNormalCompletion7 = true;
              var _didIteratorError7 = false;
              var _iteratorError7 = undefined;

              try {
                for (var _iterator7 = methodInfos[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                  var method = _step7.value;
                  if (method.IsDefined(iberbar.System.Reflection.TypeOf(KernelJquery.Attributes.CWatchOverScrollAttribute))) return method;
                }
              } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                    _iterator7["return"]();
                  }
                } finally {
                  if (_didIteratorError7) {
                    throw _iteratorError7;
                  }
                }
              }

              return null;
            }
          }, {
            key: "SetOverScroll",
            value: function SetOverScroll(view, el, methodInfo) {
              if (el == undefined) return;
              el.addEventListener('touchstart', function () {
                var top = this.scrollTop,
                    totalScroll = this.scrollHeight,
                    currentScroll = top + this.offsetHeight;

                if (top === 0) {
                  this.scrollTop = 1;
                } else if (currentScroll === totalScroll) {
                  this.scrollTop = top - 1;
                }

                if (methodInfo != null) methodInfo.Invoke(view, $(this), KernelJquery.UOverScrollEvent.OnBegin);
              });
              el.addEventListener('touchmove', function (evt) {
                if (this.offsetHeight < this.scrollHeight) evt._isScroller = true;
              });
              el.addEventListener('touchend', function () {
                if (methodInfo != null) methodInfo.Invoke(view, $(this), KernelJquery.UOverScrollEvent.OnEnd);
              });
              el.addEventListener("scroll", function () {
                if (methodInfo != null) methodInfo.Invoke(view, $(this), KernelJquery.UOverScrollEvent.OnScrolling);
              });
            }
          }]);

          return CComponentOverScroll;
        }();

        CComponentOverScroll = __decorate([iberbar.System.Reflection.AutoReflectMetadata_Constructor, iberbar.System.Reflection.TypeNickname("iberbar::MVC::KernelJquery::Components::CComponentOverScroll")], CComponentOverScroll);
        Components.CComponentOverScroll = CComponentOverScroll;
        ;
      })(Components = KernelJquery.Components || (KernelJquery.Components = {}));
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var Components;

      (function (Components) {
        var CModelBinderInternal =
        /*#__PURE__*/
        function () {
          function CModelBinderInternal(view, model) {
            _classCallCheck(this, CModelBinderInternal);

            this.m_view = null;
            this.m_modelType = null;
            this.m_model = null;
            this.m_view = view;
            this.m_modelType = model.GetType();
            this.m_model = model;
          }

          _createClass(CModelBinderInternal, [{
            key: "Bind",
            value: function Bind() {
              var componentDependOnViews = this.m_view.GetComponent(iberbar.System.Reflection.TypeOf(Components.CComponentDependOnViews));
              this.BindPropertiesWithElementsAndViews(componentDependOnViews == null ? null : componentDependOnViews.Views);
            }
          }, {
            key: "BindPropertiesWithElementsAndViews",
            value: function BindPropertiesWithElementsAndViews(viewList) {
              var fieldInfos = this.m_modelType.GetFields();
              var _iteratorNormalCompletion8 = true;
              var _didIteratorError8 = false;
              var _iteratorError8 = undefined;

              try {
                for (var _iterator8 = fieldInfos[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                  var fi = _step8.value;
                  // 绑定DOM元素
                  var attrFromElement = fi.GetCustomAttributeOne(iberbar.System.Reflection.TypeOf(KernelJquery.Attributes.FromElementAttribute));

                  if (attrFromElement != null) {
                    this.BindFieldWithElement(fi, attrFromElement);
                    continue;
                  } // 绑定视图


                  var attrFromView = fi.GetCustomAttributeOne(iberbar.System.Reflection.TypeOf(KernelJquery.Attributes.FromViewAttribute));

                  if (attrFromView != null) {
                    this.BindFieldWithView(fi, viewList);
                    continue;
                  }
                }
              } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                    _iterator8["return"]();
                  }
                } finally {
                  if (_didIteratorError8) {
                    throw _iteratorError8;
                  }
                }
              }
            }
          }, {
            key: "BindFieldWithView",
            value: function BindFieldWithView(fieldInfo, viewList) {
              var attrDeclaringType = fieldInfo.GetCustomAttributeOne(iberbar.System.Reflection.TypeOf(iberbar.System.Reflection.CDeclaringTypeAttribute));
              if (attrDeclaringType == null) return;
              var isArray = false;
              var viewType = null;
              var bindType = fieldInfo.FieldType;

              if (bindType.IsInheritFrom(iberbar.System.Reflection.TypeOf(Array))) {
                if (attrDeclaringType.GenericTypes.length != 1) {
                  console.warn("");
                  return;
                }

                if (attrDeclaringType.GenericTypes[0].IsInheritFrom(iberbar.System.Reflection.TypeOf(MVC.CView)) == false) {
                  console.warn("");
                  return;
                }

                isArray = true;
                viewType = attrDeclaringType.GenericTypes[0];
              } else if (bindType.IsInheritFrom(iberbar.System.Reflection.TypeOf(MVC.CView))) {
                isArray = false;
                viewType = bindType;
              } else {
                console.warn("");
                return;
              }

              if (isArray == true) {
                var viewListTemp = Array();
                var _iteratorNormalCompletion9 = true;
                var _didIteratorError9 = false;
                var _iteratorError9 = undefined;

                try {
                  for (var _iterator9 = viewList[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var viewListNode = _step9.value;

                    if (viewListNode.viewType.IsEquivalentTo(viewType)) {
                      viewListTemp.push(viewListNode.viewInstance);
                    }
                  }
                } catch (err) {
                  _didIteratorError9 = true;
                  _iteratorError9 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
                      _iterator9["return"]();
                    }
                  } finally {
                    if (_didIteratorError9) {
                      throw _iteratorError9;
                    }
                  }
                }

                fieldInfo.SetValue(this.m_model, viewListTemp);
              } else {
                var _iteratorNormalCompletion10 = true;
                var _didIteratorError10 = false;
                var _iteratorError10 = undefined;

                try {
                  for (var _iterator10 = viewList[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var _viewListNode = _step10.value;

                    if (_viewListNode.viewType.IsEquivalentTo(viewType)) {
                      fieldInfo.SetValue(this.m_model, _viewListNode.viewInstance);
                      break;
                    }
                  }
                } catch (err) {
                  _didIteratorError10 = true;
                  _iteratorError10 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
                      _iterator10["return"]();
                    }
                  } finally {
                    if (_didIteratorError10) {
                      throw _iteratorError10;
                    }
                  }
                }
              }
            }
          }, {
            key: "BindFieldWithElement",
            value: function BindFieldWithElement(fieldInfo, attrFromElement) {
              var elementWhere = null;

              if (attrFromElement.FromBody == true) {
                elementWhere = $(document.body).find(attrFromElement.SelectorText);
              } else {
                if (attrFromElement.SelectorText == null) elementWhere = this.m_view.GetElementRoot();else elementWhere = this.m_view.GetElementRoot().find(attrFromElement.SelectorText);
              }

              fieldInfo.SetValue(this.m_model, elementWhere);
            }
          }]);

          return CModelBinderInternal;
        }();

        var CViewModelBinder =
        /*#__PURE__*/
        function (_MVC$Core$CViewModelB) {
          _inherits(CViewModelBinder, _MVC$Core$CViewModelB);

          function CViewModelBinder() {
            _classCallCheck(this, CViewModelBinder);

            return _possibleConstructorReturn(this, _getPrototypeOf(CViewModelBinder).apply(this, arguments));
          }

          _createClass(CViewModelBinder, [{
            key: "BindModel",
            value: function BindModel(view, model) {
              new CModelBinderInternal(view, model).Bind();
            }
          }]);

          return CViewModelBinder;
        }(MVC.Core.CViewModelBinder);

        Components.CViewModelBinder = CViewModelBinder;
      })(Components = KernelJquery.Components || (KernelJquery.Components = {}));
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      function AddViewComponentOverScroll() {
        return MVC.AddViewComponent(TypeOfDelay(function () {
          return KernelJquery.Components.CComponentOverScroll;
        }));
      }

      KernelJquery.AddViewComponentOverScroll = AddViewComponentOverScroll;
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      function DependOnView(viewType, selectorText, options) {
        if (viewType == null) {
          throw new Error("viewType must be valid.");
        } // if ( selectorText == null )
        // {
        //     throw new Error( "selectorText must be valid." );
        // }


        var attribute = new KernelJquery.Attributes.CDependOnViewAttribute(viewType, selectorText);

        if (options != null) {
          if (options.fromBody != null) {
            attribute.FromBody = options.fromBody;
          }

          if (options.createMethod != null) {
            attribute.CreateMethod = options.createMethod;
          }
        }

        return iberbar.System.AttributeDecorate(attribute);
      }

      KernelJquery.DependOnView = DependOnView;
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    MVC.CBuilder.prototype.SetComponentKernelJquery = function () {
      this.SetComponentKernel(iberbar.System.Reflection.TypeOf(MVC.KernelJquery.Components.CComponentKernelJQuery));
    };

    MVC.CBuilder.prototype.AddComponentBindModelsJquery = function (modelComponentType) {
      this.AddComponentBindModels(iberbar.System.Reflection.TypeOf(MVC.KernelJquery.Components.CViewModelBinder), modelComponentType);
    };

    MVC.CBuilder.prototype.AddComponentBindActionsJquery = function (actionComponentType, controllerComponentType) {
      this.AddComponentBindActions(iberbar.System.Reflection.TypeOf(MVC.KernelJquery.Components.CActionBinder), actionComponentType, controllerComponentType);
    };

    MVC.CBuilder.prototype.AddComponentDependOnView = function () {
      this.AddComponent(iberbar.System.Reflection.TypeOf(MVC.KernelJquery.Components.CComponentDependOnViews));
    };

    Reflect.defineProperty(MVC.CBuilder.prototype, "SetComponentKernelJQuery", {
      enumerable: false
    });
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    MVC.CView.prototype.GetElementRoot = function () {
      var componentJQuery = iberbar.System.dynamic_cast(this.GetComponentKernel(), MVC.KernelJquery.Components.CComponentKernelJQuery);
      if (componentJQuery == null) throw new Error("No Jquery");
      return componentJQuery.ElementRoot;
    };

    MVC.CView.prototype.GetComponentKernelJquery = function () {
      return this.GetComponentKernel();
    };

    MVC.CView.prototype.SetFadeIn = function (duration) {
      var componentType = TypeOf(MVC.KernelJquery.Components.CComponentFadeIn);
      var component = this.GetComponent(componentType);

      if (component == null) {
        console.warn("There is no component<".concat(componentType.GetNickname(), ">"));
      } else {
        component.Duration = duration;
      }
    };

    MVC.CView.prototype.SetFadeOut = function (duration) {
      var componentType = TypeOf(MVC.KernelJquery.Components.CComponentFadeOut);
      var component = this.GetComponent(componentType);

      if (component == null) {
        console.warn("There is no component<".concat(componentType.GetNickname(), ">"));
      } else {
        component.Duration = duration;
      }
    };

    Reflect.defineProperty(MVC.CView.prototype, "GetElementRoot", {
      enumerable: false
    });
    Reflect.defineProperty(MVC.CView.prototype, "SetFadeIn", {
      enumerable: false
    });
    Reflect.defineProperty(MVC.CView.prototype, "SetFadeOut", {
      enumerable: false
    });
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      function OverScroll(selectorText) {
        return iberbar.System.AttributeDecorate(new KernelJquery.Attributes.COverScrollAttribute(selectorText));
      }

      KernelJquery.OverScroll = OverScroll;
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      KernelJquery.uActionName_FocusIn = "focusin";
      KernelJquery.uActionName_FocusOut = "focusout";
      KernelJquery.uActionName_MouseOver = "mouseover";
      KernelJquery.uActionName_MouseOut = "mouseout";
      /**
      * **特性**
      *
      * + 标志控制器方法，绑定JQuery事件
      * + 修饰：方法
      *
      * @param event 事件类型
      * @param selectorText JQuery选择器
      * @param fromBody 是否从Body开始选择
      */

      function SetAction(event, selectorText, fromBody) {
        return iberbar.System.AttributeDecorate(new KernelJquery.Attributes.CSetActionAttribute(event, selectorText, fromBody == true ? true : false));
      }

      KernelJquery.SetAction = SetAction;

      function SetActionClick(selectorText, fromBody) {
        return SetAction("click", selectorText, fromBody);
      }

      KernelJquery.SetActionClick = SetActionClick;

      function SetActionValueChange(selectorText, fromBody) {
        return SetAction("valuechange", selectorText, fromBody);
      }

      KernelJquery.SetActionValueChange = SetActionValueChange;

      function SetActionSearch(selectorText, fromBody) {
        return SetAction("search", selectorText, fromBody);
      }

      KernelJquery.SetActionSearch = SetActionSearch;

      function SetActionFocusIn(selectorText, fromBody) {
        return SetAction(KernelJquery.uActionName_FocusIn, selectorText, fromBody);
      }

      KernelJquery.SetActionFocusIn = SetActionFocusIn;

      function SetActionFocusOut(selectorText, fromBody) {
        return SetAction(KernelJquery.uActionName_FocusOut, selectorText, fromBody);
      }

      KernelJquery.SetActionFocusOut = SetActionFocusOut;

      function SetActionMouseOver(selectorText, fromBody) {
        return SetAction(KernelJquery.uActionName_MouseOver, selectorText, fromBody);
      }

      KernelJquery.SetActionMouseOver = SetActionMouseOver;

      function SetActionMouseOut(selectorText, fromBody) {
        return SetAction(KernelJquery.uActionName_MouseOut, selectorText, fromBody);
      }

      KernelJquery.SetActionMouseOut = SetActionMouseOut;
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      function TriggerElement() {
        return iberbar.System.AttributeDecorate(new KernelJquery.Attributes.CTriggerElementAttribute());
      }

      KernelJquery.TriggerElement = TriggerElement;
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      function TriggerEvent() {
        return iberbar.System.AttributeDecorate(new KernelJquery.Attributes.CTriggerEventAttribute());
      }

      KernelJquery.TriggerEvent = TriggerEvent;
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      function TriggerView() {
        return iberbar.System.AttributeDecorate(new KernelJquery.Attributes.CTriggerViewAttribute());
      }

      KernelJquery.TriggerView = TriggerView;
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var UOverScrollEvent;

      (function (UOverScrollEvent) {
        UOverScrollEvent[UOverScrollEvent["OnBegin"] = 0] = "OnBegin";
        UOverScrollEvent[UOverScrollEvent["OnScrolling"] = 1] = "OnScrolling";
        UOverScrollEvent[UOverScrollEvent["OnEnd"] = 2] = "OnEnd";
      })(UOverScrollEvent = KernelJquery.UOverScrollEvent || (KernelJquery.UOverScrollEvent = {}));
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      var UViewCreateStyle;

      (function (UViewCreateStyle) {
        UViewCreateStyle[UViewCreateStyle["Append"] = 0] = "Append";
        UViewCreateStyle[UViewCreateStyle["Before"] = 1] = "Before";
        UViewCreateStyle[UViewCreateStyle["After"] = 2] = "After";
      })(UViewCreateStyle = KernelJquery.UViewCreateStyle || (KernelJquery.UViewCreateStyle = {}));

      ;
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));

var iberbar;

(function (iberbar) {
  var MVC;

  (function (MVC) {
    var KernelJquery;

    (function (KernelJquery) {
      /**
       * 例子
       *
       * ```typescript
       *  class CExample
       *  {
       *      protected OnWatchScroll( element: JQuery, event: UOverScrollEvent ): void
       *      {
       *      }
       *  }
       * ```
       */
      function WatchOverScroll() {
        return iberbar.System.AttributeDecorate(new KernelJquery.Attributes.CWatchOverScrollAttribute());
      }

      KernelJquery.WatchOverScroll = WatchOverScroll;
    })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
  })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
    var IStateMachine =
    /*#__PURE__*/
    function () {
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
    var IStateNode =
    /*#__PURE__*/
    function () {
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
      var CEventBus =
      /*#__PURE__*/
      function (_Event$IEventBus) {
        _inherits(CEventBus, _Event$IEventBus);

        function CEventBus() {
          var _this;

          _classCallCheck(this, CEventBus);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(CEventBus).apply(this, arguments));
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
      var CStateMachine =
      /*#__PURE__*/
      function (_Event$IStateMachine) {
        _inherits(CStateMachine, _Event$IStateMachine);

        function CStateMachine() {
          var _this2;

          _classCallCheck(this, CStateMachine);

          _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CStateMachine).apply(this, arguments));
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL1N5c3RlbS9Db2xsZWN0aW9ucy9HZW5lcmljL0NEaWN0aW9uYXJ5LnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vU3lzdGVtL0NvbGxlY3Rpb25zL0dlbmVyaWMvQ0VxdWFsaXR5Q29tcGFyZXIudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9TeXN0ZW0vTWV0YWRhdGEvQ01ldGFkYXRhQ29udGFpbmVyQnVpbGRlci50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL1N5c3RlbS9NZXRhZGF0YS9Db3JlL0NNZXRhZGF0YUNvbGxlY3Rpb24udHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9TeXN0ZW0vTWV0YWRhdGEvQ29yZS9DTWV0YWRhdGFDb250YWluZXIudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9TeXN0ZW0vTWV0YWRhdGEvX19NZXRhZGF0YUNvbnRhaW5lckluc3RhbmNlLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vU3lzdGVtL01ldGFkYXRhL0J1aWxkZXIvQ0RlZmVycmVkQ2FsbGJhY2sudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9TeXN0ZW0vTWV0YWRhdGEvQ29yZS9DTWV0YWRhdGFLZXkudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9TeXN0ZW0vTWV0YWRhdGEvQ29yZS9DTWV0YWRhdGFLZXlGb3JDbGFzcy50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL1N5c3RlbS9NZXRhZGF0YS9Db3JlL0NNZXRhZGF0YUtleUZvck5hbWVkLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vU3lzdGVtL01ldGFkYXRhL0NvcmUvQ01ldGFkYXRhS2V5Rm9yUGFyYW1ldGVyLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vU3lzdGVtL1JlZmxlY3Rpb24vQXV0b1JlZmxlY3RNZXRhZGF0YS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL1N5c3RlbS9SZWZsZWN0aW9uL0NBc3NlbWJseS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL1N5c3RlbS9SZWZsZWN0aW9uL01lbWJlckluZm8udHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9TeXN0ZW0vUmVmbGVjdGlvbi9DTWV0aG9kQmFzZS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL1N5c3RlbS9SZWZsZWN0aW9uL0NvbnN0cnVjdG9ySW5mby50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL1N5c3RlbS9VQXR0cmlidXRlVGFyZ2V0LnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vU3lzdGVtL0NBdHRyaWJ1dGUudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9TeXN0ZW0vQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vU3lzdGVtL1JlZmxlY3Rpb24vRmllbGRJbmZvLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vU3lzdGVtL1JlZmxlY3Rpb24vTWV0aG9kSW5mby50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL1N5c3RlbS9SZWZsZWN0aW9uL1Byb3BlcnR5SW5mby50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL1N5c3RlbS9SZWZsZWN0aW9uL1BhcmFtZXRlckluZm8udHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9TeXN0ZW0vUmVmbGVjdGlvbi9UeXBlLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vU3lzdGVtL09iamVjdF9HZXRUeXBlLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vU3lzdGVtL0F0dHJpYnV0ZURlY29yYXRlLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vU3lzdGVtL0F0dHJpYnV0ZVVzYWdlLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vU3lzdGVtL1JlZmxlY3Rpb24vRGVjbGFyaW5nVHlwZS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL1N5c3RlbS9SZWZsZWN0aW9uL0VudW1lcmFibGUudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9TeXN0ZW0vUmVmbGVjdGlvbi9OYW1lZEF0dHJpYnV0ZS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL1N5c3RlbS9SZWZsZWN0aW9uL1R5cGVOaWNrbmFtZS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL1N5c3RlbS9SZWZsZWN0aW9uL1VNZW1iZXJUeXBlcy50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL1N5c3RlbS9DYWxsYmFjay50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL1N5c3RlbS9EeW5hbWljQ2FzdC50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL1N5c3RlbS9Kc0FycmF5RXh0ZW5zaW9uLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vU3lzdGVtL091dFBhcmFtZXRlci50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL1N5c3RlbS9SZWZQYXJhbWV0ZXIudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9TeXN0ZW0vX18udHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9BdXRvZmFjL0NDb250YWluZXJCdWlsZGVyLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vQXV0b2ZhYy9DSW5qZWN0TGlmZXRpbWVTY29wZUF0dHJpYnV0ZS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQ01vZHVsZS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQ29yZS9DUGFyYW1ldGVyLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vQXV0b2ZhYy9Db3JlL0NDb25zdGFudFBhcmFtZXRlci50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQ05hbWVkUGFyYW1ldGVyLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vQXV0b2ZhYy9DUG9zaXRpb25hbFBhcmFtZXRlci50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQ1R5cGVkUGFyYW1ldGVyLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vQXV0b2ZhYy9JbmplY3Rpb24udHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9BdXRvZmFjL0tleS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvUHJvdmlkZXIudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9BdXRvZmFjL0FjdGl2YXRvcnMvQ0luc3RhbmNlQWN0aXZhdG9yLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vQXV0b2ZhYy9BY3RpdmF0b3JzL0RlbGVnYXRlL0NEZWxlZ2F0ZUFjdGl2YXRvci50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQWN0aXZhdG9ycy9Qcm92aWRlZEluc3RhbmNlL0NQcm92aWRlZEluc3RhbmNlQWN0aXZhdG9yLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vQXV0b2ZhYy9BY3RpdmF0b3JzL1JlZmxlY3Rpb24vQ0F1dG93aXJpbmdQYXJhbWV0ZXIudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9BdXRvZmFjL0FjdGl2YXRvcnMvUmVmbGVjdGlvbi9DQXV0b3dpcmluZ1Byb3BlcnR5SW5qZWN0b3IudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9BdXRvZmFjL0FjdGl2YXRvcnMvUmVmbGVjdGlvbi9DQ29uc3RydWN0b3JQYXJhbWV0ZXJCaW5kaW5nLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vQXV0b2ZhYy9BY3RpdmF0b3JzL1JlZmxlY3Rpb24vQ0RlZmF1bHRWYWx1ZVBhcmFtZXRlci50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQWN0aXZhdG9ycy9SZWZsZWN0aW9uL0NSZWZsZWN0aW9uQWN0aXZhdG9yLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vQXV0b2ZhYy9CdWlsZGVyL0NSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQnVpbGRlci9DQ29uY3JldGVSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQnVpbGRlci9DRGVmZXJyZWRDYWxsYmFjay50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQnVpbGRlci9DUmVnaXN0cmF0aW9uQnVpbGRlci50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQnVpbGRlci9DUmVnaXN0cmF0aW9uQnVpbGRlckhlbHBlci50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQnVpbGRlci9DUmVnaXN0cmF0aW9uRGF0YS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQnVpbGRlci9DU2Nhbm5pbmdBY3RpdmF0b3JEYXRhLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vQXV0b2ZhYy9CdWlsZGVyL0NTaW1wbGVBY3RpdmF0b3JEYXRhLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vQXV0b2ZhYy9CdWlsZGVyL0NTaW5nbGVSZWdpc3RyYXRpb25TdHlsZS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQnVpbGRlci9JUmVnaXN0cmF0aW9uQnVpbGRlci50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQ29yZS9DQWN0aXZhdGluZ0V2ZW50QXJncy50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQ29yZS9DQ29udGFpbmVyLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vQXV0b2ZhYy9Db3JlL0NEZWZhdWx0UHJvcGVydHlTZWxlY3Rvci50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQ29yZS9DRGVsZWdhdGVQcm9wZXJ0eVNlbGVjdG9yLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vQXV0b2ZhYy9Db3JlL0NEaXNwb3Nlci50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQ29yZS9DU2VydmljZS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQ29yZS9DS2V5ZWRTZXJ2aWNlLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vQXV0b2ZhYy9Db3JlL0NMaWZldGltZVNjb3BlU2VydmljZS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQ29yZS9DTmFtZWRQcm9wZXJ0eVBhcmFtZXRlci50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQ29yZS9DUmVzb2x2ZWRQYXJhbWV0ZXIudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9BdXRvZmFjL0NvcmUvQ1NlcnZpY2VFcXVhbGl0eUNvbXBhcmVyLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vQXV0b2ZhYy9Db3JlL0NUeXBlZFNlcnZpY2UudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9BdXRvZmFjL0NvcmUvR2VuSUQudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9BdXRvZmFjL0NvcmUvVUluc3RhbmNlU2hhcmluZy50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQ29yZS9MaWZldGltZS9DQ3VycmVudFNjb3BlTGlmZXRpbWUudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9BdXRvZmFjL0NvcmUvTGlmZXRpbWUvQ0xpZmV0aW1lU2NvcGUudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9BdXRvZmFjL0NvcmUvTGlmZXRpbWUvQ01hdGNoaW5nU2NvcGVMaWZldGltZS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQ29yZS9MaWZldGltZS9DUm9vdFNjb3BlTGlmZXRpbWUudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9BdXRvZmFjL0NvcmUvUmVnaXN0cmF0aW9uL0NDb21wb25lbnRSZWdpc3RyYXRpb24udHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9BdXRvZmFjL0NvcmUvUmVnaXN0cmF0aW9uL0NDb21wb25lbnRSZWdpc3RyeS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0F1dG9mYWMvQ29yZS9SZWdpc3RyYXRpb24vQ1NlcnZpY2VSZWdpc3RyYXRpb25JbmZvLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vQXV0b2ZhYy9Db3JlL1Jlc29sdmluZy9DSW5zdGFuY2VMb29rdXAudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9BdXRvZmFjL0NvcmUvUmVzb2x2aW5nL0NSZXNvbHZlT3BlcmF0aW9uLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vQXV0b2ZhYy9GZWF0dXJlcy9TY2FubmluZy9DU2Nhbm5pbmdSZWdpc3RyYXRpb25FeHRlbnNpb25zLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDL1NyYy9BdHRyaWJ1dGVzL0NBZGRDb250cm9sbGVyQXR0cmlidXRlLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDL1NyYy9BdHRyaWJ1dGVzL0NBZGRWaWV3Q29tcG9uZW50QXR0cmlidXRlLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDL1NyYy9BdHRyaWJ1dGVzL0NEaXNhYmxlVmlld0NvbXBvbmVudEF0dHJpYnV0ZS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL01WQy9TcmMvQXR0cmlidXRlcy9DVmlld01vZGVsQXR0cmlidXRlLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDL1NyYy9BdHRyaWJ1dGVzL1NldEFjdGlvblN1bW1hcnkudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9NVkMvU3JjL0F0dHJpYnV0ZXMvU2V0Q29udHJvbGxlci50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL01WQy9TcmMvUmVnaXN0cmF0aW9uL0NSZWdpc3RyYW9yLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDL1NyYy9SZWdpc3RyYXRpb24vQ1NpbmdsZUluc3RhbmNlVmlld0F0dHJpYnV0ZS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL01WQy9TcmMvQ29yZS9DQWN0aW9uQmluZGVyLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDL1NyYy9Db3JlL0NDb21wb25lbnRCaW5kQWN0aW9ucy50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL01WQy9TcmMvQ29yZS9DQ29tcG9uZW50QmluZE1vZGVscy50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL01WQy9TcmMvQ29yZS9DQ29tcG9uZW50S2VybmVsLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDL1NyYy9Db3JlL0NDb21wb25lbnRWaWV3Q29udHJvbGxlci50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL01WQy9TcmMvQ29yZS9DTWFwcGluZy50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL01WQy9TcmMvQ29yZS9DVmlld01vZGVsQmluZGVyLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDL1NyYy9Db3JlL0lNYXBwaW5nLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDL1NyYy9BZGRDb250cm9sbGVyLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDL1NyYy9BZGRWaWV3Q29tcG9uZW50LnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDL1NyYy9DQnVpbGRlci50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL01WQy9TcmMvQ1ZpZXcudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9NVkMvU3JjL0NvcmUudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9NVkMvU3JjL0Rpc2FibGVWaWV3Q29tcG9uZW50LnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDL1NyYy9WaWV3TW9kZWwudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9NVkMuS2VybmVsSnF1ZXJ5L1NyYy9BdHRyaWJ1dGVzL0NEZXBlbmRPblZpZXdBdHRyaWJ1dGUudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9NVkMuS2VybmVsSnF1ZXJ5L1NyYy9BdHRyaWJ1dGVzL0NPdmVyU2NvbGxBdHRyaWJ1dGUudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9NVkMuS2VybmVsSnF1ZXJ5L1NyYy9BdHRyaWJ1dGVzL0NTZXRBY3Rpb25BdHRyaWJ1dGUudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9NVkMuS2VybmVsSnF1ZXJ5L1NyYy9BdHRyaWJ1dGVzL0NUcmlnZ2VyRWxlbWVudEF0dHJpYnV0ZS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL01WQy5LZXJuZWxKcXVlcnkvU3JjL0F0dHJpYnV0ZXMvQ1RyaWdnZXJFdmVudEF0dHJpYnV0ZS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL01WQy5LZXJuZWxKcXVlcnkvU3JjL0F0dHJpYnV0ZXMvQ1RyaWdnZXJWaWV3QXR0cmlidXRlLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDLktlcm5lbEpxdWVyeS9TcmMvQXR0cmlidXRlcy9DV2F0Y2hPdmVyU2Nyb2xsQXR0cmlidXRlLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDLktlcm5lbEpxdWVyeS9TcmMvQXR0cmlidXRlcy9Gcm9tRWxlbWVudC50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL01WQy5LZXJuZWxKcXVlcnkvU3JjL0F0dHJpYnV0ZXMvRnJvbVZpZXcudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9NVkMuS2VybmVsSnF1ZXJ5L1NyYy9Db21wb25lbnRzL0NBY3Rpb25CaW5kZXIudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9NVkMuS2VybmVsSnF1ZXJ5L1NyYy9Db21wb25lbnRzL0NBY3Rpb25CaW5kZXJSZXN1bHQudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9NVkMuS2VybmVsSnF1ZXJ5L1NyYy9Db21wb25lbnRzL0NDb21wb25lbnREZXBlbmRPblZpZXdzLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDLktlcm5lbEpxdWVyeS9TcmMvQ29tcG9uZW50cy9DQ29tcG9uZW50RmFkZUluLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDLktlcm5lbEpxdWVyeS9TcmMvQ29tcG9uZW50cy9DQ29tcG9uZW50RmFkZU91dC50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL01WQy5LZXJuZWxKcXVlcnkvU3JjL0NvbXBvbmVudHMvQ0NvbXBvbmVudEtlcm5lbEpRdWVyeS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL01WQy5LZXJuZWxKcXVlcnkvU3JjL0NvbXBvbmVudHMvQ0NvbXBvbmVudE92ZXJTY3JvbGwudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9NVkMuS2VybmVsSnF1ZXJ5L1NyYy9Db21wb25lbnRzL0NWaWV3TW9kZWxCaW5kZXIudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9NVkMuS2VybmVsSnF1ZXJ5L1NyYy9BZGRWaWV3Q29tcG9uZW50T3ZlclNjcm9sbC50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL01WQy5LZXJuZWxKcXVlcnkvU3JjL0RlcGVuZE9uVmlldy50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL01WQy5LZXJuZWxKcXVlcnkvU3JjL0V4dGVuc2lvbnNfQ0J1aWxkZXIudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9NVkMuS2VybmVsSnF1ZXJ5L1NyYy9FeHRlbnNpb25zX0NWaWV3LnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDLktlcm5lbEpxdWVyeS9TcmMvT3ZlclNjcm9sbC50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL01WQy5LZXJuZWxKcXVlcnkvU3JjL1NldEFjdGlvbi50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL01WQy5LZXJuZWxKcXVlcnkvU3JjL1RyaWdnZXJFbGVtZW50LnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDLktlcm5lbEpxdWVyeS9TcmMvVHJpZ2dlckV2ZW50LnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDLktlcm5lbEpxdWVyeS9TcmMvVHJpZ2dlclZpZXcudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9NVkMuS2VybmVsSnF1ZXJ5L1NyYy9VT3ZlclNjcm9sbEV2ZW50LnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vTVZDLktlcm5lbEpxdWVyeS9TcmMvVVZpZXdDcmVhdGVTdHlsZS50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL01WQy5LZXJuZWxKcXVlcnkvU3JjL1dhdGNoT3ZlclNjcm9sbC50cyIsIkc6L0NvZGUvbHVqdWh1aS5jb20vV2ViVmlldy9pYmVyYmFyLlR5cGVzY3JpcHQvYmluL0V2ZW50L0V2ZW50LnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vRXZlbnQvRXZlbnRCdXMudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9FdmVudC9TdGF0ZU1hY2hpbmUudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9FdmVudC9TdGF0ZU5vZGUudHMiLCJHOi9Db2RlL2x1anVodWkuY29tL1dlYlZpZXcvaWJlcmJhci5UeXBlc2NyaXB0L2Jpbi9FdmVudC9pbXBsZW1lbnRzL0V2ZW50QnVzLnRzIiwiRzovQ29kZS9sdWp1aHVpLmNvbS9XZWJWaWV3L2liZXJiYXIuVHlwZXNjcmlwdC9iaW4vRXZlbnQvaW1wbGVtZW50cy9TdGF0ZU1hY2hpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBVSxPQUFWOztBQUFBLENBQUEsVUFBVSxPQUFWLEVBQWlCO0FBQUMsTUFBQSxNQUFBOztBQUFBLEdBQUEsVUFBQSxNQUFBLEVBQU07QUFBQyxRQUFBLFdBQUE7O0FBQUEsS0FBQSxVQUFBLFdBQUEsRUFBVztBQUFDLFVBQUEsT0FBQTs7QUFBQSxPQUFBLFVBQUEsT0FBQSxFQUFPO0FBQUEsWUFFM0IsV0FGMkI7QUFBQTtBQUFBO0FBUXBDLCtCQUFhLE9BQWIsRUFFQztBQUFBOztBQU5PLGlCQUFBLFVBQUEsR0FBd0MsSUFBSSxPQUFBLENBQUEsaUJBQUosRUFBeEM7QUFFQSxpQkFBQSxNQUFBLEdBQXlDLEVBQXpDOztBQU1KLGdCQUFLLE9BQU8sSUFBSSxJQUFoQixFQUNBO0FBQ0ksa0JBQUssT0FBTyxDQUFDLFFBQVIsSUFBb0IsSUFBekIsRUFDSSxLQUFLLFVBQUwsR0FBa0IsT0FBTyxDQUFDLFFBQTFCO0FBQ1A7QUFDSjs7QUFqQm1DO0FBQUE7QUFBQSxnQ0FtQmhDLEdBbkJnQyxFQW1CckIsS0FuQnFCLEVBbUJSO0FBRXhCLGtCQUFLLEtBQUssVUFBTCxDQUFpQixHQUFqQixDQUFMLEVBQ0ksTUFBTSxJQUFJLEtBQUosRUFBTjtBQUNKLG1CQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWtCO0FBQUUsZ0JBQUEsR0FBRyxFQUFFLEdBQVA7QUFBWSxnQkFBQSxLQUFLLEVBQUU7QUFBbkIsZUFBbEI7QUFDSDtBQXhCbUM7QUFBQTtBQUFBLHVDQTBCekIsR0ExQnlCLEVBMEJoQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUVoQixxQ0FBaUIsS0FBSyxNQUF0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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDak1BLElBQVUsT0FBVjs7QUFBQSxDQUFBLFVBQVUsT0FBVixFQUFpQjtBQUFDLE1BQUEsT0FBQTs7QUFBQSxHQUFBLFVBQUEsT0FBQSxFQUFPO0FBQUEsUUFPUixVQVBRO0FB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QUFBO0FBQUE7O0FBQUE7OztBQUVjLGlCQUFBLE9BQUEsR0FBZ0YsSUFBSSxPQUFKLEVBQWhGO0FBRmQ7QUFzQkM7O0FBeEI2QjtBQUFBO0FBQUEsbUNBTVQsS0FOUyxFQU1RO0FBRTlCLGdCQUFJLFNBQVMsR0FBUSxLQUFLLENBQUMsT0FBTixHQUFnQixjQUFoQixFQUFyQjtBQUNBLGdCQUFJLFNBQVMsR0FBRyxLQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWtCLFNBQWxCLENBQWhCOztBQUNBLGdCQUFLLFNBQVMsSUFBSSxJQUFsQixFQUNBO0FBQ0ksb0JBQU0sS0FBSyxDQUFFLHNCQUFGLENBQVg7QUFDSDs7QUFDRCxpQkFBSyxPQUFMLENBQWEsR0FBYixDQUF1QixTQUF2QixFQUFrQyxLQUFsQztBQUNBLFlBQUEsS0FBSyxDQUFDLFVBQU47QUFDSDtBQWhCeUI7QUFBQTtBQUFBLG1DQWtCd0IsU0FsQnhCLEVBa0J3RTtBQUU5RixnQkFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLGNBQVYsRUFBaEI7QUFDQSxnQkFBSSxLQUFLLEdBQUcsS0FBSyxPQUFMLENBQWEsR0FBYixDQUFrQixTQUFsQixDQUFaO0FBQ0EsbUJBQW1CLEtBQW5CO0FBQ0g7QUF2QnlCOztBQUFBO0FBQUEsUUFFSyxLQUFBLENBQUEsYUFGTDs7QUFFakIsTUFBQSxVQUFBLENBQUEsYUFBQSxHQUFhLGFBQWI7QUF1QmhCLEtBekJ1QixFQUFBLFVBQVUsR0FBVixLQUFBLENBQUEsVUFBQSxLQUFBLEtBQUEsQ0FBQSxVQUFBLEdBQVUsRUFBVixDQUFBO0FBeUJ2QixHQXpCaUIsRUFBQSxLQUFLLEdBQUwsT0FBQSxDQUFBLEtBQUEsS0FBQSxPQUFBLENBQUEsS0FBQSxHQUFLLEVBQUwsQ0FBQTtBQXlCakIsQ0F6QkQsRUFBVSxPQUFPLEtBQVAsT0FBTyxHQUFBLEVBQUEsQ0FBakIiLCJmaWxlIjoiaWJlcmJhci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWNcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENEaWN0aW9uYXJ5PCBUS2V5LCBUVmFsdWUgPiBpbXBsZW1lbnRzIElEaWN0aW9uYXJ5PCBUS2V5LCBUVmFsdWUgPlxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgbV9jb21wYXJlcjogSUVxdWFsaXR5Q29tcGFyZXI8IFRLZXkgPiA9IG5ldyBDRXF1YWxpdHlDb21wYXJlcjwgVEtleSA+KCk7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9kYXRhOiB7IGtleTogVEtleSwgdmFsdWU6IFRWYWx1ZSB9W10gPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoIG9wdGlvbnM/OiB7XHJcbiAgICAgICAgICAgIGNvbXBhcmVyPzogSUVxdWFsaXR5Q29tcGFyZXI8IFRLZXkgPlxyXG4gICAgICAgIH0gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBvcHRpb25zICE9IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIG9wdGlvbnMuY29tcGFyZXIgIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX2NvbXBhcmVyID0gb3B0aW9ucy5jb21wYXJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQWRkKGtleTogVEtleSwgdmFsdWU6IFRWYWx1ZSk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5Db250YWluS2V5KCBrZXkgKSApXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgdGhpcy5tX2RhdGEucHVzaCggeyBrZXk6IGtleSwgdmFsdWU6IHZhbHVlIH0gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvbnRhaW5LZXkoa2V5OiBUS2V5KTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICggY29uc3QgbiBvZiB0aGlzLm1fZGF0YSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5tX2NvbXBhcmVyLkVxdWFscyggbi5rZXksIGtleSApIClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSZW1vdmUoa2V5OiBUS2V5KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXQoa2V5OiBUS2V5KTogVFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKCBjb25zdCBuIG9mIHRoaXMubV9kYXRhIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLm1fY29tcGFyZXIuRXF1YWxzKCBuLmtleSwga2V5ICkgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ2xlYXIoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gZm9yICggY29uc3QgbiBvZiB0aGlzLm1fZGF0YSApXHJcbiAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgLy8gICAgIGlmICggbi52YWx1ZSAhPSBudWxsICYmICg8YW55Pm4udmFsdWUpWyBcIkRpc3Bvc2VcIiBdICE9IG51bGwgKVxyXG4gICAgICAgICAgICAvLyAgICAge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICg8YW55Pm4udmFsdWUpWyBcIkRpc3Bvc2VcIiBdKCk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgdGhpcy5tX2RhdGEgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBFYWNoKCBwcm9jZXNzOiBTeXN0ZW0uVENhbGxiYWNrPCAoIGtleTogVEtleSwgdmFsdWU6IFRWYWx1ZSApID0+IHZvaWQgPiApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKCBjb25zdCBuIG9mIHRoaXMubV9kYXRhIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5FeGVjdXRlKCBuLmtleSwgbi52YWx1ZSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpY1xyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0VxdWFsaXR5Q29tcGFyZXI8IFQgPiBpbXBsZW1lbnRzIElFcXVhbGl0eUNvbXBhcmVyPCBUID5cclxuICAgIHtcclxuICAgICAgICBFcXVhbHMoIGE6IFQsIGI6IFQgKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEgPT09IGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxuLy8gbmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLk1ldGFkYXRhXHJcbi8vIHtcclxuLy8gICAgIGV4cG9ydCBjbGFzcyBDTWV0YWRhdGFDb250YWluZXJCdWlsZGVyXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2NvbmZpZ3VyYXRpb25DYWxsYmFja3M6IEJ1aWxkZXIuQ0RlZmVycmVkQ2FsbGJhY2tbXSA9IFtdO1xyXG5cclxuLy8gICAgICAgICBwdWJsaWMgQWRkQXR0cmlidXRlKCB0eXBlOiBSZWZsZWN0aW9uLkNUeXBlLCB0YXJnZXQ6IFVBdHRyaWJ1dGVUYXJnZXQsIGF0dHJpYnV0ZTogQ0F0dHJpYnV0ZSApOiB2b2lkXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICB0aGlzLkFkZENhbGxiYWNrKCByZWdpc3RyeSA9PlxyXG4vLyAgICAgICAgICAgICB7XHJcblxyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIHB1YmxpYyBCdWlsZCgpOiBJTWV0YWRhdGFDb250YWluZXJcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgcHVibGljIEFkZENhbGxiYWNrKCBjYWxsYmFjazogKCByZWdpc3RyeTogQ29yZS5JTWV0YWRhdGFSZWdpc3RyeSApID0+IHZvaWQgKTogdm9pZFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgbGV0IGMgPSBuZXcgQnVpbGRlci5DRGVmZXJyZWRDYWxsYmFjayggY2FsbGJhY2sgKTtcclxuLy8gICAgICAgICAgICAgdGhpcy5tX2NvbmZpZ3VyYXRpb25DYWxsYmFja3MucHVzaCggYyApO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLk1ldGFkYXRhLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENNZXRhZGF0YUNvbGxlY3Rpb24gaW1wbGVtZW50cyBJTWV0YWRhdGFDb2xsZWN0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2xpc3Q6IENBdHRyaWJ1dGVbXSA9IFtdO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFkZEF0dHJpYnV0ZSggYXR0cmlidXRlOiBDQXR0cmlidXRlICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9saXN0LnNwbGljZSggMCwgMCwgYXR0cmlidXRlICk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgR2V0QXR0cmlidXRlT25lPFQgZXh0ZW5kcyBDQXR0cmlidXRlPiggdHlwZTogUmVmbGVjdGlvbi5DVHlwZSApOiBUXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKCBjb25zdCBhdHRyaWJ1dGUgb2YgdGhpcy5tX2xpc3QgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGF0dHJpYnV0ZS5HZXRUeXBlKCkuSXNFcXVpdmFsZW50VG8oIHR5cGUgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUPmF0dHJpYnV0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldEF0dHJpYnV0ZXM8VCBleHRlbmRzIENBdHRyaWJ1dGU+KCB0eXBlOiBSZWZsZWN0aW9uLkNUeXBlPFQ+ICk6IFRbXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZUxpc3Q6IFRbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKCBjb25zdCBhdHRyaWJ1dGUgb2YgdGhpcy5tX2xpc3QgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGF0dHJpYnV0ZS5HZXRUeXBlKCkuSXNFcXVpdmFsZW50VG8oIHR5cGUgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTGlzdC5wdXNoKCA8VD5hdHRyaWJ1dGUgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlTGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgR2V0QXR0cmlidXRlc0FsbCgpOiBDQXR0cmlidXRlW10ge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufSIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9DTWV0YWRhdGFDb2xsZWN0aW9uLnRzXCIgLz5cclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uTWV0YWRhdGEuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ01ldGFkYXRhQ29udGFpbmVyIGltcGxlbWVudHMgSU1ldGFkYXRhQ29udGFpbmVyLCBDb2xsZWN0aW9ucy5HZW5lcmljLklFcXVhbGl0eUNvbXBhcmVyPENNZXRhZGF0YUtleT5cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fcG9vbDogQ29sbGVjdGlvbnMuR2VuZXJpYy5JRGljdGlvbmFyeTwgQ01ldGFkYXRhS2V5LCBJTWV0YWRhdGFDb2xsZWN0aW9uID4gPSBuZXcgQ29sbGVjdGlvbnMuR2VuZXJpYy5DRGljdGlvbmFyeSggeyBjb21wYXJlcjogdGhpcyB9ICk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRPckFkZENvbGxlY3Rpb24oIGtleTogQ29yZS5DTWV0YWRhdGFLZXkgKTogSU1ldGFkYXRhQ29sbGVjdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvbGxlY3Rpb24gPSB0aGlzLm1fcG9vbC5HZXQoIGtleSApO1xyXG4gICAgICAgICAgICBpZiAoIGNvbGxlY3Rpb24gPT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9wb29sLkFkZCgga2V5LCBjb2xsZWN0aW9uID0gbmV3IENNZXRhZGF0YUNvbGxlY3Rpb24oKSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldENvbGxlY3Rpb24oIGtleTogQ29yZS5DTWV0YWRhdGFLZXkgKTogSU1ldGFkYXRhQ29sbGVjdGlvblJlYWRvbmx5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY29sbGVjdGlvbiA9IHRoaXMubV9wb29sLkdldCgga2V5ICk7XHJcbiAgICAgICAgICAgIGlmICggY29sbGVjdGlvbiA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBDTWV0YWRhdGFDb250YWluZXIuRW1wdHlDb2xsZWN0aW9uO1xyXG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBFcXVhbHMoIGE6IENNZXRhZGF0YUtleSwgYjogQ01ldGFkYXRhS2V5ICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLkVxdWFscyggYiApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFbXB0eUNvbGxlY3Rpb24gPSBuZXcgQ01ldGFkYXRhQ29sbGVjdGlvbigpO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db3JlL0NNZXRhZGF0YUNvbnRhaW5lci50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLk1ldGFkYXRhXHJcbntcclxuICAgIGV4cG9ydCBjb25zdCBDb250YWluZXI6IElNZXRhZGF0YUNvbnRhaW5lciA9IG5ldyBDb3JlLkNNZXRhZGF0YUNvbnRhaW5lcigpO1xyXG59IiwiXHJcbi8vIG5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5NZXRhZGF0YS5CdWlsZGVyXHJcbi8vIHtcclxuLy8gICAgIGV4cG9ydCBjbGFzcyBDRGVmZXJyZWRDYWxsYmFja1xyXG4vLyAgICAge1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggY2FsbGJhY2s6ICggcmVnaXN0cnk6IENvcmUuSU1ldGFkYXRhUmVnaXN0cnkgKSA9PiB2b2lkIClcclxuLy8gICAgICAgICB7XHJcblxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfSIsIlxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uTWV0YWRhdGEuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ01ldGFkYXRhS2V5IGltcGxlbWVudHMgSUVxdWF0YWJsZTxDTWV0YWRhdGFLZXk+XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3R5cGU6IFJlZmxlY3Rpb24uQ1R5cGU7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3RhcmdldDogVUF0dHJpYnV0ZVRhcmdldDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCB0eXBlOiBSZWZsZWN0aW9uLkNUeXBlLCB0YXJnZXQ6IFVBdHRyaWJ1dGVUYXJnZXQgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3R5cGUgPSB0eXBlO1xyXG4gICAgICAgICAgICB0aGlzLm1fdGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEVxdWFscyhvdGhlcjogQ01ldGFkYXRhS2V5KTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV90eXBlLklzRXF1aXZhbGVudFRvKCBvdGhlci5tX3R5cGUgKSAmJiB0aGlzLm1fdGFyZ2V0ID09IG90aGVyLm1fdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5NZXRhZGF0YS5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDTWV0YWRhdGFLZXlGb3JDbGFzcyBleHRlbmRzIENNZXRhZGF0YUtleVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggdHlwZTogUmVmbGVjdGlvbi5DVHlwZSwgdGFyZ2V0OiBVQXR0cmlidXRlVGFyZ2V0IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCB0eXBlLCB0YXJnZXQgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBFcXVhbHMoIG90aGVyOiBDTWV0YWRhdGFLZXkgKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBzdXBlci5FcXVhbHMoIG90aGVyICkgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIG90aGVyIGluc3RhbmNlb2YgQ01ldGFkYXRhS2V5Rm9yQ2xhc3MgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uTWV0YWRhdGEuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ01ldGFkYXRhS2V5Rm9yTmFtZWQgZXh0ZW5kcyBDTWV0YWRhdGFLZXlcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fbmFtZTogc3RyaW5nIHwgc3ltYm9sID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCB0eXBlOiBSZWZsZWN0aW9uLkNUeXBlLCB0YXJnZXQ6IFVBdHRyaWJ1dGVUYXJnZXQsIG5hbWU6IHN0cmluZyB8IHN5bWJvbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggdHlwZSwgdGFyZ2V0ICk7XHJcbiAgICAgICAgICAgIHRoaXMubV9uYW1lID0gbmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBFcXVhbHMoIG90aGVyOiBDTWV0YWRhdGFLZXkgKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBzdXBlci5FcXVhbHMoIG90aGVyICkgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIG90aGVyIGluc3RhbmNlb2YgQ01ldGFkYXRhS2V5Rm9yTmFtZWQgJiYgb3RoZXIubV9uYW1lID09IHRoaXMubV9uYW1lIClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLk1ldGFkYXRhLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENNZXRhZGF0YUtleUZvclBhcmFtZXRlciBleHRlbmRzIENNZXRhZGF0YUtleVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9tZXRob2ROYW1lOiBzdHJpbmcgfCBzeW1ib2wgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9pbmRleDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCB0eXBlOiBSZWZsZWN0aW9uLkNUeXBlLCB0YXJnZXQ6IFVBdHRyaWJ1dGVUYXJnZXQsIG1ldGhvZE5hbWU6IHN0cmluZyB8IHN5bWJvbCwgaW5kZXg6IG51bWJlciApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggdHlwZSwgdGFyZ2V0ICk7XHJcbiAgICAgICAgICAgIHRoaXMubV9pbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLm1fbWV0aG9kTmFtZSA9IG1ldGhvZE5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRXF1YWxzKCBvdGhlcjogQ01ldGFkYXRhS2V5ICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggc3VwZXIuRXF1YWxzKCBvdGhlciApID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBvdGhlciBpbnN0YW5jZW9mIENNZXRhZGF0YUtleUZvclBhcmFtZXRlciAmJiB0aGlzLm1fbWV0aG9kTmFtZSA9PSBvdGhlci5tX21ldGhvZE5hbWUgJiYgb3RoZXIubV9pbmRleCA9PSB0aGlzLm1faW5kZXggKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIC8qKlxyXG4gICAgICog6Ieq5Yqo5pig5bCE5p6E6YCg5Ye95pWw55qE5Y+C5pWw57G75Z6LXHJcbiAgICAgKiBcclxuICAgICAqIOmcgOimgXRzY29uZmln6YWN572uIFwiZW1pdERlY29yYXRvck1ldGFkYXRhXCI6IHRydWVcclxuICAgICAqIEBwYXJhbSB0YXJnZXQgXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBBdXRvUmVmbGVjdE1ldGFkYXRhX0NvbnN0cnVjdG9yKCB0YXJnZXQ6IGFueSApOiBhbnlcclxuICAgIHtcclxuICAgICAgICBsZXQgcGFyYW10eXBlczogQXJyYXk8IFR5cGVDb25zdHJ1Y3Rvcjxhbnk+ID4gPSBSZWZsZWN0LmdldE1ldGFkYXRhKCBcImRlc2lnbjpwYXJhbXR5cGVzXCIsIHRhcmdldCApO1xyXG4gICAgICAgIC8vIGlmICggcGFyYW10eXBlcyA9PSBudWxsIClcclxuICAgICAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKCAn6ZyA6KaBdHNjb25maWfphY3nva4gXCJlbWl0RGVjb3JhdG9yTWV0YWRhdGFcIjogdHJ1ZScgKTtcclxuICAgICAgICBpZiAoIHBhcmFtdHlwZXMgIT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgcGFyYW1ldGVySW5kZXggPSAwOyBwYXJhbWV0ZXJJbmRleCA8IHBhcmFtdHlwZXMubGVuZ3RoOyBwYXJhbWV0ZXJJbmRleCArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JQYXJhbWV0ZXIoIFJlZmxlY3Rpb24uVHlwZU9mX18oIHRhcmdldC5wcm90b3R5cGUgKSwgVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIFwiY29uc3RydWN0b3JcIiwgcGFyYW1ldGVySW5kZXggKTtcclxuICAgICAgICAgICAgICAgIGxldCBhdHRyaWJ1dGUgPSBuZXcgQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUoICgpID0+IFR5cGVPZiggcGFyYW10eXBlc1sgcGFyYW1ldGVySW5kZXggXSApLCBudWxsICk7XHJcbiAgICAgICAgICAgICAgICBNZXRhZGF0YS5Db250YWluZXIuR2V0T3JBZGRDb2xsZWN0aW9uKCBrZXkgKS5BZGRBdHRyaWJ1dGUoIGF0dHJpYnV0ZSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vICAgICAvKipcclxuICAgIC8vICAqIOiHquWKqOaYoOWwhOaehOmAoOWHveaVsOeahOWPguaVsOexu+Wei1xyXG4gICAgLy8gICogXHJcbiAgICAvLyAgKiDpnIDopoF0c2NvbmZpZ+mFjee9riBcImVtaXREZWNvcmF0b3JNZXRhZGF0YVwiOiB0cnVlXHJcbiAgICAvLyAgKiBAcGFyYW0gdGFyZ2V0IFxyXG4gICAgLy8gICovXHJcbiAgICAvLyBleHBvcnQgZnVuY3Rpb24gQXV0b1JlZmxlY3RNZXRhZGF0YV9Db25zdHJ1Y3RvcigpXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGZ1bmN0aW9uKCB0YXJnZXQ6IGFueSApOiBhbnlcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGxldCBwYXJhbXR5cGVzOiBBcnJheTwgVHlwZUNvbnN0cnVjdG9yPGFueT4gPiA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoIFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgdGFyZ2V0ICk7XHJcbiAgICAvLyAgICAgICAgIC8vIGlmICggcGFyYW10eXBlcyA9PSBudWxsIClcclxuICAgIC8vICAgICAgICAgLy8gICAgIHRocm93IG5ldyBFcnJvciggJ+mcgOimgXRzY29uZmln6YWN572uIFwiZW1pdERlY29yYXRvck1ldGFkYXRhXCI6IHRydWUnICk7XHJcbiAgICAvLyAgICAgICAgIGlmICggcGFyYW10eXBlcyAhPSBudWxsIClcclxuICAgIC8vICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgZm9yICggbGV0IHBhcmFtZXRlckluZGV4ID0gMDsgcGFyYW1ldGVySW5kZXggPCBwYXJhbXR5cGVzLmxlbmd0aDsgcGFyYW1ldGVySW5kZXggKysgKVxyXG4gICAgLy8gICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JQYXJhbWV0ZXIoIFJlZmxlY3Rpb24uVHlwZU9mX18oIHRhcmdldC5wcm90b3R5cGUgKSwgVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIFwiY29uc3RydWN0b3JcIiwgcGFyYW1ldGVySW5kZXggKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gbmV3IENEZWNsYXJpbmdUeXBlQXR0cmlidXRlKCBUeXBlT2YoIHBhcmFtdHlwZXNbIHBhcmFtZXRlckluZGV4IF0gKSwgbnVsbCApO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIE1ldGFkYXRhLkNvbnRhaW5lci5HZXRPckFkZENvbGxlY3Rpb24oIGtleSApLkFkZEF0dHJpYnV0ZSggYXR0cmlidXRlICk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoh6rliqjmmKDlsITlrZfmrrXnsbvlnotcclxuICAgICAqIFxyXG4gICAgICog6ZyA6KaBdHNjb25maWfphY3nva4gXCJlbWl0RGVjb3JhdG9yTWV0YWRhdGFcIjogdHJ1ZVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQXV0b1JlZmxlY3RNZXRhZGF0YV9GaWVsZCggdGFyZ2V0OiBhbnksIGZpZWxkTmFtZTogc3RyaW5nICk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIEVudW1lcmFibGUoIHRhcmdldCwgZmllbGROYW1lICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHR5cGVDb25zdHJ1Y3RvciA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoIFwiZGVzaWduOnR5cGVcIiwgdGFyZ2V0LCBmaWVsZE5hbWUgKTtcclxuICAgICAgICAvLyBpZiAoIHR5cGVDb25zdHJ1Y3RvciA9PSBudWxsIClcclxuICAgICAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKCAn6ZyA6KaBdHNjb25maWfphY3nva4gXCJlbWl0RGVjb3JhdG9yTWV0YWRhdGFcIjogdHJ1ZScgKTtcclxuICAgICAgICBpZiAoIHR5cGVDb25zdHJ1Y3RvciAhPSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JOYW1lZCggUmVmbGVjdGlvbi5UeXBlT2ZfXyggdGFyZ2V0ICksIFVBdHRyaWJ1dGVUYXJnZXQuRmllbGQsIGZpZWxkTmFtZSApO1xyXG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gbmV3IENEZWNsYXJpbmdUeXBlQXR0cmlidXRlKCAoKSA9PiBUeXBlT2YoIHR5cGVDb25zdHJ1Y3RvciApLCBudWxsICk7XHJcbiAgICAgICAgICAgIE1ldGFkYXRhLkNvbnRhaW5lci5HZXRPckFkZENvbGxlY3Rpb24oIGtleSApLkFkZEF0dHJpYnV0ZSggYXR0cmlidXRlICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Ieq5Yqo5pig5bCE5bGe5oCn57G75Z6LXHJcbiAgICAgKiBcclxuICAgICAqIOmcgOimgXRzY29uZmln6YWN572uIFwiZW1pdERlY29yYXRvck1ldGFkYXRhXCI6IHRydWVcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEF1dG9SZWZsZWN0TWV0YWRhdGFfUHJvcGVydHkoIHRhcmdldDogYW55LCBwcm9wZXJ0eU5hbWU6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yICk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIGlmICggZGVzY3JpcHRvci5zZXQgPT0gbnVsbCAmJiBkZXNjcmlwdG9yLmdldCA9PSBudWxsIClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIkNhbid0IGF1dG8gcmVmbGVjdCBvbiBtZXRob2QuXCIgKTtcclxuICAgICAgICBsZXQgdHlwZUNvbnN0cnVjdG9yID0gUmVmbGVjdC5nZXRNZXRhZGF0YSggXCJkZXNpZ246dHlwZVwiLCB0YXJnZXQsIHByb3BlcnR5TmFtZSApO1xyXG4gICAgICAgIC8vIGlmICggdHlwZUNvbnN0cnVjdG9yID09IG51bGwgKVxyXG4gICAgICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoICfpnIDopoF0c2NvbmZpZ+mFjee9riBcImVtaXREZWNvcmF0b3JNZXRhZGF0YVwiOiB0cnVlJyApO1xyXG4gICAgICAgIGlmICggdHlwZUNvbnN0cnVjdG9yICE9IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGtleSA9IG5ldyBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleUZvck5hbWVkKCBSZWZsZWN0aW9uLlR5cGVPZl9fKCB0YXJnZXQgKSwgVUF0dHJpYnV0ZVRhcmdldC5Qcm9wZXJ0eSwgcHJvcGVydHlOYW1lICk7XHJcbiAgICAgICAgICAgIGxldCBhdHRyaWJ1dGUgPSBuZXcgQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUoICgpID0+IFR5cGVPZiggdHlwZUNvbnN0cnVjdG9yICksIG51bGwgKTtcclxuICAgICAgICAgICAgTWV0YWRhdGEuQ29udGFpbmVyLkdldE9yQWRkQ29sbGVjdGlvbigga2V5ICkuQWRkQXR0cmlidXRlKCBhdHRyaWJ1dGUgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoh6rliqjmmKDlsITmlrnms5XnmoTov5Tlm57nsbvlnovlkozlj4LmlbDnsbvlnotcclxuICAgICAqIFxyXG4gICAgICog6ZyA6KaBdHNjb25maWfphY3nva4gXCJlbWl0RGVjb3JhdG9yTWV0YWRhdGFcIjogdHJ1ZVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQXV0b1JlZmxlY3RNZXRhZGF0YV9NZXRob2QoIHRhcmdldDogYW55LCBtZXRob2ROYW1lOiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvciApOiBhbnlcclxuICAgIHtcclxuICAgICAgICBpZiAoIGRlc2NyaXB0b3Iuc2V0ICE9IG51bGwgfHwgZGVzY3JpcHRvci5nZXQgIT0gbnVsbCApXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJDYW4ndCBhdXRvIHJlZmxlY3Qgb24gcHJvcGVydHkuXCIgKTtcclxuXHJcbiAgICAgICAgbGV0IGtleTogTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXk7XHJcbiAgICAgICAgbGV0IGF0dHJpYnV0ZTogQ0F0dHJpYnV0ZTtcclxuXHJcbiAgICAgICAgbGV0IHJldHVybnR5cGVDb25zdHJ1Y3RvciA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoIFwiZGVzaWduOnJldHVybnR5cGVcIiwgdGFyZ2V0LCBtZXRob2ROYW1lICk7XHJcbiAgICAgICAgLy8gaWYgKCByZXR1cm50eXBlQ29uc3RydWN0b3IgPT0gbnVsbCApXHJcbiAgICAgICAgLy8gICAgIHRocm93IG5ldyBFcnJvciggJ+mcgOimgXRzY29uZmln6YWN572uIFwiZW1pdERlY29yYXRvck1ldGFkYXRhXCI6IHRydWUnICk7XHJcbiAgICAgICAgaWYgKCByZXR1cm50eXBlQ29uc3RydWN0b3IgIT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JOYW1lZCggUmVmbGVjdGlvbi5UeXBlT2ZfXyggdGFyZ2V0ICksIFVBdHRyaWJ1dGVUYXJnZXQuTWV0aG9kLCBtZXRob2ROYW1lICk7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZSA9IG5ldyBDRGVjbGFyaW5nVHlwZUF0dHJpYnV0ZSggKCkgPT4gVHlwZU9mKCByZXR1cm50eXBlQ29uc3RydWN0b3IgKSwgbnVsbCApO1xyXG4gICAgICAgICAgICBNZXRhZGF0YS5Db250YWluZXIuR2V0T3JBZGRDb2xsZWN0aW9uKCBrZXkgKS5BZGRBdHRyaWJ1dGUoIGF0dHJpYnV0ZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBhcmFtdHlwZUNvbnN0cnVjdG9yczogQXJyYXk8IFR5cGVDb25zdHJ1Y3Rvcjxhbnk+ID4gPSBSZWZsZWN0LmdldE1ldGFkYXRhKCBcImRlc2lnbjpwYXJhbXR5cGVzXCIsIHRhcmdldCApO1xyXG4gICAgICAgIC8vIGlmICggcGFyYW10eXBlQ29uc3RydWN0b3JzID09IG51bGwgKVxyXG4gICAgICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoICfpnIDopoF0c2NvbmZpZ+mFjee9riBcImVtaXREZWNvcmF0b3JNZXRhZGF0YVwiOiB0cnVlJyApO1xyXG4gICAgICAgIGlmICggcGFyYW10eXBlQ29uc3RydWN0b3JzICE9IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICggbGV0IHBhcmFtZXRlckluZGV4ID0gMDsgcGFyYW1ldGVySW5kZXggPCBwYXJhbXR5cGVDb25zdHJ1Y3RvcnMubGVuZ3RoOyBwYXJhbWV0ZXJJbmRleCArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JQYXJhbWV0ZXIoIFJlZmxlY3Rpb24uVHlwZU9mX18oIHRhcmdldC5wcm90b3R5cGUgKSwgVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIG1ldGhvZE5hbWUsIHBhcmFtZXRlckluZGV4ICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gbmV3IENEZWNsYXJpbmdUeXBlQXR0cmlidXRlKCAoKSA9PiBUeXBlT2YoIHBhcmFtdHlwZUNvbnN0cnVjdG9yc1sgcGFyYW1ldGVySW5kZXggXSApLCBudWxsICk7XHJcbiAgICAgICAgICAgICAgICBNZXRhZGF0YS5Db250YWluZXIuR2V0T3JBZGRDb2xsZWN0aW9uKCBrZXkgKS5BZGRBdHRyaWJ1dGUoIGF0dHJpYnV0ZSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvblxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0Fzc2VtYmx5XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2pzbW9kdWxlOiBhbnkgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHM6IGFueSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fanNtb2R1bGUgPSBzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFR5cGVzKCk6IENUeXBlW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkdldFR5cGVzSW50ZXJuYWwoIHRoaXMubV9qc21vZHVsZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBHZXRUeXBlc0ludGVybmFsKCBvYmo6IGFueSApOiBDVHlwZVtdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQganNfdHlwZW9mID0gdHlwZW9mKCBvYmogKTtcclxuICAgICAgICAgICAgaWYgKCBqc190eXBlb2YgIT0gXCJvYmplY3RcIiApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgIGxldCB0eXBlczogQ1R5cGVbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKCBjb25zdCBrIGluIG9iaiApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBvYmpbIGsgXTtcclxuICAgICAgICAgICAgICAgIGlmICggdiA9PSB1bmRlZmluZWQgfHwgdiA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGlmICggdlsgXCJwcm90b3R5cGVcIiBdICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVzLnB1c2goIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggdiApICk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZXMgPSB0eXBlcy5jb25jYXQoIHRoaXMuR2V0VHlwZXNJbnRlcm5hbCggdiApICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0eXBlcyA9IHR5cGVzLmNvbmNhdCggdGhpcy5HZXRUeXBlc0ludGVybmFsKCB2ICkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHlwZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb25cclxue1xyXG4gICAgZXhwb3J0IHR5cGUgVU1lbWJlclN5bWJvbCA9IHN0cmluZztcclxuXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ01lbWJlckluZm8gaW1wbGVtZW50cyBJQ3VzdG9tQXR0cmlidXRlUHJvdmlkZXJcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbV9uYW1lOiBVTWVtYmVyU3ltYm9sID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbV9wcm90b3R5cGU6IFR5cGVQcm90b3R5cGU8IG9iamVjdCA+ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX21ldGFkYXRhQ29sbGVjdGlvbjogTWV0YWRhdGEuSU1ldGFkYXRhQ29sbGVjdGlvblJlYWRvbmx5ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKCBuYW1lOiBVTWVtYmVyU3ltYm9sLCBwcm90b3R5cGU6IFR5cGVQcm90b3R5cGU8IG9iamVjdCA+IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX3Byb3RvdHlwZSA9IHByb3RvdHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgTWVtYmVyVHlwZSgpOiBVTWVtYmVyVHlwZXM7XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgTmFtZSgpOiBVTWVtYmVyU3ltYm9sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX25hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIHRoZSBjbGFzcyB0aGF0IGRlY2xhcmVzIHRoaXMgbWVtYmVyLlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIOWjsOaYjuatpOaIkOWRmOeahENsYXNz57G75Z6L77yM5LiL6Z2i5a6e5L6L5Lit55qEVGV4dOWxnuaAp01lbWJlckluZm/nmoREZWNsYXJpbmdUeXBl6L+U5ZueICoqQml1Yml1KipcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcmV0dXJucyBUaGUgVHlwZSBvYmplY3QgZm9yIHRoZSBjbGFzcyB0aGF0IGRlY2xhcmVzIHRoaXMgbWVtYmVyLlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIGBgYGpzXHJcbiAgICAgICAgICogY2xhc3MgQml1Yml1XHJcbiAgICAgICAgICoge1xyXG4gICAgICAgICAqICAgICAgZ2V0IFRleHQoKTogc3RyaW5nIHsgcmV0dXJuICBcIlwiOyB9XHJcbiAgICAgICAgICogfVxyXG4gICAgICAgICAqIGBgYFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXQgRGVjbGFyaW5nVHlwZSgpOiBDVHlwZTwgb2JqZWN0ID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBUeXBlT2YoIHRoaXMubV9wcm90b3R5cGUuY29uc3RydWN0b3IgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRKc1Byb3RvdHlwZTwgVEV4dHJhIGV4dGVuZHMge30gPSB7fSA+KCk6IFR5cGVQcm90b3R5cGU8IG9iamVjdCA+ICYgVEV4dHJhXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gPGFueT50aGlzLm1fcHJvdG90eXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXQgTWV0YWRhdGFDb2xsZWN0aW9uKCk6IE1ldGFkYXRhLklNZXRhZGF0YUNvbGxlY3Rpb25SZWFkb25seVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fbWV0YWRhdGFDb2xsZWN0aW9uID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5HZXRNZXRhZGF0YUtleSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX21ldGFkYXRhQ29sbGVjdGlvbiA9IE1ldGFkYXRhLkNvbnRhaW5lci5HZXRDb2xsZWN0aW9uKCBrZXkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX21ldGFkYXRhQ29sbGVjdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRDdXN0b21BdHRyaWJ1dGVPbmU8IFRBdHRyaWJ1dGUgZXh0ZW5kcyBDQXR0cmlidXRlID4oIGF0dHJpYnV0ZVR5cGU6IENUeXBlPCBUQXR0cmlidXRlID4gKTogVEF0dHJpYnV0ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuTWV0YWRhdGFDb2xsZWN0aW9uLkdldEF0dHJpYnV0ZU9uZSggYXR0cmlidXRlVHlwZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEN1c3RvbUF0dHJpYnV0ZXM8IFRBdHRyaWJ1dGUgZXh0ZW5kcyBDQXR0cmlidXRlID4oIGF0dHJpYnV0ZVR5cGU6IENUeXBlPCBUQXR0cmlidXRlID4gKTogVEF0dHJpYnV0ZVtdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5NZXRhZGF0YUNvbGxlY3Rpb24uR2V0QXR0cmlidXRlcyggYXR0cmlidXRlVHlwZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEN1c3RvbUF0dHJpYnV0ZXNBbGwoKTogQ0F0dHJpYnV0ZVtdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5NZXRhZGF0YUNvbGxlY3Rpb24uR2V0QXR0cmlidXRlc0FsbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIElzRGVmaW5lZDwgVEF0dHJpYnV0ZSBleHRlbmRzIENBdHRyaWJ1dGUgPiggYXR0cmlidXRlVHlwZTogQ1R5cGU8IFRBdHRyaWJ1dGUgPiApOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKCB0aGlzLk1ldGFkYXRhQ29sbGVjdGlvbi5HZXRBdHRyaWJ1dGVPbmUoIGF0dHJpYnV0ZVR5cGUgKSA9PSBudWxsICkgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0TWV0YWRhdGFLZXkoKTogTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL01lbWJlckluZm8udHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDTWV0aG9kQmFzZSBleHRlbmRzIENNZW1iZXJJbmZvXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldFBhcmFtZXRlcnMoKTogQXJyYXk8IENQYXJhbWV0ZXJJbmZvID47XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgRGVzY3JpcHRvcigpOiBQcm9wZXJ0eURlc2NyaXB0b3I7XHJcbiAgICB9XHJcbn0iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ01ldGhvZEJhc2UudHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDQ29uc3RydWN0b3JJbmZvIGV4dGVuZHMgQ01ldGhvZEJhc2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgZ2V0IEpzQ29uc3RydWN0b3IoKTogVHlwZUNvbnN0cnVjdG9yPCBvYmplY3QgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9wcm90b3R5cGUuY29uc3RydWN0b3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSW52b2tlKCAuLi5hcmdzOiBhbnlbXSApOiBvYmplY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5Kc0NvbnN0cnVjdG9yKCAuLi5hcmdzICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0UGFyYW1ldGVycygpOiBBcnJheTwgQ1BhcmFtZXRlckluZm8gPjtcclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbVxyXG57XHJcbiAgICBleHBvcnQgZW51bSBVQXR0cmlidXRlVGFyZ2V0XHJcbiAgICB7XHJcbiAgICAgICAgQ2xhc3MgPSAweDAwMDEsXHJcbiAgICAgICAgRmllbGQgPSAweDAwMDIsXHJcbiAgICAgICAgTWV0aG9kID0gMHgwMDA0LFxyXG4gICAgICAgIFBhcmFtZXRlciA9IDB4MDAwOCxcclxuICAgICAgICBQcm9wZXJ0eSA9IDB4MDAxMCxcclxuICAgICAgICBBbGwgPSBDbGFzcyB8IEZpZWxkIHwgTWV0aG9kIHwgUGFyYW1ldGVyIHwgUHJvcGVydHksXHJcbiAgICB9O1xyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW1cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiDnibnmgKfln7rnsbtcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIENBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgIH07XHJcbn1cclxuXHJcbiIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9DQXR0cmlidXRlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vVUF0dHJpYnV0ZVRhcmdldC50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUgZXh0ZW5kcyBDQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fdmFsaWRPbjogbnVtYmVyO1xyXG4gICAgICAgIHByb3RlY3RlZCBtX2FsbG93TXVsdGlwbGU/OiBib29sZWFuO1xyXG4gICAgICAgIHByb3RlY3RlZCBtX2luaGVyaXRlZD86IGJvb2xlYW47XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgVmFsaWRPbigpIDogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV92YWxpZE9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgZ2V0IEFsbG93TXVsdGlwbGUoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9hbGxvd011bHRpcGxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBJbmhlcml0ZWQoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9pbmhlcml0ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHZhbGlkT246IG51bWJlciwgYWxsb3dNdWx0aXBsZT86IGJvb2xlYW4sIGluaGVyaXQ/OiBib29sZWFuIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV92YWxpZE9uID0gdmFsaWRPbjtcclxuICAgICAgICAgICAgdGhpcy5tX2FsbG93TXVsdGlwbGUgPSAoIGFsbG93TXVsdGlwbGUgPT0gbnVsbCApID8gdHJ1ZSA6IGFsbG93TXVsdGlwbGU7XHJcbiAgICAgICAgICAgIHRoaXMubV9pbmhlcml0ZWQgPSAoIGluaGVyaXQgPT0gbnVsbCApID8gdHJ1ZSA6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIERlZmF1bHRVc2FnZSA9IG5ldyBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUoIFVBdHRyaWJ1dGVUYXJnZXQuQWxsLCB0cnVlLCB0cnVlICk7XHJcbiAgICB9O1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vTWVtYmVySW5mby50c1wiIC8+XHJcblxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDRmllbGRJbmZvIGV4dGVuZHMgQ01lbWJlckluZm9cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgZ2V0IE1lbWJlclR5cGUoKTogVU1lbWJlclR5cGVzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gVU1lbWJlclR5cGVzLkZpZWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFNldFZhbHVlKCBvYmo6IG9iamVjdCwgdmFsdWU6IGFueSApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAoPGFueT5vYmopWyB0aGlzLm1fbmFtZSBdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0VmFsdWUoIG9iajogb2JqZWN0ICk6IGFueVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8YW55Pm9iailbIHRoaXMubV9uYW1lIF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0TWV0YWRhdGFLZXkoKTogTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JOYW1lZCggdGhpcy5EZWNsYXJpbmdUeXBlLCBVQXR0cmlidXRlVGFyZ2V0LkZpZWxkLCB0aGlzLk5hbWUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgRmllbGRUeXBlKCk6IENUeXBlO1xyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL01lbWJlckluZm8udHNcIiAvPlxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ01ldGhvZEJhc2UudHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDTWV0aG9kSW5mbyBleHRlbmRzIENNZXRob2RCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gcHJvdGVjdGVkIHJlYWRvbmx5IG1fbWV0aG9kOiBGdW5jdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIHByb3RlY3RlZCBjb25zdHJ1Y3Rvciggbjogc3RyaW5nLCBwcm90b3R5cGU6IFR5cGVQcm90b3R5cGU8IGFueSA+LCBtZXRob2Q6IEZ1bmN0aW9uIClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIHN1cGVyKCBuLCBwcm90b3R5cGUgKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5tX21ldGhvZCA9IG1ldGhvZDtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBJbnZva2UoIG9iajogYW55LCAuLi5hcmdzOiBhbnlbXSApOiBhbnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLk1ldGhvZC5hcHBseSggb2JqLCBhcmdzICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwdWJsaWMgR2V0UGFyYW1ldGVycygpOiBBcnJheTwgQ1BhcmFtZXRlckluZm8gPlxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgbGV0IGNsYXNzVHlwZSA9IHRoaXMuRGVjbGFyaW5nVHlwZTtcclxuICAgICAgICAvLyAgICAgbGV0IHBhcmFtZXRlckNvdW50ID0gdGhpcy5NZXRob2QubGVuZ3RoO1xyXG4gICAgICAgIC8vICAgICBsZXQgaW5mb3M6IEFycmF5PCBDUGFyYW1ldGVySW5mbyA+ID0gQXJyYXkoIHBhcmFtZXRlckNvdW50ICk7XHJcbiAgICAgICAgLy8gICAgIGlmICggcGFyYW1ldGVyQ291bnQgPiAwIClcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVyQ291bnQ7IGkgKysgKVxyXG4gICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBrZXk6IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5ID0gbnVsbDtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoIHRoaXMuTmFtZS5zdGFydHNXaXRoKCBcImdldF9cIiApIHx8IHRoaXMuTmFtZS5zdGFydHNXaXRoKCBcInNldF9cIiApIClcclxuICAgICAgICAvLyAgICAgICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGtleSA9IG5ldyBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleUZvck5hbWVkKCBjbGFzc1R5cGUsIFVBdHRyaWJ1dGVUYXJnZXQuUHJvcGVydHksIHRoaXMuTmFtZS5zdWJzdHIoIDQgKSApO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgLy8gICAgICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JQYXJhbWV0ZXIoIGNsYXNzVHlwZSwgVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIHRoaXMuTmFtZSwgaSApO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgdHlwZUF0dHJpYnV0ZSA9IE1ldGFkYXRhLkNvbnRhaW5lci5HZXRDb2xsZWN0aW9uKCBrZXkgKS5HZXRBdHRyaWJ1dGVPbmUoIFR5cGVPZiggQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUgKSApO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGluZm9zWyBpIF0gPSBuZXcgQ1BhcmFtZXRlckluZm8oIHRoaXMubV9wcm90b3R5cGUsIHRoaXMsIGksICggdHlwZUF0dHJpYnV0ZSA9PSBudWxsICkgPyBudWxsIDogdHlwZUF0dHJpYnV0ZS5EZWNsYXJpbmdUeXBlICk7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgcmV0dXJuIGluZm9zO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gcHVibGljIGdldCBEZXNjcmlwdG9yKClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpcy5tX3Byb3RvdHlwZSwgdGhpcy5tX25hbWUgKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRNZXRhZGF0YUtleSgpOiBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleUZvck5hbWVkKCB0aGlzLkRlY2xhcmluZ1R5cGUsIFVBdHRyaWJ1dGVUYXJnZXQuTWV0aG9kLCB0aGlzLk5hbWUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXQgTWV0aG9kKCk6IEZ1bmN0aW9uO1xyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL01lbWJlckluZm8udHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDUHJvcGVydHlJbmZvIGV4dGVuZHMgQ01lbWJlckluZm9cclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIHRoZSB0eXBlIG9mIHRoaXMgcHJvcGVydHlcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiDlsZ7mgKfnmoTnsbvlnotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IFByb3BlcnR5VHlwZSgpOiBDVHlwZTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IFNldFZhbHVlKCBvYmo6IGFueSwgdmFsdWU6IGFueSApOiB2b2lkO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0VmFsdWUoIG9iajogYW55ICk6IGFueTtcclxuXHJcbiAgICAgICAgcHVibGljIEdldE1ldGFkYXRhS2V5KCk6IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5Rm9yTmFtZWQoIHRoaXMuRGVjbGFyaW5nVHlwZSwgVUF0dHJpYnV0ZVRhcmdldC5Qcm9wZXJ0eSwgdGhpcy5OYW1lICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IENhbldyaXRlKCk6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgQ2FuUmVhZCgpOiBib29sZWFuXHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRTZXRNZXRob2QoKTogQ01ldGhvZEluZm87XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRHZXRNZXRob2QoKTogQ01ldGhvZEluZm87XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDUGFyYW1ldGVySW5mbyBpbXBsZW1lbnRzIElDdXN0b21BdHRyaWJ1dGVQcm92aWRlclxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IFBhcmFtZXRlckluZGV4KCk6IG51bWJlcjtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldCBOYW1lKCk6IHN0cmluZztcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldCBQYXJhbWV0ZXJUeXBlKCk6IENUeXBlO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0Q3VzdG9tQXR0cmlidXRlT25lPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+ICk6IFRBdHRyaWJ1dGU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRDdXN0b21BdHRyaWJ1dGVzPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+ICk6IFRBdHRyaWJ1dGVbXTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldEN1c3RvbUF0dHJpYnV0ZXNBbGwoKTogQ0F0dHJpYnV0ZVtdO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSXNEZWZpbmVkPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+ICk6IGJvb2xlYW47XHJcbiAgICB9XHJcbn0iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29uc3RydWN0b3JJbmZvLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRmllbGRJbmZvLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vTWV0aG9kSW5mby50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1Byb3BlcnR5SW5mby50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1BhcmFtZXRlckluZm8udHNcIiAvPlxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUN1c3RvbUF0dHJpYnV0ZVByb3ZpZGVyLnRzXCIgLz5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogb2JqZWN0IOa0vueUn+exu+eahOaehOmAoOWZqOexu+Wei1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFR5cGVDb25zdHJ1Y3RvcjwgVCBleHRlbmRzIG9iamVjdCA+IGV4dGVuZHMgRnVuY3Rpb25cclxuICAgIHtcclxuICAgICAgICBuZXcgKCAuLi5hcmdzOiBhbnlbXSApOiBUO1xyXG4gICAgICAgIC8vcHJvdG90eXBlOiBUIHwgVHlwZVByb3RvdHlwZTwgVCA+O1xyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFR5cGVDb25zdHJ1Y3RvckFic3RyYWN0PCBUIGV4dGVuZHMgb2JqZWN0ID4gZXh0ZW5kcyBGdW5jdGlvblxyXG4gICAge1xyXG4gICAgICAgIHByb3RvdHlwZTogVCB8IFR5cGVQcm90b3R5cGU8IFQgPjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBleHBvcnQgaW50ZXJmYWNlIFR5cGVDb25zdHJ1Y3Rvck5ldzwgVCBleHRlbmRzIG9iamVjdCA+IGV4dGVuZHMgRnVuY3Rpb25cclxuICAgIC8vIHtcclxuICAgIC8vICAgICBuZXcgKCAuLi5hcmdzOiBhbnlbXSApOiBUO1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogb2JqZWN0IOa0vueUn+exu+eahHByb3RvdHlwZeexu+Wei1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFR5cGVQcm90b3R5cGU8IFQgZXh0ZW5kcyBvYmplY3QgPiBleHRlbmRzIE9iamVjdFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yOiBUeXBlQ29uc3RydWN0b3I8IFQgPjtcclxuICAgIH07XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEdldE9yQ3JlYXRlRGljdGlvbmFyeUluSnNQcm90b3R5cGU8IFQgZXh0ZW5kcyB7fSA+KCBwcm90b3R5cGU6IFR5cGVQcm90b3R5cGU8IG9iamVjdCA+LCBrZXk6IHN0cmluZyApIDogVFxyXG4gICAge1xyXG4gICAgICAgIGxldCBkYXRhOiBUID0gbnVsbDtcclxuICAgICAgICBpZiAoIHByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgga2V5ICkgPT0gZmFsc2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YSA9ICg8YW55PnByb3RvdHlwZSlbIGtleSBdID0gPFQ+e307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGEgPSAoPGFueT5wcm90b3R5cGUpWyBrZXkgXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEdldE9yQ3JlYXRlQXJyYXlJbkpzUHJvdG90eXBlPCBUIGV4dGVuZHMge30gPiggcHJvdG90eXBlOiBUeXBlUHJvdG90eXBlPCBvYmplY3QgPiwga2V5OiBzdHJpbmcgKSA6IEFycmF5PCBUID5cclxuICAgIHtcclxuICAgICAgICBsZXQgZGF0YTogQXJyYXk8IFQgPiA9IG51bGw7XHJcbiAgICAgICAgaWYgKCBwcm90b3R5cGUuaGFzT3duUHJvcGVydHkoIGtleSApID09IGZhbHNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGEgPSAoPGFueT5wcm90b3R5cGUpWyBrZXkgXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhID0gKDxhbnk+cHJvdG90eXBlKVsga2V5IF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSURlbGF5VHlwZTwgVCBleHRlbmRzIG9iamVjdCA9IG9iamVjdCA+XHJcbiAgICB7XHJcbiAgICAgICAgKCk6IENUeXBlPFQ+O1xyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ1R5cGU8IFQgZXh0ZW5kcyBvYmplY3QgPSBvYmplY3QgPiBpbXBsZW1lbnRzIElDdXN0b21BdHRyaWJ1dGVQcm92aWRlciwgSUVxdWF0YWJsZTwgQ1R5cGUgPlxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEVxdWFscyggb3RoZXI6IENUeXBlICk6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRKc1Byb3RvdHlwZTwgVEV4dHJhIGV4dGVuZHMge30gPSB7fSA+KCk6IFR5cGVQcm90b3R5cGU8IFQgPiAmIFRFeHRyYTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldEpzQ29uc3RydWN0b3IoKTogVHlwZUNvbnN0cnVjdG9yPCBUID47XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRDb25zdHJ1Y3RvcigpOiBDQ29uc3RydWN0b3JJbmZvO1xyXG4gICAgXHJcbiAgICAgICAgcHVibGljIEdldEZpZWxkT25lKCBuYW1lOiBzdHJpbmcgKTogQ0ZpZWxkSW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGluZm86IENGaWVsZEluZm8gPSB0aGlzLkdldE93bkZpZWxkT25lKCBuYW1lICk7XHJcbiAgICAgICAgICAgIGlmICggaW5mbyA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJhc2VUeXBlID0gdGhpcy5CYXNlVHlwZTtcclxuICAgICAgICAgICAgICAgIHdoaWxlICggYmFzZVR5cGUgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZm8gPSBiYXNlVHlwZS5HZXRPd25GaWVsZE9uZSggbmFtZSApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggaW5mbyAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZm87XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBiYXNlVHlwZSA9IGJhc2VUeXBlLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRPd25GaWVsZE9uZSggbmFtZTogc3RyaW5nICk6IENGaWVsZEluZm87XHJcbiAgICBcclxuICAgICAgICBwdWJsaWMgR2V0RmllbGRzKCk6IENGaWVsZEluZm9bXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5HZXRPd25GaWVsZHMoKTtcclxuICAgICAgICAgICAgbGV0IGJhc2VUeXBlID0gdGhpcy5CYXNlVHlwZTtcclxuICAgICAgICAgICAgd2hpbGUgKCBiYXNlVHlwZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KCBiYXNlVHlwZS5HZXRPd25GaWVsZHMoKSApO1xyXG4gICAgICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZS5CYXNlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldE93bkZpZWxkcygpOiBDRmllbGRJbmZvW11cclxuXHJcbiAgICAgICAgcHVibGljIEdldE1ldGhvZE9uZSgga2V5OiBzdHJpbmcgKTogQ01ldGhvZEluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpbmZvOiBDTWV0aG9kSW5mbyA9IHRoaXMuR2V0T3duTWV0aG9kT25lKCBrZXkgKTtcclxuICAgICAgICAgICAgaWYgKCBpbmZvICE9IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW5mbyA9IGJhc2VUeXBlLkdldE93bk1ldGhvZE9uZSgga2V5ICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGluZm8gIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZm87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBiYXNlVHlwZSA9IGJhc2VUeXBlLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldE93bk1ldGhvZE9uZSgga2V5OiBzdHJpbmcgKTogQ01ldGhvZEluZm87XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRNZXRob2RzKCk6IENNZXRob2RJbmZvW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuR2V0T3duTWV0aG9kcygpO1xyXG4gICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkgPSBhcnJheS5jb25jYXQoIGJhc2VUeXBlLkdldE93bk1ldGhvZHMoKSApO1xyXG4gICAgICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZS5CYXNlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0T3duTWV0aG9kcygpOiBDTWV0aG9kSW5mb1tdO1xyXG5cclxuICAgICAgICBwdWJsaWMgR2V0UHJvcGVydGllcygpOiBDUHJvcGVydHlJbmZvW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuR2V0T3duUHJvcGVydGllcygpO1xyXG4gICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkgPSBhcnJheS5jb25jYXQoIGJhc2VUeXBlLkdldE93blByb3BlcnRpZXMoKSApO1xyXG4gICAgICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZS5CYXNlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0UHJvcGVydHkoIGtleTogc3RyaW5nIHwgc3ltYm9sICk6IENQcm9wZXJ0eUluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eUluZm8gPSB0aGlzLkdldE93blByb3BlcnR5KCBrZXkgKTtcclxuICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eUluZm8gIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHlJbmZvO1xyXG4gICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlJbmZvID0gYmFzZVR5cGUuR2V0T3duUHJvcGVydHkoIGtleSApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eUluZm8gIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHlJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldE93blByb3BlcnRpZXMoKTogQ1Byb3BlcnR5SW5mb1tdO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0T3duUHJvcGVydHkoIGtleTogc3RyaW5nIHwgc3ltYm9sICk6IENQcm9wZXJ0eUluZm87XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICoqKOWPquivuykqKlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIOiOt+WPlueItuexu+exu+Wei1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgQmFzZVR5cGUoKTogQ1R5cGU7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWvueavlOW9k+WJjeexu+Wei+aYr+WQpuS4juWPguaVsHR5cGXnsbvlnovkuIDmoLdcclxuICAgICAgICAgKiBAcGFyYW0gdHlwZSDlr7nmr5Tlj4LnhafnsbvlnotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSXNFcXVpdmFsZW50VG8oIHR5cGU6IENUeXBlIHwgVHlwZUNvbnN0cnVjdG9yPG9iamVjdD4gKTogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Yik5pat5b2T5YmN57G75Z6L5piv5ZCm57un5om/5LqO5Y+C5pWwdHlwZeexu+Wei1xyXG4gICAgICAgICAqIEBwYXJhbSB0eXBlIOeItuexu+exu+Wei1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBJc0luaGVyaXRGcm9tKCB0eXBlOiBDVHlwZSApOiBib29sZWFuO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0Q3VzdG9tQXR0cmlidXRlT25lPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+LCBpbmhlcml0OiBib29sZWFuICk6IFRBdHRyaWJ1dGU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRDdXN0b21BdHRyaWJ1dGVzPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+LCBpbmhlcml0OiBib29sZWFuICk6IFRBdHRyaWJ1dGVbXTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldEN1c3RvbUF0dHJpYnV0ZXNBbGwoKTogQ0F0dHJpYnV0ZVtdO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSXNEZWZpbmVkPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+LCBpbmhlcml0OiBib29sZWFuICk6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIC8vcHVibGljIGFic3RyYWN0IENhc3QoIG86IGFueSApOiBUO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIENSdW50aW1lVHlwZTwgVCBleHRlbmRzIG9iamVjdCA9IG9iamVjdCA+IGV4dGVuZHMgQ1R5cGU8IFQgPlxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9wcm90bzogVHlwZVByb3RvdHlwZTwgVCA+ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX21ldGFkYXRhQ29sbGVjdGlvbjogTWV0YWRhdGEuSU1ldGFkYXRhQ29sbGVjdGlvblJlYWRvbmx5ID0gbnVsbDtcclxuICAgIFxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggcHJvdG86IFR5cGVQcm90b3R5cGU8IFQgPiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1fcHJvdG8gPSBwcm90bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBFcXVhbHMoIG90aGVyOiBDUnVudGltZVR5cGUgKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuSXNFcXVpdmFsZW50VG8oIGR5bmFtaWNfY2FzdCggb3RoZXIsIENSdW50aW1lVHlwZSApICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0SnNQcm90b3R5cGU8IFRFeHRyYSBleHRlbmRzIHt9ID0ge30gPigpOiBUeXBlUHJvdG90eXBlPCBUID4gJiBURXh0cmFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiA8IFR5cGVQcm90b3R5cGU8IFQgPiAmIFRFeHRyYSA+dGhpcy5tX3Byb3RvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEpzQ29uc3RydWN0b3IoKTogVHlwZUNvbnN0cnVjdG9yPCBUID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcHJvdG8uY29uc3RydWN0b3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0Q29uc3RydWN0b3IoKTogQ0NvbnN0cnVjdG9ySW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDUnVudGltZUNvbnN0cnVjdG9ySW5mbyggXCJjb25zdHJ1Y3RvclwiLCB0aGlzLm1fcHJvdG8gKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBwdWJsaWMgR2V0RmllbGRPbmUoIG5hbWU6IHN0cmluZyApOiBDRmllbGRJbmZvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaW5mbzogQ0ZpZWxkSW5mbyA9IHRoaXMuR2V0T3duRmllbGRPbmUoIG5hbWUgKTtcclxuICAgICAgICAgICAgaWYgKCBpbmZvID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKCBiYXNlVHlwZSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5mbyA9IGJhc2VUeXBlLkdldE93bkZpZWxkT25lKCBuYW1lICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpbmZvICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5mbztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VUeXBlID0gYmFzZVR5cGUuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGluZm87XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHVibGljIEdldE93bkZpZWxkT25lKCBuYW1lOiBzdHJpbmcgKTogQ0ZpZWxkSW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHByb3RvID0gdGhpcy5HZXRKc1Byb3RvdHlwZSgpO1xyXG4gICAgICAgICAgICBsZXQgaW5mbzogQ0ZpZWxkSW5mbyA9IG51bGw7XHJcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHByb3RvLCBSZWZsZWN0RmllbGRzS2V5ICk7XHJcbiAgICAgICAgICAgIGlmICggZGVzY3JpcHRvciA9PSBudWxsIHx8IGRlc2NyaXB0b3IudmFsdWUgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCAoIG5hbWUgaW4gZGVzY3JpcHRvci52YWx1ZSApID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBpbmZvID0gbmV3IENSdW50aW1lRmllbGRJbmZvKCBuYW1lLCBwcm90byApO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5mbztcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBwdWJsaWMgR2V0RmllbGRzKCk6IENGaWVsZEluZm9bXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5HZXRPd25GaWVsZHMoKTtcclxuICAgICAgICAgICAgbGV0IGJhc2VUeXBlID0gdGhpcy5CYXNlVHlwZTtcclxuICAgICAgICAgICAgd2hpbGUgKCBiYXNlVHlwZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KCBiYXNlVHlwZS5HZXRPd25GaWVsZHMoKSApO1xyXG4gICAgICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZS5CYXNlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHVibGljIEdldE93bkZpZWxkcygpOiBDRmllbGRJbmZvW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcm90byA9IHRoaXMuR2V0SnNQcm90b3R5cGUoKTtcclxuICAgICAgICAgICAgbGV0IGFycmF5OiBDRmllbGRJbmZvW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggcHJvdG8sIFJlZmxlY3RGaWVsZHNLZXkgKTtcclxuICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yID09IG51bGwgfHwgZGVzY3JpcHRvci52YWx1ZSA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheTtcclxuICAgICAgICAgICAgbGV0IGtleXMgPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG4gICAgICAgICAgICBmb3IgKCBjb25zdCBrIGluIGtleXMgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKCBuZXcgQ1J1bnRpbWVGaWVsZEluZm8oIGssIHByb3RvICkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0TWV0aG9kT25lKCBrZXk6IHN0cmluZyApOiBDTWV0aG9kSW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGluZm86IENNZXRob2RJbmZvID0gdGhpcy5HZXRPd25NZXRob2RPbmUoIGtleSApO1xyXG4gICAgICAgICAgICBpZiAoIGluZm8gIT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBiYXNlVHlwZSA9IHRoaXMuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgIHdoaWxlICggYmFzZVR5cGUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbmZvID0gYmFzZVR5cGUuR2V0T3duTWV0aG9kT25lKCBrZXkgKTtcclxuICAgICAgICAgICAgICAgIGlmICggaW5mbyAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5mbztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJhc2VUeXBlID0gYmFzZVR5cGUuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0T3duTWV0aG9kT25lKCBrZXk6IHN0cmluZyApOiBDTWV0aG9kSW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGluZm86IENNZXRob2RJbmZvID0gbnVsbDtcclxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpcy5tX3Byb3RvLCBrZXkgKTtcclxuICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGluZm8gPSBuZXcgQ1J1bnRpbWVNZXRob2RJbmZvKCBrZXksIHRoaXMubV9wcm90bywgZGVzY3JpcHRvci52YWx1ZSApO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRNZXRob2RzKCk6IENNZXRob2RJbmZvW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuR2V0T3duTWV0aG9kcygpO1xyXG4gICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkgPSBhcnJheS5jb25jYXQoIGJhc2VUeXBlLkdldE93bk1ldGhvZHMoKSApO1xyXG4gICAgICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZS5CYXNlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0T3duTWV0aG9kcygpOiBDTWV0aG9kSW5mb1tdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXk6IENNZXRob2RJbmZvW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IGtleXMgPSBSZWZsZWN0Lm93bktleXMoIHRoaXMubV9wcm90byApO1xyXG4gICAgICAgICAgICBmb3IgKCBjb25zdCBrIG9mIGtleXMgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGsgPT0gXCJjb25zdHJ1Y3RvclwiIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRoaXMubV9wcm90bywgayApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yLnZhbHVlID09IG51bGwgfHwgdHlwZW9mKCBkZXNjcmlwdG9yLnZhbHVlICkgIT0gXCJmdW5jdGlvblwiIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goIG5ldyBDUnVudGltZU1ldGhvZEluZm8oIDxzdHJpbmc+aywgdGhpcy5tX3Byb3RvLCBkZXNjcmlwdG9yLnZhbHVlICkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0UHJvcGVydGllcygpOiBDUHJvcGVydHlJbmZvW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuR2V0T3duUHJvcGVydGllcygpO1xyXG4gICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkgPSBhcnJheS5jb25jYXQoIGJhc2VUeXBlLkdldE93blByb3BlcnRpZXMoKSApO1xyXG4gICAgICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZS5CYXNlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0UHJvcGVydHkoIGtleTogc3RyaW5nIHwgc3ltYm9sICk6IENQcm9wZXJ0eUluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eUluZm8gPSB0aGlzLkdldE93blByb3BlcnR5KCBrZXkgKTtcclxuICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eUluZm8gIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHlJbmZvO1xyXG4gICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlJbmZvID0gYmFzZVR5cGUuR2V0T3duUHJvcGVydHkoIGtleSApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eUluZm8gIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHlJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldE93blByb3BlcnRpZXMoKTogQ1Byb3BlcnR5SW5mb1tdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXk6IENQcm9wZXJ0eUluZm9bXSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQga2V5cyA9IFJlZmxlY3Qub3duS2V5cyggdGhpcy5tX3Byb3RvICk7XHJcbiAgICAgICAgICAgIGZvciAoIGNvbnN0IGsgb2Yga2V5cyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggayA9PSBcImNvbnN0cnVjdG9yXCIgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpcy5tX3Byb3RvLCBrICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGRlc2NyaXB0b3IgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGRlc2NyaXB0b3Iuc2V0ID09IG51bGwgJiYgZGVzY3JpcHRvci5nZXQgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKCBuZXcgQ1J1bnRpbWVQcm9wZXJ0eUluZm8oIDxzdHJpbmc+aywgdGhpcy5tX3Byb3RvICkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0T3duUHJvcGVydHkoIGtleTogc3RyaW5nIHwgc3ltYm9sICk6IENQcm9wZXJ0eUluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRoaXMubV9wcm90bywga2V5ICk7XHJcbiAgICAgICAgICAgIGlmICggZGVzY3JpcHRvciA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIGRlc2NyaXB0b3Iuc2V0ID09IG51bGwgJiYgZGVzY3JpcHRvci5nZXQgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDUnVudGltZVByb3BlcnR5SW5mbyggPHN0cmluZz5rZXksIHRoaXMubV9wcm90byApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogKioo5Y+q6K+7KSoqXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICog6I635Y+W54i257G757G75Z6LXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldCBCYXNlVHlwZSgpOiBDVHlwZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHByb3RvQmFzZSA9IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YoIHRoaXMubV9wcm90byApO1xyXG4gICAgICAgICAgICBpZiAoIHByb3RvQmFzZSA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIHByb3RvQmFzZSA9PSBPYmplY3QucHJvdG90eXBlIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENSdW50aW1lVHlwZSggPFR5cGVQcm90b3R5cGU8b2JqZWN0Pj5wcm90b0Jhc2UgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWvueavlOW9k+WJjeexu+Wei+aYr+WQpuS4juWPguaVsHR5cGXnsbvlnovkuIDmoLdcclxuICAgICAgICAgKiBAcGFyYW0gdHlwZSDlr7nmr5Tlj4LnhafnsbvlnotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgSXNFcXVpdmFsZW50VG8oIHR5cGU6IENSdW50aW1lVHlwZSB8IFR5cGVDb25zdHJ1Y3RvcjxvYmplY3Q+ICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdHlwZSA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCB0eXBlb2YoIHR5cGUgKSA9PSBcImZ1bmN0aW9uXCIgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGUucHJvdG90eXBlID09IHRoaXMubV9wcm90bztcclxuICAgICAgICAgICAgaWYgKCB0eXBlLm1fcHJvdG8gPT09IHRoaXMubV9wcm90byApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Yik5pat5b2T5YmN57G75Z6L5piv5ZCm57un5om/5LqO5Y+C5pWwdHlwZeexu+Wei1xyXG4gICAgICAgICAqIEBwYXJhbSB0eXBlIOeItuexu+exu+Wei1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBJc0luaGVyaXRGcm9tKCB0eXBlOiBDVHlwZSApOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBiYXNlVHlwZS5Jc0VxdWl2YWxlbnRUbyggdHlwZSApIClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJhc2VUeXBlID0gYmFzZVR5cGUuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXQgTWV0YWRhdGFDb2xsZWN0aW9uKCk6IE1ldGFkYXRhLklNZXRhZGF0YUNvbGxlY3Rpb25SZWFkb25seVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fbWV0YWRhdGFDb2xsZWN0aW9uID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gbmV3IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5Rm9yQ2xhc3MoIHRoaXMsIFVBdHRyaWJ1dGVUYXJnZXQuQ2xhc3MgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9tZXRhZGF0YUNvbGxlY3Rpb24gPSBNZXRhZGF0YS5Db250YWluZXIuR2V0Q29sbGVjdGlvbigga2V5ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9tZXRhZGF0YUNvbGxlY3Rpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0Q3VzdG9tQXR0cmlidXRlT25lPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+LCBpbmhlcml0OiBib29sZWFuICk6IFRBdHRyaWJ1dGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5Jc0VxdWl2YWxlbnRUbyggQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlICkgPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICggaW5oZXJpdCA9PSB0cnVlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0dHIgPSB0aGlzLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggYXR0cmlidXRlVHlwZSwgZmFsc2UgKTtcclxuICAgICAgICAgICAgICAgIGlmICggYXR0ciAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXR0cjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0clVzYWdlID0gYXR0cmlidXRlVHlwZS5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIFJlZmxlY3Rpb24uVHlwZU9mKCBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUgKSwgdHJ1ZSApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBhdHRyVXNhZ2UgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0clVzYWdlID0gQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlLkRlZmF1bHRVc2FnZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGF0dHJVc2FnZS5Jbmhlcml0ZWQgPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhc2VUeXBlID0gdGhpcy5CYXNlVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ciA9IGJhc2VUeXBlLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggYXR0cmlidXRlVHlwZSwgZmFsc2UgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBhdHRyICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VUeXBlID0gYmFzZVR5cGUuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuTWV0YWRhdGFDb2xsZWN0aW9uLkdldEF0dHJpYnV0ZU9uZSggYXR0cmlidXRlVHlwZSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0Q3VzdG9tQXR0cmlidXRlczwgVEF0dHJpYnV0ZSBleHRlbmRzIENBdHRyaWJ1dGUgPiggYXR0cmlidXRlVHlwZTogQ1R5cGU8IFRBdHRyaWJ1dGUgPiwgaW5oZXJpdDogYm9vbGVhbiApOiBUQXR0cmlidXRlW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggaW5oZXJpdCA9PSB0cnVlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0dHJzID0gdGhpcy5HZXRDdXN0b21BdHRyaWJ1dGVzKCBhdHRyaWJ1dGVUeXBlLCBmYWxzZSApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0dHJVc2FnZSA9IGF0dHJpYnV0ZVR5cGUuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBSZWZsZWN0aW9uLlR5cGVPZiggQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlICksIHRydWUgKTtcclxuICAgICAgICAgICAgICAgIGlmICggYXR0clVzYWdlID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJVc2FnZSA9IENBdHRyaWJ1dGVVc2FnZUF0dHJpYnV0ZS5EZWZhdWx0VXNhZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIGF0dHJVc2FnZS5Jbmhlcml0ZWQgPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhc2VUeXBlID0gdGhpcy5CYXNlVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMgPSBhdHRycy5jb25jYXQoIGJhc2VUeXBlLkdldEN1c3RvbUF0dHJpYnV0ZXMoIGF0dHJpYnV0ZVR5cGUsIGZhbHNlICkgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZS5CYXNlVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0cnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5NZXRhZGF0YUNvbGxlY3Rpb24uR2V0QXR0cmlidXRlcyggYXR0cmlidXRlVHlwZSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0Q3VzdG9tQXR0cmlidXRlc0FsbCgpOiBDQXR0cmlidXRlW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLk1ldGFkYXRhQ29sbGVjdGlvbi5HZXRBdHRyaWJ1dGVzQWxsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSXNEZWZpbmVkPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+LCBpbmhlcml0OiBib29sZWFuICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBUeXBlT2Y8IFQgZXh0ZW5kcyBvYmplY3QgPiggdHlwZTogVHlwZUNvbnN0cnVjdG9yPCBUID4gfCBUeXBlQ29uc3RydWN0b3JBYnN0cmFjdDwgVCA+ICk6IENUeXBlPCBUID5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IENSdW50aW1lVHlwZSggdHlwZS5wcm90b3R5cGUgKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gVHlwZU9mX188IFQgZXh0ZW5kcyBvYmplY3QgPiggcHJvdG90eXBlOiBUeXBlUHJvdG90eXBlPCBUID4gKTogQ1R5cGU8IFQgPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ1J1bnRpbWVUeXBlKCBwcm90b3R5cGUgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeUqOS6juS6kuebuOexu+Wei+W8leeUqOeahOWcuuaZr1xyXG4gICAgICogQHBhcmFtIGRlbGF5IFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gVHlwZU9mRGVsYXk8IFQgZXh0ZW5kcyBvYmplY3QgPiggZGVsYXk6ICgpID0+IFR5cGVDb25zdHJ1Y3RvcjwgVCA+IHwgVHlwZUNvbnN0cnVjdG9yQWJzdHJhY3Q8IFQgPiApOiBJRGVsYXlUeXBlPCBUID5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gbmV3IENSdW50aW1lVHlwZSggZGVsYXkoKS5wcm90b3R5cGUgKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBDUnVudGltZUNvbnN0cnVjdG9ySW5mbyBleHRlbmRzIENDb25zdHJ1Y3RvckluZm9cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIG5hbWU6IHN0cmluZywgcHJvdG90eXBlOiBUeXBlUHJvdG90eXBlPCBvYmplY3QgPiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggbmFtZSwgcHJvdG90eXBlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IE1lbWJlclR5cGUoKTogVU1lbWJlclR5cGVzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gVU1lbWJlclR5cGVzLkNvbnN0cnVjdG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFBhcmFtZXRlcnMoKTogQ1BhcmFtZXRlckluZm9bXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNsYXNzVHlwZSA9IHRoaXMuRGVjbGFyaW5nVHlwZTtcclxuICAgICAgICAgICAgbGV0IHBhcmFtZXRlckNvdW50ID0gdGhpcy5Kc0NvbnN0cnVjdG9yLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IGluZm9zOiBBcnJheTwgQ1BhcmFtZXRlckluZm8gPiA9IEFycmF5KCBwYXJhbWV0ZXJDb3VudCApO1xyXG4gICAgICAgICAgICBpZiAoIHBhcmFtZXRlckNvdW50ID4gMCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHBhcmFtZXRlckNvdW50OyBpICsrIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQga2V5ID0gbmV3IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5Rm9yUGFyYW1ldGVyKCBjbGFzc1R5cGUsIFVBdHRyaWJ1dGVUYXJnZXQuUGFyYW1ldGVyLCB0aGlzLk5hbWUsIGkgKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZUF0dHJpYnV0ZSA9IE1ldGFkYXRhLkNvbnRhaW5lci5HZXRDb2xsZWN0aW9uKCBrZXkgKS5HZXRBdHRyaWJ1dGVPbmUoIFR5cGVPZiggQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUgKSApO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZm9zWyBpIF0gPSBuZXcgQ1J1bnRpbWVQYXJhbWV0ZXJJbmZvKCB0aGlzLm1fcHJvdG90eXBlLCB0aGlzLCBpLCAoIHR5cGVBdHRyaWJ1dGUgPT0gbnVsbCApID8gbnVsbCA6IHR5cGVBdHRyaWJ1dGUuRGVjbGFyaW5nVHlwZSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpbmZvcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgRGVzY3JpcHRvcigpOiBQcm9wZXJ0eURlc2NyaXB0b3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xhc3MgQ1J1bnRpbWVNZXRob2RJbmZvIGV4dGVuZHMgQ01ldGhvZEluZm9cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fbWV0aG9kOiBGdW5jdGlvbiA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2Zyb21Qcm9wZXJ0eTogQ1Byb3BlcnR5SW5mbyA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nLCBwcm90b3R5cGU6IFR5cGVQcm90b3R5cGU8IGFueSA+LCBtZXRob2Q6IEZ1bmN0aW9uLCBmcm9tUHJvcGVydHk/OiBDUHJvcGVydHlJbmZvIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCBuYW1lLCBwcm90b3R5cGUgKTtcclxuICAgICAgICAgICAgdGhpcy5tX21ldGhvZCA9IG1ldGhvZDtcclxuICAgICAgICAgICAgdGhpcy5tX2Zyb21Qcm9wZXJ0eSA9IGZyb21Qcm9wZXJ0eTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgTWVtYmVyVHlwZSgpOiBVTWVtYmVyVHlwZXNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBVTWVtYmVyVHlwZXMuTWV0aG9kO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldCBNZXRob2QoKTogRnVuY3Rpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fbWV0aG9kO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFBhcmFtZXRlcnMoKTogQ1BhcmFtZXRlckluZm9bXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNsYXNzVHlwZSA9IHRoaXMuRGVjbGFyaW5nVHlwZTtcclxuICAgICAgICAgICAgbGV0IHBhcmFtZXRlckNvdW50ID0gdGhpcy5NZXRob2QubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgaW5mb3M6IEFycmF5PCBDUGFyYW1ldGVySW5mbyA+ID0gQXJyYXkoIHBhcmFtZXRlckNvdW50ICk7XHJcbiAgICAgICAgICAgIGlmICggcGFyYW1ldGVyQ291bnQgPiAwIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVyQ291bnQ7IGkgKysgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlQXR0cmlidXRlOiBDRGVjbGFyaW5nVHlwZUF0dHJpYnV0ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtZXRlck5hbWU6IHN0cmluZyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLm1fZnJvbVByb3BlcnR5ID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IG5ldyBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleUZvclBhcmFtZXRlciggY2xhc3NUeXBlLCBVQXR0cmlidXRlVGFyZ2V0LlBhcmFtZXRlciwgdGhpcy5OYW1lLCBpICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdHRyc0NvbGxlY3Rpb24gPSBNZXRhZGF0YS5Db250YWluZXIuR2V0Q29sbGVjdGlvbigga2V5ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVBdHRyaWJ1dGUgPSBhdHRyc0NvbGxlY3Rpb24uR2V0QXR0cmlidXRlT25lKCBUeXBlT2YoIENEZWNsYXJpbmdUeXBlQXR0cmlidXRlICkgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWVBdHRyaWJ1dGUgPSBhdHRyc0NvbGxlY3Rpb24uR2V0QXR0cmlidXRlT25lKCBUeXBlT2YoIENOYW1lZEF0dHJpYnV0ZSApICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbmFtZUF0dHJpYnV0ZSAhID0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJOYW1lID0gbmFtZUF0dHJpYnV0ZS5UZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlQXR0cmlidXRlID0gdGhpcy5tX2Zyb21Qcm9wZXJ0eS5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIFR5cGVPZiggQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUgKSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJOYW1lID0gdGhpcy5tX2Zyb21Qcm9wZXJ0eS5OYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5mb3NbIGkgXSA9IG5ldyBDUnVudGltZVBhcmFtZXRlckluZm8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubV9wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICggdHlwZUF0dHJpYnV0ZSA9PSBudWxsICkgPyBudWxsIDogdHlwZUF0dHJpYnV0ZS5EZWNsYXJpbmdUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJOYW1lICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGluZm9zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBEZXNjcmlwdG9yKCk6IFByb3BlcnR5RGVzY3JpcHRvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fZnJvbVByb3BlcnR5ID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0aGlzLm1fcHJvdG90eXBlLCB0aGlzLk5hbWUgKTtcclxuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0aGlzLm1fcHJvdG90eXBlLCB0aGlzLm1fZnJvbVByb3BlcnR5Lk5hbWUgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNsYXNzIENSdW50aW1lUHJvcGVydHlJbmZvIGV4dGVuZHMgQ1Byb3BlcnR5SW5mb1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nLCBwcm90b3R5cGU6IFR5cGVQcm90b3R5cGU8IG9iamVjdCA+IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCBuYW1lLCBwcm90b3R5cGUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgTWVtYmVyVHlwZSgpOiBVTWVtYmVyVHlwZXNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBVTWVtYmVyVHlwZXMuUHJvcGVydHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBnZXQgUHJvcGVydHlUeXBlKCk6IENUeXBlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYXR0ciA9IHRoaXMuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBUeXBlT2YoIENEZWNsYXJpbmdUeXBlQXR0cmlidXRlICkgKTtcclxuICAgICAgICAgICAgaWYgKCBhdHRyID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyLkRlY2xhcmluZ1R5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2V0VmFsdWUoIG9iajogYW55LCB2YWx1ZTogYW55ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9ialsgdGhpcy5tX25hbWUgXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFZhbHVlKCBvYmo6IGFueSApOiBhbnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmpbIHRoaXMubV9uYW1lIF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0TWV0YWRhdGFLZXkoKTogTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JOYW1lZCggdGhpcy5EZWNsYXJpbmdUeXBlLCBVQXR0cmlidXRlVGFyZ2V0LlByb3BlcnR5LCB0aGlzLk5hbWUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQ2FuV3JpdGUoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpcy5tX3Byb3RvdHlwZSwgdGhpcy5tX25hbWUgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3Iuc2V0ICE9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQ2FuUmVhZCgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0aGlzLm1fcHJvdG90eXBlLCB0aGlzLm1fbmFtZSApO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQgIT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFNldE1ldGhvZCgpOiBDTWV0aG9kSW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpcy5tX3Byb3RvdHlwZSwgdGhpcy5tX25hbWUgKTtcclxuICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yLnNldCA9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDUnVudGltZU1ldGhvZEluZm8oIFwiZ2V0X1wiICsgdGhpcy5OYW1lLCB0aGlzLm1fcHJvdG90eXBlLCBkZXNjcmlwdG9yLnNldCwgdGhpcyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEdldE1ldGhvZCgpOiBDTWV0aG9kSW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpcy5tX3Byb3RvdHlwZSwgdGhpcy5tX25hbWUgKTtcclxuICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yLmdldCA9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDUnVudGltZU1ldGhvZEluZm8oIFwiZ2V0X1wiICsgdGhpcy5OYW1lLCB0aGlzLm1fcHJvdG90eXBlLCBkZXNjcmlwdG9yLmdldCwgdGhpcyApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xhc3MgQ1J1bnRpbWVGaWVsZEluZm8gZXh0ZW5kcyBDRmllbGRJbmZvXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBuYW1lOiBzdHJpbmcsIHByb3RvdHlwZTogVHlwZVByb3RvdHlwZTwgb2JqZWN0ID4gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoIG5hbWUsIHByb3RvdHlwZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBGaWVsZFR5cGUoKTogQ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyID0gdGhpcy5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIFR5cGVPZiggQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUgKSApO1xyXG4gICAgICAgICAgICBpZiAoIGF0dHIgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHIuRGVjbGFyaW5nVHlwZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNsYXNzIENSdW50aW1lUGFyYW1ldGVySW5mbyBleHRlbmRzIENQYXJhbWV0ZXJJbmZvXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fcHJvdG90eXBlOiBUeXBlUHJvdG90eXBlPCBvYmplY3QgPiA9IG51bGw7XHJcbiAgICAgICAgLy8gcHJvdGVjdGVkIG1fbWV0aG9kTmFtZTogc3RyaW5nID0gbnVsbDtcclxuICAgICAgICAvLyBwcm90ZWN0ZWQgbV9kZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9tZW1iZXI6IENNZW1iZXJJbmZvID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9wYXJhbWV0ZXJJbmRleDogbnVtYmVyID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIG1fcGFyYW1ldGVyTmFtZTogc3RyaW5nID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fcGFyYW1ldGVyVHlwZTogQ1R5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICBwcml2YXRlIG1fbWV0YWRhdGFDb2xsZWN0aW9uOiBNZXRhZGF0YS5JTWV0YWRhdGFDb2xsZWN0aW9uUmVhZG9ubHkgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHByb3RvdHlwZTogVHlwZVByb3RvdHlwZTwgb2JqZWN0ID4sIG1lbWJlcjogQ01lbWJlckluZm8sIHBhcmFtZXRlckluZGV4OiBudW1iZXIsIHBhcmFtZXRlclR5cGU6IENUeXBlLCBwYXJhbWV0ZXJOYW1lPzogc3RyaW5nIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9wcm90b3R5cGUgPSBwcm90b3R5cGU7XHJcbiAgICAgICAgICAgIHRoaXMubV9tZW1iZXIgPSBtZW1iZXI7XHJcbiAgICAgICAgICAgIHRoaXMubV9wYXJhbWV0ZXJJbmRleCA9IHBhcmFtZXRlckluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLm1fcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlck5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9wYXJhbWV0ZXJUeXBlID0gcGFyYW1ldGVyVHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgRGVjbGFyaW5nVHlwZSgpOiBDVHlwZTwgb2JqZWN0ID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ1J1bnRpbWVUeXBlKCB0aGlzLm1fcHJvdG90eXBlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFBhcmFtZXRlckluZGV4KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcGFyYW1ldGVySW5kZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IE5hbWUoKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3BhcmFtZXRlck5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFBhcmFtZXRlclR5cGUoKTogQ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcGFyYW1ldGVyVHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRNZXRhZGF0YUtleSgpOiBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleUZvclBhcmFtZXRlciggdGhpcy5EZWNsYXJpbmdUeXBlLCBVQXR0cmlidXRlVGFyZ2V0LlBhcmFtZXRlciwgdGhpcy5tX21lbWJlci5OYW1lLCB0aGlzLlBhcmFtZXRlckluZGV4ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldCBNZXRhZGF0YUNvbGxlY3Rpb24oKTogTWV0YWRhdGEuSU1ldGFkYXRhQ29sbGVjdGlvblJlYWRvbmx5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV9tZXRhZGF0YUNvbGxlY3Rpb24gPT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSB0aGlzLkdldE1ldGFkYXRhS2V5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fbWV0YWRhdGFDb2xsZWN0aW9uID0gTWV0YWRhdGEuQ29udGFpbmVyLkdldENvbGxlY3Rpb24oIGtleSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fbWV0YWRhdGFDb2xsZWN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEN1c3RvbUF0dHJpYnV0ZU9uZTwgVEF0dHJpYnV0ZSBleHRlbmRzIENBdHRyaWJ1dGUgPiggYXR0cmlidXRlVHlwZTogQ1R5cGU8IFRBdHRyaWJ1dGUgPiApOiBUQXR0cmlidXRlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5NZXRhZGF0YUNvbGxlY3Rpb24uR2V0QXR0cmlidXRlT25lKCBhdHRyaWJ1dGVUeXBlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0Q3VzdG9tQXR0cmlidXRlczwgVEF0dHJpYnV0ZSBleHRlbmRzIENBdHRyaWJ1dGUgPiggYXR0cmlidXRlVHlwZTogQ1R5cGU8IFRBdHRyaWJ1dGUgPiApOiBUQXR0cmlidXRlW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLk1ldGFkYXRhQ29sbGVjdGlvbi5HZXRBdHRyaWJ1dGVzKCBhdHRyaWJ1dGVUeXBlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0Q3VzdG9tQXR0cmlidXRlc0FsbCgpOiBDQXR0cmlidXRlW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLk1ldGFkYXRhQ29sbGVjdGlvbi5HZXRBdHRyaWJ1dGVzQWxsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSXNEZWZpbmVkPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+ICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoIHRoaXMuTWV0YWRhdGFDb2xsZWN0aW9uLkdldEF0dHJpYnV0ZU9uZSggYXR0cmlidXRlVHlwZSApID09IG51bGwgKSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1JlZmxlY3Rpb24vVHlwZS50c1wiIC8+XHJcblxyXG5cclxuaW50ZXJmYWNlIE9iamVjdFxyXG57XHJcbiAgICBHZXRUeXBlKCk6IGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IE9iamVjdCA+O1xyXG59XHJcblxyXG5PYmplY3QucHJvdG90eXBlLkdldFR5cGUgPSBmdW5jdGlvbigpOiBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBPYmplY3QgPlxyXG57XHJcbiAgICByZXR1cm4gaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2ZfXyggPGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb24uVHlwZVByb3RvdHlwZTxvYmplY3Q+PlJlZmxlY3QuZ2V0UHJvdG90eXBlT2YoIHRoaXMgKSApO1xyXG59XHJcblxyXG4vKipcclxuICog5LiN5Y+v5p6a5Li+XHJcbiAqL1xyXG5SZWZsZWN0LmRlZmluZVByb3BlcnR5KCBPYmplY3QucHJvdG90eXBlLCBcIkdldFR5cGVcIiwgeyBlbnVtZXJhYmxlOiBmYWxzZSB9ICk7XHJcblxyXG5cclxuIiwiXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9DQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9PYmplY3RfR2V0VHlwZS50c1wiIC8+XHJcblxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbVxyXG57XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQXR0cmlidXRlRGVjb3JhdGUoIGF0dHJpYnV0ZTogQ0F0dHJpYnV0ZSApOiBVRGVjb3JhdG9yRnVuY3Rpb25UeXBlXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICggdGFyZ2V0OiBhbnksIHByb3BlcnR5TmFtZT86IHN0cmluZyB8IHN5bWJvbCwgZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXg/OiBQcm9wZXJ0eURlc2NyaXB0b3IgfCBudW1iZXIgKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZVVzYWdlID0gYXR0cmlidXRlLkdldFR5cGUoKS5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIFJlZmxlY3Rpb24uVHlwZU9mKCBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUgKSwgdHJ1ZSApO1xyXG4gICAgICAgICAgICBpZiAoIGF0dHJpYnV0ZVVzYWdlID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVVc2FnZSA9IENBdHRyaWJ1dGVVc2FnZUF0dHJpYnV0ZS5EZWZhdWx0VXNhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eU5hbWUgPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gXCJjb25zdHJ1Y3RvclwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDQXR0cmlidXRlRGVjb3JhdGVIZWxwZXIuRGVjb3JhdGVDbGFzcyggYXR0cmlidXRlLCBhdHRyaWJ1dGVVc2FnZSwgdGFyZ2V0ICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICggdHlwZW9mKCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCApID09IFwib2JqZWN0XCIgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlci5EZWNvcmF0ZU1ldGhvZCggYXR0cmlidXRlLCBhdHRyaWJ1dGVVc2FnZSwgdGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4LnZhbHVlICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICggdHlwZW9mKCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCApID09IFwibnVtYmVyXCIgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlci5EZWNvcmF0ZVBhcmFtZXRlciggYXR0cmlidXRlLCBhdHRyaWJ1dGVVc2FnZSwgdGFyZ2V0LnByb3RvdHlwZSwgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDQXR0cmlidXRlRGVjb3JhdGVIZWxwZXIuRGVjb3JhdGVGaWVsZCggYXR0cmlidXRlLCBhdHRyaWJ1dGVVc2FnZSwgdGFyZ2V0LCBwcm9wZXJ0eU5hbWUgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCB0eXBlb2YoIGRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4ICkgPT0gXCJvYmplY3RcIiApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleC5zZXQgPT0gdW5kZWZpbmVkICYmIGRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4LmdldCA9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ0F0dHJpYnV0ZURlY29yYXRlSGVscGVyLkRlY29yYXRlTWV0aG9kKCBhdHRyaWJ1dGUsIGF0dHJpYnV0ZVVzYWdlLCB0YXJnZXQsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXgudmFsdWUgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ0F0dHJpYnV0ZURlY29yYXRlSGVscGVyLkRlY29yYXRlUHJvcGVydHkoIGF0dHJpYnV0ZSwgYXR0cmlidXRlVXNhZ2UsIHRhcmdldCwgcHJvcGVydHlOYW1lICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlci5EZWNvcmF0ZVBhcmFtZXRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVVc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4ICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBleHBvcnQgdmFyIEF0dHJpYnV0ZSA9IEF0dHJpYnV0ZURlY29yYXRlO1xyXG5cclxuICAgIGNsYXNzIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdVN5bWJvbEZvckNvbnN0cnVjOiBVU3ltYm9sID0gXCJKYXNtaW5lOjpTeXN0ZW06QXR0cmlidXRlXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRGVjb3JhdGVDbGFzcyhcclxuICAgICAgICAgICAgYXR0cmlidXRlOiBDQXR0cmlidXRlLFxyXG4gICAgICAgICAgICB1c2FnZTogQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlLFxyXG4gICAgICAgICAgICB0YXJnZXRDb25zdHJ1Y3RvcjogUmVmbGVjdGlvbi5UeXBlQ29uc3RydWN0b3I8IG9iamVjdCA+ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlci5DaGVja1RhcmdldFZhbGlkT24oIGF0dHJpYnV0ZSwgdXNhZ2UsIFVBdHRyaWJ1dGVUYXJnZXQuQ2xhc3MgKTtcclxuICAgICAgICAgICAgbGV0IGtleSA9IG5ldyBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleUZvckNsYXNzKCBSZWZsZWN0aW9uLlR5cGVPZl9fKCB0YXJnZXRDb25zdHJ1Y3Rvci5wcm90b3R5cGUgKSwgVUF0dHJpYnV0ZVRhcmdldC5DbGFzcyApO1xyXG4gICAgICAgICAgICBNZXRhZGF0YS5Db250YWluZXIuR2V0T3JBZGRDb2xsZWN0aW9uKCBrZXkgKS5BZGRBdHRyaWJ1dGUoIGF0dHJpYnV0ZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBEZWNvcmF0ZUZpZWxkKFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6IENBdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHVzYWdlOiBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHRhcmdldFByb3RvdHlwZTogUmVmbGVjdGlvbi5UeXBlUHJvdG90eXBlPCBvYmplY3QgPixcclxuICAgICAgICAgICAgZmllbGROYW1lOiBzdHJpbmcgfCBzeW1ib2wgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ0F0dHJpYnV0ZURlY29yYXRlSGVscGVyLkNoZWNrVGFyZ2V0VmFsaWRPbiggYXR0cmlidXRlLCB1c2FnZSwgVUF0dHJpYnV0ZVRhcmdldC5GaWVsZCApO1xyXG4gICAgICAgICAgICBsZXQga2V5ID0gbmV3IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5Rm9yTmFtZWQoIFJlZmxlY3Rpb24uVHlwZU9mX18oIHRhcmdldFByb3RvdHlwZSApLCBVQXR0cmlidXRlVGFyZ2V0LkZpZWxkLCBmaWVsZE5hbWUgKTtcclxuICAgICAgICAgICAgTWV0YWRhdGEuQ29udGFpbmVyLkdldE9yQWRkQ29sbGVjdGlvbigga2V5ICkuQWRkQXR0cmlidXRlKCBhdHRyaWJ1dGUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRGVjb3JhdGVQcm9wZXJ0eShcclxuICAgICAgICAgICAgYXR0cmlidXRlOiBDQXR0cmlidXRlLFxyXG4gICAgICAgICAgICB1c2FnZTogQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlLFxyXG4gICAgICAgICAgICB0YXJnZXRQcm90b3R5cGU6IFJlZmxlY3Rpb24uVHlwZVByb3RvdHlwZTwgb2JqZWN0ID4sXHJcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogc3RyaW5nIHwgc3ltYm9sICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlci5DaGVja1RhcmdldFZhbGlkT24oIGF0dHJpYnV0ZSwgdXNhZ2UsIFVBdHRyaWJ1dGVUYXJnZXQuUHJvcGVydHkgKTtcclxuICAgICAgICAgICAgbGV0IGtleSA9IG5ldyBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleUZvck5hbWVkKCBSZWZsZWN0aW9uLlR5cGVPZl9fKCB0YXJnZXRQcm90b3R5cGUgKSwgVUF0dHJpYnV0ZVRhcmdldC5Qcm9wZXJ0eSwgcHJvcGVydHlOYW1lICk7XHJcbiAgICAgICAgICAgIE1ldGFkYXRhLkNvbnRhaW5lci5HZXRPckFkZENvbGxlY3Rpb24oIGtleSApLkFkZEF0dHJpYnV0ZSggYXR0cmlidXRlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIERlY29yYXRlTWV0aG9kKFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6IENBdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHVzYWdlOiBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHRhcmdldFByb3RvdHlwZTogUmVmbGVjdGlvbi5UeXBlUHJvdG90eXBlPCBvYmplY3QgPixcclxuICAgICAgICAgICAgbWV0aG9kTmFtZTogc3RyaW5nIHwgc3ltYm9sLFxyXG4gICAgICAgICAgICBtZXRob2Q6IEZ1bmN0aW9uICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlci5DaGVja1RhcmdldFZhbGlkT24oIGF0dHJpYnV0ZSwgdXNhZ2UsIFVBdHRyaWJ1dGVUYXJnZXQuTWV0aG9kICk7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JOYW1lZCggUmVmbGVjdGlvbi5UeXBlT2ZfXyggdGFyZ2V0UHJvdG90eXBlICksIFVBdHRyaWJ1dGVUYXJnZXQuTWV0aG9kLCBtZXRob2ROYW1lICk7XHJcbiAgICAgICAgICAgIE1ldGFkYXRhLkNvbnRhaW5lci5HZXRPckFkZENvbGxlY3Rpb24oIGtleSApLkFkZEF0dHJpYnV0ZSggYXR0cmlidXRlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIERlY29yYXRlUGFyYW1ldGVyKFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6IENBdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHVzYWdlOiBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgIHRhcmdldFByb3RvdHlwZTogUmVmbGVjdGlvbi5UeXBlUHJvdG90eXBlPCBvYmplY3QgPixcclxuICAgICAgICAgICAgbWV0aG9kTmFtZTogc3RyaW5nIHwgc3ltYm9sLFxyXG4gICAgICAgICAgICBwYXJhbWV0ZXJJbmRleDogbnVtYmVyLFxyXG4gICAgICAgICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlci5DaGVja1RhcmdldFZhbGlkT24oIGF0dHJpYnV0ZSwgdXNhZ2UsIFVBdHRyaWJ1dGVUYXJnZXQuUGFyYW1ldGVyICk7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JQYXJhbWV0ZXIoIFJlZmxlY3Rpb24uVHlwZU9mX18oIHRhcmdldFByb3RvdHlwZSApLCBVQXR0cmlidXRlVGFyZ2V0LlBhcmFtZXRlciwgbWV0aG9kTmFtZSwgcGFyYW1ldGVySW5kZXggKTtcclxuICAgICAgICAgICAgTWV0YWRhdGEuQ29udGFpbmVyLkdldE9yQWRkQ29sbGVjdGlvbigga2V5ICkuQWRkQXR0cmlidXRlKCBhdHRyaWJ1dGUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ2hlY2tUYXJnZXRWYWxpZE9uKCBhdHRyaWJ1dGU6IENBdHRyaWJ1dGUsIHVzYWdlOiBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUsIHRhcmdldDogVUF0dHJpYnV0ZVRhcmdldCApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHVzYWdlICE9IG51bGwgJiYgKHVzYWdlLlZhbGlkT24gJiB0YXJnZXQpICE9IHRhcmdldCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggYENhbid0IHVzZSAke2F0dHJpYnV0ZS5jb25zdHJ1Y3Rvci5uYW1lfSB0byBkZWNvcmF0ZSAke1VBdHRyaWJ1dGVUYXJnZXRbdGFyZ2V0XX1gICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9DQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9BdHRyaWJ1dGVEZWNvcmF0ZS50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gdmFsaWRPbiBcclxuICAgICAqIEBwYXJhbSBhbGxvd011bHRpcGxlIFxyXG4gICAgICogQHBhcmFtIGluaGVyaXQgXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBBdHRyaWJ1dGVVc2FnZSggdmFsaWRPbjogbnVtYmVyLCBhbGxvd011bHRpcGxlPzogYm9vbGVhbiwgaW5oZXJpdD86IGJvb2xlYW4gKTogVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JDbGFzc1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBBdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IENBdHRyaWJ1dGVVc2FnZUF0dHJpYnV0ZSggdmFsaWRPbiwgYWxsb3dNdWx0aXBsZSwgaW5oZXJpdCApICk7XHJcbiAgICB9XHJcbn0iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1VBdHRyaWJ1dGVUYXJnZXQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ0F0dHJpYnV0ZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BdHRyaWJ1dGVVc2FnZS50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb25cclxue1xyXG4gICAgQEF0dHJpYnV0ZVVzYWdlKCBVQXR0cmlidXRlVGFyZ2V0Lk1ldGhvZCB8IFVBdHRyaWJ1dGVUYXJnZXQuRmllbGQgfCBVQXR0cmlidXRlVGFyZ2V0LlByb3BlcnR5IHwgVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIGZhbHNlLCBmYWxzZSApXHJcbiAgICBleHBvcnQgY2xhc3MgQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUgZXh0ZW5kcyBDQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fdHlwZTogSURlbGF5VHlwZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBtX3R5cGVzR2VuZXJpYzogQXJyYXk8IElEZWxheVR5cGUgPiA9IG51bGw7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBtX2lzR2VuZXJpYzogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG1fdHlwZXNHZW5lcmljUmVhbDogQXJyYXk8IENUeXBlID4gPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHR5cGU6IElEZWxheVR5cGUsIGdlbmVyaWNUeXBlczogQXJyYXk8IElEZWxheVR5cGUgPiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1fdHlwZSA9IHR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMubV90eXBlc0dlbmVyaWMgPSBnZW5lcmljVHlwZXM7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX3R5cGVzR2VuZXJpYyA9PSBudWxsIHx8IHRoaXMubV90eXBlc0dlbmVyaWMubGVuZ3RoID09IDAgKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2lzR2VuZXJpYyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1faXNHZW5lcmljID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgRGVjbGFyaW5nVHlwZSgpOiBDVHlwZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV90eXBlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IEdlbmVyaWNUeXBlcygpOiBBcnJheTwgQ1R5cGUgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1faXNHZW5lcmljID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV90eXBlc0dlbmVyaWNSZWFsID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBsZXQgZ3Qgb2YgdGhpcy5tX3R5cGVzR2VuZXJpYyApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX3R5cGVzR2VuZXJpY1JlYWwucHVzaCggZ3QoKSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fdHlwZXNHZW5lcmljUmVhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgSXNHZW5lcmljVHlwZSgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKCB0aGlzLm1fdHlwZXNHZW5lcmljID09IHVuZGVmaW5lZCB8fCB0aGlzLm1fdHlwZXNHZW5lcmljLmxlbmd0aCA9PSAwICkgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aOw5piO6KOF6aWw5ZmoXHJcbiAgICAgKiBcclxuICAgICAqICsg6KOF6aWwIEZpZWxkIOWtl+aute+8muS/rumlsOWtl+auteexu+Wei1xyXG4gICAgICogKyDoo4XppbAgUHJvcGVydHkg5bGe5oCn77ya5L+u6aWw5bGe5oCn55qE57G75Z6LXHJcbiAgICAgKiArIOijhemlsCBNZXRob2Qg5pa55rOV77ya5L+u6aWw5pa55rOV55qE6L+U5Zue5YC857G75Z6LXHJcbiAgICAgKiArIOijhemlsCBQYXJhbWV0ZXIg5Y+C5pWw77ya5L+u6aWw5pa55rOV55qE5Y+C5pWw57G75Z6LXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB0eXBlIFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gRGVjbGFyaW5nVHlwZSggdHlwZTogQ1R5cGUsIGdlbmVyaWNUeXBlcz86IENUeXBlW10gKTogVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JGaWVsZCAmIFVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yUHJvcGVydHkgJiBVRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0Zvck1ldGhvZCAmIFVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yUGFyYW1ldGVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCB0YXJnZXQ6IGFueSwgbWVtYmVyTmFtZTogc3RyaW5nLCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleD86IFByb3BlcnR5RGVzY3JpcHRvciB8IG51bWJlciApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHR5cGVvZiggZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXggKSA9PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiggZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXggKSA9PSBcIm9iamVjdFwiIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRW51bWVyYWJsZSggdGFyZ2V0LCBtZW1iZXJOYW1lLCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0ZW1wOiBBcnJheTwgSURlbGF5VHlwZSA+ID0gQXJyYXkoKTtcclxuICAgICAgICAgICAgaWYgKCBnZW5lcmljVHlwZXMgIT0gbnVsbCAmJiBnZW5lcmljVHlwZXMubGVuZ3RoID4gMCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBndCBvZiBnZW5lcmljVHlwZXMgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXAucHVzaCggKCkgPT4gZ3QgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IENEZWNsYXJpbmdUeXBlQXR0cmlidXRlKCAoKSA9PiB0eXBlLCB0ZW1wICkgKSggdGFyZ2V0LCBtZW1iZXJOYW1lLCA8YW55PmRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aOw5piO6KOF6aWw5ZmoLeW7tuWQjlxyXG4gICAgICogXHJcbiAgICAgKiArIOijhemlsCBGaWVsZCDlrZfmrrXvvJrkv67ppbDlrZfmrrXnsbvlnotcclxuICAgICAqICsg6KOF6aWwIFByb3BlcnR5IOWxnuaAp++8muS/rumlsOWxnuaAp+eahOexu+Wei1xyXG4gICAgICogKyDoo4XppbAgTWV0aG9kIOaWueazle+8muS/rumlsOaWueazleeahOi/lOWbnuWAvOexu+Wei1xyXG4gICAgICogKyDoo4XppbAgUGFyYW1ldGVyIOWPguaVsO+8muS/rumlsOaWueazleeahOWPguaVsOexu+Wei1xyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIERlY2xhcmluZ1R5cGVEZWxheSggdHlwZTogSURlbGF5VHlwZSwgZ2VuZXJpY1R5cGVzPzogSURlbGF5VHlwZVtdICk6IFVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yRmllbGQgJiBVRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvclByb3BlcnR5ICYgVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JNZXRob2QgJiBVRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvclBhcmFtZXRlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiggdGFyZ2V0OiBhbnksIG1lbWJlck5hbWU6IHN0cmluZywgZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXg/OiBQcm9wZXJ0eURlc2NyaXB0b3IgfCBudW1iZXIgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0eXBlb2YoIGRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4ICkgPT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2YoIGRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4ICkgPT0gXCJvYmplY3RcIiApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEVudW1lcmFibGUoIHRhcmdldCwgbWVtYmVyTmFtZSwgZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXggKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IENEZWNsYXJpbmdUeXBlQXR0cmlidXRlKCB0eXBlLCBnZW5lcmljVHlwZXMgKSApKCB0YXJnZXQsIG1lbWJlck5hbWUsIDxhbnk+ZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXggKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIGV4cG9ydCBjb25zdCBSZWZsZWN0RmllbGRzS2V5ID0gXCJKYXNtaW5lOjpTeXN0ZW06OlJlZmxlY3Q6OkZpZWxkc1wiO1xyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBFbnVtZXJhYmxlKCB0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcsIGRlc2NyaXB0b3I/OiBQcm9wZXJ0eURlc2NyaXB0b3IgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICggZGVzY3JpcHRvciA9PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBmaWVsZHNEZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IgPSBudWxsO1xyXG4gICAgICAgICAgICAvLyDmo4Dmn6XmmK/lkKblrZjlnKjnm7jlkIzlkI3np7DnmoRmaWVsZOWtl+autVxyXG4gICAgICAgICAgICAvLyBsZXQgcHJvdG9CYXNlID0gUmVmbGVjdC5nZXRQcm90b3R5cGVPZiggdGFyZ2V0ICk7XHJcbiAgICAgICAgICAgIC8vIHdoaWxlICggcHJvdG9CYXNlIClcclxuICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKCBwcm90b0Jhc2UgPT0gbnVsbCApXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoIHByb3RvQmFzZSA9PSBPYmplY3QucHJvdG90eXBlIClcclxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIC8vICAgICBmaWVsZHNEZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHByb3RvQmFzZSwgUmVmbGVjdEZpZWxkc0tleSApO1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKCBmaWVsZHNEZXNjcmlwdG9yICE9IG51bGwgJiYgZmllbGRzRGVzY3JpcHRvci52YWx1ZSAhPSBudWxsICYmICggcHJvcGVydHlOYW1lIGluIGZpZWxkc0Rlc2NyaXB0b3IudmFsdWUgKSApXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICAgICBwcm90b0Jhc2UgPSBSZWZsZWN0LmdldFByb3RvdHlwZU9mKCBwcm90b0Jhc2UgKTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgZmllbGRzRGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0YXJnZXQsIFJlZmxlY3RGaWVsZHNLZXkgKTtcclxuICAgICAgICAgICAgbGV0IGZpZWxkcyA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICggZmllbGRzRGVzY3JpcHRvciA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGRzID0ge307XHJcbiAgICAgICAgICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIFJlZmxlY3RGaWVsZHNLZXksIHsgdmFsdWU6IGZpZWxkcywgZW51bWVyYWJsZTogdHJ1ZSB9ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZHMgPSBmaWVsZHNEZXNjcmlwdG9yLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpZWxkc1sgcHJvcGVydHlOYW1lIF0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1VBdHRyaWJ1dGVUYXJnZXQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ0F0dHJpYnV0ZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BdHRyaWJ1dGVVc2FnZS50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb25cclxue1xyXG4gICAgQEF0dHJpYnV0ZVVzYWdlKCBVQXR0cmlidXRlVGFyZ2V0LlBhcmFtZXRlciwgZmFsc2UsIGZhbHNlIClcclxuICAgIGV4cG9ydCBjbGFzcyBDTmFtZWRBdHRyaWJ1dGUgZXh0ZW5kcyBDQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3RleHQ6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggdGV4dDogc3RyaW5nIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV90ZXh0ID0gdGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgVGV4dCgpOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fdGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIE5hbWVkKCB0ZXh0OiBzdHJpbmcgKTogVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gQXR0cmlidXRlRGVjb3JhdGUoIG5ldyBDTmFtZWRBdHRyaWJ1dGUoIHRleHQgKSApO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIEBBdHRyaWJ1dGVVc2FnZSggVUF0dHJpYnV0ZVRhcmdldC5DbGFzcywgdHJ1ZSwgZmFsc2UgKVxyXG4gICAgY2xhc3MgQ1R5cGVOaWNrbmFtZUF0dHJpYnV0ZSBleHRlbmRzIENBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fbmlja25hbWU6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvciggbmlja25hbWU6IHN0cmluZyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1fbmlja25hbWUgPSBuaWNrbmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgTmlja25hbWUoKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX25pY2tuYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBUeXBlTmlja25hbWUoIG5pY2tuYW1lOiBzdHJpbmcgKTogVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JDbGFzc1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBBdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IENUeXBlTmlja25hbWVBdHRyaWJ1dGUoIG5pY2tuYW1lICkgKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENUeXBlXHJcbiAgICB7XHJcbiAgICAgICAgR2V0Tmlja25hbWVzKCk6IEFycmF5PCBzdHJpbmcgPjtcclxuICAgICAgICBHZXROaWNrbmFtZSgpOiBzdHJpbmc7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBDVHlwZS5wcm90b3R5cGUuR2V0Tmlja25hbWVzID0gZnVuY3Rpb24oKTogQXJyYXk8IHN0cmluZyA+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG5pY2tuYW1lcyA9IEFycmF5PCBzdHJpbmcgPigpO1xyXG4gICAgICAgIGxldCBuaWNrbmFtZUF0dHJzID0gdGhpcy5HZXRDdXN0b21BdHRyaWJ1dGVzKCBUeXBlT2YoIENUeXBlTmlja25hbWVBdHRyaWJ1dGUgKSwgZmFsc2UgKTtcclxuICAgICAgICBmb3IgKCBjb25zdCBuIG9mIG5pY2tuYW1lQXR0cnMgKVxyXG4gICAgICAgICAgICBuaWNrbmFtZXMucHVzaCggbi5OaWNrbmFtZSApO1xyXG4gICAgICAgIG5pY2tuYW1lcy5wdXNoKCB0aGlzLkdldEpzQ29uc3RydWN0b3IoKS5uYW1lICk7XHJcbiAgICAgICAgcmV0dXJuIG5pY2tuYW1lcztcclxuICAgIH1cclxuXHJcbiAgICBDVHlwZS5wcm90b3R5cGUuR2V0Tmlja25hbWUgPSBmdW5jdGlvbigpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBsZXQgbmlja25hbWVBdHRyID0gdGhpcy5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIFR5cGVPZiggQ1R5cGVOaWNrbmFtZUF0dHJpYnV0ZSApLCBmYWxzZSApO1xyXG4gICAgICAgIGlmICggbmlja25hbWVBdHRyID09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuR2V0SnNDb25zdHJ1Y3RvcigpLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuaWNrbmFtZUF0dHIuTmlja25hbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvblxyXG57XHJcbiAgICBleHBvcnQgZW51bSBVTWVtYmVyVHlwZXNcclxuICAgIHtcclxuICAgICAgICBDb25zdHJ1Y3RvciA9IDEsXHJcbiAgICAgICAgRmllbGQgPSAyLFxyXG4gICAgICAgIE1ldGhvZCA9IDQsXHJcbiAgICAgICAgUHJvcGVydHkgPSA4LFxyXG4gICAgICAgIFR5cGVJbmZvID0gMTZcclxuICAgIH1cclxufSIsIlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgVENhbGxiYWNrPCBUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueSkgPT4gYW55ID5cclxuICAgIHtcclxuICAgICAgICAvLyBoYW5kbGVyOiBhbnk7XHJcbiAgICAgICAgLy8gcHJvY2VzczogVDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2V4ZWN1dGFibGU6IFQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggcHJvY2Vzcz86IFQsIGhhbmRsZXI/OiBhbnkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5wcm9jZXNzID0gcHJvY2VzcztcclxuICAgICAgICAgICAgLy8gdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICAgICAgdGhpcy5tX2V4ZWN1dGFibGUgPSBwcm9jZXNzLmJpbmQoIGhhbmRsZXIgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHB1YmxpYyBnZXQgRXhlY3V0ZSgpOiBUXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5tX2V4ZWN1dGFibGU7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBwdWJsaWMgRXhlY3V0ZSggLi4uYXJnczogUGFyYW1ldGVyczxUPiApOiBSZXR1cm5UeXBlPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2V4ZWN1dGFibGUoIC4uLjxhbnlbXT5hcmdzICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnQgdHlwZSBUQ2FsbGJhY2tPckZ1bmN0aW9uPCBUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueSkgPT4gYW55ID4gPSBUIHwgVENhbGxiYWNrPCBUID4gO1xyXG5cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVENhbGxiYWNrQXJyYXk8IFQgZXh0ZW5kcyAoLi4uYXJnczogYW55KSA9PiBhbnkgPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBjYWxsYmFja3M6IFRDYWxsYmFjazwgVCA+W10gPSBbXTtcclxuXHJcbiAgICAgICAgcHVibGljIEFkZCggY2FsbGJhY2s6IFRDYWxsYmFja09yRnVuY3Rpb248IFQgPiB8IEFycmF5PCBUQ2FsbGJhY2tPckZ1bmN0aW9uPCBUID4gPiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIGNhbGxiYWNrIGluc3RhbmNlb2YgQXJyYXkgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBjb25zdCBjIG9mIGNhbGxiYWNrIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiggYyApID09IFwiZnVuY3Rpb25cIiApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja3MucHVzaCggbmV3IFRDYWxsYmFjayggYyApICk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja3MucHVzaCggYyApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mKCBjYWxsYmFjayApID09IFwiZnVuY3Rpb25cIiApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja3MucHVzaCggbmV3IFRDYWxsYmFjayggY2FsbGJhY2sgKSApO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goIGNhbGxiYWNrICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBFeGVjdXRlKCAuLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5jYWxsYmFja3MgIT0gbnVsbCAmJiB0aGlzLmNhbGxiYWNrcy5sZW5ndGggPiAwIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yICggY29uc3QgY2Igb2YgdGhpcy5jYWxsYmFja3MgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggY2IgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLkV4ZWN1dGUoIC4uLmFyZ3MgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIENvcHkoKTogVENhbGxiYWNrQXJyYXk8IFQgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvcHljYXQgPSBuZXcgVENhbGxiYWNrQXJyYXk8IFQgPigpO1xyXG4gICAgICAgICAgICBmb3IgKCBjb25zdCBjIG9mIHRoaXMuY2FsbGJhY2tzIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29weWNhdC5jYWxsYmFja3MucHVzaCggYyApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb3B5Y2F0O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmludGVyZmFjZSBPYmplY3Rcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiAqKuKHqSDmi5PlsZXmlrnms5UqKlxyXG4gICAgICogXHJcbiAgICAgKiDmnoTlu7rlm57osIPlh73mlbDlr7nosaFcclxuICAgICAqIEBwYXJhbSBtZXRob2Qg5pa55rOVIFxyXG4gICAgICovXHJcbiAgICBfX0NhbGxiYWNrPCBUIGV4dGVuZHMgKCAuLi5hcmdzOiBhbnlbXSApID0+IGFueSA+KCBtZXRob2Q6IFQgKTogaWJlcmJhci5TeXN0ZW0uVENhbGxiYWNrPCBUID47XHJcbn1cclxuXHJcbk9iamVjdC5wcm90b3R5cGUuX19DYWxsYmFjayA9IGZ1bmN0aW9uPCBUIGV4dGVuZHMgKCAuLi5hcmdzOiBhbnlbXSApID0+IGFueSA+KCBtZXRob2Q6IFQgKTogaWJlcmJhci5TeXN0ZW0uVENhbGxiYWNrPCBUID5cclxue1xyXG4gICAgcmV0dXJuIG5ldyBpYmVyYmFyLlN5c3RlbS5UQ2FsbGJhY2soIG1ldGhvZCwgdGhpcyApO1xyXG59XHJcblxyXG5SZWZsZWN0LmRlZmluZVByb3BlcnR5KCBPYmplY3QucHJvdG90eXBlLCBcIl9fQ2FsbGJhY2tcIiwgeyBlbnVtZXJhYmxlOiBmYWxzZSB9ICk7IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW1cclxue1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGR5bmFtaWNfY2FzdDxUIGV4dGVuZHMgb2JqZWN0PiggbzogYW55LCB0OiBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uLlR5cGVDb25zdHJ1Y3RvcjwgVCA+IClcclxuICAgIHtcclxuICAgICAgICBpZiAoIG8gaW5zdGFuY2VvZiB0IClcclxuICAgICAgICAgICAgcmV0dXJuIDxUPm87XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbmRlY2xhcmUgaW50ZXJmYWNlIEFycmF5PFQ+XHJcbntcclxuICAgIGZpcnN0T3JEZWZhdWx0KCBwcmVkaWNhdGU/OiAoIGU6IFQsIGluZGV4OiBudW1iZXIgKSA9PiBib29sZWFuICk6IFQ7XHJcbiAgICB3aGVyZSggcHJlZGljYXRlOiAoIGU6IFQsIGluZGV4OiBudW1iZXIgKSA9PiBib29sZWFuICk6IEFycmF5PFQ+O1xyXG4gICAgUmVtb3ZlQXQoIGluZGV4OiBudW1iZXIgKTogQXJyYXk8VD47XHJcbiAgICBSZW1vdmU8VD4oIGVsZW1lbnQ6IFQgKTogQXJyYXk8VD47XHJcbiAgICBSZW1vdmVXaGVyZTxUPiggcHJlZGljYXRlOiAoIGU6IFQsIGluZGV4OiBudW1iZXIgKSA9PiBib29sZWFuICk6IEFycmF5PFQ+O1xyXG59XHJcblxyXG5kZWNsYXJlIGludGVyZmFjZSBSZWFkb25seUFycmF5PFQ+XHJcbntcclxuICAgIGZpcnN0T3JEZWZhdWx0KCBwcmVkaWNhdGU/OiAoIGU6IFQsIGluZGV4OiBudW1iZXIgKSA9PiBib29sZWFuICk6IFQ7XHJcbiAgICB3aGVyZSggcHJlZGljYXRlOiAoIGU6IFQsIGluZGV4OiBudW1iZXIgKSA9PiBib29sZWFuICk6IEFycmF5PFQ+O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQXJyYXlDb25zdHJ1Y3RvclxyXG57XHJcbiAgICBjb252ZXJ0QWxsPCBUSW5wdXQsIFRPdXRwdXQgPiggYXJyYXk6IEFycmF5PCBUSW5wdXQgPiwgY29udmVydGVyOiAoIGlucHV0OiBUSW5wdXQgKSA9PiBUT3V0cHV0ICk6IEFycmF5PCBUT3V0cHV0ID47XHJcbn1cclxuXHJcbkFycmF5LnByb3RvdHlwZS5maXJzdE9yRGVmYXVsdCA9IGZ1bmN0aW9uPFQ+KCBwcmVkaWNhdGU/OiAoIGU6IFQsIGluZGV4OiBudW1iZXIgKSA9PiBib29sZWFuICk6IFRcclxue1xyXG4gICAgaWYgKCBwcmVkaWNhdGUgPT0gbnVsbCApXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCB0aGlzLmxlbmd0aCA9PSAwIClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbIDAgXTtcclxuICAgIH1cclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICsrIClcclxuICAgIHtcclxuICAgICAgICBpZiAoIHByZWRpY2F0ZSggdGhpc1sgaSBdLCBpICkgKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1sgaSBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbkFycmF5LnByb3RvdHlwZS53aGVyZSA9IGZ1bmN0aW9uPFQ+KCBwcmVkaWNhdGU6ICggZTogVCwgaW5kZXg6IG51bWJlciApID0+IGJvb2xlYW4gKTogQXJyYXk8VD5cclxue1xyXG4gICAgbGV0IHRlbXAgPSBbXTtcclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICsrIClcclxuICAgIHtcclxuICAgICAgICBpZiAoIHByZWRpY2F0ZSggdGhpc1sgaSBdLCBpICkgKVxyXG4gICAgICAgICAgICB0ZW1wLnB1c2goIHRoaXNbIGkgXSApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXA7XHJcbn1cclxuXHJcbkFycmF5LnByb3RvdHlwZS5SZW1vdmVBdCA9IGZ1bmN0aW9uKCB0aGlzOiBBcnJheTxhbnk+LCBpbmRleDogbnVtYmVyICk6IEFycmF5PGFueT5cclxue1xyXG4gICAgcmV0dXJuIHRoaXMuc3BsaWNlKCBpbmRleCwgMSApO1xyXG59XHJcblxyXG5BcnJheS5wcm90b3R5cGUuUmVtb3ZlID0gZnVuY3Rpb248VD4oIHRoaXM6IEFycmF5PFQ+LCBlbGVtZW50OiBUICk6IEFycmF5PFQ+XHJcbntcclxuICAgIHJldHVybiB0aGlzLndoZXJlKCBlID0+IGUgIT0gZWxlbWVudCApO1xyXG59XHJcblxyXG5BcnJheS5wcm90b3R5cGUuUmVtb3ZlV2hlcmUgPSBmdW5jdGlvbjxUPiggdGhpczogQXJyYXk8VD4sIHByZWRpY2F0ZTogKCBlOiBULCBpbmRleDogbnVtYmVyICkgPT4gYm9vbGVhbiApOiBBcnJheTwgVCA+XHJcbntcclxuICAgIGxldCB0ZW1wID0gW107XHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArKyApXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBwcmVkaWNhdGUoIHRoaXNbIGkgXSwgaSApID09IGZhbHNlIClcclxuICAgICAgICAgICAgdGVtcC5wdXNoKCB0aGlzWyBpIF0gKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZW1wO1xyXG59XHJcblxyXG5BcnJheS5jb252ZXJ0QWxsID0gZnVuY3Rpb248IFRJbnB1dCwgVE91dHB1dCA+KCBhcnJheTogQXJyYXk8IFRJbnB1dCA+LCBjb252ZXJ0ZXI6ICggaW5wdXQ6IFRJbnB1dCApID0+IFRPdXRwdXQgKTogQXJyYXk8IFRPdXRwdXQgPlxyXG57XHJcbiAgICBsZXQgYXJyYXlPdXRwdXQ6IEFycmF5PCBUT3V0cHV0ID4gPSBBcnJheSgpO1xyXG4gICAgZm9yICggY29uc3QgYSBvZiBhcnJheSApXHJcbiAgICB7XHJcbiAgICAgICAgYXJyYXlPdXRwdXQucHVzaCggY29udmVydGVyKCBhICkgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheU91dHB1dDtcclxufVxyXG5cclxuIiwiXHJcblxyXG4vLyBuYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW1cclxuLy8ge1xyXG4vLyAgICAgZXhwb3J0IHR5cGUgT3V0UGFyYW1ldGVyPCBUID4gPSB7IF9fb3V0OiBUIH07XHJcbi8vIH0iLCJcclxuLy8gbmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtXHJcbi8vIHtcclxuLy8gICAgIGV4cG9ydCB0eXBlIFJlZlBhcmFtZXRlcjwgVCA+ID0geyB2YWx1ZTogVCB9O1xyXG4vLyB9XHJcbiIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9SZWZsZWN0aW9uL1R5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9SZWZsZWN0aW9uL0RlY2xhcmluZ1R5cGUudHNcIiAvPlxyXG5cclxuY29uc3QgVHlwZU9mID0gaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2Y7XHJcbmNvbnN0IFR5cGVPZkRlbGF5ID0gaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2ZEZWxheTtcclxuY29uc3QgRGVjbGFyaW5nVHlwZSA9IGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb24uRGVjbGFyaW5nVHlwZTtcclxuY29uc3QgRGVjbGFyaW5nVHlwZURlbGF5ID0gaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvbi5EZWNsYXJpbmdUeXBlRGVsYXk7XHJcbmNvbnN0IF9fQ2FsbGJhY2sgPSBpYmVyYmFyLlN5c3RlbS5fX0NhbGxiYWNrO1xyXG5jb25zdCBBdXRvUmVmbGVjdE1ldGFkYXRhX0NvbnN0cnVjdG9yID0gaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvbi5BdXRvUmVmbGVjdE1ldGFkYXRhX0NvbnN0cnVjdG9yO1xyXG5jb25zdCBBdXRvUmVmbGVjdE1ldGFkYXRhX0ZpZWxkID0gaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvbi5BdXRvUmVmbGVjdE1ldGFkYXRhX0ZpZWxkO1xyXG5jb25zdCBBdXRvUmVmbGVjdE1ldGFkYXRhX1Byb3BlcnR5ID0gaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvbi5BdXRvUmVmbGVjdE1ldGFkYXRhX1Byb3BlcnR5O1xyXG5jb25zdCBBdXRvUmVmbGVjdE1ldGFkYXRhX01ldGhvZCA9IGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb24uQXV0b1JlZmxlY3RNZXRhZGF0YV9NZXRob2Q7IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDQ29udGFpbmVyQnVpbGRlclxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgbV93YXNCdWlsdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9jb25maWd1cmF0aW9uQ2FsbGJhY2tzOiBBcnJheTwgQnVpbGRlci5DRGVmZXJyZWRDYWxsYmFjayA+ID0gQXJyYXkoKTtcclxuXHJcbiAgICAgICAgcHVibGljIFJlZ2lzdGVyPCBUIGV4dGVuZHMgb2JqZWN0ID4oXHJcbiAgICAgICAgICAgIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBUID4sXHJcbiAgICAgICAgICAgIGRlbGVnYXRlOiBTeXN0ZW0uVENhbGxiYWNrT3JGdW5jdGlvbjwgQWN0aXZhdG9ycy5EZWxlZ2F0ZS5VQWN0aXZhdGlvbkZ1bmN0aW9uPCBUID4gPlxyXG4gICAgICAgICk6IEJ1aWxkZXIuSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8IFQgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJiID0gbmV3IEJ1aWxkZXIuQ1JlZ2lzdHJhdGlvbkJ1aWxkZXIoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ29yZS5DVHlwZWRTZXJ2aWNlKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIE9iamVjdCApICksXHJcbiAgICAgICAgICAgICAgICBuZXcgQnVpbGRlci5DU2ltcGxlQWN0aXZhdG9yRGF0YSggbmV3IEFjdGl2YXRvcnMuRGVsZWdhdGUuQ0RlbGVnYXRlQWN0aXZhdG9yKCB0eXBlLCBkZWxlZ2F0ZSApICksXHJcbiAgICAgICAgICAgICAgICBuZXcgQnVpbGRlci5DU2luZ2xlUmVnaXN0cmF0aW9uU3R5bGUoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByYi5SZWdpc3RlckRhdGEuRGVmZXJyZWRDYWxsYmFjayA9IHRoaXMuUmVnaXN0ZXJDYWxsYmFjayggU3lzdGVtLl9fQ2FsbGJhY2soIGZ1bmN0aW9uKCBjciApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEJ1aWxkZXIuQ1JlZ2lzdHJhdGlvbkJ1aWxkZXJIZWxwZXIuUmVnaXN0ZXJTaW5nbGVDb21wb25lbnQoIGNyLCByYiApO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIHJldHVybiByYjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBSZWdpc3RlclR5cGU8IFQgZXh0ZW5kcyBvYmplY3QgPiggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IFQgPiApOiBCdWlsZGVyLklSZWdpc3RyYXRpb25CdWlsZGVyPCBUID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByYiA9IG5ldyBCdWlsZGVyLkNSZWdpc3RyYXRpb25CdWlsZGVyKFxyXG4gICAgICAgICAgICAgICAgbmV3IENvcmUuQ1R5cGVkU2VydmljZSggdHlwZSApLFxyXG4gICAgICAgICAgICAgICAgbmV3IEJ1aWxkZXIuQ0NvbmNyZXRlUmVmbGVjdGlvbkFjdGl2YXRvckRhdGEoIHR5cGUgKSxcclxuICAgICAgICAgICAgICAgIG5ldyBCdWlsZGVyLkNTaW5nbGVSZWdpc3RyYXRpb25TdHlsZSgpICk7XHJcbiAgICAgICAgICAgIHJiLlJlZ2lzdGVyRGF0YS5EZWZlcnJlZENhbGxiYWNrID0gdGhpcy5SZWdpc3RlckNhbGxiYWNrKCBTeXN0ZW0uX19DYWxsYmFjayggZnVuY3Rpb24oIGNyIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQnVpbGRlci5DUmVnaXN0cmF0aW9uQnVpbGRlckhlbHBlci5SZWdpc3RlclNpbmdsZUNvbXBvbmVudCggY3IsIHJiICk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFJlZ2lzdGVySW5zdGFuY2U8IFQgZXh0ZW5kcyBvYmplY3QgPiggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IFQgPiwgaW5zdGFuY2U6IFQgKTogQnVpbGRlci5JUmVnaXN0cmF0aW9uQnVpbGRlcjxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2YXRvciA9IG5ldyBBY3RpdmF0b3JzLlByb3ZpZGVkSW5zdGFuY2UuQ1Byb3ZpZGVkSW5zdGFuY2VBY3RpdmF0b3IoIGluc3RhbmNlICk7XHJcbiAgICAgICAgICAgIGxldCByYiA9IG5ldyBCdWlsZGVyLkNSZWdpc3RyYXRpb25CdWlsZGVyKFxyXG4gICAgICAgICAgICAgICAgbmV3IENvcmUuQ1R5cGVkU2VydmljZSggdHlwZSApLFxyXG4gICAgICAgICAgICAgICAgbmV3IEJ1aWxkZXIuQ1NpbXBsZUFjdGl2YXRvckRhdGEoIGFjdGl2YXRvciApLFxyXG4gICAgICAgICAgICAgICAgbmV3IEJ1aWxkZXIuQ1NpbmdsZVJlZ2lzdHJhdGlvblN0eWxlKCkgKTtcclxuICAgICAgICAgICAgcmIuU2luZ2xlSW5zdGFuY2UoKTtcclxuICAgICAgICAgICAgcmIuUmVnaXN0ZXJEYXRhLkRlZmVycmVkQ2FsbGJhY2sgPSB0aGlzLlJlZ2lzdGVyQ2FsbGJhY2soIFN5c3RlbS5fX0NhbGxiYWNrKCBmdW5jdGlvbiggY3IgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICggcmIuUmVnaXN0ZXJEYXRhLkxpZmV0aW1lIGluc3RhbmNlb2YgQ29yZS5MaWZldGltZS5DUm9vdFNjb3BlTGlmZXRpbWUgKSA9PSBmYWxzZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHJiLlJlZ2lzdGVyRGF0YS5TaGFyaW5nICE9IENvcmUuVUluc3RhbmNlU2hhcmluZy5TaGFyZWQgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIERpc3Bvc2XmjqfliLZcclxuICAgICAgICAgICAgICAgIC8vIOaaguS4jeWunueOsFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAgICAgQnVpbGRlci5DUmVnaXN0cmF0aW9uQnVpbGRlckhlbHBlci5SZWdpc3RlclNpbmdsZUNvbXBvbmVudCggY3IsIHJiICk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Y+v5Lul6K6/6Zeu5rOo5YaM57G75Lit57G777ybXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICog5Y+q6IO95rOo5YaMZXhwb3J055qE57G75Z6LO1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBhc3NlbWJsaWVzIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBSZWdpc3RlckFzc2VtYmx5VHlwZXMoIC4uLmFzc2VtYmxpZXM6IFJlYWRvbmx5QXJyYXk8IFN5c3RlbS5SZWZsZWN0aW9uLkNBc3NlbWJseSA+ICk6IEJ1aWxkZXIuSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8b2JqZWN0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEZlYXR1cmVzLlNjYW5uaW5nLkNTY2FubmluZ1JlZ2lzdHJhdGlvbkV4dGVuc2lvbnMuUmVnaXN0ZXJBc3NlbWJseVR5cGVzKCB0aGlzLCBhc3NlbWJsaWVzICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUmVnaXN0ZXJUeXBlcyggdHlwZXM6IFJlYWRvbmx5QXJyYXk8IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID4gKTogQnVpbGRlci5JUmVnaXN0cmF0aW9uQnVpbGRlcjxvYmplY3Q+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRmVhdHVyZXMuU2Nhbm5pbmcuQ1NjYW5uaW5nUmVnaXN0cmF0aW9uRXh0ZW5zaW9ucy5SZWdpc3RlclR5cGVzKCB0aGlzLCB0eXBlcyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFJlZ2lzdGVyQ2FsbGJhY2soIGNvbmZpZ3VyYXRpb25DYWxsYmFjazogU3lzdGVtLkFjdGlvbjwgQ29yZS5JQ29tcG9uZW50UmVnaXN0cnkgPiApOiBhbnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjID0gbmV3IEJ1aWxkZXIuQ0RlZmVycmVkQ2FsbGJhY2soIGNvbmZpZ3VyYXRpb25DYWxsYmFjayApO1xyXG4gICAgICAgICAgICB0aGlzLm1fY29uZmlndXJhdGlvbkNhbGxiYWNrcy5wdXNoKCBjICk7XHJcbiAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEJ1aWxkKCk6IElDb250YWluZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBuZXcgQ29yZS5DQ29udGFpbmVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQnVpbGRJbnRlcm5hbCggY29udGFpbmVyLkNvbXBvbmVudFJlZ2lzdHJ5ICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBCdWlsZEludGVybmFsKCBjb21wb25lbnRSZWdpc3RyeTogQ29yZS5JQ29tcG9uZW50UmVnaXN0cnkgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fd2FzQnVpbHQgPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubV93YXNCdWlsdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKCBjb25zdCBjYWxsYmFjayBvZiB0aGlzLm1fY29uZmlndXJhdGlvbkNhbGxiYWNrcyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLkNhbGxiYWNrLkV4ZWN1dGUoIGNvbXBvbmVudFJlZ2lzdHJ5ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjXHJcbntcclxuICAgIEBTeXN0ZW0uQXR0cmlidXRlVXNhZ2UoIFN5c3RlbS5VQXR0cmlidXRlVGFyZ2V0LlBhcmFtZXRlciB8IFN5c3RlbS5VQXR0cmlidXRlVGFyZ2V0LlByb3BlcnR5LCBmYWxzZSwgZmFsc2UgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENJbmplY3RMaWZldGltZVNjb3BlQXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gSW5qZWN0TGlmZXRpbWVTY29wZSgpOiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JQYXJhbWV0ZXIgJiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JQcm9wZXJ0eVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBTeXN0ZW0uQXR0cmlidXRlRGVjb3JhdGUoIG5ldyBDSW5qZWN0TGlmZXRpbWVTY29wZUF0dHJpYnV0ZSgpICk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWNcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENNb2R1bGVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgTG9hZCgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIENQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgQ2FuU3VwcGx5VmFsdWUoXHJcbiAgICAgICAgICAgIHBpOiBTeXN0ZW0uUmVmbGVjdGlvbi5DUGFyYW1ldGVySW5mbyxcclxuICAgICAgICAgICAgY29udGV4dDogSUNvbXBvbmVudENvbnRleHRcclxuICAgICAgICApOiB7IHJldDogYm9vbGVhbiwgdmFsdWVQcm92aWRlcj86ICgpID0+IG9iamVjdCB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9DUGFyYW1ldGVyLnRzXCIgLz5cclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIENDb25zdGFudFBhcmFtZXRlciBleHRlbmRzIENQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fcHJlZGljYXRlOiAoIHBhcmFtZXRlckluZm86IFN5c3RlbS5SZWZsZWN0aW9uLkNQYXJhbWV0ZXJJbmZvICkgPT4gYm9vbGVhbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV92YWx1ZTogb2JqZWN0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCB2YWx1ZTogb2JqZWN0LCBwcmVkaWNhdGU6ICggcGFyYW1ldGVySW5mbzogU3lzdGVtLlJlZmxlY3Rpb24uQ1BhcmFtZXRlckluZm8gKSA9PiBib29sZWFuIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9wcmVkaWNhdGUgPSBwcmVkaWNhdGU7XHJcbiAgICAgICAgICAgIHRoaXMubV92YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBWYWx1ZSgpOiBvYmplY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQ2FuU3VwcGx5VmFsdWUoXHJcbiAgICAgICAgICAgIHBpOiBTeXN0ZW0uUmVmbGVjdGlvbi5DUGFyYW1ldGVySW5mbyxcclxuICAgICAgICAgICAgY29udGV4dDogSUNvbXBvbmVudENvbnRleHRcclxuICAgICAgICApOiB7IHJldDogYm9vbGVhbiwgdmFsdWVQcm92aWRlcj86ICgpID0+IG9iamVjdCB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tX3ByZWRpY2F0ZShwaSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvdmlkZXI6ICgpID0+IHRoaXMuVmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvcmUvQ0NvbnN0YW50UGFyYW1ldGVyLnRzXCIgLz5cclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDTmFtZWRQYXJhbWV0ZXIgZXh0ZW5kcyBDb3JlLkNDb25zdGFudFBhcmFtZXRlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nLCB2YWx1ZTogb2JqZWN0IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCB2YWx1ZSwgcGkgPT4gcGkuTmFtZSA9PSBuYW1lICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db3JlL0NDb25zdGFudFBhcmFtZXRlci50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhY1xyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1Bvc2l0aW9uYWxQYXJhbWV0ZXIgZXh0ZW5kcyBDb3JlLkNDb25zdGFudFBhcmFtZXRlclxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9wb3NpdGlvbjogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBwb3NpdGlvbjogbnVtYmVyLCB2YWx1ZTogb2JqZWN0IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCB2YWx1ZSwgcGkgPT4gcGkuUGFyYW1ldGVySW5kZXggPT0gcG9zaXRpb24gKTtcclxuICAgICAgICAgICAgdGhpcy5tX3Bvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFBvc2l0aW9uKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9wb3NpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29yZS9DQ29uc3RhbnRQYXJhbWV0ZXIudHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWNcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENUeXBlZFBhcmFtZXRlciBleHRlbmRzIENvcmUuQ0NvbnN0YW50UGFyYW1ldGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3R5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSwgdmFsdWU6IG9iamVjdCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggdmFsdWUsIHBpID0+IHBpLlBhcmFtZXRlclR5cGUgJiYgcGkuUGFyYW1ldGVyVHlwZS5Jc0VxdWl2YWxlbnRUbyggdHlwZSApICk7XHJcbiAgICAgICAgICAgIHRoaXMubV90eXBlID0gdHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgVHlwZSgpOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV90eXBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxuLy8gbmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhY1xyXG4vLyB7XHJcbi8vICAgICBAU3lzdGVtLkF0dHJpYnV0ZVVzYWdlKCBTeXN0ZW0uVUF0dHJpYnV0ZVRhcmdldC5GaWVsZCwgZmFsc2UsIGZhbHNlIClcclxuLy8gICAgIGV4cG9ydCBjbGFzcyBDSW5qZWN0aW9uQXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuLy8gICAgIHtcclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuRmllbGQgfCBTeXN0ZW0uVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIGZhbHNlLCBmYWxzZSApXHJcbi8vICAgICBleHBvcnQgY2xhc3MgQ0luamVjdGlvblByb3ZpZGVyQXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuLy8gICAgIHtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBAU3lzdGVtLkF0dHJpYnV0ZVVzYWdlKCBTeXN0ZW0uVUF0dHJpYnV0ZVRhcmdldC5GaWVsZCB8IFN5c3RlbS5VQXR0cmlidXRlVGFyZ2V0LlBhcmFtZXRlciwgZmFsc2UsIGZhbHNlIClcclxuLy8gICAgIGV4cG9ydCBjbGFzcyBDV2l0aE5hbWVBdHRyaWJ1dGUgZXh0ZW5kcyBTeXN0ZW0uQ0F0dHJpYnV0ZVxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHByb3RlY3RlZCBtX25hbWU6IHN0cmluZyA9IG51bGw7XHJcbi8vICAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBuYW1lOiBzdHJpbmcgKVxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgc3VwZXIoKTtcclxuLy8gICAgICAgICAgICAgdGhpcy5tX25hbWUgPSBuYW1lO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgcHVibGljIGdldCBOYW1lKClcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fbmFtZTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuRmllbGQgfCBTeXN0ZW0uVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIGZhbHNlLCBmYWxzZSApXHJcbi8vICAgICBleHBvcnQgY2xhc3MgQ1dpdGhLZXlBdHRyaWJ1dGUgZXh0ZW5kcyBTeXN0ZW0uQ0F0dHJpYnV0ZVxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHByb3RlY3RlZCBtX2tleTogSUtleSA9IG51bGw7XHJcbi8vICAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBrZXk6IElLZXkgKVxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgc3VwZXIoKTtcclxuLy8gICAgICAgICAgICAgdGhpcy5tX2tleSA9IGtleTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIHB1YmxpYyBnZXQgS2V5KClcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fa2V5O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAvKipcclxuLy8gICAgICAqICoq77yI5Ye95pWw5aOw5piO77yJKipcclxuLy8gICAgICAqIFxyXG4vLyAgICAgICog5Zyo57G75a2X5q615L2N572u5aOw5piO5rOo5YWlXHJcbi8vICAgICAgKi9cclxuLy8gICAgIGV4cG9ydCBmdW5jdGlvbiBJbmplY3Rpb24oKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yRmllbGRcclxuLy8gICAgIHtcclxuLy8gICAgICAgICByZXR1cm4gU3lzdGVtLkF0dHJpYnV0ZSggbmV3IENJbmplY3Rpb25BdHRyaWJ1dGUoKSApO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC8qKlxyXG4vLyAgICAgICog5rOo5YWlSVByb3ZpZGVy5o+Q5L6b5ZmoXHJcbi8vICAgICAgKi9cclxuLy8gICAgIGV4cG9ydCBmdW5jdGlvbiBJbmplY3Rpb25Qcm92aWRlcigpOiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JGaWVsZCAmIFN5c3RlbS5VRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvclBhcmFtZXRlclxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoIHRhcmdldDogYW55LCBtZW1iZXJOYW1lOiBzdHJpbmcsIHBhcmFtZXRlckluZGV4PzogbnVtYmVyIClcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIGlmICggcGFyYW1ldGVySW5kZXggPT0gdW5kZWZpbmVkIClcclxuLy8gICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgU3lzdGVtLlJlZmxlY3Rpb24uRW51bWVyYWJsZSggdGFyZ2V0LCBtZW1iZXJOYW1lICk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgU3lzdGVtLkF0dHJpYnV0ZSggbmV3IENJbmplY3Rpb25Qcm92aWRlckF0dHJpYnV0ZSgpICkoIHRhcmdldCwgbWVtYmVyTmFtZSwgcGFyYW1ldGVySW5kZXggKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZXhwb3J0IGZ1bmN0aW9uIFdpdGhOYW1lKCBuYW1lOiBzdHJpbmcgKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yRmllbGQgJiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JQYXJhbWV0ZXJcclxuLy8gICAgIHtcclxuLy8gICAgICAgICByZXR1cm4gU3lzdGVtLkF0dHJpYnV0ZSggbmV3IENXaXRoTmFtZUF0dHJpYnV0ZSggbmFtZSApICk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZXhwb3J0IGZ1bmN0aW9uIFdpdGhLZXkoIGtleTogSUtleSApOiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JGaWVsZCAmIFN5c3RlbS5VRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvclBhcmFtZXRlclxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHJldHVybiBTeXN0ZW0uQXR0cmlidXRlKCBuZXcgQ1dpdGhLZXlBdHRyaWJ1dGUoIGtleSApICk7XHJcbi8vICAgICB9XHJcblxyXG5cclxuLy8gICAgIC8vIC8qKlxyXG4vLyAgICAgLy8gICogKirvvIjmlbDmja7nsbvlnovlo7DmmI7vvIkqKlxyXG4vLyAgICAgLy8gICogXHJcbi8vICAgICAvLyAgKiBJbmplY3Rpb27mlrnms5XnmoTov5Tlm57nsbvlnovlo7DmmI5cclxuLy8gICAgIC8vICAqL1xyXG4vLyAgICAgLy8gZXhwb3J0IHR5cGUgVUluamVjdGlvblJldHVybiA9IChcclxuLy8gICAgIC8vICAgICB0eXBlV2hlcmU6IGFueSxcclxuLy8gICAgIC8vICAgICBwcm9wZXJ0eUtleTogc3RyaW5nLFxyXG4vLyAgICAgLy8gICAgIHBhcmFtZXRlckluZGV4PzogbnVtYmVyXHJcbi8vICAgICAvLyApID0+IHZvaWQ7XHJcblxyXG4vLyAgICAgLy8gLyoqXHJcbi8vICAgICAvLyAgKiAqKu+8iOWHveaVsOWjsOaYju+8iSoqXHJcbi8vICAgICAvLyAgKiBcclxuLy8gICAgIC8vICAqIOWcqOWxnuaAp+aIluiAheaehOmAoOWZqOS4reeahOWPguaVsOS9jee9ruWjsOaYjuazqOWFpVxyXG4vLyAgICAgLy8gICogQHBhcmFtIHR5cGUg5rOo5YWl57G75Z6LXHJcbi8vICAgICAvLyAgKiBAcGFyYW0gbmFtZSDplK7lkI3jgIHliKvlkI1cclxuLy8gICAgIC8vICAqL1xyXG4vLyAgICAgLy8gZXhwb3J0IGZ1bmN0aW9uIEluamVjdGlvbiggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUsIG5hbWU/OiBzdHJpbmcgfCBJS2V5ICk6IFVJbmplY3Rpb25SZXR1cm5cclxuLy8gICAgIC8vIHtcclxuLy8gICAgIC8vICAgICByZXR1cm4gZnVuY3Rpb24oXHJcbi8vICAgICAvLyAgICAgICAgIHRhcmdldDogYW55LFxyXG4vLyAgICAgLy8gICAgICAgICBwcm9wZXJ0eUtleTogc3RyaW5nLFxyXG4vLyAgICAgLy8gICAgICAgICBwYXJhbWV0ZXJJbmRleD86IG51bWJlciApOiB2b2lkXHJcbi8vICAgICAvLyAgICAge1xyXG4vLyAgICAgLy8gICAgICAgICBsZXQgcHJvdG90eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlUHJvdG90eXBlPCBvYmplY3QgPiAmIEJ1aWxkZXIuVUluamVjdGlvbk9uVHlwZVByb3RvdHlwZSA9IG51bGw7XHJcbi8vICAgICAvLyAgICAgICAgIC8vIOWxnuaAp+azqOWFpVxyXG4vLyAgICAgLy8gICAgICAgICBpZiAoIHBhcmFtZXRlckluZGV4ID09IHVuZGVmaW5lZCApXHJcbi8vICAgICAvLyAgICAgICAgIHtcclxuLy8gICAgIC8vICAgICAgICAgICAgIHByb3RvdHlwZSA9IHRhcmdldDtcclxuXHJcbi8vICAgICAvLyAgICAgICAgICAgICBsZXQgZGVmczogeyBbIGtleTogc3RyaW5nIF06IEJ1aWxkZXIuVUluamVjdGlvbk5vZGUgfSA9IG51bGw7XHJcbi8vICAgICAvLyAgICAgICAgICAgICBpZiAoIHByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSggQnVpbGRlci51SW5qZWN0aW9uRm9yRmllbGQgKSA9PSBmYWxzZSApXHJcbi8vICAgICAvLyAgICAgICAgICAgICB7XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGRlZnNPbGQ6IHsgWyBrZXk6IHN0cmluZyBdOiBCdWlsZGVyLlVJbmplY3Rpb25Ob2RlIH0gPSBwcm90b3R5cGVbIEJ1aWxkZXIudUluamVjdGlvbkZvckZpZWxkIF07XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgZGVmcyA9IHByb3RvdHlwZVsgQnVpbGRlci51SW5qZWN0aW9uRm9yRmllbGQgXSA9IE9iamVjdC5hc3NpZ24oIHt9LCBkZWZzT2xkICk7XHJcbi8vICAgICAvLyAgICAgICAgICAgICB9XHJcbi8vICAgICAvLyAgICAgICAgICAgICBlbHNlXHJcbi8vICAgICAvLyAgICAgICAgICAgICB7XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgZGVmcyA9IHByb3RvdHlwZVsgQnVpbGRlci51SW5qZWN0aW9uRm9yRmllbGQgXTtcclxuLy8gICAgIC8vICAgICAgICAgICAgIH1cclxuLy8gICAgIC8vICAgICAgICAgICAgIGxldCBpbmplY3Rpb25Ob2RlOiBCdWlsZGVyLlVJbmplY3Rpb25Ob2RlID1cclxuLy8gICAgIC8vICAgICAgICAgICAgIHtcclxuLy8gICAgIC8vICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlXHJcbi8vICAgICAvLyAgICAgICAgICAgICB9O1xyXG4vLyAgICAgLy8gICAgICAgICAgICAgaWYgKCBuYW1lICE9IG51bGwgKVxyXG4vLyAgICAgLy8gICAgICAgICAgICAge1xyXG4vLyAgICAgLy8gICAgICAgICAgICAgICAgIGlmICggdHlwZW9mKCBuYW1lICkgPT0gXCJzdHJpbmdcIiApXHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGluamVjdGlvbk5vZGUubmFtZSA9IG5hbWU7XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgZWxzZVxyXG4vLyAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpbmplY3Rpb25Ob2RlLmtleSA9IG5hbWU7XHJcbi8vICAgICAvLyAgICAgICAgICAgICB9XHJcbi8vICAgICAvLyAgICAgICAgICAgICBkZWZzWyBwcm9wZXJ0eUtleSBdID0gaW5qZWN0aW9uTm9kZTtcclxuLy8gICAgIC8vICAgICAgICAgfVxyXG4vLyAgICAgLy8gICAgICAgICBlbHNlXHJcbi8vICAgICAvLyAgICAgICAgIHtcclxuLy8gICAgIC8vICAgICAgICAgICAgIC8vIOaehOmAoOWHveaVsOazqOWFpVxyXG4vLyAgICAgLy8gICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eUtleSA9PSB1bmRlZmluZWQgKVxyXG4vLyAgICAgLy8gICAgICAgICAgICAge1xyXG4vLyAgICAgLy8gICAgICAgICAgICAgICAgIHByb3RvdHlwZSA9IHRhcmdldC5wcm90b3R5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGRlZnM6IEJ1aWxkZXIuVUluamVjdGlvbk5vZGVbXSA9IG51bGw7XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKCBwcm90b3R5cGUuaGFzT3duUHJvcGVydHkoIEJ1aWxkZXIudUluamVjdGlvbkZvckNvbnN0cnVjdG9yICkgPT0gZmFsc2UgKVxyXG4vLyAgICAgLy8gICAgICAgICAgICAgICAgIHtcclxuLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGVmcyA9IHByb3RvdHlwZVsgQnVpbGRlci51SW5qZWN0aW9uRm9yQ29uc3RydWN0b3IgXSA9IEFycmF5KCBwcm90b3R5cGUuY29uc3RydWN0b3IubGVuZ3RoICk7XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgLy8gICAgICAgICAgICAgICAgIGVsc2VcclxuLy8gICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRlZnMgPSBwcm90b3R5cGVbIEJ1aWxkZXIudUluamVjdGlvbkZvckNvbnN0cnVjdG9yIF07XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgLy8gICAgICAgICAgICAgICAgIGxldCBpbmplY3Rpb25Ob2RlOiBCdWlsZGVyLlVJbmplY3Rpb25Ob2RlID1cclxuLy8gICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVcclxuLy8gICAgIC8vICAgICAgICAgICAgICAgICB9O1xyXG4vLyAgICAgLy8gICAgICAgICAgICAgICAgIGlmICggbmFtZSAhPSBudWxsIClcclxuLy8gICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mKCBuYW1lICkgPT0gXCJzdHJpbmdcIiApXHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpbmplY3Rpb25Ob2RlLm5hbWUgPSBuYW1lO1xyXG4vLyAgICAgLy8gICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpbmplY3Rpb25Ob2RlLmtleSA9IG5hbWU7XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgLy8gICAgICAgICAgICAgICAgIGRlZnNbIHBhcmFtZXRlckluZGV4IF0gPSBpbmplY3Rpb25Ob2RlO1xyXG4vLyAgICAgLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgLy8gICAgICAgICAgICAgLy8g5pa55rOV5rOo5YWlXHJcbi8vICAgICAvLyAgICAgICAgICAgICBlbHNlXHJcbi8vICAgICAvLyAgICAgICAgICAgICB7XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgcHJvdG90eXBlID0gdGFyZ2V0O1xyXG5cclxuLy8gICAgIC8vICAgICAgICAgICAgICAgICBsZXQgZGVmczogeyBbIGtleTogc3RyaW5nIF06IEJ1aWxkZXIuVUluamVjdGlvbk5vZGUgfSA9IG51bGw7XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKCBwcm90b3R5cGUuaGFzT3duUHJvcGVydHkoIEJ1aWxkZXIudUluamVjdGlvbkZvck1ldGhvZCApID09IGZhbHNlIClcclxuLy8gICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRlZnMgPSBwcm90b3R5cGVbIEJ1aWxkZXIudUluamVjdGlvbkZvck1ldGhvZCBdID0ge307XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgLy8gICAgICAgICAgICAgICAgIGVsc2VcclxuLy8gICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRlZnMgPSBwcm90b3R5cGVbIEJ1aWxkZXIudUluamVjdGlvbkZvck1ldGhvZCBdO1xyXG4vLyAgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgIC8vICAgICAgICAgICAgICAgICBsZXQgaW5qZWN0aW9uTm9kZTogQnVpbGRlci5VSW5qZWN0aW9uTm9kZSA9XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAge1xyXG4vLyAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4vLyAgICAgLy8gICAgICAgICAgICAgICAgIH07XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKCBuYW1lICE9IG51bGwgKVxyXG4vLyAgICAgLy8gICAgICAgICAgICAgICAgIHtcclxuLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YoIG5hbWUgKSA9PSBcInN0cmluZ1wiIClcclxuLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGluamVjdGlvbk5vZGUubmFtZSA9IG5hbWU7XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGluamVjdGlvbk5vZGUua2V5ID0gbmFtZTtcclxuLy8gICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgZGVmc1sgcGFyYW1ldGVySW5kZXggXSA9IGluamVjdGlvbk5vZGU7XHJcbi8vICAgICAvLyAgICAgICAgICAgICB9XHJcbi8vICAgICAvLyAgICAgICAgIH1cclxuLy8gICAgIC8vICAgICB9XHJcbi8vICAgICAvLyB9XHJcbi8vIH0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWNcclxue1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJS2V5XHJcbiAgICB7XHJcbiAgICAgICAgRXF1YWxzKCBrZXk6IElLZXkgKTogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ1N0cmluZ0tleSBpbXBsZW1lbnRzIElLZXlcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fc3RyOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHN0cjogc3RyaW5nIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9zdHIgPSBzdHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBFcXVhbHMoa2V5OiBJS2V5KTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8vIGV4cG9ydCBjbGFzcyBDSW5kZXg8IFRLZXkgZXh0ZW5kcyBJS2V5LCBUU2VydmljZSBleHRlbmRzIG9iamVjdCA+IGV4dGVuZHMgU3lzdGVtLkNGdW5jdGlvbjwgKCBrZXk6IFRLZXkgKSA9PiBUU2VydmljZSA+XHJcbiAgICAvLyB7XHJcbiAgICAvLyB9O1xyXG59XHJcbiIsIlxyXG5cclxuLy8gbmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhY1xyXG4vLyB7XHJcbi8vICAgICAvKipcclxuLy8gICAgICAqICoq77yI5o6l5Y+j77yJKipcclxuLy8gICAgICAqIFxyXG4vLyAgICAgICogQXV0b2ZhY+aPkOS+m+WZqFxyXG4vLyAgICAgICovXHJcbi8vICAgICBleHBvcnQgaW50ZXJmYWNlIElQcm92aWRlclxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIC8qKlxyXG4vLyAgICAgICAgICAqIOiOt+WPluWunuS+i1xyXG4vLyAgICAgICAgICAqIEBwYXJhbSB0eXBlIOS+nei1luexu+Wei1xyXG4vLyAgICAgICAgICAqL1xyXG4vLyAgICAgICAgIFJlc29sdmU8IFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0ID4oXHJcbi8vICAgICAgICAgICAgIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBUU2VydmljZSA+XHJcbi8vICAgICAgICAgKTogVFNlcnZpY2U7XHJcblxyXG4vLyAgICAgICAgIC8qKlxyXG4vLyAgICAgICAgICAqIOiOt+WPluWunuS+i1xyXG4vLyAgICAgICAgICAqIEBwYXJhbSB0eXBlIOS+nei1luexu+Wei1xyXG4vLyAgICAgICAgICAqIEBwYXJhbSBuYW1lIOmUruWQjVxyXG4vLyAgICAgICAgICAqL1xyXG4vLyAgICAgICAgIFJlc29sdmVOYW1lZDwgVFNlcnZpY2UgZXh0ZW5kcyBvYmplY3QgPihcclxuLy8gICAgICAgICAgICAgdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IFRTZXJ2aWNlID4sXHJcbi8vICAgICAgICAgICAgIG5hbWU6IHN0cmluZ1xyXG4vLyAgICAgICAgICk6IFRTZXJ2aWNlO1xyXG5cclxuLy8gICAgICAgICAvKipcclxuLy8gICAgICAgICAgKiDojrflj5blrp7kvotcclxuLy8gICAgICAgICAgKiBAcGFyYW0gdHlwZSDkvp3otZbnsbvlnotcclxuLy8gICAgICAgICAgKiBAcGFyYW0ga2V5IOmUruWQjVxyXG4vLyAgICAgICAgICAqL1xyXG4vLyAgICAgICAgIFJlc29sdmVLZXllZDwgVFNlcnZpY2UgZXh0ZW5kcyBvYmplY3QsIFRLZXkgZXh0ZW5kcyBJS2V5ID4oXHJcbi8vICAgICAgICAgICAgIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBUU2VydmljZSA+LFxyXG4vLyAgICAgICAgICAgICBrZXk6IFRLZXlcclxuLy8gICAgICAgICApOiBUU2VydmljZTtcclxuXHJcbi8vICAgICAgICAgLy9SZXNvbHZlSW5kZXg8IFRLZXkgZXh0ZW5kcyBJS2V5LCBUU2VydmljZSBleHRlbmRzIG9iamVjdCA+KCk6IENJbmRleDwgVEtleSwgVFNlcnZpY2UgPjtcclxuLy8gICAgIH07XHJcbi8vIH0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQWN0aXZhdG9yc1xyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ0luc3RhbmNlQWN0aXZhdG9yIGltcGxlbWVudHMgQ29yZS5JSW5zdGFuY2VBY3RpdmF0b3JcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fbGltaXRUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCBpbXBsZW1lbnRhdGlvblR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9saW1pdFR5cGUgPSBpbXBsZW1lbnRhdGlvblR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBBY3RpdmF0ZUluc3RhbmNlKGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0LCBwYXJhbWV0ZXJzPzogQ29yZS5DUGFyYW1ldGVyW10pOiBvYmplY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR2V0TGltaXRUeXBlKCk6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2xpbWl0VHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERpc3Bvc2UoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkFjdGl2YXRvcnMuRGVsZWdhdGVcclxue1xyXG4gICAgZXhwb3J0IHR5cGUgVUFjdGl2YXRpb25GdW5jdGlvbjwgVCBleHRlbmRzIG9iamVjdCA9IG9iamVjdCA+ID0gKCBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCwgcGFyYW1ldGVyczogUmVhZG9ubHlBcnJheTxDb3JlLkNQYXJhbWV0ZXI+ICkgPT4gVDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ0RlbGVnYXRlQWN0aXZhdG9yIGV4dGVuZHMgQ0luc3RhbmNlQWN0aXZhdG9yIGltcGxlbWVudHMgQ29yZS5JSW5zdGFuY2VBY3RpdmF0b3JcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fYWN0aXZhdGlvbkZ1bmN0aW9uOiBTeXN0ZW0uVENhbGxiYWNrPCBVQWN0aXZhdGlvbkZ1bmN0aW9uID47XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggaW1wbGVtZW50YXRpb25UeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSwgYWN0aXZhdGlvbkZ1bmN0aW9uOiBTeXN0ZW0uVENhbGxiYWNrT3JGdW5jdGlvbjwgVUFjdGl2YXRpb25GdW5jdGlvbiA+IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCBpbXBsZW1lbnRhdGlvblR5cGUgKTtcclxuICAgICAgICAgICAgaWYgKCB0eXBlb2YoIGFjdGl2YXRpb25GdW5jdGlvbiApID09IFwiZnVuY3Rpb25cIiApXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fYWN0aXZhdGlvbkZ1bmN0aW9uID0gU3lzdGVtLl9fQ2FsbGJhY2soIGFjdGl2YXRpb25GdW5jdGlvbiApO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fYWN0aXZhdGlvbkZ1bmN0aW9uID0gYWN0aXZhdGlvbkZ1bmN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEFjdGl2YXRlSW5zdGFuY2UoY29udGV4dDogSUNvbXBvbmVudENvbnRleHQsIHBhcmFtZXRlcnM/OiBDb3JlLkNQYXJhbWV0ZXJbXSk6IG9iamVjdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMubV9hY3RpdmF0aW9uRnVuY3Rpb24uRXhlY3V0ZSggY29udGV4dCwgcGFyYW1ldGVycyApO1xyXG4gICAgICAgICAgICBpZiAoIHJlc3VsdCA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIi4uLi5cIiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkFjdGl2YXRvcnMuUHJvdmlkZWRJbnN0YW5jZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1Byb3ZpZGVkSW5zdGFuY2VBY3RpdmF0b3IgZXh0ZW5kcyBDSW5zdGFuY2VBY3RpdmF0b3JcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIG1fYWN0aXZlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9pbnN0YW5jZTogb2JqZWN0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBpbnN0YW5jZTogb2JqZWN0IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCBpbnN0YW5jZS5HZXRUeXBlKCkgKTtcclxuICAgICAgICAgICAgdGhpcy5tX2luc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQWN0aXZhdGVJbnN0YW5jZSggY29udGV4dDogSUNvbXBvbmVudENvbnRleHQsIHBhcmFtZXRlcnM/OiBDb3JlLkNQYXJhbWV0ZXJbXSApOiBvYmplY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX2FjdGl2ZWQgPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubV9hY3RpdmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1faW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkFjdGl2YXRvcnMuUmVmbGVjdGlvblxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0F1dG93aXJpbmdQYXJhbWV0ZXIgZXh0ZW5kcyBDb3JlLkNQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQ2FuU3VwcGx5VmFsdWUoXHJcbiAgICAgICAgICAgIHBpOiBTeXN0ZW0uUmVmbGVjdGlvbi5DUGFyYW1ldGVySW5mbyxcclxuICAgICAgICAgICAgY29udGV4dDogSUNvbXBvbmVudENvbnRleHRcclxuICAgICAgICApOiB7IHJldDogYm9vbGVhbiwgdmFsdWVQcm92aWRlcj86ICgpID0+IG9iamVjdCB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmVnaXN0cmF0aW9uOiBDb3JlLklDb21wb25lbnRSZWdpc3RyYXRpb247XHJcbiAgICAgICAgICAgIGlmICggcGkuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIENJbmplY3RMaWZldGltZVNjb3BlQXR0cmlidXRlICkgKSAhPSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uID0gY29udGV4dC5Db21wb25lbnRSZWdpc3RyeS5HZXRSZWdpc3RyYXRpb24oIG5ldyBDb3JlLkNMaWZldGltZVNjb3BlU2VydmljZSgpICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHJlZ2lzdHJhdGlvbiA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyByZXQ6IGZhbHNlIH07XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICByZXQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVQcm92aWRlcjogKCkgPT4gY29udGV4dC5SZXNvbHZlQ29tcG9uZW50KCByZWdpc3RyYXRpb24sIFtdIClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggcGkuUGFyYW1ldGVyVHlwZSA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHJldDogZmFsc2UgfTtcclxuXHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvbiA9IGNvbnRleHQuQ29tcG9uZW50UmVnaXN0cnkuR2V0UmVnaXN0cmF0aW9uKCBuZXcgQ29yZS5DVHlwZWRTZXJ2aWNlKCBwaS5QYXJhbWV0ZXJUeXBlICkgKTtcclxuICAgICAgICAgICAgaWYgKCByZWdpc3RyYXRpb24gPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyByZXQ6IGZhbHNlIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmV0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVQcm92aWRlcjogKCkgPT4gY29udGV4dC5SZXNvbHZlQ29tcG9uZW50KCByZWdpc3RyYXRpb24sIFtdIClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQWN0aXZhdG9ycy5SZWZsZWN0aW9uXHJcbntcclxuICAgIGNsYXNzIENUeXBlQ29tcGFyZXIgaW1wbGVtZW50cyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRXF1YWxpdHlDb21wYXJlcjwgU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBFcXVhbHMoIGE6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlLCBiOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5Jc0VxdWl2YWxlbnRUbyggYiApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ0F1dG93aXJpbmdQcm9wZXJ0eUluamVjdG9yXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgSW5qZWN0YWJsZVByb3BlcnRpZXM6IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklEaWN0aW9uYXJ5PCBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSwgU3lzdGVtLlJlZmxlY3Rpb24uQ1Byb3BlcnR5SW5mb1tdID4gPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuQ0RpY3Rpb25hcnkoIHsgY29tcGFyZXI6IG5ldyBDVHlwZUNvbXBhcmVyKCkgfSApO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gY29udGV4dCBcclxuICAgICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgXHJcbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5U2VsZWN0b3IgXHJcbiAgICAgICAgICogQHBhcmFtIHBhcmFtZXRlcnMg5rOo5oSP77yM5q2k5aSE55qE5Y+C5pWw5YiX6KGo5pivUmVzb2x2ZeaXtuS8oOWFpeeahFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSW5qZWN0UHJvcGVydGllcyhcclxuICAgICAgICAgICAgY29udGV4dDogSUNvbXBvbmVudENvbnRleHQsXHJcbiAgICAgICAgICAgIGluc3RhbmNlOiBvYmplY3QsXHJcbiAgICAgICAgICAgIHByb3BlcnR5U2VsZWN0b3I6IENvcmUuSVByb3BlcnR5U2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IFJlYWRvbmx5QXJyYXk8Q29yZS5DUGFyYW1ldGVyPiApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHlwZSA9IGluc3RhbmNlLkdldFR5cGUoKTtcclxuICAgICAgICAgICAgbGV0IGluamVjdGFibGVQcm9wZXJ0aWVzID0gdGhpcy5JbmplY3RhYmxlUHJvcGVydGllcy5HZXQoIHR5cGUgKTtcclxuICAgICAgICAgICAgaWYgKCBpbmplY3RhYmxlUHJvcGVydGllcyA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5JbmplY3RhYmxlUHJvcGVydGllcy5BZGQoIHR5cGUsIGluamVjdGFibGVQcm9wZXJ0aWVzID0gdGhpcy5HZXRJbmplY3RhYmxlUHJvcGVydGllcyggdHlwZSApICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGluamVjdGFibGVQcm9wZXJ0aWVzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eUluZm8gPSBpbmplY3RhYmxlUHJvcGVydGllc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eVNlbGVjdG9yLkluamVjdFByb3BlcnR5KCBwcm9wZXJ0eUluZm8sIGluc3RhbmNlICkgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxldCBzZXRQYXJhbWV0ZXIgPSBwcm9wZXJ0eUluZm8uR2V0U2V0TWV0aG9kKCkuR2V0UGFyYW1ldGVycygpWyAwIF07XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgcGFyYW1ldGVyID0gcGFyYW1ldGVycy5maXJzdE9yRGVmYXVsdCggKCBwICkgPT4gcC5DYW5TdXBwbHlWYWx1ZSggc2V0UGFyYW1ldGVyLCBjb250ZXh0ICkucmV0ID09IHRydWUgKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmICggcGFyYW1ldGVyICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZWdpc3RyYXRpb246IENvcmUuSUNvbXBvbmVudFJlZ2lzdHJhdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHByb3BlcnR5SW5mby5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQ0luamVjdExpZmV0aW1lU2NvcGVBdHRyaWJ1dGUgKSApICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbiA9IGNvbnRleHQuQ29tcG9uZW50UmVnaXN0cnkuR2V0UmVnaXN0cmF0aW9uKCBuZXcgQ29yZS5DTGlmZXRpbWVTY29wZVNlcnZpY2UoKSApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggcmVnaXN0cmF0aW9uID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIGBDYW4ndCByZXNvbHZlIHRoZSBpbnN0YW5jZSBvZiB0eXBlIChJTGlmZXRpbWVTY29wZSlgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5VHlwZSA9IHByb3BlcnR5SW5mby5Qcm9wZXJ0eVR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eVR5cGUgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5U2VydmljZSA9IG5ldyBDb3JlLkNUeXBlZFNlcnZpY2UoIHByb3BlcnR5VHlwZSApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbiA9IGNvbnRleHQuQ29tcG9uZW50UmVnaXN0cnkuR2V0UmVnaXN0cmF0aW9uKCBwcm9wZXJ0eVNlcnZpY2UgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHJlZ2lzdHJhdGlvbiA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5VmFsdWU6IG9iamVjdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gY29udGV4dC5SZXNvbHZlQ29tcG9uZW50KCByZWdpc3RyYXRpb24sIFtdICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoIGUgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGUgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHByb3BlcnR5SW5mby5TZXRWYWx1ZSggaW5zdGFuY2UsIHByb3BlcnR5VmFsdWUgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgR2V0SW5qZWN0YWJsZVByb3BlcnRpZXMoIGluc3RhbmNlVHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKTogU3lzdGVtLlJlZmxlY3Rpb24uQ1Byb3BlcnR5SW5mb1tdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaW5qZWN0YWJsZVByb3BlcnRpZXMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHByb3BlcnRpZXMgPSBpbnN0YW5jZVR5cGUuR2V0UHJvcGVydGllcygpO1xyXG4gICAgICAgICAgICBmb3IgKCBjb25zdCBwaSBvZiBwcm9wZXJ0aWVzIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBwaS5DYW5Xcml0ZSA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBpbmplY3RhYmxlUHJvcGVydGllcy5wdXNoKCBwaSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpbmplY3RhYmxlUHJvcGVydGllcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vcHJpdmF0ZSBzdGF0aWMgSW5zdGFuY2VUeXBlTmFtZWRQYXJhbWV0ZXI6IHN0cmluZyA9IFwiQXV0b2ZhYy5BdXRvd2lyaW5nUHJvcGVydHlJbmplY3Rvci5JbnN0YW5jZVR5cGVcIjtcclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkFjdGl2YXRvcnMuUmVmbGVjdGlvblxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0NvbnN0cnVjdG9yUGFyYW1ldGVyQmluZGluZ1xyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgbV9jYW5JbnN0YW50aWF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fY2k6IFN5c3RlbS5SZWZsZWN0aW9uLkNDb25zdHJ1Y3RvckluZm8gPSBudWxsO1xyXG5cclxuICAgICAgICBwcml2YXRlIG1fdmFsdWVSZXRyaWV2ZXJzOiAoKCkgPT4gb2JqZWN0KVtdID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX2ZpcnN0Tm9uQmluZGFibGVQYXJhbWV0ZXI6IFN5c3RlbS5SZWZsZWN0aW9uLkNQYXJhbWV0ZXJJbmZvID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBjaTogU3lzdGVtLlJlZmxlY3Rpb24uQ0NvbnN0cnVjdG9ySW5mbywgYXZhaWxhYmxlUGFyYW1ldGVyczogQ29yZS5DUGFyYW1ldGVyW10sIGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9jaSA9IGNpO1xyXG4gICAgICAgICAgICB0aGlzLm1fY2FuSW5zdGFudGlhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBwYXJhbWV0ZXJzID0gY2kuR2V0UGFyYW1ldGVycygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tX3ZhbHVlUmV0cmlldmVycyA9IEFycmF5KCBwYXJhbWV0ZXJzLmxlbmd0aCApO1xyXG5cclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBwaSA9IHBhcmFtZXRlcnNbIGkgXTtcclxuICAgICAgICAgICAgICAgIGxldCBmb3VuZFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBjb25zdCBwYXJhbSBvZiBhdmFpbGFibGVQYXJhbWV0ZXJzIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FuU3VwcGx5VmFsdWUgPSBwYXJhbS5DYW5TdXBwbHlWYWx1ZSggcGksIGNvbnRleHQgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGNhblN1cHBseVZhbHVlLnJldCA9PSB0cnVlIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubV92YWx1ZVJldHJpZXZlcnNbIGkgXSA9IGNhblN1cHBseVZhbHVlLnZhbHVlUHJvdmlkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBmb3VuZFZhbHVlID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fY2FuSW5zdGFudGlhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fZmlyc3ROb25CaW5kYWJsZVBhcmFtZXRlciA9IHBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSW5zdGFudGlhdGUoKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuQ2FuSW5zdGFudGlhdGUgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsdWVzOiBvYmplY3RbXSA9IEFycmF5KCB0aGlzLm1fdmFsdWVSZXRyaWV2ZXJzLmxlbmd0aCApO1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLm1fdmFsdWVSZXRyaWV2ZXJzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlc1sgaSBdID0gdGhpcy5tX3ZhbHVlUmV0cmlldmVyc1sgaSBdKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX2NpLkludm9rZSggLi4udmFsdWVzICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKCBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBDYW5JbnN0YW50aWF0ZSgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2Nhbkluc3RhbnRpYXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5BY3RpdmF0b3JzLlJlZmxlY3Rpb25cclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENEZWZhdWx0VmFsdWVQYXJhbWV0ZXIgZXh0ZW5kcyBDb3JlLkNQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQ2FuU3VwcGx5VmFsdWUocGk6IFN5c3RlbS5SZWZsZWN0aW9uLkNQYXJhbWV0ZXJJbmZvLCBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCk6IHsgcmV0OiBib29sZWFuOyB2YWx1ZVByb3ZpZGVyPzogKCkgPT4gb2JqZWN0OyB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmV0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVQcm92aWRlcjogKCkgPT4gbnVsbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwdWJsaWMgQ2FuU3VwcGx5VmFsdWUoXHJcbiAgICAgICAgLy8gICAgIHBpOiBTeXN0ZW0uUmVmbGVjdGlvbi5DUGFyYW1ldGVySW5mbyxcclxuICAgICAgICAvLyAgICAgY29udGV4dDogSUNvbXBvbmVudENvbnRleHQsXHJcbiAgICAgICAgLy8gICAgIHZhbHVlUHJvdmlkZXI6IFN5c3RlbS5PdXRQYXJhbWV0ZXI8KCkgPT4gb2JqZWN0PlxyXG4gICAgICAgIC8vICk6IGJvb2xlYW5cclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIHZhbHVlUHJvdmlkZXIuX19vdXQgPSAoKSA9PiBudWxsO1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn0iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NJbnN0YW5jZUFjdGl2YXRvci50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5BY3RpdmF0b3JzLlJlZmxlY3Rpb25cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VzIHJlZmxlY3Rpb24gdG8gYWN0aXZhdGUgaW5zdGFuY2VzIG9mIGEgdHlwZS5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIENSZWZsZWN0aW9uQWN0aXZhdG9yIGV4dGVuZHMgQ0luc3RhbmNlQWN0aXZhdG9yXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2ltcGxlbWVudGF0aW9uVHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fY29uZmlndXJlZFByb3BlcnRpZXM6IFJlYWRvbmx5QXJyYXk8IENvcmUuQ1BhcmFtZXRlciA+ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2RlZmF1bHRQYXJhbWV0ZXJzOiBSZWFkb25seUFycmF5PCBDb3JlLkNQYXJhbWV0ZXIgPiA9IG51bGwgO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fY29uc3RydWN0b3I6IFN5c3RlbS5SZWZsZWN0aW9uLkNDb25zdHJ1Y3RvckluZm8gPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgaW1wbGVtZW50YXRpb25UeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSxcclxuICAgICAgICAgICAgY29uZmlndXJlZFBhcmFtZXRlcnM6IFJlYWRvbmx5QXJyYXk8IENvcmUuQ1BhcmFtZXRlciA+LFxyXG4gICAgICAgICAgICBjb25maWd1cmVkUHJvcGVydGllczogUmVhZG9ubHlBcnJheTwgQ29yZS5DUGFyYW1ldGVyID5cclxuICAgICAgICApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggaW1wbGVtZW50YXRpb25UeXBlICk7XHJcbiAgICAgICAgICAgIHRoaXMubV9pbXBsZW1lbnRhdGlvblR5cGUgPSBpbXBsZW1lbnRhdGlvblR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMubV9jb25zdHJ1Y3RvciA9IHRoaXMubV9pbXBsZW1lbnRhdGlvblR5cGUuR2V0Q29uc3RydWN0b3IoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubV9kZWZhdWx0UGFyYW1ldGVycyA9IGNvbmZpZ3VyZWRQYXJhbWV0ZXJzLmNvbmNhdCggW1xyXG4gICAgICAgICAgICAgICAgbmV3IENBdXRvd2lyaW5nUGFyYW1ldGVyKCksXHJcbiAgICAgICAgICAgICAgICBuZXcgQ0RlZmF1bHRWYWx1ZVBhcmFtZXRlcigpXHJcbiAgICAgICAgICAgIF0gKTtcclxuICAgICAgICAgICAgdGhpcy5tX2NvbmZpZ3VyZWRQcm9wZXJ0aWVzID0gY29uZmlndXJlZFByb3BlcnRpZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBBY3RpdmF0ZUluc3RhbmNlKGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0LCBwYXJhbWV0ZXJzPzogYW55W10pOiBvYmplY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBiaW5kaW5nID0gdGhpcy5HZXRDb25zdHJ1Y3RvckJpbmRpbmcoIGNvbnRleHQsIHBhcmFtZXRlcnMgKTtcclxuICAgICAgICAgICAgaWYgKCBiaW5kaW5nLkNhbkluc3RhbnRpYXRlID09IGZhbHNlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gYmluZGluZy5JbnN0YW50aWF0ZSgpO1xyXG4gICAgICAgICAgICAvLyBsZXQgaW5zdGFuY2U6IG9iamVjdCA9IG51bGw7XHJcbiAgICAgICAgICAgIC8vIGxldCBjb25zdHJ1Y3RvclBhcmFtZXRlcnMgPSB0aGlzLm1fY29uc3RydWN0b3IuR2V0UGFyYW1ldGVycygpO1xyXG4gICAgICAgICAgICAvLyBpZiAoIGNvbnN0cnVjdG9yUGFyYW1ldGVycy5sZW5ndGggPiAwIClcclxuICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHZhbHVlcyA9IEFycmF5PCBvYmplY3QgPiggY29uc3RydWN0b3JQYXJhbWV0ZXJzLmxlbmd0aCApO1xyXG4gICAgICAgICAgICAvLyAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgY29uc3RydWN0b3JQYXJhbWV0ZXJzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgY3AgPSBjb25zdHJ1Y3RvclBhcmFtZXRlcnNbIGkgXTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBsZXQgdHlwZUF0dHJpYnV0ZSA9IGNwLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBTeXN0ZW0uUmVmbGVjdGlvbi5DRGVjbGFyaW5nVHlwZUF0dHJpYnV0ZSApICk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKCB0eXBlQXR0cmlidXRlID09IG51bGwgKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWVzWyBpIF0gPSBudWxsO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIC8vICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gZWxzZVxyXG4gICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgIC8vICAgICBpbnN0YW5jZSA9IHRoaXMubV9jb25zdHJ1Y3Rvci5JbnZva2UoKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB0aGlzLkluamVjdFByb3BlcnRpZXMoIGluc3RhbmNlLCBjb250ZXh0ICk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERpc3Bvc2UoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIEdldENvbnN0cnVjdG9yQmluZGluZyggY29udGV4dDogSUNvbXBvbmVudENvbnRleHQsIHBhcmFtZXRlcnM6IENvcmUuQ1BhcmFtZXRlcltdICk6IENDb25zdHJ1Y3RvclBhcmFtZXRlckJpbmRpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcmlvcml0aXNlZFBhcmFtZXRlcnM6IENvcmUuQ1BhcmFtZXRlcltdID0gW107XHJcbiAgICAgICAgICAgIGlmICggcGFyYW1ldGVycyAhPSBudWxsICYmIHBhcmFtZXRlcnMubGVuZ3RoID4gMCApXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0aXNlZFBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV9kZWZhdWx0UGFyYW1ldGVycyAhPSBudWxsICYmIHRoaXMubV9kZWZhdWx0UGFyYW1ldGVycy5sZW5ndGggPiAwIClcclxuICAgICAgICAgICAgICAgIHByaW9yaXRpc2VkUGFyYW1ldGVycyA9IHByaW9yaXRpc2VkUGFyYW1ldGVycy5jb25jYXQoIHRoaXMubV9kZWZhdWx0UGFyYW1ldGVycyApO1xyXG5cclxuICAgICAgICAgICAgbGV0IGJpbmRpbmcgPSBuZXcgQ0NvbnN0cnVjdG9yUGFyYW1ldGVyQmluZGluZyggdGhpcy5tX2NvbnN0cnVjdG9yLCBwcmlvcml0aXNlZFBhcmFtZXRlcnMsIGNvbnRleHQgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBiaW5kaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBJbmplY3RQcm9wZXJ0aWVzKCBpbnN0YW5jZTogb2JqZWN0LCBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV9jb25maWd1cmVkUHJvcGVydGllcy5sZW5ndGggPT0gMCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgYWN0dWFsUHJvcGVydGllcyA9IGluc3RhbmNlLkdldFR5cGUoKS5HZXRQcm9wZXJ0aWVzKCkud2hlcmUoICggcGkgKSA9PiBwaS5DYW5Xcml0ZSApO1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgY29uZmlndXJlZFByb3BlcnR5IG9mIHRoaXMubV9jb25maWd1cmVkUHJvcGVydGllcyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGFjdHVhbFByb3BlcnRpZXMubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlJbmZvID0gYWN0dWFsUHJvcGVydGllc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggcHJvcGVydHlJbmZvLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBDSW5qZWN0TGlmZXRpbWVTY29wZUF0dHJpYnV0ZSApICkgIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmVkUHJvcGVydHkgPSBuZXcgQ0F1dG93aXJpbmdQYXJhbWV0ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNldHRlciA9IHByb3BlcnR5SW5mby5HZXRTZXRNZXRob2QoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FuU3VwcGx5VmFsdWUgPSBjb25maWd1cmVkUHJvcGVydHkuQ2FuU3VwcGx5VmFsdWUoIHNldHRlci5HZXRQYXJhbWV0ZXJzKClbIDAgXSwgY29udGV4dCApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggY2FuU3VwcGx5VmFsdWUucmV0ID09IHRydWUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsUHJvcGVydGllcy5zcGxpY2UoIGksIDEgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlJbmZvLlNldFZhbHVlKCBpbnN0YW5jZSwgY2FuU3VwcGx5VmFsdWUudmFsdWVQcm92aWRlcigpICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkJ1aWxkZXJcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgbV9pbXBsZW1lbnRhdGlvblR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX2NvbnN0cnVjdG9yOiBTeXN0ZW0uUmVmbGVjdGlvbi5DQ29uc3RydWN0b3JJbmZvID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2NvbmZpZ3VyZWRQYXJhbWV0ZXJzOiBDb3JlLkNQYXJhbWV0ZXJbXSA9IFtdO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fY29uZmlndXJlZFByb3BlcnRpZXM6IENvcmUuQ1BhcmFtZXRlcltdID0gW107XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggaW1wbGVtZW50ZXI6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9pbXBsZW1lbnRhdGlvblR5cGUgPSBpbXBsZW1lbnRlcjtcclxuICAgICAgICAgICAgdGhpcy5tX2NvbnN0cnVjdG9yID0gdGhpcy5tX2ltcGxlbWVudGF0aW9uVHlwZS5HZXRDb25zdHJ1Y3RvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBJbXBsZW1lbnRhdGlvblR5cGUoKTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1faW1wbGVtZW50YXRpb25UeXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBDb25maWd1cmVkUGFyYW1ldGVycygpOiBDb3JlLkNQYXJhbWV0ZXJbXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9jb25maWd1cmVkUGFyYW1ldGVycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQ29uZmlndXJlZFByb3BlcnRpZXMoKTogQ29yZS5DUGFyYW1ldGVyW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY29uZmlndXJlZFByb3BlcnRpZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YS50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5CdWlsZGVyXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogUmVmbGVjdGlvbiBhY3RpdmF0b3IgZGF0YSBmb3IgY29uY3JldGUgdHlwZXMuXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDQ29uY3JldGVSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YSBleHRlbmRzIENSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YSBpbXBsZW1lbnRzIElDb25jcmV0ZUFjdGl2YXRvckRhdGEsIElBY3RpdmF0b3JEYXRhXHJcbiAgICB7XHJcblxyXG4gICAgICAgIC8vcHJpdmF0ZSByZWFkb25seSBtX2FjdGl2YXRvcjogQ29yZS5JSW5zdGFuY2VBY3RpdmF0b3IgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGltcGxlbWVudGVyOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggaW1wbGVtZW50ZXIgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldFR5cGVzKCk6ICggdDogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKSA9PiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB0aGlzLkltcGxlbWVudGF0aW9uVHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldEFjdGl2YXRvcigpOiBDb3JlLklJbnN0YW5jZUFjdGl2YXRvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBY3RpdmF0b3JzLlJlZmxlY3Rpb24uQ1JlZmxlY3Rpb25BY3RpdmF0b3IoXHJcbiAgICAgICAgICAgICAgICB0aGlzLkltcGxlbWVudGF0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29uZmlndXJlZFBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbmZpZ3VyZWRQcm9wZXJ0aWVzICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEaXNwb3NlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5CdWlsZGVyXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDRGVmZXJyZWRDYWxsYmFja1xyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9jYWxsYmFjazogU3lzdGVtLkFjdGlvbjwgQ29yZS5JQ29tcG9uZW50UmVnaXN0cnkgPiA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggY2FsbGJhY2s6IFN5c3RlbS5BY3Rpb248IENvcmUuSUNvbXBvbmVudFJlZ2lzdHJ5ID4gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2NhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IENhbGxiYWNrKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY2FsbGJhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkJ1aWxkZXJcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdCBleHRlbmRzIG9iamVjdD4gaW1wbGVtZW50cyBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fcmVnaXN0cmF0aW9uRGF0YTogQ1JlZ2lzdHJhdGlvbkRhdGEgPSBudWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBtX2FjdGl2YXRvckRhdGE6IElBY3RpdmF0b3JEYXRhID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9yZWdpc3RyYXRpb25TdHlsZTogYW55ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBzZXJ2aWNlOiBDb3JlLkNTZXJ2aWNlLCBhY3RpdmF0b3JEYXRhOiBJQWN0aXZhdG9yRGF0YSwgc3R5bGU6IGFueSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YSA9IG5ldyBDUmVnaXN0cmF0aW9uRGF0YSggc2VydmljZSApO1xyXG4gICAgICAgICAgICB0aGlzLm1fYWN0aXZhdG9yRGF0YSA9IGFjdGl2YXRvckRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25TdHlsZSA9IHN0eWxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBSZWdpc3RlckRhdGEoKTogQ1JlZ2lzdHJhdGlvbkRhdGFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQWN0aXZhdG9yRGF0YSgpOiBJQWN0aXZhdG9yRGF0YVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9hY3RpdmF0b3JEYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR2V0QWN0aXZhdG9yRGF0YUV4PFQgZXh0ZW5kcyBvYmplY3QgPiggdDogU3lzdGVtLlJlZmxlY3Rpb24uVHlwZUNvbnN0cnVjdG9yPCBUID4gKTogVFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fYWN0aXZhdG9yRGF0YSBpbnN0YW5jZW9mIHQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX2FjdGl2YXRvckRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFJlZ2lzdHJhdGlvblN0eWxlKCk6IGFueVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9yZWdpc3RyYXRpb25TdHlsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE5hbWVkPFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0Pih0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTxUU2VydmljZT4sIG5hbWU6IHN0cmluZyk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25EYXRhLkFkZFNlcnZpY2UoIG5ldyBDb3JlLkNLZXllZFNlcnZpY2UoIG5hbWUsIHR5cGUgKSApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEtleWVkPFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0PiggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8VFNlcnZpY2U+LCBrZXk6IGFueSApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5BZGRTZXJ2aWNlKCBuZXcgQ29yZS5DS2V5ZWRTZXJ2aWNlKCBrZXksIHR5cGUgKSApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEtleWVkTWFwcGluZzwgVFNlcnZpY2UgZXh0ZW5kcyBvYmplY3QgPiggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IFRTZXJ2aWNlID4sIHNlcnZpY2VzS2V5TWFwcGluZzogKCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApID0+IGFueSApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV9hY3RpdmF0b3JEYXRhIGluc3RhbmNlb2YgQ1NjYW5uaW5nQWN0aXZhdG9yRGF0YSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9hY3RpdmF0b3JEYXRhLkZpbHRlcnMucHVzaCggdCA9PiB0LklzSW5oZXJpdEZyb20oIHR5cGUgKSApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX0FzMiggdCA9PiBuZXcgQ29yZS5DS2V5ZWRTZXJ2aWNlKCBzZXJ2aWNlc0tleU1hcHBpbmcoIHQgKSwgdHlwZSApICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIHRoaXMubV9hY3RpdmF0b3JEYXRhIGluc3RhbmNlb2YgQ0NvbmNyZXRlUmVmbGVjdGlvbkFjdGl2YXRvckRhdGEgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5BZGRTZXJ2aWNlKCBuZXcgQ29yZS5DS2V5ZWRTZXJ2aWNlKCBzZXJ2aWNlc0tleU1hcHBpbmcoIHRoaXMubV9hY3RpdmF0b3JEYXRhLkltcGxlbWVudGF0aW9uVHlwZSApLCB0aGlzLm1fYWN0aXZhdG9yRGF0YS5JbXBsZW1lbnRhdGlvblR5cGUgKSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQXM8VFNlcnZpY2UgZXh0ZW5kcyBvYmplY3Q+KHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPFRTZXJ2aWNlPik6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25EYXRhLkFkZFNlcnZpY2UoIG5ldyBDb3JlLkNUeXBlZFNlcnZpY2UoIHR5cGUgKSApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFzRXgoIHNlcnZpY2VzOiBDb3JlLkNTZXJ2aWNlW10gKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3JlZ2lzdHJhdGlvbkRhdGEuQWRkU2VydmljZXMoIHNlcnZpY2VzICk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfX0FzMSggc2VydmljZU1hcHBpbmc6ICggdDogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKSA9PiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX0FzMiggdCA9PiBuZXcgQ29yZS5DVHlwZWRTZXJ2aWNlKCBzZXJ2aWNlTWFwcGluZyggdCApICkgKTsgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX19BczIoIHNlcnZpY2VNYXBwaW5nOiAoIHQ6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICkgPT4gQ29yZS5DU2VydmljZSApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX0FzMyggdCA9PiBbIHNlcnZpY2VNYXBwaW5nKCB0ICkgXSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfX0FzMyggc2VydmljZU1hcHBpbmc6ICggdDogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKSA9PiBDb3JlLkNTZXJ2aWNlW10gKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEZlYXR1cmVzLlNjYW5uaW5nLkNTY2FubmluZ1JlZ2lzdHJhdGlvbkV4dGVuc2lvbnMuQXMoIHRoaXMsIHNlcnZpY2VNYXBwaW5nICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBBc1NlbGYoKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fYWN0aXZhdG9yRGF0YSBpbnN0YW5jZW9mIENTY2FubmluZ0FjdGl2YXRvckRhdGEgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fQXMxKCB0ID0+IHQgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICggdGhpcy5tX2FjdGl2YXRvckRhdGEgaW5zdGFuY2VvZiBDQ29uY3JldGVSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25EYXRhLkFkZFNlcnZpY2UoIG5ldyBDb3JlLkNUeXBlZFNlcnZpY2UoIHRoaXMubV9hY3RpdmF0b3JEYXRhLkltcGxlbWVudGF0aW9uVHlwZSApICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9yZXR1cm4gdGhpcy5fX0FzKCB0aGlzLm1fYWN0aXZhdG9yRGF0YS5HZXRUeXBlcygpICk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFdoZXJlKCBwcmVkaWNhdGU6ICggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKSA9PiBib29sZWFuICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggKCB0aGlzLm1fYWN0aXZhdG9yRGF0YSBpbnN0YW5jZW9mIEJ1aWxkZXIuQ1NjYW5uaW5nQWN0aXZhdG9yRGF0YSApID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG5cclxuICAgICAgICAgICAgKDxCdWlsZGVyLkNTY2FubmluZ0FjdGl2YXRvckRhdGE+dGhpcy5tX2FjdGl2YXRvckRhdGEpLkZpbHRlcnMucHVzaCggcHJlZGljYXRlICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFNpbmdsZUluc3RhbmNlKCk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25EYXRhLlNoYXJpbmcgPSBDb3JlLlVJbnN0YW5jZVNoYXJpbmcuU2hhcmVkO1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5MaWZldGltZSA9IG5ldyBDb3JlLkxpZmV0aW1lLkNSb290U2NvcGVMaWZldGltZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEluc3RhbmNlUGVyRGVwZW5kZW5jeSgpOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5TaGFyaW5nID0gQ29yZS5VSW5zdGFuY2VTaGFyaW5nLk5vbmU7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25EYXRhLkxpZmV0aW1lID0gbmV3IENvcmUuTGlmZXRpbWUuQ0N1cnJlbnRTY29wZUxpZmV0aW1lKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgSW5zdGFuY2VQZXJMaWZldGltZVNjb3BlKCk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25EYXRhLlNoYXJpbmcgPSBDb3JlLlVJbnN0YW5jZVNoYXJpbmcuU2hhcmVkO1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5MaWZldGltZSA9IG5ldyBDb3JlLkxpZmV0aW1lLkNDdXJyZW50U2NvcGVMaWZldGltZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEluc3RhbmNlUGVyTWF0Y2hpbmdMaWZldGltZVNjb3BlKCAuLi5zY29wZVRhZzogVUxpZmV0aW1lU2NvcGVUYWdUeXBlW10gKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3JlZ2lzdHJhdGlvbkRhdGEuU2hhcmluZyA9IENvcmUuVUluc3RhbmNlU2hhcmluZy5TaGFyZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25EYXRhLkxpZmV0aW1lID0gbmV3IENvcmUuTGlmZXRpbWUuQ01hdGNoaW5nU2NvcGVMaWZldGltZSggLi4uc2NvcGVUYWcgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBQcm9wZXJ0aWVzQXV0b3dpcmVkKCBwcm9wZXJ0eVNlbGVjdG9yPzogQ29yZS5JUHJvcGVydHlTZWxlY3RvciApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHByb3BlcnR5U2VsZWN0b3IgPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlTZWxlY3RvciA9IG5ldyBDb3JlLkNEZWZhdWx0UHJvcGVydHlTZWxlY3RvciggZmFsc2UgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5BY3RpdmF0aW5nSGFuZGxlcnMuQWRkKCAoIHNlbmRlciwgZSApID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEFjdGl2YXRvcnMuUmVmbGVjdGlvbi5DQXV0b3dpcmluZ1Byb3BlcnR5SW5qZWN0b3IuSW5qZWN0UHJvcGVydGllcyggZS5Db250ZXh0LCBlLkluc3RhbmNlLCBwcm9wZXJ0eVNlbGVjdG9yLCBlLlBhcmFtZXRlcnMgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFdpdGhQYXJhbWV0ZXIoIHBhcmFtZXRlcjogQ29yZS5DUGFyYW1ldGVyICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmF0b3JEYXRhID0gdGhpcy5HZXRBY3RpdmF0b3JEYXRhRXgoIENSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YSApO1xyXG4gICAgICAgICAgICBpZiAoIGFjdGl2YXRvckRhdGEgIT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2YXRvckRhdGEuQ29uZmlndXJlZFBhcmFtZXRlcnMucHVzaCggcGFyYW1ldGVyICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgV2l0aFBhcmFtZXRlcnMoIHBhcmFtZXRlcnM6IFJlYWRvbmx5QXJyYXk8IENvcmUuQ1BhcmFtZXRlciA+ICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoIGNvbnN0IHAgb2YgcGFyYW1ldGVycyApXHJcbiAgICAgICAgICAgICAgICB0aGlzLldpdGhQYXJhbWV0ZXIoIHAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgV2l0aFByb3BlcnR5KCBwYXJhbWV0ZXI6IENvcmUuQ1BhcmFtZXRlciApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZhdG9yRGF0YSA9IHRoaXMuR2V0QWN0aXZhdG9yRGF0YUV4KCBDUmVmbGVjdGlvbkFjdGl2YXRvckRhdGEgKTtcclxuICAgICAgICAgICAgaWYgKCBhY3RpdmF0b3JEYXRhICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgYWN0aXZhdG9yRGF0YS5Db25maWd1cmVkUHJvcGVydGllcy5wdXNoKCBwYXJhbWV0ZXIgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgV2l0aFByb3BlcnRpZXMoIHBhcmFtZXRlcnM6IFJlYWRvbmx5QXJyYXk8IENvcmUuQ1BhcmFtZXRlciA+ICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoIGNvbnN0IHAgb2YgcGFyYW1ldGVycyApXHJcbiAgICAgICAgICAgICAgICB0aGlzLldpdGhQcm9wZXJ0eSggcCApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9uQWN0aXZhdGluZyggY2FsbGJhY2s6IENvcmUuVUNhbGxiYWNrQWN0aXZhdGluZzxUTGltaXQ+ICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25EYXRhLkFjdGl2YXRpbmdIYW5kbGVycy5BZGQoIChzLCBlKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IG5ldyBDb3JlLkNBY3RpdmF0aW5nRXZlbnRBcmdzPFRMaW1pdD4oZS5Db250ZXh0LCBlLlJlZ2lzdHJhdGlvbiwgZS5QYXJhbWV0ZXJzLCA8VExpbWl0PmUuSW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YoIGNhbGxiYWNrICkgPT0gXCJmdW5jdGlvblwiIClcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayggYXJncyApO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLkV4ZWN1dGUoIGFyZ3MgKTtcclxuICAgICAgICAgICAgICAgIGUuSW5zdGFuY2UgPSBhcmdzLkluc3RhbmNlO1xyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgT25BY3RpdmF0ZWQoKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkJ1aWxkZXJcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENSZWdpc3RyYXRpb25CdWlsZGVySGVscGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBSZWdpc3RlclNpbmdsZUNvbXBvbmVudChcclxuICAgICAgICAgICAgY3I6IENvcmUuSUNvbXBvbmVudFJlZ2lzdHJ5LFxyXG4gICAgICAgICAgICByYjogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8b2JqZWN0PiApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmVnaXN0cmF0aW9uID0gdGhpcy5DcmVhdGVSZWdpc3RyYXRpb25Gb3JCdWlsZGVyKCByYiApO1xyXG4gICAgICAgICAgICBjci5SZWdpc3RlciggcmVnaXN0cmF0aW9uLCBmYWxzZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDcmVhdGVSZWdpc3RyYXRpb25Gb3JCdWlsZGVyKFxyXG4gICAgICAgICAgICByYjogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8b2JqZWN0PiApOiBDb3JlLklDb21wb25lbnRSZWdpc3RyYXRpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkNyZWF0ZVJlZ2lzdHJhdGlvbihcclxuICAgICAgICAgICAgICAgIHJiLlJlZ2lzdHJhdGlvblN0eWxlLklELFxyXG4gICAgICAgICAgICAgICAgcmIuUmVnaXN0ZXJEYXRhLFxyXG4gICAgICAgICAgICAgICAgcmIuQWN0aXZhdG9yRGF0YS5HZXRBY3RpdmF0b3IoKSxcclxuICAgICAgICAgICAgICAgIHJiLlJlZ2lzdGVyRGF0YS5HZXRTZXJ2aWNlcygpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENyZWF0ZVJlZ2lzdHJhdGlvbihcclxuICAgICAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICAgICAgZGF0YTogQ1JlZ2lzdHJhdGlvbkRhdGEsXHJcbiAgICAgICAgICAgIGFjdGl2YXRvcjogQ29yZS5JSW5zdGFuY2VBY3RpdmF0b3IsXHJcbiAgICAgICAgICAgIHNlcnZpY2VzOiBBcnJheTwgQ29yZS5DU2VydmljZSA+LFxyXG4gICAgICAgICAgICB0YXJnZXQ/OiBDb3JlLklDb21wb25lbnRSZWdpc3RyYXRpb24gKTogQ29yZS5JQ29tcG9uZW50UmVnaXN0cmF0aW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbGltaXRUeXBlID0gYWN0aXZhdG9yLkdldExpbWl0VHlwZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yICggY29uc3QgdHMgb2Ygc2VydmljZXMgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRzLmhhc093blByb3BlcnR5KCBcIkdldFNlcnZpY2VUeXBlXCIgKSA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICggbGltaXRUeXBlLklzSW5oZXJpdEZyb20oICgoPENvcmUuSVNlcnZpY2VXaXRoVHlwZT48YW55PnRzKSkuR2V0U2VydmljZVR5cGUoKSApID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiXCIgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHJlZ2lzdHJhdGlvbiA9IG5ldyBDb3JlLlJlZ2lzdHJhdGlvbi5DQ29tcG9uZW50UmVnaXN0cmF0aW9uKFxyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmF0b3IsXHJcbiAgICAgICAgICAgICAgICBkYXRhLkxpZmV0aW1lLFxyXG4gICAgICAgICAgICAgICAgZGF0YS5TaGFyaW5nLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIGRhdGEuR2V0U2VydmljZXMoKSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi5BY3RpdmF0aW5nLkFkZCggZGF0YS5BY3RpdmF0aW5nSGFuZGxlcnMuY2FsbGJhY2tzICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gcmVnaXN0cmF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkJ1aWxkZXJcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENSZWdpc3RyYXRpb25EYXRhXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBtX2RlZmF1bHRTZXJ2aWNlOiBDb3JlLkNTZXJ2aWNlID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIG1fZGVmYXVsdFNlcnZpY2VPdmVycmlkZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBwcml2YXRlIG1fc2VydmljZXM6IEFycmF5PCBDb3JlLkNTZXJ2aWNlID4gPSBBcnJheSgpO1xyXG5cclxuICAgICAgICBwcml2YXRlIG1fc2hhcmluZzogQ29yZS5VSW5zdGFuY2VTaGFyaW5nID0gQ29yZS5VSW5zdGFuY2VTaGFyaW5nLk5vbmU7XHJcbiAgICAgICAgcHJpdmF0ZSBtX2xpZmV0aW1lOiBDb3JlLklDb21wb25lbnRMaWZldGltZSA9IG5ldyBDb3JlLkxpZmV0aW1lLkNDdXJyZW50U2NvcGVMaWZldGltZSgpO1xyXG5cclxuICAgICAgICBwcml2YXRlIG1fZGVmZXJyZWRDYWxsYmFjazogQ0RlZmVycmVkQ2FsbGJhY2sgPSBudWxsO1xyXG5cclxuICAgICAgICBwcml2YXRlIG1fYWN0aXZhdGluZ0hhbmRsZXJzOiBTeXN0ZW0uVENhbGxiYWNrQXJyYXk8ICggc2VuZGVyOiBhbnksIGU6IENvcmUuQ0FjdGl2YXRpbmdFdmVudEFyZ3M8b2JqZWN0PiApID0+IHZvaWQgPiA9IG5ldyBTeXN0ZW0uVENhbGxiYWNrQXJyYXkoKTtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBkZWZhdWx0U2VydmljZTogQ29yZS5DU2VydmljZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fZGVmYXVsdFNlcnZpY2UgPSBkZWZhdWx0U2VydmljZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBBZGRTZXJ2aWNlKCBzZXJ2aWNlOiBDb3JlLkNTZXJ2aWNlICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9kZWZhdWx0U2VydmljZU92ZXJyaWRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9zZXJ2aWNlcy5wdXNoKCBzZXJ2aWNlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQWRkU2VydmljZXMoIHNlcnZpY2VzOiBDb3JlLkNTZXJ2aWNlW10gKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2RlZmF1bHRTZXJ2aWNlT3ZlcnJpZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tX3NlcnZpY2VzID0gdGhpcy5tX3NlcnZpY2VzLmNvbmNhdCggc2VydmljZXMgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRTZXJ2aWNlcygpOiBBcnJheTwgQ29yZS5DU2VydmljZSA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV9kZWZhdWx0U2VydmljZU92ZXJyaWRlbiA9PSB0cnVlIClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fc2VydmljZXM7XHJcbiAgICAgICAgICAgIHJldHVybiAoIHRoaXMubV9zZXJ2aWNlcy5sZW5ndGggPT0gMCApID8gWyB0aGlzLm1fZGVmYXVsdFNlcnZpY2UgXTogdGhpcy5tX3NlcnZpY2VzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCBMaWZldGltZSggdmFsdWU6IENvcmUuSUNvbXBvbmVudExpZmV0aW1lIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9saWZldGltZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBMaWZldGltZSgpOiBDb3JlLklDb21wb25lbnRMaWZldGltZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9saWZldGltZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgU2hhcmluZyggdmFsdWU6IENvcmUuVUluc3RhbmNlU2hhcmluZyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fc2hhcmluZyA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBTaGFyaW5nKCk6IENvcmUuVUluc3RhbmNlU2hhcmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9zaGFyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCBEZWZlcnJlZENhbGxiYWNrKCB2YWx1ZTogQ0RlZmVycmVkQ2FsbGJhY2sgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2RlZmVycmVkQ2FsbGJhY2sgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgRGVmZXJyZWRDYWxsYmFjaygpOiBDRGVmZXJyZWRDYWxsYmFja1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9kZWZlcnJlZENhbGxiYWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBBY3RpdmF0aW5nSGFuZGxlcnMoKTogU3lzdGVtLlRDYWxsYmFja0FycmF5PCAoIHNlbmRlcjogYW55LCBlOiBDb3JlLkNBY3RpdmF0aW5nRXZlbnRBcmdzPG9iamVjdD4gKSA9PiB2b2lkID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fYWN0aXZhdGluZ0hhbmRsZXJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIENvcHlGcm9tKCB0aGF0OiBDUmVnaXN0cmF0aW9uRGF0YSwgaW5jbHVkZURlZmF1bHRTZXJ2aWNlOiBib29sZWFuICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggaW5jbHVkZURlZmF1bHRTZXJ2aWNlID09IHRydWUgKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2RlZmF1bHRTZXJ2aWNlID0gdGhhdC5tX2RlZmF1bHRTZXJ2aWNlO1xyXG4gICAgICAgICAgICB0aGlzLm1fZGVmYXVsdFNlcnZpY2VPdmVycmlkZW4gPSB0aGF0Lm1fZGVmYXVsdFNlcnZpY2VPdmVycmlkZW47XHJcbiAgICAgICAgICAgIHRoaXMubV9saWZldGltZSA9IHRoYXQubV9saWZldGltZTtcclxuICAgICAgICAgICAgdGhpcy5tX3NoYXJpbmcgPSB0aGF0Lm1fc2hhcmluZztcclxuICAgICAgICAgICAgdGhpcy5tX3NlcnZpY2VzID0gdGhpcy5Db3B5QXJyYXkoIHRoYXQubV9zZXJ2aWNlcyApO1xyXG4gICAgICAgICAgICB0aGlzLm1fYWN0aXZhdGluZ0hhbmRsZXJzID0gdGhhdC5tX2FjdGl2YXRpbmdIYW5kbGVycy5Db3B5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIENvcHlBcnJheTxUPiggc3JjOiBUW10gKTogVFtdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGVzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKCBjb25zdCB0ZW1wIG9mIHNyYyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlc3QucHVzaCggdGVtcCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQnVpbGRlclxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1NjYW5uaW5nQWN0aXZhdG9yRGF0YSBleHRlbmRzIENSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YSBpbXBsZW1lbnRzIElBY3RpdmF0b3JEYXRhXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2ZpbHRlcjogKCggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKSA9PiBib29sZWFuKVtdID0gW107XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9jb25maWd1cmF0aW9uQWN0aW9uczogKCAodHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUsIHJiOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxvYmplY3Q+ICkgPT4gdm9pZCApW10gPSBbXTtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIE9iamVjdCApICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXRUeXBlcygpOiAoIHQ6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICkgPT4gU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR2V0QWN0aXZhdG9yKCk6IENvcmUuSUluc3RhbmNlQWN0aXZhdG9yXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgRmlsdGVycygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2ZpbHRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQ29uZmlndXJhdGlvbkFjdGlvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9jb25maWd1cmF0aW9uQWN0aW9ucztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQnVpbGRlclxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1NpbXBsZUFjdGl2YXRvckRhdGEgaW1wbGVtZW50cyBJQWN0aXZhdG9yRGF0YSwgSUNvbmNyZXRlQWN0aXZhdG9yRGF0YVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9hY3RpdmF0b3I6IENvcmUuSUluc3RhbmNlQWN0aXZhdG9yID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBhY3RpdmF0b3I6IENvcmUuSUluc3RhbmNlQWN0aXZhdG9yIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9hY3RpdmF0b3IgPSBhY3RpdmF0b3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0VHlwZXMoKTogKCB0OiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApID0+IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy5tX2FjdGl2YXRvci5HZXRMaW1pdFR5cGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRBY3RpdmF0b3IoKTogQ29yZS5JSW5zdGFuY2VBY3RpdmF0b3Ige1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2FjdGl2YXRvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5CdWlsZGVyXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDU2luZ2xlUmVnaXN0cmF0aW9uU3R5bGVcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1faWQ6IHN0cmluZyA9IENvcmUuR2VuSUQoKTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX3ByZXNlcnZlRGVmYXVsdHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcHVibGljIGdldCBJRCgpOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1faWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IFByZXNlcnZlRGVmYXVsdHMoIHZhbHVlOiBib29sZWFuIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9wcmVzZXJ2ZURlZmF1bHRzID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFByZXNlcnZlRGVmYXVsdHMoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9wcmVzZXJ2ZURlZmF1bHRzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQnVpbGRlclxyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdCBleHRlbmRzIG9iamVjdD5cclxuICAgIHtcclxuICAgICAgICByZWFkb25seSBSZWdpc3RlckRhdGE6IENSZWdpc3RyYXRpb25EYXRhO1xyXG5cclxuICAgICAgICByZWFkb25seSBBY3RpdmF0b3JEYXRhOiBJQWN0aXZhdG9yRGF0YTtcclxuXHJcbiAgICAgICAgcmVhZG9ubHkgUmVnaXN0cmF0aW9uU3R5bGU6IGFueTtcclxuXHJcbiAgICAgICAgTmFtZWQ8IFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0ID4oIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBUU2VydmljZSA+LCBuYW1lOiBzdHJpbmcgKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PjtcclxuXHJcbiAgICAgICAgS2V5ZWQ8IFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0ID4oIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBUU2VydmljZSA+LCBrZXk6IGFueSApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+O1xyXG5cclxuICAgICAgICBLZXllZE1hcHBpbmc8IFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0ID4oIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBUU2VydmljZSA+LCBzZXJ2aWNlc0tleU1hcHBpbmc6ICggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKSA9PiBhbnkgKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PjtcclxuXHJcbiAgICAgICAgQXM8IFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0ID4oIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBUU2VydmljZSA+ICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD47XHJcblxyXG4gICAgICAgIEFzRXgoIHNlcnZpY2VzOiBDb3JlLkNTZXJ2aWNlW10gKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PjtcclxuXHJcbiAgICAgICAgQXNTZWxmKCk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD47XHJcblxyXG4gICAgICAgIFdoZXJlKCBwcmVkaWNhdGU6ICggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKSA9PiBib29sZWFuICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD47XHJcblxyXG4gICAgICAgIFNpbmdsZUluc3RhbmNlKCk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD47XHJcblxyXG4gICAgICAgIEluc3RhbmNlUGVyRGVwZW5kZW5jeSgpOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+O1xyXG5cclxuICAgICAgICBJbnN0YW5jZVBlckxpZmV0aW1lU2NvcGUoKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PjtcclxuXHJcbiAgICAgICAgSW5zdGFuY2VQZXJNYXRjaGluZ0xpZmV0aW1lU2NvcGUoIHNjb3BlVGFnOiBVTGlmZXRpbWVTY29wZVRhZ1R5cGUgKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PjtcclxuXHJcbiAgICAgICAgUHJvcGVydGllc0F1dG93aXJlZCggcHJvcGVydHlTZWxlY3Rvcj86IENvcmUuSVByb3BlcnR5U2VsZWN0b3IsIGFsbG93Q2lyY3VsYXJEZXBlbmRlbmNpZXM/OiBib29sZWFuICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD47XHJcblxyXG4gICAgICAgIFdpdGhQYXJhbWV0ZXIoIHBhcmFtZXRlcjogQ29yZS5DUGFyYW1ldGVyICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD47XHJcblxyXG4gICAgICAgIFdpdGhQYXJhbWV0ZXJzKCBwYXJhbWV0ZXJzOiBSZWFkb25seUFycmF5PCBDb3JlLkNQYXJhbWV0ZXIgPiApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+O1xyXG5cclxuICAgICAgICBXaXRoUHJvcGVydHkoIHBhcmFtZXRlcjogQ29yZS5DUGFyYW1ldGVyICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD47XHJcblxyXG4gICAgICAgIFdpdGhQcm9wZXJ0aWVzKCBwYXJhbWV0ZXJzOiBSZWFkb25seUFycmF5PCBDb3JlLkNQYXJhbWV0ZXIgPiApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+O1xyXG5cclxuICAgICAgICBPbkFjdGl2YXRpbmcoIGNhbGxiYWNrOiBDb3JlLlVDYWxsYmFja0FjdGl2YXRpbmc8VExpbWl0PiApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+O1xyXG5cclxuICAgICAgICBPbkFjdGl2YXRlZCgpOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+O1xyXG4gICAgfTtcclxufVxyXG5cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENBY3RpdmF0aW5nRXZlbnRBcmdzPCBUID4gaW1wbGVtZW50cyBJQWN0aXZhdGluZ0V2ZW50QXJnczwgVCA+XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBtX2luc3RhbmNlOiBUID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2NvbnRleHQ6IElDb21wb25lbnRDb250ZXh0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3JlZ2lzdHJhdGlvbjogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9wYXJhbWV0ZXJzOiBSZWFkb25seUFycmF5PCBDUGFyYW1ldGVyID4gPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0LFxyXG4gICAgICAgICAgICByZWdpc3RyYXRpb246IElDb21wb25lbnRSZWdpc3RyYXRpb24sXHJcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IFJlYWRvbmx5QXJyYXk8IENQYXJhbWV0ZXIgPixcclxuICAgICAgICAgICAgaW5zdGFuY2U6IFQgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2NvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uID0gcmVnaXN0cmF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1fcGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XHJcbiAgICAgICAgICAgIHRoaXMubV9pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFJlcGxhY2VJbnN0YW5jZSggaW5zdGFuY2U6IG9iamVjdCApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQ29udGV4dCgpOiBJQ29tcG9uZW50Q29udGV4dFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9jb250ZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBSZWdpc3RyYXRpb24oKTogSUNvbXBvbmVudFJlZ2lzdHJhdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9yZWdpc3RyYXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFBhcmFtZXRlcnMoKTogUmVhZG9ubHlBcnJheTwgQ1BhcmFtZXRlciA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3BhcmFtZXRlcnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IEluc3RhbmNlKCk6IFRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1faW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IEluc3RhbmNlKCB2YWx1ZTogVCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHZhbHVlID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiXCIgKTtcclxuICAgICAgICAgICAgdGhpcy5tX2luc3RhbmNlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENDb250YWluZXIgaW1wbGVtZW50cyBJQ29udGFpbmVyXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9yb290TGlmZXRpbWVTY29wZTogSUxpZmV0aW1lU2NvcGUgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9jb21wb25lbnRSZWdpc3RyeTogSUNvbXBvbmVudFJlZ2lzdHJ5ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9jb21wb25lbnRSZWdpc3RyeSA9IG5ldyBSZWdpc3RyYXRpb24uQ0NvbXBvbmVudFJlZ2lzdHJ5KCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9jb21wb25lbnRSZWdpc3RyeS5SZWdpc3RlciggbmV3IFJlZ2lzdHJhdGlvbi5DQ29tcG9uZW50UmVnaXN0cmF0aW9uKFxyXG4gICAgICAgICAgICAgICAgTGlmZXRpbWUuQ0xpZmV0aW1lU2NvcGUuU2VsZlJlZ2lzdHJhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgbmV3IEFjdGl2YXRvcnMuRGVsZWdhdGUuQ0RlbGVnYXRlQWN0aXZhdG9yKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIE9iamVjdCApLCAoKSA9PiB7IHRocm93IG5ldyBFcnJvcigpOyB9ICksXHJcbiAgICAgICAgICAgICAgICBuZXcgTGlmZXRpbWUuQ0N1cnJlbnRTY29wZUxpZmV0aW1lKCksXHJcbiAgICAgICAgICAgICAgICBVSW5zdGFuY2VTaGFyaW5nLlNoYXJlZCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBbIG5ldyBDTGlmZXRpbWVTY29wZVNlcnZpY2UoKSBdLFxyXG4gICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgdGhpcy5tX3Jvb3RMaWZldGltZVNjb3BlID0gbmV3IExpZmV0aW1lLkNMaWZldGltZVNjb3BlKCB0aGlzLm1fY29tcG9uZW50UmVnaXN0cnksIG51bGwsIG51bGwgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldFRhZygpOiBVTGlmZXRpbWVTY29wZVRhZ1R5cGUge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQmVnaW5MaWZldGltZVNjb3BlKHRhZz86IFVMaWZldGltZVNjb3BlVGFnVHlwZSk6IElMaWZldGltZVNjb3BlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9yb290TGlmZXRpbWVTY29wZS5CZWdpbkxpZmV0aW1lU2NvcGUoIHRhZyApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBEaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLm1fcm9vdExpZmV0aW1lU2NvcGUuRGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBDb21wb25lbnRSZWdpc3RyeSgpOiBDb3JlLklDb21wb25lbnRSZWdpc3RyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9jb21wb25lbnRSZWdpc3RyeTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlc29sdmVDb21wb25lbnQocmVnaXN0cmF0aW9uOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uLCBwYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10pOiBvYmplY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcm9vdExpZmV0aW1lU2NvcGUuUmVzb2x2ZUNvbXBvbmVudCggcmVnaXN0cmF0aW9uLCBwYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSZXNvbHZlPFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0Pih0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTxUU2VydmljZT4sIC4uLnBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSk6IFRTZXJ2aWNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3Jvb3RMaWZldGltZVNjb3BlLlJlc29sdmUoIHR5cGUsIC4uLnBhcmFtZXRlcnMgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlc29sdmVOYW1lZDxUU2VydmljZSBleHRlbmRzIG9iamVjdD4oIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPFRTZXJ2aWNlPiwgbmFtZTogc3RyaW5nLCAuLi5wYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10gKTogVFNlcnZpY2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcm9vdExpZmV0aW1lU2NvcGUuUmVzb2x2ZU5hbWVkKCB0eXBlLCBuYW1lLCAuLi5wYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFJlc29sdmVLZXllZDxUU2VydmljZSBleHRlbmRzIG9iamVjdCwgVEtleT4odHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8VFNlcnZpY2U+LCBrZXk6IFRLZXksIC4uLnBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSk6IFRTZXJ2aWNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3Jvb3RMaWZldGltZVNjb3BlLlJlc29sdmVLZXllZCggdHlwZSwga2V5LCAuLi5wYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0RGlzcG9zZXIoKTogSURpc3Bvc2VyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3Jvb3RMaWZldGltZVNjb3BlLkdldERpc3Bvc2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0RlZmF1bHRQcm9wZXJ0eVNlbGVjdG9yIGltcGxlbWVudHMgSVByb3BlcnR5U2VsZWN0b3JcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9wcmVzZXJ2ZVNldFZhbHVlczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHByZXNlcnZlU2V0VmFsdWVzPzogYm9vbGVhbiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fcHJlc2VydmVTZXRWYWx1ZXMgPSAoIHByZXNlcnZlU2V0VmFsdWVzID09IHRydWUgKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFByb3ZpZGVzIGRlZmF1bHQgZmlsdGVyaW5nIHRvIGRldGVybWluZSBpZiBwcm9wZXJ0eSBzaG91bGQgYmUgaW5qZWN0ZWQgYnkgcmVqZWN0aW5nXHJcbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5SW5mbyBcclxuICAgICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIEluamVjdFByb3BlcnR5KCBwcm9wZXJ0eUluZm86IFN5c3RlbS5SZWZsZWN0aW9uLkNQcm9wZXJ0eUluZm8sIGluc3RhbmNlOiBvYmplY3QgKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eUluZm8uQ2FuV3JpdGUgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX3ByZXNlcnZlU2V0VmFsdWVzID09IHRydWUgJiYgcHJvcGVydHlJbmZvLkNhblJlYWQgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHlJbmZvLkdldFZhbHVlKCBpbnN0YW5jZSApID09IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDRGVsZWdhdGVQcm9wZXJ0eVNlbGVjdG9yIGltcGxlbWVudHMgSVByb3BlcnR5U2VsZWN0b3JcclxuICAgIHtcclxuICAgICAgICBJbmplY3RQcm9wZXJ0eSggcHJvcGVydHlJbmZvOiBTeXN0ZW0uUmVmbGVjdGlvbi5DUHJvcGVydHlJbmZvLCBpbnN0YW5jZTogb2JqZWN0ICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0Rpc3Bvc2VyIGltcGxlbWVudHMgSURpc3Bvc2VyXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBtX2l0ZW1zOiBTeXN0ZW0uSURpc3Bvc2FibGVbXSA9IFtdO1xyXG5cclxuICAgICAgICBBZGRJbnN0YW5jZUZvckRpc3Bvc2FsKGluc3RhbmNlOiBTeXN0ZW0uSURpc3Bvc2FibGUpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5tX2l0ZW1zLnB1c2goIGluc3RhbmNlICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIERpc3Bvc2UoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICggY29uc3QgaXRlbSBvZiB0aGlzLm1faXRlbXMgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLkRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1faXRlbXMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDU2VydmljZSBpbXBsZW1lbnRzIFN5c3RlbS5JRXF1YXRhYmxlPCBDU2VydmljZSA+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEVxdWFscyhvdGhlcjogQ1NlcnZpY2UpOiBib29sZWFuO1xyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NTZXJ2aWNlLnRzXCIgLz5cclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENLZXllZFNlcnZpY2UgZXh0ZW5kcyBDU2VydmljZSBpbXBsZW1lbnRzIElTZXJ2aWNlV2l0aFR5cGVcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fc2VydmljZVR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2tleTogYW55ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBzZXJ2aWNlS2V5OiBhbnksIHNlcnZpY2VUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1fa2V5ID0gc2VydmljZUtleTtcclxuICAgICAgICAgICAgdGhpcy5tX3NlcnZpY2VUeXBlID0gc2VydmljZVR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXRTZXJ2aWNlVHlwZSgpOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9zZXJ2aWNlVHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENoYW5nZVR5cGUobmV3VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8b2JqZWN0Pik6IENTZXJ2aWNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBFcXVhbHMoIG90aGVyOiBDS2V5ZWRTZXJ2aWNlICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggb3RoZXIubV9zZXJ2aWNlVHlwZSA9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIG90aGVyLm1fa2V5ID09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkdldFR5cGUoKS5Jc0VxdWl2YWxlbnRUbyggb3RoZXIuR2V0VHlwZSgpICkgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zZXJ2aWNlVHlwZS5Jc0VxdWl2YWxlbnRUbyggb3RoZXIubV9zZXJ2aWNlVHlwZSApICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbXBhcmVLZXlzKCB0aGlzLm1fa2V5LCBvdGhlci5tX2tleSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBDb21wYXJlS2V5cyggazE6IGFueSwgazI6IGFueSApOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIGsxID09PSBrMiApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCAoPFN5c3RlbS5JRXF1YXRhYmxlPGFueT4+azEpLkVxdWFscyAhPSB1bmRlZmluZWQgJiYgKDxTeXN0ZW0uSUVxdWF0YWJsZTxhbnk+PmsyKS5FcXVhbHMgIT0gdW5kZWZpbmVkICYmICg8U3lzdGVtLklFcXVhdGFibGU8YW55Pj5rMSkuRXF1YWxzKCBrMiApIClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENMaWZldGltZVNjb3BlU2VydmljZSBleHRlbmRzIENTZXJ2aWNlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRXF1YWxzKCBvdGhlcjogQ0xpZmV0aW1lU2NvcGVTZXJ2aWNlICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBvdGhlciBpbnN0YW5jZW9mIENMaWZldGltZVNjb3BlU2VydmljZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NDb25zdGFudFBhcmFtZXRlci50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDTmFtZWRQcm9wZXJ0eVBhcmFtZXRlciBleHRlbmRzIENDb25zdGFudFBhcmFtZXRlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nLCB2YWx1ZTogb2JqZWN0IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCB2YWx1ZSwgcGkgPT4gdHJ1ZSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDUmVzb2x2ZWRQYXJhbWV0ZXIgZXh0ZW5kcyBDUGFyYW1ldGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIENhblN1cHBseVZhbHVlKHBpOiBTeXN0ZW0uUmVmbGVjdGlvbi5DUGFyYW1ldGVySW5mbywgY29udGV4dDogSUNvbXBvbmVudENvbnRleHQpOiB7IHJldDogYm9vbGVhbjsgdmFsdWVQcm92aWRlcj86ICgpID0+IG9iamVjdDsgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1NlcnZpY2VFcXVhbGl0eUNvbXBhcmVyIGltcGxlbWVudHMgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVxdWFsaXR5Q29tcGFyZXI8IENTZXJ2aWNlID5cclxuICAgIHtcclxuICAgICAgICBFcXVhbHMoYTogQ1NlcnZpY2UsIGI6IENTZXJ2aWNlKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEuRXF1YWxzKCBiICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENUeXBlZFNlcnZpY2UgZXh0ZW5kcyBDU2VydmljZSBpbXBsZW1lbnRzIElTZXJ2aWNlV2l0aFR5cGVcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fc2VydmljZVR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBzZXJ2aWNlVHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5tX3NlcnZpY2VUeXBlID0gc2VydmljZVR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0U2VydmljZVR5cGUoKTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fc2VydmljZVR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQ2hhbmdlVHlwZSggbmV3VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKTogQ1NlcnZpY2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEVxdWFscyggb3RoZXI6IENUeXBlZFNlcnZpY2UgKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBvdGhlci5tX3NlcnZpY2VUeXBlID09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkdldFR5cGUoKS5Jc0VxdWl2YWxlbnRUbyggb3RoZXIuR2V0VHlwZSgpICkgJiYgdGhpcy5tX3NlcnZpY2VUeXBlLklzRXF1aXZhbGVudFRvKCBvdGhlci5tX3NlcnZpY2VUeXBlICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICB2YXIgZ2VuSUQgPSAwO1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEdlbklEKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGdlbklEICsrO1xyXG4gICAgICAgIHJldHVybiBnZW5JRC50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBlbnVtIFVJbnN0YW5jZVNoYXJpbmdcclxuICAgIHtcclxuICAgICAgICBOb25lLFxyXG4gICAgICAgIFNoYXJlZCxcclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlLkxpZmV0aW1lXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDQ3VycmVudFNjb3BlTGlmZXRpbWUgaW1wbGVtZW50cyBJQ29tcG9uZW50TGlmZXRpbWVcclxuICAgIHtcclxuICAgICAgICBGaW5kU2NvcGUobW9zdE5lc3RlZFZpc2libGVTY29wZTogSVNoYXJpbmdMaWZldGltZVNjb3BlKTogSVNoYXJpbmdMaWZldGltZVNjb3BlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9zdE5lc3RlZFZpc2libGVTY29wZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZS5MaWZldGltZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0xpZmV0aW1lU2NvcGUgaW1wbGVtZW50cyBJU2hhcmluZ0xpZmV0aW1lU2NvcGVcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fY29tcG9uZW50UmVnaXN0cnk6IElDb21wb25lbnRSZWdpc3RyeSA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2xpZmV0aW1lU2NvcGVSb290OiBJU2hhcmluZ0xpZmV0aW1lU2NvcGUgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9saWZldGltZVNjb3BlUGFyZW50OiBJU2hhcmluZ0xpZmV0aW1lU2NvcGUgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV90YWc6IFVMaWZldGltZVNjb3BlVGFnVHlwZSA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2Rpc3Bvc2VyOiBJRGlzcG9zZXIgPSBuZXcgQ0Rpc3Bvc2VyKCk7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9zaGFyZWRJbnN0YW5jZXM6IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklEaWN0aW9uYXJ5PCBzdHJpbmcsIG9iamVjdCA+ID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkNEaWN0aW9uYXJ5KCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU2VsZlJlZ2lzdHJhdGlvbklkID0gQ29yZS5HZW5JRCgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGNvbXBvbmVudFJlZ2lzdHJ5OiBJQ29tcG9uZW50UmVnaXN0cnksIGxpZmV0aW1lU2NvcGVQYXJlbnQ6IENMaWZldGltZVNjb3BlLCB0YWc6IFVMaWZldGltZVNjb3BlVGFnVHlwZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50UmVnaXN0cnkgPSBjb21wb25lbnRSZWdpc3RyeTtcclxuICAgICAgICAgICAgdGhpcy5tX2xpZmV0aW1lU2NvcGVQYXJlbnQgPSBsaWZldGltZVNjb3BlUGFyZW50O1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV9saWZldGltZVNjb3BlUGFyZW50ID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fbGlmZXRpbWVTY29wZVJvb3QgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3RhZyA9IENMaWZldGltZVNjb3BlLlJvb3RUYWc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRhZyA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9saWZldGltZVNjb3BlUm9vdCA9IGxpZmV0aW1lU2NvcGVQYXJlbnQuR2V0Um9vdExpZmV0aW1lU2NvcGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubV90YWcgPSB0YWc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOS/neWtmOiHquW3seeahElEXHJcbiAgICAgICAgICAgIHRoaXMubV9zaGFyZWRJbnN0YW5jZXMuQWRkKCBDTGlmZXRpbWVTY29wZS5TZWxmUmVnaXN0cmF0aW9uSWQsIHRoaXMgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFJvb3RUYWc6IFVMaWZldGltZVNjb3BlVGFnVHlwZSA9IFwicm9vdFwiO1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBNYWtlQW5vbnltb3VzVGFnKCk6IFVMaWZldGltZVNjb3BlVGFnVHlwZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFN5bWJvbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFBhcmVudExpZmV0aW1lU2NvcGUoKTogSVNoYXJpbmdMaWZldGltZVNjb3BlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2xpZmV0aW1lU2NvcGVQYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0Um9vdExpZmV0aW1lU2NvcGUoKTogSVNoYXJpbmdMaWZldGltZVNjb3BlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2xpZmV0aW1lU2NvcGVSb290O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldE9yQ3JlYXRlQW5kU2hhcmUoIGlkOiBzdHJpbmcsIGNyZWF0b3I6IFN5c3RlbS5UQ2FsbGJhY2s8ICgpID0+IG9iamVjdCA+ICk6IG9iamVjdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gdGhpcy5tX3NoYXJlZEluc3RhbmNlcy5HZXQoIGlkICk7XHJcbiAgICAgICAgICAgIGlmICggaW5zdGFuY2UgIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcblxyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IGNyZWF0b3IuRXhlY3V0ZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tX3NoYXJlZEluc3RhbmNlcy5BZGQoIGlkLCBpbnN0YW5jZSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEJlZ2luTGlmZXRpbWVTY29wZSggdGFnPzogVUxpZmV0aW1lU2NvcGVUYWdUeXBlICk6IElMaWZldGltZVNjb3BlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRhZyA9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5CZWdpbkxpZmV0aW1lU2NvcGUoIENMaWZldGltZVNjb3BlLk1ha2VBbm9ueW1vdXNUYWcoKSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLkNoZWNrVGFnSXNVbmlxdWUoIHRhZyApO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNjb3BlID0gbmV3IENMaWZldGltZVNjb3BlKCB0aGlzLm1fY29tcG9uZW50UmVnaXN0cnksIHRoaXMsIHRhZyApO1xyXG4gICAgICAgICAgICByZXR1cm4gc2NvcGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBnZXQgQ29tcG9uZW50UmVnaXN0cnkoKTogSUNvbXBvbmVudFJlZ2lzdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2NvbXBvbmVudFJlZ2lzdHJ5O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBSZXNvbHZlQ29tcG9uZW50KHJlZ2lzdHJhdGlvbjogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiwgcGFyYW1ldGVyczogQ1BhcmFtZXRlcltdKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkNoZWNrTm90RGlzcG9zZWQoKTtcclxuICAgICAgICAgICAgbGV0IG9wZXJhdGlvbiA9IG5ldyBSZXNvbHZpbmcuQ1Jlc29sdmVPcGVyYXRpb24oIHRoaXMgKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wZXJhdGlvbi5FeGVjdXRlKCByZWdpc3RyYXRpb24sIHBhcmFtZXRlcnMgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlc29sdmU8VFNlcnZpY2UgZXh0ZW5kcyBvYmplY3Q+KCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTxUU2VydmljZT4sIC4uLnBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSApOiBUU2VydmljZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJldCA9IHRoaXMuVHJ5UmVzb2x2ZVNlcnZpY2UoIG5ldyBDVHlwZWRTZXJ2aWNlKCB0eXBlICksIHBhcmFtZXRlcnMgKTtcclxuICAgICAgICAgICAgaWYgKCByZXQuc3VjY2VlZCA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggYENhbid0IHJlc29sdmUgaW5zdGFuY2Ugb2YgdHlwZSAoJHt0eXBlLkdldE5pY2tuYW1lKCl9KWAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPFRTZXJ2aWNlPnJldC5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlc29sdmVOYW1lZDxUU2VydmljZSBleHRlbmRzIG9iamVjdD4oIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPFRTZXJ2aWNlPiwgbmFtZTogc3RyaW5nLCAuLi5wYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10gKTogVFNlcnZpY2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSB0aGlzLlRyeVJlc29sdmVTZXJ2aWNlKCBuZXcgQ0tleWVkU2VydmljZSggbmFtZSwgdHlwZSApLCBwYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgICAgIGlmICggcmV0LnN1Y2NlZWQgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPFRTZXJ2aWNlPnJldC5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlc29sdmVLZXllZDxUU2VydmljZSBleHRlbmRzIG9iamVjdCwgVEtleT4oIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPFRTZXJ2aWNlPiwga2V5OiBUS2V5LCAuLi5wYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10gKTogVFNlcnZpY2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSB0aGlzLlRyeVJlc29sdmVTZXJ2aWNlKCBuZXcgQ0tleWVkU2VydmljZSgga2V5LCB0eXBlICksIHBhcmFtZXRlcnMgKTtcclxuICAgICAgICAgICAgaWYgKCByZXQuc3VjY2VlZCA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiA8VFNlcnZpY2U+cmV0Lmluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBUcnlSZXNvbHZlU2VydmljZSggc2VydmljZTogQ1NlcnZpY2UsIHBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSApOiB7IHN1Y2NlZWQ6IGJvb2xlYW4sIGluc3RhbmNlPzogb2JqZWN0IH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZWdpc3RyYXRpb24gPSB0aGlzLkNvbXBvbmVudFJlZ2lzdHJ5LkdldFJlZ2lzdHJhdGlvbiggc2VydmljZSApO1xyXG4gICAgICAgICAgICBpZiAoIHJlZ2lzdHJhdGlvbiA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZWVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3VjY2VlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlOiB0aGlzLlJlc29sdmVDb21wb25lbnQoIHJlZ2lzdHJhdGlvbiwgcGFyYW1ldGVycyApXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGlzcG9zZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fZGlzcG9zZXIuRGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1fc2hhcmVkSW5zdGFuY2VzLkNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0VGFnKCkgOiBVTGlmZXRpbWVTY29wZVRhZ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fdGFnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBDaGVja1RhZ0lzVW5pcXVlKCB0YWc6IFVMaWZldGltZVNjb3BlVGFnVHlwZSApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc2NvcGVQYXJlbnQ6IElTaGFyaW5nTGlmZXRpbWVTY29wZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIHdoaWxlICggc2NvcGVQYXJlbnQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHNjb3BlUGFyZW50LkdldFRhZygpID09IHRhZyApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIlwiICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzY29wZVBhcmVudCA9IHNjb3BlUGFyZW50LkdldFBhcmVudExpZmV0aW1lU2NvcGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBDaGVja05vdERpc3Bvc2VkKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0RGlzcG9zZXIoKTogSURpc3Bvc2VyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2Rpc3Bvc2VyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlLkxpZmV0aW1lXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDTWF0Y2hpbmdTY29wZUxpZmV0aW1lIGltcGxlbWVudHMgSUNvbXBvbmVudExpZmV0aW1lXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3RhZ1RvTWF0Y2g6IFVMaWZldGltZVNjb3BlVGFnVHlwZVtdID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCAuLi5zY29wZVRhZzogVUxpZmV0aW1lU2NvcGVUYWdUeXBlW10gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3RhZ1RvTWF0Y2ggPSBzY29wZVRhZztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgRmluZFNjb3BlKG1vc3ROZXN0ZWRWaXNpYmxlU2NvcGU6IElTaGFyaW5nTGlmZXRpbWVTY29wZSk6IElTaGFyaW5nTGlmZXRpbWVTY29wZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG5leHQgPSBtb3N0TmVzdGVkVmlzaWJsZVNjb3BlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIG5leHQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMubV90YWdUb01hdGNoLmluZGV4T2YoIG5leHQuR2V0VGFnKCkgKSA+PSAwIClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcclxuICAgICAgICAgICAgICAgIG5leHQgPSBuZXh0LkdldFBhcmVudExpZmV0aW1lU2NvcGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZS5MaWZldGltZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1Jvb3RTY29wZUxpZmV0aW1lIGltcGxlbWVudHMgSUNvbXBvbmVudExpZmV0aW1lXHJcbiAgICB7XHJcbiAgICAgICAgRmluZFNjb3BlKG1vc3ROZXN0ZWRWaXNpYmxlU2NvcGU6IElTaGFyaW5nTGlmZXRpbWVTY29wZSk6IElTaGFyaW5nTGlmZXRpbWVTY29wZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vc3ROZXN0ZWRWaXNpYmxlU2NvcGUuR2V0Um9vdExpZmV0aW1lU2NvcGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJcclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmUuUmVnaXN0cmF0aW9uXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDQ29tcG9uZW50UmVnaXN0cmF0aW9uIGltcGxlbWVudHMgSUNvbXBvbmVudFJlZ2lzdHJhdGlvblxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgbV9pZDogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgbV9hY3RpdmF0b3I6IElJbnN0YW5jZUFjdGl2YXRvcjtcclxuICAgICAgICBwcml2YXRlIG1fbGlmZXRpbWU6IElDb21wb25lbnRMaWZldGltZTtcclxuICAgICAgICBwcml2YXRlIG1fc2hhcmluZzogVUluc3RhbmNlU2hhcmluZztcclxuICAgICAgICBwcml2YXRlIG1fb3duZXJzaGlwOiBhbnk7XHJcbiAgICAgICAgcHJpdmF0ZSBtX3NlcnZpY2VzOiBSZWFkb25seUFycmF5PCBDU2VydmljZSA+O1xyXG4gICAgICAgIHByaXZhdGUgbV9tZXRhZGF0YTogeyBbIGtleTogc3RyaW5nIF06IG9iamVjdCB9O1xyXG4gICAgICAgIHByaXZhdGUgbV90YXJnZXQ6IElDb21wb25lbnRSZWdpc3RyYXRpb247XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9hY3RpdmF0aW5nSGFuZGxlcnM6IFN5c3RlbS5UQ2FsbGJhY2tBcnJheTwgKCBzZW5kZXI6IGFueSwgZTogQ29yZS5JQWN0aXZhdGluZ0V2ZW50QXJnczxvYmplY3Q+ICkgPT4gdm9pZCA+ID0gbmV3IFN5c3RlbS5UQ2FsbGJhY2tBcnJheSgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGFjdGl2YXRvcjogSUluc3RhbmNlQWN0aXZhdG9yLFxyXG4gICAgICAgICAgICBsaWZldGltZTogSUNvbXBvbmVudExpZmV0aW1lLFxyXG4gICAgICAgICAgICBzaGFyaW5nOiBVSW5zdGFuY2VTaGFyaW5nLFxyXG4gICAgICAgICAgICBvd25lcnNoaXA6IGFueSxcclxuICAgICAgICAgICAgc2VydmljZXM6IFJlYWRvbmx5QXJyYXk8IENTZXJ2aWNlID4sXHJcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7IFsga2V5OiBzdHJpbmcgXTogb2JqZWN0IH0sXHJcbiAgICAgICAgICAgIHRhcmdldD86IElDb21wb25lbnRSZWdpc3RyYXRpb24gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2lkID0gaWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9hY3RpdmF0b3IgPSBhY3RpdmF0b3I7XHJcbiAgICAgICAgICAgIHRoaXMubV9saWZldGltZSA9IGxpZmV0aW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fc2hhcmluZyA9IHNoYXJpbmc7XHJcbiAgICAgICAgICAgIHRoaXMubV9vd25lcnNoaXAgPSBvd25lcnNoaXA7XHJcbiAgICAgICAgICAgIHRoaXMubV9zZXJ2aWNlcyA9IHNlcnZpY2VzO1xyXG4gICAgICAgICAgICB0aGlzLm1fbWV0YWRhdGEgPSBtZXRhZGF0YTtcclxuICAgICAgICAgICAgdGhpcy5tX3RhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgSUQoKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2lkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBBY3RpdmF0b3IoKTogSUluc3RhbmNlQWN0aXZhdG9yXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2FjdGl2YXRvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgTGlmZXRpbWUoKTogSUNvbXBvbmVudExpZmV0aW1lXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2xpZmV0aW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBTaGFyaW5nKCk6IFVJbnN0YW5jZVNoYXJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fc2hhcmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgU2VydmljZXMoKTogUmVhZG9ubHlBcnJheTwgQ1NlcnZpY2UgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9zZXJ2aWNlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgTWV0YWR0YSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX21ldGFkYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBUYXJnZXQoKTogSUNvbXBvbmVudFJlZ2lzdHJhdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV90YXJnZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFByZXBhcmluZygpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSYWlzZVByZXBhcmluZyhjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCwgcGFyYW1ldGVyczogQXJyYXk8IGFueSA+KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IEFjdGl2YXRpbmcoKTogU3lzdGVtLlRDYWxsYmFja0FycmF5PCAoIHNlbmRlcjogYW55LCBlOiBDb3JlLklBY3RpdmF0aW5nRXZlbnRBcmdzPG9iamVjdD4gKSA9PiB2b2lkID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fYWN0aXZhdGluZ0hhbmRsZXJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFJhaXNlQWN0aXZhdGluZyhjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCwgcGFyYW1ldGVyczogUmVhZG9ubHlBcnJheTwgQ1BhcmFtZXRlciA+LCBpbnN0YW5jZTogb2JqZWN0ICk6IG9iamVjdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGFyZ3MgPSBuZXcgQ0FjdGl2YXRpbmdFdmVudEFyZ3MoIGNvbnRleHQsIHRoaXMsIHBhcmFtZXRlcnMsIGluc3RhbmNlICk7XHJcbiAgICAgICAgICAgIHRoaXMuQWN0aXZhdGluZy5FeGVjdXRlKCB0aGlzLCBhcmdzICk7XHJcbiAgICAgICAgICAgIHJldHVybiBhcmdzLkluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBBY3RpdmF0ZWQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSYWlzZUFjdGl2YXRlZChjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCwgcGFyYW1ldGVyczogUmVhZG9ubHlBcnJheTwgQ1BhcmFtZXRlciA+LCBpbnN0YW5jZTogb2JqZWN0KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEaXNwb3NlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlLlJlZ2lzdHJhdGlvblxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0NvbXBvbmVudFJlZ2lzdHJ5IGltcGxlbWVudHMgSUNvbXBvbmVudFJlZ2lzdHJ5XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3JlZ2lzdHJhdGlvbnM6IElDb21wb25lbnRSZWdpc3RyYXRpb25bXSA9IFtdO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fc2VydmljZUluZm86IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklEaWN0aW9uYXJ5PCBDU2VydmljZSwgQ1NlcnZpY2VSZWdpc3RyYXRpb25JbmZvID4gPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuQ0RpY3Rpb25hcnk8IENTZXJ2aWNlLCBDU2VydmljZVJlZ2lzdHJhdGlvbkluZm8gPiggeyBjb21wYXJlcjogbmV3IENTZXJ2aWNlRXF1YWxpdHlDb21wYXJlcigpIH0gKTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEdldFByb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0ge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgR2V0UmVnaXN0cmF0aW9uKHNlcnZpY2U6IENTZXJ2aWNlKTogSUNvbXBvbmVudFJlZ2lzdHJhdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGluZm8gPSB0aGlzLm1fc2VydmljZUluZm8uR2V0KCBzZXJ2aWNlICk7XHJcbiAgICAgICAgICAgIGlmICggaW5mbyA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50UmVnaXN0cmF0aW9uID0gaW5mby5HZXRSZWdpc3RyYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlZ2lzdHJhdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIElzUmVnaXN0ZXJlZChzZXJ2aWNlOiBDU2VydmljZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlZ2lzdGVyKCByZWdpc3RyYXRpb246IElDb21wb25lbnRSZWdpc3RyYXRpb24sIHByZXNlcnZlRGVmYXVsdHM/OiBib29sZWFuICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuQWRkUmVnaXN0cmF0aW9uKCByZWdpc3RyYXRpb24sIHByZXNlcnZlRGVmYXVsdHMgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldFJlZ2lzdHJhdGlvbnMoKTogQXJyYXk8IElDb21wb25lbnRSZWdpc3RyYXRpb24gPiB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR2V0UmVnaXN0cmF0aW9uc0ZvcihzZXJ2aWNlOiBDU2VydmljZSk6IEFycmF5PCBJQ29tcG9uZW50UmVnaXN0cmF0aW9uID4ge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFkZFJlZ2lzdHJhdGlvblNvdXJjZShzb3VyY2U6IElSZWdpc3RyYXRpb25Tb3VyY2UpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXRSZWdpc3RyYXRpb25Tb3VyY2VzKCk6IEFycmF5PCBJUmVnaXN0cmF0aW9uU291cmNlID4ge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEhhc0xvY2FsQ29tcG9uZW50cygpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgQWRkUmVnaXN0cmF0aW9uKCByZWdpc3RyYXRpb246IElDb21wb25lbnRSZWdpc3RyYXRpb24sIHByZXNlcnZlRGVmYXVsdHM6IGJvb2xlYW4sIG9yaWdpbmF0ZWRGcm9tU291cmNlOiBib29sZWFuID0gZmFsc2UgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHNlcnZpY2VzID0gcmVnaXN0cmF0aW9uLlNlcnZpY2VzO1xyXG4gICAgICAgICAgICBmb3IgKCBjb25zdCBzIG9mIHNlcnZpY2VzIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZm8gPSB0aGlzLkdldFNlcnZpY2VJbmZvKCBzICk7XHJcbiAgICAgICAgICAgICAgICBpbmZvLkFkZEltcGxlbWVudGF0aW9uKCByZWdpc3RyYXRpb24sIHByZXNlcnZlRGVmYXVsdHMsIG9yaWdpbmF0ZWRGcm9tU291cmNlICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tX3JlZ2lzdHJhdGlvbnMucHVzaCggcmVnaXN0cmF0aW9uICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIEdldFNlcnZpY2VJbmZvKCBzZXJ2aWNlOiBDU2VydmljZSApOiBDU2VydmljZVJlZ2lzdHJhdGlvbkluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpbmZvID0gdGhpcy5tX3NlcnZpY2VJbmZvLkdldCggc2VydmljZSApO1xyXG4gICAgICAgICAgICBpZiAoIGluZm8gIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5mbztcclxuICAgICAgICAgICAgaW5mbyA9IG5ldyBDU2VydmljZVJlZ2lzdHJhdGlvbkluZm8oIHNlcnZpY2UgKTtcclxuICAgICAgICAgICAgdGhpcy5tX3NlcnZpY2VJbmZvLkFkZCggc2VydmljZSwgaW5mbyApO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5mbztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZS5SZWdpc3RyYXRpb25cclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENTZXJ2aWNlUmVnaXN0cmF0aW9uSW5mb1xyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9zZXJ2aWNlOiBDU2VydmljZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9kZWZhdWx0SW1wbGVtZW50YXRpb25zOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uW10gPSBbXTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX3ByZXNlcnZlRGVmYXVsdEltcGxlbWVudGF0aW9uczogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbltdID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX3NvdXJjZUltcGxlbWVudGF0aW9uczogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbltdID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBzZXJ2aWNlOiBDU2VydmljZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQWRkSW1wbGVtZW50YXRpb24oIHJlZ2lzdHJhdGlvbjogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiwgcHJlc2VydmVEZWZhdWx0czogYm9vbGVhbiwgb3JpZ2luYXRlZEZyb21Tb3VyY2U6IGJvb2xlYW4gKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBwcmVzZXJ2ZURlZmF1bHRzID09IHRydWUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIG9yaWdpbmF0ZWRGcm9tU291cmNlID09IHRydWUgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5tX3NvdXJjZUltcGxlbWVudGF0aW9ucyA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubV9zb3VyY2VJbXBsZW1lbnRhdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9zb3VyY2VJbXBsZW1lbnRhdGlvbnMucHVzaCggcmVnaXN0cmF0aW9uICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLm1fcHJlc2VydmVEZWZhdWx0SW1wbGVtZW50YXRpb25zID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tX3ByZXNlcnZlRGVmYXVsdEltcGxlbWVudGF0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX3ByZXNlcnZlRGVmYXVsdEltcGxlbWVudGF0aW9ucy5wdXNoKCByZWdpc3RyYXRpb24gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggb3JpZ2luYXRlZEZyb21Tb3VyY2UgPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2RlZmF1bHRJbXBsZW1lbnRhdGlvbnMucHVzaCggcmVnaXN0cmF0aW9uICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRSZWdpc3RyYXRpb24oKTogSUNvbXBvbmVudFJlZ2lzdHJhdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudFJlZ2lzdHJhdGlvbjogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV9kZWZhdWx0SW1wbGVtZW50YXRpb25zICE9IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMubV9kZWZhdWx0SW1wbGVtZW50YXRpb25zLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFJlZ2lzdHJhdGlvbiA9IHRoaXMubV9kZWZhdWx0SW1wbGVtZW50YXRpb25zWyB0aGlzLm1fZGVmYXVsdEltcGxlbWVudGF0aW9ucy5sZW5ndGggLSAxIF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggY29tcG9uZW50UmVnaXN0cmF0aW9uID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMubV9zb3VyY2VJbXBsZW1lbnRhdGlvbnMgIT0gbnVsbCAmJiB0aGlzLm1fc291cmNlSW1wbGVtZW50YXRpb25zLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFJlZ2lzdHJhdGlvbiA9IHRoaXMubV9zb3VyY2VJbXBsZW1lbnRhdGlvbnNbIDAgXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBjb21wb25lbnRSZWdpc3RyYXRpb24gPT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5tX3ByZXNlcnZlRGVmYXVsdEltcGxlbWVudGF0aW9ucyAhPSBudWxsICYmIHRoaXMubV9wcmVzZXJ2ZURlZmF1bHRJbXBsZW1lbnRhdGlvbnMubGVuZ3RoID4gMCApXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UmVnaXN0cmF0aW9uID0gdGhpcy5tX3ByZXNlcnZlRGVmYXVsdEltcGxlbWVudGF0aW9uc1sgMCBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50UmVnaXN0cmF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmUuUmVzb2x2aW5nXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDSW5zdGFuY2VMb29rdXAgaW1wbGVtZW50cyBJQ29tcG9uZW50Q29udGV4dCwgSUluc3RhbmNlTG9va3VwXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3JlZ2lzdHJhdGlvbjogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9jb250ZXh0OiBJUmVzb2x2ZU9wZXJhdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9hY3RpdmF0aW9uU2NvcGU6IElTaGFyaW5nTGlmZXRpbWVTY29wZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9wYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10gPSBudWxsO1xyXG5cclxuICAgICAgICBwcml2YXRlIG1fZXhlY3V0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX25ld0luc3RhbmNlOiBvYmplY3QgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvbjogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbixcclxuICAgICAgICAgICAgY29udGV4dDogSVJlc29sdmVPcGVyYXRpb24sXHJcbiAgICAgICAgICAgIG1vc3ROZXN0ZWRWaXNpYmxlU2NvcGU6IElTaGFyaW5nTGlmZXRpbWVTY29wZSxcclxuICAgICAgICAgICAgcGFyYW1ldGVyczogQ1BhcmFtZXRlcltdXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3JlZ2lzdHJhdGlvbiA9IHJlZ2lzdHJhdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5tX2NvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLm1fcGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XHJcbiAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fYWN0aXZhdGlvblNjb3BlID0gdGhpcy5tX3JlZ2lzdHJhdGlvbi5MaWZldGltZS5GaW5kU2NvcGUoIG1vc3ROZXN0ZWRWaXNpYmxlU2NvcGUgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoIGUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXRDb21wb25lbnRSZWdpc3RyYXRpb24oKTogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcmVnaXN0cmF0aW9uXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXRBY3RpdmF0aW9uU2NvcGUoKTogSUxpZmV0aW1lU2NvcGUge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2FjdGl2YXRpb25TY29wZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldFBhcmFtZXRlcnMoKTogQ1BhcmFtZXRlcltdIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9wYXJhbWV0ZXJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBDb21wb25lbnRSZWdpc3RyeSgpOiBJQ29tcG9uZW50UmVnaXN0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fYWN0aXZhdGlvblNjb3BlLkNvbXBvbmVudFJlZ2lzdHJ5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmVzb2x2ZUNvbXBvbmVudChyZWdpc3RyYXRpb246IElDb21wb25lbnRSZWdpc3RyYXRpb24sIHBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSk6IG9iamVjdCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY29udGV4dC5HZXRPckNyZWF0ZUluc3RhbmNlKCB0aGlzLm1fYWN0aXZhdGlvblNjb3BlLCByZWdpc3RyYXRpb24sIHBhcmFtZXRlcnMgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEV4ZWN1dGUoKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV9leGVjdXRlZCA9PSB0cnVlIClcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tX2V4ZWN1dGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbnN0YW5jZTogYW55ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX3JlZ2lzdHJhdGlvbi5TaGFyaW5nID09IFVJbnN0YW5jZVNoYXJpbmcuTm9uZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5BY3RpdmF0ZSggdGhpcy5tX3BhcmFtZXRlcnMgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5tX2FjdGl2YXRpb25TY29wZS5HZXRPckNyZWF0ZUFuZFNoYXJlKCB0aGlzLm1fcmVnaXN0cmF0aW9uLklELCB0aGlzLl9fQ2FsbGJhY2soICgpID0+IHRoaXMuQWN0aXZhdGUoIHRoaXMubV9wYXJhbWV0ZXJzICkgKSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIEFjdGl2YXRlKCBwYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10gKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX25ld0luc3RhbmNlID0gdGhpcy5tX3JlZ2lzdHJhdGlvbi5BY3RpdmF0b3IuQWN0aXZhdGVJbnN0YW5jZSggdGhpcywgcGFyYW1ldGVycyApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnJvcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGRpc3Bvc2VcclxuICAgICAgICAgICAgaWYgKCAoPGFueT50aGlzLm1fbmV3SW5zdGFuY2UpWyBcIkRpc3Bvc2VcIiBdICE9IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9hY3RpdmF0aW9uU2NvcGUuR2V0RGlzcG9zZXIoKS5BZGRJbnN0YW5jZUZvckRpc3Bvc2FsKCA8YW55PnRoaXMubV9uZXdJbnN0YW5jZSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1fbmV3SW5zdGFuY2UgPSB0aGlzLm1fcmVnaXN0cmF0aW9uLlJhaXNlQWN0aXZhdGluZyggdGhpcywgcGFyYW1ldGVycywgdGhpcy5tX25ld0luc3RhbmNlICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX25ld0luc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlLlJlc29sdmluZ1xyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1Jlc29sdmVPcGVyYXRpb24gaW1wbGVtZW50cyBJQ29tcG9uZW50Q29udGV4dCwgSVJlc29sdmVPcGVyYXRpb25cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fbW9zdE5lc3RlZExpZmV0aW1lU2NvcGU6IElTaGFyaW5nTGlmZXRpbWVTY29wZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbW9zdE5lc3RlZExpZmV0aW1lU2NvcGU6IElTaGFyaW5nTGlmZXRpbWVTY29wZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fbW9zdE5lc3RlZExpZmV0aW1lU2NvcGUgPSBtb3N0TmVzdGVkTGlmZXRpbWVTY29wZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQ29tcG9uZW50UmVnaXN0cnkoKTogSUNvbXBvbmVudFJlZ2lzdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX21vc3ROZXN0ZWRMaWZldGltZVNjb3BlLkNvbXBvbmVudFJlZ2lzdHJ5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmVzb2x2ZUNvbXBvbmVudChyZWdpc3RyYXRpb246IElDb21wb25lbnRSZWdpc3RyYXRpb24sIHBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSk6IG9iamVjdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuR2V0T3JDcmVhdGVJbnN0YW5jZSggdGhpcy5tX21vc3ROZXN0ZWRMaWZldGltZVNjb3BlLCByZWdpc3RyYXRpb24sIHBhcmFtZXRlcnMgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEV4ZWN1dGUoIHJlZ2lzdHJhdGlvbjogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiwgcGFyYW1ldGVyczogQ1BhcmFtZXRlcltdICk6IG9iamVjdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0gbnVsbDtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuUmVzb2x2ZUNvbXBvbmVudCggcmVnaXN0cmF0aW9uLCBwYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKCBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR2V0T3JDcmVhdGVJbnN0YW5jZSggY3VycmVudExpZmV0aW1lU2NvcGU6IElTaGFyaW5nTGlmZXRpbWVTY29wZSwgcmVnaXN0cmF0aW9uOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uLCBwYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10gKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbG9va3VwID0gbmV3IENJbnN0YW5jZUxvb2t1cCggcmVnaXN0cmF0aW9uLCB0aGlzLCBjdXJyZW50TGlmZXRpbWVTY29wZSwgcGFyYW1ldGVycyApO1xyXG4gICAgICAgICAgICBsZXQgaW5zdGFuY2UgPSBsb29rdXAuRXhlY3V0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkZlYXR1cmVzLlNjYW5uaW5nXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDU2Nhbm5pbmdSZWdpc3RyYXRpb25FeHRlbnNpb25zXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBSZWdpc3RlckFzc2VtYmx5VHlwZXMoIGNvbnRhaW5lckJ1aWxkZXI6IENDb250YWluZXJCdWlsZGVyLCBhc3NlbWJsaWVzOiBSZWFkb25seUFycmF5PCBTeXN0ZW0uUmVmbGVjdGlvbi5DQXNzZW1ibHkgPiApOiBCdWlsZGVyLklSZWdpc3RyYXRpb25CdWlsZGVyPG9iamVjdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByYiA9IG5ldyBCdWlsZGVyLkNSZWdpc3RyYXRpb25CdWlsZGVyKFxyXG4gICAgICAgICAgICAgICAgbmV3IENvcmUuQ1R5cGVkU2VydmljZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBPYmplY3QgKSApLFxyXG4gICAgICAgICAgICAgICAgbmV3IEJ1aWxkZXIuQ1NjYW5uaW5nQWN0aXZhdG9yRGF0YSgpLFxyXG4gICAgICAgICAgICAgICAge30gKTtcclxuICAgICAgICAgICAgcmIuUmVnaXN0ZXJEYXRhLkRlZmVycmVkQ2FsbGJhY2sgPSBjb250YWluZXJCdWlsZGVyLlJlZ2lzdGVyQ2FsbGJhY2soIFN5c3RlbS5fX0NhbGxiYWNrKCBmdW5jdGlvbiggdGhpczogQ0NvbnRhaW5lckJ1aWxkZXIsIGNyIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ1NjYW5uaW5nUmVnaXN0cmF0aW9uRXh0ZW5zaW9ucy5TY2FuQXNzZW1ibGllcyggYXNzZW1ibGllcywgY3IsIHJiICk7XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICByZXR1cm4gcmI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFJlZ2lzdGVyVHlwZXMoIGNvbnRhaW5lckJ1aWxkZXI6IENDb250YWluZXJCdWlsZGVyLCB0eXBlczogUmVhZG9ubHlBcnJheTwgU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgPiApOiBCdWlsZGVyLklSZWdpc3RyYXRpb25CdWlsZGVyPG9iamVjdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByYiA9IG5ldyBCdWlsZGVyLkNSZWdpc3RyYXRpb25CdWlsZGVyKFxyXG4gICAgICAgICAgICAgICAgbmV3IENvcmUuQ1R5cGVkU2VydmljZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBPYmplY3QgKSApLFxyXG4gICAgICAgICAgICAgICAgbmV3IEJ1aWxkZXIuQ1NjYW5uaW5nQWN0aXZhdG9yRGF0YSgpLFxyXG4gICAgICAgICAgICAgICAge30gKTtcclxuICAgICAgICAgICAgcmIuUmVnaXN0ZXJEYXRhLkRlZmVycmVkQ2FsbGJhY2sgPSBjb250YWluZXJCdWlsZGVyLlJlZ2lzdGVyQ2FsbGJhY2soIFN5c3RlbS5fX0NhbGxiYWNrKCBmdW5jdGlvbiggdGhpczogQ0NvbnRhaW5lckJ1aWxkZXIsIGNyIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ1NjYW5uaW5nUmVnaXN0cmF0aW9uRXh0ZW5zaW9ucy5TY2FuVHlwZXMoIHR5cGVzLCBjciwgcmIgKTtcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIHJldHVybiByYjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFNjYW5Bc3NlbWJsaWVzKCBhc3NlbWJsaWVzOiBSZWFkb25seUFycmF5PCBTeXN0ZW0uUmVmbGVjdGlvbi5DQXNzZW1ibHkgPiwgY29tcG9uZW50UmVnaXN0cnk6IENvcmUuSUNvbXBvbmVudFJlZ2lzdHJ5LCByZWdpc3RyYXRpb25CdWlsZGVyOiBCdWlsZGVyLklSZWdpc3RyYXRpb25CdWlsZGVyPG9iamVjdD4gKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHR5cGVzOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZVtdID0gW107XHJcbiAgICAgICAgICAgIGZvciAoIGNvbnN0IGFzc2VtYmx5IG9mIGFzc2VtYmxpZXMgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlcyA9IHR5cGVzLmNvbmNhdCggYXNzZW1ibHkuR2V0VHlwZXMoKSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuU2NhblR5cGVzKCB0eXBlcywgY29tcG9uZW50UmVnaXN0cnksIHJlZ2lzdHJhdGlvbkJ1aWxkZXIgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFNjYW5UeXBlcyggdHlwZXM6IFJlYWRvbmx5QXJyYXk8IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID4sIGNvbXBvbmVudFJlZ2lzdHJ5OiBDb3JlLklDb21wb25lbnRSZWdpc3RyeSwgcmVnaXN0cmF0aW9uQnVpbGRlcjogQnVpbGRlci5JUmVnaXN0cmF0aW9uQnVpbGRlcjxvYmplY3Q+ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmF0b3JEYXRhOiBCdWlsZGVyLkNTY2FubmluZ0FjdGl2YXRvckRhdGEgPSA8QnVpbGRlci5DU2Nhbm5pbmdBY3RpdmF0b3JEYXRhPnJlZ2lzdHJhdGlvbkJ1aWxkZXIuQWN0aXZhdG9yRGF0YTtcclxuICAgICAgICAgICAgbGV0IGZpbHRlcnMgPSBhY3RpdmF0b3JEYXRhLkZpbHRlcnM7XHJcbiAgICAgICAgICAgIGZvciAoIGNvbnN0IHQgb2YgdHlwZXMgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZml0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGZvciAoIGNvbnN0IGZpbHRlclRlbXAgb2YgZmlsdGVycyApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmaWx0ZXJUZW1wKCB0ICkgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZml0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICggZml0ID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGxldCBzY2FubmVkID0gbmV3IEJ1aWxkZXIuQ1JlZ2lzdHJhdGlvbkJ1aWxkZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvcmUuQ1R5cGVkU2VydmljZSggdCApLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBCdWlsZGVyLkNDb25jcmV0ZVJlZmxlY3Rpb25BY3RpdmF0b3JEYXRhKCB0ICksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEJ1aWxkZXIuQ1NpbmdsZVJlZ2lzdHJhdGlvblN0eWxlKCkgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzY2FubmVkLlJlZ2lzdGVyRGF0YS5Db3B5RnJvbSggcmVnaXN0cmF0aW9uQnVpbGRlci5SZWdpc3RlckRhdGEsIGZhbHNlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICggY29uc3QgYWN0aW9uIG9mIGFjdGl2YXRvckRhdGEuQ29uZmlndXJhdGlvbkFjdGlvbnMgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiggdCwgc2Nhbm5lZCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggc2Nhbm5lZC5SZWdpc3RlckRhdGEuR2V0U2VydmljZXMoKS5sZW5ndGggPiAwIClcclxuICAgICAgICAgICAgICAgICAgICBCdWlsZGVyLkNSZWdpc3RyYXRpb25CdWlsZGVySGVscGVyLlJlZ2lzdGVyU2luZ2xlQ29tcG9uZW50KCBjb21wb25lbnRSZWdpc3RyeSwgc2Nhbm5lZCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIEFzKCByZWdpc3RyYXRpb25CdWlsZGVyOiBCdWlsZGVyLklSZWdpc3RyYXRpb25CdWlsZGVyPG9iamVjdD4sIHNlcnZpY2VNYXBwaW5nOiAoIHQ6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICkgPT4gQ29yZS5DU2VydmljZVtdICk6IEJ1aWxkZXIuSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8b2JqZWN0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2YXRvckRhdGE6IEJ1aWxkZXIuQ1NjYW5uaW5nQWN0aXZhdG9yRGF0YSA9IDxCdWlsZGVyLkNTY2FubmluZ0FjdGl2YXRvckRhdGE+cmVnaXN0cmF0aW9uQnVpbGRlci5BY3RpdmF0b3JEYXRhO1xyXG4gICAgICAgICAgICBhY3RpdmF0b3JEYXRhLkNvbmZpZ3VyYXRpb25BY3Rpb25zLnB1c2goIGZ1bmN0aW9uKCB0eXBlLCByYiApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBtYXBwZWQgPSBzZXJ2aWNlTWFwcGluZyggdHlwZSApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGltcGwgPSAoPEJ1aWxkZXIuQ0NvbmNyZXRlUmVmbGVjdGlvbkFjdGl2YXRvckRhdGE+cmIuQWN0aXZhdG9yRGF0YSkuSW1wbGVtZW50YXRpb25UeXBlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFwcGxpZWQ6IENvcmUuQ1NlcnZpY2VbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICggY29uc3QgcyBvZiBtYXBwZWQgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjID0gPENvcmUuSVNlcnZpY2VXaXRoVHlwZT48YW55PnM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBjWyBcIkdldFNlcnZpY2VUeXBlXCIgXSAhPSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBpbXBsLklzSW5oZXJpdEZyb20oIGMuR2V0U2VydmljZVR5cGUoKSApIHx8IGltcGwuSXNFcXVpdmFsZW50VG8oIGMuR2V0U2VydmljZVR5cGUoKSApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGllZC5wdXNoKCBzICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByYi5Bc0V4KCBhcHBsaWVkICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVnaXN0cmF0aW9uQnVpbGRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLkF0dHJpYnV0ZXNcclxue1xyXG5cclxuICAgIEBTeXN0ZW0uQXR0cmlidXRlVXNhZ2UoIFN5c3RlbS5VQXR0cmlidXRlVGFyZ2V0LkNsYXNzLCB0cnVlLCB0cnVlIClcclxuICAgIGV4cG9ydCBjbGFzcyBDQWRkQ29udHJvbGxlckF0dHJpYnV0ZSBleHRlbmRzIFN5c3RlbS5DQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fY29udHJvbGxlclR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLklEZWxheVR5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGNvbnRyb2xsZXJUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5JRGVsYXlUeXBlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9jb250cm9sbGVyVHlwZSA9IGNvbnRyb2xsZXJUeXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBDb250cm9sbGVyVHlwZSgpOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9jb250cm9sbGVyVHlwZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLkF0dHJpYnV0ZXNcclxue1xyXG4gICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuQ2xhc3MsIHRydWUsIHRydWUgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENBZGRWaWV3Q29tcG9uZW50QXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fY29tcG9uZW50VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uSURlbGF5VHlwZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggY29tcG9uZW50VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uSURlbGF5VHlwZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50VHlwZSA9IGNvbXBvbmVudFR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IENvbXBvbmVudFR5cGUoKTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY29tcG9uZW50VHlwZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLkF0dHJpYnV0ZXNcclxue1xyXG4gICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuQ2xhc3MsIHRydWUsIHRydWUgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENEaXNhYmxlVmlld0NvbXBvbmVudEF0dHJpYnV0ZSBleHRlbmRzIFN5c3RlbS5DQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2NvbXBvbmVudFR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLklEZWxheVR5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGNvbXBvbmVudFR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLklEZWxheVR5cGUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5tX2NvbXBvbmVudFR5cGUgPSBjb21wb25lbnRUeXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBDb21wb25lbnRUeXBlKCk6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2NvbXBvbmVudFR5cGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuQXR0cmlidXRlc1xyXG57XHJcbiAgICBAU3lzdGVtLkF0dHJpYnV0ZVVzYWdlKCBTeXN0ZW0uVUF0dHJpYnV0ZVRhcmdldC5GaWVsZCwgZmFsc2UsIGZhbHNlIClcclxuICAgIGV4cG9ydCBjbGFzcyBDVmlld01vZGVsQXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDXHJcbntcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQXR0cmlidXRlc1xyXG4gICAge1xyXG4gICAgICAgIEBTeXN0ZW0uQXR0cmlidXRlVXNhZ2UoIFN5c3RlbS5VQXR0cmlidXRlVGFyZ2V0Lk1ldGhvZCwgZmFsc2UsIGZhbHNlIClcclxuICAgICAgICBleHBvcnQgY2xhc3MgU2V0QWN0aW9uU3VtbWFyeUF0dHJpYnV0ZSBleHRlbmRzIFN5c3RlbS5DQXR0cmlidXRlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgbV9uYW1lOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgbV9zdW1tYXJ5OiBzdHJpbmcgPSBudWxsO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nLCBzdW1tYXJ5OiBzdHJpbmcgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX25hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3N1bW1hcnkgPSBzdW1tYXJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwdWJsaWMgZ2V0IE5hbWUoKSA6IHN0cmluZyB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX25hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHB1YmxpYyBnZXQgU3VtbWFyeSgpIDogc3RyaW5nIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fc3VtbWFyeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDXHJcbntcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQXR0cmlidXRlc1xyXG4gICAge1xyXG4gICAgICAgIEBTeXN0ZW0uQXR0cmlidXRlVXNhZ2UoIFN5c3RlbS5VQXR0cmlidXRlVGFyZ2V0LkNsYXNzLCB0cnVlLCB0cnVlIClcclxuICAgICAgICBleHBvcnQgY2xhc3MgQ1NldENvbnRyb2xsZXJBdHRyaWJ1dGUgZXh0ZW5kcyBTeXN0ZW0uQ0F0dHJpYnV0ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdGVjdGVkIG1fY29udHJvbGxlclR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLklEZWxheVR5cGUgPSBudWxsO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggY29udHJvbGxlclR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLklEZWxheVR5cGUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2NvbnRyb2xsZXJUeXBlID0gY29udHJvbGxlclR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBwdWJsaWMgZ2V0IENvbnRyb2xsZXJUeXBlKCk6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY29udHJvbGxlclR5cGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICoq54m55oCnKipcclxuICAgICAqIFxyXG4gICAgICogKyDmoIforrDop4blm77miYDkvb/nlKjnmoTmjqfliLblmajnsbvlnotcclxuICAgICAqICsg5L+u6aWw77ya57G7XHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBjb250cm9sbGVyVHlwZSDmjqfliLblmajnsbvlnotcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFNldENvbnRyb2xsZXIoIGNvbnRyb2xsZXJUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5JRGVsYXlUeXBlICk6IFN5c3RlbS5VRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvckNsYXNzXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbS5BdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IEF0dHJpYnV0ZXMuQ1NldENvbnRyb2xsZXJBdHRyaWJ1dGUoIGNvbnRyb2xsZXJUeXBlICkgKTtcclxuICAgIH1cclxufSIsIlxyXG5cclxuLy8gbmFtZXNwYWNlIGliZXJiYXIuTVZDLlJlZ2lzdHJhdGlvblxyXG4vLyB7XHJcbi8vICAgICBleHBvcnQgY2xhc3MgQ1JlZ2lzdHJhdG9yXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgcHJpdmF0ZSBtX2J1aWxkZXI6IEF1dG9mYWMuQ0NvbnRhaW5lckJ1aWxkZXIgPSBudWxsO1xyXG5cclxuLy8gICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGJ1aWxkZXI6IEF1dG9mYWMuQ0NvbnRhaW5lckJ1aWxkZXIgKVxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5tX2J1aWxkZXIgPSBidWlsZGVyO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgcHVibGljIFJlZ2lzdGVyQ29tbW9uQ29tcG9uZW50cygpOiB2b2lkXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBsZXQgdHlwZXMgPSBbXHJcbi8vICAgICAgICAgICAgICAgICBUeXBlT2YoIFZpZXdDb21wb25lbnRzLkNJbml0Q29tcG9uZW50X1ZpZXdzRGVwZW5kc09uICksXHJcbi8vICAgICAgICAgICAgICAgICBUeXBlT2YoIFZpZXdDb21wb25lbnRzLkNJbml0Q29tcG9uZW50X0JpbmRQcm9wZXJ0aWVzV2l0aEVsZW1lbnRzQW5kVmlld3MgKSxcclxuLy8gICAgICAgICAgICAgICAgIFR5cGVPZiggVmlld0NvbXBvbmVudHMuQ0luaXRDb21wb25lbnRfQmluZEFjdGlvbnMgKSxcclxuLy8gICAgICAgICAgICAgICAgIFR5cGVPZiggVmlld0NvbXBvbmVudHMuQ0luaXRDb21wb25lbnRfQmluZE92ZXJTY3JvbGwgKSxcclxuLy8gICAgICAgICAgICAgICAgIFR5cGVPZiggVmlld0NvbXBvbmVudHMuQ0luaXRDb21wb25lbnRfVmlld0NvbnRyb2xsZXIgKVxyXG4vLyAgICAgICAgICAgICBdO1xyXG4vLyAgICAgICAgICAgICB0aGlzLm1fYnVpbGRlci5SZWdpc3RlclR5cGVzKCB0eXBlcyApLkFzU2VsZigpLkluc3RhbmNlUGVyRGVwZW5kZW5jeSgpLlByb3BlcnRpZXNBdXRvd2lyZWQoKTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIHB1YmxpYyBSZWdpc3RlckN1c3RvbUNvbXBvbmVudCggY29tcG9uZW50VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKTogdm9pZFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5tX2J1aWxkZXIuUmVnaXN0ZXJUeXBlKCBjb21wb25lbnRUeXBlICkuQXNTZWxmKCkuSW5zdGFuY2VQZXJEZXBlbmRlbmN5KCkuUHJvcGVydGllc0F1dG93aXJlZCgpO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLy8gcHVibGljIFJlZ2lzdGVyVmlld3MoIC4uLmFzc2VtYmxpZXM6IFN5c3RlbS5SZWZsZWN0aW9uLkNBc3NlbWJseVtdICk6IHZvaWRcclxuLy8gICAgICAgICAvLyB7XHJcbi8vICAgICAgICAgLy8gICAgIGNvbnN0IHZ0ID0gVHlwZU9mKCBDVmlldyApO1xyXG4vLyAgICAgICAgIC8vICAgICBsZXQgdmlld1R5cGVzX1NpbmdsZUluc3RhbmNlOiBBcnJheTwgU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgPiA9IEFycmF5KCk7XHJcbi8vICAgICAgICAgLy8gICAgIGxldCB2aWV3VHlwZXNfVHJhbnNpZW50OiBBcnJheTwgU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgPiA9IEFycmF5KCk7XHJcbi8vICAgICAgICAgLy8gICAgIGxldCB2aWV3VHlwZXM6IEFycmF5PCBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA+O1xyXG4vLyAgICAgICAgIC8vICAgICBhc3NlbWJsaWVzLmZvckVhY2goIGFzc2VtYmx5ID0+XHJcbi8vICAgICAgICAgLy8gICAgIHtcclxuLy8gICAgICAgICAvLyAgICAgICAgIGxldCB0eXBlcyA9IGFzc2VtYmx5LkdldFR5cGVzKCk7XHJcbi8vICAgICAgICAgLy8gICAgICAgICB0eXBlcy5mb3JFYWNoKCB0ID0+XHJcbi8vICAgICAgICAgLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKCB0LklzSW5oZXJpdEZyb20oIHZ0ICkgPT0gZmFsc2UgKVxyXG4vLyAgICAgICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm47XHJcbi8vICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKCB0LkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggVHlwZU9mKCBDU2luZ2xlSW5zdGFuY2VWaWV3QXR0cmlidXRlICksIHRydWUgKSA9PSBudWxsIClcclxuLy8gICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmlld1R5cGVzX1RyYW5zaWVudC5wdXNoKCB0ICk7XHJcbi8vICAgICAgICAgLy8gICAgICAgICAgICAgZWxzZVxyXG4vLyAgICAgICAgIC8vICAgICAgICAgICAgICAgICB2aWV3VHlwZXNfU2luZ2xlSW5zdGFuY2UucHVzaCggdCApO1xyXG4vLyAgICAgICAgIC8vICAgICAgICAgfSlcclxuLy8gICAgICAgICAvLyAgICAgfSApO1xyXG4vLyAgICAgICAgIC8vICAgICB0aGlzLm1fYnVpbGRlci5SZWdpc3RlclR5cGVzKCB2aWV3VHlwZXNfU2luZ2xlSW5zdGFuY2UgKS5Bc1NlbGYoKS5TaW5nbGVJbnN0YW5jZSgpO1xyXG4vLyAgICAgICAgIC8vICAgICB0aGlzLm1fYnVpbGRlci5SZWdpc3RlclR5cGVzKCB2aWV3VHlwZXNfVHJhbnNpZW50ICkuQXNTZWxmKCkuSW5zdGFuY2VQZXJEZXBlbmRlbmN5KCk7XHJcbi8vICAgICAgICAgLy8gICAgIGZvciAoIGNvbnN0IHQgb2Ygdmlld1R5cGVzIClcclxuLy8gICAgICAgICAvLyAgICAge1xyXG4vLyAgICAgICAgIC8vICAgICAgICAgdGhpcy5SZWdpc3RlclZpZXdzV2hlcmVEZXBlbmRPbiggPFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPENWaWV3Pj50ICk7XHJcbi8vICAgICAgICAgLy8gICAgIH1cclxuLy8gICAgICAgICAvLyB9XHJcblxyXG4vLyAgICAgICAgIC8vIHB1YmxpYyBSZWdpc3RlclZpZXdzV2hlcmVEZXBlbmRPbiggdmlld1R5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBDVmlldyA+ICk6IHZvaWRcclxuLy8gICAgICAgICAvLyB7XHJcbi8vICAgICAgICAgLy8gICAgIGxldCBhdHRyRGVwZW5kT25MaXN0ID0gdmlld1R5cGUuR2V0Q3VzdG9tQXR0cmlidXRlcyggVHlwZU9mKCBBdHRyaWJ1dGVzLkRlcGVuZE9uVmlld0F0dHJpYnV0ZSApLCBmYWxzZSApO1xyXG4vLyAgICAgICAgIC8vICAgICBpZiAoIGF0dHJEZXBlbmRPbkxpc3QgPT0gbnVsbCB8fCBhdHRyRGVwZW5kT25MaXN0Lmxlbmd0aCA9PSAwIClcclxuLy8gICAgICAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIFxyXG4vLyAgICAgICAgIC8vICAgICBmb3IgKCBjb25zdCBhdHRyIG9mIGF0dHJEZXBlbmRPbkxpc3QgKVxyXG4vLyAgICAgICAgIC8vICAgICB7XHJcbi8vICAgICAgICAgLy8gICAgICAgICBpZiAoIGF0dHIuVmlld1R5cGUuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBUeXBlT2YoIENTaW5nbGVJbnN0YW5jZVZpZXdBdHRyaWJ1dGUgKSwgdHJ1ZSApID09IG51bGwgKVxyXG4vLyAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMubV9idWlsZGVyLlJlZ2lzdGVyVHlwZSggYXR0ci5WaWV3VHlwZSApLkluc3RhbmNlUGVyRGVwZW5kZW5jeSgpO1xyXG4vLyAgICAgICAgIC8vICAgICAgICAgZWxzZVxyXG4vLyAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMubV9idWlsZGVyLlJlZ2lzdGVyVHlwZSggYXR0ci5WaWV3VHlwZSApLlNpbmdsZUluc3RhbmNlKCk7XHJcbi8vICAgICAgICAgLy8gICAgICAgICB0aGlzLlJlZ2lzdGVyVmlld3NXaGVyZURlcGVuZE9uKCBhdHRyLlZpZXdUeXBlICk7XHJcbi8vICAgICAgICAgLy8gICAgIH1cclxuLy8gICAgICAgICAvLyB9XHJcbi8vICAgICB9XHJcbi8vIH0iLCJcclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuUmVnaXN0cmF0aW9uXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDU2luZ2xlSW5zdGFuY2VWaWV3QXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gU2luZ2xlSW5zdGFuY2VWaWV3KCk6IFN5c3RlbS5VRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvckNsYXNzXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbS5BdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IENTaW5nbGVJbnN0YW5jZVZpZXdBdHRyaWJ1dGUoKSApO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDQWN0aW9uQmluZGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEJpbmRBY3Rpb25zKCB2aWV3OiBDVmlldywgaGFuZGxlclR5cGU6IG9iamVjdCApOiBJQWN0aW9uQmluZGVyUmVzdWx0O1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuQ29yZVxyXG57XHJcbiAgICBAU3lzdGVtLlJlZmxlY3Rpb24uQXV0b1JlZmxlY3RNZXRhZGF0YV9Db25zdHJ1Y3RvclxyXG4gICAgQFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVOaWNrbmFtZSggXCJpYmVyYmFyOjpNVkM6OkNvbXBvbmVudHM6OkNDb21wb25lbnRCaW5kQWN0aW9uc1wiIClcclxuICAgIGV4cG9ydCBjbGFzcyBDQ29tcG9uZW50QmluZEFjdGlvbnMgaW1wbGVtZW50cyBJQ29tcG9uZW50SW5pdCwgU3lzdGVtLklEaXNwb3NhYmxlXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBtX2JpbmRlclJlc3VsdDogSUFjdGlvbkJpbmRlclJlc3VsdCA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBJbml0VmlldyggdmlldzogQ1ZpZXcgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJpbmRlciA9IHZpZXcuTGlmZXRpbWVTY29wZS5SZXNvbHZlKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIENBY3Rpb25CaW5kZXIgKSApO1xyXG4gICAgICAgICAgICB0aGlzLm1fYmluZGVyUmVzdWx0ID0gYmluZGVyLkJpbmRBY3Rpb25zKCB2aWV3LCBudWxsICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUmVJbml0VmlldyggdmlldzogQ1ZpZXcgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2JpbmRlclJlc3VsdC5EaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9iaW5kZXJSZXN1bHQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLkluaXRWaWV3KCB2aWV3ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGlzcG9zZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fYmluZGVyUmVzdWx0LkRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENDb21wb25lbnRCaW5kTW9kZWxzIGltcGxlbWVudHMgSUNvbXBvbmVudEluaXRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgSW5pdFZpZXcoIHZpZXc6IENWaWV3ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBiaW5kZXIgPSB2aWV3LkxpZmV0aW1lU2NvcGUuUmVzb2x2ZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBDVmlld01vZGVsQmluZGVyICkgKTtcclxuICAgICAgICAgICAgbGV0IHZpZXdUeXBlID0gdmlldy5HZXRUeXBlKCk7XHJcbiAgICAgICAgICAgIGxldCBmaWVsZEluZm9zID0gdmlld1R5cGUuR2V0RmllbGRzKCk7XHJcbiAgICAgICAgICAgIGZvciAoIGNvbnN0IGZpZWxkIG9mIGZpZWxkSW5mb3MgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGZpZWxkLklzRGVmaW5lZCggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBBdHRyaWJ1dGVzLkNWaWV3TW9kZWxBdHRyaWJ1dGUgKSApID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGZpZWxkLkZpZWxkVHlwZSA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbW9kZWwgPSB2aWV3LkxpZmV0aW1lU2NvcGUuUmVzb2x2ZSggZmllbGQuRmllbGRUeXBlICk7XHJcbiAgICAgICAgICAgICAgICBiaW5kZXIuQmluZE1vZGVsKCB2aWV3LCBtb2RlbCApO1xyXG4gICAgICAgICAgICAgICAgZmllbGQuU2V0VmFsdWUoIHZpZXcsIG1vZGVsICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBSZUluaXRWaWV3KCB2aWV3OiBDVmlldyApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkluaXRWaWV3KCB2aWV3ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ0NvbXBvbmVudEtlcm5lbDxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueSkgPT4gYW55PiBpbXBsZW1lbnRzIFN5c3RlbS5JRGlzcG9zYWJsZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBDcmVhdGUoIHZpZXc6IENWaWV3LCAuLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+ICk6IFJldHVyblR5cGU8VD47XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IFJlQ3JlYXRlKCB2aWV3OiBDVmlldyApOiB2b2lkO1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBTaG93KCBvbnNob3c6IFN5c3RlbS5UQ2FsbGJhY2s8ICgpID0+IHZvaWQgPiApOiB2b2lkO1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBIaWRlKCBvbmhpZGU6IFN5c3RlbS5UQ2FsbGJhY2s8ICgpID0+IHZvaWQgPiApOiB2b2lkO1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBJc1Nob3coKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgRGlzcG9zZSgpOiB2b2lkO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5Db3JlXHJcbntcclxuICAgIEBTeXN0ZW0uUmVmbGVjdGlvbi5BdXRvUmVmbGVjdE1ldGFkYXRhX0NvbnN0cnVjdG9yXHJcbiAgICBAU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU5pY2tuYW1lKCBcImliZXJiYXI6Ok12Yzo6Vmlld0NvbXBvbmVudHM6OkNJbml0Q29tcG9uZW50X1ZpZXdDb250cm9sbGVyXCIgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENJbml0Q29tcG9uZW50X1ZpZXdDb250cm9sbGVyIGltcGxlbWVudHMgSUNvbXBvbmVudEluaXQsIFN5c3RlbS5JRGlzcG9zYWJsZVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgbV9iaW5kZXJSZXN1bHRzOiBBcnJheTwgSUFjdGlvbkJpbmRlclJlc3VsdCA+ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIEluaXRWaWV3KCB2aWV3OiBDVmlldyApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdmlld1R5cGUgPSB2aWV3LkdldFR5cGUoKTtcclxuICAgICAgICAgICAgbGV0IGNvbnRyb2xsZXJUeXBlQXR0cmlidXRlcyA9IHZpZXdUeXBlLkdldEN1c3RvbUF0dHJpYnV0ZXMoIFR5cGVPZiggTVZDLkF0dHJpYnV0ZXMuQ0FkZENvbnRyb2xsZXJBdHRyaWJ1dGUgKSwgdHJ1ZSApO1xyXG4gICAgICAgICAgICBpZiAoIGNvbnRyb2xsZXJUeXBlQXR0cmlidXRlcy5sZW5ndGggPT0gMCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1fYmluZGVyUmVzdWx0cyA9IEFycmF5KCk7XHJcbiAgICAgICAgICAgIGZvciAoIGNvbnN0IGF0dHJpYnV0ZSBvZiBjb250cm9sbGVyVHlwZUF0dHJpYnV0ZXMgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmluZGVyID0gdmlldy5MaWZldGltZVNjb3BlLlJlc29sdmUoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQ0FjdGlvbkJpbmRlciApICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmluZGVyUmVzdWx0ID0gYmluZGVyLkJpbmRBY3Rpb25zKCB2aWV3LCBhdHRyaWJ1dGUuQ29udHJvbGxlclR5cGUgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9iaW5kZXJSZXN1bHRzLnB1c2goIGJpbmRlclJlc3VsdCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUmVJbml0VmlldyggdmlldzogQ1ZpZXcgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fYmluZGVyUmVzdWx0cyAhPSBudWxsICYmIHRoaXMubV9iaW5kZXJSZXN1bHRzLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBjb25zdCByIG9mIHRoaXMubV9iaW5kZXJSZXN1bHRzIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByLkRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubV9iaW5kZXJSZXN1bHRzID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5Jbml0VmlldyggdmlldyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIERpc3Bvc2UoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fYmluZGVyUmVzdWx0cyAhPSBudWxsICYmIHRoaXMubV9iaW5kZXJSZXN1bHRzLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBjb25zdCByIG9mIHRoaXMubV9iaW5kZXJSZXN1bHRzIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByLkRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubV9iaW5kZXJSZXN1bHRzID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDRGVmYXVsdE1hcHBlciBpbXBsZW1lbnRzIENNYXBwZXIsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFcXVhbGl0eUNvbXBhcmVyPCBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA+XHJcbiAgICB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9jb21wb25lbnRLZXJuZWxUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTxDb3JlLkNDb21wb25lbnRLZXJuZWw8YW55Pj4gPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgbV9jb21wb25lbnRUeXBlczogQXJyYXk8IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID4gPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgbV9jb21wb25lbnRUeXBlc0ZvclZpZXdzOiBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRGljdGlvbmFyeTwgU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUsIEFycmF5PCBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA+ID47XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgY29tcG9uZW50S2VybmVsVHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8Q29yZS5DQ29tcG9uZW50S2VybmVsPGFueT4+LFxyXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlczogQXJyYXk8IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID5cclxuICAgICAgICApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50VHlwZXNGb3JWaWV3cyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5DRGljdGlvbmFyeTwgU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUsIEFycmF5PCBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA+ID4oIHtcclxuICAgICAgICAgICAgICAgIGNvbXBhcmVyOiB0aGlzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50S2VybmVsVHlwZSA9IGNvbXBvbmVudEtlcm5lbFR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMubV9jb21wb25lbnRUeXBlcyA9IGNvbXBvbmVudFR5cGVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldENvbXBvbmVudEtlcm5lbFR5cGUoKTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8Q29yZS5DQ29tcG9uZW50S2VybmVsPGFueT4+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2NvbXBvbmVudEtlcm5lbFR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0Q29tcG9uZW50VHlwZXMoIHZpZXdUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTxDVmlldz4gKTogQXJyYXk8IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnRUeXBlczogQXJyYXk8IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlcyA9IHRoaXMubV9jb21wb25lbnRUeXBlc0ZvclZpZXdzLkdldCggdmlld1R5cGUgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggY29tcG9uZW50VHlwZXMgPT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFR5cGVzID0gQXJyYXkoIC4uLnRoaXMubV9jb21wb25lbnRUeXBlcyApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0dHJzID0gdmlld1R5cGUuR2V0Q3VzdG9tQXR0cmlidXRlcyggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBBdHRyaWJ1dGVzLkNBZGRWaWV3Q29tcG9uZW50QXR0cmlidXRlICksIHRydWUgKTtcclxuICAgICAgICAgICAgICAgIGlmICggYXR0cnMubGVuZ3RoID4gMCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICggY29uc3QgYXR0cmlidXRlIG9mIGF0dHJzIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFR5cGVzLnB1c2goIGF0dHJpYnV0ZS5Db21wb25lbnRUeXBlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2NvbXBvbmVudFR5cGVzRm9yVmlld3MuQWRkKCB2aWV3VHlwZSwgY29tcG9uZW50VHlwZXMgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudFR5cGVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEVxdWFscyggYTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUsIGI6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLklzRXF1aXZhbGVudFRvKCBiICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ1ZpZXdNb2RlbEJpbmRlclxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOe7keWumuinhuWbvuaooeWei1xyXG4gICAgICAgICAqIEBwYXJhbSB2aWV3IOaTjeS9nOe7keWumue7hOS7tueahOinhuWbvuWunuS+i1xyXG4gICAgICAgICAqIEBwYXJhbSBtb2RlbCDnu5Hlrprlr7nosaFcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgQmluZE1vZGVsKCB2aWV3OiBDVmlldywgbW9kZWw6IG9iamVjdCApOiB2b2lkO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIENNYXBwZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0Q29tcG9uZW50S2VybmVsVHlwZSgpOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgQ29yZS5DQ29tcG9uZW50S2VybmVsPGFueT4gPjtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0Q29tcG9uZW50VHlwZXMoIHZpZXdUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgQ1ZpZXcgPiApOiBBcnJheTwgU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgPjtcclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQ1xyXG57XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQWRkQ29udHJvbGxlciggY29udHJvbGxlclR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLklEZWxheVR5cGUgKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yQ2xhc3NcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3lzdGVtLkF0dHJpYnV0ZURlY29yYXRlKCBuZXcgQXR0cmlidXRlcy5DQWRkQ29udHJvbGxlckF0dHJpYnV0ZSggY29udHJvbGxlclR5cGUgKSApO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkNcclxue1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEFkZFZpZXdDb21wb25lbnQoIGNvbXBvbmVudFR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLklEZWxheVR5cGUgKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yQ2xhc3NcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3lzdGVtLkF0dHJpYnV0ZURlY29yYXRlKCBuZXcgQXR0cmlidXRlcy5DQWRkVmlld0NvbXBvbmVudEF0dHJpYnV0ZSggY29tcG9uZW50VHlwZSApICk7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQ1xyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0J1aWxkZXJcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIG1fY2I6IEF1dG9mYWMuQ0NvbnRhaW5lckJ1aWxkZXIgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgbV9jb21wb25lbnRLZXJuZWxUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTxDb3JlLkNDb21wb25lbnRLZXJuZWw8YW55Pj4gPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgbV9jb21wb25lbnRUeXBlczogQXJyYXk8IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID4gPSBBcnJheSgpO1xyXG4gICAgICAgIHByaXZhdGUgbV9jb21wb25lbnRUeXBlc0NvbW1vbjogQXJyYXk8IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID4gPSBBcnJheSgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGNiOiBBdXRvZmFjLkNDb250YWluZXJCdWlsZGVyIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9jYiA9IGNiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6K6+572u5YaF5qC457uE5Lu2XHJcbiAgICAgICAgICogQHBhcmFtIGNvbXBvbmVudEtlcm5lbFR5cGUgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIFNldENvbXBvbmVudEtlcm5lbCggY29tcG9uZW50S2VybmVsVHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8Q29yZS5DQ29tcG9uZW50S2VybmVsPGFueT4+ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9jb21wb25lbnRLZXJuZWxUeXBlID0gY29tcG9uZW50S2VybmVsVHlwZTtcclxuICAgICAgICAgICAgdGhpcy5tX2NiLlJlZ2lzdGVyVHlwZSggY29tcG9uZW50S2VybmVsVHlwZSApLkFzU2VsZigpLkluc3RhbmNlUGVyRGVwZW5kZW5jeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vliqDpgJrnlKjnmoTnu4Tku7ZcclxuICAgICAgICAgKiBAcGFyYW0gY29tcG9uZW50VHlwZSBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgQWRkQ29tcG9uZW50KCBjb21wb25lbnRUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSwgY29tbW9uPzogYm9vbGVhbiApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV9jb21wb25lbnRUeXBlcy5maXJzdE9yRGVmYXVsdCggdCA9PiB0LklzRXF1aXZhbGVudFRvKCBjb21wb25lbnRUeXBlICkgKSA9PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50VHlwZXNDb21tb24uZmlyc3RPckRlZmF1bHQoIHQgPT4gdC5Jc0VxdWl2YWxlbnRUbyggY29tcG9uZW50VHlwZSApICkgPT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggY29tbW9uID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50VHlwZXNDb21tb24ucHVzaCggY29tcG9uZW50VHlwZSApO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9jb21wb25lbnRUeXBlcy5wdXNoKCBjb21wb25lbnRUeXBlICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fY2IuUmVnaXN0ZXJUeXBlKCBjb21wb25lbnRUeXBlICkuQXNTZWxmKCkuSW5zdGFuY2VQZXJEZXBlbmRlbmN5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOazqOWGjOaooeWei+e7keWumue7hOS7tlxyXG4gICAgICAgICAqIEBwYXJhbSBtb2RlbEJpbmRlclR5cGUg5qih5Z6L57uR5a6a5Zmo55qE57G75Z6LXHJcbiAgICAgICAgICogQHBhcmFtIG1vZGVsQ29tcG9uZW50VHlwZSAo5Y+v6YCJKee7hOS7tuexu+Wei++8jOm7mOiupCBpYmVyYmFyLk1WQy5Db3JlLkNDb21wb25lbnRCaW5kTW9kZWxzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIEFkZENvbXBvbmVudEJpbmRNb2RlbHMoXHJcbiAgICAgICAgICAgIG1vZGVsQmluZGVyVHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IENvcmUuQ1ZpZXdNb2RlbEJpbmRlciA+LFxyXG4gICAgICAgICAgICBtb2RlbENvbXBvbmVudFR5cGU/OiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgb2JqZWN0ID5cclxuICAgICAgICApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fY2IuUmVnaXN0ZXJUeXBlKCBtb2RlbEJpbmRlclR5cGUgKS5Bc1NlbGYoKS5BcyggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBDb3JlLkNWaWV3TW9kZWxCaW5kZXIgKSApLlNpbmdsZUluc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQWRkQ29tcG9uZW50KCAoIG1vZGVsQ29tcG9uZW50VHlwZSA9PSBudWxsICkgPyBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIENvcmUuQ0NvbXBvbmVudEJpbmRNb2RlbHMgKSA6IG1vZGVsQ29tcG9uZW50VHlwZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5rOo5YaM5LqL5Lu257uR5a6a57uE5Lu2XHJcbiAgICAgICAgICogQHBhcmFtIGFjdGlvbkJpbmRlclR5cGUgXHJcbiAgICAgICAgICogQHBhcmFtIGFjdGlvbkNvbXBvbmVudFR5cGUgXHJcbiAgICAgICAgICogQHBhcmFtIGNvbnRyb2xsZXJDb21wb25lbnRUeXBlIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBBZGRDb21wb25lbnRCaW5kQWN0aW9ucyhcclxuICAgICAgICAgICAgYWN0aW9uQmluZGVyVHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IENvcmUuQ0FjdGlvbkJpbmRlciA+LFxyXG4gICAgICAgICAgICBhY3Rpb25Db21wb25lbnRUeXBlPzogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IG9iamVjdCA+LFxyXG4gICAgICAgICAgICBjb250cm9sbGVyQ29tcG9uZW50VHlwZT86IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBvYmplY3QgPlxyXG4gICAgICAgICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9jYi5SZWdpc3RlclR5cGUoIGFjdGlvbkJpbmRlclR5cGUgKS5Bc1NlbGYoKS5BcyggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBDb3JlLkNBY3Rpb25CaW5kZXIgKSApLlNpbmdsZUluc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQWRkQ29tcG9uZW50KCAoIGFjdGlvbkNvbXBvbmVudFR5cGUgPT0gbnVsbCApID8gU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBDb3JlLkNDb21wb25lbnRCaW5kQWN0aW9ucyApIDogYWN0aW9uQ29tcG9uZW50VHlwZSApO1xyXG4gICAgICAgICAgICB0aGlzLkFkZENvbXBvbmVudCggKCBjb250cm9sbGVyQ29tcG9uZW50VHlwZSA9PSBudWxsICkgPyBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIENvcmUuQ0luaXRDb21wb25lbnRfVmlld0NvbnRyb2xsZXIgKSA6IGNvbnRyb2xsZXJDb21wb25lbnRUeXBlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDms6jlhozop4blm77nsbvlnovvvIzmkJzntKLlhbbkvb/nlKjnmoTmjqfliLblmajnsbvlnovlubbms6jlhoxcclxuICAgICAgICAgKiBAcGFyYW0gdmlld1R5cGUg6KeG5Zu+57G75Z6LXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIFJlZ2lzdGVyVmlldzxUIGV4dGVuZHMgQ1ZpZXc+KCB2aWV3VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IFQgPiApOiBBdXRvZmFjLkJ1aWxkZXIuSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8IFQgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGF0dHJzQ29udHJvbGxlciA9IHZpZXdUeXBlLkdldEN1c3RvbUF0dHJpYnV0ZXMoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQXR0cmlidXRlcy5DQWRkQ29udHJvbGxlckF0dHJpYnV0ZSApLCB0cnVlICk7XHJcbiAgICAgICAgICAgIGlmICggYXR0cnNDb250cm9sbGVyLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBjb25zdCBhdHRyIG9mIGF0dHJzQ29udHJvbGxlciApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX2NiLlJlZ2lzdGVyVHlwZSggYXR0ci5Db250cm9sbGVyVHlwZSApLkFzU2VsZigpLkluc3RhbmNlUGVyRGVwZW5kZW5jeSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgYXR0cnNDb21wb25lbnQgPSB2aWV3VHlwZS5HZXRDdXN0b21BdHRyaWJ1dGVzKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEF0dHJpYnV0ZXMuQ0FkZFZpZXdDb21wb25lbnRBdHRyaWJ1dGUgKSwgdHJ1ZSApO1xyXG4gICAgICAgICAgICBpZiAoIGF0dHJzQ29tcG9uZW50Lmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBjb25zdCBhdHRyIG9mIGF0dHJzQ29tcG9uZW50IClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFkZENvbXBvbmVudCggYXR0ci5Db21wb25lbnRUeXBlLCBmYWxzZSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZmllbGRJbmZvcyA9IHZpZXdUeXBlLkdldEZpZWxkcygpO1xyXG4gICAgICAgICAgICBpZiAoIGZpZWxkSW5mb3MubGVuZ3RoID4gMCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoIGNvbnN0IGZpZWxkIG9mIGZpZWxkSW5mb3MgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggZmllbGQuSXNEZWZpbmVkKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEF0dHJpYnV0ZXMuQ1ZpZXdNb2RlbEF0dHJpYnV0ZSApICkgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZpZWxkLkZpZWxkVHlwZSA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9jYi5SZWdpc3RlclR5cGUoIGZpZWxkLkZpZWxkVHlwZSApLkFzU2VsZigpLkluc3RhbmNlUGVyRGVwZW5kZW5jeSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY2IuUmVnaXN0ZXJUeXBlKCB2aWV3VHlwZSApLlByb3BlcnRpZXNBdXRvd2lyZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBCdWlsZCgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbWFwcGVyID0gbmV3IENvcmUuQ0RlZmF1bHRNYXBwZXIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50S2VybmVsVHlwZSxcclxuICAgICAgICAgICAgICAgIHRoaXMubV9jb21wb25lbnRUeXBlc1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLm1fY2IuUmVnaXN0ZXJJbnN0YW5jZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBDb3JlLkNEZWZhdWx0TWFwcGVyICksIG1hcHBlciApXHJcbiAgICAgICAgICAgICAgICAuQXNTZWxmKClcclxuICAgICAgICAgICAgICAgIC5BcyggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBDb3JlLkNNYXBwZXIgKSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQ1xyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ1ZpZXcgaW1wbGVtZW50cyBTeXN0ZW0uSURpc3Bvc2FibGVcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIG1faWQ6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9jb21wb25lbnRLZXJuZWw6IENvcmUuQ0NvbXBvbmVudEtlcm5lbDxhbnk+ID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIG1fY29tcG9uZW50czogQXJyYXk8IG9iamVjdCA+ID0gQXJyYXkoKTtcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBhdXRvZmFj5rOo5YWlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBtX2xpZmV0aW1lU2NvcGU6IGliZXJiYXIuQXV0b2ZhYy5JTGlmZXRpbWVTY29wZSA9IG51bGw7XHJcbiAgICAgICAgQGliZXJiYXIuQXV0b2ZhYy5JbmplY3RMaWZldGltZVNjb3BlKClcclxuICAgICAgICBwdWJsaWMgc2V0IExpZmV0aW1lU2NvcGUoIHZhbHVlOiBpYmVyYmFyLkF1dG9mYWMuSUxpZmV0aW1lU2NvcGUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2xpZmV0aW1lU2NvcGUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGdldCBMaWZldGltZVNjb3BlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fbGlmZXRpbWVTY29wZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IElEKCBpZDogc3RyaW5nIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9pZCA9IGlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBJRCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2lkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIENyZWF0ZSggLi4uYXJnczogYW55W10gKTogYW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlJlc29sdmVDb21wb25lbnRzKCk7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSB0aGlzLkluaXRDb21wb25lbnRLZXJuZWwoIC4uLmFyZ3MgKTtcclxuICAgICAgICAgICAgdGhpcy5Jbml0Q29tcG9uZW50cygpO1xyXG4gICAgICAgICAgICB0aGlzLk9uQ3JlYXRlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFJlQ3JlYXRlKCk6IGFueVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9jb21wb25lbnRLZXJuZWwuUmVDcmVhdGUoIHRoaXMgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoIGVycm9yIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYEZhaWxlZCB0byBpbml0aWFsaXplIHRoZSBrZXJuZWwgY29tcG9uZW50IG9mIHR5cGUgPCR7dGhpcy5tX2NvbXBvbmVudEtlcm5lbC5HZXRUeXBlKCkuR2V0Tmlja25hbWUoKX0+YCApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggZXJyb3Iuc3RhY2sgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5Jbml0Q29tcG9uZW50cygpO1xyXG4gICAgICAgICAgICB0aGlzLk9uQ3JlYXRlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIE9uQ3JlYXRlZCgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIEluaXRDb21wb25lbnRLZXJuZWwoIC4uLmFyZ3M6IGFueVtdICk6IGFueVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY29tcG9uZW50S2VybmVsLkNyZWF0ZSggdGhpcywgLi4uYXJncyApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoICggZXJyb3IgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgRmFpbGVkIHRvIGluaXRpYWxpemUgdGhlIGtlcm5lbCBjb21wb25lbnQgb2YgdHlwZSA8JHt0aGlzLm1fY29tcG9uZW50S2VybmVsLkdldFR5cGUoKS5HZXROaWNrbmFtZSgpfT5gICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBlcnJvci5zdGFjayApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgUmVzb2x2ZUNvbXBvbmVudHMoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG1hcHBlciA9IHRoaXMuR2V0TWFwcGVyKCk7XHJcbiAgICAgICAgICAgIGxldCB0eXBlID0gPCBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgQ1ZpZXcgPiA+dGhpcy5HZXRUeXBlKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50S2VybmVsVHlwZSA9IG1hcHBlci5HZXRDb21wb25lbnRLZXJuZWxUeXBlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9jb21wb25lbnRLZXJuZWwgPSB0aGlzLkxpZmV0aW1lU2NvcGUuUmVzb2x2ZSggY29tcG9uZW50S2VybmVsVHlwZSwgbmV3IEF1dG9mYWMuQ1R5cGVkUGFyYW1ldGVyKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIENWaWV3ICksIHRoaXMgKSApO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudFR5cGVzID0gbWFwcGVyLkdldENvbXBvbmVudFR5cGVzKCB0eXBlICk7XHJcbiAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVzRGlzYWJsZWQgPSB0eXBlLkdldEN1c3RvbUF0dHJpYnV0ZXMoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQXR0cmlidXRlcy5DRGlzYWJsZVZpZXdDb21wb25lbnRBdHRyaWJ1dGUgKSwgdHJ1ZSApO1xyXG4gICAgICAgICAgICBmb3IgKCBjb25zdCBjb21wb25lbnRUeXBlIG9mIGNvbXBvbmVudFR5cGVzIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtZXRlcnM6IEFycmF5PCBBdXRvZmFjLkNvcmUuQ1BhcmFtZXRlciA+ID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBBdXRvZmFjLkNUeXBlZFBhcmFtZXRlciggVHlwZU9mKCBDVmlldyApLCB0aGlzIClcclxuICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBjb21wb25lbnRUeXBlID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggYXR0cmlidXRlc0Rpc2FibGVkLmZpcnN0T3JEZWZhdWx0KCBhZCA9PiBhZC5Db21wb25lbnRUeXBlLklzRXF1aXZhbGVudFRvKCBjb21wb25lbnRUeXBlICkgKSAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMubV9jb21wb25lbnRzLmZpcnN0T3JEZWZhdWx0KCBjID0+IGMuR2V0VHlwZSgpLklzRXF1aXZhbGVudFRvKCBjb21wb25lbnRUeXBlICkgKSAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgZHVwbGljYXRlIHR5cGUgb2YgY29tcG9uZW50KCR7Y29tcG9uZW50VHlwZS5HZXROaWNrbmFtZSgpfSkgZm9yIHZpZXc8JHt0eXBlLkdldE5pY2tuYW1lKCl9Pi5gICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudDogb2JqZWN0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuTGlmZXRpbWVTY29wZS5SZXNvbHZlKCBjb21wb25lbnRUeXBlLCAuLi5wYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoIGVycm9yIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgQ2FuJ3QgcmVzb2x2ZSBpbnN0YW5jZSBvZiBjb21wb25lbnQgdHlwZSgke2NvbXBvbmVudFR5cGUuR2V0Tmlja25hbWUoKX0pIGZvciB2aWV3PCR7dHlwZS5HZXROaWNrbmFtZSgpfT5gICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggZXJyb3Iuc3RhY2sgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGNvbXBvbmVudCAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50cy5wdXNoKCBjb21wb25lbnQgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIEluaXRDb21wb25lbnRzKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0eXBlID0gdGhpcy5HZXRUeXBlKCk7XHJcbiAgICAgICAgICAgIGZvciAoIGNvbnN0IGNvbXBvbmVudCBvZiB0aGlzLm1fY29tcG9uZW50cyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggKDxDb3JlLklDb21wb25lbnRJbml0PmNvbXBvbmVudCkuSW5pdFZpZXcgIT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8Q29yZS5JQ29tcG9uZW50SW5pdD5jb21wb25lbnQpLkluaXRWaWV3KCB0aGlzICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGNoICggZXJyb3IgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYEV4Y2VwdGlvbiBvY2N1cnJlZCB3aGVuIHRoZSBjb21wb25lbnQoJHtjb21wb25lbnQuR2V0VHlwZSgpLkdldE5pY2tuYW1lKCl9KSBpbml0aWFsaXplZCBmb3Igdmlldzwke3R5cGUuR2V0Tmlja25hbWUoKX0+LmAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggZXJyb3Iuc3RhY2sgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRDb21wb25lbnRLZXJuZWw8IFQgZXh0ZW5kcyAoIC4uLmFyZ3M6IGFueVtdICkgPT4gYW55ID4oKTogQ29yZS5DQ29tcG9uZW50S2VybmVsPCBUID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiA8Q29yZS5DQ29tcG9uZW50S2VybmVsPFQ+PnRoaXMubV9jb21wb25lbnRLZXJuZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0Q29tcG9uZW50PCBUIGV4dGVuZHMgb2JqZWN0ID4oIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBUID4gKTogVFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxUPnRoaXMubV9jb21wb25lbnRzLmZpcnN0T3JEZWZhdWx0KCB0ID0+IHQuR2V0VHlwZSgpLklzRXF1aXZhbGVudFRvKCB0eXBlICkgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBTaG93KCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0Q29tcG9uZW50S2VybmVsKCkuU2hvdyggdGhpcy5fX0NhbGxiYWNrKCB0aGlzLk9uU2hvdyApICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSGlkZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkdldENvbXBvbmVudEtlcm5lbCgpLkhpZGUoIHRoaXMuX19DYWxsYmFjayggdGhpcy5PbkhpZGUgKSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIElzU2hvdygpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5HZXRDb21wb25lbnRLZXJuZWwoKS5Jc1Nob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRNYXBwZXIoKTogQ29yZS5DTWFwcGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5MaWZldGltZVNjb3BlLlJlc29sdmUoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQ29yZS5DTWFwcGVyICkgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBEaXNwb3NlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoIGNvbnN0IGMgb2YgdGhpcy5tX2NvbXBvbmVudHMgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICg8U3lzdGVtLklEaXNwb3NhYmxlPmMpLkRpc3Bvc2UgIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgKDxTeXN0ZW0uSURpc3Bvc2FibGU+YykuRGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX2NvbXBvbmVudEtlcm5lbCAhPSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2NvbXBvbmVudEtlcm5lbC5EaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBPblNob3coKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBPbkhpZGUoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59IiwiXHJcblxyXG4vLyBuYW1lc3BhY2UgaWJlcmJhci5NVkNcclxuLy8ge1xyXG4vLyAgICAgdmFyIHVBbGxvY2F0ZUlEOiBudW1iZXIgPSAwO1xyXG4vLyAgICAgZXhwb3J0IGZ1bmN0aW9uIEFsbG9jYXRlSUQoKTogc3RyaW5nXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgdUFsbG9jYXRlSUQrKztcclxuLy8gICAgICAgICByZXR1cm4gXCJpYmVyYmFyX012YzFfXCIgKyB1QWxsb2NhdGVJRDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBleHBvcnQgY2xhc3MgQ0RhdGFNb2RlbFxyXG4vLyAgICAge1xyXG5cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBleHBvcnQgY2xhc3MgQ1ZpZXdNb2RlbFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIC8qKlxyXG4vLyAgICAgICAgICAqIOS7juinhuWbvuS4reiOt+WPlkpRdWVyeeWFg+e0oFxyXG4vLyAgICAgICAgICAqIEBwYXJhbSB2aWV3IFxyXG4vLyAgICAgICAgICAqL1xyXG4vLyAgICAgICAgIHB1YmxpYyBHZXRFbGVtZW50c0Zyb21WaWV3KCB2aWV3OiBDVmlldyApOiB2b2lkXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBsZXQgZWxlbWVudFJvb3QgPSB2aWV3LkdldEVsZW1lbnRSb290KClcclxuLy8gICAgICAgICAgICAgbGV0IG1vZGVsVHlwZSA9IHRoaXMuR2V0VHlwZSgpO1xyXG4vLyAgICAgICAgICAgICBsZXQgZmllbGRJbmZvcyA9IG1vZGVsVHlwZS5HZXRGaWVsZHMoKTtcclxuLy8gICAgICAgICAgICAgZm9yICggY29uc3QgZmkgb2YgZmllbGRJbmZvcyApXHJcbi8vICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBhdHRyRnJvbUVsZW1lbnQgPSBmaS5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQXR0cmlidXRlcy5Gcm9tRWxlbWVudEF0dHJpYnV0ZSApICk7XHJcbi8vICAgICAgICAgICAgICAgICBpZiAoIGF0dHJGcm9tRWxlbWVudCA9PSBudWxsIClcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBlbGVtZW50V2hlcmU6IEpRdWVyeSA9IG51bGw7XHJcbi8vICAgICAgICAgICAgICAgICBpZiAoIGF0dHJGcm9tRWxlbWVudC5Gcm9tQm9keSA9PSB0cnVlIClcclxuLy8gICAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBlbGVtZW50V2hlcmUgPSAkKCBkb2N1bWVudC5ib2R5ICkuZmluZCggYXR0ckZyb21FbGVtZW50LlNlbGVjdG9yVGV4dCApO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgZWxzZVxyXG4vLyAgICAgICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmICggYXR0ckZyb21FbGVtZW50LlNlbGVjdG9yVGV4dCA9PSBudWxsIClcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFdoZXJlID0gZWxlbWVudFJvb3Q7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50V2hlcmUgPSBlbGVtZW50Um9vdC5maW5kKCBhdHRyRnJvbUVsZW1lbnQuU2VsZWN0b3JUZXh0ICk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICBmaS5TZXRWYWx1ZSggdGhpcywgZWxlbWVudFdoZXJlICk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC8qKlxyXG4vLyAgICAgICAgICAqIOWwhmRhdGHmlbDmja7lj43lsITliLDlvZPliY3nmoRWaWV3TW9kZWzkuK1cclxuLy8gICAgICAgICAgKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuLy8gICAgICAgICAgKi9cclxuLy8gICAgICAgICBwdWJsaWMgRnJvbU9iamVjdCggZGF0YTogYW55ICk6IHZvaWRcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIGxldCBtb2RlbFR5cGUgPSB0aGlzLkdldFR5cGUoKTtcclxuLy8gICAgICAgICAgICAgbGV0IGZpZWxkSW5mb3MgPSBtb2RlbFR5cGUuR2V0RmllbGRzKCk7XHJcbi8vICAgICAgICAgICAgIGZvciAoIGNvbnN0IGZpIG9mIGZpZWxkSW5mb3MgKVxyXG4vLyAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgYXR0ckZyb21FbGVtZW50ID0gZmkuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEF0dHJpYnV0ZXMuRnJvbUVsZW1lbnRBdHRyaWJ1dGUgKSApO1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKCBhdHRyRnJvbUVsZW1lbnQgPT0gbnVsbCApXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudDogSlF1ZXJ5ID0gZmkuR2V0VmFsdWUoIHRoaXMgKTtcclxuLy8gICAgICAgICAgICAgICAgIGlmICggZWxlbWVudCA9PSBudWxsIHx8IGVsZW1lbnQubGVuZ3RoID09IDAgKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IGRhdGFWYWx1ZSA9IGRhdGFbIGZpLk5hbWUgXTtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBkYXRhVHlwZSA9IHR5cGVvZiggZGF0YVZhbHVlICk7XHJcbi8vICAgICAgICAgICAgICAgICBpZiAoIGRhdGFWYWx1ZSA9PSBudWxsIClcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuLy8gICAgICAgICAgICAgICAgIGlmICggZGF0YVR5cGUgPT0gXCJib29sZWFuXCIgKVxyXG4vLyAgICAgICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucHJvcCggXCJjaGVja2VkXCIsIGRhdGFWYWx1ZSApO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIGRhdGFUeXBlID09IFwic3RyaW5nXCIgfHwgZGF0YVR5cGUgPT0gXCJudW1iZXJcIiApXHJcbi8vICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWwoIGRhdGFWYWx1ZSApO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIGxldCBwcm9wZXJ0eUluZm9zID0gbW9kZWxUeXBlLkdldFByb3BlcnRpZXMoKTtcclxuLy8gICAgICAgICAgICAgZm9yICggY29uc3QgcGkgb2YgcHJvcGVydHlJbmZvcyApXHJcbi8vICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBkYXRhVmFsdWUgPSBkYXRhWyBwaS5OYW1lIF07XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgZGF0YVR5cGUgPSB0eXBlb2YoIGRhdGFWYWx1ZSApO1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKCBkYXRhVmFsdWUgPT0gbnVsbCApXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbi8vICAgICAgICAgICAgICAgICBwaS5TZXRWYWx1ZSggdGhpcywgZGF0YVZhbHVlICk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC8qKlxyXG4vLyAgICAgICAgICAqIOWwhuW9k+WJjeeahFZpZXdNb2RlbOaooeWei+WPjeWwhOWIsOaVsOaNrlxyXG4vLyAgICAgICAgICAqIEBwYXJhbSB0eXBlIOaVsOaNruexu+Wei1xyXG4vLyAgICAgICAgICAqL1xyXG4vLyAgICAgICAgIHB1YmxpYyBUb09iamVjdDwgVCBleHRlbmRzIG9iamVjdCA+KCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVCA+ICk6IFRcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIGxldCBvYmogPSB0eXBlLkdldENvbnN0cnVjdG9yKCkuSW52b2tlKCk7XHJcbi8vICAgICAgICAgICAgIGxldCBtb2RlbFR5cGUgPSB0aGlzLkdldFR5cGUoKTtcclxuLy8gICAgICAgICAgICAgbGV0IGZpZWxkSW5mb3MgPSBtb2RlbFR5cGUuR2V0RmllbGRzKCk7XHJcbi8vICAgICAgICAgICAgIGZvciAoIGNvbnN0IGZpIG9mIGZpZWxkSW5mb3MgKVxyXG4vLyAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgYXR0ckZyb21FbGVtZW50ID0gZmkuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEF0dHJpYnV0ZXMuRnJvbUVsZW1lbnRBdHRyaWJ1dGUgKSApO1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKCBhdHRyRnJvbUVsZW1lbnQgPT0gbnVsbCApXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgZmlfb2JqID0gdHlwZS5HZXRGaWVsZE9uZSggZmkuTmFtZSApO1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKCBmaV9vYmogPT0gbnVsbCApXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgYXR0ckRlY2xhcmluZ1R5cGUgPSBmaV9vYmouR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIFN5c3RlbS5SZWZsZWN0aW9uLkNEZWNsYXJpbmdUeXBlQXR0cmlidXRlICkgKTtcclxuLy8gICAgICAgICAgICAgICAgIGlmICggYXR0ckRlY2xhcmluZ1R5cGUgPT0gbnVsbCApXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IDxKUXVlcnk+ZmkuR2V0VmFsdWUoIHRoaXMgKTtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBkYXRhVmFsdWVUeXBlID0gYXR0ckRlY2xhcmluZ1R5cGUuRGVjbGFyaW5nVHlwZTtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBkYXRhVmFsdWU6IGFueSA9IG51bGw7XHJcbi8vICAgICAgICAgICAgICAgICBpZiAoIGRhdGFWYWx1ZVR5cGUuSXNFcXVpdmFsZW50VG8oIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggTnVtYmVyICkgKSApXHJcbi8vICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGF0YVZhbHVlID0gTnVtYmVyKCBlbGVtZW50LnZhbCgpICk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKCBOdW1iZXIuaXNOYU4oIGRhdGFWYWx1ZSApIClcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZhbHVlID0gbnVsbDtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBkYXRhVmFsdWVUeXBlLklzRXF1aXZhbGVudFRvKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIFN0cmluZyApICkgKVxyXG4vLyAgICAgICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGRhdGFWYWx1ZSA9IGVsZW1lbnQudmFsKCkudG9TdHJpbmcoKTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBkYXRhVmFsdWVUeXBlLklzRXF1aXZhbGVudFRvKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEJvb2xlYW4gKSApIClcclxuLy8gICAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBkYXRhVmFsdWUgPSBlbGVtZW50LnByb3AoIFwiY2hlY2tlZFwiICk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICBmaV9vYmouU2V0VmFsdWUoIG9iaiwgZGF0YVZhbHVlICk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgcmV0dXJuIDxUPm9iajtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG5cclxuXHJcbi8vICAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ1ZpZXdDb250cm9sbGVyXHJcbi8vICAgICB7XHJcblxyXG4vLyAgICAgfTtcclxuXHJcblxyXG4vLyAgICAgLy8gZXhwb3J0IGludGVyZmFjZSBJVmlld1Byb3ZpZGVyXHJcbi8vICAgICAvLyB7XHJcbi8vICAgICAvLyAgICAgUmVzb2x2ZVZpZXc8IFRWaWV3IGV4dGVuZHMgQ1ZpZXcgPiggdmlld1R5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBUVmlldyA+ICk6IFRWaWV3O1xyXG4vLyAgICAgLy8gfVxyXG5cclxuLy8gICAgIC8vIHZhciB1Vmlld1Byb3ZpZGVyOiBJVmlld1Byb3ZpZGVyID0gbnVsbDtcclxuLy8gICAgIC8vIHZhciB1SW9jUHJvdmlkZXI6IEF1dG9mYWMuSVByb3ZpZGVyID0gbnVsbDtcclxuXHJcbi8vICAgICAvLyBleHBvcnQgZnVuY3Rpb24gSW5pdGlhbGl6ZVZpZXdQcm92aWRlciggcHJvdmlkZXI6IElWaWV3UHJvdmlkZXIgKTogdm9pZFxyXG4vLyAgICAgLy8ge1xyXG4vLyAgICAgLy8gICAgIHVWaWV3UHJvdmlkZXIgPSBwcm92aWRlcjtcclxuLy8gICAgIC8vICAgICAvL2NvbnNvbGUuZGVidWcoIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoIE12YywgXCJ1Vmlld1Byb3ZpZGVyXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0gKSApO1xyXG4vLyAgICAgLy8gfVxyXG5cclxuLy8gICAgIC8vIGV4cG9ydCBmdW5jdGlvbiBHZXRWaWV3UHJvdmlkZXIoKTogSVZpZXdQcm92aWRlclxyXG4vLyAgICAgLy8ge1xyXG4vLyAgICAgLy8gICAgIHJldHVybiB1Vmlld1Byb3ZpZGVyO1xyXG4vLyAgICAgLy8gfVxyXG5cclxuLy8gICAgIHZhciB1SW9jUHJvdmlkZXI6IEF1dG9mYWMuSUxpZmV0aW1lU2NvcGUgPSBudWxsO1xyXG5cclxuLy8gICAgIGV4cG9ydCBmdW5jdGlvbiBJbml0aWFsaXplSW9jKCBpb2NQcm92aWRlcjogQXV0b2ZhYy5JTGlmZXRpbWVTY29wZSApOiB2b2lkXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgdUlvY1Byb3ZpZGVyID0gaW9jUHJvdmlkZXI7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZXhwb3J0IGZ1bmN0aW9uIEdldElvYygpOiBBdXRvZmFjLklMaWZldGltZVNjb3BlXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgcmV0dXJuIHVJb2NQcm92aWRlcjtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4iLCJcclxubmFtZXNwYWNlIGliZXJiYXIuTVZDXHJcbntcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBEaXNhYmxlVmlld0NvbXBvbmVudCggY29tcG9uZW50VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uSURlbGF5VHlwZSApOiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JDbGFzc1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBTeXN0ZW0uQXR0cmlidXRlRGVjb3JhdGUoIG5ldyBBdHRyaWJ1dGVzLkNEaXNhYmxlVmlld0NvbXBvbmVudEF0dHJpYnV0ZSggY29tcG9uZW50VHlwZSApICk7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQ1xyXG57XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gVmlld01vZGVsKCk6IFN5c3RlbS5VRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvckZpZWxkXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbS5BdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IEF0dHJpYnV0ZXMuQ1ZpZXdNb2RlbEF0dHJpYnV0ZSgpICk7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5LZXJuZWxKcXVlcnkuQXR0cmlidXRlc1xyXG57XHJcbiAgICBAU3lzdGVtLkF0dHJpYnV0ZVVzYWdlKCBTeXN0ZW0uVUF0dHJpYnV0ZVRhcmdldC5DbGFzcywgdHJ1ZSwgZmFsc2UgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENEZXBlbmRPblZpZXdBdHRyaWJ1dGUgZXh0ZW5kcyBTeXN0ZW0uQ0F0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBtX3NlbGVjdG9yVGV4dDogc3RyaW5nID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9mcm9tQm9keTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIHByb3RlY3RlZCBtX2NyZWF0ZU1ldGhvZDogVVZpZXdDcmVhdGVTdHlsZSA9IFVWaWV3Q3JlYXRlU3R5bGUuQXBwZW5kO1xyXG4gICAgICAgIHByb3RlY3RlZCBtX3ZpZXdUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgQ1ZpZXcgPiA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvciggdmlld1R5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBDVmlldyA+LCBzZWxlY3RvclRleHQ6IHN0cmluZyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1fc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3JUZXh0O1xyXG4gICAgICAgICAgICB0aGlzLm1fdmlld1R5cGUgPSB2aWV3VHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgVmlld1R5cGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV92aWV3VHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgU2VsZWN0b3JUZXh0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fc2VsZWN0b3JUZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCBGcm9tQm9keSggdmFsdWU6IGJvb2xlYW4gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2Zyb21Cb2R5ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBnZXQgRnJvbUJvZHkoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9mcm9tQm9keTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgQ3JlYXRlTWV0aG9kKCB2YWx1ZTogVVZpZXdDcmVhdGVTdHlsZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fY3JlYXRlTWV0aG9kID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IENyZWF0ZU1ldGhvZCgpOiBVVmlld0NyZWF0ZVN0eWxlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2NyZWF0ZU1ldGhvZDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5LkF0dHJpYnV0ZXNcclxue1xyXG4gICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuQ2xhc3MsIHRydWUsIHRydWUgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENPdmVyU2Nyb2xsQXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9zZWxlY3RvclRleHQ6IHN0cmluZyA9IG51bGw7XHJcbiAgICBcclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHNlbGVjdG9yVGV4dDogc3RyaW5nIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9zZWxlY3RvclRleHQgPSBzZWxlY3RvclRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHVibGljIGdldCBTZWxlY3RvclRleHQoKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3NlbGVjdG9yVGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLktlcm5lbEpxdWVyeS5BdHRyaWJ1dGVzXHJcbntcclxuICAgIEBTeXN0ZW0uQXR0cmlidXRlVXNhZ2UoIFN5c3RlbS5VQXR0cmlidXRlVGFyZ2V0Lk1ldGhvZCwgdHJ1ZSwgZmFsc2UgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENTZXRBY3Rpb25BdHRyaWJ1dGUgZXh0ZW5kcyBTeXN0ZW0uQ0F0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBtX2V2ZW50OiBzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBtX3NlbGVjdG9yVGV4dDogc3RyaW5nID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9mcm9tQm9keTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGV2ZW50OiBzdHJpbmcsIHNlbGVjdG9yVGV4dDogc3RyaW5nLCBmcm9tQm9keTogYm9vbGVhbiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1fZXZlbnQgPSBldmVudDtcclxuICAgICAgICAgICAgdGhpcy5tX3NlbGVjdG9yVGV4dCA9IHNlbGVjdG9yVGV4dDtcclxuICAgICAgICAgICAgdGhpcy5tX2Zyb21Cb2R5ID0gZnJvbUJvZHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IEV2ZW50KCkgOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fZXZlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBnZXQgU2VsZWN0b3JUZXh0KCkgOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fc2VsZWN0b3JUZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBGcm9tQm9keSgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2Zyb21Cb2R5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLktlcm5lbEpxdWVyeS5BdHRyaWJ1dGVzXHJcbntcclxuICAgIEBTeXN0ZW0uQXR0cmlidXRlVXNhZ2UoIFN5c3RlbS5VQXR0cmlidXRlVGFyZ2V0LlBhcmFtZXRlciwgZmFsc2UsIGZhbHNlIClcclxuICAgIGV4cG9ydCBjbGFzcyBDVHJpZ2dlckVsZW1lbnRBdHRyaWJ1dGUgZXh0ZW5kcyBTeXN0ZW0uQ0F0dHJpYnV0ZVxyXG4gICAge1xyXG5cclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5LZXJuZWxKcXVlcnkuQXR0cmlidXRlc1xyXG57XHJcbiAgICBAU3lzdGVtLkF0dHJpYnV0ZVVzYWdlKCBTeXN0ZW0uVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIGZhbHNlLCBmYWxzZSApXHJcbiAgICBleHBvcnQgY2xhc3MgQ1RyaWdnZXJFdmVudEF0dHJpYnV0ZSBleHRlbmRzIFN5c3RlbS5DQXR0cmlidXRlXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5LkF0dHJpYnV0ZXNcclxue1xyXG4gICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuUGFyYW1ldGVyLCBmYWxzZSwgZmFsc2UgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENUcmlnZ2VyVmlld0F0dHJpYnV0ZSBleHRlbmRzIFN5c3RlbS5DQXR0cmlidXRlXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5LkF0dHJpYnV0ZXNcclxue1xyXG4gICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuTWV0aG9kLCBmYWxzZSwgZmFsc2UgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENXYXRjaE92ZXJTY3JvbGxBdHRyaWJ1dGUgZXh0ZW5kcyBTeXN0ZW0uQ0F0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5LZXJuZWxKcXVlcnlcclxue1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBBdHRyaWJ1dGVzXHJcbiAgICB7XHJcbiAgICAgICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuRmllbGQsIGZhbHNlLCBmYWxzZSApXHJcbiAgICAgICAgZXhwb3J0IGNsYXNzIEZyb21FbGVtZW50QXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3RlY3RlZCBtX3NlbGVjdG9yVGV4dDogc3RyaW5nID0gbnVsbDtcclxuICAgICAgICAgICAgcHJvdGVjdGVkIG1fZnJvbUJvZHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHNlbGVjdG9yVGV4dDogc3RyaW5nLCBmcm9tQm9keTogYm9vbGVhbiApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3JUZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgcHVibGljIGdldCBTZWxlY3RvclRleHQoKTogc3RyaW5nXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fc2VsZWN0b3JUZXh0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwdWJsaWMgZ2V0IEZyb21Cb2R5KCk6IGJvb2xlYW5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9mcm9tQm9keTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogKioo54m55oCnKSoqXHJcbiAgICAgKiBcclxuICAgICAqICsg6I635Y+WSlF1ZXJ55YWD57Sg77yM5YaF6YOo5Lya6LCD55SoIFN5c3RlbS5SZWZsZWN0aW9uLkVudW1lcmFibGUg6KOF6aWw5ZmoXHJcbiAgICAgKiArIOS/rumlsO+8muWtl+autVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3JUZXh0IEpRdWVyeemAieaLqeWZqFxyXG4gICAgICogQHBhcmFtIGZyb21Cb2R5ICjlj6/pgIkp5piv5ZCm5LuOQm9keeW8gOWni+afpeaJvumAieaLqVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gRnJvbUVsZW1lbnQoIHNlbGVjdG9yVGV4dDogc3RyaW5nLCBmcm9tQm9keT86IGJvb2xlYW4gKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yRmllbGRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oIHRhcmdldDogYW55LCBmaWVsZE5hbWU6IHN0cmluZyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTeXN0ZW0uUmVmbGVjdGlvbi5FbnVtZXJhYmxlKCB0YXJnZXQsIGZpZWxkTmFtZSApO1xyXG4gICAgICAgICAgICBTeXN0ZW0uQXR0cmlidXRlRGVjb3JhdGUoIG5ldyBBdHRyaWJ1dGVzLkZyb21FbGVtZW50QXR0cmlidXRlKCBzZWxlY3RvclRleHQsIChmcm9tQm9keSA9PSB0cnVlKSA/IHRydWUgOiBmYWxzZSApICkoIHRhcmdldCwgZmllbGROYW1lICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5LZXJuZWxKcXVlcnlcclxue1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBBdHRyaWJ1dGVzXHJcbiAgICB7XHJcbiAgICAgICAgZXhwb3J0IGNsYXNzIEZyb21WaWV3QXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gRnJvbVZpZXcoKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yRmllbGRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3lzdGVtLkF0dHJpYnV0ZURlY29yYXRlKCBuZXcgQXR0cmlidXRlcy5Gcm9tVmlld0F0dHJpYnV0ZSgpICk7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5LkNvbXBvbmVudHNcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENBY3Rpb25CaW5kZXIgaW1wbGVtZW50cyBDb3JlLkNBY3Rpb25CaW5kZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQmluZEFjdGlvbnMoIHZpZXc6IENWaWV3LCBoYW5kbGVyVHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKTogQ29yZS5JQWN0aW9uQmluZGVyUmVzdWx0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IENBY3Rpb25CaW5kZXJSZXN1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5SZUJpbmRBY3Rpb25zRm9yVHlwZSggdmlldywgaGFuZGxlclR5cGUgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBSZUJpbmRBY3Rpb25zRm9yVHlwZSggdmlldzogQ1ZpZXcsIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBtZXRob2RJbmZvcyA9ICggdHlwZSA9PSBudWxsICkgPyB2aWV3LkdldFR5cGUoKS5HZXRNZXRob2RzKCkgOiB0eXBlLkdldE1ldGhvZHMoKTtcclxuICAgICAgICAgICAgbGV0IGJpbmRlciA9IHRoaXM7XHJcbiAgICAgICAgICAgIGZvciAoIGNvbnN0IG1pIG9mIG1ldGhvZEluZm9zIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbkF0dHJMaXN0ID0gbWkuR2V0Q3VzdG9tQXR0cmlidXRlcyggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBBdHRyaWJ1dGVzLkNTZXRBY3Rpb25BdHRyaWJ1dGUgKSApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBhY3Rpb25BdHRyTGlzdCA9PSBudWxsIHx8IGFjdGlvbkF0dHJMaXN0Lmxlbmd0aCA9PSAwIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGZvciAoIGNvbnN0IGFjdGlvbkF0dHIgb2YgYWN0aW9uQXR0ckxpc3QgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBldmVudCA9IGFjdGlvbkF0dHIuRXZlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdG9yVGV4dCA9IGFjdGlvbkF0dHIuU2VsZWN0b3JUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50VGVtcDogSlF1ZXJ5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGFjdGlvbkF0dHIuRnJvbUJvZHkgPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHNlbGVjdG9yVGV4dCA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZW1wID0gJCggXCJib2R5XCIgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRlbXAgPSAkKCBzZWxlY3RvclRleHQgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RvclRleHQgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGVtcCA9IHZpZXcuR2V0RWxlbWVudFJvb3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRlbXAgPSB2aWV3LkdldEVsZW1lbnRSb290KCkuZmluZCggc2VsZWN0b3JUZXh0ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggZWxlbWVudFRlbXAgPT0gbnVsbCB8fCBlbGVtZW50VGVtcC5sZW5ndGggPT0gMCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggZXZlbnQgPT0gXCJjbGlja1wiIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZW1wLmNsaWNrKCBmdW5jdGlvbiggZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5kZXIuSW52b2tlQ29udHJvbGxlck1ldGhvZCggdmlldywgdHlwZSwgJCggdGhpcyApLCBlLCBtaSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIGV2ZW50ID09IFwidmFsdWVjaGFuZ2VcIiApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGVtcC5jaGFuZ2UoIGZ1bmN0aW9uKCBlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmRlci5JbnZva2VDb250cm9sbGVyTWV0aG9kKCB2aWV3LCB0eXBlLCAkKCB0aGlzICksIGUsIG1pICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGVtcC5vbiggZXZlbnQsIGZ1bmN0aW9uKCBlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmRlci5JbnZva2VDb250cm9sbGVyTWV0aG9kKCB2aWV3LCB0eXBlLCAkKCB0aGlzICksIGUsIG1pICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBJbnZva2VDb250cm9sbGVyTWV0aG9kKCB2aWV3OiBDVmlldywgdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUsIGVsZW1lbnRFdmVudDogSlF1ZXJ5LCBqcUV2ZW50OiBKUXVlcnkuRXZlbnQsIG1ldGhvZEluZm86IFN5c3RlbS5SZWZsZWN0aW9uLkNNZXRob2RJbmZvICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcm92aWRlciA9IHZpZXcuTGlmZXRpbWVTY29wZTtcclxuICAgICAgICAgICAgbGV0IGNhbGxlciA9ICggdHlwZSA9PSBudWxsICkgPyB2aWV3IDogcHJvdmlkZXIuUmVzb2x2ZSggdHlwZSApO1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1ldGVySW5mb3MgPSBtZXRob2RJbmZvLkdldFBhcmFtZXRlcnMoKTtcclxuICAgICAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSBBcnJheSggcGFyYW1ldGVySW5mb3MubGVuZ3RoICk7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBwYXJhbWV0ZXJJbmRleCA9IDA7IHBhcmFtZXRlckluZGV4IDwgcGFyYW1ldGVySW5mb3MubGVuZ3RoOyBwYXJhbWV0ZXJJbmRleCArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBwaSA9IHBhcmFtZXRlckluZm9zWyBwYXJhbWV0ZXJJbmRleCBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggcGkuSXNEZWZpbmVkKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEF0dHJpYnV0ZXMuQ1RyaWdnZXJFbGVtZW50QXR0cmlidXRlICkgKSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyc1sgcGFyYW1ldGVySW5kZXggXSA9IGVsZW1lbnRFdmVudDtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHBpLklzRGVmaW5lZCggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBBdHRyaWJ1dGVzLkNUcmlnZ2VyRXZlbnRBdHRyaWJ1dGUgKSApIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzWyBwYXJhbWV0ZXJJbmRleCBdID0ganFFdmVudDtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHBpLklzRGVmaW5lZCggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBBdHRyaWJ1dGVzLkNUcmlnZ2VyVmlld0F0dHJpYnV0ZSApICkgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnNbIHBhcmFtZXRlckluZGV4IF0gPSB2aWV3O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggcGkuSXNEZWZpbmVkKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEF1dG9mYWMuQ0luamVjdExpZmV0aW1lU2NvcGVBdHRyaWJ1dGUgKSApIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzWyBwYXJhbWV0ZXJJbmRleCBdID0gcHJvdmlkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9sZXQgYXR0ckRlY2xhcmluZ1R5cGUgPSBwaS5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggU3lzdGVtLlJlZmxlY3Rpb24uQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUgKSApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtZXRlclR5cGUgPSBwaS5QYXJhbWV0ZXJUeXBlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtZXRlck5hbWUgPSBwaS5OYW1lO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBwYXJhbWV0ZXJUeXBlICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnNbIHBhcmFtZXRlckluZGV4IF0gPSBwcm92aWRlci5SZXNvbHZlKCBwYXJhbWV0ZXJUeXBlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGF0dHJJb2NXaXRoTmFtZSA9IHBpLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBBdXRvZmFjLkNXaXRoTmFtZUF0dHJpYnV0ZSApICk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCBhdHRySW9jV2l0aE5hbWUgIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBwYXJhbWV0ZXJzWyBwYXJhbWV0ZXJJbmRleCBdID0gcHJvdmlkZXIuUmVzb2x2ZU5hbWVkKCBwYXJhbWV0ZXJUeXBlLCBhdHRySW9jV2l0aE5hbWUuTmFtZSApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgYXR0cklvY1dpdGhLZXkgPSBwaS5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQXV0b2ZhYy5DV2l0aEtleUF0dHJpYnV0ZSApICk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmICggYXR0cklvY1dpdGhLZXkgIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHBhcmFtZXRlcnNbIHBhcmFtZXRlckluZGV4IF0gPSBwcm92aWRlci5SZXNvbHZlS2V5ZWQoIHBhcmFtZXRlclR5cGUsIGF0dHJJb2NXaXRoS2V5LktleSApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcGFyYW1ldGVyc1sgcGFyYW1ldGVySW5kZXggXSA9IHByb3ZpZGVyLlJlc29sdmUoIHBhcmFtZXRlclR5cGUgKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZEluZm8uSW52b2tlKCBjYWxsZXIsIC4uLnBhcmFtZXRlcnMgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5LkNvbXBvbmVudHNcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENBY3Rpb25CaW5kZXJSZXN1bHQgaW1wbGVtZW50cyBDb3JlLklBY3Rpb25CaW5kZXJSZXN1bHRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgRGlzcG9zZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLktlcm5lbEpxdWVyeS5Db21wb25lbnRzXHJcbntcclxuICAgIEBTeXN0ZW0uUmVmbGVjdGlvbi5BdXRvUmVmbGVjdE1ldGFkYXRhX0NvbnN0cnVjdG9yXHJcbiAgICBAU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU5pY2tuYW1lKCBcImliZXJiYXI6Ok1WQzo6S2VybmVsSnF1ZXJ5OjpDb21wb25lbnRzOjpDQ29tcG9uZW50RGVwZW5kT25WaWV3c1wiIClcclxuICAgIGV4cG9ydCBjbGFzcyBDQ29tcG9uZW50RGVwZW5kT25WaWV3cyBpbXBsZW1lbnRzIENvcmUuSUNvbXBvbmVudEluaXRcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIG1fdmlld3NEZXBlbmRPbjogQ0NvbXBvbmVudERlcGVuZE9uVmlld3MuSW5pdFJlc3VsdCA9IEFycmF5KCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBJbml0VmlldyggdmlldzogQ1ZpZXcgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHZpZXdQcm92aWRlciA9IHZpZXcuTGlmZXRpbWVTY29wZTtcclxuICAgICAgICAgICAgbGV0IGF0dHJMaXN0X1ZpZXdEZXBlbmRPbiA9IHZpZXcuR2V0VHlwZSgpLkdldEN1c3RvbUF0dHJpYnV0ZXMoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQXR0cmlidXRlcy5DRGVwZW5kT25WaWV3QXR0cmlidXRlICksIGZhbHNlICk7XHJcbiAgICAgICAgICAgIGlmICggYXR0ckxpc3RfVmlld0RlcGVuZE9uICE9IG51bGwgJiYgYXR0ckxpc3RfVmlld0RlcGVuZE9uLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBjb25zdCBhdHRyIG9mIGF0dHJMaXN0X1ZpZXdEZXBlbmRPbiApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZpZXdUZW1wID0gdmlld1Byb3ZpZGVyLlJlc29sdmUoIGF0dHIuVmlld1R5cGUgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHZpZXdUZW1wID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBgY2FuJ3QgcmVzb2x2ZSB2aWV3IG9mIHR5cGUgXCIke2F0dHIuVmlld1R5cGUuR2V0Tmlja25hbWUoKX1cImAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRXaGVyZTogSlF1ZXJ5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGF0dHIuRnJvbUJvZHkgPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50V2hlcmUgPSAkKCBkb2N1bWVudC5ib2R5ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggYXR0ci5TZWxlY3RvclRleHQgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50V2hlcmUgPSB2aWV3LkdldEVsZW1lbnRSb290KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRXaGVyZSA9IHZpZXcuR2V0RWxlbWVudFJvb3QoKS5maW5kKCBhdHRyLlNlbGVjdG9yVGV4dCApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2aWV3VGVtcC5DcmVhdGUoIGVsZW1lbnRXaGVyZSwgYXR0ci5DcmVhdGVNZXRob2QgKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fdmlld3NEZXBlbmRPbi5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdUeXBlOiBhdHRyLlZpZXdUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3SW5zdGFuY2U6IHZpZXdUZW1wXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlSW5pdFZpZXcoIHZpZXc6IENWaWV3ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX3ZpZXdzRGVwZW5kT24ubGVuZ3RoID4gMCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoIGNvbnN0IHZkIG9mIHRoaXMubV92aWV3c0RlcGVuZE9uIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2ZC52aWV3SW5zdGFuY2UuRGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3ZpZXdzRGVwZW5kT24gPSBBcnJheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuSW5pdFZpZXcoIHZpZXcgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgVmlld3MoKTogYW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3ZpZXdzRGVwZW5kT247XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDQ29tcG9uZW50RGVwZW5kT25WaWV3c1xyXG4gICAge1xyXG4gICAgICAgIGV4cG9ydCB0eXBlIEluaXRSZXN1bHQgPSBBcnJheTxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZpZXdUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgQ1ZpZXcgPjtcclxuICAgICAgICAgICAgdmlld0luc3RhbmNlOiBDVmlldztcclxuICAgICAgICB9ID47XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5LZXJuZWxKcXVlcnkuQ29tcG9uZW50c1xyXG57XHJcbiAgICBAaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvbi5UeXBlTmlja25hbWUoIFwiaWJlcmJhcjo6TVZDOjpLZXJuZWxKcXVlcnk6OkNvbXBvbmVudHM6OkNDb21wb25lbnRGYWRlSW5cIiApXHJcbiAgICBleHBvcnQgY2xhc3MgQ0NvbXBvbmVudEZhZGVJblxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgbV9kdXJhdGlvbjogSlF1ZXJ5LkR1cmF0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGdldCBEdXJhdGlvbigpOiBKUXVlcnkuRHVyYXRpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fZHVyYXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IER1cmF0aW9uKCB2YWx1ZTogSlF1ZXJ5LkR1cmF0aW9uIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9kdXJhdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5LZXJuZWxKcXVlcnkuQ29tcG9uZW50c1xyXG57XHJcbiAgICBAaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvbi5UeXBlTmlja25hbWUoIFwiaWJlcmJhcjo6TVZDOjpLZXJuZWxKcXVlcnk6OkNvbXBvbmVudHM6OkNDb21wb25lbnRGYWRlT3V0XCIgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENDb21wb25lbnRGYWRlT3V0XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBtX2R1cmF0aW9uOiBKUXVlcnkuRHVyYXRpb24gPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IER1cmF0aW9uKCk6IEpRdWVyeS5EdXJhdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9kdXJhdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgRHVyYXRpb24oIHZhbHVlOiBKUXVlcnkuRHVyYXRpb24gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2R1cmF0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5LZXJuZWxKcXVlcnkuQ29tcG9uZW50c1xyXG57XHJcbiAgICB2YXIgdUFsbG9jYXRlSUQ6IG51bWJlciA9IDA7XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQWxsb2NhdGVJRCgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICB1QWxsb2NhdGVJRCsrO1xyXG4gICAgICAgIHJldHVybiBcImliZXJiYXJfTVZDMl9cIiArIHVBbGxvY2F0ZUlEO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDQ29tcG9uZW50S2VybmVsSlF1ZXJ5IGV4dGVuZHMgTVZDLkNvcmUuQ0NvbXBvbmVudEtlcm5lbDwgSVZpZXdDcmVhdG9yID5cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIG1fdW5pcXVlSWQ6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9lbGVtZW50Um9vdDogSlF1ZXJ5ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX2NvbXBvbmVudEZhZGVJbjogQ0NvbXBvbmVudEZhZGVJbiA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSBtX2NvbXBvbmVudEZhZGVPdXQ6IENDb21wb25lbnRGYWRlT3V0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgQ3JlYXRlKCB2aWV3OiBDVmlldywgZWxlbWVudDogSlF1ZXJ5LCBtZXRob2Q6IFVWaWV3Q3JlYXRlU3R5bGUgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3VuaXF1ZUlkID0gQWxsb2NhdGVJRCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0ckhUTUw6IHN0cmluZztcclxuICAgICAgICAgICAgbGV0IGNsYXNzZXM6IEFycmF5PCBzdHJpbmcgPlxyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RySFRNTCA9IHZpZXcuUmV0dXJuSFRNTCgpO1xyXG4gICAgICAgICAgICAgICAgY2xhc3NlcyA9IHZpZXcuUmV0dXJuQ2xhc3NlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoICggZXJyb3IgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIkZhaWxlZCB0byBjcmVhdGUgaHRtbCB3aXRoIEpRdWVyeUtlcm5lbFwiICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBlcnJvci5zdGFjayApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RyQ2xhc3NlcyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmICggY2xhc3NlcyAhPSBudWxsICYmIGNsYXNzZXMubGVuZ3RoID4gMCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoIGNvbnN0IGNscyBvZiBjbGFzc2VzIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJDbGFzc2VzICs9IGNscyArIFwiIFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3RyQ2xhc3NlcyA9IGBjbGFzcz1cIiR7c3RyQ2xhc3Nlc31cImA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RySFRNTCA9IGA8ZGl2IGlkPVwiJHt0aGlzLm1fdW5pcXVlSWR9XCIgJHtzdHJDbGFzc2VzfT4ke3N0ckhUTUx9PC9kaXY+YDtcclxuICAgICAgICAgICAgaWYgKCBtZXRob2QgPT0gVVZpZXdDcmVhdGVTdHlsZS5BcHBlbmQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fZWxlbWVudFJvb3QgPSBlbGVtZW50LmFwcGVuZCggc3RySFRNTCApLmZpbmQoIFwiI1wiICsgdGhpcy5tX3VuaXF1ZUlkICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIG1ldGhvZCA9PSBVVmlld0NyZWF0ZVN0eWxlLkJlZm9yZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9lbGVtZW50Um9vdCA9IGVsZW1lbnQuYmVmb3JlKCBzdHJIVE1MICkucGFyZW50KCkuZmluZCggXCIjXCIgKyB0aGlzLm1fdW5pcXVlSWQgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9lbGVtZW50Um9vdCA9IGVsZW1lbnQuYWZ0ZXIoIHN0ckhUTUwgKS5wYXJlbnQoKS5maW5kKCBcIiNcIiArIHRoaXMubV91bmlxdWVJZCApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50RmFkZUluID0gdmlldy5HZXRDb21wb25lbnQoIFR5cGVPZiggQ0NvbXBvbmVudEZhZGVJbiApICk7XHJcbiAgICAgICAgICAgIHRoaXMubV9jb21wb25lbnRGYWRlT3V0ID0gdmlldy5HZXRDb21wb25lbnQoIFR5cGVPZiggQ0NvbXBvbmVudEZhZGVPdXQgKSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFJlQ3JlYXRlKCB2aWV3OiBDVmlldyApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc3RySFRNTDogc3RyaW5nO1xyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RySFRNTCA9IHZpZXcuUmV0dXJuSFRNTCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoICggZXJyb3IgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIkZhaWxlZCB0byBjcmVhdGUgaHRtbCB3aXRoIEpRdWVyeUtlcm5lbFwiICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBlcnJvci5zdGFjayApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubV9lbGVtZW50Um9vdC5lbXB0eSgpLmFwcGVuZCggc3RySFRNTCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBFbGVtZW50Um9vdCgpOiBKUXVlcnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fZWxlbWVudFJvb3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2hvdyggb25zaG93OiBTeXN0ZW0uVENhbGxiYWNrPCAoKSA9PiB2b2lkID4gKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fY29tcG9uZW50RmFkZUluID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fZWxlbWVudFJvb3Quc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgb25zaG93LkV4ZWN1dGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9lbGVtZW50Um9vdC5zaG93KCB0aGlzLm1fY29tcG9uZW50RmFkZUluLkR1cmF0aW9uLCBmdW5jdGlvbigpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25zaG93LkV4ZWN1dGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSGlkZSggb25oaWRlOiBTeXN0ZW0uVENhbGxiYWNrPCAoKSA9PiB2b2lkID4gKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fY29tcG9uZW50RmFkZU91dCA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2VsZW1lbnRSb290LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIG9uaGlkZS5FeGVjdXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fZWxlbWVudFJvb3QuaGlkZSggdGhpcy5tX2NvbXBvbmVudEZhZGVPdXQuRHVyYXRpb24sIGZ1bmN0aW9uKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvbmhpZGUuRXhlY3V0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBJc1Nob3coKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9lbGVtZW50Um9vdC5pcyggXCI6aGlkZGVuXCIgKSA9PSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBEaXNwb3NlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9lbGVtZW50Um9vdC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5tX2VsZW1lbnRSb290ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5LZXJuZWxKcXVlcnkuQ29tcG9uZW50c1xyXG57XHJcbiAgICBAU3lzdGVtLlJlZmxlY3Rpb24uQXV0b1JlZmxlY3RNZXRhZGF0YV9Db25zdHJ1Y3RvclxyXG4gICAgQFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVOaWNrbmFtZSggXCJpYmVyYmFyOjpNVkM6Oktlcm5lbEpxdWVyeTo6Q29tcG9uZW50czo6Q0NvbXBvbmVudE92ZXJTY3JvbGxcIiApXHJcbiAgICBleHBvcnQgY2xhc3MgQ0NvbXBvbmVudE92ZXJTY3JvbGwgaW1wbGVtZW50cyBDb3JlLklDb21wb25lbnRJbml0XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIEluaXRWaWV3KCB2aWV3OiBDVmlldyApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdmlld1R5cGUgPSB2aWV3LkdldFR5cGUoKTtcclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudEtlcm5lbCA9IHZpZXcuR2V0Q29tcG9uZW50S2VybmVsSnF1ZXJ5KCk7XHJcbiAgICAgICAgICAgIGxldCB3YXRjaCA9IHRoaXMuRmluZFdhdGNoTWV0aG9kKCB2aWV3VHlwZSApO1xyXG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlcyA9IHZpZXdUeXBlLkdldEN1c3RvbUF0dHJpYnV0ZXMoIFR5cGVPZiggQXR0cmlidXRlcy5DT3ZlclNjcm9sbEF0dHJpYnV0ZSApLCB0cnVlICk7XHJcbiAgICAgICAgICAgIGZvciAoIGNvbnN0IGF0dHIgb2YgYXR0cmlidXRlcyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50OiBKUXVlcnkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdG9yVGV4dCA9IGF0dHIuU2VsZWN0b3JUZXh0O1xyXG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RvclRleHQgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IGNvbXBvbmVudEtlcm5lbC5FbGVtZW50Um9vdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gY29tcG9uZW50S2VybmVsLkVsZW1lbnRSb290LmZpbmQoIHNlbGVjdG9yVGV4dCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCBlbGVtZW50Lmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKCBcIm92ZXJmbG93LXhcIiwgXCJoaWRkZW5cIiApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKCBcIm92ZXJmbG93LXlcIiwgXCJhdXRvXCIgKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNzcyggXCItd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZ1wiLCBcInRvdWNoXCIgKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlNldE92ZXJTY3JvbGwoIHZpZXcsIGVsZW1lbnQuZ2V0KCAwICksIHdhdGNoICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBSZUluaXRWaWV3KCB2aWV3OiBDVmlldyApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkluaXRWaWV3KCB2aWV3ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIEZpbmRXYXRjaE1ldGhvZCggdmlld1R5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICk6IFN5c3RlbS5SZWZsZWN0aW9uLkNNZXRob2RJbmZvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbWV0aG9kSW5mb3MgPSB2aWV3VHlwZS5HZXRNZXRob2RzKCk7XHJcbiAgICAgICAgICAgIGZvciAoIGNvbnN0IG1ldGhvZCBvZiBtZXRob2RJbmZvcyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggbWV0aG9kLklzRGVmaW5lZCggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBBdHRyaWJ1dGVzLkNXYXRjaE92ZXJTY3JvbGxBdHRyaWJ1dGUgKSApIClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBTZXRPdmVyU2Nyb2xsKCB2aWV3OiBDVmlldywgZWw6IEhUTUxFbGVtZW50LCBtZXRob2RJbmZvOiBTeXN0ZW0uUmVmbGVjdGlvbi5DTWV0aG9kSW5mbyApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIGVsID09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciB0b3AgPSB0aGlzLnNjcm9sbFRvcFxyXG4gICAgICAgICAgICAgICAgLHRvdGFsU2Nyb2xsID0gdGhpcy5zY3JvbGxIZWlnaHRcclxuICAgICAgICAgICAgICAgICxjdXJyZW50U2Nyb2xsID0gdG9wICsgdGhpcy5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpZih0b3AgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IDE7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihjdXJyZW50U2Nyb2xsID09PSB0b3RhbFNjcm9sbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gdG9wIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICggbWV0aG9kSW5mbyAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2RJbmZvLkludm9rZSggdmlldywgJCggdGhpcyApLCBVT3ZlclNjcm9sbEV2ZW50Lk9uQmVnaW4gKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGV2dClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5vZmZzZXRIZWlnaHQgPCB0aGlzLnNjcm9sbEhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAoPGFueT5ldnQpLl9pc1Njcm9sbGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIG1ldGhvZEluZm8gIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kSW5mby5JbnZva2UoIHZpZXcsICQoIHRoaXMgKSwgVU92ZXJTY3JvbGxFdmVudC5PbkVuZCApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoIFwic2Nyb2xsXCIsIGZ1bmN0aW9uKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBtZXRob2RJbmZvICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZEluZm8uSW52b2tlKCB2aWV3LCAkKCB0aGlzICksIFVPdmVyU2Nyb2xsRXZlbnQuT25TY3JvbGxpbmcgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5LkNvbXBvbmVudHNcclxue1xyXG4gICAgY2xhc3MgQ01vZGVsQmluZGVySW50ZXJuYWxcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIG1fdmlldzogQ1ZpZXcgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgbV9tb2RlbFR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIG1fbW9kZWw6IG9iamVjdCA9IG51bGw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCB2aWV3OiBDVmlldywgbW9kZWw6IG9iamVjdCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fdmlldyA9IHZpZXc7XHJcbiAgICAgICAgICAgIHRoaXMubV9tb2RlbFR5cGUgPSBtb2RlbC5HZXRUeXBlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9tb2RlbCA9IG1vZGVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEJpbmQoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudERlcGVuZE9uVmlld3MgPSB0aGlzLm1fdmlldy5HZXRDb21wb25lbnQoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQ0NvbXBvbmVudERlcGVuZE9uVmlld3MgKSApO1xyXG4gICAgICAgICAgICB0aGlzLkJpbmRQcm9wZXJ0aWVzV2l0aEVsZW1lbnRzQW5kVmlld3MoIGNvbXBvbmVudERlcGVuZE9uVmlld3MgPT0gbnVsbCA/IG51bGwgOiBjb21wb25lbnREZXBlbmRPblZpZXdzLlZpZXdzICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIEJpbmRQcm9wZXJ0aWVzV2l0aEVsZW1lbnRzQW5kVmlld3MoIHZpZXdMaXN0OiBDQ29tcG9uZW50RGVwZW5kT25WaWV3cy5Jbml0UmVzdWx0ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBmaWVsZEluZm9zID0gdGhpcy5tX21vZGVsVHlwZS5HZXRGaWVsZHMoKTtcclxuICAgICAgICAgICAgZm9yICggY29uc3QgZmkgb2YgZmllbGRJbmZvcyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIOe7keWumkRPTeWFg+e0oFxyXG4gICAgICAgICAgICAgICAgbGV0IGF0dHJGcm9tRWxlbWVudCA9IGZpLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBBdHRyaWJ1dGVzLkZyb21FbGVtZW50QXR0cmlidXRlICkgKTtcclxuICAgICAgICAgICAgICAgIGlmICggYXR0ckZyb21FbGVtZW50ICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmluZEZpZWxkV2l0aEVsZW1lbnQoIGZpLCBhdHRyRnJvbUVsZW1lbnQgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDnu5Hlrprop4blm75cclxuICAgICAgICAgICAgICAgIGxldCBhdHRyRnJvbVZpZXcgPSBmaS5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQXR0cmlidXRlcy5Gcm9tVmlld0F0dHJpYnV0ZSApICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGF0dHJGcm9tVmlldyAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJpbmRGaWVsZFdpdGhWaWV3KCBmaSwgdmlld0xpc3QgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgQmluZEZpZWxkV2l0aFZpZXcoIGZpZWxkSW5mbzogU3lzdGVtLlJlZmxlY3Rpb24uQ0ZpZWxkSW5mbywgdmlld0xpc3Q6IENDb21wb25lbnREZXBlbmRPblZpZXdzLkluaXRSZXN1bHQgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGF0dHJEZWNsYXJpbmdUeXBlID0gZmllbGRJbmZvLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBTeXN0ZW0uUmVmbGVjdGlvbi5DRGVjbGFyaW5nVHlwZUF0dHJpYnV0ZSApICk7XHJcbiAgICAgICAgICAgIGlmICggYXR0ckRlY2xhcmluZ1R5cGUgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgaXNBcnJheTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgdmlld1R5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGxldCBiaW5kVHlwZSA9IGZpZWxkSW5mby5GaWVsZFR5cGU7XHJcbiAgICAgICAgICAgIGlmICggYmluZFR5cGUuSXNJbmhlcml0RnJvbSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBBcnJheSApICkgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGF0dHJEZWNsYXJpbmdUeXBlLkdlbmVyaWNUeXBlcy5sZW5ndGggIT0gMSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCBcIlwiICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCBhdHRyRGVjbGFyaW5nVHlwZS5HZW5lcmljVHlwZXNbIDAgXS5Jc0luaGVyaXRGcm9tKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIENWaWV3ICkgKSA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCBcIlwiICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlzQXJyYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdmlld1R5cGUgPSBhdHRyRGVjbGFyaW5nVHlwZS5HZW5lcmljVHlwZXNbIDAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICggYmluZFR5cGUuSXNJbmhlcml0RnJvbSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBDVmlldyApICkgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpc0FycmF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB2aWV3VHlwZSA9IGJpbmRUeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCBcIlwiICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggaXNBcnJheSA9PSB0cnVlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZpZXdMaXN0VGVtcDogQXJyYXk8IENWaWV3ID4gPSBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgZm9yICggY29uc3Qgdmlld0xpc3ROb2RlIG9mIHZpZXdMaXN0IClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHZpZXdMaXN0Tm9kZS52aWV3VHlwZS5Jc0VxdWl2YWxlbnRUbyggdmlld1R5cGUgKSApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3TGlzdFRlbXAucHVzaCggdmlld0xpc3ROb2RlLnZpZXdJbnN0YW5jZSApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpZWxkSW5mby5TZXRWYWx1ZSggdGhpcy5tX21vZGVsLCB2aWV3TGlzdFRlbXAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoIGNvbnN0IHZpZXdMaXN0Tm9kZSBvZiB2aWV3TGlzdCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB2aWV3TGlzdE5vZGUudmlld1R5cGUuSXNFcXVpdmFsZW50VG8oIHZpZXdUeXBlICkgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRJbmZvLlNldFZhbHVlKCB0aGlzLm1fbW9kZWwsIHZpZXdMaXN0Tm9kZS52aWV3SW5zdGFuY2UgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIEJpbmRGaWVsZFdpdGhFbGVtZW50KCBmaWVsZEluZm86IFN5c3RlbS5SZWZsZWN0aW9uLkNGaWVsZEluZm8sIGF0dHJGcm9tRWxlbWVudDogQXR0cmlidXRlcy5Gcm9tRWxlbWVudEF0dHJpYnV0ZSApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudFdoZXJlOiBKUXVlcnkgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIGF0dHJGcm9tRWxlbWVudC5Gcm9tQm9keSA9PSB0cnVlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFdoZXJlID0gJCggZG9jdW1lbnQuYm9keSApLmZpbmQoIGF0dHJGcm9tRWxlbWVudC5TZWxlY3RvclRleHQgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggYXR0ckZyb21FbGVtZW50LlNlbGVjdG9yVGV4dCA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50V2hlcmUgPSB0aGlzLm1fdmlldy5HZXRFbGVtZW50Um9vdCgpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRXaGVyZSA9IHRoaXMubV92aWV3LkdldEVsZW1lbnRSb290KCkuZmluZCggYXR0ckZyb21FbGVtZW50LlNlbGVjdG9yVGV4dCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpZWxkSW5mby5TZXRWYWx1ZSggdGhpcy5tX21vZGVsLCBlbGVtZW50V2hlcmUgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENWaWV3TW9kZWxCaW5kZXIgZXh0ZW5kcyBNVkMuQ29yZS5DVmlld01vZGVsQmluZGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIEJpbmRNb2RlbCggdmlldzogQ1ZpZXcsIG1vZGVsOiBvYmplY3QgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IENNb2RlbEJpbmRlckludGVybmFsKCB2aWV3LCBtb2RlbCApLkJpbmQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5LZXJuZWxKcXVlcnlcclxue1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEFkZFZpZXdDb21wb25lbnRPdmVyU2Nyb2xsKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gQWRkVmlld0NvbXBvbmVudCggVHlwZU9mRGVsYXkoICgpID0+IENvbXBvbmVudHMuQ0NvbXBvbmVudE92ZXJTY3JvbGwgKSApO1xyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5LZXJuZWxKcXVlcnlcclxue1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIERlcGVuZE9uVmlldyggdmlld1R5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBDVmlldyA+LCBzZWxlY3RvclRleHQ6IHN0cmluZywgb3B0aW9ucz86IHsgZnJvbUJvZHk/OiBib29sZWFuLCBjcmVhdGVNZXRob2Q/OiBVVmlld0NyZWF0ZVN0eWxlIH0gKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yQ2xhc3NcclxuICAgIHtcclxuICAgICAgICBpZiAoIHZpZXdUeXBlID09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcInZpZXdUeXBlIG11c3QgYmUgdmFsaWQuXCIgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKCBzZWxlY3RvclRleHQgPT0gbnVsbCApXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoIFwic2VsZWN0b3JUZXh0IG11c3QgYmUgdmFsaWQuXCIgKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IG5ldyBBdHRyaWJ1dGVzLkNEZXBlbmRPblZpZXdBdHRyaWJ1dGUoIHZpZXdUeXBlLCBzZWxlY3RvclRleHQgKTtcclxuICAgICAgICBpZiAoIG9wdGlvbnMgIT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIG9wdGlvbnMuZnJvbUJvZHkgIT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZS5Gcm9tQm9keSA9IG9wdGlvbnMuZnJvbUJvZHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCBvcHRpb25zLmNyZWF0ZU1ldGhvZCAhPSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlLkNyZWF0ZU1ldGhvZCA9IG9wdGlvbnMuY3JlYXRlTWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTeXN0ZW0uQXR0cmlidXRlRGVjb3JhdGUoIGF0dHJpYnV0ZSApO1xyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQ1xyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENCdWlsZGVyXHJcbiAgICB7XHJcbiAgICAgICAgU2V0Q29tcG9uZW50S2VybmVsSnF1ZXJ5KCk6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOazqOWGjEpRdWVyeeaooeWei+e7keWumue7hOS7tlxyXG4gICAgICAgICAqIEBwYXJhbSBtb2RlbENvbXBvbmVudFR5cGUgKOWPr+mAiSnnu4Tku7bnsbvlnovvvIzpu5jorqQgaWJlcmJhci5NVkMuQ29yZS5DQ29tcG9uZW50QmluZE1vZGVsc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEFkZENvbXBvbmVudEJpbmRNb2RlbHNKcXVlcnkoXHJcbiAgICAgICAgICAgIG1vZGVsQ29tcG9uZW50VHlwZT86IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBvYmplY3QgPlxyXG4gICAgICAgICk6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOazqOWGjEpRdWVyeeS6i+S7tue7keWumue7hOS7tlxyXG4gICAgICAgICAqIEBwYXJhbSBhY3Rpb25Db21wb25lbnRUeXBlIFxyXG4gICAgICAgICAqIEBwYXJhbSBjb250cm9sbGVyQ29tcG9uZW50VHlwZSBcclxuICAgICAgICAgKi9cclxuICAgICAgICBBZGRDb21wb25lbnRCaW5kQWN0aW9uc0pxdWVyeShcclxuICAgICAgICAgICAgYWN0aW9uQ29tcG9uZW50VHlwZT86IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBvYmplY3QgPixcclxuICAgICAgICAgICAgY29udHJvbGxlckNvbXBvbmVudFR5cGU/OiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgb2JqZWN0ID5cclxuICAgICAgICApOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDms6jlhoxKUXVlcnnop4blm77kvp3otZbnu4Tku7bvvIzlv4XpobvmlL7lnKhBZGRDb21wb25lbnRCaW5kTW9kZWxzSlF1ZXJ55ZKMQWRkQ29tcG9uZW50QmluZEFjdGlvbnNKUXVlcnnliY3pnaJcclxuICAgICAgICAgKi9cclxuICAgICAgICBBZGRDb21wb25lbnREZXBlbmRPblZpZXcoKTogdm9pZDtcclxuICAgIH1cclxuXHJcbiAgICBDQnVpbGRlci5wcm90b3R5cGUuU2V0Q29tcG9uZW50S2VybmVsSnF1ZXJ5ID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuU2V0Q29tcG9uZW50S2VybmVsKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEtlcm5lbEpxdWVyeS5Db21wb25lbnRzLkNDb21wb25lbnRLZXJuZWxKUXVlcnkgKSApO1xyXG4gICAgfVxyXG5cclxuICAgIENCdWlsZGVyLnByb3RvdHlwZS5BZGRDb21wb25lbnRCaW5kTW9kZWxzSnF1ZXJ5ID0gZnVuY3Rpb24oXHJcbiAgICAgICAgbW9kZWxDb21wb25lbnRUeXBlPzogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IG9iamVjdCA+XHJcbiAgICApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5BZGRDb21wb25lbnRCaW5kTW9kZWxzKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEtlcm5lbEpxdWVyeS5Db21wb25lbnRzLkNWaWV3TW9kZWxCaW5kZXIgKSwgbW9kZWxDb21wb25lbnRUeXBlICk7XHJcbiAgICB9XHJcblxyXG4gICAgQ0J1aWxkZXIucHJvdG90eXBlLkFkZENvbXBvbmVudEJpbmRBY3Rpb25zSnF1ZXJ5ID0gZnVuY3Rpb24oXHJcbiAgICAgICAgYWN0aW9uQ29tcG9uZW50VHlwZT86IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBvYmplY3QgPixcclxuICAgICAgICBjb250cm9sbGVyQ29tcG9uZW50VHlwZT86IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBvYmplY3QgPlxyXG4gICAgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuQWRkQ29tcG9uZW50QmluZEFjdGlvbnMoXHJcbiAgICAgICAgICAgIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggS2VybmVsSnF1ZXJ5LkNvbXBvbmVudHMuQ0FjdGlvbkJpbmRlciApLFxyXG4gICAgICAgICAgICBhY3Rpb25Db21wb25lbnRUeXBlLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyQ29tcG9uZW50VHlwZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgQ0J1aWxkZXIucHJvdG90eXBlLkFkZENvbXBvbmVudERlcGVuZE9uVmlldyA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLkFkZENvbXBvbmVudCggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBLZXJuZWxKcXVlcnkuQ29tcG9uZW50cy5DQ29tcG9uZW50RGVwZW5kT25WaWV3cyApICk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSggQ0J1aWxkZXIucHJvdG90eXBlLCBcIlNldENvbXBvbmVudEtlcm5lbEpRdWVyeVwiLCB7IGVudW1lcmFibGU6IGZhbHNlIH0gKTtcclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQ1xyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENWaWV3XHJcbiAgICB7XHJcbiAgICAgICAgQ3JlYXRlKCAuLi5hcmdzOiBQYXJhbWV0ZXJzPCBLZXJuZWxKcXVlcnkuSVZpZXdDcmVhdG9yID4gKTogUmV0dXJuVHlwZTwgS2VybmVsSnF1ZXJ5LklWaWV3Q3JlYXRvciA+O1xyXG4gICAgICAgIEdldEVsZW1lbnRSb290KCk6IEpRdWVyeTtcclxuICAgICAgICBSZXR1cm5IVE1MKCk6IHN0cmluZztcclxuICAgICAgICBSZXR1cm5DbGFzc2VzKCk6IEFycmF5PCBzdHJpbmcgPjtcclxuICAgICAgICBHZXRDb21wb25lbnRLZXJuZWxKcXVlcnkoKTogS2VybmVsSnF1ZXJ5LkNvbXBvbmVudHMuQ0NvbXBvbmVudEtlcm5lbEpRdWVyeTtcclxuXHJcbiAgICAgICAgU2V0RmFkZUluKCBkdXJhdGlvbjogSlF1ZXJ5LkR1cmF0aW9uICk6IHZvaWRcclxuICAgICAgICBTZXRGYWRlT3V0KCBkdXJhdGlvbjogSlF1ZXJ5LkR1cmF0aW9uICk6IHZvaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgQ1ZpZXcucHJvdG90eXBlLkdldEVsZW1lbnRSb290ID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBjb21wb25lbnRKUXVlcnkgPSBTeXN0ZW0uZHluYW1pY19jYXN0KCB0aGlzLkdldENvbXBvbmVudEtlcm5lbDxLZXJuZWxKcXVlcnkuSVZpZXdDcmVhdG9yPigpLCBLZXJuZWxKcXVlcnkuQ29tcG9uZW50cy5DQ29tcG9uZW50S2VybmVsSlF1ZXJ5ICk7XHJcbiAgICAgICAgaWYgKCBjb21wb25lbnRKUXVlcnkgPT0gbnVsbCApXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJObyBKcXVlcnlcIiApO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnRKUXVlcnkuRWxlbWVudFJvb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgQ1ZpZXcucHJvdG90eXBlLkdldENvbXBvbmVudEtlcm5lbEpxdWVyeSA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gPEtlcm5lbEpxdWVyeS5Db21wb25lbnRzLkNDb21wb25lbnRLZXJuZWxKUXVlcnk+KHRoaXMuR2V0Q29tcG9uZW50S2VybmVsPEtlcm5lbEpxdWVyeS5JVmlld0NyZWF0b3I+KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIENWaWV3LnByb3RvdHlwZS5TZXRGYWRlSW4gPSBmdW5jdGlvbiggZHVyYXRpb246IEpRdWVyeS5EdXJhdGlvbiApXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudFR5cGUgPSBUeXBlT2YoIEtlcm5lbEpxdWVyeS5Db21wb25lbnRzLkNDb21wb25lbnRGYWRlSW4gKTtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5HZXRDb21wb25lbnQoIGNvbXBvbmVudFR5cGUgKTtcclxuICAgICAgICBpZiAoIGNvbXBvbmVudCA9PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiggYFRoZXJlIGlzIG5vIGNvbXBvbmVudDwke2NvbXBvbmVudFR5cGUuR2V0Tmlja25hbWUoKX0+YCApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb21wb25lbnQuRHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQ1ZpZXcucHJvdG90eXBlLlNldEZhZGVPdXQgPSBmdW5jdGlvbiggZHVyYXRpb246IEpRdWVyeS5EdXJhdGlvbiApXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudFR5cGUgPSBUeXBlT2YoIEtlcm5lbEpxdWVyeS5Db21wb25lbnRzLkNDb21wb25lbnRGYWRlT3V0ICk7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuR2V0Q29tcG9uZW50KCBjb21wb25lbnRUeXBlICk7XHJcbiAgICAgICAgaWYgKCBjb21wb25lbnQgPT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oIGBUaGVyZSBpcyBubyBjb21wb25lbnQ8JHtjb21wb25lbnRUeXBlLkdldE5pY2tuYW1lKCl9PmAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29tcG9uZW50LkR1cmF0aW9uID0gZHVyYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoIENWaWV3LnByb3RvdHlwZSwgXCJHZXRFbGVtZW50Um9vdFwiLCB7IGVudW1lcmFibGU6IGZhbHNlIH0gKTtcclxuICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoIENWaWV3LnByb3RvdHlwZSwgXCJTZXRGYWRlSW5cIiwgeyBlbnVtZXJhYmxlOiBmYWxzZSB9ICk7XHJcbiAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KCBDVmlldy5wcm90b3R5cGUsIFwiU2V0RmFkZU91dFwiLCB7IGVudW1lcmFibGU6IGZhbHNlIH0gKTtcclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLktlcm5lbEpxdWVyeVxyXG57XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gT3ZlclNjcm9sbCggc2VsZWN0b3JUZXh0OiBzdHJpbmcgKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yQ2xhc3NcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3lzdGVtLkF0dHJpYnV0ZURlY29yYXRlKCBuZXcgQXR0cmlidXRlcy5DT3ZlclNjcm9sbEF0dHJpYnV0ZSggc2VsZWN0b3JUZXh0ICkgKTtcclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLktlcm5lbEpxdWVyeVxyXG57XHJcbiAgICBleHBvcnQgY29uc3QgdUFjdGlvbk5hbWVfRm9jdXNJbiA9IFwiZm9jdXNpblwiO1xyXG4gICAgZXhwb3J0IGNvbnN0IHVBY3Rpb25OYW1lX0ZvY3VzT3V0ID0gXCJmb2N1c291dFwiO1xyXG4gICAgZXhwb3J0IGNvbnN0IHVBY3Rpb25OYW1lX01vdXNlT3ZlciA9IFwibW91c2VvdmVyXCI7XHJcbiAgICBleHBvcnQgY29uc3QgdUFjdGlvbk5hbWVfTW91c2VPdXQgPSBcIm1vdXNlb3V0XCI7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICogKirnibnmgKcqKlxyXG4gICAgICogXHJcbiAgICAgKiArIOagh+W/l+aOp+WItuWZqOaWueazle+8jOe7keWumkpRdWVyeeS6i+S7tlxyXG4gICAgICogKyDkv67ppbDvvJrmlrnms5VcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGV2ZW50IOS6i+S7tuexu+Wei1xyXG4gICAgICogQHBhcmFtIHNlbGVjdG9yVGV4dCBKUXVlcnnpgInmi6nlmahcclxuICAgICAqIEBwYXJhbSBmcm9tQm9keSDmmK/lkKbku45Cb2R55byA5aeL6YCJ5oupXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBTZXRBY3Rpb24oIGV2ZW50OiBzdHJpbmcsIHNlbGVjdG9yVGV4dDogc3RyaW5nLCBmcm9tQm9keT86IGJvb2xlYW4gKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yTWV0aG9kXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbS5BdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IEF0dHJpYnV0ZXMuQ1NldEFjdGlvbkF0dHJpYnV0ZSggZXZlbnQsIHNlbGVjdG9yVGV4dCwgKCBmcm9tQm9keSA9PSB0cnVlICkgPyB0cnVlIDogZmFsc2UgKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBTZXRBY3Rpb25DbGljayggc2VsZWN0b3JUZXh0OiBzdHJpbmcsIGZyb21Cb2R5PzogYm9vbGVhbiApOiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JNZXRob2RcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU2V0QWN0aW9uKCBcImNsaWNrXCIsIHNlbGVjdG9yVGV4dCwgZnJvbUJvZHkgKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gU2V0QWN0aW9uVmFsdWVDaGFuZ2UoIHNlbGVjdG9yVGV4dDogc3RyaW5nLCBmcm9tQm9keT86IGJvb2xlYW4gKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yTWV0aG9kXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFNldEFjdGlvbiggXCJ2YWx1ZWNoYW5nZVwiLCBzZWxlY3RvclRleHQsIGZyb21Cb2R5ICk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFNldEFjdGlvblNlYXJjaCggc2VsZWN0b3JUZXh0OiBzdHJpbmcsIGZyb21Cb2R5PzogYm9vbGVhbiApOiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JNZXRob2RcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU2V0QWN0aW9uKCBcInNlYXJjaFwiLCBzZWxlY3RvclRleHQsIGZyb21Cb2R5ICk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFNldEFjdGlvbkZvY3VzSW4oIHNlbGVjdG9yVGV4dDogc3RyaW5nLCBmcm9tQm9keT86IGJvb2xlYW4gKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yTWV0aG9kXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFNldEFjdGlvbiggdUFjdGlvbk5hbWVfRm9jdXNJbiwgc2VsZWN0b3JUZXh0LCBmcm9tQm9keSApO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBTZXRBY3Rpb25Gb2N1c091dCggc2VsZWN0b3JUZXh0OiBzdHJpbmcsIGZyb21Cb2R5PzogYm9vbGVhbiApOiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JNZXRob2RcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU2V0QWN0aW9uKCB1QWN0aW9uTmFtZV9Gb2N1c091dCwgc2VsZWN0b3JUZXh0LCBmcm9tQm9keSApO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBTZXRBY3Rpb25Nb3VzZU92ZXIoIHNlbGVjdG9yVGV4dDogc3RyaW5nLCBmcm9tQm9keT86IGJvb2xlYW4gKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yTWV0aG9kXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFNldEFjdGlvbiggdUFjdGlvbk5hbWVfTW91c2VPdmVyLCBzZWxlY3RvclRleHQsIGZyb21Cb2R5ICk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFNldEFjdGlvbk1vdXNlT3V0KCBzZWxlY3RvclRleHQ6IHN0cmluZywgZnJvbUJvZHk/OiBib29sZWFuICk6IFN5c3RlbS5VRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0Zvck1ldGhvZFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBTZXRBY3Rpb24oIHVBY3Rpb25OYW1lX01vdXNlT3V0LCBzZWxlY3RvclRleHQsIGZyb21Cb2R5ICk7XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLktlcm5lbEpxdWVyeVxyXG57XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gVHJpZ2dlckVsZW1lbnQoKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yUGFyYW1ldGVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbS5BdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IEF0dHJpYnV0ZXMuQ1RyaWdnZXJFbGVtZW50QXR0cmlidXRlKCkgKTtcclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5XHJcbntcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBUcmlnZ2VyRXZlbnQoKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yUGFyYW1ldGVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbS5BdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IEF0dHJpYnV0ZXMuQ1RyaWdnZXJFdmVudEF0dHJpYnV0ZSgpICk7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5XHJcbntcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBUcmlnZ2VyVmlldygpOiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3lzdGVtLkF0dHJpYnV0ZURlY29yYXRlKCBuZXcgQXR0cmlidXRlcy5DVHJpZ2dlclZpZXdBdHRyaWJ1dGUoKSApO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5XHJcbntcclxuICAgIGV4cG9ydCBlbnVtIFVPdmVyU2Nyb2xsRXZlbnRcclxuICAgIHtcclxuICAgICAgICBPbkJlZ2luLFxyXG4gICAgICAgIE9uU2Nyb2xsaW5nLFxyXG4gICAgICAgIE9uRW5kXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLktlcm5lbEpxdWVyeVxyXG57XHJcbiAgICBleHBvcnQgZW51bSBVVmlld0NyZWF0ZVN0eWxlXHJcbiAgICB7XHJcbiAgICAgICAgQXBwZW5kLFxyXG4gICAgICAgIEJlZm9yZSxcclxuICAgICAgICBBZnRlcixcclxuICAgIH07XHJcbn0iLCJcclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5XHJcbntcclxuICAgIC8qKlxyXG4gICAgICog5L6L5a2QXHJcbiAgICAgKiBcclxuICAgICAqIGBgYHR5cGVzY3JpcHRcclxuICAgICAqICBjbGFzcyBDRXhhbXBsZVxyXG4gICAgICogIHtcclxuICAgICAqICAgICAgcHJvdGVjdGVkIE9uV2F0Y2hTY3JvbGwoIGVsZW1lbnQ6IEpRdWVyeSwgZXZlbnQ6IFVPdmVyU2Nyb2xsRXZlbnQgKTogdm9pZFxyXG4gICAgICogICAgICB7XHJcbiAgICAgKiAgICAgIH1cclxuICAgICAqICB9XHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFdhdGNoT3ZlclNjcm9sbCgpOiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JNZXRob2RcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3lzdGVtLkF0dHJpYnV0ZURlY29yYXRlKCBuZXcgQXR0cmlidXRlcy5DV2F0Y2hPdmVyU2Nyb2xsQXR0cmlidXRlKCkgKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5FdmVudFxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0V2ZW50XHJcbiAgICB7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGV4cG9ydCBpbnRlcmZhY2UgVEV2ZW50Q29uc3RydWN0b3I8IFRFdmVudCBleHRlbmRzIENFdmVudCA+XHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgbmV3ICggLi4uYXJnczogYW55W10gKTogVEV2ZW50XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIGV4cG9ydCB0eXBlIFRFdmVudENvbnN0cnVjdG9yPCBURXZlbnQgZXh0ZW5kcyBDRXZlbnQgPiA9IFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVDb25zdHJ1Y3RvcjwgVEV2ZW50ID47XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkV2ZW50XHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJRXZlbnRCdXNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgTGlzdGVuPCBURXZlbnQgZXh0ZW5kcyBDRXZlbnQgPiggZXZlbnRUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVEV2ZW50ID4sIGxpc3RlbmVyOiBTeXN0ZW0uVENhbGxiYWNrT3JGdW5jdGlvbjwgVUV2ZW50QnVzTGlzdGVuZXJGdW5jdGlvbjwgVEV2ZW50ID4gPiwgb25jZT86IGJvb2xlYW4gKTogdm9pZDtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IFNlbmQ8IFRFdmVudCBleHRlbmRzIENFdmVudCA+KCBldmVudERhdGE6IFRFdmVudCApOiB2b2lkO1xyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnQgdHlwZSBVRXZlbnRCdXNMaXN0ZW5lckZ1bmN0aW9uPCBURXZlbnQgZXh0ZW5kcyBDRXZlbnQgPiA9ICggZXZlbnREYXRhOiBURXZlbnQgKSA9PiB2b2lkO1xyXG4gICAgZXhwb3J0IHR5cGUgSUV2ZW50QnVzTGlzdGVuZXI8IFRFdmVudCBleHRlbmRzIENFdmVudCA+ID0gU3lzdGVtLlRDYWxsYmFjazwgVUV2ZW50QnVzTGlzdGVuZXJGdW5jdGlvbjwgVEV2ZW50ID4gPjtcclxuXHJcbn0iLCJcclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5FdmVudFxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgSVN0YXRlTWFjaGluZVxyXG4gICAge1xyXG4gICAgICAgIEFkZFN0YXRlKCBzdGF0ZTogSVN0YXRlTm9kZSApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXRTdGF0ZTwgVFN0YXRlTm9kZSBleHRlbmRzIElTdGF0ZU5vZGUgPiggc3RhdGVUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVFN0YXRlTm9kZSA+ICk6IFRTdGF0ZU5vZGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudHMnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5FdmVudFxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgSVN0YXRlTm9kZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBJbml0aWFsaXplKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudHMnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkV2ZW50LkltcGxlbWVudHNcclxue1xyXG4gICAgdHlwZSBVRXZlbnREZWxlZ2F0ZSA9XHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuZXI6IElFdmVudEJ1c0xpc3RlbmVyPCBDRXZlbnQgPjtcclxuICAgICAgICBraWNrOiBudW1iZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIHR5cGUgVUV2ZW50RGVsZWdhdGVMaXN0ID0gQXJyYXk8IFVFdmVudERlbGVnYXRlID47XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENFdmVudEJ1cyBleHRlbmRzIElFdmVudEJ1c1xyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBtX2V2ZW50czogV2Vha01hcDwgU3lzdGVtLlJlZmxlY3Rpb24uVHlwZVByb3RvdHlwZTwgQ0V2ZW50ID4sIFVFdmVudERlbGVnYXRlTGlzdCA+ID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbiAgICAgICAgcHVibGljIExpc3RlbjwgVEV2ZW50IGV4dGVuZHMgQ0V2ZW50ID4oIGV2ZW50VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IFRFdmVudCA+LCBsaXN0ZW5lcjogU3lzdGVtLlRDYWxsYmFja09yRnVuY3Rpb248IFVFdmVudEJ1c0xpc3RlbmVyRnVuY3Rpb248IFRFdmVudCA+ID4sIG9uY2U/OiBib29sZWFuICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcm90b3R5cGUgPSBldmVudFR5cGUuR2V0SnNQcm90b3R5cGU8e30+KCk7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMubV9ldmVudHMuZ2V0KCBwcm90b3R5cGUgKTtcclxuICAgICAgICAgICAgaWYgKCBhcnJheSA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkgPSBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaCgge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyOiAoIHR5cGVvZiggbGlzdGVuZXIgKSA9PSBcImZ1bmN0aW9uXCIgKSA/IF9fQ2FsbGJhY2soIGxpc3RlbmVyICkgOiBsaXN0ZW5lcixcclxuICAgICAgICAgICAgICAgICAgICBraWNrOiAoIG9uY2UgPT0gdHJ1ZSApID8gMSA6IC0xXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fZXZlbnRzLnNldCggcHJvdG90eXBlLCBhcnJheSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWxlZ2F0ZVRlbXAgPSBhcnJheVsgaSBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggZGVsZWdhdGVUZW1wLmxpc3RlbmVyID09IGxpc3RlbmVyIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaCgge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyOiAoIHR5cGVvZiggbGlzdGVuZXIgKSA9PSBcImZ1bmN0aW9uXCIgKSA/IF9fQ2FsbGJhY2soIGxpc3RlbmVyICkgOiBsaXN0ZW5lcixcclxuICAgICAgICAgICAgICAgICAgICBraWNrOiAoIG9uY2UgPT0gdHJ1ZSApID8gMSA6IC0xXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFNlbmQ8IFRFdmVudCBleHRlbmRzIENFdmVudCA+KCBldmVudERhdGE6IFRFdmVudCApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcHJvdG90eXBlID0gZXZlbnREYXRhLkdldFR5cGUoKS5HZXRKc1Byb3RvdHlwZTwge30gPigpO1xyXG4gICAgICAgICAgICBsZXQgZGVsZWdhdGVzID0gdGhpcy5tX2V2ZW50cy5nZXQoIHByb3RvdHlwZSApO1xyXG4gICAgICAgICAgICBpZiAoIGRlbGVnYXRlcyA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgZGVsZWdhdGVzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWxlZ2F0ZVRlbXAgPSBkZWxlZ2F0ZXNbIGkgXTtcclxuICAgICAgICAgICAgICAgIGlmICggZGVsZWdhdGVUZW1wLmtpY2sgPT0gMCApXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVsZWdhdGVUZW1wLmtpY2sgLS07XHJcbiAgICAgICAgICAgICAgICBkZWxlZ2F0ZVRlbXAubGlzdGVuZXIuRXhlY3V0ZSggZXZlbnREYXRhICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgZGVsZWdhdGVzLmxlbmd0aDsgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVsZWdhdGVUZW1wID0gZGVsZWdhdGVzWyBpIF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIGRlbGVnYXRlVGVtcC5raWNrID09IDAgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGVnYXRlcy5zcGxpY2UoIGksIDEgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkV2ZW50LkltcGxlbWVudHNcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENTdGF0ZU1hY2hpbmUgZXh0ZW5kcyBJU3RhdGVNYWNoaW5lXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fc3RhdGU6IFdlYWtNYXA8IFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVQcm90b3R5cGU8IElTdGF0ZU5vZGUgPiwgSVN0YXRlTm9kZSA+ID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbiAgICAgICAgcHVibGljIEFkZFN0YXRlKCBzdGF0ZTogSVN0YXRlTm9kZSApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcHJvdG90eXBlOiBhbnkgPSBzdGF0ZS5HZXRUeXBlKCkuR2V0SnNQcm90b3R5cGUoKTtcclxuICAgICAgICAgICAgbGV0IHN0YXRlVGVtcCA9IHRoaXMubV9zdGF0ZS5nZXQoIHByb3RvdHlwZSApO1xyXG4gICAgICAgICAgICBpZiAoIHN0YXRlVGVtcCAhPSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwidGhlcmUgaXMgZXhpc3Qgc3RhdGVcIiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubV9zdGF0ZS5zZXQoIDxhbnk+cHJvdG90eXBlLCBzdGF0ZSApO1xyXG4gICAgICAgICAgICBzdGF0ZS5Jbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0U3RhdGU8IFRTdGF0ZU5vZGUgZXh0ZW5kcyBJU3RhdGVOb2RlID4oIHN0YXRlVHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IFRTdGF0ZU5vZGUgPiApOiBUU3RhdGVOb2RlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcHJvdG90eXBlID0gc3RhdGVUeXBlLkdldEpzUHJvdG90eXBlKCk7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IHRoaXMubV9zdGF0ZS5nZXQoIHByb3RvdHlwZSApO1xyXG4gICAgICAgICAgICByZXR1cm4gPFRTdGF0ZU5vZGU+c3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
