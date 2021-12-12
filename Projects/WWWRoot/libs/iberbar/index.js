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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbGxlY3Rpb25zL0dlbmVyaWMvQ0RpY3Rpb25hcnkudHMiLCJDb2xsZWN0aW9ucy9HZW5lcmljL0NFcXVhbGl0eUNvbXBhcmVyLnRzIiwiTWV0YWRhdGEvQ01ldGFkYXRhQ29udGFpbmVyQnVpbGRlci50cyIsIk1ldGFkYXRhL0NvcmUvQ01ldGFkYXRhQ29sbGVjdGlvbi50cyIsIk1ldGFkYXRhL0NvcmUvQ01ldGFkYXRhQ29udGFpbmVyLnRzIiwiTWV0YWRhdGEvX19NZXRhZGF0YUNvbnRhaW5lckluc3RhbmNlLnRzIiwiTWV0YWRhdGEvQnVpbGRlci9DRGVmZXJyZWRDYWxsYmFjay50cyIsIk1ldGFkYXRhL0NvcmUvQ01ldGFkYXRhS2V5LnRzIiwiTWV0YWRhdGEvQ29yZS9DTWV0YWRhdGFLZXlGb3JDbGFzcy50cyIsIk1ldGFkYXRhL0NvcmUvQ01ldGFkYXRhS2V5Rm9yTmFtZWQudHMiLCJNZXRhZGF0YS9Db3JlL0NNZXRhZGF0YUtleUZvclBhcmFtZXRlci50cyIsIlJlZmxlY3Rpb24vQXV0b1JlZmxlY3RNZXRhZGF0YS50cyIsIlJlZmxlY3Rpb24vQ0Fzc2VtYmx5LnRzIiwiUmVmbGVjdGlvbi9NZW1iZXJJbmZvLnRzIiwiUmVmbGVjdGlvbi9DTWV0aG9kQmFzZS50cyIsIlJlZmxlY3Rpb24vQ29uc3RydWN0b3JJbmZvLnRzIiwiVUF0dHJpYnV0ZVRhcmdldC50cyIsIkNBdHRyaWJ1dGUudHMiLCJDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUudHMiLCJSZWZsZWN0aW9uL0ZpZWxkSW5mby50cyIsIlJlZmxlY3Rpb24vTWV0aG9kSW5mby50cyIsIlJlZmxlY3Rpb24vUHJvcGVydHlJbmZvLnRzIiwiUmVmbGVjdGlvbi9QYXJhbWV0ZXJJbmZvLnRzIiwiUmVmbGVjdGlvbi9UeXBlLnRzIiwiT2JqZWN0X0dldFR5cGUudHMiLCJBdHRyaWJ1dGVEZWNvcmF0ZS50cyIsIkF0dHJpYnV0ZVVzYWdlLnRzIiwiUmVmbGVjdGlvbi9EZWNsYXJpbmdUeXBlLnRzIiwiUmVmbGVjdGlvbi9FbnVtZXJhYmxlLnRzIiwiUmVmbGVjdGlvbi9OYW1lZEF0dHJpYnV0ZS50cyIsIlJlZmxlY3Rpb24vVHlwZU5pY2tuYW1lLnRzIiwiUmVmbGVjdGlvbi9VTWVtYmVyVHlwZXMudHMiLCJDYWxsYmFjay50cyIsIkR5bmFtaWNDYXN0LnRzIiwiSnNBcnJheUV4dGVuc2lvbi50cyIsIk91dFBhcmFtZXRlci50cyIsIlJlZlBhcmFtZXRlci50cyIsIl9fLnRzIiwiQ29sbGVjdGlvbnMvR2VuZXJpYy9JRGljdGlvbmFyeS50cyIsIkNvbGxlY3Rpb25zL0dlbmVyaWMvSUVxdWFsaXR5Q29tcGFyZXIudHMiLCJNZXRhZGF0YS9JTWV0YWRhdGEudHMiLCJNZXRhZGF0YS9JTWV0YWRhdGFDb2xsZWN0aW9uLnRzIiwiTWV0YWRhdGEvSU1ldGFkYXRhQ29sbGVjdGlvblJlYWRvbmx5LnRzIiwiTWV0YWRhdGEvSU1ldGFkYXRhQ29udGFpbmVyLnRzIiwiTWV0YWRhdGEvQ29yZS9JTWV0YWRhdGFSZWdpc3RyeS50cyIsIlJlZmxlY3Rpb24vSUN1c3RvbUF0dHJpYnV0ZVByb3ZpZGVyLnRzIiwiQWN0aW9uLnRzIiwiSURpc3Bvc2FibGUudHMiLCJJRXF1YXRhYmxlLnRzIiwiU3ltYm9sLnRzIiwiVUF0dHJpYnV0ZURlY29yYXRlRnVuY3Rpb25UeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxJQUFVLE9BQU8sQ0FtRWhCO0FBbkVELFdBQVUsT0FBTztJQUFDLElBQUEsTUFBTSxDQW1FdkI7SUFuRWlCLFdBQUEsTUFBTTtRQUFDLElBQUEsV0FBVyxDQW1FbkM7UUFuRXdCLFdBQUEsV0FBVztZQUFDLElBQUEsT0FBTyxDQW1FM0M7WUFuRW9DLFdBQUEsT0FBTztnQkFFeEMsTUFBYSxXQUFXO29CQU1wQixZQUFhLE9BRVo7d0JBTk8sZUFBVSxHQUE4QixJQUFJLFFBQUEsaUJBQWlCLEVBQVUsQ0FBQzt3QkFFeEUsV0FBTSxHQUFtQyxFQUFFLENBQUM7d0JBTWhE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QyxVQUFVLENBQUMsMEJBQTBCLENBQUMiLCJmaWxlIjoiLi4vYmluL1N5c3RlbS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWNcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENEaWN0aW9uYXJ5PCBUS2V5LCBUVmFsdWUgPiBpbXBsZW1lbnRzIElEaWN0aW9uYXJ5PCBUS2V5LCBUVmFsdWUgPlxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgbV9jb21wYXJlcjogSUVxdWFsaXR5Q29tcGFyZXI8IFRLZXkgPiA9IG5ldyBDRXF1YWxpdHlDb21wYXJlcjwgVEtleSA+KCk7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9kYXRhOiB7IGtleTogVEtleSwgdmFsdWU6IFRWYWx1ZSB9W10gPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoIG9wdGlvbnM/OiB7XHJcbiAgICAgICAgICAgIGNvbXBhcmVyPzogSUVxdWFsaXR5Q29tcGFyZXI8IFRLZXkgPlxyXG4gICAgICAgIH0gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBvcHRpb25zICE9IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIG9wdGlvbnMuY29tcGFyZXIgIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX2NvbXBhcmVyID0gb3B0aW9ucy5jb21wYXJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQWRkKGtleTogVEtleSwgdmFsdWU6IFRWYWx1ZSk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5Db250YWluS2V5KCBrZXkgKSApXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgdGhpcy5tX2RhdGEucHVzaCggeyBrZXk6IGtleSwgdmFsdWU6IHZhbHVlIH0gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvbnRhaW5LZXkoa2V5OiBUS2V5KTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5tX2RhdGEubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IG4gPSB0aGlzLm1fZGF0YVsgaSBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLm1fY29tcGFyZXIuRXF1YWxzKCBuLmtleSwga2V5ICkgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlbW92ZShrZXk6IFRLZXkpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldChrZXk6IFRLZXkpOiBUVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubV9kYXRhLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBuID0gdGhpcy5tX2RhdGFbIGkgXTtcclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5tX2NvbXBhcmVyLkVxdWFscyggbi5rZXksIGtleSApIClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbi52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENsZWFyKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9kYXRhID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRWFjaCggcHJvY2VzczogU3lzdGVtLlRDYWxsYmFjazwgKCBrZXk6IFRLZXksIHZhbHVlOiBUVmFsdWUgKSA9PiB2b2lkID4gKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5tX2RhdGEubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IG4gPSB0aGlzLm1fZGF0YVsgaSBdO1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5FeGVjdXRlKCBuLmtleSwgbi52YWx1ZSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpY1xyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0VxdWFsaXR5Q29tcGFyZXI8IFQgPiBpbXBsZW1lbnRzIElFcXVhbGl0eUNvbXBhcmVyPCBUID5cclxuICAgIHtcclxuICAgICAgICBFcXVhbHMoIGE6IFQsIGI6IFQgKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEgPT09IGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxuLy8gbmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLk1ldGFkYXRhXHJcbi8vIHtcclxuLy8gICAgIGV4cG9ydCBjbGFzcyBDTWV0YWRhdGFDb250YWluZXJCdWlsZGVyXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2NvbmZpZ3VyYXRpb25DYWxsYmFja3M6IEJ1aWxkZXIuQ0RlZmVycmVkQ2FsbGJhY2tbXSA9IFtdO1xyXG5cclxuLy8gICAgICAgICBwdWJsaWMgQWRkQXR0cmlidXRlKCB0eXBlOiBSZWZsZWN0aW9uLkNUeXBlLCB0YXJnZXQ6IFVBdHRyaWJ1dGVUYXJnZXQsIGF0dHJpYnV0ZTogQ0F0dHJpYnV0ZSApOiB2b2lkXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICB0aGlzLkFkZENhbGxiYWNrKCByZWdpc3RyeSA9PlxyXG4vLyAgICAgICAgICAgICB7XHJcblxyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIHB1YmxpYyBCdWlsZCgpOiBJTWV0YWRhdGFDb250YWluZXJcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgcHVibGljIEFkZENhbGxiYWNrKCBjYWxsYmFjazogKCByZWdpc3RyeTogQ29yZS5JTWV0YWRhdGFSZWdpc3RyeSApID0+IHZvaWQgKTogdm9pZFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgbGV0IGMgPSBuZXcgQnVpbGRlci5DRGVmZXJyZWRDYWxsYmFjayggY2FsbGJhY2sgKTtcclxuLy8gICAgICAgICAgICAgdGhpcy5tX2NvbmZpZ3VyYXRpb25DYWxsYmFja3MucHVzaCggYyApO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLk1ldGFkYXRhLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENNZXRhZGF0YUNvbGxlY3Rpb24gaW1wbGVtZW50cyBJTWV0YWRhdGFDb2xsZWN0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2xpc3Q6IENBdHRyaWJ1dGVbXSA9IFtdO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFkZEF0dHJpYnV0ZSggYXR0cmlidXRlOiBDQXR0cmlidXRlICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9saXN0LnNwbGljZSggMCwgMCwgYXR0cmlidXRlICk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgR2V0QXR0cmlidXRlT25lPFQgZXh0ZW5kcyBDQXR0cmlidXRlPiggdHlwZTogUmVmbGVjdGlvbi5DVHlwZSApOiBUXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLm1fbGlzdC5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gdGhpcy5tX2xpc3RbIGkgXTtcclxuICAgICAgICAgICAgICAgIGlmICggYXR0cmlidXRlLkdldFR5cGUoKS5Jc0VxdWl2YWxlbnRUbyggdHlwZSApIClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFQ+YXR0cmlidXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR2V0QXR0cmlidXRlczxUIGV4dGVuZHMgQ0F0dHJpYnV0ZT4oIHR5cGU6IFJlZmxlY3Rpb24uQ1R5cGU8VD4gKTogVFtdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlTGlzdDogVFtdID0gW107XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubV9saXN0Lmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBhdHRyaWJ1dGUgPSB0aGlzLm1fbGlzdFsgaSBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBhdHRyaWJ1dGUuR2V0VHlwZSgpLklzRXF1aXZhbGVudFRvKCB0eXBlICkgKVxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUxpc3QucHVzaCggPFQ+YXR0cmlidXRlICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZUxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEdldEF0dHJpYnV0ZXNBbGwoKTogQ0F0dHJpYnV0ZVtdIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn0iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ01ldGFkYXRhQ29sbGVjdGlvbi50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLk1ldGFkYXRhLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENNZXRhZGF0YUNvbnRhaW5lciBpbXBsZW1lbnRzIElNZXRhZGF0YUNvbnRhaW5lciwgQ29sbGVjdGlvbnMuR2VuZXJpYy5JRXF1YWxpdHlDb21wYXJlcjxDTWV0YWRhdGFLZXk+XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3Bvb2w6IENvbGxlY3Rpb25zLkdlbmVyaWMuSURpY3Rpb25hcnk8IENNZXRhZGF0YUtleSwgSU1ldGFkYXRhQ29sbGVjdGlvbiA+ID0gbmV3IENvbGxlY3Rpb25zLkdlbmVyaWMuQ0RpY3Rpb25hcnkoIHsgY29tcGFyZXI6IHRoaXMgfSApO1xyXG5cclxuICAgICAgICBwdWJsaWMgR2V0T3JBZGRDb2xsZWN0aW9uKCBrZXk6IENvcmUuQ01ldGFkYXRhS2V5ICk6IElNZXRhZGF0YUNvbGxlY3Rpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb2xsZWN0aW9uID0gdGhpcy5tX3Bvb2wuR2V0KCBrZXkgKTtcclxuICAgICAgICAgICAgaWYgKCBjb2xsZWN0aW9uID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fcG9vbC5BZGQoIGtleSwgY29sbGVjdGlvbiA9IG5ldyBDTWV0YWRhdGFDb2xsZWN0aW9uKCkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRDb2xsZWN0aW9uKCBrZXk6IENvcmUuQ01ldGFkYXRhS2V5ICk6IElNZXRhZGF0YUNvbGxlY3Rpb25SZWFkb25seVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvbGxlY3Rpb24gPSB0aGlzLm1fcG9vbC5HZXQoIGtleSApO1xyXG4gICAgICAgICAgICBpZiAoIGNvbGxlY3Rpb24gPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ01ldGFkYXRhQ29udGFpbmVyLkVtcHR5Q29sbGVjdGlvbjtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRXF1YWxzKCBhOiBDTWV0YWRhdGFLZXksIGI6IENNZXRhZGF0YUtleSApOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5FcXVhbHMoIGIgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRW1wdHlDb2xsZWN0aW9uID0gbmV3IENNZXRhZGF0YUNvbGxlY3Rpb24oKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29yZS9DTWV0YWRhdGFDb250YWluZXIudHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5NZXRhZGF0YVxyXG57XHJcbiAgICBleHBvcnQgY29uc3QgQ29udGFpbmVyOiBJTWV0YWRhdGFDb250YWluZXIgPSBuZXcgQ29yZS5DTWV0YWRhdGFDb250YWluZXIoKTtcclxufSIsIlxyXG4vLyBuYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uTWV0YWRhdGEuQnVpbGRlclxyXG4vLyB7XHJcbi8vICAgICBleHBvcnQgY2xhc3MgQ0RlZmVycmVkQ2FsbGJhY2tcclxuLy8gICAgIHtcclxuICAgICAgICBcclxuLy8gICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGNhbGxiYWNrOiAoIHJlZ2lzdHJ5OiBDb3JlLklNZXRhZGF0YVJlZ2lzdHJ5ICkgPT4gdm9pZCApXHJcbi8vICAgICAgICAge1xyXG5cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH0iLCJcclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLk1ldGFkYXRhLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIENNZXRhZGF0YUtleSBpbXBsZW1lbnRzIElFcXVhdGFibGU8Q01ldGFkYXRhS2V5PlxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV90eXBlOiBSZWZsZWN0aW9uLkNUeXBlO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV90YXJnZXQ6IFVBdHRyaWJ1dGVUYXJnZXQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggdHlwZTogUmVmbGVjdGlvbi5DVHlwZSwgdGFyZ2V0OiBVQXR0cmlidXRlVGFyZ2V0IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV90eXBlID0gdHlwZTtcclxuICAgICAgICAgICAgdGhpcy5tX3RhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBFcXVhbHMob3RoZXI6IENNZXRhZGF0YUtleSk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fdHlwZS5Jc0VxdWl2YWxlbnRUbyggb3RoZXIubV90eXBlICkgJiYgdGhpcy5tX3RhcmdldCA9PSBvdGhlci5tX3RhcmdldDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uTWV0YWRhdGEuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ01ldGFkYXRhS2V5Rm9yQ2xhc3MgZXh0ZW5kcyBDTWV0YWRhdGFLZXlcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHR5cGU6IFJlZmxlY3Rpb24uQ1R5cGUsIHRhcmdldDogVUF0dHJpYnV0ZVRhcmdldCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggdHlwZSwgdGFyZ2V0ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRXF1YWxzKCBvdGhlcjogQ01ldGFkYXRhS2V5ICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggc3VwZXIuRXF1YWxzKCBvdGhlciApID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBvdGhlciBpbnN0YW5jZW9mIENNZXRhZGF0YUtleUZvckNsYXNzIClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLk1ldGFkYXRhLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENNZXRhZGF0YUtleUZvck5hbWVkIGV4dGVuZHMgQ01ldGFkYXRhS2V5XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX25hbWU6IHN0cmluZyB8IHN5bWJvbCA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggdHlwZTogUmVmbGVjdGlvbi5DVHlwZSwgdGFyZ2V0OiBVQXR0cmlidXRlVGFyZ2V0LCBuYW1lOiBzdHJpbmcgfCBzeW1ib2wgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoIHR5cGUsIHRhcmdldCApO1xyXG4gICAgICAgICAgICB0aGlzLm1fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRXF1YWxzKCBvdGhlcjogQ01ldGFkYXRhS2V5ICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggc3VwZXIuRXF1YWxzKCBvdGhlciApID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBvdGhlciBpbnN0YW5jZW9mIENNZXRhZGF0YUtleUZvck5hbWVkICYmIG90aGVyLm1fbmFtZSA9PSB0aGlzLm1fbmFtZSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5NZXRhZGF0YS5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDTWV0YWRhdGFLZXlGb3JQYXJhbWV0ZXIgZXh0ZW5kcyBDTWV0YWRhdGFLZXlcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fbWV0aG9kTmFtZTogc3RyaW5nIHwgc3ltYm9sID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1faW5kZXg6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggdHlwZTogUmVmbGVjdGlvbi5DVHlwZSwgdGFyZ2V0OiBVQXR0cmlidXRlVGFyZ2V0LCBtZXRob2ROYW1lOiBzdHJpbmcgfCBzeW1ib2wsIGluZGV4OiBudW1iZXIgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoIHR5cGUsIHRhcmdldCApO1xyXG4gICAgICAgICAgICB0aGlzLm1faW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgdGhpcy5tX21ldGhvZE5hbWUgPSBtZXRob2ROYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEVxdWFscyggb3RoZXI6IENNZXRhZGF0YUtleSApOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHN1cGVyLkVxdWFscyggb3RoZXIgKSA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggb3RoZXIgaW5zdGFuY2VvZiBDTWV0YWRhdGFLZXlGb3JQYXJhbWV0ZXIgJiYgdGhpcy5tX21ldGhvZE5hbWUgPT0gb3RoZXIubV9tZXRob2ROYW1lICYmIG90aGVyLm1faW5kZXggPT0gdGhpcy5tX2luZGV4IClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvblxyXG57XHJcbiAgICAvKipcclxuICAgICAqIOiHquWKqOaYoOWwhOaehOmAoOWHveaVsOeahOWPguaVsOexu+Wei1xyXG4gICAgICogXHJcbiAgICAgKiDpnIDopoF0c2NvbmZpZ+mFjee9riBcImVtaXREZWNvcmF0b3JNZXRhZGF0YVwiOiB0cnVlXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQXV0b1JlZmxlY3RNZXRhZGF0YV9Db25zdHJ1Y3RvciggdGFyZ2V0OiBhbnkgKTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHBhcmFtdHlwZXM6IEFycmF5PCBUeXBlQ29uc3RydWN0b3I8YW55PiA+ID0gUmVmbGVjdC5nZXRNZXRhZGF0YSggXCJkZXNpZ246cGFyYW10eXBlc1wiLCB0YXJnZXQgKTtcclxuICAgICAgICAvLyBpZiAoIHBhcmFtdHlwZXMgPT0gbnVsbCApXHJcbiAgICAgICAgLy8gICAgIHRocm93IG5ldyBFcnJvciggJ+mcgOimgXRzY29uZmln6YWN572uIFwiZW1pdERlY29yYXRvck1ldGFkYXRhXCI6IHRydWUnICk7XHJcbiAgICAgICAgaWYgKCBwYXJhbXR5cGVzICE9IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICggbGV0IHBhcmFtZXRlckluZGV4ID0gMDsgcGFyYW1ldGVySW5kZXggPCBwYXJhbXR5cGVzLmxlbmd0aDsgcGFyYW1ldGVySW5kZXggKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gbmV3IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5Rm9yUGFyYW1ldGVyKCBSZWZsZWN0aW9uLlR5cGVPZl9fKCB0YXJnZXQucHJvdG90eXBlICksIFVBdHRyaWJ1dGVUYXJnZXQuUGFyYW1ldGVyLCBcImNvbnN0cnVjdG9yXCIsIHBhcmFtZXRlckluZGV4ICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gbmV3IENEZWNsYXJpbmdUeXBlQXR0cmlidXRlKCAoKSA9PiBUeXBlT2YoIHBhcmFtdHlwZXNbIHBhcmFtZXRlckluZGV4IF0gKSwgbnVsbCApO1xyXG4gICAgICAgICAgICAgICAgTWV0YWRhdGEuQ29udGFpbmVyLkdldE9yQWRkQ29sbGVjdGlvbigga2V5ICkuQWRkQXR0cmlidXRlKCBhdHRyaWJ1dGUgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAgICAgLyoqXHJcbiAgICAvLyAgKiDoh6rliqjmmKDlsITmnoTpgKDlh73mlbDnmoTlj4LmlbDnsbvlnotcclxuICAgIC8vICAqIFxyXG4gICAgLy8gICog6ZyA6KaBdHNjb25maWfphY3nva4gXCJlbWl0RGVjb3JhdG9yTWV0YWRhdGFcIjogdHJ1ZVxyXG4gICAgLy8gICogQHBhcmFtIHRhcmdldCBcclxuICAgIC8vICAqL1xyXG4gICAgLy8gZXhwb3J0IGZ1bmN0aW9uIEF1dG9SZWZsZWN0TWV0YWRhdGFfQ29uc3RydWN0b3IoKVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIHJldHVybiBmdW5jdGlvbiggdGFyZ2V0OiBhbnkgKTogYW55XHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBsZXQgcGFyYW10eXBlczogQXJyYXk8IFR5cGVDb25zdHJ1Y3Rvcjxhbnk+ID4gPSBSZWZsZWN0LmdldE1ldGFkYXRhKCBcImRlc2lnbjpwYXJhbXR5cGVzXCIsIHRhcmdldCApO1xyXG4gICAgLy8gICAgICAgICAvLyBpZiAoIHBhcmFtdHlwZXMgPT0gbnVsbCApXHJcbiAgICAvLyAgICAgICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoICfpnIDopoF0c2NvbmZpZ+mFjee9riBcImVtaXREZWNvcmF0b3JNZXRhZGF0YVwiOiB0cnVlJyApO1xyXG4gICAgLy8gICAgICAgICBpZiAoIHBhcmFtdHlwZXMgIT0gbnVsbCApXHJcbiAgICAvLyAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgIGZvciAoIGxldCBwYXJhbWV0ZXJJbmRleCA9IDA7IHBhcmFtZXRlckluZGV4IDwgcGFyYW10eXBlcy5sZW5ndGg7IHBhcmFtZXRlckluZGV4ICsrIClcclxuICAgIC8vICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBsZXQga2V5ID0gbmV3IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5Rm9yUGFyYW1ldGVyKCBSZWZsZWN0aW9uLlR5cGVPZl9fKCB0YXJnZXQucHJvdG90eXBlICksIFVBdHRyaWJ1dGVUYXJnZXQuUGFyYW1ldGVyLCBcImNvbnN0cnVjdG9yXCIsIHBhcmFtZXRlckluZGV4ICk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IG5ldyBDRGVjbGFyaW5nVHlwZUF0dHJpYnV0ZSggVHlwZU9mKCBwYXJhbXR5cGVzWyBwYXJhbWV0ZXJJbmRleCBdICksIG51bGwgKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBNZXRhZGF0YS5Db250YWluZXIuR2V0T3JBZGRDb2xsZWN0aW9uKCBrZXkgKS5BZGRBdHRyaWJ1dGUoIGF0dHJpYnV0ZSApO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Ieq5Yqo5pig5bCE5a2X5q6157G75Z6LXHJcbiAgICAgKiBcclxuICAgICAqIOmcgOimgXRzY29uZmln6YWN572uIFwiZW1pdERlY29yYXRvck1ldGFkYXRhXCI6IHRydWVcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEF1dG9SZWZsZWN0TWV0YWRhdGFfRmllbGQoIHRhcmdldDogYW55LCBmaWVsZE5hbWU6IHN0cmluZyApOiBhbnlcclxuICAgIHtcclxuICAgICAgICBFbnVtZXJhYmxlKCB0YXJnZXQsIGZpZWxkTmFtZSApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB0eXBlQ29uc3RydWN0b3IgPSBSZWZsZWN0LmdldE1ldGFkYXRhKCBcImRlc2lnbjp0eXBlXCIsIHRhcmdldCwgZmllbGROYW1lICk7XHJcbiAgICAgICAgLy8gaWYgKCB0eXBlQ29uc3RydWN0b3IgPT0gbnVsbCApXHJcbiAgICAgICAgLy8gICAgIHRocm93IG5ldyBFcnJvciggJ+mcgOimgXRzY29uZmln6YWN572uIFwiZW1pdERlY29yYXRvck1ldGFkYXRhXCI6IHRydWUnICk7XHJcbiAgICAgICAgaWYgKCB0eXBlQ29uc3RydWN0b3IgIT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQga2V5ID0gbmV3IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5Rm9yTmFtZWQoIFJlZmxlY3Rpb24uVHlwZU9mX18oIHRhcmdldCApLCBVQXR0cmlidXRlVGFyZ2V0LkZpZWxkLCBmaWVsZE5hbWUgKTtcclxuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IG5ldyBDRGVjbGFyaW5nVHlwZUF0dHJpYnV0ZSggKCkgPT4gVHlwZU9mKCB0eXBlQ29uc3RydWN0b3IgKSwgbnVsbCApO1xyXG4gICAgICAgICAgICBNZXRhZGF0YS5Db250YWluZXIuR2V0T3JBZGRDb2xsZWN0aW9uKCBrZXkgKS5BZGRBdHRyaWJ1dGUoIGF0dHJpYnV0ZSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiHquWKqOaYoOWwhOWxnuaAp+exu+Wei1xyXG4gICAgICogXHJcbiAgICAgKiDpnIDopoF0c2NvbmZpZ+mFjee9riBcImVtaXREZWNvcmF0b3JNZXRhZGF0YVwiOiB0cnVlXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBBdXRvUmVmbGVjdE1ldGFkYXRhX1Byb3BlcnR5KCB0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvciApOiBhbnlcclxuICAgIHtcclxuICAgICAgICBpZiAoIGRlc2NyaXB0b3Iuc2V0ID09IG51bGwgJiYgZGVzY3JpcHRvci5nZXQgPT0gbnVsbCApXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJDYW4ndCBhdXRvIHJlZmxlY3Qgb24gbWV0aG9kLlwiICk7XHJcbiAgICAgICAgbGV0IHR5cGVDb25zdHJ1Y3RvciA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoIFwiZGVzaWduOnR5cGVcIiwgdGFyZ2V0LCBwcm9wZXJ0eU5hbWUgKTtcclxuICAgICAgICAvLyBpZiAoIHR5cGVDb25zdHJ1Y3RvciA9PSBudWxsIClcclxuICAgICAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKCAn6ZyA6KaBdHNjb25maWfphY3nva4gXCJlbWl0RGVjb3JhdG9yTWV0YWRhdGFcIjogdHJ1ZScgKTtcclxuICAgICAgICBpZiAoIHR5cGVDb25zdHJ1Y3RvciAhPSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JOYW1lZCggUmVmbGVjdGlvbi5UeXBlT2ZfXyggdGFyZ2V0ICksIFVBdHRyaWJ1dGVUYXJnZXQuUHJvcGVydHksIHByb3BlcnR5TmFtZSApO1xyXG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gbmV3IENEZWNsYXJpbmdUeXBlQXR0cmlidXRlKCAoKSA9PiBUeXBlT2YoIHR5cGVDb25zdHJ1Y3RvciApLCBudWxsICk7XHJcbiAgICAgICAgICAgIE1ldGFkYXRhLkNvbnRhaW5lci5HZXRPckFkZENvbGxlY3Rpb24oIGtleSApLkFkZEF0dHJpYnV0ZSggYXR0cmlidXRlICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Ieq5Yqo5pig5bCE5pa55rOV55qE6L+U5Zue57G75Z6L5ZKM5Y+C5pWw57G75Z6LXHJcbiAgICAgKiBcclxuICAgICAqIOmcgOimgXRzY29uZmln6YWN572uIFwiZW1pdERlY29yYXRvck1ldGFkYXRhXCI6IHRydWVcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEF1dG9SZWZsZWN0TWV0YWRhdGFfTWV0aG9kKCB0YXJnZXQ6IGFueSwgbWV0aG9kTmFtZTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IgKTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBkZXNjcmlwdG9yLnNldCAhPSBudWxsIHx8IGRlc2NyaXB0b3IuZ2V0ICE9IG51bGwgKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiQ2FuJ3QgYXV0byByZWZsZWN0IG9uIHByb3BlcnR5LlwiICk7XHJcblxyXG4gICAgICAgIGxldCBrZXk6IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5O1xyXG4gICAgICAgIGxldCBhdHRyaWJ1dGU6IENBdHRyaWJ1dGU7XHJcblxyXG4gICAgICAgIGxldCByZXR1cm50eXBlQ29uc3RydWN0b3IgPSBSZWZsZWN0LmdldE1ldGFkYXRhKCBcImRlc2lnbjpyZXR1cm50eXBlXCIsIHRhcmdldCwgbWV0aG9kTmFtZSApO1xyXG4gICAgICAgIC8vIGlmICggcmV0dXJudHlwZUNvbnN0cnVjdG9yID09IG51bGwgKVxyXG4gICAgICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoICfpnIDopoF0c2NvbmZpZ+mFjee9riBcImVtaXREZWNvcmF0b3JNZXRhZGF0YVwiOiB0cnVlJyApO1xyXG4gICAgICAgIGlmICggcmV0dXJudHlwZUNvbnN0cnVjdG9yICE9IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5ID0gbmV3IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5Rm9yTmFtZWQoIFJlZmxlY3Rpb24uVHlwZU9mX18oIHRhcmdldCApLCBVQXR0cmlidXRlVGFyZ2V0Lk1ldGhvZCwgbWV0aG9kTmFtZSApO1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgPSBuZXcgQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUoICgpID0+IFR5cGVPZiggcmV0dXJudHlwZUNvbnN0cnVjdG9yICksIG51bGwgKTtcclxuICAgICAgICAgICAgTWV0YWRhdGEuQ29udGFpbmVyLkdldE9yQWRkQ29sbGVjdGlvbigga2V5ICkuQWRkQXR0cmlidXRlKCBhdHRyaWJ1dGUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwYXJhbXR5cGVDb25zdHJ1Y3RvcnM6IEFycmF5PCBUeXBlQ29uc3RydWN0b3I8YW55PiA+ID0gUmVmbGVjdC5nZXRNZXRhZGF0YSggXCJkZXNpZ246cGFyYW10eXBlc1wiLCB0YXJnZXQgKTtcclxuICAgICAgICAvLyBpZiAoIHBhcmFtdHlwZUNvbnN0cnVjdG9ycyA9PSBudWxsIClcclxuICAgICAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKCAn6ZyA6KaBdHNjb25maWfphY3nva4gXCJlbWl0RGVjb3JhdG9yTWV0YWRhdGFcIjogdHJ1ZScgKTtcclxuICAgICAgICBpZiAoIHBhcmFtdHlwZUNvbnN0cnVjdG9ycyAhPSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBwYXJhbWV0ZXJJbmRleCA9IDA7IHBhcmFtZXRlckluZGV4IDwgcGFyYW10eXBlQ29uc3RydWN0b3JzLmxlbmd0aDsgcGFyYW1ldGVySW5kZXggKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gbmV3IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5Rm9yUGFyYW1ldGVyKCBSZWZsZWN0aW9uLlR5cGVPZl9fKCB0YXJnZXQucHJvdG90eXBlICksIFVBdHRyaWJ1dGVUYXJnZXQuUGFyYW1ldGVyLCBtZXRob2ROYW1lLCBwYXJhbWV0ZXJJbmRleCApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IG5ldyBDRGVjbGFyaW5nVHlwZUF0dHJpYnV0ZSggKCkgPT4gVHlwZU9mKCBwYXJhbXR5cGVDb25zdHJ1Y3RvcnNbIHBhcmFtZXRlckluZGV4IF0gKSwgbnVsbCApO1xyXG4gICAgICAgICAgICAgICAgTWV0YWRhdGEuQ29udGFpbmVyLkdldE9yQWRkQ29sbGVjdGlvbigga2V5ICkuQWRkQXR0cmlidXRlKCBhdHRyaWJ1dGUgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb25cclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENBc3NlbWJseVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9qc21vZHVsZTogYW55ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBzOiBhbnkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2pzbW9kdWxlID0gcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRUeXBlcygpOiBDVHlwZVtdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5HZXRUeXBlc0ludGVybmFsKCB0aGlzLm1fanNtb2R1bGUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgR2V0VHlwZXNJbnRlcm5hbCggb2JqOiBhbnkgKTogQ1R5cGVbXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGpzX3R5cGVvZiA9IHR5cGVvZiggb2JqICk7XHJcbiAgICAgICAgICAgIGlmICgganNfdHlwZW9mICE9IFwib2JqZWN0XCIgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICBsZXQgdHlwZXM6IENUeXBlW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICggY29uc3QgayBpbiBvYmogKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gb2JqWyBrIF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIHYgPT0gdW5kZWZpbmVkIHx8IHYgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHZbIFwicHJvdG90eXBlXCIgXSAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlcy5wdXNoKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIHYgKSApO1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVzID0gdHlwZXMuY29uY2F0KCB0aGlzLkdldFR5cGVzSW50ZXJuYWwoIHYgKSApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHlwZXMgPSB0eXBlcy5jb25jYXQoIHRoaXMuR2V0VHlwZXNJbnRlcm5hbCggdiApICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHR5cGVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIGV4cG9ydCB0eXBlIFVNZW1iZXJTeW1ib2wgPSBzdHJpbmc7XHJcblxyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIENNZW1iZXJJbmZvIGltcGxlbWVudHMgSUN1c3RvbUF0dHJpYnV0ZVByb3ZpZGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IG1fbmFtZTogVU1lbWJlclN5bWJvbCA9IG51bGw7XHJcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IG1fcHJvdG90eXBlOiBUeXBlUHJvdG90eXBlPCBvYmplY3QgPiA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9tZXRhZGF0YUNvbGxlY3Rpb246IE1ldGFkYXRhLklNZXRhZGF0YUNvbGxlY3Rpb25SZWFkb25seSA9IG51bGw7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvciggbmFtZTogVU1lbWJlclN5bWJvbCwgcHJvdG90eXBlOiBUeXBlUHJvdG90eXBlPCBvYmplY3QgPiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9wcm90b3R5cGUgPSBwcm90b3R5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IE1lbWJlclR5cGUoKTogVU1lbWJlclR5cGVzO1xyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IE5hbWUoKTogVU1lbWJlclN5bWJvbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyB0aGUgY2xhc3MgdGhhdCBkZWNsYXJlcyB0aGlzIG1lbWJlci5cclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiDlo7DmmI7mraTmiJDlkZjnmoRDbGFzc+exu+Wei++8jOS4i+mdouWunuS+i+S4reeahFRleHTlsZ7mgKdNZW1iZXJJbmZv55qERGVjbGFyaW5nVHlwZei/lOWbniAqKkJpdWJpdSoqXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybnMgVGhlIFR5cGUgb2JqZWN0IGZvciB0aGUgY2xhc3MgdGhhdCBkZWNsYXJlcyB0aGlzIG1lbWJlci5cclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBgYGBqc1xyXG4gICAgICAgICAqIGNsYXNzIEJpdWJpdVxyXG4gICAgICAgICAqIHtcclxuICAgICAgICAgKiAgICAgIGdldCBUZXh0KCk6IHN0cmluZyB7IHJldHVybiAgXCJcIjsgfVxyXG4gICAgICAgICAqIH1cclxuICAgICAgICAgKiBgYGBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0IERlY2xhcmluZ1R5cGUoKTogQ1R5cGU8IG9iamVjdCA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gVHlwZU9mKCB0aGlzLm1fcHJvdG90eXBlLmNvbnN0cnVjdG9yICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0SnNQcm90b3R5cGU8IFRFeHRyYSBleHRlbmRzIHt9ID0ge30gPigpOiBUeXBlUHJvdG90eXBlPCBvYmplY3QgPiAmIFRFeHRyYVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxhbnk+dGhpcy5tX3Byb3RvdHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0IE1ldGFkYXRhQ29sbGVjdGlvbigpOiBNZXRhZGF0YS5JTWV0YWRhdGFDb2xsZWN0aW9uUmVhZG9ubHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX21ldGFkYXRhQ29sbGVjdGlvbiA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMuR2V0TWV0YWRhdGFLZXkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9tZXRhZGF0YUNvbGxlY3Rpb24gPSBNZXRhZGF0YS5Db250YWluZXIuR2V0Q29sbGVjdGlvbigga2V5ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9tZXRhZGF0YUNvbGxlY3Rpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0Q3VzdG9tQXR0cmlidXRlT25lPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+ICk6IFRBdHRyaWJ1dGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLk1ldGFkYXRhQ29sbGVjdGlvbi5HZXRBdHRyaWJ1dGVPbmUoIGF0dHJpYnV0ZVR5cGUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRDdXN0b21BdHRyaWJ1dGVzPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+ICk6IFRBdHRyaWJ1dGVbXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuTWV0YWRhdGFDb2xsZWN0aW9uLkdldEF0dHJpYnV0ZXMoIGF0dHJpYnV0ZVR5cGUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRDdXN0b21BdHRyaWJ1dGVzQWxsKCk6IENBdHRyaWJ1dGVbXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuTWV0YWRhdGFDb2xsZWN0aW9uLkdldEF0dHJpYnV0ZXNBbGwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBJc0RlZmluZWQ8IFRBdHRyaWJ1dGUgZXh0ZW5kcyBDQXR0cmlidXRlID4oIGF0dHJpYnV0ZVR5cGU6IENUeXBlPCBUQXR0cmlidXRlID4gKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICggdGhpcy5NZXRhZGF0YUNvbGxlY3Rpb24uR2V0QXR0cmlidXRlT25lKCBhdHRyaWJ1dGVUeXBlICkgPT0gbnVsbCApID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldE1ldGFkYXRhS2V5KCk6IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIiApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9NZW1iZXJJbmZvLnRzXCIgLz5cclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvblxyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ01ldGhvZEJhc2UgZXh0ZW5kcyBDTWVtYmVySW5mb1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRQYXJhbWV0ZXJzKCk6IEFycmF5PCBDUGFyYW1ldGVySW5mbyA+O1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IERlc2NyaXB0b3IoKTogUHJvcGVydHlEZXNjcmlwdG9yO1xyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NNZXRob2RCYXNlLnRzXCIgLz5cclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvblxyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ0NvbnN0cnVjdG9ySW5mbyBleHRlbmRzIENNZXRob2RCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGdldCBKc0NvbnN0cnVjdG9yKCk6IFR5cGVDb25zdHJ1Y3Rvcjwgb2JqZWN0ID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcHJvdG90eXBlLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEludm9rZSggLi4uYXJnczogYW55W10gKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHRoaXMuSnNDb25zdHJ1Y3RvciggLi4uYXJncyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldFBhcmFtZXRlcnMoKTogQXJyYXk8IENQYXJhbWV0ZXJJbmZvID47XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW1cclxue1xyXG4gICAgZXhwb3J0IGVudW0gVUF0dHJpYnV0ZVRhcmdldFxyXG4gICAge1xyXG4gICAgICAgIENsYXNzID0gMHgwMDAxLFxyXG4gICAgICAgIEZpZWxkID0gMHgwMDAyLFxyXG4gICAgICAgIE1ldGhvZCA9IDB4MDAwNCxcclxuICAgICAgICBQYXJhbWV0ZXIgPSAweDAwMDgsXHJcbiAgICAgICAgUHJvcGVydHkgPSAweDAwMTAsXHJcbiAgICAgICAgQWxsID0gQ2xhc3MgfCBGaWVsZCB8IE1ldGhvZCB8IFBhcmFtZXRlciB8IFByb3BlcnR5LFxyXG4gICAgfTtcclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtXHJcbntcclxuICAgIC8qKlxyXG4gICAgICog54m55oCn5Z+657G7XHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9O1xyXG59XHJcblxyXG4iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ0F0dHJpYnV0ZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1VBdHRyaWJ1dGVUYXJnZXQudHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBtX3ZhbGlkT246IG51bWJlcjtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9hbGxvd011bHRpcGxlPzogYm9vbGVhbjtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9pbmhlcml0ZWQ/OiBib29sZWFuO1xyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFZhbGlkT24oKSA6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fdmFsaWRPbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGdldCBBbGxvd011bHRpcGxlKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fYWxsb3dNdWx0aXBsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgSW5oZXJpdGVkKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1faW5oZXJpdGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCB2YWxpZE9uOiBudW1iZXIsIGFsbG93TXVsdGlwbGU/OiBib29sZWFuLCBpbmhlcml0PzogYm9vbGVhbiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1fdmFsaWRPbiA9IHZhbGlkT247XHJcbiAgICAgICAgICAgIHRoaXMubV9hbGxvd011bHRpcGxlID0gKCBhbGxvd011bHRpcGxlID09IG51bGwgKSA/IHRydWUgOiBhbGxvd011bHRpcGxlO1xyXG4gICAgICAgICAgICB0aGlzLm1faW5oZXJpdGVkID0gKCBpbmhlcml0ID09IG51bGwgKSA/IHRydWUgOiBpbmhlcml0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBEZWZhdWx0VXNhZ2UgPSBuZXcgQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlKCBVQXR0cmlidXRlVGFyZ2V0LkFsbCwgdHJ1ZSwgdHJ1ZSApO1xyXG4gICAgfTtcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL01lbWJlckluZm8udHNcIiAvPlxyXG5cclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvblxyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ0ZpZWxkSW5mbyBleHRlbmRzIENNZW1iZXJJbmZvXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGdldCBNZW1iZXJUeXBlKCk6IFVNZW1iZXJUeXBlc1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFVNZW1iZXJUeXBlcy5GaWVsZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZXRWYWx1ZSggb2JqOiBvYmplY3QsIHZhbHVlOiBhbnkgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgKDxhbnk+b2JqKVsgdGhpcy5tX25hbWUgXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFZhbHVlKCBvYmo6IG9iamVjdCApOiBhbnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPGFueT5vYmopWyB0aGlzLm1fbmFtZSBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldE1ldGFkYXRhS2V5KCk6IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5Rm9yTmFtZWQoIHRoaXMuRGVjbGFyaW5nVHlwZSwgVUF0dHJpYnV0ZVRhcmdldC5GaWVsZCwgdGhpcy5OYW1lICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IEZpZWxkVHlwZSgpOiBDVHlwZTtcclxuICAgIH1cclxufSIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9NZW1iZXJJbmZvLnRzXCIgLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NNZXRob2RCYXNlLnRzXCIgLz5cclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvblxyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ01ldGhvZEluZm8gZXh0ZW5kcyBDTWV0aG9kQmFzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIHByb3RlY3RlZCByZWFkb25seSBtX21ldGhvZDogRnVuY3Rpb24gPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBwcm90ZWN0ZWQgY29uc3RydWN0b3IoIG46IHN0cmluZywgcHJvdG90eXBlOiBUeXBlUHJvdG90eXBlPCBhbnkgPiwgbWV0aG9kOiBGdW5jdGlvbiApXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBzdXBlciggbiwgcHJvdG90eXBlICk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubV9tZXRob2QgPSBtZXRob2Q7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBwdWJsaWMgSW52b2tlKCBvYmo6IGFueSwgLi4uYXJnczogYW55W10gKTogYW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5NZXRob2QuYXBwbHkoIG9iaiwgYXJncyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcHVibGljIEdldFBhcmFtZXRlcnMoKTogQXJyYXk8IENQYXJhbWV0ZXJJbmZvID5cclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIGxldCBjbGFzc1R5cGUgPSB0aGlzLkRlY2xhcmluZ1R5cGU7XHJcbiAgICAgICAgLy8gICAgIGxldCBwYXJhbWV0ZXJDb3VudCA9IHRoaXMuTWV0aG9kLmxlbmd0aDtcclxuICAgICAgICAvLyAgICAgbGV0IGluZm9zOiBBcnJheTwgQ1BhcmFtZXRlckluZm8gPiA9IEFycmF5KCBwYXJhbWV0ZXJDb3VudCApO1xyXG4gICAgICAgIC8vICAgICBpZiAoIHBhcmFtZXRlckNvdW50ID4gMCApXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHBhcmFtZXRlckNvdW50OyBpICsrIClcclxuICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQga2V5OiBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleSA9IG51bGw7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKCB0aGlzLk5hbWUuc3RhcnRzV2l0aCggXCJnZXRfXCIgKSB8fCB0aGlzLk5hbWUuc3RhcnRzV2l0aCggXCJzZXRfXCIgKSApXHJcbiAgICAgICAgLy8gICAgICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JOYW1lZCggY2xhc3NUeXBlLCBVQXR0cmlidXRlVGFyZ2V0LlByb3BlcnR5LCB0aGlzLk5hbWUuc3Vic3RyKCA0ICkgKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAga2V5ID0gbmV3IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5Rm9yUGFyYW1ldGVyKCBjbGFzc1R5cGUsIFVBdHRyaWJ1dGVUYXJnZXQuUGFyYW1ldGVyLCB0aGlzLk5hbWUsIGkgKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IHR5cGVBdHRyaWJ1dGUgPSBNZXRhZGF0YS5Db250YWluZXIuR2V0Q29sbGVjdGlvbigga2V5ICkuR2V0QXR0cmlidXRlT25lKCBUeXBlT2YoIENEZWNsYXJpbmdUeXBlQXR0cmlidXRlICkgKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpbmZvc1sgaSBdID0gbmV3IENQYXJhbWV0ZXJJbmZvKCB0aGlzLm1fcHJvdG90eXBlLCB0aGlzLCBpLCAoIHR5cGVBdHRyaWJ1dGUgPT0gbnVsbCApID8gbnVsbCA6IHR5cGVBdHRyaWJ1dGUuRGVjbGFyaW5nVHlwZSApO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBpbmZvcztcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHB1YmxpYyBnZXQgRGVzY3JpcHRvcigpXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRoaXMubV9wcm90b3R5cGUsIHRoaXMubV9uYW1lICk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0TWV0YWRhdGFLZXkoKTogTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JOYW1lZCggdGhpcy5EZWNsYXJpbmdUeXBlLCBVQXR0cmlidXRlVGFyZ2V0Lk1ldGhvZCwgdGhpcy5OYW1lICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IE1ldGhvZCgpOiBGdW5jdGlvbjtcclxuICAgIH1cclxufSIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9NZW1iZXJJbmZvLnRzXCIgLz5cclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvblxyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ1Byb3BlcnR5SW5mbyBleHRlbmRzIENNZW1iZXJJbmZvXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyB0aGUgdHlwZSBvZiB0aGlzIHByb3BlcnR5XHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICog5bGe5oCn55qE57G75Z6LXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldCBQcm9wZXJ0eVR5cGUoKTogQ1R5cGU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBTZXRWYWx1ZSggb2JqOiBhbnksIHZhbHVlOiBhbnkgKTogdm9pZDtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldFZhbHVlKCBvYmo6IGFueSApOiBhbnk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRNZXRhZGF0YUtleSgpOiBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleUZvck5hbWVkKCB0aGlzLkRlY2xhcmluZ1R5cGUsIFVBdHRyaWJ1dGVUYXJnZXQuUHJvcGVydHksIHRoaXMuTmFtZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldCBDYW5Xcml0ZSgpOiBib29sZWFuO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IENhblJlYWQoKTogYm9vbGVhblxyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0U2V0TWV0aG9kKCk6IENNZXRob2RJbmZvO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0R2V0TWV0aG9kKCk6IENNZXRob2RJbmZvO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvblxyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ1BhcmFtZXRlckluZm8gaW1wbGVtZW50cyBJQ3VzdG9tQXR0cmlidXRlUHJvdmlkZXJcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldCBQYXJhbWV0ZXJJbmRleCgpOiBudW1iZXI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgTmFtZSgpOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgUGFyYW1ldGVyVHlwZSgpOiBDVHlwZTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldEN1c3RvbUF0dHJpYnV0ZU9uZTwgVEF0dHJpYnV0ZSBleHRlbmRzIENBdHRyaWJ1dGUgPiggYXR0cmlidXRlVHlwZTogQ1R5cGU8IFRBdHRyaWJ1dGUgPiApOiBUQXR0cmlidXRlO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0Q3VzdG9tQXR0cmlidXRlczwgVEF0dHJpYnV0ZSBleHRlbmRzIENBdHRyaWJ1dGUgPiggYXR0cmlidXRlVHlwZTogQ1R5cGU8IFRBdHRyaWJ1dGUgPiApOiBUQXR0cmlidXRlW107XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRDdXN0b21BdHRyaWJ1dGVzQWxsKCk6IENBdHRyaWJ1dGVbXTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IElzRGVmaW5lZDwgVEF0dHJpYnV0ZSBleHRlbmRzIENBdHRyaWJ1dGUgPiggYXR0cmlidXRlVHlwZTogQ1R5cGU8IFRBdHRyaWJ1dGUgPiApOiBib29sZWFuO1xyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnN0cnVjdG9ySW5mby50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0ZpZWxkSW5mby50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL01ldGhvZEluZm8udHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Qcm9wZXJ0eUluZm8udHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9QYXJhbWV0ZXJJbmZvLnRzXCIgLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lDdXN0b21BdHRyaWJ1dGVQcm92aWRlci50c1wiIC8+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvblxyXG57XHJcbiAgICAvKipcclxuICAgICAqIG9iamVjdCDmtL7nlJ/nsbvnmoTmnoTpgKDlmajnsbvlnotcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUeXBlQ29uc3RydWN0b3I8IFQgZXh0ZW5kcyBvYmplY3QgPiBleHRlbmRzIEZ1bmN0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgbmV3ICggLi4uYXJnczogYW55W10gKTogVDtcclxuICAgICAgICAvL3Byb3RvdHlwZTogVCB8IFR5cGVQcm90b3R5cGU8IFQgPjtcclxuICAgIH07XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUeXBlQ29uc3RydWN0b3JBYnN0cmFjdDwgVCBleHRlbmRzIG9iamVjdCA+IGV4dGVuZHMgRnVuY3Rpb25cclxuICAgIHtcclxuICAgICAgICBwcm90b3R5cGU6IFQgfCBUeXBlUHJvdG90eXBlPCBUID47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXhwb3J0IGludGVyZmFjZSBUeXBlQ29uc3RydWN0b3JOZXc8IFQgZXh0ZW5kcyBvYmplY3QgPiBleHRlbmRzIEZ1bmN0aW9uXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgbmV3ICggLi4uYXJnczogYW55W10gKTogVDtcclxuICAgIC8vIH07XHJcblxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIG9iamVjdCDmtL7nlJ/nsbvnmoRwcm90b3R5cGXnsbvlnotcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUeXBlUHJvdG90eXBlPCBUIGV4dGVuZHMgb2JqZWN0ID4gZXh0ZW5kcyBPYmplY3RcclxuICAgIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcjogVHlwZUNvbnN0cnVjdG9yPCBUID47XHJcbiAgICB9O1xyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBHZXRPckNyZWF0ZURpY3Rpb25hcnlJbkpzUHJvdG90eXBlPCBUIGV4dGVuZHMge30gPiggcHJvdG90eXBlOiBUeXBlUHJvdG90eXBlPCBvYmplY3QgPiwga2V5OiBzdHJpbmcgKSA6IFRcclxuICAgIHtcclxuICAgICAgICBsZXQgZGF0YTogVCA9IG51bGw7XHJcbiAgICAgICAgaWYgKCBwcm90b3R5cGUuaGFzT3duUHJvcGVydHkoIGtleSApID09IGZhbHNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGEgPSAoPGFueT5wcm90b3R5cGUpWyBrZXkgXSA9IDxUPnt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhID0gKDxhbnk+cHJvdG90eXBlKVsga2V5IF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBHZXRPckNyZWF0ZUFycmF5SW5Kc1Byb3RvdHlwZTwgVCBleHRlbmRzIHt9ID4oIHByb3RvdHlwZTogVHlwZVByb3RvdHlwZTwgb2JqZWN0ID4sIGtleTogc3RyaW5nICkgOiBBcnJheTwgVCA+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRhdGE6IEFycmF5PCBUID4gPSBudWxsO1xyXG4gICAgICAgIGlmICggcHJvdG90eXBlLmhhc093blByb3BlcnR5KCBrZXkgKSA9PSBmYWxzZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhID0gKDxhbnk+cHJvdG90eXBlKVsga2V5IF0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YSA9ICg8YW55PnByb3RvdHlwZSlbIGtleSBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElEZWxheVR5cGU8IFQgZXh0ZW5kcyBvYmplY3QgPSBvYmplY3QgPlxyXG4gICAge1xyXG4gICAgICAgICgpOiBDVHlwZTxUPjtcclxuICAgIH07XHJcblxyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIENUeXBlPCBUIGV4dGVuZHMgb2JqZWN0ID0gb2JqZWN0ID4gaW1wbGVtZW50cyBJQ3VzdG9tQXR0cmlidXRlUHJvdmlkZXIsIElFcXVhdGFibGU8IENUeXBlID5cclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBFcXVhbHMoIG90aGVyOiBDVHlwZSApOiBib29sZWFuO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0SnNQcm90b3R5cGU8IFRFeHRyYSBleHRlbmRzIHt9ID0ge30gPigpOiBUeXBlUHJvdG90eXBlPCBUID4gJiBURXh0cmE7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRKc0NvbnN0cnVjdG9yKCk6IFR5cGVDb25zdHJ1Y3RvcjwgVCA+O1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0Q29uc3RydWN0b3IoKTogQ0NvbnN0cnVjdG9ySW5mbztcclxuICAgIFxyXG4gICAgICAgIHB1YmxpYyBHZXRGaWVsZE9uZSggbmFtZTogc3RyaW5nICk6IENGaWVsZEluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpbmZvOiBDRmllbGRJbmZvID0gdGhpcy5HZXRPd25GaWVsZE9uZSggbmFtZSApO1xyXG4gICAgICAgICAgICBpZiAoIGluZm8gPT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBiYXNlVHlwZSA9IHRoaXMuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmZvID0gYmFzZVR5cGUuR2V0T3duRmllbGRPbmUoIG5hbWUgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGluZm8gIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmZvO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZS5CYXNlVHlwZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaW5mbztcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0T3duRmllbGRPbmUoIG5hbWU6IHN0cmluZyApOiBDRmllbGRJbmZvO1xyXG4gICAgXHJcbiAgICAgICAgcHVibGljIEdldEZpZWxkcygpOiBDRmllbGRJbmZvW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuR2V0T3duRmllbGRzKCk7XHJcbiAgICAgICAgICAgIGxldCBiYXNlVHlwZSA9IHRoaXMuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgIHdoaWxlICggYmFzZVR5cGUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnJheSA9IGFycmF5LmNvbmNhdCggYmFzZVR5cGUuR2V0T3duRmllbGRzKCkgKTtcclxuICAgICAgICAgICAgICAgIGJhc2VUeXBlID0gYmFzZVR5cGUuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRPd25GaWVsZHMoKTogQ0ZpZWxkSW5mb1tdXHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRNZXRob2RPbmUoIGtleTogc3RyaW5nICk6IENNZXRob2RJbmZvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaW5mbzogQ01ldGhvZEluZm8gPSB0aGlzLkdldE93bk1ldGhvZE9uZSgga2V5ICk7XHJcbiAgICAgICAgICAgIGlmICggaW5mbyAhPSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGJhc2VUeXBlID0gdGhpcy5CYXNlVHlwZTtcclxuICAgICAgICAgICAgd2hpbGUgKCBiYXNlVHlwZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGluZm8gPSBiYXNlVHlwZS5HZXRPd25NZXRob2RPbmUoIGtleSApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBpbmZvICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmZvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZS5CYXNlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRPd25NZXRob2RPbmUoIGtleTogc3RyaW5nICk6IENNZXRob2RJbmZvO1xyXG5cclxuICAgICAgICBwdWJsaWMgR2V0TWV0aG9kcygpOiBDTWV0aG9kSW5mb1tdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLkdldE93bk1ldGhvZHMoKTtcclxuICAgICAgICAgICAgbGV0IGJhc2VUeXBlID0gdGhpcy5CYXNlVHlwZTtcclxuICAgICAgICAgICAgd2hpbGUgKCBiYXNlVHlwZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KCBiYXNlVHlwZS5HZXRPd25NZXRob2RzKCkgKTtcclxuICAgICAgICAgICAgICAgIGJhc2VUeXBlID0gYmFzZVR5cGUuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldE93bk1ldGhvZHMoKTogQ01ldGhvZEluZm9bXTtcclxuXHJcbiAgICAgICAgcHVibGljIEdldFByb3BlcnRpZXMoKTogQ1Byb3BlcnR5SW5mb1tdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLkdldE93blByb3BlcnRpZXMoKTtcclxuICAgICAgICAgICAgbGV0IGJhc2VUeXBlID0gdGhpcy5CYXNlVHlwZTtcclxuICAgICAgICAgICAgd2hpbGUgKCBiYXNlVHlwZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KCBiYXNlVHlwZS5HZXRPd25Qcm9wZXJ0aWVzKCkgKTtcclxuICAgICAgICAgICAgICAgIGJhc2VUeXBlID0gYmFzZVR5cGUuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFByb3BlcnR5KCBrZXk6IHN0cmluZyB8IHN5bWJvbCApOiBDUHJvcGVydHlJbmZvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHlJbmZvID0gdGhpcy5HZXRPd25Qcm9wZXJ0eSgga2V5ICk7XHJcbiAgICAgICAgICAgIGlmICggcHJvcGVydHlJbmZvICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5SW5mbztcclxuICAgICAgICAgICAgbGV0IGJhc2VUeXBlID0gdGhpcy5CYXNlVHlwZTtcclxuICAgICAgICAgICAgd2hpbGUgKCBiYXNlVHlwZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5SW5mbyA9IGJhc2VUeXBlLkdldE93blByb3BlcnR5KCBrZXkgKTtcclxuICAgICAgICAgICAgICAgIGlmICggcHJvcGVydHlJbmZvICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5SW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRPd25Qcm9wZXJ0aWVzKCk6IENQcm9wZXJ0eUluZm9bXTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldE93blByb3BlcnR5KCBrZXk6IHN0cmluZyB8IHN5bWJvbCApOiBDUHJvcGVydHlJbmZvO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAqKijlj6ror7spKipcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiDojrflj5bniLbnsbvnsbvlnotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IEJhc2VUeXBlKCk6IENUeXBlO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlr7nmr5TlvZPliY3nsbvlnovmmK/lkKbkuI7lj4LmlbB0eXBl57G75Z6L5LiA5qC3XHJcbiAgICAgICAgICogQHBhcmFtIHR5cGUg5a+55q+U5Y+C54Wn57G75Z6LXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IElzRXF1aXZhbGVudFRvKCB0eXBlOiBDVHlwZSB8IFR5cGVDb25zdHJ1Y3RvcjxvYmplY3Q+ICk6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIpOaWreW9k+WJjeexu+Wei+aYr+WQpue7p+aJv+S6juWPguaVsHR5cGXnsbvlnotcclxuICAgICAgICAgKiBAcGFyYW0gdHlwZSDniLbnsbvnsbvlnotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSXNJbmhlcml0RnJvbSggdHlwZTogQ1R5cGUgKTogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldEN1c3RvbUF0dHJpYnV0ZU9uZTwgVEF0dHJpYnV0ZSBleHRlbmRzIENBdHRyaWJ1dGUgPiggYXR0cmlidXRlVHlwZTogQ1R5cGU8IFRBdHRyaWJ1dGUgPiwgaW5oZXJpdDogYm9vbGVhbiApOiBUQXR0cmlidXRlO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgR2V0Q3VzdG9tQXR0cmlidXRlczwgVEF0dHJpYnV0ZSBleHRlbmRzIENBdHRyaWJ1dGUgPiggYXR0cmlidXRlVHlwZTogQ1R5cGU8IFRBdHRyaWJ1dGUgPiwgaW5oZXJpdDogYm9vbGVhbiApOiBUQXR0cmlidXRlW107XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRDdXN0b21BdHRyaWJ1dGVzQWxsKCk6IENBdHRyaWJ1dGVbXTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IElzRGVmaW5lZDwgVEF0dHJpYnV0ZSBleHRlbmRzIENBdHRyaWJ1dGUgPiggYXR0cmlidXRlVHlwZTogQ1R5cGU8IFRBdHRyaWJ1dGUgPiwgaW5oZXJpdDogYm9vbGVhbiApOiBib29sZWFuO1xyXG5cclxuICAgICAgICAvL3B1YmxpYyBhYnN0cmFjdCBDYXN0KCBvOiBhbnkgKTogVDtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBDUnVudGltZVR5cGU8IFQgZXh0ZW5kcyBvYmplY3QgPSBvYmplY3QgPiBleHRlbmRzIENUeXBlPCBUID5cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fcHJvdG86IFR5cGVQcm90b3R5cGU8IFQgPiA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9tZXRhZGF0YUNvbGxlY3Rpb246IE1ldGFkYXRhLklNZXRhZGF0YUNvbGxlY3Rpb25SZWFkb25seSA9IG51bGw7XHJcbiAgICBcclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHByb3RvOiBUeXBlUHJvdG90eXBlPCBUID4gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5tX3Byb3RvID0gcHJvdG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRXF1YWxzKCBvdGhlcjogQ1J1bnRpbWVUeXBlICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLklzRXF1aXZhbGVudFRvKCBkeW5hbWljX2Nhc3QoIG90aGVyLCBDUnVudGltZVR5cGUgKSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEpzUHJvdG90eXBlPCBURXh0cmEgZXh0ZW5kcyB7fSA9IHt9ID4oKTogVHlwZVByb3RvdHlwZTwgVCA+ICYgVEV4dHJhXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gPCBUeXBlUHJvdG90eXBlPCBUID4gJiBURXh0cmEgPnRoaXMubV9wcm90bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRKc0NvbnN0cnVjdG9yKCk6IFR5cGVDb25zdHJ1Y3RvcjwgVCA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3Byb3RvLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldENvbnN0cnVjdG9yKCk6IENDb25zdHJ1Y3RvckluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ1J1bnRpbWVDb25zdHJ1Y3RvckluZm8oIFwiY29uc3RydWN0b3JcIiwgdGhpcy5tX3Byb3RvICk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHVibGljIEdldEZpZWxkT25lKCBuYW1lOiBzdHJpbmcgKTogQ0ZpZWxkSW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGluZm86IENGaWVsZEluZm8gPSB0aGlzLkdldE93bkZpZWxkT25lKCBuYW1lICk7XHJcbiAgICAgICAgICAgIGlmICggaW5mbyA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJhc2VUeXBlID0gdGhpcy5CYXNlVHlwZTtcclxuICAgICAgICAgICAgICAgIHdoaWxlICggYmFzZVR5cGUgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZm8gPSBiYXNlVHlwZS5HZXRPd25GaWVsZE9uZSggbmFtZSApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggaW5mbyAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZm87XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBiYXNlVHlwZSA9IGJhc2VUeXBlLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHB1YmxpYyBHZXRPd25GaWVsZE9uZSggbmFtZTogc3RyaW5nICk6IENGaWVsZEluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcm90byA9IHRoaXMuR2V0SnNQcm90b3R5cGUoKTtcclxuICAgICAgICAgICAgbGV0IGluZm86IENGaWVsZEluZm8gPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCBwcm90bywgUmVmbGVjdEZpZWxkc0tleSApO1xyXG4gICAgICAgICAgICBpZiAoIGRlc2NyaXB0b3IgPT0gbnVsbCB8fCBkZXNjcmlwdG9yLnZhbHVlID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGlmICggKCBuYW1lIGluIGRlc2NyaXB0b3IudmFsdWUgKSA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgaW5mbyA9IG5ldyBDUnVudGltZUZpZWxkSW5mbyggbmFtZSwgcHJvdG8gKTtcclxuICAgICAgICAgICAgcmV0dXJuIGluZm87XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHVibGljIEdldEZpZWxkcygpOiBDRmllbGRJbmZvW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuR2V0T3duRmllbGRzKCk7XHJcbiAgICAgICAgICAgIGxldCBiYXNlVHlwZSA9IHRoaXMuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgIHdoaWxlICggYmFzZVR5cGUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnJheSA9IGFycmF5LmNvbmNhdCggYmFzZVR5cGUuR2V0T3duRmllbGRzKCkgKTtcclxuICAgICAgICAgICAgICAgIGJhc2VUeXBlID0gYmFzZVR5cGUuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHB1YmxpYyBHZXRPd25GaWVsZHMoKTogQ0ZpZWxkSW5mb1tdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcHJvdG8gPSB0aGlzLkdldEpzUHJvdG90eXBlKCk7XHJcbiAgICAgICAgICAgIGxldCBhcnJheTogQ0ZpZWxkSW5mb1tdID0gW107XHJcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHByb3RvLCBSZWZsZWN0RmllbGRzS2V5ICk7XHJcbiAgICAgICAgICAgIGlmICggZGVzY3JpcHRvciA9PSBudWxsIHx8IGRlc2NyaXB0b3IudmFsdWUgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gZGVzY3JpcHRvci52YWx1ZTtcclxuICAgICAgICAgICAgZm9yICggY29uc3QgayBpbiBrZXlzIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaCggbmV3IENSdW50aW1lRmllbGRJbmZvKCBrLCBwcm90byApICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldE1ldGhvZE9uZSgga2V5OiBzdHJpbmcgKTogQ01ldGhvZEluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpbmZvOiBDTWV0aG9kSW5mbyA9IHRoaXMuR2V0T3duTWV0aG9kT25lKCBrZXkgKTtcclxuICAgICAgICAgICAgaWYgKCBpbmZvICE9IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGJhc2VUeXBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW5mbyA9IGJhc2VUeXBlLkdldE93bk1ldGhvZE9uZSgga2V5ICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGluZm8gIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZm87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBiYXNlVHlwZSA9IGJhc2VUeXBlLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldE93bk1ldGhvZE9uZSgga2V5OiBzdHJpbmcgKTogQ01ldGhvZEluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpbmZvOiBDTWV0aG9kSW5mbyA9IG51bGw7XHJcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRoaXMubV9wcm90bywga2V5ICk7XHJcbiAgICAgICAgICAgIGlmICggZGVzY3JpcHRvciA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBpbmZvID0gbmV3IENSdW50aW1lTWV0aG9kSW5mbygga2V5LCB0aGlzLm1fcHJvdG8sIGRlc2NyaXB0b3IudmFsdWUgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGluZm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0TWV0aG9kcygpOiBDTWV0aG9kSW5mb1tdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLkdldE93bk1ldGhvZHMoKTtcclxuICAgICAgICAgICAgbGV0IGJhc2VUeXBlID0gdGhpcy5CYXNlVHlwZTtcclxuICAgICAgICAgICAgd2hpbGUgKCBiYXNlVHlwZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KCBiYXNlVHlwZS5HZXRPd25NZXRob2RzKCkgKTtcclxuICAgICAgICAgICAgICAgIGJhc2VUeXBlID0gYmFzZVR5cGUuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldE93bk1ldGhvZHMoKTogQ01ldGhvZEluZm9bXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGFycmF5OiBDTWV0aG9kSW5mb1tdID0gW107XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gUmVmbGVjdC5vd25LZXlzKCB0aGlzLm1fcHJvdG8gKTtcclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrID0ga2V5c1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBrID09IFwiY29uc3RydWN0b3JcIiApXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0aGlzLm1fcHJvdG8sIGsgKTtcclxuICAgICAgICAgICAgICAgIGlmICggZGVzY3JpcHRvciA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGlmICggZGVzY3JpcHRvci52YWx1ZSA9PSBudWxsIHx8IHR5cGVvZiggZGVzY3JpcHRvci52YWx1ZSApICE9IFwiZnVuY3Rpb25cIiApXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKCBuZXcgQ1J1bnRpbWVNZXRob2RJbmZvKCA8c3RyaW5nPmssIHRoaXMubV9wcm90bywgZGVzY3JpcHRvci52YWx1ZSApICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFByb3BlcnRpZXMoKTogQ1Byb3BlcnR5SW5mb1tdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLkdldE93blByb3BlcnRpZXMoKTtcclxuICAgICAgICAgICAgbGV0IGJhc2VUeXBlID0gdGhpcy5CYXNlVHlwZTtcclxuICAgICAgICAgICAgd2hpbGUgKCBiYXNlVHlwZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KCBiYXNlVHlwZS5HZXRPd25Qcm9wZXJ0aWVzKCkgKTtcclxuICAgICAgICAgICAgICAgIGJhc2VUeXBlID0gYmFzZVR5cGUuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFByb3BlcnR5KCBrZXk6IHN0cmluZyB8IHN5bWJvbCApOiBDUHJvcGVydHlJbmZvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHlJbmZvID0gdGhpcy5HZXRPd25Qcm9wZXJ0eSgga2V5ICk7XHJcbiAgICAgICAgICAgIGlmICggcHJvcGVydHlJbmZvICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5SW5mbztcclxuICAgICAgICAgICAgbGV0IGJhc2VUeXBlID0gdGhpcy5CYXNlVHlwZTtcclxuICAgICAgICAgICAgd2hpbGUgKCBiYXNlVHlwZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5SW5mbyA9IGJhc2VUeXBlLkdldE93blByb3BlcnR5KCBrZXkgKTtcclxuICAgICAgICAgICAgICAgIGlmICggcHJvcGVydHlJbmZvICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5SW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRPd25Qcm9wZXJ0aWVzKCk6IENQcm9wZXJ0eUluZm9bXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGFycmF5OiBDUHJvcGVydHlJbmZvW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IGtleXMgPSBSZWZsZWN0Lm93bktleXMoIHRoaXMubV9wcm90byApO1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBrID0ga2V5c1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBrID09IFwiY29uc3RydWN0b3JcIiApXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0aGlzLm1fcHJvdG8sIGsgKTtcclxuICAgICAgICAgICAgICAgIGlmICggZGVzY3JpcHRvciA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGlmICggZGVzY3JpcHRvci5zZXQgPT0gbnVsbCAmJiBkZXNjcmlwdG9yLmdldCA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goIG5ldyBDUnVudGltZVByb3BlcnR5SW5mbyggPHN0cmluZz5rLCB0aGlzLm1fcHJvdG8gKSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRPd25Qcm9wZXJ0eSgga2V5OiBzdHJpbmcgfCBzeW1ib2wgKTogQ1Byb3BlcnR5SW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpcy5tX3Byb3RvLCBrZXkgKTtcclxuICAgICAgICAgICAgaWYgKCBkZXNjcmlwdG9yID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGlmICggZGVzY3JpcHRvci5zZXQgPT0gbnVsbCAmJiBkZXNjcmlwdG9yLmdldCA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENSdW50aW1lUHJvcGVydHlJbmZvKCA8c3RyaW5nPmtleSwgdGhpcy5tX3Byb3RvICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAqKijlj6ror7spKipcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiDojrflj5bniLbnsbvnsbvlnotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0IEJhc2VUeXBlKCk6IENUeXBlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcHJvdG9CYXNlID0gUmVmbGVjdC5nZXRQcm90b3R5cGVPZiggdGhpcy5tX3Byb3RvICk7XHJcbiAgICAgICAgICAgIGlmICggcHJvdG9CYXNlID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGlmICggcHJvdG9CYXNlID09IE9iamVjdC5wcm90b3R5cGUgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ1J1bnRpbWVUeXBlKCA8VHlwZVByb3RvdHlwZTxvYmplY3Q+PnByb3RvQmFzZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5a+55q+U5b2T5YmN57G75Z6L5piv5ZCm5LiO5Y+C5pWwdHlwZeexu+Wei+S4gOagt1xyXG4gICAgICAgICAqIEBwYXJhbSB0eXBlIOWvueavlOWPgueFp+exu+Wei1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBJc0VxdWl2YWxlbnRUbyggdHlwZTogQ1J1bnRpbWVUeXBlIHwgVHlwZUNvbnN0cnVjdG9yPG9iamVjdD4gKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0eXBlID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIHR5cGVvZiggdHlwZSApID09IFwiZnVuY3Rpb25cIiApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZS5wcm90b3R5cGUgPT0gdGhpcy5tX3Byb3RvO1xyXG4gICAgICAgICAgICBpZiAoIHR5cGUubV9wcm90byA9PT0gdGhpcy5tX3Byb3RvIClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliKTmlq3lvZPliY3nsbvlnovmmK/lkKbnu6fmib/kuo7lj4LmlbB0eXBl57G75Z6LXHJcbiAgICAgICAgICogQHBhcmFtIHR5cGUg54i257G757G75Z6LXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIElzSW5oZXJpdEZyb20oIHR5cGU6IENUeXBlICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBiYXNlVHlwZSA9IHRoaXMuQmFzZVR5cGU7XHJcbiAgICAgICAgICAgIHdoaWxlICggYmFzZVR5cGUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGJhc2VUeXBlLklzRXF1aXZhbGVudFRvKCB0eXBlICkgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZS5CYXNlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldCBNZXRhZGF0YUNvbGxlY3Rpb24oKTogTWV0YWRhdGEuSU1ldGFkYXRhQ29sbGVjdGlvblJlYWRvbmx5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV9tZXRhZGF0YUNvbGxlY3Rpb24gPT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JDbGFzcyggdGhpcywgVUF0dHJpYnV0ZVRhcmdldC5DbGFzcyApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX21ldGFkYXRhQ29sbGVjdGlvbiA9IE1ldGFkYXRhLkNvbnRhaW5lci5HZXRDb2xsZWN0aW9uKCBrZXkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX21ldGFkYXRhQ29sbGVjdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRDdXN0b21BdHRyaWJ1dGVPbmU8IFRBdHRyaWJ1dGUgZXh0ZW5kcyBDQXR0cmlidXRlID4oIGF0dHJpYnV0ZVR5cGU6IENUeXBlPCBUQXR0cmlidXRlID4sIGluaGVyaXQ6IGJvb2xlYW4gKTogVEF0dHJpYnV0ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLklzRXF1aXZhbGVudFRvKCBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUgKSA9PSB0cnVlIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBpbmhlcml0ID09IHRydWUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0ciA9IHRoaXMuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBhdHRyaWJ1dGVUeXBlLCBmYWxzZSApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBhdHRyICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRyO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhdHRyVXNhZ2UgPSBhdHRyaWJ1dGVUeXBlLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggUmVmbGVjdGlvbi5UeXBlT2YoIENBdHRyaWJ1dGVVc2FnZUF0dHJpYnV0ZSApLCB0cnVlICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGF0dHJVc2FnZSA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICBhdHRyVXNhZ2UgPSBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUuRGVmYXVsdFVzYWdlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggYXR0clVzYWdlLkluaGVyaXRlZCA9PSB0cnVlIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICggYmFzZVR5cGUgIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyID0gYmFzZVR5cGUuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBhdHRyaWJ1dGVUeXBlLCBmYWxzZSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGF0dHIgIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXR0cjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZS5CYXNlVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5NZXRhZGF0YUNvbGxlY3Rpb24uR2V0QXR0cmlidXRlT25lKCBhdHRyaWJ1dGVUeXBlICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRDdXN0b21BdHRyaWJ1dGVzPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCBhdHRyaWJ1dGVUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+LCBpbmhlcml0OiBib29sZWFuICk6IFRBdHRyaWJ1dGVbXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBpbmhlcml0ID09IHRydWUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0cnMgPSB0aGlzLkdldEN1c3RvbUF0dHJpYnV0ZXMoIGF0dHJpYnV0ZVR5cGUsIGZhbHNlICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0clVzYWdlID0gYXR0cmlidXRlVHlwZS5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIFJlZmxlY3Rpb24uVHlwZU9mKCBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUgKSwgdHJ1ZSApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBhdHRyVXNhZ2UgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0clVzYWdlID0gQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlLkRlZmF1bHRVc2FnZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICggYXR0clVzYWdlLkluaGVyaXRlZCA9PSB0cnVlIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZVR5cGUgPSB0aGlzLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICggYmFzZVR5cGUgIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycyA9IGF0dHJzLmNvbmNhdCggYmFzZVR5cGUuR2V0Q3VzdG9tQXR0cmlidXRlcyggYXR0cmlidXRlVHlwZSwgZmFsc2UgKSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlVHlwZSA9IGJhc2VUeXBlLkJhc2VUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhdHRycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLk1ldGFkYXRhQ29sbGVjdGlvbi5HZXRBdHRyaWJ1dGVzKCBhdHRyaWJ1dGVUeXBlICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRDdXN0b21BdHRyaWJ1dGVzQWxsKCk6IENBdHRyaWJ1dGVbXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuTWV0YWRhdGFDb2xsZWN0aW9uLkdldEF0dHJpYnV0ZXNBbGwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBJc0RlZmluZWQ8IFRBdHRyaWJ1dGUgZXh0ZW5kcyBDQXR0cmlidXRlID4oIGF0dHJpYnV0ZVR5cGU6IENUeXBlPCBUQXR0cmlidXRlID4sIGluaGVyaXQ6IGJvb2xlYW4gKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFR5cGVPZjwgVCBleHRlbmRzIG9iamVjdCA+KCB0eXBlOiBUeXBlQ29uc3RydWN0b3I8IFQgPiB8IFR5cGVDb25zdHJ1Y3RvckFic3RyYWN0PCBUID4gKTogQ1R5cGU8IFQgPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ1J1bnRpbWVUeXBlKCB0eXBlLnByb3RvdHlwZSApO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBUeXBlT2ZfXzwgVCBleHRlbmRzIG9iamVjdCA+KCBwcm90b3R5cGU6IFR5cGVQcm90b3R5cGU8IFQgPiApOiBDVHlwZTwgVCA+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDUnVudGltZVR5cGUoIHByb3RvdHlwZSApO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBHZXRPYmplY3RUeXBlKCBvOiBhbnkgKTogQ1R5cGVcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gby5HZXRUeXBlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlKjkuo7kupLnm7jnsbvlnovlvJXnlKjnmoTlnLrmma9cclxuICAgICAqIEBwYXJhbSBkZWxheSBcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFR5cGVPZkRlbGF5PCBUIGV4dGVuZHMgb2JqZWN0ID4oIGRlbGF5OiAoKSA9PiBUeXBlQ29uc3RydWN0b3I8IFQgPiB8IFR5cGVDb25zdHJ1Y3RvckFic3RyYWN0PCBUID4gKTogSURlbGF5VHlwZTwgVCA+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG5ldyBDUnVudGltZVR5cGUoIGRlbGF5KCkucHJvdG90eXBlICk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgQ1J1bnRpbWVDb25zdHJ1Y3RvckluZm8gZXh0ZW5kcyBDQ29uc3RydWN0b3JJbmZvXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBuYW1lOiBzdHJpbmcsIHByb3RvdHlwZTogVHlwZVByb3RvdHlwZTwgb2JqZWN0ID4gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoIG5hbWUsIHByb3RvdHlwZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBNZW1iZXJUeXBlKCk6IFVNZW1iZXJUeXBlc1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFVNZW1iZXJUeXBlcy5Db25zdHJ1Y3RvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRQYXJhbWV0ZXJzKCk6IENQYXJhbWV0ZXJJbmZvW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjbGFzc1R5cGUgPSB0aGlzLkRlY2xhcmluZ1R5cGU7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbWV0ZXJDb3VudCA9IHRoaXMuSnNDb25zdHJ1Y3Rvci5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBpbmZvczogQXJyYXk8IENQYXJhbWV0ZXJJbmZvID4gPSBBcnJheSggcGFyYW1ldGVyQ291bnQgKTtcclxuICAgICAgICAgICAgaWYgKCBwYXJhbWV0ZXJDb3VudCA+IDAgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBwYXJhbWV0ZXJDb3VudDsgaSArKyApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IG5ldyBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleUZvclBhcmFtZXRlciggY2xhc3NUeXBlLCBVQXR0cmlidXRlVGFyZ2V0LlBhcmFtZXRlciwgdGhpcy5OYW1lLCBpICk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGVBdHRyaWJ1dGUgPSBNZXRhZGF0YS5Db250YWluZXIuR2V0Q29sbGVjdGlvbigga2V5ICkuR2V0QXR0cmlidXRlT25lKCBUeXBlT2YoIENEZWNsYXJpbmdUeXBlQXR0cmlidXRlICkgKTtcclxuICAgICAgICAgICAgICAgICAgICBpbmZvc1sgaSBdID0gbmV3IENSdW50aW1lUGFyYW1ldGVySW5mbyggdGhpcy5tX3Byb3RvdHlwZSwgdGhpcywgaSwgKCB0eXBlQXR0cmlidXRlID09IG51bGwgKSA/IG51bGwgOiB0eXBlQXR0cmlidXRlLkRlY2xhcmluZ1R5cGUgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaW5mb3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IERlc2NyaXB0b3IoKTogUHJvcGVydHlEZXNjcmlwdG9yXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNsYXNzIENSdW50aW1lTWV0aG9kSW5mbyBleHRlbmRzIENNZXRob2RJbmZvXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX21ldGhvZDogRnVuY3Rpb24gPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9mcm9tUHJvcGVydHk6IENQcm9wZXJ0eUluZm8gPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIG5hbWU6IHN0cmluZywgcHJvdG90eXBlOiBUeXBlUHJvdG90eXBlPCBhbnkgPiwgbWV0aG9kOiBGdW5jdGlvbiwgZnJvbVByb3BlcnR5PzogQ1Byb3BlcnR5SW5mbyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggbmFtZSwgcHJvdG90eXBlICk7XHJcbiAgICAgICAgICAgIHRoaXMubV9tZXRob2QgPSBtZXRob2Q7XHJcbiAgICAgICAgICAgIHRoaXMubV9mcm9tUHJvcGVydHkgPSBmcm9tUHJvcGVydHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IE1lbWJlclR5cGUoKTogVU1lbWJlclR5cGVzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gVU1lbWJlclR5cGVzLk1ldGhvZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXQgTWV0aG9kKCk6IEZ1bmN0aW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX21ldGhvZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRQYXJhbWV0ZXJzKCk6IENQYXJhbWV0ZXJJbmZvW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjbGFzc1R5cGUgPSB0aGlzLkRlY2xhcmluZ1R5cGU7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbWV0ZXJDb3VudCA9IHRoaXMuTWV0aG9kLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IGluZm9zOiBBcnJheTwgQ1BhcmFtZXRlckluZm8gPiA9IEFycmF5KCBwYXJhbWV0ZXJDb3VudCApO1xyXG4gICAgICAgICAgICBpZiAoIHBhcmFtZXRlckNvdW50ID4gMCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHBhcmFtZXRlckNvdW50OyBpICsrIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZUF0dHJpYnV0ZTogQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbWV0ZXJOYW1lOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5tX2Zyb21Qcm9wZXJ0eSA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JQYXJhbWV0ZXIoIGNsYXNzVHlwZSwgVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIHRoaXMuTmFtZSwgaSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXR0cnNDb2xsZWN0aW9uID0gTWV0YWRhdGEuQ29udGFpbmVyLkdldENvbGxlY3Rpb24oIGtleSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlQXR0cmlidXRlID0gYXR0cnNDb2xsZWN0aW9uLkdldEF0dHJpYnV0ZU9uZSggVHlwZU9mKCBDRGVjbGFyaW5nVHlwZUF0dHJpYnV0ZSApICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuYW1lQXR0cmlidXRlID0gYXR0cnNDb2xsZWN0aW9uLkdldEF0dHJpYnV0ZU9uZSggVHlwZU9mKCBDTmFtZWRBdHRyaWJ1dGUgKSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIG5hbWVBdHRyaWJ1dGUgISA9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyTmFtZSA9IG5hbWVBdHRyaWJ1dGUuVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUF0dHJpYnV0ZSA9IHRoaXMubV9mcm9tUHJvcGVydHkuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBUeXBlT2YoIENEZWNsYXJpbmdUeXBlQXR0cmlidXRlICkgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyTmFtZSA9IHRoaXMubV9mcm9tUHJvcGVydHkuTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGluZm9zWyBpIF0gPSBuZXcgQ1J1bnRpbWVQYXJhbWV0ZXJJbmZvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1fcHJvdG90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoIHR5cGVBdHRyaWJ1dGUgPT0gbnVsbCApID8gbnVsbCA6IHR5cGVBdHRyaWJ1dGUuRGVjbGFyaW5nVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyTmFtZSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpbmZvcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgRGVzY3JpcHRvcigpOiBQcm9wZXJ0eURlc2NyaXB0b3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX2Zyb21Qcm9wZXJ0eSA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpcy5tX3Byb3RvdHlwZSwgdGhpcy5OYW1lICk7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpcy5tX3Byb3RvdHlwZSwgdGhpcy5tX2Zyb21Qcm9wZXJ0eS5OYW1lICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGFzcyBDUnVudGltZVByb3BlcnR5SW5mbyBleHRlbmRzIENQcm9wZXJ0eUluZm9cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIG5hbWU6IHN0cmluZywgcHJvdG90eXBlOiBUeXBlUHJvdG90eXBlPCBvYmplY3QgPiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggbmFtZSwgcHJvdG90eXBlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IE1lbWJlclR5cGUoKTogVU1lbWJlclR5cGVzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gVU1lbWJlclR5cGVzLlByb3BlcnR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgZ2V0IFByb3BlcnR5VHlwZSgpOiBDVHlwZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGF0dHIgPSB0aGlzLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggVHlwZU9mKCBDRGVjbGFyaW5nVHlwZUF0dHJpYnV0ZSApICk7XHJcbiAgICAgICAgICAgIGlmICggYXR0ciA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0ci5EZWNsYXJpbmdUeXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFNldFZhbHVlKCBvYmo6IGFueSwgdmFsdWU6IGFueSApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvYmpbIHRoaXMubV9uYW1lIF0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRWYWx1ZSggb2JqOiBhbnkgKTogYW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqWyB0aGlzLm1fbmFtZSBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldE1ldGFkYXRhS2V5KCk6IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5Rm9yTmFtZWQoIHRoaXMuRGVjbGFyaW5nVHlwZSwgVUF0dHJpYnV0ZVRhcmdldC5Qcm9wZXJ0eSwgdGhpcy5OYW1lICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IENhbldyaXRlKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRoaXMubV9wcm90b3R5cGUsIHRoaXMubV9uYW1lICk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZXNjcmlwdG9yLnNldCAhPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IENhblJlYWQoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpcy5tX3Byb3RvdHlwZSwgdGhpcy5tX25hbWUgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0ICE9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRTZXRNZXRob2QoKTogQ01ldGhvZEluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRoaXMubV9wcm90b3R5cGUsIHRoaXMubV9uYW1lICk7XHJcbiAgICAgICAgICAgIGlmICggZGVzY3JpcHRvci5zZXQgPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ1J1bnRpbWVNZXRob2RJbmZvKCBcImdldF9cIiArIHRoaXMuTmFtZSwgdGhpcy5tX3Byb3RvdHlwZSwgZGVzY3JpcHRvci5zZXQsIHRoaXMgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRHZXRNZXRob2QoKTogQ01ldGhvZEluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRoaXMubV9wcm90b3R5cGUsIHRoaXMubV9uYW1lICk7XHJcbiAgICAgICAgICAgIGlmICggZGVzY3JpcHRvci5nZXQgPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ1J1bnRpbWVNZXRob2RJbmZvKCBcImdldF9cIiArIHRoaXMuTmFtZSwgdGhpcy5tX3Byb3RvdHlwZSwgZGVzY3JpcHRvci5nZXQsIHRoaXMgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNsYXNzIENSdW50aW1lRmllbGRJbmZvIGV4dGVuZHMgQ0ZpZWxkSW5mb1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nLCBwcm90b3R5cGU6IFR5cGVQcm90b3R5cGU8IG9iamVjdCA+IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCBuYW1lLCBwcm90b3R5cGUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgRmllbGRUeXBlKCk6IENUeXBlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYXR0ciA9IHRoaXMuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBUeXBlT2YoIENEZWNsYXJpbmdUeXBlQXR0cmlidXRlICkgKTtcclxuICAgICAgICAgICAgaWYgKCBhdHRyID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyLkRlY2xhcmluZ1R5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGFzcyBDUnVudGltZVBhcmFtZXRlckluZm8gZXh0ZW5kcyBDUGFyYW1ldGVySW5mb1xyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBtX3Byb3RvdHlwZTogVHlwZVByb3RvdHlwZTwgb2JqZWN0ID4gPSBudWxsO1xyXG4gICAgICAgIC8vIHByb3RlY3RlZCBtX21ldGhvZE5hbWU6IHN0cmluZyA9IG51bGw7XHJcbiAgICAgICAgLy8gcHJvdGVjdGVkIG1fZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fbWVtYmVyOiBDTWVtYmVySW5mbyA9IG51bGw7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fcGFyYW1ldGVySW5kZXg6IG51bWJlciA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSBtX3BhcmFtZXRlck5hbWU6IHN0cmluZyA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3BhcmFtZXRlclR5cGU6IENUeXBlID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX21ldGFkYXRhQ29sbGVjdGlvbjogTWV0YWRhdGEuSU1ldGFkYXRhQ29sbGVjdGlvblJlYWRvbmx5ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBwcm90b3R5cGU6IFR5cGVQcm90b3R5cGU8IG9iamVjdCA+LCBtZW1iZXI6IENNZW1iZXJJbmZvLCBwYXJhbWV0ZXJJbmRleDogbnVtYmVyLCBwYXJhbWV0ZXJUeXBlOiBDVHlwZSwgcGFyYW1ldGVyTmFtZT86IHN0cmluZyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1fcHJvdG90eXBlID0gcHJvdG90eXBlO1xyXG4gICAgICAgICAgICB0aGlzLm1fbWVtYmVyID0gbWVtYmVyO1xyXG4gICAgICAgICAgICB0aGlzLm1fcGFyYW1ldGVySW5kZXggPSBwYXJhbWV0ZXJJbmRleDtcclxuICAgICAgICAgICAgdGhpcy5tX3BhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXJOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fcGFyYW1ldGVyVHlwZSA9IHBhcmFtZXRlclR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IERlY2xhcmluZ1R5cGUoKTogQ1R5cGU8IG9iamVjdCA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENSdW50aW1lVHlwZSggdGhpcy5tX3Byb3RvdHlwZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBQYXJhbWV0ZXJJbmRleCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3BhcmFtZXRlckluZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBOYW1lKCk6IHN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9wYXJhbWV0ZXJOYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBQYXJhbWV0ZXJUeXBlKCk6IENUeXBlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3BhcmFtZXRlclR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0TWV0YWRhdGFLZXkoKTogTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JQYXJhbWV0ZXIoIHRoaXMuRGVjbGFyaW5nVHlwZSwgVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIHRoaXMubV9tZW1iZXIuTmFtZSwgdGhpcy5QYXJhbWV0ZXJJbmRleCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXQgTWV0YWRhdGFDb2xsZWN0aW9uKCk6IE1ldGFkYXRhLklNZXRhZGF0YUNvbGxlY3Rpb25SZWFkb25seVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fbWV0YWRhdGFDb2xsZWN0aW9uID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5HZXRNZXRhZGF0YUtleSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX21ldGFkYXRhQ29sbGVjdGlvbiA9IE1ldGFkYXRhLkNvbnRhaW5lci5HZXRDb2xsZWN0aW9uKCBrZXkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX21ldGFkYXRhQ29sbGVjdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRDdXN0b21BdHRyaWJ1dGVPbmU8IFRBdHRyaWJ1dGUgZXh0ZW5kcyBDQXR0cmlidXRlID4oIGF0dHJpYnV0ZVR5cGU6IENUeXBlPCBUQXR0cmlidXRlID4gKTogVEF0dHJpYnV0ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuTWV0YWRhdGFDb2xsZWN0aW9uLkdldEF0dHJpYnV0ZU9uZSggYXR0cmlidXRlVHlwZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEN1c3RvbUF0dHJpYnV0ZXM8IFRBdHRyaWJ1dGUgZXh0ZW5kcyBDQXR0cmlidXRlID4oIGF0dHJpYnV0ZVR5cGU6IENUeXBlPCBUQXR0cmlidXRlID4gKTogVEF0dHJpYnV0ZVtdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5NZXRhZGF0YUNvbGxlY3Rpb24uR2V0QXR0cmlidXRlcyggYXR0cmlidXRlVHlwZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEN1c3RvbUF0dHJpYnV0ZXNBbGwoKTogQ0F0dHJpYnV0ZVtdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5NZXRhZGF0YUNvbGxlY3Rpb24uR2V0QXR0cmlidXRlc0FsbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIElzRGVmaW5lZDwgVEF0dHJpYnV0ZSBleHRlbmRzIENBdHRyaWJ1dGUgPiggYXR0cmlidXRlVHlwZTogQ1R5cGU8IFRBdHRyaWJ1dGUgPiApOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKCB0aGlzLk1ldGFkYXRhQ29sbGVjdGlvbi5HZXRBdHRyaWJ1dGVPbmUoIGF0dHJpYnV0ZVR5cGUgKSA9PSBudWxsICkgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9SZWZsZWN0aW9uL1R5cGUudHNcIiAvPlxyXG5cclxuXHJcbmludGVyZmFjZSBPYmplY3Rcclxue1xyXG4gICAgR2V0VHlwZSgpOiBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBPYmplY3QgPjtcclxufVxyXG5cclxuT2JqZWN0LnByb3RvdHlwZS5HZXRUeXBlID0gZnVuY3Rpb24oKTogaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgT2JqZWN0ID5cclxue1xyXG4gICAgcmV0dXJuIGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mX18oIDxpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uLlR5cGVQcm90b3R5cGU8b2JqZWN0Pj5SZWZsZWN0LmdldFByb3RvdHlwZU9mKCB0aGlzICkgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOS4jeWPr+aemuS4vlxyXG4gKi9cclxuUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSggT2JqZWN0LnByb3RvdHlwZSwgXCJHZXRUeXBlXCIsIHsgZW51bWVyYWJsZTogZmFsc2UgfSApO1xyXG5cclxuXHJcbiIsIlxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vT2JqZWN0X0dldFR5cGUudHNcIiAvPlxyXG5cclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW1cclxue1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEF0dHJpYnV0ZURlY29yYXRlKCBhdHRyaWJ1dGU6IENBdHRyaWJ1dGUgKTogVURlY29yYXRvckZ1bmN0aW9uVHlwZVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoIHRhcmdldDogYW55LCBwcm9wZXJ0eU5hbWU/OiBzdHJpbmcgfCBzeW1ib2wsIGRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4PzogUHJvcGVydHlEZXNjcmlwdG9yIHwgbnVtYmVyICkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVVc2FnZSA9IGF0dHJpYnV0ZS5HZXRUeXBlKCkuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBSZWZsZWN0aW9uLlR5cGVPZiggQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlICksIHRydWUgKTtcclxuICAgICAgICAgICAgaWYgKCBhdHRyaWJ1dGVVc2FnZSA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlVXNhZ2UgPSBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUuRGVmYXVsdFVzYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggcHJvcGVydHlOYW1lID09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSA9IFwiY29uc3RydWN0b3JcIjtcclxuICAgICAgICAgICAgICAgIGlmICggZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXggPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ0F0dHJpYnV0ZURlY29yYXRlSGVscGVyLkRlY29yYXRlQ2xhc3MoIGF0dHJpYnV0ZSwgYXR0cmlidXRlVXNhZ2UsIHRhcmdldCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIHR5cGVvZiggZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXggKSA9PSBcIm9iamVjdFwiIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDQXR0cmlidXRlRGVjb3JhdGVIZWxwZXIuRGVjb3JhdGVNZXRob2QoIGF0dHJpYnV0ZSwgYXR0cmlidXRlVXNhZ2UsIHRhcmdldCwgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleC52YWx1ZSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIHR5cGVvZiggZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXggKSA9PSBcIm51bWJlclwiIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDQXR0cmlidXRlRGVjb3JhdGVIZWxwZXIuRGVjb3JhdGVQYXJhbWV0ZXIoIGF0dHJpYnV0ZSwgYXR0cmlidXRlVXNhZ2UsIHRhcmdldC5wcm90b3R5cGUsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXggKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXggPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ0F0dHJpYnV0ZURlY29yYXRlSGVscGVyLkRlY29yYXRlRmllbGQoIGF0dHJpYnV0ZSwgYXR0cmlidXRlVXNhZ2UsIHRhcmdldCwgcHJvcGVydHlOYW1lICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICggdHlwZW9mKCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCApID09IFwib2JqZWN0XCIgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXguc2V0ID09IHVuZGVmaW5lZCAmJiBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleC5nZXQgPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlci5EZWNvcmF0ZU1ldGhvZCggYXR0cmlidXRlLCBhdHRyaWJ1dGVVc2FnZSwgdGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4LnZhbHVlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlci5EZWNvcmF0ZVByb3BlcnR5KCBhdHRyaWJ1dGUsIGF0dHJpYnV0ZVVzYWdlLCB0YXJnZXQsIHByb3BlcnR5TmFtZSApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDQXR0cmlidXRlRGVjb3JhdGVIZWxwZXIuRGVjb3JhdGVQYXJhbWV0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVXNhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZXhwb3J0IHZhciBBdHRyaWJ1dGUgPSBBdHRyaWJ1dGVEZWNvcmF0ZTtcclxuXHJcbiAgICBjbGFzcyBDQXR0cmlidXRlRGVjb3JhdGVIZWxwZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHVTeW1ib2xGb3JDb25zdHJ1YzogVVN5bWJvbCA9IFwiSmFzbWluZTo6U3lzdGVtOkF0dHJpYnV0ZVwiO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIERlY29yYXRlQ2xhc3MoXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogQ0F0dHJpYnV0ZSxcclxuICAgICAgICAgICAgdXNhZ2U6IENBdHRyaWJ1dGVVc2FnZUF0dHJpYnV0ZSxcclxuICAgICAgICAgICAgdGFyZ2V0Q29uc3RydWN0b3I6IFJlZmxlY3Rpb24uVHlwZUNvbnN0cnVjdG9yPCBvYmplY3QgPiApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDQXR0cmlidXRlRGVjb3JhdGVIZWxwZXIuQ2hlY2tUYXJnZXRWYWxpZE9uKCBhdHRyaWJ1dGUsIHVzYWdlLCBVQXR0cmlidXRlVGFyZ2V0LkNsYXNzICk7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JDbGFzcyggUmVmbGVjdGlvbi5UeXBlT2ZfXyggdGFyZ2V0Q29uc3RydWN0b3IucHJvdG90eXBlICksIFVBdHRyaWJ1dGVUYXJnZXQuQ2xhc3MgKTtcclxuICAgICAgICAgICAgTWV0YWRhdGEuQ29udGFpbmVyLkdldE9yQWRkQ29sbGVjdGlvbigga2V5ICkuQWRkQXR0cmlidXRlKCBhdHRyaWJ1dGUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRGVjb3JhdGVGaWVsZChcclxuICAgICAgICAgICAgYXR0cmlidXRlOiBDQXR0cmlidXRlLFxyXG4gICAgICAgICAgICB1c2FnZTogQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlLFxyXG4gICAgICAgICAgICB0YXJnZXRQcm90b3R5cGU6IFJlZmxlY3Rpb24uVHlwZVByb3RvdHlwZTwgb2JqZWN0ID4sXHJcbiAgICAgICAgICAgIGZpZWxkTmFtZTogc3RyaW5nIHwgc3ltYm9sICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENBdHRyaWJ1dGVEZWNvcmF0ZUhlbHBlci5DaGVja1RhcmdldFZhbGlkT24oIGF0dHJpYnV0ZSwgdXNhZ2UsIFVBdHRyaWJ1dGVUYXJnZXQuRmllbGQgKTtcclxuICAgICAgICAgICAgbGV0IGtleSA9IG5ldyBNZXRhZGF0YS5Db3JlLkNNZXRhZGF0YUtleUZvck5hbWVkKCBSZWZsZWN0aW9uLlR5cGVPZl9fKCB0YXJnZXRQcm90b3R5cGUgKSwgVUF0dHJpYnV0ZVRhcmdldC5GaWVsZCwgZmllbGROYW1lICk7XHJcbiAgICAgICAgICAgIE1ldGFkYXRhLkNvbnRhaW5lci5HZXRPckFkZENvbGxlY3Rpb24oIGtleSApLkFkZEF0dHJpYnV0ZSggYXR0cmlidXRlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIERlY29yYXRlUHJvcGVydHkoXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogQ0F0dHJpYnV0ZSxcclxuICAgICAgICAgICAgdXNhZ2U6IENBdHRyaWJ1dGVVc2FnZUF0dHJpYnV0ZSxcclxuICAgICAgICAgICAgdGFyZ2V0UHJvdG90eXBlOiBSZWZsZWN0aW9uLlR5cGVQcm90b3R5cGU8IG9iamVjdCA+LFxyXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHN0cmluZyB8IHN5bWJvbCApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDQXR0cmlidXRlRGVjb3JhdGVIZWxwZXIuQ2hlY2tUYXJnZXRWYWxpZE9uKCBhdHRyaWJ1dGUsIHVzYWdlLCBVQXR0cmlidXRlVGFyZ2V0LlByb3BlcnR5ICk7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSBuZXcgTWV0YWRhdGEuQ29yZS5DTWV0YWRhdGFLZXlGb3JOYW1lZCggUmVmbGVjdGlvbi5UeXBlT2ZfXyggdGFyZ2V0UHJvdG90eXBlICksIFVBdHRyaWJ1dGVUYXJnZXQuUHJvcGVydHksIHByb3BlcnR5TmFtZSApO1xyXG4gICAgICAgICAgICBNZXRhZGF0YS5Db250YWluZXIuR2V0T3JBZGRDb2xsZWN0aW9uKCBrZXkgKS5BZGRBdHRyaWJ1dGUoIGF0dHJpYnV0ZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBEZWNvcmF0ZU1ldGhvZChcclxuICAgICAgICAgICAgYXR0cmlidXRlOiBDQXR0cmlidXRlLFxyXG4gICAgICAgICAgICB1c2FnZTogQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlLFxyXG4gICAgICAgICAgICB0YXJnZXRQcm90b3R5cGU6IFJlZmxlY3Rpb24uVHlwZVByb3RvdHlwZTwgb2JqZWN0ID4sXHJcbiAgICAgICAgICAgIG1ldGhvZE5hbWU6IHN0cmluZyB8IHN5bWJvbCxcclxuICAgICAgICAgICAgbWV0aG9kOiBGdW5jdGlvbiApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDQXR0cmlidXRlRGVjb3JhdGVIZWxwZXIuQ2hlY2tUYXJnZXRWYWxpZE9uKCBhdHRyaWJ1dGUsIHVzYWdlLCBVQXR0cmlidXRlVGFyZ2V0Lk1ldGhvZCApO1xyXG4gICAgICAgICAgICBsZXQga2V5ID0gbmV3IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5Rm9yTmFtZWQoIFJlZmxlY3Rpb24uVHlwZU9mX18oIHRhcmdldFByb3RvdHlwZSApLCBVQXR0cmlidXRlVGFyZ2V0Lk1ldGhvZCwgbWV0aG9kTmFtZSApO1xyXG4gICAgICAgICAgICBNZXRhZGF0YS5Db250YWluZXIuR2V0T3JBZGRDb2xsZWN0aW9uKCBrZXkgKS5BZGRBdHRyaWJ1dGUoIGF0dHJpYnV0ZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBEZWNvcmF0ZVBhcmFtZXRlcihcclxuICAgICAgICAgICAgYXR0cmlidXRlOiBDQXR0cmlidXRlLFxyXG4gICAgICAgICAgICB1c2FnZTogQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlLFxyXG4gICAgICAgICAgICB0YXJnZXRQcm90b3R5cGU6IFJlZmxlY3Rpb24uVHlwZVByb3RvdHlwZTwgb2JqZWN0ID4sXHJcbiAgICAgICAgICAgIG1ldGhvZE5hbWU6IHN0cmluZyB8IHN5bWJvbCxcclxuICAgICAgICAgICAgcGFyYW1ldGVySW5kZXg6IG51bWJlcixcclxuICAgICAgICApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDQXR0cmlidXRlRGVjb3JhdGVIZWxwZXIuQ2hlY2tUYXJnZXRWYWxpZE9uKCBhdHRyaWJ1dGUsIHVzYWdlLCBVQXR0cmlidXRlVGFyZ2V0LlBhcmFtZXRlciApO1xyXG4gICAgICAgICAgICBsZXQga2V5ID0gbmV3IE1ldGFkYXRhLkNvcmUuQ01ldGFkYXRhS2V5Rm9yUGFyYW1ldGVyKCBSZWZsZWN0aW9uLlR5cGVPZl9fKCB0YXJnZXRQcm90b3R5cGUgKSwgVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIG1ldGhvZE5hbWUsIHBhcmFtZXRlckluZGV4ICk7XHJcbiAgICAgICAgICAgIE1ldGFkYXRhLkNvbnRhaW5lci5HZXRPckFkZENvbGxlY3Rpb24oIGtleSApLkFkZEF0dHJpYnV0ZSggYXR0cmlidXRlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENoZWNrVGFyZ2V0VmFsaWRPbiggYXR0cmlidXRlOiBDQXR0cmlidXRlLCB1c2FnZTogQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlLCB0YXJnZXQ6IFVBdHRyaWJ1dGVUYXJnZXQgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB1c2FnZSAhPSBudWxsICYmICh1c2FnZS5WYWxpZE9uICYgdGFyZ2V0KSAhPSB0YXJnZXQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIGBDYW4ndCB1c2UgJHthdHRyaWJ1dGUuY29uc3RydWN0b3IubmFtZX0gdG8gZGVjb3JhdGUgJHtVQXR0cmlidXRlVGFyZ2V0W3RhcmdldF19YCAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ0F0dHJpYnV0ZVVzYWdlQXR0cmlidXRlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQXR0cmlidXRlRGVjb3JhdGUudHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbVxyXG57XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHZhbGlkT24gXHJcbiAgICAgKiBAcGFyYW0gYWxsb3dNdWx0aXBsZSBcclxuICAgICAqIEBwYXJhbSBpbmhlcml0IFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQXR0cmlidXRlVXNhZ2UoIHZhbGlkT246IG51bWJlciwgYWxsb3dNdWx0aXBsZT86IGJvb2xlYW4sIGluaGVyaXQ/OiBib29sZWFuICk6IFVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yQ2xhc3NcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gQXR0cmlidXRlRGVjb3JhdGUoIG5ldyBDQXR0cmlidXRlVXNhZ2VBdHRyaWJ1dGUoIHZhbGlkT24sIGFsbG93TXVsdGlwbGUsIGluaGVyaXQgKSApO1xyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9VQXR0cmlidXRlVGFyZ2V0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NBdHRyaWJ1dGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQXR0cmlidXRlVXNhZ2UudHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIEBBdHRyaWJ1dGVVc2FnZSggVUF0dHJpYnV0ZVRhcmdldC5NZXRob2QgfCBVQXR0cmlidXRlVGFyZ2V0LkZpZWxkIHwgVUF0dHJpYnV0ZVRhcmdldC5Qcm9wZXJ0eSB8IFVBdHRyaWJ1dGVUYXJnZXQuUGFyYW1ldGVyLCBmYWxzZSwgZmFsc2UgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENEZWNsYXJpbmdUeXBlQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBtX3R5cGU6IElEZWxheVR5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgbV90eXBlc0dlbmVyaWM6IEFycmF5PCBJRGVsYXlUeXBlID4gPSBudWxsO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgbV9pc0dlbmVyaWM6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBtX3R5cGVzR2VuZXJpY1JlYWw6IEFycmF5PCBDVHlwZSA+ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCB0eXBlOiBJRGVsYXlUeXBlLCBnZW5lcmljVHlwZXM6IEFycmF5PCBJRGVsYXlUeXBlID4gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5tX3R5cGUgPSB0eXBlO1xyXG4gICAgICAgICAgICB0aGlzLm1fdHlwZXNHZW5lcmljID0gZ2VuZXJpY1R5cGVzO1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV90eXBlc0dlbmVyaWMgPT0gbnVsbCB8fCB0aGlzLm1fdHlwZXNHZW5lcmljLmxlbmd0aCA9PSAwIClcclxuICAgICAgICAgICAgICAgIHRoaXMubV9pc0dlbmVyaWMgPSBmYWxzZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2lzR2VuZXJpYyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IERlY2xhcmluZ1R5cGUoKTogQ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fdHlwZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBHZW5lcmljVHlwZXMoKTogQXJyYXk8IENUeXBlID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX2lzR2VuZXJpYyA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fdHlwZXNHZW5lcmljUmVhbCA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5tX3R5cGVzR2VuZXJpYy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBndCA9IHRoaXMubV90eXBlc0dlbmVyaWNbIGkgXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fdHlwZXNHZW5lcmljUmVhbC5wdXNoKCBndCgpICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV90eXBlc0dlbmVyaWNSZWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBJc0dlbmVyaWNUeXBlKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoIHRoaXMubV90eXBlc0dlbmVyaWMgPT0gdW5kZWZpbmVkIHx8IHRoaXMubV90eXBlc0dlbmVyaWMubGVuZ3RoID09IDAgKSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlo7DmmI7oo4XppbDlmahcclxuICAgICAqIFxyXG4gICAgICogKyDoo4XppbAgRmllbGQg5a2X5q6177ya5L+u6aWw5a2X5q6157G75Z6LXHJcbiAgICAgKiArIOijhemlsCBQcm9wZXJ0eSDlsZ7mgKfvvJrkv67ppbDlsZ7mgKfnmoTnsbvlnotcclxuICAgICAqICsg6KOF6aWwIE1ldGhvZCDmlrnms5XvvJrkv67ppbDmlrnms5XnmoTov5Tlm57lgLznsbvlnotcclxuICAgICAqICsg6KOF6aWwIFBhcmFtZXRlciDlj4LmlbDvvJrkv67ppbDmlrnms5XnmoTlj4LmlbDnsbvlnotcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHR5cGUgXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBEZWNsYXJpbmdUeXBlKCB0eXBlOiBDVHlwZSwgZ2VuZXJpY1R5cGVzPzogQ1R5cGVbXSApOiBVRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvckZpZWxkICYgVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JQcm9wZXJ0eSAmIFVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yTWV0aG9kICYgVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oIHRhcmdldDogYW55LCBtZW1iZXJOYW1lOiBzdHJpbmcsIGRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4PzogUHJvcGVydHlEZXNjcmlwdG9yIHwgbnVtYmVyIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdHlwZW9mKCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCApID09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mKCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCApID09IFwib2JqZWN0XCIgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBFbnVtZXJhYmxlKCB0YXJnZXQsIG1lbWJlck5hbWUsIGRlc2NyaXB0b3JPclBhcmFtZXRlckluZGV4ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHRlbXA6IEFycmF5PCBJRGVsYXlUeXBlID4gPSBBcnJheSgpO1xyXG4gICAgICAgICAgICBpZiAoIGdlbmVyaWNUeXBlcyAhPSBudWxsICYmIGdlbmVyaWNUeXBlcy5sZW5ndGggPiAwIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgZ2VuZXJpY1R5cGVzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGd0ID0gZ2VuZXJpY1R5cGVzWyBpIF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcC5wdXNoKCAoKSA9PiBndCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEF0dHJpYnV0ZURlY29yYXRlKCBuZXcgQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUoICgpID0+IHR5cGUsIHRlbXAgKSApKCB0YXJnZXQsIG1lbWJlck5hbWUsIDxhbnk+ZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXggKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlo7DmmI7oo4XppbDlmagt5bu25ZCOXHJcbiAgICAgKiBcclxuICAgICAqICsg6KOF6aWwIEZpZWxkIOWtl+aute+8muS/rumlsOWtl+auteexu+Wei1xyXG4gICAgICogKyDoo4XppbAgUHJvcGVydHkg5bGe5oCn77ya5L+u6aWw5bGe5oCn55qE57G75Z6LXHJcbiAgICAgKiArIOijhemlsCBNZXRob2Qg5pa55rOV77ya5L+u6aWw5pa55rOV55qE6L+U5Zue5YC857G75Z6LXHJcbiAgICAgKiArIOijhemlsCBQYXJhbWV0ZXIg5Y+C5pWw77ya5L+u6aWw5pa55rOV55qE5Y+C5pWw57G75Z6LXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB0eXBlIFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gRGVjbGFyaW5nVHlwZURlbGF5KCB0eXBlOiBJRGVsYXlUeXBlLCBnZW5lcmljVHlwZXM/OiBJRGVsYXlUeXBlW10gKTogVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JGaWVsZCAmIFVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yUHJvcGVydHkgJiBVRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0Zvck1ldGhvZCAmIFVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yUGFyYW1ldGVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCB0YXJnZXQ6IGFueSwgbWVtYmVyTmFtZTogc3RyaW5nLCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleD86IFByb3BlcnR5RGVzY3JpcHRvciB8IG51bWJlciApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHR5cGVvZiggZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXggKSA9PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiggZGVzY3JpcHRvck9yUGFyYW1ldGVySW5kZXggKSA9PSBcIm9iamVjdFwiIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRW51bWVyYWJsZSggdGFyZ2V0LCBtZW1iZXJOYW1lLCBkZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEF0dHJpYnV0ZURlY29yYXRlKCBuZXcgQ0RlY2xhcmluZ1R5cGVBdHRyaWJ1dGUoIHR5cGUsIGdlbmVyaWNUeXBlcyApICkoIHRhcmdldCwgbWVtYmVyTmFtZSwgPGFueT5kZXNjcmlwdG9yT3JQYXJhbWV0ZXJJbmRleCApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb25cclxue1xyXG4gICAgZXhwb3J0IGNvbnN0IFJlZmxlY3RGaWVsZHNLZXkgPSBcIkphc21pbmU6OlN5c3RlbTo6UmVmbGVjdDo6RmllbGRzXCI7XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEVudW1lcmFibGUoIHRhcmdldDogYW55LCBwcm9wZXJ0eU5hbWU6IHN0cmluZywgZGVzY3JpcHRvcj86IFByb3BlcnR5RGVzY3JpcHRvciApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBkZXNjcmlwdG9yID09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGZpZWxkc0Rlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvciA9IG51bGw7XHJcbiAgICAgICAgICAgIC8vIOajgOafpeaYr+WQpuWtmOWcqOebuOWQjOWQjeensOeahGZpZWxk5a2X5q61XHJcbiAgICAgICAgICAgIC8vIGxldCBwcm90b0Jhc2UgPSBSZWZsZWN0LmdldFByb3RvdHlwZU9mKCB0YXJnZXQgKTtcclxuICAgICAgICAgICAgLy8gd2hpbGUgKCBwcm90b0Jhc2UgKVxyXG4gICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoIHByb3RvQmFzZSA9PSBudWxsIClcclxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gICAgIGlmICggcHJvdG9CYXNlID09IE9iamVjdC5wcm90b3R5cGUgKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgIGZpZWxkc0Rlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggcHJvdG9CYXNlLCBSZWZsZWN0RmllbGRzS2V5ICk7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoIGZpZWxkc0Rlc2NyaXB0b3IgIT0gbnVsbCAmJiBmaWVsZHNEZXNjcmlwdG9yLnZhbHVlICE9IG51bGwgJiYgKCBwcm9wZXJ0eU5hbWUgaW4gZmllbGRzRGVzY3JpcHRvci52YWx1ZSApIClcclxuICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gICAgIHByb3RvQmFzZSA9IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YoIHByb3RvQmFzZSApO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICBmaWVsZHNEZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRhcmdldCwgUmVmbGVjdEZpZWxkc0tleSApO1xyXG4gICAgICAgICAgICBsZXQgZmllbGRzID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCBmaWVsZHNEZXNjcmlwdG9yID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZHMgPSB7fTtcclxuICAgICAgICAgICAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgUmVmbGVjdEZpZWxkc0tleSwgeyB2YWx1ZTogZmllbGRzLCBlbnVtZXJhYmxlOiB0cnVlIH0gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkcyA9IGZpZWxkc0Rlc2NyaXB0b3IudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmllbGRzWyBwcm9wZXJ0eU5hbWUgXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVUF0dHJpYnV0ZVRhcmdldC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9DQXR0cmlidXRlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0F0dHJpYnV0ZVVzYWdlLnRzXCIgLz5cclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uUmVmbGVjdGlvblxyXG57XHJcbiAgICBAQXR0cmlidXRlVXNhZ2UoIFVBdHRyaWJ1dGVUYXJnZXQuUGFyYW1ldGVyLCBmYWxzZSwgZmFsc2UgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENOYW1lZEF0dHJpYnV0ZSBleHRlbmRzIENBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fdGV4dDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCB0ZXh0OiBzdHJpbmcgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5tX3RleHQgPSB0ZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBUZXh0KCk6IHN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV90ZXh0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gTmFtZWQoIHRleHQ6IHN0cmluZyApOiBVRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvclBhcmFtZXRlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBBdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IENOYW1lZEF0dHJpYnV0ZSggdGV4dCApICk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb25cclxue1xyXG4gICAgQEF0dHJpYnV0ZVVzYWdlKCBVQXR0cmlidXRlVGFyZ2V0LkNsYXNzLCB0cnVlLCBmYWxzZSApXHJcbiAgICBjbGFzcyBDVHlwZU5pY2tuYW1lQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9uaWNrbmFtZTogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBuaWNrbmFtZTogc3RyaW5nIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9uaWNrbmFtZSA9IG5pY2tuYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBOaWNrbmFtZSgpOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fbmlja25hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFR5cGVOaWNrbmFtZSggbmlja25hbWU6IHN0cmluZyApOiBVRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvckNsYXNzXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIEF0dHJpYnV0ZURlY29yYXRlKCBuZXcgQ1R5cGVOaWNrbmFtZUF0dHJpYnV0ZSggbmlja25hbWUgKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ1R5cGVcclxuICAgIHtcclxuICAgICAgICBHZXROaWNrbmFtZXMoKTogQXJyYXk8IHN0cmluZyA+O1xyXG4gICAgICAgIEdldE5pY2tuYW1lKCk6IHN0cmluZztcclxuICAgIH07XHJcblxyXG5cclxuICAgIENUeXBlLnByb3RvdHlwZS5HZXROaWNrbmFtZXMgPSBmdW5jdGlvbigpOiBBcnJheTwgc3RyaW5nID5cclxuICAgIHtcclxuICAgICAgICBsZXQgbmlja25hbWVzID0gQXJyYXk8IHN0cmluZyA+KCk7XHJcbiAgICAgICAgbGV0IG5pY2tuYW1lQXR0cnMgPSB0aGlzLkdldEN1c3RvbUF0dHJpYnV0ZXMoIFR5cGVPZiggQ1R5cGVOaWNrbmFtZUF0dHJpYnV0ZSApLCBmYWxzZSApO1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IG5pY2tuYW1lQXR0cnMubGVuZ3RoOyBpICsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBuID0gbmlja25hbWVBdHRyc1sgaSBdO1xyXG4gICAgICAgICAgICBuaWNrbmFtZXMucHVzaCggbi5OaWNrbmFtZSApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuaWNrbmFtZXMucHVzaCggdGhpcy5HZXRKc0NvbnN0cnVjdG9yKCkubmFtZSApO1xyXG4gICAgICAgIHJldHVybiBuaWNrbmFtZXM7XHJcbiAgICB9XHJcblxyXG4gICAgQ1R5cGUucHJvdG90eXBlLkdldE5pY2tuYW1lID0gZnVuY3Rpb24oKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG5pY2tuYW1lQXR0ciA9IHRoaXMuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBUeXBlT2YoIENUeXBlTmlja25hbWVBdHRyaWJ1dGUgKSwgZmFsc2UgKTtcclxuICAgICAgICBpZiAoIG5pY2tuYW1lQXR0ciA9PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkdldEpzQ29uc3RydWN0b3IoKS5uYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmlja25hbWVBdHRyLk5pY2tuYW1lO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb25cclxue1xyXG4gICAgZXhwb3J0IGVudW0gVU1lbWJlclR5cGVzXHJcbiAgICB7XHJcbiAgICAgICAgQ29uc3RydWN0b3IgPSAxLFxyXG4gICAgICAgIEZpZWxkID0gMixcclxuICAgICAgICBNZXRob2QgPSA0LFxyXG4gICAgICAgIFByb3BlcnR5ID0gOCxcclxuICAgICAgICBUeXBlSW5mbyA9IDE2XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW1cclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIFRDYWxsYmFjazwgVCBleHRlbmRzICguLi5hcmdzOiBhbnkpID0+IGFueSA+XHJcbiAgICB7XHJcbiAgICAgICAgLy8gaGFuZGxlcjogYW55O1xyXG4gICAgICAgIC8vIHByb2Nlc3M6IFQ7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9leGVjdXRhYmxlOiBUO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHByb2Nlc3M/OiBULCBoYW5kbGVyPzogYW55IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucHJvY2VzcyA9IHByb2Nlc3M7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgICAgIHRoaXMubV9leGVjdXRhYmxlID0gcHJvY2Vzcy5iaW5kKCBoYW5kbGVyICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwdWJsaWMgZ2V0IEV4ZWN1dGUoKTogVFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRoaXMubV9leGVjdXRhYmxlO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgcHVibGljIEV4ZWN1dGUoIC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4gKTogUmV0dXJuVHlwZTxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9leGVjdXRhYmxlKCAuLi48YW55W10+YXJncyApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZXhwb3J0IHR5cGUgVENhbGxiYWNrT3JGdW5jdGlvbjwgVCBleHRlbmRzICguLi5hcmdzOiBhbnkpID0+IGFueSA+ID0gVCB8IFRDYWxsYmFjazwgVCA+IDtcclxuXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRDYWxsYmFja0FycmF5PCBUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueSkgPT4gYW55ID5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgY2FsbGJhY2tzOiBUQ2FsbGJhY2s8IFQgPltdID0gW107XHJcblxyXG4gICAgICAgIHB1YmxpYyBBZGQoIGNhbGxiYWNrOiBUQ2FsbGJhY2tPckZ1bmN0aW9uPCBUID4gfCBBcnJheTwgVENhbGxiYWNrT3JGdW5jdGlvbjwgVCA+ID4gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBjYWxsYmFjayBpbnN0YW5jZW9mIEFycmF5IClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgY2FsbGJhY2subGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2IgPSBjYWxsYmFja1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mKCBjYiApID09IFwiZnVuY3Rpb25cIiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goIG5ldyBUQ2FsbGJhY2soIGNiICkgKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goIGNiICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YoIGNhbGxiYWNrICkgPT0gXCJmdW5jdGlvblwiIClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKCBuZXcgVENhbGxiYWNrKCBjYWxsYmFjayApICk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja3MucHVzaCggY2FsbGJhY2sgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEV4ZWN1dGUoIC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4gKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLmNhbGxiYWNrcyAhPSBudWxsICYmIHRoaXMuY2FsbGJhY2tzLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLmNhbGxiYWNrcy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYiA9IHRoaXMuY2FsbGJhY2tzWyBpIF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBjYiA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2IuRXhlY3V0ZSggLi4uYXJncyApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQ29weSgpOiBUQ2FsbGJhY2tBcnJheTwgVCA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY29weWNhdCA9IG5ldyBUQ2FsbGJhY2tBcnJheTwgVCA+KCk7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMuY2FsbGJhY2tzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjYiA9IHRoaXMuY2FsbGJhY2tzWyBpIF07XHJcbiAgICAgICAgICAgICAgICBjb3B5Y2F0LmNhbGxiYWNrcy5wdXNoKCBjYiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb3B5Y2F0O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmludGVyZmFjZSBPYmplY3Rcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiAqKuKHqSDmi5PlsZXmlrnms5UqKlxyXG4gICAgICogXHJcbiAgICAgKiDmnoTlu7rlm57osIPlh73mlbDlr7nosaFcclxuICAgICAqIEBwYXJhbSBtZXRob2Qg5pa55rOVIFxyXG4gICAgICovXHJcbiAgICBfX0NhbGxiYWNrPCBUIGV4dGVuZHMgKCAuLi5hcmdzOiBhbnlbXSApID0+IGFueSA+KCBtZXRob2Q6IFQgKTogaWJlcmJhci5TeXN0ZW0uVENhbGxiYWNrPCBUID47XHJcbn1cclxuXHJcbk9iamVjdC5wcm90b3R5cGUuX19DYWxsYmFjayA9IGZ1bmN0aW9uPCBUIGV4dGVuZHMgKCAuLi5hcmdzOiBhbnlbXSApID0+IGFueSA+KCBtZXRob2Q6IFQgKTogaWJlcmJhci5TeXN0ZW0uVENhbGxiYWNrPCBUID5cclxue1xyXG4gICAgcmV0dXJuIG5ldyBpYmVyYmFyLlN5c3RlbS5UQ2FsbGJhY2soIG1ldGhvZCwgdGhpcyApO1xyXG59XHJcblxyXG5SZWZsZWN0LmRlZmluZVByb3BlcnR5KCBPYmplY3QucHJvdG90eXBlLCBcIl9fQ2FsbGJhY2tcIiwgeyBlbnVtZXJhYmxlOiBmYWxzZSB9ICk7IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW1cclxue1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGR5bmFtaWNfY2FzdDxUIGV4dGVuZHMgb2JqZWN0PiggbzogYW55LCB0OiBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uLlR5cGVDb25zdHJ1Y3RvcjwgVCA+IClcclxuICAgIHtcclxuICAgICAgICBpZiAoIG8gaW5zdGFuY2VvZiB0IClcclxuICAgICAgICAgICAgcmV0dXJuIDxUPm87XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbmRlY2xhcmUgaW50ZXJmYWNlIEFycmF5PFQ+XHJcbntcclxuICAgIEZpcnN0T3JEZWZhdWx0KCBwcmVkaWNhdGU/OiAoIGU6IFQsIGluZGV4OiBudW1iZXIgKSA9PiBib29sZWFuICk6IFQ7XHJcbiAgICBXaGVyZSggcHJlZGljYXRlOiAoIGU6IFQsIGluZGV4OiBudW1iZXIgKSA9PiBib29sZWFuICk6IEFycmF5PFQ+O1xyXG4gICAgUmVtb3ZlQXQoIGluZGV4OiBudW1iZXIgKTogQXJyYXk8VD47XHJcbiAgICBSZW1vdmU8VD4oIGVsZW1lbnQ6IFQgKTogQXJyYXk8VD47XHJcbiAgICBSZW1vdmVXaGVyZTxUPiggcHJlZGljYXRlOiAoIGU6IFQsIGluZGV4OiBudW1iZXIgKSA9PiBib29sZWFuICk6IEFycmF5PFQ+O1xyXG59XHJcblxyXG5kZWNsYXJlIGludGVyZmFjZSBSZWFkb25seUFycmF5PFQ+XHJcbntcclxuICAgIEZpcnN0T3JEZWZhdWx0KCBwcmVkaWNhdGU/OiAoIGU6IFQsIGluZGV4OiBudW1iZXIgKSA9PiBib29sZWFuICk6IFQ7XHJcbiAgICBXaGVyZSggcHJlZGljYXRlOiAoIGU6IFQsIGluZGV4OiBudW1iZXIgKSA9PiBib29sZWFuICk6IEFycmF5PFQ+O1xyXG4gICAgU2FmZUZvckVhY2goIGZ1bmM6ICggZTogVCwgaW5kZXg6IG51bWJlciApID0+IGJvb2xlYW4gKTogdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIEFycmF5Q29uc3RydWN0b3Jcclxue1xyXG4gICAgY29udmVydEFsbDwgVElucHV0LCBUT3V0cHV0ID4oIGFycmF5OiBBcnJheTwgVElucHV0ID4sIGNvbnZlcnRlcjogKCBpbnB1dDogVElucHV0ICkgPT4gVE91dHB1dCApOiBBcnJheTwgVE91dHB1dCA+O1xyXG59XHJcblxyXG5BcnJheS5wcm90b3R5cGUuRmlyc3RPckRlZmF1bHQgPSBmdW5jdGlvbjxUPiggcHJlZGljYXRlPzogKCBlOiBULCBpbmRleDogbnVtYmVyICkgPT4gYm9vbGVhbiApOiBUXHJcbntcclxuICAgIGlmICggcHJlZGljYXRlID09IG51bGwgKVxyXG4gICAge1xyXG4gICAgICAgIGlmICggdGhpcy5sZW5ndGggPT0gMCApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiB0aGlzWyAwIF07XHJcbiAgICB9XHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArKyApXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBwcmVkaWNhdGUoIHRoaXNbIGkgXSwgaSApIClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbIGkgXTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5BcnJheS5wcm90b3R5cGUuV2hlcmUgPSBmdW5jdGlvbjxUPiggcHJlZGljYXRlOiAoIGU6IFQsIGluZGV4OiBudW1iZXIgKSA9PiBib29sZWFuICk6IEFycmF5PFQ+XHJcbntcclxuICAgIGxldCB0ZW1wID0gW107XHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArKyApXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBwcmVkaWNhdGUoIHRoaXNbIGkgXSwgaSApIClcclxuICAgICAgICAgICAgdGVtcC5wdXNoKCB0aGlzWyBpIF0gKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZW1wO1xyXG59XHJcblxyXG5BcnJheS5wcm90b3R5cGUuUmVtb3ZlQXQgPSBmdW5jdGlvbiggdGhpczogQXJyYXk8YW55PiwgaW5kZXg6IG51bWJlciApOiBBcnJheTxhbnk+XHJcbntcclxuICAgIHJldHVybiB0aGlzLnNwbGljZSggaW5kZXgsIDEgKTtcclxufVxyXG5cclxuQXJyYXkucHJvdG90eXBlLlJlbW92ZSA9IGZ1bmN0aW9uPFQ+KCB0aGlzOiBBcnJheTxUPiwgZWxlbWVudDogVCApOiBBcnJheTxUPlxyXG57XHJcbiAgICByZXR1cm4gdGhpcy5XaGVyZSggZSA9PiBlICE9IGVsZW1lbnQgKTtcclxufVxyXG5cclxuQXJyYXkucHJvdG90eXBlLlJlbW92ZVdoZXJlID0gZnVuY3Rpb248VD4oIHRoaXM6IEFycmF5PFQ+LCBwcmVkaWNhdGU6ICggZTogVCwgaW5kZXg6IG51bWJlciApID0+IGJvb2xlYW4gKTogQXJyYXk8IFQgPlxyXG57XHJcbiAgICBsZXQgdGVtcCA9IFtdO1xyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKysgKVxyXG4gICAge1xyXG4gICAgICAgIGlmICggcHJlZGljYXRlKCB0aGlzWyBpIF0sIGkgKSA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgIHRlbXAucHVzaCggdGhpc1sgaSBdICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGVtcDtcclxufVxyXG5cclxuQXJyYXkuY29udmVydEFsbCA9IGZ1bmN0aW9uPCBUSW5wdXQsIFRPdXRwdXQgPiggYXJyYXk6IEFycmF5PCBUSW5wdXQgPiwgY29udmVydGVyOiAoIGlucHV0OiBUSW5wdXQgKSA9PiBUT3V0cHV0ICk6IEFycmF5PCBUT3V0cHV0ID5cclxue1xyXG4gICAgbGV0IGFycmF5T3V0cHV0OiBBcnJheTwgVE91dHB1dCA+ID0gQXJyYXkoKTtcclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArKyApXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGEgPSBhcnJheVsgaSBdO1xyXG4gICAgICAgIGFycmF5T3V0cHV0LnB1c2goIGNvbnZlcnRlciggYSApICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXlPdXRwdXQ7XHJcbn1cclxuXHJcbiIsIlxyXG5cclxuLy8gbmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtXHJcbi8vIHtcclxuLy8gICAgIGV4cG9ydCB0eXBlIE91dFBhcmFtZXRlcjwgVCA+ID0geyBfX291dDogVCB9O1xyXG4vLyB9IiwiXHJcbi8vIG5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbVxyXG4vLyB7XHJcbi8vICAgICBleHBvcnQgdHlwZSBSZWZQYXJhbWV0ZXI8IFQgPiA9IHsgdmFsdWU6IFQgfTtcclxuLy8gfVxyXG4iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vUmVmbGVjdGlvbi9UeXBlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vUmVmbGVjdGlvbi9EZWNsYXJpbmdUeXBlLnRzXCIgLz5cclxuXHJcbmNvbnN0IFR5cGVPZiA9IGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mO1xyXG5jb25zdCBUeXBlT2ZEZWxheSA9IGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mRGVsYXk7XHJcbmNvbnN0IEdldE9iamVjdFR5cGUgPSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uLkdldE9iamVjdFR5cGU7XHJcbmNvbnN0IERlY2xhcmluZ1R5cGUgPSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uLkRlY2xhcmluZ1R5cGU7XHJcbmNvbnN0IERlY2xhcmluZ1R5cGVEZWxheSA9IGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb24uRGVjbGFyaW5nVHlwZURlbGF5O1xyXG5jb25zdCBfX0NhbGxiYWNrID0gaWJlcmJhci5TeXN0ZW0uX19DYWxsYmFjaztcclxuY29uc3QgQXV0b1JlZmxlY3RNZXRhZGF0YV9Db25zdHJ1Y3RvciA9IGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb24uQXV0b1JlZmxlY3RNZXRhZGF0YV9Db25zdHJ1Y3RvcjtcclxuY29uc3QgQXV0b1JlZmxlY3RNZXRhZGF0YV9GaWVsZCA9IGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb24uQXV0b1JlZmxlY3RNZXRhZGF0YV9GaWVsZDtcclxuY29uc3QgQXV0b1JlZmxlY3RNZXRhZGF0YV9Qcm9wZXJ0eSA9IGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb24uQXV0b1JlZmxlY3RNZXRhZGF0YV9Qcm9wZXJ0eTtcclxuY29uc3QgQXV0b1JlZmxlY3RNZXRhZGF0YV9NZXRob2QgPSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uLkF1dG9SZWZsZWN0TWV0YWRhdGFfTWV0aG9kOyIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWNcclxue1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJRGljdGlvbmFyeTwgVEtleSwgVFZhbHVlID5cclxuICAgIHtcclxuICAgICAgICBBZGQoIGtleTogVEtleSwgdmFsdWU6IFRWYWx1ZSApOiB2b2lkO1xyXG4gICAgICAgIENvbnRhaW5LZXkoIGtleTogVEtleSApOiBib29sZWFuO1xyXG4gICAgICAgIFJlbW92ZSgga2V5OiBUS2V5ICk6IHZvaWQ7XHJcbiAgICAgICAgR2V0KCBrZXk6IFRLZXkgKTogVFZhbHVlO1xyXG4gICAgICAgIENsZWFyKCk6IHZvaWQ7XHJcbiAgICAgICAgRWFjaCggcHJvY2VzczogU3lzdGVtLlRDYWxsYmFjazwgKCBrZXk6IFRLZXksIHZhbHVlOiBUVmFsdWUgKSA9PiB2b2lkID4gKTogdm9pZDtcclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUVxdWFsaXR5Q29tcGFyZXI8IFQgPlxyXG4gICAge1xyXG4gICAgICAgIEVxdWFscyggYTogVCwgYjogVCApOiBib29sZWFuO1xyXG4gICAgfVxyXG59IiwiIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uTWV0YWRhdGFcclxue1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJTWV0YWRhdGFDb2xsZWN0aW9uIGV4dGVuZHMgSU1ldGFkYXRhQ29sbGVjdGlvblJlYWRvbmx5XHJcbiAgICB7XHJcbiAgICAgICAgQWRkQXR0cmlidXRlKCBhdHRyaWJ1dGU6IENBdHRyaWJ1dGUgKTogdm9pZFxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLk1ldGFkYXRhXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSU1ldGFkYXRhQ29sbGVjdGlvblJlYWRvbmx5XHJcbiAgICB7XHJcbiAgICAgICAgR2V0QXR0cmlidXRlT25lPCBUIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVCA+ICk6IFQ7XHJcblxyXG4gICAgICAgIEdldEF0dHJpYnV0ZXM8IFQgZXh0ZW5kcyBDQXR0cmlidXRlID4oIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBUID4gKTogVFtdO1xyXG5cclxuICAgICAgICBHZXRBdHRyaWJ1dGVzQWxsKCk6IENBdHRyaWJ1dGVbXTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtLk1ldGFkYXRhXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSU1ldGFkYXRhQ29udGFpbmVyXHJcbiAgICB7XHJcbiAgICAgICAgR2V0T3JBZGRDb2xsZWN0aW9uKCBrZXk6IENvcmUuQ01ldGFkYXRhS2V5ICk6IElNZXRhZGF0YUNvbGxlY3Rpb247XHJcblxyXG4gICAgICAgIEdldENvbGxlY3Rpb24oIGtleTogQ29yZS5DTWV0YWRhdGFLZXkgKTogSU1ldGFkYXRhQ29sbGVjdGlvblJlYWRvbmx5O1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW0uTWV0YWRhdGEuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElNZXRhZGF0YVJlZ2lzdHJ5XHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbS5SZWZsZWN0aW9uXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbUF0dHJpYnV0ZVByb3ZpZGVyXHJcbiAgICB7XHJcbiAgICAgICAgR2V0Q3VzdG9tQXR0cmlidXRlT25lPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KFxyXG4gICAgICAgICAgICBhdHRyVHlwZTogQ1R5cGU8IFRBdHRyaWJ1dGUgPixcclxuICAgICAgICAgICAgaW5oZXJpdDogYm9vbGVhblxyXG4gICAgICAgICk6IFRBdHRyaWJ1dGU7XHJcblxyXG4gICAgICAgIEdldEN1c3RvbUF0dHJpYnV0ZXM8IFRBdHRyaWJ1dGUgZXh0ZW5kcyBDQXR0cmlidXRlID4oXHJcbiAgICAgICAgICAgIGF0dHJUeXBlOiBDVHlwZTwgVEF0dHJpYnV0ZSA+LFxyXG4gICAgICAgICAgICBpbmhlcml0OiBib29sZWFuXHJcbiAgICAgICAgKTogVEF0dHJpYnV0ZVtdO1xyXG5cclxuICAgICAgICBHZXRDdXN0b21BdHRyaWJ1dGVzQWxsKCk6IENBdHRyaWJ1dGVbXTtcclxuXHJcbiAgICAgICAgSXNEZWZpbmVkPCBUQXR0cmlidXRlIGV4dGVuZHMgQ0F0dHJpYnV0ZSA+KFxyXG4gICAgICAgICAgICBhdHRyVHlwZTogQ1R5cGU8IFRBdHRyaWJ1dGUgPixcclxuICAgICAgICAgICAgaW5oZXJpdDogYm9vbGVhblxyXG4gICAgICAgICk6IGJvb2xlYW47XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbVxyXG57XHJcbiAgICBleHBvcnQgdHlwZSBBY3Rpb248IFQgPiA9IFRDYWxsYmFjazwgKCB0OiBUICkgPT4gdm9pZCA+O1xyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW1cclxue1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJRGlzcG9zYWJsZVxyXG4gICAge1xyXG4gICAgICAgIERpc3Bvc2UoKTogdm9pZDtcclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuU3lzdGVtXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUVxdWF0YWJsZTxUPlxyXG4gICAge1xyXG4gICAgICAgIEVxdWFscyggb3RoZXI6IFQgKTogYm9vbGVhbjtcclxuICAgIH1cclxufSIsIlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLlN5c3RlbVxyXG57XHJcbiAgICBleHBvcnQgdHlwZSBVU3ltYm9sID0gc3RyaW5nIHwgc3ltYm9sIHwgbnVtYmVyO1xyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5TeXN0ZW1cclxue1xyXG4gICAgZXhwb3J0IHR5cGUgVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JDbGFzcyA9IENsYXNzRGVjb3JhdG9yO1xyXG4gICAgZXhwb3J0IHR5cGUgVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JGaWVsZCA9IFByb3BlcnR5RGVjb3JhdG9yO1xyXG4gICAgZXhwb3J0IHR5cGUgVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JNZXRob2QgPSBNZXRob2REZWNvcmF0b3I7XHJcbiAgICBleHBvcnQgdHlwZSBVRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvclBhcmFtZXRlciA9IFBhcmFtZXRlckRlY29yYXRvcjtcclxuICAgIGV4cG9ydCB0eXBlIFVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yUHJvcGVydHkgPSBNZXRob2REZWNvcmF0b3I7XHJcbiAgICBleHBvcnQgdHlwZSBVRGVjb3JhdG9yRnVuY3Rpb25UeXBlID1cclxuICAgICAgICBVRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvckNsYXNzICZcclxuICAgICAgICBVRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvckZpZWxkICZcclxuICAgICAgICBVRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0Zvck1ldGhvZCAmXHJcbiAgICAgICAgVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JQYXJhbWV0ZXIgJlxyXG4gICAgICAgIFVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yUHJvcGVydHk7XHJcbn0iXSwic291cmNlUm9vdCI6Ikc6XFxDb2RlR2l0XFxUeXBlc2NyaXB0QXV0b2ZhY1xcYmluXFxTeXN0ZW0ifQ==

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDb250YWluZXJCdWlsZGVyLnRzIiwiQ0luamVjdExpZmV0aW1lU2NvcGVBdHRyaWJ1dGUudHMiLCJDTW9kdWxlLnRzIiwiQ29yZS9DUGFyYW1ldGVyLnRzIiwiQ29yZS9DQ29uc3RhbnRQYXJhbWV0ZXIudHMiLCJDTmFtZWRQYXJhbWV0ZXIudHMiLCJDUG9zaXRpb25hbFBhcmFtZXRlci50cyIsIkNUeXBlZFBhcmFtZXRlci50cyIsIkluamVjdGlvbi50cyIsIktleS50cyIsIlByb3ZpZGVyLnRzIiwiUmVzb2x1dGlvbkV4dGVuc2lvbnMudHMiLCJBY3RpdmF0b3JzL0NJbnN0YW5jZUFjdGl2YXRvci50cyIsIkFjdGl2YXRvcnMvRGVsZWdhdGUvQ0RlbGVnYXRlQWN0aXZhdG9yLnRzIiwiQWN0aXZhdG9ycy9Qcm92aWRlZEluc3RhbmNlL0NQcm92aWRlZEluc3RhbmNlQWN0aXZhdG9yLnRzIiwiQWN0aXZhdG9ycy9SZWZsZWN0aW9uL0NBdXRvd2lyaW5nUGFyYW1ldGVyLnRzIiwiQWN0aXZhdG9ycy9SZWZsZWN0aW9uL0NBdXRvd2lyaW5nUHJvcGVydHlJbmplY3Rvci50cyIsIkFjdGl2YXRvcnMvUmVmbGVjdGlvbi9DQ29uc3RydWN0b3JQYXJhbWV0ZXJCaW5kaW5nLnRzIiwiQWN0aXZhdG9ycy9SZWZsZWN0aW9uL0NEZWZhdWx0VmFsdWVQYXJhbWV0ZXIudHMiLCJBY3RpdmF0b3JzL1JlZmxlY3Rpb24vQ1JlZmxlY3Rpb25BY3RpdmF0b3IudHMiLCJCdWlsZGVyL0NSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YS50cyIsIkJ1aWxkZXIvQ0NvbmNyZXRlUmVmbGVjdGlvbkFjdGl2YXRvckRhdGEudHMiLCJCdWlsZGVyL0NEZWZlcnJlZENhbGxiYWNrLnRzIiwiQnVpbGRlci9DUmVnaXN0cmF0aW9uQnVpbGRlci50cyIsIkJ1aWxkZXIvQ1JlZ2lzdHJhdGlvbkJ1aWxkZXJIZWxwZXIudHMiLCJCdWlsZGVyL0NSZWdpc3RyYXRpb25EYXRhLnRzIiwiQnVpbGRlci9DU2Nhbm5pbmdBY3RpdmF0b3JEYXRhLnRzIiwiQnVpbGRlci9DU2ltcGxlQWN0aXZhdG9yRGF0YS50cyIsIkJ1aWxkZXIvQ1NpbmdsZVJlZ2lzdHJhdGlvblN0eWxlLnRzIiwiQnVpbGRlci9JUmVnaXN0cmF0aW9uQnVpbGRlci50cyIsIkNvcmUvQ0FjdGl2YXRpbmdFdmVudEFyZ3MudHMiLCJDb3JlL0NDb250YWluZXIudHMiLCJDb3JlL0NEZWZhdWx0UHJvcGVydHlTZWxlY3Rvci50cyIsIkNvcmUvQ0RlbGVnYXRlUHJvcGVydHlTZWxlY3Rvci50cyIsIkNvcmUvQ0Rpc3Bvc2VyLnRzIiwiQ29yZS9DU2VydmljZS50cyIsIkNvcmUvQ0tleWVkU2VydmljZS50cyIsIkNvcmUvQ0xpZmV0aW1lU2NvcGVTZXJ2aWNlLnRzIiwiQ29yZS9DTmFtZWRQcm9wZXJ0eVBhcmFtZXRlci50cyIsIkNvcmUvQ1Jlc29sdmVkUGFyYW1ldGVyLnRzIiwiQ29yZS9DU2VydmljZUVxdWFsaXR5Q29tcGFyZXIudHMiLCJDb3JlL0NUeXBlZFNlcnZpY2UudHMiLCJDb3JlL0dlbklELnRzIiwiQ29yZS9VSW5zdGFuY2VTaGFyaW5nLnRzIiwiQ29yZS9MaWZldGltZS9DQ3VycmVudFNjb3BlTGlmZXRpbWUudHMiLCJDb3JlL0xpZmV0aW1lL0NMaWZldGltZVNjb3BlLnRzIiwiQ29yZS9MaWZldGltZS9DTWF0Y2hpbmdTY29wZUxpZmV0aW1lLnRzIiwiQ29yZS9MaWZldGltZS9DUm9vdFNjb3BlTGlmZXRpbWUudHMiLCJDb3JlL1JlZ2lzdHJhdGlvbi9DQ29tcG9uZW50UmVnaXN0cmF0aW9uLnRzIiwiQ29yZS9SZWdpc3RyYXRpb24vQ0NvbXBvbmVudFJlZ2lzdHJ5LnRzIiwiQ29yZS9SZWdpc3RyYXRpb24vQ1NlcnZpY2VSZWdpc3RyYXRpb25JbmZvLnRzIiwiQ29yZS9SZXNvbHZpbmcvQ0luc3RhbmNlTG9va3VwLnRzIiwiQ29yZS9SZXNvbHZpbmcvQ1Jlc29sdmVPcGVyYXRpb24udHMiLCJGZWF0dXJlcy9TY2FubmluZy9DU2Nhbm5pbmdSZWdpc3RyYXRpb25FeHRlbnNpb25zLnRzIiwiSUNvbXBvbmVudENvbnRleHQudHMiLCJJQ29udGFpbmVyLnRzIiwiSUxpZmV0aW1lU2NvcGUudHMiLCJVTGlmZXRpbWVTY29wZVRhZ1R5cGUudHMiLCJCdWlsZGVyL0lBY3RpdmF0b3JEYXRhLnRzIiwiQnVpbGRlci9JQ29uY3JldGVBY3RpdmF0b3JEYXRhLnRzIiwiQ29yZS9JQWN0aXZhdGluZ0V2ZW50QXJncy50cyIsIkNvcmUvSUNvbXBvbmVudExpZmV0aW1lLnRzIiwiQ29yZS9JQ29tcG9uZW50UmVnaXN0cmF0aW9uLnRzIiwiQ29yZS9JQ29tcG9uZW50UmVnaXN0cnkudHMiLCJDb3JlL0lEaXNwb3Nlci50cyIsIkNvcmUvSUluc3RhbmNlQWN0aXZhdG9yLnRzIiwiQ29yZS9JUHJvcGVydHlTZWxlY3Rvci50cyIsIkNvcmUvSVJlZ2lzdHJhdGlvblNvdXJjZS50cyIsIkNvcmUvSVNlcnZpY2VXaXRoVHlwZS50cyIsIkNvcmUvSVNoYXJpbmdMaWZldGltZVNjb3BlLnRzIiwiQ29yZS9VQ2FsbGJhY2tBY3RpdmF0aW5nLnRzIiwiQ29yZS9SZXNvbHZpbmcvSUluc3RhbmNlTG9va3VwLnRzIiwiQ29yZS9SZXNvbHZpbmcvSVJlc29sdXRpb25FeHRlbnNpb24udHMiLCJDb3JlL1Jlc29sdmluZy9JUmVzb2x2ZU9wZXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsSUFBVSxPQUFPLENBNEdoQjtBQTVHRCxXQUFVLE9BQU87SUFBQyxJQUFBLE9BQU8sQ0E0R3hCO0lBNUdpQixXQUFBLE9BQU87UUFFckIsTUFBYSxpQkFBaUI7WUFBOUI7Z0JBRVksZUFBVSxHQUFZLEtBQUssQ0FBQztnQkFDbkIsNkJBQXdCLEdBQXVDLEtBQUssRUFBRSxDQUFDO1lBc0c1RixDQUFDO1lBcEdVLFFBQVEsQ0FDWCxJQUFrQyxFQUNsQyxRQUFvRjtnQkFHcEYsSUFBSSxFQUFFLEdBQUcsSUFBSSxRQUFBLE9BQU8s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WyJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWNcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENDb250YWluZXJCdWlsZGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBtX3dhc0J1aWx0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2NvbmZpZ3VyYXRpb25DYWxsYmFja3M6IEFycmF5PCBCdWlsZGVyLkNEZWZlcnJlZENhbGxiYWNrID4gPSBBcnJheSgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgUmVnaXN0ZXI8IFQgZXh0ZW5kcyBvYmplY3QgPihcclxuICAgICAgICAgICAgdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IFQgPixcclxuICAgICAgICAgICAgZGVsZWdhdGU6IFN5c3RlbS5UQ2FsbGJhY2tPckZ1bmN0aW9uPCBBY3RpdmF0b3JzLkRlbGVnYXRlLlVBY3RpdmF0aW9uRnVuY3Rpb248IFQgPiA+XHJcbiAgICAgICAgKTogQnVpbGRlci5JUmVnaXN0cmF0aW9uQnVpbGRlcjwgVCA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmIgPSBuZXcgQnVpbGRlci5DUmVnaXN0cmF0aW9uQnVpbGRlcihcclxuICAgICAgICAgICAgICAgIG5ldyBDb3JlLkNUeXBlZFNlcnZpY2UoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggT2JqZWN0ICkgKSxcclxuICAgICAgICAgICAgICAgIG5ldyBCdWlsZGVyLkNTaW1wbGVBY3RpdmF0b3JEYXRhKCBuZXcgQWN0aXZhdG9ycy5EZWxlZ2F0ZS5DRGVsZWdhdGVBY3RpdmF0b3IoIHR5cGUsIGRlbGVnYXRlICkgKSxcclxuICAgICAgICAgICAgICAgIG5ldyBCdWlsZGVyLkNTaW5nbGVSZWdpc3RyYXRpb25TdHlsZSgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJiLlJlZ2lzdGVyRGF0YS5EZWZlcnJlZENhbGxiYWNrID0gdGhpcy5SZWdpc3RlckNhbGxiYWNrKCBTeXN0ZW0uX19DYWxsYmFjayggZnVuY3Rpb24oIGNyIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQnVpbGRlci5DUmVnaXN0cmF0aW9uQnVpbGRlckhlbHBlci5SZWdpc3RlclNpbmdsZUNvbXBvbmVudCggY3IsIHJiICk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFJlZ2lzdGVyVHlwZTwgVCBleHRlbmRzIG9iamVjdCA+KCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVCA+ICk6IEJ1aWxkZXIuSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8IFQgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJiID0gbmV3IEJ1aWxkZXIuQ1JlZ2lzdHJhdGlvbkJ1aWxkZXIoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ29yZS5DVHlwZWRTZXJ2aWNlKCB0eXBlICksXHJcbiAgICAgICAgICAgICAgICBuZXcgQnVpbGRlci5DQ29uY3JldGVSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YSggdHlwZSApLFxyXG4gICAgICAgICAgICAgICAgbmV3IEJ1aWxkZXIuQ1NpbmdsZVJlZ2lzdHJhdGlvblN0eWxlKCkgKTtcclxuICAgICAgICAgICAgcmIuUmVnaXN0ZXJEYXRhLkRlZmVycmVkQ2FsbGJhY2sgPSB0aGlzLlJlZ2lzdGVyQ2FsbGJhY2soIFN5c3RlbS5fX0NhbGxiYWNrKCBmdW5jdGlvbiggY3IgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBCdWlsZGVyLkNSZWdpc3RyYXRpb25CdWlsZGVySGVscGVyLlJlZ2lzdGVyU2luZ2xlQ29tcG9uZW50KCBjciwgcmIgKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUmVnaXN0ZXJJbnN0YW5jZTwgVCBleHRlbmRzIG9iamVjdCA+KCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVCA+LCBpbnN0YW5jZTogVCApOiBCdWlsZGVyLklSZWdpc3RyYXRpb25CdWlsZGVyPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZhdG9yID0gbmV3IEFjdGl2YXRvcnMuUHJvdmlkZWRJbnN0YW5jZS5DUHJvdmlkZWRJbnN0YW5jZUFjdGl2YXRvciggaW5zdGFuY2UgKTtcclxuICAgICAgICAgICAgbGV0IHJiID0gbmV3IEJ1aWxkZXIuQ1JlZ2lzdHJhdGlvbkJ1aWxkZXIoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ29yZS5DVHlwZWRTZXJ2aWNlKCB0eXBlICksXHJcbiAgICAgICAgICAgICAgICBuZXcgQnVpbGRlci5DU2ltcGxlQWN0aXZhdG9yRGF0YSggYWN0aXZhdG9yICksXHJcbiAgICAgICAgICAgICAgICBuZXcgQnVpbGRlci5DU2luZ2xlUmVnaXN0cmF0aW9uU3R5bGUoKSApO1xyXG4gICAgICAgICAgICByYi5TaW5nbGVJbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICByYi5SZWdpc3RlckRhdGEuRGVmZXJyZWRDYWxsYmFjayA9IHRoaXMuUmVnaXN0ZXJDYWxsYmFjayggU3lzdGVtLl9fQ2FsbGJhY2soIGZ1bmN0aW9uKCBjciApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggKCByYi5SZWdpc3RlckRhdGEuTGlmZXRpbWUgaW5zdGFuY2VvZiBDb3JlLkxpZmV0aW1lLkNSb290U2NvcGVMaWZldGltZSApID09IGZhbHNlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgcmIuUmVnaXN0ZXJEYXRhLlNoYXJpbmcgIT0gQ29yZS5VSW5zdGFuY2VTaGFyaW5nLlNoYXJlZCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGlzcG9zZeaOp+WItlxyXG4gICAgICAgICAgICAgICAgLy8g5pqC5LiN5a6e546wXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgICAgICBCdWlsZGVyLkNSZWdpc3RyYXRpb25CdWlsZGVySGVscGVyLlJlZ2lzdGVyU2luZ2xlQ29tcG9uZW50KCBjciwgcmIgKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlj6/ku6Xorr/pl67ms6jlhoznsbvkuK3nsbvvvJtcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiDlj6rog73ms6jlhoxleHBvcnTnmoTnsbvlnos7XHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGFzc2VtYmxpZXMgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIFJlZ2lzdGVyQXNzZW1ibHlUeXBlcyggLi4uYXNzZW1ibGllczogUmVhZG9ubHlBcnJheTwgU3lzdGVtLlJlZmxlY3Rpb24uQ0Fzc2VtYmx5ID4gKTogQnVpbGRlci5JUmVnaXN0cmF0aW9uQnVpbGRlcjxvYmplY3Q+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRmVhdHVyZXMuU2Nhbm5pbmcuQ1NjYW5uaW5nUmVnaXN0cmF0aW9uRXh0ZW5zaW9ucy5SZWdpc3RlckFzc2VtYmx5VHlwZXMoIHRoaXMsIGFzc2VtYmxpZXMgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBSZWdpc3RlclR5cGVzKCB0eXBlczogUmVhZG9ubHlBcnJheTwgU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgPiApOiBCdWlsZGVyLklSZWdpc3RyYXRpb25CdWlsZGVyPG9iamVjdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBGZWF0dXJlcy5TY2FubmluZy5DU2Nhbm5pbmdSZWdpc3RyYXRpb25FeHRlbnNpb25zLlJlZ2lzdGVyVHlwZXMoIHRoaXMsIHR5cGVzICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUmVnaXN0ZXJDYWxsYmFjayggY29uZmlndXJhdGlvbkNhbGxiYWNrOiBTeXN0ZW0uQWN0aW9uPCBDb3JlLklDb21wb25lbnRSZWdpc3RyeSA+ICk6IGFueVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGMgPSBuZXcgQnVpbGRlci5DRGVmZXJyZWRDYWxsYmFjayggY29uZmlndXJhdGlvbkNhbGxiYWNrICk7XHJcbiAgICAgICAgICAgIHRoaXMubV9jb25maWd1cmF0aW9uQ2FsbGJhY2tzLnB1c2goIGMgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQnVpbGQoKTogSUNvbnRhaW5lclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IG5ldyBDb3JlLkNDb250YWluZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5CdWlsZEludGVybmFsKCBjb250YWluZXIuQ29tcG9uZW50UmVnaXN0cnkgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIEJ1aWxkSW50ZXJuYWwoIGNvbXBvbmVudFJlZ2lzdHJ5OiBDb3JlLklDb21wb25lbnRSZWdpc3RyeSApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV93YXNCdWlsdCA9PSB0cnVlIClcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tX3dhc0J1aWx0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubV9jb25maWd1cmF0aW9uQ2FsbGJhY2tzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjYWxsYmFjayA9IHRoaXMubV9jb25maWd1cmF0aW9uQ2FsbGJhY2tzWyBpIF07XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5DYWxsYmFjay5FeGVjdXRlKCBjb21wb25lbnRSZWdpc3RyeSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhY1xyXG57XHJcbiAgICBAU3lzdGVtLkF0dHJpYnV0ZVVzYWdlKCBTeXN0ZW0uVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIgfCBTeXN0ZW0uVUF0dHJpYnV0ZVRhcmdldC5Qcm9wZXJ0eSwgZmFsc2UsIGZhbHNlIClcclxuICAgIGV4cG9ydCBjbGFzcyBDSW5qZWN0TGlmZXRpbWVTY29wZUF0dHJpYnV0ZSBleHRlbmRzIFN5c3RlbS5DQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEluamVjdExpZmV0aW1lU2NvcGUoKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yUGFyYW1ldGVyICYgU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yUHJvcGVydHlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3lzdGVtLkF0dHJpYnV0ZURlY29yYXRlKCBuZXcgQ0luamVjdExpZmV0aW1lU2NvcGVBdHRyaWJ1dGUoKSApO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDTW9kdWxlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIExvYWQoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDUGFyYW1ldGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IENhblN1cHBseVZhbHVlKFxyXG4gICAgICAgICAgICBwaTogU3lzdGVtLlJlZmxlY3Rpb24uQ1BhcmFtZXRlckluZm8sXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0XHJcbiAgICAgICAgKTogeyByZXQ6IGJvb2xlYW4sIHZhbHVlUHJvdmlkZXI/OiAoKSA9PiBvYmplY3QgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ1BhcmFtZXRlci50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDQ29uc3RhbnRQYXJhbWV0ZXIgZXh0ZW5kcyBDUGFyYW1ldGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3ByZWRpY2F0ZTogKCBwYXJhbWV0ZXJJbmZvOiBTeXN0ZW0uUmVmbGVjdGlvbi5DUGFyYW1ldGVySW5mbyApID0+IGJvb2xlYW4gPSBudWxsO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fdmFsdWU6IG9iamVjdCA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggdmFsdWU6IG9iamVjdCwgcHJlZGljYXRlOiAoIHBhcmFtZXRlckluZm86IFN5c3RlbS5SZWZsZWN0aW9uLkNQYXJhbWV0ZXJJbmZvICkgPT4gYm9vbGVhbiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1fcHJlZGljYXRlID0gcHJlZGljYXRlO1xyXG4gICAgICAgICAgICB0aGlzLm1fdmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgVmFsdWUoKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3ZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIENhblN1cHBseVZhbHVlKFxyXG4gICAgICAgICAgICBwaTogU3lzdGVtLlJlZmxlY3Rpb24uQ1BhcmFtZXRlckluZm8sXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0XHJcbiAgICAgICAgKTogeyByZXQ6IGJvb2xlYW4sIHZhbHVlUHJvdmlkZXI/OiAoKSA9PiBvYmplY3QgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubV9wcmVkaWNhdGUocGkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3ZpZGVyOiAoKSA9PiB0aGlzLlZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmV0OiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufSIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db3JlL0NDb25zdGFudFBhcmFtZXRlci50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhY1xyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ05hbWVkUGFyYW1ldGVyIGV4dGVuZHMgQ29yZS5DQ29uc3RhbnRQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIG5hbWU6IHN0cmluZywgdmFsdWU6IG9iamVjdCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggdmFsdWUsIHBpID0+IHBpLk5hbWUgPT0gbmFtZSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29yZS9DQ29uc3RhbnRQYXJhbWV0ZXIudHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWNcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENQb3NpdGlvbmFsUGFyYW1ldGVyIGV4dGVuZHMgQ29yZS5DQ29uc3RhbnRQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fcG9zaXRpb246IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggcG9zaXRpb246IG51bWJlciwgdmFsdWU6IG9iamVjdCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggdmFsdWUsIHBpID0+IHBpLlBhcmFtZXRlckluZGV4ID09IHBvc2l0aW9uICk7XHJcbiAgICAgICAgICAgIHRoaXMubV9wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBQb3NpdGlvbigpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvcmUvQ0NvbnN0YW50UGFyYW1ldGVyLnRzXCIgLz5cclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDVHlwZWRQYXJhbWV0ZXIgZXh0ZW5kcyBDb3JlLkNDb25zdGFudFBhcmFtZXRlclxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV90eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUsIHZhbHVlOiBvYmplY3QgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoIHZhbHVlLCBwaSA9PiBwaS5QYXJhbWV0ZXJUeXBlICYmIHBpLlBhcmFtZXRlclR5cGUuSXNFcXVpdmFsZW50VG8oIHR5cGUgKSApO1xyXG4gICAgICAgICAgICB0aGlzLm1fdHlwZSA9IHR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFR5cGUoKTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fdHlwZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWNcclxue1xyXG4gICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuRmllbGQsIGZhbHNlLCBmYWxzZSApXHJcbiAgICBleHBvcnQgY2xhc3MgQ0luamVjdGlvbkF0dHJpYnV0ZSBleHRlbmRzIFN5c3RlbS5DQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9O1xyXG5cclxuICAgIEBTeXN0ZW0uQXR0cmlidXRlVXNhZ2UoIFN5c3RlbS5VQXR0cmlidXRlVGFyZ2V0LkZpZWxkIHwgU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuUGFyYW1ldGVyLCBmYWxzZSwgZmFsc2UgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENJbmplY3Rpb25Qcm92aWRlckF0dHJpYnV0ZSBleHRlbmRzIFN5c3RlbS5DQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuRmllbGQgfCBTeXN0ZW0uVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIGZhbHNlLCBmYWxzZSApXHJcbiAgICBleHBvcnQgY2xhc3MgQ1dpdGhOYW1lQXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9uYW1lOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9uYW1lID0gbmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgTmFtZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX25hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBTeXN0ZW0uQXR0cmlidXRlVXNhZ2UoIFN5c3RlbS5VQXR0cmlidXRlVGFyZ2V0LkZpZWxkIHwgU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuUGFyYW1ldGVyLCBmYWxzZSwgZmFsc2UgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENXaXRoS2V5QXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9rZXk6IElLZXkgPSBudWxsO1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcigga2V5OiBJS2V5IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9rZXkgPSBrZXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IEtleSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2tleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAqKu+8iOWHveaVsOWjsOaYju+8iSoqXHJcbiAgICAgKiBcclxuICAgICAqIOWcqOexu+Wtl+auteS9jee9ruWjsOaYjuazqOWFpVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gSW5qZWN0aW9uKCk6IFN5c3RlbS5VRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvckZpZWxkXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbS5BdHRyaWJ1dGUoIG5ldyBDSW5qZWN0aW9uQXR0cmlidXRlKCkgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOazqOWFpUlQcm92aWRlcuaPkOS+m+WZqFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gSW5qZWN0aW9uUHJvdmlkZXIoKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yRmllbGQgJiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCB0YXJnZXQ6IGFueSwgbWVtYmVyTmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJJbmRleD86IG51bWJlciApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHBhcmFtZXRlckluZGV4ID09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFN5c3RlbS5SZWZsZWN0aW9uLkVudW1lcmFibGUoIHRhcmdldCwgbWVtYmVyTmFtZSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFN5c3RlbS5BdHRyaWJ1dGUoIG5ldyBDSW5qZWN0aW9uUHJvdmlkZXJBdHRyaWJ1dGUoKSApKCB0YXJnZXQsIG1lbWJlck5hbWUsIHBhcmFtZXRlckluZGV4ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBXaXRoTmFtZSggbmFtZTogc3RyaW5nICk6IFN5c3RlbS5VRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvckZpZWxkICYgU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yUGFyYW1ldGVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbS5BdHRyaWJ1dGUoIG5ldyBDV2l0aE5hbWVBdHRyaWJ1dGUoIG5hbWUgKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBXaXRoS2V5KCBrZXk6IElLZXkgKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yRmllbGQgJiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3lzdGVtLkF0dHJpYnV0ZSggbmV3IENXaXRoS2V5QXR0cmlidXRlKCBrZXkgKSApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAvKipcclxuICAgIC8vICAqICoq77yI5pWw5o2u57G75Z6L5aOw5piO77yJKipcclxuICAgIC8vICAqIFxyXG4gICAgLy8gICogSW5qZWN0aW9u5pa55rOV55qE6L+U5Zue57G75Z6L5aOw5piOXHJcbiAgICAvLyAgKi9cclxuICAgIC8vIGV4cG9ydCB0eXBlIFVJbmplY3Rpb25SZXR1cm4gPSAoXHJcbiAgICAvLyAgICAgdHlwZVdoZXJlOiBhbnksXHJcbiAgICAvLyAgICAgcHJvcGVydHlLZXk6IHN0cmluZyxcclxuICAgIC8vICAgICBwYXJhbWV0ZXJJbmRleD86IG51bWJlclxyXG4gICAgLy8gKSA9PiB2b2lkO1xyXG5cclxuICAgIC8vIC8qKlxyXG4gICAgLy8gICogKirvvIjlh73mlbDlo7DmmI7vvIkqKlxyXG4gICAgLy8gICogXHJcbiAgICAvLyAgKiDlnKjlsZ7mgKfmiJbogIXmnoTpgKDlmajkuK3nmoTlj4LmlbDkvY3nva7lo7DmmI7ms6jlhaVcclxuICAgIC8vICAqIEBwYXJhbSB0eXBlIOazqOWFpeexu+Wei1xyXG4gICAgLy8gICogQHBhcmFtIG5hbWUg6ZSu5ZCN44CB5Yir5ZCNXHJcbiAgICAvLyAgKi9cclxuICAgIC8vIGV4cG9ydCBmdW5jdGlvbiBJbmplY3Rpb24oIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlLCBuYW1lPzogc3RyaW5nIHwgSUtleSApOiBVSW5qZWN0aW9uUmV0dXJuXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGZ1bmN0aW9uKFxyXG4gICAgLy8gICAgICAgICB0YXJnZXQ6IGFueSxcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlLZXk6IHN0cmluZyxcclxuICAgIC8vICAgICAgICAgcGFyYW1ldGVySW5kZXg/OiBudW1iZXIgKTogdm9pZFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgbGV0IHByb3RvdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uVHlwZVByb3RvdHlwZTwgb2JqZWN0ID4gJiBCdWlsZGVyLlVJbmplY3Rpb25PblR5cGVQcm90b3R5cGUgPSBudWxsO1xyXG4gICAgLy8gICAgICAgICAvLyDlsZ7mgKfms6jlhaVcclxuICAgIC8vICAgICAgICAgaWYgKCBwYXJhbWV0ZXJJbmRleCA9PSB1bmRlZmluZWQgKVxyXG4gICAgLy8gICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICBwcm90b3R5cGUgPSB0YXJnZXQ7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGRlZnM6IHsgWyBrZXk6IHN0cmluZyBdOiBCdWlsZGVyLlVJbmplY3Rpb25Ob2RlIH0gPSBudWxsO1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKCBwcm90b3R5cGUuaGFzT3duUHJvcGVydHkoIEJ1aWxkZXIudUluamVjdGlvbkZvckZpZWxkICkgPT0gZmFsc2UgKVxyXG4gICAgLy8gICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBkZWZzT2xkOiB7IFsga2V5OiBzdHJpbmcgXTogQnVpbGRlci5VSW5qZWN0aW9uTm9kZSB9ID0gcHJvdG90eXBlWyBCdWlsZGVyLnVJbmplY3Rpb25Gb3JGaWVsZCBdO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlZnMgPSBwcm90b3R5cGVbIEJ1aWxkZXIudUluamVjdGlvbkZvckZpZWxkIF0gPSBPYmplY3QuYXNzaWduKCB7fSwgZGVmc09sZCApO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgZWxzZVxyXG4gICAgLy8gICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlZnMgPSBwcm90b3R5cGVbIEJ1aWxkZXIudUluamVjdGlvbkZvckZpZWxkIF07XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgaW5qZWN0aW9uTm9kZTogQnVpbGRlci5VSW5qZWN0aW9uTm9kZSA9XHJcbiAgICAvLyAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdHlwZTogdHlwZVxyXG4gICAgLy8gICAgICAgICAgICAgfTtcclxuICAgIC8vICAgICAgICAgICAgIGlmICggbmFtZSAhPSBudWxsIClcclxuICAgIC8vICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiggbmFtZSApID09IFwic3RyaW5nXCIgKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpbmplY3Rpb25Ob2RlLm5hbWUgPSBuYW1lO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGVsc2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaW5qZWN0aW9uTm9kZS5rZXkgPSBuYW1lO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgZGVmc1sgcHJvcGVydHlLZXkgXSA9IGluamVjdGlvbk5vZGU7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgZWxzZVxyXG4gICAgLy8gICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyDmnoTpgKDlh73mlbDms6jlhaVcclxuICAgIC8vICAgICAgICAgICAgIGlmICggcHJvcGVydHlLZXkgPT0gdW5kZWZpbmVkIClcclxuICAgIC8vICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBwcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBkZWZzOiBCdWlsZGVyLlVJbmplY3Rpb25Ob2RlW10gPSBudWxsO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICggcHJvdG90eXBlLmhhc093blByb3BlcnR5KCBCdWlsZGVyLnVJbmplY3Rpb25Gb3JDb25zdHJ1Y3RvciApID09IGZhbHNlIClcclxuICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRlZnMgPSBwcm90b3R5cGVbIEJ1aWxkZXIudUluamVjdGlvbkZvckNvbnN0cnVjdG9yIF0gPSBBcnJheSggcHJvdG90eXBlLmNvbnN0cnVjdG9yLmxlbmd0aCApO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBkZWZzID0gcHJvdG90eXBlWyBCdWlsZGVyLnVJbmplY3Rpb25Gb3JDb25zdHJ1Y3RvciBdO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgaW5qZWN0aW9uTm9kZTogQnVpbGRlci5VSW5qZWN0aW9uTm9kZSA9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoIG5hbWUgIT0gbnVsbCApXHJcbiAgICAvLyAgICAgICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiggbmFtZSApID09IFwic3RyaW5nXCIgKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaW5qZWN0aW9uTm9kZS5uYW1lID0gbmFtZTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaW5qZWN0aW9uTm9kZS5rZXkgPSBuYW1lO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICBkZWZzWyBwYXJhbWV0ZXJJbmRleCBdID0gaW5qZWN0aW9uTm9kZTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIC8vIOaWueazleazqOWFpVxyXG4gICAgLy8gICAgICAgICAgICAgZWxzZVxyXG4gICAgLy8gICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHByb3RvdHlwZSA9IHRhcmdldDtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGRlZnM6IHsgWyBrZXk6IHN0cmluZyBdOiBCdWlsZGVyLlVJbmplY3Rpb25Ob2RlIH0gPSBudWxsO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICggcHJvdG90eXBlLmhhc093blByb3BlcnR5KCBCdWlsZGVyLnVJbmplY3Rpb25Gb3JNZXRob2QgKSA9PSBmYWxzZSApXHJcbiAgICAvLyAgICAgICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBkZWZzID0gcHJvdG90eXBlWyBCdWlsZGVyLnVJbmplY3Rpb25Gb3JNZXRob2QgXSA9IHt9O1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBkZWZzID0gcHJvdG90eXBlWyBCdWlsZGVyLnVJbmplY3Rpb25Gb3JNZXRob2QgXTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGluamVjdGlvbk5vZGU6IEJ1aWxkZXIuVUluamVjdGlvbk5vZGUgPVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgIC8vICAgICAgICAgICAgICAgICB9O1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICggbmFtZSAhPSBudWxsIClcclxuICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mKCBuYW1lICkgPT0gXCJzdHJpbmdcIiApXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpbmplY3Rpb25Ob2RlLm5hbWUgPSBuYW1lO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpbmplY3Rpb25Ob2RlLmtleSA9IG5hbWU7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlZnNbIHBhcmFtZXRlckluZGV4IF0gPSBpbmplY3Rpb25Ob2RlO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUtleVxyXG4gICAge1xyXG4gICAgICAgIEVxdWFscygga2V5OiBJS2V5ICk6IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENTdHJpbmdLZXkgaW1wbGVtZW50cyBJS2V5XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3N0cjogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBzdHI6IHN0cmluZyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fc3RyID0gc3RyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRXF1YWxzKGtleTogSUtleSk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvLyBleHBvcnQgY2xhc3MgQ0luZGV4PCBUS2V5IGV4dGVuZHMgSUtleSwgVFNlcnZpY2UgZXh0ZW5kcyBvYmplY3QgPiBleHRlbmRzIFN5c3RlbS5DRnVuY3Rpb248ICgga2V5OiBUS2V5ICkgPT4gVFNlcnZpY2UgPlxyXG4gICAgLy8ge1xyXG4gICAgLy8gfTtcclxufVxyXG4iLCJcclxuXHJcbi8vIG5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWNcclxuLy8ge1xyXG4vLyAgICAgLyoqXHJcbi8vICAgICAgKiAqKu+8iOaOpeWPo++8iSoqXHJcbi8vICAgICAgKiBcclxuLy8gICAgICAqIEF1dG9mYWPmj5DkvpvlmahcclxuLy8gICAgICAqL1xyXG4vLyAgICAgZXhwb3J0IGludGVyZmFjZSBJUHJvdmlkZXJcclxuLy8gICAgIHtcclxuLy8gICAgICAgICAvKipcclxuLy8gICAgICAgICAgKiDojrflj5blrp7kvotcclxuLy8gICAgICAgICAgKiBAcGFyYW0gdHlwZSDkvp3otZbnsbvlnotcclxuLy8gICAgICAgICAgKi9cclxuLy8gICAgICAgICBSZXNvbHZlPCBUU2VydmljZSBleHRlbmRzIG9iamVjdCA+KFxyXG4vLyAgICAgICAgICAgICB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVFNlcnZpY2UgPlxyXG4vLyAgICAgICAgICk6IFRTZXJ2aWNlO1xyXG5cclxuLy8gICAgICAgICAvKipcclxuLy8gICAgICAgICAgKiDojrflj5blrp7kvotcclxuLy8gICAgICAgICAgKiBAcGFyYW0gdHlwZSDkvp3otZbnsbvlnotcclxuLy8gICAgICAgICAgKiBAcGFyYW0gbmFtZSDplK7lkI1cclxuLy8gICAgICAgICAgKi9cclxuLy8gICAgICAgICBSZXNvbHZlTmFtZWQ8IFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0ID4oXHJcbi8vICAgICAgICAgICAgIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBUU2VydmljZSA+LFxyXG4vLyAgICAgICAgICAgICBuYW1lOiBzdHJpbmdcclxuLy8gICAgICAgICApOiBUU2VydmljZTtcclxuXHJcbi8vICAgICAgICAgLyoqXHJcbi8vICAgICAgICAgICog6I635Y+W5a6e5L6LXHJcbi8vICAgICAgICAgICogQHBhcmFtIHR5cGUg5L6d6LWW57G75Z6LXHJcbi8vICAgICAgICAgICogQHBhcmFtIGtleSDplK7lkI1cclxuLy8gICAgICAgICAgKi9cclxuLy8gICAgICAgICBSZXNvbHZlS2V5ZWQ8IFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0LCBUS2V5IGV4dGVuZHMgSUtleSA+KFxyXG4vLyAgICAgICAgICAgICB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVFNlcnZpY2UgPixcclxuLy8gICAgICAgICAgICAga2V5OiBUS2V5XHJcbi8vICAgICAgICAgKTogVFNlcnZpY2U7XHJcblxyXG4vLyAgICAgICAgIC8vUmVzb2x2ZUluZGV4PCBUS2V5IGV4dGVuZHMgSUtleSwgVFNlcnZpY2UgZXh0ZW5kcyBvYmplY3QgPigpOiBDSW5kZXg8IFRLZXksIFRTZXJ2aWNlID47XHJcbi8vICAgICB9O1xyXG4vLyB9IiwiXHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhY1xyXG57XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gUmVzb2x2ZTxUU2VydmljZSBleHRlbmRzIG9iamVjdD4oIGNvbXBvbmVudENvbnRleHQ6IElDb21wb25lbnRDb250ZXh0LCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTxUU2VydmljZT4sIC4uLnBhcmFtZXRlcnM6IENvcmUuQ1BhcmFtZXRlcltdICk6IFRTZXJ2aWNlXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJldCA9IFRyeVJlc29sdmVTZXJ2aWNlKCBjb21wb25lbnRDb250ZXh0LCBuZXcgQ29yZS5DVHlwZWRTZXJ2aWNlKCB0eXBlICksIHBhcmFtZXRlcnMgKTtcclxuICAgICAgICBpZiAoIHJldC5zdWNjZWVkID09IGZhbHNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggYENhbid0IHJlc29sdmUgaW5zdGFuY2Ugb2YgdHlwZSAoJHt0eXBlLkdldE5pY2tuYW1lKCl9KWAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxUU2VydmljZT5yZXQuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFRyeVJlc29sdmVTZXJ2aWNlKCBjb21wb25lbnRDb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCwgc2VydmljZTogQ29yZS5DU2VydmljZSwgcGFyYW1ldGVyczogQ29yZS5DUGFyYW1ldGVyW10gKTogeyBzdWNjZWVkOiBib29sZWFuLCBpbnN0YW5jZT86IG9iamVjdCB9XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJlZ2lzdHJhdGlvbiA9IGNvbXBvbmVudENvbnRleHQuQ29tcG9uZW50UmVnaXN0cnkuR2V0UmVnaXN0cmF0aW9uKCBzZXJ2aWNlICk7XHJcbiAgICAgICAgaWYgKCByZWdpc3RyYXRpb24gPT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3VjY2VlZDogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VlZDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5zdGFuY2U6IGNvbXBvbmVudENvbnRleHQuUmVzb2x2ZUNvbXBvbmVudCggcmVnaXN0cmF0aW9uLCBwYXJhbWV0ZXJzIClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkFjdGl2YXRvcnNcclxue1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIENJbnN0YW5jZUFjdGl2YXRvciBpbXBsZW1lbnRzIENvcmUuSUluc3RhbmNlQWN0aXZhdG9yXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2xpbWl0VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvciggaW1wbGVtZW50YXRpb25UeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fbGltaXRUeXBlID0gaW1wbGVtZW50YXRpb25UeXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQWN0aXZhdGVJbnN0YW5jZShjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCwgcGFyYW1ldGVycz86IENvcmUuQ1BhcmFtZXRlcltdKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldExpbWl0VHlwZSgpOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9saW1pdFR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEaXNwb3NlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5BY3RpdmF0b3JzLkRlbGVnYXRlXHJcbntcclxuICAgIGV4cG9ydCB0eXBlIFVBY3RpdmF0aW9uRnVuY3Rpb248IFQgZXh0ZW5kcyBvYmplY3QgPSBvYmplY3QgPiA9ICggY29udGV4dDogSUNvbXBvbmVudENvbnRleHQsIHBhcmFtZXRlcnM6IFJlYWRvbmx5QXJyYXk8Q29yZS5DUGFyYW1ldGVyPiApID0+IFQ7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENEZWxlZ2F0ZUFjdGl2YXRvciBleHRlbmRzIENJbnN0YW5jZUFjdGl2YXRvciBpbXBsZW1lbnRzIENvcmUuSUluc3RhbmNlQWN0aXZhdG9yXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2FjdGl2YXRpb25GdW5jdGlvbjogU3lzdGVtLlRDYWxsYmFjazwgVUFjdGl2YXRpb25GdW5jdGlvbiA+O1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGltcGxlbWVudGF0aW9uVHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUsIGFjdGl2YXRpb25GdW5jdGlvbjogU3lzdGVtLlRDYWxsYmFja09yRnVuY3Rpb248IFVBY3RpdmF0aW9uRnVuY3Rpb24gPiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggaW1wbGVtZW50YXRpb25UeXBlICk7XHJcbiAgICAgICAgICAgIGlmICggdHlwZW9mKCBhY3RpdmF0aW9uRnVuY3Rpb24gKSA9PSBcImZ1bmN0aW9uXCIgKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2FjdGl2YXRpb25GdW5jdGlvbiA9IFN5c3RlbS5fX0NhbGxiYWNrKCBhY3RpdmF0aW9uRnVuY3Rpb24gKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2FjdGl2YXRpb25GdW5jdGlvbiA9IGFjdGl2YXRpb25GdW5jdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBBY3RpdmF0ZUluc3RhbmNlKGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0LCBwYXJhbWV0ZXJzPzogQ29yZS5DUGFyYW1ldGVyW10pOiBvYmplY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLm1fYWN0aXZhdGlvbkZ1bmN0aW9uLkV4ZWN1dGUoIGNvbnRleHQsIHBhcmFtZXRlcnMgKTtcclxuICAgICAgICAgICAgaWYgKCByZXN1bHQgPT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCIuLi4uXCIgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5BY3RpdmF0b3JzLlByb3ZpZGVkSW5zdGFuY2Vcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENQcm92aWRlZEluc3RhbmNlQWN0aXZhdG9yIGV4dGVuZHMgQ0luc3RhbmNlQWN0aXZhdG9yXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBtX2FjdGl2ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1faW5zdGFuY2U6IG9iamVjdCA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggaW5zdGFuY2U6IG9iamVjdCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggaW5zdGFuY2UuR2V0VHlwZSgpICk7XHJcbiAgICAgICAgICAgIHRoaXMubV9pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEFjdGl2YXRlSW5zdGFuY2UoIGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0LCBwYXJhbWV0ZXJzPzogQ29yZS5DUGFyYW1ldGVyW10gKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV9hY3RpdmVkID09IHRydWUgKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1fYWN0aXZlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2luc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5BY3RpdmF0b3JzLlJlZmxlY3Rpb25cclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENBdXRvd2lyaW5nUGFyYW1ldGVyIGV4dGVuZHMgQ29yZS5DUGFyYW1ldGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIENhblN1cHBseVZhbHVlKFxyXG4gICAgICAgICAgICBwaTogU3lzdGVtLlJlZmxlY3Rpb24uQ1BhcmFtZXRlckluZm8sXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0XHJcbiAgICAgICAgKTogeyByZXQ6IGJvb2xlYW4sIHZhbHVlUHJvdmlkZXI/OiAoKSA9PiBvYmplY3QgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlZ2lzdHJhdGlvbjogQ29yZS5JQ29tcG9uZW50UmVnaXN0cmF0aW9uO1xyXG4gICAgICAgICAgICBpZiAoIHBpLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBDSW5qZWN0TGlmZXRpbWVTY29wZUF0dHJpYnV0ZSApICkgIT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbiA9IGNvbnRleHQuQ29tcG9uZW50UmVnaXN0cnkuR2V0UmVnaXN0cmF0aW9uKCBuZXcgQ29yZS5DTGlmZXRpbWVTY29wZVNlcnZpY2UoKSApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCByZWdpc3RyYXRpb24gPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcmV0OiBmYWxzZSB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvdmlkZXI6ICgpID0+IGNvbnRleHQuUmVzb2x2ZUNvbXBvbmVudCggcmVnaXN0cmF0aW9uLCBbXSApXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIHBpLlBhcmFtZXRlclR5cGUgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyByZXQ6IGZhbHNlIH07XHJcblxyXG4gICAgICAgICAgICByZWdpc3RyYXRpb24gPSBjb250ZXh0LkNvbXBvbmVudFJlZ2lzdHJ5LkdldFJlZ2lzdHJhdGlvbiggbmV3IENvcmUuQ1R5cGVkU2VydmljZSggcGkuUGFyYW1ldGVyVHlwZSApICk7XHJcbiAgICAgICAgICAgIGlmICggcmVnaXN0cmF0aW9uID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcmV0OiBmYWxzZSB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJldDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlUHJvdmlkZXI6ICgpID0+IGNvbnRleHQuUmVzb2x2ZUNvbXBvbmVudCggcmVnaXN0cmF0aW9uLCBbXSApXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkFjdGl2YXRvcnMuUmVmbGVjdGlvblxyXG57XHJcbiAgICBjbGFzcyBDVHlwZUNvbXBhcmVyIGltcGxlbWVudHMgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVxdWFsaXR5Q29tcGFyZXI8IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgRXF1YWxzKCBhOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSwgYjogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEuSXNFcXVpdmFsZW50VG8oIGIgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENBdXRvd2lyaW5nUHJvcGVydHlJbmplY3RvclxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEluamVjdGFibGVQcm9wZXJ0aWVzOiBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRGljdGlvbmFyeTwgU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUsIFN5c3RlbS5SZWZsZWN0aW9uLkNQcm9wZXJ0eUluZm9bXSA+ID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkNEaWN0aW9uYXJ5KCB7IGNvbXBhcmVyOiBuZXcgQ1R5cGVDb21wYXJlcigpIH0gKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGNvbnRleHQgXHJcbiAgICAgICAgICogQHBhcmFtIGluc3RhbmNlIFxyXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eVNlbGVjdG9yIFxyXG4gICAgICAgICAqIEBwYXJhbSBwYXJhbWV0ZXJzIOazqOaEj++8jOatpOWkhOeahOWPguaVsOWIl+ihqOaYr1Jlc29sdmXml7bkvKDlhaXnmoRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIEluamVjdFByb3BlcnRpZXMoXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0LFxyXG4gICAgICAgICAgICBpbnN0YW5jZTogb2JqZWN0LFxyXG4gICAgICAgICAgICBwcm9wZXJ0eVNlbGVjdG9yOiBDb3JlLklQcm9wZXJ0eVNlbGVjdG9yLFxyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzOiBSZWFkb25seUFycmF5PENvcmUuQ1BhcmFtZXRlcj4gKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHR5cGUgPSBpbnN0YW5jZS5HZXRUeXBlKCk7XHJcbiAgICAgICAgICAgIGxldCBpbmplY3RhYmxlUHJvcGVydGllcyA9IHRoaXMuSW5qZWN0YWJsZVByb3BlcnRpZXMuR2V0KCB0eXBlICk7XHJcbiAgICAgICAgICAgIGlmICggaW5qZWN0YWJsZVByb3BlcnRpZXMgPT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuSW5qZWN0YWJsZVByb3BlcnRpZXMuQWRkKCB0eXBlLCBpbmplY3RhYmxlUHJvcGVydGllcyA9IHRoaXMuR2V0SW5qZWN0YWJsZVByb3BlcnRpZXMoIHR5cGUgKSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBpbmplY3RhYmxlUHJvcGVydGllcy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlJbmZvID0gaW5qZWN0YWJsZVByb3BlcnRpZXNbIGkgXTtcclxuICAgICAgICAgICAgICAgIGlmICggcHJvcGVydHlTZWxlY3Rvci5JbmplY3RQcm9wZXJ0eSggcHJvcGVydHlJbmZvLCBpbnN0YW5jZSApID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgc2V0UGFyYW1ldGVyID0gcHJvcGVydHlJbmZvLkdldFNldE1ldGhvZCgpLkdldFBhcmFtZXRlcnMoKVsgMCBdO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IHBhcmFtZXRlciA9IHBhcmFtZXRlcnMuRmlyc3RPckRlZmF1bHQoICggcCApID0+IHAuQ2FuU3VwcGx5VmFsdWUoIHNldFBhcmFtZXRlciwgY29udGV4dCApLnJldCA9PSB0cnVlICk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoIHBhcmFtZXRlciAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVnaXN0cmF0aW9uOiBDb3JlLklDb21wb25lbnRSZWdpc3RyYXRpb247XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eUluZm8uR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIENJbmplY3RMaWZldGltZVNjb3BlQXR0cmlidXRlICkgKSAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RyYXRpb24gPSBjb250ZXh0LkNvbXBvbmVudFJlZ2lzdHJ5LkdldFJlZ2lzdHJhdGlvbiggbmV3IENvcmUuQ0xpZmV0aW1lU2NvcGVTZXJ2aWNlKCkgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHJlZ2lzdHJhdGlvbiA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBgQ2FuJ3QgcmVzb2x2ZSB0aGUgaW5zdGFuY2Ugb2YgdHlwZSAoSUxpZmV0aW1lU2NvcGUpYCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eVR5cGUgPSBwcm9wZXJ0eUluZm8uUHJvcGVydHlUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggcHJvcGVydHlUeXBlID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eVNlcnZpY2UgPSBuZXcgQ29yZS5DVHlwZWRTZXJ2aWNlKCBwcm9wZXJ0eVR5cGUgKTtcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RyYXRpb24gPSBjb250ZXh0LkNvbXBvbmVudFJlZ2lzdHJ5LkdldFJlZ2lzdHJhdGlvbiggcHJvcGVydHlTZXJ2aWNlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCByZWdpc3RyYXRpb24gPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eVZhbHVlOiBvYmplY3QgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGNvbnRleHQuUmVzb2x2ZUNvbXBvbmVudCggcmVnaXN0cmF0aW9uLCBbXSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKCBlIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBlICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUluZm8uU2V0VmFsdWUoIGluc3RhbmNlLCBwcm9wZXJ0eVZhbHVlICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEdldEluamVjdGFibGVQcm9wZXJ0aWVzKCBpbnN0YW5jZVR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICk6IFN5c3RlbS5SZWZsZWN0aW9uLkNQcm9wZXJ0eUluZm9bXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGluamVjdGFibGVQcm9wZXJ0aWVzID0gW107XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0aWVzID0gaW5zdGFuY2VUeXBlLkdldFByb3BlcnRpZXMoKTtcclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGkgPSBwcm9wZXJ0aWVzWyBpIF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIHBpLkNhbldyaXRlID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGluamVjdGFibGVQcm9wZXJ0aWVzLnB1c2goIHBpICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGluamVjdGFibGVQcm9wZXJ0aWVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9wcml2YXRlIHN0YXRpYyBJbnN0YW5jZVR5cGVOYW1lZFBhcmFtZXRlcjogc3RyaW5nID0gXCJBdXRvZmFjLkF1dG93aXJpbmdQcm9wZXJ0eUluamVjdG9yLkluc3RhbmNlVHlwZVwiO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQWN0aXZhdG9ycy5SZWZsZWN0aW9uXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDQ29uc3RydWN0b3JQYXJhbWV0ZXJCaW5kaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBtX2Nhbkluc3RhbnRpYXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9jaTogU3lzdGVtLlJlZmxlY3Rpb24uQ0NvbnN0cnVjdG9ySW5mbyA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV92YWx1ZVJldHJpZXZlcnM6ICgoKSA9PiBvYmplY3QpW10gPSBudWxsO1xyXG5cclxuICAgICAgICBwcml2YXRlIG1fZmlyc3ROb25CaW5kYWJsZVBhcmFtZXRlcjogU3lzdGVtLlJlZmxlY3Rpb24uQ1BhcmFtZXRlckluZm8gPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGNpOiBTeXN0ZW0uUmVmbGVjdGlvbi5DQ29uc3RydWN0b3JJbmZvLCBhdmFpbGFibGVQYXJhbWV0ZXJzOiBDb3JlLkNQYXJhbWV0ZXJbXSwgY29udGV4dDogSUNvbXBvbmVudENvbnRleHQgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2NpID0gY2k7XHJcbiAgICAgICAgICAgIHRoaXMubV9jYW5JbnN0YW50aWF0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSBjaS5HZXRQYXJhbWV0ZXJzKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1fdmFsdWVSZXRyaWV2ZXJzID0gQXJyYXkoIHBhcmFtZXRlcnMubGVuZ3RoICk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBpID0gcGFyYW1ldGVyc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBqID0gMDsgaiA8IGF2YWlsYWJsZVBhcmFtZXRlcnMubGVuZ3RoOyBqICsrIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW0gPSBhdmFpbGFibGVQYXJhbWV0ZXJzWyBqIF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhblN1cHBseVZhbHVlID0gcGFyYW0uQ2FuU3VwcGx5VmFsdWUoIHBpLCBjb250ZXh0ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBjYW5TdXBwbHlWYWx1ZS5yZXQgPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1fdmFsdWVSZXRyaWV2ZXJzWyBpIF0gPSBjYW5TdXBwbHlWYWx1ZS52YWx1ZVByb3ZpZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggZm91bmRWYWx1ZSA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX2Nhbkluc3RhbnRpYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX2ZpcnN0Tm9uQmluZGFibGVQYXJhbWV0ZXIgPSBwaTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEluc3RhbnRpYXRlKCk6IG9iamVjdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLkNhbkluc3RhbnRpYXRlID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHZhbHVlczogb2JqZWN0W10gPSBBcnJheSggdGhpcy5tX3ZhbHVlUmV0cmlldmVycy5sZW5ndGggKTtcclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5tX3ZhbHVlUmV0cmlldmVycy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbV92YWx1ZVJldHJpZXZlclRlbXAgPSB0aGlzLm1fdmFsdWVSZXRyaWV2ZXJzWyBpIF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIG1fdmFsdWVSZXRyaWV2ZXJUZW1wID09IG51bGwgfHwgbV92YWx1ZVJldHJpZXZlclRlbXAgPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIHZhbHVlc1sgaSBdID0gbV92YWx1ZVJldHJpZXZlclRlbXAoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY2kuSW52b2tlKCAuLi52YWx1ZXMgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoIGUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IENhbkluc3RhbnRpYXRlKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY2FuSW5zdGFudGlhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkFjdGl2YXRvcnMuUmVmbGVjdGlvblxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0RlZmF1bHRWYWx1ZVBhcmFtZXRlciBleHRlbmRzIENvcmUuQ1BhcmFtZXRlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBDYW5TdXBwbHlWYWx1ZShwaTogU3lzdGVtLlJlZmxlY3Rpb24uQ1BhcmFtZXRlckluZm8sIGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0KTogeyByZXQ6IGJvb2xlYW47IHZhbHVlUHJvdmlkZXI/OiAoKSA9PiBvYmplY3Q7IH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVByb3ZpZGVyOiAoKSA9PiBudWxsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHB1YmxpYyBDYW5TdXBwbHlWYWx1ZShcclxuICAgICAgICAvLyAgICAgcGk6IFN5c3RlbS5SZWZsZWN0aW9uLkNQYXJhbWV0ZXJJbmZvLFxyXG4gICAgICAgIC8vICAgICBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCxcclxuICAgICAgICAvLyAgICAgdmFsdWVQcm92aWRlcjogU3lzdGVtLk91dFBhcmFtZXRlcjwoKSA9PiBvYmplY3Q+XHJcbiAgICAgICAgLy8gKTogYm9vbGVhblxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgdmFsdWVQcm92aWRlci5fX291dCA9ICgpID0+IG51bGw7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufSIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ0luc3RhbmNlQWN0aXZhdG9yLnRzXCIgLz5cclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkFjdGl2YXRvcnMuUmVmbGVjdGlvblxyXG57XHJcbiAgICAvKipcclxuICAgICAqIFVzZXMgcmVmbGVjdGlvbiB0byBhY3RpdmF0ZSBpbnN0YW5jZXMgb2YgYSB0eXBlLlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgQ1JlZmxlY3Rpb25BY3RpdmF0b3IgZXh0ZW5kcyBDSW5zdGFuY2VBY3RpdmF0b3JcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1faW1wbGVtZW50YXRpb25UeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9jb25maWd1cmVkUHJvcGVydGllczogUmVhZG9ubHlBcnJheTwgQ29yZS5DUGFyYW1ldGVyID4gPSBudWxsO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fZGVmYXVsdFBhcmFtZXRlcnM6IFJlYWRvbmx5QXJyYXk8IENvcmUuQ1BhcmFtZXRlciA+ID0gbnVsbCA7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9jb25zdHJ1Y3RvcjogU3lzdGVtLlJlZmxlY3Rpb24uQ0NvbnN0cnVjdG9ySW5mbyA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBpbXBsZW1lbnRhdGlvblR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlLFxyXG4gICAgICAgICAgICBjb25maWd1cmVkUGFyYW1ldGVyczogUmVhZG9ubHlBcnJheTwgQ29yZS5DUGFyYW1ldGVyID4sXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyZWRQcm9wZXJ0aWVzOiBSZWFkb25seUFycmF5PCBDb3JlLkNQYXJhbWV0ZXIgPlxyXG4gICAgICAgIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCBpbXBsZW1lbnRhdGlvblR5cGUgKTtcclxuICAgICAgICAgICAgdGhpcy5tX2ltcGxlbWVudGF0aW9uVHlwZSA9IGltcGxlbWVudGF0aW9uVHlwZTtcclxuICAgICAgICAgICAgdGhpcy5tX2NvbnN0cnVjdG9yID0gdGhpcy5tX2ltcGxlbWVudGF0aW9uVHlwZS5HZXRDb25zdHJ1Y3RvcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tX2RlZmF1bHRQYXJhbWV0ZXJzID0gY29uZmlndXJlZFBhcmFtZXRlcnMuY29uY2F0KCBbXHJcbiAgICAgICAgICAgICAgICBuZXcgQ0F1dG93aXJpbmdQYXJhbWV0ZXIoKSxcclxuICAgICAgICAgICAgICAgIG5ldyBDRGVmYXVsdFZhbHVlUGFyYW1ldGVyKClcclxuICAgICAgICAgICAgXSApO1xyXG4gICAgICAgICAgICB0aGlzLm1fY29uZmlndXJlZFByb3BlcnRpZXMgPSBjb25maWd1cmVkUHJvcGVydGllcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFjdGl2YXRlSW5zdGFuY2UoY29udGV4dDogSUNvbXBvbmVudENvbnRleHQsIHBhcmFtZXRlcnM/OiBhbnlbXSk6IG9iamVjdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJpbmRpbmcgPSB0aGlzLkdldENvbnN0cnVjdG9yQmluZGluZyggY29udGV4dCwgcGFyYW1ldGVycyApO1xyXG4gICAgICAgICAgICBpZiAoIGJpbmRpbmcuQ2FuSW5zdGFudGlhdGUgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgaW5zdGFuY2UgPSBiaW5kaW5nLkluc3RhbnRpYXRlKCk7XHJcbiAgICAgICAgICAgIC8vIGxldCBpbnN0YW5jZTogb2JqZWN0ID0gbnVsbDtcclxuICAgICAgICAgICAgLy8gbGV0IGNvbnN0cnVjdG9yUGFyYW1ldGVycyA9IHRoaXMubV9jb25zdHJ1Y3Rvci5HZXRQYXJhbWV0ZXJzKCk7XHJcbiAgICAgICAgICAgIC8vIGlmICggY29uc3RydWN0b3JQYXJhbWV0ZXJzLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgdmFsdWVzID0gQXJyYXk8IG9iamVjdCA+KCBjb25zdHJ1Y3RvclBhcmFtZXRlcnMubGVuZ3RoICk7XHJcbiAgICAgICAgICAgIC8vICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBjb25zdHJ1Y3RvclBhcmFtZXRlcnMubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBjcCA9IGNvbnN0cnVjdG9yUGFyYW1ldGVyc1sgaSBdO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGxldCB0eXBlQXR0cmlidXRlID0gY3AuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIFN5c3RlbS5SZWZsZWN0aW9uLkNEZWNsYXJpbmdUeXBlQXR0cmlidXRlICkgKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoIHR5cGVBdHRyaWJ1dGUgPT0gbnVsbCApXHJcbiAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZXNbIGkgXSA9IG51bGw7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgLy8gICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgLy8gICAgIGluc3RhbmNlID0gdGhpcy5tX2NvbnN0cnVjdG9yLkludm9rZSgpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIHRoaXMuSW5qZWN0UHJvcGVydGllcyggaW5zdGFuY2UsIGNvbnRleHQgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRGlzcG9zZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgR2V0Q29uc3RydWN0b3JCaW5kaW5nKCBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCwgcGFyYW1ldGVyczogQ29yZS5DUGFyYW1ldGVyW10gKTogQ0NvbnN0cnVjdG9yUGFyYW1ldGVyQmluZGluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHByaW9yaXRpc2VkUGFyYW1ldGVyczogQ29yZS5DUGFyYW1ldGVyW10gPSBbXTtcclxuICAgICAgICAgICAgaWYgKCBwYXJhbWV0ZXJzICE9IG51bGwgJiYgcGFyYW1ldGVycy5sZW5ndGggPiAwIClcclxuICAgICAgICAgICAgICAgIHByaW9yaXRpc2VkUGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX2RlZmF1bHRQYXJhbWV0ZXJzICE9IG51bGwgJiYgdGhpcy5tX2RlZmF1bHRQYXJhbWV0ZXJzLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdGlzZWRQYXJhbWV0ZXJzID0gcHJpb3JpdGlzZWRQYXJhbWV0ZXJzLmNvbmNhdCggdGhpcy5tX2RlZmF1bHRQYXJhbWV0ZXJzICk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYmluZGluZyA9IG5ldyBDQ29uc3RydWN0b3JQYXJhbWV0ZXJCaW5kaW5nKCB0aGlzLm1fY29uc3RydWN0b3IsIHByaW9yaXRpc2VkUGFyYW1ldGVycywgY29udGV4dCApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIEluamVjdFByb3BlcnRpZXMoIGluc3RhbmNlOiBvYmplY3QsIGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX2NvbmZpZ3VyZWRQcm9wZXJ0aWVzLmxlbmd0aCA9PSAwIClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBhY3R1YWxQcm9wZXJ0aWVzID0gaW5zdGFuY2UuR2V0VHlwZSgpLkdldFByb3BlcnRpZXMoKS5XaGVyZSggKCBwaSApID0+IHBpLkNhbldyaXRlICk7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubV9jb25maWd1cmVkUHJvcGVydGllcy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlndXJlZFByb3BlcnR5ID0gdGhpcy5tX2NvbmZpZ3VyZWRQcm9wZXJ0aWVzWyBpIF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBhY3R1YWxQcm9wZXJ0aWVzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5SW5mbyA9IGFjdHVhbFByb3BlcnRpZXNbIGkgXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHByb3BlcnR5SW5mby5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQ0luamVjdExpZmV0aW1lU2NvcGVBdHRyaWJ1dGUgKSApICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJlZFByb3BlcnR5ID0gbmV3IENBdXRvd2lyaW5nUGFyYW1ldGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZXR0ZXIgPSBwcm9wZXJ0eUluZm8uR2V0U2V0TWV0aG9kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhblN1cHBseVZhbHVlID0gY29uZmlndXJlZFByb3BlcnR5LkNhblN1cHBseVZhbHVlKCBzZXR0ZXIuR2V0UGFyYW1ldGVycygpWyAwIF0sIGNvbnRleHQgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGNhblN1cHBseVZhbHVlLnJldCA9PSB0cnVlIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbFByb3BlcnRpZXMuc3BsaWNlKCBpLCAxICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5SW5mby5TZXRWYWx1ZSggaW5zdGFuY2UsIGNhblN1cHBseVZhbHVlLnZhbHVlUHJvdmlkZXIoKSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5CdWlsZGVyXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDUmVmbGVjdGlvbkFjdGl2YXRvckRhdGFcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIG1faW1wbGVtZW50YXRpb25UeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9jb25zdHJ1Y3RvcjogU3lzdGVtLlJlZmxlY3Rpb24uQ0NvbnN0cnVjdG9ySW5mbyA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9jb25maWd1cmVkUGFyYW1ldGVyczogQ29yZS5DUGFyYW1ldGVyW10gPSBbXTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2NvbmZpZ3VyZWRQcm9wZXJ0aWVzOiBDb3JlLkNQYXJhbWV0ZXJbXSA9IFtdO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGltcGxlbWVudGVyOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1faW1wbGVtZW50YXRpb25UeXBlID0gaW1wbGVtZW50ZXI7XHJcbiAgICAgICAgICAgIHRoaXMubV9jb25zdHJ1Y3RvciA9IHRoaXMubV9pbXBsZW1lbnRhdGlvblR5cGUuR2V0Q29uc3RydWN0b3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgSW1wbGVtZW50YXRpb25UeXBlKCk6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2ltcGxlbWVudGF0aW9uVHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQ29uZmlndXJlZFBhcmFtZXRlcnMoKTogQ29yZS5DUGFyYW1ldGVyW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY29uZmlndXJlZFBhcmFtZXRlcnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IENvbmZpZ3VyZWRQcm9wZXJ0aWVzKCk6IENvcmUuQ1BhcmFtZXRlcltdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2NvbmZpZ3VyZWRQcm9wZXJ0aWVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9DUmVmbGVjdGlvbkFjdGl2YXRvckRhdGEudHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQnVpbGRlclxyXG57XHJcbiAgICAvKipcclxuICAgICAqIFJlZmxlY3Rpb24gYWN0aXZhdG9yIGRhdGEgZm9yIGNvbmNyZXRlIHR5cGVzLlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgQ0NvbmNyZXRlUmVmbGVjdGlvbkFjdGl2YXRvckRhdGEgZXh0ZW5kcyBDUmVmbGVjdGlvbkFjdGl2YXRvckRhdGEgaW1wbGVtZW50cyBJQ29uY3JldGVBY3RpdmF0b3JEYXRhLCBJQWN0aXZhdG9yRGF0YVxyXG4gICAge1xyXG5cclxuICAgICAgICAvL3ByaXZhdGUgcmVhZG9ubHkgbV9hY3RpdmF0b3I6IENvcmUuSUluc3RhbmNlQWN0aXZhdG9yID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBpbXBsZW1lbnRlcjogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoIGltcGxlbWVudGVyICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXRUeXBlcygpOiAoIHQ6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICkgPT4gU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy5JbXBsZW1lbnRhdGlvblR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXRBY3RpdmF0b3IoKTogQ29yZS5JSW5zdGFuY2VBY3RpdmF0b3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQWN0aXZhdG9ycy5SZWZsZWN0aW9uLkNSZWZsZWN0aW9uQWN0aXZhdG9yKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5JbXBsZW1lbnRhdGlvblR5cGUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbmZpZ3VyZWRQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5Db25maWd1cmVkUHJvcGVydGllcyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRGlzcG9zZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQnVpbGRlclxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0RlZmVycmVkQ2FsbGJhY2tcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fY2FsbGJhY2s6IFN5c3RlbS5BY3Rpb248IENvcmUuSUNvbXBvbmVudFJlZ2lzdHJ5ID4gPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGNhbGxiYWNrOiBTeXN0ZW0uQWN0aW9uPCBDb3JlLklDb21wb25lbnRSZWdpc3RyeSA+IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBDYWxsYmFjaygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2NhbGxiYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5CdWlsZGVyXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQgZXh0ZW5kcyBvYmplY3Q+IGltcGxlbWVudHMgSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PlxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBtX3JlZ2lzdHJhdGlvbkRhdGE6IENSZWdpc3RyYXRpb25EYXRhID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9hY3RpdmF0b3JEYXRhOiBJQWN0aXZhdG9yRGF0YSA9IG51bGw7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fcmVnaXN0cmF0aW9uU3R5bGU6IGFueSA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvciggc2VydmljZTogQ29yZS5DU2VydmljZSwgYWN0aXZhdG9yRGF0YTogSUFjdGl2YXRvckRhdGEsIHN0eWxlOiBhbnkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3JlZ2lzdHJhdGlvbkRhdGEgPSBuZXcgQ1JlZ2lzdHJhdGlvbkRhdGEoIHNlcnZpY2UgKTtcclxuICAgICAgICAgICAgdGhpcy5tX2FjdGl2YXRvckRhdGEgPSBhY3RpdmF0b3JEYXRhO1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uU3R5bGUgPSBzdHlsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgUmVnaXN0ZXJEYXRhKCk6IENSZWdpc3RyYXRpb25EYXRhXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3JlZ2lzdHJhdGlvbkRhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IEFjdGl2YXRvckRhdGEoKTogSUFjdGl2YXRvckRhdGFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fYWN0aXZhdG9yRGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldEFjdGl2YXRvckRhdGFFeDxUIGV4dGVuZHMgb2JqZWN0ID4oIHQ6IFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVDb25zdHJ1Y3RvcjwgVCA+ICk6IFRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX2FjdGl2YXRvckRhdGEgaW5zdGFuY2VvZiB0IClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9hY3RpdmF0b3JEYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBSZWdpc3RyYXRpb25TdHlsZSgpOiBhbnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcmVnaXN0cmF0aW9uU3R5bGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBOYW1lZDxUU2VydmljZSBleHRlbmRzIG9iamVjdD4odHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8VFNlcnZpY2U+LCBuYW1lOiBzdHJpbmcpOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5BZGRTZXJ2aWNlKCBuZXcgQ29yZS5DS2V5ZWRTZXJ2aWNlKCBuYW1lLCB0eXBlICkgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBLZXllZDxUU2VydmljZSBleHRlbmRzIG9iamVjdD4oIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPFRTZXJ2aWNlPiwga2V5OiBhbnkgKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3JlZ2lzdHJhdGlvbkRhdGEuQWRkU2VydmljZSggbmV3IENvcmUuQ0tleWVkU2VydmljZSgga2V5LCB0eXBlICkgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBLZXllZE1hcHBpbmc8IFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0ID4oIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBUU2VydmljZSA+LCBzZXJ2aWNlc0tleU1hcHBpbmc6ICggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKSA9PiBhbnkgKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fYWN0aXZhdG9yRGF0YSBpbnN0YW5jZW9mIENTY2FubmluZ0FjdGl2YXRvckRhdGEgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fYWN0aXZhdG9yRGF0YS5GaWx0ZXJzLnB1c2goIHQgPT4gdC5Jc0luaGVyaXRGcm9tKCB0eXBlICkgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19BczIoIHQgPT4gbmV3IENvcmUuQ0tleWVkU2VydmljZSggc2VydmljZXNLZXlNYXBwaW5nKCB0ICksIHR5cGUgKSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCB0aGlzLm1fYWN0aXZhdG9yRGF0YSBpbnN0YW5jZW9mIENDb25jcmV0ZVJlZmxlY3Rpb25BY3RpdmF0b3JEYXRhIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3JlZ2lzdHJhdGlvbkRhdGEuQWRkU2VydmljZSggbmV3IENvcmUuQ0tleWVkU2VydmljZSggc2VydmljZXNLZXlNYXBwaW5nKCB0aGlzLm1fYWN0aXZhdG9yRGF0YS5JbXBsZW1lbnRhdGlvblR5cGUgKSwgdGhpcy5tX2FjdGl2YXRvckRhdGEuSW1wbGVtZW50YXRpb25UeXBlICkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFzPFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0Pih0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTxUU2VydmljZT4pOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5BZGRTZXJ2aWNlKCBuZXcgQ29yZS5DVHlwZWRTZXJ2aWNlKCB0eXBlICkgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBBc0V4KCBzZXJ2aWNlczogQ29yZS5DU2VydmljZVtdICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25EYXRhLkFkZFNlcnZpY2VzKCBzZXJ2aWNlcyApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX19BczEoIHNlcnZpY2VNYXBwaW5nOiAoIHQ6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICkgPT4gU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19BczIoIHQgPT4gbmV3IENvcmUuQ1R5cGVkU2VydmljZSggc2VydmljZU1hcHBpbmcoIHQgKSApICk7ICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9fQXMyKCBzZXJ2aWNlTWFwcGluZzogKCB0OiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApID0+IENvcmUuQ1NlcnZpY2UgKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19BczMoIHQgPT4gWyBzZXJ2aWNlTWFwcGluZyggdCApIF0gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX19BczMoIHNlcnZpY2VNYXBwaW5nOiAoIHQ6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICkgPT4gQ29yZS5DU2VydmljZVtdICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBGZWF0dXJlcy5TY2FubmluZy5DU2Nhbm5pbmdSZWdpc3RyYXRpb25FeHRlbnNpb25zLkFzKCB0aGlzLCBzZXJ2aWNlTWFwcGluZyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQXNTZWxmKCk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX2FjdGl2YXRvckRhdGEgaW5zdGFuY2VvZiBDU2Nhbm5pbmdBY3RpdmF0b3JEYXRhIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX0FzMSggdCA9PiB0ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIHRoaXMubV9hY3RpdmF0b3JEYXRhIGluc3RhbmNlb2YgQ0NvbmNyZXRlUmVmbGVjdGlvbkFjdGl2YXRvckRhdGEgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5BZGRTZXJ2aWNlKCBuZXcgQ29yZS5DVHlwZWRTZXJ2aWNlKCB0aGlzLm1fYWN0aXZhdG9yRGF0YS5JbXBsZW1lbnRhdGlvblR5cGUgKSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vcmV0dXJuIHRoaXMuX19BcyggdGhpcy5tX2FjdGl2YXRvckRhdGEuR2V0VHlwZXMoKSApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBXaGVyZSggcHJlZGljYXRlOiAoIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICkgPT4gYm9vbGVhbiApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoICggdGhpcy5tX2FjdGl2YXRvckRhdGEgaW5zdGFuY2VvZiBCdWlsZGVyLkNTY2FubmluZ0FjdGl2YXRvckRhdGEgKSA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuXHJcbiAgICAgICAgICAgICg8QnVpbGRlci5DU2Nhbm5pbmdBY3RpdmF0b3JEYXRhPnRoaXMubV9hY3RpdmF0b3JEYXRhKS5GaWx0ZXJzLnB1c2goIHByZWRpY2F0ZSApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBTaW5nbGVJbnN0YW5jZSgpOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5TaGFyaW5nID0gQ29yZS5VSW5zdGFuY2VTaGFyaW5nLlNoYXJlZDtcclxuICAgICAgICAgICAgdGhpcy5tX3JlZ2lzdHJhdGlvbkRhdGEuTGlmZXRpbWUgPSBuZXcgQ29yZS5MaWZldGltZS5DUm9vdFNjb3BlTGlmZXRpbWUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBJbnN0YW5jZVBlckRlcGVuZGVuY3koKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3JlZ2lzdHJhdGlvbkRhdGEuU2hhcmluZyA9IENvcmUuVUluc3RhbmNlU2hhcmluZy5Ob25lO1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5MaWZldGltZSA9IG5ldyBDb3JlLkxpZmV0aW1lLkNDdXJyZW50U2NvcGVMaWZldGltZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEluc3RhbmNlUGVyTGlmZXRpbWVTY29wZSgpOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5TaGFyaW5nID0gQ29yZS5VSW5zdGFuY2VTaGFyaW5nLlNoYXJlZDtcclxuICAgICAgICAgICAgdGhpcy5tX3JlZ2lzdHJhdGlvbkRhdGEuTGlmZXRpbWUgPSBuZXcgQ29yZS5MaWZldGltZS5DQ3VycmVudFNjb3BlTGlmZXRpbWUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBJbnN0YW5jZVBlck1hdGNoaW5nTGlmZXRpbWVTY29wZSggLi4uc2NvcGVUYWc6IFVMaWZldGltZVNjb3BlVGFnVHlwZVtdICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb25EYXRhLlNoYXJpbmcgPSBDb3JlLlVJbnN0YW5jZVNoYXJpbmcuU2hhcmVkO1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVnaXN0cmF0aW9uRGF0YS5MaWZldGltZSA9IG5ldyBDb3JlLkxpZmV0aW1lLkNNYXRjaGluZ1Njb3BlTGlmZXRpbWUoIC4uLnNjb3BlVGFnICk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUHJvcGVydGllc0F1dG93aXJlZCggcHJvcGVydHlTZWxlY3Rvcj86IENvcmUuSVByb3BlcnR5U2VsZWN0b3IgKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBwcm9wZXJ0eVNlbGVjdG9yID09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5U2VsZWN0b3IgPSBuZXcgQ29yZS5DRGVmYXVsdFByb3BlcnR5U2VsZWN0b3IoIGZhbHNlICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tX3JlZ2lzdHJhdGlvbkRhdGEuQWN0aXZhdGluZ0hhbmRsZXJzLkFkZCggKCBzZW5kZXIsIGUgKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBBY3RpdmF0b3JzLlJlZmxlY3Rpb24uQ0F1dG93aXJpbmdQcm9wZXJ0eUluamVjdG9yLkluamVjdFByb3BlcnRpZXMoIGUuQ29udGV4dCwgZS5JbnN0YW5jZSwgcHJvcGVydHlTZWxlY3RvciwgZS5QYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBXaXRoUGFyYW1ldGVyKCBwYXJhbWV0ZXI6IENvcmUuQ1BhcmFtZXRlciApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZhdG9yRGF0YSA9IHRoaXMuR2V0QWN0aXZhdG9yRGF0YUV4KCBDUmVmbGVjdGlvbkFjdGl2YXRvckRhdGEgKTtcclxuICAgICAgICAgICAgaWYgKCBhY3RpdmF0b3JEYXRhICE9IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmF0b3JEYXRhLkNvbmZpZ3VyZWRQYXJhbWV0ZXJzLnB1c2goIHBhcmFtZXRlciApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFdpdGhQYXJhbWV0ZXJzKCBwYXJhbWV0ZXJzOiBSZWFkb25seUFycmF5PCBDb3JlLkNQYXJhbWV0ZXIgPiApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBwID0gcGFyYW1ldGVyc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5XaXRoUGFyYW1ldGVyKCBwICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgV2l0aFByb3BlcnR5KCBwYXJhbWV0ZXI6IENvcmUuQ1BhcmFtZXRlciApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZhdG9yRGF0YSA9IHRoaXMuR2V0QWN0aXZhdG9yRGF0YUV4KCBDUmVmbGVjdGlvbkFjdGl2YXRvckRhdGEgKTtcclxuICAgICAgICAgICAgaWYgKCBhY3RpdmF0b3JEYXRhICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgYWN0aXZhdG9yRGF0YS5Db25maWd1cmVkUHJvcGVydGllcy5wdXNoKCBwYXJhbWV0ZXIgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgV2l0aFByb3BlcnRpZXMoIHBhcmFtZXRlcnM6IFJlYWRvbmx5QXJyYXk8IENvcmUuQ1BhcmFtZXRlciA+ICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHAgPSBwYXJhbWV0ZXJzWyBpIF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLldpdGhQcm9wZXJ0eSggcCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgT25BY3RpdmF0aW5nKCBjYWxsYmFjazogQ29yZS5VQ2FsbGJhY2tBY3RpdmF0aW5nPFRMaW1pdD4gKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3JlZ2lzdHJhdGlvbkRhdGEuQWN0aXZhdGluZ0hhbmRsZXJzLkFkZCggKHMsIGUpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gbmV3IENvcmUuQ0FjdGl2YXRpbmdFdmVudEFyZ3M8VExpbWl0PihlLkNvbnRleHQsIGUuUmVnaXN0cmF0aW9uLCBlLlBhcmFtZXRlcnMsIDxUTGltaXQ+ZS5JbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiggY2FsbGJhY2sgKSA9PSBcImZ1bmN0aW9uXCIgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCBhcmdzICk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suRXhlY3V0ZSggYXJncyApO1xyXG4gICAgICAgICAgICAgICAgZS5JbnN0YW5jZSA9IGFyZ3MuSW5zdGFuY2U7XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPbkFjdGl2YXRlZCgpOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQnVpbGRlclxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1JlZ2lzdHJhdGlvbkJ1aWxkZXJIZWxwZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIFJlZ2lzdGVyU2luZ2xlQ29tcG9uZW50KFxyXG4gICAgICAgICAgICBjcjogQ29yZS5JQ29tcG9uZW50UmVnaXN0cnksXHJcbiAgICAgICAgICAgIHJiOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxvYmplY3Q+ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZWdpc3RyYXRpb24gPSB0aGlzLkNyZWF0ZVJlZ2lzdHJhdGlvbkZvckJ1aWxkZXIoIHJiICk7XHJcbiAgICAgICAgICAgIGNyLlJlZ2lzdGVyKCByZWdpc3RyYXRpb24sIGZhbHNlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENyZWF0ZVJlZ2lzdHJhdGlvbkZvckJ1aWxkZXIoXHJcbiAgICAgICAgICAgIHJiOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxvYmplY3Q+ICk6IENvcmUuSUNvbXBvbmVudFJlZ2lzdHJhdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ3JlYXRlUmVnaXN0cmF0aW9uKFxyXG4gICAgICAgICAgICAgICAgcmIuUmVnaXN0cmF0aW9uU3R5bGUuSUQsXHJcbiAgICAgICAgICAgICAgICByYi5SZWdpc3RlckRhdGEsXHJcbiAgICAgICAgICAgICAgICByYi5BY3RpdmF0b3JEYXRhLkdldEFjdGl2YXRvcigpLFxyXG4gICAgICAgICAgICAgICAgcmIuUmVnaXN0ZXJEYXRhLkdldFNlcnZpY2VzKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlUmVnaXN0cmF0aW9uKFxyXG4gICAgICAgICAgICBpZDogc3RyaW5nLFxyXG4gICAgICAgICAgICBkYXRhOiBDUmVnaXN0cmF0aW9uRGF0YSxcclxuICAgICAgICAgICAgYWN0aXZhdG9yOiBDb3JlLklJbnN0YW5jZUFjdGl2YXRvcixcclxuICAgICAgICAgICAgc2VydmljZXM6IEFycmF5PCBDb3JlLkNTZXJ2aWNlID4sXHJcbiAgICAgICAgICAgIHRhcmdldD86IENvcmUuSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiApOiBDb3JlLklDb21wb25lbnRSZWdpc3RyYXRpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBsaW1pdFR5cGUgPSBhY3RpdmF0b3IuR2V0TGltaXRUeXBlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBzZXJ2aWNlcy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHMgPSBzZXJ2aWNlc1sgaSBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdHMuaGFzT3duUHJvcGVydHkoIFwiR2V0U2VydmljZVR5cGVcIiApID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCBsaW1pdFR5cGUuSXNJbmhlcml0RnJvbSggKCg8Q29yZS5JU2VydmljZVdpdGhUeXBlPjxhbnk+dHMpKS5HZXRTZXJ2aWNlVHlwZSgpICkgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJcIiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVnaXN0cmF0aW9uID0gbmV3IENvcmUuUmVnaXN0cmF0aW9uLkNDb21wb25lbnRSZWdpc3RyYXRpb24oXHJcbiAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgIGFjdGl2YXRvcixcclxuICAgICAgICAgICAgICAgIGRhdGEuTGlmZXRpbWUsXHJcbiAgICAgICAgICAgICAgICBkYXRhLlNoYXJpbmcsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgZGF0YS5HZXRTZXJ2aWNlcygpLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIHRhcmdldFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uLkFjdGl2YXRpbmcuQWRkKCBkYXRhLkFjdGl2YXRpbmdIYW5kbGVycy5jYWxsYmFja3MgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiByZWdpc3RyYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQnVpbGRlclxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1JlZ2lzdHJhdGlvbkRhdGFcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIG1fZGVmYXVsdFNlcnZpY2U6IENvcmUuQ1NlcnZpY2UgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgbV9kZWZhdWx0U2VydmljZU92ZXJyaWRlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIHByaXZhdGUgbV9zZXJ2aWNlczogQXJyYXk8IENvcmUuQ1NlcnZpY2UgPiA9IEFycmF5KCk7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9zaGFyaW5nOiBDb3JlLlVJbnN0YW5jZVNoYXJpbmcgPSBDb3JlLlVJbnN0YW5jZVNoYXJpbmcuTm9uZTtcclxuICAgICAgICBwcml2YXRlIG1fbGlmZXRpbWU6IENvcmUuSUNvbXBvbmVudExpZmV0aW1lID0gbmV3IENvcmUuTGlmZXRpbWUuQ0N1cnJlbnRTY29wZUxpZmV0aW1lKCk7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9kZWZlcnJlZENhbGxiYWNrOiBDRGVmZXJyZWRDYWxsYmFjayA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9hY3RpdmF0aW5nSGFuZGxlcnM6IFN5c3RlbS5UQ2FsbGJhY2tBcnJheTwgKCBzZW5kZXI6IGFueSwgZTogQ29yZS5DQWN0aXZhdGluZ0V2ZW50QXJnczxvYmplY3Q+ICkgPT4gdm9pZCA+ID0gbmV3IFN5c3RlbS5UQ2FsbGJhY2tBcnJheSgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGRlZmF1bHRTZXJ2aWNlOiBDb3JlLkNTZXJ2aWNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9kZWZhdWx0U2VydmljZSA9IGRlZmF1bHRTZXJ2aWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEFkZFNlcnZpY2UoIHNlcnZpY2U6IENvcmUuQ1NlcnZpY2UgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2RlZmF1bHRTZXJ2aWNlT3ZlcnJpZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tX3NlcnZpY2VzLnB1c2goIHNlcnZpY2UgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBBZGRTZXJ2aWNlcyggc2VydmljZXM6IENvcmUuQ1NlcnZpY2VbXSApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fZGVmYXVsdFNlcnZpY2VPdmVycmlkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1fc2VydmljZXMgPSB0aGlzLm1fc2VydmljZXMuY29uY2F0KCBzZXJ2aWNlcyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFNlcnZpY2VzKCk6IEFycmF5PCBDb3JlLkNTZXJ2aWNlID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX2RlZmF1bHRTZXJ2aWNlT3ZlcnJpZGVuID09IHRydWUgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9zZXJ2aWNlcztcclxuICAgICAgICAgICAgcmV0dXJuICggdGhpcy5tX3NlcnZpY2VzLmxlbmd0aCA9PSAwICkgPyBbIHRoaXMubV9kZWZhdWx0U2VydmljZSBdOiB0aGlzLm1fc2VydmljZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IExpZmV0aW1lKCB2YWx1ZTogQ29yZS5JQ29tcG9uZW50TGlmZXRpbWUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2xpZmV0aW1lID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IExpZmV0aW1lKCk6IENvcmUuSUNvbXBvbmVudExpZmV0aW1lXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2xpZmV0aW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCBTaGFyaW5nKCB2YWx1ZTogQ29yZS5VSW5zdGFuY2VTaGFyaW5nIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9zaGFyaW5nID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFNoYXJpbmcoKTogQ29yZS5VSW5zdGFuY2VTaGFyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3NoYXJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IERlZmVycmVkQ2FsbGJhY2soIHZhbHVlOiBDRGVmZXJyZWRDYWxsYmFjayApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fZGVmZXJyZWRDYWxsYmFjayA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBEZWZlcnJlZENhbGxiYWNrKCk6IENEZWZlcnJlZENhbGxiYWNrXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2RlZmVycmVkQ2FsbGJhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IEFjdGl2YXRpbmdIYW5kbGVycygpOiBTeXN0ZW0uVENhbGxiYWNrQXJyYXk8ICggc2VuZGVyOiBhbnksIGU6IENvcmUuQ0FjdGl2YXRpbmdFdmVudEFyZ3M8b2JqZWN0PiApID0+IHZvaWQgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9hY3RpdmF0aW5nSGFuZGxlcnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQ29weUZyb20oIHRoYXQ6IENSZWdpc3RyYXRpb25EYXRhLCBpbmNsdWRlRGVmYXVsdFNlcnZpY2U6IGJvb2xlYW4gKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBpbmNsdWRlRGVmYXVsdFNlcnZpY2UgPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fZGVmYXVsdFNlcnZpY2UgPSB0aGF0Lm1fZGVmYXVsdFNlcnZpY2U7XHJcbiAgICAgICAgICAgIHRoaXMubV9kZWZhdWx0U2VydmljZU92ZXJyaWRlbiA9IHRoYXQubV9kZWZhdWx0U2VydmljZU92ZXJyaWRlbjtcclxuICAgICAgICAgICAgdGhpcy5tX2xpZmV0aW1lID0gdGhhdC5tX2xpZmV0aW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fc2hhcmluZyA9IHRoYXQubV9zaGFyaW5nO1xyXG4gICAgICAgICAgICB0aGlzLm1fc2VydmljZXMgPSB0aGlzLkNvcHlBcnJheSggdGhhdC5tX3NlcnZpY2VzICk7XHJcbiAgICAgICAgICAgIHRoaXMubV9hY3RpdmF0aW5nSGFuZGxlcnMgPSB0aGF0Lm1fYWN0aXZhdGluZ0hhbmRsZXJzLkNvcHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgQ29weUFycmF5PFQ+KCBzcmM6IFRbXSApOiBUW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkZXN0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHNyY1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgZGVzdC5wdXNoKCB0ZW1wICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iLCJcclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5CdWlsZGVyXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDU2Nhbm5pbmdBY3RpdmF0b3JEYXRhIGV4dGVuZHMgQ1JlZmxlY3Rpb25BY3RpdmF0b3JEYXRhIGltcGxlbWVudHMgSUFjdGl2YXRvckRhdGFcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fZmlsdGVyOiAoKCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApID0+IGJvb2xlYW4pW10gPSBbXTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2NvbmZpZ3VyYXRpb25BY3Rpb25zOiAoICh0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSwgcmI6IElSZWdpc3RyYXRpb25CdWlsZGVyPG9iamVjdD4gKSA9PiB2b2lkIClbXSA9IFtdO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggT2JqZWN0ICkgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldFR5cGVzKCk6ICggdDogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKSA9PiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXRBY3RpdmF0b3IoKTogQ29yZS5JSW5zdGFuY2VBY3RpdmF0b3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBGaWx0ZXJzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fZmlsdGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBDb25maWd1cmF0aW9uQWN0aW9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2NvbmZpZ3VyYXRpb25BY3Rpb25zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5CdWlsZGVyXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDU2ltcGxlQWN0aXZhdG9yRGF0YSBpbXBsZW1lbnRzIElBY3RpdmF0b3JEYXRhLCBJQ29uY3JldGVBY3RpdmF0b3JEYXRhXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2FjdGl2YXRvcjogQ29yZS5JSW5zdGFuY2VBY3RpdmF0b3IgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGFjdGl2YXRvcjogQ29yZS5JSW5zdGFuY2VBY3RpdmF0b3IgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2FjdGl2YXRvciA9IGFjdGl2YXRvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRUeXBlcygpOiAoIHQ6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICkgPT4gU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB0aGlzLm1fYWN0aXZhdG9yLkdldExpbWl0VHlwZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldEFjdGl2YXRvcigpOiBDb3JlLklJbnN0YW5jZUFjdGl2YXRvciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fYWN0aXZhdG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkJ1aWxkZXJcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENTaW5nbGVSZWdpc3RyYXRpb25TdHlsZVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9pZDogc3RyaW5nID0gQ29yZS5HZW5JRCgpO1xyXG5cclxuICAgICAgICBwcml2YXRlIG1fcHJlc2VydmVEZWZhdWx0czogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IElEKCk6IHN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9pZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgUHJlc2VydmVEZWZhdWx0cyggdmFsdWU6IGJvb2xlYW4gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3ByZXNlcnZlRGVmYXVsdHMgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgUHJlc2VydmVEZWZhdWx0cygpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3ByZXNlcnZlRGVmYXVsdHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5CdWlsZGVyXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0IGV4dGVuZHMgb2JqZWN0PlxyXG4gICAge1xyXG4gICAgICAgIHJlYWRvbmx5IFJlZ2lzdGVyRGF0YTogQ1JlZ2lzdHJhdGlvbkRhdGE7XHJcblxyXG4gICAgICAgIHJlYWRvbmx5IEFjdGl2YXRvckRhdGE6IElBY3RpdmF0b3JEYXRhO1xyXG5cclxuICAgICAgICByZWFkb25seSBSZWdpc3RyYXRpb25TdHlsZTogYW55O1xyXG5cclxuICAgICAgICBOYW1lZDwgVFNlcnZpY2UgZXh0ZW5kcyBvYmplY3QgPiggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IFRTZXJ2aWNlID4sIG5hbWU6IHN0cmluZyApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+O1xyXG5cclxuICAgICAgICBLZXllZDwgVFNlcnZpY2UgZXh0ZW5kcyBvYmplY3QgPiggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IFRTZXJ2aWNlID4sIGtleTogYW55ICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD47XHJcblxyXG4gICAgICAgIEtleWVkTWFwcGluZzwgVFNlcnZpY2UgZXh0ZW5kcyBvYmplY3QgPiggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IFRTZXJ2aWNlID4sIHNlcnZpY2VzS2V5TWFwcGluZzogKCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApID0+IGFueSApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+O1xyXG5cclxuICAgICAgICBBczwgVFNlcnZpY2UgZXh0ZW5kcyBvYmplY3QgPiggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IFRTZXJ2aWNlID4gKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PjtcclxuXHJcbiAgICAgICAgQXNFeCggc2VydmljZXM6IENvcmUuQ1NlcnZpY2VbXSApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+O1xyXG5cclxuICAgICAgICBBc1NlbGYoKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PjtcclxuXHJcbiAgICAgICAgV2hlcmUoIHByZWRpY2F0ZTogKCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApID0+IGJvb2xlYW4gKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PjtcclxuXHJcbiAgICAgICAgU2luZ2xlSW5zdGFuY2UoKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PjtcclxuXHJcbiAgICAgICAgSW5zdGFuY2VQZXJEZXBlbmRlbmN5KCk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD47XHJcblxyXG4gICAgICAgIEluc3RhbmNlUGVyTGlmZXRpbWVTY29wZSgpOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+O1xyXG5cclxuICAgICAgICBJbnN0YW5jZVBlck1hdGNoaW5nTGlmZXRpbWVTY29wZSggc2NvcGVUYWc6IFVMaWZldGltZVNjb3BlVGFnVHlwZSApOiBJUmVnaXN0cmF0aW9uQnVpbGRlcjxUTGltaXQ+O1xyXG5cclxuICAgICAgICBQcm9wZXJ0aWVzQXV0b3dpcmVkKCBwcm9wZXJ0eVNlbGVjdG9yPzogQ29yZS5JUHJvcGVydHlTZWxlY3RvciwgYWxsb3dDaXJjdWxhckRlcGVuZGVuY2llcz86IGJvb2xlYW4gKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PjtcclxuXHJcbiAgICAgICAgV2l0aFBhcmFtZXRlciggcGFyYW1ldGVyOiBDb3JlLkNQYXJhbWV0ZXIgKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PjtcclxuXHJcbiAgICAgICAgV2l0aFBhcmFtZXRlcnMoIHBhcmFtZXRlcnM6IFJlYWRvbmx5QXJyYXk8IENvcmUuQ1BhcmFtZXRlciA+ICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD47XHJcblxyXG4gICAgICAgIFdpdGhQcm9wZXJ0eSggcGFyYW1ldGVyOiBDb3JlLkNQYXJhbWV0ZXIgKTogSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8VExpbWl0PjtcclxuXHJcbiAgICAgICAgV2l0aFByb3BlcnRpZXMoIHBhcmFtZXRlcnM6IFJlYWRvbmx5QXJyYXk8IENvcmUuQ1BhcmFtZXRlciA+ICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD47XHJcblxyXG4gICAgICAgIE9uQWN0aXZhdGluZyggY2FsbGJhY2s6IENvcmUuVUNhbGxiYWNrQWN0aXZhdGluZzxUTGltaXQ+ICk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD47XHJcblxyXG4gICAgICAgIE9uQWN0aXZhdGVkKCk6IElSZWdpc3RyYXRpb25CdWlsZGVyPFRMaW1pdD47XHJcbiAgICB9O1xyXG59XHJcblxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0FjdGl2YXRpbmdFdmVudEFyZ3M8IFQgPiBpbXBsZW1lbnRzIElBY3RpdmF0aW5nRXZlbnRBcmdzPCBUID5cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIG1faW5zdGFuY2U6IFQgPSBudWxsO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fY29udGV4dDogSUNvbXBvbmVudENvbnRleHQgPSBudWxsO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fcmVnaXN0cmF0aW9uOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3BhcmFtZXRlcnM6IFJlYWRvbmx5QXJyYXk8IENQYXJhbWV0ZXIgPiA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgY29udGV4dDogSUNvbXBvbmVudENvbnRleHQsXHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvbjogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbixcclxuICAgICAgICAgICAgcGFyYW1ldGVyczogUmVhZG9ubHlBcnJheTwgQ1BhcmFtZXRlciA+LFxyXG4gICAgICAgICAgICBpbnN0YW5jZTogVCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZWdpc3RyYXRpb24gPSByZWdpc3RyYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcclxuICAgICAgICAgICAgdGhpcy5tX2luc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUmVwbGFjZUluc3RhbmNlKCBpbnN0YW5jZTogb2JqZWN0ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBDb250ZXh0KCk6IElDb21wb25lbnRDb250ZXh0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2NvbnRleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFJlZ2lzdHJhdGlvbigpOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3JlZ2lzdHJhdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgUGFyYW1ldGVycygpOiBSZWFkb25seUFycmF5PCBDUGFyYW1ldGVyID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcGFyYW1ldGVycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgSW5zdGFuY2UoKTogVFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgSW5zdGFuY2UoIHZhbHVlOiBUIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdmFsdWUgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvciggXCJcIiApO1xyXG4gICAgICAgICAgICB0aGlzLm1faW5zdGFuY2UgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0NvbnRhaW5lciBpbXBsZW1lbnRzIElDb250YWluZXJcclxuICAgIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3Jvb3RMaWZldGltZVNjb3BlOiBJTGlmZXRpbWVTY29wZSA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2NvbXBvbmVudFJlZ2lzdHJ5OiBJQ29tcG9uZW50UmVnaXN0cnkgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2NvbXBvbmVudFJlZ2lzdHJ5ID0gbmV3IFJlZ2lzdHJhdGlvbi5DQ29tcG9uZW50UmVnaXN0cnkoKTtcclxuICAgICAgICAgICAgdGhpcy5tX2NvbXBvbmVudFJlZ2lzdHJ5LlJlZ2lzdGVyKCBuZXcgUmVnaXN0cmF0aW9uLkNDb21wb25lbnRSZWdpc3RyYXRpb24oXHJcbiAgICAgICAgICAgICAgICBMaWZldGltZS5DTGlmZXRpbWVTY29wZS5TZWxmUmVnaXN0cmF0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICBuZXcgQWN0aXZhdG9ycy5EZWxlZ2F0ZS5DRGVsZWdhdGVBY3RpdmF0b3IoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggT2JqZWN0ICksICgpID0+IHsgdGhyb3cgbmV3IEVycm9yKCk7IH0gKSxcclxuICAgICAgICAgICAgICAgIG5ldyBMaWZldGltZS5DQ3VycmVudFNjb3BlTGlmZXRpbWUoKSxcclxuICAgICAgICAgICAgICAgIFVJbnN0YW5jZVNoYXJpbmcuU2hhcmVkLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIFsgbmV3IENMaWZldGltZVNjb3BlU2VydmljZSgpIF0sXHJcbiAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fcm9vdExpZmV0aW1lU2NvcGUgPSBuZXcgTGlmZXRpbWUuQ0xpZmV0aW1lU2NvcGUoIHRoaXMubV9jb21wb25lbnRSZWdpc3RyeSwgbnVsbCwgbnVsbCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR2V0VGFnKCk6IFVMaWZldGltZVNjb3BlVGFnVHlwZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBCZWdpbkxpZmV0aW1lU2NvcGUodGFnPzogVUxpZmV0aW1lU2NvcGVUYWdUeXBlKTogSUxpZmV0aW1lU2NvcGUge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3Jvb3RMaWZldGltZVNjb3BlLkJlZ2luTGlmZXRpbWVTY29wZSggdGFnICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIERpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9yb290TGlmZXRpbWVTY29wZS5EaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IENvbXBvbmVudFJlZ2lzdHJ5KCk6IENvcmUuSUNvbXBvbmVudFJlZ2lzdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2NvbXBvbmVudFJlZ2lzdHJ5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmVzb2x2ZUNvbXBvbmVudChyZWdpc3RyYXRpb246IElDb21wb25lbnRSZWdpc3RyYXRpb24sIHBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSk6IG9iamVjdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9yb290TGlmZXRpbWVTY29wZS5SZXNvbHZlQ29tcG9uZW50KCByZWdpc3RyYXRpb24sIHBhcmFtZXRlcnMgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlc29sdmU8VFNlcnZpY2UgZXh0ZW5kcyBvYmplY3Q+KHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPFRTZXJ2aWNlPiwgLi4ucGFyYW1ldGVyczogQ1BhcmFtZXRlcltdKTogVFNlcnZpY2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcm9vdExpZmV0aW1lU2NvcGUuUmVzb2x2ZSggdHlwZSwgLi4ucGFyYW1ldGVycyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmVzb2x2ZU5hbWVkPFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0PiggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8VFNlcnZpY2U+LCBuYW1lOiBzdHJpbmcsIC4uLnBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSApOiBUU2VydmljZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9yb290TGlmZXRpbWVTY29wZS5SZXNvbHZlTmFtZWQoIHR5cGUsIG5hbWUsIC4uLnBhcmFtZXRlcnMgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgUmVzb2x2ZUtleWVkPFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0LCBUS2V5Pih0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTxUU2VydmljZT4sIGtleTogVEtleSwgLi4ucGFyYW1ldGVyczogQ1BhcmFtZXRlcltdKTogVFNlcnZpY2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcm9vdExpZmV0aW1lU2NvcGUuUmVzb2x2ZUtleWVkKCB0eXBlLCBrZXksIC4uLnBhcmFtZXRlcnMgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUcnlSZXNvbHZlS2V5ZWQ8VFNlcnZpY2UgZXh0ZW5kcyBvYmplY3QsIFRLZXk+KHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPFRTZXJ2aWNlPiwga2V5OiBUS2V5LCAuLi5wYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10pOiBUU2VydmljZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9yb290TGlmZXRpbWVTY29wZS5UcnlSZXNvbHZlS2V5ZWQoIHR5cGUsIGtleSwgLi4ucGFyYW1ldGVycyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldERpc3Bvc2VyKCk6IElEaXNwb3NlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9yb290TGlmZXRpbWVTY29wZS5HZXREaXNwb3NlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENEZWZhdWx0UHJvcGVydHlTZWxlY3RvciBpbXBsZW1lbnRzIElQcm9wZXJ0eVNlbGVjdG9yXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fcHJlc2VydmVTZXRWYWx1ZXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBwcmVzZXJ2ZVNldFZhbHVlcz86IGJvb2xlYW4gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3ByZXNlcnZlU2V0VmFsdWVzID0gKCBwcmVzZXJ2ZVNldFZhbHVlcyA9PSB0cnVlICkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQcm92aWRlcyBkZWZhdWx0IGZpbHRlcmluZyB0byBkZXRlcm1pbmUgaWYgcHJvcGVydHkgc2hvdWxkIGJlIGluamVjdGVkIGJ5IHJlamVjdGluZ1xyXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUluZm8gXHJcbiAgICAgICAgICogQHBhcmFtIGluc3RhbmNlIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBJbmplY3RQcm9wZXJ0eSggcHJvcGVydHlJbmZvOiBTeXN0ZW0uUmVmbGVjdGlvbi5DUHJvcGVydHlJbmZvLCBpbnN0YW5jZTogb2JqZWN0ICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggcHJvcGVydHlJbmZvLkNhbldyaXRlID09IGZhbHNlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV9wcmVzZXJ2ZVNldFZhbHVlcyA9PSB0cnVlICYmIHByb3BlcnR5SW5mby5DYW5SZWFkID09IGZhbHNlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5SW5mby5HZXRWYWx1ZSggaW5zdGFuY2UgKSA9PSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0RlbGVnYXRlUHJvcGVydHlTZWxlY3RvciBpbXBsZW1lbnRzIElQcm9wZXJ0eVNlbGVjdG9yXHJcbiAgICB7XHJcbiAgICAgICAgSW5qZWN0UHJvcGVydHkoIHByb3BlcnR5SW5mbzogU3lzdGVtLlJlZmxlY3Rpb24uQ1Byb3BlcnR5SW5mbywgaW5zdGFuY2U6IG9iamVjdCApOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENEaXNwb3NlciBpbXBsZW1lbnRzIElEaXNwb3NlclxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgbV9pdGVtczogU3lzdGVtLklEaXNwb3NhYmxlW10gPSBbXTtcclxuXHJcbiAgICAgICAgQWRkSW5zdGFuY2VGb3JEaXNwb3NhbChpbnN0YW5jZTogU3lzdGVtLklEaXNwb3NhYmxlKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9pdGVtcy5wdXNoKCBpbnN0YW5jZSApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBEaXNwb3NlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubV9pdGVtcy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMubV9pdGVtc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5EaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tX2l0ZW1zID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ1NlcnZpY2UgaW1wbGVtZW50cyBTeXN0ZW0uSUVxdWF0YWJsZTwgQ1NlcnZpY2UgPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBFcXVhbHMob3RoZXI6IENTZXJ2aWNlKTogYm9vbGVhbjtcclxuICAgIH1cclxufSIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9DU2VydmljZS50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDS2V5ZWRTZXJ2aWNlIGV4dGVuZHMgQ1NlcnZpY2UgaW1wbGVtZW50cyBJU2VydmljZVdpdGhUeXBlXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3NlcnZpY2VUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9rZXk6IGFueSA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvciggc2VydmljZUtleTogYW55LCBzZXJ2aWNlVHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5tX2tleSA9IHNlcnZpY2VLZXk7XHJcbiAgICAgICAgICAgIHRoaXMubV9zZXJ2aWNlVHlwZSA9IHNlcnZpY2VUeXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR2V0U2VydmljZVR5cGUoKTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fc2VydmljZVR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDaGFuZ2VUeXBlKG5ld1R5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPG9iamVjdD4pOiBDU2VydmljZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRXF1YWxzKCBvdGhlcjogQ0tleWVkU2VydmljZSApOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIG90aGVyLm1fc2VydmljZVR5cGUgPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCBvdGhlci5tX2tleSA9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5HZXRUeXBlKCkuSXNFcXVpdmFsZW50VG8oIG90aGVyLkdldFR5cGUoKSApICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fc2VydmljZVR5cGUuSXNFcXVpdmFsZW50VG8oIG90aGVyLm1fc2VydmljZVR5cGUgKSAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5Db21wYXJlS2V5cyggdGhpcy5tX2tleSwgb3RoZXIubV9rZXkgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgQ29tcGFyZUtleXMoIGsxOiBhbnksIGsyOiBhbnkgKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBrMSA9PT0gazIgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGlmICggKDxTeXN0ZW0uSUVxdWF0YWJsZTxhbnk+PmsxKS5FcXVhbHMgIT0gdW5kZWZpbmVkICYmICg8U3lzdGVtLklFcXVhdGFibGU8YW55Pj5rMikuRXF1YWxzICE9IHVuZGVmaW5lZCAmJiAoPFN5c3RlbS5JRXF1YXRhYmxlPGFueT4+azEpLkVxdWFscyggazIgKSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDTGlmZXRpbWVTY29wZVNlcnZpY2UgZXh0ZW5kcyBDU2VydmljZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEVxdWFscyggb3RoZXI6IENMaWZldGltZVNjb3BlU2VydmljZSApOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBDTGlmZXRpbWVTY29wZVNlcnZpY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9DQ29uc3RhbnRQYXJhbWV0ZXIudHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ05hbWVkUHJvcGVydHlQYXJhbWV0ZXIgZXh0ZW5kcyBDQ29uc3RhbnRQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIG5hbWU6IHN0cmluZywgdmFsdWU6IG9iamVjdCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlciggdmFsdWUsIHBpID0+IHRydWUgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1Jlc29sdmVkUGFyYW1ldGVyIGV4dGVuZHMgQ1BhcmFtZXRlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBDYW5TdXBwbHlWYWx1ZShwaTogU3lzdGVtLlJlZmxlY3Rpb24uQ1BhcmFtZXRlckluZm8sIGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0KTogeyByZXQ6IGJvb2xlYW47IHZhbHVlUHJvdmlkZXI/OiAoKSA9PiBvYmplY3Q7IH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENTZXJ2aWNlRXF1YWxpdHlDb21wYXJlciBpbXBsZW1lbnRzIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFcXVhbGl0eUNvbXBhcmVyPCBDU2VydmljZSA+XHJcbiAgICB7XHJcbiAgICAgICAgRXF1YWxzKGE6IENTZXJ2aWNlLCBiOiBDU2VydmljZSk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLkVxdWFscyggYiApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDVHlwZWRTZXJ2aWNlIGV4dGVuZHMgQ1NlcnZpY2UgaW1wbGVtZW50cyBJU2VydmljZVdpdGhUeXBlXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3NlcnZpY2VUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvciggc2VydmljZVR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9zZXJ2aWNlVHlwZSA9IHNlcnZpY2VUeXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFNlcnZpY2VUeXBlKCk6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3NlcnZpY2VUeXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIENoYW5nZVR5cGUoIG5ld1R5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICk6IENTZXJ2aWNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBFcXVhbHMoIG90aGVyOiBDVHlwZWRTZXJ2aWNlICk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggb3RoZXIubV9zZXJ2aWNlVHlwZSA9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5HZXRUeXBlKCkuSXNFcXVpdmFsZW50VG8oIG90aGVyLkdldFR5cGUoKSApICYmIHRoaXMubV9zZXJ2aWNlVHlwZS5Jc0VxdWl2YWxlbnRUbyggb3RoZXIubV9zZXJ2aWNlVHlwZSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmVcclxue1xyXG4gICAgdmFyIGdlbklEID0gMDtcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBHZW5JRCgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBnZW5JRCArKztcclxuICAgICAgICByZXR1cm4gZ2VuSUQudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgZW51bSBVSW5zdGFuY2VTaGFyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgTm9uZSxcclxuICAgICAgICBTaGFyZWQsXHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZS5MaWZldGltZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0N1cnJlbnRTY29wZUxpZmV0aW1lIGltcGxlbWVudHMgSUNvbXBvbmVudExpZmV0aW1lXHJcbiAgICB7XHJcbiAgICAgICAgRmluZFNjb3BlKG1vc3ROZXN0ZWRWaXNpYmxlU2NvcGU6IElTaGFyaW5nTGlmZXRpbWVTY29wZSk6IElTaGFyaW5nTGlmZXRpbWVTY29wZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vc3ROZXN0ZWRWaXNpYmxlU2NvcGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmUuTGlmZXRpbWVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENMaWZldGltZVNjb3BlIGltcGxlbWVudHMgSVNoYXJpbmdMaWZldGltZVNjb3BlXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2NvbXBvbmVudFJlZ2lzdHJ5OiBJQ29tcG9uZW50UmVnaXN0cnkgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9saWZldGltZVNjb3BlUm9vdDogSVNoYXJpbmdMaWZldGltZVNjb3BlID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fbGlmZXRpbWVTY29wZVBhcmVudDogSVNoYXJpbmdMaWZldGltZVNjb3BlID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fdGFnOiBVTGlmZXRpbWVTY29wZVRhZ1R5cGUgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9kaXNwb3NlcjogSURpc3Bvc2VyID0gbmV3IENEaXNwb3NlcigpO1xyXG5cclxuICAgICAgICBwcml2YXRlIG1fc2hhcmVkSW5zdGFuY2VzOiBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRGljdGlvbmFyeTwgc3RyaW5nLCBvYmplY3QgPiA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5DRGljdGlvbmFyeSgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNlbGZSZWdpc3RyYXRpb25JZCA9IENvcmUuR2VuSUQoKTtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBjb21wb25lbnRSZWdpc3RyeTogSUNvbXBvbmVudFJlZ2lzdHJ5LCBsaWZldGltZVNjb3BlUGFyZW50OiBDTGlmZXRpbWVTY29wZSwgdGFnOiBVTGlmZXRpbWVTY29wZVRhZ1R5cGUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2NvbXBvbmVudFJlZ2lzdHJ5ID0gY29tcG9uZW50UmVnaXN0cnk7XHJcbiAgICAgICAgICAgIHRoaXMubV9saWZldGltZVNjb3BlUGFyZW50ID0gbGlmZXRpbWVTY29wZVBhcmVudDtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fbGlmZXRpbWVTY29wZVBhcmVudCA9PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2xpZmV0aW1lU2NvcGVSb290ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMubV90YWcgPSBDTGlmZXRpbWVTY29wZS5Sb290VGFnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0YWcgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fbGlmZXRpbWVTY29wZVJvb3QgPSBsaWZldGltZVNjb3BlUGFyZW50LkdldFJvb3RMaWZldGltZVNjb3BlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fdGFnID0gdGFnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDkv53lrZjoh6rlt7HnmoRJRFxyXG4gICAgICAgICAgICB0aGlzLm1fc2hhcmVkSW5zdGFuY2VzLkFkZCggQ0xpZmV0aW1lU2NvcGUuU2VsZlJlZ2lzdHJhdGlvbklkLCB0aGlzICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBSb290VGFnOiBVTGlmZXRpbWVTY29wZVRhZ1R5cGUgPSBcInJvb3RcIjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgTWFrZUFub255bW91c1RhZygpOiBVTGlmZXRpbWVTY29wZVRhZ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBTeW1ib2woKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRQYXJlbnRMaWZldGltZVNjb3BlKCk6IElTaGFyaW5nTGlmZXRpbWVTY29wZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9saWZldGltZVNjb3BlUGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFJvb3RMaWZldGltZVNjb3BlKCk6IElTaGFyaW5nTGlmZXRpbWVTY29wZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9saWZldGltZVNjb3BlUm9vdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRPckNyZWF0ZUFuZFNoYXJlKCBpZDogc3RyaW5nLCBjcmVhdG9yOiBTeXN0ZW0uVENhbGxiYWNrPCAoKSA9PiBvYmplY3QgPiApOiBvYmplY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpbnN0YW5jZSA9IHRoaXMubV9zaGFyZWRJbnN0YW5jZXMuR2V0KCBpZCApO1xyXG4gICAgICAgICAgICBpZiAoIGluc3RhbmNlICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG5cclxuICAgICAgICAgICAgaW5zdGFuY2UgPSBjcmVhdG9yLkV4ZWN1dGUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubV9zaGFyZWRJbnN0YW5jZXMuQWRkKCBpZCwgaW5zdGFuY2UgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBCZWdpbkxpZmV0aW1lU2NvcGUoIHRhZz86IFVMaWZldGltZVNjb3BlVGFnVHlwZSApOiBJTGlmZXRpbWVTY29wZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0YWcgPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQmVnaW5MaWZldGltZVNjb3BlKCBDTGlmZXRpbWVTY29wZS5NYWtlQW5vbnltb3VzVGFnKCkgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5DaGVja1RhZ0lzVW5pcXVlKCB0YWcgKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzY29wZSA9IG5ldyBDTGlmZXRpbWVTY29wZSggdGhpcy5tX2NvbXBvbmVudFJlZ2lzdHJ5LCB0aGlzLCB0YWcgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgZ2V0IENvbXBvbmVudFJlZ2lzdHJ5KCk6IElDb21wb25lbnRSZWdpc3RyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9jb21wb25lbnRSZWdpc3RyeTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgUmVzb2x2ZUNvbXBvbmVudChyZWdpc3RyYXRpb246IElDb21wb25lbnRSZWdpc3RyYXRpb24sIHBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSk6IG9iamVjdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5DaGVja05vdERpc3Bvc2VkKCk7XHJcbiAgICAgICAgICAgIGxldCBvcGVyYXRpb24gPSBuZXcgUmVzb2x2aW5nLkNSZXNvbHZlT3BlcmF0aW9uKCB0aGlzICk7XHJcbiAgICAgICAgICAgIHJldHVybiBvcGVyYXRpb24uRXhlY3V0ZSggcmVnaXN0cmF0aW9uLCBwYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSZXNvbHZlPFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0PiggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8VFNlcnZpY2U+LCAuLi5wYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10gKTogVFNlcnZpY2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSB0aGlzLlRyeVJlc29sdmVTZXJ2aWNlKCBuZXcgQ1R5cGVkU2VydmljZSggdHlwZSApLCBwYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgICAgIGlmICggcmV0LnN1Y2NlZWQgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIGBDYW4ndCByZXNvbHZlIGluc3RhbmNlIG9mIHR5cGUgKCR7dHlwZS5HZXROaWNrbmFtZSgpfSlgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDxUU2VydmljZT5yZXQuaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSZXNvbHZlTmFtZWQ8VFNlcnZpY2UgZXh0ZW5kcyBvYmplY3Q+KCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTxUU2VydmljZT4sIG5hbWU6IHN0cmluZywgLi4ucGFyYW1ldGVyczogQ1BhcmFtZXRlcltdICk6IFRTZXJ2aWNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmV0ID0gdGhpcy5UcnlSZXNvbHZlU2VydmljZSggbmV3IENLZXllZFNlcnZpY2UoIG5hbWUsIHR5cGUgKSwgcGFyYW1ldGVycyApO1xyXG4gICAgICAgICAgICBpZiAoIHJldC5zdWNjZWVkID09IGZhbHNlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDxUU2VydmljZT5yZXQuaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUmVzb2x2ZUtleWVkPFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0LCBUS2V5PiggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8VFNlcnZpY2U+LCBrZXk6IFRLZXksIC4uLnBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSApOiBUU2VydmljZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJldCA9IHRoaXMuVHJ5UmVzb2x2ZVNlcnZpY2UoIG5ldyBDS2V5ZWRTZXJ2aWNlKCBrZXksIHR5cGUgKSwgcGFyYW1ldGVycyApO1xyXG4gICAgICAgICAgICBpZiAoIHJldC5zdWNjZWVkID09IGZhbHNlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBgQ2FuJ3QgcmVzb2x2ZSBpbnN0YW5jZSBvZiB0eXBlICgke3R5cGUuR2V0Tmlja25hbWUoKX0pIHdpdGgga2V5PCR7a2V5LnRvU3RyaW5nKCl9PmAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPFRTZXJ2aWNlPnJldC5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUcnlSZXNvbHZlS2V5ZWQ8VFNlcnZpY2UgZXh0ZW5kcyBvYmplY3QsIFRLZXk+KCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTxUU2VydmljZT4sIGtleTogVEtleSwgLi4ucGFyYW1ldGVyczogQ1BhcmFtZXRlcltdICk6IFRTZXJ2aWNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmV0ID0gdGhpcy5UcnlSZXNvbHZlU2VydmljZSggbmV3IENLZXllZFNlcnZpY2UoIGtleSwgdHlwZSApLCBwYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgICAgIGlmICggcmV0LnN1Y2NlZWQgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPFRTZXJ2aWNlPnJldC5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgVHJ5UmVzb2x2ZVNlcnZpY2UoIHNlcnZpY2U6IENTZXJ2aWNlLCBwYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10gKTogeyBzdWNjZWVkOiBib29sZWFuLCBpbnN0YW5jZT86IG9iamVjdCB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmVnaXN0cmF0aW9uID0gdGhpcy5Db21wb25lbnRSZWdpc3RyeS5HZXRSZWdpc3RyYXRpb24oIHNlcnZpY2UgKTtcclxuICAgICAgICAgICAgaWYgKCByZWdpc3RyYXRpb24gPT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN1Y2NlZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogdGhpcy5SZXNvbHZlQ29tcG9uZW50KCByZWdpc3RyYXRpb24sIHBhcmFtZXRlcnMgKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIERpc3Bvc2UoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2Rpc3Bvc2VyLkRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5tX3NoYXJlZEluc3RhbmNlcy5DbGVhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFRhZygpIDogVUxpZmV0aW1lU2NvcGVUYWdUeXBlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3RhZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgQ2hlY2tUYWdJc1VuaXF1ZSggdGFnOiBVTGlmZXRpbWVTY29wZVRhZ1R5cGUgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHNjb3BlUGFyZW50OiBJU2hhcmluZ0xpZmV0aW1lU2NvcGUgPSB0aGlzO1xyXG4gICAgICAgICAgICB3aGlsZSAoIHNjb3BlUGFyZW50IClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZVBhcmVudC5HZXRUYWcoKSA9PSB0YWcgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJcIiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2NvcGVQYXJlbnQgPSBzY29wZVBhcmVudC5HZXRQYXJlbnRMaWZldGltZVNjb3BlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgQ2hlY2tOb3REaXNwb3NlZCgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldERpc3Bvc2VyKCk6IElEaXNwb3NlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9kaXNwb3NlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZS5MaWZldGltZVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ01hdGNoaW5nU2NvcGVMaWZldGltZSBpbXBsZW1lbnRzIElDb21wb25lbnRMaWZldGltZVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV90YWdUb01hdGNoOiBVTGlmZXRpbWVTY29wZVRhZ1R5cGVbXSA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggLi4uc2NvcGVUYWc6IFVMaWZldGltZVNjb3BlVGFnVHlwZVtdIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV90YWdUb01hdGNoID0gc2NvcGVUYWc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEZpbmRTY29wZShtb3N0TmVzdGVkVmlzaWJsZVNjb3BlOiBJU2hhcmluZ0xpZmV0aW1lU2NvcGUpOiBJU2hhcmluZ0xpZmV0aW1lU2NvcGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBuZXh0ID0gbW9zdE5lc3RlZFZpc2libGVTY29wZTtcclxuICAgICAgICAgICAgd2hpbGUgKCBuZXh0IClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLm1fdGFnVG9NYXRjaC5pbmRleE9mKCBuZXh0LkdldFRhZygpICkgPj0gMCApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XHJcbiAgICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5HZXRQYXJlbnRMaWZldGltZVNjb3BlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmUuTGlmZXRpbWVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENSb290U2NvcGVMaWZldGltZSBpbXBsZW1lbnRzIElDb21wb25lbnRMaWZldGltZVxyXG4gICAge1xyXG4gICAgICAgIEZpbmRTY29wZShtb3N0TmVzdGVkVmlzaWJsZVNjb3BlOiBJU2hhcmluZ0xpZmV0aW1lU2NvcGUpOiBJU2hhcmluZ0xpZmV0aW1lU2NvcGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb3N0TmVzdGVkVmlzaWJsZVNjb3BlLkdldFJvb3RMaWZldGltZVNjb3BlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlLlJlZ2lzdHJhdGlvblxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0NvbXBvbmVudFJlZ2lzdHJhdGlvbiBpbXBsZW1lbnRzIElDb21wb25lbnRSZWdpc3RyYXRpb25cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIG1faWQ6IHN0cmluZztcclxuICAgICAgICBwcml2YXRlIG1fYWN0aXZhdG9yOiBJSW5zdGFuY2VBY3RpdmF0b3I7XHJcbiAgICAgICAgcHJpdmF0ZSBtX2xpZmV0aW1lOiBJQ29tcG9uZW50TGlmZXRpbWU7XHJcbiAgICAgICAgcHJpdmF0ZSBtX3NoYXJpbmc6IFVJbnN0YW5jZVNoYXJpbmc7XHJcbiAgICAgICAgcHJpdmF0ZSBtX293bmVyc2hpcDogYW55O1xyXG4gICAgICAgIHByaXZhdGUgbV9zZXJ2aWNlczogUmVhZG9ubHlBcnJheTwgQ1NlcnZpY2UgPjtcclxuICAgICAgICBwcml2YXRlIG1fbWV0YWRhdGE6IHsgWyBrZXk6IHN0cmluZyBdOiBvYmplY3QgfTtcclxuICAgICAgICBwcml2YXRlIG1fdGFyZ2V0OiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fYWN0aXZhdGluZ0hhbmRsZXJzOiBTeXN0ZW0uVENhbGxiYWNrQXJyYXk8ICggc2VuZGVyOiBhbnksIGU6IENvcmUuSUFjdGl2YXRpbmdFdmVudEFyZ3M8b2JqZWN0PiApID0+IHZvaWQgPiA9IG5ldyBTeXN0ZW0uVENhbGxiYWNrQXJyYXkoKTtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBpZDogc3RyaW5nLFxyXG4gICAgICAgICAgICBhY3RpdmF0b3I6IElJbnN0YW5jZUFjdGl2YXRvcixcclxuICAgICAgICAgICAgbGlmZXRpbWU6IElDb21wb25lbnRMaWZldGltZSxcclxuICAgICAgICAgICAgc2hhcmluZzogVUluc3RhbmNlU2hhcmluZyxcclxuICAgICAgICAgICAgb3duZXJzaGlwOiBhbnksXHJcbiAgICAgICAgICAgIHNlcnZpY2VzOiBSZWFkb25seUFycmF5PCBDU2VydmljZSA+LFxyXG4gICAgICAgICAgICBtZXRhZGF0YTogeyBbIGtleTogc3RyaW5nIF06IG9iamVjdCB9LFxyXG4gICAgICAgICAgICB0YXJnZXQ/OiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9pZCA9IGlkO1xyXG4gICAgICAgICAgICB0aGlzLm1fYWN0aXZhdG9yID0gYWN0aXZhdG9yO1xyXG4gICAgICAgICAgICB0aGlzLm1fbGlmZXRpbWUgPSBsaWZldGltZTtcclxuICAgICAgICAgICAgdGhpcy5tX3NoYXJpbmcgPSBzaGFyaW5nO1xyXG4gICAgICAgICAgICB0aGlzLm1fb3duZXJzaGlwID0gb3duZXJzaGlwO1xyXG4gICAgICAgICAgICB0aGlzLm1fc2VydmljZXMgPSBzZXJ2aWNlcztcclxuICAgICAgICAgICAgdGhpcy5tX21ldGFkYXRhID0gbWV0YWRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMubV90YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IElEKCk6IHN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9pZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQWN0aXZhdG9yKCk6IElJbnN0YW5jZUFjdGl2YXRvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9hY3RpdmF0b3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IExpZmV0aW1lKCk6IElDb21wb25lbnRMaWZldGltZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9saWZldGltZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgU2hhcmluZygpOiBVSW5zdGFuY2VTaGFyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3NoYXJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFNlcnZpY2VzKCk6IFJlYWRvbmx5QXJyYXk8IENTZXJ2aWNlID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fc2VydmljZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IE1ldGFkdGEoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9tZXRhZGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgVGFyZ2V0KCk6IElDb21wb25lbnRSZWdpc3RyYXRpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBQcmVwYXJpbmcoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmFpc2VQcmVwYXJpbmcoY29udGV4dDogSUNvbXBvbmVudENvbnRleHQsIHBhcmFtZXRlcnM6IEFycmF5PCBhbnkgPik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBBY3RpdmF0aW5nKCk6IFN5c3RlbS5UQ2FsbGJhY2tBcnJheTwgKCBzZW5kZXI6IGFueSwgZTogQ29yZS5JQWN0aXZhdGluZ0V2ZW50QXJnczxvYmplY3Q+ICkgPT4gdm9pZCA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2FjdGl2YXRpbmdIYW5kbGVycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBSYWlzZUFjdGl2YXRpbmcoY29udGV4dDogSUNvbXBvbmVudENvbnRleHQsIHBhcmFtZXRlcnM6IFJlYWRvbmx5QXJyYXk8IENQYXJhbWV0ZXIgPiwgaW5zdGFuY2U6IG9iamVjdCApOiBvYmplY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhcmdzID0gbmV3IENBY3RpdmF0aW5nRXZlbnRBcmdzKCBjb250ZXh0LCB0aGlzLCBwYXJhbWV0ZXJzLCBpbnN0YW5jZSApO1xyXG4gICAgICAgICAgICB0aGlzLkFjdGl2YXRpbmcuRXhlY3V0ZSggdGhpcywgYXJncyApO1xyXG4gICAgICAgICAgICByZXR1cm4gYXJncy5JbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQWN0aXZhdGVkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmFpc2VBY3RpdmF0ZWQoY29udGV4dDogSUNvbXBvbmVudENvbnRleHQsIHBhcmFtZXRlcnM6IFJlYWRvbmx5QXJyYXk8IENQYXJhbWV0ZXIgPiwgaW5zdGFuY2U6IG9iamVjdCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRGlzcG9zZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZS5SZWdpc3RyYXRpb25cclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENDb21wb25lbnRSZWdpc3RyeSBpbXBsZW1lbnRzIElDb21wb25lbnRSZWdpc3RyeVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9yZWdpc3RyYXRpb25zOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uW10gPSBbXTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3NlcnZpY2VJbmZvOiBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRGljdGlvbmFyeTwgQ1NlcnZpY2UsIENTZXJ2aWNlUmVnaXN0cmF0aW9uSW5mbyA+ID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkNEaWN0aW9uYXJ5PCBDU2VydmljZSwgQ1NlcnZpY2VSZWdpc3RyYXRpb25JbmZvID4oIHsgY29tcGFyZXI6IG5ldyBDU2VydmljZUVxdWFsaXR5Q29tcGFyZXIoKSB9ICk7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBHZXRQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9IHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEdldFJlZ2lzdHJhdGlvbihzZXJ2aWNlOiBDU2VydmljZSk6IElDb21wb25lbnRSZWdpc3RyYXRpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpbmZvID0gdGhpcy5tX3NlcnZpY2VJbmZvLkdldCggc2VydmljZSApO1xyXG4gICAgICAgICAgICBpZiAoIGluZm8gPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudFJlZ2lzdHJhdGlvbiA9IGluZm8uR2V0UmVnaXN0cmF0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRSZWdpc3RyYXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBJc1JlZ2lzdGVyZWQoc2VydmljZTogQ1NlcnZpY2UpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSZWdpc3RlciggcmVnaXN0cmF0aW9uOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uLCBwcmVzZXJ2ZURlZmF1bHRzPzogYm9vbGVhbiApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkFkZFJlZ2lzdHJhdGlvbiggcmVnaXN0cmF0aW9uLCBwcmVzZXJ2ZURlZmF1bHRzICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXRSZWdpc3RyYXRpb25zKCk6IEFycmF5PCBJQ29tcG9uZW50UmVnaXN0cmF0aW9uID4ge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldFJlZ2lzdHJhdGlvbnNGb3Ioc2VydmljZTogQ1NlcnZpY2UpOiBBcnJheTwgSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiA+IHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBBZGRSZWdpc3RyYXRpb25Tb3VyY2Uoc291cmNlOiBJUmVnaXN0cmF0aW9uU291cmNlKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR2V0UmVnaXN0cmF0aW9uU291cmNlcygpOiBBcnJheTwgSVJlZ2lzdHJhdGlvblNvdXJjZSA+IHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBIYXNMb2NhbENvbXBvbmVudHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIEFkZFJlZ2lzdHJhdGlvbiggcmVnaXN0cmF0aW9uOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uLCBwcmVzZXJ2ZURlZmF1bHRzOiBib29sZWFuLCBvcmlnaW5hdGVkRnJvbVNvdXJjZTogYm9vbGVhbiA9IGZhbHNlICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBzZXJ2aWNlcyA9IHJlZ2lzdHJhdGlvbi5TZXJ2aWNlcztcclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc2VydmljZXMubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHMgPSBzZXJ2aWNlc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZm8gPSB0aGlzLkdldFNlcnZpY2VJbmZvKCBzICk7XHJcbiAgICAgICAgICAgICAgICBpbmZvLkFkZEltcGxlbWVudGF0aW9uKCByZWdpc3RyYXRpb24sIHByZXNlcnZlRGVmYXVsdHMsIG9yaWdpbmF0ZWRGcm9tU291cmNlICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tX3JlZ2lzdHJhdGlvbnMucHVzaCggcmVnaXN0cmF0aW9uICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIEdldFNlcnZpY2VJbmZvKCBzZXJ2aWNlOiBDU2VydmljZSApOiBDU2VydmljZVJlZ2lzdHJhdGlvbkluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpbmZvID0gdGhpcy5tX3NlcnZpY2VJbmZvLkdldCggc2VydmljZSApO1xyXG4gICAgICAgICAgICBpZiAoIGluZm8gIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5mbztcclxuICAgICAgICAgICAgaW5mbyA9IG5ldyBDU2VydmljZVJlZ2lzdHJhdGlvbkluZm8oIHNlcnZpY2UgKTtcclxuICAgICAgICAgICAgdGhpcy5tX3NlcnZpY2VJbmZvLkFkZCggc2VydmljZSwgaW5mbyApO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5mbztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZS5SZWdpc3RyYXRpb25cclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENTZXJ2aWNlUmVnaXN0cmF0aW9uSW5mb1xyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9zZXJ2aWNlOiBDU2VydmljZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9kZWZhdWx0SW1wbGVtZW50YXRpb25zOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uW10gPSBbXTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX3ByZXNlcnZlRGVmYXVsdEltcGxlbWVudGF0aW9uczogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbltdID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX3NvdXJjZUltcGxlbWVudGF0aW9uczogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbltdID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBzZXJ2aWNlOiBDU2VydmljZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQWRkSW1wbGVtZW50YXRpb24oIHJlZ2lzdHJhdGlvbjogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiwgcHJlc2VydmVEZWZhdWx0czogYm9vbGVhbiwgb3JpZ2luYXRlZEZyb21Tb3VyY2U6IGJvb2xlYW4gKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBwcmVzZXJ2ZURlZmF1bHRzID09IHRydWUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIG9yaWdpbmF0ZWRGcm9tU291cmNlID09IHRydWUgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5tX3NvdXJjZUltcGxlbWVudGF0aW9ucyA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubV9zb3VyY2VJbXBsZW1lbnRhdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9zb3VyY2VJbXBsZW1lbnRhdGlvbnMucHVzaCggcmVnaXN0cmF0aW9uICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLm1fcHJlc2VydmVEZWZhdWx0SW1wbGVtZW50YXRpb25zID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tX3ByZXNlcnZlRGVmYXVsdEltcGxlbWVudGF0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX3ByZXNlcnZlRGVmYXVsdEltcGxlbWVudGF0aW9ucy5wdXNoKCByZWdpc3RyYXRpb24gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggb3JpZ2luYXRlZEZyb21Tb3VyY2UgPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2RlZmF1bHRJbXBsZW1lbnRhdGlvbnMucHVzaCggcmVnaXN0cmF0aW9uICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRSZWdpc3RyYXRpb24oKTogSUNvbXBvbmVudFJlZ2lzdHJhdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudFJlZ2lzdHJhdGlvbjogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV9kZWZhdWx0SW1wbGVtZW50YXRpb25zICE9IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMubV9kZWZhdWx0SW1wbGVtZW50YXRpb25zLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFJlZ2lzdHJhdGlvbiA9IHRoaXMubV9kZWZhdWx0SW1wbGVtZW50YXRpb25zWyB0aGlzLm1fZGVmYXVsdEltcGxlbWVudGF0aW9ucy5sZW5ndGggLSAxIF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggY29tcG9uZW50UmVnaXN0cmF0aW9uID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMubV9zb3VyY2VJbXBsZW1lbnRhdGlvbnMgIT0gbnVsbCAmJiB0aGlzLm1fc291cmNlSW1wbGVtZW50YXRpb25zLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFJlZ2lzdHJhdGlvbiA9IHRoaXMubV9zb3VyY2VJbXBsZW1lbnRhdGlvbnNbIDAgXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBjb21wb25lbnRSZWdpc3RyYXRpb24gPT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5tX3ByZXNlcnZlRGVmYXVsdEltcGxlbWVudGF0aW9ucyAhPSBudWxsICYmIHRoaXMubV9wcmVzZXJ2ZURlZmF1bHRJbXBsZW1lbnRhdGlvbnMubGVuZ3RoID4gMCApXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UmVnaXN0cmF0aW9uID0gdGhpcy5tX3ByZXNlcnZlRGVmYXVsdEltcGxlbWVudGF0aW9uc1sgMCBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50UmVnaXN0cmF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmUuUmVzb2x2aW5nXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDSW5zdGFuY2VMb29rdXAgaW1wbGVtZW50cyBJQ29tcG9uZW50Q29udGV4dCwgSUluc3RhbmNlTG9va3VwXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX3JlZ2lzdHJhdGlvbjogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9jb250ZXh0OiBJUmVzb2x2ZU9wZXJhdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9hY3RpdmF0aW9uU2NvcGU6IElTaGFyaW5nTGlmZXRpbWVTY29wZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbV9wYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10gPSBudWxsO1xyXG5cclxuICAgICAgICBwcml2YXRlIG1fZXhlY3V0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtX25ld0luc3RhbmNlOiBvYmplY3QgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvbjogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbixcclxuICAgICAgICAgICAgY29udGV4dDogSVJlc29sdmVPcGVyYXRpb24sXHJcbiAgICAgICAgICAgIG1vc3ROZXN0ZWRWaXNpYmxlU2NvcGU6IElTaGFyaW5nTGlmZXRpbWVTY29wZSxcclxuICAgICAgICAgICAgcGFyYW1ldGVyczogQ1BhcmFtZXRlcltdXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3JlZ2lzdHJhdGlvbiA9IHJlZ2lzdHJhdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5tX2NvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLm1fcGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XHJcbiAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fYWN0aXZhdGlvblNjb3BlID0gdGhpcy5tX3JlZ2lzdHJhdGlvbi5MaWZldGltZS5GaW5kU2NvcGUoIG1vc3ROZXN0ZWRWaXNpYmxlU2NvcGUgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoIGUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXRDb21wb25lbnRSZWdpc3RyYXRpb24oKTogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fcmVnaXN0cmF0aW9uXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHZXRBY3RpdmF0aW9uU2NvcGUoKTogSUxpZmV0aW1lU2NvcGUge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2FjdGl2YXRpb25TY29wZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldFBhcmFtZXRlcnMoKTogQ1BhcmFtZXRlcltdIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9wYXJhbWV0ZXJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBDb21wb25lbnRSZWdpc3RyeSgpOiBJQ29tcG9uZW50UmVnaXN0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fYWN0aXZhdGlvblNjb3BlLkNvbXBvbmVudFJlZ2lzdHJ5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmVzb2x2ZUNvbXBvbmVudChyZWdpc3RyYXRpb246IElDb21wb25lbnRSZWdpc3RyYXRpb24sIHBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSk6IG9iamVjdCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY29udGV4dC5HZXRPckNyZWF0ZUluc3RhbmNlKCB0aGlzLm1fYWN0aXZhdGlvblNjb3BlLCByZWdpc3RyYXRpb24sIHBhcmFtZXRlcnMgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEV4ZWN1dGUoKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV9leGVjdXRlZCA9PSB0cnVlIClcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tX2V4ZWN1dGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbnN0YW5jZTogYW55ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX3JlZ2lzdHJhdGlvbi5TaGFyaW5nID09IFVJbnN0YW5jZVNoYXJpbmcuTm9uZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5BY3RpdmF0ZSggdGhpcy5tX3BhcmFtZXRlcnMgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5tX2FjdGl2YXRpb25TY29wZS5HZXRPckNyZWF0ZUFuZFNoYXJlKCB0aGlzLm1fcmVnaXN0cmF0aW9uLklELCB0aGlzLl9fQ2FsbGJhY2soICgpID0+IHRoaXMuQWN0aXZhdGUoIHRoaXMubV9wYXJhbWV0ZXJzICkgKSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIEFjdGl2YXRlKCBwYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10gKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX25ld0luc3RhbmNlID0gdGhpcy5tX3JlZ2lzdHJhdGlvbi5BY3RpdmF0b3IuQWN0aXZhdGVJbnN0YW5jZSggdGhpcywgcGFyYW1ldGVycyApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnJvcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGRpc3Bvc2VcclxuICAgICAgICAgICAgaWYgKCAoPGFueT50aGlzLm1fbmV3SW5zdGFuY2UpWyBcIkRpc3Bvc2VcIiBdICE9IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9hY3RpdmF0aW9uU2NvcGUuR2V0RGlzcG9zZXIoKS5BZGRJbnN0YW5jZUZvckRpc3Bvc2FsKCA8YW55PnRoaXMubV9uZXdJbnN0YW5jZSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1fbmV3SW5zdGFuY2UgPSB0aGlzLm1fcmVnaXN0cmF0aW9uLlJhaXNlQWN0aXZhdGluZyggdGhpcywgcGFyYW1ldGVycywgdGhpcy5tX25ld0luc3RhbmNlICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX25ld0luc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlLlJlc29sdmluZ1xyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1Jlc29sdmVPcGVyYXRpb24gaW1wbGVtZW50cyBJQ29tcG9uZW50Q29udGV4dCwgSVJlc29sdmVPcGVyYXRpb25cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fbW9zdE5lc3RlZExpZmV0aW1lU2NvcGU6IElTaGFyaW5nTGlmZXRpbWVTY29wZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbW9zdE5lc3RlZExpZmV0aW1lU2NvcGU6IElTaGFyaW5nTGlmZXRpbWVTY29wZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fbW9zdE5lc3RlZExpZmV0aW1lU2NvcGUgPSBtb3N0TmVzdGVkTGlmZXRpbWVTY29wZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQ29tcG9uZW50UmVnaXN0cnkoKTogSUNvbXBvbmVudFJlZ2lzdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX21vc3ROZXN0ZWRMaWZldGltZVNjb3BlLkNvbXBvbmVudFJlZ2lzdHJ5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmVzb2x2ZUNvbXBvbmVudChyZWdpc3RyYXRpb246IElDb21wb25lbnRSZWdpc3RyYXRpb24sIHBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXSk6IG9iamVjdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuR2V0T3JDcmVhdGVJbnN0YW5jZSggdGhpcy5tX21vc3ROZXN0ZWRMaWZldGltZVNjb3BlLCByZWdpc3RyYXRpb24sIHBhcmFtZXRlcnMgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEV4ZWN1dGUoIHJlZ2lzdHJhdGlvbjogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiwgcGFyYW1ldGVyczogQ1BhcmFtZXRlcltdICk6IG9iamVjdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0gbnVsbDtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuUmVzb2x2ZUNvbXBvbmVudCggcmVnaXN0cmF0aW9uLCBwYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKCBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR2V0T3JDcmVhdGVJbnN0YW5jZSggY3VycmVudExpZmV0aW1lU2NvcGU6IElTaGFyaW5nTGlmZXRpbWVTY29wZSwgcmVnaXN0cmF0aW9uOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uLCBwYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10gKTogb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbG9va3VwID0gbmV3IENJbnN0YW5jZUxvb2t1cCggcmVnaXN0cmF0aW9uLCB0aGlzLCBjdXJyZW50TGlmZXRpbWVTY29wZSwgcGFyYW1ldGVycyApO1xyXG4gICAgICAgICAgICBsZXQgaW5zdGFuY2UgPSBsb29rdXAuRXhlY3V0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVHJ5UmVzb2x2ZVNlcnZpY2UoIHNlcnZpY2U6IENTZXJ2aWNlLCBwYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10gKTogeyBzdWNjZWVkOiBib29sZWFuLCBpbnN0YW5jZT86IG9iamVjdCB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gVHJ5UmVzb2x2ZVNlcnZpY2UoIHRoaXMsIHNlcnZpY2UsIHBhcmFtZXRlcnMgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuRmVhdHVyZXMuU2Nhbm5pbmdcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENTY2FubmluZ1JlZ2lzdHJhdGlvbkV4dGVuc2lvbnNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIFJlZ2lzdGVyQXNzZW1ibHlUeXBlcyggY29udGFpbmVyQnVpbGRlcjogQ0NvbnRhaW5lckJ1aWxkZXIsIGFzc2VtYmxpZXM6IFJlYWRvbmx5QXJyYXk8IFN5c3RlbS5SZWZsZWN0aW9uLkNBc3NlbWJseSA+ICk6IEJ1aWxkZXIuSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8b2JqZWN0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJiID0gbmV3IEJ1aWxkZXIuQ1JlZ2lzdHJhdGlvbkJ1aWxkZXIoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ29yZS5DVHlwZWRTZXJ2aWNlKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIE9iamVjdCApICksXHJcbiAgICAgICAgICAgICAgICBuZXcgQnVpbGRlci5DU2Nhbm5pbmdBY3RpdmF0b3JEYXRhKCksXHJcbiAgICAgICAgICAgICAgICB7fSApO1xyXG4gICAgICAgICAgICByYi5SZWdpc3RlckRhdGEuRGVmZXJyZWRDYWxsYmFjayA9IGNvbnRhaW5lckJ1aWxkZXIuUmVnaXN0ZXJDYWxsYmFjayggU3lzdGVtLl9fQ2FsbGJhY2soIGZ1bmN0aW9uKCB0aGlzOiBDQ29udGFpbmVyQnVpbGRlciwgY3IgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDU2Nhbm5pbmdSZWdpc3RyYXRpb25FeHRlbnNpb25zLlNjYW5Bc3NlbWJsaWVzKCBhc3NlbWJsaWVzLCBjciwgcmIgKTtcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIHJldHVybiByYjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgUmVnaXN0ZXJUeXBlcyggY29udGFpbmVyQnVpbGRlcjogQ0NvbnRhaW5lckJ1aWxkZXIsIHR5cGVzOiBSZWFkb25seUFycmF5PCBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA+ICk6IEJ1aWxkZXIuSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8b2JqZWN0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJiID0gbmV3IEJ1aWxkZXIuQ1JlZ2lzdHJhdGlvbkJ1aWxkZXIoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ29yZS5DVHlwZWRTZXJ2aWNlKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIE9iamVjdCApICksXHJcbiAgICAgICAgICAgICAgICBuZXcgQnVpbGRlci5DU2Nhbm5pbmdBY3RpdmF0b3JEYXRhKCksXHJcbiAgICAgICAgICAgICAgICB7fSApO1xyXG4gICAgICAgICAgICByYi5SZWdpc3RlckRhdGEuRGVmZXJyZWRDYWxsYmFjayA9IGNvbnRhaW5lckJ1aWxkZXIuUmVnaXN0ZXJDYWxsYmFjayggU3lzdGVtLl9fQ2FsbGJhY2soIGZ1bmN0aW9uKCB0aGlzOiBDQ29udGFpbmVyQnVpbGRlciwgY3IgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDU2Nhbm5pbmdSZWdpc3RyYXRpb25FeHRlbnNpb25zLlNjYW5UeXBlcyggdHlwZXMsIGNyLCByYiApO1xyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgcmV0dXJuIHJiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgU2NhbkFzc2VtYmxpZXMoIGFzc2VtYmxpZXM6IFJlYWRvbmx5QXJyYXk8IFN5c3RlbS5SZWZsZWN0aW9uLkNBc3NlbWJseSA+LCBjb21wb25lbnRSZWdpc3RyeTogQ29yZS5JQ29tcG9uZW50UmVnaXN0cnksIHJlZ2lzdHJhdGlvbkJ1aWxkZXI6IEJ1aWxkZXIuSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8b2JqZWN0PiApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHlwZXM6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgYXNzZW1ibGllcy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXNzZW1ibHkgPSBhc3NlbWJsaWVzWyBpIF07XHJcbiAgICAgICAgICAgICAgICB0eXBlcyA9IHR5cGVzLmNvbmNhdCggYXNzZW1ibHkuR2V0VHlwZXMoKSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuU2NhblR5cGVzKCB0eXBlcywgY29tcG9uZW50UmVnaXN0cnksIHJlZ2lzdHJhdGlvbkJ1aWxkZXIgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFNjYW5UeXBlcyggdHlwZXM6IFJlYWRvbmx5QXJyYXk8IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID4sIGNvbXBvbmVudFJlZ2lzdHJ5OiBDb3JlLklDb21wb25lbnRSZWdpc3RyeSwgcmVnaXN0cmF0aW9uQnVpbGRlcjogQnVpbGRlci5JUmVnaXN0cmF0aW9uQnVpbGRlcjxvYmplY3Q+ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmF0b3JEYXRhOiBCdWlsZGVyLkNTY2FubmluZ0FjdGl2YXRvckRhdGEgPSA8QnVpbGRlci5DU2Nhbm5pbmdBY3RpdmF0b3JEYXRhPnJlZ2lzdHJhdGlvbkJ1aWxkZXIuQWN0aXZhdG9yRGF0YTtcclxuICAgICAgICAgICAgbGV0IGZpbHRlcnMgPSBhY3RpdmF0b3JEYXRhLkZpbHRlcnM7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHR5cGVzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ID0gdHlwZXNbIGkgXTtcclxuICAgICAgICAgICAgICAgIGxldCBmaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZm9yICggbGV0IGogPSAwOyBqIDwgZmlsdGVycy5sZW5ndGg7IGogKysgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJUZW1wID0gZmlsdGVyc1sgaiBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggZmlsdGVyVGVtcCggdCApID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIGZpdCA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2Nhbm5lZCA9IG5ldyBCdWlsZGVyLkNSZWdpc3RyYXRpb25CdWlsZGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDb3JlLkNUeXBlZFNlcnZpY2UoIHQgKSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQnVpbGRlci5DQ29uY3JldGVSZWZsZWN0aW9uQWN0aXZhdG9yRGF0YSggdCApLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBCdWlsZGVyLkNTaW5nbGVSZWdpc3RyYXRpb25TdHlsZSgpICk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2Nhbm5lZC5SZWdpc3RlckRhdGEuQ29weUZyb20oIHJlZ2lzdHJhdGlvbkJ1aWxkZXIuUmVnaXN0ZXJEYXRhLCBmYWxzZSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBqID0gMDsgaiA8IGFjdGl2YXRvckRhdGEuQ29uZmlndXJhdGlvbkFjdGlvbnMubGVuZ3RoOyBqICsrIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWN0aW9uID0gYWN0aXZhdG9yRGF0YS5Db25maWd1cmF0aW9uQWN0aW9uc1sgaiBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiggdCwgc2Nhbm5lZCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggc2Nhbm5lZC5SZWdpc3RlckRhdGEuR2V0U2VydmljZXMoKS5sZW5ndGggPiAwIClcclxuICAgICAgICAgICAgICAgICAgICBCdWlsZGVyLkNSZWdpc3RyYXRpb25CdWlsZGVySGVscGVyLlJlZ2lzdGVyU2luZ2xlQ29tcG9uZW50KCBjb21wb25lbnRSZWdpc3RyeSwgc2Nhbm5lZCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIEFzKCByZWdpc3RyYXRpb25CdWlsZGVyOiBCdWlsZGVyLklSZWdpc3RyYXRpb25CdWlsZGVyPG9iamVjdD4sIHNlcnZpY2VNYXBwaW5nOiAoIHQ6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICkgPT4gQ29yZS5DU2VydmljZVtdICk6IEJ1aWxkZXIuSVJlZ2lzdHJhdGlvbkJ1aWxkZXI8b2JqZWN0PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2YXRvckRhdGE6IEJ1aWxkZXIuQ1NjYW5uaW5nQWN0aXZhdG9yRGF0YSA9IDxCdWlsZGVyLkNTY2FubmluZ0FjdGl2YXRvckRhdGE+cmVnaXN0cmF0aW9uQnVpbGRlci5BY3RpdmF0b3JEYXRhO1xyXG4gICAgICAgICAgICBhY3RpdmF0b3JEYXRhLkNvbmZpZ3VyYXRpb25BY3Rpb25zLnB1c2goIGZ1bmN0aW9uKCB0eXBlLCByYiApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBtYXBwZWQgPSBzZXJ2aWNlTWFwcGluZyggdHlwZSApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGltcGwgPSAoPEJ1aWxkZXIuQ0NvbmNyZXRlUmVmbGVjdGlvbkFjdGl2YXRvckRhdGE+cmIuQWN0aXZhdG9yRGF0YSkuSW1wbGVtZW50YXRpb25UeXBlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFwcGxpZWQ6IENvcmUuQ1NlcnZpY2VbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgbWFwcGVkLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHMgPSBtYXBwZWRbIGkgXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYyA9IDxDb3JlLklTZXJ2aWNlV2l0aFR5cGU+PGFueT5zO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggY1sgXCJHZXRTZXJ2aWNlVHlwZVwiIF0gIT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaW1wbC5Jc0luaGVyaXRGcm9tKCBjLkdldFNlcnZpY2VUeXBlKCkgKSB8fCBpbXBsLklzRXF1aXZhbGVudFRvKCBjLkdldFNlcnZpY2VUeXBlKCkgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpZWQucHVzaCggcyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmIuQXNFeCggYXBwbGllZCApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlZ2lzdHJhdGlvbkJ1aWxkZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWNcclxue1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50Q29udGV4dFxyXG4gICAge1xyXG4gICAgICAgIHJlYWRvbmx5IENvbXBvbmVudFJlZ2lzdHJ5OiBDb3JlLklDb21wb25lbnRSZWdpc3RyeTtcclxuXHJcbiAgICAgICAgUmVzb2x2ZUNvbXBvbmVudCggcmVnaXN0cmF0aW9uOiBDb3JlLklDb21wb25lbnRSZWdpc3RyYXRpb24sIHBhcmFtZXRlcnM6IENvcmUuQ1BhcmFtZXRlcltdICk6IG9iamVjdDtcclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhY1xyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElDb250YWluZXIgZXh0ZW5kcyBJTGlmZXRpbWVTY29wZVxyXG4gICAge1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhY1xyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElMaWZldGltZVNjb3BlIGV4dGVuZHMgU3lzdGVtLklEaXNwb3NhYmxlLCBJQ29tcG9uZW50Q29udGV4dCwgQ29yZS5SZXNvbHZpbmcuSVJlc29sdXRpb25FeHRlbnNpb25cclxuICAgIHtcclxuICAgICAgICBHZXRUYWcoKSA6IFVMaWZldGltZVNjb3BlVGFnVHlwZTtcclxuXHJcbiAgICAgICAgQmVnaW5MaWZldGltZVNjb3BlKCB0YWc/OiBVTGlmZXRpbWVTY29wZVRhZ1R5cGUgKTogSUxpZmV0aW1lU2NvcGU7XHJcblxyXG4gICAgICAgIEdldERpc3Bvc2VyKCk6IENvcmUuSURpc3Bvc2VyO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWNcclxue1xyXG4gICAgZXhwb3J0IHR5cGUgVUxpZmV0aW1lU2NvcGVUYWdUeXBlID0gc3RyaW5nIHwgc3ltYm9sO1xyXG59XHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5CdWlsZGVyXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUFjdGl2YXRvckRhdGFcclxuICAgIHtcclxuICAgICAgICBHZXRUeXBlcygpOiAoIHQ6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICkgPT4gU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU7XHJcblxyXG4gICAgICAgIEdldEFjdGl2YXRvcigpOiBDb3JlLklJbnN0YW5jZUFjdGl2YXRvcjtcclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQnVpbGRlclxyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElDb25jcmV0ZUFjdGl2YXRvckRhdGFcclxuICAgIHtcclxuICAgICAgICBHZXRBY3RpdmF0b3IoKTogQ29yZS5JSW5zdGFuY2VBY3RpdmF0b3I7XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUFjdGl2YXRpbmdFdmVudEFyZ3M8IFQgPlxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgdGhlIGNvbnRleHQgaW4gd2hpY2ggdGhlIGFjdGl2YXRpb24gb2NjdXJyZWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVhZG9ubHkgQ29udGV4dDogSUNvbXBvbmVudENvbnRleHQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgdGhlIGNvbXBvbmVudCBwcm92aWRpbmcgdGhlIGluc3RhbmNlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlYWRvbmx5IFJlZ2lzdHJhdGlvbjogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyB0aGUgaW5zdGFuY2UgdGhhdCB3aWxsIGJlIHVzZWQgdG8gc2F0aXNmeSB0aGUgcmVxdWVzdC5cclxuICAgICAgICAgKi9cclxuICAgICAgICByZWFkb25seSBJbnN0YW5jZTogVDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGluc3RhbmNlIGNhbiBiZSByZXBsYWNlZCBpZiBuZWVkZWQsIGUuZy4gYnkgYW4gaW50ZXJmYWNlIHByb3h5LlxyXG4gICAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSBUaGUgb2JqZWN0IHRvIHVzZSBpbnN0ZWFkIG9mIHRoZSBhY3RpdmF0ZWQgaW5zdGFuY2UuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVwbGFjZUluc3RhbmNlKCBpbnN0YW5jZTogb2JqZWN0ICk6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgdGhlIHBhcmFtZXRlcnMgc3VwcGxpZWQgdG8gdGhlIGFjdGl2YXRvci5cclxuICAgICAgICAgKi9cclxuICAgICAgICByZWFkb25seSBQYXJhbWV0ZXJzOiBSZWFkb25seUFycmF5PCBDUGFyYW1ldGVyID47XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRMaWZldGltZVxyXG4gICAge1xyXG4gICAgICAgIEZpbmRTY29wZSggbW9zdE5lc3RlZFZpc2libGVTY29wZTogSVNoYXJpbmdMaWZldGltZVNjb3BlICk6IElTaGFyaW5nTGlmZXRpbWVTY29wZTtcclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudFJlZ2lzdHJhdGlvbiBleHRlbmRzIFN5c3RlbS5JRGlzcG9zYWJsZVxyXG4gICAge1xyXG4gICAgICAgIHJlYWRvbmx5IEFjdGl2YXRvcjogSUluc3RhbmNlQWN0aXZhdG9yO1xyXG5cclxuICAgICAgICByZWFkb25seSBMaWZldGltZTogSUNvbXBvbmVudExpZmV0aW1lO1xyXG5cclxuICAgICAgICByZWFkb25seSBTaGFyaW5nOiBVSW5zdGFuY2VTaGFyaW5nO1xyXG5cclxuICAgICAgICByZWFkb25seSBJRDogc3RyaW5nO1xyXG5cclxuICAgICAgICByZWFkb25seSBTZXJ2aWNlczogUmVhZG9ubHlBcnJheTwgQ1NlcnZpY2UgPjtcclxuXHJcbiAgICAgICAgcmVhZG9ubHkgTWV0YWR0YTogYW55O1xyXG5cclxuICAgICAgICByZWFkb25seSBUYXJnZXQ6IElDb21wb25lbnRSZWdpc3RyYXRpb247XHJcblxyXG4gICAgICAgIHJlYWRvbmx5IFByZXBhcmluZzogYW55O1xyXG5cclxuICAgICAgICBSYWlzZVByZXBhcmluZyggY29udGV4dDogSUNvbXBvbmVudENvbnRleHQsIHBhcmFtZXRlcnM6IEFycmF5PCBhbnkgPiApOiB2b2lkO1xyXG5cclxuICAgICAgICByZWFkb25seSBBY3RpdmF0aW5nOiBTeXN0ZW0uVENhbGxiYWNrQXJyYXk8ICggc2VuZGVyOiBhbnksIGU6IENvcmUuSUFjdGl2YXRpbmdFdmVudEFyZ3M8b2JqZWN0PiApID0+IHZvaWQgPjtcclxuXHJcbiAgICAgICAgUmFpc2VBY3RpdmF0aW5nKCBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCwgcGFyYW1ldGVyczogUmVhZG9ubHlBcnJheTwgQ1BhcmFtZXRlciA+LCBpbnN0YW5jZTogb2JqZWN0ICk6IG9iamVjdDtcclxuXHJcbiAgICAgICAgcmVhZG9ubHkgQWN0aXZhdGVkOiBhbnk7XHJcblxyXG4gICAgICAgIFJhaXNlQWN0aXZhdGVkKCBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCwgcGFyYW1ldGVyczogUmVhZG9ubHlBcnJheTwgQ1BhcmFtZXRlciA+LCBpbnN0YW5jZTogb2JqZWN0ICk6IHZvaWQ7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRSZWdpc3RyeSBleHRlbmRzIFN5c3RlbS5JRGlzcG9zYWJsZVxyXG4gICAge1xyXG4gICAgICAgIEdldFByb3BlcnRpZXMoKTogeyBbIGtleTogc3RyaW5nIF06IG9iamVjdCB9O1xyXG5cclxuICAgICAgICBHZXRSZWdpc3RyYXRpb24oIHNlcnZpY2U6IENTZXJ2aWNlICk6IElDb21wb25lbnRSZWdpc3RyYXRpb247XHJcblxyXG4gICAgICAgIElzUmVnaXN0ZXJlZCggc2VydmljZTogQ1NlcnZpY2UgKTogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgUmVnaXN0ZXIoIHJlZ2lzdHJhdGlvbjogQ29yZS5JQ29tcG9uZW50UmVnaXN0cmF0aW9uLCBwcmVzZXJ2ZURlZmF1bHRzPzogYm9vbGVhbiApOiB2b2lkO1xyXG5cclxuICAgICAgICBHZXRSZWdpc3RyYXRpb25zKCk6IEFycmF5PCBJQ29tcG9uZW50UmVnaXN0cmF0aW9uID47XHJcblxyXG4gICAgICAgIEdldFJlZ2lzdHJhdGlvbnNGb3IoIHNlcnZpY2U6IENTZXJ2aWNlICk6IEFycmF5PCBJQ29tcG9uZW50UmVnaXN0cmF0aW9uID47XHJcblxyXG4gICAgICAgIEFkZFJlZ2lzdHJhdGlvblNvdXJjZSggc291cmNlOiBJUmVnaXN0cmF0aW9uU291cmNlICk6IHZvaWQ7XHJcblxyXG4gICAgICAgIEdldFJlZ2lzdHJhdGlvblNvdXJjZXMoKTogQXJyYXk8IElSZWdpc3RyYXRpb25Tb3VyY2UgPjtcclxuXHJcbiAgICAgICAgSGFzTG9jYWxDb21wb25lbnRzKCk6IGJvb2xlYW47XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElEaXNwb3NlciBleHRlbmRzIFN5c3RlbS5JRGlzcG9zYWJsZVxyXG4gICAge1xyXG4gICAgICAgIEFkZEluc3RhbmNlRm9yRGlzcG9zYWwoIGluc3RhbmNlOiBTeXN0ZW0uSURpc3Bvc2FibGUgKTogdm9pZDtcclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUluc3RhbmNlQWN0aXZhdG9yIGV4dGVuZHMgU3lzdGVtLklEaXNwb3NhYmxlXHJcbiAgICB7XHJcbiAgICAgICAgQWN0aXZhdGVJbnN0YW5jZSggY29udGV4dDogSUNvbXBvbmVudENvbnRleHQsIHBhcmFtZXRlcnM/OiBDUGFyYW1ldGVyW10gKTogb2JqZWN0O1xyXG5cclxuICAgICAgICBHZXRMaW1pdFR5cGUoKTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElQcm9wZXJ0eVNlbGVjdG9yXHJcbiAgICB7XHJcbiAgICAgICAgSW5qZWN0UHJvcGVydHkoIHByb3BlcnR5SW5mbzogU3lzdGVtLlJlZmxlY3Rpb24uQ1Byb3BlcnR5SW5mbywgaW5zdGFuY2U6IG9iamVjdCApOiBib29sZWFuO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5BdXRvZmFjLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUmVnaXN0cmF0aW9uU291cmNlXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlV2l0aFR5cGVcclxuICAgIHtcclxuICAgICAgICBHZXRTZXJ2aWNlVHlwZSgpOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTtcclxuXHJcbiAgICAgICAgQ2hhbmdlVHlwZSggbmV3VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKTogQ1NlcnZpY2U7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTaGFyaW5nTGlmZXRpbWVTY29wZSBleHRlbmRzIElMaWZldGltZVNjb3BlXHJcbiAgICB7XHJcbiAgICAgICAgR2V0UGFyZW50TGlmZXRpbWVTY29wZSgpOiBJU2hhcmluZ0xpZmV0aW1lU2NvcGU7XHJcblxyXG4gICAgICAgIEdldFJvb3RMaWZldGltZVNjb3BlKCk6IElTaGFyaW5nTGlmZXRpbWVTY29wZTtcclxuXHJcbiAgICAgICAgR2V0T3JDcmVhdGVBbmRTaGFyZSggaWQ6IHN0cmluZywgY3JlYXRvcjogU3lzdGVtLlRDYWxsYmFjazwgKCkgPT4gb2JqZWN0ID4gKTogb2JqZWN0O1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCB0eXBlIFVDYWxsYmFja0FjdGl2YXRpbmdGdW5jdGlvbjxUPiA9ICggZTogQ29yZS5JQWN0aXZhdGluZ0V2ZW50QXJnczxUPiApID0+IHZvaWQ7XHJcbiAgICBleHBvcnQgdHlwZSBVQ2FsbGJhY2tBY3RpdmF0aW5nPFQ+ID0gU3lzdGVtLlRDYWxsYmFjazwgVUNhbGxiYWNrQWN0aXZhdGluZ0Z1bmN0aW9uPFQ+ID4gfCBVQ2FsbGJhY2tBY3RpdmF0aW5nRnVuY3Rpb248VD47XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkF1dG9mYWMuQ29yZS5SZXNvbHZpbmdcclxue1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJSW5zdGFuY2VMb29rdXBcclxuICAgIHtcclxuICAgICAgICBHZXRDb21wb25lbnRSZWdpc3RyYXRpb24oKTogSUNvbXBvbmVudFJlZ2lzdHJhdGlvbjtcclxuXHJcbiAgICAgICAgR2V0QWN0aXZhdGlvblNjb3BlKCk6IElMaWZldGltZVNjb3BlO1xyXG5cclxuICAgICAgICBHZXRQYXJhbWV0ZXJzKCk6IENQYXJhbWV0ZXJbXTtcclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlLlJlc29sdmluZ1xyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElSZXNvbHV0aW9uRXh0ZW5zaW9uXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6I635Y+W5a6e5L6LXHJcbiAgICAgICAgICogQHBhcmFtIHR5cGUg5L6d6LWW57G75Z6LXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzb2x2ZTwgVFNlcnZpY2UgZXh0ZW5kcyBvYmplY3QgPihcclxuICAgICAgICAgICAgdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IFRTZXJ2aWNlID4sXHJcbiAgICAgICAgICAgIC4uLnBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXVxyXG4gICAgICAgICk6IFRTZXJ2aWNlO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDojrflj5blrp7kvotcclxuICAgICAgICAgKiBAcGFyYW0gdHlwZSDkvp3otZbnsbvlnotcclxuICAgICAgICAgKiBAcGFyYW0gbmFtZSDplK7lkI1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNvbHZlTmFtZWQ8IFRTZXJ2aWNlIGV4dGVuZHMgb2JqZWN0ID4oXHJcbiAgICAgICAgICAgIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBUU2VydmljZSA+LFxyXG4gICAgICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIC4uLnBhcmFtZXRlcnM6IENQYXJhbWV0ZXJbXVxyXG4gICAgICAgICk6IFRTZXJ2aWNlO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDojrflj5blrp7kvotcclxuICAgICAgICAgKiBAcGFyYW0gdHlwZSDkvp3otZbnsbvlnotcclxuICAgICAgICAgKiBAcGFyYW0ga2V5IOmUruWQjVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc29sdmVLZXllZDwgVFNlcnZpY2UgZXh0ZW5kcyBvYmplY3QsIFRLZXkgPihcclxuICAgICAgICAgICAgdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IFRTZXJ2aWNlID4sXHJcbiAgICAgICAgICAgIGtleTogVEtleSxcclxuICAgICAgICAgICAgLi4ucGFyYW1ldGVyczogQ1BhcmFtZXRlcltdXHJcbiAgICAgICAgKTogVFNlcnZpY2U7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiOt+WPluWunuS+i1xyXG4gICAgICAgICAqIEBwYXJhbSB0eXBlIOS+nei1luexu+Wei1xyXG4gICAgICAgICAqIEBwYXJhbSBrZXkg6ZSu5ZCNXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgVHJ5UmVzb2x2ZUtleWVkPCBUU2VydmljZSBleHRlbmRzIG9iamVjdCwgVEtleSA+KFxyXG4gICAgICAgICAgICB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVFNlcnZpY2UgPixcclxuICAgICAgICAgICAga2V5OiBUS2V5LFxyXG4gICAgICAgICAgICAuLi5wYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW11cclxuICAgICAgICApOiBUU2VydmljZTtcclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuQXV0b2ZhYy5Db3JlLlJlc29sdmluZ1xyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElSZXNvbHZlT3BlcmF0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgR2V0T3JDcmVhdGVJbnN0YW5jZSggY3VycmVudExpZmV0aW1lU2NvcGU6IElTaGFyaW5nTGlmZXRpbWVTY29wZSwgcmVnaXN0cmF0aW9uOiBJQ29tcG9uZW50UmVnaXN0cmF0aW9uLCBwYXJhbWV0ZXJzOiBDUGFyYW1ldGVyW10gKTogb2JqZWN0O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJHOlxcQ29kZUdpdFxcVHlwZXNjcmlwdEF1dG9mYWNcXGJpblxcQXV0b2ZhYyJ9

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
    var MVC;
    (function (MVC) {
        var Attributes;
        (function (Attributes) {
            let CAddControllerAttribute = class CAddControllerAttribute extends iberbar.System.CAttribute {
                constructor(controllerType) {
                    super();
                    this.m_controllerType = null;
                    this.m_controllerType = controllerType;
                }
                get ControllerType() {
                    return this.m_controllerType();
                }
            };
            CAddControllerAttribute = __decorate([
                iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Class, true, true),
                __metadata("design:paramtypes", [Function])
            ], CAddControllerAttribute);
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
            let CAddViewComponentAttribute = class CAddViewComponentAttribute extends iberbar.System.CAttribute {
                constructor(componentType) {
                    super();
                    this.m_componentType = null;
                    this.m_componentType = componentType;
                }
                get ComponentType() {
                    return this.m_componentType();
                }
            };
            CAddViewComponentAttribute = __decorate([
                iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Class, true, true),
                __metadata("design:paramtypes", [Function])
            ], CAddViewComponentAttribute);
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
            let CDisableViewComponentAttribute = class CDisableViewComponentAttribute extends iberbar.System.CAttribute {
                constructor(componentType) {
                    super();
                    this.m_componentType = null;
                    this.m_componentType = componentType;
                }
                get ComponentType() {
                    return this.m_componentType();
                }
            };
            CDisableViewComponentAttribute = __decorate([
                iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Class, true, true),
                __metadata("design:paramtypes", [Function])
            ], CDisableViewComponentAttribute);
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
            let CViewModelAttribute = class CViewModelAttribute extends iberbar.System.CAttribute {
            };
            CViewModelAttribute = __decorate([
                iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Field, false, false)
            ], CViewModelAttribute);
            Attributes.CViewModelAttribute = CViewModelAttribute;
        })(Attributes = MVC.Attributes || (MVC.Attributes = {}));
    })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));
var iberbar;
(function (iberbar) {
    var MVC;
    (function (MVC) {
        let Attributes;
        (function (Attributes) {
            let SetActionSummaryAttribute = class SetActionSummaryAttribute extends iberbar.System.CAttribute {
                constructor(name, summary) {
                    super();
                    this.m_name = null;
                    this.m_summary = null;
                    this.m_name = name;
                    this.m_summary = summary;
                }
                get Name() {
                    return this.m_name;
                }
                get Summary() {
                    return this.m_summary;
                }
            };
            SetActionSummaryAttribute = __decorate([
                iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Method, false, false),
                __metadata("design:paramtypes", [String, String])
            ], SetActionSummaryAttribute);
            Attributes.SetActionSummaryAttribute = SetActionSummaryAttribute;
        })(Attributes = MVC.Attributes || (MVC.Attributes = {}));
    })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));
var iberbar;
(function (iberbar) {
    var MVC;
    (function (MVC) {
        let Attributes;
        (function (Attributes) {
            let CSetControllerAttribute = class CSetControllerAttribute extends iberbar.System.CAttribute {
                constructor(controllerType) {
                    super();
                    this.m_controllerType = null;
                    this.m_controllerType = controllerType;
                }
                get ControllerType() {
                    return this.m_controllerType();
                }
            };
            CSetControllerAttribute = __decorate([
                iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Class, true, true),
                __metadata("design:paramtypes", [Function])
            ], CSetControllerAttribute);
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
})(iberbar || (iberbar = {}));
// namespace iberbar.MVC.Registration
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
            class CSingleInstanceViewAttribute extends iberbar.System.CAttribute {
            }
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
            class CActionBinder {
            }
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
            let CComponentBindActions = class CComponentBindActions {
                constructor() {
                    this.m_binderResult = null;
                }
                InitView(view) {
                    let binder = view.LifetimeScope.Resolve(iberbar.System.Reflection.TypeOf(Core.CActionBinder));
                    this.m_binderResult = binder.BindActions(view, null);
                }
                ReInitView(view) {
                    this.m_binderResult.Dispose();
                    this.m_binderResult = null;
                    this.InitView(view);
                }
                Dispose() {
                    this.m_binderResult.Dispose();
                }
            };
            CComponentBindActions = __decorate([
                iberbar.System.Reflection.AutoReflectMetadata_Constructor,
                iberbar.System.Reflection.TypeNickname("iberbar::MVC::Components::CComponentBindActions")
            ], CComponentBindActions);
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
            class CComponentBindModels {
                InitView(view) {
                    let binder = view.LifetimeScope.Resolve(iberbar.System.Reflection.TypeOf(Core.CViewModelBinder));
                    let viewType = view.GetType();
                    let fieldInfos = viewType.GetFields();
                    for (let i = 0; i < fieldInfos.length; i++) {
                        let field = fieldInfos[i];
                        if (field.IsDefined(iberbar.System.Reflection.TypeOf(MVC.Attributes.CViewModelAttribute)) == false)
                            continue;
                        if (field.FieldType == null)
                            continue;
                        let model = view.LifetimeScope.Resolve(field.FieldType);
                        binder.BindModel(view, model);
                        field.SetValue(view, model);
                    }
                }
                ReInitView(view) {
                    this.InitView(view);
                }
            }
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
            class CComponentKernel {
            }
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
            let CInitComponent_ViewController = class CInitComponent_ViewController {
                constructor() {
                    this.m_binderResults = null;
                }
                InitView(view) {
                    let viewType = view.GetType();
                    let controllerTypeAttributes = viewType.GetCustomAttributes(TypeOf(MVC.Attributes.CAddControllerAttribute), true);
                    if (controllerTypeAttributes.length == 0)
                        return;
                    this.m_binderResults = Array();
                    for (let i = 0; i < controllerTypeAttributes.length; i++) {
                        let attribute = controllerTypeAttributes[i];
                        let binder = view.LifetimeScope.Resolve(iberbar.System.Reflection.TypeOf(Core.CActionBinder));
                        let binderResult = binder.BindActions(view, attribute.ControllerType);
                        this.m_binderResults.push(binderResult);
                    }
                }
                ReInitView(view) {
                    if (this.m_binderResults != null && this.m_binderResults.length > 0) {
                        for (let i = 0; i < this.m_binderResults.length; i++) {
                            let r = this.m_binderResults[i];
                            r.Dispose();
                        }
                        this.m_binderResults = null;
                    }
                    this.InitView(view);
                }
                Dispose() {
                    if (this.m_binderResults != null && this.m_binderResults.length > 0) {
                        for (let i = 0; i < this.m_binderResults.length; i++) {
                            let r = this.m_binderResults[i];
                            r.Dispose();
                        }
                        this.m_binderResults = null;
                    }
                }
            };
            CInitComponent_ViewController = __decorate([
                iberbar.System.Reflection.AutoReflectMetadata_Constructor,
                iberbar.System.Reflection.TypeNickname("iberbar::Mvc::ViewComponents::CInitComponent_ViewController")
            ], CInitComponent_ViewController);
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
            class CDefaultMapper {
                constructor(componentKernelType, componentTypes) {
                    this.m_componentKernelType = null;
                    this.m_componentTypes = null;
                    this.m_componentTypesForViews = new iberbar.System.Collections.Generic.CDictionary({
                        comparer: this
                    });
                    this.m_componentKernelType = componentKernelType;
                    this.m_componentTypes = componentTypes;
                }
                GetComponentKernelType() {
                    return this.m_componentKernelType;
                }
                GetComponentTypes(viewType) {
                    let componentTypes;
                    componentTypes = this.m_componentTypesForViews.Get(viewType);
                    if (componentTypes == null) {
                        componentTypes = Array(...this.m_componentTypes);
                        let attrs = viewType.GetCustomAttributes(iberbar.System.Reflection.TypeOf(MVC.Attributes.CAddViewComponentAttribute), true);
                        if (attrs.length > 0) {
                            for (let i = 0; i < attrs.length; i++) {
                                let attribute = attrs[i];
                                componentTypes.push(attribute.ComponentType);
                            }
                        }
                        this.m_componentTypesForViews.Add(viewType, componentTypes);
                    }
                    return componentTypes;
                }
                Equals(a, b) {
                    return a.IsEquivalentTo(b);
                }
            }
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
            class CViewModelBinder {
            }
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
            class CMapper {
            }
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
        class CBuilder {
            constructor(cb) {
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
            SetComponentKernel(componentKernelType) {
                this.m_componentKernelType = componentKernelType;
                this.m_cb.RegisterType(componentKernelType).AsSelf().InstancePerDependency();
            }
            /**
             * 添加通用的组件
             * @param componentType
             */
            AddComponent(componentType, common) {
                if (this.m_componentTypes.FirstOrDefault(t => t.IsEquivalentTo(componentType)) == null &&
                    this.m_componentTypesCommon.FirstOrDefault(t => t.IsEquivalentTo(componentType)) == null) {
                    if (common == false)
                        this.m_componentTypesCommon.push(componentType);
                    else
                        this.m_componentTypes.push(componentType);
                    this.m_cb.RegisterType(componentType).AsSelf().InstancePerDependency();
                }
            }
            /**
             * 注册模型绑定组件
             * @param modelBinderType 模型绑定器的类型
             * @param modelComponentType (可选)组件类型，默认 iberbar.MVC.Core.CComponentBindModels
             */
            AddComponentBindModels(modelBinderType, modelComponentType) {
                this.m_cb.RegisterType(modelBinderType).AsSelf().As(iberbar.System.Reflection.TypeOf(MVC.Core.CViewModelBinder)).SingleInstance();
                this.AddComponent((modelComponentType == null) ? iberbar.System.Reflection.TypeOf(MVC.Core.CComponentBindModels) : modelComponentType);
            }
            /**
             * 注册事件绑定组件
             * @param actionBinderType
             * @param actionComponentType
             * @param controllerComponentType
             */
            AddComponentBindActions(actionBinderType, actionComponentType, controllerComponentType) {
                this.m_cb.RegisterType(actionBinderType).AsSelf().As(iberbar.System.Reflection.TypeOf(MVC.Core.CActionBinder)).SingleInstance();
                this.AddComponent((actionComponentType == null) ? iberbar.System.Reflection.TypeOf(MVC.Core.CComponentBindActions) : actionComponentType);
                this.AddComponent((controllerComponentType == null) ? iberbar.System.Reflection.TypeOf(MVC.Core.CInitComponent_ViewController) : controllerComponentType);
            }
            /**
             * 注册视图类型，搜索其使用的控制器类型并注册
             * @param viewType 视图类型
             */
            RegisterView(viewType) {
                let attrsController = viewType.GetCustomAttributes(iberbar.System.Reflection.TypeOf(MVC.Attributes.CAddControllerAttribute), true);
                if (attrsController.length > 0) {
                    for (let i = 0; i < attrsController.length; i++) {
                        let attr = attrsController[i];
                        this.m_cb.RegisterType(attr.ControllerType).AsSelf().InstancePerDependency();
                    }
                }
                let attrsComponent = viewType.GetCustomAttributes(iberbar.System.Reflection.TypeOf(MVC.Attributes.CAddViewComponentAttribute), true);
                if (attrsComponent.length > 0) {
                    for (let i = 0; i < attrsComponent.length; i++) {
                        let attr = attrsComponent[i];
                        this.AddComponent(attr.ComponentType, false);
                    }
                }
                let fieldInfos = viewType.GetFields();
                if (fieldInfos.length > 0) {
                    for (let i = 0; i < fieldInfos.length; i++) {
                        let field = fieldInfos[i];
                        if (field.IsDefined(iberbar.System.Reflection.TypeOf(MVC.Attributes.CViewModelAttribute)) == false)
                            continue;
                        if (field.FieldType == null)
                            continue;
                        this.m_cb.RegisterType(field.FieldType).AsSelf().InstancePerDependency();
                    }
                }
                return this.m_cb.RegisterType(viewType).PropertiesAutowired();
            }
            Build() {
                let mapper = new MVC.Core.CDefaultMapper(this.m_componentKernelType, this.m_componentTypes);
                this.m_cb.RegisterInstance(iberbar.System.Reflection.TypeOf(MVC.Core.CDefaultMapper), mapper)
                    .AsSelf()
                    .As(iberbar.System.Reflection.TypeOf(MVC.Core.CMapper));
            }
        }
        MVC.CBuilder = CBuilder;
    })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));
var iberbar;
(function (iberbar) {
    var MVC;
    (function (MVC) {
        class CView {
            constructor() {
                this.m_id = null;
                this.m_componentKernel = null;
                this.m_components = Array();
                /**
                 * autofac注入
                 */
                this.m_lifetimeScope = null;
            }
            set LifetimeScope(value) {
                this.m_lifetimeScope = value;
            }
            get LifetimeScope() {
                return this.m_lifetimeScope;
            }
            set ID(id) {
                this.m_id = id;
            }
            get ID() {
                return this.m_id;
            }
            Create(...args) {
                this.ResolveComponents();
                let ret = this.InitComponentKernel(...args);
                this.InitComponents();
                this.OnCreated();
                return ret;
            }
            ReCreate() {
                try {
                    this.m_componentKernel.ReCreate(this);
                }
                catch (error) {
                    console.error(`Failed to initialize the kernel component of type <${this.m_componentKernel.GetType().GetNickname()}>`);
                    console.error(error.stack);
                }
                this.InitComponents();
                this.OnCreated();
            }
            OnCreated() {
            }
            InitComponentKernel(...args) {
                try {
                    return this.m_componentKernel.Create(this, ...args);
                }
                catch (error) {
                    console.error(`Failed to initialize the kernel component of type <${this.m_componentKernel.GetType().GetNickname()}>`);
                    console.error(error.stack);
                }
            }
            ResolveComponents() {
                let mapper = this.GetMapper();
                let type = this.GetType();
                let componentKernelType = mapper.GetComponentKernelType();
                this.m_componentKernel = this.LifetimeScope.Resolve(componentKernelType, new iberbar.Autofac.CTypedParameter(iberbar.System.Reflection.TypeOf(CView), this));
                let componentTypes = mapper.GetComponentTypes(type);
                let attributesDisabled = type.GetCustomAttributes(iberbar.System.Reflection.TypeOf(MVC.Attributes.CDisableViewComponentAttribute), true);
                for (let i = 0; i < componentTypes.length; i++) {
                    let componentType = componentTypes[i];
                    let parameters = [
                        new iberbar.Autofac.CTypedParameter(TypeOf(CView), this)
                    ];
                    if (componentType == null)
                        continue;
                    if (attributesDisabled.FirstOrDefault(ad => ad.ComponentType.IsEquivalentTo(componentType)) != null)
                        continue;
                    if (this.m_components.FirstOrDefault(c => c.GetType().IsEquivalentTo(componentType)) != null) {
                        console.error(`duplicate type of component(${componentType.GetNickname()}) for view<${type.GetNickname()}>.`);
                        continue;
                    }
                    let component = null;
                    try {
                        component = this.LifetimeScope.Resolve(componentType, ...parameters);
                    }
                    catch (error) {
                        console.error(`Can't resolve instance of component type(${componentType.GetNickname()}) for view<${type.GetNickname()}>`);
                        console.error(error.stack);
                    }
                    if (component != null) {
                        this.m_components.push(component);
                    }
                }
            }
            InitComponents() {
                let type = this.GetType();
                for (let i = 0; i < this.m_components.length; i++) {
                    let component = this.m_components[i];
                    if (component.InitView != undefined) {
                        try {
                            component.InitView(this);
                        }
                        catch (error) {
                            console.error(`Exception occurred when the component(${component.GetType().GetNickname()}) initialized for view<${type.GetNickname()}>.`);
                            console.error(error.stack);
                        }
                    }
                }
            }
            GetComponentKernel() {
                return this.m_componentKernel;
            }
            GetComponent(type) {
                return this.m_components.FirstOrDefault(t => t.GetType().IsEquivalentTo(type));
            }
            Show() {
                this.GetComponentKernel().Show(this.__Callback(this.OnShow));
            }
            Hide() {
                this.GetComponentKernel().Hide(this.__Callback(this.OnHide));
            }
            FadeIn(duration) {
                this.GetComponentKernel().FadeIn(duration, this.__Callback(this.OnShow));
            }
            FadeOut(duration) {
                this.GetComponentKernel().FadeOut(duration, this.__Callback(this.OnHide));
            }
            IsShow() {
                return this.GetComponentKernel().IsShow();
            }
            GetMapper() {
                return this.LifetimeScope.Resolve(iberbar.System.Reflection.TypeOf(MVC.Core.CMapper));
            }
            Dispose() {
                for (let i = 0; i < this.m_components.length; i++) {
                    let c = this.m_components[i];
                    if (c.Dispose != null) {
                        c.Dispose();
                    }
                }
                if (this.m_componentKernel != null) {
                    this.m_componentKernel.Dispose();
                }
            }
            OnShow() {
            }
            OnHide() {
            }
        }
        __decorate([
            iberbar.Autofac.InjectLifetimeScope(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], CView.prototype, "LifetimeScope", null);
        MVC.CView = CView;
        ;
    })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));
// namespace iberbar.MVC
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNyYy9BdHRyaWJ1dGVzL0NBZGRDb250cm9sbGVyQXR0cmlidXRlLnRzIiwiU3JjL0F0dHJpYnV0ZXMvQ0FkZFZpZXdDb21wb25lbnRBdHRyaWJ1dGUudHMiLCJTcmMvQXR0cmlidXRlcy9DRGlzYWJsZVZpZXdDb21wb25lbnRBdHRyaWJ1dGUudHMiLCJTcmMvQXR0cmlidXRlcy9DVmlld01vZGVsQXR0cmlidXRlLnRzIiwiU3JjL0F0dHJpYnV0ZXMvU2V0QWN0aW9uU3VtbWFyeS50cyIsIlNyYy9BdHRyaWJ1dGVzL1NldENvbnRyb2xsZXIudHMiLCJTcmMvUmVnaXN0cmF0aW9uL0NSZWdpc3RyYW9yLnRzIiwiU3JjL1JlZ2lzdHJhdGlvbi9DU2luZ2xlSW5zdGFuY2VWaWV3QXR0cmlidXRlLnRzIiwiU3JjL0NvcmUvQ0FjdGlvbkJpbmRlci50cyIsIlNyYy9Db3JlL0NDb21wb25lbnRCaW5kQWN0aW9ucy50cyIsIlNyYy9Db3JlL0NDb21wb25lbnRCaW5kTW9kZWxzLnRzIiwiU3JjL0NvcmUvQ0NvbXBvbmVudEtlcm5lbC50cyIsIlNyYy9Db3JlL0NDb21wb25lbnRWaWV3Q29udHJvbGxlci50cyIsIlNyYy9Db3JlL0NNYXBwaW5nLnRzIiwiU3JjL0NvcmUvQ1ZpZXdNb2RlbEJpbmRlci50cyIsIlNyYy9Db3JlL0lNYXBwaW5nLnRzIiwiU3JjL0FkZENvbnRyb2xsZXIudHMiLCJTcmMvQWRkVmlld0NvbXBvbmVudC50cyIsIlNyYy9DQnVpbGRlci50cyIsIlNyYy9DVmlldy50cyIsIlNyYy9Db3JlLnRzIiwiU3JjL0Rpc2FibGVWaWV3Q29tcG9uZW50LnRzIiwiU3JjL1ZpZXdNb2RlbC50cyIsIlNyYy9Db3JlL0lBY3Rpb25CaW5kZXJSZXN1bHQudHMiLCJTcmMvQ29yZS9JQ29tcG9uZW50SW5pdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsSUFBVSxPQUFPLENBbUJoQjtBQW5CRCxXQUFVLE9BQU87SUFBQyxJQUFBLEdB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QVMsWUFHeEIsQ0FBQTtJQUNMLENBQUMsRUFOaUIsR0FBRyxHQUFILFdBQUcsS0FBSCxXQUFHLFFBTXBCO0FBQUQsQ0FBQyxFQU5TLE9BQU8sS0FBUCxPQUFPLFFBTWhCIiwiZmlsZSI6Ii4uL2Jpbi9NVkMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLkF0dHJpYnV0ZXNcclxue1xyXG5cclxuICAgIEBTeXN0ZW0uQXR0cmlidXRlVXNhZ2UoIFN5c3RlbS5VQXR0cmlidXRlVGFyZ2V0LkNsYXNzLCB0cnVlLCB0cnVlIClcclxuICAgIGV4cG9ydCBjbGFzcyBDQWRkQ29udHJvbGxlckF0dHJpYnV0ZSBleHRlbmRzIFN5c3RlbS5DQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fY29udHJvbGxlclR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLklEZWxheVR5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGNvbnRyb2xsZXJUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5JRGVsYXlUeXBlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9jb250cm9sbGVyVHlwZSA9IGNvbnRyb2xsZXJUeXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBDb250cm9sbGVyVHlwZSgpOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9jb250cm9sbGVyVHlwZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLkF0dHJpYnV0ZXNcclxue1xyXG4gICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuQ2xhc3MsIHRydWUsIHRydWUgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENBZGRWaWV3Q29tcG9uZW50QXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG1fY29tcG9uZW50VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uSURlbGF5VHlwZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggY29tcG9uZW50VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uSURlbGF5VHlwZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50VHlwZSA9IGNvbXBvbmVudFR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IENvbXBvbmVudFR5cGUoKTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY29tcG9uZW50VHlwZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLkF0dHJpYnV0ZXNcclxue1xyXG4gICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuQ2xhc3MsIHRydWUsIHRydWUgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENEaXNhYmxlVmlld0NvbXBvbmVudEF0dHJpYnV0ZSBleHRlbmRzIFN5c3RlbS5DQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtX2NvbXBvbmVudFR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLklEZWxheVR5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGNvbXBvbmVudFR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLklEZWxheVR5cGUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5tX2NvbXBvbmVudFR5cGUgPSBjb21wb25lbnRUeXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBDb21wb25lbnRUeXBlKCk6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2NvbXBvbmVudFR5cGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuQXR0cmlidXRlc1xyXG57XHJcbiAgICBAU3lzdGVtLkF0dHJpYnV0ZVVzYWdlKCBTeXN0ZW0uVUF0dHJpYnV0ZVRhcmdldC5GaWVsZCwgZmFsc2UsIGZhbHNlIClcclxuICAgIGV4cG9ydCBjbGFzcyBDVmlld01vZGVsQXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDXHJcbntcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQXR0cmlidXRlc1xyXG4gICAge1xyXG4gICAgICAgIEBTeXN0ZW0uQXR0cmlidXRlVXNhZ2UoIFN5c3RlbS5VQXR0cmlidXRlVGFyZ2V0Lk1ldGhvZCwgZmFsc2UsIGZhbHNlIClcclxuICAgICAgICBleHBvcnQgY2xhc3MgU2V0QWN0aW9uU3VtbWFyeUF0dHJpYnV0ZSBleHRlbmRzIFN5c3RlbS5DQXR0cmlidXRlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgbV9uYW1lOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgbV9zdW1tYXJ5OiBzdHJpbmcgPSBudWxsO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nLCBzdW1tYXJ5OiBzdHJpbmcgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX25hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3N1bW1hcnkgPSBzdW1tYXJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwdWJsaWMgZ2V0IE5hbWUoKSA6IHN0cmluZyB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX25hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHB1YmxpYyBnZXQgU3VtbWFyeSgpIDogc3RyaW5nIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fc3VtbWFyeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDXHJcbntcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQXR0cmlidXRlc1xyXG4gICAge1xyXG4gICAgICAgIEBTeXN0ZW0uQXR0cmlidXRlVXNhZ2UoIFN5c3RlbS5VQXR0cmlidXRlVGFyZ2V0LkNsYXNzLCB0cnVlLCB0cnVlIClcclxuICAgICAgICBleHBvcnQgY2xhc3MgQ1NldENvbnRyb2xsZXJBdHRyaWJ1dGUgZXh0ZW5kcyBTeXN0ZW0uQ0F0dHJpYnV0ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdGVjdGVkIG1fY29udHJvbGxlclR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLklEZWxheVR5cGUgPSBudWxsO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggY29udHJvbGxlclR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLklEZWxheVR5cGUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2NvbnRyb2xsZXJUeXBlID0gY29udHJvbGxlclR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBwdWJsaWMgZ2V0IENvbnRyb2xsZXJUeXBlKCk6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY29udHJvbGxlclR5cGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICoq54m55oCnKipcclxuICAgICAqIFxyXG4gICAgICogKyDmoIforrDop4blm77miYDkvb/nlKjnmoTmjqfliLblmajnsbvlnotcclxuICAgICAqICsg5L+u6aWw77ya57G7XHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBjb250cm9sbGVyVHlwZSDmjqfliLblmajnsbvlnotcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFNldENvbnRyb2xsZXIoIGNvbnRyb2xsZXJUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5JRGVsYXlUeXBlICk6IFN5c3RlbS5VRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvckNsYXNzXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbS5BdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IEF0dHJpYnV0ZXMuQ1NldENvbnRyb2xsZXJBdHRyaWJ1dGUoIGNvbnRyb2xsZXJUeXBlICkgKTtcclxuICAgIH1cclxufSIsIlxyXG5cclxuLy8gbmFtZXNwYWNlIGliZXJiYXIuTVZDLlJlZ2lzdHJhdGlvblxyXG4vLyB7XHJcbi8vICAgICBleHBvcnQgY2xhc3MgQ1JlZ2lzdHJhdG9yXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgcHJpdmF0ZSBtX2J1aWxkZXI6IEF1dG9mYWMuQ0NvbnRhaW5lckJ1aWxkZXIgPSBudWxsO1xyXG5cclxuLy8gICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGJ1aWxkZXI6IEF1dG9mYWMuQ0NvbnRhaW5lckJ1aWxkZXIgKVxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5tX2J1aWxkZXIgPSBidWlsZGVyO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgcHVibGljIFJlZ2lzdGVyQ29tbW9uQ29tcG9uZW50cygpOiB2b2lkXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBsZXQgdHlwZXMgPSBbXHJcbi8vICAgICAgICAgICAgICAgICBUeXBlT2YoIFZpZXdDb21wb25lbnRzLkNJbml0Q29tcG9uZW50X1ZpZXdzRGVwZW5kc09uICksXHJcbi8vICAgICAgICAgICAgICAgICBUeXBlT2YoIFZpZXdDb21wb25lbnRzLkNJbml0Q29tcG9uZW50X0JpbmRQcm9wZXJ0aWVzV2l0aEVsZW1lbnRzQW5kVmlld3MgKSxcclxuLy8gICAgICAgICAgICAgICAgIFR5cGVPZiggVmlld0NvbXBvbmVudHMuQ0luaXRDb21wb25lbnRfQmluZEFjdGlvbnMgKSxcclxuLy8gICAgICAgICAgICAgICAgIFR5cGVPZiggVmlld0NvbXBvbmVudHMuQ0luaXRDb21wb25lbnRfQmluZE92ZXJTY3JvbGwgKSxcclxuLy8gICAgICAgICAgICAgICAgIFR5cGVPZiggVmlld0NvbXBvbmVudHMuQ0luaXRDb21wb25lbnRfVmlld0NvbnRyb2xsZXIgKVxyXG4vLyAgICAgICAgICAgICBdO1xyXG4vLyAgICAgICAgICAgICB0aGlzLm1fYnVpbGRlci5SZWdpc3RlclR5cGVzKCB0eXBlcyApLkFzU2VsZigpLkluc3RhbmNlUGVyRGVwZW5kZW5jeSgpLlByb3BlcnRpZXNBdXRvd2lyZWQoKTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIHB1YmxpYyBSZWdpc3RlckN1c3RvbUNvbXBvbmVudCggY29tcG9uZW50VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKTogdm9pZFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5tX2J1aWxkZXIuUmVnaXN0ZXJUeXBlKCBjb21wb25lbnRUeXBlICkuQXNTZWxmKCkuSW5zdGFuY2VQZXJEZXBlbmRlbmN5KCkuUHJvcGVydGllc0F1dG93aXJlZCgpO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLy8gcHVibGljIFJlZ2lzdGVyVmlld3MoIC4uLmFzc2VtYmxpZXM6IFN5c3RlbS5SZWZsZWN0aW9uLkNBc3NlbWJseVtdICk6IHZvaWRcclxuLy8gICAgICAgICAvLyB7XHJcbi8vICAgICAgICAgLy8gICAgIGNvbnN0IHZ0ID0gVHlwZU9mKCBDVmlldyApO1xyXG4vLyAgICAgICAgIC8vICAgICBsZXQgdmlld1R5cGVzX1NpbmdsZUluc3RhbmNlOiBBcnJheTwgU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgPiA9IEFycmF5KCk7XHJcbi8vICAgICAgICAgLy8gICAgIGxldCB2aWV3VHlwZXNfVHJhbnNpZW50OiBBcnJheTwgU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgPiA9IEFycmF5KCk7XHJcbi8vICAgICAgICAgLy8gICAgIGxldCB2aWV3VHlwZXM6IEFycmF5PCBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA+O1xyXG4vLyAgICAgICAgIC8vICAgICBhc3NlbWJsaWVzLmZvckVhY2goIGFzc2VtYmx5ID0+XHJcbi8vICAgICAgICAgLy8gICAgIHtcclxuLy8gICAgICAgICAvLyAgICAgICAgIGxldCB0eXBlcyA9IGFzc2VtYmx5LkdldFR5cGVzKCk7XHJcbi8vICAgICAgICAgLy8gICAgICAgICB0eXBlcy5mb3JFYWNoKCB0ID0+XHJcbi8vICAgICAgICAgLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKCB0LklzSW5oZXJpdEZyb20oIHZ0ICkgPT0gZmFsc2UgKVxyXG4vLyAgICAgICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm47XHJcbi8vICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKCB0LkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggVHlwZU9mKCBDU2luZ2xlSW5zdGFuY2VWaWV3QXR0cmlidXRlICksIHRydWUgKSA9PSBudWxsIClcclxuLy8gICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmlld1R5cGVzX1RyYW5zaWVudC5wdXNoKCB0ICk7XHJcbi8vICAgICAgICAgLy8gICAgICAgICAgICAgZWxzZVxyXG4vLyAgICAgICAgIC8vICAgICAgICAgICAgICAgICB2aWV3VHlwZXNfU2luZ2xlSW5zdGFuY2UucHVzaCggdCApO1xyXG4vLyAgICAgICAgIC8vICAgICAgICAgfSlcclxuLy8gICAgICAgICAvLyAgICAgfSApO1xyXG4vLyAgICAgICAgIC8vICAgICB0aGlzLm1fYnVpbGRlci5SZWdpc3RlclR5cGVzKCB2aWV3VHlwZXNfU2luZ2xlSW5zdGFuY2UgKS5Bc1NlbGYoKS5TaW5nbGVJbnN0YW5jZSgpO1xyXG4vLyAgICAgICAgIC8vICAgICB0aGlzLm1fYnVpbGRlci5SZWdpc3RlclR5cGVzKCB2aWV3VHlwZXNfVHJhbnNpZW50ICkuQXNTZWxmKCkuSW5zdGFuY2VQZXJEZXBlbmRlbmN5KCk7XHJcbi8vICAgICAgICAgLy8gICAgIGZvciAoIGNvbnN0IHQgb2Ygdmlld1R5cGVzIClcclxuLy8gICAgICAgICAvLyAgICAge1xyXG4vLyAgICAgICAgIC8vICAgICAgICAgdGhpcy5SZWdpc3RlclZpZXdzV2hlcmVEZXBlbmRPbiggPFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPENWaWV3Pj50ICk7XHJcbi8vICAgICAgICAgLy8gICAgIH1cclxuLy8gICAgICAgICAvLyB9XHJcblxyXG4vLyAgICAgICAgIC8vIHB1YmxpYyBSZWdpc3RlclZpZXdzV2hlcmVEZXBlbmRPbiggdmlld1R5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBDVmlldyA+ICk6IHZvaWRcclxuLy8gICAgICAgICAvLyB7XHJcbi8vICAgICAgICAgLy8gICAgIGxldCBhdHRyRGVwZW5kT25MaXN0ID0gdmlld1R5cGUuR2V0Q3VzdG9tQXR0cmlidXRlcyggVHlwZU9mKCBBdHRyaWJ1dGVzLkRlcGVuZE9uVmlld0F0dHJpYnV0ZSApLCBmYWxzZSApO1xyXG4vLyAgICAgICAgIC8vICAgICBpZiAoIGF0dHJEZXBlbmRPbkxpc3QgPT0gbnVsbCB8fCBhdHRyRGVwZW5kT25MaXN0Lmxlbmd0aCA9PSAwIClcclxuLy8gICAgICAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIFxyXG4vLyAgICAgICAgIC8vICAgICBmb3IgKCBjb25zdCBhdHRyIG9mIGF0dHJEZXBlbmRPbkxpc3QgKVxyXG4vLyAgICAgICAgIC8vICAgICB7XHJcbi8vICAgICAgICAgLy8gICAgICAgICBpZiAoIGF0dHIuVmlld1R5cGUuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBUeXBlT2YoIENTaW5nbGVJbnN0YW5jZVZpZXdBdHRyaWJ1dGUgKSwgdHJ1ZSApID09IG51bGwgKVxyXG4vLyAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMubV9idWlsZGVyLlJlZ2lzdGVyVHlwZSggYXR0ci5WaWV3VHlwZSApLkluc3RhbmNlUGVyRGVwZW5kZW5jeSgpO1xyXG4vLyAgICAgICAgIC8vICAgICAgICAgZWxzZVxyXG4vLyAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMubV9idWlsZGVyLlJlZ2lzdGVyVHlwZSggYXR0ci5WaWV3VHlwZSApLlNpbmdsZUluc3RhbmNlKCk7XHJcbi8vICAgICAgICAgLy8gICAgICAgICB0aGlzLlJlZ2lzdGVyVmlld3NXaGVyZURlcGVuZE9uKCBhdHRyLlZpZXdUeXBlICk7XHJcbi8vICAgICAgICAgLy8gICAgIH1cclxuLy8gICAgICAgICAvLyB9XHJcbi8vICAgICB9XHJcbi8vIH0iLCJcclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuUmVnaXN0cmF0aW9uXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDU2luZ2xlSW5zdGFuY2VWaWV3QXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gU2luZ2xlSW5zdGFuY2VWaWV3KCk6IFN5c3RlbS5VRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvckNsYXNzXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbS5BdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IENTaW5nbGVJbnN0YW5jZVZpZXdBdHRyaWJ1dGUoKSApO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDQWN0aW9uQmluZGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEJpbmRBY3Rpb25zKCB2aWV3OiBDVmlldywgaGFuZGxlclR5cGU6IG9iamVjdCApOiBJQWN0aW9uQmluZGVyUmVzdWx0O1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuQ29yZVxyXG57XHJcbiAgICBAU3lzdGVtLlJlZmxlY3Rpb24uQXV0b1JlZmxlY3RNZXRhZGF0YV9Db25zdHJ1Y3RvclxyXG4gICAgQFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVOaWNrbmFtZSggXCJpYmVyYmFyOjpNVkM6OkNvbXBvbmVudHM6OkNDb21wb25lbnRCaW5kQWN0aW9uc1wiIClcclxuICAgIGV4cG9ydCBjbGFzcyBDQ29tcG9uZW50QmluZEFjdGlvbnMgaW1wbGVtZW50cyBJQ29tcG9uZW50SW5pdCwgU3lzdGVtLklEaXNwb3NhYmxlXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBtX2JpbmRlclJlc3VsdDogSUFjdGlvbkJpbmRlclJlc3VsdCA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBJbml0VmlldyggdmlldzogQ1ZpZXcgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJpbmRlciA9IHZpZXcuTGlmZXRpbWVTY29wZS5SZXNvbHZlKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIENBY3Rpb25CaW5kZXIgKSApO1xyXG4gICAgICAgICAgICB0aGlzLm1fYmluZGVyUmVzdWx0ID0gYmluZGVyLkJpbmRBY3Rpb25zKCB2aWV3LCBudWxsICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUmVJbml0VmlldyggdmlldzogQ1ZpZXcgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2JpbmRlclJlc3VsdC5EaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9iaW5kZXJSZXN1bHQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLkluaXRWaWV3KCB2aWV3ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGlzcG9zZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fYmluZGVyUmVzdWx0LkRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENDb21wb25lbnRCaW5kTW9kZWxzIGltcGxlbWVudHMgSUNvbXBvbmVudEluaXRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgSW5pdFZpZXcoIHZpZXc6IENWaWV3ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBiaW5kZXIgPSB2aWV3LkxpZmV0aW1lU2NvcGUuUmVzb2x2ZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBDVmlld01vZGVsQmluZGVyICkgKTtcclxuICAgICAgICAgICAgbGV0IHZpZXdUeXBlID0gdmlldy5HZXRUeXBlKCk7XHJcbiAgICAgICAgICAgIGxldCBmaWVsZEluZm9zID0gdmlld1R5cGUuR2V0RmllbGRzKCk7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGZpZWxkSW5mb3MubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpZWxkID0gZmllbGRJbmZvc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBmaWVsZC5Jc0RlZmluZWQoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQXR0cmlidXRlcy5DVmlld01vZGVsQXR0cmlidXRlICkgKSA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBmaWVsZC5GaWVsZFR5cGUgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1vZGVsID0gdmlldy5MaWZldGltZVNjb3BlLlJlc29sdmUoIGZpZWxkLkZpZWxkVHlwZSApO1xyXG4gICAgICAgICAgICAgICAgYmluZGVyLkJpbmRNb2RlbCggdmlldywgbW9kZWwgKTtcclxuICAgICAgICAgICAgICAgIGZpZWxkLlNldFZhbHVlKCB2aWV3LCBtb2RlbCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUmVJbml0VmlldyggdmlldzogQ1ZpZXcgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Jbml0VmlldyggdmlldyApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIENDb21wb25lbnRLZXJuZWw8VCBleHRlbmRzICguLi5hcmdzOiBhbnkpID0+IGFueT4gaW1wbGVtZW50cyBTeXN0ZW0uSURpc3Bvc2FibGVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgQ3JlYXRlKCB2aWV3OiBDVmlldywgLi4uYXJnczogUGFyYW1ldGVyczxUPiApOiBSZXR1cm5UeXBlPFQ+O1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBSZUNyZWF0ZSggdmlldzogQ1ZpZXcgKTogdm9pZDtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgU2hvdyggb25zaG93OiBTeXN0ZW0uVENhbGxiYWNrPCAoKSA9PiB2b2lkID4gKTogdm9pZDtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSGlkZSggb25oaWRlOiBTeXN0ZW0uVENhbGxiYWNrPCAoKSA9PiB2b2lkID4gKTogdm9pZDtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgRmFkZUluKCBkdXJhdGlvbjogbnVtYmVyLCBvbnNob3c6IFN5c3RlbS5UQ2FsbGJhY2s8ICgpID0+IHZvaWQgPiApOiB2b2lkO1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBGYWRlT3V0KCBkdXJhdGlvbjogbnVtYmVyLCBvbmhpZGU6IFN5c3RlbS5UQ2FsbGJhY2s8ICgpID0+IHZvaWQgPiApOiB2b2lkO1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBJc1Nob3coKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgRGlzcG9zZSgpOiB2b2lkO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5Db3JlXHJcbntcclxuICAgIEBTeXN0ZW0uUmVmbGVjdGlvbi5BdXRvUmVmbGVjdE1ldGFkYXRhX0NvbnN0cnVjdG9yXHJcbiAgICBAU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU5pY2tuYW1lKCBcImliZXJiYXI6Ok12Yzo6Vmlld0NvbXBvbmVudHM6OkNJbml0Q29tcG9uZW50X1ZpZXdDb250cm9sbGVyXCIgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENJbml0Q29tcG9uZW50X1ZpZXdDb250cm9sbGVyIGltcGxlbWVudHMgSUNvbXBvbmVudEluaXQsIFN5c3RlbS5JRGlzcG9zYWJsZVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgbV9iaW5kZXJSZXN1bHRzOiBBcnJheTwgSUFjdGlvbkJpbmRlclJlc3VsdCA+ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIEluaXRWaWV3KCB2aWV3OiBDVmlldyApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdmlld1R5cGUgPSB2aWV3LkdldFR5cGUoKTtcclxuICAgICAgICAgICAgbGV0IGNvbnRyb2xsZXJUeXBlQXR0cmlidXRlcyA9IHZpZXdUeXBlLkdldEN1c3RvbUF0dHJpYnV0ZXMoIFR5cGVPZiggTVZDLkF0dHJpYnV0ZXMuQ0FkZENvbnRyb2xsZXJBdHRyaWJ1dGUgKSwgdHJ1ZSApO1xyXG4gICAgICAgICAgICBpZiAoIGNvbnRyb2xsZXJUeXBlQXR0cmlidXRlcy5sZW5ndGggPT0gMCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1fYmluZGVyUmVzdWx0cyA9IEFycmF5KCk7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGNvbnRyb2xsZXJUeXBlQXR0cmlidXRlcy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gY29udHJvbGxlclR5cGVBdHRyaWJ1dGVzWyBpIF07XHJcbiAgICAgICAgICAgICAgICBsZXQgYmluZGVyID0gdmlldy5MaWZldGltZVNjb3BlLlJlc29sdmUoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQ0FjdGlvbkJpbmRlciApICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmluZGVyUmVzdWx0ID0gYmluZGVyLkJpbmRBY3Rpb25zKCB2aWV3LCBhdHRyaWJ1dGUuQ29udHJvbGxlclR5cGUgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9iaW5kZXJSZXN1bHRzLnB1c2goIGJpbmRlclJlc3VsdCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUmVJbml0VmlldyggdmlldzogQ1ZpZXcgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fYmluZGVyUmVzdWx0cyAhPSBudWxsICYmIHRoaXMubV9iaW5kZXJSZXN1bHRzLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLm1fYmluZGVyUmVzdWx0cy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gdGhpcy5tX2JpbmRlclJlc3VsdHNbIGkgXTtcclxuICAgICAgICAgICAgICAgICAgICByLkRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubV9iaW5kZXJSZXN1bHRzID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5Jbml0VmlldyggdmlldyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIERpc3Bvc2UoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fYmluZGVyUmVzdWx0cyAhPSBudWxsICYmIHRoaXMubV9iaW5kZXJSZXN1bHRzLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLm1fYmluZGVyUmVzdWx0cy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gdGhpcy5tX2JpbmRlclJlc3VsdHNbIGkgXTtcclxuICAgICAgICAgICAgICAgICAgICByLkRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubV9iaW5kZXJSZXN1bHRzID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDRGVmYXVsdE1hcHBlciBpbXBsZW1lbnRzIENNYXBwZXIsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFcXVhbGl0eUNvbXBhcmVyPCBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA+XHJcbiAgICB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9jb21wb25lbnRLZXJuZWxUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTxDb3JlLkNDb21wb25lbnRLZXJuZWw8YW55Pj4gPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgbV9jb21wb25lbnRUeXBlczogQXJyYXk8IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID4gPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgbV9jb21wb25lbnRUeXBlc0ZvclZpZXdzOiBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRGljdGlvbmFyeTwgU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUsIEFycmF5PCBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA+ID47XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgY29tcG9uZW50S2VybmVsVHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8Q29yZS5DQ29tcG9uZW50S2VybmVsPGFueT4+LFxyXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlczogQXJyYXk8IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID5cclxuICAgICAgICApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50VHlwZXNGb3JWaWV3cyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5DRGljdGlvbmFyeTwgU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUsIEFycmF5PCBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA+ID4oIHtcclxuICAgICAgICAgICAgICAgIGNvbXBhcmVyOiB0aGlzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50S2VybmVsVHlwZSA9IGNvbXBvbmVudEtlcm5lbFR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMubV9jb21wb25lbnRUeXBlcyA9IGNvbXBvbmVudFR5cGVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldENvbXBvbmVudEtlcm5lbFR5cGUoKTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8Q29yZS5DQ29tcG9uZW50S2VybmVsPGFueT4+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2NvbXBvbmVudEtlcm5lbFR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0Q29tcG9uZW50VHlwZXMoIHZpZXdUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTxDVmlldz4gKTogQXJyYXk8IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnRUeXBlczogQXJyYXk8IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlcyA9IHRoaXMubV9jb21wb25lbnRUeXBlc0ZvclZpZXdzLkdldCggdmlld1R5cGUgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggY29tcG9uZW50VHlwZXMgPT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFR5cGVzID0gQXJyYXkoIC4uLnRoaXMubV9jb21wb25lbnRUeXBlcyApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0dHJzID0gdmlld1R5cGUuR2V0Q3VzdG9tQXR0cmlidXRlcyggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBBdHRyaWJ1dGVzLkNBZGRWaWV3Q29tcG9uZW50QXR0cmlidXRlICksIHRydWUgKTtcclxuICAgICAgICAgICAgICAgIGlmICggYXR0cnMubGVuZ3RoID4gMCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdHRyaWJ1dGUgPSBhdHRyc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlcy5wdXNoKCBhdHRyaWJ1dGUuQ29tcG9uZW50VHlwZSApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubV9jb21wb25lbnRUeXBlc0ZvclZpZXdzLkFkZCggdmlld1R5cGUsIGNvbXBvbmVudFR5cGVzICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRUeXBlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBFcXVhbHMoIGE6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlLCBiOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5Jc0VxdWl2YWxlbnRUbyggYiApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLkNvcmVcclxue1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIENWaWV3TW9kZWxCaW5kZXJcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnu5Hlrprop4blm77mqKHlnotcclxuICAgICAgICAgKiBAcGFyYW0gdmlldyDmk43kvZznu5Hlrprnu4Tku7bnmoTop4blm77lrp7kvotcclxuICAgICAgICAgKiBAcGFyYW0gbW9kZWwg57uR5a6a5a+56LGhXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEJpbmRNb2RlbCggdmlldzogQ1ZpZXcsIG1vZGVsOiBvYmplY3QgKTogdm9pZDtcclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDTWFwcGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldENvbXBvbmVudEtlcm5lbFR5cGUoKTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IENvcmUuQ0NvbXBvbmVudEtlcm5lbDxhbnk+ID47XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEdldENvbXBvbmVudFR5cGVzKCB2aWV3VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IENWaWV3ID4gKTogQXJyYXk8IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlID47XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkNcclxue1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEFkZENvbnRyb2xsZXIoIGNvbnRyb2xsZXJUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5JRGVsYXlUeXBlICk6IFN5c3RlbS5VRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvckNsYXNzXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbS5BdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IEF0dHJpYnV0ZXMuQ0FkZENvbnRyb2xsZXJBdHRyaWJ1dGUoIGNvbnRyb2xsZXJUeXBlICkgKTtcclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDXHJcbntcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBBZGRWaWV3Q29tcG9uZW50KCBjb21wb25lbnRUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5JRGVsYXlUeXBlICk6IFN5c3RlbS5VRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvckNsYXNzXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbS5BdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IEF0dHJpYnV0ZXMuQ0FkZFZpZXdDb21wb25lbnRBdHRyaWJ1dGUoIGNvbXBvbmVudFR5cGUgKSApO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkNcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENCdWlsZGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBtX2NiOiBBdXRvZmFjLkNDb250YWluZXJCdWlsZGVyID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIG1fY29tcG9uZW50S2VybmVsVHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8Q29yZS5DQ29tcG9uZW50S2VybmVsPGFueT4+ID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIG1fY29tcG9uZW50VHlwZXM6IEFycmF5PCBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA+ID0gQXJyYXkoKTtcclxuICAgICAgICBwcml2YXRlIG1fY29tcG9uZW50VHlwZXNDb21tb246IEFycmF5PCBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA+ID0gQXJyYXkoKTtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBjYjogQXV0b2ZhYy5DQ29udGFpbmVyQnVpbGRlciApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fY2IgPSBjYjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiuvue9ruWGheaguOe7hOS7tlxyXG4gICAgICAgICAqIEBwYXJhbSBjb21wb25lbnRLZXJuZWxUeXBlIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBTZXRDb21wb25lbnRLZXJuZWwoIGNvbXBvbmVudEtlcm5lbFR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPENvcmUuQ0NvbXBvbmVudEtlcm5lbDxhbnk+PiApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50S2VybmVsVHlwZSA9IGNvbXBvbmVudEtlcm5lbFR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMubV9jYi5SZWdpc3RlclR5cGUoIGNvbXBvbmVudEtlcm5lbFR5cGUgKS5Bc1NlbGYoKS5JbnN0YW5jZVBlckRlcGVuZGVuY3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75Yqg6YCa55So55qE57uE5Lu2XHJcbiAgICAgICAgICogQHBhcmFtIGNvbXBvbmVudFR5cGUgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIEFkZENvbXBvbmVudCggY29tcG9uZW50VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUsIGNvbW1vbj86IGJvb2xlYW4gKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fY29tcG9uZW50VHlwZXMuRmlyc3RPckRlZmF1bHQoIHQgPT4gdC5Jc0VxdWl2YWxlbnRUbyggY29tcG9uZW50VHlwZSApICkgPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2NvbXBvbmVudFR5cGVzQ29tbW9uLkZpcnN0T3JEZWZhdWx0KCB0ID0+IHQuSXNFcXVpdmFsZW50VG8oIGNvbXBvbmVudFR5cGUgKSApID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGNvbW1vbiA9PSBmYWxzZSApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX2NvbXBvbmVudFR5cGVzQ29tbW9uLnB1c2goIGNvbXBvbmVudFR5cGUgKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50VHlwZXMucHVzaCggY29tcG9uZW50VHlwZSApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2NiLlJlZ2lzdGVyVHlwZSggY29tcG9uZW50VHlwZSApLkFzU2VsZigpLkluc3RhbmNlUGVyRGVwZW5kZW5jeSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDms6jlhozmqKHlnovnu5Hlrprnu4Tku7ZcclxuICAgICAgICAgKiBAcGFyYW0gbW9kZWxCaW5kZXJUeXBlIOaooeWei+e7keWumuWZqOeahOexu+Wei1xyXG4gICAgICAgICAqIEBwYXJhbSBtb2RlbENvbXBvbmVudFR5cGUgKOWPr+mAiSnnu4Tku7bnsbvlnovvvIzpu5jorqQgaWJlcmJhci5NVkMuQ29yZS5DQ29tcG9uZW50QmluZE1vZGVsc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBBZGRDb21wb25lbnRCaW5kTW9kZWxzKFxyXG4gICAgICAgICAgICBtb2RlbEJpbmRlclR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBDb3JlLkNWaWV3TW9kZWxCaW5kZXIgPixcclxuICAgICAgICAgICAgbW9kZWxDb21wb25lbnRUeXBlPzogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IG9iamVjdCA+XHJcbiAgICAgICAgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2NiLlJlZ2lzdGVyVHlwZSggbW9kZWxCaW5kZXJUeXBlICkuQXNTZWxmKCkuQXMoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQ29yZS5DVmlld01vZGVsQmluZGVyICkgKS5TaW5nbGVJbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkFkZENvbXBvbmVudCggKCBtb2RlbENvbXBvbmVudFR5cGUgPT0gbnVsbCApID8gU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBDb3JlLkNDb21wb25lbnRCaW5kTW9kZWxzICkgOiBtb2RlbENvbXBvbmVudFR5cGUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOazqOWGjOS6i+S7tue7keWumue7hOS7tlxyXG4gICAgICAgICAqIEBwYXJhbSBhY3Rpb25CaW5kZXJUeXBlIFxyXG4gICAgICAgICAqIEBwYXJhbSBhY3Rpb25Db21wb25lbnRUeXBlIFxyXG4gICAgICAgICAqIEBwYXJhbSBjb250cm9sbGVyQ29tcG9uZW50VHlwZSBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgQWRkQ29tcG9uZW50QmluZEFjdGlvbnMoXHJcbiAgICAgICAgICAgIGFjdGlvbkJpbmRlclR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBDb3JlLkNBY3Rpb25CaW5kZXIgPixcclxuICAgICAgICAgICAgYWN0aW9uQ29tcG9uZW50VHlwZT86IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBvYmplY3QgPixcclxuICAgICAgICAgICAgY29udHJvbGxlckNvbXBvbmVudFR5cGU/OiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgb2JqZWN0ID5cclxuICAgICAgICApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fY2IuUmVnaXN0ZXJUeXBlKCBhY3Rpb25CaW5kZXJUeXBlICkuQXNTZWxmKCkuQXMoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQ29yZS5DQWN0aW9uQmluZGVyICkgKS5TaW5nbGVJbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkFkZENvbXBvbmVudCggKCBhY3Rpb25Db21wb25lbnRUeXBlID09IG51bGwgKSA/IFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQ29yZS5DQ29tcG9uZW50QmluZEFjdGlvbnMgKSA6IGFjdGlvbkNvbXBvbmVudFR5cGUgKTtcclxuICAgICAgICAgICAgdGhpcy5BZGRDb21wb25lbnQoICggY29udHJvbGxlckNvbXBvbmVudFR5cGUgPT0gbnVsbCApID8gU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBDb3JlLkNJbml0Q29tcG9uZW50X1ZpZXdDb250cm9sbGVyICkgOiBjb250cm9sbGVyQ29tcG9uZW50VHlwZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5rOo5YaM6KeG5Zu+57G75Z6L77yM5pCc57Si5YW25L2/55So55qE5o6n5Yi25Zmo57G75Z6L5bm25rOo5YaMXHJcbiAgICAgICAgICogQHBhcmFtIHZpZXdUeXBlIOinhuWbvuexu+Wei1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBSZWdpc3RlclZpZXc8VCBleHRlbmRzIENWaWV3Piggdmlld1R5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBUID4gKTogQXV0b2ZhYy5CdWlsZGVyLklSZWdpc3RyYXRpb25CdWlsZGVyPCBUID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyc0NvbnRyb2xsZXIgPSB2aWV3VHlwZS5HZXRDdXN0b21BdHRyaWJ1dGVzKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEF0dHJpYnV0ZXMuQ0FkZENvbnRyb2xsZXJBdHRyaWJ1dGUgKSwgdHJ1ZSApO1xyXG4gICAgICAgICAgICBpZiAoIGF0dHJzQ29udHJvbGxlci5sZW5ndGggPiAwIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yICggbGV0IGkgPTA7IGkgPCBhdHRyc0NvbnRyb2xsZXIubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXR0ciA9IGF0dHJzQ29udHJvbGxlclsgaSBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9jYi5SZWdpc3RlclR5cGUoIGF0dHIuQ29udHJvbGxlclR5cGUgKS5Bc1NlbGYoKS5JbnN0YW5jZVBlckRlcGVuZGVuY3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGF0dHJzQ29tcG9uZW50ID0gdmlld1R5cGUuR2V0Q3VzdG9tQXR0cmlidXRlcyggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBBdHRyaWJ1dGVzLkNBZGRWaWV3Q29tcG9uZW50QXR0cmlidXRlICksIHRydWUgKTtcclxuICAgICAgICAgICAgaWYgKCBhdHRyc0NvbXBvbmVudC5sZW5ndGggPiAwIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgYXR0cnNDb21wb25lbnQubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXR0ciA9IGF0dHJzQ29tcG9uZW50WyBpIF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BZGRDb21wb25lbnQoIGF0dHIuQ29tcG9uZW50VHlwZSwgZmFsc2UgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGZpZWxkSW5mb3MgPSB2aWV3VHlwZS5HZXRGaWVsZHMoKTtcclxuICAgICAgICAgICAgaWYgKCBmaWVsZEluZm9zLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBmaWVsZEluZm9zLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpZWxkID0gZmllbGRJbmZvc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggZmllbGQuSXNEZWZpbmVkKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEF0dHJpYnV0ZXMuQ1ZpZXdNb2RlbEF0dHJpYnV0ZSApICkgPT0gZmFsc2UgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZpZWxkLkZpZWxkVHlwZSA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9jYi5SZWdpc3RlclR5cGUoIGZpZWxkLkZpZWxkVHlwZSApLkFzU2VsZigpLkluc3RhbmNlUGVyRGVwZW5kZW5jeSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY2IuUmVnaXN0ZXJUeXBlKCB2aWV3VHlwZSApLlByb3BlcnRpZXNBdXRvd2lyZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBCdWlsZCgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbWFwcGVyID0gbmV3IENvcmUuQ0RlZmF1bHRNYXBwZXIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50S2VybmVsVHlwZSxcclxuICAgICAgICAgICAgICAgIHRoaXMubV9jb21wb25lbnRUeXBlc1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLm1fY2IuUmVnaXN0ZXJJbnN0YW5jZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBDb3JlLkNEZWZhdWx0TWFwcGVyICksIG1hcHBlciApXHJcbiAgICAgICAgICAgICAgICAuQXNTZWxmKClcclxuICAgICAgICAgICAgICAgIC5BcyggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBDb3JlLkNNYXBwZXIgKSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQ1xyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ1ZpZXcgaW1wbGVtZW50cyBTeXN0ZW0uSURpc3Bvc2FibGVcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIG1faWQ6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9jb21wb25lbnRLZXJuZWw6IENvcmUuQ0NvbXBvbmVudEtlcm5lbDxhbnk+ID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIG1fY29tcG9uZW50czogQXJyYXk8IG9iamVjdCA+ID0gQXJyYXkoKTtcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBhdXRvZmFj5rOo5YWlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBtX2xpZmV0aW1lU2NvcGU6IGliZXJiYXIuQXV0b2ZhYy5JTGlmZXRpbWVTY29wZSA9IG51bGw7XHJcbiAgICAgICAgQGliZXJiYXIuQXV0b2ZhYy5JbmplY3RMaWZldGltZVNjb3BlKClcclxuICAgICAgICBwdWJsaWMgc2V0IExpZmV0aW1lU2NvcGUoIHZhbHVlOiBpYmVyYmFyLkF1dG9mYWMuSUxpZmV0aW1lU2NvcGUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2xpZmV0aW1lU2NvcGUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGdldCBMaWZldGltZVNjb3BlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fbGlmZXRpbWVTY29wZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IElEKCBpZDogc3RyaW5nIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9pZCA9IGlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBJRCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2lkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIENyZWF0ZSggLi4uYXJnczogYW55W10gKTogYW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlJlc29sdmVDb21wb25lbnRzKCk7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSB0aGlzLkluaXRDb21wb25lbnRLZXJuZWwoIC4uLmFyZ3MgKTtcclxuICAgICAgICAgICAgdGhpcy5Jbml0Q29tcG9uZW50cygpO1xyXG4gICAgICAgICAgICB0aGlzLk9uQ3JlYXRlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFJlQ3JlYXRlKCk6IGFueVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9jb21wb25lbnRLZXJuZWwuUmVDcmVhdGUoIHRoaXMgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoIGVycm9yIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYEZhaWxlZCB0byBpbml0aWFsaXplIHRoZSBrZXJuZWwgY29tcG9uZW50IG9mIHR5cGUgPCR7dGhpcy5tX2NvbXBvbmVudEtlcm5lbC5HZXRUeXBlKCkuR2V0Tmlja25hbWUoKX0+YCApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggZXJyb3Iuc3RhY2sgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5Jbml0Q29tcG9uZW50cygpO1xyXG4gICAgICAgICAgICB0aGlzLk9uQ3JlYXRlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIE9uQ3JlYXRlZCgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIEluaXRDb21wb25lbnRLZXJuZWwoIC4uLmFyZ3M6IGFueVtdICk6IGFueVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY29tcG9uZW50S2VybmVsLkNyZWF0ZSggdGhpcywgLi4uYXJncyApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoICggZXJyb3IgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgRmFpbGVkIHRvIGluaXRpYWxpemUgdGhlIGtlcm5lbCBjb21wb25lbnQgb2YgdHlwZSA8JHt0aGlzLm1fY29tcG9uZW50S2VybmVsLkdldFR5cGUoKS5HZXROaWNrbmFtZSgpfT5gICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBlcnJvci5zdGFjayApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgUmVzb2x2ZUNvbXBvbmVudHMoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG1hcHBlciA9IHRoaXMuR2V0TWFwcGVyKCk7XHJcbiAgICAgICAgICAgIGxldCB0eXBlID0gPCBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgQ1ZpZXcgPiA+dGhpcy5HZXRUeXBlKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50S2VybmVsVHlwZSA9IG1hcHBlci5HZXRDb21wb25lbnRLZXJuZWxUeXBlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9jb21wb25lbnRLZXJuZWwgPSB0aGlzLkxpZmV0aW1lU2NvcGUuUmVzb2x2ZSggY29tcG9uZW50S2VybmVsVHlwZSwgbmV3IEF1dG9mYWMuQ1R5cGVkUGFyYW1ldGVyKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIENWaWV3ICksIHRoaXMgKSApO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudFR5cGVzID0gbWFwcGVyLkdldENvbXBvbmVudFR5cGVzKCB0eXBlICk7XHJcbiAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVzRGlzYWJsZWQgPSB0eXBlLkdldEN1c3RvbUF0dHJpYnV0ZXMoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQXR0cmlidXRlcy5DRGlzYWJsZVZpZXdDb21wb25lbnRBdHRyaWJ1dGUgKSwgdHJ1ZSApO1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBjb21wb25lbnRUeXBlcy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50VHlwZSA9IGNvbXBvbmVudFR5cGVzWyBpIF07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtZXRlcnM6IEFycmF5PCBBdXRvZmFjLkNvcmUuQ1BhcmFtZXRlciA+ID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBBdXRvZmFjLkNUeXBlZFBhcmFtZXRlciggVHlwZU9mKCBDVmlldyApLCB0aGlzIClcclxuICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBjb21wb25lbnRUeXBlID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggYXR0cmlidXRlc0Rpc2FibGVkLkZpcnN0T3JEZWZhdWx0KCBhZCA9PiBhZC5Db21wb25lbnRUeXBlLklzRXF1aXZhbGVudFRvKCBjb21wb25lbnRUeXBlICkgKSAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMubV9jb21wb25lbnRzLkZpcnN0T3JEZWZhdWx0KCBjID0+IGMuR2V0VHlwZSgpLklzRXF1aXZhbGVudFRvKCBjb21wb25lbnRUeXBlICkgKSAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgZHVwbGljYXRlIHR5cGUgb2YgY29tcG9uZW50KCR7Y29tcG9uZW50VHlwZS5HZXROaWNrbmFtZSgpfSkgZm9yIHZpZXc8JHt0eXBlLkdldE5pY2tuYW1lKCl9Pi5gICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudDogb2JqZWN0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuTGlmZXRpbWVTY29wZS5SZXNvbHZlKCBjb21wb25lbnRUeXBlLCAuLi5wYXJhbWV0ZXJzICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoIGVycm9yIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgQ2FuJ3QgcmVzb2x2ZSBpbnN0YW5jZSBvZiBjb21wb25lbnQgdHlwZSgke2NvbXBvbmVudFR5cGUuR2V0Tmlja25hbWUoKX0pIGZvciB2aWV3PCR7dHlwZS5HZXROaWNrbmFtZSgpfT5gICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggZXJyb3Iuc3RhY2sgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGNvbXBvbmVudCAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50cy5wdXNoKCBjb21wb25lbnQgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIEluaXRDb21wb25lbnRzKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0eXBlID0gdGhpcy5HZXRUeXBlKCk7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubV9jb21wb25lbnRzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLm1fY29tcG9uZW50c1sgaSBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggKDxDb3JlLklDb21wb25lbnRJbml0PmNvbXBvbmVudCkuSW5pdFZpZXcgIT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8Q29yZS5JQ29tcG9uZW50SW5pdD5jb21wb25lbnQpLkluaXRWaWV3KCB0aGlzICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGNoICggZXJyb3IgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYEV4Y2VwdGlvbiBvY2N1cnJlZCB3aGVuIHRoZSBjb21wb25lbnQoJHtjb21wb25lbnQuR2V0VHlwZSgpLkdldE5pY2tuYW1lKCl9KSBpbml0aWFsaXplZCBmb3Igdmlldzwke3R5cGUuR2V0Tmlja25hbWUoKX0+LmAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggZXJyb3Iuc3RhY2sgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRDb21wb25lbnRLZXJuZWw8IFQgZXh0ZW5kcyAoIC4uLmFyZ3M6IGFueVtdICkgPT4gYW55ID4oKTogQ29yZS5DQ29tcG9uZW50S2VybmVsPCBUID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiA8Q29yZS5DQ29tcG9uZW50S2VybmVsPFQ+PnRoaXMubV9jb21wb25lbnRLZXJuZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0Q29tcG9uZW50PCBUIGV4dGVuZHMgb2JqZWN0ID4oIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBUID4gKTogVFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxUPnRoaXMubV9jb21wb25lbnRzLkZpcnN0T3JEZWZhdWx0KCB0ID0+IHQuR2V0VHlwZSgpLklzRXF1aXZhbGVudFRvKCB0eXBlICkgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBTaG93KCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0Q29tcG9uZW50S2VybmVsKCkuU2hvdyggdGhpcy5fX0NhbGxiYWNrKCB0aGlzLk9uU2hvdyApICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSGlkZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkdldENvbXBvbmVudEtlcm5lbCgpLkhpZGUoIHRoaXMuX19DYWxsYmFjayggdGhpcy5PbkhpZGUgKSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEZhZGVJbiggZHVyYXRpb24/OiBudW1iZXIgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRDb21wb25lbnRLZXJuZWwoKS5GYWRlSW4oIGR1cmF0aW9uLCB0aGlzLl9fQ2FsbGJhY2soIHRoaXMuT25TaG93ICkgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBGYWRlT3V0KCBkdXJhdGlvbj86IG51bWJlciApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkdldENvbXBvbmVudEtlcm5lbCgpLkZhZGVPdXQoIGR1cmF0aW9uLCB0aGlzLl9fQ2FsbGJhY2soIHRoaXMuT25IaWRlICkgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBJc1Nob3coKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuR2V0Q29tcG9uZW50S2VybmVsKCkuSXNTaG93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR2V0TWFwcGVyKCk6IENvcmUuQ01hcHBlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuTGlmZXRpbWVTY29wZS5SZXNvbHZlKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIENvcmUuQ01hcHBlciApICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGlzcG9zZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLm1fY29tcG9uZW50cy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYyA9IHRoaXMubV9jb21wb25lbnRzWyBpIF07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCAoPFN5c3RlbS5JRGlzcG9zYWJsZT5jKS5EaXNwb3NlICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICg8U3lzdGVtLklEaXNwb3NhYmxlPmMpLkRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIHRoaXMubV9jb21wb25lbnRLZXJuZWwgIT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9jb21wb25lbnRLZXJuZWwuRGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgT25TaG93KCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgT25IaWRlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSIsIlxyXG5cclxuLy8gbmFtZXNwYWNlIGliZXJiYXIuTVZDXHJcbi8vIHtcclxuLy8gICAgIHZhciB1QWxsb2NhdGVJRDogbnVtYmVyID0gMDtcclxuLy8gICAgIGV4cG9ydCBmdW5jdGlvbiBBbGxvY2F0ZUlEKCk6IHN0cmluZ1xyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHVBbGxvY2F0ZUlEKys7XHJcbi8vICAgICAgICAgcmV0dXJuIFwiaWJlcmJhcl9NdmMxX1wiICsgdUFsbG9jYXRlSUQ7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZXhwb3J0IGNsYXNzIENEYXRhTW9kZWxcclxuLy8gICAgIHtcclxuXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZXhwb3J0IGNsYXNzIENWaWV3TW9kZWxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICAvKipcclxuLy8gICAgICAgICAgKiDku47op4blm77kuK3ojrflj5ZKUXVlcnnlhYPntKBcclxuLy8gICAgICAgICAgKiBAcGFyYW0gdmlldyBcclxuLy8gICAgICAgICAgKi9cclxuLy8gICAgICAgICBwdWJsaWMgR2V0RWxlbWVudHNGcm9tVmlldyggdmlldzogQ1ZpZXcgKTogdm9pZFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgbGV0IGVsZW1lbnRSb290ID0gdmlldy5HZXRFbGVtZW50Um9vdCgpXHJcbi8vICAgICAgICAgICAgIGxldCBtb2RlbFR5cGUgPSB0aGlzLkdldFR5cGUoKTtcclxuLy8gICAgICAgICAgICAgbGV0IGZpZWxkSW5mb3MgPSBtb2RlbFR5cGUuR2V0RmllbGRzKCk7XHJcbi8vICAgICAgICAgICAgIGZvciAoIGNvbnN0IGZpIG9mIGZpZWxkSW5mb3MgKVxyXG4vLyAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgYXR0ckZyb21FbGVtZW50ID0gZmkuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEF0dHJpYnV0ZXMuRnJvbUVsZW1lbnRBdHRyaWJ1dGUgKSApO1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKCBhdHRyRnJvbUVsZW1lbnQgPT0gbnVsbCApXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFdoZXJlOiBKUXVlcnkgPSBudWxsO1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKCBhdHRyRnJvbUVsZW1lbnQuRnJvbUJvZHkgPT0gdHJ1ZSApXHJcbi8vICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFdoZXJlID0gJCggZG9jdW1lbnQuYm9keSApLmZpbmQoIGF0dHJGcm9tRWxlbWVudC5TZWxlY3RvclRleHQgKTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIGVsc2VcclxuLy8gICAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoIGF0dHJGcm9tRWxlbWVudC5TZWxlY3RvclRleHQgPT0gbnVsbCApXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRXaGVyZSA9IGVsZW1lbnRSb290O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFdoZXJlID0gZWxlbWVudFJvb3QuZmluZCggYXR0ckZyb21FbGVtZW50LlNlbGVjdG9yVGV4dCApO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgZmkuU2V0VmFsdWUoIHRoaXMsIGVsZW1lbnRXaGVyZSApO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAvKipcclxuLy8gICAgICAgICAgKiDlsIZkYXRh5pWw5o2u5Y+N5bCE5Yiw5b2T5YmN55qEVmlld01vZGVs5LitXHJcbi8vICAgICAgICAgICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbi8vICAgICAgICAgICovXHJcbi8vICAgICAgICAgcHVibGljIEZyb21PYmplY3QoIGRhdGE6IGFueSApOiB2b2lkXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBsZXQgbW9kZWxUeXBlID0gdGhpcy5HZXRUeXBlKCk7XHJcbi8vICAgICAgICAgICAgIGxldCBmaWVsZEluZm9zID0gbW9kZWxUeXBlLkdldEZpZWxkcygpO1xyXG4vLyAgICAgICAgICAgICBmb3IgKCBjb25zdCBmaSBvZiBmaWVsZEluZm9zIClcclxuLy8gICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IGF0dHJGcm9tRWxlbWVudCA9IGZpLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBBdHRyaWJ1dGVzLkZyb21FbGVtZW50QXR0cmlidXRlICkgKTtcclxuLy8gICAgICAgICAgICAgICAgIGlmICggYXR0ckZyb21FbGVtZW50ID09IG51bGwgKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQ6IEpRdWVyeSA9IGZpLkdldFZhbHVlKCB0aGlzICk7XHJcbi8vICAgICAgICAgICAgICAgICBpZiAoIGVsZW1lbnQgPT0gbnVsbCB8fCBlbGVtZW50Lmxlbmd0aCA9PSAwIClcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBkYXRhVmFsdWUgPSBkYXRhWyBmaS5OYW1lIF07XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgZGF0YVR5cGUgPSB0eXBlb2YoIGRhdGFWYWx1ZSApO1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKCBkYXRhVmFsdWUgPT0gbnVsbCApXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbi8vICAgICAgICAgICAgICAgICBpZiAoIGRhdGFUeXBlID09IFwiYm9vbGVhblwiIClcclxuLy8gICAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnByb3AoIFwiY2hlY2tlZFwiLCBkYXRhVmFsdWUgKTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBkYXRhVHlwZSA9PSBcInN0cmluZ1wiIHx8IGRhdGFUeXBlID09IFwibnVtYmVyXCIgKVxyXG4vLyAgICAgICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsKCBkYXRhVmFsdWUgKTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBsZXQgcHJvcGVydHlJbmZvcyA9IG1vZGVsVHlwZS5HZXRQcm9wZXJ0aWVzKCk7XHJcbi8vICAgICAgICAgICAgIGZvciAoIGNvbnN0IHBpIG9mIHByb3BlcnR5SW5mb3MgKVxyXG4vLyAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgZGF0YVZhbHVlID0gZGF0YVsgcGkuTmFtZSBdO1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IGRhdGFUeXBlID0gdHlwZW9mKCBkYXRhVmFsdWUgKTtcclxuLy8gICAgICAgICAgICAgICAgIGlmICggZGF0YVZhbHVlID09IG51bGwgKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4vLyAgICAgICAgICAgICAgICAgcGkuU2V0VmFsdWUoIHRoaXMsIGRhdGFWYWx1ZSApO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAvKipcclxuLy8gICAgICAgICAgKiDlsIblvZPliY3nmoRWaWV3TW9kZWzmqKHlnovlj43lsITliLDmlbDmja5cclxuLy8gICAgICAgICAgKiBAcGFyYW0gdHlwZSDmlbDmja7nsbvlnotcclxuLy8gICAgICAgICAgKi9cclxuLy8gICAgICAgICBwdWJsaWMgVG9PYmplY3Q8IFQgZXh0ZW5kcyBvYmplY3QgPiggdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IFQgPiApOiBUXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBsZXQgb2JqID0gdHlwZS5HZXRDb25zdHJ1Y3RvcigpLkludm9rZSgpO1xyXG4vLyAgICAgICAgICAgICBsZXQgbW9kZWxUeXBlID0gdGhpcy5HZXRUeXBlKCk7XHJcbi8vICAgICAgICAgICAgIGxldCBmaWVsZEluZm9zID0gbW9kZWxUeXBlLkdldEZpZWxkcygpO1xyXG4vLyAgICAgICAgICAgICBmb3IgKCBjb25zdCBmaSBvZiBmaWVsZEluZm9zIClcclxuLy8gICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IGF0dHJGcm9tRWxlbWVudCA9IGZpLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBBdHRyaWJ1dGVzLkZyb21FbGVtZW50QXR0cmlidXRlICkgKTtcclxuLy8gICAgICAgICAgICAgICAgIGlmICggYXR0ckZyb21FbGVtZW50ID09IG51bGwgKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IGZpX29iaiA9IHR5cGUuR2V0RmllbGRPbmUoIGZpLk5hbWUgKTtcclxuLy8gICAgICAgICAgICAgICAgIGlmICggZmlfb2JqID09IG51bGwgKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IGF0dHJEZWNsYXJpbmdUeXBlID0gZmlfb2JqLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBTeXN0ZW0uUmVmbGVjdGlvbi5DRGVjbGFyaW5nVHlwZUF0dHJpYnV0ZSApICk7XHJcbi8vICAgICAgICAgICAgICAgICBpZiAoIGF0dHJEZWNsYXJpbmdUeXBlID09IG51bGwgKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSA8SlF1ZXJ5PmZpLkdldFZhbHVlKCB0aGlzICk7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgZGF0YVZhbHVlVHlwZSA9IGF0dHJEZWNsYXJpbmdUeXBlLkRlY2xhcmluZ1R5cGU7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgZGF0YVZhbHVlOiBhbnkgPSBudWxsO1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKCBkYXRhVmFsdWVUeXBlLklzRXF1aXZhbGVudFRvKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIE51bWJlciApICkgKVxyXG4vLyAgICAgICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGRhdGFWYWx1ZSA9IE51bWJlciggZWxlbWVudC52YWwoKSApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmICggTnVtYmVyLmlzTmFOKCBkYXRhVmFsdWUgKSApXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWYWx1ZSA9IG51bGw7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICBlbHNlIGlmICggZGF0YVZhbHVlVHlwZS5Jc0VxdWl2YWxlbnRUbyggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBTdHJpbmcgKSApIClcclxuLy8gICAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBkYXRhVmFsdWUgPSBlbGVtZW50LnZhbCgpLnRvU3RyaW5nKCk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICBlbHNlIGlmICggZGF0YVZhbHVlVHlwZS5Jc0VxdWl2YWxlbnRUbyggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBCb29sZWFuICkgKSApXHJcbi8vICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGF0YVZhbHVlID0gZWxlbWVudC5wcm9wKCBcImNoZWNrZWRcIiApO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgZmlfb2JqLlNldFZhbHVlKCBvYmosIGRhdGFWYWx1ZSApO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIHJldHVybiA8VD5vYmo7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuXHJcblxyXG4vLyAgICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIENWaWV3Q29udHJvbGxlclxyXG4vLyAgICAge1xyXG5cclxuLy8gICAgIH07XHJcblxyXG5cclxuLy8gICAgIC8vIGV4cG9ydCBpbnRlcmZhY2UgSVZpZXdQcm92aWRlclxyXG4vLyAgICAgLy8ge1xyXG4vLyAgICAgLy8gICAgIFJlc29sdmVWaWV3PCBUVmlldyBleHRlbmRzIENWaWV3ID4oIHZpZXdUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVFZpZXcgPiApOiBUVmlldztcclxuLy8gICAgIC8vIH1cclxuXHJcbi8vICAgICAvLyB2YXIgdVZpZXdQcm92aWRlcjogSVZpZXdQcm92aWRlciA9IG51bGw7XHJcbi8vICAgICAvLyB2YXIgdUlvY1Byb3ZpZGVyOiBBdXRvZmFjLklQcm92aWRlciA9IG51bGw7XHJcblxyXG4vLyAgICAgLy8gZXhwb3J0IGZ1bmN0aW9uIEluaXRpYWxpemVWaWV3UHJvdmlkZXIoIHByb3ZpZGVyOiBJVmlld1Byb3ZpZGVyICk6IHZvaWRcclxuLy8gICAgIC8vIHtcclxuLy8gICAgIC8vICAgICB1Vmlld1Byb3ZpZGVyID0gcHJvdmlkZXI7XHJcbi8vICAgICAvLyAgICAgLy9jb25zb2xlLmRlYnVnKCBSZWZsZWN0LmRlZmluZVByb3BlcnR5KCBNdmMsIFwidVZpZXdQcm92aWRlclwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9ICkgKTtcclxuLy8gICAgIC8vIH1cclxuXHJcbi8vICAgICAvLyBleHBvcnQgZnVuY3Rpb24gR2V0Vmlld1Byb3ZpZGVyKCk6IElWaWV3UHJvdmlkZXJcclxuLy8gICAgIC8vIHtcclxuLy8gICAgIC8vICAgICByZXR1cm4gdVZpZXdQcm92aWRlcjtcclxuLy8gICAgIC8vIH1cclxuXHJcbi8vICAgICB2YXIgdUlvY1Byb3ZpZGVyOiBBdXRvZmFjLklMaWZldGltZVNjb3BlID0gbnVsbDtcclxuXHJcbi8vICAgICBleHBvcnQgZnVuY3Rpb24gSW5pdGlhbGl6ZUlvYyggaW9jUHJvdmlkZXI6IEF1dG9mYWMuSUxpZmV0aW1lU2NvcGUgKTogdm9pZFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHVJb2NQcm92aWRlciA9IGlvY1Byb3ZpZGVyO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGV4cG9ydCBmdW5jdGlvbiBHZXRJb2MoKTogQXV0b2ZhYy5JTGlmZXRpbWVTY29wZVxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHJldHVybiB1SW9jUHJvdmlkZXI7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuIiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQ1xyXG57XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gRGlzYWJsZVZpZXdDb21wb25lbnQoIGNvbXBvbmVudFR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLklEZWxheVR5cGUgKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yQ2xhc3NcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3lzdGVtLkF0dHJpYnV0ZURlY29yYXRlKCBuZXcgQXR0cmlidXRlcy5DRGlzYWJsZVZpZXdDb21wb25lbnRBdHRyaWJ1dGUoIGNvbXBvbmVudFR5cGUgKSApO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkNcclxue1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFZpZXdNb2RlbCgpOiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JGaWVsZFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBTeXN0ZW0uQXR0cmlidXRlRGVjb3JhdGUoIG5ldyBBdHRyaWJ1dGVzLkNWaWV3TW9kZWxBdHRyaWJ1dGUoKSApO1xyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5Db3JlXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUFjdGlvbkJpbmRlclJlc3VsdCBleHRlbmRzIFN5c3RlbS5JRGlzcG9zYWJsZVxyXG4gICAge1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuQ29yZVxyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRJbml0XHJcbiAgICB7XHJcbiAgICAgICAgSW5pdFZpZXcoIHZpZXc6IENWaWV3ICk6IHZvaWQ7XHJcbiAgICAgICAgUmVJbml0VmlldyggdmlldzogQ1ZpZXcgKTogdm9pZDtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ikc6XFxDb2RlR2l0XFxUeXBlc2NyaXB0QXV0b2ZhY1xcYmluXFxNVkMifQ==

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
    var MVC;
    (function (MVC) {
        var KernelJquery;
        (function (KernelJquery) {
            var Attributes;
            (function (Attributes) {
                let CDependOnViewAttribute = class CDependOnViewAttribute extends iberbar.System.CAttribute {
                    constructor(viewType, selectorText) {
                        super();
                        this.m_selectorText = null;
                        this.m_fromBody = false;
                        this.m_createMethod = KernelJquery.UViewCreateStyle.Append;
                        this.m_viewType = null;
                        this.m_tag = null;
                        this.m_selectorText = selectorText;
                        this.m_viewType = viewType;
                    }
                    get ViewType() {
                        return this.m_viewType;
                    }
                    get SelectorText() {
                        return this.m_selectorText;
                    }
                    set FromBody(value) {
                        this.m_fromBody = value;
                    }
                    get FromBody() {
                        return this.m_fromBody;
                    }
                    set CreateMethod(value) {
                        this.m_createMethod = value;
                    }
                    get CreateMethod() {
                        return this.m_createMethod;
                    }
                    set Tag(value) {
                        this.m_tag = value;
                    }
                    get Tag() {
                        return this.m_tag;
                    }
                };
                CDependOnViewAttribute = __decorate([
                    iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Class, true, false),
                    __metadata("design:paramtypes", [iberbar.System.Reflection.CType, String])
                ], CDependOnViewAttribute);
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
                let CFloatAttribute = class CFloatAttribute extends iberbar.System.CAttribute {
                    constructor(absolutePosition) {
                        super();
                        this.m_absolutePosition = false;
                        this.m_fixClass = null;
                        this.m_autoHide = false;
                        this.m_autoHideTimeout = null;
                        this.m_isPopMenu = false;
                        this.m_absolutePosition = absolutePosition;
                    }
                    get AbsolutePosition() {
                        return this.m_absolutePosition;
                    }
                    get FixClass() {
                        return this.m_fixClass;
                    }
                    set FixClass(value) {
                        this.m_fixClass = value;
                    }
                    get AutoHide() {
                        return this.m_autoHide;
                    }
                    set AutoHide(value) {
                        this.m_autoHide = value;
                    }
                    get AutoHideTimeout() {
                        return this.m_autoHideTimeout;
                    }
                    set AutoHideTimeout(value) {
                        this.m_autoHideTimeout = value;
                    }
                    get IsPopMenu() {
                        return this.m_isPopMenu;
                    }
                    set IsPopMenu(value) {
                        this.m_isPopMenu = value;
                    }
                };
                CFloatAttribute = __decorate([
                    iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Class, false, true),
                    iberbar.System.Reflection.TypeNickname("iberbar::MVC::KernelJquery::Attributes::CFloatAttribute"),
                    __metadata("design:paramtypes", [Boolean])
                ], CFloatAttribute);
                Attributes.CFloatAttribute = CFloatAttribute;
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
                let COverScrollAttribute = class COverScrollAttribute extends iberbar.System.CAttribute {
                    constructor(selectorText) {
                        super();
                        this.m_selectorText = null;
                        this.m_selectorText = selectorText;
                    }
                    get SelectorText() {
                        return this.m_selectorText;
                    }
                };
                COverScrollAttribute = __decorate([
                    iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Class, true, true),
                    __metadata("design:paramtypes", [String])
                ], COverScrollAttribute);
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
                let CSetActionAttribute = class CSetActionAttribute extends iberbar.System.CAttribute {
                    constructor(event, selectorText, fromBody) {
                        super();
                        this.m_event = null;
                        this.m_selectorText = null;
                        this.m_fromBody = false;
                        this.m_event = event;
                        this.m_selectorText = selectorText;
                        this.m_fromBody = fromBody;
                    }
                    get Event() {
                        return this.m_event;
                    }
                    get SelectorText() {
                        return this.m_selectorText;
                    }
                    get FromBody() {
                        return this.m_fromBody;
                    }
                };
                CSetActionAttribute = __decorate([
                    iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Method, true, false),
                    __metadata("design:paramtypes", [String, String, Boolean])
                ], CSetActionAttribute);
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
                let CTriggerElementAttribute = class CTriggerElementAttribute extends iberbar.System.CAttribute {
                };
                CTriggerElementAttribute = __decorate([
                    iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Parameter, false, false)
                ], CTriggerElementAttribute);
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
                let CTriggerEventAttribute = class CTriggerEventAttribute extends iberbar.System.CAttribute {
                };
                CTriggerEventAttribute = __decorate([
                    iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Parameter, false, false)
                ], CTriggerEventAttribute);
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
                let CTriggerViewAttribute = class CTriggerViewAttribute extends iberbar.System.CAttribute {
                };
                CTriggerViewAttribute = __decorate([
                    iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Parameter, false, false)
                ], CTriggerViewAttribute);
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
                let CWatchOverScrollAttribute = class CWatchOverScrollAttribute extends iberbar.System.CAttribute {
                };
                CWatchOverScrollAttribute = __decorate([
                    iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Method, false, false)
                ], CWatchOverScrollAttribute);
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
            let Attributes;
            (function (Attributes) {
                let FromElementAttribute = class FromElementAttribute extends iberbar.System.CAttribute {
                    constructor(selectorText, fromBody) {
                        super();
                        this.m_selectorText = null;
                        this.m_fromBody = false;
                        this.m_selectorText = selectorText;
                    }
                    get SelectorText() {
                        return this.m_selectorText;
                    }
                    get FromBody() {
                        return this.m_fromBody;
                    }
                };
                FromElementAttribute = __decorate([
                    iberbar.System.AttributeUsage(iberbar.System.UAttributeTarget.Field, false, false),
                    __metadata("design:paramtypes", [String, Boolean])
                ], FromElementAttribute);
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
                    iberbar.System.AttributeDecorate(new Attributes.FromElementAttribute(selectorText, (fromBody == true) ? true : false))(target, fieldName);
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
            let Attributes;
            (function (Attributes) {
                class FromViewAttribute extends iberbar.System.CAttribute {
                    constructor() {
                        super();
                        this.m_tag = null;
                    }
                    set Tag(value) {
                        this.m_tag = value;
                    }
                    get Tag() {
                        return this.m_tag;
                    }
                }
                Attributes.FromViewAttribute = FromViewAttribute;
                ;
            })(Attributes = KernelJquery.Attributes || (KernelJquery.Attributes = {}));
            function FromView(opts) {
                let attr = new Attributes.FromViewAttribute();
                if (opts != null) {
                    if (opts.tag != null) {
                        attr.Tag = opts.tag;
                    }
                }
                return iberbar.System.AttributeDecorate(attr);
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
                class CActionBinder {
                    BindActions(view, handlerType) {
                        let result = new Components.CActionBinderResult();
                        this.ReBindActionsForType(view, handlerType);
                        return result;
                    }
                    ReBindActionsForType(view, type) {
                        let methodInfos = (type == null) ? view.GetType().GetMethods() : type.GetMethods();
                        let binder = this;
                        for (let i = 0; i < methodInfos.length; i++) {
                            let mi = methodInfos[i];
                            let actionAttrList = mi.GetCustomAttributes(iberbar.System.Reflection.TypeOf(KernelJquery.Attributes.CSetActionAttribute));
                            if (actionAttrList == null || actionAttrList.length == 0)
                                continue;
                            for (let j = 0; j < actionAttrList.length; j++) {
                                let actionAttr = actionAttrList[j];
                                let event = actionAttr.Event;
                                let selectorText = actionAttr.SelectorText;
                                let elementTemp = null;
                                if (actionAttr.FromBody == true) {
                                    if (selectorText == null)
                                        elementTemp = $("body");
                                    else
                                        elementTemp = $(selectorText);
                                }
                                else {
                                    if (selectorText == null)
                                        elementTemp = view.GetElementRoot();
                                    else
                                        elementTemp = view.GetElementRoot().find(selectorText);
                                }
                                if (elementTemp == null || elementTemp.length == 0)
                                    continue;
                                if (event == "click") {
                                    elementTemp.click(function (e) {
                                        return binder.InvokeControllerMethod(view, type, $(this), e, mi);
                                    });
                                }
                                else if (event == "valuechange") {
                                    elementTemp.change(function (e) {
                                        return binder.InvokeControllerMethod(view, type, $(this), e, mi);
                                    });
                                }
                                else {
                                    elementTemp.on(event, function (e) {
                                        return binder.InvokeControllerMethod(view, type, $(this), e, mi);
                                    });
                                }
                            }
                        }
                    }
                    InvokeControllerMethod(view, type, elementEvent, jqEvent, methodInfo) {
                        let provider = view.LifetimeScope;
                        let caller = (type == null) ? view : provider.Resolve(type);
                        let parameterInfos = methodInfo.GetParameters();
                        let parameters = Array(parameterInfos.length);
                        for (let parameterIndex = 0; parameterIndex < parameterInfos.length; parameterIndex++) {
                            let pi = parameterInfos[parameterIndex];
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
                            }
                            //let attrDeclaringType = pi.GetCustomAttributeOne( System.Reflection.TypeOf( System.Reflection.CDeclaringTypeAttribute ) );
                            let parameterType = pi.ParameterType;
                            let parameterName = pi.Name;
                            if (parameterType != null) {
                                parameters[parameterIndex] = provider.Resolve(parameterType);
                                // let attrIocWithName = pi.GetCustomAttributeOne( System.Reflection.TypeOf( Autofac.CWithNameAttribute ) );
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
                        return methodInfo.Invoke(caller, ...parameters);
                    }
                }
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
                class CActionBinderResult {
                    Dispose() {
                    }
                }
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
                let CComponentDependOnViews = class CComponentDependOnViews {
                    constructor() {
                        this.m_viewsDependOn = Array();
                    }
                    InitView(view) {
                        let viewProvider = view.LifetimeScope;
                        let attrList_ViewDependOn = view.GetType().GetCustomAttributes(iberbar.System.Reflection.TypeOf(KernelJquery.Attributes.CDependOnViewAttribute), false);
                        if (attrList_ViewDependOn != null && attrList_ViewDependOn.length > 0) {
                            for (let i = 0; i < attrList_ViewDependOn.length; i++) {
                                let attr = attrList_ViewDependOn[i];
                                let viewTemp = viewProvider.Resolve(attr.ViewType);
                                if (viewTemp == null) {
                                    throw new Error(`can't resolve view of type "${attr.ViewType.GetNickname()}"`);
                                }
                                let elementWhere = null;
                                if (attr.FromBody == true) {
                                    elementWhere = $(document.body);
                                }
                                else {
                                    if (attr.SelectorText == null)
                                        elementWhere = view.GetElementRoot();
                                    else
                                        elementWhere = view.GetElementRoot().find(attr.SelectorText);
                                }
                                viewTemp.Create(elementWhere, attr.CreateMethod);
                                this.m_viewsDependOn.push({
                                    tag: attr.Tag,
                                    viewType: attr.ViewType,
                                    viewInstance: viewTemp
                                });
                            }
                        }
                    }
                    ReInitView(view) {
                        if (this.m_viewsDependOn.length > 0) {
                            for (let i = 0; i < this.m_viewsDependOn.length; i++) {
                                let vd = this.m_viewsDependOn[i];
                                vd.viewInstance.Dispose();
                            }
                            this.m_viewsDependOn = Array();
                        }
                        this.InitView(view);
                    }
                    get Views() {
                        return this.m_viewsDependOn;
                    }
                };
                CComponentDependOnViews = __decorate([
                    iberbar.System.Reflection.AutoReflectMetadata_Constructor,
                    iberbar.System.Reflection.TypeNickname("iberbar::MVC::KernelJquery::Components::CComponentDependOnViews")
                ], CComponentDependOnViews);
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
                let CComponentFadeIn = class CComponentFadeIn {
                    constructor() {
                        this.m_duration = null;
                    }
                    get Duration() {
                        return this.m_duration;
                    }
                    set Duration(value) {
                        this.m_duration = value;
                    }
                };
                CComponentFadeIn = __decorate([
                    iberbar.System.Reflection.TypeNickname("iberbar::MVC::KernelJquery::Components::CComponentFadeIn")
                ], CComponentFadeIn);
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
                let CComponentFadeOut = class CComponentFadeOut {
                    constructor() {
                        this.m_duration = null;
                    }
                    get Duration() {
                        return this.m_duration;
                    }
                    set Duration(value) {
                        this.m_duration = value;
                    }
                };
                CComponentFadeOut = __decorate([
                    iberbar.System.Reflection.TypeNickname("iberbar::MVC::KernelJquery::Components::CComponentFadeOut")
                ], CComponentFadeOut);
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
                let CComponentFloat = class CComponentFloat {
                    constructor() {
                        this.m_floatAttribute = null;
                        this.m_timer = null;
                        this.m_elementRoot = null;
                    }
                    InitView(view) {
                        let viewType = view.GetType();
                        let floatAttributeType = TypeOf(KernelJquery.Attributes.CFloatAttribute);
                        this.m_floatAttribute = viewType.GetCustomAttributeOne(floatAttributeType, true);
                        if (this.m_floatAttribute == null)
                            throw new Error(`Can't find the attribute of ${floatAttributeType.GetNickname()}`);
                        this.m_elementRoot = view.GetElementRoot();
                        if (this.m_floatAttribute.AbsolutePosition == true) {
                            this.m_elementRoot.css("position", "absolute");
                        }
                        else {
                            this.m_elementRoot.css("position", "fixed");
                        }
                        if (this.m_floatAttribute.AutoHide == true) {
                            let component = this;
                            this.m_elementRoot.hover(function () {
                                //$(this).addClass( component.m_floatAttribute.FixClass );
                                component.ClearTimer();
                            }, function () {
                                //$(this).removeClass( component.m_floatAttribute.FixClass );
                                component.HideNow(false);
                            });
                        }
                        if (this.m_floatAttribute.IsPopMenu == true) {
                            let component = this;
                            document.addEventListener("click", function () {
                                component.m_elementRoot.hide();
                            });
                        }
                    }
                    ReInitView(view) {
                    }
                    HideNow(now) {
                        if (now == true) {
                            this.ClearTimer();
                            this.m_elementRoot.hide();
                        }
                        else {
                            if (this.m_timer == null) {
                                this.m_timer = setTimeout(function (component) {
                                    component.m_elementRoot.hide();
                                    component.ClearTimer();
                                }, this.m_floatAttribute.AutoHideTimeout, this);
                            }
                        }
                    }
                    ClearTimer() {
                        clearTimeout(this.m_timer);
                        this.m_timer = null;
                    }
                };
                CComponentFloat = __decorate([
                    iberbar.System.Reflection.TypeNickname("iberbar::MVC::KernelJquery::Components::CComponentFloat")
                ], CComponentFloat);
                Components.CComponentFloat = CComponentFloat;
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
                class CComponentKernelJQuery extends MVC.Core.CComponentKernel {
                    constructor() {
                        super(...arguments);
                        this.m_uniqueId = null;
                        this.m_elementRoot = null;
                        this.m_componentFadeIn = null;
                        this.m_componentFadeOut = null;
                    }
                    Create(view, element, method) {
                        this.m_uniqueId = AllocateID();
                        let strHTML;
                        let classes;
                        try {
                            strHTML = view.ReturnHTML();
                            classes = view.ReturnClasses();
                        }
                        catch (error) {
                            console.error("Failed to create html with JQueryKernel");
                            console.error(error.stack);
                            return;
                        }
                        let strClasses = "";
                        if (classes != null && classes.length > 0) {
                            for (let i = 0; i < classes.length; i++) {
                                let cls = classes[i];
                                strClasses += cls + " ";
                            }
                            strClasses = `class="${strClasses}"`;
                        }
                        strHTML = `<div id="${this.m_uniqueId}" ${strClasses}>${strHTML}</div>`;
                        if (method == KernelJquery.UViewCreateStyle.Append) {
                            this.m_elementRoot = element.append(strHTML).find("#" + this.m_uniqueId);
                        }
                        else if (method == KernelJquery.UViewCreateStyle.Before) {
                            this.m_elementRoot = element.before(strHTML).parent().find("#" + this.m_uniqueId);
                        }
                        else {
                            this.m_elementRoot = element.after(strHTML).parent().find("#" + this.m_uniqueId);
                        }
                        this.m_componentFadeIn = view.GetComponent(TypeOf(Components.CComponentFadeIn));
                        this.m_componentFadeOut = view.GetComponent(TypeOf(Components.CComponentFadeOut));
                    }
                    ReCreate(view) {
                        let strHTML;
                        try {
                            strHTML = view.ReturnHTML();
                        }
                        catch (error) {
                            console.error("Failed to create html with JQueryKernel");
                            console.error(error.stack);
                            return;
                        }
                        this.m_elementRoot.empty().append(strHTML);
                    }
                    get ElementRoot() {
                        return this.m_elementRoot;
                    }
                    FadeIn(duration, onshow) {
                        this.m_elementRoot.fadeIn(duration, function () {
                            onshow.Execute();
                        });
                    }
                    FadeOut(duration, onhide) {
                        this.m_elementRoot.fadeOut(duration, function () {
                            onhide.Execute();
                        });
                    }
                    Show(onshow) {
                        this.m_elementRoot.show();
                        onshow.Execute();
                    }
                    Hide(onhide) {
                        this.m_elementRoot.hide();
                        onhide.Execute();
                    }
                    IsShow() {
                        return this.m_elementRoot.is(":hidden") == false;
                    }
                    Dispose() {
                        this.m_elementRoot.remove();
                        this.m_elementRoot = null;
                    }
                }
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
                let CComponentOverScroll = class CComponentOverScroll {
                    InitView(view) {
                        let viewType = view.GetType();
                        let componentKernel = view.GetComponentKernelJquery();
                        let watch = this.FindWatchMethod(viewType);
                        let attributes = viewType.GetCustomAttributes(TypeOf(KernelJquery.Attributes.COverScrollAttribute), true);
                        for (let i = 0; i < attributes.length; i++) {
                            let attr = attributes[i];
                            let element = null;
                            let selectorText = attr.SelectorText;
                            if (selectorText == null) {
                                element = componentKernel.ElementRoot;
                            }
                            else {
                                element = componentKernel.ElementRoot.find(selectorText);
                            }
                            if (element.length > 0) {
                                element.css("overflow-x", "hidden");
                                element.css("overflow-y", "auto");
                                element.css("-webkit-overflow-scrolling", "touch");
                                this.SetOverScroll(view, element.get(0), watch);
                            }
                        }
                    }
                    ReInitView(view) {
                        this.InitView(view);
                    }
                    FindWatchMethod(viewType) {
                        let methodInfos = viewType.GetMethods();
                        for (let i = 0; i < methodInfos.length; i++) {
                            let method = methodInfos[i];
                            if (method.IsDefined(iberbar.System.Reflection.TypeOf(KernelJquery.Attributes.CWatchOverScrollAttribute)))
                                return method;
                        }
                        return null;
                    }
                    SetOverScroll(view, el, methodInfo) {
                        if (el == undefined)
                            return;
                        el.addEventListener('touchstart', function (e) {
                            e.stopImmediatePropagation();
                            var top = this.scrollTop, totalScroll = this.scrollHeight, currentScroll = top + this.offsetHeight;
                            if (top === 0) {
                                this.scrollTop = 1;
                            }
                            else if (currentScroll === totalScroll) {
                                this.scrollTop = top - 1;
                            }
                            if (methodInfo != null)
                                methodInfo.Invoke(view, $(this), KernelJquery.UOverScrollEvent.OnBegin);
                        });
                        el.addEventListener('touchmove', function (e) {
                            e.stopImmediatePropagation();
                            if (this.offsetHeight < this.scrollHeight)
                                e._isScroller = true;
                        });
                        el.addEventListener('touchend', function (e) {
                            e.stopImmediatePropagation();
                            if (methodInfo != null)
                                methodInfo.Invoke(view, $(this), KernelJquery.UOverScrollEvent.OnEnd);
                        });
                        el.addEventListener("scroll", function (e) {
                            e.stopImmediatePropagation();
                            if (methodInfo != null) {
                                let element = $(this);
                                methodInfo.Invoke(view, element, KernelJquery.UOverScrollEvent.OnScrolling);
                                var scrollTop = element.scrollTop();
                                var scrollHeight = element.get(0).scrollHeight;
                                var windowHeight = element.height();
                                if (scrollTop == 0) {
                                    methodInfo.Invoke(view, element, KernelJquery.UOverScrollEvent.OnScrollToTop);
                                }
                                else if (scrollTop + windowHeight == scrollHeight) {
                                    methodInfo.Invoke(view, element, KernelJquery.UOverScrollEvent.OnScrollToBottom);
                                }
                            }
                        });
                    }
                };
                CComponentOverScroll = __decorate([
                    iberbar.System.Reflection.AutoReflectMetadata_Constructor,
                    iberbar.System.Reflection.TypeNickname("iberbar::MVC::KernelJquery::Components::CComponentOverScroll")
                ], CComponentOverScroll);
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
                class CModelBinderInternal {
                    constructor(view, model) {
                        this.m_view = null;
                        this.m_modelType = null;
                        this.m_model = null;
                        this.m_view = view;
                        this.m_modelType = model.GetType();
                        this.m_model = model;
                    }
                    Bind() {
                        let componentDependOnViews = this.m_view.GetComponent(iberbar.System.Reflection.TypeOf(Components.CComponentDependOnViews));
                        this.BindPropertiesWithElementsAndViews(componentDependOnViews == null ? null : componentDependOnViews.Views);
                    }
                    BindPropertiesWithElementsAndViews(viewList) {
                        let fieldInfos = this.m_modelType.GetFields();
                        for (let i = 0; i < fieldInfos.length; i++) {
                            let fi = fieldInfos[i];
                            // 绑定DOM元素
                            let attrFromElement = fi.GetCustomAttributeOne(iberbar.System.Reflection.TypeOf(KernelJquery.Attributes.FromElementAttribute));
                            if (attrFromElement != null) {
                                this.BindFieldWithElement(fi, attrFromElement);
                                continue;
                            }
                            // 绑定视图
                            let attrFromView = fi.GetCustomAttributeOne(iberbar.System.Reflection.TypeOf(KernelJquery.Attributes.FromViewAttribute));
                            if (attrFromView != null) {
                                this.BindFieldWithView(fi, viewList, attrFromView);
                                continue;
                            }
                        }
                    }
                    BindFieldWithView(fieldInfo, viewList, howGetFromView) {
                        let attrDeclaringType = fieldInfo.GetCustomAttributeOne(iberbar.System.Reflection.TypeOf(iberbar.System.Reflection.CDeclaringTypeAttribute));
                        if (attrDeclaringType == null)
                            return;
                        let isArray = false;
                        let viewType = null;
                        let bindType = fieldInfo.FieldType;
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
                        }
                        else if (bindType.IsInheritFrom(iberbar.System.Reflection.TypeOf(MVC.CView))) {
                            isArray = false;
                            viewType = bindType;
                        }
                        else {
                            console.warn("");
                            return;
                        }
                        if (isArray == true) {
                            let viewListTemp = Array();
                            for (let i = 0; i < viewList.length; i++) {
                                let viewListNode = viewList[i];
                                if (viewListNode.viewType.IsEquivalentTo(viewType) == false)
                                    continue;
                                viewListTemp.push(viewListNode.viewInstance);
                            }
                            fieldInfo.SetValue(this.m_model, viewListTemp);
                        }
                        else {
                            for (let i = 0; i < viewList.length; i++) {
                                let viewListNode = viewList[i];
                                if (viewListNode.viewType.IsEquivalentTo(viewType)) {
                                    if (howGetFromView.Tag != null) {
                                        if (howGetFromView.Tag == viewListNode.tag ||
                                            (howGetFromView.Tag.Equals != null && howGetFromView.Tag.Equals(viewListNode.tag))) {
                                            fieldInfo.SetValue(this.m_model, viewListNode.viewInstance);
                                            break;
                                        }
                                    }
                                    else {
                                        fieldInfo.SetValue(this.m_model, viewListNode.viewInstance);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    BindFieldWithElement(fieldInfo, attrFromElement) {
                        let elementWhere = null;
                        if (attrFromElement.FromBody == true) {
                            elementWhere = $(document.body).find(attrFromElement.SelectorText);
                        }
                        else {
                            if (attrFromElement.SelectorText == null)
                                elementWhere = this.m_view.GetElementRoot();
                            else
                                elementWhere = this.m_view.GetElementRoot().find(attrFromElement.SelectorText);
                        }
                        fieldInfo.SetValue(this.m_model, elementWhere);
                    }
                }
                class CViewModelBinder extends MVC.Core.CViewModelBinder {
                    BindModel(view, model) {
                        new CModelBinderInternal(view, model).Bind();
                    }
                }
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
                return MVC.AddViewComponent(TypeOfDelay(() => KernelJquery.Components.CComponentOverScroll));
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
                }
                // if ( selectorText == null )
                // {
                //     throw new Error( "selectorText must be valid." );
                // }
                let attribute = new KernelJquery.Attributes.CDependOnViewAttribute(viewType, selectorText);
                if (options != null) {
                    if (options.fromBody != null) {
                        attribute.FromBody = options.fromBody;
                    }
                    if (options.createMethod != null) {
                        attribute.CreateMethod = options.createMethod;
                    }
                    if (options.tag != null) {
                        attribute.Tag = options.tag;
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
        Reflect.defineProperty(MVC.CBuilder.prototype, "SetComponentKernelJQuery", { enumerable: false });
    })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));
var iberbar;
(function (iberbar) {
    var MVC;
    (function (MVC) {
        MVC.CView.prototype.GetElementRoot = function () {
            let componentJQuery = iberbar.System.dynamic_cast(this.GetComponentKernel(), MVC.KernelJquery.Components.CComponentKernelJQuery);
            if (componentJQuery == null)
                throw new Error("No Jquery");
            return componentJQuery.ElementRoot;
        };
        MVC.CView.prototype.GetComponentKernelJquery = function () {
            return (this.GetComponentKernel());
        };
        // CView.prototype.SetFadeIn = function( duration: JQuery.Duration )
        // {
        //     let componentType = TypeOf( KernelJquery.Components.CComponentFadeIn );
        //     let component = this.GetComponent( componentType );
        //     if ( component == null )
        //     {
        //         console.warn( `There is no component<${componentType.GetNickname()}>` );
        //     }
        //     else
        //     {
        //         component.Duration = duration;
        //     }
        // }
        // CView.prototype.SetFadeOut = function( duration: JQuery.Duration )
        // {
        //     let componentType = TypeOf( KernelJquery.Components.CComponentFadeOut );
        //     let component = this.GetComponent( componentType );
        //     if ( component == null )
        //     {
        //         console.warn( `There is no component<${componentType.GetNickname()}>` );
        //     }
        //     else
        //     {
        //         component.Duration = duration;
        //     }
        // }
        Reflect.defineProperty(MVC.CView.prototype, "GetElementRoot", { enumerable: false });
        // Reflect.defineProperty( CView.prototype, "SetFadeIn", { enumerable: false } );
        // Reflect.defineProperty( CView.prototype, "SetFadeOut", { enumerable: false } );
    })(MVC = iberbar.MVC || (iberbar.MVC = {}));
})(iberbar || (iberbar = {}));
var iberbar;
(function (iberbar) {
    var MVC;
    (function (MVC) {
        var KernelJquery;
        (function (KernelJquery) {
            function Float(options) {
                let attribute = new KernelJquery.Attributes.CFloatAttribute(options.absolutePosition);
                if (options.fixClass != null)
                    attribute.FixClass = options.fixClass;
                if (options.autoHide != null)
                    attribute.AutoHide = options.autoHide;
                if (options.autoHideTimeout != null)
                    attribute.AutoHideTimeout = options.autoHideTimeout;
                if (options.isPopMenu != null)
                    attribute.IsPopMenu = options.isPopMenu;
                return iberbar.System.AttributeDecorate(attribute);
            }
            KernelJquery.Float = Float;
        })(KernelJquery = MVC.KernelJquery || (MVC.KernelJquery = {}));
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
                return iberbar.System.AttributeDecorate(new KernelJquery.Attributes.CSetActionAttribute(event, selectorText, (fromBody == true) ? true : false));
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
            let UOverScrollEvent;
            (function (UOverScrollEvent) {
                UOverScrollEvent[UOverScrollEvent["OnBegin"] = 0] = "OnBegin";
                UOverScrollEvent[UOverScrollEvent["OnScrolling"] = 1] = "OnScrolling";
                UOverScrollEvent[UOverScrollEvent["OnEnd"] = 2] = "OnEnd";
                UOverScrollEvent[UOverScrollEvent["OnScrollToTop"] = 3] = "OnScrollToTop";
                UOverScrollEvent[UOverScrollEvent["OnScrollToBottom"] = 4] = "OnScrollToBottom";
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
            let UViewCreateStyle;
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
            var ViewModelConvert;
            (function (ViewModelConvert) {
                /**
         * 将data数据反射到当前的ViewModel中
         * @param data 数据
         */
                function FromObject(model, data) {
                    let modelType = model.GetType();
                    let fieldInfos = modelType.GetFields();
                    for (let i = 0; i < fieldInfos.length; i++) {
                        let fi = fieldInfos[i];
                        let attrFromElement = fi.GetCustomAttributeOne(iberbar.System.Reflection.TypeOf(KernelJquery.Attributes.FromElementAttribute));
                        if (attrFromElement == null)
                            continue;
                        let element = fi.GetValue(model);
                        if (element == null || element.length == 0)
                            continue;
                        let dataValue = data[fi.Name];
                        let dataType = typeof (dataValue);
                        if (dataValue == null)
                            continue;
                        if (dataType == "boolean") {
                            element.prop("checked", dataValue);
                        }
                        else if (dataType == "string" || dataType == "number") {
                            element.val(dataValue);
                        }
                    }
                    let propertyInfos = modelType.GetProperties();
                    for (let i = 0; i < propertyInfos.length; i++) {
                        let pi = propertyInfos[i];
                        let dataValue = data[pi.Name];
                        let dataType = typeof (dataValue);
                        if (dataValue == null)
                            continue;
                        pi.SetValue(model, dataValue);
                    }
                }
                ViewModelConvert.FromObject = FromObject;
                /**
                 * 将当前的ViewModel模型反射到数据
                 * @param type 数据类型
                 */
                function ToObject(model, type) {
                    let obj = type.GetConstructor().Invoke();
                    let modelType = model.GetType();
                    let fieldInfos = modelType.GetFields();
                    for (let i = 0; i < fieldInfos.length; i++) {
                        let fi = fieldInfos[i];
                        let attrFromElement = fi.GetCustomAttributeOne(iberbar.System.Reflection.TypeOf(KernelJquery.Attributes.FromElementAttribute));
                        if (attrFromElement == null)
                            continue;
                        let fi_obj = type.GetFieldOne(fi.Name);
                        if (fi_obj == null)
                            continue;
                        let attrDeclaringType = fi_obj.GetCustomAttributeOne(iberbar.System.Reflection.TypeOf(iberbar.System.Reflection.CDeclaringTypeAttribute));
                        if (attrDeclaringType == null)
                            continue;
                        let element = fi.GetValue(model);
                        let dataValueType = attrDeclaringType.DeclaringType;
                        let dataValue = null;
                        if (dataValueType.IsEquivalentTo(iberbar.System.Reflection.TypeOf(Number))) {
                            dataValue = Number(element.val());
                            if (Number.isNaN(dataValue))
                                dataValue = null;
                        }
                        else if (dataValueType.IsEquivalentTo(iberbar.System.Reflection.TypeOf(String))) {
                            dataValue = element.val().toString();
                        }
                        else if (dataValueType.IsEquivalentTo(iberbar.System.Reflection.TypeOf(Boolean))) {
                            dataValue = element.prop("checked");
                        }
                        fi_obj.SetValue(obj, dataValue);
                    }
                    return obj;
                }
                ViewModelConvert.ToObject = ToObject;
            })(ViewModelConvert = KernelJquery.ViewModelConvert || (KernelJquery.ViewModelConvert = {}));
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNyYy9BdHRyaWJ1dGVzL0NEZXBlbmRPblZpZXdBdHRyaWJ1dGUudHMiLCJTcmMvQXR0cmlidXRlcy9DRmxvYXRBdHRyaWJ1dGUudHMiLCJTcmMvQXR0cmlidXRlcy9DT3ZlclNjb2xsQXR0cmlidXRlLnRzIiwiU3JjL0F0dHJpYnV0ZXMvQ1NldEFjdGlvbkF0dHJpYnV0ZS50cyIsIlNyYy9BdHRyaWJ1dGVzL0NUcmlnZ2VyRWxlbWVudEF0dHJpYnV0ZS50cyIsIlNyYy9BdHRyaWJ1dGVzL0NUcmlnZ2VyRXZlbnRBdHRyaWJ1dGUudHMiLCJTcmMvQXR0cmlidXRlcy9DVHJpZ2dlclZpZXdBdHRyaWJ1dGUudHMiLCJTcmMvQXR0cmlidXRlcy9DV2F0Y2hPdmVyU2Nyb2xsQXR0cmlidXRlLnRzIiwiU3JjL0F0dHJpYnV0ZXMvRnJvbUVsZW1lbnQudHMiLCJTcmMvQXR0cmlidXRlcy9Gcm9tVmlldy50cyIsIlNyYy9Db21wb25lbnRzL0NBY3Rpb25CaW5kZXIudHMiLCJTcmMvQ29tcG9uZW50cy9DQWN0aW9uQmluZGVyUmVzdWx0LnRzIiwiU3JjL0NvbXBvbmVudHMvQ0NvbXBvbmVudERlcGVuZE9uVmlld3MudHMiLCJTcmMvQ29tcG9uZW50cy9DQ29tcG9uZW50RmFkZUluLnRzIiwiU3JjL0NvbXBvbmVudHMvQ0NvbXBvbmVudEZhZGVPdXQudHMiLCJTcmMvQ29tcG9uZW50cy9DQ29tcG9uZW50RmxvYXQudHMiLCJTcmMvQ29tcG9uZW50cy9DQ29tcG9uZW50S2VybmVsSlF1ZXJ5LnRzIiwiU3JjL0NvbXBvbmVudHMvQ0NvbXBvbmVudE92ZXJTY3JvbGwudHMiLCJTcmMvQ29tcG9uZW50cy9DVmlld01vZGVsQmluZGVyLnRzIiwiU3JjL0FkZFZpZXdDb21wb25lbnRPdmVyU2Nyb2xsLnRzIiwiU3JjL0RlcGVuZE9uVmlldy50cyIsIlNyYy9FeHRlbnNpb25zX0NCdWlsZGVyLnRzIiwiU3JjL0V4dGVuc2lvbnNfQ1ZpZXcudHMiLCJTcmMvRmxvYXQudHMiLCJTcmMvT3ZlclNjcm9sbC50cyIsIlNyYy9TZXRBY3Rpb24udHMiLCJTcmMvVHJpZ2dlckVsZW1lbnQudHMiLCJTcmMvVHJpZ2dlckV2ZW50LnRzIiwiU3JjL1RyaWdnZXJWaWV3LnRzIiwiU3JjL1VPdmVyU2Nyb2xsRXZlbnQudHMiLCJTcmMvVVZpZXdDcmVhdGVTdHlsZS50cyIsIlNyYy9WaWV3TW9kZWxDb252ZXJ0LnRzIiwiU3JjL1dhdGNoT3ZlclNjcm9sbC50cyIsIlNyYy9JVmlld0NyZWF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLElBQVUsT0FBTyxDQTBEaEI7QUExREQsV0FBVSxPQUFPO0lBQUMsSUFBQSxHQUFHLENBMERwQjtJQTFEaUIsV0FBQSxHQUFHO1FBQUMsSUFBQSxZQUFZLENBMERqQztRQTFEcUIsV0FBQSxZQUFZO1lBQUMsSUFBQSxVQUFVLENBMEQ1QztZQTFEa0MsV0FBQSxVQUFVO2dCQUd6QyxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUF1QixTQUFRLFFBQUEsTUFBTSxDQUFDLFVBQVU7b0JBUXpELFlBQW9CLFFBQTBDLEVBQUUsWUFBb0I7d0JBRWhGLEtBQUssRUFBRSxDQUFDO3dCQVJGLG1CQUFjLEdBQVcsSUFBSSxDQUFDO3dCQUM5QixlQUFVLEdBQVksS0FBSyxDQUFDO3dCQUM1QixtQkFBYyxHQUFxQixhQUFBLGdCQUFnQixDQUFDLE1BQU0sQ0FBQzt3QkFDM0QsZUFBVSxHQUFxQyxJQUFJLENBQUM7d0JBQ3BELFVBQUssR0FBUSxJQUFJLENBQUM7d0JBS3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDO3dCQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztvQkFDL0IsQ0FBQztvQkFFRCxJQUFXLFFBQVE7d0JBRWYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO29CQUMzQixDQUFDO29CQUVELElBQVcsWUFBWTt3QkFFbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO29CQUMvQixDQUFDO29CQUVELElB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QUFZLEdBQVosZ0JBQVksS0FBWixnQkFBWSxRQXNGakM7SUFBRCxDQUFDLEVBdEZpQixHQUFHLEdBQUgsV0FBRyxLQUFILFdBQUcsUUFzRnBCO0FBQUQsQ0FBQyxFQXRGUyxPQUFPLEtBQVAsT0FBTyxRQXNGaEI7QUNyRkQsSUFBVSxPQUFPLENBa0JoQjtBQWxCRCxXQUFVLE9BQU87SUFBQyxJQUFBLEdBQUcsQ0FrQnBCO0lBbEJpQixXQUFBLEdBQUc7UUFBQyxJQUFBLFlBQVksQ0FrQmpDO1FBbEJxQixXQUFBLFlBQVk7WUFFOUI7Ozs7Ozs7Ozs7O2VBV0c7WUFDSCxTQUFnQixlQUFlO2dCQUUzQixPQUFPLFFBQUEsTUFBTSxDQUFDLGlCQUFpQixDQUFFLElBQUksYUFBQSxVQUFVLENBQUMseUJBQXlCLEVBQUUsQ0FBRSxDQUFDO1lBQ2xGLENBQUM7WUFIZSw0QkFBZSxrQkFHOUIsQ0FBQTtRQUNMLENBQUMsRUFsQnFCLFlBQVksR0FBWixnQkFBWSxLQUFaLGdCQUFZLFFBa0JqQztJQUFELENBQUMsRUFsQmlCLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQWtCcEI7QUFBRCxDQUFDLEVBbEJTLE9BQU8sS0FBUCxPQUFPLFFBa0JoQiIsImZpbGUiOiIuLi9iaW4vTVZDLktlcm5lbEpxdWVyeS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLktlcm5lbEpxdWVyeS5BdHRyaWJ1dGVzXHJcbntcclxuICAgIEBTeXN0ZW0uQXR0cmlidXRlVXNhZ2UoIFN5c3RlbS5VQXR0cmlidXRlVGFyZ2V0LkNsYXNzLCB0cnVlLCBmYWxzZSApXHJcbiAgICBleHBvcnQgY2xhc3MgQ0RlcGVuZE9uVmlld0F0dHJpYnV0ZSBleHRlbmRzIFN5c3RlbS5DQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fc2VsZWN0b3JUZXh0OiBzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBtX2Zyb21Cb2R5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fY3JlYXRlTWV0aG9kOiBVVmlld0NyZWF0ZVN0eWxlID0gVVZpZXdDcmVhdGVTdHlsZS5BcHBlbmQ7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fdmlld1R5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBDVmlldyA+ID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgbV90YWc6IGFueSA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvciggdmlld1R5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBDVmlldyA+LCBzZWxlY3RvclRleHQ6IHN0cmluZyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1fc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3JUZXh0O1xyXG4gICAgICAgICAgICB0aGlzLm1fdmlld1R5cGUgPSB2aWV3VHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgVmlld1R5cGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV92aWV3VHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgU2VsZWN0b3JUZXh0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fc2VsZWN0b3JUZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCBGcm9tQm9keSggdmFsdWU6IGJvb2xlYW4gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2Zyb21Cb2R5ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBnZXQgRnJvbUJvZHkoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9mcm9tQm9keTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgQ3JlYXRlTWV0aG9kKCB2YWx1ZTogVVZpZXdDcmVhdGVTdHlsZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fY3JlYXRlTWV0aG9kID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IENyZWF0ZU1ldGhvZCgpOiBVVmlld0NyZWF0ZVN0eWxlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2NyZWF0ZU1ldGhvZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgVGFnKCB2YWx1ZTogYW55IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV90YWcgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgVGFnKCk6IGFueVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV90YWc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSIsIlxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5LkF0dHJpYnV0ZXNcclxue1xyXG4gICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuQ2xhc3MsIGZhbHNlLCB0cnVlIClcclxuICAgIEBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlTmlja25hbWUoIFwiaWJlcmJhcjo6TVZDOjpLZXJuZWxKcXVlcnk6OkF0dHJpYnV0ZXM6OkNGbG9hdEF0dHJpYnV0ZVwiIClcclxuICAgIGV4cG9ydCBjbGFzcyBDRmxvYXRBdHRyaWJ1dGUgZXh0ZW5kcyBTeXN0ZW0uQ0F0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgbV9hYnNvbHV0ZVBvc2l0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgcHJpdmF0ZSBtX2ZpeENsYXNzOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgbV9hdXRvSGlkZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIHByaXZhdGUgbV9hdXRvSGlkZVRpbWVvdXQ6IG51bWJlciA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSBtX2lzUG9wTWVudTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGFic29sdXRlUG9zaXRpb246IGJvb2xlYW4gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5tX2Fic29sdXRlUG9zaXRpb24gPSBhYnNvbHV0ZVBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBBYnNvbHV0ZVBvc2l0aW9uKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fYWJzb2x1dGVQb3NpdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgRml4Q2xhc3MoKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2ZpeENsYXNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCBGaXhDbGFzcyggdmFsdWU6IHN0cmluZyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fZml4Q2xhc3MgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgQXV0b0hpZGUoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9hdXRvSGlkZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgQXV0b0hpZGUoIHZhbHVlOiBib29sZWFuIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9hdXRvSGlkZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBBdXRvSGlkZVRpbWVvdXQoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2F1dG9IaWRlVGltZW91dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgQXV0b0hpZGVUaW1lb3V0KCB2YWx1ZTogbnVtYmVyIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9hdXRvSGlkZVRpbWVvdXQgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgSXNQb3BNZW51KCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1faXNQb3BNZW51O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCBJc1BvcE1lbnUoIHZhbHVlOiBib29sZWFuIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9pc1BvcE1lbnUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5LkF0dHJpYnV0ZXNcclxue1xyXG4gICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuQ2xhc3MsIHRydWUsIHRydWUgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENPdmVyU2Nyb2xsQXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9zZWxlY3RvclRleHQ6IHN0cmluZyA9IG51bGw7XHJcbiAgICBcclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHNlbGVjdG9yVGV4dDogc3RyaW5nIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9zZWxlY3RvclRleHQgPSBzZWxlY3RvclRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHVibGljIGdldCBTZWxlY3RvclRleHQoKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3NlbGVjdG9yVGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLktlcm5lbEpxdWVyeS5BdHRyaWJ1dGVzXHJcbntcclxuICAgIEBTeXN0ZW0uQXR0cmlidXRlVXNhZ2UoIFN5c3RlbS5VQXR0cmlidXRlVGFyZ2V0Lk1ldGhvZCwgdHJ1ZSwgZmFsc2UgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENTZXRBY3Rpb25BdHRyaWJ1dGUgZXh0ZW5kcyBTeXN0ZW0uQ0F0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBtX2V2ZW50OiBzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBtX3NlbGVjdG9yVGV4dDogc3RyaW5nID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9mcm9tQm9keTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIGV2ZW50OiBzdHJpbmcsIHNlbGVjdG9yVGV4dDogc3RyaW5nLCBmcm9tQm9keTogYm9vbGVhbiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1fZXZlbnQgPSBldmVudDtcclxuICAgICAgICAgICAgdGhpcy5tX3NlbGVjdG9yVGV4dCA9IHNlbGVjdG9yVGV4dDtcclxuICAgICAgICAgICAgdGhpcy5tX2Zyb21Cb2R5ID0gZnJvbUJvZHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IEV2ZW50KCkgOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fZXZlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBnZXQgU2VsZWN0b3JUZXh0KCkgOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fc2VsZWN0b3JUZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBGcm9tQm9keSgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2Zyb21Cb2R5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLktlcm5lbEpxdWVyeS5BdHRyaWJ1dGVzXHJcbntcclxuICAgIEBTeXN0ZW0uQXR0cmlidXRlVXNhZ2UoIFN5c3RlbS5VQXR0cmlidXRlVGFyZ2V0LlBhcmFtZXRlciwgZmFsc2UsIGZhbHNlIClcclxuICAgIGV4cG9ydCBjbGFzcyBDVHJpZ2dlckVsZW1lbnRBdHRyaWJ1dGUgZXh0ZW5kcyBTeXN0ZW0uQ0F0dHJpYnV0ZVxyXG4gICAge1xyXG5cclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5LZXJuZWxKcXVlcnkuQXR0cmlidXRlc1xyXG57XHJcbiAgICBAU3lzdGVtLkF0dHJpYnV0ZVVzYWdlKCBTeXN0ZW0uVUF0dHJpYnV0ZVRhcmdldC5QYXJhbWV0ZXIsIGZhbHNlLCBmYWxzZSApXHJcbiAgICBleHBvcnQgY2xhc3MgQ1RyaWdnZXJFdmVudEF0dHJpYnV0ZSBleHRlbmRzIFN5c3RlbS5DQXR0cmlidXRlXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5LkF0dHJpYnV0ZXNcclxue1xyXG4gICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuUGFyYW1ldGVyLCBmYWxzZSwgZmFsc2UgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENUcmlnZ2VyVmlld0F0dHJpYnV0ZSBleHRlbmRzIFN5c3RlbS5DQXR0cmlidXRlXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5LkF0dHJpYnV0ZXNcclxue1xyXG4gICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuTWV0aG9kLCBmYWxzZSwgZmFsc2UgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENXYXRjaE92ZXJTY3JvbGxBdHRyaWJ1dGUgZXh0ZW5kcyBTeXN0ZW0uQ0F0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5LZXJuZWxKcXVlcnlcclxue1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBBdHRyaWJ1dGVzXHJcbiAgICB7XHJcbiAgICAgICAgQFN5c3RlbS5BdHRyaWJ1dGVVc2FnZSggU3lzdGVtLlVBdHRyaWJ1dGVUYXJnZXQuRmllbGQsIGZhbHNlLCBmYWxzZSApXHJcbiAgICAgICAgZXhwb3J0IGNsYXNzIEZyb21FbGVtZW50QXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3RlY3RlZCBtX3NlbGVjdG9yVGV4dDogc3RyaW5nID0gbnVsbDtcclxuICAgICAgICAgICAgcHJvdGVjdGVkIG1fZnJvbUJvZHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoIHNlbGVjdG9yVGV4dDogc3RyaW5nLCBmcm9tQm9keTogYm9vbGVhbiApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3JUZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgcHVibGljIGdldCBTZWxlY3RvclRleHQoKTogc3RyaW5nXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fc2VsZWN0b3JUZXh0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwdWJsaWMgZ2V0IEZyb21Cb2R5KCk6IGJvb2xlYW5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9mcm9tQm9keTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogKioo54m55oCnKSoqXHJcbiAgICAgKiBcclxuICAgICAqICsg6I635Y+WSlF1ZXJ55YWD57Sg77yM5YaF6YOo5Lya6LCD55SoIFN5c3RlbS5SZWZsZWN0aW9uLkVudW1lcmFibGUg6KOF6aWw5ZmoXHJcbiAgICAgKiArIOS/rumlsO+8muWtl+autVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3JUZXh0IEpRdWVyeemAieaLqeWZqFxyXG4gICAgICogQHBhcmFtIGZyb21Cb2R5ICjlj6/pgIkp5piv5ZCm5LuOQm9keeW8gOWni+afpeaJvumAieaLqVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gRnJvbUVsZW1lbnQoIHNlbGVjdG9yVGV4dDogc3RyaW5nLCBmcm9tQm9keT86IGJvb2xlYW4gKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yRmllbGRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oIHRhcmdldDogYW55LCBmaWVsZE5hbWU6IHN0cmluZyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTeXN0ZW0uUmVmbGVjdGlvbi5FbnVtZXJhYmxlKCB0YXJnZXQsIGZpZWxkTmFtZSApO1xyXG4gICAgICAgICAgICBTeXN0ZW0uQXR0cmlidXRlRGVjb3JhdGUoIG5ldyBBdHRyaWJ1dGVzLkZyb21FbGVtZW50QXR0cmlidXRlKCBzZWxlY3RvclRleHQsIChmcm9tQm9keSA9PSB0cnVlKSA/IHRydWUgOiBmYWxzZSApICkoIHRhcmdldCwgZmllbGROYW1lICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5LZXJuZWxKcXVlcnlcclxue1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBBdHRyaWJ1dGVzXHJcbiAgICB7XHJcbiAgICAgICAgZXhwb3J0IGNsYXNzIEZyb21WaWV3QXR0cmlidXRlIGV4dGVuZHMgU3lzdGVtLkNBdHRyaWJ1dGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByaXZhdGUgbV90YWc6IGFueSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwdWJsaWMgc2V0IFRhZyggdmFsdWU6IGFueSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV90YWcgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHVibGljIGdldCBUYWcoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX3RhZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBGcm9tVmlldyggb3B0cz86IHsgdGFnPzogYW55IH0gKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yRmllbGRcclxuICAgIHtcclxuICAgICAgICBsZXQgYXR0ciA9IG5ldyBBdHRyaWJ1dGVzLkZyb21WaWV3QXR0cmlidXRlKCk7XHJcbiAgICAgICAgaWYgKCBvcHRzICE9IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBvcHRzLnRhZyAhPSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXR0ci5UYWcgPSBvcHRzLnRhZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU3lzdGVtLkF0dHJpYnV0ZURlY29yYXRlKCBhdHRyICk7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5LkNvbXBvbmVudHNcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIENBY3Rpb25CaW5kZXIgaW1wbGVtZW50cyBDb3JlLkNBY3Rpb25CaW5kZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQmluZEFjdGlvbnMoIHZpZXc6IENWaWV3LCBoYW5kbGVyVHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgKTogQ29yZS5JQWN0aW9uQmluZGVyUmVzdWx0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IENBY3Rpb25CaW5kZXJSZXN1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5SZUJpbmRBY3Rpb25zRm9yVHlwZSggdmlldywgaGFuZGxlclR5cGUgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBSZUJpbmRBY3Rpb25zRm9yVHlwZSggdmlldzogQ1ZpZXcsIHR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBtZXRob2RJbmZvcyA9ICggdHlwZSA9PSBudWxsICkgPyB2aWV3LkdldFR5cGUoKS5HZXRNZXRob2RzKCkgOiB0eXBlLkdldE1ldGhvZHMoKTtcclxuICAgICAgICAgICAgbGV0IGJpbmRlciA9IHRoaXM7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IG1ldGhvZEluZm9zLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBtaSA9IG1ldGhvZEluZm9zWyBpIF07XHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uQXR0ckxpc3QgPSBtaS5HZXRDdXN0b21BdHRyaWJ1dGVzKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEF0dHJpYnV0ZXMuQ1NldEFjdGlvbkF0dHJpYnV0ZSApICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGFjdGlvbkF0dHJMaXN0ID09IG51bGwgfHwgYWN0aW9uQXR0ckxpc3QubGVuZ3RoID09IDAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZm9yICggbGV0IGogPSAwOyBqIDwgYWN0aW9uQXR0ckxpc3QubGVuZ3RoOyBqICsrIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWN0aW9uQXR0ciA9IGFjdGlvbkF0dHJMaXN0WyBqIF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gYWN0aW9uQXR0ci5FdmVudDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0b3JUZXh0ID0gYWN0aW9uQXR0ci5TZWxlY3RvclRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRUZW1wOiBKUXVlcnkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggYWN0aW9uQXR0ci5Gcm9tQm9keSA9PSB0cnVlIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggc2VsZWN0b3JUZXh0ID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRlbXAgPSAkKCBcImJvZHlcIiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGVtcCA9ICQoIHNlbGVjdG9yVGV4dCApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHNlbGVjdG9yVGV4dCA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZW1wID0gdmlldy5HZXRFbGVtZW50Um9vdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VGVtcCA9IHZpZXcuR2V0RWxlbWVudFJvb3QoKS5maW5kKCBzZWxlY3RvclRleHQgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBlbGVtZW50VGVtcCA9PSBudWxsIHx8IGVsZW1lbnRUZW1wLmxlbmd0aCA9PSAwIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBldmVudCA9PSBcImNsaWNrXCIgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRlbXAuY2xpY2soIGZ1bmN0aW9uKCBlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmRlci5JbnZva2VDb250cm9sbGVyTWV0aG9kKCB2aWV3LCB0eXBlLCAkKCB0aGlzICksIGUsIG1pICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggZXZlbnQgPT0gXCJ2YWx1ZWNoYW5nZVwiIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZW1wLmNoYW5nZSggZnVuY3Rpb24oIGUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluZGVyLkludm9rZUNvbnRyb2xsZXJNZXRob2QoIHZpZXcsIHR5cGUsICQoIHRoaXMgKSwgZSwgbWkgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUZW1wLm9uKCBldmVudCwgZnVuY3Rpb24oIGUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluZGVyLkludm9rZUNvbnRyb2xsZXJNZXRob2QoIHZpZXcsIHR5cGUsICQoIHRoaXMgKSwgZSwgbWkgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIEludm9rZUNvbnRyb2xsZXJNZXRob2QoIHZpZXc6IENWaWV3LCB0eXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSwgZWxlbWVudEV2ZW50OiBKUXVlcnksIGpxRXZlbnQ6IEpRdWVyeS5FdmVudCwgbWV0aG9kSW5mbzogU3lzdGVtLlJlZmxlY3Rpb24uQ01ldGhvZEluZm8gKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHByb3ZpZGVyID0gdmlldy5MaWZldGltZVNjb3BlO1xyXG4gICAgICAgICAgICBsZXQgY2FsbGVyID0gKCB0eXBlID09IG51bGwgKSA/IHZpZXcgOiBwcm92aWRlci5SZXNvbHZlKCB0eXBlICk7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbWV0ZXJJbmZvcyA9IG1ldGhvZEluZm8uR2V0UGFyYW1ldGVycygpO1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1ldGVycyA9IEFycmF5KCBwYXJhbWV0ZXJJbmZvcy5sZW5ndGggKTtcclxuICAgICAgICAgICAgZm9yICggbGV0IHBhcmFtZXRlckluZGV4ID0gMDsgcGFyYW1ldGVySW5kZXggPCBwYXJhbWV0ZXJJbmZvcy5sZW5ndGg7IHBhcmFtZXRlckluZGV4ICsrIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBpID0gcGFyYW1ldGVySW5mb3NbIHBhcmFtZXRlckluZGV4IF07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBwaS5Jc0RlZmluZWQoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQXR0cmlidXRlcy5DVHJpZ2dlckVsZW1lbnRBdHRyaWJ1dGUgKSApIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzWyBwYXJhbWV0ZXJJbmRleCBdID0gZWxlbWVudEV2ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggcGkuSXNEZWZpbmVkKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEF0dHJpYnV0ZXMuQ1RyaWdnZXJFdmVudEF0dHJpYnV0ZSApICkgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnNbIHBhcmFtZXRlckluZGV4IF0gPSBqcUV2ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggcGkuSXNEZWZpbmVkKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEF0dHJpYnV0ZXMuQ1RyaWdnZXJWaWV3QXR0cmlidXRlICkgKSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyc1sgcGFyYW1ldGVySW5kZXggXSA9IHZpZXc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBwaS5Jc0RlZmluZWQoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQXV0b2ZhYy5DSW5qZWN0TGlmZXRpbWVTY29wZUF0dHJpYnV0ZSApICkgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnNbIHBhcmFtZXRlckluZGV4IF0gPSBwcm92aWRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL2xldCBhdHRyRGVjbGFyaW5nVHlwZSA9IHBpLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBTeXN0ZW0uUmVmbGVjdGlvbi5DRGVjbGFyaW5nVHlwZUF0dHJpYnV0ZSApICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1ldGVyVHlwZSA9IHBpLlBhcmFtZXRlclR5cGU7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1ldGVyTmFtZSA9IHBpLk5hbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHBhcmFtZXRlclR5cGUgIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyc1sgcGFyYW1ldGVySW5kZXggXSA9IHByb3ZpZGVyLlJlc29sdmUoIHBhcmFtZXRlclR5cGUgKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgYXR0cklvY1dpdGhOYW1lID0gcGkuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEF1dG9mYWMuQ1dpdGhOYW1lQXR0cmlidXRlICkgKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIGF0dHJJb2NXaXRoTmFtZSAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhcmFtZXRlcnNbIHBhcmFtZXRlckluZGV4IF0gPSBwcm92aWRlci5SZXNvbHZlTmFtZWQoIHBhcmFtZXRlclR5cGUsIGF0dHJJb2NXaXRoTmFtZS5OYW1lICk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBhdHRySW9jV2l0aEtleSA9IHBpLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBBdXRvZmFjLkNXaXRoS2V5QXR0cmlidXRlICkgKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKCBhdHRySW9jV2l0aEtleSAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcGFyYW1ldGVyc1sgcGFyYW1ldGVySW5kZXggXSA9IHByb3ZpZGVyLlJlc29sdmVLZXllZCggcGFyYW1ldGVyVHlwZSwgYXR0cklvY1dpdGhLZXkuS2V5ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwYXJhbWV0ZXJzWyBwYXJhbWV0ZXJJbmRleCBdID0gcHJvdmlkZXIuUmVzb2x2ZSggcGFyYW1ldGVyVHlwZSApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kSW5mby5JbnZva2UoIGNhbGxlciwgLi4ucGFyYW1ldGVycyApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5LZXJuZWxKcXVlcnkuQ29tcG9uZW50c1xyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ0FjdGlvbkJpbmRlclJlc3VsdCBpbXBsZW1lbnRzIENvcmUuSUFjdGlvbkJpbmRlclJlc3VsdFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBEaXNwb3NlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5LkNvbXBvbmVudHNcclxue1xyXG4gICAgQFN5c3RlbS5SZWZsZWN0aW9uLkF1dG9SZWZsZWN0TWV0YWRhdGFfQ29uc3RydWN0b3JcclxuICAgIEBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlTmlja25hbWUoIFwiaWJlcmJhcjo6TVZDOjpLZXJuZWxKcXVlcnk6OkNvbXBvbmVudHM6OkNDb21wb25lbnREZXBlbmRPblZpZXdzXCIgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENDb21wb25lbnREZXBlbmRPblZpZXdzIGltcGxlbWVudHMgQ29yZS5JQ29tcG9uZW50SW5pdFxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgbV92aWV3c0RlcGVuZE9uOiBDQ29tcG9uZW50RGVwZW5kT25WaWV3cy5Jbml0UmVzdWx0ID0gQXJyYXkoKTtcclxuXHJcbiAgICAgICAgcHVibGljIEluaXRWaWV3KCB2aWV3OiBDVmlldyApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdmlld1Byb3ZpZGVyID0gdmlldy5MaWZldGltZVNjb3BlO1xyXG4gICAgICAgICAgICBsZXQgYXR0ckxpc3RfVmlld0RlcGVuZE9uID0gdmlldy5HZXRUeXBlKCkuR2V0Q3VzdG9tQXR0cmlidXRlcyggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBBdHRyaWJ1dGVzLkNEZXBlbmRPblZpZXdBdHRyaWJ1dGUgKSwgZmFsc2UgKTtcclxuICAgICAgICAgICAgaWYgKCBhdHRyTGlzdF9WaWV3RGVwZW5kT24gIT0gbnVsbCAmJiBhdHRyTGlzdF9WaWV3RGVwZW5kT24ubGVuZ3RoID4gMCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGF0dHJMaXN0X1ZpZXdEZXBlbmRPbi5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhdHRyID0gYXR0ckxpc3RfVmlld0RlcGVuZE9uWyBpIF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZpZXdUZW1wID0gdmlld1Byb3ZpZGVyLlJlc29sdmUoIGF0dHIuVmlld1R5cGUgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHZpZXdUZW1wID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBgY2FuJ3QgcmVzb2x2ZSB2aWV3IG9mIHR5cGUgXCIke2F0dHIuVmlld1R5cGUuR2V0Tmlja25hbWUoKX1cImAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRXaGVyZTogSlF1ZXJ5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGF0dHIuRnJvbUJvZHkgPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50V2hlcmUgPSAkKCBkb2N1bWVudC5ib2R5ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggYXR0ci5TZWxlY3RvclRleHQgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50V2hlcmUgPSB2aWV3LkdldEVsZW1lbnRSb290KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRXaGVyZSA9IHZpZXcuR2V0RWxlbWVudFJvb3QoKS5maW5kKCBhdHRyLlNlbGVjdG9yVGV4dCApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2aWV3VGVtcC5DcmVhdGUoIGVsZW1lbnRXaGVyZSwgYXR0ci5DcmVhdGVNZXRob2QgKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fdmlld3NEZXBlbmRPbi5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogYXR0ci5UYWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdUeXBlOiBhdHRyLlZpZXdUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3SW5zdGFuY2U6IHZpZXdUZW1wXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlSW5pdFZpZXcoIHZpZXc6IENWaWV3ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX3ZpZXdzRGVwZW5kT24ubGVuZ3RoID4gMCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubV92aWV3c0RlcGVuZE9uLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZkID0gdGhpcy5tX3ZpZXdzRGVwZW5kT25bIGkgXTtcclxuICAgICAgICAgICAgICAgICAgICB2ZC52aWV3SW5zdGFuY2UuRGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3ZpZXdzRGVwZW5kT24gPSBBcnJheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuSW5pdFZpZXcoIHZpZXcgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgVmlld3MoKTogYW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX3ZpZXdzRGVwZW5kT247XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDQ29tcG9uZW50RGVwZW5kT25WaWV3c1xyXG4gICAge1xyXG4gICAgICAgIGV4cG9ydCB0eXBlIEluaXRSZXN1bHQgPSBBcnJheTxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRhZzogYW55O1xyXG4gICAgICAgICAgICB2aWV3VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IENWaWV3ID47XHJcbiAgICAgICAgICAgIHZpZXdJbnN0YW5jZTogQ1ZpZXc7XHJcbiAgICAgICAgfSA+O1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5LkNvbXBvbmVudHNcclxue1xyXG4gICAgQGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU5pY2tuYW1lKCBcImliZXJiYXI6Ok1WQzo6S2VybmVsSnF1ZXJ5OjpDb21wb25lbnRzOjpDQ29tcG9uZW50RmFkZUluXCIgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENDb21wb25lbnRGYWRlSW5cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIG1fZHVyYXRpb246IEpRdWVyeS5EdXJhdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgRHVyYXRpb24oKTogSlF1ZXJ5LkR1cmF0aW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2R1cmF0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCBEdXJhdGlvbiggdmFsdWU6IEpRdWVyeS5EdXJhdGlvbiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fZHVyYXRpb24gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5LkNvbXBvbmVudHNcclxue1xyXG4gICAgQGliZXJiYXIuU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU5pY2tuYW1lKCBcImliZXJiYXI6Ok1WQzo6S2VybmVsSnF1ZXJ5OjpDb21wb25lbnRzOjpDQ29tcG9uZW50RmFkZU91dFwiIClcclxuICAgIGV4cG9ydCBjbGFzcyBDQ29tcG9uZW50RmFkZU91dFxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgbV9kdXJhdGlvbjogSlF1ZXJ5LkR1cmF0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGdldCBEdXJhdGlvbigpOiBKUXVlcnkuRHVyYXRpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fZHVyYXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IER1cmF0aW9uKCB2YWx1ZTogSlF1ZXJ5LkR1cmF0aW9uIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9kdXJhdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5LkNvbXBvbmVudHNcclxue1xyXG4gICAgQFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVOaWNrbmFtZSggXCJpYmVyYmFyOjpNVkM6Oktlcm5lbEpxdWVyeTo6Q29tcG9uZW50czo6Q0NvbXBvbmVudEZsb2F0XCIgKVxyXG4gICAgZXhwb3J0IGNsYXNzIENDb21wb25lbnRGbG9hdCBpbXBsZW1lbnRzIENvcmUuSUNvbXBvbmVudEluaXRcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIG1fZmxvYXRBdHRyaWJ1dGU6IFJlYWRvbmx5PCBBdHRyaWJ1dGVzLkNGbG9hdEF0dHJpYnV0ZSA+ID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIG1fdGltZXI6IG51bWJlciA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSBtX2VsZW1lbnRSb290OiBKUXVlcnkgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBJbml0VmlldyggdmlldzogQ1ZpZXcgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHZpZXdUeXBlID0gdmlldy5HZXRUeXBlKCk7XHJcbiAgICAgICAgICAgIGxldCBmbG9hdEF0dHJpYnV0ZVR5cGUgPSBUeXBlT2YoIEF0dHJpYnV0ZXMuQ0Zsb2F0QXR0cmlidXRlICk7XHJcbiAgICAgICAgICAgIHRoaXMubV9mbG9hdEF0dHJpYnV0ZSA9IHZpZXdUeXBlLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggZmxvYXRBdHRyaWJ1dGVUeXBlLCB0cnVlICk7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX2Zsb2F0QXR0cmlidXRlID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBgQ2FuJ3QgZmluZCB0aGUgYXR0cmlidXRlIG9mICR7ZmxvYXRBdHRyaWJ1dGVUeXBlLkdldE5pY2tuYW1lKCl9YCApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tX2VsZW1lbnRSb290ID0gdmlldy5HZXRFbGVtZW50Um9vdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fZmxvYXRBdHRyaWJ1dGUuQWJzb2x1dGVQb3NpdGlvbiA9PSB0cnVlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2VsZW1lbnRSb290LmNzcyggXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9lbGVtZW50Um9vdC5jc3MoIFwicG9zaXRpb25cIiwgXCJmaXhlZFwiICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tX2Zsb2F0QXR0cmlidXRlLkF1dG9IaWRlID09IHRydWUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMubV9lbGVtZW50Um9vdC5ob3ZlciggZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vJCh0aGlzKS5hZGRDbGFzcyggY29tcG9uZW50Lm1fZmxvYXRBdHRyaWJ1dGUuRml4Q2xhc3MgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuQ2xlYXJUaW1lcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyQodGhpcykucmVtb3ZlQ2xhc3MoIGNvbXBvbmVudC5tX2Zsb2F0QXR0cmlidXRlLkZpeENsYXNzICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LkhpZGVOb3coIGZhbHNlICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1fZmxvYXRBdHRyaWJ1dGUuSXNQb3BNZW51ID09IHRydWUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwiY2xpY2tcIiwgZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5tX2VsZW1lbnRSb290LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZUluaXRWaWV3KCB2aWV3OiBDVmlldyApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBIaWRlTm93KCBub3c6IGJvb2xlYW4gKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBub3cgPT0gdHJ1ZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ2xlYXJUaW1lcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2VsZW1lbnRSb290LmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5tX3RpbWVyID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV90aW1lciA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCBjb21wb25lbnQ6IENDb21wb25lbnRGbG9hdCApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQubV9lbGVtZW50Um9vdC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5DbGVhclRpbWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5tX2Zsb2F0QXR0cmlidXRlLkF1dG9IaWRlVGltZW91dCwgdGhpcyApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIENsZWFyVGltZXIoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCB0aGlzLm1fdGltZXIgKTtcclxuICAgICAgICAgICAgdGhpcy5tX3RpbWVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5LkNvbXBvbmVudHNcclxue1xyXG4gICAgdmFyIHVBbGxvY2F0ZUlEOiBudW1iZXIgPSAwO1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEFsbG9jYXRlSUQoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgdUFsbG9jYXRlSUQrKztcclxuICAgICAgICByZXR1cm4gXCJpYmVyYmFyX01WQzJfXCIgKyB1QWxsb2NhdGVJRDtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ0NvbXBvbmVudEtlcm5lbEpRdWVyeSBleHRlbmRzIE1WQy5Db3JlLkNDb21wb25lbnRLZXJuZWw8IElWaWV3Q3JlYXRvciA+XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBtX3VuaXF1ZUlkOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgICAgICBwcml2YXRlIG1fZWxlbWVudFJvb3Q6IEpRdWVyeSA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbV9jb21wb25lbnRGYWRlSW46IENDb21wb25lbnRGYWRlSW4gPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgbV9jb21wb25lbnRGYWRlT3V0OiBDQ29tcG9uZW50RmFkZU91dCA9IG51bGw7XHJcblxyXG4gICAgICAgIENyZWF0ZSggdmlldzogQ1ZpZXcsIGVsZW1lbnQ6IEpRdWVyeSwgbWV0aG9kOiBVVmlld0NyZWF0ZVN0eWxlICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV91bmlxdWVJZCA9IEFsbG9jYXRlSUQoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzdHJIVE1MOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGxldCBjbGFzc2VzOiBBcnJheTwgc3RyaW5nID5cclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0ckhUTUwgPSB2aWV3LlJldHVybkhUTUwoKTtcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMgPSB2aWV3LlJldHVybkNsYXNzZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoIGVycm9yIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggXCJGYWlsZWQgdG8gY3JlYXRlIGh0bWwgd2l0aCBKUXVlcnlLZXJuZWxcIiApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggZXJyb3Iuc3RhY2sgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHN0ckNsYXNzZXMgPSBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoIGNsYXNzZXMgIT0gbnVsbCAmJiBjbGFzc2VzLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNscyA9IGNsYXNzZXNbIGkgXTtcclxuICAgICAgICAgICAgICAgICAgICBzdHJDbGFzc2VzICs9IGNscyArIFwiIFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3RyQ2xhc3NlcyA9IGBjbGFzcz1cIiR7c3RyQ2xhc3Nlc31cImA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RySFRNTCA9IGA8ZGl2IGlkPVwiJHt0aGlzLm1fdW5pcXVlSWR9XCIgJHtzdHJDbGFzc2VzfT4ke3N0ckhUTUx9PC9kaXY+YDtcclxuICAgICAgICAgICAgaWYgKCBtZXRob2QgPT0gVVZpZXdDcmVhdGVTdHlsZS5BcHBlbmQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fZWxlbWVudFJvb3QgPSBlbGVtZW50LmFwcGVuZCggc3RySFRNTCApLmZpbmQoIFwiI1wiICsgdGhpcy5tX3VuaXF1ZUlkICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIG1ldGhvZCA9PSBVVmlld0NyZWF0ZVN0eWxlLkJlZm9yZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9lbGVtZW50Um9vdCA9IGVsZW1lbnQuYmVmb3JlKCBzdHJIVE1MICkucGFyZW50KCkuZmluZCggXCIjXCIgKyB0aGlzLm1fdW5pcXVlSWQgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9lbGVtZW50Um9vdCA9IGVsZW1lbnQuYWZ0ZXIoIHN0ckhUTUwgKS5wYXJlbnQoKS5maW5kKCBcIiNcIiArIHRoaXMubV91bmlxdWVJZCApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1fY29tcG9uZW50RmFkZUluID0gdmlldy5HZXRDb21wb25lbnQoIFR5cGVPZiggQ0NvbXBvbmVudEZhZGVJbiApICk7XHJcbiAgICAgICAgICAgIHRoaXMubV9jb21wb25lbnRGYWRlT3V0ID0gdmlldy5HZXRDb21wb25lbnQoIFR5cGVPZiggQ0NvbXBvbmVudEZhZGVPdXQgKSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFJlQ3JlYXRlKCB2aWV3OiBDVmlldyApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc3RySFRNTDogc3RyaW5nO1xyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RySFRNTCA9IHZpZXcuUmV0dXJuSFRNTCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoICggZXJyb3IgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIkZhaWxlZCB0byBjcmVhdGUgaHRtbCB3aXRoIEpRdWVyeUtlcm5lbFwiICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBlcnJvci5zdGFjayApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubV9lbGVtZW50Um9vdC5lbXB0eSgpLmFwcGVuZCggc3RySFRNTCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBFbGVtZW50Um9vdCgpOiBKUXVlcnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fZWxlbWVudFJvb3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRmFkZUluKCBkdXJhdGlvbjogbnVtYmVyLCBvbnNob3c6IFN5c3RlbS5UQ2FsbGJhY2s8ICgpID0+IHZvaWQgPiApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1fZWxlbWVudFJvb3QuZmFkZUluKCBkdXJhdGlvbiwgZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvbnNob3cuRXhlY3V0ZSgpO1xyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRmFkZU91dCggZHVyYXRpb246IG51bWJlciwgb25oaWRlOiBTeXN0ZW0uVENhbGxiYWNrPCAoKSA9PiB2b2lkID4gKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2VsZW1lbnRSb290LmZhZGVPdXQoIGR1cmF0aW9uLCBmdW5jdGlvbigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9uaGlkZS5FeGVjdXRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFNob3coIG9uc2hvdzogU3lzdGVtLlRDYWxsYmFjazwgKCkgPT4gdm9pZCA+ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9lbGVtZW50Um9vdC5zaG93KCk7XHJcbiAgICAgICAgICAgIG9uc2hvdy5FeGVjdXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSGlkZSggb25oaWRlOiBTeXN0ZW0uVENhbGxiYWNrPCAoKSA9PiB2b2lkID4gKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX2VsZW1lbnRSb290LmhpZGUoKTtcclxuICAgICAgICAgICAgb25oaWRlLkV4ZWN1dGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBJc1Nob3coKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9lbGVtZW50Um9vdC5pcyggXCI6aGlkZGVuXCIgKSA9PSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBEaXNwb3NlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubV9lbGVtZW50Um9vdC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5tX2VsZW1lbnRSb290ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5LZXJuZWxKcXVlcnkuQ29tcG9uZW50c1xyXG57XHJcbiAgICBAU3lzdGVtLlJlZmxlY3Rpb24uQXV0b1JlZmxlY3RNZXRhZGF0YV9Db25zdHJ1Y3RvclxyXG4gICAgQFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVOaWNrbmFtZSggXCJpYmVyYmFyOjpNVkM6Oktlcm5lbEpxdWVyeTo6Q29tcG9uZW50czo6Q0NvbXBvbmVudE92ZXJTY3JvbGxcIiApXHJcbiAgICBleHBvcnQgY2xhc3MgQ0NvbXBvbmVudE92ZXJTY3JvbGwgaW1wbGVtZW50cyBDb3JlLklDb21wb25lbnRJbml0XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIEluaXRWaWV3KCB2aWV3OiBDVmlldyApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdmlld1R5cGUgPSB2aWV3LkdldFR5cGUoKTtcclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudEtlcm5lbCA9IHZpZXcuR2V0Q29tcG9uZW50S2VybmVsSnF1ZXJ5KCk7XHJcbiAgICAgICAgICAgIGxldCB3YXRjaCA9IHRoaXMuRmluZFdhdGNoTWV0aG9kKCB2aWV3VHlwZSApO1xyXG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlcyA9IHZpZXdUeXBlLkdldEN1c3RvbUF0dHJpYnV0ZXMoIFR5cGVPZiggQXR0cmlidXRlcy5DT3ZlclNjcm9sbEF0dHJpYnV0ZSApLCB0cnVlICk7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0dHIgPSBhdHRyaWJ1dGVzWyBpIF07XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudDogSlF1ZXJ5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RvclRleHQgPSBhdHRyLlNlbGVjdG9yVGV4dDtcclxuICAgICAgICAgICAgICAgIGlmICggc2VsZWN0b3JUZXh0ID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBjb21wb25lbnRLZXJuZWwuRWxlbWVudFJvb3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IGNvbXBvbmVudEtlcm5lbC5FbGVtZW50Um9vdC5maW5kKCBzZWxlY3RvclRleHQgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICggZWxlbWVudC5sZW5ndGggPiAwIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNzcyggXCJvdmVyZmxvdy14XCIsIFwiaGlkZGVuXCIgKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNzcyggXCJvdmVyZmxvdy15XCIsIFwiYXV0b1wiICk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jc3MoIFwiLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmdcIiwgXCJ0b3VjaFwiICk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRPdmVyU2Nyb2xsKCB2aWV3LCBlbGVtZW50LmdldCggMCApLCB3YXRjaCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUmVJbml0VmlldyggdmlldzogQ1ZpZXcgKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Jbml0VmlldyggdmlldyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBGaW5kV2F0Y2hNZXRob2QoIHZpZXdUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSApOiBTeXN0ZW0uUmVmbGVjdGlvbi5DTWV0aG9kSW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG1ldGhvZEluZm9zID0gdmlld1R5cGUuR2V0TWV0aG9kcygpO1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBtZXRob2RJbmZvcy5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWV0aG9kID0gbWV0aG9kSW5mb3NbIGkgXTtcclxuICAgICAgICAgICAgICAgIGlmICggbWV0aG9kLklzRGVmaW5lZCggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBBdHRyaWJ1dGVzLkNXYXRjaE92ZXJTY3JvbGxBdHRyaWJ1dGUgKSApIClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBTZXRPdmVyU2Nyb2xsKCB2aWV3OiBDVmlldywgZWw6IEhUTUxFbGVtZW50LCBtZXRob2RJbmZvOiBTeXN0ZW0uUmVmbGVjdGlvbi5DTWV0aG9kSW5mbyApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIGVsID09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvcCA9IHRoaXMuc2Nyb2xsVG9wXHJcbiAgICAgICAgICAgICAgICAsdG90YWxTY3JvbGwgPSB0aGlzLnNjcm9sbEhlaWdodFxyXG4gICAgICAgICAgICAgICAgLGN1cnJlbnRTY3JvbGwgPSB0b3AgKyB0aGlzLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgICAgIGlmKHRvcCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gMTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTY3JvbGwgPT09IHRvdGFsU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSB0b3AgLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCBtZXRob2RJbmZvICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZEluZm8uSW52b2tlKCB2aWV3LCAkKCB0aGlzICksIFVPdmVyU2Nyb2xsRXZlbnQuT25CZWdpbiApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY3Rpb24oZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMub2Zmc2V0SGVpZ2h0IDwgdGhpcy5zY3JvbGxIZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+ZSkuX2lzU2Nyb2xsZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBmdW5jdGlvbiggZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIG1ldGhvZEluZm8gIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kSW5mby5JbnZva2UoIHZpZXcsICQoIHRoaXMgKSwgVU92ZXJTY3JvbGxFdmVudC5PbkVuZCApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoIFwic2Nyb2xsXCIsIGZ1bmN0aW9uKCBlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICggbWV0aG9kSW5mbyAhPSBudWxsIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kSW5mby5JbnZva2UoIHZpZXcsIGVsZW1lbnQsIFVPdmVyU2Nyb2xsRXZlbnQuT25TY3JvbGxpbmcgKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gZWxlbWVudC5nZXQoMCkuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSBlbGVtZW50LmhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggc2Nyb2xsVG9wID09IDAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kSW5mby5JbnZva2UoIHZpZXcsIGVsZW1lbnQsIFVPdmVyU2Nyb2xsRXZlbnQuT25TY3JvbGxUb1RvcCApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKCBzY3JvbGxUb3AgKyB3aW5kb3dIZWlnaHQgPT0gc2Nyb2xsSGVpZ2h0IClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZEluZm8uSW52b2tlKCB2aWV3LCBlbGVtZW50LCBVT3ZlclNjcm9sbEV2ZW50Lk9uU2Nyb2xsVG9Cb3R0b20gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLktlcm5lbEpxdWVyeS5Db21wb25lbnRzXHJcbntcclxuICAgIGNsYXNzIENNb2RlbEJpbmRlckludGVybmFsXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBtX3ZpZXc6IENWaWV3ID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIG1fbW9kZWxUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZSA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSBtX21vZGVsOiBvYmplY3QgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggdmlldzogQ1ZpZXcsIG1vZGVsOiBvYmplY3QgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3ZpZXcgPSB2aWV3O1xyXG4gICAgICAgICAgICB0aGlzLm1fbW9kZWxUeXBlID0gbW9kZWwuR2V0VHlwZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1fbW9kZWwgPSBtb2RlbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBCaW5kKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnREZXBlbmRPblZpZXdzID0gdGhpcy5tX3ZpZXcuR2V0Q29tcG9uZW50KCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIENDb21wb25lbnREZXBlbmRPblZpZXdzICkgKTtcclxuICAgICAgICAgICAgdGhpcy5CaW5kUHJvcGVydGllc1dpdGhFbGVtZW50c0FuZFZpZXdzKCBjb21wb25lbnREZXBlbmRPblZpZXdzID09IG51bGwgPyBudWxsIDogY29tcG9uZW50RGVwZW5kT25WaWV3cy5WaWV3cyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBCaW5kUHJvcGVydGllc1dpdGhFbGVtZW50c0FuZFZpZXdzKCB2aWV3TGlzdDogQ0NvbXBvbmVudERlcGVuZE9uVmlld3MuSW5pdFJlc3VsdCApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZmllbGRJbmZvcyA9IHRoaXMubV9tb2RlbFR5cGUuR2V0RmllbGRzKCk7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGZpZWxkSW5mb3MubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpID0gZmllbGRJbmZvc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgLy8g57uR5a6aRE9N5YWD57SgXHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0ckZyb21FbGVtZW50ID0gZmkuR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEF0dHJpYnV0ZXMuRnJvbUVsZW1lbnRBdHRyaWJ1dGUgKSApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBhdHRyRnJvbUVsZW1lbnQgIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CaW5kRmllbGRXaXRoRWxlbWVudCggZmksIGF0dHJGcm9tRWxlbWVudCApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIOe7keWumuinhuWbvlxyXG4gICAgICAgICAgICAgICAgbGV0IGF0dHJGcm9tVmlldyA9IGZpLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBBdHRyaWJ1dGVzLkZyb21WaWV3QXR0cmlidXRlICkgKTtcclxuICAgICAgICAgICAgICAgIGlmICggYXR0ckZyb21WaWV3ICE9IG51bGwgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmluZEZpZWxkV2l0aFZpZXcoIGZpLCB2aWV3TGlzdCwgYXR0ckZyb21WaWV3ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIEJpbmRGaWVsZFdpdGhWaWV3KCBmaWVsZEluZm86IFN5c3RlbS5SZWZsZWN0aW9uLkNGaWVsZEluZm8sIHZpZXdMaXN0OiBDQ29tcG9uZW50RGVwZW5kT25WaWV3cy5Jbml0UmVzdWx0LCBob3dHZXRGcm9tVmlldzogQXR0cmlidXRlcy5Gcm9tVmlld0F0dHJpYnV0ZSApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYXR0ckRlY2xhcmluZ1R5cGUgPSBmaWVsZEluZm8uR2V0Q3VzdG9tQXR0cmlidXRlT25lKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIFN5c3RlbS5SZWZsZWN0aW9uLkNEZWNsYXJpbmdUeXBlQXR0cmlidXRlICkgKTtcclxuICAgICAgICAgICAgaWYgKCBhdHRyRGVjbGFyaW5nVHlwZSA9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBpc0FycmF5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCB2aWV3VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgbGV0IGJpbmRUeXBlID0gZmllbGRJbmZvLkZpZWxkVHlwZTtcclxuICAgICAgICAgICAgaWYgKCBiaW5kVHlwZS5Jc0luaGVyaXRGcm9tKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEFycmF5ICkgKSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggYXR0ckRlY2xhcmluZ1R5cGUuR2VuZXJpY1R5cGVzLmxlbmd0aCAhPSAxIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oIFwiXCIgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIGF0dHJEZWNsYXJpbmdUeXBlLkdlbmVyaWNUeXBlc1sgMCBdLklzSW5oZXJpdEZyb20oIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQ1ZpZXcgKSApID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oIFwiXCIgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaXNBcnJheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2aWV3VHlwZSA9IGF0dHJEZWNsYXJpbmdUeXBlLkdlbmVyaWNUeXBlc1sgMCBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCBiaW5kVHlwZS5Jc0luaGVyaXRGcm9tKCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIENWaWV3ICkgKSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlzQXJyYXkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHZpZXdUeXBlID0gYmluZFR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oIFwiXCIgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBpc0FycmF5ID09IHRydWUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmlld0xpc3RUZW1wOiBBcnJheTwgQ1ZpZXcgPiA9IEFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB2aWV3TGlzdC5sZW5ndGg7IGkgKysgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2aWV3TGlzdE5vZGUgPSB2aWV3TGlzdFsgaSBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdmlld0xpc3ROb2RlLnZpZXdUeXBlLklzRXF1aXZhbGVudFRvKCB2aWV3VHlwZSApID09IGZhbHNlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0xpc3RUZW1wLnB1c2goIHZpZXdMaXN0Tm9kZS52aWV3SW5zdGFuY2UgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpZWxkSW5mby5TZXRWYWx1ZSggdGhpcy5tX21vZGVsLCB2aWV3TGlzdFRlbXAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHZpZXdMaXN0Lmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZpZXdMaXN0Tm9kZSA9IHZpZXdMaXN0WyBpIF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB2aWV3TGlzdE5vZGUudmlld1R5cGUuSXNFcXVpdmFsZW50VG8oIHZpZXdUeXBlICkgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBob3dHZXRGcm9tVmlldy5UYWcgIT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaG93R2V0RnJvbVZpZXcuVGFnID09IHZpZXdMaXN0Tm9kZS50YWcgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoICg8U3lzdGVtLklFcXVhdGFibGU8YW55Pj5ob3dHZXRGcm9tVmlldy5UYWcpLkVxdWFscyAhPSBudWxsICYmICg8U3lzdGVtLklFcXVhdGFibGU8YW55Pj5ob3dHZXRGcm9tVmlldy5UYWcpLkVxdWFscyggdmlld0xpc3ROb2RlLnRhZyApICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkSW5mby5TZXRWYWx1ZSggdGhpcy5tX21vZGVsLCB2aWV3TGlzdE5vZGUudmlld0luc3RhbmNlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZEluZm8uU2V0VmFsdWUoIHRoaXMubV9tb2RlbCwgdmlld0xpc3ROb2RlLnZpZXdJbnN0YW5jZSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgQmluZEZpZWxkV2l0aEVsZW1lbnQoIGZpZWxkSW5mbzogU3lzdGVtLlJlZmxlY3Rpb24uQ0ZpZWxkSW5mbywgYXR0ckZyb21FbGVtZW50OiBBdHRyaWJ1dGVzLkZyb21FbGVtZW50QXR0cmlidXRlICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50V2hlcmU6IEpRdWVyeSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICggYXR0ckZyb21FbGVtZW50LkZyb21Cb2R5ID09IHRydWUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50V2hlcmUgPSAkKCBkb2N1bWVudC5ib2R5ICkuZmluZCggYXR0ckZyb21FbGVtZW50LlNlbGVjdG9yVGV4dCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBhdHRyRnJvbUVsZW1lbnQuU2VsZWN0b3JUZXh0ID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRXaGVyZSA9IHRoaXMubV92aWV3LkdldEVsZW1lbnRSb290KCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFdoZXJlID0gdGhpcy5tX3ZpZXcuR2V0RWxlbWVudFJvb3QoKS5maW5kKCBhdHRyRnJvbUVsZW1lbnQuU2VsZWN0b3JUZXh0ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmllbGRJbmZvLlNldFZhbHVlKCB0aGlzLm1fbW9kZWwsIGVsZW1lbnRXaGVyZSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ1ZpZXdNb2RlbEJpbmRlciBleHRlbmRzIE1WQy5Db3JlLkNWaWV3TW9kZWxCaW5kZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQmluZE1vZGVsKCB2aWV3OiBDVmlldywgbW9kZWw6IG9iamVjdCApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgQ01vZGVsQmluZGVySW50ZXJuYWwoIHZpZXcsIG1vZGVsICkuQmluZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLktlcm5lbEpxdWVyeVxyXG57XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQWRkVmlld0NvbXBvbmVudE92ZXJTY3JvbGwoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBBZGRWaWV3Q29tcG9uZW50KCBUeXBlT2ZEZWxheSggKCkgPT4gQ29tcG9uZW50cy5DQ29tcG9uZW50T3ZlclNjcm9sbCApICk7XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLktlcm5lbEpxdWVyeVxyXG57XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gRGVwZW5kT25WaWV3KCB2aWV3VHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IENWaWV3ID4sIHNlbGVjdG9yVGV4dDogc3RyaW5nLCBvcHRpb25zPzogeyBmcm9tQm9keT86IGJvb2xlYW4sIGNyZWF0ZU1ldGhvZD86IFVWaWV3Q3JlYXRlU3R5bGUsIHRhZz86IGFueSB9ICk6IFN5c3RlbS5VRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0ZvckNsYXNzXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCB2aWV3VHlwZSA9PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJ2aWV3VHlwZSBtdXN0IGJlIHZhbGlkLlwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmICggc2VsZWN0b3JUZXh0ID09IG51bGwgKVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKCBcInNlbGVjdG9yVGV4dCBtdXN0IGJlIHZhbGlkLlwiICk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGxldCBhdHRyaWJ1dGUgPSBuZXcgQXR0cmlidXRlcy5DRGVwZW5kT25WaWV3QXR0cmlidXRlKCB2aWV3VHlwZSwgc2VsZWN0b3JUZXh0ICk7XHJcbiAgICAgICAgaWYgKCBvcHRpb25zICE9IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBvcHRpb25zLmZyb21Cb2R5ICE9IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGUuRnJvbUJvZHkgPSBvcHRpb25zLmZyb21Cb2R5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggb3B0aW9ucy5jcmVhdGVNZXRob2QgIT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZS5DcmVhdGVNZXRob2QgPSBvcHRpb25zLmNyZWF0ZU1ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIG9wdGlvbnMudGFnICE9IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGUuVGFnID0gb3B0aW9ucy50YWc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbS5BdHRyaWJ1dGVEZWNvcmF0ZSggYXR0cmlidXRlICk7XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIGliZXJiYXIuTVZDXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ0J1aWxkZXJcclxuICAgIHtcclxuICAgICAgICBTZXRDb21wb25lbnRLZXJuZWxKcXVlcnkoKTogdm9pZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5rOo5YaMSlF1ZXJ55qih5Z6L57uR5a6a57uE5Lu2XHJcbiAgICAgICAgICogQHBhcmFtIG1vZGVsQ29tcG9uZW50VHlwZSAo5Y+v6YCJKee7hOS7tuexu+Wei++8jOm7mOiupCBpYmVyYmFyLk1WQy5Db3JlLkNDb21wb25lbnRCaW5kTW9kZWxzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgQWRkQ29tcG9uZW50QmluZE1vZGVsc0pxdWVyeShcclxuICAgICAgICAgICAgbW9kZWxDb21wb25lbnRUeXBlPzogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IG9iamVjdCA+XHJcbiAgICAgICAgKTogdm9pZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5rOo5YaMSlF1ZXJ55LqL5Lu257uR5a6a57uE5Lu2XHJcbiAgICAgICAgICogQHBhcmFtIGFjdGlvbkNvbXBvbmVudFR5cGUgXHJcbiAgICAgICAgICogQHBhcmFtIGNvbnRyb2xsZXJDb21wb25lbnRUeXBlIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEFkZENvbXBvbmVudEJpbmRBY3Rpb25zSnF1ZXJ5KFxyXG4gICAgICAgICAgICBhY3Rpb25Db21wb25lbnRUeXBlPzogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IG9iamVjdCA+LFxyXG4gICAgICAgICAgICBjb250cm9sbGVyQ29tcG9uZW50VHlwZT86IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBvYmplY3QgPlxyXG4gICAgICAgICk6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOazqOWGjEpRdWVyeeinhuWbvuS+nei1lue7hOS7tu+8jOW/hemhu+aUvuWcqEFkZENvbXBvbmVudEJpbmRNb2RlbHNKUXVlcnnlkoxBZGRDb21wb25lbnRCaW5kQWN0aW9uc0pRdWVyeeWJjemdolxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEFkZENvbXBvbmVudERlcGVuZE9uVmlldygpOiB2b2lkO1xyXG4gICAgfVxyXG5cclxuICAgIENCdWlsZGVyLnByb3RvdHlwZS5TZXRDb21wb25lbnRLZXJuZWxKcXVlcnkgPSBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5TZXRDb21wb25lbnRLZXJuZWwoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggS2VybmVsSnF1ZXJ5LkNvbXBvbmVudHMuQ0NvbXBvbmVudEtlcm5lbEpRdWVyeSApICk7XHJcbiAgICB9XHJcblxyXG4gICAgQ0J1aWxkZXIucHJvdG90eXBlLkFkZENvbXBvbmVudEJpbmRNb2RlbHNKcXVlcnkgPSBmdW5jdGlvbihcclxuICAgICAgICBtb2RlbENvbXBvbmVudFR5cGU/OiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgb2JqZWN0ID5cclxuICAgICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLkFkZENvbXBvbmVudEJpbmRNb2RlbHMoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggS2VybmVsSnF1ZXJ5LkNvbXBvbmVudHMuQ1ZpZXdNb2RlbEJpbmRlciApLCBtb2RlbENvbXBvbmVudFR5cGUgKTtcclxuICAgIH1cclxuXHJcbiAgICBDQnVpbGRlci5wcm90b3R5cGUuQWRkQ29tcG9uZW50QmluZEFjdGlvbnNKcXVlcnkgPSBmdW5jdGlvbihcclxuICAgICAgICBhY3Rpb25Db21wb25lbnRUeXBlPzogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IG9iamVjdCA+LFxyXG4gICAgICAgIGNvbnRyb2xsZXJDb21wb25lbnRUeXBlPzogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IG9iamVjdCA+XHJcbiAgICApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5BZGRDb21wb25lbnRCaW5kQWN0aW9ucyhcclxuICAgICAgICAgICAgU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBLZXJuZWxKcXVlcnkuQ29tcG9uZW50cy5DQWN0aW9uQmluZGVyICksXHJcbiAgICAgICAgICAgIGFjdGlvbkNvbXBvbmVudFR5cGUsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJDb21wb25lbnRUeXBlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBDQnVpbGRlci5wcm90b3R5cGUuQWRkQ29tcG9uZW50RGVwZW5kT25WaWV3ID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuQWRkQ29tcG9uZW50KCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlT2YoIEtlcm5lbEpxdWVyeS5Db21wb25lbnRzLkNDb21wb25lbnREZXBlbmRPblZpZXdzICkgKTtcclxuICAgIH1cclxuXHJcbiAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KCBDQnVpbGRlci5wcm90b3R5cGUsIFwiU2V0Q29tcG9uZW50S2VybmVsSlF1ZXJ5XCIsIHsgZW51bWVyYWJsZTogZmFsc2UgfSApO1xyXG59XHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ1ZpZXdcclxuICAgIHtcclxuICAgICAgICBDcmVhdGUoIC4uLmFyZ3M6IFBhcmFtZXRlcnM8IEtlcm5lbEpxdWVyeS5JVmlld0NyZWF0b3IgPiApOiBSZXR1cm5UeXBlPCBLZXJuZWxKcXVlcnkuSVZpZXdDcmVhdG9yID47XHJcbiAgICAgICAgR2V0RWxlbWVudFJvb3QoKTogSlF1ZXJ5O1xyXG4gICAgICAgIFJldHVybkhUTUwoKTogc3RyaW5nO1xyXG4gICAgICAgIFJldHVybkNsYXNzZXMoKTogQXJyYXk8IHN0cmluZyA+O1xyXG4gICAgICAgIEdldENvbXBvbmVudEtlcm5lbEpxdWVyeSgpOiBLZXJuZWxKcXVlcnkuQ29tcG9uZW50cy5DQ29tcG9uZW50S2VybmVsSlF1ZXJ5O1xyXG5cclxuICAgICAgICAvLyBTZXRGYWRlSW4oIGR1cmF0aW9uOiBKUXVlcnkuRHVyYXRpb24gKTogdm9pZFxyXG4gICAgICAgIC8vIFNldEZhZGVPdXQoIGR1cmF0aW9uOiBKUXVlcnkuRHVyYXRpb24gKTogdm9pZDtcclxuICAgIH1cclxuXHJcbiAgICBDVmlldy5wcm90b3R5cGUuR2V0RWxlbWVudFJvb3QgPSBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudEpRdWVyeSA9IFN5c3RlbS5keW5hbWljX2Nhc3QoIHRoaXMuR2V0Q29tcG9uZW50S2VybmVsPEtlcm5lbEpxdWVyeS5JVmlld0NyZWF0b3I+KCksIEtlcm5lbEpxdWVyeS5Db21wb25lbnRzLkNDb21wb25lbnRLZXJuZWxKUXVlcnkgKTtcclxuICAgICAgICBpZiAoIGNvbXBvbmVudEpRdWVyeSA9PSBudWxsIClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIk5vIEpxdWVyeVwiICk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudEpRdWVyeS5FbGVtZW50Um9vdDtcclxuICAgIH1cclxuXHJcbiAgICBDVmlldy5wcm90b3R5cGUuR2V0Q29tcG9uZW50S2VybmVsSnF1ZXJ5ID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiA8S2VybmVsSnF1ZXJ5LkNvbXBvbmVudHMuQ0NvbXBvbmVudEtlcm5lbEpRdWVyeT4odGhpcy5HZXRDb21wb25lbnRLZXJuZWw8S2VybmVsSnF1ZXJ5LklWaWV3Q3JlYXRvcj4oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ1ZpZXcucHJvdG90eXBlLlNldEZhZGVJbiA9IGZ1bmN0aW9uKCBkdXJhdGlvbjogSlF1ZXJ5LkR1cmF0aW9uIClcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBsZXQgY29tcG9uZW50VHlwZSA9IFR5cGVPZiggS2VybmVsSnF1ZXJ5LkNvbXBvbmVudHMuQ0NvbXBvbmVudEZhZGVJbiApO1xyXG4gICAgLy8gICAgIGxldCBjb21wb25lbnQgPSB0aGlzLkdldENvbXBvbmVudCggY29tcG9uZW50VHlwZSApO1xyXG4gICAgLy8gICAgIGlmICggY29tcG9uZW50ID09IG51bGwgKVxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS53YXJuKCBgVGhlcmUgaXMgbm8gY29tcG9uZW50PCR7Y29tcG9uZW50VHlwZS5HZXROaWNrbmFtZSgpfT5gICk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2VcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGNvbXBvbmVudC5EdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBDVmlldy5wcm90b3R5cGUuU2V0RmFkZU91dCA9IGZ1bmN0aW9uKCBkdXJhdGlvbjogSlF1ZXJ5LkR1cmF0aW9uIClcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBsZXQgY29tcG9uZW50VHlwZSA9IFR5cGVPZiggS2VybmVsSnF1ZXJ5LkNvbXBvbmVudHMuQ0NvbXBvbmVudEZhZGVPdXQgKTtcclxuICAgIC8vICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5HZXRDb21wb25lbnQoIGNvbXBvbmVudFR5cGUgKTtcclxuICAgIC8vICAgICBpZiAoIGNvbXBvbmVudCA9PSBudWxsIClcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUud2FybiggYFRoZXJlIGlzIG5vIGNvbXBvbmVudDwke2NvbXBvbmVudFR5cGUuR2V0Tmlja25hbWUoKX0+YCApO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBjb21wb25lbnQuRHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSggQ1ZpZXcucHJvdG90eXBlLCBcIkdldEVsZW1lbnRSb290XCIsIHsgZW51bWVyYWJsZTogZmFsc2UgfSApO1xyXG4gICAgLy8gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSggQ1ZpZXcucHJvdG90eXBlLCBcIlNldEZhZGVJblwiLCB7IGVudW1lcmFibGU6IGZhbHNlIH0gKTtcclxuICAgIC8vIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoIENWaWV3LnByb3RvdHlwZSwgXCJTZXRGYWRlT3V0XCIsIHsgZW51bWVyYWJsZTogZmFsc2UgfSApO1xyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5XHJcbntcclxuICAgIGV4cG9ydCB0eXBlIFVGbG9hdE9wdGlvbnMgPVxyXG4gICAge1xyXG4gICAgICAgIGFic29sdXRlUG9zaXRpb246IGJvb2xlYW47XHJcbiAgICAgICAgZml4Q2xhc3M/OiBzdHJpbmc7XHJcbiAgICAgICAgYXV0b0hpZGU/OiBib29sZWFuO1xyXG4gICAgICAgIGF1dG9IaWRlVGltZW91dD86IG51bWJlcjtcclxuICAgICAgICBpc1BvcE1lbnU/OiBib29sZWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gRmxvYXQoIG9wdGlvbnM6IFVGbG9hdE9wdGlvbnMgKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yQ2xhc3NcclxuICAgIHtcclxuICAgICAgICBsZXQgYXR0cmlidXRlID0gbmV3IEF0dHJpYnV0ZXMuQ0Zsb2F0QXR0cmlidXRlKCBvcHRpb25zLmFic29sdXRlUG9zaXRpb24gKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIG9wdGlvbnMuZml4Q2xhc3MgIT0gbnVsbCApXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZS5GaXhDbGFzcyA9IG9wdGlvbnMuZml4Q2xhc3M7XHJcblxyXG4gICAgICAgIGlmICggb3B0aW9ucy5hdXRvSGlkZSAhPSBudWxsIClcclxuICAgICAgICAgICAgYXR0cmlidXRlLkF1dG9IaWRlID0gb3B0aW9ucy5hdXRvSGlkZTtcclxuXHJcbiAgICAgICAgaWYgKCBvcHRpb25zLmF1dG9IaWRlVGltZW91dCAhPSBudWxsIClcclxuICAgICAgICAgICAgYXR0cmlidXRlLkF1dG9IaWRlVGltZW91dCA9IG9wdGlvbnMuYXV0b0hpZGVUaW1lb3V0O1xyXG5cclxuICAgICAgICBpZiAoIG9wdGlvbnMuaXNQb3BNZW51ICE9IG51bGwgKVxyXG4gICAgICAgICAgICBhdHRyaWJ1dGUuSXNQb3BNZW51ID0gb3B0aW9ucy5pc1BvcE1lbnU7XHJcblxyXG4gICAgICAgIHJldHVybiBTeXN0ZW0uQXR0cmlidXRlRGVjb3JhdGUoIGF0dHJpYnV0ZSApO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLktlcm5lbEpxdWVyeVxyXG57XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gT3ZlclNjcm9sbCggc2VsZWN0b3JUZXh0OiBzdHJpbmcgKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yQ2xhc3NcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3lzdGVtLkF0dHJpYnV0ZURlY29yYXRlKCBuZXcgQXR0cmlidXRlcy5DT3ZlclNjcm9sbEF0dHJpYnV0ZSggc2VsZWN0b3JUZXh0ICkgKTtcclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLktlcm5lbEpxdWVyeVxyXG57XHJcbiAgICBleHBvcnQgY29uc3QgdUFjdGlvbk5hbWVfRm9jdXNJbiA9IFwiZm9jdXNpblwiO1xyXG4gICAgZXhwb3J0IGNvbnN0IHVBY3Rpb25OYW1lX0ZvY3VzT3V0ID0gXCJmb2N1c291dFwiO1xyXG4gICAgZXhwb3J0IGNvbnN0IHVBY3Rpb25OYW1lX01vdXNlT3ZlciA9IFwibW91c2VvdmVyXCI7XHJcbiAgICBleHBvcnQgY29uc3QgdUFjdGlvbk5hbWVfTW91c2VPdXQgPSBcIm1vdXNlb3V0XCI7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICogKirnibnmgKcqKlxyXG4gICAgICogXHJcbiAgICAgKiArIOagh+W/l+aOp+WItuWZqOaWueazle+8jOe7keWumkpRdWVyeeS6i+S7tlxyXG4gICAgICogKyDkv67ppbDvvJrmlrnms5VcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGV2ZW50IOS6i+S7tuexu+Wei1xyXG4gICAgICogQHBhcmFtIHNlbGVjdG9yVGV4dCBKUXVlcnnpgInmi6nlmahcclxuICAgICAqIEBwYXJhbSBmcm9tQm9keSDmmK/lkKbku45Cb2R55byA5aeL6YCJ5oupXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBTZXRBY3Rpb24oIGV2ZW50OiBzdHJpbmcsIHNlbGVjdG9yVGV4dDogc3RyaW5nLCBmcm9tQm9keT86IGJvb2xlYW4gKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yTWV0aG9kXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbS5BdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IEF0dHJpYnV0ZXMuQ1NldEFjdGlvbkF0dHJpYnV0ZSggZXZlbnQsIHNlbGVjdG9yVGV4dCwgKCBmcm9tQm9keSA9PSB0cnVlICkgPyB0cnVlIDogZmFsc2UgKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBTZXRBY3Rpb25DbGljayggc2VsZWN0b3JUZXh0OiBzdHJpbmcsIGZyb21Cb2R5PzogYm9vbGVhbiApOiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JNZXRob2RcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU2V0QWN0aW9uKCBcImNsaWNrXCIsIHNlbGVjdG9yVGV4dCwgZnJvbUJvZHkgKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gU2V0QWN0aW9uVmFsdWVDaGFuZ2UoIHNlbGVjdG9yVGV4dDogc3RyaW5nLCBmcm9tQm9keT86IGJvb2xlYW4gKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yTWV0aG9kXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFNldEFjdGlvbiggXCJ2YWx1ZWNoYW5nZVwiLCBzZWxlY3RvclRleHQsIGZyb21Cb2R5ICk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFNldEFjdGlvblNlYXJjaCggc2VsZWN0b3JUZXh0OiBzdHJpbmcsIGZyb21Cb2R5PzogYm9vbGVhbiApOiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JNZXRob2RcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU2V0QWN0aW9uKCBcInNlYXJjaFwiLCBzZWxlY3RvclRleHQsIGZyb21Cb2R5ICk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFNldEFjdGlvbkZvY3VzSW4oIHNlbGVjdG9yVGV4dDogc3RyaW5nLCBmcm9tQm9keT86IGJvb2xlYW4gKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yTWV0aG9kXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFNldEFjdGlvbiggdUFjdGlvbk5hbWVfRm9jdXNJbiwgc2VsZWN0b3JUZXh0LCBmcm9tQm9keSApO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBTZXRBY3Rpb25Gb2N1c091dCggc2VsZWN0b3JUZXh0OiBzdHJpbmcsIGZyb21Cb2R5PzogYm9vbGVhbiApOiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JNZXRob2RcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU2V0QWN0aW9uKCB1QWN0aW9uTmFtZV9Gb2N1c091dCwgc2VsZWN0b3JUZXh0LCBmcm9tQm9keSApO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBTZXRBY3Rpb25Nb3VzZU92ZXIoIHNlbGVjdG9yVGV4dDogc3RyaW5nLCBmcm9tQm9keT86IGJvb2xlYW4gKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yTWV0aG9kXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFNldEFjdGlvbiggdUFjdGlvbk5hbWVfTW91c2VPdmVyLCBzZWxlY3RvclRleHQsIGZyb21Cb2R5ICk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFNldEFjdGlvbk1vdXNlT3V0KCBzZWxlY3RvclRleHQ6IHN0cmluZywgZnJvbUJvZHk/OiBib29sZWFuICk6IFN5c3RlbS5VRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0Zvck1ldGhvZFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBTZXRBY3Rpb24oIHVBY3Rpb25OYW1lX01vdXNlT3V0LCBzZWxlY3RvclRleHQsIGZyb21Cb2R5ICk7XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLktlcm5lbEpxdWVyeVxyXG57XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gVHJpZ2dlckVsZW1lbnQoKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yUGFyYW1ldGVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbS5BdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IEF0dHJpYnV0ZXMuQ1RyaWdnZXJFbGVtZW50QXR0cmlidXRlKCkgKTtcclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5XHJcbntcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBUcmlnZ2VyRXZlbnQoKTogU3lzdGVtLlVEZWNvcmF0b3JGdW5jdGlvblR5cGVfRm9yUGFyYW1ldGVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbS5BdHRyaWJ1dGVEZWNvcmF0ZSggbmV3IEF0dHJpYnV0ZXMuQ1RyaWdnZXJFdmVudEF0dHJpYnV0ZSgpICk7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5XHJcbntcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBUcmlnZ2VyVmlldygpOiBTeXN0ZW0uVURlY29yYXRvckZ1bmN0aW9uVHlwZV9Gb3JQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3lzdGVtLkF0dHJpYnV0ZURlY29yYXRlKCBuZXcgQXR0cmlidXRlcy5DVHJpZ2dlclZpZXdBdHRyaWJ1dGUoKSApO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5XHJcbntcclxuICAgIGV4cG9ydCBlbnVtIFVPdmVyU2Nyb2xsRXZlbnRcclxuICAgIHtcclxuICAgICAgICBPbkJlZ2luLFxyXG4gICAgICAgIE9uU2Nyb2xsaW5nLFxyXG4gICAgICAgIE9uRW5kLFxyXG4gICAgICAgIE9uU2Nyb2xsVG9Ub3AsXHJcbiAgICAgICAgT25TY3JvbGxUb0JvdHRvbSxcclxuICAgIH1cclxufVxyXG5cclxuIiwiXHJcblxyXG5uYW1lc3BhY2UgaWJlcmJhci5NVkMuS2VybmVsSnF1ZXJ5XHJcbntcclxuICAgIGV4cG9ydCBlbnVtIFVWaWV3Q3JlYXRlU3R5bGVcclxuICAgIHtcclxuICAgICAgICBBcHBlbmQsXHJcbiAgICAgICAgQmVmb3JlLFxyXG4gICAgICAgIEFmdGVyLFxyXG4gICAgfTtcclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuTVZDLktlcm5lbEpxdWVyeS5WaWV3TW9kZWxDb252ZXJ0XHJcbntcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgKiDlsIZkYXRh5pWw5o2u5Y+N5bCE5Yiw5b2T5YmN55qEVmlld01vZGVs5LitXHJcbiAgICAgKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEZyb21PYmplY3QoIG1vZGVsOiBvYmplY3QsIGRhdGE6IGFueSApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1vZGVsVHlwZSA9IG1vZGVsLkdldFR5cGUoKTtcclxuICAgICAgICBsZXQgZmllbGRJbmZvcyA9IG1vZGVsVHlwZS5HZXRGaWVsZHMoKTtcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBmaWVsZEluZm9zLmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZmkgPSBmaWVsZEluZm9zWyBpIF07XHJcbiAgICAgICAgICAgIGxldCBhdHRyRnJvbUVsZW1lbnQgPSBmaS5HZXRDdXN0b21BdHRyaWJ1dGVPbmUoIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggQXR0cmlidXRlcy5Gcm9tRWxlbWVudEF0dHJpYnV0ZSApICk7XHJcbiAgICAgICAgICAgIGlmICggYXR0ckZyb21FbGVtZW50ID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50OiBKUXVlcnkgPSBmaS5HZXRWYWx1ZSggbW9kZWwgKTtcclxuICAgICAgICAgICAgaWYgKCBlbGVtZW50ID09IG51bGwgfHwgZWxlbWVudC5sZW5ndGggPT0gMCApXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IGRhdGFWYWx1ZSA9IGRhdGFbIGZpLk5hbWUgXTtcclxuICAgICAgICAgICAgbGV0IGRhdGFUeXBlID0gdHlwZW9mKCBkYXRhVmFsdWUgKTtcclxuICAgICAgICAgICAgaWYgKCBkYXRhVmFsdWUgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKCBkYXRhVHlwZSA9PSBcImJvb2xlYW5cIiApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucHJvcCggXCJjaGVja2VkXCIsIGRhdGFWYWx1ZSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCBkYXRhVHlwZSA9PSBcInN0cmluZ1wiIHx8IGRhdGFUeXBlID09IFwibnVtYmVyXCIgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnZhbCggZGF0YVZhbHVlICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHByb3BlcnR5SW5mb3MgPSBtb2RlbFR5cGUuR2V0UHJvcGVydGllcygpO1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHByb3BlcnR5SW5mb3MubGVuZ3RoOyBpICsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwaSA9IHByb3BlcnR5SW5mb3NbIGkgXTtcclxuICAgICAgICAgICAgbGV0IGRhdGFWYWx1ZSA9IGRhdGFbIHBpLk5hbWUgXTtcclxuICAgICAgICAgICAgbGV0IGRhdGFUeXBlID0gdHlwZW9mKCBkYXRhVmFsdWUgKTtcclxuICAgICAgICAgICAgaWYgKCBkYXRhVmFsdWUgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgcGkuU2V0VmFsdWUoIG1vZGVsLCBkYXRhVmFsdWUgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsIblvZPliY3nmoRWaWV3TW9kZWzmqKHlnovlj43lsITliLDmlbDmja5cclxuICAgICAqIEBwYXJhbSB0eXBlIOaVsOaNruexu+Wei1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gVG9PYmplY3Q8IFQgZXh0ZW5kcyBvYmplY3QgPiggbW9kZWw6IG9iamVjdCwgdHlwZTogU3lzdGVtLlJlZmxlY3Rpb24uQ1R5cGU8IFQgPiApOiBUXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHR5cGUuR2V0Q29uc3RydWN0b3IoKS5JbnZva2UoKTtcclxuICAgICAgICBsZXQgbW9kZWxUeXBlID0gbW9kZWwuR2V0VHlwZSgpO1xyXG4gICAgICAgIGxldCBmaWVsZEluZm9zID0gbW9kZWxUeXBlLkdldEZpZWxkcygpO1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGZpZWxkSW5mb3MubGVuZ3RoOyBpICsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBmaSA9IGZpZWxkSW5mb3NbIGkgXTtcclxuICAgICAgICAgICAgbGV0IGF0dHJGcm9tRWxlbWVudCA9IGZpLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBBdHRyaWJ1dGVzLkZyb21FbGVtZW50QXR0cmlidXRlICkgKTtcclxuICAgICAgICAgICAgaWYgKCBhdHRyRnJvbUVsZW1lbnQgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IGZpX29iaiA9IHR5cGUuR2V0RmllbGRPbmUoIGZpLk5hbWUgKTtcclxuICAgICAgICAgICAgaWYgKCBmaV9vYmogPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IGF0dHJEZWNsYXJpbmdUeXBlID0gZmlfb2JqLkdldEN1c3RvbUF0dHJpYnV0ZU9uZSggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBTeXN0ZW0uUmVmbGVjdGlvbi5DRGVjbGFyaW5nVHlwZUF0dHJpYnV0ZSApICk7XHJcbiAgICAgICAgICAgIGlmICggYXR0ckRlY2xhcmluZ1R5cGUgPT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSA8SlF1ZXJ5PmZpLkdldFZhbHVlKCBtb2RlbCApO1xyXG4gICAgICAgICAgICBsZXQgZGF0YVZhbHVlVHlwZSA9IGF0dHJEZWNsYXJpbmdUeXBlLkRlY2xhcmluZ1R5cGU7XHJcbiAgICAgICAgICAgIGxldCBkYXRhVmFsdWU6IGFueSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICggZGF0YVZhbHVlVHlwZS5Jc0VxdWl2YWxlbnRUbyggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBOdW1iZXIgKSApIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YVZhbHVlID0gTnVtYmVyKCBlbGVtZW50LnZhbCgpICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIE51bWJlci5pc05hTiggZGF0YVZhbHVlICkgKVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIGRhdGFWYWx1ZVR5cGUuSXNFcXVpdmFsZW50VG8oIFN5c3RlbS5SZWZsZWN0aW9uLlR5cGVPZiggU3RyaW5nICkgKSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGFWYWx1ZSA9IGVsZW1lbnQudmFsKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICggZGF0YVZhbHVlVHlwZS5Jc0VxdWl2YWxlbnRUbyggU3lzdGVtLlJlZmxlY3Rpb24uVHlwZU9mKCBCb29sZWFuICkgKSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGFWYWx1ZSA9IGVsZW1lbnQucHJvcCggXCJjaGVja2VkXCIgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaV9vYmouU2V0VmFsdWUoIG9iaiwgZGF0YVZhbHVlICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8VD5vYmo7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5LZXJuZWxKcXVlcnlcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiDkvovlrZBcclxuICAgICAqIFxyXG4gICAgICogYGBgdHlwZXNjcmlwdFxyXG4gICAgICogIGNsYXNzIENFeGFtcGxlXHJcbiAgICAgKiAge1xyXG4gICAgICogICAgICBwcm90ZWN0ZWQgT25XYXRjaFNjcm9sbCggZWxlbWVudDogSlF1ZXJ5LCBldmVudDogVU92ZXJTY3JvbGxFdmVudCApOiB2b2lkXHJcbiAgICAgKiAgICAgIHtcclxuICAgICAqICAgICAgfVxyXG4gICAgICogIH1cclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gV2F0Y2hPdmVyU2Nyb2xsKCk6IFN5c3RlbS5VRGVjb3JhdG9yRnVuY3Rpb25UeXBlX0Zvck1ldGhvZFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBTeXN0ZW0uQXR0cmlidXRlRGVjb3JhdGUoIG5ldyBBdHRyaWJ1dGVzLkNXYXRjaE92ZXJTY3JvbGxBdHRyaWJ1dGUoKSApO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLk1WQy5LZXJuZWxKcXVlcnlcclxue1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVmlld0NyZWF0b3JcclxuICAgIHtcclxuICAgICAgICAoIGVsZW1lbnQ6IEpRdWVyeSwgbWV0aG9kOiBVVmlld0NyZWF0ZVN0eWxlICk6IHZvaWQ7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ikc6XFxDb2RlR2l0XFxUeXBlc2NyaXB0QXV0b2ZhY1xcYmluXFxNVkMuS2VybmVsSnF1ZXJ5In0=

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkV2ZW50LnRzIiwiRXZlbnRCdXMudHMiLCJTdGF0ZU1hY2hpbmUudHMiLCJTdGF0ZU5vZGUudHMiLCJpbXBsZW1lbnRzL0V2ZW50QnVzLnRzIiwiaW1wbGVtZW50cy9TdGF0ZU1hY2hpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQVUsT0FBTyxDQVloQjtBQVpELFdBQVUsT0FBTztJQUFDLElBQUEsS0FBSyxDQVl0QjtJQVppQixXQUFBLEtBQUs7UUFFbkIsTUFBYSxNQUFNO1NBRWxCO1FBRlksWUFBTSxTQUVsQixDQUFBO1FBQUEsQ0FBQztJQVFOLENBQUMsRUFaaUIsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBWXRCO0FBQUQsQ0FBQyxFQVpTLE9BQU8sS0FBUCxPQUFPLFFBWWhCO0FDWkQsSUFBVSxPQUFPLENBWWhCO0FBWkQsV0FBVSxPQUFPO0lBQUMsSUFBQSxLQUFLLENBWXRCO0lBWmlCLFdBQUEsS0FBSztRQUVuQixNQUFzQixTQUFTO1NBSzlCO1FBTHFCLGVBQVMsWUFLOUIsQ0FBQTtRQUFBLENBQUM7SUFLTixDQUFDLEVBWmlCLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQVl0QjtBQUFELENBQUMsRUFaUyxPQUFPLEtBQVAsT0FBTyxRQVloQjtBQ1hELElBQVUsT0FBTyxDQWNoQjtBQWRELFdBQVUsT0FBTztJQUFDLElBQUEsS0FBSyxDQWN0QjtJQWRpQixXQUFBLEtBQUs7UUFFbkIsTUFBYSxhQUFhO1lBRXRCLFFBQVEsQ0FBRSxLQUFpQjtnQkFFdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFFRCxRQUFRLENBQW1DLFNBQWdEO2dCQUV2RixNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDdEMsQ0FBQztTQUNKO1FBWFksbUJBQWEsZ0JBV3pCLENBQUE7SUFDTCxDQUFDLEVBZGlCLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQWN0QjtB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Q0FBQyxPQUFPLENBQUMsR0FBRyxDQUFFLFNBQVMsQ0FBRSxDQUFDO29CQUM5QyxJQUFLLFNBQVMsSUFBSSxJQUFJLEVBQ3RCO3dCQUNJLE1BQU0sS0FBSyxDQUFFLHNCQUFzQixDQUFFLENBQUM7cUJBQ3pDO29CQUNELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFPLFNBQVMsRUFBRSxLQUFLLENBQUUsQ0FBQztvQkFDMUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVNLFFBQVEsQ0FBbUMsU0FBZ0Q7b0JBRTlGLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDM0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUUsU0FBUyxDQUFFLENBQUM7b0JBQzFDLE9BQW1CLEtBQUssQ0FBQztnQkFDN0IsQ0FBQzthQUNKO1lBdEJZLHdCQUFhLGdCQXNCekIsQ0FBQTtRQUNMLENBQUMsRUF6QnVCLFVBQVUsR0FBVixnQkFBVSxLQUFWLGdCQUFVLFFBeUJqQztJQUFELENBQUMsRUF6QmlCLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQXlCdEI7QUFBRCxDQUFDLEVBekJTLE9BQU8sS0FBUCxPQUFPLFFBeUJoQiIsImZpbGUiOiIuLi9iaW4vRXZlbnQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkV2ZW50XHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBDRXZlbnRcclxuICAgIHtcclxuICAgIH07XHJcblxyXG4gICAgLy8gZXhwb3J0IGludGVyZmFjZSBURXZlbnRDb25zdHJ1Y3RvcjwgVEV2ZW50IGV4dGVuZHMgQ0V2ZW50ID5cclxuICAgIC8vIHtcclxuICAgIC8vICAgICBuZXcgKCAuLi5hcmdzOiBhbnlbXSApOiBURXZlbnRcclxuICAgIC8vIH07XHJcblxyXG4gICAgZXhwb3J0IHR5cGUgVEV2ZW50Q29uc3RydWN0b3I8IFRFdmVudCBleHRlbmRzIENFdmVudCA+ID0gU3lzdGVtLlJlZmxlY3Rpb24uVHlwZUNvbnN0cnVjdG9yPCBURXZlbnQgPjtcclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuRXZlbnRcclxue1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIElFdmVudEJ1c1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBMaXN0ZW48IFRFdmVudCBleHRlbmRzIENFdmVudCA+KCBldmVudFR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBURXZlbnQgPiwgbGlzdGVuZXI6IFN5c3RlbS5UQ2FsbGJhY2tPckZ1bmN0aW9uPCBVRXZlbnRCdXNMaXN0ZW5lckZ1bmN0aW9uPCBURXZlbnQgPiA+LCBvbmNlPzogYm9vbGVhbiApOiB2b2lkO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgU2VuZDwgVEV2ZW50IGV4dGVuZHMgQ0V2ZW50ID4oIGV2ZW50RGF0YTogVEV2ZW50ICk6IHZvaWQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGV4cG9ydCB0eXBlIFVFdmVudEJ1c0xpc3RlbmVyRnVuY3Rpb248IFRFdmVudCBleHRlbmRzIENFdmVudCA+ID0gKCBldmVudERhdGE6IFRFdmVudCApID0+IHZvaWQ7XHJcbiAgICBleHBvcnQgdHlwZSBJRXZlbnRCdXNMaXN0ZW5lcjwgVEV2ZW50IGV4dGVuZHMgQ0V2ZW50ID4gPSBTeXN0ZW0uVENhbGxiYWNrPCBVRXZlbnRCdXNMaXN0ZW5lckZ1bmN0aW9uPCBURXZlbnQgPiA+O1xyXG5cclxufSIsIlxyXG5cclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkV2ZW50XHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBJU3RhdGVNYWNoaW5lXHJcbiAgICB7XHJcbiAgICAgICAgQWRkU3RhdGUoIHN0YXRlOiBJU3RhdGVOb2RlICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudHMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdldFN0YXRlPCBUU3RhdGVOb2RlIGV4dGVuZHMgSVN0YXRlTm9kZSA+KCBzdGF0ZVR5cGU6IFN5c3RlbS5SZWZsZWN0aW9uLkNUeXBlPCBUU3RhdGVOb2RlID4gKTogVFN0YXRlTm9kZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50cycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJcclxuXHJcbm5hbWVzcGFjZSBpYmVyYmFyLkV2ZW50XHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBJU3RhdGVOb2RlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIEluaXRpYWxpemUoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50cycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuRXZlbnQuSW1wbGVtZW50c1xyXG57XHJcbiAgICB0eXBlIFVFdmVudERlbGVnYXRlID1cclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5lcjogSUV2ZW50QnVzTGlzdGVuZXI8IENFdmVudCA+O1xyXG4gICAgICAgIGtpY2s6IG51bWJlcjtcclxuICAgIH07XHJcblxyXG4gICAgdHlwZSBVRXZlbnREZWxlZ2F0ZUxpc3QgPSBBcnJheTwgVUV2ZW50RGVsZWdhdGUgPjtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ0V2ZW50QnVzIGV4dGVuZHMgSUV2ZW50QnVzXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG1fZXZlbnRzOiBXZWFrTWFwPCBTeXN0ZW0uUmVmbGVjdGlvbi5UeXBlUHJvdG90eXBlPCBDRXZlbnQgPiwgVUV2ZW50RGVsZWdhdGVMaXN0ID4gPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgTGlzdGVuPCBURXZlbnQgZXh0ZW5kcyBDRXZlbnQgPiggZXZlbnRUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVEV2ZW50ID4sIGxpc3RlbmVyOiBTeXN0ZW0uVENhbGxiYWNrT3JGdW5jdGlvbjwgVUV2ZW50QnVzTGlzdGVuZXJGdW5jdGlvbjwgVEV2ZW50ID4gPiwgb25jZT86IGJvb2xlYW4gKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHByb3RvdHlwZSA9IGV2ZW50VHlwZS5HZXRKc1Byb3RvdHlwZTx7fT4oKTtcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5tX2V2ZW50cy5nZXQoIHByb3RvdHlwZSApO1xyXG4gICAgICAgICAgICBpZiAoIGFycmF5ID09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnJheSA9IEFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXI6ICggdHlwZW9mKCBsaXN0ZW5lciApID09IFwiZnVuY3Rpb25cIiApID8gX19DYWxsYmFjayggbGlzdGVuZXIgKSA6IGxpc3RlbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGtpY2s6ICggb25jZSA9PSB0cnVlICkgPyAxIDogLTFcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9ldmVudHMuc2V0KCBwcm90b3R5cGUsIGFycmF5ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IoIGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArKyApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGVnYXRlVGVtcCA9IGFycmF5WyBpIF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBkZWxlZ2F0ZVRlbXAubGlzdGVuZXIgPT0gbGlzdGVuZXIgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXI6ICggdHlwZW9mKCBsaXN0ZW5lciApID09IFwiZnVuY3Rpb25cIiApID8gX19DYWxsYmFjayggbGlzdGVuZXIgKSA6IGxpc3RlbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGtpY2s6ICggb25jZSA9PSB0cnVlICkgPyAxIDogLTFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2VuZDwgVEV2ZW50IGV4dGVuZHMgQ0V2ZW50ID4oIGV2ZW50RGF0YTogVEV2ZW50ICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcm90b3R5cGUgPSBldmVudERhdGEuR2V0VHlwZSgpLkdldEpzUHJvdG90eXBlPCB7fSA+KCk7XHJcbiAgICAgICAgICAgIGxldCBkZWxlZ2F0ZXMgPSB0aGlzLm1fZXZlbnRzLmdldCggcHJvdG90eXBlICk7XHJcbiAgICAgICAgICAgIGlmICggZGVsZWdhdGVzID09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBkZWxlZ2F0ZXMubGVuZ3RoOyBpICsrIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlbGVnYXRlVGVtcCA9IGRlbGVnYXRlc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBkZWxlZ2F0ZVRlbXAua2ljayA9PSAwIClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBkZWxlZ2F0ZVRlbXAua2ljayAtLTtcclxuICAgICAgICAgICAgICAgIGRlbGVnYXRlVGVtcC5saXN0ZW5lci5FeGVjdXRlKCBldmVudERhdGEgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBkZWxlZ2F0ZXMubGVuZ3RoOyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWxlZ2F0ZVRlbXAgPSBkZWxlZ2F0ZXNbIGkgXTtcclxuICAgICAgICAgICAgICAgIGlmICggZGVsZWdhdGVUZW1wLmtpY2sgPT0gMCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGVzLnNwbGljZSggaSwgMSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbiIsIlxyXG5cclxubmFtZXNwYWNlIGliZXJiYXIuRXZlbnQuSW1wbGVtZW50c1xyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgQ1N0YXRlTWFjaGluZSBleHRlbmRzIElTdGF0ZU1hY2hpbmVcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgbV9zdGF0ZTogV2Vha01hcDwgU3lzdGVtLlJlZmxlY3Rpb24uVHlwZVByb3RvdHlwZTwgSVN0YXRlTm9kZSA+LCBJU3RhdGVOb2RlID4gPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgQWRkU3RhdGUoIHN0YXRlOiBJU3RhdGVOb2RlICk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcm90b3R5cGU6IGFueSA9IHN0YXRlLkdldFR5cGUoKS5HZXRKc1Byb3RvdHlwZSgpO1xyXG4gICAgICAgICAgICBsZXQgc3RhdGVUZW1wID0gdGhpcy5tX3N0YXRlLmdldCggcHJvdG90eXBlICk7XHJcbiAgICAgICAgICAgIGlmICggc3RhdGVUZW1wICE9IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvciggXCJ0aGVyZSBpcyBleGlzdCBzdGF0ZVwiICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tX3N0YXRlLnNldCggPGFueT5wcm90b3R5cGUsIHN0YXRlICk7XHJcbiAgICAgICAgICAgIHN0YXRlLkluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBHZXRTdGF0ZTwgVFN0YXRlTm9kZSBleHRlbmRzIElTdGF0ZU5vZGUgPiggc3RhdGVUeXBlOiBTeXN0ZW0uUmVmbGVjdGlvbi5DVHlwZTwgVFN0YXRlTm9kZSA+ICk6IFRTdGF0ZU5vZGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcm90b3R5cGUgPSBzdGF0ZVR5cGUuR2V0SnNQcm90b3R5cGUoKTtcclxuICAgICAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5tX3N0YXRlLmdldCggcHJvdG90eXBlICk7XHJcbiAgICAgICAgICAgIHJldHVybiA8VFN0YXRlTm9kZT5zdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ikc6XFxDb2RlR2l0XFxUeXBlc2NyaXB0QXV0b2ZhY1xcYmluXFxFdmVudCJ9

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsdURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXozQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdjFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImliZXJiYXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBpYmVyYmFyO1xuKGZ1bmN0aW9uIChpYmVyYmFyKSB7XG4gICAgdmFyIEV2ZW50O1xuICAgIChmdW5jdGlvbiAoRXZlbnQpIHtcbiAgICAgICAgY2xhc3MgQ0V2ZW50IHtcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5DRXZlbnQgPSBDRXZlbnQ7XG4gICAgICAgIDtcbiAgICB9KShFdmVudCA9IGliZXJiYXIuRXZlbnQgfHwgKGliZXJiYXIuRXZlbnQgPSB7fSkpO1xufSkoaWJlcmJhciB8fCAoaWJlcmJhciA9IHt9KSk7XG52YXIgaWJlcmJhcjtcbihmdW5jdGlvbiAoaWJlcmJhcikge1xuICAgIHZhciBFdmVudDtcbiAgICAoZnVuY3Rpb24gKEV2ZW50KSB7XG4gICAgICAgIGNsYXNzIElFdmVudEJ1cyB7XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQuSUV2ZW50QnVzID0gSUV2ZW50QnVzO1xuICAgICAgICA7XG4gICAgfSkoRXZlbnQgPSBpYmVyYmFyLkV2ZW50IHx8IChpYmVyYmFyLkV2ZW50ID0ge30pKTtcbn0pKGliZXJiYXIgfHwgKGliZXJiYXIgPSB7fSkpO1xudmFyIGliZXJiYXI7XG4oZnVuY3Rpb24gKGliZXJiYXIpIHtcbiAgICB2YXIgRXZlbnQ7XG4gICAgKGZ1bmN0aW9uIChFdmVudCkge1xuICAgICAgICBjbGFzcyBJU3RhdGVNYWNoaW5lIHtcbiAgICAgICAgICAgIEFkZFN0YXRlKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50cycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR2V0U3RhdGUoc3RhdGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50cycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LklTdGF0ZU1hY2hpbmUgPSBJU3RhdGVNYWNoaW5lO1xuICAgIH0pKEV2ZW50ID0gaWJlcmJhci5FdmVudCB8fCAoaWJlcmJhci5FdmVudCA9IHt9KSk7XG59KShpYmVyYmFyIHx8IChpYmVyYmFyID0ge30pKTtcbnZhciBpYmVyYmFyO1xuKGZ1bmN0aW9uIChpYmVyYmFyKSB7XG4gICAgdmFyIEV2ZW50O1xuICAgIChmdW5jdGlvbiAoRXZlbnQpIHtcbiAgICAgICAgY2xhc3MgSVN0YXRlTm9kZSB7XG4gICAgICAgICAgICBJbml0aWFsaXplKCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudHMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBFdmVudC5JU3RhdGVOb2RlID0gSVN0YXRlTm9kZTtcbiAgICB9KShFdmVudCA9IGliZXJiYXIuRXZlbnQgfHwgKGliZXJiYXIuRXZlbnQgPSB7fSkpO1xufSkoaWJlcmJhciB8fCAoaWJlcmJhciA9IHt9KSk7XG52YXIgaWJlcmJhcjtcbihmdW5jdGlvbiAoaWJlcmJhcikge1xuICAgIHZhciBFdmVudDtcbiAgICAoZnVuY3Rpb24gKEV2ZW50KSB7XG4gICAgICAgIHZhciBJbXBsZW1lbnRzO1xuICAgICAgICAoZnVuY3Rpb24gKEltcGxlbWVudHMpIHtcbiAgICAgICAgICAgIGNsYXNzIENFdmVudEJ1cyBleHRlbmRzIEV2ZW50LklFdmVudEJ1cyB7XG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9ldmVudHMgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBMaXN0ZW4oZXZlbnRUeXBlLCBsaXN0ZW5lciwgb25jZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvdG90eXBlID0gZXZlbnRUeXBlLkdldEpzUHJvdG90eXBlKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMubV9ldmVudHMuZ2V0KHByb3RvdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJheSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheSA9IEFycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcjogKHR5cGVvZiAobGlzdGVuZXIpID09IFwiZnVuY3Rpb25cIikgPyBfX0NhbGxiYWNrKGxpc3RlbmVyKSA6IGxpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpY2s6IChvbmNlID09IHRydWUpID8gMSA6IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubV9ldmVudHMuc2V0KHByb3RvdHlwZSwgYXJyYXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWxlZ2F0ZVRlbXAgPSBhcnJheVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZWdhdGVUZW1wLmxpc3RlbmVyID09IGxpc3RlbmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcjogKHR5cGVvZiAobGlzdGVuZXIpID09IFwiZnVuY3Rpb25cIikgPyBfX0NhbGxiYWNrKGxpc3RlbmVyKSA6IGxpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpY2s6IChvbmNlID09IHRydWUpID8gMSA6IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBTZW5kKGV2ZW50RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvdG90eXBlID0gZXZlbnREYXRhLkdldFR5cGUoKS5HZXRKc1Byb3RvdHlwZSgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVsZWdhdGVzID0gdGhpcy5tX2V2ZW50cy5nZXQocHJvdG90eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlbGVnYXRlcyA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbGVnYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGVnYXRlVGVtcCA9IGRlbGVnYXRlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVRlbXAua2ljayA9PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGVUZW1wLmtpY2stLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGVnYXRlVGVtcC5saXN0ZW5lci5FeGVjdXRlKGV2ZW50RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWxlZ2F0ZXMubGVuZ3RoOykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGVnYXRlVGVtcCA9IGRlbGVnYXRlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVRlbXAua2ljayA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEltcGxlbWVudHMuQ0V2ZW50QnVzID0gQ0V2ZW50QnVzO1xuICAgICAgICAgICAgO1xuICAgICAgICB9KShJbXBsZW1lbnRzID0gRXZlbnQuSW1wbGVtZW50cyB8fCAoRXZlbnQuSW1wbGVtZW50cyA9IHt9KSk7XG4gICAgfSkoRXZlbnQgPSBpYmVyYmFyLkV2ZW50IHx8IChpYmVyYmFyLkV2ZW50ID0ge30pKTtcbn0pKGliZXJiYXIgfHwgKGliZXJiYXIgPSB7fSkpO1xudmFyIGliZXJiYXI7XG4oZnVuY3Rpb24gKGliZXJiYXIpIHtcbiAgICB2YXIgRXZlbnQ7XG4gICAgKGZ1bmN0aW9uIChFdmVudCkge1xuICAgICAgICB2YXIgSW1wbGVtZW50cztcbiAgICAgICAgKGZ1bmN0aW9uIChJbXBsZW1lbnRzKSB7XG4gICAgICAgICAgICBjbGFzcyBDU3RhdGVNYWNoaW5lIGV4dGVuZHMgRXZlbnQuSVN0YXRlTWFjaGluZSB7XG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9zdGF0ZSA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEFkZFN0YXRlKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm90b3R5cGUgPSBzdGF0ZS5HZXRUeXBlKCkuR2V0SnNQcm90b3R5cGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXRlVGVtcCA9IHRoaXMubV9zdGF0ZS5nZXQocHJvdG90eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlVGVtcCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcInRoZXJlIGlzIGV4aXN0IHN0YXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9zdGF0ZS5zZXQocHJvdG90eXBlLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLkluaXRpYWxpemUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR2V0U3RhdGUoc3RhdGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm90b3R5cGUgPSBzdGF0ZVR5cGUuR2V0SnNQcm90b3R5cGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5tX3N0YXRlLmdldChwcm90b3R5cGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgSW1wbGVtZW50cy5DU3RhdGVNYWNoaW5lID0gQ1N0YXRlTWFjaGluZTtcbiAgICAgICAgfSkoSW1wbGVtZW50cyA9IEV2ZW50LkltcGxlbWVudHMgfHwgKEV2ZW50LkltcGxlbWVudHMgPSB7fSkpO1xuICAgIH0pKEV2ZW50ID0gaWJlcmJhci5FdmVudCB8fCAoaWJlcmJhci5FdmVudCA9IHt9KSk7XG59KShpYmVyYmFyIHx8IChpYmVyYmFyID0ge30pKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1YyWlc1MExuUnpJaXdpUlhabGJuUkNkWE11ZEhNaUxDSlRkR0YwWlUxaFkyaHBibVV1ZEhNaUxDSlRkR0YwWlU1dlpHVXVkSE1pTENKcGJYQnNaVzFsYm5SekwwVjJaVzUwUW5WekxuUnpJaXdpYVcxd2JHVnRaVzUwY3k5VGRHRjBaVTFoWTJocGJtVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVWQkxFbEJRVlVzVDBGQlR5eERRVmxvUWp0QlFWcEVMRmRCUVZVc1QwRkJUenRKUVVGRExFbEJRVUVzUzBGQlN5eERRVmwwUWp0SlFWcHBRaXhYUVVGQkxFdEJRVXM3VVVGRmJrSXNUVUZCWVN4TlFVRk5PMU5CUld4Q08xRkJSbGtzV1VGQlRTeFRRVVZzUWl4RFFVRkJPMUZCUVVFc1EwRkJRenRKUVZGT0xFTkJRVU1zUlVGYWFVSXNTMEZCU3l4SFFVRk1MR0ZCUVVzc1MwRkJUQ3hoUVVGTExGRkJXWFJDTzBGQlFVUXNRMEZCUXl4RlFWcFRMRTlCUVU4c1MwRkJVQ3hQUVVGUExGRkJXV2hDTzBGRFdrUXNTVUZCVlN4UFFVRlBMRU5CV1doQ08wRkJXa1FzVjBGQlZTeFBRVUZQTzBsQlFVTXNTVUZCUVN4TFFVRkxMRU5CV1hSQ08wbEJXbWxDTEZkQlFVRXNTMEZCU3p0UlFVVnVRaXhOUVVGelFpeFRRVUZUTzFOQlN6bENPMUZCVEhGQ0xHVkJRVk1zV1VGTE9VSXNRMEZCUVR0UlFVRkJMRU5CUVVNN1NVRkxUaXhEUVVGRExFVkJXbWxDTEV0QlFVc3NSMEZCVEN4aFFVRkxMRXRCUVV3c1lVRkJTeXhSUVZsMFFqdEJRVUZFTEVOQlFVTXNSVUZhVXl4UFFVRlBMRXRCUVZBc1QwRkJUeXhSUVZsb1FqdEJRMWhFTEVsQlFWVXNUMEZCVHl4RFFXTm9RanRCUVdSRUxGZEJRVlVzVDBGQlR6dEpRVUZETEVsQlFVRXNTMEZCU3l4RFFXTjBRanRKUVdScFFpeFhRVUZCTEV0QlFVczdVVUZGYmtJc1RVRkJZU3hoUVVGaE8xbEJSWFJDTEZGQlFWRXNRMEZCUlN4TFFVRnBRanRuUWtGRmRrSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRPMWxCUTNSRExFTkJRVU03V1VGRlJDeFJRVUZSTEVOQlFXMURMRk5CUVdkRU8yZENRVVYyUml4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNN1dVRkRkRU1zUTBGQlF6dFRRVU5LTzFGQldGa3NiVUpCUVdFc1owSkJWM3BDTEVOQlFVRTdTVUZEVEN4RFFVRkRMRVZCWkdsQ0xFdEJRVXNzUjBGQlRDeGhRVUZMTEV0QlFVd3NZVUZCU3l4UlFXTjBRanRCUVVGRUxFTkJRVU1zUlVGa1V5eFBRVUZQTEV0QlFWQXNUMEZCVHl4UlFXTm9RanRCUTJaRUxFbEJRVlVzVDBGQlR5eERRVk5vUWp0QlFWUkVMRmRCUVZVc1QwRkJUenRKUVVGRExFbEJRVUVzUzBGQlN5eERRVk4wUWp0SlFWUnBRaXhYUVVGQkxFdEJRVXM3VVVGRmJrSXNUVUZCWVN4VlFVRlZPMWxCUlZvc1ZVRkJWVHRuUWtGRllpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMR2RDUVVGblFpeERRVUZETEVOQlFVTTdXVUZEZEVNc1EwRkJRenRUUVVOS08xRkJUbGtzWjBKQlFWVXNZVUZOZEVJc1EwRkJRVHRKUVVOTUxFTkJRVU1zUlVGVWFVSXNTMEZCU3l4SFFVRk1MR0ZCUVVzc1MwRkJUQ3hoUVVGTExGRkJVM1JDTzBGQlFVUXNRMEZCUXl4RlFWUlRMRTlCUVU4c1MwRkJVQ3hQUVVGUExGRkJVMmhDTzBGRFZFUXNTVUZCVlN4UFFVRlBMRU5CZFVWb1FqdEJRWFpGUkN4WFFVRlZMRTlCUVU4N1NVRkJReXhKUVVGQkxFdEJRVXNzUTBGMVJYUkNPMGxCZGtWcFFpeFhRVUZCTEV0QlFVczdVVUZCUXl4SlFVRkJMRlZCUVZVc1EwRjFSV3BETzFGQmRrVjFRaXhYUVVGQkxGVkJRVlU3V1VGVk9VSXNUVUZCWVN4VFFVRlZMRk5CUVZFc1RVRkJRU3hUUVVGVE8yZENRVUY0UXpzN2IwSkJSV01zWVVGQlVTeEhRVUUyUlN4SlFVRkpMRTlCUVU4c1JVRkJSU3hEUVVGRE8yZENRVEJFYWtnc1EwRkJRenRuUWtGNFJGVXNUVUZCVFN4RFFVRXlRaXhUUVVFMFF5eEZRVUZGTEZGQlFUSkZMRVZCUVVVc1NVRkJZenR2UWtGRk4wc3NTVUZCU1N4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRExHTkJRV01zUlVGQlRTeERRVUZETzI5Q1FVTXZReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJSU3hUUVVGVExFTkJRVVVzUTBGQlF6dHZRa0ZETTBNc1NVRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeEZRVU5zUWp0M1FrRkRTU3hMUVVGTExFZEJRVWNzUzBGQlN5eEZRVUZGTEVOQlFVTTdkMEpCUTJoQ0xFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVVTdORUpCUTFJc1VVRkJVU3hGUVVGRkxFTkJRVVVzVDBGQlRTeERRVUZGTEZGQlFWRXNRMEZCUlN4SlFVRkpMRlZCUVZVc1EwRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVVXNVVUZCVVN4RFFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkU3TkVKQlEyeEdMRWxCUVVrc1JVRkJSU3hEUVVGRkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdlVUpCUTJ4RExFTkJRVVVzUTBGQlF6dDNRa0ZEU2l4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlJTeFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkZMRU5CUVVNN2NVSkJRM3BETzNsQ1FVVkVPM2RDUVVOSkxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUnl4RlFVTjBRenMwUWtGRFNTeEpRVUZKTEZsQlFWa3NSMEZCUnl4TFFVRkxMRU5CUVVVc1EwRkJReXhEUVVGRkxFTkJRVU03TkVKQlF6bENMRWxCUVVzc1dVRkJXU3hEUVVGRExGRkJRVkVzU1VGQlNTeFJRVUZSTzJkRFFVTnNReXhQUVVGUE8zbENRVU5rTzNkQ1FVTkVMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVVU3TkVKQlExSXNVVUZCVVN4RlFVRkZMRU5CUVVVc1QwRkJUU3hEUVVGRkxGRkJRVkVzUTBGQlJTeEpRVUZKTEZWQlFWVXNRMEZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVVVzVVVGQlVTeERRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFN05FSkJRMnhHTEVsQlFVa3NSVUZCUlN4RFFVRkZMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03ZVVKQlEyeERMRU5CUVVNc1EwRkJRenR4UWtGRFRqdG5Ra0ZEVEN4RFFVRkRPMmRDUVVWTkxFbEJRVWtzUTBGQk1rSXNVMEZCYVVJN2IwSkJSVzVFTEVsQlFVa3NVMEZCVXl4SFFVRkhMRk5CUVZNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eGpRVUZqTEVWQlFWRXNRMEZCUXp0dlFrRkRNMFFzU1VGQlNTeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVVVzVTBGQlV5eERRVUZGTEVOQlFVTTdiMEpCUXk5RExFbEJRVXNzVTBGQlV5eEpRVUZKTEVsQlFVazdkMEpCUTJ4Q0xFOUJRVTg3YjBKQlExZ3NTMEZCVFN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGSExFVkJRek5ETzNkQ1FVTkpMRWxCUVVrc1dVRkJXU3hIUVVGSExGTkJRVk1zUTBGQlJTeERRVUZETEVOQlFVVXNRMEZCUXp0M1FrRkRiRU1zU1VGQlN5eFpRVUZaTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNN05FSkJRM1pDTEZOQlFWTTdkMEpCUldJc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlJ5eERRVUZETzNkQ1FVTnlRaXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUlN4VFFVRlRMRU5CUVVVc1EwRkJRenR4UWtGRE9VTTdiMEpCUTBRc1MwRkJUU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJReXhOUVVGTkxFZEJRM0pETzNkQ1FVTkpMRWxCUVVrc1dVRkJXU3hIUVVGSExGTkJRVk1zUTBGQlJTeERRVUZETEVOQlFVVXNRMEZCUXp0M1FrRkRiRU1zU1VGQlN5eFpRVUZaTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1JVRkRNMEk3TkVKQlEwa3NVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZGTEVOQlFVTTdlVUpCUXpWQ096WkNRVVZFT3pSQ1FVTkpMRU5CUVVNc1JVRkJSU3hEUVVGRE8zbENRVU5RTzNGQ1FVTktPMmRDUVVOTUxFTkJRVU03WVVGRFNqdFpRVFZFV1N4dlFrRkJVeXhaUVRSRWNrSXNRMEZCUVR0WlFVRkJMRU5CUVVNN1VVRkRUaXhEUVVGRExFVkJka1YxUWl4VlFVRlZMRWRCUVZZc1owSkJRVlVzUzBGQlZpeG5Ra0ZCVlN4UlFYVkZha003U1VGQlJDeERRVUZETEVWQmRrVnBRaXhMUVVGTExFZEJRVXdzWVVGQlN5eExRVUZNTEdGQlFVc3NVVUYxUlhSQ08wRkJRVVFzUTBGQlF5eEZRWFpGVXl4UFFVRlBMRXRCUVZBc1QwRkJUeXhSUVhWRmFFSTdRVU4yUlVRc1NVRkJWU3hQUVVGUExFTkJlVUpvUWp0QlFYcENSQ3hYUVVGVkxFOUJRVTg3U1VGQlF5eEpRVUZCTEV0QlFVc3NRMEY1UW5SQ08wbEJla0pwUWl4WFFVRkJMRXRCUVVzN1VVRkJReXhKUVVGQkxGVkJRVlVzUTBGNVFtcERPMUZCZWtKMVFpeFhRVUZCTEZWQlFWVTdXVUZGT1VJc1RVRkJZU3hoUVVGakxGTkJRVkVzVFVGQlFTeGhRVUZoTzJkQ1FVRm9SRHM3YjBKQlJXTXNXVUZCVHl4SFFVRjVSU3hKUVVGSkxFOUJRVThzUlVGQlJTeERRVUZETzJkQ1FXOUNOVWNzUTBGQlF6dG5Ra0ZzUWxVc1VVRkJVU3hEUVVGRkxFdEJRV2xDTzI5Q1FVVTVRaXhKUVVGSkxGTkJRVk1zUjBGQlVTeExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1kwRkJZeXhGUVVGRkxFTkJRVU03YjBKQlEzUkVMRWxCUVVrc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkZMRk5CUVZNc1EwRkJSU3hEUVVGRE8yOUNRVU01UXl4SlFVRkxMRk5CUVZNc1NVRkJTU3hKUVVGSkxFVkJRM1JDTzNkQ1FVTkpMRTFCUVUwc1MwRkJTeXhEUVVGRkxITkNRVUZ6UWl4RFFVRkZMRU5CUVVNN2NVSkJRM3BETzI5Q1FVTkVMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZQTEZOQlFWTXNSVUZCUlN4TFFVRkxMRU5CUVVVc1EwRkJRenR2UWtGRE1VTXNTMEZCU3l4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8yZENRVU4yUWl4RFFVRkRPMmRDUVVWTkxGRkJRVkVzUTBGQmJVTXNVMEZCWjBRN2IwSkJSVGxHTEVsQlFVa3NVMEZCVXl4SFFVRkhMRk5CUVZNc1EwRkJReXhqUVVGakxFVkJRVVVzUTBGQlF6dHZRa0ZETTBNc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVVc1UwRkJVeXhEUVVGRkxFTkJRVU03YjBKQlF6RkRMRTlCUVcxQ0xFdEJRVXNzUTBGQlF6dG5Ra0ZETjBJc1EwRkJRenRoUVVOS08xbEJkRUpaTEhkQ1FVRmhMR2RDUVhOQ2VrSXNRMEZCUVR0UlFVTk1MRU5CUVVNc1JVRjZRblZDTEZWQlFWVXNSMEZCVml4blFrRkJWU3hMUVVGV0xHZENRVUZWTEZGQmVVSnFRenRKUVVGRUxFTkJRVU1zUlVGNlFtbENMRXRCUVVzc1IwRkJUQ3hoUVVGTExFdEJRVXdzWVVGQlN5eFJRWGxDZEVJN1FVRkJSQ3hEUVVGRExFVkJla0pUTEU5QlFVOHNTMEZCVUN4UFFVRlBMRkZCZVVKb1FpSXNJbVpwYkdVaU9pSXVMaTlpYVc0dlJYWmxiblF2YVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKY2NseHVYSEpjYm01aGJXVnpjR0ZqWlNCcFltVnlZbUZ5TGtWMlpXNTBYSEpjYm50Y2NseHVJQ0FnSUdWNGNHOXlkQ0JqYkdGemN5QkRSWFpsYm5SY2NseHVJQ0FnSUh0Y2NseHVJQ0FnSUgwN1hISmNibHh5WEc0Z0lDQWdMeThnWlhod2IzSjBJR2x1ZEdWeVptRmpaU0JVUlhabGJuUkRiMjV6ZEhKMVkzUnZjandnVkVWMlpXNTBJR1Y0ZEdWdVpITWdRMFYyWlc1MElENWNjbHh1SUNBZ0lDOHZJSHRjY2x4dUlDQWdJQzh2SUNBZ0lDQnVaWGNnS0NBdUxpNWhjbWR6T2lCaGJubGJYU0FwT2lCVVJYWmxiblJjY2x4dUlDQWdJQzh2SUgwN1hISmNibHh5WEc0Z0lDQWdaWGh3YjNKMElIUjVjR1VnVkVWMlpXNTBRMjl1YzNSeWRXTjBiM0k4SUZSRmRtVnVkQ0JsZUhSbGJtUnpJRU5GZG1WdWRDQStJRDBnVTNsemRHVnRMbEpsWm14bFkzUnBiMjR1Vkhsd1pVTnZibk4wY25WamRHOXlQQ0JVUlhabGJuUWdQanRjY2x4dWZTSXNJbHh5WEc1Y2NseHVibUZ0WlhOd1lXTmxJR2xpWlhKaVlYSXVSWFpsYm5SY2NseHVlMXh5WEc0Z0lDQWdaWGh3YjNKMElHRmljM1J5WVdOMElHTnNZWE56SUVsRmRtVnVkRUoxYzF4eVhHNGdJQ0FnZTF4eVhHNGdJQ0FnSUNBZ0lIQjFZbXhwWXlCaFluTjBjbUZqZENCTWFYTjBaVzQ4SUZSRmRtVnVkQ0JsZUhSbGJtUnpJRU5GZG1WdWRDQStLQ0JsZG1WdWRGUjVjR1U2SUZONWMzUmxiUzVTWldac1pXTjBhVzl1TGtOVWVYQmxQQ0JVUlhabGJuUWdQaXdnYkdsemRHVnVaWEk2SUZONWMzUmxiUzVVUTJGc2JHSmhZMnRQY2taMWJtTjBhVzl1UENCVlJYWmxiblJDZFhOTWFYTjBaVzVsY2taMWJtTjBhVzl1UENCVVJYWmxiblFnUGlBK0xDQnZibU5sUHpvZ1ltOXZiR1ZoYmlBcE9pQjJiMmxrTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J3ZFdKc2FXTWdZV0p6ZEhKaFkzUWdVMlZ1WkR3Z1ZFVjJaVzUwSUdWNGRHVnVaSE1nUTBWMlpXNTBJRDRvSUdWMlpXNTBSR0YwWVRvZ1ZFVjJaVzUwSUNrNklIWnZhV1E3WEhKY2JpQWdJQ0I5TzF4eVhHNWNjbHh1SUNBZ0lHVjRjRzl5ZENCMGVYQmxJRlZGZG1WdWRFSjFjMHhwYzNSbGJtVnlSblZ1WTNScGIyNDhJRlJGZG1WdWRDQmxlSFJsYm1SeklFTkZkbVZ1ZENBK0lEMGdLQ0JsZG1WdWRFUmhkR0U2SUZSRmRtVnVkQ0FwSUQwK0lIWnZhV1E3WEhKY2JpQWdJQ0JsZUhCdmNuUWdkSGx3WlNCSlJYWmxiblJDZFhOTWFYTjBaVzVsY2p3Z1ZFVjJaVzUwSUdWNGRHVnVaSE1nUTBWMlpXNTBJRDRnUFNCVGVYTjBaVzB1VkVOaGJHeGlZV05yUENCVlJYWmxiblJDZFhOTWFYTjBaVzVsY2taMWJtTjBhVzl1UENCVVJYWmxiblFnUGlBK08xeHlYRzVjY2x4dWZTSXNJbHh5WEc1Y2NseHVYSEpjYm01aGJXVnpjR0ZqWlNCcFltVnlZbUZ5TGtWMlpXNTBYSEpjYm50Y2NseHVJQ0FnSUdWNGNHOXlkQ0JqYkdGemN5QkpVM1JoZEdWTllXTm9hVzVsWEhKY2JpQWdJQ0I3WEhKY2JpQWdJQ0FnSUNBZ1FXUmtVM1JoZEdVb0lITjBZWFJsT2lCSlUzUmhkR1ZPYjJSbElDazZJSFp2YVdSY2NseHVJQ0FnSUNBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblRtOTBJR2x0Y0d4bGJXVnVkSE1uS1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lFZGxkRk4wWVhSbFBDQlVVM1JoZEdWT2IyUmxJR1Y0ZEdWdVpITWdTVk4wWVhSbFRtOWtaU0ErS0NCemRHRjBaVlI1Y0dVNklGTjVjM1JsYlM1U1pXWnNaV04wYVc5dUxrTlVlWEJsUENCVVUzUmhkR1ZPYjJSbElENGdLVG9nVkZOMFlYUmxUbTlrWlZ4eVhHNGdJQ0FnSUNBZ0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkT2IzUWdhVzF3YkdWdFpXNTBjeWNwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1ZlZ4eVhHNWNjbHh1WEhKY2JseHlYRzRpTENKY2NseHVYSEpjYm01aGJXVnpjR0ZqWlNCcFltVnlZbUZ5TGtWMlpXNTBYSEpjYm50Y2NseHVJQ0FnSUdWNGNHOXlkQ0JqYkdGemN5QkpVM1JoZEdWT2IyUmxYSEpjYmlBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnY0hWaWJHbGpJRWx1YVhScFlXeHBlbVVvS1RvZ2RtOXBaRnh5WEc0Z0lDQWdJQ0FnSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RPYjNRZ2FXMXdiR1Z0Wlc1MGN5Y3BPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVmU0lzSWx4eVhHNWNjbHh1Ym1GdFpYTndZV05sSUdsaVpYSmlZWEl1UlhabGJuUXVTVzF3YkdWdFpXNTBjMXh5WEc1N1hISmNiaUFnSUNCMGVYQmxJRlZGZG1WdWRFUmxiR1ZuWVhSbElEMWNjbHh1SUNBZ0lIdGNjbHh1SUNBZ0lDQWdJQ0JzYVhOMFpXNWxjam9nU1VWMlpXNTBRblZ6VEdsemRHVnVaWEk4SUVORmRtVnVkQ0ErTzF4eVhHNGdJQ0FnSUNBZ0lHdHBZMnM2SUc1MWJXSmxjanRjY2x4dUlDQWdJSDA3WEhKY2JseHlYRzRnSUNBZ2RIbHdaU0JWUlhabGJuUkVaV3hsWjJGMFpVeHBjM1FnUFNCQmNuSmhlVHdnVlVWMlpXNTBSR1ZzWldkaGRHVWdQanRjY2x4dVhISmNiaUFnSUNCbGVIQnZjblFnWTJ4aGMzTWdRMFYyWlc1MFFuVnpJR1Y0ZEdWdVpITWdTVVYyWlc1MFFuVnpYSEpjYmlBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnY0hKdmRHVmpkR1ZrSUcxZlpYWmxiblJ6T2lCWFpXRnJUV0Z3UENCVGVYTjBaVzB1VW1WbWJHVmpkR2x2Ymk1VWVYQmxVSEp2ZEc5MGVYQmxQQ0JEUlhabGJuUWdQaXdnVlVWMlpXNTBSR1ZzWldkaGRHVk1hWE4wSUQ0Z1BTQnVaWGNnVjJWaGEwMWhjQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J3ZFdKc2FXTWdUR2x6ZEdWdVBDQlVSWFpsYm5RZ1pYaDBaVzVrY3lCRFJYWmxiblFnUGlnZ1pYWmxiblJVZVhCbE9pQlRlWE4wWlcwdVVtVm1iR1ZqZEdsdmJpNURWSGx3WlR3Z1ZFVjJaVzUwSUQ0c0lHeHBjM1JsYm1WeU9pQlRlWE4wWlcwdVZFTmhiR3hpWVdOclQzSkdkVzVqZEdsdmJqd2dWVVYyWlc1MFFuVnpUR2x6ZEdWdVpYSkdkVzVqZEdsdmJqd2dWRVYyWlc1MElENGdQaXdnYjI1alpUODZJR0p2YjJ4bFlXNGdLVG9nZG05cFpGeHlYRzRnSUNBZ0lDQWdJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUhCeWIzUnZkSGx3WlNBOUlHVjJaVzUwVkhsd1pTNUhaWFJLYzFCeWIzUnZkSGx3WlR4N2ZUNG9LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUdGeWNtRjVJRDBnZEdocGN5NXRYMlYyWlc1MGN5NW5aWFFvSUhCeWIzUnZkSGx3WlNBcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JR0Z5Y21GNUlEMDlJRzUxYkd3Z0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhjbkpoZVNBOUlFRnljbUY1S0NrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhjbkpoZVM1d2RYTm9LQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR2x6ZEdWdVpYSTZJQ2dnZEhsd1pXOW1LQ0JzYVhOMFpXNWxjaUFwSUQwOUlGd2lablZ1WTNScGIyNWNJaUFwSUQ4Z1gxOURZV3hzWW1GamF5Z2diR2x6ZEdWdVpYSWdLU0E2SUd4cGMzUmxibVZ5TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3RwWTJzNklDZ2diMjVqWlNBOVBTQjBjblZsSUNrZ1B5QXhJRG9nTFRGY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViVjlsZG1WdWRITXVjMlYwS0NCd2NtOTBiM1I1Y0dVc0lHRnljbUY1SUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWld4elpWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iM0lvSUd4bGRDQnBJRDBnTURzZ2FTQThJR0Z5Y21GNUxteGxibWQwYURzZ2FTQXJLeUFwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHUmxiR1ZuWVhSbFZHVnRjQ0E5SUdGeWNtRjVXeUJwSUYwN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDQmtaV3hsWjJGMFpWUmxiWEF1YkdsemRHVnVaWElnUFQwZ2JHbHpkR1Z1WlhJZ0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200N1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoY25KaGVTNXdkWE5vS0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdsemRHVnVaWEk2SUNnZ2RIbHdaVzltS0NCc2FYTjBaVzVsY2lBcElEMDlJRndpWm5WdVkzUnBiMjVjSWlBcElEOGdYMTlEWVd4c1ltRmpheWdnYkdsemRHVnVaWElnS1NBNklHeHBjM1JsYm1WeUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd0cFkyczZJQ2dnYjI1alpTQTlQU0IwY25WbElDa2dQeUF4SURvZ0xURmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNCd2RXSnNhV01nVTJWdVpEd2dWRVYyWlc1MElHVjRkR1Z1WkhNZ1EwVjJaVzUwSUQ0b0lHVjJaVzUwUkdGMFlUb2dWRVYyWlc1MElDazZJSFp2YVdSY2NseHVJQ0FnSUNBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J3Y205MGIzUjVjR1VnUFNCbGRtVnVkRVJoZEdFdVIyVjBWSGx3WlNncExrZGxkRXB6VUhKdmRHOTBlWEJsUENCN2ZTQStLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCa1pXeGxaMkYwWlhNZ1BTQjBhR2x6TG0xZlpYWmxiblJ6TG1kbGRDZ2djSEp2ZEc5MGVYQmxJQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnZ1pHVnNaV2RoZEdWeklEMDlJRzUxYkd3Z0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLQ0JzWlhRZ2FTQTlJREE3SUdrZ1BDQmtaV3hsWjJGMFpYTXViR1Z1WjNSb095QnBJQ3NySUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR1JsYkdWbllYUmxWR1Z0Y0NBOUlHUmxiR1ZuWVhSbGMxc2dhU0JkTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0JrWld4bFoyRjBaVlJsYlhBdWEybGpheUE5UFNBd0lDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNTBhVzUxWlR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWld4bFoyRjBaVlJsYlhBdWEybGpheUF0TFR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmxiR1ZuWVhSbFZHVnRjQzVzYVhOMFpXNWxjaTVGZUdWamRYUmxLQ0JsZG1WdWRFUmhkR0VnS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tDQnNaWFFnYVNBOUlEQTdJR2tnUENCa1pXeGxaMkYwWlhNdWJHVnVaM1JvT3lBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JrWld4bFoyRjBaVlJsYlhBZ1BTQmtaV3hsWjJGMFpYTmJJR2tnWFR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2dnWkdWc1pXZGhkR1ZVWlcxd0xtdHBZMnNnUFQwZ01DQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaR1ZzWldkaGRHVnpMbk53YkdsalpTZ2dhU3dnTVNBcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWld4elpWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHa3JLenRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMDdYSEpjYm4xY2NseHVYSEpjYmlJc0lseHlYRzVjY2x4dWJtRnRaWE53WVdObElHbGlaWEppWVhJdVJYWmxiblF1U1cxd2JHVnRaVzUwYzF4eVhHNTdYSEpjYmlBZ0lDQmxlSEJ2Y25RZ1kyeGhjM01nUTFOMFlYUmxUV0ZqYUdsdVpTQmxlSFJsYm1SeklFbFRkR0YwWlUxaFkyaHBibVZjY2x4dUlDQWdJSHRjY2x4dUlDQWdJQ0FnSUNCd2NtOTBaV04wWldRZ2JWOXpkR0YwWlRvZ1YyVmhhMDFoY0R3Z1UzbHpkR1Z0TGxKbFpteGxZM1JwYjI0dVZIbHdaVkJ5YjNSdmRIbHdaVHdnU1ZOMFlYUmxUbTlrWlNBK0xDQkpVM1JoZEdWT2IyUmxJRDRnUFNCdVpYY2dWMlZoYTAxaGNDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQndkV0pzYVdNZ1FXUmtVM1JoZEdVb0lITjBZWFJsT2lCSlUzUmhkR1ZPYjJSbElDazZJSFp2YVdSY2NseHVJQ0FnSUNBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J3Y205MGIzUjVjR1U2SUdGdWVTQTlJSE4wWVhSbExrZGxkRlI1Y0dVb0tTNUhaWFJLYzFCeWIzUnZkSGx3WlNncE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdjM1JoZEdWVVpXMXdJRDBnZEdocGN5NXRYM04wWVhSbExtZGxkQ2dnY0hKdmRHOTBlWEJsSUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2djM1JoZEdWVVpXMXdJQ0U5SUc1MWJHd2dLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnZ1hDSjBhR1Z5WlNCcGN5QmxlR2x6ZENCemRHRjBaVndpSUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXRYM04wWVhSbExuTmxkQ2dnUEdGdWVUNXdjbTkwYjNSNWNHVXNJSE4wWVhSbElDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBZWFJsTGtsdWFYUnBZV3hwZW1Vb0tUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJSEIxWW14cFl5QkhaWFJUZEdGMFpUd2dWRk4wWVhSbFRtOWtaU0JsZUhSbGJtUnpJRWxUZEdGMFpVNXZaR1VnUGlnZ2MzUmhkR1ZVZVhCbE9pQlRlWE4wWlcwdVVtVm1iR1ZqZEdsdmJpNURWSGx3WlR3Z1ZGTjBZWFJsVG05a1pTQStJQ2s2SUZSVGRHRjBaVTV2WkdWY2NseHVJQ0FnSUNBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J3Y205MGIzUjVjR1VnUFNCemRHRjBaVlI1Y0dVdVIyVjBTbk5RY205MGIzUjVjR1VvS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElITjBZWFJsSUQwZ2RHaHBjeTV0WDNOMFlYUmxMbWRsZENnZ2NISnZkRzkwZVhCbElDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlBOFZGTjBZWFJsVG05a1pUNXpkR0YwWlR0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYm4waVhTd2ljMjkxY21ObFVtOXZkQ0k2SWtjNlhGeERiMlJsUjJsMFhGeFVlWEJsYzJOeWFYQjBRWFYwYjJaaFkxeGNZbWx1WEZ4RmRtVnVkQ0o5XG4iXX0=
