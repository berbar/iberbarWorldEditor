"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var iberbar;
(function (iberbar) {
    var System;
    (function (System) {
        var Collections;
        (function (Collections) {
            var Generic;
            (function (Generic) {
                class CDictionary {
                    constructor(options) {
                        this.m_comparer = new Generic.CEqualityComparer();
                        this.m_data = [];
                        if (options != null) {
                            if (options.comparer != null)
                                this.m_comparer = options.comparer;
                        }
                    }
                    Add(key, value) {
                        if (this.ContainKey(key))
                            throw new Error();
                        this.m_data.push({ key: key, value: value });
                    }
                    ContainKey(key) {
                        for (let i = 0; i < this.m_data.length; i++) {
                            let n = this.m_data[i];
                            if (this.m_comparer.Equals(n.key, key))
                                return true;
                        }
                        return false;
                    }
                    Remove(key) {
                        throw new Error("Method not implemented.");
                    }
                    Get(key) {
                        for (let i = 0; i < this.m_data.length; i++) {
                            let n = this.m_data[i];
                            if (this.m_comparer.Equals(n.key, key))
                                return n.value;
                        }
                        return null;
                    }
                    Clear() {
                        this.m_data = [];
                    }
                    Each(process) {
                        for (let i = 0; i < this.m_data.length; i++) {
                            let n = this.m_data[i];
                            process.Execute(n.key, n.value);
                        }
                    }
                }
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
                class CEqualityComparer {
                    Equals(a, b) {
                        return a === b;
                    }
                }
                Generic.CEqualityComparer = CEqualityComparer;
            })(Generic = Collections.Generic || (Collections.Generic = {}));
        })(Collections = System.Collections || (System.Collections = {}));
    })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));
// namespace iberbar.System.Metadata
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
                class CMetadataCollection {
                    constructor() {
                        this.m_list = [];
                    }
                    AddAttribute(attribute) {
                        this.m_list.splice(0, 0, attribute);
                    }
                    GetAttributeOne(type) {
                        for (let i = 0; i < this.m_list.length; i++) {
                            let attribute = this.m_list[i];
                            if (attribute.GetType().IsEquivalentTo(type))
                                return attribute;
                        }
                        return null;
                    }
                    GetAttributes(type) {
                        let attributeList = [];
                        for (let i = 0; i < this.m_list.length; i++) {
                            let attribute = this.m_list[i];
                            if (attribute.GetType().IsEquivalentTo(type))
                                attributeList.push(attribute);
                        }
                        return attributeList;
                    }
                    GetAttributesAll() {
                        throw new Error("Method not implemented.");
                    }
                }
                Core.CMetadataCollection = CMetadataCollection;
            })(Core = Metadata.Core || (Metadata.Core = {}));
        })(Metadata = System.Metadata || (System.Metadata = {}));
    })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));
/// <reference path="./CMetadataCollection.ts" />
var iberbar;
(function (iberbar) {
    var System;
    (function (System) {
        var Metadata;
        (function (Metadata) {
            var Core;
            (function (Core) {
                class CMetadataContainer {
                    constructor() {
                        this.m_pool = new System.Collections.Generic.CDictionary({ comparer: this });
                    }
                    GetOrAddCollection(key) {
                        let collection = this.m_pool.Get(key);
                        if (collection == null) {
                            this.m_pool.Add(key, collection = new Core.CMetadataCollection());
                        }
                        return collection;
                    }
                    GetCollection(key) {
                        let collection = this.m_pool.Get(key);
                        if (collection == null)
                            return CMetadataContainer.EmptyCollection;
                        return collection;
                    }
                    Equals(a, b) {
                        return a.Equals(b);
                    }
                }
                CMetadataContainer.EmptyCollection = new Core.CMetadataCollection();
                Core.CMetadataContainer = CMetadataContainer;
            })(Core = Metadata.Core || (Metadata.Core = {}));
        })(Metadata = System.Metadata || (System.Metadata = {}));
    })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));
/// <reference path="./Core/CMetadataContainer.ts" />
var iberbar;
(function (iberbar) {
    var System;
    (function (System) {
        var Metadata;
        (function (Metadata) {
            Metadata.Container = new Metadata.Core.CMetadataContainer();
        })(Metadata = System.Metadata || (System.Metadata = {}));
    })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));
// namespace iberbar.System.Metadata.Builder
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
                class CMetadataKey {
                    constructor(type, target) {
                        this.m_type = type;
                        this.m_target = target;
                    }
                    Equals(other) {
                        return this.m_type.IsEquivalentTo(other.m_type) && this.m_target == other.m_target;
                    }
                }
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
                class CMetadataKeyForClass extends Core.CMetadataKey {
                    constructor(type, target) {
                        super(type, target);
                    }
                    Equals(other) {
                        if (super.Equals(other) == false)
                            return false;
                        if (other instanceof CMetadataKeyForClass)
                            return true;
                        return false;
                    }
                }
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
                class CMetadataKeyForNamed extends Core.CMetadataKey {
                    constructor(type, target, name) {
                        super(type, target);
                        this.m_name = null;
                        this.m_name = name;
                    }
                    Equals(other) {
                        if (super.Equals(other) == false)
                            return false;
                        if (other instanceof CMetadataKeyForNamed && other.m_name == this.m_name)
                            return true;
                        return false;
                    }
                }
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
                class CMetadataKeyForParameter extends Core.CMetadataKey {
                    constructor(type, target, methodName, index) {
                        super(type, target);
                        this.m_methodName = null;
                        this.m_index = null;
                        this.m_index = index;
                        this.m_methodName = methodName;
                    }
                    Equals(other) {
                        if (super.Equals(other) == false)
                            return false;
                        if (other instanceof CMetadataKeyForParameter && this.m_methodName == other.m_methodName && other.m_index == this.m_index)
                            return true;
                        return false;
                    }
                }
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
                let paramtypes = Reflect.getMetadata("design:paramtypes", target);
                // if ( paramtypes == null )
                //     throw new Error( '需要tsconfig配置 "emitDecoratorMetadata": true' );
                if (paramtypes != null) {
                    for (let parameterIndex = 0; parameterIndex < paramtypes.length; parameterIndex++) {
                        let key = new System.Metadata.Core.CMetadataKeyForParameter(Reflection.TypeOf__(target.prototype), System.UAttributeTarget.Parameter, "constructor", parameterIndex);
                        let attribute = new Reflection.CDeclaringTypeAttribute(() => Reflection.TypeOf(paramtypes[parameterIndex]), null);
                        System.Metadata.Container.GetOrAddCollection(key).AddAttribute(attribute);
                    }
                }
            }
            Reflection.AutoReflectMetadata_Constructor = AutoReflectMetadata_Constructor;
            //     /**
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
                let typeConstructor = Reflect.getMetadata("design:type", target, fieldName);
                // if ( typeConstructor == null )
                //     throw new Error( '需要tsconfig配置 "emitDecoratorMetadata": true' );
                if (typeConstructor != null) {
                    let key = new System.Metadata.Core.CMetadataKeyForNamed(Reflection.TypeOf__(target), System.UAttributeTarget.Field, fieldName);
                    let attribute = new Reflection.CDeclaringTypeAttribute(() => Reflection.TypeOf(typeConstructor), null);
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
                if (descriptor.set == null && descriptor.get == null)
                    throw new Error("Can't auto reflect on method.");
                let typeConstructor = Reflect.getMetadata("design:type", target, propertyName);
                // if ( typeConstructor == null )
                //     throw new Error( '需要tsconfig配置 "emitDecoratorMetadata": true' );
                if (typeConstructor != null) {
                    let key = new System.Metadata.Core.CMetadataKeyForNamed(Reflection.TypeOf__(target), System.UAttributeTarget.Property, propertyName);
                    let attribute = new Reflection.CDeclaringTypeAttribute(() => Reflection.TypeOf(typeConstructor), null);
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
                if (descriptor.set != null || descriptor.get != null)
                    throw new Error("Can't auto reflect on property.");
                let key;
                let attribute;
                let returntypeConstructor = Reflect.getMetadata("design:returntype", target, methodName);
                // if ( returntypeConstructor == null )
                //     throw new Error( '需要tsconfig配置 "emitDecoratorMetadata": true' );
                if (returntypeConstructor != null) {
                    key = new System.Metadata.Core.CMetadataKeyForNamed(Reflection.TypeOf__(target), System.UAttributeTarget.Method, methodName);
                    attribute = new Reflection.CDeclaringTypeAttribute(() => Reflection.TypeOf(returntypeConstructor), null);
                    System.Metadata.Container.GetOrAddCollection(key).AddAttribute(attribute);
                }
                let paramtypeConstructors = Reflect.getMetadata("design:paramtypes", target);
                // if ( paramtypeConstructors == null )
                //     throw new Error( '需要tsconfig配置 "emitDecoratorMetadata": true' );
                if (paramtypeConstructors != null) {
                    for (let parameterIndex = 0; parameterIndex < paramtypeConstructors.length; parameterIndex++) {
                        let key = new System.Metadata.Core.CMetadataKeyForParameter(Reflection.TypeOf__(target.prototype), System.UAttributeTarget.Parameter, methodName, parameterIndex);
                        let attribute = new Reflection.CDeclaringTypeAttribute(() => Reflection.TypeOf(paramtypeConstructors[parameterIndex]), null);
                        System.Metadata.Container.GetOrAddCollection(key).AddAttribute(attribute);
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
            class CAssembly {
                constructor(s) {
                    this.m_jsmodule = null;
                    this.m_jsmodule = s;
                }
                GetTypes() {
                    return this.GetTypesInternal(this.m_jsmodule);
                }
                GetTypesInternal(obj) {
                    let js_typeof = typeof (obj);
                    if (js_typeof != "object")
                        return [];
                    let types = [];
                    for (const k in obj) {
                        const v = obj[k];
                        if (v == undefined || v == null)
                            continue;
                        if (v["prototype"] != null) {
                            types.push(System.Reflection.TypeOf(v));
                            types = types.concat(this.GetTypesInternal(v));
                            continue;
                        }
                        types = types.concat(this.GetTypesInternal(v));
                    }
                    return types;
                }
            }
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
            class CMemberInfo {
                constructor(name, prototype) {
                    this.m_name = null;
                    this.m_prototype = null;
                    this.m_metadataCollection = null;
                    this.m_name = name;
                    this.m_prototype = prototype;
                }
                get Name() {
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
                get DeclaringType() {
                    return Reflection.TypeOf(this.m_prototype.constructor);
                }
                GetJsPrototype() {
                    return this.m_prototype;
                }
                get MetadataCollection() {
                    if (this.m_metadataCollection == null) {
                        let key = this.GetMetadataKey();
                        this.m_metadataCollection = System.Metadata.Container.GetCollection(key);
                    }
                    return this.m_metadataCollection;
                }
                GetCustomAttributeOne(attributeType) {
                    return this.MetadataCollection.GetAttributeOne(attributeType);
                }
                GetCustomAttributes(attributeType) {
                    return this.MetadataCollection.GetAttributes(attributeType);
                }
                GetCustomAttributesAll() {
                    return this.MetadataCollection.GetAttributesAll();
                }
                IsDefined(attributeType) {
                    return (this.MetadataCollection.GetAttributeOne(attributeType) == null) ? false : true;
                }
                GetMetadataKey() {
                    throw new Error("Method not implemented.");
                }
            }
            Reflection.CMemberInfo = CMemberInfo;
        })(Reflection = System.Reflection || (System.Reflection = {}));
    })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));
/// <reference path="./MemberInfo.ts" />
var iberbar;
(function (iberbar) {
    var System;
    (function (System) {
        var Reflection;
        (function (Reflection) {
            class CMethodBase extends Reflection.CMemberInfo {
            }
            Reflection.CMethodBase = CMethodBase;
        })(Reflection = System.Reflection || (System.Reflection = {}));
    })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));
/// <reference path="./CMethodBase.ts" />
var iberbar;
(function (iberbar) {
    var System;
    (function (System) {
        var Reflection;
        (function (Reflection) {
            class CConstructorInfo extends Reflection.CMethodBase {
                get JsConstructor() {
                    return this.m_prototype.constructor;
                }
                Invoke(...args) {
                    return new this.JsConstructor(...args);
                }
            }
            Reflection.CConstructorInfo = CConstructorInfo;
        })(Reflection = System.Reflection || (System.Reflection = {}));
    })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));
var iberbar;
(function (iberbar) {
    var System;
    (function (System) {
        let UAttributeTarget;
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
        class CAttribute {
        }
        System.CAttribute = CAttribute;
        ;
    })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));
