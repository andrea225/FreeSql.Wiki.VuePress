if(!self.define){let s,e={};const a=(a,t)=>(a=new URL(a+".js",t).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(t,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let l={};const d=s=>a(s,i),f={module:{uri:i},exports:l,require:d};e[i]=Promise.all(t.map((s=>f[s]||d(s)))).then((s=>(r(...s),l)))}}define(["./workbox-33d91895"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.html-pGfvbLRH.js",revision:"07e3e1fd6584bb88a2449ab240ff29e6"},{url:"assets/404.html-tXTXMQm8.js",revision:"bce5b49fcfafd1a5bf9f524a8c16ec09"},{url:"assets/ado.html-pfspyWqh.js",revision:"749663830f3203fe7fb194dbb335eedd"},{url:"assets/ado.html-qbNav7uH.js",revision:"b25d154d33dedd28fd1d0817cdee39b2"},{url:"assets/aggregateroot.html-ariRFWL5.js",revision:"3f851a37c2113a665d10f9df54b9e58f"},{url:"assets/aggregateroot.html-mN60oVMr.js",revision:"c8c8cddef501672e47c2ee5d6d2b75f3"},{url:"assets/aop-freesql-autofac.html-mTbdGbaA.js",revision:"55e18c2a1c4d03e1761c278bf8f2382b"},{url:"assets/aop-freesql-autofac.html-XQwYG03E.js",revision:"42c977e313f6cc612ed863f860639a50"},{url:"assets/aop.html-7meROLhF.js",revision:"cba3a9ef228ea8d326dd8d96f4fb6d1b"},{url:"assets/aop.html-oZWUiLK0.js",revision:"6e07082a9cf1b1f779ed8565d7e3ae6f"},{url:"assets/api.html-1GkXalM7.js",revision:"6b6c1723cc1c895c7e6837250c252bdb"},{url:"assets/api.html-r5wU8hD5.js",revision:"6cf5709539e01bff752781fb6b8b2aa4"},{url:"assets/app-HMyyvabM.js",revision:"8de864203aef9063432f3949b61551f4"},{url:"assets/awesome-freesql.html-8ieJgimw.js",revision:"295fefe786973573d0533c483ed79ea1"},{url:"assets/awesome-freesql.html-U3O8upIq.js",revision:"02ec6dd9be0150c4ec28bbe81ae95c9c"},{url:"assets/BaseEntity.html-dyoEF6pN.js",revision:"4e4e145936320e7e0988f587a572d4f4"},{url:"assets/BaseEntity.html-zHmurtQn.js",revision:"bd7b4e6996c7a6bfff285c65be0eefa8"},{url:"assets/cascade-delete.html-DhHSrdjW.js",revision:"25f70e4a04634729ca9c7db2ad7e7e9a"},{url:"assets/cascade-delete.html-yy9u_7bC.js",revision:"1e7f5569089b58f290069ba577a5eaf8"},{url:"assets/cascade-saving.html-5MYEo106.js",revision:"9b2eb8b3561b149b42378eb1fa1ab6b5"},{url:"assets/Cascade-Saving.html-7EcRAZT9.js",revision:"210c1f8cedbd4aee8a28e9a7f489a748"},{url:"assets/Cascade-Saving.html-AbkuQpMJ.js",revision:"402db39933265af0377e7f336fc0e935"},{url:"assets/cascade-saving.html-t5eftTsK.js",revision:"666033f2c55fe085638a0dab35961370"},{url:"assets/change-log.html-IrB_yZ9D.js",revision:"be2d81fdf028c894da0ad2144ea9b4d0"},{url:"assets/change-log.html-unU5ISYU.js",revision:"b443043fc6ca4c16d89c8d9dd0296c65"},{url:"assets/code-first.html-4qJqp-0j.js",revision:"4bc456dbd2a0aed0419a9d56e0c08e30"},{url:"assets/code-first.html-t5ei0hmo.js",revision:"da7d27955c6ef2fcc2d1b1120910e58d"},{url:"assets/CodeFirst-Mode.html-eTYujOt5.js",revision:"2b7e5dbc17ecfffcb09f0d1943ccba46"},{url:"assets/CodeFirst-Mode.html-MVOUWjp0.js",revision:"c9230260acb90778eb17afe2f2187330"},{url:"assets/config-entity-from-db-first.html-aFl6SWa-.js",revision:"85a5cf22ab6bec8d4b29265dddb96646"},{url:"assets/config-entity-from-db-first.html-xbjiiWdb.js",revision:"6dcc2ffb03a1a464b812697ce1f75d44"},{url:"assets/contributing.html-RcqA4JS7.js",revision:"f8e6e64470d90b1e6a3823b5e31d0b95"},{url:"assets/contributing.html-X9zGZ3u8.js",revision:"338af730ec04c7b76d2d33f2778fe543"},{url:"assets/custom-attribute.html-_T8eFEWu.js",revision:"f6dfa33d10c29443f40f36d5fa8f652a"},{url:"assets/custom-attribute.html-6D_IXl7L.js",revision:"31c6938434d4a5b2ca0666d525a60022"},{url:"assets/db-context.html--lJ9yVTC.js",revision:"228628e6d804f5c0774bac4b27b45a15"},{url:"assets/db-context.html-dcVb0QlQ.js",revision:"c1d19b1f2ef8ffa5722212b803b8ff9a"},{url:"assets/db-first.html-NFR8qwsq.js",revision:"a96af4653a6d09eea6d00bdd99fb8f86"},{url:"assets/db-first.html-vjjyDOPr.js",revision:"f03d2e56b16c8b834408f1b98bfd40ff"},{url:"assets/Delete-Data.html--ENdQXsi.js",revision:"24690bfeb62123c07a42ec740332e8b3"},{url:"assets/Delete-Data.html-kEdtC0q7.js",revision:"1ede887c07583580870218fae40e4bb3"},{url:"assets/delete.html-M4yLY-DR.js",revision:"bbaea6c8786c2b653990456206072e2a"},{url:"assets/delete.html-NSkSg_66.js",revision:"c9f3b318d2e61361d4d74cdc9fde42f5"},{url:"assets/docsearch-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/donation.html-POui5XVe.js",revision:"5b305c80aaf97816aaf002ad938c57ef"},{url:"assets/donation.html-Tmx6u4Ui.js",revision:"a2af65898f9b4b19ccdb390ac1b74625"},{url:"assets/dynamic.html-4EB5e1in.js",revision:"54579ae43ff4d125b279f8b1048ee96d"},{url:"assets/dynamic.html-PfGwzVuq.js",revision:"95c07c4e5e963572d8ebf603949857f4"},{url:"assets/entity-attribute.html-64_H5PG7.js",revision:"c35f3f029b77fef4f8ff86e94637a1f4"},{url:"assets/entity-attribute.html-8QyQD70U.js",revision:"099666dbd1ad1d4d0d2286b9d9cd0695"},{url:"assets/Entity-Relationship.html-9UnqYbfn.js",revision:"fb62c48d0b5d54a3531f592a88765b1b"},{url:"assets/Entity-Relationship.html-I05OaBcS.js",revision:"147c2c43748bb4791f3f12a42951d3e0"},{url:"assets/expression-function.html-IYpZlKq0.js",revision:"b93d40c613077d61826d259ec52f18ef"},{url:"assets/expression-function.html-TRS32BZs.js",revision:"6f9e186e0e278b4703263146e26d49a3"},{url:"assets/faq.html-sOLxLJWf.js",revision:"c0c8d87d304549c11554b9a659ac21a0"},{url:"assets/faq.html-Z0u1iWhn.js",revision:"f00350f2a2019f99fcd2a790839f5781"},{url:"assets/filters.html-9-Q0RSuf.js",revision:"02bf75df1a262ddbfac64b8c1a49a217"},{url:"assets/filters.html-Rq_hWwAV.js",revision:"74e42745b712dde3209c7f316346e470"},{url:"assets/fluent-api.html-UzrysNHJ.js",revision:"3f9aa79b5224cf8f765bd3f336212df4"},{url:"assets/fluent-api.html-zP4swcLx.js",revision:"cd076c98bd97ab86240289c9d505b4c8"},{url:"assets/freeim.html-c2I0rdQF.js",revision:"8c71a6cc6db337de7daba9f1a07e597b"},{url:"assets/freeim.html-sUV2kupd.js",revision:"719e50aa15e34ed30a329a8dcbab5dc3"},{url:"assets/freeredis.html-yhF_8rvG.js",revision:"afd2bae8fed2261f9f2ccbd57b08c475"},{url:"assets/freeredis.html-zFkWlTlX.js",revision:"95ecc3a9371a331d0fa1a04ca6378598"},{url:"assets/freescheduler.html-KOZmjTmm.js",revision:"c9c11566f0d9d1be6191e768fc5f4984"},{url:"assets/freescheduler.html-Z9OImbJq.js",revision:"591b88356379f2ee5b909945a1fe0913"},{url:"assets/freesql-auditlog.html-0l5WqSX5.js",revision:"4f4cbaf3c69610f9d08444ece4864c38"},{url:"assets/freesql-auditlog.html-LqWZfGys.js",revision:"d79914cb7cf492826d4c74088f574775"},{url:"assets/freesql-cap.html-Sltikv3h.js",revision:"048971375b3d64633fa823808d73c717"},{url:"assets/freesql-cap.html-UqYGMf4j.js",revision:"408611f2dd4d96231b4ec7a2ad1b0ad2"},{url:"assets/freesql-docker.html-dGFvM9ci.js",revision:"43958f75c125538738b9fbac71b0a1c2"},{url:"assets/freesql-docker.html-KrSynLkp.js",revision:"9c662d04ff53bbeac094038f0f1b8b60"},{url:"assets/freesql-extensions-baseentity.html-7gm4B1hc.js",revision:"4c2b827dedefa42c8690bb7a5124a59e"},{url:"assets/freesql-extensions-baseentity.html-kcAaoiAq.js",revision:"51c2a182341de415e72fb16010237960"},{url:"assets/freesql-extensions-jsonmap.html-H7Vcsjif.js",revision:"2e8624092d5bc87dc8ed4eda25db76cb"},{url:"assets/freesql-extensions-jsonmap.html-TLKgKx-8.js",revision:"d130d33eea0c8221da79baa7d8b5b20a"},{url:"assets/freesql-provider-custom.html-dJKa7fun.js",revision:"e5b722944ec22913fb8327d5aca1e94a"},{url:"assets/freesql-provider-custom.html-O4TDKdrI.js",revision:"a8347b5833715e8d4728bc64884b257d"},{url:"assets/freesql-provider-mysqlconnector.html-6FmEuuAw.js",revision:"3c4c588cd14e664c8bd8aa03dcba7a06"},{url:"assets/freesql-provider-mysqlconnector.html-XQXzI94-.js",revision:"618702e854c80a9b5d328b06b60a2f5a"},{url:"assets/freesql-provider-odbc.html-Eds1jqGu.js",revision:"bc688e10acdfae99c98bc239705fc7a8"},{url:"assets/freesql-provider-odbc.html-sw4edW0h.js",revision:"2c07a7ee5d631906ae5c3fe999413fb6"},{url:"assets/freesql-provider-oracle.html-NoSgRLfl.js",revision:"3d96c54edcf917e967dbda4d83a4073c"},{url:"assets/freesql-provider-oracle.html-Tzd44zgQ.js",revision:"5e6c1199131ff77f48dd14dc288ea0fc"},{url:"assets/freesql-provider-postgresql.html-C6JN3W8p.js",revision:"9c80439d4ef15fc1301134cf8c8c098b"},{url:"assets/freesql-provider-postgresql.html-ZAHVR8su.js",revision:"5c9f552948a7d128e29f6e2a39ef4a89"},{url:"assets/freesql-provider-questdb.html-cm8BH30u.js",revision:"e41f20ee4b96c920c137a809479c8b5e"},{url:"assets/freesql-provider-questdb.html-mkQiupvi.js",revision:"bcf898432a11302a86f838b962078f05"},{url:"assets/freesql-provider-sqlitecore.html-2Xbbdkp6.js",revision:"f15403a3c6fcf95b3d41717bbc0229d5"},{url:"assets/freesql-provider-sqlitecore.html-jF-X4cDJ.js",revision:"03036bc92a0b903518fb5289413468da"},{url:"assets/freesqladminlte.html-bhgZK6KI.js",revision:"22794ccacf204e8af3e107ba1075982c"},{url:"assets/freesqladminlte.html-GpeLPBmE.js",revision:"2a1ca639e4f7df393e73642c3d71cea3"},{url:"assets/getting-started.html-JkBfUyev.js",revision:"b69b4760f532dae373953fea48bc3ca4"},{url:"assets/getting-started.html-mXf8xbwA.js",revision:"593958256f312de337490a02985c7e1e"},{url:"assets/getting-started.html-owEdf7ED.js",revision:"8f5ec1030c9411b1fe28b4d8e4af52da"},{url:"assets/getting-started.html-x8Wpy08E.js",revision:"a3c97c1e0ba2eee72263ef65f929d226"},{url:"assets/Greed-Loading.html-9BY6rDFB.js",revision:"1c13ec47f56de15181b0ce97915e0f9b"},{url:"assets/Greed-Loading.html-Q3CG8Y-t.js",revision:"136d2b75ad9cae70f12c7b5a7ca5e7a0"},{url:"assets/Group-Aggregation-Query.html-AgeNIePQ.js",revision:"feec62ba856ee05a71e151ef7ad765bf"},{url:"assets/Group-Aggregation-Query.html-zh3PA-3w.js",revision:"cbbe5d0a86ba1472f8d9d1155511f98e"},{url:"assets/idlebus-freesql.html-5RH4DAdJ.js",revision:"c270b725de7243fe1e60283fbc774017"},{url:"assets/idlebus-freesql.html-zEYsZ-K4.js",revision:"532d0daa622ffa50a01c3aafdbf2017e"},{url:"assets/ifreesql-context.html-_8_p3WKY.js",revision:"a8ebd00b904c1826f4de2d31523bcc5d"},{url:"assets/ifreesql-context.html-0MVD9euz.js",revision:"fa821825205321b737def1571b602132"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-QOy62Fup.js",revision:"fa112b5cda5ee3c969c504c6a3080b4c"},{url:"assets/index.html-47PxB7N5.js",revision:"1791f6817298de2f01090935f5aba421"},{url:"assets/index.html-Aq0HIucc.js",revision:"0afb678efb4ab516c54dd89b9343f4ba"},{url:"assets/index.html-giSJMpyS.js",revision:"fa1ffc393a5fa5a19a6ec8ca5430a9c5"},{url:"assets/index.html-K-SII3La.js",revision:"8cc8bce92439cfd8decbb37e7b626dda"},{url:"assets/index.html-MJYHm3R9.js",revision:"3e061c045b9eed7ecf03cf8e8661812e"},{url:"assets/index.html-mwrIc854.js",revision:"93d3f224567b86b21d4a503011f96802"},{url:"assets/index.html-NVvqr76V.js",revision:"1d51e1c80ba19513c63a2e85d35f29b5"},{url:"assets/index.html-rxzyMDr7.js",revision:"54a665d3c583d213ee11d2e98ba52c03"},{url:"assets/index.html-sE-nGNKr.js",revision:"747ff3bc5445185052396ad95570683e"},{url:"assets/index.html-sWkXIPnM.js",revision:"f9aff33a7d2460cc7b09dc3393e09545"},{url:"assets/index.html-UsP-PJWj.js",revision:"54e49a1edb821985f1da04efaa9f5ef6"},{url:"assets/index.html-xj4JUnta.js",revision:"fa4acf419bd55b9fcc09f49ea858b165"},{url:"assets/Insert-Data.html-5cwh760M.js",revision:"82865837e36a3dcbdf836be6229a3cc7"},{url:"assets/Insert-Data.html-J9O-EJoj.js",revision:"aaa15f32b1c016e7a0d9c09cc495a46c"},{url:"assets/insert-or-update.html-48GE0NaR.js",revision:"e5266f98bc6f5ef014b38f2f11d07463"},{url:"assets/insert-or-update.html-DjFw_SKm.js",revision:"73d74279b7d112cd085c298c1a8737ab"},{url:"assets/insert-or-update.html-GkqgeU4Z.js",revision:"898e125fa1f4ab22d1c3d52f1afa6c22"},{url:"assets/insert-or-update.html-x8UDjJQM.js",revision:"33c6f13ee996582fe22fa84476a467cd"},{url:"assets/insert.html-IkL-RJuE.js",revision:"896f8064c7eefeafa2b808be02904320"},{url:"assets/insert.html-XtRR39w7.js",revision:"d941c1a2f13cd2ecfe4e73f819445d4c"},{url:"assets/install.html-3oOsoP0v.js",revision:"6cd1455395c4a56eaa7e4aec180df1db"},{url:"assets/install.html-91ejX6zI.js",revision:"663feda897950adc2589cb8887fd2857"},{url:"assets/install.html-eohjt1zk.js",revision:"307c5d63147494a01e41a4f95da69863"},{url:"assets/install.html-z8k5-qJK.js",revision:"68ac91d6cfe20e954a2204646b95d656"},{url:"assets/iselect-depcopy.html-JbcMWeI-.js",revision:"669cbe4496c5989fd70e497387493bfe"},{url:"assets/iselect-depcopy.html-xoFeIm5I.js",revision:"ba84e679ec8b456f5af8b701580a8941"},{url:"assets/issues-expression-groupbysum.html-BY4TDNCc.js",revision:"9d2f805aa764efae1b070c84b459ea4f"},{url:"assets/issues-expression-groupbysum.html-O03vedQ9.js",revision:"434097ca73aab769f1e00269190b3e3a"},{url:"assets/issues-in-valuetype.html-DfMBQQJd.js",revision:"e30f32b5afe9c69c2e1d28ac6c3cae49"},{url:"assets/issues-in-valuetype.html-VmPPtrOT.js",revision:"fc9ec052f1d5ca111b42c9dd69db5e10"},{url:"assets/issues-mysql5_5.html-73mTeTai.js",revision:"2525c9fba124a236b59031957b86a722"},{url:"assets/issues-mysql5_5.html-sUDPyZVo.js",revision:"52135951f2da5505757ce6b0e8fcb9b3"},{url:"assets/Lazy-Loading.html-5HdBvH5E.js",revision:"52f7bbd6a0da7d87db11f7f1616b63a6"},{url:"assets/Lazy-Loading.html-drpeo77d.js",revision:"043c2cb835587f50c97a8ee293297590"},{url:"assets/Linq-to-Sql.html-75XuHA6T.js",revision:"34d747cf05fccf5643e1e1d64fcaa9e8"},{url:"assets/linq-to-sql.html-EWw9_EmV.js",revision:"47db53281dd967a61ae0cbe40dd28c50"},{url:"assets/Linq-to-Sql.html-g8aqSl3D.js",revision:"61c9cc9570977899a41665788ff2ceec"},{url:"assets/linq-to-sql.html-rWPZYYWL.js",revision:"90ab9366a5d608999bfa17b2e90dba1a"},{url:"assets/more.html-R1MfLrKg.js",revision:"aa9e97ef607c407594e087cfed7696a1"},{url:"assets/more.html-wvC0o7QW.js",revision:"be4e16be606829bc87c904521d713af6"},{url:"assets/multi-tenancy.html-ENoR-7fn.js",revision:"b7b2183a89e018ad47b76c50d6862f99"},{url:"assets/multi-tenancy.html-P-z2FSXF.js",revision:"e87878f4cea7b6694d88f8df70274dad"},{url:"assets/navigate-attribute.html--dpCX1zx.js",revision:"423c1d3e34ca17785059d43a0ef8ec69"},{url:"assets/navigate-attribute.html-J7ydII0Y.js",revision:"964e2f58158e65bba7ee82c2249632de"},{url:"assets/otherworks.html-hnBiyKSO.js",revision:"25faf4424f642f8c6910f2634733f4f9"},{url:"assets/otherworks.html-VSKWrzS7.js",revision:"a5640cd1422237ddab405eab7cad4fab"},{url:"assets/Pagination.html-eqxYNuJP.js",revision:"3de154aaf8febe15ad2ef8136e9bfdc7"},{url:"assets/Pagination.html-KLXTG3k_.js",revision:"025841b8b8034b72ace665149aa7afc4"},{url:"assets/paging.html-Hve3K2UI.js",revision:"1e7f6a0640daa81283e7ef5e62a41173"},{url:"assets/paging.html-qMFtzt8O.js",revision:"3a1423ec149d2ae243ee5076305fb726"},{url:"assets/Parent-Child-Relationship-Query.html-mexD6YCF.js",revision:"845a42abf23dbf5557555d7806e6869c"},{url:"assets/Parent-Child-Relationship-Query.html-yhv_IeWa.js",revision:"999524d74847a93ab19ed9dc4be47ccc"},{url:"assets/performance.html-31rj4PjL.js",revision:"d3b0aaf24049b5ab18455a1487816b69"},{url:"assets/performance.html-z-EEKB8L.js",revision:"84a083aa968b09abc5006941388abc9b"},{url:"assets/photoswipe.esm-mC0Qcr12.js",revision:"3a72d9823ffa5943f03c5e884d0f66d8"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/Query-Data.html-nSshCmeW.js",revision:"36a3562cec95dfda51303e5e914ba149"},{url:"assets/Query-Data.html-Y2rL-vsT.js",revision:"5242d0a173698b2ce8bf3b2104430e98"},{url:"assets/Query-from-Multi-Table.html-aQ8G4GV5.js",revision:"9478229c33937db019bdbfde40a57951"},{url:"assets/Query-from-Multi-Table.html-bYsfnueX.js",revision:"2431deaf4c9ed7c841412bf78ec8d449"},{url:"assets/Query-from-Single-Table.html-ft2H7JEg.js",revision:"4664ce303b2a64bfd157fdafc6a6ae5f"},{url:"assets/Query-from-Single-Table.html-I1lsE4Fb.js",revision:"6e6add9a7f2fd5bc07a05629e10cf15b"},{url:"assets/read-write-splitting.html-kG_Ce6nn.js",revision:"f7bdcb4baca09855f334b832f3c3d972"},{url:"assets/read-write-splitting.html-KmujsUKm.js",revision:"158163be511d5a3e914a954bfbb043a3"},{url:"assets/Repository-Layer.html-OO6ntl_K.js",revision:"e016749167e09cb6295fefb62b595405"},{url:"assets/Repository-Layer.html-Xah0yErG.js",revision:"ad296102dbeec8e995816a410e23d165"},{url:"assets/repository.html-nJHo5A8z.js",revision:"629b77221d7f212bd73ff7a325685d97"},{url:"assets/repository.html-W0vvIAcB.js",revision:"f05f5fcbccc2be3e2af6be30f50bde63"},{url:"assets/Return-Data.html-qFqsuXC-.js",revision:"635be5fbaf8601551e1730e06ceb5b6d"},{url:"assets/Return-Data.html-WIAaSOfH.js",revision:"6932a3c2b52b316706099204d2010c75"},{url:"assets/select-as-tree.html-IdTuAoMc.js",revision:"de929b8b931e9e8d311b7f33125bbca6"},{url:"assets/select-as-tree.html-iMHbtBix.js",revision:"3effff14bdd1ed38be78340fa5b226da"},{url:"assets/select-group-by.html-7zwwP9Rb.js",revision:"c1afa407f18c0b31e95c15db4bf32214"},{url:"assets/select-group-by.html-SxuvO5bh.js",revision:"cebf820cd84dd3dfa749a949734d3e54"},{url:"assets/select-include.html-DbKH9zsQ.js",revision:"48a0065ee4a54daa8f4101fe803f3579"},{url:"assets/select-include.html-Wy7JSqAQ.js",revision:"906c1f31477ba532811d12735c9e1b78"},{url:"assets/select-lazy-loading.html-TaYteIjf.js",revision:"818e1e1fce2017ff25ecef322fd8d717"},{url:"assets/select-lazy-loading.html-U7X8zFdR.js",revision:"fb91d9dec5da28102cf0ae8214e5160f"},{url:"assets/select-multi-table.html-3ywtMrMe.js",revision:"684aca04225eed97b36c0c9825edebc7"},{url:"assets/select-multi-table.html-d6PecXFH.js",revision:"84c5382c8ffd4616b3feb7f3d8f6d753"},{url:"assets/select-return-data.html-3p3sT68i.js",revision:"1573a435cd0e4523cf23b967a66dd762"},{url:"assets/select-return-data.html-K_E7lehQ.js",revision:"cae778821180e4c71d1d4014715851cf"},{url:"assets/select-single-table.html-jCn548rO.js",revision:"a7cb7aaa5440ebc5ea21b97e0613f3f8"},{url:"assets/select-single-table.html-m2NvCNOu.js",revision:"43bd51b0b0aef624ee235ae8d3390418"},{url:"assets/select.html-07AlZXTj.js",revision:"e233b5c45e232e359f4a6bd1327d6eab"},{url:"assets/select.html-p8kdOh5k.js",revision:"f6b20b2e425c15007436b75f659cf343"},{url:"assets/service-support.html-MM1D0VM-.js",revision:"204def0d6191d6742675d52295c24275"},{url:"assets/service-support.html-VpLT9Wzr.js",revision:"2f595310f9f97758a06987860135c47e"},{url:"assets/sharding.html-9MIXr8jA.js",revision:"8ffd46db5866cca408607f6a34d90292"},{url:"assets/sharding.html-VOb7DAuq.js",revision:"35281f59296a12bf90437ae995b18238"},{url:"assets/style-JZOs4U_2.css",revision:"2bff9ccde0361a41b4a0e0cbfd43ac5a"},{url:"assets/style-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/transaction.html-78OuF8pe.js",revision:"12b6003d207d82512596022531d5f3bc"},{url:"assets/transaction.html-J4MX7jKK.js",revision:"dc7307c9826bcbd04d9ecf3526520920"},{url:"assets/type-mapping.html-PgIMPnFZ.js",revision:"37bb008934112bb7cd7725bec34079cf"},{url:"assets/type-mapping.html-rljrrRu7.js",revision:"ae90e096c7ac3938bb43c1b81d704baf"},{url:"assets/unionall.html-LEa1FKYP.js",revision:"68829cf59909263167dc17244319836d"},{url:"assets/unionall.html-Y_PxFgqx.js",revision:"dbcbfe1edb9bc96dfb4c74f1d41ffeb5"},{url:"assets/Unit-of-Work-Manager.html-__6Ew8z1.js",revision:"d6ee865db89bd8008babe00308ef5cbf"},{url:"assets/Unit-of-Work-Manager.html-CnmgO2Cu.js",revision:"76b1d2ac717eeee1c4c0f762a967b2b8"},{url:"assets/unit-of-work.html-i-XFe2sU.js",revision:"cc3dd0df4b65e727441d8d93776a02c0"},{url:"assets/Unit-of-Work.html-pKFdLbWp.js",revision:"61fe6eccabd8dfb39d9194fdd000dcea"},{url:"assets/Unit-of-Work.html-rgRzEV0U.js",revision:"ece6badea66a75efff60a8c0975f3a80"},{url:"assets/unit-of-work.html-uWL3-yKq.js",revision:"c268d861715322aced92d09e02c24d5d"},{url:"assets/unitofwork-manager.html-5fFisnFA.js",revision:"02da2dd0fb595febf2f4a3227ea30c12"},{url:"assets/unitofwork-manager.html-sDX5JrXY.js",revision:"0557033d22b0e5149e90497ea4a9d282"},{url:"assets/Update-Data.html-1N3G2Jro.js",revision:"18c11c0ae1ccb7d27abd7a8447243a05"},{url:"assets/Update-Data.html-JbGkToe0.js",revision:"9954b93acdc6ef86ee105819036cdd3a"},{url:"assets/update.html-3pXv-Tnd.js",revision:"4ec5c7e700216212dbbd20fc2a4dc701"},{url:"assets/update.html-D_Gr4GpS.js",revision:"8090810bcfb6cc4b2d2c58a9f32644a7"},{url:"assets/vs-dapper.html-Q_bXljvc.js",revision:"39a8b430a6000cacbaf9e9510182218c"},{url:"assets/vs-dapper.html-RtLf_ooD.js",revision:"9f56413a9c8f7b5f159ff3bc55cdd2c6"},{url:"assets/vs-entity-framework.html-BsPOn7hD.js",revision:"ce77e2df0fda1e0fc03c6f90bf4b0b71"},{url:"assets/vs-entity-framework.html-Y2rIhLBm.js",revision:"1d74f9501c147293f51ea5f4dddc5845"},{url:"assets/With-Sql.html-7H-cjMao.js",revision:"242bff1415ad1861d2f0f49f1592e01c"},{url:"assets/With-Sql.html-mm2HqNKB.js",revision:"6736d4a77795d528d7fcc4432ae9def5"},{url:"assets/withsql.html-kewaRxfI.js",revision:"220b40f44c12f983d316a5e6b4cc3df6"},{url:"assets/withsql.html-YTmIBwgm.js",revision:"e35e8a90745d3b94d2038d028398b5af"},{url:"assets/withtempquery.html-fePJnGz7.js",revision:"f037e20a624ea27e2e93c5b1ae9b0c90"},{url:"assets/withtempquery.html-lfMbAUJy.js",revision:"97fd6a18b022cddcfae4cc8d69eefe8e"},{url:"js/base.js",revision:"e0eaa312c6884ef5f8a21a0ecf300b49"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"index.html",revision:"5aaeb796f7498b39c1186697935adb65"},{url:"404.html",revision:"5132e42fb3a53f93b7e3c1ec4b828146"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
