var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","loadChildren":"./modules/home/home.module#HomeModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/home/home-routing.module.ts","module":"HomeRoutingModule","children":[{"path":"","component":"HomeComponent","children":[{"path":"","component":"DashboardComponent"},{"path":"post/:id","component":"PostComponent"},{"path":"create","component":"CreateUpdatePostComponent","data":{"action":"ACTION.CREATE.valueOf()"}},{"path":"update/:id","component":"CreateUpdatePostComponent","data":{"action":"ACTION.UPDATE.valueOf()"}},{"path":"trash","loadChildren":"../trash/trash.module#TrashModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/trash/trash-routing.module.ts","module":"TrashRoutingModule","children":[{"path":"","component":"TrashComponent","children":[{"path":"","pathMatch":"full","redirectTo":"post"},{"path":"post","component":"PostTrashComponent"},{"path":"comment","component":"CommentTrashComponent"}]}],"kind":"module"}],"module":"TrashModule"}]}]}],"kind":"module"}],"module":"HomeModule"}]}],"kind":"module"}]}