/// <reference path="./CAttribute.ts" />
/// <reference path="./UAttributeTarget.ts" />
var iberbar;
(function (iberbar) {
    var System;
    (function (System) {
        class CAttributeUsageAttribute extends System.CAttribute {
            constructor(validOn, allowMultiple, inherit) {
                super();
                this.m_validOn = validOn;
                this.m_allowMultiple = (allowMultiple == null) ? true : allowMultiple;
                this.m_inherited = (inherit == null) ? true : inherit;
            }
            get ValidOn() {
                return this.m_validOn;
            }
            get AllowMultiple() {
                return this.m_allowMultiple;
            }
            get Inherited() {
                return this.m_inherited;
            }
        }
        CAttributeUsageAttribute.DefaultUsage = new CAttributeUsageAttribute(System.UAttributeTarget.All, true, true);
        System.CAttributeUsageAttribute = CAttributeUsageAttribute;
        ;
    })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));
/// <reference path="./MemberInfo.ts" />
var iberbar;
(function (iberbar) {
    var System;
    (function (System) {
        var Reflection;
        (function (Reflection) {
            class CFieldInfo extends Reflection.CMemberInfo {
                get MemberType() {
                    return Reflection.UMemberTypes.Field;
                }
                SetValue(obj, value) {
                    obj[this.m_name] = value;
                }
                GetValue(obj) {
                    return obj[this.m_name];
                }
                GetMetadataKey() {
                    return new System.Metadata.Core.CMetadataKeyForNamed(this.DeclaringType, System.UAttributeTarget.Field, this.Name);
                }
            }
            Reflection.CFieldInfo = CFieldInfo;
        })(Reflection = System.Reflection || (System.Reflection = {}));
    })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));
/// <reference path="./MemberInfo.ts" />
/// <reference path="./CMethodBase.ts" />
var iberbar;
(function (iberbar) {
    var System;
    (function (System) {
        var Reflection;
        (function (Reflection) {
            class CMethodInfo extends Reflection.CMethodBase {
                // protected readonly m_method: Function = null;
                // protected constructor( n: string, prototype: TypePrototype< any >, method: Function )
                // {
                //     super( n, prototype );
                //     this.m_method = method;
                // }
                Invoke(obj, ...args) {
                    return this.Method.apply(obj, args);
                }
                // public GetParameters(): Array< CParameterInfo >
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
                GetMetadataKey() {
                    return new System.Metadata.Core.CMetadataKeyForNamed(this.DeclaringType, System.UAttributeTarget.Method, this.Name);
                }
            }
            Reflection.CMethodInfo = CMethodInfo;
        })(Reflection = System.Reflection || (System.Reflection = {}));
    })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));
/// <reference path="./MemberInfo.ts" />
var iberbar;
(function (iberbar) {
    var System;
    (function (System) {
        var Reflection;
        (function (Reflection) {
            class CPropertyInfo extends Reflection.CMemberInfo {
                GetMetadataKey() {
                    return new System.Metadata.Core.CMetadataKeyForNamed(this.DeclaringType, System.UAttributeTarget.Property, this.Name);
                }
            }
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
            class CParameterInfo {
                constructor() {
                }
            }
            Reflection.CParameterInfo = CParameterInfo;
        })(Reflection = System.Reflection || (System.Reflection = {}));
    })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));
/// <reference path="./ConstructorInfo.ts" />
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
                let data = null;
                if (prototype.hasOwnProperty(key) == false) {
                    data = prototype[key] = {};
                }
                else {
                    data = prototype[key];
                }
                return data;
            }
            Reflection.GetOrCreateDictionaryInJsPrototype = GetOrCreateDictionaryInJsPrototype;
            function GetOrCreateArrayInJsPrototype(prototype, key) {
                let data = null;
                if (prototype.hasOwnProperty(key) == false) {
                    data = prototype[key] = [];
                }
                else {
                    data = prototype[key];
                }
                return data;
            }
            Reflection.GetOrCreateArrayInJsPrototype = GetOrCreateArrayInJsPrototype;
            ;
            class CType {
                constructor() {
                }
                GetFieldOne(name) {
                    let info = this.GetOwnFieldOne(name);
                    if (info == null) {
                        let baseType = this.BaseType;
                        while (baseType) {
                            info = baseType.GetOwnFieldOne(name);
                            if (info != null)
                                return info;
                            baseType = baseType.BaseType;
                        }
                    }
                    return info;
                }
                GetFields() {
                    let array = this.GetOwnFields();
                    let baseType = this.BaseType;
                    while (baseType) {
                        array = array.concat(baseType.GetOwnFields());
                        baseType = baseType.BaseType;
                    }
                    return array;
                }
                GetMethodOne(key) {
                    let info = this.GetOwnMethodOne(key);
                    if (info != null) {
                        return info;
                    }
                    let baseType = this.BaseType;
                    while (baseType) {
                        info = baseType.GetOwnMethodOne(key);
                        if (info != null) {
                            return info;
                        }
                        baseType = baseType.BaseType;
                    }
                    return null;
                }
                GetMethods() {
                    let array = this.GetOwnMethods();
                    let baseType = this.BaseType;
                    while (baseType) {
                        array = array.concat(baseType.GetOwnMethods());
                        baseType = baseType.BaseType;
                    }
                    return array;
                }
                GetProperties() {
                    let array = this.GetOwnProperties();
                    let baseType = this.BaseType;
                    while (baseType) {
                        array = array.concat(baseType.GetOwnProperties());
                        baseType = baseType.BaseType;
                    }
                    return array;
                }
                GetProperty(key) {
                    let propertyInfo = this.GetOwnProperty(key);
                    if (propertyInfo != null)
                        return propertyInfo;
                    let baseType = this.BaseType;
                    while (baseType) {
                        propertyInfo = baseType.GetOwnProperty(key);
                        if (propertyInfo != null)
                            return propertyInfo;
                    }
                    return null;
                }
            }
            Reflection.CType = CType;
            class CRuntimeType extends CType {
                constructor(proto) {
                    super();
                    this.m_proto = null;
                    this.m_metadataCollection = null;
                    this.m_proto = proto;
                }
                Equals(other) {
                    return this.IsEquivalentTo(System.dynamic_cast(other, CRuntimeType));
                }
                GetJsPrototype() {
                    return this.m_proto;
                }
                GetJsConstructor() {
                    return this.m_proto.constructor;
                }
                GetConstructor() {
                    return new CRuntimeConstructorInfo("constructor", this.m_proto);
                }
                GetFieldOne(name) {
                    let info = this.GetOwnFieldOne(name);
                    if (info == null) {
                        let baseType = this.BaseType;
                        while (baseType) {
                            info = baseType.GetOwnFieldOne(name);
                            if (info != null)
                                return info;
                            baseType = baseType.BaseType;
                        }
                    }
                    return info;
                }
                GetOwnFieldOne(name) {
                    let proto = this.GetJsPrototype();
                    let info = null;
                    let descriptor = Reflect.getOwnPropertyDescriptor(proto, Reflection.ReflectFieldsKey);
                    if (descriptor == null || descriptor.value == null)
                        return null;
                    if ((name in descriptor.value) == false)
                        return null;
                    info = new CRuntimeFieldInfo(name, proto);
                    return info;
                }
                GetFields() {
                    let array = this.GetOwnFields();
                    let baseType = this.BaseType;
                    while (baseType) {
                        array = array.concat(baseType.GetOwnFields());
                        baseType = baseType.BaseType;
                    }
                    return array;
                }
                GetOwnFields() {
                    let proto = this.GetJsPrototype();
                    let array = [];
                    let descriptor = Reflect.getOwnPropertyDescriptor(proto, Reflection.ReflectFieldsKey);
                    if (descriptor == null || descriptor.value == null)
                        return array;
                    let keys = descriptor.value;
                    for (const k in keys) {
                        array.push(new CRuntimeFieldInfo(k, proto));
                    }
                    return array;
                }
                GetMethodOne(key) {
                    let info = this.GetOwnMethodOne(key);
                    if (info != null) {
                        return info;
                    }
                    let baseType = this.BaseType;
                    while (baseType) {
                        info = baseType.GetOwnMethodOne(key);
                        if (info != null) {
                            return info;
                        }
                        baseType = baseType.BaseType;
                    }
                    return null;
                }
                GetOwnMethodOne(key) {
                    let info = null;
                    let descriptor = Reflect.getOwnPropertyDescriptor(this.m_proto, key);
                    if (descriptor == null)
                        return null;
                    info = new CRuntimeMethodInfo(key, this.m_proto, descriptor.value);
                    return info;
                }
                GetMethods() {
                    let array = this.GetOwnMethods();
                    let baseType = this.BaseType;
                    while (baseType) {
                        array = array.concat(baseType.GetOwnMethods());
                        baseType = baseType.BaseType;
                    }
                    return array;
                }
                GetOwnMethods() {
                    let array = [];
                    let keys = Reflect.ownKeys(this.m_proto);
                    for (let i = 0; i < keys.length; i++) {
                        const k = keys[i];
                        if (k == "constructor")
                            continue;
                        let descriptor = Reflect.getOwnPropertyDescriptor(this.m_proto, k);
                        if (descriptor == null)
                            continue;
                        if (descriptor.value == null || typeof (descriptor.value) != "function")
                            continue;
                        array.push(new CRuntimeMethodInfo(k, this.m_proto, descriptor.value));
                    }
                    return array;
                }
                GetProperties() {
                    let array = this.GetOwnProperties();
                    let baseType = this.BaseType;
                    while (baseType) {
                        array = array.concat(baseType.GetOwnProperties());
                        baseType = baseType.BaseType;
                    }
                    return array;
                }
                GetProperty(key) {
                    let propertyInfo = this.GetOwnProperty(key);
                    if (propertyInfo != null)
                        return propertyInfo;
                    let baseType = this.BaseType;
                    while (baseType) {
                        propertyInfo = baseType.GetOwnProperty(key);
                        if (propertyInfo != null)
                            return propertyInfo;
                    }
                    return null;
                }
                GetOwnProperties() {
                    let array = [];
                    let keys = Reflect.ownKeys(this.m_proto);
                    for (let i = 0; i < keys.length; i++) {
                        let k = keys[i];
                        if (k == "constructor")
                            continue;
                        let descriptor = Reflect.getOwnPropertyDescriptor(this.m_proto, k);
                        if (descriptor == null)
                            continue;
                        if (descriptor.set == null && descriptor.get == null)
                            continue;
                        array.push(new CRuntimePropertyInfo(k, this.m_proto));
                    }
                    return array;
                }
                GetOwnProperty(key) {
                    let descriptor = Reflect.getOwnPropertyDescriptor(this.m_proto, key);
                    if (descriptor == null)
                        return null;
                    if (descriptor.set == null && descriptor.get == null)
                        return null;
                    return new CRuntimePropertyInfo(key, this.m_proto);
                }
                /**
                 * **(只读)**
                 *
                 * 获取父类类型
                 */
                get BaseType() {
                    let protoBase = Reflect.getPrototypeOf(this.m_proto);
                    if (protoBase == null)
                        return null;
                    if (protoBase == Object.prototype)
                        return null;
                    return new CRuntimeType(protoBase);
                }
                /**
                 * 对比当前类型是否与参数type类型一样
                 * @param type 对比参照类型
                 */
                IsEquivalentTo(type) {
                    if (type == null)
                        return false;
                    if (typeof (type) == "function")
                        return type.prototype == this.m_proto;
                    if (type.m_proto === this.m_proto)
                        return true;
                    return false;
                }
                /**
                 * 判断当前类型是否继承于参数type类型
                 * @param type 父类类型
                 */
                IsInheritFrom(type) {
                    let baseType = this.BaseType;
                    while (baseType) {
                        if (baseType.IsEquivalentTo(type))
                            return true;
                        baseType = baseType.BaseType;
                    }
                    return false;
                }
                get MetadataCollection() {
                    if (this.m_metadataCollection == null) {
                        let key = new System.Metadata.Core.CMetadataKeyForClass(this, System.UAttributeTarget.Class);
                        this.m_metadataCollection = System.Metadata.Container.GetCollection(key);
                    }
                    return this.m_metadataCollection;
                }
                GetCustomAttributeOne(attributeType, inherit) {
                    if (this.IsEquivalentTo(System.CAttributeUsageAttribute) == true)
                        return null;
                    if (inherit == true) {
                        let attr = this.GetCustomAttributeOne(attributeType, false);
                        if (attr != null)
                            return attr;
                        let attrUsage = attributeType.GetCustomAttributeOne(Reflection.TypeOf(System.CAttributeUsageAttribute), true);
                        if (attrUsage == null)
                            attrUsage = System.CAttributeUsageAttribute.DefaultUsage;
                        if (attrUsage.Inherited == true) {
                            let baseType = this.BaseType;
                            while (baseType != null) {
                                attr = baseType.GetCustomAttributeOne(attributeType, false);
                                if (attr != null)
                                    return attr;
                                baseType = baseType.BaseType;
                            }
                        }
                        return null;
                    }
                    else {
                        return this.MetadataCollection.GetAttributeOne(attributeType);
                    }
                }
                GetCustomAttributes(attributeType, inherit) {
                    if (inherit == true) {
                        let attrs = this.GetCustomAttributes(attributeType, false);
                        let attrUsage = attributeType.GetCustomAttributeOne(Reflection.TypeOf(System.CAttributeUsageAttribute), true);
                        if (attrUsage == null) {
                            attrUsage = System.CAttributeUsageAttribute.DefaultUsage;
                        }
                        if (attrUsage.Inherited == true) {
                            let baseType = this.BaseType;
                            while (baseType != null) {
                                attrs = attrs.concat(baseType.GetCustomAttributes(attributeType, false));
                                baseType = baseType.BaseType;
                            }
                        }
                        return attrs;
                    }
                    else {
                        return this.MetadataCollection.GetAttributes(attributeType);
                    }
                }
                GetCustomAttributesAll() {
                    return this.MetadataCollection.GetAttributesAll();
                }
                IsDefined(attributeType, inherit) {
                    return false;
                }
            }
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
                return () => new CRuntimeType(delay().prototype);
            }
            Reflection.TypeOfDelay = TypeOfDelay;
            class CRuntimeConstructorInfo extends Reflection.CConstructorInfo {
                constructor(name, prototype) {
                    super(name, prototype);
                }
                get MemberType() {
                    return Reflection.UMemberTypes.Constructor;
                }
                GetParameters() {
                    let classType = this.DeclaringType;
                    let parameterCount = this.JsConstructor.length;
                    let infos = Array(parameterCount);
                    if (parameterCount > 0) {
                        for (let i = 0; i < parameterCount; i++) {
                            let key = new System.Metadata.Core.CMetadataKeyForParameter(classType, System.UAttributeTarget.Parameter, this.Name, i);
                            let typeAttribute = System.Metadata.Container.GetCollection(key).GetAttributeOne(TypeOf(Reflection.CDeclaringTypeAttribute));
                            infos[i] = new CRuntimeParameterInfo(this.m_prototype, this, i, (typeAttribute == null) ? null : typeAttribute.DeclaringType);
                        }
                    }
                    return infos;
                }
                get Descriptor() {
                    return null;
                }
            }
            class CRuntimeMethodInfo extends Reflection.CMethodInfo {
                constructor(name, prototype, method, fromProperty) {
                    super(name, prototype);
                    this.m_method = null;
                    this.m_fromProperty = null;
                    this.m_method = method;
                    this.m_fromProperty = fromProperty;
                }
                get MemberType() {
                    return Reflection.UMemberTypes.Method;
                }
                get Method() {
                    return this.m_method;
                }
                GetParameters() {
                    let classType = this.DeclaringType;
                    let parameterCount = this.Method.length;
                    let infos = Array(parameterCount);
                    if (parameterCount > 0) {
                        for (let i = 0; i < parameterCount; i++) {
                            let typeAttribute = null;
                            let parameterName = null;
                            if (this.m_fromProperty == null) {
                                let key = new System.Metadata.Core.CMetadataKeyForParameter(classType, System.UAttributeTarget.Parameter, this.Name, i);
                                let attrsCollection = System.Metadata.Container.GetCollection(key);
                                typeAttribute = attrsCollection.GetAttributeOne(TypeOf(Reflection.CDeclaringTypeAttribute));
                                let nameAttribute = attrsCollection.GetAttributeOne(TypeOf(Reflection.CNamedAttribute));
                                if (nameAttribute = null)
                                    parameterName = nameAttribute.Text;
                            }
                            else {
                                typeAttribute = this.m_fromProperty.GetCustomAttributeOne(TypeOf(Reflection.CDeclaringTypeAttribute));
                                parameterName = this.m_fromProperty.Name;
                            }
                            infos[i] = new CRuntimeParameterInfo(this.m_prototype, this, i, (typeAttribute == null) ? null : typeAttribute.DeclaringType, parameterName);
                        }
                    }
                    return infos;
                }
                get Descriptor() {
                    if (this.m_fromProperty == null)
                        return Reflect.getOwnPropertyDescriptor(this.m_prototype, this.Name);
                    return Reflect.getOwnPropertyDescriptor(this.m_prototype, this.m_fromProperty.Name);
                }
            }
            class CRuntimePropertyInfo extends Reflection.CPropertyInfo {
                constructor(name, prototype) {
                    super(name, prototype);
                }
                get MemberType() {
                    return Reflection.UMemberTypes.Property;
                }
                get PropertyType() {
                    let attr = this.GetCustomAttributeOne(TypeOf(Reflection.CDeclaringTypeAttribute));
                    if (attr == null)
                        return null;
                    return attr.DeclaringType;
                }
                SetValue(obj, value) {
                    obj[this.m_name] = value;
                }
                GetValue(obj) {
                    return obj[this.m_name];
                }
                GetMetadataKey() {
                    return new System.Metadata.Core.CMetadataKeyForNamed(this.DeclaringType, System.UAttributeTarget.Property, this.Name);
                }
                get CanWrite() {
                    let descriptor = Reflect.getOwnPropertyDescriptor(this.m_prototype, this.m_name);
                    return descriptor.set != undefined;
                }
                get CanRead() {
                    let descriptor = Reflect.getOwnPropertyDescriptor(this.m_prototype, this.m_name);
                    return descriptor.get != undefined;
                }
                GetSetMethod() {
                    let descriptor = Reflect.getOwnPropertyDescriptor(this.m_prototype, this.m_name);
                    if (descriptor.set == undefined)
                        return undefined;
                    return new CRuntimeMethodInfo("get_" + this.Name, this.m_prototype, descriptor.set, this);
                }
                GetGetMethod() {
                    let descriptor = Reflect.getOwnPropertyDescriptor(this.m_prototype, this.m_name);
                    if (descriptor.get == undefined)
                        return undefined;
                    return new CRuntimeMethodInfo("get_" + this.Name, this.m_prototype, descriptor.get, this);
                }
            }
            class CRuntimeFieldInfo extends Reflection.CFieldInfo {
                constructor(name, prototype) {
                    super(name, prototype);
                }
                get FieldType() {
                    let attr = this.GetCustomAttributeOne(TypeOf(Reflection.CDeclaringTypeAttribute));
                    if (attr == null)
                        return null;
                    return attr.DeclaringType;
                }
            }
            class CRuntimeParameterInfo extends Reflection.CParameterInfo {
                constructor(prototype, member, parameterIndex, parameterType, parameterName) {
                    super();
                    this.m_prototype = null;
                    // protected m_methodName: string = null;
                    // protected m_descriptor: PropertyDescriptor = null;
                    this.m_member = null;
                    this.m_parameterIndex = null;
                    this.m_parameterName = null;
                    this.m_parameterType = null;
                    this.m_metadataCollection = null;
                    this.m_prototype = prototype;
                    this.m_member = member;
                    this.m_parameterIndex = parameterIndex;
                    this.m_parameterName = parameterName;
                    this.m_parameterType = parameterType;
                }
                get DeclaringType() {
                    return new CRuntimeType(this.m_prototype);
                }
                get ParameterIndex() {
                    return this.m_parameterIndex;
                }
                get Name() {
                    return this.m_parameterName;
                }
                get ParameterType() {
                    return this.m_parameterType;
                }
                GetMetadataKey() {
                    return new System.Metadata.Core.CMetadataKeyForParameter(this.DeclaringType, System.UAttributeTarget.Parameter, this.m_member.Name, this.ParameterIndex);
                }
                get MetadataCollection() {
                    if (this.m_metadataCollection == null) {
                        let key = this.GetMetadataKey();
                        this.m_metadataCollection = System.Metadata.Container.GetCollection(key);
                    }
                    return this.m_metadataCollection;
                }
                GetCustomAttributeOne(attributeType) {
                    return this.MetadataCollection.GetAttributeOne(attributeType);
                }
                GetCustomAttributes(attributeType) {
                    return this.MetadataCollection.GetAttributes(attributeType);
                }
                GetCustomAttributesAll() {
                    return this.MetadataCollection.GetAttributesAll();
                }
                IsDefined(attributeType) {
                    return (this.MetadataCollection.GetAttributeOne(attributeType) == null) ? false : true;
                }
            }
        })(Reflection = System.Reflection || (System.Reflection = {}));
    })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));
