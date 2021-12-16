/**
 * 兼容旧版的绑定到视图字段上
 */
 export class CComponentBindFields implements iberbar.MVC.Core.IComponentInit
 {
     public InitView( view: iberbar.MVC.CView ): void
     {
         let binder = view.LifetimeScope.Resolve( TypeOf( iberbar.MVC.Core.CViewModelBinder ) );
         binder.BindModel( view, view );
     }
 
     public ReInitView( view: iberbar.MVC.CView ): void
     {
         this.InitView( view );
     }
 }