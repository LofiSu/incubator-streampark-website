"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[5732],{81924:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(86070),i=t(76113),a=t(60630),s=t(24990);const o={id:"redis",title:"Redis Connector",sidebar_position:8},d=void 0,l={id:"framework/connector/redis",title:"Redis Connector",description:"Redis\u662f\u4e00\u4e2a\u5f00\u6e90\u5185\u5b58\u6570\u636e\u7ed3\u6784\u5b58\u50a8\u7cfb\u7edf\uff0c\u5b83\u53ef\u4ee5\u7528\u4f5c\u6570\u636e\u5e93\u3001\u7f13\u5b58\u548c\u6d88\u606f\u4e2d\u95f4\u4ef6\u3002 \u5b83\u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5982\u5b57\u7b26\u4e32\uff08strings\uff09\uff0c \u6563\u5217\uff08hashes\uff09\uff0c \u5217\u8868\uff08lists\uff09\uff0c \u96c6\u5408\uff08sets\uff09\uff0c \u6709\u5e8f\u96c6\u5408\uff08sorted sets\uff09\u4e0e\u8303\u56f4\u67e5\u8be2\uff0cbitmaps\u3001hyperloglogs \u548c\u5730\u7406\u7a7a\u95f4\uff08geospatial\uff09 \u7d22\u5f15\u534a\u5f84\u67e5\u8be2\u3002 Redis \u5185\u7f6e\u4e86\u4e8b\u52a1\uff08transactions\uff09 \u548c\u4e0d\u540c\u7ea7\u522b\u7684\u78c1\u76d8\u6301\u4e45\u5316\uff08persistence\uff09\uff0c\u5e76\u901a\u8fc7 Redis\u54e8\u5175\uff08Sentinel\uff09\u548c\u81ea\u52a8\u5206\u533a\uff08Cluster\uff09\u63d0\u4f9b\u9ad8\u53ef\u7528\u6027\uff08high availability\uff09\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/framework/connector/8.redis.md",sourceDirName:"framework/connector",slug:"/framework/connector/redis",permalink:"/zh-CN/docs/framework/connector/redis",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/framework/connector/8.redis.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"redis",title:"Redis Connector",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"HTTP Connector",permalink:"/zh-CN/docs/framework/connector/http"},next:{title:"\u5f00\u53d1\u6307\u5357",permalink:"/zh-CN/docs/development/development"}},c={},u=[{value:"Redis\u5199\u5165\u4f9d\u8d56",id:"redis\u5199\u5165\u4f9d\u8d56",level:2},{value:"\u5e38\u89c4\u65b9\u5f0f\u5199 Redis",id:"\u5e38\u89c4\u65b9\u5f0f\u5199-redis",level:2},{value:"1.\u63a5\u5165source",id:"1\u63a5\u5165source",level:3},{value:"2. \u5199\u5165redis",id:"2-\u5199\u5165redis",level:3},{value:"Apache StreamPark\u2122 \u5199\u5165 Redis",id:"apache-streampark-\u5199\u5165-redis",level:2},{value:"1. \u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f",id:"1-\u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f",level:3},{value:"2. \u5199\u5165Redis",id:"2-\u5199\u5165redis-1",level:3},{value:"\u652f\u6301\u7684redis\u64cd\u4f5c\u547d\u4ee4",id:"\u652f\u6301\u7684redis\u64cd\u4f5c\u547d\u4ee4",level:3},{value:"\u5176\u4ed6\u914d\u7f6e",id:"\u5176\u4ed6\u914d\u7f6e",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"http://www.redis.cn/",children:"Redis"}),"\u662f\u4e00\u4e2a\u5f00\u6e90\u5185\u5b58\u6570\u636e\u7ed3\u6784\u5b58\u50a8\u7cfb\u7edf\uff0c\u5b83\u53ef\u4ee5\u7528\u4f5c\u6570\u636e\u5e93\u3001\u7f13\u5b58\u548c\u6d88\u606f\u4e2d\u95f4\u4ef6\u3002 \u5b83\u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5982\u5b57\u7b26\u4e32\uff08strings\uff09\uff0c \u6563\u5217\uff08hashes\uff09\uff0c \u5217\u8868\uff08lists\uff09\uff0c \u96c6\u5408\uff08sets\uff09\uff0c \u6709\u5e8f\u96c6\u5408\uff08sorted sets\uff09\u4e0e\u8303\u56f4\u67e5\u8be2\uff0cbitmaps\u3001hyperloglogs \u548c\u5730\u7406\u7a7a\u95f4\uff08geospatial\uff09 \u7d22\u5f15\u534a\u5f84\u67e5\u8be2\u3002 Redis \u5185\u7f6e\u4e86\u4e8b\u52a1\uff08transactions\uff09 \u548c\u4e0d\u540c\u7ea7\u522b\u7684\u78c1\u76d8\u6301\u4e45\u5316\uff08persistence\uff09\uff0c\u5e76\u901a\u8fc7 Redis\u54e8\u5175\uff08Sentinel\uff09\u548c\u81ea\u52a8\u5206\u533a\uff08Cluster\uff09\u63d0\u4f9b\u9ad8\u53ef\u7528\u6027\uff08high availability\uff09\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["Apache Flink\xae \u5b98\u65b9\u672a\u63d0\u4f9b\u5199\u5165 Reids \u6570\u636e\u7684\u8fde\u63a5\u5668\u3002Apache StreamPark \u57fa\u4e8e ",(0,r.jsx)(n.a,{href:"https://bahir.apache.org/docs/flink/current/flink-streaming-redis/",children:"Flink Connector Redis"})," \u5c01\u88c5\u4e86 RedisSink\u3001\u914d\u7f6e redis \u8fde\u63a5\u53c2\u6570\uff0c\u5373\u53ef\u81ea\u52a8\u521b\u5efa redis \u8fde\u63a5\u7b80\u5316\u5f00\u53d1\u3002\u76ee\u524d RedisSink \u652f\u6301\u8fde\u63a5\u65b9\u5f0f\u6709\uff1a\u5355\u8282\u70b9\u6a21\u5f0f\u3001\u54e8\u5175\u6a21\u5f0f\uff0c\u56e0\u96c6\u7fa4\u6a21\u5f0f\u4e0d\u652f\u6301\u4e8b\u52a1\uff0c\u76ee\u524d\u672a\u652f\u6301\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["StreamPark \u4f7f\u7528Redis\u7684 ",(0,r.jsx)(n.strong,{children:"MULTI"})," \u547d\u4ee4\u5f00\u542f\u4e8b\u52a1\uff0c",(0,r.jsx)(n.strong,{children:"EXEC"})," \u547d\u4ee4\u63d0\u4ea4\u4e8b\u52a1\uff0c\u7ec6\u8282\u89c1\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"http://www.redis.cn/topics/transactions.html%E3%80%82RedisSink",children:"http://www.redis.cn/topics/transactions.html\u3002RedisSink"})," \u9ed8\u8ba4\u652f\u6301 AT_LEAST_ONCE \u7684\u5904\u7406\u8bed\u4e49\uff0c\u5728\u5f00\u542f checkpoint \u60c5\u51b5\u4e0b\u652f\u6301 EXACTLY_ONCE \u8bed\u4e49\u3002"]}),"\n",(0,r.jsxs)(n.admonition,{title:"\u63d0\u793a",type:"tip",children:[(0,r.jsx)(n.p,{children:"Redis \u662f key-value \u7c7b\u578b\u7684\u6570\u636e\u5e93\uff0cAT_LEAST_ONCE \u8bed\u4e49\u4e0b Flink \u4f5c\u4e1a\u51fa\u73b0\u5f02\u5e38\u91cd\u542f\u540e\u6700\u65b0\u7684\u6570\u636e\u4f1a\u8986\u76d6\u4e0a\u4e00\u7248\u672c\u6570\u636e\uff0c\u8fbe\u5230\u6700\u7ec8\u6570\u636e\u4e00\u81f4\u3002\u5982\u679c\u6709\u5916\u90e8\u7a0b\u5e8f\u5728\u91cd\u542f\u671f\u95f4\u8bfb\u53d6\u4e86\u6570\u636e\u4f1a\u6709\u548c\u6700\u7ec8\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u98ce\u9669\u3002"}),(0,r.jsx)(n.p,{children:"EXACTLY_ONCE\u8bed\u4e49\u4e0b\u4f1a\u5728flink\u4f5c\u4e1acheckpoint\u6574\u4f53\u5b8c\u6210\u60c5\u51b5\u4e0b\u6279\u91cf\u5199\u5165redis\uff0c\u4f1a\u6709\u4e00\u4e2acheckpoint\u65f6\u95f4\u95f4\u9694\u7684\u5ef6\u65f6\u3002\u8bf7\u6839\u636e\u4e1a\u52a1\u573a\u666f\u9009\u62e9\u5408\u9002\u8bed\u4e49\u3002"})]}),"\n",(0,r.jsx)(n.h2,{id:"redis\u5199\u5165\u4f9d\u8d56",children:"Redis\u5199\u5165\u4f9d\u8d56"}),"\n",(0,r.jsxs)(n.p,{children:["Flink Connector Redis \u5b98\u65b9\u63d0\u4f9b\u4e24\u79cd\uff0c\u4ee5\u4e0b\u4e24\u79cd API \u5747\u76f8\u540c\uff0cStreamPark \u4f7f\u7528\u7684\u662f ",(0,r.jsx)(n.code,{children:"org.apache.bahir"})," \u4f9d\u8d56\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.apache.bahir</groupId>\n    <artifactId>flink-connector-redis_2.11</artifactId>\n    <version>1.0</version>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-connector-redis_2.10</artifactId>\n    <version>1.1.5</version>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5e38\u89c4\u65b9\u5f0f\u5199-redis",children:"\u5e38\u89c4\u65b9\u5f0f\u5199 Redis"}),"\n",(0,r.jsx)(n.p,{children:"\u5e38\u89c4\u65b9\u5f0f\u4e0b\u4f7f\u7528 Flink Connector Redis \u5199\u5165\u6570\u636e\u7684\u65b9\u5f0f\u5982\u4e0b:"}),"\n",(0,r.jsx)(n.h3,{id:"1\u63a5\u5165source",children:"1.\u63a5\u5165source"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"import org.apache.flink.streaming.api.functions.source.SourceFunction;\nimport scala.util.Random;\n\npublic class TestSource implements SourceFunction<TestEntity> {\n\n    private boolean isRunning = true;\n\n    private Random random = new Random();\n\n    private int index = 0;\n\n    @Override\n    public void run(SourceContext<TestEntity> sourceContext) throws Exception {\n        while (isRunning && index <= 1000001) {\n            index += 1;\n            long userId = System.currentTimeMillis();\n            long orderId = random.nextInt(100);\n            int status = random.nextInt(1);\n            double price = random.nextDouble();\n            int quantity = new Random().nextInt(10);\n            TestEntity order = new TestEntity(userId, orderId, 1l, 1l, status, price, quantity, System.currentTimeMillis());\n            sourceContext.collect(order);\n        }\n    }\n\n    @Override\n    public void cancel() {\n        this.isRunning = false;\n    }\n}\nclass TestEntity {\n    Long userId;\n    Long orderId;\n    Long siteId;\n    Long cityId;\n    Integer orderStatus;\n    Double price;\n    Integer quantity;\n    Long timestamp;\n\n    /**\n     * @param userId      : \u7528\u6237Id\n     * @param orderId     : \u8ba2\u5355ID\n     * @param siteId      : \u7ad9\u70b9ID\n     * @param cityId      : \u57ce\u5e02Id\n     * @param orderStatus : \u8ba2\u5355\u72b6\u6001(1:\u4e0b\u5355,0:\u9000\u5355)\n     * @param price       : \u5355\u4ef7\n     * @param quantity    : \u8ba2\u5355\u6570\u91cf\n     * @param timestamp   : \u4e0b\u5355\u65f6\u95f4\n     */\n    public TestEntity(Long userId, Long orderId, Long siteId, Long cityId, Integer orderStatus, Double price, Integer quantity, Long timestamp) {\n        this.userId = userId;\n        this.orderId = orderId;\n        this.siteId = siteId;\n        this.cityId = cityId;\n        this.orderStatus = orderStatus;\n        this.price = price;\n        this.quantity = quantity;\n        this.timestamp = timestamp;\n    }\n}\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-\u5199\u5165redis",children:"2. \u5199\u5165redis"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import org.apache.flink.api.common.functions.MapFunction;\nimport org.apache.flink.streaming.api.datastream.SingleOutputStreamOperator;\nimport org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;\nimport org.apache.flink.streaming.connectors.redis.RedisSink;\nimport org.apache.flink.streaming.connectors.redis.common.config.FlinkJedisPoolConfig;\nimport org.apache.flink.streaming.connectors.redis.common.mapper.RedisCommand;\nimport org.apache.flink.streaming.connectors.redis.common.mapper.RedisCommandDescription;\nimport org.apache.flink.streaming.connectors.redis.common.mapper.RedisMapper;\n\npublic class FlinkRedisSink {\n\n    public static void main(String[] args) throws Exception {\n        //1.\u83b7\u53d6\u6267\u884c\u73af\u5883\n        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\n        env.setParallelism(1);\n\n        //2.\u8bfb\u6570\u636e\u5e76\u8f6c\u6362\u4e3aJavaBean\n        DataStreamSource<TestEntity> source = env.addSource(new TestSource(), TypeInformation.of(TestEntity.class));\n        //3.\u5c06\u6570\u636e\u5199\u5165Redis\n        FlinkJedisPoolConfig jedisPoolConfig = new FlinkJedisPoolConfig.Builder()\n                .setHost("localhost")\n                .setPort(6379)\n                .build();\n        source.addSink(new RedisSink<>(jedisPoolConfig, new MyRedisMapper()));\n\n        //4.\u6267\u884c\u4efb\u52a1\n        env.execute();\n    }\n\n    public static class MyRedisMapper implements RedisMapper<TestEntity> {\n        @Override\n        public RedisCommandDescription getCommandDescription() {\n            // \u8fd4\u56de\u5b58\u5728Redis\u4e2d\u7684\u6570\u636e\u7c7b\u578b  \u5b58\u50a8\u7684\u662fHash, \u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5916\u9762\u7684key\n            return new RedisCommandDescription(RedisCommand.HSET, "");\n        }\n\n        @Override\n        public String getKeyFromData(TestEntity data) {\n            // \u4ece\u6570\u636e\u4e2d\u83b7\u53d6Key: Hash\u7684Key\n            return String.valueOf(data.userId());\n        }\n\n        @Override\n        public String getValueFromData(TestEntity data) {\n            // \u4ece\u6570\u636e\u4e2d\u83b7\u53d6Value: Hash\u7684value\n            return String.valueOf(data.price());\n        }\n    }\n\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0a\u521b\u5efaFlinkJedisPoolConfig\u8f83\u7e41\u7410\uff0credis\u7684\u6bcf\u79cd\u64cd\u4f5c\u90fd\u8981\u6784\u5efaRedisMapper,\u975e\u5e38\u7684\u4e0d\u7075\u654f\u3002",(0,r.jsx)(n.code,{children:"StreamPark"}),"\u4f7f\u7528\u7ea6\u5b9a\u5927\u4e8e\u914d\u7f6e\u3001\u81ea\u52a8\u914d\u7f6e\u7684\u65b9\u5f0f\u53ea\u9700\u8981\u914d\u7f6eredis\n\u8fde\u63a5\u53c2\u6570\u3001flink\u8fd0\u884c\u53c2\u6570\uff0cStreamPark \u4f1a\u81ea\u52a8\u7ec4\u88c5source\u548csink\uff0c\u6781\u5927\u7684\u7b80\u5316\u5f00\u53d1\u903b\u8f91\uff0c\u63d0\u5347\u5f00\u53d1\u6548\u7387\u548c\u7ef4\u62a4\u6027\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"apache-streampark-\u5199\u5165-redis",children:"Apache StreamPark\u2122 \u5199\u5165 Redis"}),"\n",(0,r.jsx)(n.p,{children:"RedisSink \u9ed8\u8ba4\u4e3aAT_LEAST_ONCE (\u81f3\u5c11\u4e00\u6b21)\u7684\u5904\u7406\u8bed\u4e49\uff0c\u5728\u5f00\u542fcheckpoint\u60c5\u51b5\u4e0b\u4e24\u9636\u6bb5\u6bb5\u63d0\u4ea4\u652f\u6301EXACTLY_ONCE\u8bed\u4e49\uff0c\u53ef\u4f7f\u7528\u7684\u8fde\u63a5\u7c7b\u578b\uff1a \u5355\u8282\u70b9\u6a21\u5f0f\u3001\u54e8\u5175\u6a21\u5f0f\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"1-\u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f",children:"1. \u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(s.A,{value:"\u5355\u8282\u70b9\u914d\u7f6e",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"#redis sink \u914d\u7f6e\nredis.sink:\n  host: 127.0.0.1 #\u5fc5\u987b\u53c2\u6570\n  #\u9009\u586b\u53c2\u6570\n  port: 6379\n  database: 2\n  password:\n  connectType: jedisPool #\u53ef\u9009\u53c2\u6570\uff1ajedisPool\uff08\u9ed8\u8ba4\uff09|sentinel\n  maxTotal:\n  maxIdle:\n  minIdle:\n  connectionTimeout:\n"})})}),(0,r.jsx)(s.A,{value:"\u54e8\u5175\u6a21\u5f0f\u914d\u7f6e",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"#redis sink \u914d\u7f6e\nredis.sink:\n  masterName: master \u54e8\u5175\u6a21\u5f0f\u53c2\u6570\n  host: 192.168.0.1:6379, 192.168.0.3:6379 #\u5fc5\u987b\u53c2\u6570\uff0c\u5fc5\u987b\u6307\u5b9a\u8fde\u63a5\u7684port\n  connectType: sentinel\n  #\u9009\u586b\u53c2\u6570\n  soTimeout: 6379\n  database: 2\n  password:\n  maxTotal:\n  maxIdle:\n  minIdle:\n  connectionTimeout:\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"2-\u5199\u5165redis-1",children:"2. \u5199\u5165Redis"}),"\n",(0,r.jsx)(n.p,{children:"\u7528 StreamPark \u5199\u5165redis\u975e\u5e38\u7b80\u5355,\u4ee3\u7801\u5982\u4e0b:"}),"\n",(0,r.jsx)(a.A,{children:(0,r.jsx)(s.A,{value:"scala",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'\nimport org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.sink.{RedisMapper, RedisSink}\nimport org.apache.flink.api.scala._\nimport org.apache.flink.streaming.connectors.redis.common.mapper.RedisCommand\nimport org.json4s.DefaultFormats\n\nobject FlinkRedisSinkApp extends FlinkStreaming {\n\n  @transient\n  implicit lazy val formats: DefaultFormats.type = org.json4s.DefaultFormats\n\n  override def handle(): Unit = {\n\n    /**\n     * \u521b\u9020\u8bfb\u53d6\u6570\u636e\u7684\u6e90\u5934\n     */\n    val source = context.addSource(new TestSource)\n\n\n    // Redis sink..................\n    //1)\u5b9a\u4e49 RedisSink\n    val sink: RedisSink = RedisSink()\n    //2)\u5199Mapper\u6620\u5c04\n    val personMapper: RedisMapper[TestEntity] = RedisMapper[TestEntity](RedisCommand.HSET, "flink_user", _.userId.toString, _.orderId.toString)\n\n    sink.sink[TestEntity](source, personMapper, 60000000).setParallelism(1)\n\n  }\n\n}\n\n\n/**\n * RedisMapper\n * @param cmd redis \u5199\u5165\u547d\u4ee4\n * @param additionalKey \u5199\u5165\u989d\u5916key,\u9002\u7528\u4e8e hset\n * @param key  \u5199\u5165key\n * @param value \u5199\u5165value\n * @tparam T\n */\ncase class RedisMapper[T](cmd: RedisCommand, additionalKey: String, key: T => String, value: T => String) extends RMapper[T] {\n\n  override def getCommandDescription: RedisCommandDescription = new RedisCommandDescription(cmd, additionalKey)\n\n  override def getKeyFromData(r: T): String = key(r)\n\n  override def getValueFromData(r: T): String = value(r)\n\n}\n'})})})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u4ee3\u7801\u6240\u793a\uff0cStreamPark \u4f1a\u81ea\u52a8\u52a0\u8f7d\u914d\u7f6e\u521b\u5efaRedisSink\uff0c\u7528\u6237\u901a\u8fc7\u521b\u5efa\u9700\u8981\u7684RedisMapper\u5bf9\u8c61\u5373\u5b8c\u6210redis\u5199\u5165\u64cd\u4f5c\uff0c",(0,r.jsx)(n.strong,{children:"additionalKey\u4e3ahset\u65f6\u4e3a\u6700\u5916\u5c42key\u5176\u4ed6\u5199\u5165\u547d\u4ee4\u65e0\u6548"}),"\u3002\nRedisSink.sink()\u5199\u5165\u76f8\u5e94\u7684key\u5bf9\u5e94\u6570\u636e\u662f\u9700\u8981\u6307\u5b9a\u8fc7\u671f\u65f6\u95f4\uff0c\u5982\u679c\u672a\u6307\u5b9a\u9ed8\u8ba4\u8fc7\u671f\u65f6\u95f4\u4e3ajava Integer.MAX_VALUE (67\u5e74)\u3002\u5982\u4ee3\u7801\u6240\u793a\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'class RedisSink() extends Sink {\n\n  def sink[T](stream: DataStream[T], mapper: RedisMapper[T], ttl: Int = Int.MaxValue): DataStreamSink[T] = {\n    val sinkFun = (enableCheckpoint, cpMode) match {\n      case (false, CheckpointingMode.EXACTLY_ONCE) => throw new IllegalArgumentException("redis sink EXACTLY_ONCE must enable checkpoint")\n      case (true, CheckpointingMode.EXACTLY_ONCE) => new Redis2PCSinkFunction[T](config, mapper, ttl)\n      case _ => new RedisSinkFunction[T](config, mapper, ttl)\n    }\n    val sink = stream.addSink(sinkFun)\n    afterSink(sink, parallelism, name, uid)\n  }\n\n}\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u652f\u6301\u7684redis\u64cd\u4f5c\u547d\u4ee4",children:"\u652f\u6301\u7684redis\u64cd\u4f5c\u547d\u4ee4"}),"\n",(0,r.jsx)(n.p,{children:"\u652f\u6301redis\u64cd\u4f5c\u547d\u4ee4\u5982\u4e0b:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public enum RedisCommand {\n\n    /**\n     * Insert the specified value at the head of the list stored at key.\n     * If key does not exist, it is created as empty list before performing the push operations.\n     */\n    LPUSH(RedisDataType.LIST),\n\n    /**\n     * Insert the specified value at the tail of the list stored at key.\n     * If key does not exist, it is created as empty list before performing the push operation.\n     */\n    RPUSH(RedisDataType.LIST),\n\n    /**\n     * Add the specified member to the set stored at key.\n     * Specified member that is already a member of this set is ignored.\n     */\n    SADD(RedisDataType.SET),\n\n    /**\n     * Set key to hold the string value. If key already holds a value,\n     * it is overwritten, regardless of its type.\n     */\n    SET(RedisDataType.STRING),\n\n    /**\n     * Adds the element to the HyperLogLog data structure stored at the variable name specified as first argument.\n     */\n    PFADD(RedisDataType.HYPER_LOG_LOG),\n\n    /**\n     * Posts a message to the given channel.\n     */\n    PUBLISH(RedisDataType.PUBSUB),\n\n    /**\n     * Adds the specified members with the specified score to the sorted set stored at key.\n     */\n    ZADD(RedisDataType.SORTED_SET),\n\n    /**\n     * Removes the specified members from the sorted set stored at key.\n     */\n    ZREM(RedisDataType.SORTED_SET),\n\n    /**\n     * Sets field in the hash stored at key to value. If key does not exist,\n     * a new key holding a hash is created. If field already exists in the hash, it is overwritten.\n     */\n    HSET(RedisDataType.HASH);\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u8b66\u544a",type:"info",children:(0,r.jsxs)(n.p,{children:["RedisSink \u76ee\u524d\u652f\u6301\u5355\u8282\u70b9\u6a21\u5f0f\u3001\u54e8\u5175\u6a21\u5f0f\u8fde\u63a5\uff0c\u96c6\u7fa4\u6a21\u5f0f\u4e0d\u652f\u6301\u4e8b\u52a1\uff0cStreamPark \u76ee\u524d\u4e3a\u652f\u6301\uff0c\u5982\u6709\u4f7f\u7528\u573a\u666f\uff0c\u8bf7\u8c03\u7528Flink Connector Redis\u5b98\u65b9api\u3002",(0,r.jsx)("br",{}),"\nEXACTLY_ONCE\u8bed\u4e49\u4e0b\u5fc5\u987b\u5f00\u542fcheckpoint\uff0c\u5426\u5219\u7a0b\u5e8f\u4f1a\u629b\u51fa\u53c2\u6570\u5f02\u5e38\u3002",(0,r.jsx)("br",{}),"\nEXACTLY_ONCE\u8bed\u4e49\u4e0bcheckpoint\u7684\u6570\u636esink\u7f13\u5b58\u5728\u5185\u5b58\u91cc\u9762\uff0c\u9700\u8981\u6839\u636e\u5b9e\u9645\u6570\u636e\u5408\u7406\u8bbe\u7f6echeckpoint\u65f6\u95f4\u95f4\u9694\uff0c\u5426\u5219\u6709",(0,r.jsx)(n.strong,{children:"oom"}),"\u7684\u98ce\u9669\u3002",(0,r.jsx)("br",{})]})}),"\n",(0,r.jsx)(n.h2,{id:"\u5176\u4ed6\u914d\u7f6e",children:"\u5176\u4ed6\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4ed6\u7684\u6240\u6709\u7684\u914d\u7f6e\u90fd\u5fc5\u987b\u9075\u5b88 ",(0,r.jsx)(n.strong,{children:"StreamPark"})," \u914d\u7f6e,\u5177\u4f53\u53ef\u914d\u7f6e\u9879\u548c\u5404\u4e2a\u53c2\u6570\u7684\u4f5c\u7528\u8bf7\u53c2\u8003",(0,r.jsx)(n.a,{href:"/docs/development/config/",children:"\u9879\u76ee\u914d\u7f6e"})]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},24990:(e,n,t)=>{t.d(n,{A:()=>s});t(30758);var r=t(13526);const i={tabItem:"tabItem_Xevx"};var a=t(86070);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t,children:n})}},60630:(e,n,t)=>{t.d(n,{A:()=>S});var r=t(30758),i=t(13526),a=t(72469),s=t(25557),o=t(99688),d=t(17822),l=t(54991),c=t(52629);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=p(e),[s,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,u]=h({queryString:t,groupId:i}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,c.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),k=(()=>{const e=l??g;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{k&&d(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=t(78820);const k={tabList:"tabList_wCRy",tabItem:"tabItem_v3ez"};var v=t(86070);function x(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=d.indexOf(n),i=o[t].value;i!==r&&(l(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...a,className:(0,i.A)("tabs__item",k.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function b(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",k.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(y,{...n,...e})]})}function S(e){const n=(0,f.A)();return(0,v.jsx)(b,{...e,children:u(e.children)},String(n))}},76113:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(30758);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);