/// <reference path="./Reflection/Type.ts" />
Object.prototype.GetType = function () {
    return iberbar.System.Reflection.TypeOf__(Reflect.getPrototypeOf(this));
};
/**
 * 不可枚举
 */
Reflect.defineProperty(Object.prototype, "GetType", { enumerable: false });
/// <reference path="./CAttributeUsageAttribute.ts" />
/// <reference path="./Object_GetType.ts" />
var iberbar;
(function (iberbar) {
    var System;
    (function (System) {
        function AttributeDecorate(attribute) {
            return (target, propertyName, descriptorOrParameterIndex) => {
                let attributeUsage = attribute.GetType().GetCustomAttributeOne(System.Reflection.TypeOf(System.CAttributeUsageAttribute), true);
                if (attributeUsage == null) {
                    attributeUsage = System.CAttributeUsageAttribute.DefaultUsage;
                }
                if (propertyName == undefined) {
                    propertyName = "constructor";
                    if (descriptorOrParameterIndex == null) {
                        CAttributeDecorateHelper.DecorateClass(attribute, attributeUsage, target);
                    }
                    else if (typeof (descriptorOrParameterIndex) == "object") {
                        CAttributeDecorateHelper.DecorateMethod(attribute, attributeUsage, target, propertyName, descriptorOrParameterIndex.value);
                    }
                    else if (typeof (descriptorOrParameterIndex) == "number") {
                        CAttributeDecorateHelper.DecorateParameter(attribute, attributeUsage, target.prototype, propertyName, descriptorOrParameterIndex);
                    }
                }
                else {
                    if (descriptorOrParameterIndex == null) {
                        CAttributeDecorateHelper.DecorateField(attribute, attributeUsage, target, propertyName);
                    }
                    else if (typeof (descriptorOrParameterIndex) == "object") {
                        if (descriptorOrParameterIndex.set == undefined && descriptorOrParameterIndex.get == undefined) {
                            CAttributeDecorateHelper.DecorateMethod(attribute, attributeUsage, target, propertyName, descriptorOrParameterIndex.value);
                        }
                        else {
                            CAttributeDecorateHelper.DecorateProperty(attribute, attributeUsage, target, propertyName);
                        }
                    }
                    else {
                        CAttributeDecorateHelper.DecorateParameter(attribute, attributeUsage, target, propertyName, descriptorOrParameterIndex);
                    }
                }
            };
        }
        System.AttributeDecorate = AttributeDecorate;
        System.Attribute = AttributeDecorate;
        class CAttributeDecorateHelper {
            static DecorateClass(attribute, usage, targetConstructor) {
                CAttributeDecorateHelper.CheckTargetValidOn(attribute, usage, System.UAttributeTarget.Class);
                let key = new System.Metadata.Core.CMetadataKeyForClass(System.Reflection.TypeOf__(targetConstructor.prototype), System.UAttributeTarget.Class);
                System.Metadata.Container.GetOrAddCollection(key).AddAttribute(attribute);
            }
            static DecorateField(attribute, usage, targetPrototype, fieldName) {
                CAttributeDecorateHelper.CheckTargetValidOn(attribute, usage, System.UAttributeTarget.Field);
                let key = new System.Metadata.Core.CMetadataKeyForNamed(System.Reflection.TypeOf__(targetPrototype), System.UAttributeTarget.Field, fieldName);
                System.Metadata.Container.GetOrAddCollection(key).AddAttribute(attribute);
            }
            static DecorateProperty(attribute, usage, targetPrototype, propertyName) {
                CAttributeDecorateHelper.CheckTargetValidOn(attribute, usage, System.UAttributeTarget.Property);
                let key = new System.Metadata.Core.CMetadataKeyForNamed(System.Reflection.TypeOf__(targetPrototype), System.UAttributeTarget.Property, propertyName);
                System.Metadata.Container.GetOrAddCollection(key).AddAttribute(attribute);
            }
            static DecorateMethod(attribute, usage, targetPrototype, methodName, method) {
                CAttributeDecorateHelper.CheckTargetValidOn(attribute, usage, System.UAttributeTarget.Method);
                let key = new System.Metadata.Core.CMetadataKeyForNamed(System.Reflection.TypeOf__(targetPrototype), System.UAttributeTarget.Method, methodName);
                System.Metadata.Container.GetOrAddCollection(key).AddAttribute(attribute);
            }
            static DecorateParameter(attribute, usage, targetPrototype, methodName, parameterIndex) {
                CAttributeDecorateHelper.CheckTargetValidOn(attribute, usage, System.UAttributeTarget.Parameter);
                let key = new System.Metadata.Core.CMetadataKeyForParameter(System.Reflection.TypeOf__(targetPrototype), System.UAttributeTarget.Parameter, methodName, parameterIndex);
                System.Metadata.Container.GetOrAddCollection(key).AddAttribute(attribute);
            }
            static CheckTargetValidOn(attribute, usage, target) {
                if (usage != null && (usage.ValidOn & target) != target) {
                    throw new Error(`Can't use ${attribute.constructor.name} to decorate ${System.UAttributeTarget[target]}`);
                }
            }
        }
        CAttributeDecorateHelper.uSymbolForConstruc = "Jasmine::System:Attribute";
    })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));
