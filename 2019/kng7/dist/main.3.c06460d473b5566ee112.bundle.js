(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{13:function(e,a,t){t(14),t(34),e.exports=t(31)},29:function(e,a,t){var l={"./0-title.md":30};function n(e){var a=r(e);return t(a)}function r(e){if(!t.o(l,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return l[e]}n.keys=function(){return Object.keys(l)},n.resolve=r,e.exports=n,n.id=29},30:function(e,a,t){"use strict";t.r(a),t.d(a,"slides",function(){return O}),t.d(a,"fusumaProps",function(){return i}),t.d(a,"default",function(){return j});var l=t(2),n=t.n(l),r=t(1);function c(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function u(){return(u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var O=[function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"気軽な Node.js バックエンド開発には TypeORM がちょうどいい"),Object(r.a)("p",null,"2019.08.02 #kng7 / LINE株式会社 UIT室 花谷拓磨(@potato4d)"))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"自己紹介"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"花谷拓磨(@potato4d)"),Object(r.a)("li",{parentName:"ul"},"Working at...",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"LINE株式会社 UIT室 / Developer Relations室"))),Object(r.a)("li",{parentName:"ul"},"今日は東京から来ました",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"昨日は ",Object(r.a)("a",u({parentName:"li"},{href:"https://serverless.connpass.com/event/137122/"}),"Serverless Meetup Osaka #5")," で",Object(r.a)("br",null),"フル Firebase Functions アプリを Firestore へと移行した記録の話をしてきました")))))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"Agenda"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"結局俺たちは O/R Mapper に何を求めているのか"),Object(r.a)("li",{parentName:"ul"},"TypeScript ベースで「ちょうどいい」 TypeORM の紹介"),Object(r.a)("li",{parentName:"ul"},"TypeORM の活用シチュエーション")))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"みなさん ORM は好きですか？"))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"何が便利で何が不便ですか？"))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"実はみなさんの言う問題点って",Object(r.a)("br",null),"「ActiveRecord かどうかが排他なこと」",Object(r.a)("br",null),"に起因していませんか？"))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"結局俺たちは O/R Mapper に何を求めているのか"),Object(r.a)("h3",null,"1. ORM を使うなら ActiveRecord で雑に作りたい"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"開発初期はデータ構造やリレーションにドラスティックな変更が入りやすい",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"できれば高速に対処したい"))),Object(r.a)("li",{parentName:"ul"},"初期の CRUD くらいは爆速で作ってしまいたい",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"プロトタイピングの速度は落としたくない")))))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"結局俺たちは O/R Mapper に何を求めているのか"),Object(r.a)("h3",null,"2. ActiveRecord で作ったものをメンテし続けたくない"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"とはいえ継続的に Model = DB みたいな状態で運用したくない",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"この辺りが年季の入った Rails が嫌われやすい点な気がする"))),Object(r.a)("li",{parentName:"ul"},"段階的に Repository パターンを適用できるような世界観が欲しい",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"DAO を DAO として用意した上でより抽象度の高い実装に落とし込みたい"),Object(r.a)("li",{parentName:"ul"},"はじめからやると早すぎる最適化感があるので折を見て調整したい")))))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"結局俺たちは O/R Mapper に何を求めているのか"),Object(r.a)("h3",null,"3. 可能な限り力の入れ加減をコントロールしたい"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"ゼロベースで何かを作っていく段階",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"多少密結合でも生産性を高めたい"),Object(r.a)("li",{parentName:"ul"},"アプリケーションコードから柔軟に DB の設計に手を入れられると良い"))),Object(r.a)("li",{parentName:"ul"},"継続的にメンテナンスしていく段階",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"アプリケーション側のエンティティのスキーマ定義もかっちりしたい"),Object(r.a)("li",{parentName:"ul"},"ドメイン上の概念とデータベースアクセスはある程度疎結合にしたい"),Object(r.a)("li",{parentName:"ul"},"Node.js の ORM はマイグレーション弱めだけどしっかり管理したい"),Object(r.a)("li",{parentName:"ul"},"etc..")))))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"そんなものなくない？"))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,Object(r.a)("img",{src:"https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png"})))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"TypeScript ベースで「ちょうどいい」 TypeORM の紹介"))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"TypeORM の特徴"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"TypeScript 向けの ORM (JavaScript 対応)",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"MySQL, PostgreSQL, SQLite から MongoDB まで対応"))),Object(r.a)("li",{parentName:"ul"},"GitHub Star も 15k+ と注目度の高い ORM",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",u({parentName:"li"},{href:"https://github.com/typeorm/typeorm"}),"https://github.com/typeorm/typeorm")),Object(r.a)("li",{parentName:"ul"},"ちなみに NPM の weekly downloads は 100k+")))))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"TypeORM の特徴"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"デコレータベースの簡潔かつ TypeSafe なエンティティ定義"),Object(r.a)("li",{parentName:"ol"},"柔軟かつ便利な Migration"),Object(r.a)("li",{parentName:"ol"},"ActiveRecord と Repository にどちらも対応")))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"TypeORM のうれしいところ"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"デコレータベースの簡潔かつ TypeSafe なエンティティ定義",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"@Entity")," から始まってクラスに対してデコレータで情報を付与していくだけ"),Object(r.a)("li",{parentName:"ul"},"勿論 TypeScript 自体の型の定義と相互作用があり、メタデータによって型定義ベースでの動作指定が可能"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"@Column")," のオプションも全て型がついている",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"それもそのはず TypeORM は全て TypeScript で記述されている")))))))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"TypeORM のうれしいところ"),Object(r.a)("pre",null,Object(r.a)("code",u({parentName:"pre"},{className:"language-ts"}),'import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";\n\n@Entity()\nexport class User extends BaseEntity {\n\n    @PrimaryGeneratedColumn()\n    id: number;\n\n    @Column()\n    firstName: string;\n\n    @Column()\n    lastName: string;\n\n    @Column()\n    age: number;\n\n}\n')))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"TypeORM のうれしいところ"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"柔軟かつ便利な Migration",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"自動マイグレーションと手動マイグレーションの 2 つのモードが有る"),Object(r.a)("li",{parentName:"ul"},"自動マイグレーションは開発時に便利",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"@Entity")," の定義と DB の差分をみて自動でマイグレーション"),Object(r.a)("li",{parentName:"ul"},"設計と実装にブレがあった場合に実装側で試行錯誤しやすい"),Object(r.a)("li",{parentName:"ul"},"初期の開発において悩みどころが少ない、多少古い情報を共有されても実行時でなんとかなる"))),Object(r.a)("li",{parentName:"ul"},"手動マイグレーションは完成品のコードとして便利",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"TypeORM の CLI にはマイグレーションのコマンドが一通り揃っている"),Object(r.a)("li",{parentName:"ul"},"マージする時は必ずマイグレーションファイルに落とし込んで適用みたいに柔軟な形に落とし込みやすい")))))))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"Use manual migration"),Object(r.a)("pre",null,Object(r.a)("code",u({parentName:"pre"},{className:"language-bash"}),"$ typeorm migration:generate -n PostRefactoring # Create migration file\n$ typeorm migration:run # Execute migration\n$ typeorm migration:revert # Revert migration\n")))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"Use automatic migration"),Object(r.a)("pre",null,Object(r.a)("code",u({parentName:"pre"},{className:"language-bash"}),"$ yarn dev\nyarn run v1.15.2\nwarning package.json: No license field\n$ ts-node src/server.ts\nListen on http://0.0.0.0:8000\nquery: START TRANSACTION\nquery: SELECT DATABASE() AS `db_name`\nquery: SELECT * FROM `INFORMATION_SCHEMA`.`TABLES` WHERE (`TABLE_SCHEMA` = 'podcast' OR (`TABLE_SCHEMA` = 'podcast' AND `TABLE_NAME` = 'casts') OR (`TABLE_SCHEMA` = 'podcast' ) OR (`TABLE_SCHEMA` = 'podcast' AND `TABLE_NAME` = 'pageviews') OR (`TABLE_SCHEMA` = 'podcast' AND `TABLE_NAME` = 'episodes') OR (`TABLE_SCHEMA` = 'podcast' AND `TABLE_NAME` = 'episodes_casts_casts')\nquery: SELECT * FROM `INFORMATION_SCHEMA`.`COLUMNS` WHERE (`TABLE_SCHEMA` = 'podcast' OR (`TABLE_SCHEMA` = 'podcast' AND `TABLE_NAME` = 'casts') OR (`TABLE_SCHEMA` = 'podcast' ) OR (`TABLE_SCHEMA` = 'podcast' AND `TABLE_NAME` = 'pageviews') OR (`TABLE_SCHEMA` = 'podcast' AND `TABLE_NAME` = 'episodes') OR (`TABLE_SCHEMA` = 'podcast' AND `TABLE_NAME` = 'episodes_casts_casts')\n")))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"TypeORM のうれしいところ"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"ActiveRecord と Repository にどちらも対応",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"先程述べた「ActiveRecordメンテしたくない問題」を解消できる"),Object(r.a)("li",{parentName:"ul"},"一方で早すぎる最適化が起こるわけでもなく、柔軟に対応しやすい")))))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"TypeORM の活用シチュエーション"))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,Object(r.a)("img",{width:"800",src:"https://user-images.githubusercontent.com/6993514/62269676-b655f680-b46e-11e9-89a6-55d04e26c671.png"})),Object(r.a)("h5",null,"3 月に立ち上げた Podcast サイトで使ってます"),Object(r.a)("p",{className:"text-center"},Object(r.a)("br",null),Object(r.a)("a",{href:"https://uit-inside.linecorp.com/"},"https://uit-inside.linecorp.com/")))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"TypeORM の活用シチュエーション"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"すみません！あんまりUIT室内では使ってません。",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Node.js バックエンドの仕事がある現場だと重宝します")))))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"TypeORM の活用シチュエーション"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"LINE UIT室の場合",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Podcast UIT INSIDE の API サーバーで使っています"))),Object(r.a)("li",{parentName:"ul"},"UIT INSIDE の立ち上げ時の場合",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"とりあえずクリティカルではないのでサクッと立ち上げたい",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"とはいえ CMS を組みたいので静的サイトだとちょっと具合が悪い"))),Object(r.a)("li",{parentName:"ul"},"Express + TypeORM で TypeScript な Node.js サーバーを運用"),Object(r.a)("li",{parentName:"ul"},"初期リリースまでは高生産性の恩恵を存分に受ける",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"公開前までは自動マイグレーションで開発"),Object(r.a)("li",{parentName:"ul"},"データモデルは極力 ActiveRecord で実装")))))))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"TypeORM の活用シチュエーション"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"立ち上げ後機能改修を加えていく場合",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"ここからは非 LINE プロジェクトでの体験の話"),Object(r.a)("li",{parentName:"ul"},"直で ActiveRecord を使わずとも Repository に切り替えて queryBuilder も使いつつ運用できることに気づいていく",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"徐々に ActiveRecord による実装が辛くなっていくので移行していく"),Object(r.a)("li",{parentName:"ul"},"もちろん全部ができるわけではないが、割れ窓となりうるコードを排除しつつ前進",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"これまでの ORM ではできなかった戦略のとり方で嬉しい！")))))))))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"おわりに"))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"おわりに"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"TypeORM はプロダクトと共に成長していける手軽な ORM",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Rapid Development のための土壌と堅牢な設計のための布石がどちらも揃っている"),Object(r.a)("li",{parentName:"ul"},"はじめから厳格に実装するもよし、あとから切り出すもよしな柔軟な仕様"),Object(r.a)("li",{parentName:"ul"},"決して全ての機能が Simple とは言えないが、 Simple / Easy どちらにも寄せられる")))))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"おわりに"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"ORM 好き派嫌い派みたいな概念は必要ない",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"好き嫌いじゃなくているか要らないかで選ぶんだよ"),Object(r.a)("li",{parentName:"ul"},"ORM というざっくりしたものではなくて何が不満で何が便利化を言語化してみる")))))},function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("h2",null,"Thank you!"),Object(r.a)("div",{className:"text-fixed-right"},Object(r.a)("small",null,"Slide generated by ",Object(r.a)("a",{href:"https://github.com/hiroppy/fusuma"},"hiroppy/fusuma"))))}],i=[{classes:"title"},{},{},{},{},{},{classes:"detail"},{classes:"detail"},{classes:"detail"},{},{},{},{classes:"detail"},{classes:"detail"},{classes:"detail"},{classes:"detail"},{classes:"detail"},{},{},{classes:"detail"},{},{},{classes:"detail"},{classes:"detail"},{classes:"detail"},{},{classes:"detail"},{classes:"detail"},{classes:"title"}],p={slides:O},b="wrapper";function j(e){var a=e.components,t=c(e,["components"]);return Object(r.a)(b,u({},p,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("h2",null,"気軽な Node.js バックエンド開発には TypeORM がちょうどいい"),Object(r.a)("p",null,"2019.08.02 #kng7 / LINE株式会社 UIT室 花谷拓磨(@potato4d)"),Object(r.a)("hr",null),Object(r.a)("h2",null,"自己紹介"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"花谷拓磨(@potato4d)"),Object(r.a)("li",{parentName:"ul"},"Working at...",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"LINE株式会社 UIT室 / Developer Relations室"))),Object(r.a)("li",{parentName:"ul"},"今日は東京から来ました",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"昨日は ",Object(r.a)("a",u({parentName:"li"},{href:"https://serverless.connpass.com/event/137122/"}),"Serverless Meetup Osaka #5")," で",Object(r.a)("br",null),"フル Firebase Functions アプリを Firestore へと移行した記録の話をしてきました")))),Object(r.a)("hr",null),Object(r.a)("h2",null,"Agenda"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"結局俺たちは O/R Mapper に何を求めているのか"),Object(r.a)("li",{parentName:"ul"},"TypeScript ベースで「ちょうどいい」 TypeORM の紹介"),Object(r.a)("li",{parentName:"ul"},"TypeORM の活用シチュエーション")),Object(r.a)("hr",null),Object(r.a)("h2",null,"みなさん ORM は好きですか？"),Object(r.a)("hr",null),Object(r.a)("h2",null,"何が便利で何が不便ですか？"),Object(r.a)("hr",null),Object(r.a)("h2",null,"実はみなさんの言う問題点って",Object(r.a)("br",null),"「ActiveRecord かどうかが排他なこと」",Object(r.a)("br",null),"に起因していませんか？"),Object(r.a)("hr",null),Object(r.a)("h2",null,"結局俺たちは O/R Mapper に何を求めているのか"),Object(r.a)("h3",null,"1. ORM を使うなら ActiveRecord で雑に作りたい"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"開発初期はデータ構造やリレーションにドラスティックな変更が入りやすい",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"できれば高速に対処したい"))),Object(r.a)("li",{parentName:"ul"},"初期の CRUD くらいは爆速で作ってしまいたい",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"プロトタイピングの速度は落としたくない")))),Object(r.a)("hr",null),Object(r.a)("h2",null,"結局俺たちは O/R Mapper に何を求めているのか"),Object(r.a)("h3",null,"2. ActiveRecord で作ったものをメンテし続けたくない"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"とはいえ継続的に Model = DB みたいな状態で運用したくない",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"この辺りが年季の入った Rails が嫌われやすい点な気がする"))),Object(r.a)("li",{parentName:"ul"},"段階的に Repository パターンを適用できるような世界観が欲しい",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"DAO を DAO として用意した上でより抽象度の高い実装に落とし込みたい"),Object(r.a)("li",{parentName:"ul"},"はじめからやると早すぎる最適化感があるので折を見て調整したい")))),Object(r.a)("hr",null),Object(r.a)("h2",null,"結局俺たちは O/R Mapper に何を求めているのか"),Object(r.a)("h3",null,"3. 可能な限り力の入れ加減をコントロールしたい"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"ゼロベースで何かを作っていく段階",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"多少密結合でも生産性を高めたい"),Object(r.a)("li",{parentName:"ul"},"アプリケーションコードから柔軟に DB の設計に手を入れられると良い"))),Object(r.a)("li",{parentName:"ul"},"継続的にメンテナンスしていく段階",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"アプリケーション側のエンティティのスキーマ定義もかっちりしたい"),Object(r.a)("li",{parentName:"ul"},"ドメイン上の概念とデータベースアクセスはある程度疎結合にしたい"),Object(r.a)("li",{parentName:"ul"},"Node.js の ORM はマイグレーション弱めだけどしっかり管理したい"),Object(r.a)("li",{parentName:"ul"},"etc..")))),Object(r.a)("hr",null),Object(r.a)("h2",null,"そんなものなくない？"),Object(r.a)("hr",null),Object(r.a)("h2",null,Object(r.a)("img",{src:"https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png"})),Object(r.a)("hr",null),Object(r.a)("h2",null,"TypeScript ベースで「ちょうどいい」 TypeORM の紹介"),Object(r.a)("hr",null),Object(r.a)("h2",null,"TypeORM の特徴"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"TypeScript 向けの ORM (JavaScript 対応)",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"MySQL, PostgreSQL, SQLite から MongoDB まで対応"))),Object(r.a)("li",{parentName:"ul"},"GitHub Star も 15k+ と注目度の高い ORM",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",u({parentName:"li"},{href:"https://github.com/typeorm/typeorm"}),"https://github.com/typeorm/typeorm")),Object(r.a)("li",{parentName:"ul"},"ちなみに NPM の weekly downloads は 100k+")))),Object(r.a)("hr",null),Object(r.a)("h2",null,"TypeORM の特徴"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"デコレータベースの簡潔かつ TypeSafe なエンティティ定義"),Object(r.a)("li",{parentName:"ol"},"柔軟かつ便利な Migration"),Object(r.a)("li",{parentName:"ol"},"ActiveRecord と Repository にどちらも対応")),Object(r.a)("hr",null),Object(r.a)("h2",null,"TypeORM のうれしいところ"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"デコレータベースの簡潔かつ TypeSafe なエンティティ定義",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"@Entity")," から始まってクラスに対してデコレータで情報を付与していくだけ"),Object(r.a)("li",{parentName:"ul"},"勿論 TypeScript 自体の型の定義と相互作用があり、メタデータによって型定義ベースでの動作指定が可能"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"@Column")," のオプションも全て型がついている",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"それもそのはず TypeORM は全て TypeScript で記述されている")))))),Object(r.a)("hr",null),Object(r.a)("h2",null,"TypeORM のうれしいところ"),Object(r.a)("pre",null,Object(r.a)("code",u({parentName:"pre"},{className:"language-ts"}),'import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";\n\n@Entity()\nexport class User extends BaseEntity {\n\n    @PrimaryGeneratedColumn()\n    id: number;\n\n    @Column()\n    firstName: string;\n\n    @Column()\n    lastName: string;\n\n    @Column()\n    age: number;\n\n}\n')),Object(r.a)("hr",null),Object(r.a)("h2",null,"TypeORM のうれしいところ"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"柔軟かつ便利な Migration",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"自動マイグレーションと手動マイグレーションの 2 つのモードが有る"),Object(r.a)("li",{parentName:"ul"},"自動マイグレーションは開発時に便利",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"@Entity")," の定義と DB の差分をみて自動でマイグレーション"),Object(r.a)("li",{parentName:"ul"},"設計と実装にブレがあった場合に実装側で試行錯誤しやすい"),Object(r.a)("li",{parentName:"ul"},"初期の開発において悩みどころが少ない、多少古い情報を共有されても実行時でなんとかなる"))),Object(r.a)("li",{parentName:"ul"},"手動マイグレーションは完成品のコードとして便利",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"TypeORM の CLI にはマイグレーションのコマンドが一通り揃っている"),Object(r.a)("li",{parentName:"ul"},"マージする時は必ずマイグレーションファイルに落とし込んで適用みたいに柔軟な形に落とし込みやすい")))))),Object(r.a)("hr",null),Object(r.a)("h2",null,"Use manual migration"),Object(r.a)("pre",null,Object(r.a)("code",u({parentName:"pre"},{className:"language-bash"}),"$ typeorm migration:generate -n PostRefactoring # Create migration file\n$ typeorm migration:run # Execute migration\n$ typeorm migration:revert # Revert migration\n")),Object(r.a)("hr",null),Object(r.a)("h2",null,"Use automatic migration"),Object(r.a)("pre",null,Object(r.a)("code",u({parentName:"pre"},{className:"language-bash"}),"$ yarn dev\nyarn run v1.15.2\nwarning package.json: No license field\n$ ts-node src/server.ts\nListen on http://0.0.0.0:8000\nquery: START TRANSACTION\nquery: SELECT DATABASE() AS `db_name`\nquery: SELECT * FROM `INFORMATION_SCHEMA`.`TABLES` WHERE (`TABLE_SCHEMA` = 'podcast' OR (`TABLE_SCHEMA` = 'podcast' AND `TABLE_NAME` = 'casts') OR (`TABLE_SCHEMA` = 'podcast' ) OR (`TABLE_SCHEMA` = 'podcast' AND `TABLE_NAME` = 'pageviews') OR (`TABLE_SCHEMA` = 'podcast' AND `TABLE_NAME` = 'episodes') OR (`TABLE_SCHEMA` = 'podcast' AND `TABLE_NAME` = 'episodes_casts_casts')\nquery: SELECT * FROM `INFORMATION_SCHEMA`.`COLUMNS` WHERE (`TABLE_SCHEMA` = 'podcast' OR (`TABLE_SCHEMA` = 'podcast' AND `TABLE_NAME` = 'casts') OR (`TABLE_SCHEMA` = 'podcast' ) OR (`TABLE_SCHEMA` = 'podcast' AND `TABLE_NAME` = 'pageviews') OR (`TABLE_SCHEMA` = 'podcast' AND `TABLE_NAME` = 'episodes') OR (`TABLE_SCHEMA` = 'podcast' AND `TABLE_NAME` = 'episodes_casts_casts')\n")),Object(r.a)("hr",null),Object(r.a)("h2",null,"TypeORM のうれしいところ"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"ActiveRecord と Repository にどちらも対応",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"先程述べた「ActiveRecordメンテしたくない問題」を解消できる"),Object(r.a)("li",{parentName:"ul"},"一方で早すぎる最適化が起こるわけでもなく、柔軟に対応しやすい")))),Object(r.a)("hr",null),Object(r.a)("h2",null,"TypeORM の活用シチュエーション"),Object(r.a)("hr",null),Object(r.a)("h2",null,Object(r.a)("img",{width:"800",src:"https://user-images.githubusercontent.com/6993514/62269676-b655f680-b46e-11e9-89a6-55d04e26c671.png"})),Object(r.a)("h5",null,"3 月に立ち上げた Podcast サイトで使ってます"),Object(r.a)("p",{className:"text-center"},Object(r.a)("br",null),Object(r.a)("a",{href:"https://uit-inside.linecorp.com/"},"https://uit-inside.linecorp.com/")),Object(r.a)("hr",null),Object(r.a)("h2",null,"TypeORM の活用シチュエーション"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"すみません！あんまりUIT室内では使ってません。",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Node.js バックエンドの仕事がある現場だと重宝します")))),Object(r.a)("hr",null),Object(r.a)("h2",null,"TypeORM の活用シチュエーション"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"LINE UIT室の場合",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Podcast UIT INSIDE の API サーバーで使っています"))),Object(r.a)("li",{parentName:"ul"},"UIT INSIDE の立ち上げ時の場合",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"とりあえずクリティカルではないのでサクッと立ち上げたい",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"とはいえ CMS を組みたいので静的サイトだとちょっと具合が悪い"))),Object(r.a)("li",{parentName:"ul"},"Express + TypeORM で TypeScript な Node.js サーバーを運用"),Object(r.a)("li",{parentName:"ul"},"初期リリースまでは高生産性の恩恵を存分に受ける",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"公開前までは自動マイグレーションで開発"),Object(r.a)("li",{parentName:"ul"},"データモデルは極力 ActiveRecord で実装")))))),Object(r.a)("hr",null),Object(r.a)("h2",null,"TypeORM の活用シチュエーション"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"立ち上げ後機能改修を加えていく場合",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"ここからは非 LINE プロジェクトでの体験の話"),Object(r.a)("li",{parentName:"ul"},"直で ActiveRecord を使わずとも Repository に切り替えて queryBuilder も使いつつ運用できることに気づいていく",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"徐々に ActiveRecord による実装が辛くなっていくので移行していく"),Object(r.a)("li",{parentName:"ul"},"もちろん全部ができるわけではないが、割れ窓となりうるコードを排除しつつ前進",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"これまでの ORM ではできなかった戦略のとり方で嬉しい！")))))))),Object(r.a)("hr",null),Object(r.a)("h2",null,"おわりに"),Object(r.a)("hr",null),Object(r.a)("h2",null,"おわりに"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"TypeORM はプロダクトと共に成長していける手軽な ORM",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Rapid Development のための土壌と堅牢な設計のための布石がどちらも揃っている"),Object(r.a)("li",{parentName:"ul"},"はじめから厳格に実装するもよし、あとから切り出すもよしな柔軟な仕様"),Object(r.a)("li",{parentName:"ul"},"決して全ての機能が Simple とは言えないが、 Simple / Easy どちらにも寄せられる")))),Object(r.a)("hr",null),Object(r.a)("h2",null,"おわりに"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"ORM 好き派嫌い派みたいな概念は必要ない",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"好き嫌いじゃなくているか要らないかで選ぶんだよ"),Object(r.a)("li",{parentName:"ul"},"ORM というざっくりしたものではなくて何が不満で何が便利化を言語化してみる")))),Object(r.a)("hr",null),Object(r.a)("h2",null,"Thank you!"),Object(r.a)("div",{className:"text-fixed-right"},Object(r.a)("small",null,"Slide generated by ",Object(r.a)("a",{href:"https://github.com/hiroppy/fusuma"},"hiroppy/fusuma"))))}j.isMDXComponent=!0},32:function(e,a,t){var l=t(33);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(3)(l,n);l.locals&&(e.exports=l.locals)},33:function(e,a,t){}},[[13,5,6]],[0,8]]);