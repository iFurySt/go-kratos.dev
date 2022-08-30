"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1632],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return u}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=l(t),u=o,m=g["".concat(p,".").concat(u)]||g[u]||d[u]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},693:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var n=t(3117),o=(t(7294),t(3905));const a={id:"tracing",title:"\u94fe\u8def\u8ffd\u8e2a",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},i=void 0,c={unversionedId:"component/middleware/tracing",id:"component/middleware/tracing",title:"\u94fe\u8def\u8ffd\u8e2a",description:"Tracing \u4e2d\u95f4\u4ef6\u4f7f\u7528 OpenTelemetry \u5b9e\u73b0\u4e86\u94fe\u8def\u8ffd\u8e2a\u3002",source:"@site/docs/component/middleware/08-tracing.md",sourceDirName:"component/middleware",slug:"/component/middleware/tracing",permalink:"/docs/component/middleware/tracing",draft:!1,editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/middleware/08-tracing.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"tracing",title:"\u94fe\u8def\u8ffd\u8e2a",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"\u5f02\u5e38\u6062\u590d",permalink:"/docs/component/middleware/recovery"},next:{title:"\u53c2\u6570\u6821\u9a8c",permalink:"/docs/component/middleware/validate"}},p={},l=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"<code>WithTracerProvider</code>",id:"withtracerprovider",level:4},{value:"<code>WithPropagator</code>",id:"withpropagator",level:4},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:3},{value:"server \u4e2d\u4f7f\u7528 tracing \u91c7\u96c6\u6570\u636e",id:"server-\u4e2d\u4f7f\u7528-tracing-\u91c7\u96c6\u6570\u636e",level:4},{value:"client \u4e2d\u4f7f\u7528 tracing \u91c7\u96c6\u6570\u636e",id:"client-\u4e2d\u4f7f\u7528-tracing-\u91c7\u96c6\u6570\u636e",level:4},{value:"References",id:"references",level:3}],s={toc:l};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Tracing \u4e2d\u95f4\u4ef6\u4f7f\u7528 OpenTelemetry \u5b9e\u73b0\u4e86\u94fe\u8def\u8ffd\u8e2a\u3002"),(0,o.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u7528\u4e8e\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"WithTracerProvider()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"WithPropagator()"),"\u8fdb\u884c\u914d\u7f6e\u3002"),(0,o.kt)("h4",{id:"withtracerprovider"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithTracerProvider")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func WithTracerProvider(provider trace.TracerProvider) Option {\n    return func(opts *options) {\n        opts.TracerProvider = provider\n    }\n}    \n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"WithTracerProvider")," \u7528\u4e8e\u8bbe\u7f6e provider\uff0c\u5b83\u63a5\u6536\u7684\u53c2\u6570\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"trace.TracerProvider"),"\u3002"),(0,o.kt)("h4",{id:"withpropagator"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithPropagator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func WithPropagator(propagator propagation.TextMapPropagator) Option {\n    return func(opts *options) {\n        opts.Propagator = propagator\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"WithPropagator")," \u7528\u4e8e\u8bbe\u7f6e text map propagator\uff0c\u5b83\u63a5\u6536\u7684\u53c2\u6570\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"propagation.TextMapPropagator"),"\u3002"),(0,o.kt)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,o.kt)("h4",{id:"server-\u4e2d\u4f7f\u7528-tracing-\u91c7\u96c6\u6570\u636e"},"server \u4e2d\u4f7f\u7528 tracing \u91c7\u96c6\u6570\u636e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package server\n\nimport (\n    "github.com/go-kratos/kratos/v2/middleware/tracing"\n    "github.com/go-kratos/kratos/v2/transport/grpc"\n\n    "go.opentelemetry.io/otel"\n    "go.opentelemetry.io/otel/attribute"\n    "go.opentelemetry.io/otel/exporters/jaeger"\n    "go.opentelemetry.io/otel/sdk/resource"\n    tracesdk "go.opentelemetry.io/otel/sdk/trace"\n    semconv "go.opentelemetry.io/otel/semconv/v1.4.0"\n)\n\n// \u8bbe\u7f6e\u5168\u5c40trace\nfunc initTracer(url string) error {\n    // \u521b\u5efa Jaeger exporter\n    exp, err := jaeger.New(jaeger.WithCollectorEndpoint(jaeger.WithEndpoint(url)))\n    if err != nil {\n        return err\n    }\n    tp := tracesdk.NewTracerProvider(\n        // \u5c06\u57fa\u4e8e\u7236span\u7684\u91c7\u6837\u7387\u8bbe\u7f6e\u4e3a100%\n        tracesdk.WithSampler(tracesdk.ParentBased(tracesdk.TraceIDRatioBased(1.0))),\n        // \u59cb\u7ec8\u786e\u4fdd\u518d\u751f\u6210\u4e2d\u6279\u91cf\u5904\u7406\n        tracesdk.WithBatcher(exp),\n        // \u5728\u8d44\u6e90\u4e2d\u8bb0\u5f55\u6709\u5173\u6b64\u5e94\u7528\u7a0b\u5e8f\u7684\u4fe1\u606f\n        tracesdk.WithResource(resource.NewSchemaless(\n            semconv.ServiceNameKey.String("kratos-trace"),\n            attribute.String("exporter", "jaeger"),\n            attribute.Float64("float", 312.23),\n        )),\n    )\n    otel.SetTracerProvider(tp)\n    return nil\n}\n\n// NewGRPCServer new a gRPC server.\nfunc NewGRPCServer(c *conf.Server, executor *service.ExecutorService) *grpc.Server {\n    err := initTracer("http://localhost:14268/api/traces")\n    if err != nil {\n        panic(err)\n    }\n    //tr := otel.Tracer("component-main")\n    var opts = []grpc.ServerOption{\n        grpc.Middleware(\n            tracing.Server(),\n        ),\n    }\n    // ...\n}\n')),(0,o.kt)("h4",{id:"client-\u4e2d\u4f7f\u7528-tracing-\u91c7\u96c6\u6570\u636e"},"client \u4e2d\u4f7f\u7528 tracing \u91c7\u96c6\u6570\u636e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package client\n\nimport (\n    "context"\n\n    "github.com/go-kratos/kratos/v2/middleware/tracing"\n    "github.com/go-kratos/kratos/v2/transport/grpc"\n\n    "go.opentelemetry.io/otel"\n    "go.opentelemetry.io/otel/attribute"\n    "go.opentelemetry.io/otel/exporters/jaeger"\n    "go.opentelemetry.io/otel/sdk/resource"\n    tracesdk "go.opentelemetry.io/otel/sdk/trace"\n    semconv "go.opentelemetry.io/otel/semconv/v1.4.0"\n    googlegrpc "google.golang.org/grpc"\n)\n\n// \u8bbe\u7f6e\u5168\u5c40trace\nfunc initTracer(url string) error {\n    // \u521b\u5efa Jaeger exporter\n    exp, err := jaeger.New(jaeger.WithCollectorEndpoint(jaeger.WithEndpoint(url)))\n    if err != nil {\n        return err\n    }\n    tp := tracesdk.NewTracerProvider(\n        // \u5c06\u57fa\u4e8e\u7236span\u7684\u91c7\u6837\u7387\u8bbe\u7f6e\u4e3a100%\n        tracesdk.WithSampler(tracesdk.ParentBased(tracesdk.TraceIDRatioBased(1.0))),\n        // \u59cb\u7ec8\u786e\u4fdd\u518d\u751f\u6210\u4e2d\u6279\u91cf\u5904\u7406\n        tracesdk.WithBatcher(exp),\n        // \u5728\u8d44\u6e90\u4e2d\u8bb0\u5f55\u6709\u5173\u6b64\u5e94\u7528\u7a0b\u5e8f\u7684\u4fe1\u606f\n        tracesdk.WithResource(resource.NewSchemaless(\n            semconv.ServiceNameKey.String("kratos-trace"),\n            attribute.String("exporter", "jaeger"),\n            attribute.Float64("float", 312.23),\n        )),\n    )\n    otel.SetTracerProvider(tp)\n    return nil\n}\n\nfunc grpcCli() (*googlegrpc.ClientConn, error) {\n    // \u5982\u679c\u672c\u9879\u76ee\u6ca1\u6709\u521d\u59cb\u5316initTracer \u8bf7\u521d\u59cb\u5316\n    return grpc.DialInsecure(\n        context.Background(),\n        grpc.WithMiddleware(\n            tracing.Client(),\n        ),\n    )\n}\n')),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://opentelemetry.io/"},"https://opentelemetry.io/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/open-telemetry/opentelemetry-go/tree/main/example"},"https://github.com/open-telemetry/opentelemetry-go/tree/main/example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pkg.go.dev/go.opentelemetry.io/otel"},"https://pkg.go.dev/go.opentelemetry.io/otel"))))}d.isMDXComponent=!0}}]);