/// <reference path="./CAttributeUsageAttribute.ts" />
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
})(iberbar || (iberbar = {}));
/// <reference path="../UAttributeTarget.ts" />
/// <reference path="../CAttribute.ts" />
/// <reference path="../AttributeUsage.ts" />
var iberbar;
(function (iberbar) {
    var System;
    (function (System) {
        var Reflection;
        (function (Reflection) {
            let CDeclaringTypeAttribute = class CDeclaringTypeAttribute extends System.CAttribute {
                constructor(type, genericTypes) {
                    super();
                    this.m_type = null;
                    this.m_typesGeneric = null;
                    this.m_typesGenericReal = null;
                    this.m_type = type;
                    this.m_typesGeneric = genericTypes;
                    if (this.m_typesGeneric == null || this.m_typesGeneric.length == 0)
                        this.m_isGeneric = false;
                    else
                        this.m_isGeneric = true;
                }
                get DeclaringType() {
                    return this.m_type();
                }
                get GenericTypes() {
                    if (this.m_isGeneric == false)
                        return null;
                    if (this.m_typesGenericReal == null) {
                        for (let i = 0; i < this.m_typesGeneric.length; i++) {
                            let gt = this.m_typesGeneric[i];
                            this.m_typesGenericReal.push(gt());
                        }
                    }
                    return this.m_typesGenericReal;
                }
                get IsGenericType() {
                    return (this.m_typesGeneric == undefined || this.m_typesGeneric.length == 0) ? false : true;
                }
            };
            CDeclaringTypeAttribute = __decorate([
                System.AttributeUsage(System.UAttributeTarget.Method | System.UAttributeTarget.Field | System.UAttributeTarget.Property | System.UAttributeTarget.Parameter, false, false),
                __metadata("design:paramtypes", [Function, Array])
            ], CDeclaringTypeAttribute);
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
                    if (typeof (descriptorOrParameterIndex) == "undefined" || typeof (descriptorOrParameterIndex) == "object") {
                        Reflection.Enumerable(target, memberName, descriptorOrParameterIndex);
                    }
                    let temp = Array();
                    if (genericTypes != null && genericTypes.length > 0) {
                        for (let i = 0; i < genericTypes.length; i++) {
                            let gt = genericTypes[i];
                            temp.push(() => gt);
                        }
                    }
                    System.AttributeDecorate(new CDeclaringTypeAttribute(() => type, temp))(target, memberName, descriptorOrParameterIndex);
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
                    if (typeof (descriptorOrParameterIndex) == "undefined" || typeof (descriptorOrParameterIndex) == "object") {
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
                    let fieldsDescriptor = null;
                    // 检查是否存在相同名称的field字段
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
                    let fields = null;
                    if (fieldsDescriptor == null) {
                        fields = {};
                        Reflect.defineProperty(target, Reflection.ReflectFieldsKey, { value: fields, enumerable: true });
                    }
                    else {
                        fields = fieldsDescriptor.value;
                    }
                    fields[propertyName] = {};
                }
                else {
                    descriptor.enumerable = true;
                }
            }
            Reflection.Enumerable = Enumerable;
        })(Reflection = System.Reflection || (System.Reflection = {}));
    })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));
/// <reference path="../UAttributeTarget.ts" />
/// <reference path="../CAttribute.ts" />
/// <reference path="../AttributeUsage.ts" />
var iberbar;
(function (iberbar) {
    var System;
    (function (System) {
        var Reflection;
        (function (Reflection) {
            let CNamedAttribute = class CNamedAttribute extends System.CAttribute {
                constructor(text) {
                    super();
                    this.m_text = null;
                    this.m_text = text;
                }
                get Text() {
                    return this.m_text;
                }
            };
            CNamedAttribute = __decorate([
                System.AttributeUsage(System.UAttributeTarget.Parameter, false, false),
                __metadata("design:paramtypes", [String])
            ], CNamedAttribute);
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
            let CTypeNicknameAttribute = class CTypeNicknameAttribute extends System.CAttribute {
                constructor(nickname) {
                    super();
                    this.m_nickname = null;
                    this.m_nickname = nickname;
                }
                get Nickname() {
                    return this.m_nickname;
                }
            };
            CTypeNicknameAttribute = __decorate([
                System.AttributeUsage(System.UAttributeTarget.Class, true, false),
                __metadata("design:paramtypes", [String])
            ], CTypeNicknameAttribute);
            ;
            function TypeNickname(nickname) {
                return System.AttributeDecorate(new CTypeNicknameAttribute(nickname));
            }
            Reflection.TypeNickname = TypeNickname;
            ;
            Reflection.CType.prototype.GetNicknames = function () {
                let nicknames = Array();
                let nicknameAttrs = this.GetCustomAttributes(Reflection.TypeOf(CTypeNicknameAttribute), false);
                for (let i = 0; i < nicknameAttrs.length; i++) {
                    let n = nicknameAttrs[i];
                    nicknames.push(n.Nickname);
                }
                nicknames.push(this.GetJsConstructor().name);
                return nicknames;
            };
            Reflection.CType.prototype.GetNickname = function () {
                let nicknameAttr = this.GetCustomAttributeOne(Reflection.TypeOf(CTypeNicknameAttribute), false);
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
            let UMemberTypes;
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
        class TCallback {
            constructor(process, handler) {
                // this.process = process;
                // this.handler = handler;
                this.m_executable = process.bind(handler);
            }
            // public get Execute(): T
            // {
            //     return this.m_executable;
            // }
            Execute(...args) {
                return this.m_executable(...args);
            }
        }
        System.TCallback = TCallback;
        ;
        class TCallbackArray {
            constructor() {
                this.callbacks = [];
            }
            Add(callback) {
                if (callback instanceof Array) {
                    for (let i = 0; i < callback.length; i++) {
                        let cb = callback[i];
                        if (typeof (cb) == "function")
                            this.callbacks.push(new TCallback(cb));
                        else
                            this.callbacks.push(cb);
                    }
                }
                else {
                    if (typeof (callback) == "function")
                        this.callbacks.push(new TCallback(callback));
                    else
                        this.callbacks.push(callback);
                }
            }
            Execute(...args) {
                if (this.callbacks != null && this.callbacks.length > 0) {
                    for (let i = 0; i < this.callbacks.length; i++) {
                        let cb = this.callbacks[i];
                        if (cb == null)
                            continue;
                        cb.Execute(...args);
                    }
                }
            }
            Copy() {
                let copycat = new TCallbackArray();
                for (let i = 0; i < this.callbacks.length; i++) {
                    let cb = this.callbacks[i];
                    copycat.callbacks.push(cb);
                }
                return copycat;
            }
        }
        System.TCallbackArray = TCallbackArray;
        ;
    })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));
Object.prototype.__Callback = function (method) {
    return new iberbar.System.TCallback(method, this);
};
Reflect.defineProperty(Object.prototype, "__Callback", { enumerable: false });
var iberbar;
(function (iberbar) {
    var System;
    (function (System) {
        function dynamic_cast(o, t) {
            if (o instanceof t)
                return o;
            return null;
        }
        System.dynamic_cast = dynamic_cast;
    })(System = iberbar.System || (iberbar.System = {}));
})(iberbar || (iberbar = {}));
Array.prototype.FirstOrDefault = function (predicate) {
    if (predicate == null) {
        if (this.length == 0)
            return null;
        return this[0];
    }
    for (let i = 0; i < this.length; i++) {
        if (predicate(this[i], i))
            return this[i];
    }
    return null;
};
Array.prototype.Where = function (predicate) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (predicate(this[i], i))
            temp.push(this[i]);
    }
    return temp;
};
Array.prototype.RemoveAt = function (index) {
    return this.splice(index, 1);
};
Array.prototype.Remove = function (element) {
    return this.Where(e => e != element);
};
Array.prototype.RemoveWhere = function (predicate) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (predicate(this[i], i) == false)
            temp.push(this[i]);
    }
    return temp;
};
Array.convertAll = function (array, converter) {
    let arrayOutput = Array();
    for (let i = 0; i < array.length; i++) {
        let a = array[i];
        arrayOutput.push(converter(a));
    }
    return arrayOutput;
};
// namespace iberbar.System
// {
//     export type OutParameter< T > = { __out: T };
// }
// namespace iberbar.System
// {
//     export type RefParameter< T > = { value: T };
// }
/// <reference path="./Reflection/Type.ts" />
/// <reference path="./Reflection/DeclaringType.ts" />
const TypeOf = iberbar.System.Reflection.TypeOf;
const TypeOfDelay = iberbar.System.Reflection.TypeOfDelay;
const GetObjectType = iberbar.System.Reflection.GetObjectType;
const DeclaringType = iberbar.System.Reflection.DeclaringType;
const DeclaringTypeDelay = iberbar.System.Reflection.DeclaringTypeDelay;
const __Callback = iberbar.System.__Callback;
const AutoReflectMetadata_Constructor = iberbar.System.Reflection.AutoReflectMetadata_Constructor;
const AutoReflectMetadata_Field = iberbar.System.Reflection.AutoReflectMetadata_Field;
const AutoReflectMetadata_Property = iberbar.System.Reflection.AutoReflectMetadata_Property;
const AutoReflectMetadata_Method = iberbar.System.Reflection.AutoReflectMetadata_Method;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var iberbar;
(function (iberbar) {
    var Autofac;
    (function (Autofac) {
        class CContainerBuilder {
            constructor() {
                this.m_wasBuilt = false;
                this.m_configurationCallbacks = Array();
            }
            Register(type, delegate) {
                let rb = new Autofac.Builder.CRegistrationBuilder(new Autofac.Core.CTypedService(iberbar.System.Reflection.TypeOf(Object)), new Autofac.Builder.CSimpleActivatorData(new Autofac.Activators.Delegate.CDelegateActivator(type, delegate)), new Autofac.Builder.CSingleRegistrationStyle());
                rb.RegisterData.DeferredCallback = this.RegisterCallback(iberbar.System.__Callback(function (cr) {
                    Autofac.Builder.CRegistrationBuilderHelper.RegisterSingleComponent(cr, rb);
                }));
                return rb;
            }
            RegisterType(type) {
                let rb = new Autofac.Builder.CRegistrationBuilder(new Autofac.Core.CTypedService(type), new Autofac.Builder.CConcreteReflectionActivatorData(type), new Autofac.Builder.CSingleRegistrationStyle());
                rb.RegisterData.DeferredCallback = this.RegisterCallback(iberbar.System.__Callback(function (cr) {
                    Autofac.Builder.CRegistrationBuilderHelper.RegisterSingleComponent(cr, rb);
                }));
                return rb;
            }
            RegisterInstance(type, instance) {
                let activator = new Autofac.Activators.ProvidedInstance.CProvidedInstanceActivator(instance);
                let rb = new Autofac.Builder.CRegistrationBuilder(new Autofac.Core.CTypedService(type), new Autofac.Builder.CSimpleActivatorData(activator), new Autofac.Builder.CSingleRegistrationStyle());
                rb.SingleInstance();
                rb.RegisterData.DeferredCallback = this.RegisterCallback(iberbar.System.__Callback(function (cr) {
                    if ((rb.RegisterData.Lifetime instanceof Autofac.Core.Lifetime.CRootScopeLifetime) == false ||
                        rb.RegisterData.Sharing != Autofac.Core.UInstanceSharing.Shared) {
                        throw new Error();
                    }
                    // Dispose控制
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
            RegisterAssemblyTypes(...assemblies) {
                return Autofac.Features.Scanning.CScanningRegistrationExtensions.RegisterAssemblyTypes(this, assemblies);
            }
            RegisterTypes(types) {
                return Autofac.Features.Scanning.CScanningRegistrationExtensions.RegisterTypes(this, types);
            }
            RegisterCallback(configurationCallback) {
                let c = new Autofac.Builder.CDeferredCallback(configurationCallback);
                this.m_configurationCallbacks.push(c);
                return c;
            }
            Build() {
                let container = new Autofac.Core.CContainer();
                this.BuildInternal(container.ComponentRegistry);
                return container;
            }
            BuildInternal(componentRegistry) {
                if (this.m_wasBuilt == true)
                    throw new Error();
                this.m_wasBuilt = true;
                for (let i = 0; i < this.m_configurationCallbacks.length; i++) {
                    let callback = this.m_configurationCallbacks[i];
                    callback.Callback.Execute(componentRegistry);
                }
            }
        }
        Autofac.CContainerBuilder = CContainerBuilder;
        ;
    })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));
var iberbar;
(function (iberbar) {
    var Autofac;
    (function (Autofac) {
        let CInjectLifetimeScopeAttribute = class CInjectLifetimeScopeAttribute extends iberbar.System.CAttribute {
        };
        CInjectLifetimeScopeAttribute = __decorate([
            iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Parameter | iberbar.System.UAttributeTarget.Property, false, false)
        ], CInjectLifetimeScopeAttribute);
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
        class CModule {
            Load() {
            }
        }
        Autofac.CModule = CModule;
    })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));
var iberbar;
(function (iberbar) {
    var Autofac;
    (function (Autofac) {
        var Core;
        (function (Core) {
            class CParameter {
            }
            Core.CParameter = CParameter;
        })(Core = Autofac.Core || (Autofac.Core = {}));
    })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));
/// <reference path="./CParameter.ts" />
var iberbar;
(function (iberbar) {
    var Autofac;
    (function (Autofac) {
        var Core;
        (function (Core) {
            class CConstantParameter extends Core.CParameter {
                constructor(value, predicate) {
                    super();
                    this.m_predicate = null;
                    this.m_value = null;
                    this.m_predicate = predicate;
                    this.m_value = value;
                }
                get Value() {
                    return this.m_value;
                }
                CanSupplyValue(pi, context) {
                    if (this.m_predicate(pi)) {
                        return {
                            ret: true,
                            valueProvider: () => this.Value
                        };
                    }
                    return {
                        ret: false
                    };
                }
            }
            Core.CConstantParameter = CConstantParameter;
        })(Core = Autofac.Core || (Autofac.Core = {}));
    })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));
/// <reference path="./Core/CConstantParameter.ts" />
var iberbar;
(function (iberbar) {
    var Autofac;
    (function (Autofac) {
        class CNamedParameter extends Autofac.Core.CConstantParameter {
            constructor(name, value) {
                super(value, pi => pi.Name == name);
            }
        }
        Autofac.CNamedParameter = CNamedParameter;
    })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));
/// <reference path="./Core/CConstantParameter.ts" />
var iberbar;
(function (iberbar) {
    var Autofac;
    (function (Autofac) {
        class CPositionalParameter extends Autofac.Core.CConstantParameter {
            constructor(position, value) {
                super(value, pi => pi.ParameterIndex == position);
                this.m_position = null;
                this.m_position = position;
            }
            get Position() {
                return this.m_position;
            }
        }
        Autofac.CPositionalParameter = CPositionalParameter;
    })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));
/// <reference path="./Core/CConstantParameter.ts" />
var iberbar;
(function (iberbar) {
    var Autofac;
    (function (Autofac) {
        class CTypedParameter extends Autofac.Core.CConstantParameter {
            constructor(type, value) {
                super(value, pi => pi.ParameterType && pi.ParameterType.IsEquivalentTo(type));
                this.m_type = null;
                this.m_type = type;
            }
            get Type() {
                return this.m_type;
            }
        }
        Autofac.CTypedParameter = CTypedParameter;
    })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));
var iberbar;
(function (iberbar) {
    var Autofac;
    (function (Autofac) {
        let CInjectionAttribute = class CInjectionAttribute extends iberbar.System.CAttribute {
        };
        CInjectionAttribute = __decorate([
            iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Field, false, false)
        ], CInjectionAttribute);
        Autofac.CInjectionAttribute = CInjectionAttribute;
        ;
        let CInjectionProviderAttribute = class CInjectionProviderAttribute extends iberbar.System.CAttribute {
        };
        CInjectionProviderAttribute = __decorate([
            iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Field | iberbar.System.UAttributeTarget.Parameter, false, false)
        ], CInjectionProviderAttribute);
        Autofac.CInjectionProviderAttribute = CInjectionProviderAttribute;
        let CWithNameAttribute = class CWithNameAttribute extends iberbar.System.CAttribute {
            constructor(name) {
                super();
                this.m_name = null;
                this.m_name = name;
            }
            get Name() {
                return this.m_name;
            }
        };
        CWithNameAttribute = __decorate([
            iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Field | iberbar.System.UAttributeTarget.Parameter, false, false),
            __metadata("design:paramtypes", [String])
        ], CWithNameAttribute);
        Autofac.CWithNameAttribute = CWithNameAttribute;
        let CWithKeyAttribute = class CWithKeyAttribute extends iberbar.System.CAttribute {
            constructor(key) {
                super();
                this.m_key = null;
                this.m_key = key;
            }
            get Key() {
                return this.m_key;
            }
        };
        CWithKeyAttribute = __decorate([
            iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Field | iberbar.System.UAttributeTarget.Parameter, false, false),
            __metadata("design:paramtypes", [Object])
        ], CWithKeyAttribute);
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
        Autofac.WithKey = WithKey;
        // /**
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
        class CStringKey {
            constructor(str) {
                this.m_str = null;
                this.m_str = str;
            }
            Equals(key) {
                throw new Error("Method not implemented.");
            }
        }
        Autofac.CStringKey = CStringKey;
        // export class CIndex< TKey extends IKey, TService extends object > extends System.CFunction< ( key: TKey ) => TService >
        // {
        // };
    })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));
