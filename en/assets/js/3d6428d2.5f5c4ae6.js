"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1991],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=l(r),m=i,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5526:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={id:"registry",title:"Registry"},s=void 0,l={unversionedId:"component/registry",id:"component/registry",title:"Registry",description:"Interface",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/08-registry.md",sourceDirName:"component",slug:"/component/registry",permalink:"/en/docs/component/registry",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/08-registry.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"registry",title:"Registry"},sidebar:"docs",previous:{title:"Metrics",permalink:"/en/docs/component/metrics"},next:{title:"Routing and Load Balancing",permalink:"/en/docs/component/selector"}},p={},u=[{value:"Interface",id:"interface",level:3},{value:"Usage",id:"usage",level:3},{value:"Register a Service",id:"register-a-service",level:4},{value:"Service Discovery (gRPC)",id:"service-discovery-grpc",level:4}],g={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"interface"},"Interface"),(0,o.kt)("p",null,"Registry has two interface, the Registrar is for services' register and deregister, the Discovery is for fetching the list of services."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Registrar interface {\n    // register the service\n    Register(ctx context.Context, service *ServiceInstance) error\n    // deregister the service\n    Deregister(ctx context.Context, service *ServiceInstance) error\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Discovery interface {\n    // fetch the service list of serviceName\n    Fetch(ctx context.Context, serviceName string) ([]*ServiceInstance, error)\n    // subscribe to a list of serviceName\n    Watch(ctx context.Context, serviceName string) (Watcher, error)\n}\n")),(0,o.kt)("p",null,"Implementations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/registry/consul"},"consul")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/registry/discovery"},"discovery")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/registry/etcd"},"etcd")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/registry/kubernetes"},"kubernetes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/registry/nacos"},"nacos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/registry/zookeeper"},"zookeeper"))),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("h4",{id:"register-a-service"},"Register a Service"),(0,o.kt)("p",null,"Create a Registrar(e.g. consul) and inject it to Kratos applications. Then the framework will do register and deregister automatically."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import consul "github.com/go-kratos/consul/registry"\nimport  "github.com/hashicorp/consul/api"\n\ncli, err := api.NewClient(api.DefaultConfig())\nif err != nil {\n    panic(err)\n}\nreg := consul.New(cli)\n\napp := kratos.New(\n    kratos.Name(Name),\n    kratos.Version(Version),\n    kratos.Metadata(map[string]string{}),\n    kratos.Logger(logger),\n    kratos.Server(\n        hs,\n        gs,\n    ),\n    kratos.Registrar(reg),\n)\n')),(0,o.kt)("h4",{id:"service-discovery-grpc"},"Service Discovery (gRPC)"),(0,o.kt)("p",null,"Create a Registrar(e.g. consul), create an Endpoint with url format as ",(0,o.kt)("inlineCode",{parentName:"p"},"<schema>://[namespace]/<service-name>"),", then use ",(0,o.kt)("inlineCode",{parentName:"p"},"grc.WithDiscovery")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"grpc.WithEndpoint")," as the options of the Dial method to get the gRPC connection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kratos/kratos/transport/http"\nimport "github.com/go-kratos/kratos/v2/transport/grpc"\n\ncli, err := api.NewClient(api.DefaultConfig())\nif err != nil {\n    panic(err)\n}\ndis := consul.New(cli)\n\nendpoint := "discovery://default/provider"\nconn, err := grpc.Dial(context.Background(), grpc.WithEndpoint(endpoint), grpc.WithDiscovery(dis))\nif err != nil {\n    panic(err)\n}\n')))}m.isMDXComponent=!0}}]);