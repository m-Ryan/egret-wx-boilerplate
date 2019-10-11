class Services {

   getUser() {
       return ApiRequest.get<IData>('http://www.maocanhua.cn/api/article/visitor/list?page=2&size=10&user_id=21')
   }

}

interface IData { list: IListItem[]; count: number; } interface IListItem { article_id: number; title: string; summary: string; picture: string; category_id: number; origin_source: string; readcount: number; user_id: number; secret: number; level: number; created_at: number; updated_at: number; deleted_at: number; tags: ITagsItem[]; category: ICategory; } interface ITagsItem { tag_id: number; name: string; picture: string; desc: string; created_at: number; user_id: number; updated_at: number; deleted_at: number; } interface ICategory { category_id: number; name: string; picture: string; desc: string; created_at: number; user_id: number; updated_at: number; deleted_at: number; } interface IHeader { Server: string; Date: string; 'Content-Type': string; 'Transfer-Encoding': string; Connection: string; 'Access-Control-Allow-Origin': string; 'Access-Control-Allow-Methods': string; 'Access-Control-Allow-Headers': string; 'Content-Encoding': string; }