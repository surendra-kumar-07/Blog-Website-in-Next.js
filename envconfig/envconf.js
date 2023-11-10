const envconf = {
    appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
    appwritePostCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_POSTS_COLLECTION_ID),
    appwriteHomeCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_HOMEPOSTS_COLLECTION_ID),
    appwriteBuckId: String(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID)
}


export default envconf