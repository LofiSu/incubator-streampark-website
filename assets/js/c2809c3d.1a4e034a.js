"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[1845],{87061:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(86070),a=t(76113),i=t(60630),o=t(24990);const s={id:"clickhouse",title:"ClickHouse Connector",original:!0,sidebar_position:3},c=void 0,l={id:"framework/connector/clickhouse",title:"ClickHouse Connector",description:"ClickHouse is a columnar database management system (DBMS) for online analytics (OLAP).",source:"@site/docs/framework/connector/3.clickhouse.md",sourceDirName:"framework/connector",slug:"/framework/connector/clickhouse",permalink:"/docs/framework/connector/clickhouse",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/framework/connector/3.clickhouse.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"clickhouse",title:"ClickHouse Connector",original:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"JDBC Connector",permalink:"/docs/framework/connector/jdbc"},next:{title:"Apache Doris Connector",permalink:"/docs/framework/connector/doris"}},u={},d=[{value:"JDBC synchronous write",id:"jdbc-synchronous-write",level:2},{value:"Write in the normal way",id:"write-in-the-normal-way",level:3},{value:"Write with Apache StreamPark\u2122",id:"write-with-apache-streampark",level:3},{value:"configuration list",id:"configuration-list",level:4},{value:"Write to ClickHouse",id:"write-to-clickhouse",level:4},{value:"HTTP async write",id:"http-async-write",level:2},{value:"Write in the normal way",id:"write-in-the-normal-way-1",level:3},{value:"Write to ClickHouse",id:"write-to-clickhouse-1",level:3},{value:"Asynchronous write configuration and failure recovery component configuration",id:"asynchronous-write-configuration-and-failure-recovery-component-configuration",level:4},{value:"Write to clickhouse",id:"write-to-clickhouse-2",level:4},{value:"Other configuration",id:"other-configuration",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://clickhouse.com/",children:"ClickHouse"})," is a columnar database management system (DBMS) for online analytics (OLAP).\nCurrently, Apache Flink\xae does not officially provide a connector for writing to ClickHouse and reading from ClickHouse.\nBased on the access form supported by ",(0,r.jsx)(n.a,{href:"https://clickhouse.com/docs/zh/interfaces/http/",children:"ClickHouse - HTTP client"}),"\nand ",(0,r.jsx)(n.a,{href:"https://clickhouse.com/docs/zh/interfaces/jdbc",children:"JDBC driver"}),", StreamPark encapsulates ClickHouseSink for writing data to ClickHouse in real-time."]}),"\n",(0,r.jsx)(n.p,{children:"ClickHouse writes do not support transactions, using JDBC write data to it could provide (AT_LEAST_ONCE) semanteme. Using the HTTP client to write asynchronously, it will retry the asynchronous write multiple times. The failed data will be written to external components (Apache Kafka, MySQL, Apache Hadoop HDFS, Apache HBase), the data will be restored manually to achieve final data consistency."}),"\n",(0,r.jsx)(n.h2,{id:"jdbc-synchronous-write",children:"JDBC synchronous write"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://clickhouse.com/",children:"ClickHouse"}),"provides a ",(0,r.jsx)(n.a,{href:"https://clickhouse.com/docs/zh/interfaces/jdbc/",children:"JDBC driver"}),",JDBC driver package of ClickHouse need to be import first"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>ru.yandex.clickhouse</groupId>\n    <artifactId>clickhouse-jdbc</artifactId>\n    <version>0.3.1</version>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"write-in-the-normal-way",children:"Write in the normal way"}),"\n",(0,r.jsx)(n.p,{children:"The conventional way to create a clickhouse jdbc connection:"}),"\n",(0,r.jsx)(o.A,{value:"Java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class ClickHouseUtil {\n    private static Connection connection;\n\n    public static Connection getConn(String host, int port, String database) throws SQLException, ClassNotFoundException {\n        Class.forName("ru.yandex.clickhouse.ClickHouseDriver");\n        String  address = "jdbc:clickhouse://" + host + ":" + port + "/" + database;\n        connection = DriverManager.getConnection(address);\n        return connection;\n    }\n\n    public static Connection getConn(String host, int port) throws SQLException, ClassNotFoundException {\n        return getConn(host,port,"default");\n    }\n    public static Connection getConn() throws SQLException, ClassNotFoundException {\n        return getConn("node-01",8123);\n    }\n    public void close() throws SQLException {\n        connection.close();\n    }\n}\n'})})}),"\n",(0,r.jsx)(n.p,{children:"The method of splicing various parameters into the request url is cumbersome and hard-coded, which is very inflexible."}),"\n",(0,r.jsx)(n.h3,{id:"write-with-apache-streampark",children:"Write with Apache StreamPark\u2122"}),"\n",(0,r.jsxs)(n.p,{children:["To access ",(0,r.jsx)(n.code,{children:"ClickHouse"})," data with ",(0,r.jsx)(n.code,{children:"StreamPark"}),", you only need to define the configuration file in the specified format and then write code.\nThe configuration and code are as follows. The configuration of ",(0,r.jsx)(n.code,{children:"ClickHose JDBC"})," in ",(0,r.jsx)(n.code,{children:"StreamPark"})," is in the configuration list, and the sample running program is scala"]}),"\n",(0,r.jsx)(n.h4,{id:"configuration-list",children:"configuration list"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"clickhouse:\n  sink:\n    jdbcUrl: jdbc:clickhouse://127.0.0.1:8123,192.168.1.2:8123\n    socketTimeout: 3000000\n    database: test\n    user: $user\n    password: $password\n    targetTable: orders(userId,siteId)\n    batch:\n      size: 1000\n      delaytime: 6000000\n"})}),"\n",(0,r.jsx)(n.h4,{id:"write-to-clickhouse",children:"Write to ClickHouse"}),"\n",(0,r.jsx)(i.A,{children:(0,r.jsx)(o.A,{value:"Scala",label:"Scala",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'import org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.sink.ClickHouseSink\nimport org.apache.flink.api.scala._\n\nobject ClickHouseSinkApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n    val createTable =\n      """\n        |create TABLE test.orders(\n        |userId UInt16,\n        |orderId UInt16,\n        |siteId UInt8,\n        |cityId UInt8,\n        |orderStatus UInt8,\n        |price Float64,\n        |quantity UInt8,\n        |timestamp UInt16\n        |)ENGINE = TinyLog;\n        |""".stripMargin\n\n    val source = context.addSource(new TestSource)\n\n\n     ClickHouseSink().syncSink[TestEntity](source)(x => {\n         s"(${x.userId},${x.siteId})"\n     }).setParallelism(1)\n  }\n\n}\n\nclass Order(val marketId: String, val timestamp: String) extends Serializable\n'})})})}),"\n",(0,r.jsx)(n.admonition,{title:"hint",type:"tip",children:(0,r.jsx)(n.p,{children:"ClickHouse can support balanced writing of multiple nodes, you only need to configure writable nodes in JDBC URL\nSince ClickHouse has a relatively high delay for single insertion, it is recommended to set the batch.\nsize to insert data in batches to improve performance. At the same time, to improve real-time performance,\nit supports batch writing according to data volume or interval time.\nIn the implementation of ClickHouseSink, if the number of the last batch of data is less than BatchSize, the remaining data will be inserted when the connection is closed."})}),"\n",(0,r.jsx)(n.h2,{id:"http-async-write",children:"HTTP async write"}),"\n",(0,r.jsx)(n.p,{children:"In the case of a small amount of data, you can use JDBC to connect and write data. In actual production\uff0cis more using async HTTP to write data more efficiently and quickly."}),"\n",(0,r.jsx)(n.h3,{id:"write-in-the-normal-way-1",children:"Write in the normal way"}),"\n",(0,r.jsx)(n.p,{children:"Clickhouse INSERT must insert data through the POST method. The general operation is as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ echo 'INSERT INTO t VALUES (1),(2),(3)' | curl 'http://localhost:8123/' --data-binary @-\n"})}),"\n",(0,r.jsx)(n.p,{children:"The operation of the above method is relatively simple. Sure java could also be used for writing. StreamPark adds many functions to the http post writing method,\nincluding encapsulation enhancement, adding cache, asynchronous writing, failure retry, and data backup after reaching the retry threshold\uff0c\nTo external components (Apache Kafka, MySQL, HDFS, Apache HBase), etc., the above functions only need to define the configuration file in the prescribed format,\nand write the code."}),"\n",(0,r.jsx)(n.h3,{id:"write-to-clickhouse-1",children:"Write to ClickHouse"}),"\n",(0,r.jsxs)(n.p,{children:["The configuration of ",(0,r.jsx)(n.code,{children:"ClickHose JDBC"})," in ",(0,r.jsx)(n.code,{children:"StreamPark"})," is in the configuration list, and the sample running program is scala, as follows:\nasynchttpclient is used as an HTTP asynchronous client for writing. first, import the jar of asynchttpclient"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"\x3c!--clickhouse async need asynchttpclient --\x3e\n<dependency>\n    <groupId>org.asynchttpclient</groupId>\n    <artifactId>async-http-client</artifactId>\n    <optional>true</optional>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.h4,{id:"asynchronous-write-configuration-and-failure-recovery-component-configuration",children:"Asynchronous write configuration and failure recovery component configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\nclickhouse:\n  sink:\n    hosts: 127.0.0.1:8123,192.168.1.2:8123\n    socketTimeout: 3000000\n    database: test\n    user: $user\n    password: $password\n    targetTable: test.orders(userId,siteId)\n    batch:\n      size: 1\n      delaytime: 60000\n    threshold:\n      bufferSize: 10\n      #      Concurrent number of asynchronous writes\n      numWriters: 4\n      #      cache queue size\n      queueCapacity: 100\n      delayTime: 10\n      requestTimeout: 600\n      retries: 1\n      #      success response code\n      successCode: 200\n    failover:\n      table: chfailover\n      #     After reaching the maximum number of failed writes, the components of the data backup\n      storage: kafka #kafka|mysql|hbase|hdfs\n      mysql:\n        driverClassName: com.mysql.cj.jdbc.Driver\n        jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n        username: $user\n        password: $pass\n      kafka:\n        bootstrap.servers: localhost:9092\n        topic: test1\n        group.id: user_01\n        auto.offset.reset: latest\n      hbase:\n        zookeeper.quorum: localhost\n        zookeeper.property.clientPort: 2181\n      hdfs:\n        path: /data/chfailover\n        namenode: hdfs://localhost:8020\n        user: hdfs\n"})}),"\n",(0,r.jsx)(n.h4,{id:"write-to-clickhouse-2",children:"Write to clickhouse"}),"\n",(0,r.jsx)(i.A,{children:(0,r.jsx)(o.A,{value:"Scala",label:"Scala",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'\nimport org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.sink.ClickHouseSink\nimport org.apache.flink.api.scala._\n\nobject ClickHouseSinkApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n    val createTable =\n      """\n        |create TABLE test.orders(\n        |userId UInt16,\n        |orderId UInt16,\n        |siteId UInt8,\n        |cityId UInt8,\n        |orderStatus UInt8,\n        |price Float64,\n        |quantity UInt8,\n        |timestamp UInt16\n        |)ENGINE = TinyLog;\n        |""".stripMargin\n\n    println(createTable)\n\n    val source = context.addSource(new TestSource)\n\n\n    // asynchronous write\n    ClickHouseSink().sink[TestEntity](source)(x => {\n      s"(${x.userId},${x.siteId})"\n    }).setParallelism(1)\n\n  }\n\n}\n\nclass Order(val marketId: String, val timestamp: String) extends Serializable\n'})})})}),"\n",(0,r.jsxs)(n.admonition,{title:"warn",type:"info",children:[(0,r.jsx)(n.p,{children:"Due to the high latency of single insertion of ClickHouse, partitions will be merged too frequently by the ClickHouse server,\nbecause of frequent writing of small data.It is recommended to use the asynchronous submission method and set a reasonable threshold to improve performance."}),(0,r.jsx)(n.p,{children:"Since ClickHouse will re-add data to the cache queue when asynchronous writing fails, it may cause the same window of data to be written in two batches.\nIt is recommended to fully test the stability of ClickHouse in scenarios with high real-time requirements."}),(0,r.jsx)(n.p,{children:"After the asynchronous write data reaches the maximum retry value, the data will be backed up to the external component,\nand the component connection will be initialized at this time. It is recommended to ensure the availability of the failover component."})]}),"\n",(0,r.jsx)(n.h2,{id:"other-configuration",children:"Other configuration"}),"\n",(0,r.jsxs)(n.p,{children:["All other configurations must comply with the ",(0,r.jsx)(n.strong,{children:"ClickHouseDataSource"})," connection pool configuration.\nFor specific configurable items and the role of each parameter, please refer to the ",(0,r.jsx)(n.code,{children:"ClickHouse-JDBC"})," ",(0,r.jsx)(n.a,{href:"https://github.com/ClickHouse/clickhouse-jdbc",children:"official website documentation"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},24990:(e,n,t)=>{t.d(n,{A:()=>o});t(30758);var r=t(13526);const a={tabItem:"tabItem_Xevx"};var i=t(86070);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},60630:(e,n,t)=>{t.d(n,{A:()=>x});var r=t(30758),a=t(13526),i=t(72469),o=t(25557),s=t(99688),c=t(17822),l=t(54991),u=t(52629);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[l,d]=m({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),g=(()=>{const e=l??f;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{g&&c(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=t(78820);const g={tabList:"tabList_wCRy",tabItem:"tabItem_v3ez"};var k=t(86070);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==r&&(l(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=f(e);return(0,k.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,k.jsx)(v,{...n,...e}),(0,k.jsx)(y,{...n,...e})]})}function x(e){const n=(0,b.A)();return(0,k.jsx)(w,{...e,children:d(e.children)},String(n))}},76113:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(30758);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);