/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';


export namespace Components {

  interface AppAdd {
    'home': RouterHistory;
  }
  interface AppAddAttributes extends StencilHTMLAttributes {
    'home'?: RouterHistory;
  }

  interface AppDetail {
    'home': RouterHistory;
    'match': MatchResults;
  }
  interface AppDetailAttributes extends StencilHTMLAttributes {
    'home'?: RouterHistory;
    'match'?: MatchResults;
  }

  interface AppEdit {
    'home': RouterHistory;
    'match': MatchResults;
  }
  interface AppEditAttributes extends StencilHTMLAttributes {
    'home'?: RouterHistory;
    'match'?: MatchResults;
  }

  interface AppFooter {}
  interface AppFooterAttributes extends StencilHTMLAttributes {}

  interface AppHeader {}
  interface AppHeaderAttributes extends StencilHTMLAttributes {}

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppProfile {
    'match': MatchResults;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppAdd': Components.AppAdd;
    'AppDetail': Components.AppDetail;
    'AppEdit': Components.AppEdit;
    'AppFooter': Components.AppFooter;
    'AppHeader': Components.AppHeader;
    'AppHome': Components.AppHome;
    'AppProfile': Components.AppProfile;
    'AppRoot': Components.AppRoot;
  }

  interface StencilIntrinsicElements {
    'app-add': Components.AppAddAttributes;
    'app-detail': Components.AppDetailAttributes;
    'app-edit': Components.AppEditAttributes;
    'app-footer': Components.AppFooterAttributes;
    'app-header': Components.AppHeaderAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-root': Components.AppRootAttributes;
  }


  interface HTMLAppAddElement extends Components.AppAdd, HTMLStencilElement {}
  var HTMLAppAddElement: {
    prototype: HTMLAppAddElement;
    new (): HTMLAppAddElement;
  };

  interface HTMLAppDetailElement extends Components.AppDetail, HTMLStencilElement {}
  var HTMLAppDetailElement: {
    prototype: HTMLAppDetailElement;
    new (): HTMLAppDetailElement;
  };

  interface HTMLAppEditElement extends Components.AppEdit, HTMLStencilElement {}
  var HTMLAppEditElement: {
    prototype: HTMLAppEditElement;
    new (): HTMLAppEditElement;
  };

  interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {}
  var HTMLAppFooterElement: {
    prototype: HTMLAppFooterElement;
    new (): HTMLAppFooterElement;
  };

  interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {}
  var HTMLAppHeaderElement: {
    prototype: HTMLAppHeaderElement;
    new (): HTMLAppHeaderElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLElementTagNameMap {
    'app-add': HTMLAppAddElement
    'app-detail': HTMLAppDetailElement
    'app-edit': HTMLAppEditElement
    'app-footer': HTMLAppFooterElement
    'app-header': HTMLAppHeaderElement
    'app-home': HTMLAppHomeElement
    'app-profile': HTMLAppProfileElement
    'app-root': HTMLAppRootElement
  }

  interface ElementTagNameMap {
    'app-add': HTMLAppAddElement;
    'app-detail': HTMLAppDetailElement;
    'app-edit': HTMLAppEditElement;
    'app-footer': HTMLAppFooterElement;
    'app-header': HTMLAppHeaderElement;
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