// namespace iberbar.Autofac
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
        function Resolve(componentContext, type, ...parameters) {
            let ret = TryResolveService(componentContext, new Autofac.Core.CTypedService(type), parameters);
            if (ret.succeed == false) {
                throw new Error(`Can't resolve instance of type (${type.GetNickname()})`);
            }
            return ret.instance;
        }
        Autofac.Resolve = Resolve;
        function TryResolveService(componentContext, service, parameters) {
            let registration = componentContext.ComponentRegistry.GetRegistration(service);
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
            class CInstanceActivator {
                constructor(implementationType) {
                    this.m_limitType = null;
                    this.m_limitType = implementationType;
                }
                ActivateInstance(context, parameters) {
                    throw new Error("Method not implemented.");
                }
                GetLimitType() {
                    return this.m_limitType;
                }
                Dispose() {
                    throw new Error("Method not implemented.");
                }
            }
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
                class CDelegateActivator extends Activators.CInstanceActivator {
                    constructor(implementationType, activationFunction) {
                        super(implementationType);
                        if (typeof (activationFunction) == "function")
                            this.m_activationFunction = iberbar.System.__Callback(activationFunction);
                        else
                            this.m_activationFunction = activationFunction;
                    }
                    ActivateInstance(context, parameters) {
                        let result = this.m_activationFunction.Execute(context, parameters);
                        if (result == null) {
                            throw new Error("....");
                        }
                        return result;
                    }
                }
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
                class CProvidedInstanceActivator extends Activators.CInstanceActivator {
                    constructor(instance) {
                        super(instance.GetType());
                        this.m_actived = false;
                        this.m_instance = null;
                        this.m_instance = instance;
                    }
                    ActivateInstance(context, parameters) {
                        if (this.m_actived == true)
                            throw new Error();
                        this.m_actived = true;
                        return this.m_instance;
                    }
                }
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
                class CAutowiringParameter extends Autofac.Core.CParameter {
                    CanSupplyValue(pi, context) {
                        let registration;
                        if (pi.GetCustomAttributeOne(iberbar.System.Reflection.TypeOf(Autofac.CInjectLifetimeScopeAttribute)) != null) {
                            registration = context.ComponentRegistry.GetRegistration(new Autofac.Core.CLifetimeScopeService());
                            if (registration == null)
                                return { ret: false };
                            return {
                                ret: true,
                                valueProvider: () => context.ResolveComponent(registration, [])
                            };
                        }
                        if (pi.ParameterType == null)
                            return { ret: false };
                        registration = context.ComponentRegistry.GetRegistration(new Autofac.Core.CTypedService(pi.ParameterType));
                        if (registration == null)
                            return { ret: false };
                        return {
                            ret: true,
                            valueProvider: () => context.ResolveComponent(registration, [])
                        };
                    }
                }
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
                class CTypeComparer {
                    Equals(a, b) {
                        return a.IsEquivalentTo(b);
                    }
                }
                class CAutowiringPropertyInjector {
                    /**
                     *
                     * @param context
                     * @param instance
                     * @param propertySelector
                     * @param parameters 注意，此处的参数列表是Resolve时传入的
                     */
                    static InjectProperties(context, instance, propertySelector, parameters) {
                        let type = instance.GetType();
                        let injectableProperties = this.InjectableProperties.Get(type);
                        if (injectableProperties == null) {
                            this.InjectableProperties.Add(type, injectableProperties = this.GetInjectableProperties(type));
                        }
                        for (let i = 0; i < injectableProperties.length; i++) {
                            let propertyInfo = injectableProperties[i];
                            if (propertySelector.InjectProperty(propertyInfo, instance) == false)
                                continue;
                            // let setParameter = propertyInfo.GetSetMethod().GetParameters()[ 0 ];
                            // let parameter = parameters.FirstOrDefault( ( p ) => p.CanSupplyValue( setParameter, context ).ret == true );
                            // if ( parameter != null )
                            // {
                            // }
                            let registration;
                            if (propertyInfo.GetCustomAttributeOne(iberbar.System.Reflection.TypeOf(Autofac.CInjectLifetimeScopeAttribute)) != null) {
                                registration = context.ComponentRegistry.GetRegistration(new Autofac.Core.CLifetimeScopeService());
                                if (registration == null)
                                    throw new Error(`Can't resolve the instance of type (ILifetimeScope)`);
                            }
                            else {
                                let propertyType = propertyInfo.PropertyType;
                                if (propertyType == null)
                                    continue;
                                let propertyService = new Autofac.Core.CTypedService(propertyType);
                                registration = context.ComponentRegistry.GetRegistration(propertyService);
                                if (registration == null)
                                    continue;
                            }
                            let propertyValue = null;
                            try {
                                propertyValue = context.ResolveComponent(registration, []);
                            }
                            catch (e) {
                                console.error(e);
                            }
                            propertyInfo.SetValue(instance, propertyValue);
                        }
                    }
                    static GetInjectableProperties(instanceType) {
                        let injectableProperties = [];
                        let properties = instanceType.GetProperties();
                        for (let i = 0; i < properties.length; i++) {
                            let pi = properties[i];
                            if (pi.CanWrite == false)
                                continue;
                            injectableProperties.push(pi);
                        }
                        return injectableProperties;
                    }
                }
                CAutowiringPropertyInjector.InjectableProperties = new iberbar.System.Collections.Generic.CDictionary({ comparer: new CTypeComparer() });
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
                class CConstructorParameterBinding {
                    constructor(ci, availableParameters, context) {
                        this.m_canInstantiate = false;
                        this.m_ci = null;
                        this.m_valueRetrievers = null;
                        this.m_firstNonBindableParameter = null;
                        this.m_ci = ci;
                        this.m_canInstantiate = true;
                        let parameters = ci.GetParameters();
                        this.m_valueRetrievers = Array(parameters.length);
                        for (let i = 0; i < parameters.length; i++) {
                            let pi = parameters[i];
                            let foundValue = false;
                            for (let j = 0; j < availableParameters.length; j++) {
                                let param = availableParameters[j];
                                let canSupplyValue = param.CanSupplyValue(pi, context);
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
                    Instantiate() {
                        if (this.CanInstantiate == false)
                            throw new Error();
                        let values = Array(this.m_valueRetrievers.length);
                        for (let i = 0; i < this.m_valueRetrievers.length; i++) {
                            let m_valueRetrieverTemp = this.m_valueRetrievers[i];
                            if (m_valueRetrieverTemp == null || m_valueRetrieverTemp == undefined)
                                continue;
                            values[i] = m_valueRetrieverTemp();
                        }
                        try {
                            return this.m_ci.Invoke(...values);
                        }
                        catch (e) {
                            throw e;
                        }
                    }
                    get CanInstantiate() {
                        return this.m_canInstantiate;
                    }
                }
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
                class CDefaultValueParameter extends Autofac.Core.CParameter {
                    CanSupplyValue(pi, context) {
                        return {
                            ret: true,
                            valueProvider: () => null
                        };
                    }
                }
                Reflection.CDefaultValueParameter = CDefaultValueParameter;
            })(Reflection = Activators.Reflection || (Activators.Reflection = {}));
        })(Activators = Autofac.Activators || (Autofac.Activators = {}));
    })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));
