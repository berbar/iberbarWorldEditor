
import { CApplication as CApplicationBase, gBodyContentElement } from "views/application_mvc2";
// import { CLoginView } from "views/login";
// import { CStateTextView } from "views/state_text";

export abstract class CApplication extends CApplicationBase
{
    private m_eventSystem: iberbar.Event.IEventBus = null;

    protected OnConfigureMVC( mvc: iberbar.MVC.CBuilder ): void
    {
        // mvc.RegisterView( TypeOf( CLoginView ) )
        //     .AsSelf()
        //     .SingleInstance()
        //     .OnActivating( e => e.Instance.Create( gBodyContentElement, iberbar.MVC.KernelJquery.UViewCreateStyle.Append ) );

        // mvc.RegisterView( TypeOf( CStateTextView ) )
        //     .AsSelf()
        //     .InstancePerDependency();
    }

    protected OnLoaded(): void
    {
        this.m_eventSystem = this.m_lifetimeScope.Resolve( TypeOf( iberbar.Event.IEventBus ) );
    }

    public get EventSystem(): iberbar.Event.IEventBus
    {
        return this.m_eventSystem;
    }
};


export { gBodyContentElement } from "views/application_mvc2";
