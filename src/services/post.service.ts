import { Request, Response } from "express";
import { Post } from "../entities/post.entity";
import { User } from "../entities/User";

export const s_all_posts = async (req: Request, res: Response) => {
    const all_posts = await Post.find({ relations: [`user`] });
    res.json(all_posts);
};

export const s_get_post = async (req: Request, res: Response) => {
    const id:any=req.params.id;
    const single_post = await Post.findOne({ where:{id:id},relations:['user']});
    res.json(single_post);
};

export const s_add_post = async (req: Request, res: Response) => {
    const{title,content,user_id}=req.body;
    const user =await User.findOne({where:{id:user_id}});
    if(user){
        const post= Post.create({
            title:title,
            content:content
        });
        post.user=user;
        const x= post.save();
        return x;
    }
};

export const s_delete_post = async (req: Request, res: Response) => {
    const id:any=req.params.id;
    const post=await Post.findOne({where:{id:id}})
    if(post){
    await Post.remove(post);
    return true;}else{return false;}
    
};

export const s_update_post = async (req: Request, res: Response) => {
    const id: any = req.params.id;
    const { title, content } = req.body;
    const post = await Post.findOne({ where: { id: id } });
    if (post) {
        const updatedPost = await Post.save({
            id: id,
            title: title || post.title,
            content: content || post.content
        });
        res.json(updatedPost);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};

