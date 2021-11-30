declare namespace iberbar.System.Collections.Generic {
    class CDictionary<TKey, TValue> implements IDictionary<TKey, TValue> {
        private m_comparer;
        private m_data;
        constructor(options?: {
            comparer?: IEqualityComparer<TKey>;
        });
        Add(key: TKey, value: TValue): void;
        ContainKey(key: TKey): boolean;
        Remove(key: TKey): void;
        Get(key: TKey): TValue;
        Clear(): void;
        Each(process: System.TCallback<(key: TKey, value: TValue) => void>): void;
    }
}
declare namespace iberbar.System.Collections.Generic {
    class CEqualityComparer<T> implements IEqualityComparer<T> {
        Equals(a: T, b: T): boolean;
    }
}
declare namespace iberbar.System.Collections.Generic {
    interface IDictionary<TKey, TValue> {
        Add(key: TKey, value: TValue): void;
        ContainKey(key: TKey): boolean;
        Remove(key: TKey): void;
        Get(key: TKey): TValue;
        Clear(): void;
        Each(process: System.TCallback<(key: TKey, value: TValue) => void>): void;
    }
}
declare namespace iberbar.System.Collections.Generic {
    interface IEqualityComparer<T> {
        Equals(a: T, b: T): boolean;
    }
}
declare namespace iberbar.System.Metadata {
    interface IMetadataCollection extends IMetadataCollectionReadonly {
        AddAttribute(attribute: CAttribute): void;
    }
}
declare namespace iberbar.System.Metadata {
    interface IMetadataCollectionReadonly {
        GetAttributeOne<T extends CAttribute>(type: System.Reflection.CType<T>): T;
        GetAttributes<T extends CAttribute>(type: System.Reflection.CType<T>): T[];
        GetAttributesAll(): CAttribute[];
    }
}
declare namespace iberbar.System.Metadata {
    interface IMetadataContainer {
        GetOrAddCollection(key: Core.CMetadataKey): IMetadataCollection;
        GetCollection(key: Core.CMetadataKey): IMetadataCollectionReadonly;
    }
}
declare namespace iberbar.System.Metadata.Core {
    class CMetadataCollection implements IMetadataCollection {
        private readonly m_list;
        constructor();
        AddAttribute(attribute: CAttribute): void;
        GetAttributeOne<T extends CAttribute>(type: Reflection.CType): T;
        GetAttributes<T extends CAttribute>(type: Reflection.CType<T>): T[];
        GetAttributesAll(): CAttribute[];
    }
}
declare namespace iberbar.System.Metadata.Core {
    class CMetadataContainer implements IMetadataContainer, Collections.Generic.IEqualityComparer<CMetadataKey> {
        private readonly m_pool;
        GetOrAddCollection(key: Core.CMetadataKey): IMetadataCollection;
        GetCollection(key: Core.CMetadataKey): IMetadataCollectionReadonly;
        Equals(a: CMetadataKey, b: CMetadataKey): boolean;
        static readonly EmptyCollection: CMetadataCollection;
    }
}
declare namespace iberbar.System.Metadata {
    const Container: IMetadataContainer;
}
declare namespace iberbar.System.Metadata.Core {
    abstract class CMetadataKey implements IEquatable<CMetadataKey> {
        private readonly m_type;
        private readonly m_target;
        constructor(type: Reflection.CType, target: UAttributeTarget);
        Equals(other: CMetadataKey): boolean;
    }
}
declare namespace iberbar.System.Metadata.Core {
    class CMetadataKeyForClass extends CMetadataKey {
        constructor(type: Reflection.CType, target: UAttributeTarget);
        Equals(other: CMetadataKey): boolean;
    }
}
declare namespace iberbar.System.Metadata.Core {
    class CMetadataKeyForNamed extends CMetadataKey {
        private readonly m_name;
        constructor(type: Reflection.CType, target: UAttributeTarget, name: string | symbol);
        Equals(other: CMetadataKey): boolean;
    }
}
declare namespace iberbar.System.Metadata.Core {
    class CMetadataKeyForParameter extends CMetadataKey {
        private readonly m_methodName;
        private readonly m_index;
        constructor(type: Reflection.CType, target: UAttributeTarget, methodName: string | symbol, index: number);
        Equals(other: CMetadataKey): boolean;
    }
}
declare namespace iberbar.System.Metadata.Core {
    interface IMetadataRegistry {
    }
}
declare namespace iberbar.System.Reflection {
    /**
     * 自动映射构造函数的参数类型
     *
     * 需要tsconfig配置 "emitDecoratorMetadata": true
     * @param target
     */
    function AutoReflectMetadata_Constructor(target: any): any;
    /**
     * 自动映射字段类型
     *
     * 需要tsconfig配置 "emitDecoratorMetadata": true
     */
    function AutoReflectMetadata_Field(target: any, fieldName: string): any;
    /**
     * 自动映射属性类型
     *
     * 需要tsconfig配置 "emitDecoratorMetadata": true
     */
    function AutoReflectMetadata_Property(target: any, propertyName: string, descriptor: PropertyDescriptor): any;
    /**
     * 自动映射方法的返回类型和参数类型
     *
     * 需要tsconfig配置 "emitDecoratorMetadata": true
     */
    function AutoReflectMetadata_Method(target: any, methodName: string, descriptor: PropertyDescriptor): any;
}
declare namespace iberbar.System.Reflection {
    class CAssembly {
        private readonly m_jsmodule;
        constructor(s: any);
        GetTypes(): CType[];
        private GetTypesInternal;
    }
}
declare namespace iberbar.System.Reflection {
    type UMemberSymbol = string;
    abstract class CMemberInfo implements ICustomAttributeProvider {
        protected readonly m_name: UMemberSymbol;
        protected readonly m_prototype: TypePrototype<object>;
        private m_metadataCollection;
        protected constructor(name: UMemberSymbol, prototype: TypePrototype<object>);
        abstract get MemberType(): UMemberTypes;
        get Name(): UMemberSymbol;
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
        get DeclaringType(): CType<object>;
        GetJsPrototype<TExtra extends {} = {}>(): TypePrototype<object> & TExtra;
        private get MetadataCollection();
        GetCustomAttributeOne<TAttribute extends CAttribute>(attributeType: CType<TAttribute>): TAttribute;
        GetCustomAttributes<TAttribute extends CAttribute>(attributeType: CType<TAttribute>): TAttribute[];
        GetCustomAttributesAll(): CAttribute[];
        IsDefined<TAttribute extends CAttribute>(attributeType: CType<TAttribute>): boolean;
        GetMetadataKey(): Metadata.Core.CMetadataKey;
    }
}
declare namespace iberbar.System.Reflection {
    abstract class CMethodBase extends CMemberInfo {
        abstract GetParameters(): Array<CParameterInfo>;
        abstract get Descriptor(): PropertyDescriptor;
    }
}
declare namespace iberbar.System.Reflection {
    abstract class CConstructorInfo extends CMethodBase {
        get JsConstructor(): TypeConstructor<object>;
        Invoke(...args: any[]): object;
        abstract GetParameters(): Array<CParameterInfo>;
    }
}
declare namespace iberbar.System {
    enum UAttributeTarget {
        Class = 1,
        Field = 2,
        Method = 4,
        Parameter = 8,
        Property = 16,
        All = 31
    }
}
declare namespace iberbar.System {
    /**
     * 特性基类
     */
    abstract class CAttribute {
    }
}
declare namespace iberbar.System {
    class CAttributeUsageAttribute extends CAttribute {
        protected m_validOn: number;
        protected m_allowMultiple?: boolean;
        protected m_inherited?: boolean;
        get ValidOn(): number;
        get AllowMultiple(): boolean;
        get Inherited(): boolean;
        constructor(validOn: number, allowMultiple?: boolean, inherit?: boolean);
        static DefaultUsage: CAttributeUsageAttribute;
    }
}
declare namespace iberbar.System.Reflection {
    abstract class CFieldInfo extends CMemberInfo {
        get MemberType(): UMemberTypes;
        SetValue(obj: object, value: any): void;
        GetValue(obj: object): any;
        GetMetadataKey(): Metadata.Core.CMetadataKey;
        abstract get FieldType(): CType;
    }
}
declare namespace iberbar.System.Reflection {
    abstract class CMethodInfo extends CMethodBase {
        Invoke(obj: any, ...args: any[]): any;
        GetMetadataKey(): Metadata.Core.CMetadataKey;
        protected abstract get Method(): Function;
    }
}
declare namespace iberbar.System.Reflection {
    abstract class CPropertyInfo extends CMemberInfo {
        /**
         * Gets the type of this property
         *
         * 属性的类型
         */
        abstract get PropertyType(): CType;
        abstract SetValue(obj: any, value: any): void;
        abstract GetValue(obj: any): any;
        GetMetadataKey(): Metadata.Core.CMetadataKey;
        abstract get CanWrite(): boolean;
        abstract get CanRead(): boolean;
        abstract GetSetMethod(): CMethodInfo;
        abstract GetGetMethod(): CMethodInfo;
    }
}
declare namespace iberbar.System.Reflection {
    abstract class CParameterInfo implements ICustomAttributeProvider {
        protected constructor();
        abstract get ParameterIndex(): number;
        abstract get Name(): string;
        abstract get ParameterType(): CType;
        abstract GetCustomAttributeOne<TAttribute extends CAttribute>(attributeType: CType<TAttribute>): TAttribute;
        abstract GetCustomAttributes<TAttribute extends CAttribute>(attributeType: CType<TAttribute>): TAttribute[];
        abstract GetCustomAttributesAll(): CAttribute[];
        abstract IsDefined<TAttribute extends CAttribute>(attributeType: CType<TAttribute>): boolean;
    }
}
declare namespace iberbar.System.Reflection {
    interface ICustomAttributeProvider {
        GetCustomAttributeOne<TAttribute extends CAttribute>(attrType: CType<TAttribute>, inherit: boolean): TAttribute;
        GetCustomAttributes<TAttribute extends CAttribute>(attrType: CType<TAttribute>, inherit: boolean): TAttribute[];
        GetCustomAttributesAll(): CAttribute[];
        IsDefined<TAttribute extends CAttribute>(attrType: CType<TAttribute>, inherit: boolean): boolean;
    }
}
declare namespace iberbar.System.Reflection {
    /**
     * object 派生类的构造器类型
     */
    interface TypeConstructor<T extends object> extends Function {
        new (...args: any[]): T;
    }
    interface TypeConstructorAbstract<T extends object> extends Function {
        prototype: T | TypePrototype<T>;
    }
    /**
     * object 派生类的prototype类型
     */
    interface TypePrototype<T extends object> extends Object {
        constructor: TypeConstructor<T>;
    }
    function GetOrCreateDictionaryInJsPrototype<T extends {}>(prototype: TypePrototype<object>, key: string): T;
    function GetOrCreateArrayInJsPrototype<T extends {}>(prototype: TypePrototype<object>, key: string): Array<T>;
    interface IDelayType<T extends object = object> {
        (): CType<T>;
    }
    abstract class CType<T extends object = object> implements ICustomAttributeProvider, IEquatable<CType> {
        protected constructor();
        abstract Equals(other: CType): boolean;
        abstract GetJsPrototype<TExtra extends {} = {}>(): TypePrototype<T> & TExtra;
        abstract GetJsConstructor(): TypeConstructor<T>;
        abstract GetConstructor(): CConstructorInfo;
        GetFieldOne(name: string): CFieldInfo;
        abstract GetOwnFieldOne(name: string): CFieldInfo;
        GetFields(): CFieldInfo[];
        abstract GetOwnFields(): CFieldInfo[];
        GetMethodOne(key: string): CMethodInfo;
        abstract GetOwnMethodOne(key: string): CMethodInfo;
        GetMethods(): CMethodInfo[];
        abstract GetOwnMethods(): CMethodInfo[];
        GetProperties(): CPropertyInfo[];
        GetProperty(key: string | symbol): CPropertyInfo;
        abstract GetOwnProperties(): CPropertyInfo[];
        abstract GetOwnProperty(key: string | symbol): CPropertyInfo;
        /**
         * **(只读)**
         *
         * 获取父类类型
         */
        abstract get BaseType(): CType;
        /**
         * 对比当前类型是否与参数type类型一样
         * @param type 对比参照类型
         */
        abstract IsEquivalentTo(type: CType | TypeConstructor<object>): boolean;
        /**
         * 判断当前类型是否继承于参数type类型
         * @param type 父类类型
         */
        abstract IsInheritFrom(type: CType): boolean;
        abstract GetCustomAttributeOne<TAttribute extends CAttribute>(attributeType: CType<TAttribute>, inherit: boolean): TAttribute;
        abstract GetCustomAttributes<TAttribute extends CAttribute>(attributeType: CType<TAttribute>, inherit: boolean): TAttribute[];
        abstract GetCustomAttributesAll(): CAttribute[];
        abstract IsDefined<TAttribute extends CAttribute>(attributeType: CType<TAttribute>, inherit: boolean): boolean;
    }
    function TypeOf<T extends object>(type: TypeConstructor<T> | TypeConstructorAbstract<T>): CType<T>;
    function TypeOf__<T extends object>(prototype: TypePrototype<T>): CType<T>;
    function GetObjectType(o: any): CType;
    /**
     * 用于互相类型引用的场景
     * @param delay
     */
    function TypeOfDelay<T extends object>(delay: () => TypeConstructor<T> | TypeConstructorAbstract<T>): IDelayType<T>;
}
interface Object {
    GetType(): iberbar.System.Reflection.CType<Object>;
}
declare namespace iberbar.System {
    function AttributeDecorate(attribute: CAttribute): UDecoratorFunctionType;
    var Attribute: typeof AttributeDecorate;
}
declare namespace iberbar.System {
    /**
     *
     * @param validOn
     * @param allowMultiple
     * @param inherit
     */
    function AttributeUsage(validOn: number, allowMultiple?: boolean, inherit?: boolean): UDecoratorFunctionType_ForClass;
}
declare namespace iberbar.System.Reflection {
    class CDeclaringTypeAttribute extends CAttribute {
        protected m_type: IDelayType;
        protected m_typesGeneric: Array<IDelayType>;
        protected m_isGeneric: boolean;
        protected m_typesGenericReal: Array<CType>;
        constructor(type: IDelayType, genericTypes: Array<IDelayType>);
        get DeclaringType(): CType;
        get GenericTypes(): Array<CType>;
        get IsGenericType(): boolean;
    }
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
    function DeclaringType(type: CType, genericTypes?: CType[]): UDecoratorFunctionType_ForField & UDecoratorFunctionType_ForProperty & UDecoratorFunctionType_ForMethod & UDecoratorFunctionType_ForParameter;
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
    function DeclaringTypeDelay(type: IDelayType, genericTypes?: IDelayType[]): UDecoratorFunctionType_ForField & UDecoratorFunctionType_ForProperty & UDecoratorFunctionType_ForMethod & UDecoratorFunctionType_ForParameter;
}
declare namespace iberbar.System.Reflection {
    const ReflectFieldsKey = "Jasmine::System::Reflect::Fields";
    function Enumerable(target: any, propertyName: string, descriptor?: PropertyDescriptor): void;
}
declare namespace iberbar.System.Reflection {
    class CNamedAttribute extends CAttribute {
        private readonly m_text;
        constructor(text: string);
        get Text(): string;
    }
    function Named(text: string): UDecoratorFunctionType_ForParameter;
}
declare namespace iberbar.System.Reflection {
    function TypeNickname(nickname: string): UDecoratorFunctionType_ForClass;
    interface CType {
        GetNicknames(): Array<string>;
        GetNickname(): string;
    }
}
declare namespace iberbar.System.Reflection {
    enum UMemberTypes {
        Constructor = 1,
        Field = 2,
        Method = 4,
        Property = 8,
        TypeInfo = 16
    }
}
declare namespace iberbar.System {
    type Action<T> = TCallback<(t: T) => void>;
}
declare namespace iberbar.System {
    class TCallback<T extends (...args: any) => any> {
        private readonly m_executable;
        constructor(process?: T, handler?: any);
        Execute(...args: Parameters<T>): ReturnType<T>;
    }
    type TCallbackOrFunction<T extends (...args: any) => any> = T | TCallback<T>;
    class TCallbackArray<T extends (...args: any) => any> {
        callbacks: TCallback<T>[];
        Add(callback: TCallbackOrFunction<T> | Array<TCallbackOrFunction<T>>): void;
        Execute(...args: Parameters<T>): void;
        Copy(): TCallbackArray<T>;
    }
}
interface Object {
    /**
     * **⇩ 拓展方法**
     *
     * 构建回调函数对象
     * @param method 方法
     */
    __Callback<T extends (...args: any[]) => any>(method: T): iberbar.System.TCallback<T>;
}
declare namespace iberbar.System {
    function dynamic_cast<T extends object>(o: any, t: iberbar.System.Reflection.TypeConstructor<T>): T;
}
declare namespace iberbar.System {
    interface IDisposable {
        Dispose(): void;
    }
}
declare namespace iberbar.System {
    interface IEquatable<T> {
        Equals(other: T): boolean;
    }
}
declare interface Array<T> {
    FirstOrDefault(predicate?: (e: T, index: number) => boolean): T;
    Where(predicate: (e: T, index: number) => boolean): Array<T>;
    RemoveAt(index: number): Array<T>;
    Remove<T>(element: T): Array<T>;
    RemoveWhere<T>(predicate: (e: T, index: number) => boolean): Array<T>;
}
declare interface ReadonlyArray<T> {
    FirstOrDefault(predicate?: (e: T, index: number) => boolean): T;
    Where(predicate: (e: T, index: number) => boolean): Array<T>;
    SafeForEach(func: (e: T, index: number) => boolean): void;
}
interface ArrayConstructor {
    convertAll<TInput, TOutput>(array: Array<TInput>, converter: (input: TInput) => TOutput): Array<TOutput>;
}
declare namespace iberbar.System {
    type USymbol = string | symbol | number;
}
declare namespace iberbar.System {
    type UDecoratorFunctionType_ForClass = ClassDecorator;
    type UDecoratorFunctionType_ForField = PropertyDecorator;
    type UDecoratorFunctionType_ForMethod = MethodDecorator;
    type UDecoratorFunctionType_ForParameter = ParameterDecorator;
    type UDecoratorFunctionType_ForProperty = MethodDecorator;
    type UDecoratorFunctionType = UDecoratorFunctionType_ForClass & UDecoratorFunctionType_ForField & UDecoratorFunctionType_ForMethod & UDecoratorFunctionType_ForParameter & UDecoratorFunctionType_ForProperty;
}
declare const TypeOf: typeof iberbar.System.Reflection.TypeOf;
declare const TypeOfDelay: typeof iberbar.System.Reflection.TypeOfDelay;
declare const GetObjectType: typeof iberbar.System.Reflection.GetObjectType;
declare const DeclaringType: typeof iberbar.System.Reflection.DeclaringType;
declare const DeclaringTypeDelay: typeof iberbar.System.Reflection.DeclaringTypeDelay;
declare const __Callback: <T extends (...args: any[]) => any>(method: T) => iberbar.System.TCallback<T>;
declare const AutoReflectMetadata_Constructor: typeof iberbar.System.Reflection.AutoReflectMetadata_Constructor;
declare const AutoReflectMetadata_Field: typeof iberbar.System.Reflection.AutoReflectMetadata_Field;
declare const AutoReflectMetadata_Property: typeof iberbar.System.Reflection.AutoReflectMetadata_Property;
declare const AutoReflectMetadata_Method: typeof iberbar.System.Reflection.AutoReflectMetadata_Method;