/// <reference path="../CInstanceActivator.ts" />
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
                class CReflectionActivator extends Activators.CInstanceActivator {
                    constructor(implementationType, configuredParameters, configuredProperties) {
                        super(implementationType);
                        this.m_implementationType = null;
                        this.m_configuredProperties = null;
                        this.m_defaultParameters = null;
                        this.m_constructor = null;
                        this.m_implementationType = implementationType;
                        this.m_constructor = this.m_implementationType.GetConstructor();
                        this.m_defaultParameters = configuredParameters.concat([
                            new Reflection.CAutowiringParameter(),
                            new Reflection.CDefaultValueParameter()
                        ]);
                        this.m_configuredProperties = configuredProperties;
                    }
                    ActivateInstance(context, parameters) {
                        let binding = this.GetConstructorBinding(context, parameters);
                        if (binding.CanInstantiate == false) {
                            throw new Error();
                        }
                        let instance = binding.Instantiate();
                        // let instance: object = null;
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
                    Dispose() {
                        throw new Error("Method not implemented.");
                    }
                    GetConstructorBinding(context, parameters) {
                        let prioritisedParameters = [];
                        if (parameters != null && parameters.length > 0)
                            prioritisedParameters = parameters;
                        if (this.m_defaultParameters != null && this.m_defaultParameters.length > 0)
                            prioritisedParameters = prioritisedParameters.concat(this.m_defaultParameters);
                        let binding = new Reflection.CConstructorParameterBinding(this.m_constructor, prioritisedParameters, context);
                        return binding;
                    }
                    InjectProperties(instance, context) {
                        if (this.m_configuredProperties.length == 0)
                            return;
                        let actualProperties = instance.GetType().GetProperties().Where((pi) => pi.CanWrite);
                        for (let i = 0; i < this.m_configuredProperties.length; i++) {
                            let configuredProperty = this.m_configuredProperties[i];
                            for (let i = 0; i < actualProperties.length; i++) {
                                let propertyInfo = actualProperties[i];
                                if (propertyInfo.GetCustomAttributeOne(iberbar.System.Reflection.TypeOf(Autofac.CInjectLifetimeScopeAttribute)) != null) {
                                    configuredProperty = new Reflection.CAutowiringParameter();
                                }
                                let setter = propertyInfo.GetSetMethod();
                                let canSupplyValue = configuredProperty.CanSupplyValue(setter.GetParameters()[0], context);
                                if (canSupplyValue.ret == true) {
                                    actualProperties.splice(i, 1);
                                    propertyInfo.SetValue(instance, canSupplyValue.valueProvider());
                                    break;
                                }
                            }
                        }
                    }
                }
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
            class CReflectionActivatorData {
                constructor(implementer) {
                    this.m_implementationType = null;
                    this.m_constructor = null;
                    this.m_configuredParameters = [];
                    this.m_configuredProperties = [];
                    this.m_implementationType = implementer;
                    this.m_constructor = this.m_implementationType.GetConstructor();
                }
                get ImplementationType() {
                    return this.m_implementationType;
                }
                get ConfiguredParameters() {
                    return this.m_configuredParameters;
                }
                get ConfiguredProperties() {
                    return this.m_configuredProperties;
                }
            }
            Builder.CReflectionActivatorData = CReflectionActivatorData;
        })(Builder = Autofac.Builder || (Autofac.Builder = {}));
    })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));
/// <reference path="./CReflectionActivatorData.ts" />
var iberbar;
(function (iberbar) {
    var Autofac;
    (function (Autofac) {
        var Builder;
        (function (Builder) {
            /**
             * Reflection activator data for concrete types.
             */
            class CConcreteReflectionActivatorData extends Builder.CReflectionActivatorData {
                //private readonly m_activator: Core.IInstanceActivator = null;
                constructor(implementer) {
                    super(implementer);
                }
                GetTypes() {
                    return () => this.ImplementationType;
                }
                GetActivator() {
                    return new Autofac.Activators.Reflection.CReflectionActivator(this.ImplementationType, this.ConfiguredParameters, this.ConfiguredProperties);
                }
                Dispose() {
                    throw new Error("Method not implemented.");
                }
            }
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
            class CDeferredCallback {
                constructor(callback) {
                    this.m_callback = null;
                    this.m_callback = callback;
                }
                get Callback() {
                    return this.m_callback;
                }
            }
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
            class CRegistrationBuilder {
                constructor(service, activatorData, style) {
                    this.m_registrationData = null;
                    this.m_activatorData = null;
                    this.m_registrationStyle = null;
                    this.m_registrationData = new Builder.CRegistrationData(service);
                    this.m_activatorData = activatorData;
                    this.m_registrationStyle = style;
                }
                get RegisterData() {
                    return this.m_registrationData;
                }
                get ActivatorData() {
                    return this.m_activatorData;
                }
                GetActivatorDataEx(t) {
                    if (this.m_activatorData instanceof t) {
                        return this.m_activatorData;
                    }
                    return null;
                }
                get RegistrationStyle() {
                    return this.m_registrationStyle;
                }
                Named(type, name) {
                    this.m_registrationData.AddService(new Autofac.Core.CKeyedService(name, type));
                    return this;
                }
                Keyed(type, key) {
                    this.m_registrationData.AddService(new Autofac.Core.CKeyedService(key, type));
                    return this;
                }
                KeyedMapping(type, servicesKeyMapping) {
                    if (this.m_activatorData instanceof Builder.CScanningActivatorData) {
                        this.m_activatorData.Filters.push(t => t.IsInheritFrom(type));
                        this.__As2(t => new Autofac.Core.CKeyedService(servicesKeyMapping(t), type));
                    }
                    else if (this.m_activatorData instanceof Builder.CConcreteReflectionActivatorData) {
                        this.m_registrationData.AddService(new Autofac.Core.CKeyedService(servicesKeyMapping(this.m_activatorData.ImplementationType), this.m_activatorData.ImplementationType));
                    }
                    return this;
                }
                As(type) {
                    this.m_registrationData.AddService(new Autofac.Core.CTypedService(type));
                    return this;
                }
                AsEx(services) {
                    this.m_registrationData.AddServices(services);
                    return this;
                }
                __As1(serviceMapping) {
                    return this.__As2(t => new Autofac.Core.CTypedService(serviceMapping(t)));
                }
                __As2(serviceMapping) {
                    return this.__As3(t => [serviceMapping(t)]);
                }
                __As3(serviceMapping) {
                    return Autofac.Features.Scanning.CScanningRegistrationExtensions.As(this, serviceMapping);
                }
                AsSelf() {
                    if (this.m_activatorData instanceof Builder.CScanningActivatorData) {
                        this.__As1(t => t);
                    }
                    else if (this.m_activatorData instanceof Builder.CConcreteReflectionActivatorData) {
                        this.m_registrationData.AddService(new Autofac.Core.CTypedService(this.m_activatorData.ImplementationType));
                    }
                    //return this.__As( this.m_activatorData.GetTypes() );
                    return this;
                }
                Where(predicate) {
                    if ((this.m_activatorData instanceof Builder.CScanningActivatorData) == false)
                        throw new Error();
                    this.m_activatorData.Filters.push(predicate);
                    return this;
                }
                SingleInstance() {
                    this.m_registrationData.Sharing = Autofac.Core.UInstanceSharing.Shared;
                    this.m_registrationData.Lifetime = new Autofac.Core.Lifetime.CRootScopeLifetime();
                    return this;
                }
                InstancePerDependency() {
                    this.m_registrationData.Sharing = Autofac.Core.UInstanceSharing.None;
                    this.m_registrationData.Lifetime = new Autofac.Core.Lifetime.CCurrentScopeLifetime();
                    return this;
                }
                InstancePerLifetimeScope() {
                    this.m_registrationData.Sharing = Autofac.Core.UInstanceSharing.Shared;
                    this.m_registrationData.Lifetime = new Autofac.Core.Lifetime.CCurrentScopeLifetime();
                    return this;
                }
                InstancePerMatchingLifetimeScope(...scopeTag) {
                    this.m_registrationData.Sharing = Autofac.Core.UInstanceSharing.Shared;
                    this.m_registrationData.Lifetime = new Autofac.Core.Lifetime.CMatchingScopeLifetime(...scopeTag);
                    return this;
                }
                PropertiesAutowired(propertySelector) {
                    if (propertySelector == undefined) {
                        propertySelector = new Autofac.Core.CDefaultPropertySelector(false);
                    }
                    this.m_registrationData.ActivatingHandlers.Add((sender, e) => {
                        Autofac.Activators.Reflection.CAutowiringPropertyInjector.InjectProperties(e.Context, e.Instance, propertySelector, e.Parameters);
                    });
                    return this;
                }
                WithParameter(parameter) {
                    let activatorData = this.GetActivatorDataEx(Builder.CReflectionActivatorData);
                    if (activatorData != null) {
                        activatorData.ConfiguredParameters.push(parameter);
                    }
                    return this;
                }
                WithParameters(parameters) {
                    for (let i = 0; i < parameters.length; i++) {
                        let p = parameters[i];
                        this.WithParameter(p);
                    }
                    return this;
                }
                WithProperty(parameter) {
                    let activatorData = this.GetActivatorDataEx(Builder.CReflectionActivatorData);
                    if (activatorData != null)
                        activatorData.ConfiguredProperties.push(parameter);
                    return this;
                }
                WithProperties(parameters) {
                    for (let i = 0; i < parameters.length; i++) {
                        let p = parameters[i];
                        this.WithProperty(p);
                    }
                    return this;
                }
                OnActivating(callback) {
                    this.m_registrationData.ActivatingHandlers.Add((s, e) => {
                        var args = new Autofac.Core.CActivatingEventArgs(e.Context, e.Registration, e.Parameters, e.Instance);
                        if (typeof (callback) == "function")
                            callback(args);
                        else
                            callback.Execute(args);
                        e.Instance = args.Instance;
                    });
                    return this;
                }
                OnActivated() {
                    throw new Error("Method not implemented.");
                }
            }
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
            class CRegistrationBuilderHelper {
                static RegisterSingleComponent(cr, rb) {
                    let registration = this.CreateRegistrationForBuilder(rb);
                    cr.Register(registration, false);
                }
                static CreateRegistrationForBuilder(rb) {
                    return this.CreateRegistration(rb.RegistrationStyle.ID, rb.RegisterData, rb.ActivatorData.GetActivator(), rb.RegisterData.GetServices());
                }
                static CreateRegistration(id, data, activator, services, target) {
                    let limitType = activator.GetLimitType();
                    for (let i = 0; i < services.length; i++) {
                        let ts = services[i];
                        if (ts.hasOwnProperty("GetServiceType") == false)
                            continue;
                        if (limitType.IsInheritFrom(ts.GetServiceType()) == false) {
                            throw new Error("");
                        }
                    }
                    let registration = new Autofac.Core.Registration.CComponentRegistration(id, activator, data.Lifetime, data.Sharing, null, data.GetServices(), null, target);
                    registration.Activating.Add(data.ActivatingHandlers.callbacks);
                    return registration;
                }
            }
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
            class CRegistrationData {
                constructor(defaultService) {
                    this.m_defaultService = null;
                    this.m_defaultServiceOverriden = false;
                    this.m_services = Array();
                    this.m_sharing = Autofac.Core.UInstanceSharing.None;
                    this.m_lifetime = new Autofac.Core.Lifetime.CCurrentScopeLifetime();
                    this.m_deferredCallback = null;
                    this.m_activatingHandlers = new iberbar.System.TCallbackArray();
                    this.m_defaultService = defaultService;
                }
                AddService(service) {
                    this.m_defaultServiceOverriden = true;
                    this.m_services.push(service);
                }
                AddServices(services) {
                    this.m_defaultServiceOverriden = true;
                    this.m_services = this.m_services.concat(services);
                }
                GetServices() {
                    if (this.m_defaultServiceOverriden == true)
                        return this.m_services;
                    return (this.m_services.length == 0) ? [this.m_defaultService] : this.m_services;
                }
                set Lifetime(value) {
                    this.m_lifetime = value;
                }
                get Lifetime() {
                    return this.m_lifetime;
                }
                set Sharing(value) {
                    this.m_sharing = value;
                }
                get Sharing() {
                    return this.m_sharing;
                }
                set DeferredCallback(value) {
                    this.m_deferredCallback = value;
                }
                get DeferredCallback() {
                    return this.m_deferredCallback;
                }
                get ActivatingHandlers() {
                    return this.m_activatingHandlers;
                }
                CopyFrom(that, includeDefaultService) {
                    if (includeDefaultService == true)
                        this.m_defaultService = that.m_defaultService;
                    this.m_defaultServiceOverriden = that.m_defaultServiceOverriden;
                    this.m_lifetime = that.m_lifetime;
                    this.m_sharing = that.m_sharing;
                    this.m_services = this.CopyArray(that.m_services);
                    this.m_activatingHandlers = that.m_activatingHandlers.Copy();
                }
                CopyArray(src) {
                    let dest = [];
                    for (let i = 0; i < src.length; i++) {
                        let temp = src[i];
                        dest.push(temp);
                    }
                    return dest;
                }
            }
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
            class CScanningActivatorData extends Builder.CReflectionActivatorData {
                constructor() {
                    super(iberbar.System.Reflection.TypeOf(Object));
                    this.m_filter = [];
                    this.m_configurationActions = [];
                }
                GetTypes() {
                    throw new Error("Method not implemented.");
                }
                GetActivator() {
                    throw new Error("Method not implemented.");
                }
                get Filters() {
                    return this.m_filter;
                }
                get ConfigurationActions() {
                    return this.m_configurationActions;
                }
            }
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
            class CSimpleActivatorData {
                constructor(activator) {
                    this.m_activator = null;
                    this.m_activator = activator;
                }
                GetTypes() {
                    return () => this.m_activator.GetLimitType();
                }
                GetActivator() {
                    return this.m_activator;
                }
            }
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
            class CSingleRegistrationStyle {
                constructor() {
                    this.m_id = Autofac.Core.GenID();
                    this.m_preserveDefaults = false;
                }
                get ID() {
                    return this.m_id;
                }
                set PreserveDefaults(value) {
                    this.m_preserveDefaults = value;
                }
                get PreserveDefaults() {
                    return this.m_preserveDefaults;
                }
            }
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
            class CActivatingEventArgs {
                constructor(context, registration, parameters, instance) {
                    this.m_instance = null;
                    this.m_context = null;
                    this.m_registration = null;
                    this.m_parameters = null;
                    this.m_context = context;
                    this.m_registration = registration;
                    this.m_parameters = parameters;
                    this.m_instance = instance;
                }
                ReplaceInstance(instance) {
                    throw new Error("Method not implemented.");
                }
                get Context() {
                    return this.m_context;
                }
                get Registration() {
                    return this.m_registration;
                }
                get Parameters() {
                    return this.m_parameters;
                }
                get Instance() {
                    return this.m_instance;
                }
                set Instance(value) {
                    if (value == null)
                        throw Error("");
                    this.m_instance = value;
                }
            }
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
            class CContainer {
                constructor() {
                    this.m_rootLifetimeScope = null;
                    this.m_componentRegistry = null;
                    this.m_componentRegistry = new Core.Registration.CComponentRegistry();
                    this.m_componentRegistry.Register(new Core.Registration.CComponentRegistration(Core.Lifetime.CLifetimeScope.SelfRegistrationId, new Autofac.Activators.Delegate.CDelegateActivator(iberbar.System.Reflection.TypeOf(Object), () => { throw new Error(); }), new Core.Lifetime.CCurrentScopeLifetime(), Core.UInstanceSharing.Shared, null, [new Core.CLifetimeScopeService()], null));
                    this.m_rootLifetimeScope = new Core.Lifetime.CLifetimeScope(this.m_componentRegistry, null, null);
                }
                GetTag() {
                    throw new Error("Method not implemented.");
                }
                BeginLifetimeScope(tag) {
                    return this.m_rootLifetimeScope.BeginLifetimeScope(tag);
                }
                Dispose() {
                    this.m_rootLifetimeScope.Dispose();
                }
                get ComponentRegistry() {
                    return this.m_componentRegistry;
                }
                ResolveComponent(registration, parameters) {
                    return this.m_rootLifetimeScope.ResolveComponent(registration, parameters);
                }
                Resolve(type, ...parameters) {
                    return this.m_rootLifetimeScope.Resolve(type, ...parameters);
                }
                ResolveNamed(type, name, ...parameters) {
                    return this.m_rootLifetimeScope.ResolveNamed(type, name, ...parameters);
                }
                ResolveKeyed(type, key, ...parameters) {
                    return this.m_rootLifetimeScope.ResolveKeyed(type, key, ...parameters);
                }
                TryResolveKeyed(type, key, ...parameters) {
                    return this.m_rootLifetimeScope.TryResolveKeyed(type, key, ...parameters);
                }
                GetDisposer() {
                    return this.m_rootLifetimeScope.GetDisposer();
                }
            }
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
            class CDefaultPropertySelector {
                constructor(preserveSetValues) {
                    this.m_preserveSetValues = false;
                    this.m_preserveSetValues = (preserveSetValues == true) ? true : false;
                }
                /**
                 * Provides default filtering to determine if property should be injected by rejecting
                 * @param propertyInfo
                 * @param instance
                 */
                InjectProperty(propertyInfo, instance) {
                    if (propertyInfo.CanWrite == false) {
                        return false;
                    }
                    if (this.m_preserveSetValues == true && propertyInfo.CanRead == false) {
                        return propertyInfo.GetValue(instance) == null;
                    }
                    return true;
                }
            }
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
            class CDelegatePropertySelector {
                InjectProperty(propertyInfo, instance) {
                    throw new Error("Method not implemented.");
                }
            }
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
            class CDisposer {
                constructor() {
                    this.m_items = [];
                }
                AddInstanceForDisposal(instance) {
                    this.m_items.push(instance);
                }
                Dispose() {
                    for (let i = 0; i < this.m_items.length; i++) {
                        let item = this.m_items[i];
                        item.Dispose();
                    }
                    this.m_items = null;
                }
            }
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
            class CService {
            }
            Core.CService = CService;
        })(Core = Autofac.Core || (Autofac.Core = {}));
    })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));
