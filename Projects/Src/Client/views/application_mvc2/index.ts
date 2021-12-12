


export abstract class CApplication
{
    protected m_lifetimeScope: iberbar.Autofac.ILifetimeScope = null;

    public constructor()
    {
        g_app = this;
    }

    public Load(): void
    {
        let builder = new iberbar.Autofac.CContainerBuilder();

        this.OnConfigureIoc( builder );

        this.m_lifetimeScope = builder.Build();

        this.OnLoaded();
    }

    protected OnConfigureIoc( builder: iberbar.Autofac.CContainerBuilder ): void
    {
        builder.RegisterType( TypeOf( iberbar.Event.Implements.CEventBus ) )
            .AsSelf()
            .As( TypeOf( iberbar.Event.IEventBus ) )
            .SingleInstance();

        let mvcBuilder = new iberbar.MVC.CBuilder( builder );
        mvcBuilder.SetComponentKernelJquery();
        mvcBuilder.AddComponentDependOnView();
        mvcBuilder.AddComponentBindModelsJquery();
        mvcBuilder.AddComponentBindActionsJquery();
        this.OnConfigureMVC( mvcBuilder );
        mvcBuilder.Build();
    }

    protected abstract OnConfigureMVC( mvc: iberbar.MVC.CBuilder ): void;

    protected abstract OnLoaded(): void;

    public get LifetimeScopeRoot(): iberbar.Autofac.ILifetimeScope
    {
        return this.m_lifetimeScope;
    }
};

export const gBodyContentElement = $( ".body-content" );
export var g_app: CApplication = null;

export function CreateViewOnBody( view: iberbar.MVC.CView ): void
{
    view.Create( gBodyContentElement, iberbar.MVC.KernelJquery.UViewCreateStyle.Append );
}