declare namespace iberbar.Autofac {
    class CContainerBuilder {
        private m_wasBuilt;
        private readonly m_configurationCallbacks;
        Register<T extends object>(type: System.Reflection.CType<T>, delegate: System.TCallbackOrFunction<Activators.Delegate.UActivationFunction<T>>): Builder.IRegistrationBuilder<T>;
        RegisterType<T extends object>(type: System.Reflection.CType<T>): Builder.IRegistrationBuilder<T>;
        RegisterInstance<T extends object>(type: System.Reflection.CType<T>, instance: T): Builder.IRegistrationBuilder<T>;
        /**
         * 可以访问注册类中类；
         *
         * 只能注册export的类型;
         *
         * @param assemblies
         */
        RegisterAssemblyTypes(...assemblies: System.Reflection.CAssembly[]): Builder.IRegistrationBuilder<object>;
        RegisterTypes(types: ReadonlyArray<System.Reflection.CType>): Builder.IRegistrationBuilder<object>;
        RegisterCallback(configurationCallback: System.Action<Core.IComponentRegistry>): any;
        Build(): IContainer;
        private BuildInternal;
    }
}
declare namespace iberbar.Autofac {
    class CInjectLifetimeScopeAttribute extends System.CAttribute {
    }
    function InjectLifetimeScope(): System.UDecoratorFunctionType_ForParameter & System.UDecoratorFunctionType_ForProperty;
}
declare namespace iberbar.Autofac {
    class CModule {
        Load(): void;
    }
}
declare namespace iberbar.Autofac.Core {
    abstract class CParameter {
        abstract CanSupplyValue(pi: System.Reflection.CParameterInfo, context: IComponentContext): {
            ret: boolean;
            valueProvider?: () => object;
        };
    }
}
declare namespace iberbar.Autofac.Core {
    abstract class CConstantParameter extends CParameter {
        private readonly m_predicate;
        private readonly m_value;
        constructor(value: object, predicate: (parameterInfo: System.Reflection.CParameterInfo) => boolean);
        get Value(): object;
        CanSupplyValue(pi: System.Reflection.CParameterInfo, context: IComponentContext): {
            ret: boolean;
            valueProvider?: () => object;
        };
    }
}
declare namespace iberbar.Autofac {
    class CNamedParameter extends Core.CConstantParameter {
        constructor(name: string, value: object);
    }
}
declare namespace iberbar.Autofac {
    class CPositionalParameter extends Core.CConstantParameter {
        private readonly m_position;
        constructor(position: number, value: object);
        get Position(): number;
    }
}
declare namespace iberbar.Autofac {
    class CTypedParameter extends Core.CConstantParameter {
        private readonly m_type;
        constructor(type: System.Reflection.CType, value: object);
        get Type(): System.Reflection.CType;
    }
}
declare namespace iberbar.Autofac {
    interface IComponentContext {
        readonly ComponentRegistry: Core.IComponentRegistry;
        ResolveComponent(registration: Core.IComponentRegistration, parameters: Core.CParameter[]): object;
    }
}
declare namespace iberbar.Autofac {
    interface IContainer extends ILifetimeScope {
    }
}
declare namespace iberbar.Autofac {
    interface ILifetimeScope extends System.IDisposable, IComponentContext, Core.Resolving.IResolutionExtension {
        GetTag(): ULifetimeScopeTagType;
        BeginLifetimeScope(tag?: ULifetimeScopeTagType): ILifetimeScope;
        GetDisposer(): Core.IDisposer;
    }
}
declare namespace iberbar.Autofac {
    class CInjectionAttribute extends System.CAttribute {
    }
    class CInjectionProviderAttribute extends System.CAttribute {
    }
    class CWithNameAttribute extends System.CAttribute {
        protected m_name: string;
        constructor(name: string);
        get Name(): string;
    }
    class CWithKeyAttribute extends System.CAttribute {
        protected m_key: IKey;
        constructor(key: IKey);
        get Key(): IKey;
    }
    /**
     * **（函数声明）**
     *
     * 在类字段位置声明注入
     */
    function Injection(): System.UDecoratorFunctionType_ForField;
    /**
     * 注入IProvider提供器
     */
    function InjectionProvider(): System.UDecoratorFunctionType_ForField & System.UDecoratorFunctionType_ForParameter;
    function WithName(name: string): System.UDecoratorFunctionType_ForField & System.UDecoratorFunctionType_ForParameter;
    function WithKey(key: IKey): System.UDecoratorFunctionType_ForField & System.UDecoratorFunctionType_ForParameter;
}
declare namespace iberbar.Autofac {
    interface IKey {
        Equals(key: IKey): boolean;
    }
    class CStringKey implements IKey {
        private readonly m_str;
        constructor(str: string);
        Equals(key: IKey): boolean;
    }
}
declare namespace iberbar.Autofac {
    function Resolve<TService extends object>(componentContext: IComponentContext, type: System.Reflection.CType<TService>, ...parameters: Core.CParameter[]): TService;
    function TryResolveService(componentContext: IComponentContext, service: Core.CService, parameters: Core.CParameter[]): {
        succeed: boolean;
        instance?: object;
    };
}
declare namespace iberbar.Autofac {
    type ULifetimeScopeTagType = string | symbol;
}
declare namespace iberbar.Autofac.Activators {
    abstract class CInstanceActivator implements Core.IInstanceActivator {
        private readonly m_limitType;
        constructor(implementationType: System.Reflection.CType);
        ActivateInstance(context: IComponentContext, parameters?: Core.CParameter[]): object;
        GetLimitType(): System.Reflection.CType;
        Dispose(): void;
    }
}
declare namespace iberbar.Autofac.Activators.Delegate {
    type UActivationFunction<T extends object = object> = (context: IComponentContext, parameters: ReadonlyArray<Core.CParameter>) => T;
    class CDelegateActivator extends CInstanceActivator implements Core.IInstanceActivator {
        private readonly m_activationFunction;
        constructor(implementationType: System.Reflection.CType, activationFunction: System.TCallbackOrFunction<UActivationFunction>);
        ActivateInstance(context: IComponentContext, parameters?: Core.CParameter[]): object;
    }
}
declare namespace iberbar.Autofac.Activators.ProvidedInstance {
    class CProvidedInstanceActivator extends CInstanceActivator {
        private m_actived;
        private readonly m_instance;
        constructor(instance: object);
        ActivateInstance(context: IComponentContext, parameters?: Core.CParameter[]): object;
    }
}
declare namespace iberbar.Autofac.Activators.Reflection {
    class CAutowiringParameter extends Core.CParameter {
        CanSupplyValue(pi: System.Reflection.CParameterInfo, context: IComponentContext): {
            ret: boolean;
            valueProvider?: () => object;
        };
    }
}
declare namespace iberbar.Autofac.Activators.Reflection {
    class CAutowiringPropertyInjector {
        private static InjectableProperties;
        /**
         *
         * @param context
         * @param instance
         * @param propertySelector
         * @param parameters 注意，此处的参数列表是Resolve时传入的
         */
        static InjectProperties(context: IComponentContext, instance: object, propertySelector: Core.IPropertySelector, parameters: ReadonlyArray<Core.CParameter>): void;
        private static GetInjectableProperties;
    }
}
declare namespace iberbar.Autofac.Activators.Reflection {
    class CConstructorParameterBinding {
        private m_canInstantiate;
        private readonly m_ci;
        private m_valueRetrievers;
        private m_firstNonBindableParameter;
        constructor(ci: System.Reflection.CConstructorInfo, availableParameters: Core.CParameter[], context: IComponentContext);
        Instantiate(): object;
        get CanInstantiate(): boolean;
    }
}
declare namespace iberbar.Autofac.Activators.Reflection {
    class CDefaultValueParameter extends Core.CParameter {
        CanSupplyValue(pi: System.Reflection.CParameterInfo, context: IComponentContext): {
            ret: boolean;
            valueProvider?: () => object;
        };
    }
}
declare namespace iberbar.Autofac.Activators.Reflection {
    /**
     * Uses reflection to activate instances of a type.
     */
    class CReflectionActivator extends CInstanceActivator {
        private readonly m_implementationType;
        private readonly m_configuredProperties;
        private readonly m_defaultParameters;
        private readonly m_constructor;
        constructor(implementationType: System.Reflection.CType, configuredParameters: ReadonlyArray<Core.CParameter>, configuredProperties: ReadonlyArray<Core.CParameter>);
        ActivateInstance(context: IComponentContext, parameters?: any[]): object;
        Dispose(): void;
        private GetConstructorBinding;
        private InjectProperties;
    }
}
declare namespace iberbar.Autofac.Builder {
    class CReflectionActivatorData {
        private m_implementationType;
        private m_constructor;
        private readonly m_configuredParameters;
        private readonly m_configuredProperties;
        constructor(implementer: System.Reflection.CType);
        get ImplementationType(): System.Reflection.CType;
        get ConfiguredParameters(): Core.CParameter[];
        get ConfiguredProperties(): Core.CParameter[];
    }
}
declare namespace iberbar.Autofac.Builder {
    /**
     * Reflection activator data for concrete types.
     */
    class CConcreteReflectionActivatorData extends CReflectionActivatorData implements IConcreteActivatorData, IActivatorData {
        constructor(implementer: System.Reflection.CType);
        GetTypes(): (t: System.Reflection.CType) => System.Reflection.CType;
        GetActivator(): Core.IInstanceActivator;
        Dispose(): void;
    }
}
declare namespace iberbar.Autofac.Builder {
    class CDeferredCallback {
        private readonly m_callback;
        constructor(callback: System.Action<Core.IComponentRegistry>);
        get Callback(): System.Action<Core.IComponentRegistry>;
    }
}
declare namespace iberbar.Autofac.Builder {
    class CRegistrationBuilder<TLimit extends object> implements IRegistrationBuilder<TLimit> {
        protected m_registrationData: CRegistrationData;
        protected m_activatorData: IActivatorData;
        protected m_registrationStyle: any;
        constructor(service: Core.CService, activatorData: IActivatorData, style: any);
        get RegisterData(): CRegistrationData;
        get ActivatorData(): IActivatorData;
        GetActivatorDataEx<T extends object>(t: System.Reflection.TypeConstructor<T>): T;
        get RegistrationStyle(): any;
        Named<TService extends object>(type: System.Reflection.CType<TService>, name: string): IRegistrationBuilder<TLimit>;
        Keyed<TService extends object>(type: System.Reflection.CType<TService>, key: any): IRegistrationBuilder<TLimit>;
        KeyedMapping<TService extends object>(type: System.Reflection.CType<TService>, servicesKeyMapping: (type: System.Reflection.CType) => any): IRegistrationBuilder<TLimit>;
        As<TService extends object>(type: System.Reflection.CType<TService>): IRegistrationBuilder<TLimit>;
        AsEx(services: Core.CService[]): IRegistrationBuilder<TLimit>;
        private __As1;
        private __As2;
        private __As3;
        AsSelf(): IRegistrationBuilder<TLimit>;
        Where(predicate: (type: System.Reflection.CType) => boolean): IRegistrationBuilder<TLimit>;
        SingleInstance(): IRegistrationBuilder<TLimit>;
        InstancePerDependency(): IRegistrationBuilder<TLimit>;
        InstancePerLifetimeScope(): IRegistrationBuilder<TLimit>;
        InstancePerMatchingLifetimeScope(...scopeTag: ULifetimeScopeTagType[]): IRegistrationBuilder<TLimit>;
        PropertiesAutowired(propertySelector?: Core.IPropertySelector): IRegistrationBuilder<TLimit>;
        WithParameter(parameter: Core.CParameter): IRegistrationBuilder<TLimit>;
        WithParameters(parameters: ReadonlyArray<Core.CParameter>): IRegistrationBuilder<TLimit>;
        WithProperty(parameter: Core.CParameter): IRegistrationBuilder<TLimit>;
        WithProperties(parameters: ReadonlyArray<Core.CParameter>): IRegistrationBuilder<TLimit>;
        OnActivating(callback: Core.UCallbackActivating<TLimit>): IRegistrationBuilder<TLimit>;
        OnActivated(): IRegistrationBuilder<TLimit>;
    }
}
declare namespace iberbar.Autofac.Builder {
    class CRegistrationBuilderHelper {
        static RegisterSingleComponent(cr: Core.IComponentRegistry, rb: IRegistrationBuilder<object>): void;
        static CreateRegistrationForBuilder(rb: IRegistrationBuilder<object>): Core.IComponentRegistration;
        static CreateRegistration(id: string, data: CRegistrationData, activator: Core.IInstanceActivator, services: Array<Core.CService>, target?: Core.IComponentRegistration): Core.IComponentRegistration;
    }
}
declare namespace iberbar.Autofac.Builder {
    class CRegistrationData {
        private m_defaultService;
        private m_defaultServiceOverriden;
        private m_services;
        private m_sharing;
        private m_lifetime;
        private m_deferredCallback;
        private m_activatingHandlers;
        constructor(defaultService: Core.CService);
        AddService(service: Core.CService): void;
        AddServices(services: Core.CService[]): void;
        GetServices(): Array<Core.CService>;
        set Lifetime(value: Core.IComponentLifetime);
        get Lifetime(): Core.IComponentLifetime;
        set Sharing(value: Core.UInstanceSharing);
        get Sharing(): Core.UInstanceSharing;
        set DeferredCallback(value: CDeferredCallback);
        get DeferredCallback(): CDeferredCallback;
        get ActivatingHandlers(): System.TCallbackArray<(sender: any, e: Core.CActivatingEventArgs<object>) => void>;
        CopyFrom(that: CRegistrationData, includeDefaultService: boolean): void;
        private CopyArray;
    }
}
declare namespace iberbar.Autofac.Builder {
    class CScanningActivatorData extends CReflectionActivatorData implements IActivatorData {
        private readonly m_filter;
        private readonly m_configurationActions;
        constructor();
        GetTypes(): (t: System.Reflection.CType) => System.Reflection.CType;
        GetActivator(): Core.IInstanceActivator;
        get Filters(): ((type: System.Reflection.CType<object>) => boolean)[];
        get ConfigurationActions(): ((type: System.Reflection.CType<object>, rb: IRegistrationBuilder<object>) => void)[];
    }
}
declare namespace iberbar.Autofac.Builder {
    class CSimpleActivatorData implements IActivatorData, IConcreteActivatorData {
        private readonly m_activator;
        constructor(activator: Core.IInstanceActivator);
        GetTypes(): (t: System.Reflection.CType) => System.Reflection.CType;
        GetActivator(): Core.IInstanceActivator;
    }
}
declare namespace iberbar.Autofac.Builder {
    class CSingleRegistrationStyle {
        private readonly m_id;
        private m_preserveDefaults;
        get ID(): string;
        set PreserveDefaults(value: boolean);
        get PreserveDefaults(): boolean;
    }
}
declare namespace iberbar.Autofac.Builder {
    interface IActivatorData {
        GetTypes(): (t: System.Reflection.CType) => System.Reflection.CType;
        GetActivator(): Core.IInstanceActivator;
    }
}
declare namespace iberbar.Autofac.Builder {
    interface IConcreteActivatorData {
        GetActivator(): Core.IInstanceActivator;
    }
}
declare namespace iberbar.Autofac.Builder {
    interface IRegistrationBuilder<TLimit extends object> {
        readonly RegisterData: CRegistrationData;
        readonly ActivatorData: IActivatorData;
        readonly RegistrationStyle: any;
        Named<TService extends object>(type: System.Reflection.CType<TService>, name: string): IRegistrationBuilder<TLimit>;
        Keyed<TService extends object>(type: System.Reflection.CType<TService>, key: any): IRegistrationBuilder<TLimit>;
        KeyedMapping<TService extends object>(type: System.Reflection.CType<TService>, servicesKeyMapping: (type: System.Reflection.CType) => any): IRegistrationBuilder<TLimit>;
        As<TService extends object>(type: System.Reflection.CType<TService>): IRegistrationBuilder<TLimit>;
        AsEx(services: Core.CService[]): IRegistrationBuilder<TLimit>;
        AsSelf(): IRegistrationBuilder<TLimit>;
        Where(predicate: (type: System.Reflection.CType) => boolean): IRegistrationBuilder<TLimit>;
        SingleInstance(): IRegistrationBuilder<TLimit>;
        InstancePerDependency(): IRegistrationBuilder<TLimit>;
        InstancePerLifetimeScope(): IRegistrationBuilder<TLimit>;
        InstancePerMatchingLifetimeScope(scopeTag: ULifetimeScopeTagType): IRegistrationBuilder<TLimit>;
        PropertiesAutowired(propertySelector?: Core.IPropertySelector, allowCircularDependencies?: boolean): IRegistrationBuilder<TLimit>;
        WithParameter(parameter: Core.CParameter): IRegistrationBuilder<TLimit>;
        WithParameters(parameters: ReadonlyArray<Core.CParameter>): IRegistrationBuilder<TLimit>;
        WithProperty(parameter: Core.CParameter): IRegistrationBuilder<TLimit>;
        WithProperties(parameters: ReadonlyArray<Core.CParameter>): IRegistrationBuilder<TLimit>;
        OnActivating(callback: Core.UCallbackActivating<TLimit>): IRegistrationBuilder<TLimit>;
        OnActivated(): IRegistrationBuilder<TLimit>;
    }
}
declare namespace iberbar.Autofac.Core {
    class CActivatingEventArgs<T> implements IActivatingEventArgs<T> {
        private m_instance;
        private readonly m_context;
        private readonly m_registration;
        private readonly m_parameters;
        constructor(context: IComponentContext, registration: IComponentRegistration, parameters: ReadonlyArray<CParameter>, instance: T);
        ReplaceInstance(instance: object): void;
        get Context(): IComponentContext;
        get Registration(): IComponentRegistration;
        get Parameters(): ReadonlyArray<CParameter>;
        get Instance(): T;
        set Instance(value: T);
    }
}
declare namespace iberbar.Autofac.Core {
    class CContainer implements IContainer {
        private readonly m_rootLifetimeScope;
        private readonly m_componentRegistry;
        constructor();
        GetTag(): ULifetimeScopeTagType;
        BeginLifetimeScope(tag?: ULifetimeScopeTagType): ILifetimeScope;
        Dispose(): void;
        get ComponentRegistry(): Core.IComponentRegistry;
        ResolveComponent(registration: IComponentRegistration, parameters: CParameter[]): object;
        Resolve<TService extends object>(type: System.Reflection.CType<TService>, ...parameters: CParameter[]): TService;
        ResolveNamed<TService extends object>(type: System.Reflection.CType<TService>, name: string, ...parameters: CParameter[]): TService;
        ResolveKeyed<TService extends object, TKey>(type: System.Reflection.CType<TService>, key: TKey, ...parameters: CParameter[]): TService;
        TryResolveKeyed<TService extends object, TKey>(type: System.Reflection.CType<TService>, key: TKey, ...parameters: CParameter[]): TService;
        GetDisposer(): IDisposer;
    }
}
declare namespace iberbar.Autofac.Core {
    class CDefaultPropertySelector implements IPropertySelector {
        protected m_preserveSetValues: boolean;
        constructor(preserveSetValues?: boolean);
        /**
         * Provides default filtering to determine if property should be injected by rejecting
         * @param propertyInfo
         * @param instance
         */
        InjectProperty(propertyInfo: System.Reflection.CPropertyInfo, instance: object): boolean;
    }
}
declare namespace iberbar.Autofac.Core {
    class CDelegatePropertySelector implements IPropertySelector {
        InjectProperty(propertyInfo: System.Reflection.CPropertyInfo, instance: object): boolean;
    }
}
declare namespace iberbar.Autofac.Core {
    class CDisposer implements IDisposer {
        private m_items;
        AddInstanceForDisposal(instance: System.IDisposable): void;
        Dispose(): void;
    }
}
declare namespace iberbar.Autofac.Core {
    abstract class CService implements System.IEquatable<CService> {
        abstract Equals(other: CService): boolean;
    }
}
declare namespace iberbar.Autofac.Core {
    class CKeyedService extends CService implements IServiceWithType {
        private readonly m_serviceType;
        private readonly m_key;
        constructor(serviceKey: any, serviceType: System.Reflection.CType);
        GetServiceType(): System.Reflection.CType;
        ChangeType(newType: System.Reflection.CType<object>): CService;
        Equals(other: CKeyedService): boolean;
        private CompareKeys;
    }
}
declare namespace iberbar.Autofac.Core {
    class CLifetimeScopeService extends CService {
        constructor();
        Equals(other: CLifetimeScopeService): boolean;
    }
}
declare namespace iberbar.Autofac.Core {
    class CNamedPropertyParameter extends CConstantParameter {
        constructor(name: string, value: object);
    }
}
declare namespace iberbar.Autofac.Core {
    class CResolvedParameter extends CParameter {
        CanSupplyValue(pi: System.Reflection.CParameterInfo, context: IComponentContext): {
            ret: boolean;
            valueProvider?: () => object;
        };
    }
}
declare namespace iberbar.Autofac.Core {
    class CServiceEqualityComparer implements System.Collections.Generic.IEqualityComparer<CService> {
        Equals(a: CService, b: CService): boolean;
    }
}
declare namespace iberbar.Autofac.Core {
    class CTypedService extends CService implements IServiceWithType {
        private readonly m_serviceType;
        constructor(serviceType: System.Reflection.CType);
        GetServiceType(): System.Reflection.CType;
        ChangeType(newType: System.Reflection.CType): CService;
        Equals(other: CTypedService): boolean;
    }
}
declare namespace iberbar.Autofac.Core {
    function GenID(): string;
}
declare namespace iberbar.Autofac.Core {
    interface IActivatingEventArgs<T> {
        /**
         * Gets the context in which the activation occurred.
         */
        readonly Context: IComponentContext;
        /**
         * Gets the component providing the instance.
         */
        readonly Registration: IComponentRegistration;
        /**
         * Gets the instance that will be used to satisfy the request.
         */
        readonly Instance: T;
        /**
         * The instance can be replaced if needed, e.g. by an interface proxy.
         * @param instance The object to use instead of the activated instance.
         */
        ReplaceInstance(instance: object): void;
        /**
         * Gets the parameters supplied to the activator.
         */
        readonly Parameters: ReadonlyArray<CParameter>;
    }
}
declare namespace iberbar.Autofac.Core {
    interface IComponentLifetime {
        FindScope(mostNestedVisibleScope: ISharingLifetimeScope): ISharingLifetimeScope;
    }
}
declare namespace iberbar.Autofac.Core {
    interface IComponentRegistration extends System.IDisposable {
        readonly Activator: IInstanceActivator;
        readonly Lifetime: IComponentLifetime;
        readonly Sharing: UInstanceSharing;
        readonly ID: string;
        readonly Services: ReadonlyArray<CService>;
        readonly Metadta: any;
        readonly Target: IComponentRegistration;
        readonly Preparing: any;
        RaisePreparing(context: IComponentContext, parameters: Array<any>): void;
        readonly Activating: System.TCallbackArray<(sender: any, e: Core.IActivatingEventArgs<object>) => void>;
        RaiseActivating(context: IComponentContext, parameters: ReadonlyArray<CParameter>, instance: object): object;
        readonly Activated: any;
        RaiseActivated(context: IComponentContext, parameters: ReadonlyArray<CParameter>, instance: object): void;
    }
}
declare namespace iberbar.Autofac.Core {
    interface IComponentRegistry extends System.IDisposable {
        GetProperties(): {
            [key: string]: object;
        };
        GetRegistration(service: CService): IComponentRegistration;
        IsRegistered(service: CService): boolean;
        Register(registration: Core.IComponentRegistration, preserveDefaults?: boolean): void;
        GetRegistrations(): Array<IComponentRegistration>;
        GetRegistrationsFor(service: CService): Array<IComponentRegistration>;
        AddRegistrationSource(source: IRegistrationSource): void;
        GetRegistrationSources(): Array<IRegistrationSource>;
        HasLocalComponents(): boolean;
    }
}
declare namespace iberbar.Autofac.Core {
    interface IDisposer extends System.IDisposable {
        AddInstanceForDisposal(instance: System.IDisposable): void;
    }
}
declare namespace iberbar.Autofac.Core {
    interface IInstanceActivator extends System.IDisposable {
        ActivateInstance(context: IComponentContext, parameters?: CParameter[]): object;
        GetLimitType(): System.Reflection.CType;
    }
}
declare namespace iberbar.Autofac.Core {
    interface IPropertySelector {
        InjectProperty(propertyInfo: System.Reflection.CPropertyInfo, instance: object): boolean;
    }
}
declare namespace iberbar.Autofac.Core {
    interface IRegistrationSource {
    }
}
declare namespace iberbar.Autofac.Core {
    interface IServiceWithType {
        GetServiceType(): System.Reflection.CType;
        ChangeType(newType: System.Reflection.CType): CService;
    }
}
declare namespace iberbar.Autofac.Core {
    interface ISharingLifetimeScope extends ILifetimeScope {
        GetParentLifetimeScope(): ISharingLifetimeScope;
        GetRootLifetimeScope(): ISharingLifetimeScope;
        GetOrCreateAndShare(id: string, creator: System.TCallback<() => object>): object;
    }
}
declare namespace iberbar.Autofac.Core {
    type UCallbackActivatingFunction<T> = (e: Core.IActivatingEventArgs<T>) => void;
    type UCallbackActivating<T> = System.TCallback<UCallbackActivatingFunction<T>> | UCallbackActivatingFunction<T>;
}
declare namespace iberbar.Autofac.Core {
    enum UInstanceSharing {
        None = 0,
        Shared = 1
    }
}
declare namespace iberbar.Autofac.Core.Lifetime {
    class CCurrentScopeLifetime implements IComponentLifetime {
        FindScope(mostNestedVisibleScope: ISharingLifetimeScope): ISharingLifetimeScope;
    }
}
declare namespace iberbar.Autofac.Core.Lifetime {
    class CLifetimeScope implements ISharingLifetimeScope {
        private readonly m_componentRegistry;
        private readonly m_lifetimeScopeRoot;
        private readonly m_lifetimeScopeParent;
        private readonly m_tag;
        private readonly m_disposer;
        private m_sharedInstances;
        static readonly SelfRegistrationId: string;
        constructor(componentRegistry: IComponentRegistry, lifetimeScopeParent: CLifetimeScope, tag: ULifetimeScopeTagType);
        private static RootTag;
        private static MakeAnonymousTag;
        GetParentLifetimeScope(): ISharingLifetimeScope;
        GetRootLifetimeScope(): ISharingLifetimeScope;
        GetOrCreateAndShare(id: string, creator: System.TCallback<() => object>): object;
        BeginLifetimeScope(tag?: ULifetimeScopeTagType): ILifetimeScope;
        get ComponentRegistry(): IComponentRegistry;
        ResolveComponent(registration: IComponentRegistration, parameters: CParameter[]): object;
        Resolve<TService extends object>(type: System.Reflection.CType<TService>, ...parameters: CParameter[]): TService;
        ResolveNamed<TService extends object>(type: System.Reflection.CType<TService>, name: string, ...parameters: CParameter[]): TService;
        ResolveKeyed<TService extends object, TKey>(type: System.Reflection.CType<TService>, key: TKey, ...parameters: CParameter[]): TService;
        TryResolveKeyed<TService extends object, TKey>(type: System.Reflection.CType<TService>, key: TKey, ...parameters: CParameter[]): TService;
        private TryResolveService;
        Dispose(): void;
        GetTag(): ULifetimeScopeTagType;
        private CheckTagIsUnique;
        private CheckNotDisposed;
        GetDisposer(): IDisposer;
    }
}
declare namespace iberbar.Autofac.Core.Lifetime {
    class CMatchingScopeLifetime implements IComponentLifetime {
        private readonly m_tagToMatch;
        constructor(...scopeTag: ULifetimeScopeTagType[]);
        FindScope(mostNestedVisibleScope: ISharingLifetimeScope): ISharingLifetimeScope;
    }
}
declare namespace iberbar.Autofac.Core.Lifetime {
    class CRootScopeLifetime implements IComponentLifetime {
        FindScope(mostNestedVisibleScope: ISharingLifetimeScope): ISharingLifetimeScope;
    }
}
declare namespace iberbar.Autofac.Core.Registration {
    class CComponentRegistration implements IComponentRegistration {
        private m_id;
        private m_activator;
        private m_lifetime;
        private m_sharing;
        private m_ownership;
        private m_services;
        private m_metadata;
        private m_target;
        private readonly m_activatingHandlers;
        constructor(id: string, activator: IInstanceActivator, lifetime: IComponentLifetime, sharing: UInstanceSharing, ownership: any, services: ReadonlyArray<CService>, metadata: {
            [key: string]: object;
        }, target?: IComponentRegistration);
        get ID(): string;
        get Activator(): IInstanceActivator;
        get Lifetime(): IComponentLifetime;
        get Sharing(): UInstanceSharing;
        get Services(): ReadonlyArray<CService>;
        get Metadta(): {
            [key: string]: object;
        };
        get Target(): IComponentRegistration;
        get Preparing(): void;
        RaisePreparing(context: IComponentContext, parameters: Array<any>): void;
        get Activating(): System.TCallbackArray<(sender: any, e: Core.IActivatingEventArgs<object>) => void>;
        RaiseActivating(context: IComponentContext, parameters: ReadonlyArray<CParameter>, instance: object): object;
        get Activated(): void;
        RaiseActivated(context: IComponentContext, parameters: ReadonlyArray<CParameter>, instance: object): void;
        Dispose(): void;
    }
}
declare namespace iberbar.Autofac.Core.Registration {
    class CComponentRegistry implements IComponentRegistry {
        private readonly m_registrations;
        private readonly m_serviceInfo;
        constructor();
        GetProperties(): {
            [key: string]: object;
        };
        GetRegistration(service: CService): IComponentRegistration;
        IsRegistered(service: CService): boolean;
        Register(registration: IComponentRegistration, preserveDefaults?: boolean): void;
        GetRegistrations(): Array<IComponentRegistration>;
        GetRegistrationsFor(service: CService): Array<IComponentRegistration>;
        AddRegistrationSource(source: IRegistrationSource): void;
        GetRegistrationSources(): Array<IRegistrationSource>;
        HasLocalComponents(): boolean;
        Dispose(): void;
        private AddRegistration;
        private GetServiceInfo;
    }
}
declare namespace iberbar.Autofac.Core.Registration {
    class CServiceRegistrationInfo {
        private readonly m_service;
        private readonly m_defaultImplementations;
        private m_preserveDefaultImplementations;
        private m_sourceImplementations;
        constructor(service: CService);
        AddImplementation(registration: IComponentRegistration, preserveDefaults: boolean, originatedFromSource: boolean): void;
        GetRegistration(): IComponentRegistration;
    }
}
declare namespace iberbar.Autofac.Core.Resolving {
    class CInstanceLookup implements IComponentContext, IInstanceLookup {
        private readonly m_registration;
        private readonly m_context;
        private readonly m_activationScope;
        private readonly m_parameters;
        private m_executed;
        private m_newInstance;
        constructor(registration: IComponentRegistration, context: IResolveOperation, mostNestedVisibleScope: ISharingLifetimeScope, parameters: CParameter[]);
        GetComponentRegistration(): IComponentRegistration;
        GetActivationScope(): ILifetimeScope;
        GetParameters(): CParameter[];
        get ComponentRegistry(): IComponentRegistry;
        ResolveComponent(registration: IComponentRegistration, parameters: CParameter[]): object;
        Execute(): object;
        private Activate;
    }
}
declare namespace iberbar.Autofac.Core.Resolving {
    class CResolveOperation implements IComponentContext, IResolveOperation {
        private readonly m_mostNestedLifetimeScope;
        constructor(mostNestedLifetimeScope: ISharingLifetimeScope);
        get ComponentRegistry(): IComponentRegistry;
        ResolveComponent(registration: IComponentRegistration, parameters: CParameter[]): object;
        Execute(registration: IComponentRegistration, parameters: CParameter[]): object;
        GetOrCreateInstance(currentLifetimeScope: ISharingLifetimeScope, registration: IComponentRegistration, parameters: CParameter[]): object;
        TryResolveService(service: CService, parameters: CParameter[]): {
            succeed: boolean;
            instance?: object;
        };
    }
}
declare namespace iberbar.Autofac.Core.Resolving {
    interface IInstanceLookup {
        GetComponentRegistration(): IComponentRegistration;
        GetActivationScope(): ILifetimeScope;
        GetParameters(): CParameter[];
    }
}
declare namespace iberbar.Autofac.Core.Resolving {
    interface IResolutionExtension {
        /**
         * 获取实例
         * @param type 依赖类型
         */
        Resolve<TService extends object>(type: System.Reflection.CType<TService>, ...parameters: CParameter[]): TService;
        /**
         * 获取实例
         * @param type 依赖类型
         * @param name 键名
         */
        ResolveNamed<TService extends object>(type: System.Reflection.CType<TService>, name: string, ...parameters: CParameter[]): TService;
        /**
         * 获取实例
         * @param type 依赖类型
         * @param key 键名
         */
        ResolveKeyed<TService extends object, TKey>(type: System.Reflection.CType<TService>, key: TKey, ...parameters: CParameter[]): TService;
        /**
         * 获取实例
         * @param type 依赖类型
         * @param key 键名
         */
        TryResolveKeyed<TService extends object, TKey>(type: System.Reflection.CType<TService>, key: TKey, ...parameters: CParameter[]): TService;
    }
}
declare namespace iberbar.Autofac.Core.Resolving {
    interface IResolveOperation {
        GetOrCreateInstance(currentLifetimeScope: ISharingLifetimeScope, registration: IComponentRegistration, parameters: CParameter[]): object;
    }
}
declare namespace iberbar.Autofac.Features.Scanning {
    class CScanningRegistrationExtensions {
        static RegisterAssemblyTypes(containerBuilder: CContainerBuilder, assemblies: ReadonlyArray<System.Reflection.CAssembly>): Builder.IRegistrationBuilder<object>;
        static RegisterTypes(containerBuilder: CContainerBuilder, types: ReadonlyArray<System.Reflection.CType>): Builder.IRegistrationBuilder<object>;
        private static ScanAssemblies;
        private static ScanTypes;
        static As(registrationBuilder: Builder.IRegistrationBuilder<object>, serviceMapping: (t: System.Reflection.CType) => Core.CService[]): Builder.IRegistrationBuilder<object>;
    }
}