/// <reference path="./CService.ts" />
var iberbar;
(function (iberbar) {
    var Autofac;
    (function (Autofac) {
        var Core;
        (function (Core) {
            class CKeyedService extends Core.CService {
                constructor(serviceKey, serviceType) {
                    super();
                    this.m_serviceType = null;
                    this.m_key = null;
                    this.m_key = serviceKey;
                    this.m_serviceType = serviceType;
                }
                GetServiceType() {
                    return this.m_serviceType;
                }
                ChangeType(newType) {
                    throw new Error("Method not implemented.");
                }
                Equals(other) {
                    if (other.m_serviceType == undefined)
                        return false;
                    if (other.m_key == undefined)
                        return false;
                    return this.GetType().IsEquivalentTo(other.GetType()) &&
                        this.m_serviceType.IsEquivalentTo(other.m_serviceType) &&
                        this.CompareKeys(this.m_key, other.m_key);
                }
                CompareKeys(k1, k2) {
                    if (k1 === k2)
                        return true;
                    if (k1.Equals != undefined && k2.Equals != undefined && k1.Equals(k2))
                        return true;
                    return false;
                }
            }
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
            class CLifetimeScopeService extends Core.CService {
                constructor() {
                    super();
                }
                Equals(other) {
                    return other instanceof CLifetimeScopeService;
                }
            }
            Core.CLifetimeScopeService = CLifetimeScopeService;
        })(Core = Autofac.Core || (Autofac.Core = {}));
    })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));
