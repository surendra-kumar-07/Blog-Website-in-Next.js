import envconf from "@/envconfig/envconf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class PostService {
  client = new Client();
  databases;
  queries;
  lastId = null;

  constructor() {
    this.client
      .setEndpoint(envconf.appwriteUrl)
      .setProject(envconf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  //  create post
  async createPost({title, slug, content, featuredImage, status}){
    try {
        return await this.databases.createDocument(
            envconf.appwriteDatabaseId,
            envconf.appwritePostCollectionId,
            slug,
            {title, content, featuredImage, status}
            )
    } catch (error) {
        console.log("create post ",error);
    }
  }

    //  update post
    async updatePost(slug,{title, date, content, featuredImage, status,}){
        try {
            return await this.databases.updateDocument(
                envconf.appwriteDatabaseId,
                envconf.appwritePostCollectionId,
                slug,
                {title, date, content, featuredImage, status,}
            )
        } catch (error) {
            console.log("update post ",error);
        }
    }

    //    Delete Post
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                envconf.appwriteDatabaseId,
                envconf.appwritePostCollectionId,
            slug
            )
            return true
        } catch (error) {
            console.log("Delete Post ", error);
            return false
        }
    }

    // Get a post
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                envconf.appwriteDatabaseId,
                envconf.appwritePostCollectionId,
                slug
            )
        } catch (error) {
            console.log("get a post ",error);
        }
    }

    // Get posts
    async getPosts(admin = false){
        if(this.lastId && admin){
            this.queries = [
                Query.limit(8),
                Query.cursorAfter(this.lastId)
            ]
        }else if(!admin && !(this.lastId)){
            this.queries = [
                Query.limit(8),
                Query.equal("status", "active")
            ]
        }else if(!(this.lastId) && admin){
            this.queries = [
                Query.limit(10),
            ]
        }else if(this.lastId && !admin){
            this.queries = [
                Query.limit(8),
                Query.cursorAfter(this.lastId),
                Query.equal("status", "active")
            ]

        }
        try {
           let list = await this.databases.listDocuments(
            envconf.appwriteDatabaseId,
            envconf.appwritePostCollectionId,
                this.queries
            );
            this.lastId = list.documents[list.documents.length - 1].$id;
            return list
        } catch (error) {
            console.log("getPosts", error);
        }
    }


}

const postService = new PostService();
export default postService;