declare namespace iberbar.Event {
    class CEvent {
    }
    type TEventConstructor<TEvent extends CEvent> = System.Reflection.TypeConstructor<TEvent>;
}
declare namespace iberbar.Event {
    abstract class IEventBus {
        abstract Listen<TEvent extends CEvent>(eventType: System.Reflection.CType<TEvent>, listener: System.TCallbackOrFunction<UEventBusListenerFunction<TEvent>>, once?: boolean): void;
        abstract Send<TEvent extends CEvent>(eventData: TEvent): void;
    }
    type UEventBusListenerFunction<TEvent extends CEvent> = (eventData: TEvent) => void;
    type IEventBusListener<TEvent extends CEvent> = System.TCallback<UEventBusListenerFunction<TEvent>>;
}
declare namespace iberbar.Event {
    class IStateMachine {
        AddState(state: IStateNode): void;
        GetState<TStateNode extends IStateNode>(stateType: System.Reflection.CType<TStateNode>): TStateNode;
    }
}
declare namespace iberbar.Event {
    class IStateNode {
        Initialize(): void;
    }
}
declare namespace iberbar.Event.Implements {
    type UEventDelegate = {
        listener: IEventBusListener<CEvent>;
        kick: number;
    };
    type UEventDelegateList = Array<UEventDelegate>;
    export class CEventBus extends IEventBus {
        protected m_events: WeakMap<System.Reflection.TypePrototype<CEvent>, UEventDelegateList>;
        Listen<TEvent extends CEvent>(eventType: System.Reflection.CType<TEvent>, listener: System.TCallbackOrFunction<UEventBusListenerFunction<TEvent>>, once?: boolean): void;
        Send<TEvent extends CEvent>(eventData: TEvent): void;
    }
    export {};
}
declare namespace iberbar.Event.Implements {
    class CStateMachine extends IStateMachine {
        protected m_state: WeakMap<System.Reflection.TypePrototype<IStateNode>, IStateNode>;
        AddState(state: IStateNode): void;
        GetState<TStateNode extends IStateNode>(stateType: System.Reflection.CType<TStateNode>): TStateNode;
    }
}



export { TypeOf, TypeOfDelay, GetObjectType, DeclaringType, __Callback };


export default iberbar;