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
        abstract readonly MemberType: UMemberTypes;
        readonly Name: UMemberSymbol;
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
        readonly DeclaringType: CType<object>;
        GetJsPrototype<TExtra extends {} = {}>(): TypePrototype<object> & TExtra;
        private readonly MetadataCollection;
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
        abstract readonly Descriptor: PropertyDescriptor;
    }
}
declare namespace iberbar.System.Reflection {
    abstract class CConstructorInfo extends CMethodBase {
        readonly JsConstructor: TypeConstructor<object>;
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
        readonly ValidOn: number;
        readonly AllowMultiple: boolean;
        readonly Inherited: boolean;
        constructor(validOn: number, allowMultiple?: boolean, inherit?: boolean);
        static DefaultUsage: CAttributeUsageAttribute;
    }
}
declare namespace iberbar.System.Reflection {
    abstract class CFieldInfo extends CMemberInfo {
        readonly MemberType: UMemberTypes;
        SetValue(obj: object, value: any): void;
        GetValue(obj: object): any;
        GetMetadataKey(): Metadata.Core.CMetadataKey;
        abstract readonly FieldType: CType;
    }
}
declare namespace iberbar.System.Reflection {
    abstract class CMethodInfo extends CMethodBase {
        Invoke(obj: any, ...args: any[]): any;
        GetMetadataKey(): Metadata.Core.CMetadataKey;
        protected abstract readonly Method: Function;
    }
}
declare namespace iberbar.System.Reflection {
    abstract class CPropertyInfo extends CMemberInfo {
        /**
         * Gets the type of this property
         *
         * 属性的类型
         */
        abstract readonly PropertyType: CType;
        abstract SetValue(obj: any, value: any): void;
        abstract GetValue(obj: any): any;
        GetMetadataKey(): Metadata.Core.CMetadataKey;
        abstract readonly CanWrite: boolean;
        abstract readonly CanRead: boolean;
        abstract GetSetMethod(): CMethodInfo;
        abstract GetGetMethod(): CMethodInfo;
    }
}
declare namespace iberbar.System.Reflection {
    abstract class CParameterInfo implements ICustomAttributeProvider {
        protected constructor();
        abstract readonly ParameterIndex: number;
        abstract readonly Name: string;
        abstract readonly ParameterType: CType;
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
        abstract readonly BaseType: CType;
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
        readonly DeclaringType: CType;
        readonly GenericTypes: Array<CType>;
        readonly IsGenericType: boolean;
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
        readonly Text: string;
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
    firstOrDefault(predicate?: (e: T, index: number) => boolean): T;
    where(predicate: (e: T, index: number) => boolean): Array<T>;
    RemoveAt(index: number): Array<T>;
    Remove<T>(element: T): Array<T>;
    RemoveWhere<T>(predicate: (e: T, index: number) => boolean): Array<T>;
}
declare interface ReadonlyArray<T> {
    firstOrDefault(predicate?: (e: T, index: number) => boolean): T;
    where(predicate: (e: T, index: number) => boolean): Array<T>;
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
        RegisterAssemblyTypes(...assemblies: ReadonlyArray<System.Reflection.CAssembly>): Builder.IRegistrationBuilder<object>;
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
        readonly Value: object;
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
        readonly Position: number;
    }
}
declare namespace iberbar.Autofac {
    class CTypedParameter extends Core.CConstantParameter {
        private readonly m_type;
        constructor(type: System.Reflection.CType, value: object);
        readonly Type: System.Reflection.CType;
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
        readonly CanInstantiate: boolean;
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
        readonly ImplementationType: System.Reflection.CType;
        readonly ConfiguredParameters: Core.CParameter[];
        readonly ConfiguredProperties: Core.CParameter[];
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
        readonly Callback: System.TCallback<(t: Core.IComponentRegistry) => void>;
    }
}
declare namespace iberbar.Autofac.Builder {
    class CRegistrationBuilder<TLimit extends object> implements IRegistrationBuilder<TLimit> {
        protected m_registrationData: CRegistrationData;
        protected m_activatorData: IActivatorData;
        protected m_registrationStyle: any;
        constructor(service: Core.CService, activatorData: IActivatorData, style: any);
        readonly RegisterData: CRegistrationData;
        readonly ActivatorData: IActivatorData;
        GetActivatorDataEx<T extends object>(t: System.Reflection.TypeConstructor<T>): T;
        readonly RegistrationStyle: any;
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
        Lifetime: Core.IComponentLifetime;
        Sharing: Core.UInstanceSharing;
        DeferredCallback: CDeferredCallback;
        readonly ActivatingHandlers: System.TCallbackArray<(sender: any, e: Core.CActivatingEventArgs<object>) => void>;
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
        readonly Filters: ((type: System.Reflection.CType<object>) => boolean)[];
        readonly ConfigurationActions: ((type: System.Reflection.CType<object>, rb: IRegistrationBuilder<object>) => void)[];
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
        readonly ID: string;
        PreserveDefaults: boolean;
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
        readonly Context: IComponentContext;
        readonly Registration: IComponentRegistration;
        readonly Parameters: ReadonlyArray<CParameter>;
        Instance: T;
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
        readonly ComponentRegistry: Core.IComponentRegistry;
        ResolveComponent(registration: IComponentRegistration, parameters: CParameter[]): object;
        Resolve<TService extends object>(type: System.Reflection.CType<TService>, ...parameters: CParameter[]): TService;
        ResolveNamed<TService extends object>(type: System.Reflection.CType<TService>, name: string, ...parameters: CParameter[]): TService;
        ResolveKeyed<TService extends object, TKey>(type: System.Reflection.CType<TService>, key: TKey, ...parameters: CParameter[]): TService;
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
        readonly ComponentRegistry: IComponentRegistry;
        ResolveComponent(registration: IComponentRegistration, parameters: CParameter[]): object;
        Resolve<TService extends object>(type: System.Reflection.CType<TService>, ...parameters: CParameter[]): TService;
        ResolveNamed<TService extends object>(type: System.Reflection.CType<TService>, name: string, ...parameters: CParameter[]): TService;
        ResolveKeyed<TService extends object, TKey>(type: System.Reflection.CType<TService>, key: TKey, ...parameters: CParameter[]): TService;
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
        readonly ID: string;
        readonly Activator: IInstanceActivator;
        readonly Lifetime: IComponentLifetime;
        readonly Sharing: UInstanceSharing;
        readonly Services: ReadonlyArray<CService>;
        readonly Metadta: {
            [key: string]: object;
        };
        readonly Target: IComponentRegistration;
        readonly Preparing: void;
        RaisePreparing(context: IComponentContext, parameters: Array<any>): void;
        readonly Activating: System.TCallbackArray<(sender: any, e: Core.IActivatingEventArgs<object>) => void>;
        RaiseActivating(context: IComponentContext, parameters: ReadonlyArray<CParameter>, instance: object): object;
        readonly Activated: void;
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
        readonly ComponentRegistry: IComponentRegistry;
        ResolveComponent(registration: IComponentRegistration, parameters: CParameter[]): object;
        Execute(): object;
        private Activate;
    }
}
declare namespace iberbar.Autofac.Core.Resolving {
    class CResolveOperation implements IComponentContext, IResolveOperation {
        private readonly m_mostNestedLifetimeScope;
        constructor(mostNestedLifetimeScope: ISharingLifetimeScope);
        readonly ComponentRegistry: IComponentRegistry;
        ResolveComponent(registration: IComponentRegistration, parameters: CParameter[]): object;
        Execute(registration: IComponentRegistration, parameters: CParameter[]): object;
        GetOrCreateInstance(currentLifetimeScope: ISharingLifetimeScope, registration: IComponentRegistration, parameters: CParameter[]): object;
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

declare namespace iberbar.MVC.Attributes {
    class CAddControllerAttribute extends System.CAttribute {
        protected m_controllerType: System.Reflection.IDelayType;
        constructor(controllerType: System.Reflection.IDelayType);
        readonly ControllerType: System.Reflection.CType;
    }
}
declare namespace iberbar.MVC.Attributes {
    class CAddViewComponentAttribute extends System.CAttribute {
        private readonly m_componentType;
        constructor(componentType: System.Reflection.IDelayType);
        readonly ComponentType: System.Reflection.CType;
    }
}
declare namespace iberbar.MVC.Attributes {
    class CDisableViewComponentAttribute extends System.CAttribute {
        private readonly m_componentType;
        constructor(componentType: System.Reflection.IDelayType);
        readonly ComponentType: System.Reflection.CType;
    }
}
declare namespace iberbar.MVC.Attributes {
    class CViewModelAttribute extends System.CAttribute {
    }
}
declare namespace iberbar.MVC {
    namespace Attributes {
        class SetActionSummaryAttribute extends System.CAttribute {
            protected m_name: string;
            protected m_summary: string;
            constructor(name: string, summary: string);
            readonly Name: string;
            readonly Summary: string;
        }
    }
}
declare namespace iberbar.MVC {
    namespace Attributes {
        class CSetControllerAttribute extends System.CAttribute {
            protected m_controllerType: System.Reflection.IDelayType;
            constructor(controllerType: System.Reflection.IDelayType);
            readonly ControllerType: System.Reflection.CType;
        }
    }
    /**
     * **特性**
     *
     * + 标记视图所使用的控制器类型
     * + 修饰：类
     *
     * @param controllerType 控制器类型
     */
    function SetController(controllerType: System.Reflection.IDelayType): System.UDecoratorFunctionType_ForClass;
}
declare namespace iberbar.MVC.Registration {
    class CSingleInstanceViewAttribute extends System.CAttribute {
    }
    function SingleInstanceView(): System.UDecoratorFunctionType_ForClass;
}
declare namespace iberbar.MVC.Core {
    abstract class CActionBinder {
        abstract BindActions(view: CView, handlerType: object): IActionBinderResult;
    }
}
declare namespace iberbar.MVC.Core {
    class CComponentBindActions implements IComponentInit, System.IDisposable {
        private m_binderResult;
        InitView(view: CView): void;
        ReInitView(view: CView): void;
        Dispose(): void;
    }
}
declare namespace iberbar.MVC.Core {
    class CComponentBindModels implements IComponentInit {
        InitView(view: CView): void;
        ReInitView(view: CView): void;
    }
}
declare namespace iberbar.MVC.Core {
    abstract class CComponentKernel<T extends (...args: any) => any> implements System.IDisposable {
        abstract Create(view: CView, ...args: Parameters<T>): ReturnType<T>;
        abstract ReCreate(view: CView): void;
        abstract Show(onshow: System.TCallback<() => void>): void;
        abstract Hide(onhide: System.TCallback<() => void>): void;
        abstract IsShow(): boolean;
        abstract Dispose(): void;
    }
}
declare namespace iberbar.MVC.Core {
    class CInitComponent_ViewController implements IComponentInit, System.IDisposable {
        private m_binderResults;
        InitView(view: CView): void;
        ReInitView(view: CView): void;
        Dispose(): void;
    }
}
declare namespace iberbar.MVC.Core {
    class CDefaultMapper implements CMapper, System.Collections.Generic.IEqualityComparer<System.Reflection.CType> {
        private m_componentKernelType;
        private m_componentTypes;
        private m_componentTypesForViews;
        constructor(componentKernelType: System.Reflection.CType<Core.CComponentKernel<any>>, componentTypes: Array<System.Reflection.CType>);
        GetComponentKernelType(): System.Reflection.CType<Core.CComponentKernel<any>>;
        GetComponentTypes(viewType: System.Reflection.CType<CView>): Array<System.Reflection.CType>;
        Equals(a: System.Reflection.CType, b: System.Reflection.CType): boolean;
    }
}
declare namespace iberbar.MVC.Core {
    abstract class CViewModelBinder {
        /**
         * 绑定视图模型
         * @param view 操作绑定组件的视图实例
         * @param model 绑定对象
         */
        abstract BindModel(view: CView, model: object): void;
    }
}
declare namespace iberbar.MVC.Core {
    interface IActionBinderResult extends System.IDisposable {
    }
}
declare namespace iberbar.MVC.Core {
    interface IComponentInit {
        InitView(view: CView): void;
        ReInitView(view: CView): void;
    }
}
declare namespace iberbar.MVC.Core {
    abstract class CMapper {
        abstract GetComponentKernelType(): System.Reflection.CType<Core.CComponentKernel<any>>;
        abstract GetComponentTypes(viewType: System.Reflection.CType<CView>): Array<System.Reflection.CType>;
    }
}
declare namespace iberbar.MVC {
    function AddController(controllerType: System.Reflection.IDelayType): System.UDecoratorFunctionType_ForClass;
}
declare namespace iberbar.MVC {
    function AddViewComponent(componentType: System.Reflection.IDelayType): System.UDecoratorFunctionType_ForClass;
}
declare namespace iberbar.MVC {
    class CBuilder {
        private m_cb;
        private m_componentKernelType;
        private m_componentTypes;
        private m_componentTypesCommon;
        constructor(cb: Autofac.CContainerBuilder);
        /**
         * 设置内核组件
         * @param componentKernelType
         */
        SetComponentKernel(componentKernelType: System.Reflection.CType<Core.CComponentKernel<any>>): void;
        /**
         * 添加通用的组件
         * @param componentType
         */
        AddComponent(componentType: System.Reflection.CType, common?: boolean): void;
        /**
         * 注册模型绑定组件
         * @param modelBinderType 模型绑定器的类型
         * @param modelComponentType (可选)组件类型，默认 iberbar.MVC.Core.CComponentBindModels
         */
        AddComponentBindModels(modelBinderType: System.Reflection.CType<Core.CViewModelBinder>, modelComponentType?: System.Reflection.CType<object>): void;
        /**
         * 注册事件绑定组件
         * @param actionBinderType
         * @param actionComponentType
         * @param controllerComponentType
         */
        AddComponentBindActions(actionBinderType: System.Reflection.CType<Core.CActionBinder>, actionComponentType?: System.Reflection.CType<object>, controllerComponentType?: System.Reflection.CType<object>): void;
        /**
         * 注册视图类型，搜索其使用的控制器类型并注册
         * @param viewType 视图类型
         */
        RegisterView<T extends CView>(viewType: System.Reflection.CType<T>): Autofac.Builder.IRegistrationBuilder<T>;
        Build(): void;
    }
}
declare namespace iberbar.MVC {
    abstract class CView implements System.IDisposable {
        private m_id;
        private m_componentKernel;
        private m_components;
        /**
         * autofac注入
         */
        private m_lifetimeScope;
        LifetimeScope: iberbar.Autofac.ILifetimeScope;
        constructor();
        ID: string;
        Create(...args: any[]): any;
        ReCreate(): any;
        protected OnCreated(): void;
        protected InitComponentKernel(...args: any[]): any;
        protected ResolveComponents(): void;
        protected InitComponents(): void;
        GetComponentKernel<T extends (...args: any[]) => any>(): Core.CComponentKernel<T>;
        GetComponent<T extends object>(type: System.Reflection.CType<T>): T;
        Show(): void;
        Hide(): void;
        IsShow(): boolean;
        GetMapper(): Core.CMapper;
        Dispose(): void;
        protected OnShow(): void;
        protected OnHide(): void;
    }
}
declare namespace iberbar.MVC {
    function DisableViewComponent(componentType: System.Reflection.IDelayType): System.UDecoratorFunctionType_ForClass;
}
declare namespace iberbar.MVC {
    function ViewModel(): System.UDecoratorFunctionType_ForField;
}

/// <reference types="jquery" />
declare namespace iberbar.MVC.KernelJquery.Attributes {
    class CDependOnViewAttribute extends System.CAttribute {
        protected m_selectorText: string;
        protected m_fromBody: boolean;
        protected m_createMethod: UViewCreateStyle;
        protected m_viewType: System.Reflection.CType<CView>;
        constructor(viewType: System.Reflection.CType<CView>, selectorText: string);
        readonly ViewType: System.Reflection.CType<CView>;
        readonly SelectorText: string;
        FromBody: boolean;
        CreateMethod: UViewCreateStyle;
    }
}
declare namespace iberbar.MVC.KernelJquery.Attributes {
    class COverScrollAttribute extends System.CAttribute {
        protected m_selectorText: string;
        constructor(selectorText: string);
        readonly SelectorText: string;
    }
}
declare namespace iberbar.MVC.KernelJquery.Attributes {
    class CSetActionAttribute extends System.CAttribute {
        protected m_event: string;
        protected m_selectorText: string;
        protected m_fromBody: boolean;
        constructor(event: string, selectorText: string, fromBody: boolean);
        readonly Event: string;
        readonly SelectorText: string;
        readonly FromBody: boolean;
    }
}
declare namespace iberbar.MVC.KernelJquery.Attributes {
    class CTriggerElementAttribute extends System.CAttribute {
    }
}
declare namespace iberbar.MVC.KernelJquery.Attributes {
    class CTriggerEventAttribute extends System.CAttribute {
    }
}
declare namespace iberbar.MVC.KernelJquery.Attributes {
    class CTriggerViewAttribute extends System.CAttribute {
    }
}
declare namespace iberbar.MVC.KernelJquery.Attributes {
    class CWatchOverScrollAttribute extends System.CAttribute {
    }
}
declare namespace iberbar.MVC.KernelJquery {
    namespace Attributes {
        class FromElementAttribute extends System.CAttribute {
            protected m_selectorText: string;
            protected m_fromBody: boolean;
            constructor(selectorText: string, fromBody: boolean);
            readonly SelectorText: string;
            readonly FromBody: boolean;
        }
    }
    /**
     * **(特性)**
     *
     * + 获取JQuery元素，内部会调用 System.Reflection.Enumerable 装饰器
     * + 修饰：字段
     *
     * @param selectorText JQuery选择器
     * @param fromBody (可选)是否从Body开始查找选择
     */
    function FromElement(selectorText: string, fromBody?: boolean): System.UDecoratorFunctionType_ForField;
}
declare namespace iberbar.MVC.KernelJquery {
    namespace Attributes {
        class FromViewAttribute extends System.CAttribute {
            constructor();
        }
    }
    function FromView(): System.UDecoratorFunctionType_ForField;
}
declare namespace iberbar.MVC.KernelJquery.Components {
    class CActionBinder implements Core.CActionBinder {
        BindActions(view: CView, handlerType: System.Reflection.CType): Core.IActionBinderResult;
        protected ReBindActionsForType(view: CView, type: System.Reflection.CType): void;
        protected InvokeControllerMethod(view: CView, type: System.Reflection.CType, elementEvent: JQuery, jqEvent: JQuery.Event, methodInfo: System.Reflection.CMethodInfo): boolean;
    }
}
declare namespace iberbar.MVC.KernelJquery.Components {
    class CActionBinderResult implements Core.IActionBinderResult {
        Dispose(): void;
    }
}
declare namespace iberbar.MVC.KernelJquery.Components {
    class CComponentDependOnViews implements Core.IComponentInit {
        private m_viewsDependOn;
        InitView(view: CView): void;
        ReInitView(view: CView): void;
        readonly Views: any;
    }
    namespace CComponentDependOnViews {
        type InitResult = Array<{
            viewType: System.Reflection.CType<CView>;
            viewInstance: CView;
        }>;
    }
}
declare namespace iberbar.MVC.KernelJquery.Components {
    class CComponentFadeIn {
        private m_duration;
        Duration: JQuery.Duration;
    }
}
declare namespace iberbar.MVC.KernelJquery.Components {
    class CComponentFadeOut {
        private m_duration;
        Duration: JQuery.Duration;
    }
}
declare namespace iberbar.MVC.KernelJquery.Components {
    function AllocateID(): string;
    class CComponentKernelJQuery extends MVC.Core.CComponentKernel<IViewCreator> {
        private m_uniqueId;
        private m_elementRoot;
        private m_componentFadeIn;
        private m_componentFadeOut;
        Create(view: CView, element: JQuery, method: UViewCreateStyle): void;
        ReCreate(view: CView): void;
        readonly ElementRoot: JQuery;
        Show(onshow: System.TCallback<() => void>): void;
        Hide(onhide: System.TCallback<() => void>): void;
        IsShow(): boolean;
        Dispose(): void;
    }
}
declare namespace iberbar.MVC.KernelJquery.Components {
    class CComponentOverScroll implements Core.IComponentInit {
        InitView(view: CView): void;
        ReInitView(view: CView): void;
        private FindWatchMethod;
        private SetOverScroll;
    }
}
declare namespace iberbar.MVC.KernelJquery.Components {
    class CViewModelBinder extends MVC.Core.CViewModelBinder {
        BindModel(view: CView, model: object): void;
    }
}
declare namespace iberbar.MVC.KernelJquery {
    function AddViewComponentOverScroll(): ClassDecorator;
}
declare namespace iberbar.MVC.KernelJquery {
    function DependOnView(viewType: System.Reflection.CType<CView>, selectorText: string, options?: {
        fromBody?: boolean;
        createMethod?: UViewCreateStyle;
    }): System.UDecoratorFunctionType_ForClass;
}
declare namespace iberbar.MVC {
    interface CBuilder {
        SetComponentKernelJquery(): void;
        /**
         * 注册JQuery模型绑定组件
         * @param modelComponentType (可选)组件类型，默认 iberbar.MVC.Core.CComponentBindModels
         */
        AddComponentBindModelsJquery(modelComponentType?: System.Reflection.CType<object>): void;
        /**
         * 注册JQuery事件绑定组件
         * @param actionComponentType
         * @param controllerComponentType
         */
        AddComponentBindActionsJquery(actionComponentType?: System.Reflection.CType<object>, controllerComponentType?: System.Reflection.CType<object>): void;
        /**
         * 注册JQuery视图依赖组件，必须放在AddComponentBindModelsJQuery和AddComponentBindActionsJQuery前面
         */
        AddComponentDependOnView(): void;
    }
}
declare namespace iberbar.MVC {
    interface CView {
        Create(...args: Parameters<KernelJquery.IViewCreator>): ReturnType<KernelJquery.IViewCreator>;
        GetElementRoot(): JQuery;
        ReturnHTML(): string;
        ReturnClasses(): Array<string>;
        GetComponentKernelJquery(): KernelJquery.Components.CComponentKernelJQuery;
        SetFadeIn(duration: JQuery.Duration): void;
        SetFadeOut(duration: JQuery.Duration): void;
    }
}
declare namespace iberbar.MVC.KernelJquery {
    interface IViewCreator {
        (element: JQuery, method: UViewCreateStyle): void;
    }
}
declare namespace iberbar.MVC.KernelJquery {
    function OverScroll(selectorText: string): System.UDecoratorFunctionType_ForClass;
}
declare namespace iberbar.MVC.KernelJquery {
    const uActionName_FocusIn = "focusin";
    const uActionName_FocusOut = "focusout";
    const uActionName_MouseOver = "mouseover";
    const uActionName_MouseOut = "mouseout";
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
    function SetAction(event: string, selectorText: string, fromBody?: boolean): System.UDecoratorFunctionType_ForMethod;
    function SetActionClick(selectorText: string, fromBody?: boolean): System.UDecoratorFunctionType_ForMethod;
    function SetActionValueChange(selectorText: string, fromBody?: boolean): System.UDecoratorFunctionType_ForMethod;
    function SetActionSearch(selectorText: string, fromBody?: boolean): System.UDecoratorFunctionType_ForMethod;
    function SetActionFocusIn(selectorText: string, fromBody?: boolean): System.UDecoratorFunctionType_ForMethod;
    function SetActionFocusOut(selectorText: string, fromBody?: boolean): System.UDecoratorFunctionType_ForMethod;
    function SetActionMouseOver(selectorText: string, fromBody?: boolean): System.UDecoratorFunctionType_ForMethod;
    function SetActionMouseOut(selectorText: string, fromBody?: boolean): System.UDecoratorFunctionType_ForMethod;
}
declare namespace iberbar.MVC.KernelJquery {
    function TriggerElement(): System.UDecoratorFunctionType_ForParameter;
}
declare namespace iberbar.MVC.KernelJquery {
    function TriggerEvent(): System.UDecoratorFunctionType_ForParameter;
}
declare namespace iberbar.MVC.KernelJquery {
    function TriggerView(): System.UDecoratorFunctionType_ForParameter;
}
declare namespace iberbar.MVC.KernelJquery {
    enum UOverScrollEvent {
        OnBegin = 0,
        OnScrolling = 1,
        OnEnd = 2
    }
}
declare namespace iberbar.MVC.KernelJquery {
    enum UViewCreateStyle {
        Append = 0,
        Before = 1,
        After = 2
    }
}
declare namespace iberbar.MVC.KernelJquery {
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
    function WatchOverScroll(): System.UDecoratorFunctionType_ForMethod;
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