/// <reference path="./CConstantParameter.ts" />
var iberbar;
(function (iberbar) {
    var Autofac;
    (function (Autofac) {
        var Core;
        (function (Core) {
            class CNamedPropertyParameter extends Core.CConstantParameter {
                constructor(name, value) {
                    super(value, pi => true);
                }
            }
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
            class CResolvedParameter extends Core.CParameter {
                CanSupplyValue(pi, context) {
                    throw new Error("Method not implemented.");
                }
            }
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
            class CServiceEqualityComparer {
                Equals(a, b) {
                    return a.Equals(b);
                }
            }
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
            class CTypedService extends Core.CService {
                constructor(serviceType) {
                    super();
                    this.m_serviceType = null;
                    this.m_serviceType = serviceType;
                }
                GetServiceType() {
                    return this.m_serviceType;
                }
                ChangeType(newType) {
                    throw new Error("Method not implemented.");
                }
                Equals(other) {
                    if (other.m_serviceType == undefined)
                        return false;
                    return this.GetType().IsEquivalentTo(other.GetType()) && this.m_serviceType.IsEquivalentTo(other.m_serviceType);
                }
            }
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
            let UInstanceSharing;
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
                class CCurrentScopeLifetime {
                    FindScope(mostNestedVisibleScope) {
                        return mostNestedVisibleScope;
                    }
                }
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
                class CLifetimeScope {
                    constructor(componentRegistry, lifetimeScopeParent, tag) {
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
                        }
                        else {
                            if (tag == null)
                                throw new Error();
                            this.m_lifetimeScopeRoot = lifetimeScopeParent.GetRootLifetimeScope();
                            this.m_tag = tag;
                        }
                        // 保存自己的ID
                        this.m_sharedInstances.Add(CLifetimeScope.SelfRegistrationId, this);
                    }
                    static MakeAnonymousTag() {
                        return Symbol();
                    }
                    GetParentLifetimeScope() {
                        return this.m_lifetimeScopeParent;
                    }
                    GetRootLifetimeScope() {
                        return this.m_lifetimeScopeRoot;
                    }
                    GetOrCreateAndShare(id, creator) {
                        let instance = this.m_sharedInstances.Get(id);
                        if (instance != null)
                            return instance;
                        instance = creator.Execute();
                        this.m_sharedInstances.Add(id, instance);
                        return instance;
                    }
                    BeginLifetimeScope(tag) {
                        if (tag == undefined) {
                            return this.BeginLifetimeScope(CLifetimeScope.MakeAnonymousTag());
                        }
                        this.CheckTagIsUnique(tag);
                        let scope = new CLifetimeScope(this.m_componentRegistry, this, tag);
                        return scope;
                    }
                    get ComponentRegistry() {
                        return this.m_componentRegistry;
                    }
                    ResolveComponent(registration, parameters) {
                        this.CheckNotDisposed();
                        let operation = new Core.Resolving.CResolveOperation(this);
                        return operation.Execute(registration, parameters);
                    }
                    Resolve(type, ...parameters) {
                        let ret = this.TryResolveService(new Core.CTypedService(type), parameters);
                        if (ret.succeed == false) {
                            throw new Error(`Can't resolve instance of type (${type.GetNickname()})`);
                        }
                        return ret.instance;
                    }
                    ResolveNamed(type, name, ...parameters) {
                        let ret = this.TryResolveService(new Core.CKeyedService(name, type), parameters);
                        if (ret.succeed == false) {
                            throw new Error();
                        }
                        return ret.instance;
                    }
                    ResolveKeyed(type, key, ...parameters) {
                        let ret = this.TryResolveService(new Core.CKeyedService(key, type), parameters);
                        if (ret.succeed == false) {
                            throw new Error(`Can't resolve instance of type (${type.GetNickname()}) with key<${key.toString()}>`);
                        }
                        return ret.instance;
                    }
                    TryResolveKeyed(type, key, ...parameters) {
                        let ret = this.TryResolveService(new Core.CKeyedService(key, type), parameters);
                        if (ret.succeed == false) {
                            return null;
                        }
                        return ret.instance;
                    }
                    TryResolveService(service, parameters) {
                        let registration = this.ComponentRegistry.GetRegistration(service);
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
                    Dispose() {
                        this.m_disposer.Dispose();
                        this.m_sharedInstances.Clear();
                    }
                    GetTag() {
                        return this.m_tag;
                    }
                    CheckTagIsUnique(tag) {
                        let scopeParent = this;
                        while (scopeParent) {
                            if (scopeParent.GetTag() == tag) {
                                throw new Error("");
                            }
                            scopeParent = scopeParent.GetParentLifetimeScope();
                        }
                    }
                    CheckNotDisposed() {
                    }
                    GetDisposer() {
                        return this.m_disposer;
                    }
                }
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
                class CMatchingScopeLifetime {
                    constructor(...scopeTag) {
                        this.m_tagToMatch = null;
                        this.m_tagToMatch = scopeTag;
                    }
                    FindScope(mostNestedVisibleScope) {
                        let next = mostNestedVisibleScope;
                        while (next) {
                            if (this.m_tagToMatch.indexOf(next.GetTag()) >= 0)
                                return next;
                            next = next.GetParentLifetimeScope();
                        }
                        throw new Error();
                    }
                }
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
                class CRootScopeLifetime {
                    FindScope(mostNestedVisibleScope) {
                        return mostNestedVisibleScope.GetRootLifetimeScope();
                    }
                }
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
                class CComponentRegistration {
                    constructor(id, activator, lifetime, sharing, ownership, services, metadata, target) {
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
                    get ID() {
                        return this.m_id;
                    }
                    get Activator() {
                        return this.m_activator;
                    }
                    get Lifetime() {
                        return this.m_lifetime;
                    }
                    get Sharing() {
                        return this.m_sharing;
                    }
                    get Services() {
                        return this.m_services;
                    }
                    get Metadta() {
                        return this.m_metadata;
                    }
                    get Target() {
                        return this.m_target;
                    }
                    get Preparing() {
                        throw new Error("Method not implemented.");
                    }
                    RaisePreparing(context, parameters) {
                        throw new Error("Method not implemented.");
                    }
                    get Activating() {
                        return this.m_activatingHandlers;
                    }
                    RaiseActivating(context, parameters, instance) {
                        let args = new Core.CActivatingEventArgs(context, this, parameters, instance);
                        this.Activating.Execute(this, args);
                        return args.Instance;
                    }
                    get Activated() {
                        throw new Error("Method not implemented.");
                    }
                    RaiseActivated(context, parameters, instance) {
                        throw new Error("Method not implemented.");
                    }
                    Dispose() {
                        throw new Error("Method not implemented.");
                    }
                }
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
                class CComponentRegistry {
                    constructor() {
                        this.m_registrations = [];
                        this.m_serviceInfo = new iberbar.System.Collections.Generic.CDictionary({ comparer: new Core.CServiceEqualityComparer() });
                    }
                    GetProperties() {
                        throw new Error("Method not implemented.");
                    }
                    GetRegistration(service) {
                        let info = this.m_serviceInfo.Get(service);
                        if (info == null)
                            return null;
                        let componentRegistration = info.GetRegistration();
                        return componentRegistration;
                    }
                    IsRegistered(service) {
                        throw new Error("Method not implemented.");
                    }
                    Register(registration, preserveDefaults) {
                        this.AddRegistration(registration, preserveDefaults);
                    }
                    GetRegistrations() {
                        throw new Error("Method not implemented.");
                    }
                    GetRegistrationsFor(service) {
                        throw new Error("Method not implemented.");
                    }
                    AddRegistrationSource(source) {
                        throw new Error("Method not implemented.");
                    }
                    GetRegistrationSources() {
                        throw new Error("Method not implemented.");
                    }
                    HasLocalComponents() {
                        throw new Error("Method not implemented.");
                    }
                    Dispose() {
                        throw new Error("Method not implemented.");
                    }
                    AddRegistration(registration, preserveDefaults, originatedFromSource = false) {
                        let services = registration.Services;
                        for (let i = 0; i < services.length; i++) {
                            let s = services[i];
                            let info = this.GetServiceInfo(s);
                            info.AddImplementation(registration, preserveDefaults, originatedFromSource);
                        }
                        this.m_registrations.push(registration);
                    }
                    GetServiceInfo(service) {
                        let info = this.m_serviceInfo.Get(service);
                        if (info != null)
                            return info;
                        info = new Registration.CServiceRegistrationInfo(service);
                        this.m_serviceInfo.Add(service, info);
                        return info;
                    }
                }
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
                class CServiceRegistrationInfo {
                    constructor(service) {
                        this.m_service = null;
                        this.m_defaultImplementations = [];
                        this.m_preserveDefaultImplementations = null;
                        this.m_sourceImplementations = null;
                        this.m_service = service;
                    }
                    AddImplementation(registration, preserveDefaults, originatedFromSource) {
                        if (preserveDefaults == true) {
                            if (originatedFromSource == true) {
                                if (this.m_sourceImplementations == null) {
                                    this.m_sourceImplementations = [];
                                }
                                this.m_sourceImplementations.push(registration);
                            }
                            else {
                                if (this.m_preserveDefaultImplementations == null) {
                                    this.m_preserveDefaultImplementations = [];
                                }
                                this.m_preserveDefaultImplementations.push(registration);
                            }
                        }
                        else {
                            if (originatedFromSource == true)
                                throw new Error();
                            this.m_defaultImplementations.push(registration);
                        }
                    }
                    GetRegistration() {
                        let componentRegistration = null;
                        if (this.m_defaultImplementations != null) {
                            if (this.m_defaultImplementations.length > 0)
                                componentRegistration = this.m_defaultImplementations[this.m_defaultImplementations.length - 1];
                        }
                        if (componentRegistration == null) {
                            if (this.m_sourceImplementations != null && this.m_sourceImplementations.length > 0)
                                componentRegistration = this.m_sourceImplementations[0];
                        }
                        if (componentRegistration == null) {
                            if (this.m_preserveDefaultImplementations != null && this.m_preserveDefaultImplementations.length > 0)
                                componentRegistration = this.m_preserveDefaultImplementations[0];
                        }
                        return componentRegistration;
                    }
                }
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
                class CInstanceLookup {
                    constructor(registration, context, mostNestedVisibleScope, parameters) {
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
                        }
                        catch (e) {
                            throw e;
                        }
                    }
                    GetComponentRegistration() {
                        return this.m_registration;
                    }
                    GetActivationScope() {
                        return this.m_activationScope;
                    }
                    GetParameters() {
                        return this.m_parameters;
                    }
                    get ComponentRegistry() {
                        return this.m_activationScope.ComponentRegistry;
                    }
                    ResolveComponent(registration, parameters) {
                        return this.m_context.GetOrCreateInstance(this.m_activationScope, registration, parameters);
                    }
                    Execute() {
                        if (this.m_executed == true)
                            throw new Error();
                        this.m_executed = true;
                        let instance = null;
                        if (this.m_registration.Sharing == Core.UInstanceSharing.None) {
                            instance = this.Activate(this.m_parameters);
                        }
                        else {
                            instance = this.m_activationScope.GetOrCreateAndShare(this.m_registration.ID, this.__Callback(() => this.Activate(this.m_parameters)));
                        }
                        return instance;
                    }
                    Activate(parameters) {
                        try {
                            this.m_newInstance = this.m_registration.Activator.ActivateInstance(this, parameters);
                        }
                        catch (error) {
                            throw error;
                        }
                        // dispose
                        if (this.m_newInstance["Dispose"] != undefined) {
                            this.m_activationScope.GetDisposer().AddInstanceForDisposal(this.m_newInstance);
                        }
                        this.m_newInstance = this.m_registration.RaiseActivating(this, parameters, this.m_newInstance);
                        return this.m_newInstance;
                    }
                }
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
                class CResolveOperation {
                    constructor(mostNestedLifetimeScope) {
                        this.m_mostNestedLifetimeScope = null;
                        this.m_mostNestedLifetimeScope = mostNestedLifetimeScope;
                    }
                    get ComponentRegistry() {
                        return this.m_mostNestedLifetimeScope.ComponentRegistry;
                    }
                    ResolveComponent(registration, parameters) {
                        return this.GetOrCreateInstance(this.m_mostNestedLifetimeScope, registration, parameters);
                    }
                    Execute(registration, parameters) {
                        let result = null;
                        try {
                            result = this.ResolveComponent(registration, parameters);
                        }
                        catch (e) {
                            throw e;
                        }
                        return result;
                    }
                    GetOrCreateInstance(currentLifetimeScope, registration, parameters) {
                        let lookup = new Resolving.CInstanceLookup(registration, this, currentLifetimeScope, parameters);
                        let instance = lookup.Execute();
                        return instance;
                    }
                    TryResolveService(service, parameters) {
                        return Autofac.TryResolveService(this, service, parameters);
                    }
                }
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
                class CScanningRegistrationExtensions {
                    static RegisterAssemblyTypes(containerBuilder, assemblies) {
                        let rb = new Autofac.Builder.CRegistrationBuilder(new Autofac.Core.CTypedService(iberbar.System.Reflection.TypeOf(Object)), new Autofac.Builder.CScanningActivatorData(), {});
                        rb.RegisterData.DeferredCallback = containerBuilder.RegisterCallback(iberbar.System.__Callback(function (cr) {
                            CScanningRegistrationExtensions.ScanAssemblies(assemblies, cr, rb);
                        }));
                        return rb;
                    }
                    static RegisterTypes(containerBuilder, types) {
                        let rb = new Autofac.Builder.CRegistrationBuilder(new Autofac.Core.CTypedService(iberbar.System.Reflection.TypeOf(Object)), new Autofac.Builder.CScanningActivatorData(), {});
                        rb.RegisterData.DeferredCallback = containerBuilder.RegisterCallback(iberbar.System.__Callback(function (cr) {
                            CScanningRegistrationExtensions.ScanTypes(types, cr, rb);
                        }));
                        return rb;
                    }
                    static ScanAssemblies(assemblies, componentRegistry, registrationBuilder) {
                        let types = [];
                        for (let i = 0; i < assemblies.length; i++) {
                            let assembly = assemblies[i];
                            types = types.concat(assembly.GetTypes());
                        }
                        this.ScanTypes(types, componentRegistry, registrationBuilder);
                    }
                    static ScanTypes(types, componentRegistry, registrationBuilder) {
                        let activatorData = registrationBuilder.ActivatorData;
                        let filters = activatorData.Filters;
                        for (let i = 0; i < types.length; i++) {
                            let t = types[i];
                            let fit = true;
                            for (let j = 0; j < filters.length; j++) {
                                let filterTemp = filters[j];
                                if (filterTemp(t) == false) {
                                    fit = false;
                                    break;
                                }
                            }
                            if (fit == false)
                                continue;
                            let scanned = new Autofac.Builder.CRegistrationBuilder(new Autofac.Core.CTypedService(t), new Autofac.Builder.CConcreteReflectionActivatorData(t), new Autofac.Builder.CSingleRegistrationStyle());
                            scanned.RegisterData.CopyFrom(registrationBuilder.RegisterData, false);
                            for (let j = 0; j < activatorData.ConfigurationActions.length; j++) {
                                let action = activatorData.ConfigurationActions[j];
                                action(t, scanned);
                            }
                            if (scanned.RegisterData.GetServices().length > 0)
                                Autofac.Builder.CRegistrationBuilderHelper.RegisterSingleComponent(componentRegistry, scanned);
                        }
                    }
                    static As(registrationBuilder, serviceMapping) {
                        let activatorData = registrationBuilder.ActivatorData;
                        activatorData.ConfigurationActions.push(function (type, rb) {
                            let mapped = serviceMapping(type);
                            let impl = rb.ActivatorData.ImplementationType;
                            let applied = [];
                            for (let i = 0; i < mapped.length; i++) {
                                let s = mapped[i];
                                let c = s;
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
                }
                Scanning.CScanningRegistrationExtensions = CScanningRegistrationExtensions;
            })(Scanning = Features.Scanning || (Features.Scanning = {}));
        })(Features = Autofac.Features || (Autofac.Features = {}));
    })(Autofac = iberbar.Autofac || (iberbar.Autofac = {}));
})(iberbar || (iberbar = {}));

"use strict";
var iberbar;
(function (iberbar) {
    var Event;
    (function (Event) {
        class CEvent {
        }
        Event.CEvent = CEvent;
        ;
    })(Event = iberbar.Event || (iberbar.Event = {}));
})(iberbar || (iberbar = {}));
var iberbar;
(function (iberbar) {
    var Event;
    (function (Event) {
        class IEventBus {
        }
        Event.IEventBus = IEventBus;
        ;
    })(Event = iberbar.Event || (iberbar.Event = {}));
})(iberbar || (iberbar = {}));
var iberbar;
(function (iberbar) {
    var Event;
    (function (Event) {
        class IStateMachine {
            AddState(state) {
                throw new Error('Not implements');
            }
            GetState(stateType) {
                throw new Error('Not implements');
            }
        }
        Event.IStateMachine = IStateMachine;
    })(Event = iberbar.Event || (iberbar.Event = {}));
})(iberbar || (iberbar = {}));
var iberbar;
(function (iberbar) {
    var Event;
    (function (Event) {
        class IStateNode {
            Initialize() {
                throw new Error('Not implements');
            }
        }
        Event.IStateNode = IStateNode;
    })(Event = iberbar.Event || (iberbar.Event = {}));
})(iberbar || (iberbar = {}));
var iberbar;
(function (iberbar) {
    var Event;
    (function (Event) {
        var Implements;
        (function (Implements) {
            class CEventBus extends Event.IEventBus {
                constructor() {
                    super(...arguments);
                    this.m_events = new WeakMap();
                }
                Listen(eventType, listener, once) {
                    let prototype = eventType.GetJsPrototype();
                    let array = this.m_events.get(prototype);
                    if (array == null) {
                        array = Array();
                        array.push({
                            listener: (typeof (listener) == "function") ? __Callback(listener) : listener,
                            kick: (once == true) ? 1 : -1
                        });
                        this.m_events.set(prototype, array);
                    }
                    else {
                        for (let i = 0; i < array.length; i++) {
                            let delegateTemp = array[i];
                            if (delegateTemp.listener == listener)
                                return;
                        }
                        array.push({
                            listener: (typeof (listener) == "function") ? __Callback(listener) : listener,
                            kick: (once == true) ? 1 : -1
                        });
                    }
                }
                Send(eventData) {
                    let prototype = eventData.GetType().GetJsPrototype();
                    let delegates = this.m_events.get(prototype);
                    if (delegates == null)
                        return;
                    for (let i = 0; i < delegates.length; i++) {
                        let delegateTemp = delegates[i];
                        if (delegateTemp.kick == 0)
                            continue;
                        delegateTemp.kick--;
                        delegateTemp.listener.Execute(eventData);
                    }
                    for (let i = 0; i < delegates.length;) {
                        let delegateTemp = delegates[i];
                        if (delegateTemp.kick == 0) {
                            delegates.splice(i, 1);
                        }
                        else {
                            i++;
                        }
                    }
                }
            }
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
            class CStateMachine extends Event.IStateMachine {
                constructor() {
                    super(...arguments);
                    this.m_state = new WeakMap();
                }
                AddState(state) {
                    let prototype = state.GetType().GetJsPrototype();
                    let stateTemp = this.m_state.get(prototype);
                    if (stateTemp != null) {
                        throw Error("there is exist state");
                    }
                    this.m_state.set(prototype, state);
                    state.Initialize();
                }
                GetState(stateType) {
                    let prototype = stateType.GetJsPrototype();
                    let state = this.m_state.get(prototype);
                    return state;
                }
            }
            Implements.CStateMachine = CStateMachine;
        })(Implements = Event.Implements || (Event.Implements = {}));
    })(Event = iberbar.Event || (iberbar.Event = {}));
})(iberbar || (iberbar = {}));



exports.TypeOf = TypeOf;
exports.DeclaringType = DeclaringType;
exports.GetObjectType = GetObjectType;
exports.TypeOfDelay = TypeOfDelay;
exports.__Callback = __Callback;

exports.default = iberbar;
