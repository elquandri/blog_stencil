import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
              <stencil-route url='/home' component='app-home'/>
              <stencil-route url='/detail/:id' component='app-detail'/>
              <stencil-route url='/add' component='app-add'/>
              <stencil-route url='/edit/:id' component='app-edit'/>
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
